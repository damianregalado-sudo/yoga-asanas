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
  {
      id: 'asana_trikonasana',
      nombre_sanscrito: 'Trikonasana',
      nombre_espanol: 'Triángulo',
      nombre_ingles: 'Triangle Pose',
      familia_biomecanica: 'bipedestacion',
      nivel_dificultad: 'principiante',
      descripcion: 'Postura de pie con flexión lateral del tronco sobre una base triangular de piernas extendidas, que promueve la elongación axial, apertura torácica y estabilización de la pelvis.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 8,
          avanzado: 10
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Cuádriceps femoral (pierna frontal)',
                  musculo_id: 'cuadriceps_femoral',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la extensión activa de la rodilla adelantada, elevando la rótula y previniendo la hiperextensión articular.'
              },
              {
                  musculo: 'Oblicuos del abdomen (interno y externo)',
                  musculo_id: 'oblicuos_abdomen',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Sostienen el torso suspendido contra la gravedad en el plano frontal, evitando el colapso del flanco inferior.'
              },
              {
                  musculo: 'Glúteo medio y menor (ambas caderas)',
                  musculo_id: 'gluteo_medio',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Estabilizan la pelvis en abducción y rotación externa en la pierna delantera para mantener el alineamiento articular.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Erectores de la columna',
                  musculo_id: 'erectores_columna',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantienen la elongación axial de la columna vertebral e impiden la cifosis dorsal o flexión anterior.'
              },
              {
                  musculo: 'Deltoides medio y anterior',
                  musculo_id: 'deltoides',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Sostienen la abducción horizontal y alineación vertical de ambos brazos en un único plano escapular.'
              },
              {
                  musculo: 'Transverso del abdomen',
                  musculo_id: 'transverso_abdomen',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Fija el núcleo lumbo-pélvico, proporcionando una base estable para la flexión lateral pura.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Isquiotibiales (pierna frontal)',
                  musculo_id: 'isquiotibiales',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se elongan activamente desde la tuberosidad isquiática debido a la flexión profunda de cadera con rodilla extendida.'
              },
              {
                  musculo: 'Cuadrado lumbar (flanco superior)',
                  musculo_id: 'cuadrado_lumbar',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Experimenta una tracción longitudinal continua al alargarse el costado lateral superior del torso.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Pies separados aproximadamente a la distancia de una pierna, con el pie delantero a 90° y el trasero a 45-60° con el arco interno activo.",
              "Talón delantero alineado longitudinalmente con el arco medial o talón del pie trasero.",
              "Pelvis orientada hacia el costado manteniendo una bisagra pura de cadera (nutación) en la pierna frontal, sin rotar el torso hacia el piso.",
              "Brazos extendidos verticalmente en cruz formando una línea perpendicular continua respecto al suelo.",
              "Columna alargada bilateralmente evitando el colapso de las costillas del flanco inferior, con mirada hacia la mano superior o al frente."
          ]
      },
      contraindicaciones: [
          {
              condicion: 'vertigo',
              riesgo: 'moderado',
              explicacion_clinica: 'La rotación cervical y la mirada hacia la mano superior pueden desencadenar desorientación espacial, mareos o pérdida del equilibrio.',
              modificaciones: [
                  "Mantener la mirada hacia el suelo o en punto fijo al frente en posición neutra cervical.",
                  "Practicar cerca de una pared para soporte propioceptivo."
              ],
              alternativa_segura: {
                  asana_id: 'asana_parsvakonasana_apoyado',
                  nombre: 'Parsvakonasana con antebrazo en muslo',
                  razon: 'Permite una base más amplia y menor demanda vestibular manteniendo la mirada frontal neutra.'
              }
          },
          {
              condicion: 'problemas_rodilla',
              riesgo: 'moderado',
              explicacion_clinica: 'La extensión pasiva de la rodilla adelantada con carga axial puede inducir genu recurvatum (hiperextensión) y comprimir los meniscos posteriores y ligamentos cruzados.',
              modificaciones: [
                  "Mantener una microflexión consciente en la rodilla adelantada activando el cuádriceps.",
                  "Colocar un bloque de yoga detrás de la pantorrilla para evitar mecánicamente la hiperextensión."
              ],
              alternativa_segura: null
          },
          {
              condicion: 'hernias_discales',
              riesgo: 'moderado',
              explicacion_clinica: 'La flexión lateral con rotación combinada genera fuerzas de cizallamiento asimétricas sobre el anillo fibroso del disco intervertebral lumbar.',
              modificaciones: [
                  "Apoyar la mano delantera sobre un bloque en su máxima altura o sobre una silla para evitar la flexión lumbar profunda.",
                  "Priorizar la elongación axial estricta sin intentar tocar el suelo."
              ],
              alternativa_segura: {
                  asana_id: 'asana_tadasana_alargamiento',
                  nombre: 'Tadasana con brazos elevados',
                  razon: 'Mantiene la descompresión axial vertical sin componentes de cizallamiento lateral.'
              }
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_virabhadrasana_ii',
                  nombre: 'Guerrero II',
                  instrucciones_transicion: [
                      "Inhala extendiendo gradualmente la rodilla delantera sin bloquear la articulación.",
                      "Exhala desplazando la pelvis hacia atrás mientras alargas el torso hacia adelante sobre el muslo frontal antes de descender la mano."
                  ],
                  consejos_seguridad: 'Asegúrate de mantener ambos costados del torso largos durante el descenso, evitando arquear la zona lumbar.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_virabhadrasana_ii',
                  nombre: 'Guerrero II',
                  instrucciones_transicion: [
                      "Inhala flexionando la rodilla delantera hasta alinearla perpendicularmente sobre el tobillo.",
                      "Eleva el torso a la vertical con la fuerza del core manteniendo los brazos en cruz."
                  ],
                  consejos_seguridad: 'Activa firmemente el glúteo de la pierna adelantada para guiar la rodilla en línea con el segundo dedo del pie.'
              }
          ]
      }
  },
  {
      id: 'asana_virabhadrasana_i',
      nombre_sanscrito: 'Virabhadrasana I',
      nombre_espanol: 'Guerrero I',
      nombre_ingles: 'Warrior I',
      familia_biomecanica: 'bipedestacion',
      nivel_dificultad: 'intermedio',
      descripcion: 'Postura de bipedestación asimétrica que requiere flexión de rodilla, activación intensa de cuádriceps y glúteos para mantener la extensión de la cadera y flexión profunda de la tibia.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 8,
          avanzado: 10
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Recto femoral',
                  musculo_id: 'm_recto_femoral',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Extension de cadera y flexión isométrica de rodilla para estabilizar la postura bajo carga gravitatoria.'
              },
              {
                  musculo: 'Glúteo mayor',
                  musculo_id: 'm_gluteo_mayor',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Extension de cadera contrarrestando la gravedad y manteniendo la verticalidad del tronco.'
              },
              {
                  musculo: 'Soleo',
                  musculo_id: 'm_soleo',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Plantarflexión y estabilización del talón adelantado.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Vasto lateral',
                  musculo_id: 'm_vasto_lateral',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Agrega estabilidad articular a la quadriceps en la pierna de apoyo.'
              },
              {
                  musculo: 'Glúteo medio',
                  musculo_id: 'm_gluteo_medio',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Prevención de la valgo de rodilla y estabilidad del acetábulo.'
              },
              {
                  musculo: 'Erector espinal',
                  musculo_id: 'm erecto_espinoso',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la alineación vertical de la columna lumbar y torácica.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Isquiotibiales',
                  musculo_id: 'm_isquiotibiales',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Elongación activa por la flexión de rodilla y la extensión de cadera en la misma articulaciones.'
              },
              {
                  musculo: 'Psoas iliaco',
                  musculo_id: 'm_psoas',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Alargamiento por la extensión de cadera necesaria para mantener la postura erecta.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Rodilla flexionada alineada por encima del tobillo, sin proyectarse más allá del metatarso",
              "Cadera izquierda extendida y derecha flexionada (o viceversa) creando una línea paralela al suelo",
              "Hombros elevados equidistantes de las caderas, con palmas mirando al frente",
              "Segunda articulación del pie (ball of foot) apretada hacia la cabeza",
              "Cuello largo y línea media neutral"
          ]
      },
      contraindicaciones: [
          {
              condicion: 'problemas_rodilla',
              riesgo: 'moderado',
              explicacion_clinica: 'La combinación de carga axial y flexión profunda puede aumentar la presión en el menisco si hay patología previa.',
              modificaciones: [
                  "Reducir la profundidad de la flexión de rodilla",
                  "Flexionar ligeramente la rodilla trasera para mantener peso en el talón"
              ],
              alternativa_segura: {
                  asana_id: 'asana_trikonasana',
                  nombre: 'Triángulo',
                  razon: 'Carga abierta sin compresión axial de la columna, reequilibra la alineación.'
              }
          },
          {
              condicion: 'hipertension_arterial',
              riesgo: 'moderado',
              explicacion_clinica: 'La contracción isométrica sostenida de grandes grupos musculares eleva la resistencia periférica y la presión arterial.',
              modificaciones: [
                  "Mantener la respiración fluida y no forzar la contracción abdominal excesivamente"
              ],
              alternativa_segura: {
                  asana_id: 'asana_savasana',
                  nombre: 'Savasana',
                  razon: 'Relajación profunda y no provocativa para el sistema cardiovascular.'
              }
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_adho_mukha_svanasana',
                  nombre: 'Adho Mukha Svanasana',
                  instrucciones_transicion: [
                      "Expira mientras levantas la pierna derecha hacia atrás",
                      "Palma y rodilla derecha caen al mat; flexiona la rodilla izquierda por encima del tobillo",
                      "Extiende el torso hacia arriba manteniendo la cadera nivelada"
                  ],
                  consejos_seguridad: 'Mantén el core activo para evitar que la cadera trabaje hacia atrás excesivamente'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_adho_mukha_svanasana',
                  nombre: 'Adho Mukha Svanasana',
                  instrucciones_transicion: [
                      "Expira mientras flexiona las rodillas y se hunde la pelvis hacia atrás",
                      "Encuentra apoyo en las manos y talones, elongando la columna"
                  ],
                  consejos_seguridad: 'Evita deslizar los pies y asegura que los talones ganen distancia al mat gradualmente'
              }
          ]
      }
  },
  {
      id: 'asana_paschimottanasana',
      nombre_sanscrito: 'Paschimottanasana',
      nombre_espanol: 'Pinza sentada',
      nombre_ingles: 'Seated Forward Bend',
      familia_biomecanica: 'flexion_anterior',
      nivel_dificultad: 'principiante',
      descripcion: 'Flexión anterior segmentada desde la cadera con elongación isométrica de la cadena posterior. Requiere descompresión vertebral progresiva para mantener la integridad de las facetas posteriores.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 8,
          avanzado: 12
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Isquiotibiales',
                  musculo_id: 'isquiotes',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Alarga el posterior del muslo para permitir la flexión de la rodilla y cadera.'
              },
              {
                  musculo: 'Cuádriceps femoral',
                  musculo_id: 'cuadripedice',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se allana en la flexión de la rodilla, estabilizando la tibia sobre el fémur.'
              },
              {
                  musculo: 'Erectores espinales',
                  musculo_id: 'erectores_spinales',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Controla la flexión torácica y lumbar, previniendo la curvatura excesiva.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Gemelos',
                  musculo_id: 'gemelos',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Colabora en la extensión de pie y estabilidad de la rodilla.'
              },
              {
                  musculo: 'Soleo',
                  musculo_id: 'soleo',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Asiste en la estabilidad del tobillo durante la suspensión.'
              },
              {
                  musculo: 'Multífidos',
                  musculo_id: 'multifidos',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la estabilidad segmentaria de la columna vertebral.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Glúteo mayor',
                  musculo_id: 'gluteo_mayor',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Estira en la flexión de cadera, mejorando la movilidad del isquio.'
              },
              {
                  musculo: 'Flexores de cadera (Psoas)',
                  musculo_id: 'psoas_iliacus',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Stabiliza la conexión cadera-espalda baja previniendo hiperlordosis.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Columnar vertebral vertical antes de iniciar la flexión",
              "Cadera desplazada hacia atrás para mantener rodillas a 90 grados",
              "Dedos de los pies apuntando hacia arriba o en posición neutra",
              "Costillas apretadas hacia el abdomen para neutralizar lumbar",
              "Frente acercándose a pantorrillas sin forzar cervicales"
          ]
      },
      contraindicaciones: [
          {
              condicion: 'hernias_discales',
              riesgo: 'moderado',
              explicacion_clinica: 'La flexión anterior compresiona los discos lumbares, pudiendo exacerbar la protrusión herniaria.',
              modificaciones: [
                  "Usar una cobija o bloque bajo la cadera",
                  "Doblar ligeramente las rodillas para reducir tensión lumbar"
              ],
              alternativa_segura: {
                  asana_id: 'asana_balasana',
                  nombre: 'Balasana',
                  razon: 'Permite el flexionamiento sobre talones con apoyo del torso, reduciendo la carga axial.'
              }
          },
          {
              condicion: 'problemas_rodilla',
              riesgo: 'bajo',
              explicacion_clinica: 'La posición de rodillas flexionadas 90 grados puede irritar la rótula o el menúsculo si hay inestabilidad.',
              modificaciones: [
                  "Entrecerrar ligeramente las rodillas",
                  "Elevar las rodillas ligeramente del suelo o usar apoyo"
              ],
              alternativa_segura: {
                  asana_id: 'asana_balasana',
                  nombre: 'Balasana',
                  razon: 'Mantiene la flexión de rodilla pero con menor exigencia de estabilidad estática intensa.'
              }
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_balasana',
                  nombre: 'Balasana',
                  instrucciones_transicion: [
                      "Desplazar los glúteos hacia atrás hasta sentarse sobre los isquios",
                      "Extender las piernas rectas al frente manteniendo el core firme"
                  ],
                  consejos_seguridad: 'Evitar el impulso vertiginoso al sentarse; moverse lento para estabilizar la pelvis.'
              },
              {
                  postura_origen_id: 'asana_tadasana',
                  nombre: 'Tadasana',
                  instrucciones_transicion: [
                      "Flexionar rodillas y sentarse en sukhasana",
                      "Extender piernas al frente antes de iniciar la flexión"
                  ],
                  consejos_seguridad: 'Asegurar que la pelvis no se lateralice al sentarse.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_balasana',
                  nombre: 'Balasana',
                  instrucciones_transicion: [
                      "Retraer el peso corporal hacia adelante",
                      "Flexionar rodillas y apoyar frente en muslos"
                  ],
                  consejos_seguridad: 'Exhalal completamente al relajarse para liberar la tensión cervical.'
              },
              {
                  postura_destino_id: 'asana_savasana',
                  nombre: 'Savasana',
                  instrucciones_transicion: [
                      "Relajación completa de la cadena posterior",
                      "Extensión progresiva de extremidades"
                  ],
                  consejos_seguridad: 'Transición a savasana permite la reintegración suave de los tejidos elásticos.'
              }
          ]
      }
  },
  {
      id: 'asana_uttanasana',
      nombre_sanscrito: 'Uttanasana',
      nombre_espanol: 'Pinza de pie',
      nombre_ingles: 'Standing Forward Bend',
      familia_biomecanica: 'flexion_anterior',
      nivel_dificultad: 'principiante',
      descripcion: 'Flexión de rodilla que elonga la cadena posterior e invertida la cabeza para ayudar al retorno venoso. Requiere disociación cadera-pelvis para evitar sobrecarga lumbar.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 8,
          avanzado: 12
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Soleo',
                  musculo_id: 'soleo',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Estabiliza el talón y controla la dorsiflexión en el apoyo plantar.'
              },
              {
                  musculo: 'Cuádriceps femoral',
                  musculo_id: 'cuadriceps_femoral',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la estabilidad de la rodilla y la extensión en el apoyo del peso.'
              },
              {
                  musculo: 'Transverso del abdomen',
                  musculo_id: 'transverso_abdomen',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Comprime el abdomen y protege la columna lumbar durante la inclinación.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Tibial anterior',
                  musculo_id: 'tibial_anterior',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Asiste en el control fino del arco plantar y la estabilidad del tobillo.'
              },
              {
                  musculo: 'Glúteo medio',
                  musculo_id: 'gluteo_medio',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Prevén el colapso de la pelvis hacia un lado manteniendo la alineación neutra.'
              },
              {
                  musculo: 'Dorsal ancho',
                  musculo_id: 'dorsal_largo',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Ayuda a mantener el tono del brazo y la estabilidad del torso superior durante la colgante.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Isquiotibiales',
                  musculo_id: 'isquiotibiales',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se elongan dinámicamente para permitir la flexión de cadera mientras estabilizan la rodilla.'
              },
              {
                  musculo: 'Gastrocnemio',
                  musculo_id: 'gastrocnemio',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se extiende pasivamente al flexionar la cadera con rodillas rectas, limitando la profundidad si hay rigidez.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Pies separados al ancho de caderas",
              "Rodillas bloqueadas pero sin hiperextensión",
              "Cadera empujada hacia atrás creando un T recto en vista lateral",
              "Torso pesado colgando hacia el suelo, no 'caer' activamente",
              "Cuello en prolongación de la columna sin pinzamiento cervical"
          ]
      },
      contraindicaciones: [
          {
              condicion: 'hernias_discales',
              riesgo: 'alto',
              explicacion_clinica: 'La flexión anterior con cadera cerrada aumenta la presión intradiscal posterior y puede comprimir las raíces nerviosas si hay protrusión.',
              modificaciones: [
                  "Doblar las rodillas para reducir la tensión lumbar",
                  "Usar bloques o manos en la altura de la rodilla"
              ],
              alternativa_segura: {
                  asana_id: 'asana_balasana',
                  nombre: 'Balasana',
                  razon: 'Postura sentada que alivia completamente la carga lumbar y permite transición segura.'
              }
          },
          {
              condicion: 'hipertension_arterial',
              riesgo: 'moderado',
              explicacion_clinica: 'La inversión prolongada puede elevar la presión intraocular y sistémica por cambios barorreflejos en pacientes hipertensos no controlados.',
              modificaciones: [
                  "Limitar la duración del apoyo",
                  "Mantener los ojos abiertos y enfocados un punto fijo"
              ],
              alternativa_segura: {
                  asana_id: 'asana_trikonasana',
                  nombre: 'Trikonasana',
                  razon: 'Pose en pie neutra que estimula circulación sin gran inversión craneal.'
              }
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_vrksasana',
                  nombre: 'Postura del árbol',
                  instrucciones_transicion: [
                      "Bajar al pie elevado junto al otro",
                      "Inhalar y llevar el pecho hacia arriba",
                      "Exhalar y doblar la cadera hacia adelante manteniendo rodillas rectas"
                  ],
                  consejos_seguridad: 'Suelta el peso del cuerpo en los isquiotibiales, no en la parte baja de la espalda.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_adho_mukha_svanasana',
                  nombre: 'Postura del perro boca abajo',
                  instrucciones_transicion: [
                      "Colocar las manos en el suelo al ancho de hombros",
                      "Exhalar y separar los pies hasta el ancho de hombros",
                      "Inclinar la cadera arriba y atrás hasta formar una V invertida"
                  ],
                  consejos_seguridad: 'Aprieta el abdomen primero para proteger la luz lumbar antes de apoyar totalmente la cadera arriba.'
              }
          ]
      }
  },
  {
      id: 'asana_setu_bandhasana',
      nombre_sanscrito: 'Setu Bandhasana',
      nombre_espanol: 'Puente',
      nombre_ingles: 'Bridge Pose',
      familia_biomecanica: 'extension_posterior',
      nivel_dificultad: 'principiante',
      descripcion: 'Postura de flexión posterior en decúbito supino que eleva la pelvis mediante la activación de la cadena posterior, expandiendo la caja torácica y estabilizando la cintura pélvica.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 8,
          avanzado: 12
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Glúteo Mayor',
                  musculo_id: 'gluteo_mayor',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Extiende la articulación coxofemoral elevando la pelvis hacia el techo en contra de la gravedad.'
              },
              {
                  musculo: 'Isquiotibiales (Bíceps Femoral, Semitendinoso, Semimembranoso)',
                  musculo_id: 'isquiotibiales',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Asisten en la extensión de cadera y estabilizan la articulación de la rodilla traccionando isométricamente los talones hacia el torso.'
              },
              {
                  musculo: 'Erector de la Columna',
                  musculo_id: 'erector_columna',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la extensión axial y la apertura torácica, despegando la columna dorsal del suelo.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Aductor Mayor',
                  musculo_id: 'aductor_mayor',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Evita la abducción y rotación externa excesiva de los fémures, manteniendo las rodillas paralelas al ancho de caderas.'
              },
              {
                  musculo: 'Cuádriceps Femoral',
                  musculo_id: 'cuadriceps_femoral',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Estabiliza la articulación de la rodilla para sostener el ángulo de 90 grados respecto a los tobillos.'
              },
              {
                  musculo: 'Romboides y Trapecio Medio/Inferior',
                  musculo_id: 'romboides_trapecio',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Retraen y deprimen las escápulas creando una base sólida de soporte sobre la cintura escapular.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Psoas Mayor e Ilíaco',
                  musculo_id: 'psoas_iliaco',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se elonga en la cara anterior de la cadera al producirse la extensión coxofemoral completa.'
              },
              {
                  musculo: 'Recto Abdominal',
                  musculo_id: 'recto_abdominal',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Permite la expansión anterior y apertura de la caja torácica mientras mantiene control de la lordosis lumbar.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Pies paralelos al ancho de caderas con los cuatro puntos de apoyo de la planta firmes en el suelo.",
              "Rodillas alineadas verticalmente directamente sobre los tobillos, evitando que colapsen hacia adentro o se abran.",
              "Pelvis neutra elevada mediante la activación glútea sin hiperextender la columna lumbar.",
              "Escápulas retraídas por debajo de la espalda, transfiriendo el peso hacia los hombros y brazos.",
              "Cuello neutro y relajado con espacio libre en la curvatura cervical, evitando girar la cabeza durante la postura."
          ]
      },
      contraindicaciones: [
          {
              condicion: 'hernias_discales',
              riesgo: 'moderado',
              explicacion_clinica: 'La compresión cervical por soporte de peso o una hiperextensión lumbar descontrolada puede agravar protrusion discal.',
              modificaciones: [
                  "Colocar un bloque de yoga debajo del sacro para soporte pasivo sin esfuerzo muscular lumbar.",
                  "Evitar entrelazar las manos debajo de la espalda para reducir la compresión cervical."
              ],
              alternativa_segura: {
                  asana_id: 'asana_supta_baddha_konasana',
                  nombre: 'Supta Baddha Konasana con soporte',
                  razon: 'Permite apertura anterior y descanso pélvico sin carga axial en cuello ni hiperextensión lumbar.'
              }
          },
          {
              condicion: 'hipertension_arterial',
              riesgo: 'moderado',
              explicacion_clinica: 'La elevación de la pelvis por encima del nivel del corazón incrementa transitoriamente el retorno venoso y la presión intratorácica/craneal.',
              modificaciones: [
                  "Mantener una elevación baja o moderada del puente apoyando el sacro sobre un bloque en su altura más baja.",
                  "Mantener respiraciones continuas y fluidas, evitando cualquier retención de aire (Kumbhaka)."
              ],
              alternativa_segura: null
          },
          {
              condicion: 'problemas_rodilla',
              riesgo: 'moderado',
              explicacion_clinica: 'La flexión de rodilla con carga posterior puede generar estrés en los tendones rotulianos o ligamentos cruzados si los pies están mal ubicados.',
              modificaciones: [
                  "Alejar los pies ligeramente más hacia adelante para abrir el ángulo articular de la rodilla a más de 90 grados.",
                  "Colocar un bloque entre los muslos para mantener alineación adecuada de rodilla y fémur."
              ],
              alternativa_segura: null
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_savasana',
                  nombre: 'Savasana',
                  instrucciones_transicion: [
                      "Flexionar ambas rodillas apoyando las plantas de los pies firmemente en el piso al ancho de las caderas.",
                      "Acercar los talones hacia los glúteos hasta que las yemas de los dedos de las manos puedan rozarlos.",
                      "Presionar hombros y pies contra el suelo mientras se eleva la pelvis en la inhalación."
                  ],
                  consejos_seguridad: 'Asegurar que la cabeza quede fija en el centro mirando hacia arriba antes de comenzar la elevación pélvica.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_apanasana',
                  nombre: 'Apanasana',
                  instrucciones_transicion: [
                      "Descender lentamente la columna vértebra por vértebra en una exhalación controlada.",
                      "Una vez que el sacro toca el suelo, abrazar suavemente ambas rodillas hacia el pecho."
                  ],
                  consejos_seguridad: 'Bajar con lentitud para descomprimir la columna antes de flexionarla hacia el abdomen.'
              }
          ]
      }
  },
  {
      id: 'asana_ardha_matsyendrasana',
      nombre_sanscrito: 'Ardha Matsyendrasana',
      nombre_espanol: 'Media torsión sentada',
      nombre_ingles: 'Half Lord of the Fishes',
      familia_biomecanica: 'torsion',
      nivel_dificultad: 'intermedio',
      descripcion: 'Torsión espinal axial asimétrica en posición sedente que combina la flexión y aducción de cadera con una rotación segmentaria del tronco desde la base lumbar hasta la columna cervical. Promueve la descompresión intervertebral y la movilidad en el plano transversal mientras estabiliza la pelvis mediante el anclaje isquiático.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 8,
          avanzado: 10
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Oblicuo interno del abdomen (lado ipsilateral)',
                  musculo_id: 'oblicuo_interno',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Tracciona la caja torácica hacia la pelvis del mismo lado para iniciar y sostener la rotación axial del tronco.'
              },
              {
                  musculo: 'Oblicuo externo del abdomen (lado contralateral)',
                  musculo_id: 'oblicuo_externo',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Actúa en sinergia cruzada con el oblicuo interno opuesto para profundizar el par de fuerzas de torsión vertebral.'
              },
              {
                  musculo: 'Músculos multífidos y rotadores profundos',
                  musculo_id: 'multifidos_rotadores',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Generan la rotación intersegmentaria vértebra por vértebra, manteniendo el espacio intervertebral activo durante la torsión.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Erector de la columna',
                  musculo_id: 'erector_columna',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la elongación axial antigravitatoria para evitar el colapso cifótico durante la rotación.'
              },
              {
                  musculo: 'Romboide mayor y menor (brazo de palanca posterior)',
                  musculo_id: 'romboides',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Retrae la escápula del lado de la torsión para abrir la cintura escapular y guiar el cinturón torácico.'
              },
              {
                  musculo: 'Glúteo medio y piriforme (cadera flexionada)',
                  musculo_id: 'gluteo_medio_piriforme',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Estabilizan la articulación coxofemoral y fijan la pelvis contra el suelo contrarrestando las fuerzas de cizalla.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Oblicuo externo ipsilateral y oblicuo interno contralateral',
                  musculo_id: 'oblicuos_antagonistas',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se elongan en el plano transversal permitiendo la excursión completa de la cavidad abdominal y caja torácica.'
              },
              {
                  musculo: 'Glúteo mayor y tensor de la fascia lata (pierna cruzada)',
                  musculo_id: 'gluteo_mayor_tfl',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Experimentan estiramiento longitudinal debido a la combinación de aducción y flexión profunda de cadera.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Ambos isquiones permanecen firmemente apoyados y equilibrados sobre la esterilla o bloque.",
              "Elongación axial previa a la rotación: crecer en cada inhalación antes de profundizar el giro en la exhalación.",
              "Pie de la pierna cruzada completamente apoyado en el suelo junto a la cara externa del muslo contralateral.",
              "Hombros descendidos y paralelos entre sí, evitando la elevación hacia las orejas o protracción excesiva.",
              "La mirada y la columna cervical acompañan suavemente la torsión sin forzar el rango articular del cuello."
          ]
      },
      contraindicaciones: [
          {
              condicion: 'hernias_discales',
              riesgo: 'alto',
              explicacion_clinica: 'La combinación de rotación y compresión axial ejerce fuerzas de cizallamiento severas sobre el anillo fibroso, pudiendo agravar protrusiones o hernias lumbares preexistentes.',
              modificaciones: [
                  "Mantener la pierna inferior extendida y limitar la torsión únicamente a un giro suave del tórax sin apalancamiento.",
                  "Sentarse sobre una manta o bloque para neutralizar la pelvis y evitar la flexión lumbar."
              ],
              alternativa_segura: {
                  asana_id: 'asana_setu_bandhasana',
                  nombre: 'Setu Bandhasana',
                  razon: 'Fortalece la cadena posterior y descomprime el espacio lumbar en un plano sagital simétrico sin cizallamiento torsional.'
              }
          },
          {
              condicion: 'embarazo',
              riesgo: 'moderado',
              explicacion_clinica: 'Las torsiones profundas cerradas comprimen la cavidad abdominal y reducen el espacio intrauterino, además de generar tensión en la sínfisis púbica por la hiperlaxitud inducida por relaxina.',
              modificaciones: [
                  "Realizar únicamente torsiones abiertas girando el torso hacia el lado opuesto a la pierna flexionada.",
                  "Mantener las dos piernas separadas con espacio suficiente para el abdomen sin cruzar las extremidades."
              ],
              alternativa_segura: {
                  asana_id: 'asana_balasana',
                  nombre: 'Balasana',
                  razon: 'Proporciona relajación espinal y descarga lumbar con rodillas ampliamente separadas para acomodar el vientre de forma neutra.'
              }
          },
          {
              condicion: 'problemas_rodilla',
              riesgo: 'moderado',
              explicacion_clinica: 'La flexión hiperaguda combinada con rotación tibial en la pierna inferior puede pellizcar el menisco medial y sobrecargar los ligamentos colaterales.',
              modificaciones: [
                  "Mantener la pierna inferior completamente extendida hacia el frente en Dandasana.",
                  "Colocar un bloque o soporte debajo de la rodilla flexionada para reducir el ángulo de flexión articular."
              ],
              alternativa_segura: null
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_uttanasana',
                  nombre: 'Uttanasana',
                  instrucciones_transicion: [
                      "Desde Uttanasana, flexionar rodillas y descender la pelvis de manera controlada hasta sentarse en el suelo con piernas extendidas.",
                      "Flexionar la rodilla derecha cruzando el pie sobre el muslo izquierdo y doblar la rodilla izquierda llevando el talón hacia el glúteo derecho.",
                      "Inhalar extendiendo la columna hacia la vertical y exhalar iniciando la torsión hacia la derecha."
                  ],
                  consejos_seguridad: 'Asegurarse de asentar ambos isquiones antes de iniciar la rotación de tronco para proteger la zona lumbar.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_balasana',
                  nombre: 'Balasana',
                  instrucciones_transicion: [
                      "Inhalar regresando lentamente la cabeza y el tronco hacia la línea media neutral.",
                      "Descruzar suavemente ambas piernas y llevar las rodillas hacia los laterales de la esterilla.",
                      "Exhalar plegando el torso hacia adelante entre los muslos y apoyar la frente en el suelo."
                  ],
                  consejos_seguridad: 'Moverse lentamente durante el desenrollado de la columna para permitir que los discos intervertebrales y ligamentos se reacomoden.'
              }
          ]
      }
  },
  {
      id: 'asana_balasana',
      nombre_sanscrito: 'Balasana',
      nombre_espanol: 'Postura del niño',
      nombre_ingles: "Child's Pose",
      familia_biomecanica: 'restaurativa',
      nivel_dificultad: 'principiante',
      descripcion: 'Postura restaurativa de flexión anterior y descarga axial en la que el torso reposa sobre o entre los muslos desde una posición de rodillas, promoviendo la relajación del sistema nervioso parasimpático y la descompresión de la columna vertebral.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 10,
          avanzado: 15
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Recto abdominal',
                  musculo_id: 'recto_abdominal',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene una suave contención visceral y asiste en la flexión del tronco hacia los muslos.'
              },
              {
                  musculo: 'Psoas mayor',
                  musculo_id: 'psoas_mayor',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la flexión profunda de cadera aproximando la pelvis hacia el fémur en descarga.'
              },
              {
                  musculo: 'Oblicuo externo del abdomen',
                  musculo_id: 'oblicuo_externo_abdomen',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Estabiliza el tronco en el plano sagital permitiendo el reposo sobre el soporte inferior.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Diafragma',
                  musculo_id: 'diafragma',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Dirige la expansión respiratoria hacia la caja torácica posterior y lateral al estar restringido el abdomen.'
              },
              {
                  musculo: 'Serrato anterior',
                  musculo_id: 'serrato_anterior',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Facilita la protracción y rotación superior de la escápula cuando los brazos se proyectan al frente.'
              },
              {
                  musculo: 'Tibial anterior',
                  musculo_id: 'tibial_anterior',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene el dorso del pie alineado sobre el suelo facilitando la flexión plantar pasiva.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Erectores de la columna',
                  musculo_id: 'erectores_columna',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se elongan pasivamente a lo largo de toda la columna vertebral, liberando tensión paravertebral.'
              },
              {
                  musculo: 'Glúteo mayor',
                  musculo_id: 'gluteo_mayor',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Permite la máxima flexión de la articulación coxofemoral en descenso hacia los talones.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Dedos gordos de los pies en contacto con los talones ligeramente separados para recibir los isquiones.",
              "Rodillas abiertas al ancho de las caderas o del mat para permitir el descenso y acomodo del torso.",
              "Isquiones proyectados hacia los talones buscando una elongación constante del raquis lumbosacro.",
              "Frente descansando sobre el mat o soporte manteniendo la columna cervical neutra y sin compresión.",
              "Brazos extendidos hacia adelante con palmas al suelo o relajados hacia atrás junto a las piernas."
          ]
      },
      contraindicaciones: [
          {
              condicion: 'problemas_rodilla',
              riesgo: 'alto',
              explicacion_clinica: 'La hiperflexión mantenida de rodilla bajo compresión corporal genera alta presión intraarticular y tensión en los ligamentos meniscofemorales.',
              modificaciones: [
                  "Colocar una manta enrollada en el pliegue poplíteo detrás de las rodillas.",
                  "Sentarse sobre un bloque colocado entre los pies para reducir el ángulo de flexión."
              ],
              alternativa_segura: {
                  asana_id: 'asana_supta_baddha_konasana',
                  nombre: 'Supta Baddha Konasana',
                  razon: 'Permite el descanso y la apertura de cadera en descarga sin hiperflexionar la articulación de la rodilla.'
              }
          },
          {
              condicion: 'embarazo',
              riesgo: 'moderado',
              explicacion_clinica: 'La compresión del abdomen contra los muslos puede restringir la ventilación materna y comprimir la cavidad uterina.',
              modificaciones: [
                  "Separar ampliamente las rodillas dejando espacio suficiente para el vientre.",
                  "Apoyar el torso y la cabeza longitudinalmente sobre un bolster."
              ],
              alternativa_segura: null
          },
          {
              condicion: 'hipertension_arterial',
              riesgo: 'bajo',
              explicacion_clinica: 'Tener la cabeza significativamente por debajo del corazón de forma prolongada puede incrementar la presión intracraneal y vascular cefálica.',
              modificaciones: [
                  "Apoyar la frente sobre uno o dos bloques para mantener la cabeza al mismo nivel que el corazón.",
                  "Cruzar los antebrazos bajo la frente para elevar el nivel del cráneo."
              ],
              alternativa_segura: null
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_marjaryasana_bitilasana',
                  nombre: 'Marjaryasana-Bitilasana (Postura de Gato-Vaca)',
                  instrucciones_transicion: [
                      "Desde cuatro apoyos, junta los dedos gordos de los pies y abre ligeramente las rodillas.",
                      "Exhala mientras trasladas las caderas hacia los talones y extiendes las manos al frente."
                  ],
                  consejos_seguridad: 'Asegurar que el retroceso de la pelvis sea gradual sin generar pellizco en ingles ni rodillas.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_adho_mukha_svanasana',
                  nombre: 'Adho Mukha Svanasana (Postura del perro boca abajo)',
                  instrucciones_transicion: [
                      "Inhala elevando el torso a cuatro apoyos y enraíza las palmas de las manos.",
                      "Engancha los metatarsos y eleva las caderas hacia arriba y atrás extendiendo la columna."
                  ],
                  consejos_seguridad: 'Presionar firmemente la base del índice y pulgar para proteger las muñecas durante la transición.'
              }
          ]
      }
  },
  {
      id: 'asana_ustrasana',
      nombre_sanscrito: 'Ustrasana',
      nombre_espanol: 'Camello',
      nombre_ingles: 'Camel Pose',
      familia_biomecanica: 'extension_posterior',
      nivel_dificultad: 'intermedio',
      descripcion: 'Postura de extensión axial posterior de rodillas donde se proyecta la pelvis hacia adelante y la caja torácica hacia el techo mientras las manos contactan los talones o el sacro, generando una intensa apertura anterior.',
      duracion_sugerida_respiraciones: {
          principiante: 3,
          intermedio: 5,
          avanzado: 8
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Glúteo mayor',
                  musculo_id: 'gluteo_mayor',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Extiende la articulación de la cadera contrarrestando la tendencia de la pelvis a retraerse tras la línea de las rodillas.'
              },
              {
                  musculo: 'Erector de la columna',
                  musculo_id: 'erector_columna',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Genera la extensión global de la columna vertebral distribuyendo la curvatura a lo largo de los segmentos torácico y lumbar.'
              },
              {
                  musculo: 'Cuádriceps femoral',
                  musculo_id: 'cuadriceps_femoral',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Estabiliza la articulación de la rodilla en el plano sagital y soporta la palanca del tronco inclinado posteriormente.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Romboides mayor y menor',
                  musculo_id: 'romboides',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Retraen y fijan las escápulas hacia la línea media, facilitando la expansión del pecho y la rotación externa humeral.'
              },
              {
                  musculo: 'Deltoides posterior',
                  musculo_id: 'deltoides_posterior',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Asiste en la hiperextensión del hombro para permitir que las manos alcancen los talones.'
              },
              {
                  musculo: 'Isquiotibiales',
                  musculo_id: 'isquiotibiales',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Co-activan la extensión de la cadera y estabilizan la articulación femorotibial durante la carga.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Recto abdominal',
                  musculo_id: 'recto_abdominal',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se elonga bajo control excéntrico para regular el arco espinal y prevenir el colapso por compresión en las facetas lumbares.'
              },
              {
                  musculo: 'Psoas ilíaco',
                  musculo_id: 'psoas_iliaco',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Sufre un estiramiento longitudinal profundo en la cara anterior de la cadera ante la retroversión relativa y extensión pélvica.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Mantener los muslos perpendiculares al suelo con las caderas alineadas verticalmente sobre las rodillas.",
              "Elevar el esternón hacia el techo antes de iniciar la extensión para maximizar la apertura torácica y proteger la zona lumbar.",
              "Presionar firmemente los empeines o los metatarsos contra el suelo para activar la cadena posterior estabilizadora.",
              "Retraer y descender las escápulas abriendo las clavículas sin encoger los hombros hacia las orejas.",
              "Extender el cuello de manera continua con la curva torácica o mantener el mentón ligeramente recogido si hay hipersensibilidad cervical."
          ]
      },
      contraindicaciones: [
          {
              condicion: 'hernias_discales',
              riesgo: 'alto',
              explicacion_clinica: 'La hiperextensión de la columna lumbar incrementa la presión posterior en los discos intervertebrales y carillas articulares lumbosacras.',
              modificaciones: [
                  "Mantener las manos firmes sobre el sacro con los dedos hacia abajo para limitar el rango de extensión",
                  "Colocar bloques a los lados de los tobillos para reducir la distancia al apoyo de las manos"
              ],
              alternativa_segura: {
                  asana_id: 'asana_setu_bandhasana',
                  nombre: 'Setu Bandhasana (Postura del Puente)',
                  razon: 'Proporciona una extensión posterior moderada con descarga axial y apoyo dorsal en el suelo.'
              }
          },
          {
              condicion: 'problemas_rodilla',
              riesgo: 'moderado',
              explicacion_clinica: 'La compresión directa de la rótula contra el suelo combinada con la tensión excéntrica del cuádriceps puede irritar el tendón rotuliano o la bursa prepatelar.',
              modificaciones: [
                  "Colocar una manta doblada de alta densidad bajo ambas rodillas y tibias",
                  "Realizar la variante de pie apoyando manos en la pared o sacro"
              ],
              alternativa_segura: {
                  asana_id: 'asana_bhujangasana',
                  nombre: 'Bhujangasana (Postura de la Cobra)',
                  razon: 'Fomenta la extensión espinal eliminando la carga de peso directa sobre las rodillas.'
              }
          },
          {
              condicion: 'vertigo',
              riesgo: 'moderado',
              explicacion_clinica: 'La hiperextensión cervical brusca puede comprometer temporalmente la arteria vertebral y estimular el sistema vestibular desencadenando mareos.',
              modificaciones: [
                  "Mantener la cabeza en posición neutra con la mirada hacia adelante o al techo sin dejarla caer hacia atrás",
                  "Realizar la transición de salida con respiraciones lentas y control visual fijo"
              ],
              alternativa_segura: null
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_vajrasana',
                  nombre: 'Vajrasana (Postura del Rayo)',
                  instrucciones_transicion: [
                      "Elevar las caderas desde los talones hasta quedar de rodillas con las piernas separadas al ancho de las caderas.",
                      "Colocar las manos en la zona lumbar con los dedos apuntando hacia abajo y activar glúteos antes de arquear el torso."
                  ],
                  consejos_seguridad: 'Asegurar la alineación de rodillas bajo caderas antes de llevar las manos hacia los talones.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_balasana',
                  nombre: 'Balasana (Postura del Niño)',
                  instrucciones_transicion: [
                      "Activar la musculatura abdominal y elevar el torso guiando el movimiento desde el esternón de vuelta al centro.",
                      "Descender suavemente las caderas hacia los talones y flexionar el tronco hacia adelante hasta apoyar la frente en el suelo."
                  ],
                  consejos_seguridad: 'Pausar brevemente en posición de rodillas neutra antes de la flexión completa para estabilizar la presión arterial.'
              }
          ]
      }
  },
  {
      id: 'asana_navasana',
      nombre_sanscrito: 'Navasana',
      nombre_espanol: 'Barco',
      nombre_ingles: 'Boat Pose',
      familia_biomecanica: 'sentada',
      nivel_dificultad: 'intermedio',
      descripcion: 'Flexión isométrica de la cadera que exige estabilidad del core profundo para mantener el equilibrio sobre los isquiones. Requiere fuerza de hombros para sostener el tronco erguido mientras los muslos se mantienen en paral�elo al suelo.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 8,
          avanzado: 12
      },
      imagenes_ilustrativas: {
          foto_principal: '/img/asanas/navasana_frontal.jpg',
          ilustracion_vectorial: '/svg/asanas/navasana_vector.svg',
          overlay_alineacion: '/img/overlays/navasana_alineacion.png',
          overlay_vectores_fuerza: '/img/overlays/navasana_fuerza.png'
      },
      video_loop: {
          frontal: {
              url: '/video/navasana_frontal.mp4',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '/video/navasana_lateral.mp4',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '/video/navasana_360.mp4',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Recto abdominal',
                  musculo_id: 'rectus_abdominis',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Compression vertebral para mantener la columna erécta contra la gravedad.'
              },
              {
                  musculo: 'Flexores de la cadera (Iliopsoas)',
                  musculo_id: 'iliopsoas',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la flexión de 90° en la cadera estabilizando el fémur.'
              },
              {
                  musculo: 'Cuádriceps',
                  musculo_id: 'quadriceps',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Estabiliza la rodilla y mantiene la tibia en ángulo recto respecto al fémur.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Oblicuos internos y externos',
                  musculo_id: 'obliqui',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Controlan rotaciones involuntarias del tronco para mantener la simetría.'
              },
              {
                  musculo: 'Erectores de la espina',
                  musculo_id: 'erector_spinae',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la extensión leve de la columna, evitando la hipercifosis.'
              },
              {
                  musculo: 'Deltoide anterior',
                  musculo_id: 'deltoid_anterior',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Sostiene los brazos extendidos frente a las rodillas, reduciendo el centro de gravedad efectivo.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Isquiotibiales',
                  musculo_id: 'hamstrings',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Se encuentran en longitud acortada funcionalmente pero deben mantener tensión para estabilizar la pelvis.'
              },
              {
                  musculo: 'Músculos glúteos',
                  musculo_id: 'gluteus',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Trabajan para prevenir la rotación interna excesiva del fémur durante la isometría.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Isquiones anclados firmemente al suelo",
              "Columna vertebral alargada hacia arriba, sin arquear la zona lumbar",
              "Muslos paralelos entre sí y al plano del suelo",
              "Brazos extendidos paralelos a los muslos o tocando las rodillas",
              "Mirada suavemente hacia los pies o al infinito, manteniendo el cuello alineado"
          ]
      },
      contraindicaciones: [
          {
              condicion: 'hernias_discales',
              riesgo: 'moderado',
              explicacion_clinica: 'La flexión sostenida de la cadera aumenta la presión intradiscal lumbar, pudiendo exacerbar突出ios discales si hay compromiso neural.',
              modificaciones: [
                  "Doblar rodillas hacia el pecho para reducir el ángulo de flexión"
              ],
              alternativa_segura: {
                  asana_id: 'asana_bhujangasana',
                  nombre: 'Cobra',
                  razon: 'Fortalece el core en extensión, reduciendo la compresión discal anterior.'
              }
          },
          {
              condicion: 'hipertension_arterial',
              riesgo: 'bajo',
              explicacion_clinica: 'El esfuerzo isométrico sostenido puede provocar picos transitorios de presión arterial si se aguantan las respiraciones.',
              modificaciones: [
                  "Mantener la respiración continua y fluida"
              ],
              alternativa_segura: {
                  asana_id: 'asana_vrksasana',
                  nombre: 'Postura del Árbol',
                  razon: 'Ofrece equilibrio con menor carga estática en el core abdominal.'
              }
          },
          {
              condicion: 'problemas_muneca',
              riesgo: 'bajo',
              explicacion_clinica: 'Aunque es una postura de sedestación, la extensión de brazos sobre las rodillas puede comprometer las muñecas en supinación completa.',
              modificaciones: [
                  "Relajar los huesos de la muñeca y asegurar línea neutral"
              ],
              alternativa_segura: null
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_balasana',
                  nombre: 'Postura del Niño',
                  instrucciones_transicion: [
                      "Voltear hacia el lado izquierdo y sentarse sobre los isquiones",
                      "Elevar los muslos hasta llegar a la posición de barco, utilizando las manos en el suelo como apoyo inicial"
                  ],
                  consejos_seguridad: 'No forzar la elevación de las piernas si hay fatiga lumbar; mantener el apoyo de las manos.'
              },
              {
                  postura_origen_id: 'asana_adho_mukha_svanasana',
                  nombre: 'Perro con la Cara Hacia Abajo',
                  instrucciones_transicion: [
                      "Flexionar rodillas y encoger caderas hacia los talones",
                      "Aguantar la posición de barco desde una sentación estable, exhalando para alargar la columna antes de dejar la espalda del suelo"
                  ],
                  consejos_seguridad: 'Establecer el anclaje de los isquiones antes de elevar el tronco para evitar caída o esfuerzo excesivo.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_virabhadrasana_ii',
                  nombre: 'Guerrero II',
                  instrucciones_transicion: [
                      "Bajar una pierna al suelo hacia delante, extendiendo el tronco",
                      "Apoyar la otra pierna detrás, alargando la columna verticalmente"
                  ],
                  consejos_seguridad: 'Mantener la transición controlada para evitar tensión en la cadera anterior.'
              },
              {
                  postura_destino_id: 'asana_savasana',
                  nombre: 'Postura del Cadáver',
                  instrucciones_transicion: [
                      "Retomar una postura de sentación con piernas extendidas y relajadas",
                      "Rotar hacia un costado y rodar sobre la espalda, extendiendo los brazos a los lados"
                  ],
                  consejos_seguridad: 'Permitir que la columna descomprima gradualmente tras la carga isométrica.'
              }
          ]
      }
  },
  {
      id: 'asana_halasana',
      nombre_sanscrito: 'Halasana',
      nombre_espanol: 'Arado',
      nombre_ingles: 'Plow Pose',
      familia_biomecanica: 'inversion',
      nivel_dificultad: 'intermedio',
      descripcion: 'Involucra una flexión profunda de la columna con inversión pélvica, cargando axialmente sobre las cervicales mientras los pies pasan sobre la cabeza.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 8,
          avanzado: 12
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Abs (Recto Abdominal)',
                  musculo_id: 'abs',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Lleva la pelvis hacia la frente y extiende la columna'
              },
              {
                  musculo: 'Isquiotibiales',
                  musculo_id: 'isquios',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Balancean el estiramiento en la parte posterior del muslo'
              },
              {
                  musculo: 'Glúteos',
                  musculo_id: 'gluteal',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Ayudan a inicializar el plegado flexional de las caderas'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Bíceps Femoral',
                  musculo_id: 'bicep_femoral',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Estabiliza la rodilla durante la extensión'
              },
              {
                  musculo: 'Gemelos',
                  musculo_id: 'gemelo',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantenimiento de la línea de las piernas'
              },
              {
                  musculo: 'Trapecio Inferior',
                  musculo_id: 'trapecio_inf',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Apoya la estabilidad escapular bajo peso corporal'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Erectores Espinales',
                  musculo_id: 'erectores',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se estiran a lo largo de la extensión de la columna torácica y lumbar'
              },
              {
                  musculo: 'Cuádriceps',
                  musculo_id: 'cuadriceps',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Pasivo frente a la flexión aguda de rodilla'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Manos equidistantes al ancho de los hombros",
              "Codos alineados con el torso (no rotados hacia fuera)",
              "Talones apuntando al techo, no colgando",
              "Cuello neutral, presión baja de la cabeza en el suelo",
              "Rodillas flexionadas y juntas durante la entrada"
          ]
      },
      contraindicaciones: [
          {
              condicion: 'hipertension_arterial',
              riesgo: 'alto',
              explicacion_clinica: 'La inversión aumente brusca la presión intracraneal y sistémica.',
              modificaciones: [
                  "Mantener la postura menos de 3 respiraciones",
                  "Apuntar la cabeza más abajo que la pelvis para reducir el golpe de presión"
              ],
              alternativa_segura: {
                  asana_id: 'asana_balasana',
                  nombre: 'Balasana',
                  razon: 'Plegado de flexión anterior con apoyo en muslos y cabeza libre. Sin inversión total.'
              }
          },
          {
              condicion: 'hernias_discales',
              riesgo: 'alto',
              explicacion_clinica: 'La carga axial sobre la C4-C7 durante el support en los omóplatos puede comprimir discos cervicales.',
              modificaciones: [
                  "Usar cojines bajo los omóplatos para invertir el T1-T2",
                  "Evitar cargar el peso del cuerpo en la cabeza"
              ],
              alternativa_segura: null
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_adho_mukha_svanasana',
                  nombre: 'Adho Mukha Svanasana',
                  instrucciones_transicion: [
                      "Expirar y llevar la pelvis hacia arriba alineando manos-caderas-talones",
                      "Flexionar rodillas y pasar una pierna a la vez sobre la cabeza"
                  ],
                  consejos_seguridad: 'Mantener los codos rígidos para soportar el peso de la columna media.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_bhujangasana',
                  nombre: 'Bhujangasana',
                  instrucciones_transicion: [
                      "Apoyar la cabeza y el pecho en el suelo rompiendo la extensión",
                      "Deslizar la pelvis hacia abajo y meter rodillas y codos",
                      "Curl up para encogida fetal o balón"
                  ],
                  consejos_seguridad: 'No hacer fuerza excesiva para arrastrar el cuerpo, evitar estiramientos bruscos en la zona lumbar.'
              }
          ]
      }
  },
  {
      id: 'asana_sirsasana',
      nombre_sanscrito: 'Sirsasana',
      nombre_espanol: 'Parada de cabeza',
      nombre_ingles: 'Headstand',
      familia_biomecanica: 'inversion',
      nivel_dificultad: 'avanzado',
      descripcion: 'Inversión axial completa sobre la coronilla y la base de los antebrazos, requiriendo estabilidad escapular profunda, integración de la pared abdominal y alineación vertical neutra de la columna vertebral.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 10,
          avanzado: 25
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Serrato anterior',
                  musculo_id: 'serrato_anterior',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la protracción y rotación superior de las escápulas, descargando el peso axial de la columna cervical.'
              },
              {
                  musculo: 'Transverso del abdomen',
                  musculo_id: 'transverso_del_abdomen',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Crea presión intraabdominal para estabilizar la pelvis en retroversión neutra y evitar la hiperextensión lumbar.'
              },
              {
                  musculo: 'Deltoides anterior',
                  musculo_id: 'deltoides_anterior',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Sostiene la flexión del hombro y estabiliza el trípode de apoyo antebrazo-codo.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Trapecio medio e inferior',
                  musculo_id: 'trapecio_medio_inferior',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Deprime y estabiliza la cintura escapular evitando el colapso sobre el cuello.'
              },
              {
                  musculo: 'Erectores espinales',
                  musculo_id: 'erectores_espinales',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantienen la columna recta y alineada en contra de la fuerza de gravedad.'
              },
              {
                  musculo: 'Tríceps braquial',
                  musculo_id: 'triceps_braquial',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Fija la articulación del codo a 90 grados y presiona activamente los antebrazos contra el suelo.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Pectoral mayor',
                  musculo_id: 'pectoral_mayor',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se elonga pasivamente permitiendo la apertura del tórax y la flexión completa del complejo escapulohumeral.'
              },
              {
                  musculo: 'Psoas ilíaco',
                  musculo_id: 'psoas_iliaco',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Permanece en elongación funcional con extensión neutra de cadera sin arquear la zona lumbar.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Codos separados al ancho exacto de los hombros formando un triángulo equilátero con las manos entrelazadas.",
              "Coronilla (fontanela superior) apoyada en el suelo con el 70-80% del peso soportado por los antebrazos y hombros.",
              "Escápulas activamente elevadas lejos de las orejas para crear espacio en la columna cervical.",
              "Pelvis, hombros, rodillas y tobillos apilados en una estricta línea de gravedad perpendicular al suelo.",
              "Pies activos en flexión plantar con dedos en extensión (floint) manteniendo los aductores integrados."
          ]
      },
      contraindicaciones: [
          {
              condicion: 'hipertension_arterial',
              riesgo: 'alto',
              explicacion_clinica: 'La inversión completa incrementa significativamente la presión arterial cefálica y la postcarga cardíaca, elevando el riesgo de eventos cerebrovasculares.',
              modificaciones: [
                  "Evitar retención de la respiración si se practica.",
                  "Usar silla de inversión con soporte en hombros sin apoyar la cabeza."
              ],
              alternativa_segura: {
                  asana_id: 'asana_viparita_karani',
                  nombre: 'Viparita Karani con soporte',
                  razon: 'Produce efectos restaurativos con menor gradiente de presión arterial y sin carga axial.'
              }
          },
          {
              condicion: 'glaucoma',
              riesgo: 'alto',
              explicacion_clinica: 'La posición invertida duplica la presión intraocular (PIO), comprometiendo la perfusión del nervio óptico y agravando el daño glaucomatoso.',
              modificaciones: [
                  "Evitar totalmente cualquier inversión donde la cabeza esté por debajo del corazón."
              ],
              alternativa_segura: {
                  asana_id: 'asana_tadasana',
                  nombre: 'Tadasana',
                  razon: 'Postura neutra de pie que no altera la presión intraocular ni el drenaje del humor acuoso.'
              }
          },
          {
              condicion: 'hernias_discales',
              riesgo: 'alto',
              explicacion_clinica: 'La carga axial sobre las vértebras cervicales puede causar compresión foraminal severa, pinzamiento radicular y riesgo de compromiso medular.',
              modificaciones: [
                  "Utilizar un banco de inversión (FeetUp) que descargue por completo la columna cervical sobre los hombros."
              ],
              alternativa_segura: {
                  asana_id: 'asana_ardha_pincha_mayurasana',
                  nombre: 'Delfín (Ardha Pincha Mayurasana)',
                  razon: 'Fortalece la cintura escapular sin aplicar ninguna carga axial o de compresión en el cuello.'
              }
          },
          {
              condicion: 'vertigo',
              riesgo: 'alto',
              explicacion_clinica: 'La desorientación del sistema vestibular y la pérdida de la referencia visual incrementan drásticamente el riesgo de caída y traumatismo.',
              modificaciones: [
                  "Práctica asistida directamente contra una esquina de pared con apoyo constante."
              ],
              alternativa_segura: {
                  asana_id: 'asana_balasana',
                  nombre: 'Balasana (Postura del Niño)',
                  razon: 'Postura en suelo con amplia base de sustentación que estabiliza el sistema vestibular y reduce mareos.'
              }
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_ardha_pincha_mayurasana',
                  nombre: 'Ardha Pincha Mayurasana (Postura del Delfín)',
                  instrucciones_transicion: [
                      "Entrelazar los dedos de las manos apoyando la coronilla en el suelo contra las palmas.",
                      "Caminar con los pies hacia los codos elevando la pelvis sobre la línea de los hombros.",
                      "Elevar una o ambas piernas flexionadas hacia el pecho con control abdominal antes de extenderlas hacia la vertical."
                  ],
                  consejos_seguridad: 'Nunca saltar ni usar impulso; la elevación debe ser controlada desde la fuerza del core y la protracción escapular.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_balasana',
                  nombre: 'Balasana (Postura del Niño)',
                  instrucciones_transicion: [
                      "Flexionar las caderas y rodillas descendiendo lentamente las piernas con control abdominal.",
                      "Apoyar los pies en el suelo, descender las rodillas y descansar la frente sobre el suelo o los puños.",
                      "Permanecer al menos 5 a 8 respiraciones completas sin levantar la cabeza bruscamente."
                  ],
                  consejos_seguridad: 'Permanecer con la cabeza abajo en Balasana para permitir que la presión arterial y el retorno venoso se normalicen progresivamente.'
              }
          ]
      }
  },
  {
      id: 'asana_parivrtta_trikonasana',
      nombre_sanscrito: 'Parivrtta Trikonasana',
      nombre_espanol: 'Triángulo girado',
      nombre_ingles: 'Revolved Triangle Pose',
      familia_biomecanica: 'torsion',
      nivel_dificultad: 'avanzado',
      descripcion: 'Postura de flexión anterior combinada con torsión espinal profunda y piernas extendidas, que demanda estabilización pélvica tridimensional y movilidad torácica axial.',
      duracion_sugerida_respiraciones: {
          principiante: 3,
          intermedio: 5,
          avanzado: 8
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Oblicuo externo del abdomen contralateral',
                  musculo_id: 'oblicuo_externo_abdomen',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Tracciona las costillas contralaterales hacia la pelvis anterior para impulsar la torsión toracolumbar.'
              },
              {
                  musculo: 'Oblicuo interno del abdomen ipsilateral',
                  musculo_id: 'oblicuo_interno_abdomen',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Asiste en la rotación axial del tronco traccionando la cresta ilíaca hacia el tórax ipsilateral.'
              },
              {
                  musculo: 'Glúteo medio de la pierna adelantada',
                  musculo_id: 'gluteo_medio',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Fija y estabiliza la pelvis en aducción y rotación interna relativa impidiendo la caída lateral.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Multífidos y rotadores vertebrales',
                  musculo_id: 'multifidos',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Producen microajustes de rotación intersegmentaria y sostienen la elongación axial de la columna.'
              },
              {
                  musculo: 'Cuádriceps femoral bilateral',
                  musculo_id: 'cuadriceps_femoral',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la extensión completa y activa de ambas rodillas protegiendo las articulaciones.'
              },
              {
                  musculo: 'Serrato anterior del brazo de apoyo',
                  musculo_id: 'serrato_anterior',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Estabiliza la escápula contra la caja torácica para transmitir la fuerza de empuje desde el suelo.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Isquiotibiales de la pierna adelantada',
                  musculo_id: 'isquiotibiales',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Sufren elongación profunda debido a la flexión de cadera combinada con rodilla en extensión completa.'
              },
              {
                  musculo: 'Tracto iliotibial y tensor de la fascia lata ipsilateral',
                  musculo_id: 'tensor_fascia_lata',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se elongan en la cara anterolateral de la cadera adelantada debido a la aducción relativa y torsión axial.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Pies separados aproximadamente a un metro de distancia, alineando talón con talón o al ancho de caderas para mayor estabilidad pélvica.",
              "Pie trasero angulado entre 45 y 60 grados hacia el frente, presionando con firmeza el borde externo y el talón contra el suelo.",
              "Pelvis neutra y nivelada en el plano transversal antes de iniciar la torsión para proteger la articulación sacroilíaca.",
              "Mano contralateral situada en el suelo o bloque por fuera del pie adelantado, ejerciendo empuje activo para elongar la columna.",
              "Brazos alineados en una línea vertical perpendicular al suelo, con la mirada orientada hacia el pulgar superior si la columna cervical lo permite."
          ]
      },
      contraindicaciones: [
          {
              condicion: 'hernias_discales',
              riesgo: 'alto',
              explicacion_clinica: 'La flexión anterior simultánea con torsión axial impone fuerzas de cizallamiento asimétricas severas sobre los discos intervertebrales lumbares.',
              modificaciones: [
                  "Colocar un bloque de yoga a altura máxima debajo de la mano",
                  "Evitar la torsión lumbar manteniendo la rotación exclusivamente torácica"
              ],
              alternativa_segura: {
                  asana_id: 'asana_trikonasana',
                  nombre: 'Trikonasana',
                  razon: 'Permite apertura lateral y extensión axial sin someter los discos a cizallamiento por torsión.'
              }
          },
          {
              condicion: 'hipertension_arterial',
              riesgo: 'moderado',
              explicacion_clinica: 'Mantener el tórax por debajo de la línea cardíaca combinado con compresión abdominal puede aumentar la presión intracraneal y la resistencia vascular periférica.',
              modificaciones: [
                  "Mantener la mirada hacia el suelo o al frente",
                  "Apoyar la mano en un soporte alto para evitar que la cabeza descienda por debajo del corazón"
              ],
              alternativa_segura: null
          },
          {
              condicion: 'problemas_rodilla',
              riesgo: 'moderado',
              explicacion_clinica: 'La torsión del tronco puede transmitir estrés torsional a la rodilla adelantada si los ligamentos colaterales o meniscos están comprometidos.',
              modificaciones: [
                  "Mantener una microflexión activa en la rodilla adelantada",
                  "Acortar la distancia entre los pies"
              ],
              alternativa_segura: {
                  asana_id: 'asana_virabhadrasana_ii',
                  nombre: 'Virabhadrasana II',
                  razon: 'Proporciona alineación articular estable en flexión sagital controlada sin fuerzas de torsión articular.'
              }
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_uttanasana',
                  nombre: 'Uttanasana',
                  instrucciones_transicion: [
                      "Desde la flexión de pie, dar un paso largo hacia atrás con un pie apoyándolo a 45 grados.",
                      "Alargar la columna hacia adelante, situar la mano opuesta por fuera del pie delantero y rotar el tronco elevando el brazo superior."
                  ],
                  consejos_seguridad: 'Estabilizar las bases de apoyo y cuadrar la pelvis antes de comenzar a rotar la columna.'
              },
              {
                  postura_origen_id: 'asana_trikonasana',
                  nombre: 'Trikonasana',
                  instrucciones_transicion: [
                      "Descender el brazo superior hacia el suelo cuadrando el torso hacia la pierna adelantada.",
                      "Reajustar el pie posterior hacia adentro a 45 grados y rotar el torso en sentido inverso elevando el brazo contralateral."
                  ],
                  consejos_seguridad: 'Alargar la columna hacia adelante antes de iniciar la torsión inversa para evitar compresión discal.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_adho_mukha_svanasana',
                  nombre: 'Adho Mukha Svanasana',
                  instrucciones_transicion: [
                      "Descender la mano superior a la esterilla enmarcando el pie delantero con ambas manos.",
                      "Dar un paso atrás con la pierna delantera elevando la pelvis hacia arriba y atrás."
                  ],
                  consejos_seguridad: 'Descomprimir la zona lumbar extendiendo activamente la columna en una posición simétrica y neutra.'
              },
              {
                  postura_destino_id: 'asana_uttanasana',
                  nombre: 'Uttanasana',
                  instrucciones_transicion: [
                      "Llevar ambas manos al suelo a los lados del pie delantero mientras se deshace la torsión.",
                      "Dar un paso adelante con el pie trasero para juntar ambos pies y relajarse en flexión hacia adelante."
                  ],
                  consejos_seguridad: 'Microflexionar ambas rodillas durante la transición para proteger los isquiotibiales.'
              }
          ]
      }
  },
  {
      id: 'asana_padmasana',
      nombre_sanscrito: 'Padmasana',
      nombre_espanol: 'Loto',
      nombre_ingles: 'Lotus Pose',
      familia_biomecanica: 'sentada',
      nivel_dificultad: 'intermedio',
      descripcion: 'Sedestación simétrica con máxima rotación externa, flexión y abducción de la articulación coxofemoral, apoyando los dorsos de los pies sobre los muslos opuestos. Requiere una columna vertebral erguida en eje neutro con activación estabilizadora del core para distribuir la carga axial sobre los isquiones.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 10,
          avanzado: 25
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Sartorio',
                  musculo_id: 'sartorio',
                  tipo_contraccion: 'concentrica',
                  explicacion: 'Ejecuta de forma combinada la flexión, abducción y rotación externa de la cadera junto con la flexión de la rodilla para posicionar el pie sobre el muslo opuesto.'
              },
              {
                  musculo: 'Piriforme',
                  musculo_id: 'piriforme',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la rotación externa profunda y estabiliza la cabeza femoral dentro del acetábulo durante el mantenimiento estático.'
              },
              {
                  musculo: 'Obturador Interno',
                  musculo_id: 'obturador_interno',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Co-asiste en la rotación externa coxofemoral continua, fijando la articulación de la cadera sin comprometer el eje axial.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Erectores Espinales',
                  musculo_id: 'erectores_espinales',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Extienden y preservan las curvaturas fisiológicas de la columna vertebral contrarrestando la tendencia al colapso en retroversión pélvica.'
              },
              {
                  musculo: 'Transverso del Abdomen',
                  musculo_id: 'transverso_del_abdomen',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Comprime la cavidad abdominal aumentando la presión intraabdominal y proveyendo un soporte lumbopélvico estable.'
              },
              {
                  musculo: 'Tibial Anterior',
                  musculo_id: 'tibial_anterior',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la dorsiflexión e inversión controlada del tobillo para proteger los ligamentos laterales del pie sobre el muslo.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Tensor de la Fascia Lata',
                  musculo_id: 'tensor_de_la_fascia_lata',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se elonga longitudinalmente al oponerse a la rotación externa extrema y a la abducción completa de la cadera.'
              },
              {
                  musculo: 'Glúteo Menor',
                  musculo_id: 'gluteo_menor',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Sus fibras de rotación interna experimentan estiramiento pasivo sostenido ante el rango articular máximo de la postura.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Apoyo simétrico y enraizamiento de ambas tuberosidades isquiáticas sobre el suelo con pelvis en posición neutra.",
              "Rotación externa completa originada estrictamente desde las articulaciones coxofemorales y nunca forzada desde la rodilla.",
              "Tobillos en ligera dorsiflexión activa para evitar la torsión o hiperextensión ligamentosa del compartimento lateral.",
              "Elongación axial de la columna vertebral desde el sacro hasta la coronilla, con retracción suave del mentón (Jalandhara Bandha sutil).",
              "Hombros descendidos y escápulas aducidas en neutro, permitiendo apertura de la caja torácica y relajación de los brazos sobre las rodillas."
          ]
      },
      contraindicaciones: [
          {
              condicion: 'problemas_rodilla',
              riesgo: 'alto',
              explicacion_clinica: 'La falta de rango articular en la rotación externa coxofemoral transfiere un torque lesivo de cizallamiento y torsión a los meniscos y ligamentos colaterales de la rodilla.',
              modificaciones: [
                  "Realizar Ardha Padmasana (medio loto) colocando solo un pie sobre el muslo y el otro en el suelo debajo de la rodilla opuesta.",
                  "Utilizar un bloque o cojín de meditación bajo los isquiones para elevar la pelvis y reducir la flexión/rotación extrema en las rodillas."
              ],
              alternativa_segura: {
                  asana_id: 'asana_balasana',
                  nombre: 'Balasana',
                  razon: 'Permite descanso y flexión de caderas y rodillas en un plano sagital cerrado sin someter la articulación a fuerzas de torsión rotacional.'
              }
          },
          {
              condicion: 'hernias_discales',
              riesgo: 'moderado',
              explicacion_clinica: 'Si los flexores y rotadores de cadera están rígidos, la pelvis bascula en retroversión, provocando hiperflexión lumbar continua que incrementa la presión intradiscal posterior.',
              modificaciones: [
                  "Sentarse sobre un zafu o manta firme manteniendo la lordosis lumbar neutra.",
                  "Apoyar la espalda contra una pared para controlar la alineación axial."
              ],
              alternativa_segura: {
                  asana_id: 'asana_savasana',
                  nombre: 'Savasana',
                  razon: 'Mantiene la columna completamente apoyada y descargada en posición neutra sobre el suelo eliminando la carga axial gravitatoria.'
              }
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_balasana',
                  nombre: 'Balasana',
                  instrucciones_transicion: [
                      "Elevar el torso desde Balasana hacia una postura sentada con la pelvis neutra.",
                      "Extender las piernas al frente en Dandasana, flexionar y rotar externamente la primera cadera trayendo el pie hacia el pliegue inguinal opuesto, y luego repetir con la segunda pierna."
                  ],
                  consejos_seguridad: 'Asegurarse de rotar la pierna completamente desde el fémur antes de cerrar el ángulo de la rodilla para no torsionar la articulación.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_savasana',
                  nombre: 'Savasana',
                  instrucciones_transicion: [
                      "Desenganchar cuidadosamente con las manos el pie superior y luego el pie inferior, extendiendo ambas piernas lentamente hacia el frente.",
                      "Descender la columna vértebra por vértebra hasta tenderse en decúbito supino, separando pies y brazos para relajación completa."
                  ],
                  consejos_seguridad: 'Evitar desarmar la postura con movimientos bruscos de las piernas; liberar la articulación de la rodilla con suavidad.'
              }
          ]
      }
  },
  {
      id: 'asana_bakasana',
      nombre_sanscrito: 'Bakasana',
      nombre_espanol: 'Cuervo',
      nombre_ingles: 'Crow Pose',
      familia_biomecanica: 'equilibrio',
      nivel_dificultad: 'avanzado',
      descripcion: 'Equilibrio sobre brazos caracterizado por una flexión espinal y de cadera máxima con protracción escapular activa, donde el centro de masa corporal se proyecta directamente sobre la base de sustentación palmar.',
      duracion_sugerida_respiraciones: {
          principiante: 3,
          intermedio: 5,
          avanzado: 10
      },
      imagenes_ilustrativas: {
          foto_principal: '',
          ilustracion_vectorial: '',
          overlay_alineacion: '',
          overlay_vectores_fuerza: ''
      },
      video_loop: {
          frontal: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: '',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: '',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Serrato anterior',
                  musculo_id: 'serrato_anterior',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Ejecuta y sostiene la protracción y depresión escapular para evitar el colapso torácico entre los hombros.'
              },
              {
                  musculo: 'Recto abdominal',
                  musculo_id: 'recto_abdominal',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la flexión del tronco y la compresión anteroposterior elevando la pelvis hacia el cenit.'
              },
              {
                  musculo: 'Iliopsoas',
                  musculo_id: 'iliopsoas',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la flexión coxofemoral aguda acercando los muslos activamente hacia el abdomen y los tríceps.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Tríceps braquial',
                  musculo_id: 'triceps_braquial',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Co-contrae para estabilizar la articulación del codo en ligera semiflexión o extensión controlada.'
              },
              {
                  musculo: 'Pectoral mayor',
                  musculo_id: 'pectoral_mayor',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Asiste en la aducción horizontal y fijación anterior de la cintura escapular.'
              },
              {
                  musculo: 'Flexor radial del carpo',
                  musculo_id: 'flexor_radial_carpo',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Genera presión palmar activa contra el suelo controlando el momento de inercia y microajustes de equilibrio.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Erector de la columna',
                  musculo_id: 'erector_columna',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Cede longitudinalmente para permitir la curvatura en cifosis global funcional de la columna vertebral.'
              },
              {
                  musculo: 'Glúteo mayor',
                  musculo_id: 'gluteo_mayor',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se elonga pasivamente ante la flexión coxofemoral completa mantenida por los flexores anteriores.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "Manos separadas al ancho de los hombros con dedos abiertos en abducción y microflexión en nudillos (hasta bandha).",
              "Rodillas posicionadas firmemente en la cara posterior de los brazos, lo más cerca posible de las axilas.",
              "Protracción escapular activa empujando el suelo para ensanchar el espacio interescapular.",
              "Mirada (drishti) dirigida ligeramente hacia adelante del borde frontal del mat, evitando la hiperextensión cervical.",
              "Aducción activa de tobillos y talones compactados hacia los isquiones mediante flexión plantar y de rodilla."
          ]
      },
      contraindicaciones: [
          {
              condicion: 'problemas_muneca',
              riesgo: 'alto',
              explicacion_clinica: 'La carga axial combinada con una dorsiflexión forzada a 90 grados genera compresión excesiva en el túnel carpiano y fibrocartílago triangular.',
              modificaciones: [
                  "Usar cuña ergonómica bajo el talón de la mano para reducir el ángulo de flexión dorsal.",
                  "Practicar la compresión abdominal en posición supina sobre el suelo."
              ],
              alternativa_segura: {
                  asana_id: 'asana_balasana',
                  nombre: 'Balasana',
                  razon: 'Permite descanso articular en muñecas manteniendo la flexión de cadera y columna sin carga de peso.'
              }
          },
          {
              condicion: 'embarazo',
              riesgo: 'alto',
              explicacion_clinica: 'Riesgo de caída traumática frontal sobre el abdomen e incremento severo de la presión intraabdominal por activación de maniobra de Valsalva.',
              modificaciones: [
                  "Evitar balances sobre brazos; trabajar estabilidad monopodal en bipedestación."
              ],
              alternativa_segura: {
                  asana_id: 'asana_vrksasana',
                  nombre: 'Vrksasana',
                  razon: 'Desarrolla propiocepción y equilibrio vertical seguro sin compresión abdominal.'
              }
          },
          {
              condicion: 'glaucoma',
              riesgo: 'moderado',
              explicacion_clinica: 'El descenso cefálico relativo junto a la presión intratorácica isométrica incrementa transitoriamente la presión intraocular.',
              modificaciones: [
                  "Mantener la cabeza más elevada que la pelvis sin levantar los pies del suelo."
              ],
              alternativa_segura: {
                  asana_id: 'asana_uttanasana',
                  nombre: 'Uttanasana con apoyo alto',
                  razon: 'Flexión anterior asistida sin aumento de presión intraocular sostenida por esfuerzo isométrico máximo.'
              }
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_uttanasana',
                  nombre: 'Uttanasana',
                  instrucciones_transicion: [
                      "Flexiona las rodillas profundamente hasta apoyar las palmas completas en el suelo al ancho de hombros.",
                      "Eleva los talones, encaja las rodillas sobre la cara posterior de los tríceps y desplaza el peso corporal hacia adelante hasta elevar los pies."
                  ],
                  consejos_seguridad: 'Evita saltar hacia la postura; la elevación de los pies debe ocurrir por transferencia pura de masa hacia adelante.'
              },
              {
                  postura_origen_id: 'asana_balasana',
                  nombre: 'Balasana',
                  instrucciones_transicion: [
                      "Incorpórate a posición de cuclillas compacta con las rodillas separadas y los pies juntos.",
                      "Coloca las manos firmemente en el suelo frente a ti, conecta rodillas a tríceps y transfiere el peso hacia las muñecas."
                  ],
                  consejos_seguridad: 'Asegura el enganche escapular antes de despegar los metatarsos del suelo.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_adho_mukha_svanasana',
                  nombre: 'Adho Mukha Svanasana',
                  instrucciones_transicion: [
                      "Mantén el empuje de hombros y proyecta los pies hacia atrás suavemente o mediante salto controlado aterrizando con codos flexionados.",
                      "Extiende los brazos y eleva la pelvis en retroversión funcional hacia Perro Boca Abajo."
                  ],
                  consejos_seguridad: 'Si se realiza transición flotada o por salto, amortiguar con ligera flexión de codos para proteger muñecas y hombros.'
              },
              {
                  postura_destino_id: 'asana_balasana',
                  nombre: 'Balasana',
                  instrucciones_transicion: [
                      "Desciende los pies lentamente al suelo con control excéntrico de los flexores.",
                      "Baja las rodillas al suelo, junta los pulgares de los pies y retrocede las caderas hacia los talones descansando los brazos."
                  ],
                  consejos_seguridad: 'Descarga las muñecas rotando suavemente los carpos tras la liberación del apoyo.'
              }
          ]
      }
  },
  {
      id: 'asana_salamba_sarvangasana',
      nombre_sanscrito: 'Salamba Sarvangasana',
      nombre_espanol: 'Vela',
      nombre_ingles: 'Shoulderstand',
      familia_biomecanica: 'inversion',
      nivel_dificultad: 'intermedio',
      descripcion: 'Inversión vertical soportada donde el peso corporal se transfiere a la cintura escapular y los brazos, requiriendo flexión cervical pasiva y una coactivación axial del tronco y las extremidades inferiores para mantener una columna neutra verticalizada.',
      duracion_sugerida_respiraciones: {
          principiante: 5,
          intermedio: 10,
          avanzado: 20
      },
      imagenes_ilustrativas: {
          foto_principal: 'https://images.yoga-biomechanics.io/asanas/salamba_sarvangasana/main.jpg',
          ilustracion_vectorial: 'https://images.yoga-biomechanics.io/asanas/salamba_sarvangasana/vector.svg',
          overlay_alineacion: 'https://images.yoga-biomechanics.io/asanas/salamba_sarvangasana/alignment.svg',
          overlay_vectores_fuerza: 'https://images.yoga-biomechanics.io/asanas/salamba_sarvangasana/forces.svg'
      },
      video_loop: {
          frontal: {
              url: 'https://videos.yoga-biomechanics.io/asanas/salamba_sarvangasana/frontal.mp4',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          lateral: {
              url: 'https://videos.yoga-biomechanics.io/asanas/salamba_sarvangasana/lateral.mp4',
              duracion_segundos: 5,
              resolucion: '1080p'
          },
          rotacion_360: {
              url: 'https://videos.yoga-biomechanics.io/asanas/salamba_sarvangasana/360.mp4',
              duracion_segundos: 7,
              resolucion: '1080p'
          },
          errores_comunes: []
      },
      trabajo_muscular: {
          agonistas: [
              {
                  musculo: 'Tríceps braquial',
                  musculo_id: 'triceps_brachii',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Presiona los brazos y codos firmemente contra el suelo para elevar el torso y mantener la base de sustentación.'
              },
              {
                  musculo: 'Erector de la columna',
                  musculo_id: 'erector_spinae',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Mantiene la extensión axial del tronco contrarrestando la tendencia al colapso por gravedad.'
              },
              {
                  musculo: 'Romboides mayor y menor',
                  musculo_id: 'rhomboids',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Retrae y fija las escápulas para proteger la columna cervical y elevar la caja torácica.'
              }
          ],
          sinergicos: [
              {
                  musculo: 'Glúteo mayor',
                  musculo_id: 'gluteus_maximus',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Estabiliza la articulación coxofemoral en extensión neutra sobre la línea del tronco.'
              },
              {
                  musculo: 'Cuádriceps femoral',
                  musculo_id: 'quadriceps_femoris',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Extiende activamente las rodillas para mantener las piernas rectas y compactas.'
              },
              {
                  musculo: 'Transverso del abdomen',
                  musculo_id: 'transversus_abdominis',
                  tipo_contraccion: 'isometrica',
                  explicacion: 'Estabiliza el núcleo lumbo-pélvico previniendo la hiperextensión lumbar.'
              }
          ],
          antagonistas_elongados: [
              {
                  musculo: 'Pectoral mayor',
                  musculo_id: 'pectoralis_major',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Se elonga de manera pasiva ante la profunda retracción escapular y apertura torácica.'
              },
              {
                  musculo: 'Musculatura extensora cervical superficial (Trapecio superior)',
                  musculo_id: 'upper_trapezius',
                  tipo_contraccion: 'excentrica',
                  explicacion: 'Experimenta elongación pasiva longitudinal debido a la hiperflexión de la columna cervical.'
              }
          ]
      },
      alineacion: {
          puntos_clave: [
              "El peso corporal recae sobre la parte superior de los hombros y los tríceps, nunca sobre las vértebras cervicales.",
              "Los codos deben mantenerse paralelos entre sí, alineados exactamente al ancho de los hombros con las manos sosteniendo la espalda media-alta.",
              "La pelvis, los hombros y los tobillos deben trazar una línea vertical perpendicular al suelo.",
              "Las piernas permanecen activas en aducción ligera y extensión completa, con los metatarsos proyectados hacia el techo.",
              "El cuello se mantiene alineado en posición neutra sagital sin girar la cabeza hacia los lados bajo ninguna circunstancia."
          ]
      },
      contraindicaciones: [
          {
              condicion: 'hernias_discales',
              riesgo: 'alto',
              explicacion_clinica: 'La flexión cervical extrema combinada con la carga compresiva del peso corporal puede agravar protusiones o hernias cervicales preexistentes.',
              modificaciones: [
                  "Usar mantas dobladas bajo los hombros dejando el cuello y la cabeza fuera del soporte para reducir el ángulo de flexión.",
                  "Realizar la postura con soporte de silla para descargar el peso axial de la columna."
              ],
              alternativa_segura: {
                  asana_id: 'asana_setu_bandhasana',
                  nombre: 'Setu Bandhasana',
                  razon: 'Proporciona una inversión suave y elevación torácica sin generar compresión axial sobre la columna cervical.'
              }
          },
          {
              condicion: 'hipertension_arterial',
              riesgo: 'alto',
              explicacion_clinica: 'La inversión total incrementa significativamente la presión arterial intracraneal e hidrostática central, lo que puede inducir crisis hipertensivas.',
              modificaciones: [
                  "Limitar el tiempo de permanencia a menos de 3 respiraciones guiadas.",
                  "Elevar las piernas sobre un bloque o pared manteniendo el torso en ángulo diagonal."
              ],
              alternativa_segura: {
                  asana_id: 'asana_setu_bandhasana',
                  nombre: 'Setu Bandhasana',
                  razon: 'Permite una inversión moderada y regulada reduciendo la sobrecarga hemodinámica cefálica.'
              }
          },
          {
              condicion: 'glaucoma',
              riesgo: 'alto',
              explicacion_clinica: 'El incremento de la presión venosa epiescleral durante la inversión completa eleva peligrosamente la presión intraocular.',
              modificaciones: [
                  "Evitar la inversión completa manteniendo la cabeza elevada con respecto al corazón."
              ],
              alternativa_segura: null
          }
      ],
      transiciones_sugeridas: {
          entrar_desde: [
              {
                  postura_origen_id: 'asana_setu_bandhasana',
                  nombre: 'Setu Bandhasana',
                  instrucciones_transicion: [
                      "Desde la elevación de la pelvis en Setu Bandhasana, coloca las palmas firmemente en la espalda media-baja.",
                      "Camina los codos hacia adentro para cerrar la base de soporte escapular.",
                      "Eleva una pierna a la vertical seguida de la otra contrayendo el abdomen y los extensores de columna."
                  ],
                  consejos_seguridad: 'Asegúrate de no rotar la cabeza al elevar las piernas y mantén la presión constante en los tríceps contra el suelo.'
              }
          ],
          salir_hacia: [
              {
                  postura_destino_id: 'asana_balasana',
                  nombre: 'Balasana',
                  instrucciones_transicion: [
                      "Flexiona suavemente las rodillas hacia la frente y desciende la columna vértebra por vértebra con control abdominal.",
                      "Gira hacia un costado, incorpórate sobre cuatro puntos de apoyo y empuja la pelvis hacia los talones descansando el torso sobre los muslos."
                  ],
                  consejos_seguridad: 'Permanece en Balasana varias respiraciones para permitir la readaptación hemodinámica y la descompresión cervical.'
              },
              {
                  postura_destino_id: 'asana_savasana',
                  nombre: 'Savasana',
                  instrucciones_transicion: [
                      "Desciende las piernas lentamente desenrollando la columna vértebra a vértebra usando los brazos como freno contra el suelo.",
                      "Apoya la pelvis, extiende las piernas hacia adelante y relaja los brazos a los costados con las palmas hacia arriba."
                  ],
                  consejos_seguridad: 'Evita levantar bruscamente la cabeza al descender la espalda para no generar tensión cervical refleja.'
              }
          ]
      }
  }
];
