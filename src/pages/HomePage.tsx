import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { asanas } from '../data/asanas';
import { evaluarRiesgo } from '../utils/riesgo';
import { usePerfilSalud } from '../hooks/usePerfilSalud';
import { AsanaCard } from '../components/AsanaCard';
import { FiltrosAsana } from '../components/FiltrosAsana';
import type { FiltrosState } from '../components/FiltrosAsana';

export function HomePage() {
  const navigate = useNavigate();
  const { condiciones } = usePerfilSalud();
  const [filtros, setFiltros] = useState<FiltrosState>({
    busqueda: '', familia: null, nivel: null, grupoMuscular: null, condicionesEvitar: [],
  });

  const asanasFiltradas = useMemo(() => {
    return asanas.filter((asana) => {
      if (filtros.busqueda.trim()) {
        const q = filtros.busqueda.toLowerCase();
        if (![asana.nombre_sanscrito, asana.nombre_espanol, asana.nombre_ingles]
          .some(n => n.toLowerCase().includes(q))) return false;
      }
      if (filtros.familia && asana.familia_biomecanica !== filtros.familia) return false;
      if (filtros.nivel && asana.nivel_dificultad !== filtros.nivel) return false;
      if (filtros.grupoMuscular) {
        const todos = [...asana.trabajo_muscular.agonistas, ...asana.trabajo_muscular.sinergicos];
        if (!todos.some(m => m.musculo_id === filtros.grupoMuscular)) return false;
      }
      if (filtros.condicionesEvitar.length > 0) {
        for (const c of asana.contraindicaciones) {
          if (filtros.condicionesEvitar.includes(c.condicion) && c.riesgo === 'alto') return false;
        }
      }
      return true;
    });
  }, [filtros]);

  return (
    <div style={{ minHeight: '100vh' }}>
      <header style={{
        background: '#6B4EAA', color: '#fff', padding: '20px 16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700 }}>Yoga Asanas</h1>
          <p style={{ margin: '4px 0 0', fontSize: 14, opacity: 0.85 }}>Guía biomecánica interactiva</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => navigate('/recomendaciones')} style={{
            background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)',
            color: '#fff', padding: '8px 16px', borderRadius: 8, cursor: 'pointer', fontSize: 14,
          }}>
            Guía Instructor
          </button>
          <button onClick={() => navigate('/perfil')} style={{
            background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)',
            color: '#fff', padding: '8px 16px', borderRadius: 8, cursor: 'pointer', fontSize: 14,
          }}>
            Mi Perfil
          </button>
        </div>
      </header>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
        <FiltrosAsana filtros={filtros} onChange={setFiltros} />
        <p style={{ color: '#888', fontSize: 13, marginBottom: 16 }}>
          {asanasFiltradas.length} posturas encontradas
        </p>
        {asanasFiltradas.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 48, color: '#888' }}>
            No se encontraron asanas con estos filtros.
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {asanasFiltradas.map((asana) => {
              const sem = evaluarRiesgo(asana, { condiciones_activas: condiciones });
              return (
                <AsanaCard
                  key={asana.id}
                  asana={asana}
                  semaforoEstado={sem.estado}
                  onClick={() => navigate(`/asana/${asana.id}`)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
