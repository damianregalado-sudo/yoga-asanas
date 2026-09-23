export type TipoContraccion = 'isometrica' | 'concentrica' | 'excentrica';
export type FamiliaBiomecanica = 'bipedestacion' | 'torsion' | 'inversion' | 'flexion_anterior' | 'extension_posterior' | 'equilibrio' | 'restaurativa' | 'sentada';
export type NivelDificultad = 'principiante' | 'intermedio' | 'avanzado';
export type NivelRiesgo = 'bajo' | 'moderado' | 'alto';
export type SemaforoEstado = 'verde' | 'amarillo' | 'rojo';
export type CondicionSalud = 'hipertension_arterial' | 'glaucoma' | 'hernias_discales' | 'problemas_rodilla' | 'problemas_muneca' | 'embarazo' | 'hipotension' | 'vertigo' | 'reemplazos_articulares';

export interface MusculoEntry {
  musculo: string;
  musculo_id: string;
  tipo_contraccion: TipoContraccion;
  explicacion: string;
}

export interface TrabajoMuscular {
  agonistas: MusculoEntry[];
  sinergicos: MusculoEntry[];
  antagonistas_elongados: MusculoEntry[];
}

export interface AlternativaSegura {
  asana_id: string;
  nombre: string;
  razon: string;
}

export interface Contraindicacion {
  condicion: CondicionSalud;
  riesgo: NivelRiesgo;
  explicacion_clinica: string;
  modificaciones: string[];
  alternativa_segura: AlternativaSegura | null;
}

export interface ErrorComun {
  timestamp_inicio: number;
  timestamp_fin: number;
  descripcion: string;
  correccion: string;
}

export interface VideoLoop {
  frontal: {
    url: string;
    duracion_segundos: number;
    resolucion: string;
  };
  lateral: {
    url: string;
    duracion_segundos: number;
    resolucion: string;
  };
  rotacion_360: {
    url: string;
    duracion_segundos: number;
    resolucion: string;
  };
  errores_comunes: ErrorComun[];
}

export interface PuntoAlineacion {
  puntos_clave: string[];
}

export interface TransicionEntry {
  postura_origen_id?: string;
  postura_destino_id?: string;
  nombre: string;
  instrucciones_transicion: string[];
  consejos_seguridad: string;
}

export interface Transiciones {
  entrar_desde: TransicionEntry[];
  salir_hacia: TransicionEntry[];
}

export interface Asana {
  id: string;
  nombre_sanscrito: string;
  nombre_espanol: string;
  nombre_ingles: string;
  familia_biomecanica: FamiliaBiomecanica;
  nivel_dificultad: NivelDificultad;
  descripcion: string;
  duracion_sugerida_respiraciones: {
    principiante: number;
    intermedio: number;
    avanzado: number;
  };
  imagenes_ilustrativas: {
    foto_principal: string;
    ilustracion_vectorial: string;
    overlay_alineacion: string;
    overlay_vectores_fuerza: string;
  };
  video_loop: VideoLoop;
  trabajo_muscular: TrabajoMuscular;
  alineacion: PuntoAlineacion;
  contraindicaciones: Contraindicacion[];
  transiciones_sugeridas: Transiciones;
}

export interface PerfilSalud {
  condiciones_activas: CondicionSalud[];
}

export interface ResultadoSemaforo {
  estado: SemaforoEstado;
  condiciones_detectadas: {
    condicion: CondicionSalud;
    riesgo: NivelRiesgo;
    explicacion: string;
    modificaciones: string[];
  }[];
  alternativas_sugeridas: AlternativaSegura[];
}
