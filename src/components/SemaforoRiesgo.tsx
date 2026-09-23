import React from 'react';
import type { ResultadoSemaforo } from '../types';

type SemaforoRiesgoProps = {
  resultado: ResultadoSemaforo;
  onAlternativaClick?: (asanaId: string) => void;
};

const COLORS = {
  verde: '#4CAF50',
  amarillo: '#FF9800',
  rojo: '#F44336',
};

const BACKGROUNDS = {
  verde: '#E8F5E9',
  amarillo: '#FFF3E0',
  rojo: '#FFEBEE',
};

const ICONS = {
  verde: '✓',
  amarillo: '⚠',
  rojo: '✕',
};

export const SemaforoRiesgo: React.FC<SemaforoRiesgoProps> = ({
  resultado,
  onAlternativaClick,
}) => {
  const { estado, condiciones_detectadas, alternativas_sugeridas } = resultado;

  const cardStyle: React.CSSProperties = {
    borderLeft: `4px solid ${COLORS[estado]}`,
    backgroundColor: BACKGROUNDS[estado],
    padding: '16px',
    borderRadius: '4px',
    margin: '12px 0',
    fontFamily: 'Arial, sans-serif',
    color: '#212121',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '24px',
    marginRight: '8px',
    color: COLORS[estado],
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
  };

  const listStyle: React.CSSProperties = {
    paddingLeft: '20px',
    marginTop: '8px',
  };

  const buttonStyle: React.CSSProperties = {
    background: 'none',
    border: `1px solid ${COLORS[estado]}`,
    color: COLORS[estado],
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '8px',
  };

  const handleClick = (asanaId: string) => {
    if (onAlternativaClick) {
      onAlternativaClick(asanaId);
    }
  };

  const renderContent = () => {
    switch (estado) {
      case 'verde':
        return (
          <p aria-live="polite">
            Postura segura para tu perfil
          </p>
        );
      case 'amarillo':
        return (
          <>
            <p aria-live="polite">
              Practicar con precaución
            </p>
            <ul style={listStyle} aria-label="Condiciones detectadas">
              {condiciones_detectadas.map((c, idx) => (
                <li key={idx}>
                  <strong>{c.condicion}</strong> – Riesgo: {c.riesgo}
                  <br />
                  <em>{c.explicacion}</em>
                  {c.modificaciones.length > 0 && (
                    <ul style={{ ...listStyle, marginTop: '4px' }}>
                      {c.modificaciones.map((mod, i) => (
                        <li key={i}>{mod}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </>
        );
      case 'rojo':
        return (
          <>
            <p aria-live="assertive">
              Postura contraindicada
            </p>
            {alternativas_sugeridas.length > 0 && (
              <div>
                <p>Sugerencias de alternativas seguras:</p>
                <ul style={listStyle} aria-label="Alternativas sugeridas">
                  {alternativas_sugeridas.map((a) => (
                    <li key={a.asana_id}>
                      <strong>{a.nombre}</strong> – {a.razon}
                      <br />
                      <button
                        type="button"
                        style={buttonStyle}
                        onClick={() => handleClick(a.asana_id)}
                        aria-label={`Seleccionar alternativa ${a.nombre}`}
                      >
                        Ver alternativa
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section
      style={cardStyle}
      role="region"
      aria-label={`Estado de riesgo: ${estado}`}
    >
      <header style={headerStyle}>
        <span style={iconStyle} aria-hidden="true">
          {ICONS[estado]}
        </span>
        <h2 style={titleStyle}>
          {estado === 'verde' && 'Seguro'}
          {estado === 'amarillo' && 'Precaución'}
          {estado === 'rojo' && 'Contraindicado'}
        </h2>
      </header>
      {renderContent()}
    </section>
  );
};

