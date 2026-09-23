import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { asanas } from '../data/asanas';
import type { Asana } from '../types';
import { evaluarRiesgo } from '../utils/riesgo';
import { usePerfilSalud } from '../hooks/usePerfilSalud';
import { SemaforoRiesgo } from '../components/SemaforoRiesgo';
import { MapaMuscular } from '../components/MapaMuscular';
import { TransicionesPanel } from '../components/TransicionesPanel';

type Tab = 'Mapa Muscular' | 'Seguridad' | 'Transiciones';

export function AsanaDetallePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { condiciones } = usePerfilSalud();
  const [tabActiva, setTabActiva] = useState<Tab>('Mapa Muscular');

  const asana = useMemo(() => {
    return asanas.find((a: Asana) => String(a.id) === String(id));
  }, [id]);

  if (!asana) {
    return (
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '40px 20px',
          textAlign: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <h2 style={{ color: '#333', marginBottom: '16px' }}>Asana no encontrada</h2>
        <p style={{ color: '#666', marginBottom: '24px' }}>
          La postura que estás buscando no existe en la base de datos.
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6B4EAA',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            cursor: 'pointer',
            fontWeight: 500,
          }}
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  const tabs: Tab[] = ['Mapa Muscular', 'Seguridad', 'Transiciones'];
  const resultadoRiesgo = evaluarRiesgo(asana, { condiciones_activas: condiciones });

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '24px 16px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#2D3748',
        backgroundColor: '#FAFAFD',
        minHeight: '100vh',
      }}
    >
      {/* Botón Volver */}
      <button
        onClick={() => navigate(-1)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'none',
          border: 'none',
          color: '#6B4EAA',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          padding: '6px 0',
          marginBottom: '16px',
        }}
      >
        ← Volver
      </button>

      {/* Header Principal */}
      <header
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 2px 10px rgba(107, 78, 170, 0.08)',
          marginBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <span
            style={{
              backgroundColor: '#F3E8FF',
              color: '#6B4EAA',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'capitalize',
            }}
          >
            {asana.familia_biomecanica.replace(/_/g, ' ')}
          </span>
          <span
            style={{
              backgroundColor: '#EDE9FE',
              color: '#5B21B6',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'capitalize',
            }}
          >
            {asana.nivel_dificultad}
          </span>
        </div>

        <h1
          style={{
            fontSize: '32px',
            fontWeight: 800,
            color: '#1A202C',
            margin: '0 0 6px 0',
          }}
        >
          {asana.nombre_sanscrito}
        </h1>

        <div style={{ fontSize: '16px', color: '#718096', marginBottom: '16px' }}>
          <strong style={{ color: '#4A5568' }}>{asana.nombre_espanol}</strong>
          {asana.nombre_ingles && <span> · <em>{asana.nombre_ingles}</em></span>}
        </div>

        {asana.descripcion && (
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.6',
              color: '#4A5568',
              margin: '0 0 20px 0',
            }}
          >
            {asana.descripcion}
          </p>
        )}

        {/* Puntos de Alineación */}
        {asana.alineacion.puntos_clave.length > 0 && (
          <div
            style={{
              backgroundColor: '#F9F7FD',
              borderLeft: '4px solid #6B4EAA',
              padding: '14px 16px',
              borderRadius: '0 8px 8px 0',
              marginBottom: '16px',
            }}
          >
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#6B4EAA',
                margin: '0 0 8px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Puntos Clave de Alineación
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#4A5568', fontSize: '14px' }}>
              {asana.alineacion.puntos_clave.map((punto, idx) => (
                <li key={idx} style={{ marginBottom: '4px' }}>
                  {punto}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Duración por nivel */}
        <div style={{ marginTop: '16px' }}>
          <h4
            style={{
              fontSize: '13px',
              color: '#718096',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Duración Recomendada (respiraciones)
          </h4>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {Object.entries(asana.duracion_sugerida_respiraciones).map(([nivel, duracion]) => (
              <div
                key={nivel}
                style={{
                  backgroundColor: '#F7FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontSize: '13px',
                }}
              >
                <span style={{ color: '#718096', textTransform: 'capitalize' }}>{nivel}: </span>
                <strong style={{ color: '#2D3748' }}>{String(duracion)}</strong>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          borderBottom: '2px solid #E2E8F0',
          marginBottom: '20px',
          gap: '8px',
        }}
      >
        {tabs.map((tab) => {
          const isActiva = tabActiva === tab;
          return (
            <button
              key={tab}
              onClick={() => setTabActiva(tab)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: isActiva ? '3px solid #6B4EAA' : '3px solid transparent',
                padding: '12px 16px',
                fontSize: '15px',
                fontWeight: isActiva ? 700 : 500,
                color: isActiva ? '#6B4EAA' : '#718096',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginBottom: '-2px',
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 2px 10px rgba(107, 78, 170, 0.08)',
        }}
      >
        {tabActiva === 'Mapa Muscular' && (
          <MapaMuscular trabajoMuscular={asana.trabajo_muscular} />
        )}

        {tabActiva === 'Seguridad' && (
          <SemaforoRiesgo
            resultado={resultadoRiesgo}
            onAlternativaClick={(altId) => navigate('/asana/' + altId)}
          />
        )}

        {tabActiva === 'Transiciones' && (
          <TransicionesPanel
            transiciones={asana.transiciones_sugeridas}
            onAsanaClick={(transId: string | number) => navigate('/asana/' + transId)}
          />
        )}
      </div>
    </div>
  );
};

export default AsanaDetallePage;

