<!-- line-width: 1000 -->
<!-- format:off -->

### 3.1 Ingeniería de Software

**Área:** Desarrollo de Software de Aplicación
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

La Ingeniería de Software es una disciplina de la ingeniería cuya meta es el desarrollo costeable de sistemas de software confiables y que funcionen de modo eficiente. A diferencia de la programación individual, se enfoca en sistemas complejos desarrollados por equipos, abarcando desde la especificación de requerimientos hasta el mantenimiento y evolución del sistema. Su importancia radica en que las economías y la infraestructura moderna dependen de software robusto; los enfoques informales no escalan bien para sistemas grandes, resultando en productos costosos y con retrasos.

Este subtema integra la gestión de procesos de desarrollo (modelos de ciclo de vida), la ingeniería de requerimientos y la gestión de datos (bases de datos centralizadas, distribuidas y almacenes de datos). El dominio de estos conceptos permite al ingeniero seleccionar la arquitectura y metodología adecuada para mitigar riesgos, asegurar la calidad y cumplir con las necesidades del cliente en entornos cambiantes.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [ ] Distinguir las fases del ciclo de vida del software (análisis, diseño, implementación, pruebas) y los modelos de proceso genéricos (cascada, evolutivo, componentes).
- [ ] Diferenciar entre requerimientos funcionales y no funcionales.
- [ ] Identificar las características básicas de las bases de datos centralizadas y los conceptos fundamentales de las distribuidas.

##### Nivel Sobresaliente

- [ ] Evaluar y seleccionar el modelo de desarrollo más adecuado (incluyendo RUP y ágiles) basándose en la incertidumbre de los requerimientos y riesgos del proyecto,.
- [ ] Analizar estrategias de gestión de riesgos (evitación, detección, tolerancia) en sistemas críticos.
- [ ] Contrastar tecnologías de bases de datos transaccionales vs. Data Warehouse y diseñar esquemas de fragmentación en bases de datos distribuidas,.

---

#### 📚 Contenido Teórico

##### 1. Modelos del Proceso de Software

**Definición:** Un modelo de proceso es una representación simplificada de un proceso de software, presentada desde una perspectiva específica.
**Explicación:** No existe un proceso "ideal". Los modelos genéricos proporcionan marcos de trabajo. El **modelo en cascada** separa las fases de especificación y desarrollo; es útil cuando los requerimientos se comprenden bien. El **desarrollo evolutivo** entrelaza la especificación y el desarrollo, ideal para sistemas donde los requerimientos son vagos. La **Ingeniería de Software Basada en Componentes (CBSE)** se enfoca en la reutilización de piezas existentes.
**Aspectos clave:**

- **Cascada:** Documentación pesada, difícil acomodar cambios, fases secuenciales.
- **Evolutivo:** Rápida entrega, código a menudo mal estructurado, visibilidad del proceso reducida.
- **RUP (Rational Unified Process):** Modelo híbrido, iterativo e incremental, centrado en la arquitectura y dirigido por casos de uso. Tiene fases: Inicio, Elaboración, Construcción, Transición.

##### 2. Ingeniería de Requerimientos

**Definición:** Proceso de comprender y definir qué servicios se requieren del sistema y sus restricciones operativas.
**Explicación:** Es crítica porque los errores aquí son costosos de corregir. Se divide en requerimientos **funcionales** (qué hace el sistema) y **no funcionales** (restricciones como rendimiento, seguridad, fiabilidad). El proceso incluye: estudio de viabilidad, obtención y análisis, especificación y validación.
**Aspectos clave:**

- **Funcionales:** Describen servicios o comportamientos específicos (ej. "El sistema debe calcular impuestos").
- **No Funcionales:** Propiedades emergentes del sistema (ej. "El tiempo de respuesta debe ser < 1s"). Su incumplimiento puede inutilizar el sistema entero.
- **Documento SRS:** Declaración oficial de lo que deben implementar los desarrolladores, debe ser preciso y completo.

##### 3. Bases de Datos Distribuidas y Data Warehouse

**Definición:** Una BD distribuida es una colección de múltiples bases de datos interrelacionadas lógicamente pero distribuidas en una red. Un Data Warehouse es una base de datos orientada a temas, integrada y no volátil para soporte de decisiones.
**Explicación:** Los sistemas distribuidos buscan transparencia (que el usuario no perciba la distribución) y autonomía local. Utilizan técnicas como fragmentación (dividir tablas) y replicación (copias de datos) para mejorar disponibilidad y rendimiento. Los Data Warehouses utilizan esquemas dimensionales (estrella) y procesos ETL (Extracción, Transformación y Carga) para análisis histórico.
**Aspectos clave:**

- **Fragmentación:** Horizontal (selección de tuplas) o Vertical (proyección de atributos).
- **Transparencia:** De localización, de fragmentación y de replicación.
- **OLAP vs OLTP:** OLTP para transacciones diarias (operacional); OLAP para análisis multidimensional en Data Warehouses.

---

#### 📖 Glosario de Términos

<!-- markdownlint-disable MD013 -->

| Término                   | Definición                                                                                                                                   | Contexto de uso                                         |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------ |
| **Stakeholder**           | Cualquier persona o grupo que se ve afectado por el sistema (usuarios, clientes, desarrolladores).                                           | Identificación de fuentes de requerimientos.            |
| **Línea Base (Baseline)** | Especificación o producto revisado formalmente, que sirve de base para el desarrollo posterior y solo se cambia mediante control de cambios. | Gestión de la configuración del software.               |
| **Middleware**            | Software que gestiona la comunicación y el intercambio de datos entre componentes distribuidos.                                              | Arquitectura de sistemas distribuidos y bases de datos. |
| **Esquema de Estrella**   | Diseño de base de datos con una tabla de hechos central rodeada de tablas de dimensiones.                                                    | Diseño de Data Warehouse para inteligencia de negocios. |
| **ACID**                  | Propiedades de las transacciones: Atomicidad, Consistencia, Aislamiento, Durabilidad.                                                        | Garantía de integridad en bases de datos.               |

<!-- markdownlint-enable MD013 -->

---

#### 🔗 Relaciones con Otros Subtemas

- **3.3 Bases de Datos:** La ingeniería de software define el _ciclo de vida_ de la BD, mientras que el subtema 3.3 profundiza en el diseño lógico (normalización, SQL).
- **4.3 Cómputo Distribuido:** Proporciona la infraestructura (redes, concurrencia) sobre la que operan las bases de datos distribuidas descritas aquí.
- **1.1 Análisis y Diseño de Algoritmos:** Los algoritmos eficientes son un requerimiento no funcional (rendimiento) que se especifica durante la ingeniería de requerimientos.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente.

1.  **Gestión de Riesgos en Proyectos**

    - No basta con identificar riesgos; se debe diferenciar entre **riesgos de proyecto** (afectan la planificación), **riesgos de producto** (afectan la calidad) y **riesgos de negocio** (afectan la viabilidad). También se debe aplicar el ciclo: identificación, análisis, planificación y supervisión.
    - _Importancia:_ Permite anticipar problemas críticos antes de que descarrilen el proyecto.

2.  **Arquitectura de Sistemas Distribuidos (Fragmentación)**
    - Entender profundamente cómo reconstruir relaciones originales a partir de fragmentos horizontales (usando Unión) o verticales (usando Join o Concatenación) y cómo definir condiciones guardián para asegurar la corrección de la fragmentación,.
    - _Importancia:_ Es la base para diseñar sistemas escalables y tolerantes a fallos.

---

#### 📝 Cuestionario de Práctica

##### Instrucciones

- Total de reactivos: 25
- Cada reactivo tiene 3 opciones de respuesta (A, B, C)
- Solo una opción es correcta
- Tiempo sugerido: 50 minutos

---

##### Reactivos de Cuestionamiento Directo

###### Nivel Satisfactorio (1-4)

###### Reactivo 1

¿Cuál es el modelo de proceso de software que sugiere un enfoque sistemático y secuencial para el desarrollo del software, que comienza con la especificación de requerimientos y avanza a través de planeación, modelado, construcción y despliegue, concluyendo con el soporte del software terminado?

A) Modelo en Espiral

B) Modelo en Cascada

C) Desarrollo Ágil

**Respuesta correcta:** B
**Justificación:** El modelo en cascada (Waterfall) es el enfoque clásico que plantea un desarrollo lineal y secuencial, donde cada fase debe completarse antes de iniciar la siguiente. El modelo en espiral es iterativo y basado en riesgos, y el ágil se basa en iteraciones cortas y flexibilidad.
**Nivel:** Satisfactorio

###### Reactivo 2

En el contexto de la ingeniería de requerimientos, ¿cómo se clasifica un requerimiento que especifica que "el sistema debe ser capaz de procesar 100 transacciones por segundo"?

A) Requerimiento funcional

B) Requerimiento de dominio

C) Requerimiento no funcional

**Respuesta correcta:** C
**Justificación:** Los requerimientos no funcionales son restricciones de los servicios o funciones, como restricciones de tiempo, proceso de desarrollo o estándares. La velocidad de procesamiento es una restricción de rendimiento (calidad), no una función específica del negocio.
**Nivel:** Satisfactorio

###### Reactivo 3

¿Qué propiedad de las transacciones en una base de datos garantiza que, una vez que una transacción se ha confirmado, sus efectos son permanentes incluso si hay un fallo del sistema inmediatamente después?

A) Atomicidad

B) Aislamiento

C) Durabilidad

**Respuesta correcta:** C
**Justificación:** La durabilidad asegura que los cambios de una transacción comprometida persisten. La atomicidad asegura que se hace todo o nada; el aislamiento asegura que las transacciones no interfieran entre sí.
**Nivel:** Satisfactorio

###### Reactivo 4

¿Cuál es el término utilizado en la gestión de configuración para denotar una versión específica de un elemento de configuración que ha sido revisada y acordada formalmente, y que sirve como base para un desarrollo posterior?

A) Línea base (Baseline)

B) Rama (Branch)

C) Repositorio

**Respuesta correcta:** A
**Justificación:** Una línea base es una especificación o producto que ha sido revisado y acordado formalmente, sirviendo de base para el desarrollo futuro y cambiable solo a través de procedimientos formales.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

Una empresa financiera necesita desarrollar un sistema crítico donde la seguridad y la minimización de riesgos son la máxima prioridad. Los requerimientos no están completamente claros al inicio. ¿Qué modelo de proceso es el más adecuado?

A) Modelo en Cascada

B) Modelo en Espiral

C) Desarrollo Basado en Componentes

**Respuesta correcta:** B
**Justificación:** El modelo en espiral de Boehm es un marco de proceso dirigido explícitamente por el riesgo. Cada ciclo en la espiral incluye una fase de análisis de riesgos, lo que lo hace ideal para sistemas críticos con incertidumbre,. El modelo en cascada no maneja bien la incertidumbre.
**Nivel:** Sobresaliente

###### Reactivo 6

En una base de datos distribuida, se desea asegurar que si una localidad falla, los datos sigan disponibles en otra localidad. ¿Qué técnica de distribución de datos se debe implementar?

A) Fragmentación horizontal

B) Replicación

C) Normalización

**Respuesta correcta:** B
**Justificación:** La replicación consiste en almacenar copias de la misma información en múltiples nodos. Esto aumenta la disponibilidad (tolerancia a fallos) y el rendimiento de lectura, aunque complica la escritura. La fragmentación solo divide los datos, no los duplica para respaldo.
**Nivel:** Sobresaliente

###### Reactivo 7

Usted está diseñando un Data Warehouse. Se decide utilizar un esquema que consta de una tabla central grande que contiene los datos métricos del negocio y varias tablas pequeñas auxiliares que contienen los atributos descriptivos. ¿A qué tipo de esquema se refiere?

A) Esquema de Copo de Nieve

B) Esquema de Estrella

C) Esquema Relacional Normalizado

**Respuesta correcta:** B
**Justificación:** El esquema de estrella tiene una tabla de hechos central rodeada por tablas de dimensiones. Es el diseño más simple y común para Data Warehouses, optimizado para consultas analíticas (OLAP). El copo de nieve es una variación más normalizada y compleja.
**Nivel:** Sobresaliente

###### Reactivo 8

Al realizar una estimación de costos con el modelo COCOMO II, ¿cuál es el factor principal que determina el esfuerzo inicial antes de ajustar por los conductores de costo?

A) El tamaño del código (líneas de código o puntos de función)

B) La experiencia del equipo

C) La complejidad del hardware

**Respuesta correcta:** A
**Justificación:** Los modelos algorítmicos de costos como COCOMO se basan fundamentalmente en el tamaño del software (KLOC o Puntos de Función) elevado a un exponente, y luego ajustado por multiplicadores de esfuerzo.
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

El ciclo de vida clásico del software, también conocido como modelo en cascada, consta de las siguientes fases secuenciales: Definición de requerimientos, **\_\_\_**, Implementación y prueba de unidades, Integración y prueba del sistema, y Funcionamiento y mantenimiento.

A) Análisis de riesgos

B) Diseño del sistema y del software

C) Prototipado rápido

**Respuesta correcta:** B
**Justificación:** Según el modelo en cascada descrito por Sommerville, después de definir requerimientos sigue el diseño del sistema y software antes de codificar.
**Nivel:** Satisfactorio

###### Reactivo 10

En el contexto de pruebas de software, la prueba de **\_\_\_** verifica que el sistema cumple con los requerimientos funcionales y no funcionales especificados por el usuario, validando el producto final.

A) integración

B) unidad

C) aceptación

**Respuesta correcta:** C
**Justificación:** La prueba de aceptación es la etapa final antes de liberar el sistema, donde se prueba con datos del cliente para verificar que cumple sus necesidades reales.
**Nivel:** Satisfactorio

###### Reactivo 11

Una **\_\_\_** es una colección de datos orientada a temas, integrada, no volátil y variable en el tiempo, organizada para soportar necesidades de toma de decisiones de la gerencia.

A) Base de Datos Distribuida

B) Data Warehouse

C) Minería de Datos

**Respuesta correcta:** B
**Justificación:** Esta es la definición canónica de un Data Warehouse (Almacén de Datos), diseñado para OLAP y análisis histórico, a diferencia de las bases de datos operacionales (OLTP).
**Nivel:** Satisfactorio

###### Reactivo 12

El lenguaje **\_\_\_** es un estándar para el modelado visual de sistemas de software que se utiliza para especificar, visualizar, construir y documentar los artefactos de un sistema de software.

A) SQL

B) UML

C) XML

**Respuesta correcta:** B
**Justificación:** UML (Unified Modeling Language) es el estándar de facto para el modelado orientado a objetos, incluyendo diagramas de clases, secuencia, casos de uso, etc..
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

En una base de datos distribuida, para reconstruir la relación global a partir de fragmentos obtenidos mediante **\_\_\_**, se debe utilizar la operación de unión.

A) fragmentación vertical

B) fragmentación horizontal

C) fragmentación híbrida

**Respuesta correcta:** B
**Justificación:** La fragmentación horizontal divide la tabla en subconjuntos de tuplas (filas). Para recuperar la tabla original, se deben unir (Union) estas filas. La fragmentación vertical requiere la operación de Join (Junta),.
**Nivel:** Sobresaliente

###### Reactivo 14

Considere el siguiente fragmento de álgebra relacional para una fragmentación:
$R1 = \sigma_{Dno=5}(EMPLEADO)$
$R2 = \sigma_{Dno \neq 5}(EMPLEADO)$
Esta operación representa una **\_\_\_** que cumple con la regla de **\_\_\_**.

A) fragmentación vertical - preservación de dependencias

B) fragmentación horizontal - completitud

C) replicación total - minimización

**Respuesta correcta:** B
**Justificación:** El operador sigma ($\sigma$) denota selección de filas (fragmentación horizontal). La regla de completitud exige que todos los datos de la relación original se encuentren en algún fragmento. Al usar una condición y su negación (Dno=5 y Dno!=5), se asegura la completitud,.
**Nivel:** Sobresaliente

###### Reactivo 15

El **\_\_\_** es un patrón de diseño arquitectónico que estructura el sistema en tres componentes lógicos: la interfaz de usuario, la lógica de control y el modelo de datos, facilitando la mantenibilidad y la evolución independiente de las interfaces.

A) Cliente-Servidor

B) Modelo-Vista-Controlador (MVC)

C) Arquitectura en Capas

**Respuesta correcta:** B
**Justificación:** El patrón MVC (Model-View-Controller) separa explícitamente la presentación (Vista), la lógica de interacción (Controlador) y los datos (Modelo), lo cual es clave en el diseño de software de aplicación moderno.
**Nivel:** Sobresaliente

###### Reactivo 16

En la gestión de riesgos, si se identifica un riesgo de "alta probabilidad" y "alto impacto" relacionado con la inestabilidad de una tecnología clave, la estrategia de **\_\_\_** sugiere desarrollar un prototipo desechable para evaluar la tecnología antes de comprometerse con el desarrollo completo.

A) transferencia

B) mitigación (o reducción)

C) aceptación

**Respuesta correcta:** B
**Justificación:** La mitigación o reducción de riesgos busca disminuir la probabilidad o el impacto. El uso de prototipos para investigar tecnología reduce la incertidumbre (probabilidad de fallo técnico).
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione el tipo de mantenimiento de software con su descripción.

**Tipos**

1. Correctivo
2. Adaptativo
3. Perfectivo
4. Preventivo

**Descripción**
a) Modificación para corregir defectos descubiertos.
b) Modificación para mejorar el rendimiento o la mantenibilidad sin cambiar la funcionalidad.
c) Modificación para mantener el software utilizable en un entorno cambiante.
d) Modificación para detectar y corregir fallos latentes antes de que sean efectivos.

A) 1a, 2c, 3b, 4d

B) 1a, 2b, 3c, 4d

C) 1c, 2a, 3d, 4b

**Respuesta correcta:** A
**Justificación:** Correctivo arregla errores (1a). Adaptativo ajusta al entorno (SO, hardware) (2c). Perfectivo mejora cualidades o agrega funciones pedidas por usuario (nota: el estándar IEEE 14764 a veces agrupa mejoras funcionales en perfectivo) (3b). Preventivo anticipa problemas (4d).
**Nivel:** Satisfactorio

###### Reactivo 18

Relacione las fases del RUP (Rational Unified Process) con su objetivo principal.

**Fases**

1. Inicio
2. Elaboración
3. Construcción
4. Transición

**Objetivo**
a) Desarrollar el sistema operativo y la documentación.
b) Establecer el caso de negocio y el alcance del proyecto.
c) Desplegar el sistema en el entorno del usuario.
d) Analizar el dominio, establecer la arquitectura base y mitigar riesgos principales.

A) 1b, 2a, 3d, 4c

B) 1b, 2d, 3a, 4c

C) 1d, 2b, 3a, 4c

**Respuesta correcta:** B
**Justificación:** Inicio define el alcance (1b). Elaboración define la arquitectura y riesgos (2d). Construcción desarrolla el producto (3a). Transición entrega al usuario (4c).
**Nivel:** Satisfactorio

###### Reactivo 19

Relacione el tipo de prueba con su descripción.

**Tipo de Prueba**

1. Prueba de unidad
2. Prueba de integración
3. Prueba de sistema
4. Prueba de regresión

**Descripción**
a) Verifica que los cambios recientes no hayan alterado funciones existentes.
b) Verifica el funcionamiento de componentes individuales (clases, funciones).
c) Verifica la interacción entre componentes ensamblados.
d) Verifica el comportamiento del sistema completo contra los requerimientos.

A) 1b, 2c, 3d, 4a

B) 1c, 2b, 3a, 4d

C) 1b, 2a, 3d, 4c

**Respuesta correcta:** A
**Justificación:** Unidad prueba componentes aislados (1b). Integración prueba interfaces entre componentes (2c). Sistema prueba el todo (3d). Regresión asegura que lo que funcionaba siga funcionando (4a).
**Nivel:** Satisfactorio

###### Reactivo 20

Relacione los conceptos de bases de datos con su definición.

**Concepto**

1. DDL (Data Definition Language)
2. DML (Data Manipulation Language)
3. SGBD (Sistema Gestor de BD)
4. Clave Primaria

**Definición**
a) Software que permite definir, crear y mantener la base de datos.
b) Identificador único para cada registro en una tabla.
c) Comandos para definir esquemas (CREATE, ALTER).
d) Comandos para gestionar datos (SELECT, INSERT).

A) 1d, 2c, 3a, 4b

B) 1c, 2d, 3a, 4b

C) 1c, 2d, 3b, 4a

**Respuesta correcta:** B
**Justificación:** DDL define estructura (1c). DML manipula datos (2d). SGBD es el software de gestión (3a). Clave Primaria identifica registros (4b).
**Nivel:** Satisfactorio

###### Reactivo 21

Relacione las métricas de calidad de software con su categoría.

**Métrica**

1. Tiempo medio entre fallos (MTBF)
2. Tiempo de aprendizaje
3. Memoria utilizada
4. Tiempo de reinicio tras fallo

**Categoría**
a) Usabilidad
b) Fiabilidad
c) Eficiencia
d) Robustez

A) 1b, 2a, 3c, 4d

B) 1d, 2a, 3b, 4c

C) 1b, 2c, 3a, 4d

**Respuesta correcta:** A
**Justificación:** MTBF mide fiabilidad (1b). Aprendizaje es usabilidad (2a). Memoria es eficiencia de recursos (3c). Reinicio es robustez/recuperabilidad (4d).
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Relacione las estrategias de gestión de riesgos con las acciones específicas para un proyecto de software.

**Estrategia**

1. Evitación de riesgos
2. Minimización de riesgos
3. Planes de contingencia

**Acción**
a) Comprar componentes de software probados en lugar de construirlos desde cero para evitar fallos de diseño.
b) Preparar un fondo de emergencia y un equipo de "bomberos" por si el servidor falla.
c) Usar programación defensiva y validación exhaustiva para reducir el impacto de posibles errores de datos.

A) 1a, 2c, 3b

B) 1b, 2a, 3c

C) 1c, 2b, 3a

**Respuesta correcta:** A
**Justificación:** Evitar el riesgo significa no realizar la actividad riesgosa (ej. no desarrollar, sino comprar) (1a). Minimizar reduce el impacto o probabilidad (programación defensiva) (2c). Contingencia es qué hacer si el riesgo ocurre (fondo de emergencia) (3b).
**Nivel:** Sobresaliente

###### Reactivo 23

Relacione el nivel de transparencia en bases de datos distribuidas con su descripción técnica.

**Nivel de Transparencia**

1. Transparencia de Localización
2. Transparencia de Fragmentación
3. Transparencia de Replicación

**Descripción**
a) El usuario no necesita saber que los datos están divididos en pedazos; consulta la relación global.
b) El usuario no necesita saber en qué nodo de la red residen los datos; usa nombres lógicos.
c) El usuario no necesita saber que existen copias de los datos; el sistema gestiona la consistencia.

A) 1b, 2a, 3c

B) 1a, 2b, 3c

C) 1c, 2a, 3b

**Respuesta correcta:** A
**Justificación:** Localización: el usuario ignora la ubicación física (1b). Fragmentación: el usuario ignora la partición de tablas (2a). Replicación: el usuario ignora la existencia de copias (3c).
**Nivel:** Sobresaliente

###### Reactivo 24

Relacione la técnica de diseño de pruebas (caja negra/blanca) con el método específico.

**Técnica**

1. Caja Negra
2. Caja Blanca

**Método**
a) Partición de equivalencia
b) Cobertura de caminos (Path testing)
c) Análisis de valores límite
d) Prueba de flujo de datos

A) 1a, 1c - 2b, 2d

B) 1b, 1d - 2a, 2c

C) 1a, 1d - 2b, 2c

**Respuesta correcta:** A
**Justificación:** Caja Negra se basa en la especificación (entradas/salidas): partición de equivalencia y valores límite (1a, 1c). Caja Blanca se basa en la estructura interna del código: caminos lógicos y flujo de datos (2b, 2d).
**Nivel:** Sobresaliente

###### Reactivo 25 - Integrador

Un banco internacional desea actualizar su sistema. Requieren alta disponibilidad global (24/7), consistencia estricta en transacciones financieras y capacidad de analizar tendencias históricas de todos sus clientes para ofrecer nuevos productos. Relacione los requerimientos con las soluciones arquitectónicas y metodológicas adecuadas.

**Requerimiento**

1. Consistencia estricta en transacciones distribuidas
2. Análisis de tendencias históricas masivas
3. Alta disponibilidad ante fallos de un servidor
4. Metodología para requisitos cambiantes y entrega rápida

**Solución**
a) Implementación de un Data Warehouse con esquema de estrella
b) Protocolo de confirmación en dos fases (2PC)
c) Desarrollo Ágil (ej. Scrum) o Evolutivo
d) Replicación de datos con gestión de fallos

A) 1b, 2a, 3d, 4c

B) 1d, 2a, 3b, 4c

C) 1b, 2c, 3d, 4a

**Respuesta correcta:** A
**Justificación:**

- 1-b: El protocolo 2PC garantiza atomicidad y consistencia en transacciones distribuidas (ACID).
- 2-a: Los Data Warehouses son específicos para análisis histórico y tendencias (OLAP).
- 3-d: La replicación asegura que si un nodo cae, otro tiene los datos (Disponibilidad).
- 4-c: Metodologías ágiles/evolutivas son para requisitos cambiantes y entrega rápida.
  **Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

##### Nivel Satisfactorio Checklist

- [ ] Explicar con tus propias palabras todos los conceptos del glosario
- [ ] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio (85%)
- [ ] Identificar las aplicaciones prácticas de los conceptos (ej. cuándo usar Cascada vs Espiral)
- [ ] Diferenciar entre requerimientos funcionales y no funcionales
- [ ] Definir qué es una base de datos y un SGBD

##### Nivel Sobresaliente Checklist

- [ ] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%)
- [ ] Lograr al menos 21/25 reactivos correctos en total (84%)
- [ ] Analizar escenarios complejos que integren múltiples conceptos (ej. Reactivo 25)
- [ ] Relacionar este subtema con Bases de Datos (3.3) y Cómputo Distribuido (4.3)
- [ ] Aplicar estrategias de gestión de riesgos a situaciones nuevas
- [ ] Diseñar esquemas de fragmentación para bases de datos distribuidas

---

#### 📌 Notas y Observaciones Personales

[Espacio para agregar notas durante el estudio]

---

#### 🔄 Última revisión

**Fecha:** [DD/MM/YYYY]
**Estado:** [ ] Por estudiar | [ ] En progreso | [ ] Revisado | [ ] Dominado
**Puntuación en cuestionario:** _/25 (_%)
**Desglose:** Satisfactorio _/13 | Sobresaliente _/12

---

#### 📚 Referencias

- Sommerville, I. (2005). _Ingeniería del Software_ (7ma ed.). Pearson Educación.
- Elmasri, R., & Navathe, S. B. (2007). _Fundamentos de Sistemas de Bases de Datos_ (5ta ed.). Pearson Addison Wesley.
- Tanenbaum, A. S., & Van Steen, M. (2008). _Sistemas Distribuidos: Principios y Paradigmas_ (2da ed.). Pearson Educación.
- IEEE. (2012). _SWEBOK Guide V3_.
