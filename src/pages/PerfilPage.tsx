import { useNavigate } from 'react-router-dom';
import { PerfilSaludEditor } from '../components/PerfilSaludEditor';
import { usePerfilSalud } from '../hooks/usePerfilSalud';

export function PerfilPage() {
  const navigate = useNavigate();
  const { condiciones, setCondiciones } = usePerfilSalud();

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px 16px' }}>
      <button
        onClick={() => navigate(-1)}
        style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', marginBottom: 16, color: '#6B4EAA' }}
      >
        ← Volver
      </button>
      <PerfilSaludEditor condiciones={condiciones} onChange={setCondiciones} />
    </div>
  );
}
