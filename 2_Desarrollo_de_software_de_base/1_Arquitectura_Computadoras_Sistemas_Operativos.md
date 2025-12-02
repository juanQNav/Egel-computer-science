<!-- line-width:1000 -->
<!-- format:off -->

### [2.1] Arquitectura de Computadoras y Sistemas Operativos

**Área:** [Desarrollo de Software de Base]
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

La Arquitectura de Computadoras y los Sistemas Operativos (SO) constituyen los fundamentos del desarrollo de software de base. Esta área abarca la comprensión del hardware central, específicamente la arquitectura de Von Neumann, donde las instrucciones y los datos se almacenan de manera similar y se procesan mediante un ciclo secuencial de etapas. En el ámbito del software, se estudia el proceso de compilación, que transforma el código fuente en un programa de destino equivalente semánticamente, pasando por fases de análisis y síntesis.

Además, el estudio incluye los principios esenciales de los Sistemas Operativos, como la diferenciación entre los modelos de gestión de procesos (listo, ejecutando, bloqueado) y el manejo de memoria (por ejemplo, mediante paginación). Un conocimiento sólido en esta subárea permite valorar las etapas de procesamiento, la optimización del código generado y el impacto de los tipos de SO y de arquitectura en el rendimiento final del software.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [ ] Analizar la arquitectura de Von Neumann y sus elementos.
- [ ] Diferenciar la gestión de procesos y el manejo de memoria.
- [ ] Establecer algunas de las fases del desarrollo de un compilador (análisis léxico, sintáctico, semántico, código intermedio).
- [ ] Valorar las etapas del procesamiento secuencial y los tipos de sistemas operativos.

##### Nivel Sobresaliente

- [ ] Aplicar las tareas primarias del generador de código (selección de instrucciones, asignación de registros y ordenamiento) para optimizar el código.
- [ ] Diferenciar la creación de tareas deferidas e indeferidas en modelos de paralelismo (e.g., OpenMP) y su impacto en la concurrencia.
- [ ] Relacionar las jerarquías de lenguajes formales (expresiones regulares, autómatas finitos y de pila, Máquinas de Turing) con las capacidades de las fases del compilador.

---

#### 📚 Contenido Teórico

##### 1. Arquitectura de Von Neumann y Procesamiento de Instrucciones

**Definición:** La arquitectura de Von Neumann es un modelo fundamental de diseño de computadoras en el que las instrucciones y los datos se almacenan en la misma memoria, codificados como secuencias de bits.

**Explicación:** La instrucción es la unidad fundamental de trabajo y especifica dos cosas: un código de operación (opcode) y los operandos (datos/ubicaciones) a utilizar. La Unidad de Control interpreta la instrucción y genera una secuencia de señales para llevar a cabo la operación, asegurando que esta se ejecute completamente o no se ejecute en absoluto. Un conjunto de instrucciones y sus formatos se conoce como Arquitectura del Conjunto de Instrucciones (ISA). Por ejemplo, LC-3 tiene instrucciones de 16 bits y ocho registros para almacenamiento temporal.

**Aspectos clave (Ciclo de Instrucción Secuencial):**

- **Fetch Operands (Obtener Operandos):** Se obtienen los operandos fuente necesarios para la operación, lo que puede implicar cargar datos desde memoria o leer datos del archivo de registros.
- **Execute (Ejecutar):** Se realiza la operación utilizando los operandos fuente, por ejemplo, enviándolos a la Unidad Aritmético Lógica (ALU).
- **Store Result (Almacenar Resultado):** Se escriben los resultados en el destino, que puede ser un registro o una ubicación de memoria.

**Aplicaciones prácticas:** El diseño del _backend_ de un compilador debe generar código que haga un uso efectivo de los recursos disponibles en la máquina destino. Esto requiere generar instrucciones optimizadas que se alineen con la ISA específica (ej. LC-3).

##### 2. Fases de Compilación

**Definición:** Un compilador es un programa que traduce un programa fuente a un programa de destino semánticamente equivalente, abarcando dos partes principales: análisis y síntesis.

**Explicación:** La fase frontal (_front end_) del compilador construye una representación intermedia (IR) del programa fuente. La fase final es el Generador de Código, que toma esta IR, junto con la información de la tabla de símbolos, para producir el programa de destino.

**Aspectos clave (Fases):**

- **Análisis Léxico:** Agrupa caracteres en secuencias significativas llamadas lexemas y produce _tokens_ de la forma $\langle nombre-token; valor-atributo \rangle$ para el análisis sintáctico.
- **Análisis Sintáctico:** Utiliza los _tokens_.
- **Generación de Código Intermedio:** Produce una representación intermedia, como el código de tres direcciones, donde a lo sumo hay un operador en el lado derecho de una instrucción.
- **Generación de Código:** La fase final, con las tareas de selección de instrucciones, asignación de registros y ordenamiento de instrucciones.

**Aplicaciones prácticas:** La generación de código de tres direcciones es crucial para las optimizaciones posteriores, ya que permite la traducción de una expresión compleja (como $x+y*z$) en una secuencia de instrucciones simples.

##### 3. Sistemas Operativos: Gestión de Procesos y Memoria

**Definición:** Los Sistemas Operativos (SO) gestionan los recursos de hardware. En este contexto, la gestión de procesos y el manejo de memoria son dos funciones fundamentales.

**Explicación (Gestión de Procesos):** Un proceso (o hilo) puede existir en varios estados: listo, ejecutando o bloqueado. Cuando se crea una nueva tarea (por ejemplo, con la directiva OpenMP `task`), puede ejecutarse inmediatamente o ser diferida.

- Una tarea diferida permite que la ejecución de la tarea creadora continúe sin demora.
- Una tarea indeferida (creada si la cláusula `if` es falsa) suspende la tarea creadora hasta que la tarea creada finaliza.

**Explicación (Manejo de Memoria):** La paginación es un método de manejo de memoria donde la memoria principal se divide en marcos (fragmentos pequeños de tamaño fijo).

- El SO debe mantener una tabla de páginas para cada proceso.
- El procesador utiliza el número de página y el desplazamiento para calcular direcciones absolutas.
- No es necesario que todas las páginas del proceso se encuentren en la memoria principal para que se ejecute; las páginas se pueden leer bajo demanda, un concepto crucial para la eficiencia.

**Aplicaciones prácticas:** La asignación de tareas en plataformas paralelas (como OpenMP) requiere decidir cuántos procesadores son óptimos para una tarea y qué metodología de paralelización proporciona los mejores resultados, preguntas clave en la eficiencia del sistema.

---

#### 📖 Glosario de Términos

| Término             | Definición                                                                                                                                       | Contexto de uso                                                    |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| **Opcode**          | Parte de una instrucción que especifica la operación a realizar.                                                                                 | Arquitectura de Von Neumann (ISA).                                 |
| **ISA**             | Arquitectura del Conjunto de Instrucciones; define las instrucciones de una computadora y sus formatos.                                          | Diseño de hardware y optimización de código.                       |
| **Lexema**          | Secuencia significativa de caracteres en el código fuente.                                                                                       | Análisis Léxico, donde se agrupan caracteres para formar _tokens_. |
| **Token**           | Unidad producida por el analizador léxico, contiene el nombre del token y un valor de atributo ($\langle nombre-token; valor-atributo \rangle$). | Comunicación entre el analizador léxico y el sintáctico.           |
| **IR**              | Representación Intermedia; forma del programa generada por la fase frontal del compilador, usada por el _backend_.                               | Generación de código intermedio, optimización.                     |
| **Paginación**      | Método de manejo de memoria que divide la memoria principal en marcos de tamaño fijo.                                                            | Sistemas Operativos, manejo de memoria virtual.                    |
| **Tarea diferida**  | Una tarea creada que permite que la tarea creadora continúe su ejecución sin esperar a que la nueva tarea finalice.                              | Programación paralela (e.g., directiva OpenMP `task`).             |
| **Antidependencia** | Ocurre cuando hay una escritura después de una lectura a la misma ubicación.                                                                     | Ordenamiento de instrucciones y optimización de código.            |

---

#### 🔗 Relaciones con Otros Subtemas

- **1.3 Matemáticas discretas:** El análisis de algoritmos se basa en conceptos de matemáticas discretas como teoría de conjuntos, funciones y técnicas de prueba (inducción matemática, contradicción).
- **1.4 Lógica computacional:** La lógica proposicional, el álgebra de Boole y los circuitos digitales son temas importantes de esta subárea. El álgebra de Boole es crucial para la lógica combinacional, que se aplica en el diseño de hardware y en la arquitectura de computadoras.
- **1.1 Análisis y diseño de algoritmos:** El análisis de complejidad de los algoritmos (e.g., notación $\Theta$) es fundamental para medir la eficiencia del código generado por el compilador y para la toma de decisiones en el ordenamiento de instrucciones.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente

1.  **Optimización del _Backend_ del Compilador: Selección y Ordenamiento de Instrucciones**

    - **Explicación detallada:** El generador de código tiene tres tareas principales: selección de instrucciones, asignación de registros y ordenamiento de instrucciones. La asignación de registros es crítica; si un valor de variable en un registro no se usará, el registro puede reasignarse. Para generar buen código, es esencial conocer el próximo uso de un valor. El ordenamiento debe respetar las dependencias de datos: las dependencias verdaderas (escritura seguida de lectura) no pueden eliminarse, pero las antidependencias (escritura después de lectura) y las dependencias de salida (dos escrituras) pueden eliminarse usando ubicaciones adicionales.
    - **Por qué es importante para Sobresaliente:** Requiere aplicar principios de la arquitectura (uso de registros, tipos de dependencia) al diseño del software de base, integrando el conocimiento del hardware con el proceso de síntesis del compilador.

2.  **Manejo Avanzado de Memoria y Concurrencia en SO**
    - **Explicación detallada:** Aunque la paginación básica asegura que todas las páginas deben estar en memoria principal para que el proceso se ejecute, los sistemas modernos operan con _demand paging_, donde no es necesario tener todas las páginas del proceso en memoria principal; se leen bajo demanda. Además, en entornos paralelos, el comportamiento de las tareas (diferidas vs. indeferidas) impacta la eficiencia y el control: las tareas deferidas permiten continuar la ejecución, mientras que las indeferidas (por la cláusula `if` en OpenMP) suspenden la tarea creadora hasta que la nueva finaliza.
    - **Por qué es importante para Sobresaliente:** Implica la diferenciación entre conceptos básicos de SO y técnicas avanzadas de optimización y concurrencia. La comprensión de OpenMP `task` con cláusulas como `if` ejemplifica cómo las decisiones de programación afectan la gestión de procesos a nivel del SO.

---

##### Reactivos de Cuestionamiento Directo

###### Nivel Satisfactorio (1-4)

###### Reactivo 1

¿Cuál es el propósito principal del Analizador Léxico en las fases de desarrollo de un compilador, según la estructura tradicional de análisis y síntesis?

A) Generar código de máquina optimizado utilizando asignación de registros.

B) Agrupar caracteres individuales en unidades significativas llamadas lexemas y producir tokens.

C) Determinar si las sentencias fuente cumplen con las reglas gramaticales de la sintaxis.

**Respuesta correcta:** B
**Justificación:** El analizador léxico toma los caracteres de entrada y los agrupa en secuencias significativas (lexemas), produciendo como salida tokens que pasan a la fase de análisis sintáctico.
**Nivel:** Satisfactorio

###### Reactivo 2

En la arquitectura de Von Neumann, ¿qué componente de la instrucción es responsable de indicar la acción a realizar?

A) El operando, que contiene la dirección de memoria.

B) El código de operación (opcode), que especifica la operación.

C) El registro R0-R7, utilizado para almacenamiento temporal.

**Respuesta correcta:** B
**Justificación:** La instrucción especifica dos cosas: el código de operación (opcode), que es la operación a realizar, y los operandos (datos/ubicaciones) a usar para la operación.
**Nivel:** Satisfactorio

###### Reactivo 3

Si un proceso en un Sistema Operativo no necesita que todas sus páginas se encuentren en la memoria principal para poder ejecutarse, ¿a qué técnica avanzada de manejo de memoria se refiere este comportamiento?

A) Particionamiento estático.

B) Paginación bajo demanda (demand paging).

C) Uso de overlays (superposiciones) únicamente.

**Respuesta correcta:** B
**Justificación:** En este modelo avanzado de paginación, las páginas se pueden leer bajo demanda, lo que significa que no se requiere mantener todas las páginas del proceso en los marcos de la memoria principal para que el proceso se ejecute.
**Nivel:** Satisfactorio

###### Reactivo 4

¿Qué define la Arquitectura del Conjunto de Instrucciones (ISA) de una computadora?

A) El tamaño de la memoria principal y el tipo de bus de datos.

B) Las instrucciones de la computadora y sus formatos.

C) La capacidad de generar nuevas tareas paralelas (tasks).

**Respuesta correcta:** B
**Justificación:** La ISA es el nombre dado a las instrucciones de una computadora y sus formatos.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

Durante la fase de Generación de Código, se identifican las siguientes operaciones: $X=A+B$, $A=C*D$. Si $A$ está viva a la salida del bloque, ¿qué tipo de dependencia debe respetarse estrictamente para evitar errores, y cuál es la única que no puede ser eliminada?

A) Antidependencia; puede eliminarse usando ubicaciones adicionales.

B) Dependencia de salida; puede eliminarse usando ubicaciones adicionales.

C) Dependencia verdadera (true dependence); no puede eliminarse y debe ser respetada.

**Respuesta correcta:** C
**Justificación:** Las dependencias verdaderas (true data dependences) ocurren cuando una instrucción debe leer una ubicación después de que otra ha escrito en ella. Son las únicas que no pueden eliminarse y deben ser respetadas al ordenar el código. En este caso, $A=C*D$ es una escritura, y la anterior $X=A+B$ es una lectura de $A$ (si $A$ ya tenía un valor antes de este bloque, hay una antidependencia. Pero el Sobresaliente requiere identificar la _verdadera_ restricción: la dependencia verdadera. En un caso de $Y=X; X=Z$, hay una dependencia verdadera de la primera a la segunda instrucción si se reordena). La dependencia verdadera es la fundamental para respetar.
**Nivel:** Sobresaliente

###### Reactivo 6

En un entorno de programación paralela utilizando OpenMP, un hilo maestro crea una tarea (`#pragma omp task`) y desea que la ejecución del hilo maestro se suspenda hasta que la tarea creada finalice. ¿Qué cláusula debe aplicarse a la directiva `task` para asegurar este comportamiento?

A) `final(true)` para incluir el bloque estructurado en la tarea.

B) `if(false)` para crear una tarea indeferida.

C) `shared(variable)` para evitar una condición de carrera.

**Respuesta correcta:** B
**Justificación:** Si `scalar-logical-expression` en la cláusula `if` se evalúa como falso, se crea una tarea indeferida (undeferred task). Una tarea indeferida suspende la tarea creadora hasta que la tarea creada finaliza.
**Nivel:** Sobresaliente

###### Reactivo 7

La generación de código implica la conversión de una expresión aritmética compleja en **código de tres direcciones**. ¿Cuál es la característica principal de una instrucción en código de tres direcciones que facilita el proceso de optimización?

A) Utiliza únicamente variables temporales para todos sus operandos.

B) Permite a lo sumo un operador en el lado derecho de la instrucción.

C) Está escrito en lenguaje ensamblador para la máquina de destino.

**Respuesta correcta:** B
**Justificación:** En código de tres direcciones, solo se permite a lo sumo un operador en el lado derecho de una instrucción, lo que significa que no se permiten expresiones aritméticas construidas (built-up arithmetic expressions).
**Nivel:** Sobresaliente

###### Reactivo 8

El Analizador Léxico utiliza la teoría de las \***\*\_\_\*\***, mientras que el Análisis Sintáctico se fundamenta en las \***\*\_\_\*\***, como las Gramáticas Libres de Contexto (CFG).

A) Expresiones Regulares / Gramáticas Formales.

B) Máquinas de Turing / Lógica de Predicados.

C) Semántica Operacional / Álgebra de Boole.

**Respuesta correcta:** A
**Justificación:** El análisis léxico utiliza a menudo expresiones regulares (regex). Las gramáticas libres de contexto (CFG) son útiles para tratar algunos aspectos del lenguaje natural y de la sintaxis.
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

Complete la secuencia del ciclo de procesamiento de una instrucción en la arquitectura de Von Neumann:

1. El registro de instrucción es cargado con la próxima instrucción.
2. Obtener operandos (FETCH OPERANDS).
3. \***\*\_\_\*\***.
4. Almacenar el resultado (STORE RESULT).

El/Los elemento(s) que completa(n) correctamente el planteamiento es/son...

A) Escribir en memoria principal (WRITE).

B) Ejecutar la operación (EXECUTE).

C) Inicializar la Unidad Aritmético Lógica (ALU).

**Respuesta correcta:** B
**Justificación:** Los pasos del procesamiento de instrucciones incluyen Obtener Operandos, Ejecutar (perform the operation) y Almacenar Resultado.
**Nivel:** Satisfactorio

###### Reactivo 10

El analizador léxico produce un _token_ que pasa a la fase de análisis sintáctico. Este _token_ se representa generalmente como una tupla: $\langle \text{nombre-token}; \text{valor-atributo} \rangle$, donde el componente $\text{valor-atributo}$ apunta a una entrada en la \***\*\_\_\*\***.

A) Representación intermedia (IR).

B) Tabla de símbolos.

C) Cola de ejecución.

**Respuesta correcta:** B
**Justificación:** El componente valor-atributo del token apunta a una entrada en la tabla de símbolos para dicho token, información necesaria para el análisis semántico y la generación de código.
**Nivel:** Satisfactorio

###### Reactivo 11

En la gestión de procesos, cuando una tarea es creada con la directiva OpenMP `#pragma omp task`, por defecto, la ejecución de la tarea que la creó \***\*\_\_\*\***.

A) se suspende hasta que la tarea creada finalice.

B) continúa sin demora.

C) se transfiere a otro hilo del equipo.

**Respuesta correcta:** B
**Justificación:** Cuando se crea una nueva tarea, la ejecución de la tarea que la creó continúa sin demora.
**Nivel:** Satisfactorio

###### Reactivo 12

En el manejo de memoria por paginación, el Sistema Operativo debe mantener una \***\*\_\*\*** por cada proceso para mostrar el marco donde se encuentra cada página ocupada, mientras que el procesador utiliza el número de página y el desplazamiento para calcular direcciones absolutas.

A) lista de marcos libres.

B) tabla de páginas.

C) tabla de descriptores de registros.

**Respuesta correcta:** B
**Justificación:** El sistema operativo debe mantener una tabla de páginas por cada proceso para el esquema de paginación. El procesador usa el número de página y el desplazamiento.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

Complete la descripción del proceso de abstracción que subyace a la teoría de la computación:
El proceso de abstracción es inherentemente matemático. Implica construir modelos que capturan el comportamiento observado de la manera más simple posible, concentrando la atención en los principios importantes y despojándolos de los detalles no importantes. Cuando se estudian fenómenos del mundo real, se identifican patrones recurrentes que sugieren la construcción de un modelo abstracto para capturar esos \***\*\_\_\*\***, lo cual constituye la esencia del progreso científico.

A) sistemas de entrada/salida y jerarquías de memoria.

B) principios subyacentes comunes.

C) lenguajes de programación imperativos.

**Respuesta correcta:** B
**Justificación:** La abstracción implica construir un modelo abstracto que captura los principios subyacentes comunes de los patrones recurrentes en fenómenos del mundo real, despojándose de los detalles irrelevantes.
**Nivel:** Sobresaliente

###### Reactivo 14

Considere las siguientes instrucciones de código de tres direcciones:

1. `T1 = X + Y`
2. `X = Z * W`
3. `T2 = X + 5`
   La dependencia de datos entre la instrucción 2 y la instrucción 3 es de tipo \***\*\_\_\*\***, porque la instrucción 3 debe leer el valor de $X$ después de que la instrucción 2 lo ha \***\*\_\_\*\***.
   A) Antidependencia / leído.
   B) Dependencia de salida / escrito.
   C) Dependencia verdadera / escrito.
   **Respuesta correcta:** C
   **Justificación:** La instrucción 2 escribe en X, y la instrucción 3 lee X. Esto es una dependencia verdadera (True Dependence) o dependencia de flujo (write-read), y ocurre cuando una instrucción debe leer una ubicación después de que otra ha escrito en ella.
   **Nivel:** Sobresaliente

###### Reactivo 15

En la Generación de Código, si se genera la instrucción `ADD Rx; Ry; Rz` que implementa $x = y + z$, y se actualizan los descriptores, el descriptor de registro para $Rx$ se modifica para que solo contenga $x$. En este punto, la ubicación de memoria para $x$ en el descriptor de direcciones \***\*\_\_\*\***, indicando que el valor más actualizado de $x$ está solo en el registro.

A) se mantiene para garantizar el acceso a la memoria.

B) no se incluye.

C) se actualiza con el nombre de $Rx$.

**Respuesta correcta:** B
**Justificación:** Al procesar la operación, se cambia el descriptor de direcciones para $x$ de modo que su única ubicación sea $Rx$, y se observa que la ubicación de memoria para $x$ _no está_ en el descriptor de direcciones, porque el valor en memoria no está actualizado.
**Nivel:** Sobresaliente

###### Reactivo 16

Un sistema operativo utiliza OpenCL para optimizar el rendimiento de la multiplicación de matrices. Un ingeniero modifica el kernel para que cada _work-item_ copie su propia fila de la matriz $\mathbf{A}$ en la memoria local. El objetivo principal de usar memoria local en este contexto es:

A) Minimizar los costos de movimiento de memoria para optimizar el rendimiento.

B) Reducir el número de registros necesarios para la operación.

C) Asegurar que la matriz $\mathbf{A}$ esté en orden de fila mayor.

**Respuesta correcta:** A
**Justificación:** El uso de memoria local (local memory) se recomienda para minimizar los costos de movimiento de memoria (memory movement costs) y optimizar el rendimiento.
**Nivel:** Sobresaliente

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione la fase del compilador con su función principal.
**Fase del Compilador (Conjunto A)**

1. Análisis Léxico
2. Análisis Sintáctico
3. Generación de Código Intermedio
4. Generación de Código
   **Función Principal (Conjunto B)**
   a) Produce la representación final del programa de destino.
   b) Agrupa caracteres en lexemas y emite tokens.
   c) Recibe tokens y construye una representación de la jerarquía.
   d) Produce código de tres direcciones.
   e) Realiza la selección y asignación de registros.
   A) 1b, 2c, 3d, 4a
   B) 1a, 2b, 3c, 4d
   C) 1b, 2c, 3a, 4d
   **Respuesta correcta:** A
   **Justificación:** 1. Análisis Léxico (b: Agrupa caracteres en lexemas y emite tokens). 2. Análisis Sintáctico (c: Construye una representación de la jerarquía o árbol sintáctico usando tokens). 3. Generación de Código Intermedio (d: Produce código de tres direcciones). 4. Generación de Código (a: Produce la representación final del programa de destino).
   **Nivel:** Satisfactorio

###### Reactivo 18

Relacione el concepto de programación paralela con su descripción.
**Concepto (Conjunto A)**

1. Tarea (OpenMP Task)
2. Tarea Indeferida
3. Tarea Diferida
4. OpenMP `if(false)`
   **Descripción (Conjunto B)**
   a) Provoca que la tarea creada suspenda a la tarea creadora hasta que finalice.
   b) Puede ejecutarse inmediatamente o ser pospuesta, permitiendo a la tarea creadora continuar sin demora.
   c) Se crea cuando la expresión lógica en el `if` es falsa.
   d) Es el código que se ejecuta como una única unidad de trabajo.
   e) Se crea cuando la expresión lógica en el `if` es verdadera.
   A) 1d, 2c, 3b, 4a
   B) 1d, 2a, 3b, 4c
   C) 1b, 2c, 3d, 4a
   **Respuesta correcta:** B
   **Justificación:** 1. Tarea (d: Es el código que se ejecuta como una única unidad de trabajo). 2. Tarea Indeferida (a: Provoca que la tarea creada suspenda a la tarea creadora hasta que finalice). 3. Tarea Diferida (b: Puede ejecutarse inmediatamente o ser pospuesta, permitiendo a la tarea creadora continuar sin demora). 4. OpenMP `if(false)` (c: Se crea cuando la expresión lógica en el `if` es falsa, resultando en una tarea indeferida).
   **Nivel:** Satisfactorio

###### Reactivo 19

Relacione los elementos de la arquitectura de Von Neumann con su función en el ciclo de instrucción.
**Elemento/Fase (Conjunto A)**

1. Opcode
2. Operando
3. Fase EXECUTE
4. Fase STORE RESULT
   **Función (Conjunto B)**
   a) Específica la ubicación o dato a utilizar en la operación.
   b) Implica escribir resultados en el registro o la memoria.
   c) Especifica la operación a realizar.
   d) Se obtienen los operandos fuente.
   e) Implica enviar operandos a la ALU y realizar la operación.
   A) 1c, 2a, 3e, 4b
   B) 1a, 2c, 3d, 4e
   C) 1c, 2a, 3d, 4b
   **Respuesta correcta:** A
   **Justificación:** 1. Opcode (c: Especifica la operación a realizar). 2. Operando (a: Específica la ubicación o dato a utilizar en la operación). 3. Fase EXECUTE (e: Implica enviar operandos a la ALU y realizar la operación). 4. Fase STORE RESULT (b: Implica escribir resultados en el registro o la memoria).
   **Nivel:** Satisfactorio

###### Reactivo 20

Relacione los conceptos de gestión de procesos y hilos con su estado o propiedad.
**Concepto (Conjunto A)**

1. Hilo
2. Proceso
3. Estado BLOQUEADO
4. Tarea Creada
   **Propiedad (Conjunto B)**
   a) Secuencia de ejecución que tiene vida propia una vez generada.
   b) Estado en el que la tarea está lista, pero no se está ejecutando actualmente.
   c) Unidad de ejecución que puede estar en estado LISTO o EJECUTANDO.
   d) Estado que requiere esperar un evento de E/S.
   e) Es un objeto mutable dentro de una clase.
   A) 1c, 2c, 3d, 4a
   B) 1c, 2d, 3b, 4a
   C) 1a, 2c, 3d, 4b
   **Respuesta correcta:** A
   **Justificación:** 1. Hilo (c: Unidad de ejecución que puede estar en estado LISTO o EJECUTANDO). 2. Proceso (c: Unidad de ejecución que puede estar en estado LISTO o EJECUTANDO). 3. Estado BLOQUEADO (d: Estado que requiere esperar un evento de E/S). 4. Tarea Creada (a: Secuencia de ejecución que tiene vida propia una vez generada, si es deferida).
   **Nivel:** Satisfactorio

###### Reactivo 21

Relacione la fase del compilador con el tipo de resultado que produce.
**Fase (Conjunto A)**

1. Análisis Léxico
2. Generación de Código Intermedio
3. Generación de Código
4. Análisis Semántico (requiere)
   **Resultado / Requisito (Conjunto B)**
   a) Representación intermedia, como código de tres direcciones.
   b) Código ensamblador o código máquina ejecutable.
   c) Tokens ($\langle token, atributo \rangle$).
   d) Información de la tabla de símbolos.
   e) Árbol de sintaxis abstracto.
   A) 1c, 2d, 3b, 4e
   B) 1c, 2a, 3b, 4d
   C) 1d, 2a, 3c, 4b
   **Respuesta correcta:** B
   **Justificación:** 1. Análisis Léxico (c: Tokens). 2. Generación de Código Intermedio (a: Código de tres direcciones). 3. Generación de Código (b: Código ensamblador/máquina). 4. Análisis Semántico (d: Necesita información de la tabla de símbolos para la generación de código y chequeo de tipos).
   **Nivel:** Satisfactorio

###### Reactivos de Relación de Elementos

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Relacione el tipo de dependencia con la acción requerida para asegurar la correcta ejecución en el _backend_ de un compilador.
**Tipo de Dependencia (Conjunto A)**

1. Dependencia Verdadera (True Dependence)
2. Antidependencia (Anti-dependence)
3. Dependencia de Salida (Output Dependence)
   **Acción Requerida (Conjunto B)**
   a) Debe ser estrictamente respetada mediante el ordenamiento; no se puede eliminar.
   b) Puede eliminarse si se utilizan ubicaciones adicionales para almacenar datos.
   c) Ocurre cuando una instrucción debe leer una ubicación después de que otra ha escrito en ella.
   d) Ocurre cuando hay una escritura después de una lectura a la misma ubicación.
   e) Ocurre cuando hay dos escrituras en la misma ubicación.
   A) 1c, 2d, 3e
   B) 1a, 2b, 3b
   C) 1a, 2d, 3e
   **Respuesta correcta:** B
   **Justificación:** 1. Dependencia Verdadera (a: Debe ser estrictamente respetada). 2. Antidependencia (b: Puede eliminarse usando ubicaciones adicionales, ocurre cuando hay una escritura después de una lectura). 3. Dependencia de Salida (b: Puede eliminarse usando ubicaciones adicionales, ocurre cuando hay dos escrituras en la misma ubicación). La opción B es la más precisa al indicar las acciones requeridas: la Dependencia Verdadera _debe ser respetada_ (1a) y las otras dos _pueden ser eliminadas_ (2b, 3b).
   **Nivel:** Sobresaliente

###### Reactivo 23

Relacione el concepto de manejo de memoria con el rol que desempeña el Sistema Operativo o el _hardware_ en el esquema de paginación.
**Concepto de Paginación (Conjunto A)**

1. Memoria Principal
2. Procesador
3. Sistema Operativo
4. Marcos (Frames)
   **Rol o Característica (Conjunto B)**
   a) Utiliza número de página y desplazamiento para calcular la dirección absoluta.
   b) Mantiene una tabla de páginas para cada proceso en ejecución.
   c) Está particionada en fragmentos pequeños de tamaño fijo.
   d) Contiene las páginas del proceso bajo demanda.
   e) Genera una representación intermedia.
   A) 1d, 2a, 3b, 4c
   B) 1c, 2b, 3a, 4d
   C) 1d, 2c, 3b, 4a
   **Respuesta correcta:** A
   **Justificación:** 1. Memoria Principal (d: Contiene las páginas del proceso bajo demanda). 2. Procesador (a: Utiliza número de página y desplazamiento para calcular la dirección absoluta). 3. Sistema Operativo (b: Mantiene una tabla de páginas por proceso). 4. Marcos (c: Fragmentos pequeños de tamaño fijo en la memoria principal).
   **Nivel:** Sobresaliente

###### Reactivo 24

Relacione la fase de procesamiento de una instrucción en Von Neumann con la acción específica que involucra el hardware.
**Fase (Conjunto A)**

1. FETCH OPERANDS
2. EXECUTE
3. STORE RESULT
   **Acción Específica (Conjunto B)**
   a) Colocar el resultado de un ADD en el registro destino.
   b) Enviar operandos a la ALU y afirmar la señal ADD.
   c) Leer datos del archivo de registros o cargar datos de memoria.
   d) La unidad de control interpreta el opcode.
   e) Escribir la dirección en MAR, el dato en MDR, y afirmar la señal WRITE a la memoria.
   A) 1c, 2b, 3a y 3e
   B) 1d, 2b, 3a
   C) 1c, 2e, 3a
   **Respuesta correcta:** A
   **Justificación:** 1. FETCH OPERANDS (c: Leer datos del registro o cargar datos de memoria). 2. EXECUTE (b: Enviar a la ALU y afirmar ADD). 3. STORE RESULT (a y e: Colocar el resultado en el registro destino O escribir la dirección/dato en MAR/MDR y afirmar WRITE a la memoria). Como la opción A lista dos posibles resultados válidos de STORE RESULT (registro) y las otras relaciones son correctas, es la mejor respuesta.
   **Nivel:** Sobresaliente

###### Reactivo 25

Relacione el concepto de lenguaje formal con la fase del compilador que lo utiliza.
**Concepto (Conjunto A)**

1. Expresiones Regulares
2. Gramáticas Libres de Contexto (CFG)
3. Máquinas de Turing
   **Fase/Teoría de Computación (Conjunto B)**
   a) Fundamentos del Análisis Sintáctico.
   b) Límite teórico de la computabilidad (para todo el compilador).
   c) Base del Análisis Léxico.
   d) Tareas de Generación de Código.
   e) Optimización de código intermedio.
   A) 1c, 2a, 3b
   B) 1a, 2c, 3d
   C) 1c, 2b, 3a
   **Respuesta correcta:** A
   **Justificación:** 1. Expresiones Regulares (c: Las expresiones regulares se utilizan en el Análisis Léxico (Lex), son la base de los lenguajes regulares). 2. Gramáticas Libres de Contexto (a: Se utilizan para estructurar el lenguaje, fundamentales para el análisis sintáctico). 3. Máquinas de Turing (b: Representan el límite teórico de la computación).
   **Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

Antes de continuar al siguiente subtema, verifica que puedas:

##### Nivel Satisfactorio Checklist

- [ ] Explicar con tus propias palabras todos los conceptos del glosario
- [ ] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio (85%)
- [ ] Identificar las aplicaciones prácticas de los conceptos
- [ ] **[Habilidad específica 1]** Describir las fases principales de la compilación (léxico, intermedio, código).
- [ ] **[Habilidad específica 2]** Explicar el ciclo básico de una instrucción Von Neumann (Fetch Operands, Execute, Store Result).

##### Nivel Sobresaliente Checklist

- [ ] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%)
- [ ] Lograr al menos 21/25 reactivos correctos en total (84%)
- [ ] Analizar escenarios complejos que integren múltiples conceptos
- [ ] Relacionar este subtema con otros del EGEL
- [ ] **[Habilidad avanzada específica 1]** Identificar y resolver los tipos de dependencias de datos (verdadera, anti, salida) en el reordenamiento de instrucciones.
- [ ] **[Habilidad avanzada específica 2]** Determinar el impacto de las cláusulas OpenMP `task` (deferida vs. indeferida) en la concurrencia del sistema operativo.

---

#### 📌 Notas y Observaciones Personales

[Espacio para agregar notas durante el estudio]

---

#### 🔄 Última revisión

**Fecha:** [DD/MM/YYYY]
**Estado:** [ ] Por estudiar | [ ] En progreso | [ ] Revisado | [ ] Dominado
**Puntuación en cuestionario:** **_/25 (_** %)
**Desglose:** Satisfactorio **_/13 | Sobresaliente _**/12

---

#### 📚 Referencias

- Excerpts from "1.4 Logica Computacional.pdf"
- Excerpts from "1997_Book_AutomataAndComputability.pdf"
- Excerpts from "Compiladores - Principios, tecnicas y herramientas.pdf"
- Excerpts from "Compilers - Principles, Techniques, and Tools-Pearson(2006).pdf"
- Excerpts from "Foundations of Algorithms - Richard E. Neapolitan.pdf"
- Excerpts from "Fundamentos de Algoritmia - Bradley.pdf"
- Excerpts from "Introduction to Automata Theory Languages and Computation.pdf"
- Excerpts from "Introduction to the theory of computation_third edition - Michael Sipser.pdf"
- Excerpts from "Matemáticas para la computación - José A. Jiménez Murillo.pdf"
- Excerpts from "Sistemas Operativos Modernos - Andrew S. Tanenbaum - 3ra Edicion.pdf"
- Excerpts from "Sistemas Operativos William Stallings.pdf"
- Excerpts from "Subtema_Actual_ACSOP.md"
- Excerpts from "VonNeumann_Model.pdf"
- Excerpts from "2018_Book_IntroductionToParallelComputin.pdf"
- Guía para el sustentante EGEL Plus COMPU
