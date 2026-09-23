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
    video_loop: {
      frontal: { url: '', duracion_segundos: 6, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 8, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Cuádriceps',
          musculo_id: 'quadriceps',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene la rodilla delantera flexionada a 90° contra la gravedad.'
        },
        {
          musculo: 'Deltoides medio',
          musculo_id: 'deltoid_middle',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene ambos brazos en abducción horizontal a 90°.'
        },
        {
          musculo: 'Glúteo medio',
          musculo_id: 'gluteus_medius',
          tipo_contraccion: 'isometrica',
          explicacion: 'Rotación externa de cadera y estabilización pélvica.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erector_spinae',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene columna vertebral erguida.'
        },
        {
          musculo: 'Transverso abdominal',
          musculo_id: 'transversus_abdominis',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabilidad del core y protección lumbar.'
        },
        {
          musculo: 'Trapecio medio',
          musculo_id: 'trapezius_middle',
          tipo_contraccion: 'isometrica',
          explicacion: 'Retracción escapular para apertura torácica.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Aductores',
          musculo_id: 'adductors',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan por la apertura lateral de cadera.'
        },
        {
          musculo: 'Psoas ilíaco',
          musculo_id: 'iliopsoas',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga por extensión de cadera posterior.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Rodilla sobre tobillo, sin sobrepasar dedos',
        'Muslo delantero paralelo al suelo',
        'Torso vertical',
        'Brazos a altura de hombros',
        'Mirada sobre la mano delantera',
        'Alinear la rodilla delantera directamente sobre el talón sin sobrepasar el tobillo ni colapsar hacia el interior',
        'Distribuir el peso equitativamente entre ambos pies presionando el borde externo del pie posterior'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'La flexión sostenida a 90° genera estrés en ligamentos colaterales y cartílago rotuliano.',
        modificaciones: ['No flexionar más de 90°', 'Usar bloque bajo muslo', 'Reducir amplitud de zancada'],
        alternativa_segura: {
          asana_id: 'asana_vrksasana',
          nombre: 'Vrksasana (Árbol)',
          razon: 'Trabaja equilibrio sin carga axial sobre rodilla flexionada'
        }
      },
      {
        condicion: 'vertigo',
        riesgo: 'moderado',
        explicacion_clinica: 'El giro de cabeza combinado con posición amplia puede provocar mareo.',
        modificaciones: ['Mantener mirada al frente', 'Entrar y salir lentamente', 'Practicar cerca de pared'],
        alternativa_segura: {
          asana_id: 'asana_savasana',
          nombre: 'Savasana',
          razon: 'Sin rotación cervical ni riesgo de desequilibrio'
        }
      },
      {
        condicion: 'embarazo',
        riesgo: 'moderado',
        explicacion_clinica: 'La relaxina aumenta laxitud ligamentosa, riesgo de sobreestiramiento.',
        modificaciones: ['Reducir amplitud', 'Usar silla como soporte', 'No sostener más de 3 respiraciones'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          postura_origen_id: 'asana_savasana',
          nombre: 'Tadasana',
          instrucciones_transicion: [
            'Separar pies 1.2m',
            'Girar pie derecho 90°',
            'Girar pie izquierdo 15° hacia adentro',
            'Flexionar rodilla derecha lentamente',
            'Extender brazos horizontalmente'
          ],
          consejos_seguridad: 'Girar pie antes de flexionar rodilla para proteger la articulación.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_bhujangasana',
          nombre: 'Utthita Parsvakonasana',
          instrucciones_transicion: ['Mantener flexión de rodilla', 'Inclinar torso lateralmente', 'Apoyar antebrazo en muslo'],
          consejos_seguridad: 'No colapsar peso sobre pierna delantera.'
        }
      ]
    }
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
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Deltoides anterior',
          musculo_id: 'deltoid_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene el peso del torso con los brazos extendidos.'
        },
        {
          musculo: 'Cuádriceps',
          musculo_id: 'quadriceps',
          tipo_contraccion: 'concentrica',
          explicacion: 'Extiende las rodillas activamente.'
        },
        {
          musculo: 'Serrato anterior',
          musculo_id: 'serratus_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza escápulas contra la caja torácica.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Tríceps',
          musculo_id: 'triceps',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene codos extendidos bajo carga.'
        },
        {
          musculo: 'Abdominales',
          musculo_id: 'rectus_abdominis',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza pelvis y columna.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Isquiotibiales',
          musculo_id: 'hamstrings',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan por la flexión de cadera con rodillas extendidas.'
        },
        {
          musculo: 'Gemelos',
          musculo_id: 'gastrocnemius',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan al intentar apoyar talones en el suelo.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Manos separadas ancho de hombros',
        'Pies separados ancho de caderas',
        'Columna elongada',
        'Cabeza entre los brazos',
        'Talones buscando el suelo',
        "Presionar firmemente la base de los dedos índice y pulgar ('hasta bandha') para descargar el túnel carpiano",
        'Rotar externamente los brazos ensanchando los omóplatos y alargando la columna desde las caderas'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'glaucoma',
        riesgo: 'alto',
        explicacion_clinica: 'La posición invertida incrementa la presión intraocular de forma aguda.',
        modificaciones: [],
        alternativa_segura: {
          asana_id: 'asana_virabhadrasana_ii',
          nombre: 'Virabhadrasana II',
          razon: 'Fortalece sin invertir cabeza bajo corazón'
        }
      },
      {
        condicion: 'hipertension_arterial',
        riesgo: 'moderado',
        explicacion_clinica: 'Cabeza bajo corazón puede elevar presión intracraneal.',
        modificaciones: ['Sostener máximo 3 respiraciones', 'Elevar manos con silla'],
        alternativa_segura: null
      },
      {
        condicion: 'problemas_muneca',
        riesgo: 'moderado',
        explicacion_clinica: 'Carga axial sobre muñecas en dorsiflexión.',
        modificaciones: ['Usar cuñas bajo talón de mano', 'Variante Delfín en antebrazos'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          postura_origen_id: 'asana_bhujangasana',
          nombre: 'Tabla',
          instrucciones_transicion: ['Desde tabla, exhalar y elevar caderas', 'Empujar suelo con manos', 'Llevar pecho hacia muslos'],
          consejos_seguridad: 'No redondear espalda al subir caderas.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_bhujangasana',
          nombre: 'Bhujangasana',
          instrucciones_transicion: ['Inhalar, desplazar peso a tabla', 'Exhalar, descender controladamente', 'Inhalar, elevar pecho a Cobra'],
          consejos_seguridad: 'Codos a 90° máximo en descenso.'
        }
      ]
    }
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
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 6, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erector_spinae',
          tipo_contraccion: 'concentrica',
          explicacion: 'Extienden la columna activamente contra la gravedad.'
        },
        {
          musculo: 'Glúteos',
          musculo_id: 'gluteus_maximus',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabilizan pelvis y protegen lumbar.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Trapecios',
          musculo_id: 'trapezius',
          tipo_contraccion: 'concentrica',
          explicacion: 'Retraen escápulas para abrir pecho.'
        },
        {
          musculo: 'Romboides',
          musculo_id: 'rhomboids',
          tipo_contraccion: 'concentrica',
          explicacion: 'Aducción escapular.'
        },
        {
          musculo: 'Tríceps',
          musculo_id: 'triceps',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostienen peso con brazos semi-extendidos.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Recto abdominal',
          musculo_id: 'rectus_abdominis',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga por la extensión del tronco.'
        },
        {
          musculo: 'Psoas ilíaco',
          musculo_id: 'iliopsoas',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estira con la extensión de cadera.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Manos bajo hombros',
        'Codos pegados al cuerpo',
        'Pubis en contacto con el suelo',
        'Hombros lejos de orejas',
        'Mirada al frente',
        'Presionar activamente el pubis y los empeines contra el suelo manteniendo los glúteos firmes',
        'Traccionar isométrica y suavemente con las manos hacia atrás para expandir el pecho sin comprimir la zona lumbar'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'La extensión lumbar comprime discos posteriores, agravando hernias.',
        modificaciones: [],
        alternativa_segura: { asana_id: 'asana_savasana', nombre: 'Savasana', razon: 'Descanso sin carga vertebral' }
      },
      {
        condicion: 'embarazo',
        riesgo: 'alto',
        explicacion_clinica: 'Presión directa sobre abdomen en posición prona.',
        modificaciones: [],
        alternativa_segura: { asana_id: 'asana_vrksasana', nombre: 'Vrksasana', razon: 'Fortalecimiento sin posición prona' }
      },
      {
        condicion: 'problemas_muneca',
        riesgo: 'moderado',
        explicacion_clinica: 'Carga en muñecas en dorsiflexión.',
        modificaciones: ['Apoyar en antebrazos (Esfinge)', 'Usar puños cerrados'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          postura_origen_id: 'asana_savasana',
          nombre: 'Prono',
          instrucciones_transicion: ['Acostarse boca abajo', 'Manos bajo hombros', 'Inhalar y elevar pecho lentamente'],
          consejos_seguridad: 'Elevar con fuerza de espalda, no empujando con brazos.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_adho_mukha_svanasana',
          nombre: 'Adho Mukha Svanasana',
          instrucciones_transicion: ['Exhalar, elevar caderas', 'Empujar suelo con manos', 'Llevar pecho hacia muslos'],
          consejos_seguridad: 'Transición fluida sin dejar caer peso.'
        }
      ]
    }
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
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Glúteo medio',
          musculo_id: 'gluteus_medius',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza pelvis en apoyo unipodal.'
        },
        {
          musculo: 'Cuádriceps',
          musculo_id: 'quadriceps',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene rodilla de apoyo estable.'
        },
        {
          musculo: 'Tibial posterior',
          musculo_id: 'tibialis_posterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza arco del pie.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Abdominales',
          musculo_id: 'rectus_abdominis',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabilización central.'
        },
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erector_spinae',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen columna erguida.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Aductores',
          musculo_id: 'adductors',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan por rotación externa y abducción de cadera.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Pie de apoyo enraizado',
        'Pie elevado en muslo o pantorrilla, NUNCA en rodilla',
        'Caderas niveladas',
        'Coronilla al techo',
        'Presionar activamente la planta del pie elevado contra el muslo o pantorrilla interna, evitando siempre el contacto directo sobre la articulación de la rodilla',
        'Mantener la pelvis neutra y nivelada sin volcar el peso sobre la cadera de la pierna de apoyo'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'vertigo',
        riesgo: 'moderado',
        explicacion_clinica: 'Equilibrio unipodal puede desencadenar inestabilidad.',
        modificaciones: ['Practicar junto a pared', 'Fijar mirada en punto estático'],
        alternativa_segura: { asana_id: 'asana_savasana', nombre: 'Savasana', razon: 'Sin demanda de equilibrio' }
      },
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'Presión del pie contra muslo puede estresar rodilla de apoyo.',
        modificaciones: ['No apoyar pie en rodilla', 'Apoyar pie en pantorrilla'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          postura_origen_id: 'asana_savasana',
          nombre: 'Tadasana',
          instrucciones_transicion: ['Fijar mirada en un punto', 'Trasladar peso a pie izquierdo', 'Elevar pie derecho lentamente al muslo'],
          consejos_seguridad: 'Estabilizar tobillo antes de elevar pie.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_virabhadrasana_ii',
          nombre: 'Virabhadrasana II',
          instrucciones_transicion: ['Descender pie lentamente', 'Separar pies', 'Flexionar rodilla delantera'],
          consejos_seguridad: 'Descenso controlado, no dejar caer la pierna.'
        }
      ]
    }
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
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [],
      sinergicos: [
        {
          musculo: 'Diafragma',
          musculo_id: 'diaphragm',
          tipo_contraccion: 'isometrica',
          explicacion: 'Respiración consciente y profunda.'
        }
      ],
      antagonistas_elongados: []
    },
    alineacion: {
      puntos_clave: [
        'Piernas separadas ancho de caderas',
        'Brazos a los lados, palmas arriba',
        'Columna neutra',
        'Ojos cerrados',
        'Colocar un cojín o manta enrollada bajo los huecos poplíteos para liberar la tensión en la zona lumbar en decúbito supino',
        'Permitir la rotación externa natural de pies y brazos con las palmas orientadas hacia arriba'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'embarazo',
        riesgo: 'moderado',
        explicacion_clinica: 'Desde semana 20, posición supina puede comprimir vena cava inferior.',
        modificaciones: ['Acostarse sobre lado izquierdo', 'Usar bolster bajo rodillas'],
        alternativa_segura: null
      },
      {
        condicion: 'hipotension',
        riesgo: 'bajo',
        explicacion_clinica: 'Mareo ortostático al levantarse.',
        modificaciones: ['Incorporarse muy lentamente', 'Posición fetal antes de sentarse'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          postura_origen_id: 'asana_vrksasana',
          nombre: 'Postura final',
          instrucciones_transicion: ['Sentarse lentamente', 'Acostarse con control', 'Relajar todo el cuerpo'],
          consejos_seguridad: 'Descender con control.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_vrksasana',
          nombre: 'Tadasana',
          instrucciones_transicion: ['Mover dedos lentamente', 'Girar a posición fetal', 'Incorporarse con manos'],
          consejos_seguridad: 'Ascenso gradual para evitar mareo.'
        }
      ]
    }
  },
  {
    id: 'asana_trikonasana',
    nombre_sanscrito: 'Trikonasana',
    nombre_espanol: 'Triángulo',
    nombre_ingles: 'Triangle Pose',
    familia_biomecanica: 'bipedestacion',
    nivel_dificultad: 'principiante',
    descripcion: 'Postura de pie con flexión lateral del tronco sobre una base triangular de piernas extendidas, que promueve la elongación axial, apertura torácica y estabilización de la pelvis.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Pies separados aproximadamente a la distancia de una pierna, con el pie delantero a 90° y el trasero a 45-60° con el arco interno activo.',
        'Talón delantero alineado longitudinalmente con el arco medial o talón del pie trasero.',
        'Pelvis orientada hacia el costado manteniendo una bisagra pura de cadera (nutación) en la pierna frontal, sin rotar el torso hacia el piso.',
        'Brazos extendidos verticalmente en cruz formando una línea perpendicular continua respecto al suelo.',
        'Columna alargada bilateralmente evitando el colapso de las costillas del flanco inferior, con mirada hacia la mano superior o al frente.',
        'Alargar ambos costados del torso de forma simétrica sin redondear la espalda dorsal',
        'Apoyar la mano sobre un bloque por fuera del tobillo en lugar de forzar el apoyo en el suelo'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'vertigo',
        riesgo: 'moderado',
        explicacion_clinica: 'La rotación cervical y la mirada hacia la mano superior pueden desencadenar desorientación espacial, mareos o pérdida del equilibrio.',
        modificaciones: ['Mantener la mirada hacia el suelo o en punto fijo al frente en posición neutra cervical.', 'Practicar cerca de una pared para soporte propioceptivo.'],
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
          'Mantener una microflexión consciente en la rodilla adelantada activando el cuádriceps.',
          'Colocar un bloque de yoga detrás de la pantorrilla para evitar mecánicamente la hiperextensión.'
        ],
        alternativa_segura: null
      },
      {
        condicion: 'hernias_discales',
        riesgo: 'moderado',
        explicacion_clinica: 'Riesgo de cizallamiento y pinzamiento discal por la combinación de flexión lateral y ligera rotación del tronco.',
        modificaciones: [
          'Apoyar la mano delantera sobre un bloque en su máxima altura o sobre una silla para evitar la flexión lumbar profunda.',
          'Priorizar la elongación axial estricta sin intentar tocar el suelo.',
          'Apoyar la mano inferior sobre un bloque en su altura máxima',
          'Microflexionar la rodilla adelantada para proteger la articulación y la pelvis',
          'Evitar colapsar el costado inferior manteniendo ambos lados del torso largos'
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
            'Inhala extendiendo gradualmente la rodilla delantera sin bloquear la articulación.',
            'Exhala desplazando la pelvis hacia atrás mientras alargas el torso hacia adelante sobre el muslo frontal antes de descender la mano.'
          ],
          consejos_seguridad: 'Asegúrate de mantener ambos costados del torso largos durante el descenso, evitando arquear la zona lumbar.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_virabhadrasana_ii',
          nombre: 'Guerrero II',
          instrucciones_transicion: [
            'Inhala flexionando la rodilla delantera hasta alinearla perpendicularmente sobre el tobillo.',
            'Eleva el torso a la vertical con la fuerza del core manteniendo los brazos en cruz.'
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
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Rodilla flexionada alineada por encima del tobillo, sin proyectarse más allá del metatarso',
        'Cadera izquierda extendida y derecha flexionada (o viceversa) creando una línea paralela al suelo',
        'Hombros elevados equidistantes de las caderas, con palmas mirando al frente',
        'Segunda articulación del pie (ball of foot) apretada hacia la cabeza',
        'Cuello largo y línea media neutral',
        'Cuadrar las crestas ilíacas hacia el frente manteniendo la pelvis neutra sin forzar la lordosis lumbar',
        'Alinear la rodilla delantera exactamente sobre el talón y anclar el borde externo del pie trasero'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'La combinación de carga axial y flexión profunda puede aumentar la presión en el menisco si hay patología previa.',
        modificaciones: ['Reducir la profundidad de la flexión de rodilla', 'Flexionar ligeramente la rodilla trasera para mantener peso en el talón'],
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
        modificaciones: ['Mantener la respiración fluida y no forzar la contracción abdominal excesivamente'],
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
            'Expira mientras levantas la pierna derecha hacia atrás',
            'Palma y rodilla derecha caen al mat; flexiona la rodilla izquierda por encima del tobillo',
            'Extiende el torso hacia arriba manteniendo la cadera nivelada'
          ],
          consejos_seguridad: 'Mantén el core activo para evitar que la cadera trabaje hacia atrás excesivamente'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_adho_mukha_svanasana',
          nombre: 'Adho Mukha Svanasana',
          instrucciones_transicion: ['Expira mientras flexiona las rodillas y se hunde la pelvis hacia atrás', 'Encuentra apoyo en las manos y talones, elongando la columna'],
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
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 12 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Columnar vertebral vertical antes de iniciar la flexión',
        'Cadera desplazada hacia atrás para mantener rodillas a 90 grados',
        'Dedos de los pies apuntando hacia arriba o en posición neutra',
        'Costillas apretadas hacia el abdomen para neutralizar lumbar',
        'Frente acercándose a pantorrillas sin forzar cervicales',
        'Iniciar la flexión desde las articulaciones de la cadera manteniendo el pecho proyectado hacia adelante',
        'Activar los cuádriceps y mantener los pies en flexión dorsal activa sin redondear la espalda'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'Aumento crítico de la presión intradiscal posterior y riesgo de protrusión discal por flexión lumbar forzada.',
        modificaciones: [
          'Usar una cobija o bloque bajo la cadera',
          'Doblar ligeramente las rodillas para reducir tensión lumbar',
          'Flexionar ligeramente las rodillas',
          'Elevar la pelvis sentándose sobre una manta doblada firme para facilitar la anteversión pélvica',
          'Usar una cincha alrededor de los metatarsos manteniendo la columna completamente neutra'
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
        modificaciones: ['Entrecerrar ligeramente las rodillas', 'Elevar las rodillas ligeramente del suelo o usar apoyo'],
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
          instrucciones_transicion: ['Desplazar los glúteos hacia atrás hasta sentarse sobre los isquios', 'Extender las piernas rectas al frente manteniendo el core firme'],
          consejos_seguridad: 'Evitar el impulso vertiginoso al sentarse; moverse lento para estabilizar la pelvis.'
        },
        {
          postura_origen_id: 'asana_tadasana',
          nombre: 'Tadasana',
          instrucciones_transicion: ['Flexionar rodillas y sentarse en sukhasana', 'Extender piernas al frente antes de iniciar la flexión'],
          consejos_seguridad: 'Asegurar que la pelvis no se lateralice al sentarse.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_balasana',
          nombre: 'Balasana',
          instrucciones_transicion: ['Retraer el peso corporal hacia adelante', 'Flexionar rodillas y apoyar frente en muslos'],
          consejos_seguridad: 'Exhalal completamente al relajarse para liberar la tensión cervical.'
        },
        {
          postura_destino_id: 'asana_savasana',
          nombre: 'Savasana',
          instrucciones_transicion: ['Relajación completa de la cadena posterior', 'Extensión progresiva de extremidades'],
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
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 12 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Pies separados al ancho de caderas',
        'Rodillas bloqueadas pero sin hiperextensión',
        'Cadera empujada hacia atrás creando un T recto en vista lateral',
        "Torso pesado colgando hacia el suelo, no 'caer' activamente",
        'Cuello en prolongación de la columna sin pinzamiento cervical',
        'Girar la pelvis en anteversión antes de descender el tronco, evitando iniciar el movimiento desde la zona lumbar',
        'Repartir el peso hacia los metatarsos alineando las caderas sobre los tobillos'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'La flexión anterior con cadera cerrada aumenta la presión intradiscal posterior y puede comprimir las raíces nerviosas si hay protrusión.',
        modificaciones: ['Doblar las rodillas para reducir la tensión lumbar', 'Usar bloques o manos en la altura de la rodilla'],
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
        modificaciones: ['Limitar la duración del apoyo', 'Mantener los ojos abiertos y enfocados un punto fijo'],
        alternativa_segura: {
          asana_id: 'asana_trikonasana',
          nombre: 'Trikonasana',
          razon: 'Pose en pie neutra que estimula circulación sin gran inversión craneal.'
        }
      },
      {
        condicion: 'vertigo',
        riesgo: 'moderado',
        explicacion_clinica: 'El cambio postural rápido de cabeza abajo a bipedestación puede provocar mareos y desequilibrio vestibular.',
        modificaciones: [
          'Ascender muy lentamente articulando la columna vértebra por vértebra con las rodillas semiflexionadas',
          'Hacer una pausa intermedia en Ardha Uttanasana antes de incorporarse por completo'
        ],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          postura_origen_id: 'asana_vrksasana',
          nombre: 'Postura del árbol',
          instrucciones_transicion: ['Bajar al pie elevado junto al otro', 'Inhalar y llevar el pecho hacia arriba', 'Exhalar y doblar la cadera hacia adelante manteniendo rodillas rectas'],
          consejos_seguridad: 'Suelta el peso del cuerpo en los isquiotibiales, no en la parte baja de la espalda.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_adho_mukha_svanasana',
          nombre: 'Postura del perro boca abajo',
          instrucciones_transicion: [
            'Colocar las manos en el suelo al ancho de hombros',
            'Exhalar y separar los pies hasta el ancho de hombros',
            'Inclinar la cadera arriba y atrás hasta formar una V invertida'
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
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 12 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Pies paralelos al ancho de caderas con los cuatro puntos de apoyo de la planta firmes en el suelo.',
        'Rodillas alineadas verticalmente directamente sobre los tobillos, evitando que colapsen hacia adentro o se abran.',
        'Pelvis neutra elevada mediante la activación glútea sin hiperextender la columna lumbar.',
        'Escápulas retraídas por debajo de la espalda, transfiriendo el peso hacia los hombros y brazos.',
        'Cuello neutro y relajado con espacio libre en la curvatura cervical, evitando girar la cabeza durante la postura.',
        'Presionar firmemente las plantas de los pies paralelas entre sí evitando que las rodillas se abran hacia los lados',
        'Rotar externamente los hombros por debajo del tórax para proteger el cuello y abrir el esternón'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'moderado',
        explicacion_clinica: 'La compresión cervical por soporte de peso o una hiperextensión lumbar descontrolada puede agravar protrusion discal.',
        modificaciones: [
          'Colocar un bloque de yoga debajo del sacro para soporte pasivo sin esfuerzo muscular lumbar.',
          'Evitar entrelazar las manos debajo de la espalda para reducir la compresión cervical.'
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
          'Mantener una elevación baja o moderada del puente apoyando el sacro sobre un bloque en su altura más baja.',
          'Mantener respiraciones continuas y fluidas, evitando cualquier retención de aire (Kumbhaka).'
        ],
        alternativa_segura: null
      },
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'La flexión de rodilla con carga posterior puede generar estrés en los tendones rotulianos o ligamentos cruzados si los pies están mal ubicados.',
        modificaciones: [
          'Alejar los pies ligeramente más hacia adelante para abrir el ángulo articular de la rodilla a más de 90 grados.',
          'Colocar un bloque entre los muslos para mantener alineación adecuada de rodilla y fémur.'
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
            'Flexionar ambas rodillas apoyando las plantas de los pies firmemente en el piso al ancho de las caderas.',
            'Acercar los talones hacia los glúteos hasta que las yemas de los dedos de las manos puedan rozarlos.',
            'Presionar hombros y pies contra el suelo mientras se eleva la pelvis en la inhalación.'
          ],
          consejos_seguridad: 'Asegurar que la cabeza quede fija en el centro mirando hacia arriba antes de comenzar la elevación pélvica.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_apanasana',
          nombre: 'Apanasana',
          instrucciones_transicion: [
            'Descender lentamente la columna vértebra por vértebra en una exhalación controlada.',
            'Una vez que el sacro toca el suelo, abrazar suavemente ambas rodillas hacia el pecho.'
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
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Ambos isquiones permanecen firmemente apoyados y equilibrados sobre la esterilla o bloque.',
        'Elongación axial previa a la rotación: crecer en cada inhalación antes de profundizar el giro en la exhalación.',
        'Pie de la pierna cruzada completamente apoyado en el suelo junto a la cara externa del muslo contralateral.',
        'Hombros descendidos y paralelos entre sí, evitando la elevación hacia las orejas o protracción excesiva.',
        'La mirada y la columna cervical acompañan suavemente la torsión sin forzar el rango articular del cuello.',
        'Inhalar profundamente para alargar la columna hacia arriba antes de iniciar el giro en la exhalación',
        'Anclar ambos isquiones firmemente en el suelo manteniendo la pelvis nivelada'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'Fuerzas de cizallamiento y compresión rotacional asimétrica sobre el anillo fibroso de los discos vertebrales.',
        modificaciones: [
          'Mantener la pierna inferior extendida y limitar la torsión únicamente a un giro suave del tórax sin apalancamiento.',
          'Sentarse sobre una manta o bloque para neutralizar la pelvis y evitar la flexión lumbar.',
          'Mantener la columna rigurosamente erguida y elongada en todo momento',
          'Sentarse sobre una manta o bloque para elevar la pelvis',
          'Limitar el rango del giro a una torsión suave iniciada desde la zona dorsal media'
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
          'Realizar únicamente torsiones abiertas girando el torso hacia el lado opuesto a la pierna flexionada.',
          'Mantener las dos piernas separadas con espacio suficiente para el abdomen sin cruzar las extremidades.'
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
          'Mantener la pierna inferior completamente extendida hacia el frente en Dandasana.',
          'Colocar un bloque o soporte debajo de la rodilla flexionada para reducir el ángulo de flexión articular.'
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
            'Desde Uttanasana, flexionar rodillas y descender la pelvis de manera controlada hasta sentarse en el suelo con piernas extendidas.',
            'Flexionar la rodilla derecha cruzando el pie sobre el muslo izquierdo y doblar la rodilla izquierda llevando el talón hacia el glúteo derecho.',
            'Inhalar extendiendo la columna hacia la vertical y exhalar iniciando la torsión hacia la derecha.'
          ],
          consejos_seguridad: 'Asegurarse de asentar ambos isquiones antes de iniciar la rotación de tronco para proteger la zona lumbar.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_balasana',
          nombre: 'Balasana',
          instrucciones_transicion: [
            'Inhalar regresando lentamente la cabeza y el tronco hacia la línea media neutral.',
            'Descruzar suavemente ambas piernas y llevar las rodillas hacia los laterales de la esterilla.',
            'Exhalar plegando el torso hacia adelante entre los muslos y apoyar la frente en el suelo.'
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
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 10, avanzado: 15 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Dedos gordos de los pies en contacto con los talones ligeramente separados para recibir los isquiones.',
        'Rodillas abiertas al ancho de las caderas o del mat para permitir el descenso y acomodo del torso.',
        'Isquiones proyectados hacia los talones buscando una elongación constante del raquis lumbosacro.',
        'Frente descansando sobre el mat o soporte manteniendo la columna cervical neutra y sin compresión.',
        'Brazos extendidos hacia adelante con palmas al suelo o relajados hacia atrás junto a las piernas.',
        'Dejar que la pelvis descienda pesada hacia los talones relajando por completo la musculatura lumbar',
        'Apoyar la frente suavemente sobre el suelo o un bloque para liberar la tensión cervical'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'alto',
        explicacion_clinica: 'La hiperflexión mantenida de rodilla bajo compresión corporal genera alta presión intraarticular y tensión en los ligamentos meniscofemorales.',
        modificaciones: [
          'Colocar una manta enrollada en el pliegue poplíteo detrás de las rodillas.',
          'Sentarse sobre un bloque colocado entre los pies para reducir el ángulo de flexión.'
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
        modificaciones: ['Separar ampliamente las rodillas dejando espacio suficiente para el vientre.', 'Apoyar el torso y la cabeza longitudinalmente sobre un bolster.'],
        alternativa_segura: null
      },
      {
        condicion: 'hipertension_arterial',
        riesgo: 'bajo',
        explicacion_clinica: 'Tener la cabeza significativamente por debajo del corazón de forma prolongada puede incrementar la presión intracraneal y vascular cefálica.',
        modificaciones: [
          'Apoyar la frente sobre uno o dos bloques para mantener la cabeza al mismo nivel que el corazón.',
          'Cruzar los antebrazos bajo la frente para elevar el nivel del cráneo.'
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
            'Desde cuatro apoyos, junta los dedos gordos de los pies y abre ligeramente las rodillas.',
            'Exhala mientras trasladas las caderas hacia los talones y extiendes las manos al frente.'
          ],
          consejos_seguridad: 'Asegurar que el retroceso de la pelvis sea gradual sin generar pellizco en ingles ni rodillas.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_adho_mukha_svanasana',
          nombre: 'Adho Mukha Svanasana (Postura del perro boca abajo)',
          instrucciones_transicion: [
            'Inhala elevando el torso a cuatro apoyos y enraíza las palmas de las manos.',
            'Engancha los metatarsos y eleva las caderas hacia arriba y atrás extendiendo la columna.'
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
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Mantener los muslos perpendiculares al suelo con las caderas alineadas verticalmente sobre las rodillas.',
        'Elevar el esternón hacia el techo antes de iniciar la extensión para maximizar la apertura torácica y proteger la zona lumbar.',
        'Presionar firmemente los empeines o los metatarsos contra el suelo para activar la cadena posterior estabilizadora.',
        'Retraer y descender las escápulas abriendo las clavículas sin encoger los hombros hacia las orejas.',
        'Extender el cuello de manera continua con la curva torácica o mantener el mentón ligeramente recogido si hay hipersensibilidad cervical.',
        'Presionar las espinillas y empeines firmemente en el suelo manteniendo los muslos perpendiculares al suelo'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'Compresión foraminal y estrés mecánico severo sobre los discos lumbares en hiperextensión sin soporte adecuado.',
        modificaciones: [
          'Mantener las manos firmes sobre el sacro con los dedos hacia abajo para limitar el rango de extensión',
          'Colocar bloques a los lados de los tobillos para reducir la distancia al apoyo de las manos',
          'Mantener las manos en el sacro para estabilizar la pelvis y dirigir la extensión a la zona dorsal',
          'Colocar bloques junto a los tobillos para elevar el punto de apoyo de las manos',
          'Apoyar los dedos de los pies en flexión para elevar la altura de los talones'
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
        modificaciones: ['Colocar una manta doblada de alta densidad bajo ambas rodillas y tibias', 'Realizar la variante de pie apoyando manos en la pared o sacro'],
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
          'Mantener la cabeza en posición neutra con la mirada hacia adelante o al techo sin dejarla caer hacia atrás',
          'Realizar la transición de salida con respiraciones lentas y control visual fijo'
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
            'Elevar las caderas desde los talones hasta quedar de rodillas con las piernas separadas al ancho de las caderas.',
            'Colocar las manos en la zona lumbar con los dedos apuntando hacia abajo y activar glúteos antes de arquear el torso.'
          ],
          consejos_seguridad: 'Asegurar la alineación de rodillas bajo caderas antes de llevar las manos hacia los talones.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_balasana',
          nombre: 'Balasana (Postura del Niño)',
          instrucciones_transicion: [
            'Activar la musculatura abdominal y elevar el torso guiando el movimiento desde el esternón de vuelta al centro.',
            'Descender suavemente las caderas hacia los talones y flexionar el tronco hacia adelante hasta apoyar la frente en el suelo.'
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
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 12 },
    imagenes_ilustrativas: {
      foto_principal: '/img/asanas/navasana_frontal.jpg',
      ilustracion_vectorial: '/svg/asanas/navasana_vector.svg',
      overlay_alineacion: '/img/overlays/navasana_alineacion.png',
      overlay_vectores_fuerza: '/img/overlays/navasana_fuerza.png'
    },
    video_loop: {
      frontal: { url: '/video/navasana_frontal.mp4', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '/video/navasana_lateral.mp4', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '/video/navasana_360.mp4', duracion_segundos: 7, resolucion: '1080p' },
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
        'Isquiones anclados firmemente al suelo',
        'Columna vertebral alargada hacia arriba, sin arquear la zona lumbar',
        'Muslos paralelos entre sí y al plano del suelo',
        'Brazos extendidos paralelos a los muslos o tocando las rodillas',
        'Mirada suavemente hacia los pies o al infinito, manteniendo el cuello alineado'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'moderado',
        explicacion_clinica: 'La flexión sostenida de la cadera aumenta la presión intradiscal lumbar, pudiendo exacerbar突出ios discales si hay compromiso neural.',
        modificaciones: ['Doblar rodillas hacia el pecho para reducir el ángulo de flexión'],
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
        modificaciones: ['Mantener la respiración continua y fluida'],
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
        modificaciones: ['Relajar los huesos de la muñeca y asegurar línea neutral'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          postura_origen_id: 'asana_balasana',
          nombre: 'Postura del Niño',
          instrucciones_transicion: [
            'Voltear hacia el lado izquierdo y sentarse sobre los isquiones',
            'Elevar los muslos hasta llegar a la posición de barco, utilizando las manos en el suelo como apoyo inicial'
          ],
          consejos_seguridad: 'No forzar la elevación de las piernas si hay fatiga lumbar; mantener el apoyo de las manos.'
        },
        {
          postura_origen_id: 'asana_adho_mukha_svanasana',
          nombre: 'Perro con la Cara Hacia Abajo',
          instrucciones_transicion: [
            'Flexionar rodillas y encoger caderas hacia los talones',
            'Aguantar la posición de barco desde una sentación estable, exhalando para alargar la columna antes de dejar la espalda del suelo'
          ],
          consejos_seguridad: 'Establecer el anclaje de los isquiones antes de elevar el tronco para evitar caída o esfuerzo excesivo.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_virabhadrasana_ii',
          nombre: 'Guerrero II',
          instrucciones_transicion: ['Bajar una pierna al suelo hacia delante, extendiendo el tronco', 'Apoyar la otra pierna detrás, alargando la columna verticalmente'],
          consejos_seguridad: 'Mantener la transición controlada para evitar tensión en la cadera anterior.'
        },
        {
          postura_destino_id: 'asana_savasana',
          nombre: 'Postura del Cadáver',
          instrucciones_transicion: [
            'Retomar una postura de sentación con piernas extendidas y relajadas',
            'Rotar hacia un costado y rodar sobre la espalda, extendiendo los brazos a los lados'
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
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 12 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Manos equidistantes al ancho de los hombros',
        'Codos alineados con el torso (no rotados hacia fuera)',
        'Talones apuntando al techo, no colgando',
        'Cuello neutral, presión baja de la cabeza en el suelo',
        'Rodillas flexionadas y juntas durante la entrada',
        'Colocar los hombros sobre el borde de mantas dobladas asegurando que la séptima vértebra cervical quede libre del suelo',
        'Mantener las piernas activas y los isquiones proyectados hacia el techo para quitar presión del cuello'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hipertension_arterial',
        riesgo: 'alto',
        explicacion_clinica: 'La inversión aumente brusca la presión intracraneal y sistémica.',
        modificaciones: ['Mantener la postura menos de 3 respiraciones', 'Apuntar la cabeza más abajo que la pelvis para reducir el golpe de presión'],
        alternativa_segura: {
          asana_id: 'asana_balasana',
          nombre: 'Balasana',
          razon: 'Plegado de flexión anterior con apoyo en muslos y cabeza libre. Sin inversión total.'
        }
      },
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'Flexión cervical y dorsal extrema con soporte del peso corporal directamente sobre las vértebras superiores.',
        modificaciones: [
          'Usar cojines bajo los omóplatos para invertir el T1-T2',
          'Evitar cargar el peso del cuerpo en la cabeza',
          'Colocar de 2 a 3 mantas firmes bajo los hombros dejando el cuello y la cabeza libres de carga',
          'Apoyar los pies en el asiento de una silla colocada detrás de la cabeza para reducir el grado de flexión espinal'
        ],
        alternativa_segura: null
      },
      {
        condicion: 'embarazo',
        riesgo: 'alto',
        explicacion_clinica: 'Compresión intraabdominal severa, inversión vascular forzada y alto riesgo de pérdida de estabilidad pélvica.',
        modificaciones: ['Evitar completamente la postura durante todas las etapas de gestación'],
        alternativa_segura: {
          asana_id: 'asana_viparita_karani',
          nombre: 'Viparita Karani',
          razon: 'Proporciona los beneficios de retorno venoso y relajación pélvica sin comprimir el vientre ni sobrecargar el cuello.'
        }
      },
      {
        condicion: 'glaucoma',
        riesgo: 'alto',
        explicacion_clinica: 'Aumento brusco y sostenido de la presión intraocular por inversión invertida completa con flexión cervical.',
        modificaciones: ['Evitar la postura totalmente en personas con patología ocular o presión intraocular elevada'],
        alternativa_segura: {
          asana_id: 'asana_viparita_karani',
          nombre: 'Viparita Karani',
          razon: 'Inversión suave con menor gradiente hidrostático y sin compresión mecánica sobre las vértebras superiores.'
        }
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          postura_origen_id: 'asana_adho_mukha_svanasana',
          nombre: 'Adho Mukha Svanasana',
          instrucciones_transicion: ['Expirar y llevar la pelvis hacia arriba alineando manos-caderas-talones', 'Flexionar rodillas y pasar una pierna a la vez sobre la cabeza'],
          consejos_seguridad: 'Mantener los codos rígidos para soportar el peso de la columna media.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_bhujangasana',
          nombre: 'Bhujangasana',
          instrucciones_transicion: [
            'Apoyar la cabeza y el pecho en el suelo rompiendo la extensión',
            'Deslizar la pelvis hacia abajo y meter rodillas y codos',
            'Curl up para encogida fetal o balón'
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
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 10, avanzado: 25 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Codos separados al ancho exacto de los hombros formando un triángulo equilátero con las manos entrelazadas.',
        'Coronilla (fontanela superior) apoyada en el suelo con el 70-80% del peso soportado por los antebrazos y hombros.',
        'Escápulas activamente elevadas lejos de las orejas para crear espacio en la columna cervical.',
        'Pelvis, hombros, rodillas y tobillos apilados en una estricta línea de gravedad perpendicular al suelo.',
        'Pies activos en flexión plantar con dedos en extensión (floint) manteniendo los aductores integrados.',
        'Presionar firmemente los antebrazos y muñecas contra el suelo para elevar los hombros y descargar el peso de la cabeza',
        'Activar el núcleo abdominal, glúteos y adductores para mantener una línea vertical continua y estable'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hipertension_arterial',
        riesgo: 'alto',
        explicacion_clinica: 'La inversión completa incrementa significativamente la presión arterial cefálica y la postcarga cardíaca, elevando el riesgo de eventos cerebrovasculares.',
        modificaciones: ['Evitar retención de la respiración si se practica.', 'Usar silla de inversión con soporte en hombros sin apoyar la cabeza.'],
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
        modificaciones: ['Evitar totalmente cualquier inversión donde la cabeza esté por debajo del corazón.'],
        alternativa_segura: {
          asana_id: 'asana_tadasana',
          nombre: 'Tadasana',
          razon: 'Postura neutra de pie que no altera la presión intraocular ni el drenaje del humor acuoso.'
        }
      },
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'Contraindicación estricta en patología discal cervical por la carga axial vertical que comprime los cuerpos vertebrales.',
        modificaciones: [
          'Utilizar un banco de inversión (FeetUp) que descargue por completo la columna cervical sobre los hombros.',
          'Evitar la postura libre en caso de patología o lesión cervical activa',
          'Practicar únicamente con soporte de inversión sobre bancos de hombros o cuerdas que descarguen el cuello por completo'
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
        modificaciones: ['Práctica asistida directamente contra una esquina de pared con apoyo constante.'],
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
            'Entrelazar los dedos de las manos apoyando la coronilla en el suelo contra las palmas.',
            'Caminar con los pies hacia los codos elevando la pelvis sobre la línea de los hombros.',
            'Elevar una o ambas piernas flexionadas hacia el pecho con control abdominal antes de extenderlas hacia la vertical.'
          ],
          consejos_seguridad: 'Nunca saltar ni usar impulso; la elevación debe ser controlada desde la fuerza del core y la protracción escapular.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_balasana',
          nombre: 'Balasana (Postura del Niño)',
          instrucciones_transicion: [
            'Flexionar las caderas y rodillas descendiendo lentamente las piernas con control abdominal.',
            'Apoyar los pies en el suelo, descender las rodillas y descansar la frente sobre el suelo o los puños.',
            'Permanecer al menos 5 a 8 respiraciones completas sin levantar la cabeza bruscamente.'
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
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Pies separados aproximadamente a un metro de distancia, alineando talón con talón o al ancho de caderas para mayor estabilidad pélvica.',
        'Pie trasero angulado entre 45 y 60 grados hacia el frente, presionando con firmeza el borde externo y el talón contra el suelo.',
        'Pelvis neutra y nivelada en el plano transversal antes de iniciar la torsión para proteger la articulación sacroilíaca.',
        'Mano contralateral situada en el suelo o bloque por fuera del pie adelantado, ejerciendo empuje activo para elongar la columna.',
        'Brazos alineados en una línea vertical perpendicular al suelo, con la mirada orientada hacia el pulgar superior si la columna cervical lo permite.',
        'Mantener ambas crestas ilíacas niveladas y elongar la columna hacia adelante antes de iniciar la rotación del torso',
        'Apoyar la mano inferior sobre un bloque en la cara externa o interna del pie delantero según la movilidad disponible'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'La flexión anterior simultánea con torsión axial impone fuerzas de cizallamiento asimétricas severas sobre los discos intervertebrales lumbares.',
        modificaciones: ['Colocar un bloque de yoga a altura máxima debajo de la mano', 'Evitar la torsión lumbar manteniendo la rotación exclusivamente torácica'],
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
        modificaciones: ['Mantener la mirada hacia el suelo o al frente', 'Apoyar la mano en un soporte alto para evitar que la cabeza descienda por debajo del corazón'],
        alternativa_segura: null
      },
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'La torsión del tronco puede transmitir estrés torsional a la rodilla adelantada si los ligamentos colaterales o meniscos están comprometidos.',
        modificaciones: ['Mantener una microflexión activa en la rodilla adelantada', 'Acortar la distancia entre los pies'],
        alternativa_segura: {
          asana_id: 'asana_virabhadrasana_ii',
          nombre: 'Virabhadrasana II',
          razon: 'Proporciona alineación articular estable en flexión sagital controlada sin fuerzas de torsión articular.'
        }
      },
      {
        condicion: 'embarazo',
        riesgo: 'alto',
        explicacion_clinica: 'Compresión abdominal profunda por torsión cerrada y riesgo de compromiso circulatorio en vasos pélvicos.',
        modificaciones: ['Sustituir por Utthita Trikonasana o una torsión abierta con soporte en la pared'],
        alternativa_segura: {
          asana_id: 'asana_trikonasana',
          nombre: 'Utthita Trikonasana',
          razon: 'Permite la apertura pélvica e isquiotibial sin compresión visceral ni giros forzados sobre el abdomen.'
        }
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          postura_origen_id: 'asana_uttanasana',
          nombre: 'Uttanasana',
          instrucciones_transicion: [
            'Desde la flexión de pie, dar un paso largo hacia atrás con un pie apoyándolo a 45 grados.',
            'Alargar la columna hacia adelante, situar la mano opuesta por fuera del pie delantero y rotar el tronco elevando el brazo superior.'
          ],
          consejos_seguridad: 'Estabilizar las bases de apoyo y cuadrar la pelvis antes de comenzar a rotar la columna.'
        },
        {
          postura_origen_id: 'asana_trikonasana',
          nombre: 'Trikonasana',
          instrucciones_transicion: [
            'Descender el brazo superior hacia el suelo cuadrando el torso hacia la pierna adelantada.',
            'Reajustar el pie posterior hacia adentro a 45 grados y rotar el torso en sentido inverso elevando el brazo contralateral.'
          ],
          consejos_seguridad: 'Alargar la columna hacia adelante antes de iniciar la torsión inversa para evitar compresión discal.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_adho_mukha_svanasana',
          nombre: 'Adho Mukha Svanasana',
          instrucciones_transicion: [
            'Descender la mano superior a la esterilla enmarcando el pie delantero con ambas manos.',
            'Dar un paso atrás con la pierna delantera elevando la pelvis hacia arriba y atrás.'
          ],
          consejos_seguridad: 'Descomprimir la zona lumbar extendiendo activamente la columna en una posición simétrica y neutra.'
        },
        {
          postura_destino_id: 'asana_uttanasana',
          nombre: 'Uttanasana',
          instrucciones_transicion: [
            'Llevar ambas manos al suelo a los lados del pie delantero mientras se deshace la torsión.',
            'Dar un paso adelante con el pie trasero para juntar ambos pies y relajarse en flexión hacia adelante.'
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
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 10, avanzado: 25 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Apoyo simétrico y enraizamiento de ambas tuberosidades isquiáticas sobre el suelo con pelvis en posición neutra.',
        'Rotación externa completa originada estrictamente desde las articulaciones coxofemorales y nunca forzada desde la rodilla.',
        'Tobillos en ligera dorsiflexión activa para evitar la torsión o hiperextensión ligamentosa del compartimento lateral.',
        'Elongación axial de la columna vertebral desde el sacro hasta la coronilla, con retracción suave del mentón (Jalandhara Bandha sutil).',
        'Hombros descendidos y escápulas aducidas en neutro, permitiendo apertura de la caja torácica y relajación de los brazos sobre las rodillas.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'alto',
        explicacion_clinica: 'La falta de rango articular en la rotación externa coxofemoral transfiere un torque lesivo de cizallamiento y torsión a los meniscos y ligamentos colaterales de la rodilla.',
        modificaciones: [
          'Realizar Ardha Padmasana (medio loto) colocando solo un pie sobre el muslo y el otro en el suelo debajo de la rodilla opuesta.',
          'Utilizar un bloque o cojín de meditación bajo los isquiones para elevar la pelvis y reducir la flexión/rotación extrema en las rodillas.'
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
        modificaciones: ['Sentarse sobre un zafu o manta firme manteniendo la lordosis lumbar neutra.', 'Apoyar la espalda contra una pared para controlar la alineación axial.'],
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
            'Elevar el torso desde Balasana hacia una postura sentada con la pelvis neutra.',
            'Extender las piernas al frente en Dandasana, flexionar y rotar externamente la primera cadera trayendo el pie hacia el pliegue inguinal opuesto, y luego repetir con la segunda pierna.'
          ],
          consejos_seguridad: 'Asegurarse de rotar la pierna completamente desde el fémur antes de cerrar el ángulo de la rodilla para no torsionar la articulación.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_savasana',
          nombre: 'Savasana',
          instrucciones_transicion: [
            'Desenganchar cuidadosamente con las manos el pie superior y luego el pie inferior, extendiendo ambas piernas lentamente hacia el frente.',
            'Descender la columna vértebra por vértebra hasta tenderse en decúbito supino, separando pies y brazos para relajación completa.'
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
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
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
        'Manos separadas al ancho de los hombros con dedos abiertos en abducción y microflexión en nudillos (hasta bandha).',
        'Rodillas posicionadas firmemente en la cara posterior de los brazos, lo más cerca posible de las axilas.',
        'Protracción escapular activa empujando el suelo para ensanchar el espacio interescapular.',
        'Mirada (drishti) dirigida ligeramente hacia adelante del borde frontal del mat, evitando la hiperextensión cervical.',
        'Aducción activa de tobillos y talones compactados hacia los isquiones mediante flexión plantar y de rodilla.',
        'Abrir los dedos de las manos ampliamente y presionar las yemas contra el tapete para generar garra digital (hasta bandha)',
        'Fijar la mirada hacia adelante en el suelo y redondear la espalda dorsal elevando el ombligo hacia la columna'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_muneca',
        riesgo: 'alto',
        explicacion_clinica: 'La carga axial combinada con una dorsiflexión forzada a 90 grados genera compresión excesiva en el túnel carpiano y fibrocartílago triangular.',
        modificaciones: [
          'Usar cuña ergonómica bajo el talón de la mano para reducir el ángulo de flexión dorsal.',
          'Practicar la compresión abdominal en posición supina sobre el suelo.'
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
        modificaciones: ['Evitar balances sobre brazos; trabajar estabilidad monopodal en bipedestación.'],
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
        modificaciones: ['Mantener la cabeza más elevada que la pelvis sin levantar los pies del suelo.'],
        alternativa_segura: {
          asana_id: 'asana_uttanasana',
          nombre: 'Uttanasana con apoyo alto',
          razon: 'Flexión anterior asistida sin aumento de presión intraocular sostenida por esfuerzo isométrico máximo.'
        }
      },
      {
        condicion: 'hipertension_arterial',
        riesgo: 'alto',
        explicacion_clinica: 'El esfuerzo isométrico intenso y la apnea refleja (maniobra de Valsalva) incrementan bruscamente la presión arterial sistémica.',
        modificaciones: ['Mantener respiraciones conscientes y fluidas realizando suspensiones breves de pocos segundos'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          postura_origen_id: 'asana_uttanasana',
          nombre: 'Uttanasana',
          instrucciones_transicion: [
            'Flexiona las rodillas profundamente hasta apoyar las palmas completas en el suelo al ancho de hombros.',
            'Eleva los talones, encaja las rodillas sobre la cara posterior de los tríceps y desplaza el peso corporal hacia adelante hasta elevar los pies.'
          ],
          consejos_seguridad: 'Evita saltar hacia la postura; la elevación de los pies debe ocurrir por transferencia pura de masa hacia adelante.'
        },
        {
          postura_origen_id: 'asana_balasana',
          nombre: 'Balasana',
          instrucciones_transicion: [
            'Incorpórate a posición de cuclillas compacta con las rodillas separadas y los pies juntos.',
            'Coloca las manos firmemente en el suelo frente a ti, conecta rodillas a tríceps y transfiere el peso hacia las muñecas.'
          ],
          consejos_seguridad: 'Asegura el enganche escapular antes de despegar los metatarsos del suelo.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_adho_mukha_svanasana',
          nombre: 'Adho Mukha Svanasana',
          instrucciones_transicion: [
            'Mantén el empuje de hombros y proyecta los pies hacia atrás suavemente o mediante salto controlado aterrizando con codos flexionados.',
            'Extiende los brazos y eleva la pelvis en retroversión funcional hacia Perro Boca Abajo.'
          ],
          consejos_seguridad: 'Si se realiza transición flotada o por salto, amortiguar con ligera flexión de codos para proteger muñecas y hombros.'
        },
        {
          postura_destino_id: 'asana_balasana',
          nombre: 'Balasana',
          instrucciones_transicion: [
            'Desciende los pies lentamente al suelo con control excéntrico de los flexores.',
            'Baja las rodillas al suelo, junta los pulgares de los pies y retrocede las caderas hacia los talones descansando los brazos.'
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
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 10, avanzado: 20 },
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
        'El peso corporal recae sobre la parte superior de los hombros y los tríceps, nunca sobre las vértebras cervicales.',
        'Los codos deben mantenerse paralelos entre sí, alineados exactamente al ancho de los hombros con las manos sosteniendo la espalda media-alta.',
        'La pelvis, los hombros y los tobillos deben trazar una línea vertical perpendicular al suelo.',
        'Las piernas permanecen activas en aducción ligera y extensión completa, con los metatarsos proyectados hacia el techo.',
        'El cuello se mantiene alineado en posición neutra sagital sin girar la cabeza hacia los lados bajo ninguna circunstancia.',
        'Colocar los hombros sobre mantas de soporte asegurando que la cabeza esté sobre el suelo para preservar la curva cervical',
        'Juntar los codos detrás de la espalda y sostener la parte media-alta del torso para mantener la verticalidad'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'Carga axial severa sobre la región cervical combinada con máxima flexión del cuello.',
        modificaciones: [
          'Usar mantas dobladas bajo los hombros dejando el cuello y la cabeza fuera del soporte para reducir el ángulo de flexión.',
          'Realizar la postura con soporte de silla para descargar el peso axial de la columna.',
          'Usar de 3 a 4 mantas dobladas bajo los hombros dejando el cuello completamente libre de contacto con el soporte',
          'Sustituir por variantes con apoyo en silla o en pared'
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
        explicacion_clinica: 'La inversión completa y la flexión cervical sostenida aumentan el retorno venoso e incrementan la presión sistémica.',
        modificaciones: [
          'Limitar el tiempo de permanencia a menos de 3 respiraciones guiadas.',
          'Elevar las piernas sobre un bloque o pared manteniendo el torso en ángulo diagonal.',
          'Evitar retenciones prolongadas o sustituir por Viparita Karani con soporte de bolster'
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
        modificaciones: ['Evitar la inversión completa manteniendo la cabeza elevada con respecto al corazón.'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          postura_origen_id: 'asana_setu_bandhasana',
          nombre: 'Setu Bandhasana',
          instrucciones_transicion: [
            'Desde la elevación de la pelvis en Setu Bandhasana, coloca las palmas firmemente en la espalda media-baja.',
            'Camina los codos hacia adentro para cerrar la base de soporte escapular.',
            'Eleva una pierna a la vertical seguida de la otra contrayendo el abdomen y los extensores de columna.'
          ],
          consejos_seguridad: 'Asegúrate de no rotar la cabeza al elevar las piernas y mantén la presión constante en los tríceps contra el suelo.'
        }
      ],
      salir_hacia: [
        {
          postura_destino_id: 'asana_balasana',
          nombre: 'Balasana',
          instrucciones_transicion: [
            'Flexiona suavemente las rodillas hacia la frente y desciende la columna vértebra por vértebra con control abdominal.',
            'Gira hacia un costado, incorpórate sobre cuatro puntos de apoyo y empuja la pelvis hacia los talones descansando el torso sobre los muslos.'
          ],
          consejos_seguridad: 'Permanece en Balasana varias respiraciones para permitir la readaptación hemodinámica y la descompresión cervical.'
        },
        {
          postura_destino_id: 'asana_savasana',
          nombre: 'Savasana',
          instrucciones_transicion: [
            'Desciende las piernas lentamente desenrollando la columna vértebra a vértebra usando los brazos como freno contra el suelo.',
            'Apoya la pelvis, extiende las piernas hacia adelante y relaja los brazos a los costados con las palmas hacia arriba.'
          ],
          consejos_seguridad: 'Evita levantar bruscamente la cabeza al descender la espalda para no generar tensión cervical refleja.'
        }
      ]
    }
  },
  {
    id: 'asana_tadasana',
    nombre_sanscrito: 'Tadasana',
    nombre_espanol: 'Postura de la Montaña',
    nombre_ingles: 'Mountain Pose',
    familia_biomecanica: 'bipedestacion',
    nivel_dificultad: 'principiante',
    descripcion: 'Postura fundamental de pie que establece los principios de alineación neutra, distribución equilibrada del peso corporal y elongación axial.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Cuádriceps femoral',
          musculo_id: 'cuadriceps_femoral',
          tipo_contraccion: 'isometrica',
          explicacion: 'Activa la extensión de rodilla elevando las rótulas sin bloquear la articulación.'
        },
        {
          musculo: 'Recto abdominal',
          musculo_id: 'recto_abdominal',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene la contención de la pared abdominal y previene la hiperlordosis lumbar.'
        },
        {
          musculo: 'Musculatura intrínseca del pie',
          musculo_id: 'musculatura_intrinseca_pie',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene los arcos plantares activo-dinámicos mediante el apoyo de tres puntos.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Glúteo medio',
          musculo_id: 'gluteo_medio',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza la pelvis en el plano frontal evitando oscilaciones laterales.'
        },
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Promueven la elongación axial y sostienen la verticalidad de la columna.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Pectoral mayor',
          musculo_id: 'pectoral_mayor',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga pasivamente permitiendo la apertura clavicular y el descenso escapular.'
        },
        {
          musculo: 'Músculos intercostales',
          musculo_id: 'intercostales',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se expanden sutilmente facilitando la respiración costodiafragmática amplia.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Trípode plantar activo distribuyendo el peso homogéneamente entre metatarso interno, externo y centro del talón.',
        'Cuádriceps activos elevando suavemente las rótulas sin hiperextender las rodillas.',
        'Pelvis en posición neutra con coxis apuntando suavemente hacia el suelo.',
        'Eje axial alineando tobillos, rodillas, trocánter mayor, hombros y conducto auditivo externo.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hipotension',
        riesgo: 'moderado',
        explicacion_clinica: 'La bipedestación estática prolongada puede inducir estancamiento venoso en miembros inferiores, reduciendo el retorno venoso y provocando mareos.',
        modificaciones: ['Separar los pies al ancho de las caderas', 'Mantener microflexión de rodillas', 'Evitar permanencias superiores a 5 respiraciones continuas'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Urdhva Hastasana',
          instrucciones_transicion: ['Al exhalar, desciende los brazos por los laterales o al centro del pecho', 'Enraíza nuevamente la base de los pies'],
          consejos_seguridad: 'Mantén la elongación de la columna al descender los brazos sin colapsar la caja torácica.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Uttanasana',
          instrucciones_transicion: ['Inhala alargando la coronilla al cielo', 'Exhala flexionando desde las caderas manteniendo la espalda recta'],
          consejos_seguridad: 'Flexiona ligeramente las rodillas si hay tensión excesiva en los isquiotibiales.'
        }
      ]
    }
  },
  {
    id: 'asana_matsyasana',
    nombre_sanscrito: 'Matsyasana',
    nombre_espanol: 'Postura del Pez',
    nombre_ingles: 'Fish Pose',
    familia_biomecanica: 'extension_posterior',
    nivel_dificultad: 'intermedio',
    descripcion: 'Extensión dorsal en decúbito supino que abre la cintura escapular y la caja torácica mientras apoya suavemente el vértex en el suelo.',
    duracion_sugerida_respiraciones: { principiante: 4, intermedio: 6, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Extensores dorsales',
          musculo_id: 'extensores_dorsales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Generan el arqueo de la columna torácica y la retracción escapular.'
        },
        {
          musculo: 'Músculos intercostales',
          musculo_id: 'intercostales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabilizan y expanden la parrilla costal durante la elevación esternal.'
        },
        {
          musculo: 'Flexores profundos de cadera',
          musculo_id: 'flexores_profundos_cadera',
          tipo_contraccion: 'concentrica',
          explicacion: 'Mantienen el anclaje pélvico y la extensión de piernas juntas en el suelo.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Romboides',
          musculo_id: 'romboides',
          tipo_contraccion: 'concentrica',
          explicacion: 'Aducen las escápulas empujando el esternón hacia el cenit.'
        },
        {
          musculo: 'Tríceps braquial',
          musculo_id: 'triceps_braquial',
          tipo_contraccion: 'isometrica',
          explicacion: 'Presiona los codos y antebrazos contra el suelo para descargar la cabeza.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Esternocleidomastoideo',
          musculo_id: 'esternocleidomastoideo',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga longitudinalmente al descender la cabeza hacia atrás.'
        },
        {
          musculo: 'Pectoral mayor',
          musculo_id: 'pectoral_mayor',
          tipo_contraccion: 'excentrica',
          explicacion: 'Apertura completa de la pared anterior torácica.'
        },
        {
          musculo: 'Recto abdominal',
          musculo_id: 'recto_abdominal',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estira a lo largo de la pared abdominal anterior permitiendo la extensión espinal.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Apertura y elevación del esternón dirigida activamente hacia el techo.',
        'Codos y antebrazos firmemente apoyados en el mat para sostener el peso corporal y descargar la columna cervical.',
        'La coronilla roza el suelo sin soportar carga compresiva axial directa.',
        'Piernas activas, extendidas y juntas, manteniendo contacto de talones y muslos con el suelo.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'La hiperextensión cervical bajo carga puede comprimir las raíces nerviosas y comprometer los discos intervertebrales cervicales y dorsales.',
        modificaciones: [
          'Colocar un bloque de yoga debajo de la espalda media y una manta firme bajo la cabeza para neutralizar el cuello',
          'Realizar la postura con soporte restaurativo'
        ],
        alternativa_segura: null
      },
      {
        condicion: 'hipertension_arterial',
        riesgo: 'moderado',
        explicacion_clinica: 'La posición de la cabeza por debajo del corazón unida a la expansión torácica profunda puede alterar la presión intracraneal y arterial.',
        modificaciones: ['Mantener la cabeza elevada sobre un cojín o bloque evitando la inversión cervical'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Savasana',
          instrucciones_transicion: ['Junta las piernas', 'Desliza las manos debajo de los glúteos con palmas hacia abajo', 'Inhala, empuja con los codos y eleva el pecho curvando la columna'],
          consejos_seguridad: 'Asegúrate de que la fuerza principal provenga del empuje de los antebrazos antes de apoyar la cabeza.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Savasana',
          instrucciones_transicion: ['Inhala presionando con los codos', 'Eleva la cabeza liberando el vértex', 'Desliza el torso y cuello suavemente hasta apoyar la espalda plana'],
          consejos_seguridad: 'No gires la cabeza lateralmente mientras el cuello esté en extensión o durante el retorno.'
        }
      ]
    }
  },
  {
    id: 'asana_garudasana',
    nombre_sanscrito: 'Garudasana',
    nombre_espanol: 'Postura del Águila',
    nombre_ingles: 'Eagle Pose',
    familia_biomecanica: 'equilibrio',
    nivel_dificultad: 'intermedio',
    descripcion: 'Postura de equilibrio unipodal con aducción y envolvimiento cruzado de extremidades superiores e inferiores, exigiendo estabilidad articular y enfoque.',
    duracion_sugerida_respiraciones: { principiante: 4, intermedio: 6, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Aductores del muslo',
          musculo_id: 'aductores_muslo',
          tipo_contraccion: 'isometrica',
          explicacion: 'Comprimen fuertemente los muslos hacia la línea media manteniendo el enganche de piernas.'
        },
        {
          musculo: 'Deltoides posterior',
          musculo_id: 'deltoides_posterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Asiste en la elevación de codos y estabilización de la flexión cruzada de brazos.'
        },
        {
          musculo: 'Musculatura distal de la pierna de apoyo',
          musculo_id: 'musculatura_distal_pierna',
          tipo_contraccion: 'isometrica',
          explicacion: 'Tibial anterior, posterior y peroneos realizan microajustes dinámicos de equilibrio.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Cuádriceps pierna de apoyo',
          musculo_id: 'cuadriceps_pierna_apoyo',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene la flexión de rodilla controlada actuando como amortiguador gravitatorio.'
        },
        {
          musculo: 'Serrato anterior',
          musculo_id: 'serrato_anterior',
          tipo_contraccion: 'concentrica',
          explicacion: 'Protruye las escápulas separándolas en la espalda alta.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Glúteo medio',
          musculo_id: 'gluteo_medio',
          tipo_contraccion: 'excentrica',
          explicacion: 'Elongado por la marcada aducción y flexión de cadera en ambas extremidades.'
        },
        {
          musculo: 'Romboides',
          musculo_id: 'romboides',
          tipo_contraccion: 'excentrica',
          explicacion: 'Estiramiento profundo debido a la protracción escapular de los brazos entrelazados.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Caderas cuadradas orientadas directamente hacia el frente, niveladas horizontalmente.',
        'Flexión simultánea de cadera y rodilla de apoyo sin forzar torsión femorotibial.',
        'Codos elevados a la altura de los hombros y manos alejadas de la cara.',
        'Eje espinal erguido evitando una flexión anterior compensatoria del torso.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'alto',
        explicacion_clinica: 'El cruce y enrollamiento de las piernas ejerce estrés en valgo y fuerzas de cizallamiento rotacional sobre los meniscos y ligamentos colaterales.',
        modificaciones: ['Cruzar la pierna superior sin enganchar el empeine en la pantorrilla', 'Apoyar los dedos del pie cruzado en un bloque o suelo al lado del pie de base'],
        alternativa_segura: null
      },
      {
        condicion: 'vertigo',
        riesgo: 'moderado',
        explicacion_clinica: 'La reducción de la base de sustentación y la fijación visual con brazos frente al rostro pueden desencadenar inestabilidad vestibular.',
        modificaciones: ['Practicar con la espalda apoyada contra la pared', 'Mantener la mirada en un punto fijo a través del espacio entre antebrazos'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Utkatasana',
          instrucciones_transicion: ['Desde la postura de la silla, transfiere el peso al pie de apoyo', 'Cruza el muslo contrario por encima y envuelve los brazos al frente'],
          consejos_seguridad: 'Asegúrate de que la flexión de caderas sea suficiente antes de realizar el cruce del muslo.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Tadasana',
          instrucciones_transicion: ['Inhala desenrollando simultáneamente brazos y piernas', 'Extiende el cuerpo verticalmente y apoya ambos pies en el suelo'],
          consejos_seguridad: 'Desenrolla con control propioceptivo sin soltar las extremidades de manera brusca.'
        }
      ]
    }
  },
  {
    id: 'asana_natarajasana',
    nombre_sanscrito: 'Natarajasana',
    nombre_espanol: 'Postura del Danzarín',
    nombre_ingles: 'Dancer Pose',
    familia_biomecanica: 'equilibrio',
    nivel_dificultad: 'avanzado',
    descripcion: 'Postura avanzada de equilibrio sobre una pierna que combina flexión anterior de torso con potente extensión posterior de cadera y columna.',
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Cuádriceps pierna suspendida',
          musculo_id: 'cuadriceps_pierna_suspendida',
          tipo_contraccion: 'concentrica',
          explicacion: 'Genera el empuje del pie hacia atrás y arriba contra la resistencia del agarre manual.'
        },
        {
          musculo: 'Glúteo mayor pierna suspendida',
          musculo_id: 'gluteo_mayor_pierna_suspendida',
          tipo_contraccion: 'concentrica',
          explicacion: 'Produce la hiperextensión coxofemoral elevando el muslo por encima de la pelvis.'
        },
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostienen la extensión toracolumbar contra la gravedad manteniendo el pecho elevado.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Isquiotibiales pierna suspendida',
          musculo_id: 'isquiotibiales_pierna_suspendida',
          tipo_contraccion: 'concentrica',
          explicacion: 'Contribuyen activamente a la flexión de rodilla y extensión de cadera.'
        },
        {
          musculo: 'Glúteo medio pierna de apoyo',
          musculo_id: 'gluteo_medio_pierna_apoyo',
          tipo_contraccion: 'isometrica',
          explicacion: 'Previene la caída de la pelvis contralateral y estabiliza el eje unipodal.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Psoas ilíaco pierna elevada',
          musculo_id: 'psoas_iliaco_pierna_elevada',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga en grado máximo por la extensión posterior de la cadera.'
        },
        {
          musculo: 'Cuádriceps (recto femoral) pierna elevada',
          musculo_id: 'recto_femoral_pierna_elevada',
          tipo_contraccion: 'excentrica',
          explicacion: 'Sufre un estiramiento longitudinal pronunciado por la flexión de rodilla combinada con extensión de cadera.'
        },
        {
          musculo: 'Pared abdominal anterior',
          musculo_id: 'pared_abdominal_anterior',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga de manera excéntrica controlando la hiperextensión del tronco.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Caderas paralelas y cuadradas orientadas hacia el frente sin rotar ni abrir la pelvis hacia el lateral.',
        'Extensión originada en el glúteo mayor y la espalda media, evitando el colapso hiperlordótico lumbar.',
        'Pierna de apoyo con microflexión para proteger la cápsula articular y ligamentos de la rodilla.',
        'Brazo adelantado extendido a la altura del hombro proyectando energía hacia adelante y arriba.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'La combinación de extensión posterior profunda con carga asimétrica puede generar compresión foraminal severa y pinzamiento discal en L4-L5 y L5-S1.',
        modificaciones: ['Limitar la elevación de la pierna manteniendo el torso vertical', 'Utilizar un cinturón de yoga para el agarre del pie sin arquear la espalda baja'],
        alternativa_segura: null
      },
      {
        condicion: 'vertigo',
        riesgo: 'alto',
        explicacion_clinica: 'La posición asimétrica unipodal combinada con extensión dorsal puede provocar desorientación espacial y caídas bruscas.',
        modificaciones: ['Apoyar la mano adelantada en una pared sólida para referencia espacial constante'],
        alternativa_segura: null
      },
      {
        condicion: 'hipertension_arterial',
        riesgo: 'moderado',
        explicacion_clinica: 'El esfuerzo isométrico intenso y la apertura forzada de la caja torácica pueden desencadenar maniobras tipo Valsalva no deseadas.',
        modificaciones: ['Mantener respiraciones fluidas y evitar sostener la postura más de 3 ciclos'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Tadasana',
          instrucciones_transicion: [
            'Flexiona la rodilla derecha llevando el talón al glúteo',
            'Toma el empeine interno con la mano derecha',
            'Inhala elevando el brazo izquierdo y patea el pie hacia atrás y arriba'
          ],
          consejos_seguridad: 'No permitas que la rodilla flexionada se abra hacia el lateral; mantenla alineada con la cadera.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Tadasana',
          instrucciones_transicion: ['Inhala reduciendo gradualmente la patada del pie', 'Regresa el torso al eje vertical', 'Suelta el pie con control y desciende ambos brazos'],
          consejos_seguridad: 'Realiza el descenso suavemente para no desestabilizar la pierna de apoyo.'
        }
      ]
    }
  },
  {
    id: 'asana_utthita_parsvakonasana',
    nombre_sanscrito: 'Utthita Parsvakonasana',
    nombre_espanol: 'Ángulo Lateral Extendido',
    nombre_ingles: 'Extended Side Angle Pose',
    familia_biomecanica: 'bipedestacion',
    nivel_dificultad: 'intermedio',
    descripcion: 'Postura de pie con zancada lateral amplia que genera una línea continua de extensión desde el talón posterior hasta la punta de los dedos de la mano superior.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 7, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Cuádriceps pierna anterior',
          musculo_id: 'cuadriceps_pierna_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene la flexión a 90 grados soportando la carga principal del tren inferior.'
        },
        {
          musculo: 'Glúteo mayor pierna anterior',
          musculo_id: 'gluteo_mayor_pierna_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza la articulación coxofemoral y mantiene la cadera flexionada y abducida.'
        },
        {
          musculo: 'Músculos oblicuos del abdomen',
          musculo_id: 'oblicuos_abdomen',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostienen el tronco suspendido en el plano diagonal evitando el colapso lateral sobre el muslo.'
        },
        {
          musculo: 'Serrato anterior brazo superior',
          musculo_id: 'serrato_anterior_brazo_superior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Fija y proyecta la escápula extendiendo el brazo en la línea diagonal por encima de la cabeza.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Cuádriceps pierna posterior',
          musculo_id: 'cuadriceps_pierna_posterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene la rodilla posterior completamente extendida y el borde externo del pie apoyado.'
        },
        {
          musculo: 'Deltoides anterior y medio',
          musculo_id: 'deltoides_anterior_medio',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene la abducción y elevación del brazo superior.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Dorsal ancho lado superior',
          musculo_id: 'dorsal_ancho_lado_superior',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga notablemente a lo largo de todo el costado posterolateral superior.'
        },
        {
          musculo: 'Músculos intercostales lado superior',
          musculo_id: 'intercostales_lado_superior',
          tipo_contraccion: 'excentrica',
          explicacion: 'Apertura y separación de las costillas del costado elevado.'
        },
        {
          musculo: 'Aductores de cadera pierna anterior y posterior',
          musculo_id: 'aductores_cadera',
          tipo_contraccion: 'excentrica',
          explicacion: 'Estiramiento por la amplia abducción coxofemoral bilateral.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Rodilla anterior flexionada exactamente a 90° alineada verticalmente sobre el tobillo, apuntando al segundo dedo del pie.',
        'Línea recta diagonal ininterrumpida desde el borde externo del talón posterior hasta la punta de los dedos de la mano extendida.',
        'Rotación externa del muslo anterior manteniendo la rodilla orientada hacia el frente y no colapsada hacia adentro.',
        'Presión firme sobre el borde externo del pie posterior con arco interno activo.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'El colapso en valgo de la rodilla anterior o sobrecarga excesiva en flexión profunda compromete el menisco medial y ligamento colateral medial.',
        modificaciones: [
          'Disminuir la distancia entre los pies reduciendo el ángulo de flexión a 120°',
          'Apoyar el antebrazo firmemente en el muslo anterior o usar un bloque alto para la mano'
        ],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Virabhadrasana II',
          instrucciones_transicion: [
            'Inhala alargando los costados',
            'Exhala inclinando el torso lateralmente hacia la pierna flexionada',
            'Apoya el antebrazo en el muslo o la mano por fuera del pie y extiende el brazo contrario en diagonal'
          ],
          consejos_seguridad: 'No dejes caer el peso del tronco sobre el hombro inferior; mantén la cintura activa.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Virabhadrasana II',
          instrucciones_transicion: ['Inhala activando fuertemente el core y las piernas', 'Eleva el tronco volviendo a abrir los brazos paralelos al suelo'],
          consejos_seguridad: 'Empuja con el pie delantero para impulsar la subida sin perder la alineación de la pelvis.'
        }
      ]
    }
  },
  {
    id: 'asana_vasisthasana',
    nombre_sanscrito: 'Vasisthasana',
    nombre_espanol: 'Plancha Lateral',
    nombre_ingles: 'Side Plank Pose',
    familia_biomecanica: 'equilibrio',
    nivel_dificultad: 'intermedio',
    descripcion: 'Postura de equilibrio y fuerza en apoyo unilateral que desafía la estabilidad escapular, la fuerza del core lateral y la alineación coronal.',
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Músculos oblicuos del abdomen lado inferior',
          musculo_id: 'oblicuos_lado_inferior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Elevan y sostienen la pelvis resistiendo la fuerza de gravedad en el plano frontal.'
        },
        {
          musculo: 'Glúteo medio lado inferior',
          musculo_id: 'gluteo_medio_lado_inferior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Abduce la cadera de apoyo impidiendo el descenso o rotación de la pelvis.'
        },
        {
          musculo: 'Deltoides brazo de apoyo',
          musculo_id: 'deltoides_brazo_apoyo',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza la articulación glenohumeral bajo carga de compresión directa.'
        },
        {
          musculo: 'Serrato anterior brazo de apoyo',
          musculo_id: 'serrato_anterior_brazo_apoyo',
          tipo_contraccion: 'isometrica',
          explicacion: 'Fija la escápula contra la reja costal evitando el aleteo escapular.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Transverso del abdomen',
          musculo_id: 'transverso_del_abdomen',
          tipo_contraccion: 'isometrica',
          explicacion: 'Comprime el contenido abdominal manteniendo el corsé estabilizador del raquis.'
        },
        {
          musculo: 'Cuadrado lumbar lado inferior',
          musculo_id: 'cuadrado_lumbar_inferior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene la columna lumbar en posición neutra evitando la flexión lateral pasiva.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Aductores de cadera pierna superior',
          musculo_id: 'aductores_pierna_superior',
          tipo_contraccion: 'excentrica',
          explicacion: 'Elongados pasivamente mientras mantienen la coaptación o ligera abducción de la extremidad.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Muñeca de apoyo alineada verticalmente bajo el hombro (o ligeramente adelantada para reducir el ángulo de flexión dorsal).',
        'Cuerpo estructurado en una diagonal recta y rígida desde los tobillos hasta la coronilla.',
        'Pelvis elevada y activa en el plano coronal sin hundimiento ni rotación anterior.',
        'Borde externo del pie de apoyo firmemente asentado, pies apilados o escalonados.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_muneca',
        riesgo: 'alto',
        explicacion_clinica: 'La carga axial unida a la extensión de 90° de muñeca incrementa exponencialmente la presión intra-túnel carpiano y comprime el fibrocartílago triangular.',
        modificaciones: ['Apoyar el antebrazo en lugar de la mano (plancha lateral sobre antebrazo)', 'Apoyar la rodilla inferior en el suelo para reducir la carga total'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Phalakasana (Plancha)',
          instrucciones_transicion: ['Gira sobre el borde externo del pie derecho apilando el pie izquierdo', 'Transfiere el peso a la mano derecha y eleva el brazo izquierdo hacia el techo'],
          consejos_seguridad: 'Activa fuertemente el serrato antes de levantar la mano contraria para no sobrecargar el hombro de apoyo.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Phalakasana (Plancha)',
          instrucciones_transicion: ['Exhala descendiendo la mano superior al suelo', 'Gira los pies al centro volviendo a la plancha neutra'],
          consejos_seguridad: 'Mantén el core activo durante el giro para evitar caídas bruscas de la pelvis.'
        }
      ]
    }
  },
  {
    id: 'asana_urdhva_dhanurasana',
    nombre_sanscrito: 'Urdhva Dhanurasana',
    nombre_espanol: 'Postura de la Rueda',
    nombre_ingles: 'Wheel Pose',
    familia_biomecanica: 'extension_posterior',
    nivel_dificultad: 'avanzado',
    descripcion: 'Extensión posterior completa en arco invertido que requiere gran movilidad de la cintura escapular, extensión torácica y fuerza en toda la cadena posterior.',
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'concentrica',
          explicacion: 'Extienden toda la columna vertebral a lo largo de sus segmentos torácico y lumbar.'
        },
        {
          musculo: 'Glúteo mayor',
          musculo_id: 'gluteo_mayor',
          tipo_contraccion: 'isometrica',
          explicacion: 'Produce la potente extensión de caderas elevando la pelvis hacia el techo.'
        },
        {
          musculo: 'Tríceps braquial',
          musculo_id: 'triceps_braquial',
          tipo_contraccion: 'isometrica',
          explicacion: 'Extiende los codos impulsando el pecho hacia arriba y alejándolo del suelo.'
        },
        {
          musculo: 'Cuádriceps femoral',
          musculo_id: 'cuadriceps_femoral',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene la extensión de rodillas transfiriendo la fuerza de empuje del tren inferior.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Deltoides posterior y fibras medias',
          musculo_id: 'deltoides_posterior',
          tipo_contraccion: 'concentrica',
          explicacion: 'Asisten en la flexión y elevación profunda de los brazos en retropulsión.'
        },
        {
          musculo: 'Aductor mayor',
          musculo_id: 'aductor_mayor',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene los fémures paralelos evitando la rotación externa excesiva de caderas.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Recto abdominal',
          musculo_id: 'recto_abdominal',
          tipo_contraccion: 'excentrica',
          explicacion: 'Elongación máxima de la pared anterior del abdomen durante el arqueo total.'
        },
        {
          musculo: 'Psoas ilíaco',
          musculo_id: 'psoas_iliaco',
          tipo_contraccion: 'excentrica',
          explicacion: 'Estiramiento profundo en la cara anterior de la articulación de la cadera.'
        },
        {
          musculo: 'Músculos intercostales y pectorales',
          musculo_id: 'intercostales_pectorales',
          tipo_contraccion: 'excentrica',
          explicacion: 'Apertura de la pared torácica anterior y la cavidad axilar.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Pies y manos situados estrictamente paralelos entre sí, separados al ancho de caderas y hombros respectivamente.',
        'Empuje activo y continuo desde los talones y metatarsos sin permitir que las rodillas se abran hacia los lados.',
        'Apertura del pecho proyectando el esternón hacia la pared posterior más allá de las manos.',
        'Rotación interna activa de los muslos para descargar compresión en la articulación sacroilíaca.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'La hiperextensión forzada genera compresión masiva en los elementos posteriores vertebrales, espondilolistesis y pinzamiento discal lumbar.',
        modificaciones: ['Sustituir por Setu Bandhasana (Puente) con bloque bajo el sacro'],
        alternativa_segura: null
      },
      {
        condicion: 'embarazo',
        riesgo: 'alto',
        explicacion_clinica: 'La hiperpresión intraabdominal y la tensión extrema en la fascia de la línea alba pueden desencadenar diástasis y restringir el flujo uteroplacentario.',
        modificaciones: ['Evitar completamente la postura a partir del primer trimestre'],
        alternativa_segura: null
      },
      {
        condicion: 'problemas_muneca',
        riesgo: 'alto',
        explicacion_clinica: 'La hiperextensión extrema de muñeca soportando gran parte del peso corporal compromete severamente el túnel carpiano y los ligamentos del carpo.',
        modificaciones: ['Colocar cuñas de yoga bajo las palmas para reducir el ángulo de flexión dorsal', 'Utilizar la pared con bloques inclinados'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Setu Bandha Sarvangasana',
          instrucciones_transicion: [
            'Coloca las manos junto a las orejas con dedos apuntando a los hombros',
            'Inhala, presiona manos y pies, eleva primero a la coronilla y luego extiende codos completamente'
          ],
          consejos_seguridad: 'Asegúrate de que los codos no se abran hacia los lados al iniciar el empuje.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Supta Baddha Konasana',
          instrucciones_transicion: [
            'Flexiona lentamente los codos llevando la barbilla al pecho',
            'Apoya con suavidad hombros, espalda media y baja en el suelo',
            'Junta las plantas de los pies y abre las rodillas'
          ],
          consejos_seguridad: 'Nunca salgas de golpe; desciende vértebra por vértebra protegiendo la cabeza y el cuello.'
        }
      ]
    }
  },
  {
    id: 'asana_marichyasana_c',
    nombre_sanscrito: 'Marichyasana C',
    nombre_espanol: 'Postura del Sabio Marichi',
    nombre_ingles: "Marichi's Pose C",
    familia_biomecanica: 'torsion',
    nivel_dificultad: 'intermedio',
    descripcion: 'Torsión espinal sentada con una pierna flexionada y otra extendida, que favorece la desrotación vertebral, masaje visceral y movilidad torácica.',
    duracion_sugerida_respiraciones: { principiante: 4, intermedio: 6, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Músculos oblicuos internos y externos',
          musculo_id: 'oblicuos_internos_externos',
          tipo_contraccion: 'concentrica',
          explicacion: 'Generan la torsión helicoidal del tronco hacia el lado de la pierna flexionada.'
        },
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen la elongación axial imprescindible previa y durante la rotación vertebral.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Multífidos',
          musculo_id: 'multifidos',
          tipo_contraccion: 'concentrica',
          explicacion: 'Producen la rotación segmentaria intervertebral fina.'
        },
        {
          musculo: 'Deltoides anterior del brazo de palanca',
          musculo_id: 'deltoides_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene el brazo cruzado contra el muslo exterior profundizando el giro.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Músculos oblicuos contralaterales',
          musculo_id: 'oblicuos_contralaterales',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan permitiendo el rango articular de torsión en la pared abdominal opuesta.'
        },
        {
          musculo: 'Romboides del lado que gira hacia atrás',
          musculo_id: 'romboides',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se abren acompañando el movimiento del hombro en retropulsión.'
        },
        {
          musculo: 'Glúteo medio y piriforme de la pierna flexionada',
          musculo_id: 'gluteo_medio_piriforme',
          tipo_contraccion: 'excentrica',
          explicacion: 'Elongados por la flexión combinada con la aducción profunda del fémur.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Anclaje firme y equilibrado de ambos isquiones sobre el mat antes de iniciar el giro.',
        'Extensión axial vertical completa de la columna antes de ejecutar la torsión torácica.',
        'Pierna extendida en línea recta, pie en flexión dorsal activa con dedos apuntando al techo.',
        'La torsión se origina en el abdomen y la columna torácica, no forzando el cuello cervical.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'embarazo',
        riesgo: 'alto',
        explicacion_clinica: 'La torsión cerrada comprime significativamente la cavidad intrauterina y puede restringir el aporte sanguíneo materno-fetal.',
        modificaciones: ['Realizar torsión abierta hacia el lado opuesto sin comprimir el abdomen'],
        alternativa_segura: null
      },
      {
        condicion: 'hernias_discales',
        riesgo: 'moderado',
        explicacion_clinica: 'Las fuerzas de torsión combinadas con cualquier flexión anterior incrementan el cizallamiento en el anillo fibroso discal.',
        modificaciones: ['Sentarse sobre una manta o bloque para elevar las caderas', 'Abrazar la rodilla sin palanca forzada de codo'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Dandasana',
          instrucciones_transicion: [
            'Flexiona la rodilla derecha apoyando el pie cerca del isquion derecho',
            'Inhala elevando el brazo izquierdo para alargar la columna',
            'Exhala cruzando el codo izquierdo por fuera de la rodilla derecha'
          ],
          consejos_seguridad: 'Crece verticalmente en la inhalación antes de buscar mayor profundidad en la exhalación.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Dandasana',
          instrucciones_transicion: ['Inhala desenrollando el torso hacia el centro', 'Libera el brazo y extiende la pierna flexionada al frente'],
          consejos_seguridad: 'Realiza una pausa neutra en Dandasana antes de cambiar de lado.'
        }
      ]
    }
  },
  {
    id: 'asana_jathara_parivrtti',
    nombre_sanscrito: 'Jathara Parivrtti',
    nombre_espanol: 'Torsión Espinal Supina',
    nombre_ingles: 'Supine Spinal Twist',
    familia_biomecanica: 'torsion',
    nivel_dificultad: 'principiante',
    descripcion: 'Postura de torsión en decúbito supino que flexibiliza la columna vertebral y descomprime las vértebras lumbares. Favorece la movilidad del torso y la relajación del sistema nervioso.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Oblicuos abdominales (interno y externo)',
          musculo_id: 'oblicuos_abdominales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Generan y sostienen la torsión axial del tronco controlando la rotación de la pelvis.'
        },
        {
          musculo: 'Rotadores de la columna (multífidos y rotadores)',
          musculo_id: 'rotadores_columna',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen la rotación segmentaria intervertebral de forma uniforme.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Transverso del abdomen',
          musculo_id: 'transverso_abdomen',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza el complejo lumbo-pélvico durante la rotación.'
        },
        {
          musculo: 'Romboide mayor y menor',
          musculo_id: 'romboides',
          tipo_contraccion: 'isometrica',
          explicacion: 'Anclan la escápula contralateral al suelo.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Pectoral mayor contralateral',
          musculo_id: 'pectoral_mayor',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga pasivamente al mantener el brazo extendido y el hombro en contacto con el suelo.'
        },
        {
          musculo: 'Glúteo medio y piriforme',
          musculo_id: 'gluteo_medio_piriforme',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estiran en la cadera superior al cruzar las piernas hacia el lado opuesto.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Escápulas y hombros firmemente apoyados y pegados al suelo en todo momento.',
        'Rodillas flexionadas descendiendo juntas hacia el lateral manteniendo ángulo de cadera estable.',
        'Mirada orientada hacia el lado opuesto a las piernas para completar la torsión cervical si no hay molestia en cuello.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'moderado',
        explicacion_clinica: 'Las torsiones en carga o con excesiva rotación lumbar pueden aumentar la presión intradiscal y provocar dolor radicular en lesiones espinales agudas.',
        modificaciones: ['Colocar un bloque o manta doblada entre o debajo de las rodillas flexionadas para limitar el rango de rotación.'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Savasana',
          instrucciones_transicion: ['Flexionar ambas rodillas hacia el pecho y abrir los brazos en cruz.', 'Exhalar y dejar caer las rodillas suavemente hacia un lateral.'],
          consejos_seguridad: 'Asegurar que el hombro opuesto no se despegue del suelo al descender las piernas.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Apanasana',
          instrucciones_transicion: ['Inhalar activando el abdomen para regresar las rodillas al centro.', 'Abrazar las rodillas contra el pecho con ambas manos.'],
          consejos_seguridad: 'Moverse lentamente usando la fuerza abdominal y no el impulso lumbar.'
        }
      ]
    }
  },
  {
    id: 'asana_utkatasana',
    nombre_sanscrito: 'Utkatasana',
    nombre_espanol: 'Postura de la Silla',
    nombre_ingles: 'Chair Pose',
    familia_biomecanica: 'bipedestacion',
    nivel_dificultad: 'principiante',
    descripcion: 'Postura de pie en flexión de caderas y rodillas que fortalece el tren inferior y la musculatura paravertebral. Desarrolla estabilidad, resistencia y alineación axial.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Cuádriceps femoral',
          musculo_id: 'cuadriceps_femoral',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene la flexión de rodillas resistiendo la fuerza de gravedad.'
        },
        {
          musculo: 'Glúteo mayor',
          musculo_id: 'gluteo_mayor',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene la flexión controlada de cadera y previene el colapso anterior de la pelvis.'
        },
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Extienden la columna manteniendo el torso erguido frente a la inclinación anterior.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Deltoides anterior',
          musculo_id: 'deltoides_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Eleva y sostiene los brazos extendidos junto a las orejas.'
        },
        {
          musculo: 'Tibial anterior',
          musculo_id: 'tibial_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza los tobillos en dorsiflexión profunda.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Isquiotibiales',
          musculo_id: 'isquiotibiales',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan moderadamente en su inserción proximal por la flexión de cadera.'
        },
        {
          musculo: 'Sóleo y gastrocnemio',
          musculo_id: 'soleo_gastrocnemio',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estiran debido a la dorsiflexión forzada del tobillo.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Peso distribuido principalmente hacia los talones y el centro de los pies.',
        'Rodillas alineadas con el segundo dedo del pie sin sobrepasar excesivamente las puntas de los pies.',
        'Brazos elevados paralelos a las orejas con hombros lejos del cuello y columna neutra.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'La alta carga de compresión femororrotuliana puede agravar patologías de menisco o condromalacia rotuliana.',
        modificaciones: ['Reducir la profundidad de la flexión de rodillas manteniendo el apoyo de la espalda contra una pared.'],
        alternativa_segura: null
      },
      {
        condicion: 'embarazo',
        riesgo: 'alto',
        explicacion_clinica: 'Evitar variantes con torsión cerrada o compresión intraabdominal excesiva por riesgo vascular y mecánico.',
        modificaciones: ['Separar los pies al ancho de las caderas y mantener el torso semi-erguido sin realizar torsiones.'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Tadasana',
          instrucciones_transicion: ['Inhalar elevando los brazos al cielo.', 'Exhalar flexionando las rodillas y caderas llevando el peso hacia los talones.'],
          consejos_seguridad: 'Cuidar que las rodillas no colapsen hacia adentro en valgo durante la flexión.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Uttanasana',
          instrucciones_transicion: ['Exhalar estirando progresivamente las piernas mientras el torso desciende en flexión anterior.', 'Llevar las manos hacia el suelo o a bloques.'],
          consejos_seguridad: 'Mantener microflexión en rodillas si hay rigidez en isquiotibiales.'
        }
      ]
    }
  },
  {
    id: 'asana_anjaneyasana',
    nombre_sanscrito: 'Anjaneyasana',
    nombre_espanol: 'Estocada Baja',
    nombre_ingles: 'Low Lunge',
    familia_biomecanica: 'bipedestacion',
    nivel_dificultad: 'principiante',
    descripcion: 'Estocada con rodilla posterior apoyada en el suelo que abre los flexores de cadera y fortalece la pierna anterior. Mejora el equilibrio pélvico y la postura lumbar.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Cuádriceps de pierna anterior',
          musculo_id: 'cuadriceps_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Soporta la carga del peso corporal manteniendo el ángulo de flexión de rodilla a 90 grados.'
        },
        {
          musculo: 'Glúteo mayor de pierna posterior',
          musculo_id: 'gluteo_mayor_posterior',
          tipo_contraccion: 'concentrica',
          explicacion: 'Facilita la extensión activa de la cadera posterior estabilizando la pelvis.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Isquiotibiales de pierna anterior',
          musculo_id: 'isquiotibiales_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Co-contracción para estabilizar la articulación de la rodilla adelantada.'
        },
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostienen el tronco erguido y alargado sobre la pelvis.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Psoas ilíaco de pierna trasera',
          musculo_id: 'psoas_iliaco_posterior',
          tipo_contraccion: 'excentrica',
          explicacion: 'Recibe una intensa elongación pasiva por la hiperextensión de la cadera.'
        },
        {
          musculo: 'Recto femoral de pierna trasera',
          musculo_id: 'recto_femoral_posterior',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estira a lo largo de la cara anterior del muslo con la cadera en extensión.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Rodilla delantera flexionada a 90° alineada verticalmente sobre el tobillo.',
        'Caderas cuadradas apuntando directamente hacia el frente.',
        'Rodilla posterior descansando sobre el suelo con el empeine apoyado y alargando la columna.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'La presión directa del peso sobre la rótula posterior y la fuerza de cizalla en la rodilla anterior pueden causar dolor e inflamación.',
        modificaciones: ['Colocar una manta doblada bajo la rodilla posterior y no flexionar la rodilla delantera más allá de 90°.'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Adho Mukha Svanasana',
          instrucciones_transicion: ['Inhalar y dar un paso largo hacia adelante con el pie entre las manos.', 'Bajar suavemente la rodilla posterior al suelo y apoyar el empeine.'],
          consejos_seguridad: 'Asegurar que el pie delantero quede completamente plano antes de transferir peso.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Ardha Hanumanasana',
          instrucciones_transicion: ['Exhalar desplazando las caderas hacia atrás sobre la rodilla posterior.', 'Extender la pierna delantera flexionando el tobillo en dorsiflexión.'],
          consejos_seguridad: 'Mantener las caderas niveladas sin rotar la pelvis hacia los lados.'
        }
      ]
    }
  },
  {
    id: 'asana_ardha_chandrasana',
    nombre_sanscrito: 'Ardha Chandrasana',
    nombre_espanol: 'Postura de la Media Luna',
    nombre_ingles: 'Half Moon Pose',
    familia_biomecanica: 'equilibrio',
    nivel_dificultad: 'intermedio',
    descripcion: 'Asana de equilibrio sobre una pierna con apertura lateral de tronco y pelvis. Desarrolla estabilidad articular, coordinación y fuerza en abductores de cadera.',
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Glúteo medio de pierna de apoyo',
          musculo_id: 'gluteo_medio_apoyo',
          tipo_contraccion: 'isometrica',
          explicacion: 'Evita la caída de la pelvis en el plano frontal y sostiene el equilibrio monopodal.'
        },
        {
          musculo: 'Abductores de pierna elevada (glúteo medio y menor, tensor de la fascia lata)',
          musculo_id: 'abductores_elevada',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen la pierna en abducción paralela al suelo.'
        },
        {
          musculo: 'Cuádriceps de pierna de apoyo',
          musculo_id: 'cuadriceps_apoyo',
          tipo_contraccion: 'isometrica',
          explicacion: 'Extiende firmemente la rodilla de sostén sin hiperextenderla.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Oblicuos del abdomen',
          musculo_id: 'oblicuos_abdominales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen la rotación y apertura lateral del torso respecto al suelo.'
        },
        {
          musculo: 'Deltoides de brazo elevado',
          musculo_id: 'deltoides_elevado',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene el brazo superior extendido verticalmente hacia el cielo.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Aductores del muslo de ambas piernas',
          musculo_id: 'aductores_muslo',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan por la marcada abducción y apertura pélvica.'
        },
        {
          musculo: 'Isquiotibiales de pierna de apoyo',
          musculo_id: 'isquiotibiales_apoyo',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan debido a la flexión de cadera con la rodilla extendida.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Pie de apoyo firme mirando al frente con pierna de apoyo activa.',
        'Apertura completa de cadera y pecho en el mismo plano lateral vertical.',
        'Pierna elevada paralela al suelo con el pie activo y dedos apuntando hacia el lateral.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'vertigo',
        riesgo: 'alto',
        explicacion_clinica: 'Los cambios rápidos de plano visual y el desbalance vestibular pueden provocar pérdida brusca de estabilidad y caídas.',
        modificaciones: ['Apoyar la mano delantera sobre un bloque de yoga y mantener la mirada fija en el suelo.'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Utthita Trikonasana',
          instrucciones_transicion: [
            'Flexionar ligeramente la rodilla delantera y apoyar la mano a 30 cm por delante del pie.',
            'Inhalar transfiriendo el peso hacia la pierna delantera y despegar la pierna trasera hasta la horizontal.'
          ],
          consejos_seguridad: 'Colocar un bloque bajo la mano de apoyo para mantener el torso largo y estable.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Virabhadrasana II',
          instrucciones_transicion: ['Exhalar flexionando la rodilla delantera con control.', 'Aterrizar el pie trasero suavemente en el mat abriendo los brazos en cruz.'],
          consejos_seguridad: 'Controlar el descenso de la pierna trasera sin dejar caer bruscamente la pelvis.'
        }
      ]
    }
  },
  {
    id: 'asana_virabhadrasana_iii',
    nombre_sanscrito: 'Virabhadrasana III',
    nombre_espanol: 'Guerrero III',
    nombre_ingles: 'Warrior III',
    familia_biomecanica: 'equilibrio',
    nivel_dificultad: 'avanzado',
    descripcion: 'Desafiante postura de equilibrio sobre un pie donde el cuerpo forma una línea recta paralela al suelo. Desarrolla fuerza postural posterior y control propioceptivo profundo.',
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Cuádriceps de pierna de apoyo',
          musculo_id: 'cuadriceps_apoyo',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza la rodilla sosteniendo toda la carga corporal en un solo punto.'
        },
        {
          musculo: 'Glúteo mayor de pierna elevada',
          musculo_id: 'gluteo_mayor_elevada',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene la pierna trasera en extensión completa alineada con la pelvis.'
        },
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Extienden activamente la columna contra la gravedad para mantener el torso paralelo al suelo.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Glúteo medio de pierna de apoyo',
          musculo_id: 'gluteo_medio_apoyo',
          tipo_contraccion: 'isometrica',
          explicacion: 'Previene la inclinación y caída lateral de la pelvis manteniendo las crestas ilíacas paralelas.'
        },
        {
          musculo: 'Transverso del abdomen',
          musculo_id: 'transverso_abdomen',
          tipo_contraccion: 'isometrica',
          explicacion: 'Provee compresión y rigidez al núcleo para conectar torso y pelvis.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Isquiotibiales de pierna de apoyo',
          musculo_id: 'isquiotibiales_apoyo',
          tipo_contraccion: 'excentrica',
          explicacion: 'Sufren un intenso estiramiento activo con la cadera flexionada a 90 grados y rodilla extendida.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Crestas ilíacas y pelvis perfectamente cuadradas orientadas hacia el suelo.',
        'Torso, pelvis y pierna elevada alineados en un plano horizontal paralelo al mat.',
        'Cuello neutro con la mirada fija en un punto estable sobre el piso.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'La inestabilidad monopodal y la sobrecarga axial pueden tensar los ligamentos cruzados y meniscos.',
        modificaciones: ['Apoyar las manos sobre una pared o respaldo de silla para descargar peso y estabilizar el equilibrio.'],
        alternativa_segura: null
      },
      {
        condicion: 'vertigo',
        riesgo: 'alto',
        explicacion_clinica: 'La posición horizontal de la cabeza combinada con el apoyo monopodal compromete severamente el sistema vestibular.',
        modificaciones: ['Realizar la postura con las manos apoyadas en la pared manteniendo la mirada en el suelo.'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Virabhadrasana I',
          instrucciones_transicion: [
            'Inhalar inclinando el torso hacia adelante sobre el muslo frontal.',
            'Despegar el pie trasero transfiriendo el peso y extender ambas piernas formando una línea horizontal.'
          ],
          consejos_seguridad: 'Cerrar la cadera de la pierna flotante rotando el muslo internamente.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Tadasana',
          instrucciones_transicion: ['Inhalar elevando el torso a la vertical mientras la pierna trasera desciende suavemente.', 'Juntar ambos pies y bajar los brazos a los lados.'],
          consejos_seguridad: 'Aterrizar con control muscular evitando impactos bruscos en el talón.'
        }
      ]
    }
  },
  {
    id: 'asana_kumbhakasana',
    nombre_sanscrito: 'Kumbhakasana',
    nombre_espanol: 'Postura de la Plancha',
    nombre_ingles: 'Plank Pose',
    familia_biomecanica: 'equilibrio',
    nivel_dificultad: 'principiante',
    descripcion: 'Postura isométrica fundamental de apoyo sobre manos y pies que activa la faja abdominal y la cintura escapular. Fortalece la musculatura estabilizadora del core.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 12 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Recto abdominal',
          musculo_id: 'recto_abdominal',
          tipo_contraccion: 'isometrica',
          explicacion: 'Evita la extensión lumbar excesiva y sostiene la pelvis en posición neutra.'
        },
        {
          musculo: 'Transverso del abdomen',
          musculo_id: 'transverso_abdomen',
          tipo_contraccion: 'isometrica',
          explicacion: 'Aumenta la presión intraabdominal protegiendo la columna lumbar.'
        },
        {
          musculo: 'Pectoral mayor',
          musculo_id: 'pectoral_mayor',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza la articulación glenohumeral durante el soporte del peso.'
        },
        {
          musculo: 'Deltoides (fibras anteriores)',
          musculo_id: 'deltoides_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene la flexión de hombro resistiendo el empuje contra el suelo.'
        },
        {
          musculo: 'Serrato anterior',
          musculo_id: 'serrato_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Realiza la protracción escapular evitando el colapso torácico y el aleteo escapular.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Cuádriceps femoral',
          musculo_id: 'cuadriceps_femoral',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene las rodillas completamente extendidas.'
        },
        {
          musculo: 'Glúteos',
          musculo_id: 'gluteos',
          tipo_contraccion: 'isometrica',
          explicacion: 'Asisten en la alineación neutra de la pelvis previniendo la anteversión.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Sin estiramiento pasivo predominante',
          musculo_id: 'ninguno_predominante',
          tipo_contraccion: 'isometrica',
          explicacion: 'Postura isométrica global de cocontracción donde predomina la estabilización articular sobre el estiramiento pasivo.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Muñecas alineadas directamente debajo de los hombros con dedos bien abiertos.',
        'Cuerpo en una línea recta y continua desde los talones hasta la coronilla.',
        'Empuje activo del suelo separando las escápulas sin hundir el pecho ni la pelvis.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hipertension_arterial',
        riesgo: 'moderado',
        explicacion_clinica: 'La contracción isométrica sostenida puede elevar bruscamente la presión arterial mediante la maniobra de Valsalva involuntaria.',
        modificaciones: ['Mantener respiración fluida y apoyar las rodillas en el suelo para reducir la carga isométrica.'],
        alternativa_segura: null
      },
      {
        condicion: 'problemas_muneca',
        riesgo: 'alto',
        explicacion_clinica: 'La extensión de muñeca a 90° bajo carga total puede irritar el túnel carpiano y tendones flexores.',
        modificaciones: ['Realizar la plancha sobre antebrazos o utilizar puños cerrados / cuñas ergonómicas.'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Adho Mukha Svanasana',
          instrucciones_transicion: ['Inhalar desplazando los hombros hacia adelante sobre las muñecas.', 'Alinear el cuerpo en un plano inclinado firme y recto.'],
          consejos_seguridad: 'Evitar que las caderas se hundan hacia el suelo durante el traslado del peso.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Chaturanga Dandasana',
          instrucciones_transicion: [
            'Exhalar desplazando el peso ligeramente hacia adelante en los dedos de los pies.',
            'Flexionar los codos a 90 grados manteniéndolos pegados a las costillas.'
          ],
          consejos_seguridad: 'No permitir que los hombros desciendan por debajo del nivel de los codos.'
        }
      ]
    }
  },
  {
    id: 'asana_baddha_konasana',
    nombre_sanscrito: 'Baddha Konasana',
    nombre_espanol: 'Postura de la Mariposa',
    nombre_ingles: 'Bound Angle Pose',
    familia_biomecanica: 'sentada',
    nivel_dificultad: 'principiante',
    descripcion: 'Postura sedente con unión de plantas de los pies y apertura de caderas que elonga los aductores. Estimula los órganos pélvicos y mejora la movilidad coxofemoral.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Glúteo medio',
          musculo_id: 'gluteo_medio',
          tipo_contraccion: 'isometrica',
          explicacion: 'Asiste en la abducción y estabilización de las caderas abiertas.'
        },
        {
          musculo: 'Rotadores externos de cadera (piriforme, obturadores, géminos)',
          musculo_id: 'rotadores_externos_cadera',
          tipo_contraccion: 'isometrica',
          explicacion: 'Activan la rotación externa coxofemoral permitiendo el descenso de los muslos.'
        },
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen la columna recta y vertical desde la base pélvica.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Transverso del abdomen',
          musculo_id: 'transverso_abdomen',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene la presión pélvica y la estabilidad del tronco.'
        },
        {
          musculo: 'Sartorio',
          musculo_id: 'sartorio',
          tipo_contraccion: 'concentrica',
          explicacion: 'Favorece la flexión, abducción y rotación externa simultánea de cadera.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Aductores del muslo (aductor largo, corto, mayor y pectíneo)',
          musculo_id: 'aductores_muslo',
          tipo_contraccion: 'excentrica',
          explicacion: 'Reciben un estiramiento progresivo por la abducción y rotación externa de caderas.'
        },
        {
          musculo: 'Grácil',
          musculo_id: 'gracil',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga pasivamente a lo largo de la cara medial del muslo.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Plantas de los pies en contacto mutuo, sujetando suavemente los pies o tobillos.',
        'Columna erguida y elongada en vertical desde una pelvis neutra.',
        'Rodillas descendiendo libremente hacia los laterales sin forzarlas hacia abajo con las manos.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'La rotación excesiva o el estrés en valgo sobre la rodilla flexionada puede agravar desgarros de menisco o lesiones de ingle.',
        modificaciones: ['Colocar bloques o mantas debajo de los muslos/rodillas para brindar soporte y reducir el ángulo articular.'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Dandasana',
          instrucciones_transicion: ['Flexionar ambas rodillas llevando los talones hacia la pelvis.', 'Unir las plantas de los pies y dejar caer las rodillas hacia los lados.'],
          consejos_seguridad: 'Mantener la columna neutra evitando que la pelvis bascule en retroversión.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Dandasana',
          instrucciones_transicion: ['Usar las manos en la cara externa de las rodillas para cerrarlas suavemente.', 'Extender las piernas hacia el frente sobre el mat.'],
          consejos_seguridad: 'Cerrar las piernas con lentitud para permitir la relajación de los aductores.'
        }
      ]
    }
  },
  {
    id: 'asana_sukhasana',
    nombre_sanscrito: 'Sukhasana',
    nombre_espanol: 'Postura Fácil',
    nombre_ingles: 'Easy Pose',
    familia_biomecanica: 'sentada',
    nivel_dificultad: 'principiante',
    descripcion: 'Postura meditativa sentada con piernas cruzadas que fomenta el alineamiento axial y la concentración interior. Promueve el enraizamiento y la apertura suave de caderas.',
    duracion_sugerida_respiraciones: { principiante: 10, intermedio: 20, avanzado: 30 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen el torso erguido contrarrestando la tendencia a la cifosis dorsal.'
        },
        {
          musculo: 'Musculatura profunda del core (transverso abdominal y multífidos)',
          musculo_id: 'musculatura_profunda_core',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabilizan la pelvis neutra y sostienen la alineación lumbopélvica de forma continua.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Psoas mayor',
          musculo_id: 'psoas_mayor',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene la flexión moderada de cadera sin sobreactivarse.'
        },
        {
          musculo: 'Trapecio medio e inferior',
          musculo_id: 'trapecio_medio_inferior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Favorecen la depresión y retracción suave de las escápulas.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Rotadores externos y abductores de cadera (glúteo medio, piriforme)',
          musculo_id: 'rotadores_abductores_cadera',
          tipo_contraccion: 'excentrica',
          explicacion: 'Experimentan una elongación suave al mantener las tibias cruzadas en el suelo.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Tibias cruzadas con pies cómodamente apoyados debajo de las rodillas contrarias.',
        'Pelvis neutra apoyada equilibradamente sobre ambos isquiones sin retroversión.',
        'Hombros relajados lejos de las orejas con coronilla proyectada hacia el techo.'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'bajo',
        explicacion_clinica: 'La flexión sostenida con torsión tibial puede causar molestias en articulaciones comprometidas o con lesiones agudas de cadera/rodilla.',
        modificaciones: ['Sentarse sobre un cojín de meditación o bloque para elevar la pelvis por encima de las rodillas.'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Dandasana',
          instrucciones_transicion: ['Flexionar ambas rodillas y cruzar las tibias en el centro.', 'Deslizar los pies bajo las rodillas y acomodar los isquiones.'],
          consejos_seguridad: 'Elevar la pelvis con un soporte si las rodillas quedan por encima de las caderas.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Dandasana',
          instrucciones_transicion: ['Descruzar las piernas lentamente hacia el frente.', 'Estirar las rodillas y mover los tobillos para restablecer la circulación.'],
          consejos_seguridad: 'Alternar el cruce de las piernas periódicamente para mantener el equilibrio pélvico.'
        }
      ]
    }
  },
  {
    id: 'asana_chakravakasana',
    nombre_sanscrito: 'Chakravakasana',
    nombre_espanol: 'Gato-Vaca',
    nombre_ingles: 'Cat-Cow Pose',
    familia_biomecanica: 'flexion_anterior',
    nivel_dificultad: 'principiante',
    descripcion: 'Movimiento fluido y coordinado con la respiración que alterna flexión y extensión de la columna vertebral. Moviliza cada segmento vertebral mientras calienta la musculatura del tronco y la pelvis.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'concentrica',
          explicacion: 'Se contraen concéntricamente durante la fase de extensión (Vaca) para elevar el pecho y arquear la columna.'
        },
        {
          musculo: 'Recto abdominal',
          musculo_id: 'recto_abdominal',
          tipo_contraccion: 'concentrica',
          explicacion: 'Se contrae concéntricamente durante la fase de flexión (Gato) redondeando la columna dorsal y lumbar.'
        },
        {
          musculo: 'Oblicuos abdominales',
          musculo_id: 'oblicuos_abdominales',
          tipo_contraccion: 'concentrica',
          explicacion: 'Asisten en la flexión activa del tronco y ayudan a estabilizar la pelvis durante la transición.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Serrato anterior',
          musculo_id: 'serrato_anterior',
          tipo_contraccion: 'concentrica',
          explicacion: 'Protruye las escápulas activamente en la flexión de la columna (Gato).'
        },
        {
          musculo: 'Psoas mayor',
          musculo_id: 'psoas_mayor',
          tipo_contraccion: 'concentrica',
          explicacion: 'Participa en la anteversión pélvica durante la fase de extensión vertebral.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Pared abdominal',
          musculo_id: 'pared_abdominal',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estira y elonga longitudinalmente durante la fase de extensión espinal (Vaca).'
        },
        {
          musculo: 'Extensores espinales',
          musculo_id: 'extensores_espinales',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan y relajan a lo largo de la espalda durante la fase de flexión espinal (Gato).'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Muñecas alineadas directamente debajo de los hombros',
        'Rodillas separadas al ancho de las caderas y debajo de las crestas ilíacas',
        'Sincronizar cada fase del movimiento con el ciclo respiratorio',
        'Mantener los dedos de las manos abiertos y presionando con las yemas'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'moderado',
        explicacion_clinica: 'Las lesiones cervicales o lumbares agudas pueden agravarse con una hiperextensión o hiperflexión no controlada.',
        modificaciones: ['Mantener el cuello neutro en todo momento', 'Reducir el rango de movimiento limitándolo al rango medio cómodo'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Balasana',
          instrucciones_transicion: ['Inhalar elevando el torso a cuatro puntos de apoyo', 'Alinear muñecas bajo hombros y rodillas bajo caderas'],
          consejos_seguridad: 'Asegurar una base firme con las manos bien abiertas.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Balasana',
          instrucciones_transicion: ['Exhalar y llevar los glúteos hacia los talones', 'Extender los brazos hacia adelante y apoyar la frente en el suelo'],
          consejos_seguridad: 'Descargar el peso suavemente sobre las caderas sin forzar las rodillas.'
        }
      ]
    }
  },
  {
    id: 'asana_dandasana',
    nombre_sanscrito: 'Dandasana',
    nombre_espanol: 'Postura del Bastón',
    nombre_ingles: 'Staff Pose',
    familia_biomecanica: 'sentada',
    nivel_dificultad: 'principiante',
    descripcion: 'Postura sentada de base donde el cuerpo forma un ángulo de 90 grados con la columna erguida y las piernas activamente extendidas. Establece la base postural para todas las flexiones y torsiones sentadas.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Erectores de la columna',
          musculo_id: 'erectores_columna',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen la columna erguida contra la gravedad contrarrestando la tendencia al colapso dorsal.'
        },
        {
          musculo: 'Flexores de cadera (Psoas ilíaco)',
          musculo_id: 'flexores_cadera',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostienen la anteversión de la pelvis y el ángulo de 90 grados entre tronco y piernas.'
        },
        {
          musculo: 'Cuádriceps femoral',
          musculo_id: 'cuadriceps_femoral',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen la extensión completa de las rodillas y fijan la rótula.'
        },
        {
          musculo: 'Transverso y recto abdominal',
          musculo_id: 'transverso_recto_abdominal',
          tipo_contraccion: 'isometrica',
          explicacion: 'Proveen sostén a la columna lumbar y estabilizan el core de forma continua.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Tibial anterior',
          musculo_id: 'tibial_anterior',
          tipo_contraccion: 'concentrica',
          explicacion: 'Mantiene la dorsiflexión activa de los tobillos empujando con los talones.'
        },
        {
          musculo: 'Romboides',
          musculo_id: 'romboides',
          tipo_contraccion: 'isometrica',
          explicacion: 'Retraen suavemente las escápulas para abrir el pecho.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Isquiotibiales',
          musculo_id: 'isquiotibiales',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan activamente por detrás de los muslos debido a la extensión de rodilla y flexión de cadera.'
        },
        {
          musculo: 'Gastrocnemio y sóleo',
          musculo_id: 'gastrocnemio_soleo',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estiran a lo largo de la pantorrilla por la dorsiflexión activa del tobillo.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Pelvis neutra con peso distribuido equilibradamente sobre ambos isquiones',
        'Columna erguida activa proyectando la coronilla hacia el techo',
        'Pies en dorsiflexión activa con los talones empujando hacia adelante',
        'Manos apoyadas al lado de las caderas con los hombros relajados hacia abajo'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'moderado',
        explicacion_clinica: 'Si los isquiotibiales están acortados, la pelvis colapsa en retroversión generando aumento de presión intradiscal lumbar.',
        modificaciones: ['Colocar una manta doblada o un bloque bajo los isquiones para elevar la pelvis', 'Flexionar ligeramente las rodillas manteniendo la espalda recta'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Sukasana',
          instrucciones_transicion: ['Extender ambas piernas al frente sobre el mat', 'Acomodar los glúteos hacia atrás para asentar los isquiones'],
          consejos_seguridad: 'Evitar encorvar la zona lumbar al extender las piernas.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Paschimottanasana',
          instrucciones_transicion: ['Inhalar alargando los brazos al cielo', 'Exhalar inclinándose desde las caderas hacia las piernas'],
          consejos_seguridad: 'Iniciar el movimiento desde la articulación coxofemoral y no desde la cintura.'
        }
      ]
    }
  },
  {
    id: 'asana_dhanurasana',
    nombre_sanscrito: 'Dhanurasana',
    nombre_espanol: 'Postura del Arco',
    nombre_ingles: 'Bow Pose',
    familia_biomecanica: 'extension_posterior',
    nivel_dificultad: 'avanzado',
    descripcion: 'Extensión posterior profunda en decúbito prono donde las manos sujetan los tobillos para elevar simultáneamente el pecho y los muslos, equilibrando el cuerpo sobre el abdomen.',
    duracion_sugerida_respiraciones: { principiante: 3, intermedio: 5, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Glúteo mayor',
          musculo_id: 'gluteo_mayor',
          tipo_contraccion: 'concentrica',
          explicacion: 'Extiende intensamente las caderas para elevar los muslos del suelo.'
        },
        {
          musculo: 'Isquiotibiales',
          musculo_id: 'isquiotibiales',
          tipo_contraccion: 'concentrica',
          explicacion: 'Flexionan las rodillas y asisten en la elevación de las piernas.'
        },
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostienen la extensión completa de toda la columna vertebral.'
        },
        {
          musculo: 'Romboides y trapecio medio',
          musculo_id: 'romboides_trapecio_medio',
          tipo_contraccion: 'isometrica',
          explicacion: 'Aducen las escápulas abriendo la caja torácica hacia adelante.'
        },
        {
          musculo: 'Deltoides posterior',
          musculo_id: 'deltoides_posterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Extiende los hombros hacia atrás mientras las manos traccionan de los tobillos.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Dorsal ancho',
          musculo_id: 'dorsal_ancho',
          tipo_contraccion: 'concentrica',
          explicacion: 'Ayuda a descender los hombros y mantener la extensión torácica.'
        },
        {
          musculo: 'Aductor mayor',
          musculo_id: 'aductor_mayor',
          tipo_contraccion: 'isometrica',
          explicacion: 'Evita que las rodillas se abran excesivamente hacia los lados.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Recto abdominal',
          musculo_id: 'recto_abdominal',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga en la pared anterior del abdomen frente a la extensión del torso.'
        },
        {
          musculo: 'Psoas ilíaco',
          musculo_id: 'psoas_iliaco',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estira intensamente ante la extensión coxofemoral completa.'
        },
        {
          musculo: 'Cuádriceps femoral',
          musculo_id: 'cuadriceps_femoral',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estira fuertemente en la cara anterior del muslo con rodillas flexionadas.'
        },
        {
          musculo: 'Pectoral mayor y menor',
          musculo_id: 'pectorales',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se abren y expanden en la parte frontal del tórax.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Tracción de los pies hacia atrás y arriba para elevar el pecho',
        'Rodillas separadas no más del ancho de las caderas',
        'Mirada suave al frente o ligeramente hacia arriba sin comprimir las cervicales',
        'Hombros alejados de las orejas manteniendo espacio en el cuello'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'embarazo',
        riesgo: 'alto',
        explicacion_clinica: 'La posición en decúbito prono ejerce una presión directa y perjudicial sobre el útero grávido.',
        modificaciones: ['Evitar completamente la postura prono'],
        alternativa_segura: null
      },
      {
        condicion: 'hernias_discales',
        riesgo: 'alto',
        explicacion_clinica: 'La hiperlordosis lumbar puede causar compresión facetaria severa o pellizcamiento de raíces nerviosas en presencia de espondilolistesis o lesiones lumbares.',
        modificaciones: ['Practicar extensiones suaves como Salamba Bhujangasana o Setu Bandhasana'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Salabhasana',
          instrucciones_transicion: [
            'Flexionar ambas rodillas llevando los talones a los glúteos',
            'Llevar las manos hacia atrás y sujetar firmemente los tobillos',
            'Inhalar pateando con los pies hacia atrás y arriba para elevar el torso'
          ],
          consejos_seguridad: 'No abrir las rodillas más allá del ancho de las caderas al elevarse.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Balasana',
          instrucciones_transicion: [
            'Exhalar soltando lentamente los tobillos y bajar el cuerpo al suelo',
            'Empujar con las manos y llevar las caderas hacia los talones descansando la espalda'
          ],
          consejos_seguridad: 'Realizar la contrapostura suavemente para descomprimir la zona lumbar.'
        }
      ]
    }
  },
  {
    id: 'asana_janu_sirsasana',
    nombre_sanscrito: 'Janu Sirsasana',
    nombre_espanol: 'Cabeza a la Rodilla',
    nombre_ingles: 'Head-to-Knee Pose',
    familia_biomecanica: 'flexion_anterior',
    nivel_dificultad: 'intermedio',
    descripcion: 'Flexión anterior asimétrica sentada donde una pierna permanece extendida mientras la otra se flexiona con la planta del pie en el muslo interno opuesto, combinando estiramiento isquiotibial y suave rotación.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Cuádriceps pierna extendida',
          musculo_id: 'cuadriceps_pierna_extendida',
          tipo_contraccion: 'concentrica',
          explicacion: 'Mantiene la rodilla extendida activamente por inhibición recíproca de los isquiotibiales.'
        },
        {
          musculo: 'Flexores de cadera',
          musculo_id: 'flexores_cadera',
          tipo_contraccion: 'concentrica',
          explicacion: 'Traccionan la pelvis en anteversión guiando el torso hacia el muslo.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Oblicuo abdominal contralateral',
          musculo_id: 'oblicuo_contralateral',
          tipo_contraccion: 'concentrica',
          explicacion: 'Facilita la leve rotación del tronco para centrar el esternón sobre la pierna extendida.'
        },
        {
          musculo: 'Bíceps braquial',
          musculo_id: 'biceps_braquial',
          tipo_contraccion: 'concentrica',
          explicacion: 'Asiste en traccionar suavemente el torso hacia adelante cuando las manos sujetan el pie o la cincha.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Isquiotibiales de la pierna extendida',
          musculo_id: 'isquiotibiales_pierna_extendida',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan intensamente a lo largo del plano posterior del muslo.'
        },
        {
          musculo: 'Glúteo mayor',
          musculo_id: 'gluteo_mayor',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estira debido a la flexión de la articulación de la cadera.'
        },
        {
          musculo: 'Musculatura lumbar y dorsal ancho',
          musculo_id: 'musculatura_lumbar',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga en el lado del cuerpo correspondiente a la pierna flexionada.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Torso orientado directamente hacia la línea central de la pierna extendida',
        'Flexión originada desde la articulación coxofemoral evitando redondear la espalda',
        'Pie de la pierna flexionada apoyado sin ejercer presión nociva en la rodilla',
        'Hombros nivelados y paralelos al suelo durante el descenso'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'moderado',
        explicacion_clinica: 'La flexión combinada con asimetría puede generar fuerzas de cizallamiento en los discos intervertebrales lumbares.',
        modificaciones: ['Usar una cincha alrededor del pie extendido para mantener la columna neutra', 'Sentarse sobre un bloque o manta doblada'],
        alternativa_segura: null
      },
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'La rotación externa forzada de la pierna flexionada puede pellizcar el menisco medial si la cadera carece de movilidad.',
        modificaciones: ['Colocar un bloque o soporte debajo de la rodilla flexionada', 'Abrir el ángulo de la pierna flexionada'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Dandasana',
          instrucciones_transicion: [
            'Flexionar la rodilla derecha y apoyar la planta del pie contra el muslo interno izquierdo',
            'Girar levemente el torso hacia la pierna izquierda extendida',
            'Inhalar alargando la columna y exhalar plegándose hacia adelante'
          ],
          consejos_seguridad: 'Asegurar que ambos isquiones permanezcan conectados con la base.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Dandasana',
          instrucciones_transicion: ['Inhalar elevando el torso con la columna recta', 'Extender la pierna flexionada al frente alineándola con la otra'],
          consejos_seguridad: 'Extender la rodilla lentamente sin movimientos bruscos.'
        }
      ]
    }
  },
  {
    id: 'asana_malasana',
    nombre_sanscrito: 'Malasana',
    nombre_espanol: 'Postura de la Guirnalda',
    nombre_ingles: 'Garland Pose',
    familia_biomecanica: 'sentada',
    nivel_dificultad: 'principiante',
    descripcion: 'Sentadilla profunda con los pies apoyados en el suelo y las palmas juntas al centro del pecho, promoviendo la movilidad articular en tobillos, rodillas y caderas mientras alarga la columna lumbar.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Tibial anterior',
          musculo_id: 'tibial_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene la dorsiflexión profunda de los tobillos para estabilizar el peso del cuerpo.'
        },
        {
          musculo: 'Erectores espinales',
          musculo_id: 'erectores_espinales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Actúan para elevar el esternón y contrarrestar el colapso dorsal en la sentadilla.'
        },
        {
          musculo: 'Aductores de cadera',
          musculo_id: 'aductores_cadera',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen el tono activo y modulan la apertura coxofemoral junto a los brazos.'
        },
        {
          musculo: 'Complejo muscular pélvico',
          musculo_id: 'complejo_pelvico',
          tipo_contraccion: 'isometrica',
          explicacion: 'Regula la estabilidad del suelo de la pelvis en máxima flexión de cadera.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Glúteo medio y menor',
          musculo_id: 'gluteo_medio_menor',
          tipo_contraccion: 'isometrica',
          explicacion: 'Asisten en la abducción y estabilidad rotacional de las caderas.'
        },
        {
          musculo: 'Romboides',
          musculo_id: 'romboides',
          tipo_contraccion: 'isometrica',
          explicacion: 'Juntan las escápulas para permitir una apertura torácica amplia.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Glúteo mayor',
          musculo_id: 'gluteo_mayor',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga en el plano posterior por la hiperflexión de caderas.'
        },
        {
          musculo: 'Sóleo',
          musculo_id: 'soleo',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga intensamente ante el gran ángulo de dorsiflexión del tobillo.'
        },
        {
          musculo: 'Gastrocnemio',
          musculo_id: 'gastrocnemio',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estira a lo largo de la pantorrilla permitiendo el descenso del talón.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Columna erguida y levantada proyectando la coronilla al cielo',
        'Codos presionando suavemente contra la cara interna de las rodillas',
        'Palmas en Anjali Mudra al centro del pecho con el esternón elevado',
        'Peso distribuido uniformemente en los tres puntos de apoyo de cada pie'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'alto',
        explicacion_clinica: 'La hiperflexión de rodillas con carga completa somete a compresión extrema los cuernos posteriores de los meniscos.',
        modificaciones: ['Sentarse sobre uno o dos bloques de yoga', 'Colocar una manta enrollada debajo de los talones'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Tadasana',
          instrucciones_transicion: [
            'Separar los pies al ancho del mat con los dedos ligeramente hacia afuera',
            'Exhalar doblando las rodillas y descendiendo la pelvis en una sentadilla profunda',
            'Juntar las palmas al pecho y colocar los codos dentro de las rodillas'
          ],
          consejos_seguridad: 'Descender con control manteniendo los talones enraizados.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Uttanasana',
          instrucciones_transicion: ['Apoyar las manos en el suelo delante de los pies', 'Inhalar extendiendo las piernas y elevando las caderas al cielo'],
          consejos_seguridad: 'Mantener las rodillas ligeramente flexionadas si hay tensión isquiotibial.'
        }
      ]
    }
  },
  {
    id: 'asana_prasarita_padottanasana',
    nombre_sanscrito: 'Prasarita Padottanasana',
    nombre_espanol: 'Flexión con Piernas Separadas',
    nombre_ingles: 'Wide-Legged Forward Bend',
    familia_biomecanica: 'flexion_anterior',
    nivel_dificultad: 'intermedio',
    descripcion: 'Flexión profunda hacia adelante con piernas ampliamente separadas que elonga intensamente los isquiotibiales y la cadena posterior mientras estabiliza la articulación de la cadera.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Cuádriceps femoral (fijación patelar)',
          musculo_id: 'cuadriceps_fijacion_patelar',
          tipo_contraccion: 'concentrica',
          explicacion: 'Extienden activamente las rodillas elevando las rótulas y protegiendo los meniscos.'
        },
        {
          musculo: 'Flexores de cadera (Psoas e Ilíaco)',
          musculo_id: 'flexores_cadera',
          tipo_contraccion: 'concentrica',
          explicacion: 'Inclinan la pelvis en anteversión profunda dirigiendo la flexión desde las ingles.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Tibial anterior y peroneo largo',
          musculo_id: 'tibial_peroneos',
          tipo_contraccion: 'isometrica',
          explicacion: 'Preservan los arcos plantares e impiden el colapso del tobillo.'
        },
        {
          musculo: 'Transverso abdominal',
          musculo_id: 'transverso_abdominal',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene el abdomen hacia la columna proporcionando soporte central.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Aductores del muslo',
          musculo_id: 'aductores_muslo',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan profundamente debido a la gran separación lateral de las piernas.'
        },
        {
          musculo: 'Isquiotibiales',
          musculo_id: 'isquiotibiales',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estiran de forma global en la cara posterior de ambos muslos.'
        },
        {
          musculo: 'Fascia tóraco-lumbar',
          musculo_id: 'fascia_toracolumbar',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se descomprime y elonga a lo largo de toda la espalda baja y media.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Bordes externos de los pies paralelos entre sí y al borde del mat',
        'Flexión generada estrictamente desde la articulación coxofemoral',
        'Peso distribuido equilibradamente entre los metatarsos y los talones',
        'Coronilla orientada hacia el suelo alargando el cuello'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'hernias_discales',
        riesgo: 'moderado',
        explicacion_clinica: 'La flexión total de columna bajo carga puede desplazar el material discal posteriormente.',
        modificaciones: ['Apoyar las manos sobre bloques a la altura de los hombros', 'Mantener la columna neutra paralela al suelo sin redondear'],
        alternativa_segura: null
      },
      {
        condicion: 'glaucoma',
        riesgo: 'alto',
        explicacion_clinica: 'Tener la cabeza por debajo del nivel del corazón eleva la presión intraocular de manera riesgosa.',
        modificaciones: ['Mantener la cabeza a la altura del corazón apoyando las manos en bloques altos'],
        alternativa_segura: null
      },
      {
        condicion: 'vertigo',
        riesgo: 'moderado',
        explicacion_clinica: 'El cambio brusco de orientación espacial de la cabeza puede detonar mareos o desestabilización.',
        modificaciones: ['Descender lentamente manteniendo la mirada fija en un punto fijo del suelo'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Tadasana',
          instrucciones_transicion: [
            'Dar un paso amplio lateral separando los pies aproximadamente a 1 metro o más',
            'Colocar las manos en las caderas e inhalar abriendo el pecho',
            'Exhalar e inclinarse hacia adelante desde las ingles apoyando las manos en el suelo'
          ],
          consejos_seguridad: 'Asegurar que los pies no resbalen manteniendo los arcos activos.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Tadasana',
          instrucciones_transicion: [
            'Llevar las manos a las caderas y activar el abdomen',
            'Inhalar elevando el torso con la espalda recta hasta quedar de pie',
            'Juntar los pies suavemente volviendo al centro del mat'
          ],
          consejos_seguridad: 'Subir con la espalda plana para evitar mareos al incorporarse.'
        }
      ]
    }
  },
  {
    id: 'asana_salabasana',
    nombre_sanscrito: 'Salabasana',
    nombre_espanol: 'Postura de la Langosta',
    nombre_ingles: 'Locust Pose',
    familia_biomecanica: 'extension_posterior',
    nivel_dificultad: 'intermedio',
    descripcion: 'Extensión posterior en decúbito prono contra la gravedad que fortalece la cadena muscular posterior completa, elevando simultáneamente el pecho, los brazos y las piernas.',
    duracion_sugerida_respiraciones: { principiante: 4, intermedio: 6, avanzado: 8 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Erectores de la columna',
          musculo_id: 'erectores_columna',
          tipo_contraccion: 'concentrica',
          explicacion: 'Elevan el tronco y la cabeza venciendo activamente la gravedad.'
        },
        {
          musculo: 'Glúteo mayor',
          musculo_id: 'gluteo_mayor',
          tipo_contraccion: 'concentrica',
          explicacion: 'Extiende las caderas para despegar los muslos del mat.'
        },
        {
          musculo: 'Isquiotibiales',
          musculo_id: 'isquiotibiales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen la extensión y elevación de las piernas en el aire.'
        },
        {
          musculo: 'Deltoides posterior',
          musculo_id: 'deltoides_posterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Eleva los brazos hacia atrás paralelos al suelo.'
        },
        {
          musculo: 'Romboides',
          musculo_id: 'romboides',
          tipo_contraccion: 'isometrica',
          explicacion: 'Retraen y deprimen las escápulas abriendo la caja torácica.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Aductor mayor',
          musculo_id: 'aductor_mayor',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene las piernas juntas evitando que se abran durante la elevación.'
        },
        {
          musculo: 'Tríceps braquial',
          musculo_id: 'triceps_braquial',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene los codos completamente extendidos al proyectar las manos atrás.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Recto abdominal',
          musculo_id: 'recto_abdominal',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elonga en la cara anterior del abdomen adaptándose al arqueo.'
        },
        {
          musculo: 'Flexores de cadera (Psoas ilíaco)',
          musculo_id: 'flexores_cadera',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estiran por la extensión continua de las caderas.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Alargamiento axial continuo desde la coronilla hasta las puntas de los pies',
        'Elevación simétrica sostenida por la cadena posterior',
        'Cuello largo y neutro evitando colapsar las vértebras cervicales',
        'Púbis enraizado contra el mat para proteger la región lumbar'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'embarazo',
        riesgo: 'alto',
        explicacion_clinica: 'La compresión mecánica directa sobre el abdomen y la pelvis está totalmente contraindicada.',
        modificaciones: ['Evitar completamente la postura prono'],
        alternativa_segura: null
      },
      {
        condicion: 'hernias_discales',
        riesgo: 'moderado',
        explicacion_clinica: 'La hiperextensión lumbar no asistida puede incrementar la compresión en lesiones discales agudas.',
        modificaciones: ['Elevar únicamente el torso manteniendo los pies apoyados', 'Alternar elevando un solo brazo y la pierna opuesta'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Decúbito prono neutro',
          instrucciones_transicion: [
            'Acostarse boca abajo con los brazos extendidos a los costados del cuerpo',
            'Inhalar profundamente alargando la columna y despegar pecho, brazos y piernas del suelo'
          ],
          consejos_seguridad: 'Priorizar el alargamiento antes que la altura de la elevación.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Balasana',
          instrucciones_transicion: ['Exhalar apoyando suavemente el cuerpo sobre el mat', 'Empujar con las manos y llevar los glúteos a los talones'],
          consejos_seguridad: 'Relajar completamente la musculatura paravertebral en la postura de descanso.'
        }
      ]
    }
  },
  {
    id: 'asana_salamba_bhujangasana',
    nombre_sanscrito: 'Salamba Bhujangasana',
    nombre_espanol: 'Postura de la Esfinge',
    nombre_ingles: 'Sphinx Pose',
    familia_biomecanica: 'extension_posterior',
    nivel_dificultad: 'principiante',
    descripcion: 'Extensión espinal suave y pasiva-activa con apoyo de antebrazos en decúbito prono, ideal para descomprimir la columna, abrir el pecho y rehabilitar la movilidad dorsal.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Erectores espinales dorsales',
          musculo_id: 'erectores_espinales_dorsales',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen la suave extensión del segmento torácico elevando el esternón.'
        },
        {
          musculo: 'Serrato anterior',
          musculo_id: 'serrato_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Empuja los antebrazos contra el mat estabilizando las escápulas y evitando el hundimiento torácico.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Trapecio inferior',
          musculo_id: 'trapecio_inferior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Deprime los hombros alejándolos activamente de las orejas.'
        },
        {
          musculo: 'Glúteo medio',
          musculo_id: 'gluteo_medio',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza el sacro y la pelvis contra el suelo.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Recto abdominal',
          musculo_id: 'recto_abdominal',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se estira suavemente a lo largo de la pared anterior del tronco.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Codos ubicados directamente debajo de los hombros',
        'Antebrazos y palmas paralelos entre sí empujando activamente el mat',
        'Esternón proyectado hacia adelante y arriba con el pecho amplio',
        'Empeines firmemente apoyados en el suelo alargando las piernas'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'embarazo',
        riesgo: 'alto',
        explicacion_clinica: 'La posición boca abajo produce presión indeseable sobre el abdomen gestante.',
        modificaciones: ['Evitar la posición prono'],
        alternativa_segura: null
      },
      {
        condicion: 'hernias_discales',
        riesgo: 'bajo',
        explicacion_clinica: 'Suele ser terapéutica para hernias posteriores, pero contraindicada en espondilolistesis severa o inflamación aguda.',
        modificaciones: ['Caminar los codos más hacia adelante para reducir el ángulo de extensión', 'Realizar extensiones suaves sentado o Chakravakasana'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Decúbito prono neutro',
          instrucciones_transicion: ['Apoyar los codos bajo los hombros con los antebrazos paralelos al suelo', 'Inhalar empujando el suelo con los antebrazos para elevar el pecho'],
          consejos_seguridad: 'Evitar contraer excesivamente los glúteos si se siente presión en el sacro.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Balasana',
          instrucciones_transicion: ['Exhalar bajando el pecho al mat', 'Colocar las manos bajo los hombros y empujar hacia atrás para llevar caderas a talones'],
          consejos_seguridad: 'Moverse despacio para dar espacio y descanso a las vértebras lumbares.'
        }
      ]
    }
  },
  {
    id: 'asana_utkata_konasana',
    nombre_sanscrito: 'Utkata Konasana',
    nombre_espanol: 'Postura de la Diosa',
    nombre_ingles: 'Goddess Pose',
    familia_biomecanica: 'bipedestacion',
    nivel_dificultad: 'intermedio',
    descripcion: 'Postura de pie con piernas ampliamente separadas y rodillas flexionadas en rotación externa, que fortalece el tren inferior y abre caderas y pecho.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Cuádriceps femoral',
          musculo_id: 'cuadriceps_femoral',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene la flexión de las rodillas estabilizando la articulación femorotibial.'
        },
        {
          musculo: 'Glúteo mayor',
          musculo_id: 'gluteo_mayor',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantiene la extensión y estabilización de las caderas en la posición en cuclillas.'
        },
        {
          musculo: 'Glúteo medio',
          musculo_id: 'gluteo_medio',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene la abducción y rotación externa evitando el colapso medial de las rodillas.'
        },
        {
          musculo: 'Aductores de la cadera',
          musculo_id: 'aductores_cadera',
          tipo_contraccion: 'isometrica',
          explicacion: 'Coestabilizan la articulación de la cadera y la pelvis en la apertura amplia.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Core abdominal',
          musculo_id: 'core_abdominal',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza el tronco en posición vertical y neutraliza la inclinación pélvica excesiva.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Aductores del muslo porción distal',
          musculo_id: 'aductores_porcion_distal',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan de manera pasiva y controlada al abrir las caderas y flexionar rodillas.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Pies orientados hacia afuera en ángulo de 45 grados',
        'Rodillas alineadas verticalmente con los tobillos y orientadas hacia las puntas de los pies',
        'Torso erguido con columna neutra y pelvis en posición centrada',
        'Pelvis descendida manteniendo los muslos orientados hacia la horizontal'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'La flexión profunda combinada con carga axial puede exacerbar el dolor femororrotuliano o la inestabilidad ligamentosa y meniscal si las rodillas se desplazan hacia el interior.',
        modificaciones: ['Reducir la profundidad de la flexión de rodillas', 'Utilizar una silla bajo los isquiones como soporte'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Tadasana',
          instrucciones_transicion: [
            'Da un paso amplio lateral separando los pies aproximadamente a 1 metro',
            'Gira los talones hacia adentro y los dedos de los pies hacia afuera a 45 grados',
            'Inhala alargando la columna y exhala flexionando las rodillas profundamente'
          ],
          consejos_seguridad: 'Asegúrate de que las rodillas sigan la misma dirección de los dedos de los pies durante el descenso.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Prasarita Padottanasana',
          instrucciones_transicion: [
            'Inhala extendiendo las piernas de regreso a la posición de pie',
            'Gira los pies hacia el frente haciéndolos paralelos entre sí',
            'Exhala flexionando el torso hacia adelante desde las caderas'
          ],
          consejos_seguridad: 'Mantén una microflexión en las rodillas si experimentas tensión en los isquiotibiales.'
        }
      ]
    }
  },
  {
    id: 'asana_viparita_virabhadrasana',
    nombre_sanscrito: 'Viparita Virabhadrasana',
    nombre_espanol: 'Guerrero Invertido',
    nombre_ingles: 'Reverse Warrior',
    familia_biomecanica: 'bipedestacion',
    nivel_dificultad: 'intermedio',
    descripcion: 'Postura de pie en flexión lateral que combina la base firme y estable de Guerrero II con una apertura profunda del costado torácico.',
    duracion_sugerida_respiraciones: { principiante: 5, intermedio: 8, avanzado: 10 },
    imagenes_ilustrativas: { foto_principal: '', ilustracion_vectorial: '', overlay_alineacion: '', overlay_vectores_fuerza: '' },
    video_loop: {
      frontal: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      lateral: { url: '', duracion_segundos: 5, resolucion: '1080p' },
      rotacion_360: { url: '', duracion_segundos: 7, resolucion: '1080p' },
      errores_comunes: []
    },
    trabajo_muscular: {
      agonistas: [
        {
          musculo: 'Cuádriceps de la pierna anterior',
          musculo_id: 'cuadriceps_pierna_anterior',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostiene la flexión a 90 grados de la rodilla delantera contra la gravedad.'
        },
        {
          musculo: 'Glúteo mayor',
          musculo_id: 'gluteo_mayor',
          tipo_contraccion: 'isometrica',
          explicacion: 'Estabiliza la pelvis y extiende la cadera de la pierna posterior.'
        },
        {
          musculo: 'Oblicuos del abdomen',
          musculo_id: 'oblicuos_abdomen',
          tipo_contraccion: 'isometrica',
          explicacion: 'Controlan la flexión lateral de la columna vertebral sin colapsar las vértebras.'
        },
        {
          musculo: 'Intercostales del lado extendido',
          musculo_id: 'intercostales_lado_extendido',
          tipo_contraccion: 'isometrica',
          explicacion: 'Sostienen la apertura de la caja torácica facilitando la respiración profunda.'
        }
      ],
      sinergicos: [
        {
          musculo: 'Deltoides anterior y medio',
          musculo_id: 'deltoides_anterior_medio',
          tipo_contraccion: 'isometrica',
          explicacion: 'Mantienen el brazo anterior elevado en arco sobre la cabeza.'
        }
      ],
      antagonistas_elongados: [
        {
          musculo: 'Intercostales y oblicuos del costado posterior y superior',
          musculo_id: 'intercostales_oblicuos_costado_posterior',
          tipo_contraccion: 'excentrica',
          explicacion: 'Se elongan activamente permitiendo la flexión lateral y expansión torácica hacia atrás.'
        }
      ]
    },
    alineacion: {
      puntos_clave: [
        'Flexión de 90° en la rodilla anterior alineada directamente con el segundo dedo del pie',
        'Pierna posterior completamente extendida con el borde externo del pie firmemente enraizado',
        'Torso inclinado en flexión lateral hacia la pierna trasera manteniendo la pelvis estable',
        'Brazo anterior extendido sobre la cabeza alargando el costado lateral sin comprimir el cuello'
      ]
    },
    contraindicaciones: [
      {
        condicion: 'problemas_rodilla',
        riesgo: 'moderado',
        explicacion_clinica: 'La flexión sostenida de la rodilla anterior combinada con el cambio en la distribución del peso hacia atrás puede sobrecargar la rótula o la cápsula articular posterior.',
        modificaciones: ['Disminuir la flexión de la rodilla delantera a un ángulo menor de 90°', 'Dirigir la mirada hacia el pie posterior para mejorar la estabilidad'],
        alternativa_segura: null
      },
      {
        condicion: 'vertigo',
        riesgo: 'moderado',
        explicacion_clinica: 'La rotación y extensión cervical al mirar la mano superior pueden generar pérdida del equilibrio, mareo o compresión suboccipital.',
        modificaciones: ['Mantener la cabeza en posición neutra o dirigir la mirada hacia el suelo al pie trasero'],
        alternativa_segura: null
      }
    ],
    transiciones_sugeridas: {
      entrar_desde: [
        {
          nombre: 'Virabhadrasana II',
          instrucciones_transicion: [
            'Desde Guerrero II, mantén la flexión de 90 grados en la rodilla anterior',
            'Inhala descendiendo la mano trasera hacia el muslo o pantorrilla posterior',
            'Eleva el brazo delantero hacia el cielo e inclina el torso suavemente hacia atrás'
          ],
          consejos_seguridad: 'Evita ejercer presión o empujar con la mano sobre la articulación de la rodilla posterior.'
        }
      ],
      salir_hacia: [
        {
          nombre: 'Utthita Parsvakonasana',
          instrucciones_transicion: [
            'Exhala inclinando el tronco hacia adelante sobre la pierna flexionada',
            'Apoya el antebrazo anterior en el muslo o lleva la mano hacia un bloque o el suelo',
            'Extiende el brazo posterior en diagonal por encima de la oreja'
          ],
          consejos_seguridad: 'Mantén la rodilla delantera fija y alineada sobre el tobillo sin permitir que colapse hacia adentro.'
        }
      ]
    }
  }
];
