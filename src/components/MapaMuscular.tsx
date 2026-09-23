import { useState } from 'react';
import type { TrabajoMuscular, MusculoEntry } from '../types';

const CONTRACCION_ICON: Record<string, string> = {
  concentrica: '>>>',  isometrica: '|||', excentrica: '<<<',
};

function MuscleGroup({ title, muscles, color }: { title: string; muscles: MusculoEntry[]; color: string }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  if (!muscles.length) return null;
  return (
    <div style={{ marginBottom: 16 }}>
      <h4 style={{ color, margin: '0 0 8px', fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 }}>{title}</h4>
      {muscles.map((m) => (
        <div key={m.musculo_id} style={{
          padding: '8px 12px', marginBottom: 4, borderRadius: 8,
          background: expanded === m.musculo_id ? `${color}15` : '#f9f9f9',
          borderLeft: `3px solid ${color}`, cursor: 'pointer',
        }} onClick={() => setExpanded(expanded === m.musculo_id ? null : m.musculo_id)}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 500, fontSize: 14 }}>{m.musculo}</span>
            <span style={{ fontFamily: 'monospace', fontSize: 12, color, fontWeight: 700 }}>
              {CONTRACCION_ICON[m.tipo_contraccion]} {m.tipo_contraccion}
            </span>
          </div>
          {expanded === m.musculo_id && (
            <p style={{ margin: '8px 0 0', fontSize: 13, color: '#555', lineHeight: 1.5 }}>{m.explicacion}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function MapaMuscular({ trabajoMuscular }: { trabajoMuscular: TrabajoMuscular }) {
  return (
    <div>
      <MuscleGroup title="Motores primarios (agonistas)" muscles={trabajoMuscular.agonistas} color="#E53935" />
      <MuscleGroup title="Sinérgicos y estabilizadores" muscles={trabajoMuscular.sinergicos} color="#FB8C00" />
      <MuscleGroup title="Antagonistas elongados" muscles={trabajoMuscular.antagonistas_elongados} color="#1E88E5" />
      <div style={{ display: 'flex', gap: 16, marginTop: 16, flexWrap: 'wrap', fontSize: 12, color: '#666' }}>
        <span>{'>>>'} Concéntrica</span>
        <span>||| Isométrica</span>
        <span>{'<<<'} Excéntrica</span>
      </div>
    </div>
  );
}
