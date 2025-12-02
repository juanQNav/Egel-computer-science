<!-- line-width: 1000 -->
<!-- format:off -->

### 4.3 Cómputo Distribuido

**Área:** Soluciones de Cómputo Inteligente
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

El cómputo distribuido se refiere a un sistema en el cual múltiples computadoras autónomas trabajan juntas para aparecer ante el usuario como un sistema único y coherente. A diferencia de los sistemas centralizados, donde todo el procesamiento ocurre en una sola máquina, o de los sistemas operativos de red simples donde el usuario es consciente de las múltiples máquinas, un verdadero sistema distribuido busca ocultar la complejidad de la red subyacente.

Este paradigma permite compartir recursos (hardware, software y datos) de manera eficiente, mejorar la confiabilidad mediante la redundancia y escalar el rendimiento añadiendo más nodos. Su aplicación es fundamental en la infraestructura moderna, desde sistemas bancarios y fábricas automatizadas hasta grandes redes de servidores, basándose en la interconexión de hardware (multiprocesadores o multicomputadoras) gestionada por software que garantiza la transparencia y flexibilidad.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [ ] Distinguir entre sistemas centralizados, sistemas operativos de red y sistemas distribuidos.
- [ ] Identificar los componentes básicos de hardware (multiprocesadores vs. multicomputadoras).
- [ ] Comprender el concepto de proceso e hilo en el contexto de sistemas distribuidos.

##### Nivel Sobresaliente

- [ ] Analizar los diferentes tipos de transparencia (localización, migración, réplica, etc.).
- [ ] Aplicar estrategias de tolerancia a fallas y uso de redundancia.
- [ ] Interpretar mecanismos de comunicación complejos como RPC (Llamada a Procedimiento Remoto) y paso de mensajes.

---

#### 📚 Contenido Teórico

##### 1. Concepto y Características del Sistema Distribuido

**Definición:** Un sistema distribuido es una colección de computadoras independientes que aparecen ante los usuarios del sistema como una única computadora.
**Explicación:**
La clave es la percepción del usuario. En un sistema distribuido verdadero, el usuario no necesita saber en qué máquina se ejecutan sus procesos o dónde se almacenan sus archivos; el sistema operativo gestiona esto automáticamente. Esto contrasta con un Sistema Operativo de Red, donde el usuario debe iniciar sesión explícitamente en máquinas remotas (ej. comando `rlogin`) o copiar archivos conscientemente entre máquinas.

**Aspectos clave:**

- **Transparencia:** Es el grado en que el sistema oculta los detalles internos. Incluye transparencia de localización (no saber dónde están los recursos), de migración (recursos se mueven sin cambiar nombre) y de réplica (existencia de copias ocultas).
- **Flexibilidad:** Capacidad de estructurar el sistema usando un núcleo monolítico (todas las funciones en el kernel) o un micronúcleo (servicios mínimos en el kernel, el resto como procesos de usuario), siendo el micronúcleo más flexible y modular.
- **Confiabilidad:** Si una máquina falla, el sistema debe seguir funcionando (disponibilidad), garantizando la integridad de los datos.

##### 2. Arquitecturas de Hardware

**Definición:** La organización física de los procesadores y la memoria en el sistema.
**Explicación:**
Tanenbaum clasifica el hardware en dos grupos principales: Multiprocesadores (memoria compartida) y Multicomputadoras (memoria privada).

**Clasificación:**

- **Multiprocesadores (Memoria Compartida):** Todas las CPUs comparten un espacio de direcciones único. Pueden estar basados en buses (limitados por saturación del bus) o conmutadores (para mayor escala).
- **Multicomputadoras (Memoria Privada):** Cada CPU tiene su propia memoria local. Se comunican únicamente enviando mensajes. Son más fáciles de escalar pero más difíciles de programar. Pueden ser homogéneas o heterogéneas.

##### 3. Comunicación: Paso de Mensajes y RPC

**Definición:** Mecanismos que permiten a procesos en diferentes máquinas intercambiar información.
**Explicación:**
Dado que en las multicomputadoras no hay memoria compartida, la comunicación se basa en el paso de mensajes. Sin embargo, para facilitar la programación, se utilizan abstracciones como la Llamada a Procedimiento Remoto (RPC).

**Aspectos clave:**

- **RPC (Remote Procedure Call):** Permite a un programa llamar a un procedimiento en otra máquina como si fuera local. Utiliza "resguardos" (stubs) en el cliente y servidor para empaquetar (marshaling) los parámetros y enviarlos por la red, ocultando la comunicación al programador.
- **Problemas de RPC:** A diferencia de llamadas locales, las RPC pueden fallar por pérdida de mensajes o caídas del servidor. Se requieren mecanismos de retransmisión y manejo de excepciones.

##### 4. Procesos e Hilos en Distribuidos

**Definición:** Un proceso es un programa en ejecución con su propio espacio de direcciones. Un hilo es un flujo de control dentro de un proceso.
**Explicación:**
En sistemas distribuidos, los hilos son cruciales porque permiten paralelismo real (ejecutándose en diferentes CPUs) y evitan bloqueos (un hilo espera E/S mientras otro computa). Los hilos pueden implementarse en espacio de usuario (rápidos, pero si uno se bloquea, todo el proceso se bloquea) o en el núcleo (mejor gestión de bloqueo, pero más costosos).

---

#### 📖 Glosario de Términos

<!-- markdownlint-disable MD013 -->

| Término                           | Definición                                                                                                                 | Contexto de uso                                              |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| **Middleware**                    | Capa de software entre el sistema operativo y las aplicaciones que proporciona servicios de transparencia y comunicación.  | Conexión de aplicaciones distribuidas heterogéneas.          |
| **RPC (Remote Procedure Call)**   | Protocolo que permite a un programa ejecutar código en otra máquina sin que el programador gestione explícitamente la red. | Comunicación cliente-servidor transparente.                  |
| **Transparencia de Localización** | Característica donde los usuarios no necesitan conocer la ubicación física de los recursos.                                | Acceso a archivos o impresoras en red.                       |
| **Multicomputadora**              | Sistema con múltiples CPUs donde cada una tiene su propia memoria privada y se comunican por mensajes.                     | Clusters de alto rendimiento, sistemas distribuidos masivos. |
| **Micronúcleo**                   | Diseño de SO donde el kernel provee lo mínimo (IPC, memoria básica) y los servicios corren como procesos de usuario.       | Sistemas distribuidos flexibles como Mach o Chorus.          |
| **Marshaling (Empaquetado)**      | Proceso de convertir parámetros y datos en un formato estándar para su transmisión por red en una RPC.                     | Envío de datos complejos entre arquitecturas diferentes.     |

<!-- markdownlint-enable MD013 -->

---

#### 🔗 Relaciones con Otros Subtemas

- **2.1 Arquitectura de computadoras:** El concepto de multiprocesadores y gestión de memoria física es la base del hardware distribuido.
- **2.3 Redes de computadoras:** Los sistemas distribuidos dependen totalmente de los protocolos de red (capas OSI/TCP/IP) para el paso de mensajes.
- **4.1 Inteligencia Artificial:** Los algoritmos distribuidos y el procesamiento paralelo son esenciales para el entrenamiento de modelos y minería de datos masiva.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente

1.  **Modelos de Fallas y Tolerancia**

    - Entender no solo que los sistemas fallan, sino _cómo_ se mitigan las fallas.
    - **Concepto crítico:** La **redundancia** es la clave. Puede ser física (hardware extra), de información (bits extra/ECC) o temporal (repetir operaciones). La **réplica activa** (todos los procesadores ejecutan lo mismo) vs. **respaldo primario** (uno ejecuta, si falla, entra el otro).

2.  **Sincronización de Relojes (Algoritmo de Lamport)**
    - En sistemas distribuidos no existe un reloj global. Entender que la sincronización absoluta es imposible, pero la sincronización lógica (orden de eventos) es vital.
    - **Concepto crítico:** La relación "ocurre antes de" de Lamport y cómo los relojes lógicos corrigen el orden de eventos en sistemas asíncronos.

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

¿Cuál es la característica principal que diferencia a un Sistema Operativo Distribuido de un Sistema Operativo de Red?

A) La capacidad de conectar computadoras de diferentes fabricantes.

B) La percepción de un sistema único y coherente por parte del usuario, ocultando la multiplicidad de máquinas.

C) La utilización de un servidor centralizado de archivos para almacenar datos de todos los usuarios.

**Respuesta correcta:** B
**Justificación:** Un sistema distribuido se define como una colección de computadoras independientes que aparecen ante los usuarios como un sistema único (imagen de sistema único), logrando transparencia. En un SO de red, el usuario es consciente de las diferentes máquinas y debe conectarse explícitamente a ellas.
**Nivel:** Satisfactorio

---

###### Reactivo 2

En la clasificación de hardware para sistemas distribuidos, ¿qué distingue a un multiprocesador de una multicomputadora?

A) Los multiprocesadores tienen memoria compartida accesible por todas las CPUs, mientras que las multicomputadoras tienen memoria privada.

B) Los multiprocesadores utilizan un bus para comunicación, mientras que las multicomputadoras siempre usan conmutadores.

C) Los multiprocesadores están limitados a una sola CPU, mientras que las multicomputadoras tienen múltiples CPUs.

**Respuesta correcta:** A
**Justificación:** La distinción fundamental establecida por Tanenbaum es que en los multiprocesadores existe un único espacio de direcciones compartido por todas las CPUs, mientras que en las multicomputadoras cada CPU tiene su propia memoria local y privada.
**Nivel:** Satisfactorio

---

###### Reactivo 3

¿Cuál es el objetivo principal del uso de "middleware" en sistemas distribuidos?

A) Gestionar directamente el hardware de red y los controladores de dispositivos.

B) Proporcionar una capa de software que ofrezca uniformidad y oculte la heterogeneidad de los sistemas operativos subyacentes.

C) Incrementar la velocidad del reloj de los procesadores distribuidos.

**Respuesta correcta:** B
**Justificación:** El middleware se sitúa entre el sistema operativo y las aplicaciones para proporcionar un nivel de abstracción que facilita la comunicación y gestión de recursos en entornos heterogéneos.
**Nivel:** Satisfactorio

---

###### Reactivo 4

En el contexto de RPC (Llamada a Procedimiento Remoto), ¿cuál es la función del "resguardo del cliente" (client stub)?

A) Ejecutar el procedimiento real en el servidor y devolver el resultado.

B) Empaquetar los parámetros en un mensaje y enviarlo al núcleo para su transmisión.

C) Gestionar la base de datos de localización de servicios de la red.

**Respuesta correcta:** B
**Justificación:** El resguardo del cliente (client stub) se encarga del "marshaling" o empaquetado: toma los parámetros de la llamada, los empaqueta en un mensaje y solicita al núcleo que lo envíe al servidor, ocultando los detalles de red al programa cliente.
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

En un sistema distribuido, se desea implementar tolerancia a fallas mediante "réplica activa". ¿Qué implica esta estrategia?

A) Se realiza una copia de seguridad de los datos periódicamente en un servidor secundario inactivo.

B) Todos los procesadores réplica ejecutan las mismas instrucciones simultáneamente y se comparan sus resultados.

C) Un procesador primario ejecuta la tarea y, solo si falla, el estado se transfiere a un respaldo.

**Respuesta correcta:** B
**Justificación:** La réplica activa implica que todos los servidores (réplicas) están activos y procesan la misma solicitud al mismo tiempo. Esto permite enmascarar fallas de manera instantánea, a diferencia del respaldo primario.
**Nivel:** Sobresaliente

---

###### Reactivo 6

Al diseñar un micronúcleo para un sistema distribuido, ¿qué servicios deben permanecer estrictamente dentro del modo núcleo (kernel mode)?

A) El sistema de archivos, el manejo de directorios y la gestión de procesos completa.

B) La comunicación entre procesos (IPC), gestión básica de memoria y planificación de bajo nivel.

C) Todos los servicios del sistema operativo para garantizar la máxima velocidad.

**Respuesta correcta:** B
**Justificación:** La filosofía del micronúcleo es minimizar el código en modo núcleo para aumentar la flexibilidad y confiabilidad. Solo los servicios esenciales como IPC, memoria básica y manejo de interrupciones/planificación básica se mantienen en el núcleo; el resto (sistema de archivos, etc.) corren como procesos de usuario.
**Nivel:** Sobresaliente

---

###### Reactivo 7

En el algoritmo de sincronización de relojes de Lamport, ¿qué sucede si un proceso recibe un mensaje con una marca de tiempo $T$ mayor que su reloj local $C$?

A) El proceso descarta el mensaje por considerarlo un error futuro.

B) El proceso ajusta su reloj local a $C = T + 1$.

C) El proceso detiene su reloj hasta que el tiempo real alcance a $T$.

**Respuesta correcta:** B
**Justificación:** Según el algoritmo de Lamport, para mantener la consistencia lógica (relación "ocurre antes de"), si un mensaje llega con un tiempo mayor, el receptor debe adelantar su reloj para que sea mayor que el tiempo de envío, asegurando causalidad.
**Nivel:** Sobresaliente

---

###### Reactivo 8

Para lograr una semántica de "ejecución exacta de una vez" en una RPC ante la pérdida de mensajes de respuesta, ¿qué mecanismo es necesario?

A) Simplemente retransmitir la solicitud hasta recibir respuesta.

B) El servidor debe filtrar duplicados y el cliente debe usar números de secuencia en las solicitudes.

C) Utilizar exclusivamente el protocolo TCP en lugar de UDP.

**Respuesta correcta:** B
**Justificación:** Si se pierden respuestas, el cliente retransmite. Si el servidor simplemente re-ejecuta (opción A), operaciones no idempotentes (como transferir dinero) causarían errores. El servidor debe detectar duplicados (mediante números de secuencia) para no ejecutar dos veces la operación, pero sí reenviar la respuesta.
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

En un sistema de **multiprocesadores con base en buses**, la principal limitación para escalar el sistema es \_\_\_\_\_\_\_\_\_\_, que ocurre cuando muchas CPUs intentan acceder a la memoria global simultáneamente. Para mitigar esto, se añaden \_\_\_\_\_\_\_\_\_\_ a cada CPU.

A) la latencia de red / discos duros

B) la saturación del bus / memorias caché

C) el fallo de energía / baterías de respaldo

**Respuesta correcta:** B
**Justificación:** En arquitecturas basadas en bus, el bus se convierte en un cuello de botella (saturación) si hay muchas CPUs. Las memorias caché locales reducen el tráfico en el bus al satisfacer muchas solicitudes de memoria localmente.
**Nivel:** Satisfactorio

---

###### Reactivo 10

Un \_\_\_\_\_\_\_\_\_\_ es un programa en ejecución que posee un espacio de direcciones y recursos, mientras que un \_\_\_\_\_\_\_\_\_\_ es una unidad de ejecución ligera dentro de aquel, que comparte el mismo espacio de direcciones.

A) hilo / proceso

B) proceso / hilo

C) servidor / cliente

**Respuesta correcta:** B
**Justificación:** Definición estándar de proceso como contenedor de recursos y el hilo como la entidad que se planifica para ejecución dentro del proceso, compartiendo sus recursos.
**Nivel:** Satisfactorio

---

###### Reactivo 11

La \_\_\_\_\_\_\_\_\_\_ es la propiedad de un sistema distribuido que permite ocultar al usuario que los recursos y procesos están físicamente separados. Un ejemplo es la \_\_\_\_\_\_\_\_\_\_, que oculta el lugar geográfico donde se encuentra un recurso.

A) Transparencia / Transparencia de localización

B) Flexibilidad / Transparencia de réplica

C) Confiabilidad / Transparencia de concurrencia

**Respuesta correcta:** A
**Justificación:** La transparencia es el concepto clave de ocultar la distribución. La transparencia de localización específicamente oculta dónde está el recurso.
**Nivel:** Satisfactorio

---

###### Reactivo 12

El software que gestiona la comunicación y el intercambio de datos entre componentes distribuidos, actuando como un enlace entre el sistema operativo y las aplicaciones, se denomina \_\_\_\_\_\_\_\_\_\_.

A) Firmware

B) Middleware

C) Shareware

**Respuesta correcta:** B
**Justificación:** El middleware es la capa de software que proporciona servicios comunes y transparencia a las aplicaciones en un sistema distribuido, situándose sobre el SO.
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

En el contexto de la sincronización distribuida, la condición de \_\_\_\_\_\_\_\_\_\_ es necesaria para evitar que dos procesos accedan simultáneamente a un recurso compartido. El algoritmo de \_\_\_\_\_\_\_\_\_\_ utiliza un token o testigo que circula en un anillo lógico para garantizar esta condición.

A) Interbloqueo / Ricart y Agrawala

B) Exclusión mutua / Paso de testigo (token ring)

C) Consistencia / Lamport

**Respuesta correcta:** B
**Justificación:** La exclusión mutua previene condiciones de carrera. El algoritmo de anillo (token ring) pasa un mensaje especial (token); solo quien tiene el token puede entrar a la sección crítica.
**Nivel:** Sobresaliente

---

###### Reactivo 14

Para implementar tolerancia a fallas mediante \_\_\_\_\_\_\_\_\_\_, se utilizan componentes físicos adicionales (como procesadores extra). En cambio, la \_\_\_\_\_\_\_\_\_\_ utiliza bits extra para detección y corrección de errores en los datos.

A) redundancia de tiempo / redundancia de información

B) redundancia de hardware / redundancia de información

C) redundancia de software / redundancia de tiempo

**Respuesta correcta:** B
**Justificación:** Tanenbaum clasifica la redundancia en: hardware (física), información (bits extra) y tiempo (repetición de acciones). La descripción corresponde a hardware e información respectivamente.
**Nivel:** Sobresaliente

---

###### Reactivo 15

En un sistema de archivos distribuido como NFS, el protocolo de montaje devuelve un \_\_\_\_\_\_\_\_\_\_ al cliente, el cual contiene información como el inodo y se utiliza en llamadas posteriores para leer o escribir archivos.

A) descriptor de archivo (file descriptor)

B) manejador de archivo (file handle)

C) bloque de control de proceso (PCB)

**Respuesta correcta:** B
**Justificación:** En NFS, el servidor devuelve un "file handle" (manejador de archivo) que identifica el archivo de manera única y opaca para el cliente, usándose para operaciones subsiguientes.
**Nivel:** Sobresaliente

---

###### Reactivo 16

El modelo de \_\_\_\_\_\_\_\_\_\_ describe un sistema donde las solicitudes de los clientes se distribuyen entre varios servidores para evitar cuellos de botella, a menudo utilizando un mecanismo de \_\_\_\_\_\_\_\_\_\_.

A) cliente-servidor / paginación

B) clúster / balanceo de carga

C) mainframe / tiempo compartido

**Respuesta correcta:** B
**Justificación:** Los clusters utilizan múltiples servidores para trabajar juntos y el balanceo de carga es la técnica para distribuir el trabajo equitativamente entre ellos.
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione el tipo de transparencia en sistemas distribuidos con su descripción correcta.

**[Tipos de Transparencia]**

1. De Localización
2. De Migración
3. De Réplica
4. De Concurrencia

**[Descripciones]**
a) Oculta que un recurso se mueva a otra ubicación.
b) Oculta que varios usuarios compartan recursos.
c) Oculta dónde se encuentra exactamente un recurso.
d) Oculta que existen múltiples copias de un recurso.

A) 1c, 2a, 3d, 4b

B) 1a, 2c, 3b, 4d

C) 1d, 2b, 3a, 4c

**Respuesta correcta:** A
**Justificación:**

- 1-c: Localización oculta el "dónde".
- 2-a: Migración permite mover el recurso sin que el usuario lo note.
- 3-d: Réplica oculta que hay copias redundantes.
- 4-b: Concurrencia gestiona el acceso simultáneo de usuarios.
  **Nivel:** Satisfactorio

---

###### Reactivo 18

Relacione la arquitectura de hardware con su característica distintiva.

**[Arquitectura]**

1. Multiprocesador en base a bus
2. Multicomputadora homogénea
3. Multiprocesador con conmutador
4. Multicomputadora heterogénea

**[Característica]**
a) Memoria compartida, usa red de conmutación (ej. Omega) para conectar CPUs y memoria.
b) Memoria privada, utiliza la misma plataforma de hardware/software en todos los nodos.
c) Memoria compartida, limitado por el ancho de banda del medio de comunicación central.
d) Memoria privada, nodos con diferente hardware o sistemas operativos.

A) 1b, 2d, 3a, 4c

B) 1c, 2b, 3a, 4d

C) 1a, 2c, 3d, 4b

**Respuesta correcta:** B
**Justificación:**

- 1-c: Bus limita escalabilidad en memoria compartida.
- 2-b: Multicomputadora (memoria privada) homogénea (iguales).
- 3-a: Conmutador (crossbar/omega) permite escalar memoria compartida.
- 4-d: Heterogénea implica sistemas diferentes.
  **Nivel:** Satisfactorio

---

###### Reactivo 19

Relacione el concepto de proceso/hilo con su definición.

**[Concepto]**

1. Hilo (Thread)
2. Proceso
3. Hilo a nivel de usuario
4. Hilo a nivel de núcleo

**[Definición]**
a) Entidad que agrupa recursos y un espacio de direcciones.
b) Gestionado por el SO, más costoso de crear pero mejor concurrencia.
c) Flujo de control dentro de un proceso, comparte memoria.
d) Gestionado por librería, rápido de crear, bloqueo afecta a todo el proceso.

A) 1c, 2a, 3d, 4b

B) 1a, 2b, 3c, 4d

C) 1b, 2c, 3a, 4d

**Respuesta correcta:** A
**Justificación:**

- 1-c: Definición básica de hilo.
- 2-a: Definición básica de proceso.
- 3-d: User-level threads son rápidos pero bloqueantes.
- 4-b: Kernel-level threads son gestionados por el SO.
  **Nivel:** Satisfactorio

---

###### Reactivo 20

Relacione los pasos de una RPC (Remote Procedure Call) con su orden lógico.

**[Pasos]**

1. El resguardo del cliente empaqueta los parámetros.
2. El cliente llama al resguardo del cliente (client stub).
3. El núcleo envía el mensaje al servidor.
4. El resguardo del cliente pasa el mensaje al núcleo local.

**[Orden]**
a) Paso 1
b) Paso 2
c) Paso 3
d) Paso 4

A) 1b, 2a, 3d, 4c

B) 1a, 2b, 3c, 4d

C) 1b, 2d, 3a, 4c

**Respuesta correcta:** A
**Justificación:**
El orden correcto es: El cliente llama al stub (2-b) -> El stub empaqueta (1-a) -> El stub pasa al núcleo (4-d) -> El núcleo envía (3-c).
**Nivel:** Satisfactorio

---

###### Reactivo 21

Relacione el tipo de sistema operativo con su descripción.

**[Tipo de SO]**

1. Sistema Monolítico
2. Sistema de Red
3. Sistema Distribuido
4. Micronúcleo

**[Descripción]**
a) Colección de máquinas independientes que actúan como una sola.
b) Kernel básico con servicios ejecutándose como procesos de usuario.
c) Todo el SO corre en un único espacio de direcciones en modo kernel.
d) Máquinas independientes donde el usuario gestiona explícitamente las conexiones.

A) 1c, 2d, 3a, 4b

B) 1a, 2b, 3c, 4d

C) 1d, 2a, 3b, 4c

**Respuesta correcta:** A
**Justificación:**

- 1-c: Monolítico = todo en kernel.
- 2-d: Red = gestión explícita (`rlogin`).
- 3-a: Distribuido = imagen única.
- 4-b: Micronúcleo = servicios mínimos.
  **Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Relacione la estrategia de asignación de procesadores con su mecanismo.

**[Estrategia]**

1. Determinística
2. Heurística
3. Distribuida
4. Centralizada

**[Mecanismo]**
a) Un solo nodo toma todas las decisiones de asignación.
b) Se basa en reglas prácticas para encontrar una solución buena (no óptima).
c) Utiliza un algoritmo matemático exacto basado en grafos estáticos.
d) Las decisiones se toman cooperativamente entre múltiples nodos.

A) 1c, 2b, 3d, 4a

B) 1a, 2c, 3b, 4d

C) 1b, 2d, 3a, 4c

**Respuesta correcta:** A
**Justificación:**

- 1-c: Determinística usa grafos y conoce todo de antemano.
- 2-b: Heurística usa aproximaciones cuando la carga es impredecible.
- 3-d: Distribuida reparte la decisión.
- 4-a: Centralizada concentra la decisión (cuello de botella potencial).
  **Nivel:** Sobresaliente

---

###### Reactivo 23

Relacione el problema de RPC con su solución o semántica.

**[Problema RPC]**

1. Cliente no localiza al servidor
2. Pérdida de mensaje de solicitud
3. Pérdida de mensaje de respuesta
4. Caída del servidor tras ejecución

**[Solución/Semántica]**
a) Temporizador y retransmisión.
b) Números de secuencia para detectar duplicados.
c) Excepción o señal al cliente.
d) Semántica "al menos una vez" o "exactamente una vez" (idempotencia).

A) 1c, 2a, 3b, 4d

B) 1a, 2b, 3c, 4d

C) 1d, 2c, 3a, 4b

**Respuesta correcta:** A
**Justificación:**

- 1-c: Si el servidor no está, el stub del cliente lanza excepción.
- 2-a: Si la solicitud se pierde, el cliente usa timeout y reenvía.
- 3-b: Si la respuesta se pierde, el cliente reenvía; el servidor usa números de secuencia para no re-ejecutar, solo re-responder.
- 4-d: Si el servidor cae, garantizar semántica exacta es difícil (idempotencia).
  **Nivel:** Sobresaliente

---

###### Reactivo 24

Relacione el modelo de consistencia con su definición.

**[Modelo]**

1. Consistencia Estricta
2. Consistencia Secuencial
3. Consistencia Causal
4. Consistencia Débil

**[Definición]**
a) Cualquier lectura a una variable x devuelve el valor de la escritura más reciente en tiempo real.
b) Las escrituras relacionadas potencialmente por causa-efecto son vistas en el mismo orden por todos.
c) El resultado de una ejecución es el mismo que si las operaciones de todos los procesadores se ejecutaran en algún orden secuencial.
d) La consistencia solo se garantiza al entrar o salir de una sección crítica (variable de sincronización).

A) 1a, 2c, 3b, 4d

B) 1b, 2a, 3d, 4c

C) 1c, 2d, 3a, 4b

**Respuesta correcta:** A
**Justificación:**

- 1-a: Estricta = tiempo real absoluto (imposible en distribuidos).
- 2-c: Secuencial = orden entrelazado válido.
- 3-b: Causal = respeta causalidad de Lamport.
- 4-d: Débil = sincronización explícita.
  **Nivel:** Sobresaliente

---

###### Reactivo 25 - Integrador

En un sistema de **cómputo distribuido tolerante a fallas**, se implementa un sistema de archivos replicado. Relacione los conceptos de arquitectura, comunicación y fallas para lograr una operación correcta.

**[Elemento del Sistema]**

1. Grupo de servidores con **Réplica Activa**
2. Comunicación vía **Multicast** atómico
3. Protocolo de **Sincronización de Relojes**
4. **Votación**

**[Función en el Diseño]**
a) Garantiza que todos los servidores reciban las solicitudes de actualización en el mismo orden o ninguno la reciba.
b) Permite enmascarar fallas bizantinas si $3k+1$ procesadores están presentes.
c) Permite que el sistema siga operando instantáneamente ante la caída de un nodo sin pérdida de estado.
d) Necesario para asegurar que las marcas de tiempo de los archivos sean consistentes entre nodos.

A) 1c, 2a, 3d, 4b

B) 1a, 2b, 3c, 4d

C) 1b, 2d, 3a, 4c

**Respuesta correcta:** A
**Justificación:**
Este reactivo integra múltiples áreas avanzadas:

- 1-c: La réplica activa (state machine replication) permite recuperación instantánea.
- 2-a: El multicast atómico es crucial para que todas las réplicas mantengan el mismo estado.
- 3-d: La consistencia de archivos requiere relojes sincronizados (ej. algoritmo de Lamport).
- 4-b: La votación se usa en tolerancia a fallas Bizantinas (traidores).
  **Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

##### Nivel Satisfactorio Checklist

- [ ] Explicar con tus propias palabras todos los conceptos del glosario
- [ ] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio (85%)
- [ ] Identificar las aplicaciones prácticas de los conceptos (RPC, Middleware)
- [ ] Distinguir entre multiprocesador y multicomputadora
- [ ] Entender la diferencia entre hilo y proceso

##### Nivel Sobresaliente Checklist

- [ ] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%)
- [ ] Lograr al menos 21/25 reactivos correctos en total (84%)
- [ ] Analizar escenarios complejos que integren múltiples conceptos (Fallas + Réplica + Sincronización)
- [ ] Relacionar este subtema con otros del EGEL (Redes y Sistemas Operativos)
- [ ] Explicar el funcionamiento detallado de RPC y sus modos de falla
- [ ] Diferenciar los modelos de consistencia de memoria

---

#### 📌 Notas y Observaciones Personales

[Espacio para agregar notas durante el estudio]

---

#### 🔄 Última revisión

**Fecha:** [DD/MM/YYYY]
**Estado:** [ ] Por estudiar | [ ] En progreso | [ ] Revisado | [ ] Dominado
**Puntuación en cuestionario:** **_/25 (_** %)
**Desglose:** Satisfactorio _/13 | Sobresaliente _/12

---

#### 📚 Referencias

- Tanenbaum, A. S. _Sistemas Operativos Distribuidos_.
- Tanenbaum, A. S. _Sistemas Operativos Modernos_.
- Stallings, W. _Sistemas Operativos_.
- [Descriptores EGEL Plus COMPU]
