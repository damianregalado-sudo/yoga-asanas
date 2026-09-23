import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { asanas } from '../data/asanas';
import { evaluarRiesgo } from '../utils/riesgo';
import type { CondicionSalud } from '../types';

const CASOS: { condicion: CondicionSalud; label: string; emoji: string; descripcion: string }[] = [
  { condicion: 'embarazo', label: 'Embarazada', emoji: '🤰', descripcion: 'Alumna en gestación — evitar inversiones, presión abdominal y posturas boca abajo' },
  { condicion: 'hernias_discales', label: 'Hernias discales', emoji: '🦴', descripcion: 'Problemas en discos intervertebrales — evitar flexiones profundas y extensiones forzadas' },
  { condicion: 'hipertension_arterial', label: 'Hipertensión', emoji: '❤️', descripcion: 'Presión arterial alta — evitar inversiones y posturas con cabeza debajo del corazón' },
  { condicion: 'problemas_rodilla', label: 'Lesión de rodilla', emoji: '🦵', descripcion: 'Lesiones o dolor articular — evitar flexiones profundas de rodilla y cargas laterales' },
  { condicion: 'problemas_muneca', label: 'Lesión de muñeca', emoji: '🤚', descripcion: 'Dolor o fragilidad — evitar carga de peso en manos y extensiones de muñeca' },
  { condicion: 'glaucoma', label: 'Glaucoma', emoji: '👁️', descripcion: 'Aumento de presión intraocular — evitar inversiones y cabeza abajo' },
  { condicion: 'hipotension', label: 'Hipotensión', emoji: '💫', descripcion: 'Presión arterial baja — cuidado con cambios rápidos de posición' },
  { condicion: 'vertigo', label: 'Vértigo', emoji: '🌀', descripcion: 'Mareos posicionales — evitar equilibrios complejos y transiciones rápidas' },
  { condicion: 'reemplazos_articulares', label: 'Reemplazos articulares', emoji: '🔧', descripcion: 'Prótesis de cadera/rodilla — evitar rangos extremos y cargas asimétricas' },
];

export function RecomendacionesPage() {
  const navigate = useNavigate();
  const [seleccion, setSeleccion] = useState<CondicionSalud[]>([]);

  const toggle = (c: CondicionSalud) => {
    setSeleccion(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  const resultados = useMemo(() => {
    if (seleccion.length === 0) return null;
    const perfil = { condiciones_activas: seleccion };

    const clasificadas = asanas.map(asana => {
      const resultado = evaluarRiesgo(asana, perfil);
      return { asana, resultado };
    });

    const seguras = clasificadas.filter(r => r.resultado.estado === 'verde');
    const precaucion = clasificadas.filter(r => r.resultado.estado === 'amarillo');
    const contraindicadas = clasificadas.filter(r => r.resultado.estado === 'rojo');

    return { seguras, precaucion, contraindicadas };
  }, [seleccion]);

  return (
    <div style={{ minHeight: '100vh' }}>
      <header style={{
        background: '#6B4EAA', color: '#fff', padding: '20px 16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Guía para Instructores</h1>
          <p style={{ margin: '4px 0 0', fontSize: 14, opacity: 0.85 }}>Recomendaciones por caso de alumno</p>
        </div>
        <button onClick={() => navigate('/')} style={{
          background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)',
          color: '#fff', padding: '8px 16px', borderRadius: 8, cursor: 'pointer', fontSize: 14,
        }}>
          ← Catálogo
        </button>
      </header>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{
          background: '#F9F7FD', border: '1px solid #E8E0F0', borderRadius: 12, padding: 20, marginBottom: 24,
        }}>
          <h2 style={{ margin: '0 0 8px', fontSize: 18, color: '#4A3380' }}>
            ¿Qué condiciones tiene tu alumno/a?
          </h2>
          <p style={{ margin: '0 0 16px', fontSize: 14, color: '#666' }}>
            Seleccioná una o más condiciones para ver qué posturas son seguras, cuáles requieren modificaciones y cuáles evitar.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {CASOS.map(caso => {
              const activo = seleccion.includes(caso.condicion);
              return (
                <button key={caso.condicion} onClick={() => toggle(caso.condicion)} style={{
                  padding: '10px 16px', borderRadius: 10, fontSize: 14, cursor: 'pointer',
                  transition: 'all 0.2s', border: activo ? '2px solid #6B4EAA' : '2px solid #ddd',
                  background: activo ? '#E8E0F0' : '#fff', color: activo ? '#4A3380' : '#555',
                  fontWeight: activo ? 600 : 400,
                }}>
                  {caso.emoji} {caso.label}
                </button>
              );
            })}
          </div>
        </div>

        {seleccion.length > 0 && (
          <div style={{
            background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: 20, marginBottom: 24,
          }}>
            <h3 style={{ margin: '0 0 12px', fontSize: 16, color: '#333' }}>Condiciones seleccionadas</h3>
            {CASOS.filter(c => seleccion.includes(c.condicion)).map(caso => (
              <div key={caso.condicion} style={{
                padding: '8px 12px', background: '#FFF8E1', borderRadius: 8, marginBottom: 8,
                fontSize: 14, color: '#795548', display: 'flex', gap: 8, alignItems: 'flex-start',
              }}>
                <span>{caso.emoji}</span>
                <div>
                  <strong>{caso.label}:</strong> {caso.descripcion}
                </div>
              </div>
            ))}
          </div>
        )}

        {resultados && (
          <>
            <Section
              titulo="Posturas Seguras"
              subtitulo="Podés incluir estas en la clase sin modificaciones"
              color="#4CAF50"
              items={resultados.seguras}
              navigate={navigate}
            />
            <Section
              titulo="Posturas con Precaución"
              subtitulo="Se pueden hacer con las modificaciones indicadas"
              color="#FF9800"
              items={resultados.precaucion}
              navigate={navigate}
            />
            <Section
              titulo="Posturas Contraindicadas"
              subtitulo="Evitar completamente en este caso"
              color="#F44336"
              items={resultados.contraindicadas}
              navigate={navigate}
            />
          </>
        )}

        {!resultados && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
            <p style={{ fontSize: 40, marginBottom: 16 }}>🧘</p>
            <p style={{ fontSize: 16 }}>Seleccioná al menos una condición para ver las recomendaciones.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ titulo, subtitulo, color, items, navigate }: {
  titulo: string; subtitulo: string; color: string;
  items: { asana: any; resultado: any }[];
  navigate: (path: string) => void;
}) {
  if (items.length === 0) return null;

  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <span style={{
          width: 14, height: 14, borderRadius: '50%', background: color, display: 'inline-block',
        }} />
        <h3 style={{ margin: 0, fontSize: 18, color: '#333' }}>{titulo}</h3>
        <span style={{
          background: color + '22', color, fontSize: 13, padding: '2px 10px',
          borderRadius: 12, fontWeight: 600,
        }}>
          {items.length}
        </span>
      </div>
      <p style={{ margin: '0 0 12px', fontSize: 14, color: '#666' }}>{subtitulo}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(({ asana, resultado }) => (
          <div key={asana.id} onClick={() => navigate(`/asana/${asana.id}`)} style={{
            background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10,
            padding: '14px 18px', cursor: 'pointer', transition: 'box-shadow 0.2s',
            borderLeft: `4px solid ${color}`,
          }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)')}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: 16, color: '#333' }}>{asana.nombre_sanscrito}</strong>
                <span style={{ color: '#888', fontSize: 14, marginLeft: 8 }}>{asana.nombre_espanol}</span>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{
                  background: '#F3E8FF', color: '#6B4EAA', padding: '2px 10px',
                  borderRadius: 12, fontSize: 12,
                }}>
                  {asana.familia_biomecanica.replace(/_/g, ' ')}
                </span>
                <span style={{
                  border: '1px solid #ddd', padding: '2px 10px',
                  borderRadius: 12, fontSize: 12, color: '#666',
                }}>
                  {asana.nivel_dificultad}
                </span>
              </div>
            </div>

            {resultado.condiciones_detectadas.length > 0 && (
              <div style={{ marginTop: 10 }}>
                {resultado.condiciones_detectadas.map((c: any, i: number) => (
                  <div key={i} style={{ fontSize: 13, color: '#555', marginBottom: 6 }}>
                    <strong style={{ color }}>{c.condicion.replace(/_/g, ' ')}:</strong> {c.explicacion}
                    {c.modificaciones.length > 0 && (
                      <div style={{ marginTop: 4, paddingLeft: 12, color: '#4A7C59', fontSize: 12 }}>
                        {c.modificaciones.map((m: string, j: number) => (
                          <div key={j}>→ {m}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
