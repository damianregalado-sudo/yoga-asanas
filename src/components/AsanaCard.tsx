import { useState } from 'react';
import type { Asana, SemaforoEstado } from '../types';

const SEMAFORO_COLORS: Record<SemaforoEstado, string> = {
  verde: '#4CAF50', amarillo: '#FF9800', rojo: '#F44336',
};
const SEMAFORO_LABELS: Record<SemaforoEstado, string> = {
  verde: 'Segura', amarillo: 'Precaución', rojo: 'Contraindicada',
};

export function AsanaCard({ asana, semaforoEstado, onClick }: {
  asana: Asana; semaforoEstado: SemaforoEstado; onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.08)',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.2s ease', background: '#fff',
      }}
    >
      <div style={{
        height: 180, background: 'linear-gradient(135deg, #6B4EAA 0%, #9B7ED8 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
      }}>
        <span style={{ color: '#fff', fontSize: 22, fontFamily: 'Georgia, serif', textAlign: 'center' }}>
          {asana.nombre_sanscrito}
        </span>
      </div>
      <div style={{ padding: 16 }}>
        <h3 style={{ margin: 0, fontSize: 18, color: '#333', fontWeight: 600 }}>{asana.nombre_espanol}</h3>
        <small style={{ color: '#888' }}>{asana.nombre_ingles}</small>
        <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{
            background: '#E8E0F0', color: '#6B4EAA', padding: '2px 10px',
            borderRadius: 12, fontSize: 12, fontWeight: 500,
          }}>
            {asana.familia_biomecanica.replace(/_/g, ' ')}
          </span>
          <span style={{
            border: '1px solid #ccc', padding: '2px 10px',
            borderRadius: 12, fontSize: 12, color: '#666',
          }}>
            {asana.nivel_dificultad}
          </span>
          <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, fontSize: 12 }}>
            <span style={{
              width: 12, height: 12, borderRadius: '50%', display: 'inline-block',
              background: SEMAFORO_COLORS[semaforoEstado],
            }} />
            {SEMAFORO_LABELS[semaforoEstado]}
          </span>
        </div>
      </div>
    </div>
  );
}
