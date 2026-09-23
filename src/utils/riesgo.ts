import type { Asana, PerfilSalud, ResultadoSemaforo, SemaforoEstado, AlternativaSegura } from '../types';

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0;
  let interseccion = 0;
  for (const elem of a) if (b.has(elem)) interseccion++;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : interseccion / union;
}

const FAMILIAS_RELACIONADAS: Record<string, string[]> = {
  bipedestacion: ['equilibrio'],
  flexion_anterior: ['sentada'],
  extension_posterior: ['bipedestacion'],
  torsion: ['sentada'],
  inversion: ['equilibrio'],
  restaurativa: ['sentada', 'flexion_anterior'],
  equilibrio: ['bipedestacion', 'inversion'],
  sentada: ['flexion_anterior', 'torsion'],
};

const NIVEL_A_NUM: Record<string, number> = { principiante: 1, intermedio: 2, avanzado: 3 };

export function evaluarRiesgo(asana: Asana, perfil: PerfilSalud): ResultadoSemaforo {
  const activas = new Set(perfil.condiciones_activas);
  const detectadas: ResultadoSemaforo['condiciones_detectadas'] = [];
  const alternativas: AlternativaSegura[] = [];

  for (const c of asana.contraindicaciones) {
    if (!activas.has(c.condicion)) continue;

    detectadas.push({
      condicion: c.condicion,
      riesgo: c.riesgo,
      explicacion: c.explicacion_clinica,
      modificaciones: c.modificaciones || [],
    });

    if (c.alternativa_segura) alternativas.push(c.alternativa_segura);

    if (c.riesgo === 'alto') {
      return { estado: 'rojo', condiciones_detectadas: detectadas, alternativas_sugeridas: alternativas };
    }
  }

  const estado: SemaforoEstado = detectadas.some(d => d.riesgo === 'moderado') ? 'amarillo' : 'verde';
  return { estado, condiciones_detectadas: detectadas, alternativas_sugeridas: alternativas };
}

export function calcularSimilitud(a: Asana, b: Asana): number {
  let puntaje = 0;

  const agonA = new Set(a.trabajo_muscular.agonistas.map(m => m.musculo_id));
  const agonB = new Set(b.trabajo_muscular.agonistas.map(m => m.musculo_id));
  puntaje += jaccard(agonA, agonB) * 0.40;

  if (a.familia_biomecanica === b.familia_biomecanica) puntaje += 0.25;
  else if (FAMILIAS_RELACIONADAS[a.familia_biomecanica]?.includes(b.familia_biomecanica)) puntaje += 0.10;

  const sinA = new Set(a.trabajo_muscular.sinergicos.map(m => m.musculo_id));
  const sinB = new Set(b.trabajo_muscular.sinergicos.map(m => m.musculo_id));
  puntaje += jaccard(sinA, sinB) * 0.20;

  const diff = NIVEL_A_NUM[a.nivel_dificultad] - NIVEL_A_NUM[b.nivel_dificultad];
  if (diff >= 0) puntaje += 0.15;
  else if (diff === -1) puntaje += 0.05;

  return Math.min(puntaje, 1.0);
}

export function recomendarAlternativas(
  asana: Asana,
  perfil: PerfilSalud,
  todas: Asana[]
): { asana: Asana; puntaje: number; semaforo: SemaforoEstado }[] {
  const resultado = evaluarRiesgo(asana, perfil);
  const idsExplicitas = new Set(resultado.alternativas_sugeridas.map(a => a.asana_id));

  const candidatas: { asana: Asana; puntaje: number; semaforo: SemaforoEstado }[] = [];

  for (const candidata of todas) {
    if (candidata.id === asana.id) continue;
    const sem = evaluarRiesgo(candidata, perfil);
    if (sem.estado === 'rojo') continue;

    let puntaje = calcularSimilitud(asana, candidata);
    if (idsExplicitas.has(candidata.id)) puntaje += 0.15;
    if (sem.estado === 'verde') puntaje += 0.10;

    candidatas.push({ asana: candidata, puntaje: Math.min(puntaje, 1.0), semaforo: sem.estado });
  }

  candidatas.sort((a, b) => b.puntaje - a.puntaje);
  return candidatas.slice(0, 3);
}
