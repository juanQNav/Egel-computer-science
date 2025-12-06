<!-- line-width:1000 -->
<!-- format:off -->

### 2.2 Compiladores

**Área:** Desarrollo de Software de Base
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

El subtema de Compiladores abarca los principios y técnicas para el diseño e implementación de software que traduce programas fuente escritos en lenguajes de alto nivel a código máquina o código intermedio. Este proceso es fundamental en las ciencias computacionales, ya que permite la ejecución eficiente de software en diversas arquitecturas de hardware. El estudio se centra en las fases de análisis (léxico, sintáctico y semántico) y síntesis (generación y optimización de código).

Además de la estructura interna del compilador, este tema integra profundamente la **teoría de autómatas y lenguajes formales**. Se requiere comprender cómo las expresiones regulares, los autómatas finitos, las gramáticas libres de contexto y las máquinas de Turing modelan los diferentes aspectos de los lenguajes de programación y permiten la construcción de analizadores automáticos.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [ ] Identificar las fases del proceso de compilación (análisis y síntesis) y sus productos (tokens, árboles sintácticos, código intermedio).
- [ ] Distinguir entre los diferentes modelos de computación: Autómatas Finitos (deterministas y no deterministas), Autómatas de Pila y Máquinas de Turing.
- [ ] Aplicar expresiones regulares para describir patrones léxicos básicos.

##### Nivel Sobresaliente

- [ ] Diseñar gramáticas libres de contexto para describir la sintaxis de estructuras de programación y resolver problemas de ambigüedad.
- [ ] Analizar la equivalencia entre autómatas finitos (conversión de AFN a AFD) y minimizar estados.
- [ ] Evaluar la generación de código intermedio (como código de tres direcciones) y las estructuras de datos involucradas en el manejo de tablas de símbolos y tipos.

---

#### 📚 Contenido Teórico

##### 1. Fases del Compilador

**Definición:** Secuencia lógica de pasos que transforman el código fuente en código destino. Se divide en _Front-end_ (análisis) y _Back-end_ (síntesis).

**Explicación:** El proceso comienza leyendo el flujo de caracteres y agrupándolos en componentes léxicos. Luego, se valida la estructura gramatical y el significado de las operaciones. Finalmente, se genera una representación intermedia que se optimiza y traduce al lenguaje de la máquina objetivo.

**Aspectos clave:**

- **Análisis Léxico (Escáner):** Lee caracteres y produce **tokens** (lexemas). Elimina blancos y comentarios. Usa expresiones regulares y autómatas finitos.
- **Análisis Sintáctico (Parser):** Recibe tokens y genera un **árbol sintáctico**. Verifica el orden gramatical. Usa gramáticas libres de contexto (GLC) y autómatas de pila.
- **Análisis Semántico:** Revisa la coherencia de tipos, declaraciones y ámbitos. Utiliza la **tabla de símbolos** y el árbol sintáctico anotado.
- **Generación de Código Intermedio:** Crea una representación abstracta (ej. código de tres direcciones) que facilita la optimización y la portabilidad.

**Aplicaciones prácticas:** Desarrollo de _linters_ de código, transpiladores (ej. TypeScript a JavaScript) y optimización de consultas en bases de datos.

##### 2. Teoría de Autómatas y Lenguajes Formales

**Definición:** Modelos matemáticos que describen la capacidad de cómputo y la estructura de los lenguajes.

**Explicación:** La jerarquía de Chomsky clasifica los lenguajes según la complejidad de la gramática que los genera y la máquina que los reconoce. Los compiladores usan los niveles más bajos de esta jerarquía para su funcionamiento eficiente.

**Aspectos clave:**

- **Lenguajes Regulares:** Reconocidos por **Autómatas Finitos** (Deterministas - AFD o No Deterministas - AFN). Útiles para el análisis léxico.
- **Lenguajes Libres de Contexto:** Reconocidos por **Autómatas de Pila**. Útiles para el análisis sintáctico (anidamiento, estructuras de control).
- **Máquinas de Turing:** Modelo teórico de computabilidad general. Reconocen lenguajes recursivamente enumerables.
- **Equivalencia:** Todo AFN puede convertirse en un AFD equivalente que acepte el mismo lenguaje.

**Aplicaciones prácticas:** Diseño de expresiones regulares para búsqueda de texto (grep), validación de formatos (email, fechas) y diseño de protocolos de comunicación.

##### 3. Diseño de Gramáticas y Análisis Sintáctico

**Definición:** Reglas formales que especifican la estructura válida de un lenguaje y los algoritmos para procesarlas.

**Explicación:** Una gramática define cómo se pueden combinar los símbolos terminales. Si una gramática permite más de un árbol de derivación para una cadena, es **ambigua**, lo cual es problemático para los compiladores.

**Aspectos clave:**

- **Ambigüedad:** Debe eliminarse reescribiendo la gramática o usando reglas de precedencia.
- **Tipos de Análisis:**
  - _Top-Down (Descendente):_ Construye el árbol desde la raíz (ej. LL). Requiere eliminar recursividad por la izquierda.
  - _Bottom-Up (Ascendente):_ Construye desde las hojas (ej. LR). Es más potente y maneja una clase mayor de gramáticas.

**Aplicaciones prácticas:** Definición de sintaxis para nuevos lenguajes de dominio específico (DSL) y configuración de herramientas generadoras de parsers como YACC o Bison.

---

##### 4. Expresiones Regulares.

**Qué son las expresiones regulares:** Una **expresión regular (regex)** es una secuencia de caracteres que describe un **patrón de búsqueda**.  
Sirve para encontrar, validar o reemplazar texto que cumpla una forma específica.

Ejemplos:

- Verificar si un correo es válido.
- Buscar números en un texto.
- Reemplazar palabras.
- Extraer fechas, teléfonos, etc.

---

1. **Literales**

Coinciden exactamente con el texto escrito.

Ejemplo:

```
Hola
```

Coincide con “Hola” exactamente.

---

2. **Metacaracteres básicos**

Son símbolos especiales que significan algo más.

Los más usados:

<!-- markdownlint-disable MD013 -->

| Símbolo | Significa                                 |
| ------- | ----------------------------------------- |
| `.`     | Cualquier carácter                        |
| `\d`    | Un dígito (0–9)                           |
| `\w`    | Una palabra (letras, números, guion bajo) |
| `\s`    | Un espacio en blanco                      |
| `^`     | Inicio                                    |
| `$`     | Final                                     |
| `* + ?` | Cantidades                                |

<!-- markdownlint-enable MD013 -->

3. **Cuantificadores**

Indican cuántas veces aparece algo:

<!-- markdownlint-disable MD013 -->

| Símbolo | Significa     | Ejemplo                     |
| ------- | ------------- | --------------------------- |
| `*`     | 0 o más       | `a*` → "", "a", "aaaa"      |
| `+`     | 1 o más       | `a+` → "a", "aaa" (no "")   |
| `?`     | 0 o 1         | `a?` → "", "a"              |
| `{n}`   | Exactamente n | `a{3}` → "aaa"              |
| `{n,}`  | mínimo n      | `a{2,}` → "aa", "aaa"       |
| `{n,m}` | entre n y m   | `a{1,3}` → "a", "aa", "aaa" |

<!-- markdownlint-enable MD013 -->

**Símbolos principales y su uso**

<!-- markdownlint-disable MD013 -->

| Símbolo | Nombre / Uso       | Ejemplo   | Coincide con                 |        |              |
| ------- | ------------------ | --------- | ---------------------------- | ------ | ------------ |
| `.`     | Cualquier carácter | `a.c`     | "abc", "a-c"                 |        |              |
| `\d`    | Dígito             | `\d\d\d`  | "123"                        |        |              |
| `\w`    | Letra/número/\_    | `\w+`     | "hola_123"                   |        |              |
| `\s`    | Espacio            | `\s+`     | espacios/tabulaciones        |        |              |
| `[ ]`   | Conjunto           | `[aeiou]` | vocales                      |        |              |
| `[^ ]`  | Negación           | `[^0-9]`  | todo menos dígitos           |        |              |
| `*`     | 0 o más            | `a*`      | "", "a", "aaa"               |        |              |
| `+`     | 1 o más            | `a+`      | "a", "aaa"                   |        |              |
| `?`     | 0 o 1              | `a?`      | "", "a"                      |        |              |
| `{n}`   | Exacto             | `a{3}`    | "aaa"                        |        |              |
| `{n,m}` | Rango              | `a{1,3}`  | "a", "aa", "aaa"             |        |              |
| `()`    | Agrupar            | `(ha)+`   | "ha", "haha"                 |        |              |
| `       | `                  | OR        | `gato                        | perro` | gato o perro |
| `^`     | Inicio             | `^Hola`   | textos que empiezan con Hola |        |              |
| `$`     | Final              | `fin$`    | textos que terminan en “fin” |        |              |
| `\b`    | Límite de palabra  | `\bsol`   | “sol” al inicio de palabra   |        |              |

## <!-- markdownlint-enable MD013 -->

#### 📖 Glosario de Términos

<!-- markdownlint-disable MD013 -->

| Término                               | Definición                                                                                             | Contexto de uso                                                        |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| **Token**                             | Par compuesto por un nombre y un valor de atributo opcional, que representa una unidad léxica.         | Salida del analizador léxico, entrada del sintáctico.                  |
| **Lexema**                            | Secuencia de caracteres en el código fuente que coincide con el patrón de un token.                    | Identificado durante el análisis léxico (ej. "if", "123", "contador"). |
| **Tabla de Símbolos**                 | Estructura de datos que almacena información sobre identificadores (tipos, alcance, ubicación).        | Accesada y modificada durante todas las fases del compilador.          |
| **AFD / AFN**                         | Autómata Finito Determinista / No Determinista. Modelos de estados para reconocer lenguajes regulares. | Implementación de analizadores léxicos.                                |
| **Gramática Libre de Contexto (GLC)** | Conjunto de reglas de producción que describen la sintaxis de un lenguaje.                             | Base para el diseño del analizador sintáctico.                         |
| **Código de Tres Direcciones**        | Representación intermedia donde cada instrucción tiene a lo sumo tres operandos.                       | Fase de generación de código intermedio para facilitar optimización.   |
| **Recursividad por la Izquierda**     | Cuando una producción gramatical tiene la forma $A \to A\alpha$.                                       | Debe eliminarse para usar analizadores descendentes (Top-Down).        |

<!-- markdownlint-enable MD013 -->

---

#### 🔗 Relaciones con Otros Subtemas

- **Algoritmia:** El análisis de complejidad es vital para optimizar los algoritmos de _parsing_ y búsqueda en tablas de símbolos.
- **Arquitectura de Computadoras:** La generación de código final depende del conocimiento del conjunto de instrucciones y registros de la CPU (modelo Von Neumann).
- **Estructuras de Datos:** Uso intensivo de árboles (sintácticos), tablas hash (símbolos) y pilas (autómatas) en la implementación.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente.

1.  **Equivalencia y Minimización de Autómatas**
    - Debes saber que un AFN y un AFD tienen el mismo poder expresivo. Para _Sobresaliente_, necesitas entender el algoritmo de construcción de subconjuntos para convertir un AFN a un AFD y cómo minimizar los estados de un AFD. Esto es crucial para la eficiencia del analizador léxico.
2.  **Manejo de Gramáticas y Ambigüedad**
    - No basta con reconocer una gramática. Debes ser capaz de **diseñar** una gramática para un lenguaje específico y aplicar técnicas para **eliminar la ambigüedad** (como la precedencia de operadores) o transformar la gramática (eliminar recursividad izquierda) para que sea apta para un tipo específico de parser (LL vs LR).

---

#### 📝 Cuestionario de Práctica

##### Instrucciones

- Total de reactivos: 25
- Cada reactivo tiene 3 opciones de respuesta (A, B, C)
- Solo una opción es correcta
- Lee cuidadosamente el planteamiento antes de responder

##### Distribución de Reactivos

- **Reactivos 1-8:** Cuestionamiento directo
- **Reactivos 9-16:** Completamiento
- **Reactivos 17-25:** Relación de elementos

---

##### Reactivos de Cuestionamiento Directo

###### Nivel Satisfactorio (1-4)

**Reactivo 1**
¿Cuál es la fase del compilador encargada de agrupar la secuencia de caracteres del código fuente en unidades significativas llamadas tokens?

A) Análisis Sintáctico

B) Análisis Léxico

C) Análisis Semántico

**Respuesta correcta:** B
**Justificación:** El análisis léxico (escáner) es la primera fase que lee el flujo de caracteres y los agrupa en lexemas para producir tokens. El sintáctico usa estos tokens para crear árboles, y el semántico revisa la coherencia.
**Nivel:** Satisfactorio

**Reactivo 2**
¿Qué tipo de autómata es teóricamente necesario para reconocer un lenguaje libre de contexto que requiere equilibrar paréntesis anidados?

A) Autómata Finito Determinista

B) Autómata de Pila

C) Máquina de Turing

**Respuesta correcta:** B
**Justificación:** Los lenguajes libres de contexto (como la estructura de paréntesis) requieren memoria auxiliar para el conteo o anidamiento, lo cual es proporcionado por la pila en un Autómata de Pila. Un Autómata Finito no tiene memoria suficiente.
**Nivel:** Satisfactorio

**Reactivo 3**
En el contexto de la jerarquía de Chomsky, ¿qué tipo de gramática genera los lenguajes regulares?

A) Tipo 3

B) Tipo 2

C) Tipo 1

**Respuesta correcta:** A
**Justificación:** Las gramáticas de Tipo 3 o gramáticas regulares generan lenguajes regulares, los cuales son reconocidos por autómatas finitos. Tipo 2 son libres de contexto y Tipo 1 son sensibles al contexto.
**Nivel:** Satisfactorio

**Reactivo 4**
¿Qué estructura de datos se utiliza principalmente para almacenar información sobre las variables, funciones y tipos durante todo el proceso de compilación?

A) Árbol de Análisis Sintáctico

B) Buffer de Entrada

C) Tabla de Símbolos

**Respuesta correcta:** C
**Justificación:** La tabla de símbolos es la estructura central que almacena los identificadores y sus atributos asociados (tipos, alcance, dirección) para ser consultados y actualizados por las distintas fases.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (5-8)

**Reactivo 5**
Si se tiene una gramática con la producción $A \to A\alpha | \beta$, ¿qué problema presenta para un analizador sintáctico descendente recursivo?

A) Ambigüedad inherente

B) Recursividad por la izquierda

C) Factorización por la izquierda necesaria

**Respuesta correcta:** B
**Justificación:** La producción $A \to A\alpha$ exhibe recursividad por la izquierda directa. Un parser descendente entraría en un bucle infinito al intentar derivar A, pues se llamaría a sí mismo inmediatamente sin consumir entrada.
**Nivel:** Sobresaliente

**Reactivo 6**
Al convertir un Autómata Finito No Determinista (AFN) a un Autómata Finito Determinista (AFD) utilizando el método de construcción de subconjuntos, ¿qué representa cada estado del AFD resultante?

A) Una transición épsilon del AFN

B) Un conjunto de estados del AFN

C) Un símbolo del alfabeto del AFN

**Respuesta correcta:** B
**Justificación:** En la construcción de subconjuntos, cada estado del AFD corresponde a un conjunto de estados del AFN original a los que se puede llegar simultáneamente tras leer un símbolo de entrada.
**Nivel:** Sobresaliente

**Reactivo 7**
¿Cuál es la característica distintiva de un código de tres direcciones en la generación de código intermedio?

A) Cada instrucción tiene a lo sumo tres operandos

B) Utiliza tres registros de CPU físicos

C) Solo permite tres tipos de operaciones aritméticas

**Respuesta correcta:** A
**Justificación:** El código de tres direcciones descompone expresiones complejas en una secuencia de instrucciones donde cada una tiene como máximo un operador y tres operandos (dos fuentes y un destino), como `x = y + z`.
**Nivel:** Sobresaliente

**Reactivo 8**
Dada la expresión regular `(a|b)*abb`, ¿cuál es la característica de las cadenas que acepta?

A) Cadenas que contienen la subcadena "abb"

B) Cadenas que terminan en "abb"

C) Cadenas que comienzan con "a" o "b" y terminan en "bb"

**Respuesta correcta:** B
**Justificación:** `(a|b)*` denota cualquier secuencia de 'a's y 'b's (incluyendo vacía). La concatenación final `abb` fuerza a que la cadena, sin importar lo que venga antes, debe finalizar obligatoriamente con la secuencia "abb".
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

**Reactivo 9**
En el análisis sintáctico, un \_\_\_\_\_\_\_\_\_\_ es una representación jerárquica que muestra cómo se deriva una cadena de tokens a partir del símbolo inicial de la gramática.

A) árbol de derivación

B) autómata finito

C) diagrama de flujo

**Respuesta correcta:** A
**Justificación:** El árbol de derivación (o árbol sintáctico concreto) muestra explícitamente la estructura gramatical de la sentencia y el orden en que se aplicaron las producciones.
**Nivel:** Satisfactorio

**Reactivo 10**
El modelo de \_\_\_\_\_\_\_\_\_\_ consta de una cinta infinita, un cabezal de lectura/escritura y un control de estados finitos, siendo capaz de reconocer lenguajes recursivamente enumerables.

A) Autómata Linealmente Acotado

B) Máquina de Turing

C) Autómata de Pila

**Respuesta correcta:** B
**Justificación:** Esta es la definición clásica de una Máquina de Turing, el modelo computacional más potente en la jerarquía estándar.
**Nivel:** Satisfactorio

**Reactivo 11**
En una gramática libre de contexto, los símbolos que no pueden ser reemplazados por otros se denominan \_\_\_\_\_\_\_\_\_\_.

A) no terminales

B) terminales

C) producciones

**Respuesta correcta:** B
**Justificación:** Los terminales son los símbolos básicos con los que se forman las cadenas del lenguaje (ej. tokens como `if`, `id`, `+`). Los no terminales son variables que se expanden.
**Nivel:** Satisfactorio

**Reactivo 12**
El análisis \_\_\_\_\_\_\_\_\_\_ comprueba que los operandos de un operador sean compatibles, por ejemplo, asegurando que no se sume un entero con una cadena sin conversión.

A) sintáctico

B) léxico

C) semántico

**Respuesta correcta:** C
**Justificación:** La comprobación de tipos es una tarea fundamental del análisis semántico. El análisis sintáctico solo verifica la estructura, no el significado o compatibilidad de tipos.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (13-16)

**Reactivo 13**
Para eliminar la ambigüedad en la expresión `a + b * c` y asegurar que la multiplicación se realice antes que la suma, la gramática debe diseñarse para reflejar la \_\_\_\_\_\_\_\_\_\_ de los operadores.

A) asociatividad

B) precedencia

C) conmutatividad

**Respuesta correcta:** B
**Justificación:** La precedencia determina qué operador se aplica primero. Al diseñar la gramática, se colocan los operadores de mayor precedencia (multiplicación) en un nivel más bajo del árbol (más lejos de la raíz) que los de menor precedencia.
**Nivel:** Sobresaliente

**Reactivo 14**
Un analizador sintáctico \_\_\_\_\_\_\_\_\_\_ construye el árbol de análisis desde las hojas hacia la raíz y suele utilizar una técnica de desplazamiento-reducción (_shift-reduce_).

A) LL(1)

B) LR

C) Recursivo descendente

**Respuesta correcta:** B
**Justificación:** Los analizadores LR son de tipo ascendente (Bottom-Up). Trabajan desplazando tokens a una pila y reduciéndolos a no terminales según las reglas gramaticales. LL y recursivo descendente son Top-Down.
**Nivel:** Sobresaliente

**Reactivo 15**
En la generación de código intermedio, la instrucción `t1 = inttofloat(60)` seguida de `t2 = id3 * t1` es un ejemplo de traducción de una expresión que requiere \_\_\_\_\_\_\_\_\_\_ explícita de tipos.

A) conversión

B) inferencia

C) declaración

**Respuesta correcta:** A
**Justificación:** Cuando los tipos no coinciden (ej. multiplicar flotante por entero), el compilador debe generar instrucciones de conversión (casting) explícitas en el código intermedio para asegurar la corrección de la operación a nivel de máquina.
**Nivel:** Sobresaliente

**Reactivo 16**
Considere el siguiente fragmento de código de tres direcciones:
`t1 = i * 8`
`t2 = a[t1]`
Esto corresponde a la traducción del acceso a un elemento de un arreglo `a[i]`, donde `8` representa el \_\_\_\_\_\_\_\_\_\_ del tipo de datos de los elementos del arreglo.

A) valor base

B) tamaño

C) límite

**Respuesta correcta:** B
**Justificación:** En la traducción de arreglos, la dirección de memoria se calcula como `base + índice * tamaño_elemento`. El `8` indica que cada elemento ocupa 8 unidades de memoria (bytes).
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

**Reactivo 17**
Relacione cada fase del compilador con su entrada principal.

**[Fase]**

1. Análisis Léxico
2. Análisis Sintáctico
3. Análisis Semántico
4. Generación de Código

**[Entrada]**
a) Árbol Sintáctico
b) Flujo de Caracteres
c) Árbol Sintáctico Anotado / Representación Intermedia
d) Flujo de Tokens

A) 1b, 2d, 3a, 4c

B) 1d, 2b, 3c, 4a

C) 1b, 2a, 3d, 4c

**Respuesta correcta:** A
**Justificación:**

- 1-b: El léxico lee caracteres.
- 2-d: El sintáctico recibe tokens del léxico.
- 3-a: El semántico recibe el árbol del sintáctico.
- 4-c: La generación de código usa la estructura validada y anotada (o una RI).
  **Nivel:** Satisfactorio

**Reactivo 18**
Relacione el tipo de error con la fase donde es más probable que sea detectado.

**[Tipo de Error]**

1. Carácter ilegal o inválido
2. Paréntesis desbalanceados
3. Tipos incompatibles en asignación

**[Fase de Detección]**
a) Análisis Semántico
b) Análisis Léxico
c) Análisis Sintáctico

A) 1b, 2c, 3a

B) 1c, 2a, 3b

C) 1a, 2b, 3c

**Respuesta correcta:** A
**Justificación:**

- 1-b: El escáner detecta caracteres que no pertenecen al alfabeto.
- 2-c: El parser verifica la estructura gramatical (paréntesis).
- 3-a: El análisis semántico verifica la compatibilidad de tipos.
  **Nivel:** Satisfactorio

**Reactivo 19**
Relacione el modelo de autómata con el tipo de lenguaje que reconoce según la Jerarquía de Chomsky.

**[Autómata]**

1. Autómata Finito
2. Autómata de Pila
3. Máquina de Turing

**[Lenguaje]**
a) Libre de Contexto
b) Regular
c) Recursivamente Enumerable

A) 1a, 2b, 3c

B) 1b, 2a, 3c

C) 1c, 2a, 3b

**Respuesta correcta:** B
**Justificación:**

- 1-b: AF reconocen lenguajes regulares (Tipo 3).
- 2-a: AP reconocen lenguajes libres de contexto (Tipo 2).
- 3-c: MT reconocen lenguajes recursivamente enumerables (Tipo 0).
  **Nivel:** Satisfactorio

**Reactivo 20**
Relacione los componentes de una gramática $G = (N, T, P, S)$ con su descripción.

**[Componente]**

1. $N$
2. $T$
3. $P$
4. $S$

**[Descripción]**
a) Conjunto de reglas de derivación
b) Símbolo inicial
c) Conjunto de símbolos no terminales
d) Conjunto de símbolos terminales

A) 1c, 2d, 3a, 4b

B) 1d, 2c, 3b, 4a

C) 1b, 2a, 3d, 4c

**Respuesta correcta:** A
**Justificación:** Definición estándar de gramática: $N$ son no terminales, $T$ terminales, $P$ producciones (reglas), $S$ símbolo inicial (Start).
**Nivel:** Satisfactorio

**Reactivo 21**
Relacione la operación de expresiones regulares con su símbolo estándar.

**[Operación]**

1. Unión
2. Concatenación
3. Cerradura de Kleene

**[Símbolo]**
a) \*
b) |
c) (Yuxtaposición o punto)

A) 1b, 2c, 3a

B) 1a, 2b, 3c

C) 1c, 2a, 3b

**Respuesta correcta:** A
**Justificación:**

- 1-b: La barra vertical `|` denota unión (o).
- 2-c: La yuxtaposición `ab` denota concatenación.
- 3-a: El asterisco `*` denota cerradura de Kleene (0 o más veces).
  **Nivel:** Satisfactorio

###### Nivel Sobresaliente (22-25)

**Reactivo 22**
Relacione la característica de la gramática con el tipo de analizador sintáctico adecuado.

**[Característica Gramatical]**

1. Gramática con recursividad por la izquierda
2. Gramática sin recursividad izquierda y factorizada
3. Gramática LR(1)

**[Analizador Adecuado]**
a) Analizador Ascendente (ej. YACC/Bison)
b) No apta para Analizador Descendente Recursivo directo
c) Analizador Descendente Predictivo (LL)

A) 1b, 2c, 3a

B) 1c, 2a, 3b

C) 1a, 2b, 3c

**Respuesta correcta:** A
**Justificación:**

- 1-b: La recursividad izquierda causa bucles infinitos en parsers descendentes directos.
- 2-c: Las gramáticas LL (factorizadas, sin recursividad izq.) son ideales para parsers predictivos.
- 3-a: Los parsers ascendentes (como los generados por YACC) manejan gramáticas LR, que son más generales.
  **Nivel:** Sobresaliente

**Reactivo 23**
Relacione el concepto de optimización con su descripción.

**[Técnica]**

1. Plegado de constantes (Constant Folding)
2. Eliminación de código muerto
3. Reducción de potencia (Strength Reduction)

**[Descripción]**
a) Sustituir operaciones costosas por otras más baratas (ej. multiplicar por 2 $\to$ desplazamiento de bits).
b) Evaluar expresiones con operandos constantes en tiempo de compilación.
c) Remover instrucciones que no afectan el resultado final del programa.

A) 1b, 2c, 3a

B) 1a, 2b, 3c

C) 1c, 2a, 3b

**Respuesta correcta:** A
**Justificación:**

- 1-b: Calcular `2+3` como `5` durante la compilación.
- 2-c: Borrar código inalcanzable o sin efectos.
- 3-a: Usar operaciones de bajo costo (shift) en lugar de alto costo (mul/div) cuando sea posible.
  **Nivel:** Sobresaliente

**Reactivo 24**
Relacione la estructura de datos del compilador con la información específica que gestiona para el manejo de ámbitos (scoping).

**[Estructura]**

1. Pila de tablas de símbolos
2. Registro de activación (AR)
3. Árbol de activación

**[Función]**
a) Gestiona la memoria local y parámetros de una llamada a función en tiempo de ejecución.
b) Representa el flujo de control de las llamadas a funciones.
c) Maneja la visibilidad de identificadores en bloques anidados durante el análisis semántico.

A) 1c, 2a, 3b

B) 1b, 2c, 3a

C) 1a, 2b, 3c

**Respuesta correcta:** A
**Justificación:**

- 1-c: Se usa una pila de tablas para entrar y salir de ámbitos (bloques) y resolver la visibilidad léxica.
- 2-a: El AR contiene datos vivos de una función en ejecución.
- 3-b: Modela la jerarquía de llamadas activas.
  **Nivel:** Sobresaliente

**Reactivo 25 - Integrador**
Relacione el problema de compilación con la solución teórica o técnica aplicada para resolverlo, integrando conceptos de autómatas y gramáticas.

**[Problema]**

1. Reconocimiento de palabras clave vs. identificadores
2. Manejo de la precedencia de operadores en expresiones (ej. `*` sobre `+`)
3. Decidir si un programa se detendrá (Halting Problem)

**[Solución/Concepto]**
a) Indecidible (no existe algoritmo para TM).
b) Diseño de gramática estratificada o no ambigua.
c) Orden de prioridad en reglas léxicas o autómata finito único.

A) 1c, 2b, 3a

B) 1b, 2a, 3c

C) 1a, 2c, 3b

**Respuesta correcta:** A
**Justificación:**

- 1-c: En el análisis léxico, si un lexema coincide con una palabra clave y un patrón de identificador, se usa una regla de prioridad (las palabras clave tienen prioridad) o se busca primero en una tabla.
- 2-b: En el análisis sintáctico, la precedencia se resuelve creando niveles en la gramática (término, factor) para que el árbol crezca correctamente.
- 3-a: Concepto de Teoría de Computación; no se puede escribir un compilador que verifique semánticamente si _cualquier_ programa termina, ya que es un problema indecidible en Máquinas de Turing.
  **Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

##### Nivel Satisfactorio Checklist

- [ ] Explicar con tus propias palabras qué hace cada fase del compilador (Léxico, Sintáctico, Semántico).
- [ ] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio (85%).
- [ ] Identificar qué tipo de autómata reconoce lenguajes regulares y cuáles libres de contexto.
- [ ] Diferenciar entre un token, un lexema y un patrón.
- [ ] Entender la función de la Tabla de Símbolos.

##### Nivel Sobresaliente Checklist

- [ ] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%).
- [ ] Lograr al menos 21/25 reactivos correctos en total (84%).
- [ ] Explicar por qué la recursividad por la izquierda afecta a los analizadores descendentes y cómo solucionarlo.
- [ ] Describir la diferencia entre análisis Top-Down y Bottom-Up.
- [ ] Entender la conversión de AFN a AFD (concepto de estados como conjuntos).
- [ ] Relacionar las estructuras de datos (pilas, tablas) con la gestión de ámbitos y tipos.

---
