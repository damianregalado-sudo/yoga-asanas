import React from 'react';

interface Props {
    condiciones: string[];
    onChange: (c: string[]) => void;
}

const CONDITIONS: Record<string, string> = {
    hipertension_arterial: 'Hipertensión ❤️',
    glaucoma: 'Glaucoma 👁️',
    hernias_discales: 'Hernias 🦴',
    problemas_rodilla: 'Rodilla 🦵',
    problemas_muneca: 'Muñeca 🤚',
    embarazo: 'Embarazo 🤰',
    hipotension: 'Hipotensión 💫',
    vertigo: 'Vértigo 🌀',
    reemplazos_articulares: 'Reemplazos 🔧',
};

export function PerfilSaludEditor({ condiciones, onChange }: Props) {
    const handleToggle = (key: string) => {
        const next = condiciones.includes(key)
            ? condiciones.filter((c) => c !== key)
            : [...condiciones, key];
        onChange(next);
    };

    return (
        <div style={{ padding: 24, fontFamily: 'sans-serif', color: '#333333' }}>
            <h2
                style={{
                    margin: '0 0 16px 0',
                    fontSize: '20px',
                    fontWeight: '600',
                }}
            >
                Mi perfil de salud
            </h2>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '8px',
                }}
            >
                {Object.entries(CONDITIONS).map(([key, label]) => {
                    const active = condiciones.includes(key);
                    return (
                        <button
                            key={key}
                            type="button"
                            onClick={() => handleToggle(key)}
                            aria-pressed={active}
                            style={{
                                padding: '14px 16px',
                                borderRadius: '12px',
                                textAlign: 'center',
                                fontSize: '15px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                background: active ? '#E8E0F0' : '#F5F5F5',
                                border: active ? '2px solid #6B4EAA' : '2px solid transparent',
                                color: active ? '#4A3380' : '#666666',
                                fontWeight: active ? '600' : '400',
                            }}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

