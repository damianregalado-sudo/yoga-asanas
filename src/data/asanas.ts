import type { Asana } from '../types';

export const asanas: Asana[] = [
  {
    id: 'asana_virabhadrasana_ii',
    nombre_sanscrito: 'Virabhadrasana II',
    nombre_espanol: 'Guerrero II',
    nombre_ingles: 'Warrior II',
    familia_biomecanica: 'bipedestacion',
    nivel_dificultad: 'intermedio',
    descripcion: 'Postura de bipedestación con apertura lateral de caderas, pierna delantera flexionada a 90 grados, brazos extendidos horizontalmente.',
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: { frontal: { url: '', duracion_segundos: 6, resolucion: '1080p' }, lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' }, rotacion_360: { url: '', duracion_segundos: 8, resolucion: '1080p' }, errores_comunes: [] },
    trabajo_muscular: {
      agonistas: [
        { musculo: 'Cuádriceps', musculo_id: 'quadriceps', tipo_contraccion: 'isometrica', explicacion: 'Mantiene la rodilla delantera flexionada a 90° contra la gravedad.' },
        { musculo: 'Deltoides medio', musculo_id: 'deltoid_middle', tipo_contraccion: 'isometrica', explicacion: 'Sostiene ambos brazos en abducción horizontal a 90°.' },
        { musculo: 'Glúteo medio', musculo_id: 'gluteus_medius', tipo_contraccion: 'isometrica', explicacion: 'Rotación externa de cadera y estabilización pélvica.' },
      ],
      sinergicos: [
        { musculo: 'Erectores espinales', musculo_id: 'erector_spinae', tipo_contraccion: 'isometrica', explicacion: 'Mantiene columna vertebral erguida.' },
        { musculo: 'Transverso abdominal', musculo_id: 'transversus_abdominis', tipo_contraccion: 'isometrica', explicacion: 'Estabilidad del core y protección lumbar.' },
        { musculo: 'Trapecio medio', musculo_id: 'trapezius_middle', tipo_contraccion: 'isometrica', explicacion: 'Retracción escapular para apertura torácica.' },
      ],
      antagonistas_elongados: [
        { musculo: 'Aductores', musculo_id: 'adductors', tipo_contraccion: 'excentrica', explicacion: 'Se elongan por la apertura lateral de cadera.' },
        { musculo: 'Psoas ilíaco', musculo_id: 'iliopsoas', tipo_contraccion: 'excentrica', explicacion: 'Se elonga por extensión de cadera posterior.' },
      ],
    },
    alineacion: { puntos_clave: ['Rodilla sobre tobillo, sin sobrepasar dedos', 'Muslo delantero paralelo al suelo', 'Torso vertical', 'Brazos a altura de hombros', 'Mirada sobre la mano delantera'] },
    contraindicaciones: [
      { condicion: 'problemas_rodilla', riesgo: 'moderado', explicacion_clinica: 'La flexión sostenida a 90° genera estrés en ligamentos colaterales y cartílago rotuliano.', modificaciones: ['No flexionar más de 90°', 'Usar bloque bajo muslo', 'Reducir amplitud de zancada'], alternativa_segura: { asana_id: 'asana_vrksasana', nombre: 'Vrksasana (Árbol)', razon: 'Trabaja equilibrio sin carga axial sobre rodilla flexionada' } },
      { condicion: 'vertigo', riesgo: 'moderado', explicacion_clinica: 'El giro de cabeza combinado con posición amplia puede provocar mareo.', modificaciones: ['Mantener mirada al frente', 'Entrar y salir lentamente', 'Practicar cerca de pared'], alternativa_segura: { asana_id: 'asana_savasana', nombre: 'Savasana', razon: 'Sin rotación cervical ni riesgo de desequilibrio' } },
      { condicion: 'embarazo', riesgo: 'moderado', explicacion_clinica: 'La relaxina aumenta laxitud ligamentosa, riesgo de sobreestiramiento.', modificaciones: ['Reducir amplitud', 'Usar silla como soporte', 'No sostener más de 3 respiraciones'], alternativa_segura: null },
    ],
    transiciones_sugeridas: {
      entrar_desde: [{ postura_origen_id: 'asana_savasana', nombre: 'Tadasana', instrucciones_transicion: ['Separar pies 1.2m', 'Girar pie derecho 90°', 'Girar pie izquierdo 15° hacia adentro', 'Flexionar rodilla derecha lentamente', 'Extender brazos horizontalmente'], consejos_seguridad: 'Girar pie antes de flexionar rodilla para proteger la articulación.' }],
      salir_hacia: [{ postura_destino_id: 'asana_bhujangasana', nombre: 'Utthita Parsvakonasana', instrucciones_transicion: ['Mantener flexión de rodilla', 'Inclinar torso lateralmente', 'Apoyar antebrazo en muslo'], consejos_seguridad: 'No colapsar peso sobre pierna delantera.' }],
    },
  },
  {
    id: 'asana_adho_mukha_svanasana',
    nombre_sanscrito: 'Adho Mukha Svanasana',
    nombre_espanol: 'Perro boca abajo',
    nombre_ingles: 'Downward-Facing Dog',
    familia_biomecanica: 'inversion',
    nivel_dificultad: 'principiante',
    descripcion: 'Inversión parcial con manos y pies apoyados, caderas elevadas formando una V invertida. Fortalece hombros y estira cadena posterior.',
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: { frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' }, lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' }, rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' }, errores_comunes: [] },
    trabajo_muscular: {
      agonistas: [
        { musculo: 'Deltoides anterior', musculo_id: 'deltoid_anterior', tipo_contraccion: 'isometrica', explicacion: 'Sostiene el peso del torso con los brazos extendidos.' },
        { musculo: 'Cuádriceps', musculo_id: 'quadriceps', tipo_contraccion: 'concentrica', explicacion: 'Extiende las rodillas activamente.' },
        { musculo: 'Serrato anterior', musculo_id: 'serratus_anterior', tipo_contraccion: 'isometrica', explicacion: 'Estabiliza escápulas contra la caja torácica.' },
      ],
      sinergicos: [
        { musculo: 'Tríceps', musculo_id: 'triceps', tipo_contraccion: 'isometrica', explicacion: 'Mantiene codos extendidos bajo carga.' },
        { musculo: 'Abdominales', musculo_id: 'rectus_abdominis', tipo_contraccion: 'isometrica', explicacion: 'Estabiliza pelvis y columna.' },
      ],
      antagonistas_elongados: [
        { musculo: 'Isquiotibiales', musculo_id: 'hamstrings', tipo_contraccion: 'excentrica', explicacion: 'Se elongan por la flexión de cadera con rodillas extendidas.' },
        { musculo: 'Gemelos', musculo_id: 'gastrocnemius', tipo_contraccion: 'excentrica', explicacion: 'Se elongan al intentar apoyar talones en el suelo.' },
      ],
    },
    alineacion: { puntos_clave: ['Manos separadas ancho de hombros', 'Pies separados ancho de caderas', 'Columna elongada', 'Cabeza entre los brazos', 'Talones buscando el suelo'] },
    contraindicaciones: [
      { condicion: 'glaucoma', riesgo: 'alto', explicacion_clinica: 'La posición invertida incrementa la presión intraocular de forma aguda.', modificaciones: [], alternativa_segura: { asana_id: 'asana_virabhadrasana_ii', nombre: 'Virabhadrasana II', razon: 'Fortalece sin invertir cabeza bajo corazón' } },
      { condicion: 'hipertension_arterial', riesgo: 'moderado', explicacion_clinica: 'Cabeza bajo corazón puede elevar presión intracraneal.', modificaciones: ['Sostener máximo 3 respiraciones', 'Elevar manos con silla'], alternativa_segura: null },
      { condicion: 'problemas_muneca', riesgo: 'moderado', explicacion_clinica: 'Carga axial sobre muñecas en dorsiflexión.', modificaciones: ['Usar cuñas bajo talón de mano', 'Variante Delfín en antebrazos'], alternativa_segura: null },
    ],
    transiciones_sugeridas: {
      entrar_desde: [{ postura_origen_id: 'asana_bhujangasana', nombre: 'Tabla', instrucciones_transicion: ['Desde tabla, exhalar y elevar caderas', 'Empujar suelo con manos', 'Llevar pecho hacia muslos'], consejos_seguridad: 'No redondear espalda al subir caderas.' }],
      salir_hacia: [{ postura_destino_id: 'asana_bhujangasana', nombre: 'Bhujangasana', instrucciones_transicion: ['Inhalar, desplazar peso a tabla', 'Exhalar, descender controladamente', 'Inhalar, elevar pecho a Cobra'], consejos_seguridad: 'Codos a 90° máximo en descenso.' }],
    },
  },
  {
    id: 'asana_bhujangasana',
    nombre_sanscrito: 'Bhujangasana',
    nombre_espanol: 'Cobra',
    nombre_ingles: 'Cobra Pose',
    familia_biomecanica: 'extension_posterior',
    nivel_dificultad: 'principiante',
    descripcion: 'Extensión de columna desde posición prona. Fortalece erectores espinales y abre pecho.',
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: { frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' }, lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' }, rotacion_360: { url: '', duracion_segundos: 6, resolucion: '1080p' }, errores_comunes: [] },
    trabajo_muscular: {
      agonistas: [
        { musculo: 'Erectores espinales', musculo_id: 'erector_spinae', tipo_contraccion: 'concentrica', explicacion: 'Extienden la columna activamente contra la gravedad.' },
        { musculo: 'Glúteos', musculo_id: 'gluteus_maximus', tipo_contraccion: 'isometrica', explicacion: 'Estabilizan pelvis y protegen lumbar.' },
      ],
      sinergicos: [
        { musculo: 'Trapecios', musculo_id: 'trapezius', tipo_contraccion: 'concentrica', explicacion: 'Retraen escápulas para abrir pecho.' },
        { musculo: 'Romboides', musculo_id: 'rhomboids', tipo_contraccion: 'concentrica', explicacion: 'Aducción escapular.' },
        { musculo: 'Tríceps', musculo_id: 'triceps', tipo_contraccion: 'isometrica', explicacion: 'Sostienen peso con brazos semi-extendidos.' },
      ],
      antagonistas_elongados: [
        { musculo: 'Recto abdominal', musculo_id: 'rectus_abdominis', tipo_contraccion: 'excentrica', explicacion: 'Se elonga por la extensión del tronco.' },
        { musculo: 'Psoas ilíaco', musculo_id: 'iliopsoas', tipo_contraccion: 'excentrica', explicacion: 'Se estira con la extensión de cadera.' },
      ],
    },
    alineacion: { puntos_clave: ['Manos bajo hombros', 'Codos pegados al cuerpo', 'Pubis en contacto con el suelo', 'Hombros lejos de orejas', 'Mirada al frente'] },
    contraindicaciones: [
      { condicion: 'hernias_discales', riesgo: 'alto', explicacion_clinica: 'La extensión lumbar comprime discos posteriores, agravando hernias.', modificaciones: [], alternativa_segura: { asana_id: 'asana_savasana', nombre: 'Savasana', razon: 'Descanso sin carga vertebral' } },
      { condicion: 'embarazo', riesgo: 'alto', explicacion_clinica: 'Presión directa sobre abdomen en posición prona.', modificaciones: [], alternativa_segura: { asana_id: 'asana_vrksasana', nombre: 'Vrksasana', razon: 'Fortalecimiento sin posición prona' } },
      { condicion: 'problemas_muneca', riesgo: 'moderado', explicacion_clinica: 'Carga en muñecas en dorsiflexión.', modificaciones: ['Apoyar en antebrazos (Esfinge)', 'Usar puños cerrados'], alternativa_segura: null },
    ],
    transiciones_sugeridas: {
      entrar_desde: [{ postura_origen_id: 'asana_savasana', nombre: 'Prono', instrucciones_transicion: ['Acostarse boca abajo', 'Manos bajo hombros', 'Inhalar y elevar pecho lentamente'], consejos_seguridad: 'Elevar con fuerza de espalda, no empujando con brazos.' }],
      salir_hacia: [{ postura_destino_id: 'asana_adho_mukha_svanasana', nombre: 'Adho Mukha Svanasana', instrucciones_transicion: ['Exhalar, elevar caderas', 'Empujar suelo con manos', 'Llevar pecho hacia muslos'], consejos_seguridad: 'Transición fluida sin dejar caer peso.' }],
    },
  },
  {
    id: 'asana_vrksasana',
    nombre_sanscrito: 'Vrksasana',
    nombre_espanol: 'Árbol',
    nombre_ingles: 'Tree Pose',
    familia_biomecanica: 'equilibrio',
    nivel_dificultad: 'principiante',
    descripcion: 'Equilibrio unipodal. Pie en muslo interno o pantorrilla (nunca en rodilla). Desarrolla propiocepción.',
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: { frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' }, lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' }, rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' }, errores_comunes: [] },
    trabajo_muscular: {
      agonistas: [
        { musculo: 'Glúteo medio', musculo_id: 'gluteus_medius', tipo_contraccion: 'isometrica', explicacion: 'Estabiliza pelvis en apoyo unipodal.' },
        { musculo: 'Cuádriceps', musculo_id: 'quadriceps', tipo_contraccion: 'isometrica', explicacion: 'Mantiene rodilla de apoyo estable.' },
        { musculo: 'Tibial posterior', musculo_id: 'tibialis_posterior', tipo_contraccion: 'isometrica', explicacion: 'Estabiliza arco del pie.' },
      ],
      sinergicos: [
        { musculo: 'Abdominales', musculo_id: 'rectus_abdominis', tipo_contraccion: 'isometrica', explicacion: 'Estabilización central.' },
        { musculo: 'Erectores espinales', musculo_id: 'erector_spinae', tipo_contraccion: 'isometrica', explicacion: 'Mantienen columna erguida.' },
      ],
      antagonistas_elongados: [
        { musculo: 'Aductores', musculo_id: 'adductors', tipo_contraccion: 'excentrica', explicacion: 'Se elongan por rotación externa y abducción de cadera.' },
      ],
    },
    alineacion: { puntos_clave: ['Pie de apoyo enraizado', 'Pie elevado en muslo o pantorrilla, NUNCA en rodilla', 'Caderas niveladas', 'Coronilla al techo'] },
    contraindicaciones: [
      { condicion: 'vertigo', riesgo: 'moderado', explicacion_clinica: 'Equilibrio unipodal puede desencadenar inestabilidad.', modificaciones: ['Practicar junto a pared', 'Fijar mirada en punto estático'], alternativa_segura: { asana_id: 'asana_savasana', nombre: 'Savasana', razon: 'Sin demanda de equilibrio' } },
      { condicion: 'problemas_rodilla', riesgo: 'moderado', explicacion_clinica: 'Presión del pie contra muslo puede estresar rodilla de apoyo.', modificaciones: ['No apoyar pie en rodilla', 'Apoyar pie en pantorrilla'], alternativa_segura: null },
    ],
    transiciones_sugeridas: {
      entrar_desde: [{ postura_origen_id: 'asana_savasana', nombre: 'Tadasana', instrucciones_transicion: ['Fijar mirada en un punto', 'Trasladar peso a pie izquierdo', 'Elevar pie derecho lentamente al muslo'], consejos_seguridad: 'Estabilizar tobillo antes de elevar pie.' }],
      salir_hacia: [{ postura_destino_id: 'asana_virabhadrasana_ii', nombre: 'Virabhadrasana II', instrucciones_transicion: ['Descender pie lentamente', 'Separar pies', 'Flexionar rodilla delantera'], consejos_seguridad: 'Descenso controlado, no dejar caer la pierna.' }],
    },
  },
  {
    id: 'asana_savasana',
    nombre_sanscrito: 'Savasana',
    nombre_espanol: 'Postura del cadáver',
    nombre_ingles: 'Corpse Pose',
    familia_biomecanica: 'restaurativa',
    nivel_dificultad: 'principiante',
    descripcion: 'Relajación total en decúbito supino. Integración neuromuscular y activación parasimpática.',
    duracion_sugerida_respiraciones: { principiante: 20, intermedio: 30, avanzado: 50 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: { frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' }, lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' }, rotacion_360: { url: '', duracion_segundos: 5, resolucion: '1080p' }, errores_comunes: [] },
    trabajo_muscular: {
      agonistas: [],
      sinergicos: [{ musculo: 'Diafragma', musculo_id: 'diaphragm', tipo_contraccion: 'isometrica', explicacion: 'Respiración consciente y profunda.' }],
      antagonistas_elongados: [],
    },
    alineacion: { puntos_clave: ['Piernas separadas ancho de caderas', 'Brazos a los lados, palmas arriba', 'Columna neutra', 'Ojos cerrados'] },
    contraindicaciones: [
      { condicion: 'embarazo', riesgo: 'moderado', explicacion_clinica: 'Desde semana 20, posición supina puede comprimir vena cava inferior.', modificaciones: ['Acostarse sobre lado izquierdo', 'Usar bolster bajo rodillas'], alternativa_segura: null },
      { condicion: 'hipotension', riesgo: 'bajo', explicacion_clinica: 'Mareo ortostático al levantarse.', modificaciones: ['Incorporarse muy lentamente', 'Posición fetal antes de sentarse'], alternativa_segura: null },
    ],
    transiciones_sugeridas: {
      entrar_desde: [{ postura_origen_id: 'asana_vrksasana', nombre: 'Postura final', instrucciones_transicion: ['Sentarse lentamente', 'Acostarse con control', 'Relajar todo el cuerpo'], consejos_seguridad: 'Descender con control.' }],
      salir_hacia: [{ postura_destino_id: 'asana_vrksasana', nombre: 'Tadasana', instrucciones_transicion: ['Mover dedos lentamente', 'Girar a posición fetal', 'Incorporarse con manos'], consejos_seguridad: 'Ascenso gradual para evitar mareo.' }],
    },
  },
];
