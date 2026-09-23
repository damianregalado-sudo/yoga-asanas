import type { CondicionSalud, FamiliaBiomecanica, NivelDificultad } from '../types';

export type FiltrosState = {
  busqueda: string;
  familia: string | null;
  nivel: string | null;
  grupoMuscular: string | null;
  condicionesEvitar: string[];
};

const FAMILIAS: FamiliaBiomecanica[] = ['bipedestacion','torsion','inversion','flexion_anterior','extension_posterior','equilibrio','restaurativa','sentada'];
const NIVELES: NivelDificultad[] = ['principiante','intermedio','avanzado'];
const MUSCULOS = ['cuadriceps','isquiotibiales','gluteos','deltoides','erector_spinae','transversus_abdominis','pectorales','dorsal_ancho'];
const CONDICIONES: CondicionSalud[] = ['hipertension_arterial','glaucoma','hernias_discales','problemas_rodilla','problemas_muneca','embarazo','hipotension','vertigo','reemplazos_articulares'];

export function FiltrosAsana({ filtros, onChange }: { filtros: FiltrosState; onChange: (f: FiltrosState) => void }) {
  const set = (partial: Partial<FiltrosState>) => onChange({ ...filtros, ...partial });

  return (
    <div style={{ marginBottom: 24 }}>
      <input
        value={filtros.busqueda}
        onChange={(e) => set({ busqueda: e.target.value })}
        placeholder="Buscar por nombre..."
        style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #ddd', fontSize: 15, marginBottom: 12, boxSizing: 'border-box' }}
      />
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
        {FAMILIAS.map((f) => (
          <button key={f} onClick={() => set({ familia: filtros.familia === f ? null : f })}
            style={{
              padding: '4px 12px', borderRadius: 16, border: 'none', fontSize: 12, cursor: 'pointer',
              background: filtros.familia === f ? '#6B4EAA' : '#E8E0F0',
              color: filtros.familia === f ? '#fff' : '#6B4EAA', fontWeight: 500,
            }}>
            {f.replace(/_/g, ' ')}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <select value={filtros.nivel || ''} onChange={(e) => set({ nivel: e.target.value || null })}
          style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #ddd', fontSize: 13 }}>
          <option value="">Todos los niveles</option>
          {NIVELES.map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
        <select value={filtros.grupoMuscular || ''} onChange={(e) => set({ grupoMuscular: e.target.value || null })}
          style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #ddd', fontSize: 13 }}>
          <option value="">Todos los músculos</option>
          {MUSCULOS.map((m) => <option key={m} value={m}>{m.replace(/_/g, ' ')}</option>)}
        </select>
        <button onClick={() => onChange({ busqueda: '', familia: null, nivel: null, grupoMuscular: null, condicionesEvitar: [] })}
          style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid #ccc', background: '#fff', fontSize: 13, cursor: 'pointer' }}>
          Limpiar
        </button>
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {CONDICIONES.map((c) => {
          const active = filtros.condicionesEvitar.includes(c);
          return (
            <button key={c} onClick={() => set({
              condicionesEvitar: active
                ? filtros.condicionesEvitar.filter((x) => x !== c)
                : [...filtros.condicionesEvitar, c],
            })} style={{
              padding: '3px 10px', borderRadius: 12, fontSize: 11, cursor: 'pointer',
              border: active ? '1px solid #F44336' : '1px solid #ddd',
              background: active ? '#FFEBEE' : '#fff', color: active ? '#F44336' : '#666',
            }}>
              Evitar: {c.replace(/_/g, ' ')}
            </button>
          );
        })}
      </div>
    </div>
  );
}
