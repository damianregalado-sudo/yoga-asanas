import { useState, useEffect } from 'react';
import type { CondicionSalud } from '../types';

const STORAGE_KEY = 'yoga_perfil_salud';

export function usePerfilSalud() {
  const [condiciones, setCondiciones] = useState<CondicionSalud[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(condiciones));
    } catch {}
  }, [condiciones]);

  return { condiciones, setCondiciones };
}
