<!-- line-width:1000 -->
<!-- format:off -->

### 1.4 Lógica computacional

**Área:** Algoritmia
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

La Lógica Computacional abarca el uso de herramientas lógicas (proposicional, de primer orden, y álgebra de Boole) para el análisis, diseño e integración de sistemas y algoritmos. Es fundamental para comprender la naturaleza de la computación, desde los principios básicos que interpretan "SÍ-NO" o "VERDADERO-FALSO" en la informática, hasta el estudio de la viabilidad y complejidad de los problemas.

El dominio de este subtema implica la aplicación práctica de conceptos discretos (como la teoría de conjuntos y las estructuras) en el contexto de la lógica, permitiendo la formulación de problemas y la construcción de modelos formales. Además, requiere la comprensión de modelos abstractos de la computación, como las Máquinas de Turing y los Autómatas, y la clasificación de problemas según su **tractabilidad** (si pueden resolverse en tiempo razonable) e **intractabilidad** (crecimiento exponencial). El nivel Sobresaliente exige la integración de estos elementos para resolver problemas complejos.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [x] Aplicar los conceptos básicos de la lógica proposicional y de primer orden.
- [x] Analizar el Álgebra de Boole y su aplicación en el diseño de circuitos lógicos.
- [x] Definir los componentes de modelos formales simples, como el Autómata Finito (FA).

##### Nivel Sobresaliente

- [x] Valorar la integración de los elementos de lógica computacional y matemáticas discretas para la solución de problemas en diversos ámbitos.
- [x] Clasificar problemas de computación basándose en conceptos de complejidad teórica, como la tractabilidad y las jerarquías de reducibilidad.
- [x] Determinar el comportamiento de modelos de computación avanzados, como la Máquina de Turing, para problemas de decidibilidad y completitud.

---

#### 📚 Contenido Teórico

##### 1. Fundamentos de Lógica (Proposicional y de Primer Orden)

**Definición:** La Lógica de Primer Orden (FOL, por sus siglas en inglés) permite representar categorías usando **predicados** o **reificando** la categoría como un objeto. Un ejemplo de representación lógica es el **Completion** (terminación de una ecuación), que puede expresar la idea de que hay _a lo sumo_ una cierta cantidad de elementos.

**Explicación:** La lógica es una parte del contenido de la página web de apoyo a las Matemáticas para la Computación. Los dos elementos del campo de la lógica matemática a menudo se interpretan como "SÍ-NO", "VERDADERO-FALSO" o "SEÑAL-NO SEÑAL".

**Aspectos clave:**

- **Categories en FOL:** Se pueden representar usando un predicado, como $Basketball(b)$, o reificando la categoría como un objeto, $Basketballs$, diciendo $Member(b, Basketballs)$ (abreviado como $b \in Basketballs$).
- **Disjoint y Exhaustive:** Dos o más categorías son **disjoint** si no tienen miembros en común. Una **exhaustive decomposition** (descomposición exhaustiva) de un conjunto, junto con la disjunción, permite asegurar que un elemento que no pertenece a una categoría debe pertenecer a la otra.
- **Lógica en Sistemas Críticos:** Intentar usar la lógica de forma directa para dominios complejos, como el diagnóstico médico, puede fallar porque las reglas tendrían que ser **lógicamente exhaustivas** (implicando una lista casi ilimitada de problemas) y porque no todas las causas garantizan el efecto (por ejemplo, no todas las caries causan dolor).

**Aplicaciones prácticas:** La Lógica de Primer Orden se usa en la representación del conocimiento en sistemas de Inteligencia Artificial (IA). Una definición lógica formal puede ser utilizada para determinar si una categoría es relevante basándose en la consulta y el texto, como en: $\exists c1, c2 Name(query, c1) \wedge Name(text, c2) \wedge (c1 \subseteq c2 \vee c2 \subseteq c1)$.

---

##### 2. Álgebra de Boole y Circuitos Lógicos

**Definición:** El Álgebra de Boole es una de las áreas temáticas clave en Matemáticas para la Computación (Capítulo 5). Sus dos elementos se pueden interpretar como "VERDADERO-FALSO".

**Explicación:** Las operaciones lógicas se pueden expresar utilizando el Álgebra de Boole. Por ejemplo, si $0 = FALSE$ y $1 = TRUE$, las expresiones como "not A," "A or B," y "A and B" pueden ser representadas usando las operaciones $\oplus$ (XOR) y $\cdot$ (AND).

**Aspectos clave:**

- **Aplicaciones:** Incluyen la aplicación a **circuitos de conmutación**, el **método de reducción de mapas de Karnaugh** y el estudio de **compuertas lógicas**.
- **División:** En el caso de módulos compuestos, la división por un "número" distinto de cero no siempre se puede llevar a cabo cuando el **módulo es compuesto**.
- **Modelado:** En algunos casos, un valor puede ser asignado como 1 si una página se incluye en un conjunto de muestra, y 0 en caso contrario, reflejando una aplicación binaria.

**Aplicaciones prácticas:** La criptografía matemática, basada en la teoría de números (el estudio de enteros positivos), es una aplicación ampliamente utilizada en la seguridad informática y la banca electrónica. Los principios lógicos también se aplican en la Ingeniería de Software, donde se usan para garantizar la **integridad** y **consistencia** de los datos.

---

##### 3. Modelos de Computación y Complejidad

**Definición:** La **tractability** (tractabilidad) es el concepto clave que determina si el tiempo requerido para resolver un problema crece exponencialmente con el tamaño de las instancias, lo que se considera intratable.

**Explicación:** La clasificación de la complejidad ayuda a identificar los problemas que pueden resolverse con algoritmos eficientes. La distinción entre crecimiento **polinómico** y **exponencial** es crucial, ya que el crecimiento exponencial hace que incluso instancias moderadamente grandes no puedan resolverse en un tiempo razonable.

**Aspectos clave:**

- **Clases de Problemas:** Los problemas computacionales se agrupan en tres categorías: (1) Aquellos con algoritmos de tiempo polinómico (P), (2) Aquellos probados como intratables (e.g., el problema de la parada, la Aritmética de Presburger), y (3) Aquellos no probados como intratables pero sin algoritmos de tiempo polinómico (como el Problema del Vendedor Viajero).
- **Relación P vs NP:** La pregunta de si $P = NP$ es una de las más importantes en Ciencias de la Computación, y se duda que sean iguales.
- **Autómata Finito:** Se define formalmente como una **5-tupla** que consiste en el conjunto de estados, alfabeto de entrada, reglas de movimiento, estado inicial y estados de aceptación.
- **Máquina de Turing (TM):** Es un modelo formal que consiste en una cinta unidimensional finita de celdas, un cabezal de lectura/escritura, y un conjunto finito de estados y acciones, que definen el **programa** de la TM.
- **Complejidad en Paralelo:** Un algoritmo paralelo se considera rápido si su tiempo de ejecución es **polilogarítmico** en $n$.

**Aplicaciones prácticas:** El **Problema del Vendedor Viajero (TSP)** se clasifica en la tercera categoría (no probado como intratable, pero sin algoritmo polinómico conocido). La solución del **Problema Clásico de n-cuerpos** se reduce a la solución de un sistema de $6n$ ecuaciones diferenciales. Si $n$ es muy grande, se requiere **computación paralela** para resolver el sistema de ecuaciones.

---

#### 📖 Glosario de Términos

| Término                               | Definición                                                                                                                                    | Contexto de uso                                                                     |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| **Lógica de Primer Orden (FOL)**      | Lenguaje formal utilizado para la representación del conocimiento que permite cuantificar sobre objetos y utilizar predicados.                | Representación de categorías y axiomas en sistemas de IA y bases de conocimiento.   |
| **Álgebra de Boole**                  | El contenido matemático que utiliza dos elementos (0, 1) interpretados como VERDADERO/FALSO, utilizado en lógica y circuitos.                 | Diseño de **circuitos de conmutación** y reducción de mapas de Karnaugh.            |
| **Tractabilidad**                     | Propiedad de un problema que puede resolverse en tiempo **polinómico**; lo contrario es la **intractabilidad** (tiempo exponencial).          | Clasificación de algoritmos en la teoría de la complejidad (P vs NP).               |
| **Polilogarítmico**                   | Un tiempo de ejecución rápido para un algoritmo paralelo, expresado como $poly(\log n)$.                                                      | Determinar la eficiencia de los algoritmos en entornos de **computación paralela**. |
| **Máquina de Turing (TM)**            | Modelo formal de computación que utiliza una cinta infinita, un cabezal de lectura/escritura y un conjunto finito de estados y reglas.        | Estudio de la **decidibilidad** y **computabilidad** de los problemas.              |
| **Autómata Finito (FA)**              | Modelo formal simple de computación definido como una **5-tupla** que acepta lenguajes regulares.                                             | Se utiliza para definir las **expresiones regulares** (regex).                      |
| **Chomsky Normal Form**               | Un formato de gramática en el que todas las reglas son de la forma $X \rightarrow \textbf{word}$ (léxical) o $X \rightarrow YZ$ (sintáctica). | Requerido por el **algoritmo CYK** para el análisis de cadenas de símbolos.         |
| **Post Correspondence Problem (PCP)** | Problema de manipulación de cadenas que ha sido demostrado ser **indecidible**.                                                               | Se utiliza para demostrar la undecidibilidad de otros problemas por reducción.      |

---

#### 🔗 Relaciones con Otros Subtemas

- **Análisis y Diseño de Algoritmos (1.1):** La lógica y la teoría de la computación definen la **tractabilidad** (tiempo polinómico) de los problemas, lo que guía el diseño de algoritmos eficientes. La complejidad (P vs NP) clasifica los problemas que los algoritmos de esta subárea pueden o no resolver eficientemente.
- **Matemáticas Discretas (1.3):** Las matemáticas discretas son el fundamento conceptual de la lógica, incluyendo la **teoría de conjuntos** (operaciones, disjunción, exclusividad), **funciones**, y el uso de **matrices** para modelar relaciones (e.g., matriz de adyacencia).
- **Compiladores (2.2):** Los lenguajes formales (Autómatas, Expresiones Regulares, Gramáticas) son el corazón de la fase de análisis léxico y sintáctico de los compiladores. El **Chomsky Normal Form** es fundamental en el análisis sintáctico (CYK).

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente.

1.  **Jerarquía de la Complejidad y Reducción**

    - **Explicación detallada:** Los problemas se clasifican en jerarquías de complejidad donde $P \subseteq NP \subseteq PSPACE$. La jerarquía es estricta, lo que significa que un problema completo para un nivel (como $HP$ para $\Sigma_1^0$ o $EMPTY$ para $\Sigma_3^0$) no puede reducirse a un problema completo para una clase inferior (por ejemplo, $EMPTY$ no se reduce a $HP$). La reducibilidad (e.g., $\le_m$) se usa para demostrar que, si tal reducción fuera posible, la jerarquía colapsaría a ese nivel.
    - **Por qué es importante para Sobresaliente:** Permite evaluar problemas con base en sus límites teóricos y su relación con problemas fundamentales (como el Problema del Vendedor Viajero) que se encuentran en la categoría de problemas para los que no se ha encontrado un algoritmo de tiempo polinómico.

2.  **Modelado Formal para Decidibilidad e Intractabilidad**
    - **Explicación detallada:** Modelos como la Máquina de Turing se utilizan para demostrar que un problema es **decidible en principio, pero no en la práctica** (intratable). El **Problema de Correspondencia de Post (PCP)**, que busca una lista de "dominós" cuyas cadenas superior e inferior coincidan, es un ejemplo de problema **indecidible** sobre manipulación simple de cadenas. El PCP modificado ($MPCP$) es una variante que requiere que la coincidencia comience con el primer dominó.
    - **Por qué es importante para Sobresaliente:** Exige la capacidad de utilizar modelos abstractos (TM, PCP) para justificar por qué ciertos problemas no tienen solución algorítmica eficiente o, en absoluto, y entender cómo se usa la reducción para probar la dificultad (por ejemplo, $ATM$ se reduce a $B$ o $C$).

---

##### Reactivos de Cuestionamiento Directo

###### Nivel Satisfactorio (1-4)

###### Reactivo 1

¿Cuál de los siguientes es un componente fundamental de la definición formal de un Autómata Finito (FA)?

A) Un conjunto de reglas de movimiento, estado inicial y una cinta infinita de memoria.

B) Un alfabeto de entrada, un conjunto de estados y un conjunto de estados de aceptación.

C) Un alfabeto de entrada, un número $n$ de cintas y un conjunto de estados de aceptación.

**Respuesta correcta:** B
**Justificación:** Un Autómata Finito se define formalmente como una 5-tupla, la cual incluye un conjunto de estados, un alfabeto de entrada, reglas para moverse, un estado inicial y un conjunto de estados de aceptación. La opción A es incorrecta porque la cinta infinita es característica de la Máquina de Turing. La opción C es incorrecta, ya que la definición de un FA no especifica un número $n$ de cintas.
**Nivel:** Satisfactorio

###### Reactivo 2

En el contexto del Álgebra de Boole utilizada en la lógica computacional, ¿cómo se interpreta generalmente el elemento $0$?

A) Señal de Salida.

B) Falso.

C) Sí.

**Respuesta correcta:** B
**Justificación:** En campos como la informática y la lógica matemática, los dos elementos del sistema (0 y 1) se interpretan como "VERDADERO-FALSO" o "SEÑAL-NO SEÑAL". Por convención, 0 representa FALSE (Falso).
**Nivel:** Satisfactorio

###### Reactivo 3

Si se utiliza la Lógica de Primer Orden (FOL) para representar categorías, ¿cuál de las siguientes opciones describe el método de **reificación**?

A) Utilizar un predicado para asignar una propiedad al objeto, como $Basketball(b)$.

B) Utilizar un conjunto de axiomas para definir las propiedades intrínsecas del objeto.

C) Tratar la categoría como un objeto en sí mismo, como $Basketballs$.

**Respuesta correcta:** C
**Justificación:** La reificación es una de las dos opciones para representar categorías en la Lógica de Primer Orden, donde la categoría se trata como un objeto, y la pertenencia se indica con la notación $b \in Basketballs$. La opción A describe el uso de predicados, el método alternativo.
**Nivel:** Satisfactorio

###### Reactivo 4

¿Qué estructura de gramática se requiere para que el algoritmo CYK (Cocke-Younger-Kasami) pueda procesar una cadena de símbolos?

A) Gramática Independiente del Contexto (GIC).

B) Gramática Regular.

C) Chomsky Normal Form.

**Respuesta correcta:** C
**Justificación:** El algoritmo CYK requiere que la gramática tenga todas sus reglas en una de dos formas muy específicas (lexical: $X \rightarrow \textbf{word}$ o sintáctica: $X \rightarrow YZ$), que juntas definen el **Chomsky Normal Form**.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

Un problema de $N$-cuerpos produce un sistema de $6N$ ecuaciones diferenciales. ¿Por qué es necesaria la **computación paralela** para resolver este tipo de problemas en la práctica?

A) Porque el tiempo de ejecución del algoritmo secuencial es polilogarítmico en $N$, lo cual es muy lento.

B) Porque los valores de $N$ son generalmente demasiado grandes, haciendo que los métodos numéricos para uniprocesador no sean prácticos.

C) Porque solo se conoce un algoritmo de tiempo exponencial para la solución, lo que exige distribuir la carga.

**Respuesta correcta:** B
**Justificación:** En la práctica, los valores de $N$ son a menudo _demasiado grandes_ para que los métodos numéricos convencionales programados para computadoras de uniprocesador sean de valor práctico. La solución implica utilizar una **computadora paralela** para que sus múltiples procesadores colaboren.
**Nivel:** Sobresaliente

###### Reactivo 6

Si un problema $P$ se clasifica como $TOTAL \in \Pi_2^0$ y otro problema $Q$ es $\le_m$-completo para $\Sigma_1^0$ ($HP$ - Halting Problem). ¿Qué se puede inferir sobre la reducibilidad de $P$ a $Q$?

A) $P$ sí se puede reducir a $Q$ porque $\Pi_2^0$ es una clase de mayor complejidad que $\Sigma_1^0$.

B) $P$ no se puede reducir a $Q$ porque la jerarquía colapsaría al nivel inferior de $Q$.

C) $P$ sí se puede reducir a $Q$ si se utiliza una Máquina de Turing de una sola dirección.

**Respuesta correcta:** B
**Justificación:** Dado que la jerarquía de complejidad es estricta, un problema no está contenido en ninguna clase inferior de la jerarquía ni se $\le_T$-reduce a ningún problema completo para una clase inferior. Si $P$ (en $\Pi_2^0$) redujera a $Q$ (en $\Sigma_1^0$), la jerarquía colapsaría.
**Nivel:** Sobresaliente

###### Reactivo 7

¿Cuál es la principal razón por la que el **Problema del Vendedor Viajero (TSP)** se considera un desafío en la clasificación de complejidad, cayendo en la tercera categoría de problemas?

A) Ha sido probado como intratable, similar a la Aritmética de Presburger.

B) Aún no se ha encontrado un algoritmo de tiempo polinómico, pero tampoco se ha probado que uno sea imposible.

C) Se sabe que pertenece a la clase $P$, pero los algoritmos existentes tienen constantes muy grandes.

**Respuesta correcta:** B
**Justificación:** El TSP cae en la tercera categoría de problemas: aquellos que no han sido probados como intratables, pero para los cuales **nunca se han encontrado algoritmos de tiempo polinómico**. Se han encontrado algoritmos (como _branch-and-bound_ y _backtracking_) eficientes para muchas instancias grandes, pero no para el conjunto infinito de todas las instancias.
**Nivel:** Sobresaliente

###### Reactivo 8

Un algoritmo paralelo logra un tiempo de ejecución de $O(\log^2 n)$. Según la teoría de complejidad, ¿cómo se clasifica este rendimiento en términos de velocidad?

A) Exponencialmente rápido, superando las limitaciones de $NP$.

B) Polinomialmente lento, indicando una necesidad de más procesadores.

C) Rápido, ya que su tiempo de ejecución es polilogarítmico en $n$.

**Respuesta correcta:** C
**Justificación:** Un algoritmo paralelo se considera **rápido** si su tiempo de ejecución paralelo es **polilogarítmico** en $n$. $O(\log^2 n)$ es una función polilogarítmica, indicando un rendimiento rápido.
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

La definición de los estados de un Autómata Finito No Determinista (NFA) $M'$ se basa en **triples ordenados** de elementos de $Q$, donde el primer componente modela la posición del \***\*\_\_\*\***, el segundo componente modela la posición del \***\*\_\_\*\***, y el tercero modela la posición del \***\*\_\_\*\***.
El/Los elemento(s) que completa(n) correctamente el planteamiento es/son...

A) guijarro azul, guijarro blanco, guijarro verde.

B) guijarro blanco, guijarro verde, guijarro azul.

C) guijarro verde, guijarro azul, guijarro blanco.

**Respuesta correcta:** B
**Justificación:** Para un NFA $M'$, la definición formal establece que el primer componente del triple $(p, q, r)$ modela la posición del guijarro **blanco** (white pebble), el segundo la del guijarro **verde** (green pebble), y el tercero la del guijarro **azul** (blue pebble).
**Nivel:** Satisfactorio

###### Reactivo 10

El concepto que describe la dificultad de un problema basándose en el crecimiento exponencial del tiempo de solución con respecto al tamaño de la instancia se conoce como \***\*\_\_\*\***.

A) Complejidad Asintótica.

B) Intractabilidad.

C) Polinomialidad.

**Respuesta correcta:** B
**Justificación:** Un problema se denomina **intratable** si el tiempo requerido para resolver sus instancias crece exponencialmente con el tamaño de las instancias. La intratabilidad implica que incluso instancias moderadamente grandes no se pueden resolver en un tiempo razonable.
**Nivel:** Satisfactorio

###### Reactivo 11

En el modelado de lenguajes formales, la \***\*\_\_\*\*** se refiere a un patrón, no a un conjunto de cadenas, pero a menudo se utiliza de forma abreviada para representar $L(a^*b^*)$ como $a^*b^*$.

A) Gramática libre de contexto.

B) Expresión regular.

C) Producción terminal.

**Respuesta correcta:** B
**Justificación:** Estrictamente, $a^*b^*$ es un patrón y no un conjunto de cadenas, por lo que se debería escribir $x \in L(a^*b^*)$. Sin embargo, es aceptable escribir $x \in a^*b^*$ como una abreviatura, lo que se refiere a las **expresiones regulares**. Las expresiones regulares están definidas por un autómata de estado finito.
**Nivel:** Satisfactorio

###### Reactivo 12

El proceso que utiliza un conjunto de oraciones lógicas (hechos y axiomas) para obtener una conclusión o una respuesta a una pregunta se denomina \***\*\_\_\*\***.

A) Reificación.

B) Saturación.

C) Resolución.

**Respuesta correcta:** C
**Justificación:** El proceso para generar una respuesta en lógica se logra cuando se genera una cláusula que contiene solo un literal de respuesta única a través del proceso de **resolución**. La inferencia es un proceso central en este tipo de problemas.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

El \***\*\_\_\*\*** es un problema indecidible que se define por una colección de "dominós," cada uno con dos cadenas, donde la tarea es listarlos (con repeticiones permitidas) para que la cadena superior sea idéntica a la cadena inferior.

A) Problema de Correspondencia de Post (PCP).

B) Problema del Vendedor Viajero (TSP).

C) Problema de Satisfacibilidad (SAT).

**Respuesta correcta:** A
**Justificación:** El **Problema de Correspondencia de Post (PCP)** es un problema sobre manipulación de cadenas que ha sido demostrado ser indecidible. Se utilizan para demostrar la indecidibilidad de otros problemas.
**Nivel:** Sobresaliente

###### Reactivo 14

La noción lógica que expresa que un conjunto de elementos no tiene miembros en común se denomina \***\*\_\_\*\***, mientras que la noción de que todos los elementos de un superconjunto están cubiertos por las subcategorías se llama \***\*\_\_\*\***.

A) Disyunción, Clausura.

B) Disjoint, Exhaustive Decomposition.

C) Mutuamente Excluyente, Completion.

**Respuesta correcta:** B
**Justificación:** Dos o más categorías son **disjoint** si no tienen miembros en común. Para saber que un elemento no en una categoría debe estar en otra, se requiere que constituyan una **exhaustive decomposition** del superconjunto (como animales, divididos en machos y hembras).
**Nivel:** Sobresaliente

###### Reactivo 15

Para resolver el problema clásico de $n$-cuerpos, si se utiliza un sistema de $6n$ ecuaciones diferenciales, el número de **unidades de procesamiento** $p$ en una arquitectura paralela debe ser una función \***\*\_\_\*\*** de $n$, idealmente de bajo grado (como 2, 3 o 4).

A) logarítmica.

B) exponencial.

C) polinómica.

**Respuesta correcta:** C
**Justificación:** El número de unidades de procesamiento $p$ debe ser alguna función **polinómica** $poly(n)$ de $n$. Se descartan funciones polinómicas de grados "irrazonablemente" grandes (como $n^{100}$), esperando grados bajos como 2, 3, o 4.
**Nivel:** Sobresaliente

###### Reactivo 16

Según la teoría de la complejidad, un problema para el cual se ha probado que un algoritmo de tiempo polinómico es imposible se considera generalmente de la clase \***\*\_\_\*\***.

A) P.

B) NP.

C) Intratable.

**Respuesta correcta:** C
**Justificación:** Los problemas para los cuales se ha probado que los algoritmos de tiempo polinómico son imposibles se consideran **intratables**. Estos problemas (como la Aritmética de Presburger o el Problema de la Parada) también han sido probados como fuera de la clase $NP$.
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione el concepto fundamental de la Máquina de Turing con el elemento que representa en el modelo formal.

**Concepto**

1. Programa
2. Cinta unidimensional
3. Cabezal de lectura/escritura
4. Acción de la máquina

**Elemento Representado**
a) El mapeo que determina las acciones permitidas por el estado y el símbolo.
b) Unidad que puede escribir un símbolo, hacer transición de estado o moverse.
c) Almacena un símbolo en cada celda a lo largo de su longitud.
d) La meta de controlar la máquina para entrar al estado de aceptación.

A) 1a, 2c, 3b, 4d

B) 1c, 2a, 3b, 4d

C) 1a, 2b, 3d, 4c

**Respuesta correcta:** A
**Justificación:** El programa de la TM es el mapeo que determina las acciones permitidas (1a). La cinta unidimensional consiste en celdas, cada una conteniendo un símbolo (2c). El cabezal de lectura/escritura realiza las acciones (3b). La meta de controlar la máquina para entrar al estado de aceptación es el objetivo final (4d).
**Nivel:** Satisfactorio

###### Reactivo 18

Relacione los componentes del Álgebra de Boole con las interpretaciones del mundo real utilizadas en la lógica computacional.

**Componente Lógico**

1. Elemento 1
2. Elemento 0
3. Operación $\cdot$ (AND)
4. Operación $\oplus$ (XOR)

**Interpretación / Uso**
a) FALSO / NO SEÑAL.
b) VERDADERO / SEÑAL.
c) Función utilizada para determinar si una compuerta debe dividir la operación.
d) Representación de la conjunción ("A and B").
e) Representación de la disyunción exclusiva.

A) 1b, 2a, 3d, 4e

B) 1a, 2b, 3e, 4d

C) 1b, 2a, 3e, 4c

**Respuesta correcta:** A
**Justificación:** El elemento 1 se interpreta como VERDADERO / SEÑAL (1b). El elemento 0 se interpreta como FALSO / NO SEÑAL (2a). $\cdot$ (AND) representa la conjunción (3d). $\oplus$ (XOR) representa la disyunción exclusiva (4e).
**Nivel:** Satisfactorio

###### Reactivo 19

Relacione la clase de problema con la categoría de complejidad a la que pertenece o con un hecho relevante sobre su solución.

**Clase de Problema**

1. Problemas en la clase $P$
2. Problemas del Vendedor Viajero (TSP)
3. Aritmética de Presburger
4. Problemas en $NP$

**Categoría de Complejidad**
a) Problema que ha sido probado como intratable (no está en $NP$).
b) Problemas para los cuales se han encontrado algoritmos de tiempo polinómico.
c) Problemas que tienen una solución de tiempo polinómico si $P=NP$.
d) Problemas que no han sido probados como intratables, pero para los que no hay algoritmo polinómico conocido para todas las instancias.
e) Problemas decidibles, pero que requieren tiempo exponencial para su solución.

A) 1c, 2d, 3a, 4b

B) 1b, 2d, 3a, 4c

C) 1b, 2a, 3d, 4e

**Respuesta correcta:** B
**Justificación:** Los problemas en $P$ son aquellos para los que se han encontrado algoritmos de tiempo polinómico (1b). El TSP no ha sido probado como intratable, pero carece de un algoritmo polinómico general (2d). La Aritmética de Presburger es un problema que ha sido probado como intratable y no está en $NP$ (3a). La mayoría de los problemas en $NP$ tendrían algoritmos de tiempo polinómico si $P=NP$ (4c).
**Nivel:** Satisfactorio

###### Reactivo 20

Relacione el tipo de concepto lógico con su función en la estructuración de la representación del conocimiento.

**Concepto Lógico**

1. Completion
2. Disjoint
3. Subcategoría
4. Predicado

**Función en la Representación**
a) Indica que dos categorías no tienen miembros en común.
b) La noción de que una categoría es un subconjunto de otra ($Basketballs \subset Balls$).
c) Expresa el límite superior de una enumeración (e.g., "a lo sumo cuatro cursos").
d) Uno de los dos métodos en FOL para representar categorías, como $Basketball(b)$.
e) Se utiliza para representar un evento o una acción en el Cálculo de Eventos.

A) 1c, 2a, 3b, 4d

B) 1a, 2c, 3d, 4e

C) 1d, 2b, 3a, 4c

**Respuesta correcta:** A
**Justificación:** La Completion de una ecuación expresa la idea de "a lo sumo" (1c). **Disjoint** indica que dos categorías no tienen miembros en común (2a). **Subcategoría** se abrevia como $\subset$ (3b). **Predicado** es una opción para representar categorías en FOL (4d).
**Nivel:** Satisfactorio

###### Reactivo 21

Relacione el problema de computación con la clase de completitud a la que pertenece en la jerarquía, si ha sido probado como $\le_m$-completo.

**Problema (Por sus siglas en inglés)**

1. HP (Halting Problem)
2. MP (Membership Problem)
3. EMPTY (Emptiness Problem)
4. TOTAL (Total Function Problem)

**Clase de Complejidad**
a) $\Sigma_3^0$
b) $\Pi_2^0$
c) $\Sigma_1^0$
d) $\Sigma_2^0$

A) 1c, 2d, 3a, 4b

B) 1d, 2c, 3b, 4a

C) 1a, 2b, 3c, 4d

**Respuesta correcta:** A
**Justificación:** El HP es $\le_m$-completo para $\Sigma_1^0$ (1c). El MP es $\le_m$-completo para $\Sigma_2^0$ (2d). El EMPTY es $\le_m$-completo para $\Sigma_3^0$ (3a). El TOTAL es $\le_m$-completo para $\Pi_2^0$ (4b).
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Relacione los desafíos del uso de la lógica para el diagnóstico con el problema fundamental que surge al intentar construir reglas lógicas exhaustivas.

**Desafío del Diagnóstico**

1. Necesidad de reglas lógicamente exhaustivas.
2. No todas las causas producen dolor.
3. Fallo en el manejo de la observación parcial.

**Problema Fundamental**
a) Requiere aumentar el lado izquierdo con calificaciones ilimitadas de posibles problemas.
b) El agente no puede estar seguro de que el objeto que ha percibido sea un elemento típico.
c) Se resuelve usando la Compleción de la igualdad para asegurar que la regla cubre todos los casos.
d) Se puede resolver añadiendo una jerarquía de generalización limitada en lugar de disyunción abierta.
e) Se resuelve reformulando la regla causal para ser más estricta.

A) 1a, 2e, 3b

B) 1c, 2a, 3d

C) 1a, 2c, 3e

**Respuesta correcta:** A
**Justificación:** Intentar hacer una regla lógicamente exhaustiva (1) requiere añadir una lista casi ilimitada de posibles problemas (1a). La regla causal $Cavity \rightarrow Toothache$ es incorrecta porque no todas las cavidades causan dolor; la única forma de arreglarla es hacerla lógicamente exhaustiva (2e). El operar en entornos parcialmente observables genera incertidumbre (3), por lo que el agente no puede estar seguro de las propiedades del objeto percibido.
**Nivel:** Sobresaliente

###### Reactivo 23

Relacione el modelo de computación avanzado con el concepto de complejidad que mejor describe su naturaleza o uso.

**Modelo de Computación**

1. Máquina de Turing (TM)
2. Máquina de Turing de una vía (One-way TM)
3. Problema de Correspondencia de Post Modificado (MPCP)
4. Nondeterministic Finite Automata (NFA)

**Concepto de Complejidad / Función**
a) Reducción a la versión original para demostrar la indecidibilidad.
b) La unidad de procesamiento que define la decidibilidad de un problema.
c) Puede simular una TM ordinaria empujando un marcador hasta el final.
d) La definición de sus estados usa una tripleta ordenada para modelar la posición de múltiples guijarros.
e) Requiere tiempo polilogarítmico para ejecutarse en entornos paralelos.

A) 1b, 2c, 3a, 4d

B) 1c, 2b, 3d, 4a

C) 1b, 2d, 3c, 4a

**Respuesta correcta:** A
**Justificación:** La TM (1) es el modelo utilizado para definir la decidibilidad (1b). La TM de una vía (2) puede simular TMs ordinarias moviendo marcadores a la derecha (2c). El MPCP (3) requiere que el match comience con el primer dominó, lo cual se elimina convirtiéndolo en PCP para demostrar la indecidibilidad (3a). Un NFA (4) utiliza un conjunto de estados $Q'$ definido como $Q^3$ (tripletas ordenadas) para modelar la posición de los guijarros blanco, verde y azul (4d).
**Nivel:** Sobresaliente

###### Reactivo 24

Una empresa está desarrollando un sistema experto de diagnóstico y necesita un modelo lógico flexible para manejar la complejidad inherente. Relacione el enfoque de modelado de conocimiento con la característica que ofrece para manejar esta complejidad.

**Enfoque Lógico**

1. Uso de una Jerarquía de Generalización
2. Separación de Propiedades Intrínsecas/Extrínsecas
3. Uso de la categoría $Typical(Category)$

**Característica de Flexibilidad**
a) Evita el problema de la **disyunción** permitiendo una búsqueda más acotada en el espacio de hipótesis.
b) Permite que dos piezas de la misma sustancia retengan propiedades como la densidad y el color al ser cortadas.
c) Permite que el agente aborde la incertidumbre que surge de la **observación parcial** en el entorno.
d) Requiere que los objetos se traten como un _mass noun_ (sustancia) o un _count noun_ (objeto contable).
e) Asegura que el costo de la inferencia sea polilogarítmico.

A) 1d, 2b, 3c

B) 1a, 2d, 3c

C) 1a, 2b, 3e

**Respuesta correcta:** B
**Justificación:** Una Jerarquía de Generalización (1) aborda el problema de la disyunción al usar literales más generales, como $LongWait(x)$, limitando el espacio de hipótesis (1a). La distinción entre propiedades Intrínsecas y Extrínsecas (2) define si una categoría es una **sustancia** (masa, propiedades intrínsecas) o un **objeto** (recuento, propiedades extrínsecas) (2d). El uso de $Typical(Category)$ (3) separa lo que es verdadero de todos los casos de lo que es verdadero solo de los casos típicos, abordando la incertidumbre de la observación parcial (3c).
**Nivel:** Sobresaliente

###### Reactivo 25

Relacione los tres tipos de problemas en la clasificación de complejidad con el principio que mejor describe por qué la categoría se define como tal.

**Clasificación de Problemas**

1. Problemas que han sido probados como intratables.
2. Problemas que tienen algoritmos de tiempo polinómico ($P$).
3. Problemas sin algoritmo polinómico conocido ($NP$ sin prueba de $P \ne NP$).

**Principio de Clasificación**
a) Se definen mediante algoritmos cuyo tiempo de ejecución está acotado por una función polinómica de su tamaño.
b) Han sido probados como imposibles de resolver con cualquier algoritmo de tiempo polinómico.
c) Son aquellos para los cuales no se ha probado que un algoritmo de tiempo polinómico sea imposible.
d) Requieren que el número de unidades de procesamiento sea polinómico en el tamaño del problema.

A) 1c, 2d, 3b

B) 1b, 2a, 3c

C) 1a, 2c, 3d

**Respuesta correcta:** B
**Justificación:** Los problemas probados como intratables (1) son aquellos para los cuales se ha demostrado que es imposible un algoritmo de tiempo polinómico (1b). Los problemas $P$ (2) son aquellos resueltos por algoritmos con tiempo acotado por una función polinómica (2a). Los problemas sin algoritmo polinómico conocido (3) son aquellos para los cuales no se ha probado que tal algoritmo sea imposible (3c).
**Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

Antes de continuar al siguiente subtema, verifica que puedas:

##### Nivel Satisfactorio Checklist

- [x] Explicar con tus propias palabras todos los conceptos del glosario.
- [x] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio (85%) (Reactivos 1-4, 9-12, 17-21).
- [x] Identificar las aplicaciones prácticas de los conceptos (e.g., lógica binaria, Chomsky Normal Form).
- [x] Distinguir entre un Autómata Finito y un modelo más complejo como la Máquina de Turing.
- [x] Relacionar la noción de tractabilidad con la eficiencia de los algoritmos.

##### Nivel Sobresaliente Checklist

- [x] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%) (Reactivos 5-8, 13-16, 22-25).
- [x] Lograr al menos 21/25 reactivos correctos en total (84%).
- [x] Analizar escenarios complejos que integren múltiples conceptos (e.g., Jerarquía de Complejidad y reducción).
- [x] Relacionar este subtema con otros del EGEL (Algoritmia, Compiladores, Matemáticas Discretas).
- [x] Explicar por qué el Problema de Correspondencia de Post (PCP) es crucial para la teoría de la indecidibilidad.
- [x] Justificar el número de procesadores necesarios para un problema paralelo en términos de complejidad polinómica.

---

#### 📌 Notas y Observaciones Personales

[Espacio para agregar notas durante el estudio]

---

#### 🔄 Última revisión

**Fecha:** [DD/MM/YYYY]
**Estado:** [ ] Por estudiar | [ ] En progreso | [ ] Revisado | [ ] Dominado
**Puntuación en cuestionario:** **_/25 (_** %)
**Desglose:** Satisfactorio **_/13 | Sobresaliente _** /12

---

#### 📚 Referencias

- Excerpts from "1997_Book_AutomataAndComputability.pdf".
- Excerpts from "2003_Book_DiscreteMathematics.pdf".
- Excerpts from "2015_Book_DataMining.pdf".
- Excerpts from "2018_Book_IntroductionToParallelComputin.pdf".
- Excerpts from "AIMA-3rd-edition.pdf".
- Excerpts from "Compiladores - Principios, tecnicas y herramientas.pdf".
- Excerpts from "Compilers - Principles, Techniques, and Tools-Pearson(2006).pdf".
- Excerpts from "Foundations of Algorithms - Richard E. Neapolitan.pdf".
- Excerpts from "Fundamentos de Algoritmia - Bradley.pdf".
- Excerpts from "Fundamentos de Sistemas de Bases de Datos by Ramez A. Elmasri Shamkant B. Navathe José Manuel Díaz (z-lib.org).pdf".
- Excerpts from "Guía para el sustentante EGEL Plus COMPU_Junio de 2025.pdf".
- Excerpts from "Introduction to the theory of computation_third edition - Michael Sipser.pdf".
- Excerpts from "Matemáticas discretas con aplicaciones, 4ta Edición - Susanna S. Epp-FREELIBROS.ORG.pdf".
- Excerpts from "Matemáticas para la computación - José A. Jiménez Murillo.pdf".
- Excerpts from "matemc3a1ticas-discretas-6edi-johnsonbaugh-fl.pdf".
- Excerpts from "Subtema_Actual_LC.md".
