import { useState } from 'react';
import type { Transiciones } from '../types';

function TransicionCard({ nombre, instrucciones, consejo, direction, onNameClick }: {
  nombre: string; instrucciones: string[]; consejo: string;
  direction: 'in' | 'out'; onNameClick: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: 8, marginBottom: 8, overflow: 'hidden' }}>
      <div onClick={() => setOpen(!open)} style={{
        padding: '10px 14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
        background: open ? '#f5f5f5' : '#fff',
      }}>
        <span style={{ fontSize: 16 }}>{direction === 'in' ? '←' : '→'}</span>
        <span onClick={(e) => { e.stopPropagation(); onNameClick(); }}
          style={{ color: '#1976D2', cursor: 'pointer', fontWeight: 500, fontSize: 14 }}>
          {nombre}
        </span>
        <span style={{ marginLeft: 'auto', fontSize: 12, color: '#999' }}>{open ? '▲' : '▼'}</span>
      </div>
      {open && (
        <div style={{ padding: '0 14px 14px' }}>
          <ol style={{ margin: '8px 0', paddingLeft: 20, fontSize: 13, lineHeight: 1.8, color: '#444' }}>
            {instrucciones.map((inst, i) => <li key={i}>{inst}</li>)}
          </ol>
          <div style={{
            background: '#FFF8E1', padding: '8px 12px', borderRadius: 6,
            fontSize: 13, color: '#795548', display: 'flex', gap: 6, alignItems: 'flex-start',
          }}>
            <span>⚠</span>
            <span>{consejo}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function TransicionesPanel({ transiciones, onAsanaClick }: {
  transiciones: Transiciones; onAsanaClick: (id: string) => void;
}) {
  return (
    <div>
      {transiciones.entrar_desde.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <h4 style={{ color: '#6B4EAA', margin: '0 0 10px', fontSize: 15 }}>Entrar desde...</h4>
          {transiciones.entrar_desde.map((t, i) => (
            <TransicionCard key={i} nombre={t.nombre} instrucciones={t.instrucciones_transicion}
              consejo={t.consejos_seguridad} direction="in"
              onNameClick={() => onAsanaClick(t.postura_origen_id)} />
          ))}
        </div>
      )}
      {transiciones.salir_hacia.length > 0 && (
        <div>
          <h4 style={{ color: '#6B4EAA', margin: '0 0 10px', fontSize: 15 }}>Salir hacia...</h4>
          {transiciones.salir_hacia.map((t, i) => (
            <TransicionCard key={i} nombre={t.nombre} instrucciones={t.instrucciones_transicion}
              consejo={t.consejos_seguridad} direction="out"
              onNameClick={() => onAsanaClick(t.postura_destino_id)} />
          ))}
        </div>
      )}
    </div>
  );
}
