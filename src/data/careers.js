export const careersData = {
    "software-engineering": {
        id: "software-engineering",
        title: "Ingeniería de Software",
        description: "Diseña, desarrolla y mantiene sistemas de software complejos y eficientes. Lidera la transformación digital.",
        matchScore: "98%",
        salary: "S/ 4,500 - 8,000",
        demand: "Muy Alta (Top 3)",
        duration: "5 Años / 10 Ciclos",
        tags: ["Lógica", "Tecnología", "Innovación"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Introducción a la Programación", "Matemática Discreta", "Cálculo I", "Comunicación", "Ética"] },
            { ciclo: "Ciclo 3-4: Estructuras", courses: ["Algoritmos y Estructuras de Datos", "Base de Datos I", "Estadística", "Física"] },
            { ciclo: "Ciclo 5-6: Desarrollo", courses: ["Desarrollo Web", "Arquitectura de Software", "Sistemas Operativos", "Base de Datos II"] },
            { ciclo: "Ciclo 7-8: Especialización", courses: ["Cloud Computing", "Inteligencia Artificial", "Desarrollo Móvil", "Gestión de Proyectos"] },
            { ciclo: "Ciclo 9-10: Proyecto Final", courses: ["Tesis I", "Tesis II", "Prácticas Pre-profesionales", "Ética Profesional"] }
        ],
        universities: [
            { name: "UPC", type: "Privada", highlight: "Enfoque en innovación y convenios.", ranking: "Top 1 Innovación", location: "Lima" },
            { name: "UTEC", type: "Privada", highlight: "Ingeniería práctica desde el primer día.", ranking: "Top 2 Ingeniería", location: "Lima" },
            { name: "PUCP", type: "Privada", highlight: "Prestigio y formación integral.", ranking: "Top 1 General", location: "Lima" }
        ]
    },
    "data-science": {
        id: "data-science",
        title: "Ciencia de Datos",
        description: "Analiza grandes volúmenes de datos para descubrir patrones y tomar decisiones estratégicas.",
        matchScore: "95%",
        salary: "S/ 5,000 - 9,000",
        demand: "Alta (Emergente)",
        duration: "5 Años / 10 Ciclos",
        tags: ["Análisis", "Matemática", "Datos"],
        plan: [
            { ciclo: "Ciclo 1-2: Bases", courses: ["Cálculo", "Álgebra Lineal", "Programación Básica", "Estadística Descriptiva"] },
            { ciclo: "Ciclo 3-4: Modelado", courses: ["Probabilidad", "Base de Datos", "Machine Learning I", "Visualización de Datos"] },
            { ciclo: "Ciclo 5-6: Profundización", courses: ["Big Data", "Deep Learning", "Minería de Datos", "Ética de Datos"] },
            { ciclo: "Ciclo 7-8: Aplicación", courses: ["IA Generativa", "Procesamiento de Lenguaje Natural", "Business Intelligence"] },
            { ciclo: "Ciclo 9-10: Capstone", courses: ["Proyecto de Ciencia de Datos", "Tesis", "Prácticas"] }
        ],
        universities: [
            { name: "UTEC", type: "Privada", highlight: "Pioneros en la carrera en Perú.", ranking: "Top Tech", location: "Lima" },
            { name: "UPC", type: "Privada", highlight: "Convenios con empresas tech.", ranking: "Top Innovación", location: "Lima" }
        ]
    },
    "product-design": {
        id: "product-design",
        title: "Diseño de Producto Digital",
        description: "Crea experiencias digitales intuitivas y atractivas centradas en el usuario (UX/UI).",
        matchScore: "92%",
        salary: "S/ 3,500 - 6,000",
        demand: "Alta",
        duration: "4-5 Años",
        tags: ["Creatividad", "Empatía", "Diseño"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Fundamentos del Diseño", "Dibujo", "Psicología del Usuario", "Historia del Arte"] },
            { ciclo: "Ciclo 3-4: UX/UI", courses: ["Diseño de Interfaces", "Investigación de Usuarios", "Prototipado", "Herramientas Digitales"] },
            { ciclo: "Ciclo 5-6: Interacción", courses: ["Diseño de Interacción", "Accesibilidad", "Sistemas de Diseño", "Desarrollo Frontend Básico"] },
            { ciclo: "Ciclo 7-8: Estrategia", courses: ["Gestión de Producto", "Marketing Digital", "Portafolio", "Proyecto Final"] }
        ],
        universities: [
            { name: "UCAL", type: "Privada", highlight: "Especializada en creatividad.", ranking: "Top Creatividad", location: "Lima" },
            { name: "UPC", type: "Privada", highlight: "Enfoque en diseño digital.", ranking: "Top Diseño", location: "Lima" }
        ]
    },
    "marketing": {
        id: "marketing",
        title: "Marketing Digital",
        description: "Estrategias para conectar marcas con audiencias en el mundo digital.",
        matchScore: "88%",
        salary: "S/ 3,000 - 5,500",
        demand: "Muy Alta",
        duration: "5 Años",
        tags: ["Comunicación", "Estrategia", "Redes"],
        plan: [
            { ciclo: "Ciclo 1-2: Bases", courses: ["Fundamentos de Marketing", "Comportamiento del Consumidor", "Comunicación", "Economía"] },
            { ciclo: "Ciclo 3-4: Digital", courses: ["Marketing en Redes Sociales", "SEO/SEM", "Creación de Contenido", "Analítica Web"] },
            { ciclo: "Ciclo 5-6: Estrategia", courses: ["E-commerce", "Branding", "Investigación de Mercados", "Publicidad Digital"] },
            { ciclo: "Ciclo 7-8: Gestión", courses: ["Gerencia de Marketing", "Growth Hacking", "Proyecto Integrador"] }
        ],
        universities: [
            { name: "Universidad de Lima", type: "Privada", highlight: "Referente en negocios y marketing.", ranking: "Top Negocios", location: "Lima" },
            { name: "UPC", type: "Privada", highlight: "Enfoque práctico y digital.", ranking: "Top Marketing", location: "Lima" }
        ]
    },
    "business": {
        id: "business",
        title: "Administración de Empresas",
        description: "Lidera organizaciones, gestiona recursos y crea valor empresarial.",
        matchScore: "85%",
        salary: "S/ 3,500 - 7,000",
        demand: "Estable",
        duration: "5 Años",
        tags: ["Liderazgo", "Gestión", "Negocios"],
        plan: [
            { ciclo: "Ciclo 1-2: Entorno", courses: ["Administración General", "Contabilidad", "Matemática Financiera", "Economía"] },
            { ciclo: "Ciclo 3-4: Funciones", courses: ["Marketing", "Finanzas Corporativas", "Operaciones", "Recursos Humanos"] },
            { ciclo: "Ciclo 5-6: Estrategia", courses: ["Planeamiento Estratégico", "Derecho Empresarial", "Negocios Internacionales"] },
            { ciclo: "Ciclo 7-8: Dirección", courses: ["Gerencia General", "Innovación Empresarial", "Juego de Negocios"] }
        ],
        universities: [
            { name: "Universidad del Pacífico", type: "Privada", highlight: "Excelencia en economía y negocios.", ranking: "Top 1 Finanzas", location: "Lima" },
            { name: "Universidad de Lima", type: "Privada", highlight: "Prestigio corporativo.", ranking: "Top Gestión", location: "Lima" }
        ]
    },
    "medicine": {
        id: "medicine",
        title: "Medicina Humana",
        description: "Diagnostica, trata y previene enfermedades. Cuida la salud y salva vidas con conocimiento científico.",
        matchScore: "96%",
        salary: "S/ 4,000 - 12,000",
        demand: "Muy Alta",
        duration: "7 Años",
        tags: ["Ciencia", "Vocación", "Salud"],
        plan: [
            { ciclo: "Ciclo 1-2: Ciencias Básicas", courses: ["Anatomía", "Bioquímica", "Fisiología", "Histología", "Embriología"] },
            { ciclo: "Ciclo 3-4: Pre-clínico", courses: ["Farmacología", "Microbiología", "Patología", "Parasitología", "Inmunología"] },
            { ciclo: "Ciclo 5-6: Clínico Básico", courses: ["Medicina Interna I", "Cirugía I", "Pediatría I", "Ginecología", "Radiología"] },
            { ciclo: "Ciclo 7-10: Clínico Avanzado", courses: ["Medicina Interna II", "Cirugía II", "Pediatría II", "Emergencias"] },
            { ciclo: "Internado (Año 7)", courses: ["Rotaciones Hospitalarias", "Guardias", "Casos Clínicos", "Tesis"] }
        ],
        universities: [
            { name: "UPCH", type: "Privada", highlight: "Mejor facultad de medicina del Perú.", ranking: "Top 1 Medicina", location: "Lima" },
            { name: "UNMSM", type: "Pública", highlight: "Universidad decana de América.", ranking: "Top Pública", location: "Lima" },
            { name: "USMP", type: "Privada", highlight: "Amplia red de hospitales.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "law": {
        id: "law",
        title: "Derecho",
        description: "Defiende la justicia, asesora legalmente y representa a personas y organizaciones ante la ley.",
        matchScore: "89%",
        salary: "S/ 2,500 - 8,000",
        demand: "Alta",
        duration: "5 Años",
        tags: ["Argumentación", "Justicia", "Análisis"],
        plan: [
            { ciclo: "Ciclo 1-2: Introducción", courses: ["Introducción al Derecho", "Historia del Derecho", "Derecho Romano", "Filosofía del Derecho"] },
            { ciclo: "Ciclo 3-4: Derecho Civil", courses: ["Derecho Civil I-III", "Obligaciones", "Contratos", "Derecho de Familia"] },
            { ciclo: "Ciclo 5-6: Especialización", courses: ["Derecho Penal", "Derecho Laboral", "Derecho Tributario", "Derecho Constitucional"] },
            { ciclo: "Ciclo 7-8: Práctica", courses: ["Derecho Procesal", "Litigación Oral", "Consultorio Jurídico", "Tesis"] },
            { ciclo: "Ciclo 9-10: Profundización", courses: ["Arbitraje", "Derecho Internacional", "Práctica Profesional", "Ética"] }
        ],
        universities: [
            { name: "PUCP", type: "Privada", highlight: "Facultad de Derecho más prestigiosa.", ranking: "Top 1", location: "Lima" },
            { name: "Universidad de Lima", type: "Privada", highlight: "Enfoque corporativo y empresarial.", ranking: "Top 2", location: "Lima" },
            { name: "UNMSM", type: "Pública", highlight: "Tradición jurídica centenaria.", ranking: "Top Pública", location: "Lima" }
        ]
    },
    "civil-engineering": {
        id: "civil-engineering",
        title: "Ingeniería Civil",
        description: "Diseña, construye y supervisa infraestructuras como edificios, puentes, carreteras y sistemas de agua.",
        matchScore: "93%",
        salary: "S/ 3,500 - 7,500",
        demand: "Muy Alta",
        duration: "5 Años",
        tags: ["Construcción", "Infraestructura", "Matemática"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Cálculo I-II", "Física I-II", "Química", "Dibujo de Ingeniería", "Estática"] },
            { ciclo: "Ciclo 3-4: Materiales", courses: ["Resistencia de Materiales", "Mecánica de Fluidos", "Topografía", "Geología"] },
            { ciclo: "Ciclo 5-6: Estructuras", courses: ["Análisis Estructural", "Concreto Armado", "Diseño Estructural", "Mecánica de Suelos"] },
            { ciclo: "Ciclo 7-8: Especialización", courses: ["Carreteras", "Hidráulica", "Costos y Presupuestos", "Gestión de Proyectos"] },
            { ciclo: "Ciclo 9-10: Proyecto", courses: ["Diseño de Obras", "Impacto Ambiental", "Tesis", "Prácticas Profesionales"] }
        ],
        universities: [
            { name: "UNI", type: "Pública", highlight: "La mejor ingeniería del país.", ranking: "Top 1 Ingeniería", location: "Lima" },
            { name: "PUCP", type: "Privada", highlight: "Excelencia académica integral.", ranking: "Top 2", location: "Lima" },
            { name: "UTEC", type: "Privada", highlight: "Innovación y tecnología.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "architecture": {
        id: "architecture",
        title: "Arquitectura",
        description: "Diseña espacios funcionales y estéticos que mejoran la vida de las personas y el entorno urbano.",
        matchScore: "91%",
        salary: "S/ 3,000 - 6,500",
        demand: "Media-Alta",
        duration: "5 Años",
        tags: ["Diseño", "Creatividad", "Espacios"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Diseño Arquitectónico I-II", "Dibujo Técnico", "Geometría", "Historia de la Arquitectura"] },
            { ciclo: "Ciclo 3-4: Diseño", courses: ["Diseño Arquitectónico III-IV", "Estructuras", "Matemática Aplicada", "Teoría"] },
            { ciclo: "Ciclo 5-6: Tecnología", courses: ["Instalaciones", "Construcción", "Acondicionamiento Ambiental", "Urbanismo"] },
            { ciclo: "Ciclo 7-8: Proyecto", courses: ["Proyecto Arquitectónico", "Gestión", "Restauración", "Sostenibilidad"] },
            { ciclo: "Ciclo 9-10: Tesis", courses: ["Taller de Tesis", "Práctica Profesional", "Portafolio", "Patrimonio"] }
        ],
        universities: [
            { name: "UNI", type: "Pública", highlight: "Tradición y excelencia técnica.", ranking: "Top 1", location: "Lima" },
            { name: "PUCP", type: "Privada", highlight: "Enfoque humanista y sostenible.", ranking: "Top 2", location: "Lima" },
            { name: "UPC", type: "Privada", highlight: "Diseño contemporáneo.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "psychology": {
        id: "psychology",
        title: "Psicología",
        description: "Estudia el comportamiento humano y ayuda a mejorar la salud mental y el bienestar de las personas.",
        matchScore: "87%",
        salary: "S/ 2,500 - 5,500",
        demand: "Alta",
        duration: "5 Años",
        tags: ["Empatía", "Salud Mental", "Personas"],
        plan: [
            { ciclo: "Ciclo 1-2: Bases", courses: ["Psicología General", "Biología", "Neurociencia", "Estadística", "Metodología"] },
            { ciclo: "Ciclo 3-4: Procesos", courses: ["Psicología del Desarrollo", "Psicología Social", "Personalidad", "Psicopatología"] },
            { ciclo: "Ciclo 5-6: Evaluación", courses: ["Psicodiagnóstico", "Tests Psicológicos", "Psicología Clínica", "Psicoterapia"] },
            { ciclo: "Ciclo 7-8: Especialización", courses: ["Psicología Organizacional", "Educativa", "Comunitaria", "Práctica I-II"] },
            { ciclo: "Ciclo 9-10: Internado", courses: ["Internado Clínico", "Internado Organizacional", "Tesis", "Ética"] }
        ],
        universities: [
            { name: "PUCP", type: "Privada", highlight: "Mejor formación en psicología.", ranking: "Top 1", location: "Lima" },
            { name: "UNMSM", type: "Pública", highlight: "Primera facultad del Perú.", ranking: "Top Pública", location: "Lima" },
            { name: "Universidad de Lima", type: "Privada", highlight: "Enfoque integral y práctico.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "accounting": {
        id: "accounting",
        title: "Contabilidad",
        description: "Registra, analiza y controla las operaciones financieras de empresas y organizaciones.",
        matchScore: "84%",
        salary: "S/ 2,800 - 6,000",
        demand: "Muy Alta",
        duration: "5 Años",
        tags: ["Números", "Finanzas", "Análisis"],
        plan: [
            { ciclo: "Ciclo 1-2: Introducción", courses: ["Contabilidad Básica", "Matemática Financiera", "Economía", "Administración"] },
            { ciclo: "Ciclo 3-4: Intermedio", courses: ["Contabilidad Intermedia", "Costos", "Finanzas Corporativas", "Tributación"] },
            { ciclo: "Ciclo 5-6: Avanzado", courses: ["Contabilidad Superior", "Auditoría I-II", "Tributación Avanzada", "NIIF"] },
            { ciclo: "Ciclo 7-8: Especialización", courses: ["Auditoría Tributaria", "Contabilidad Gubernamental", "Finanzas", "Peritaje"] },
            { ciclo: "Ciclo 9-10: Prácticas", courses: ["Plan de Negocios", "Gestión Financiera", "Tesis", "Prácticas"] }
        ],
        universities: [
            { name: "PUCP", type: "Privada", highlight: "Excelencia en ciencias contables.", ranking: "Top 1", location: "Lima" },
            { name: "Universidad del Pacífico", type: "Privada", highlight: "Enfoque financiero y empresarial.", ranking: "Top 2", location: "Lima" },
            { name: "UNMSM", type: "Pública", highlight: "Tradición contable.", ranking: "Top Pública", location: "Lima" }
        ]
    },
    "industrial-engineering": {
        id: "industrial-engineering",
        title: "Ingeniería Industrial",
        description: "Optimiza procesos, mejora la productividad y gestiona eficientemente los recursos en organizaciones.",
        matchScore: "90%",
        salary: "S/ 3,500 - 7,000",
        demand: "Muy Alta",
        duration: "5 Años",
        tags: ["Optimización", "Gestión", "Procesos"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Cálculo", "Física", "Química", "Dibujo", "Programación"] },
            { ciclo: "Ciclo 3-4: Métodos", courses: ["Estadística", "Investigación de Operaciones", "Procesos Industriales", "Costos"] },
            { ciclo: "Ciclo 5-6: Sistemas", courses: ["Gestión de Operaciones", "Logística", "Calidad", "Simulación"] },
            { ciclo: "Ciclo 7-8: Gestión", courses: ["Gestión de Proyectos", "Finanzas", "Planeamiento Estratégico", "Lean Manufacturing"] },
            { ciclo: "Ciclo 9-10: Integración", courses: ["Formulación de Proyectos", "Tesis", "Prácticas", "Seguridad Industrial"] }
        ],
        universities: [
            { name: "UNI", type: "Pública", highlight: "Excelencia técnica reconocida.", ranking: "Top 1", location: "Lima" },
            { name: "PUCP", type: "Privada", highlight: "Formación integral y práctica.", ranking: "Top 2", location: "Lima" },
            { name: "Universidad de Lima", type: "Privada", highlight: "Enfoque empresarial.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "nursing": {
        id: "nursing",
        title: "Enfermería",
        description: "Brinda cuidados integrales de salud, apoya en tratamientos y educa sobre prevención de enfermedades.",
        matchScore: "86%",
        salary: "S/ 2,200 - 4,500",
        demand: "Muy Alta",
        duration: "5 Años",
        tags: ["Cuidado", "Vocación", "Salud"],
        plan: [
            { ciclo: "Ciclo 1-2: Ciencias Básicas", courses: ["Anatomía", "Fisiología", "Bioquímica", "Microbiología", "Farmacología"] },
            { ciclo: "Ciclo 3-4: Fundamentos", courses: ["Enfermería Básica", "Salud Pública", "Nutrición", "Enfermería Comunitaria"] },
            { ciclo: "Ciclo 5-6: Clínica", courses: ["Enfermería Médico-Quirúrgica", "Pediatría", "Materno", "Salud Mental"] },
            { ciclo: "Ciclo 7-8: Especialización", courses: ["Cuidados Críticos", "Emergencias", "Geriatría", "Oncología"] },
            { ciclo: "Ciclo 9-10: Internado", courses: ["Prácticas Hospitalarias", "Gestión en Salud", "Investigación", "Tesis"] }
        ],
        universities: [
            { name: "UPCH", type: "Privada", highlight: "Mejor escuela de enfermería.", ranking: "Top 1", location: "Lima" },
            { name: "UNMSM", type: "Pública", highlight: "Tradición en ciencias de salud.", ranking: "Top Pública", location: "Lima" },
            { name: "UCSM", type: "Privada", highlight: "Calidad educativa en Arequipa.", ranking: "Top Sur", location: "Arequipa" }
        ]
    },
    "education": {
        id: "education",
        title: "Educación / Pedagogía",
        description: "Forma a las nuevas generaciones, diseña estrategias de enseñanza y promueve el desarrollo del aprendizaje.",
        matchScore: "83%",
        salary: "S/ 2,000 - 4,500",
        demand: "Alta",
        duration: "5 Años",
        tags: ["Vocación", "Enseñanza", "Formación"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Psicología Educativa", "Pedagogía General", "Filosofía", "Currículo"] },
            { ciclo: "Ciclo 3-4: Didáctica", courses: ["Didáctica General", "Evaluación", "Recursos Didácticos", "TIC en Educación"] },
            { ciclo: "Ciclo 5-6: Especialización", courses: ["Didáctica Específica", "Práctica I-II", "Necesidades Educativas", "Tutoría"] },
            { ciclo: "Ciclo 7-8: Práctica", courses: ["Práctica Pre-profesional", "Investigación Educativa", "Gestión Escolar"] },
            { ciclo: "Ciclo 9-10: Internado", courses: ["Práctica Intensiva", "Tesis", "Innovación Pedagógica", "Ética"] }
        ],
        universities: [
            { name: "PUCP", type: "Privada", highlight: "Excelencia en formación docente.", ranking: "Top 1", location: "Lima" },
            { name: "Universidad Antonio Ruiz de Montoya", type: "Privada", highlight: "Vocación educativa jesuita.", ranking: "Top 2", location: "Lima" },
            { name: "UNMSM", type: "Pública", highlight: "Primera facultad de educación.", ranking: "Top Pública", location: "Lima" }
        ]
    },
    "economics": {
        id: "economics",
        title: "Economía",
        description: "Analiza cómo las sociedades gestionan recursos, estudia mercados y diseña políticas económicas.",
        matchScore: "88%",
        salary: "S/ 3,500 - 8,000",
        demand: "Alta",
        duration: "5 Años",
        tags: ["Análisis", "Finanzas", "Política"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Microeconomía I-II", "Macroeconomía I-II", "Matemática I-II", "Estadística"] },
            { ciclo: "Ciclo 3-4: Intermedio", courses: ["Econometría I-II", "Finanzas", "Economía Pública", "Historia Económica"] },
            { ciclo: "Ciclo 5-6: Avanzado", courses: ["Economía Internacional", "Desarrollo Económico", "Política Monetaria", "Teoría"] },
            { ciclo: "Ciclo 7-8: Especialización", courses: ["Economía Aplicada", "Evaluación de Proyectos", "Seminarios", "Electivos"] },
            { ciclo: "Ciclo 9-10: Tesis", courses: ["Taller de Investigación", "Tesis", "Práctica Profesional", "Ética"] }
        ],
        universities: [
            { name: "Universidad del Pacífico", type: "Privada", highlight: "La mejor facultad de economía.", ranking: "Top 1", location: "Lima" },
            { name: "PUCP", type: "Privada", highlight: "Prestigio académico e investigación.", ranking: "Top 2", location: "Lima" },
            { name: "Universidad de Lima", type: "Privada", highlight: "Enfoque empresarial.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "environmental-engineering": {
        id: "environmental-engineering",
        title: "Ingeniería Ambiental",
        description: "Protege el medio ambiente, gestiona recursos naturales y desarrolla soluciones sostenibles.",
        matchScore: "89%",
        salary: "S/ 3,000 - 6,500",
        demand: "Alta (Creciente)",
        duration: "5 Años",
        tags: ["Sostenibilidad", "Naturaleza", "Innovación"],
        plan: [
            { ciclo: "Ciclo 1-2: Bases", courses: ["Cálculo", "Física", "Química", "Biología", "Ecología"] },
            { ciclo: "Ciclo 3-4: Procesos", courses: ["Química Ambiental", "Microbiología", "Hidrología", "Meteorología"] },
            { ciclo: "Ciclo 5-6: Sistemas", courses: ["Tratamiento de Aguas", "Gestión de Residuos", "Calidad del Aire", "Evaluación Ambiental"] },
            { ciclo: "Ciclo 7-8: Gestión", courses: ["Gestión Ambiental", "Energías Renovables", "Legislación", "Proyectos"] },
            { ciclo: "Ciclo 9-10: Aplicación", courses: ["Remediación Ambiental", "Tesis", "Prácticas", "Desarrollo Sostenible"] }
        ],
        universities: [
            { name: "UNALM", type: "Pública", highlight: "Especializada en ambiente y agronomía.", ranking: "Top Ambiental", location: "Lima" },
            { name: "UNI", type: "Pública", highlight: "Excelencia en ingeniería.", ranking: "Top 2", location: "Lima" },
            { name: "UTEC", type: "Privada", highlight: "Enfoque en innovación verde.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "nutrition": {
        id: "nutrition",
        title: "Nutrición y Dietética",
        description: "Promueve la salud mediante una alimentación adecuada y diseña planes nutricionales personalizados.",
        matchScore: "85%",
        salary: "S/ 2,500 - 5,000",
        demand: "Media-Alta",
        duration: "5 Años",
        tags: ["Salud", "Alimentación", "Bienestar"],
        plan: [
            { ciclo: "Ciclo 1-2: Ciencias", courses: ["Bioquímica", "Anatomía", "Fisiología", "Bromatología", "Química"] },
            { ciclo: "Ciclo 3-4: Nutrición", courses: ["Nutrición Normal", "Dietoterapia I-II", "Metabolismo", "Evaluación Nutricional"] },
            { ciclo: "Ciclo 5-6: Clínica", courses: ["Nutrición Clínica", "Pediátrica", "Deportiva", "Gestante", "Adulto Mayor"] },
            { ciclo: "Ciclo 7-8: Comunitaria", courses: ["Nutrición Pública", "Seguridad Alimentaria", "Educación Nutricional", "Gestión"] },
            { ciclo: "Ciclo 9-10: Práctica", courses: ["Internado Clínico", "Internado Comunitario", "Investigación", "Tesis"] }
        ],
        universities: [
            { name: "UNMSM", type: "Pública", highlight: "Primera escuela de nutrición.", ranking: "Top Pública", location: "Lima" },
            { name: "UPCH", type: "Privada", highlight: "Investigación en salud pública.", ranking: "Top 1", location: "Lima" },
            { name: "Universidad Científica del Sur", type: "Privada", highlight: "Enfoque moderno en nutrición.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "communications": {
        id: "communications",
        title: "Comunicación y Periodismo",
        description: "Informa, comunica y produce contenido para medios tradicionales y digitales, redes sociales y marketing.",
        matchScore: "86%",
        salary: "S/ 2,500 - 5,500",
        demand: "Alta",
        duration: "5 Años",
        tags: ["Comunicación", "Creatividad", "Medios"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Introducción a la Comunicación", "Redacción", "Teoría de la Comunicación", "Fotografía"] },
            { ciclo: "Ciclo 3-4: Medios", courses: ["Periodismo Digital", "Radio y TV", "Producción Audiovisual", "Comunicación Corporativa"] },
            { ciclo: "Ciclo 5-6: Especialización", courses: ["Marketing Digital", "Redes Sociales", "Comunicación Política", "Periodismo de Investigación"] },
            { ciclo: "Ciclo 7-8: Producción", courses: ["Gestión de Medios", "Publicidad", "Branding", "Proyecto Final"] },
            { ciclo: "Ciclo 9-10: Práctica", courses: ["Prácticas Profesionales", "Portafolio", "Tesis", "Ética"] }
        ],
        universities: [
            { name: "Universidad de Lima", type: "Privada", highlight: "Mejor facultad de comunicación.", ranking: "Top 1", location: "Lima" },
            { name: "PUCP", type: "Privada", highlight: "Tradición en periodismo.", ranking: "Top 2", location: "Lima" },
            { name: "UPC", type: "Privada", highlight: "Enfoque digital y creativo.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "gastronomy": {
        id: "gastronomy",
        title: "Gastronomía y Arte Culinario",
        description: "Crea experiencias culinarias únicas, gestiona restaurantes y promueve la gastronomía peruana en el mundo.",
        matchScore: "87%",
        salary: "S/ 2,500 - 8,000",
        demand: "Muy Alta",
        duration: "3-4 Años",
        tags: ["Cocina", "Creatividad", "Cultura"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Técnicas Culinarias Básicas", "Pastelería", "Cocina Peruana", "Seguridad Alimentaria"] },
            { ciclo: "Ciclo 3-4: Especialización", courses: ["Alta Cocina", "Cocina Internacional", "Enología", "Gestión de Restaurantes"] },
            { ciclo: "Ciclo 5-6: Gestión", courses: ["Costos Gastronómicos", "Marketing Gastronómico", "Innovación Culinaria", "Práctica"] },
            { ciclo: "Ciclo 7-8: Proyecto", courses: ["Proyecto Final", "Tesis", "Prácticas en Restaurantes", "Emprendimiento"] }
        ],
        universities: [
            { name: "Le Cordon Bleu", type: "Privada", highlight: "Prestigio internacional en gastronomía.", ranking: "Top 1 Mundial", location: "Lima" },
            { name: "D'Gallia", type: "Privada", highlight: "Especializada en alta cocina.", ranking: "Top 2", location: "Lima" },
            { name: "Cenfotur", type: "Pública", highlight: "Turismo y gastronomía.", ranking: "Top Público", location: "Lima" }
        ]
    },
    "tourism": {
        id: "tourism",
        title: "Turismo y Hotelería",
        description: "Gestiona servicios turísticos y hoteleros, promueve destinos y crea experiencias memorables para viajeros.",
        matchScore: "84%",
        salary: "S/ 2,200 - 5,500",
        demand: "Alta",
        duration: "4-5 Años",
        tags: ["Servicio", "Viajes", "Gestión"],
        plan: [
            { ciclo: "Ciclo 1-2: Introducción", courses: ["Fundamentos del Turismo", "Hotelería", "Geografía Turística", "Inglés I-II"] },
            { ciclo: "Ciclo 3-4: Operaciones", courses: ["Operación Turística", "Gestión Hotelera", "Marketing Turístico", "Eventos"] },
            { ciclo: "Ciclo 5-6: Gestión", courses: ["Gestión de Destinos", "Sostenibilidad", "Revenue Management", "Patrimonio"] },
            { ciclo: "Ciclo 7-8: Especialización", courses: ["Turismo de Aventura", "Ecoturismo", "Proyecto", "Prácticas"] }
        ],
        universities: [
            { name: "Universidad San Ignacio de Loyola", type: "Privada", highlight: "Líder en turismo y hotelería.", ranking: "Top 1", location: "Lima" },
            { name: "UPC", type: "Privada", highlight: "Enfoque empresarial.", ranking: "Top 2", location: "Lima" },
            { name: "Cenfotur", type: "Pública", highlight: "Especialización técnica.", ranking: "Top Público", location: "Lima" }
        ]
    },
    "graphic-design": {
        id: "graphic-design",
        title: "Diseño Gráfico",
        description: "Crea identidades visuales, diseña piezas publicitarias y comunica mensajes a través del diseño.",
        matchScore: "88%",
        salary: "S/ 2,500 - 6,000",
        demand: "Alta",
        duration: "4-5 Años",
        tags: ["Diseño", "Creatividad", "Visual"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Fundamentos del Diseño", "Dibujo", "Tipografía", "Teoría del Color", "Historia del Arte"] },
            { ciclo: "Ciclo 3-4: Digital", courses: ["Adobe Suite", "Diseño Editorial", "Ilustración Digital", "Fotografía"] },
            { ciclo: "Ciclo 5-6: Branding", courses: ["Identidad Corporativa", "Packaging", "Diseño Web", "Motion Graphics"] },
            { ciclo: "Ciclo 7-8: Proyecto", courses: ["Dirección de Arte", "Publicidad", "Portafolio", "Proyecto Final"] }
        ],
        universities: [
            { name: "Toulouse Lautrec", type: "Privada", highlight: "Especializada en diseño.", ranking: "Top 1", location: "Lima" },
            { name: "UCAL", type: "Privada", highlight: "Enfoque creativo.", ranking: "Top 2", location: "Lima" },
            { name: "UPC", type: "Privada", highlight: "Diseño contemporáneo.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "systems-engineering": {
        id: "systems-engineering",
        title: "Ingeniería de Sistemas / Computación",
        description: "Desarrolla sistemas de información, gestiona infraestructura tecnológica y administra bases de datos.",
        matchScore: "94%",
        salary: "S/ 3,500 - 7,500",
        demand: "Muy Alta",
        duration: "5 Años",
        tags: ["Tecnología", "Sistemas", "Software"],
        plan: [
            { ciclo: "Ciclo 1-2: Bases", courses: ["Programación I-II", "Matemática Discreta", "Algoritmos", "Arquitectura de Computadoras"] },
            { ciclo: "Ciclo 3-4: Desarrollo", courses: ["Base de Datos", "Estructuras de Datos", "Redes", "Sistemas Operativos"] },
            { ciclo: "Ciclo 5-6: Sistemas", courses: ["Ingeniería de Software", "Análisis de Sistemas", "Seguridad Informática", "Web"] },
            { ciclo: "Ciclo 7-8: Gestión", courses: ["Gestión de TI", "Proyectos de Software", "Cloud", "Inteligencia de Negocios"] },
            { ciclo: "Ciclo 9-10: Proyecto", courses: ["Auditoría de Sistemas", "Tesis", "Prácticas", "Gestión Estratégica TI"] }
        ],
        universities: [
            { name: "UNI", type: "Pública", highlight: "Excelencia en ingeniería.", ranking: "Top 1", location: "Lima" },
            { name: "PUCP", type: "Privada", highlight: "Formación integral.", ranking: "Top 2", location: "Lima" },
            { name: "UPC", type: "Privada", highlight: "Innovación tecnológica.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "electronic-engineering": {
        id: "electronic-engineering",
        title: "Ingeniería Electrónica",
        description: "Diseña y desarrolla sistemas electrónicos, circuitos y dispositivos para telecomunicaciones y automatización.",
        matchScore: "91%",
        salary: "S/ 3,500 - 7,000",
        demand: "Alta",
        duration: "5 Años",
        tags: ["Electrónica", "Tecnología", "Innovación"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Cálculo", "Física", "Circuitos Eléctricos", "Programación", "Química"] },
            { ciclo: "Ciclo 3-4: Circuitos", courses: ["Electrónica Analógica", "Electrónica Digital", "Señales y Sistemas", "Electromagnetismo"] },
            { ciclo: "Ciclo 5-6: Sistemas", courses: ["Microprocesadores", "Telecomunicaciones", "Control Automático", "Instrumentación"] },
            { ciclo: "Ciclo 7-8: Especialización", courses: ["Sistemas Embebidos", "Robótica", "Comunicaciones Digitales", "Procesamiento de Señales"] },
            { ciclo: "Ciclo 9-10: Proyecto", courses: ["Diseño Electrónico", "Tesis", "Prácticas", "Gestión de Proyectos"] }
        ],
        universities: [
            { name: "UNI", type: "Pública", highlight: "Mejor ingeniería del país.", ranking: "Top 1", location: "Lima" },
            { name: "PUCP", type: "Privada", highlight: "Investigación y desarrollo.", ranking: "Top 2", location: "Lima" },
            { name: "UTEC", type: "Privada", highlight: "Tecnología de punta.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "mechatronics": {
        id: "mechatronics",
        title: "Ingeniería Mecatrónica",
        description: "Integra mecánica, electrónica y computación para crear sistemas automatizados y robots inteligentes.",
        matchScore: "92%",
        salary: "S/ 3,500 - 7,500",
        demand: "Alta (Emergente)",
        duration: "5 Años",
        tags: ["Robótica", "Automatización", "Innovación"],
        plan: [
            { ciclo: "Ciclo 1-2: Bases", courses: ["Cálculo", "Física", "Mecánica", "Programación", "Dibujo"] },
            { ciclo: "Ciclo 3-4: Sistemas", courses: ["Electrónica", "Materiales", "Dinámica", "Circuitos", "Control"] },
            { ciclo: "Ciclo 5-6: Mecatrónica", courses: ["Robótica", "Automatización", "Microprocesadores", "Sistemas de Control", "Neumática"] },
            { ciclo: "Ciclo 7-8: Avanzado", courses: ["Inteligencia Artificial", "Visión Artificial", "Manufactura", "Mecatrónica Avanzada"] },
            { ciclo: "Ciclo 9-10: Proyecto", courses: ["Proyecto Integrador", "Tesis", "Prácticas", "Industria 4.0"] }
        ],
        universities: [
            { name: "UTEC", type: "Privada", highlight: "Innovación tecnológica.", ranking: "Top 1", location: "Lima" },
            { name: "UNI", type: "Pública", highlight: "Excelencia técnica.", ranking: "Top 2", location: "Lima" },
            { name: "PUCP", type: "Privada", highlight: "Investigación aplicada.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "human-resources": {
        id: "human-resources",
        title: "Gestión de Recursos Humanos",
        description: "Gestiona el talento humano, desarrolla estrategias de reclutamiento y promueve el bienestar organizacional.",
        matchScore: "85%",
        salary: "S/ 2,800 - 6,000",
        demand: "Alta",
        duration: "5 Años",
        tags: ["Personas", "Gestión", "Liderazgo"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Administración", "Psicología Organizacional", "Economía", "Comunicación"] },
            { ciclo: "Ciclo 3-4: RRHH", courses: ["Gestión del Talento", "Reclutamiento", "Capacitación", "Derecho Laboral"] },
            { ciclo: "Ciclo 5-6: Desarrollo", courses: ["Compensaciones", "Clima Laboral", "Evaluación de Desempeño", "Coaching"] },
            { ciclo: "Ciclo 7-8: Estrategia", courses: ["RRHH Estratégico", "Change Management", "Cultura Organizacional", "Proyecto"] },
            { ciclo: "Ciclo 9-10: Práctica", courses: ["Consultoría RRHH", "Tesis", "Prácticas", "Liderazgo"] }
        ],
        universities: [
            { name: "Universidad del Pacífico", type: "Privada", highlight: "Excelencia en gestión.", ranking: "Top 1", location: "Lima" },
            { name: "ESAN", type: "Privada", highlight: "Especialización en negocios.", ranking: "Top 2", location: "Lima" },
            { name: "PUCP", type: "Privada", highlight: "Formación integral.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "international-business": {
        id: "international-business",
        title: "Negocios Internacionales",
        description: "Gestiona operaciones de comercio exterior, importaciones, exportaciones y expansión global de empresas.",
        matchScore: "87%",
        salary: "S/ 3,000 - 7,000",
        demand: "Alta",
        duration: "5 Años",
        tags: ["Comercio", "Global", "Negocios"],
        plan: [
            { ciclo: "Ciclo 1-2: Fundamentos", courses: ["Administración", "Economía", "Contabilidad", "Inglés de Negocios"] },
            { ciclo: "Ciclo 3-4: Comercio", courses: ["Comercio Internacional", "Marketing Internacional", "Finanzas", "Logística"] },
            { ciclo: "Ciclo 5-6: Operaciones", courses: ["Aduanas", "Incoterms", "Negociación Internacional", "Derecho Internacional"] },
            { ciclo: "Ciclo 7-8: Estrategia", courses: ["Estrategia Global", "E-commerce", "Gestión Intercultural", "Proyecto"] },
            { ciclo: "Ciclo 9-10: Práctica", courses: ["Consultoría", "Tesis", "Prácticas Internacionales", "Emprendimiento Global"] }
        ],
        universities: [
            { name: "Universidad del Pacífico", type: "Privada", highlight: "Mejor en negocios.", ranking: "Top 1", location: "Lima" },
            { name: "ESAN", type: "Privada", highlight: "Enfoque internacional.", ranking: "Top 2", location: "Lima" },
            { name: "UPC", type: "Privada", highlight: "Convenios globales.", ranking: "Top 3", location: "Lima" }
        ]
    },
    "veterinary": {
        id: "veterinary",
        title: "Medicina Veterinaria",
        description: "Cuida la salud animal, previene enfermedades zoonóticas y promueve el bienestar de mascotas y ganado.",
        matchScore: "89%",
        salary: "S/ 2,500 - 6,500",
        demand: "Media-Alta",
        duration: "5-6 Años",
        tags: ["Animales", "Salud", "Vocación"],
        plan: [
            { ciclo: "Ciclo 1-2: Ciencias Básicas", courses: ["Anatomía Veterinaria", "Fisiología", "Bioquímica", "Biología", "Histología"] },
            { ciclo: "Ciclo 3-4: Básico Clínico", courses: ["Microbiología", "Parasitología", "Farmacología", "Patología", "Genética"] },
            { ciclo: "Ciclo 5-6: Clínico", courses: ["Clínica de Pequeños Animales", "Clínica de Grandes Animales", "Cirugía", "Diagnóstico por Imágenes"] },
            { ciclo: "Ciclo 7-8: Especialización", courses: ["Zootecnia", "Salud Pública", "Reproducción Animal", "Nutrición Animal"] },
            { ciclo: "Ciclo 9-10: Práctica", courses: ["Prácticas Clínicas", "Internado", "Tesis", "Gestión Veterinaria"] }
        ],
        universities: [
            { name: "UNMSM", type: "Pública", highlight: "Primera facultad de veterinaria.", ranking: "Top Pública", location: "Lima" },
            { name: "Universidad Científica del Sur", type: "Privada", highlight: "Clínica moderna y equipamiento.", ranking: "Top 1", location: "Lima" },
            { name: "UNALM", type: "Pública", highlight: "Especialización en producción.", ranking: "Top 2", location: "Lima" }
        ]
    }
};
