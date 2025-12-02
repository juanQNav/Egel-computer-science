<!-- line-width:1000 -->
<!-- format:off -->

### [1.3] Matemáticas Discretas

**Área:** Algoritmia
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

Las Matemáticas Discretas (MD) constituyen el fundamento teórico y formal para la Ciencia de la Computación y la Algoritmia. Esta subárea se centra en el análisis de algoritmos y la solución de problemas mediante métodos formales. El estudio de MD incluye herramientas como las bases numéricas, que permiten representar cantidades en sistemas como el binario, octal y hexadecimal, y realizar operaciones aritméticas esenciales, como la suma en complemento a 2, fundamental para la arquitectura de computadoras.

Además, las MD abarcan conceptos estructurales como la teoría de conjuntos y las relaciones, que sirven para modelar datos y sus interconexiones. La lógica, incluyendo la proposicional y la de primer orden, proporciona el marco para el razonamiento y la demostración formal. Finalmente, el álgebra de Boole y los circuitos lógicos se aplican directamente en el diseño de _hardware_ y la simplificación de expresiones. Un nivel sobresaliente implica la capacidad de integrar estos elementos (lógica, estructuras discretas, bases numéricas) para valorar la solución de problemas en diversos ámbitos.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [x] Aplicar estructuras de datos lineales.
- [x] Analizar algoritmos usando matemáticas discretas (bases numéricas, matrices, funciones, teoría de conjuntos, permutaciones, reglas de conteo y redes de Petri).
- [x] Aplicar lógica computacional (lógica proposicional y lógica de primer orden, álgebra de Boole, circuitos lógicos).

##### Nivel Sobresaliente

- [x] Valorar la integración de los elementos de matemáticas discretas y lógica computacional para la solución de problemas complejos.
- [x] Demostrar equivalencia lógica entre proposiciones compuestas usando tautologías y reglas de inferencia.
- [x] Simplificar expresiones booleanas complejas a formas minimales utilizando mapas de Karnaugh y compuertas lógicas exclusivas (Nand o Nor).

---

#### 📚 Contenido Teórico

##### 1. Lógica y Demostraciones

**Definición:** La lógica matemática y la lógica de primer orden proporcionan el marco para el razonamiento, la deducción y la demostración formal en el campo del cómputo.
**Explicación:**
Las proposiciones son la base de la lógica. Existen proposiciones condicionales ("si $p$, entonces $q$, $p \rightarrow q$"), donde $p$ es la hipótesis y $q$ es la conclusión. Una proposición bicondicional ($p$ si y solo si $q$, $p \leftrightarrow q$) existe cuando $p$ y $q$ tienen la misma verdad. La equivalencia lógica ($P \equiv Q$) ocurre cuando $P \leftrightarrow Q$ es una tautología.

Las leyes de inferencia como el _Modus tollens_ y el _Modus ponens_ son argumentos válidos. Las tablas de verdad se usan para verificar las posibles combinaciones lógicas de V (Verdadero) y F (Falso) de proposiciones compuestas.

**Aspectos clave:**

- **Cuantificadores:** Se utilizan para especificar si una propiedad es válida para _todos_ los elementos (cuantificador universal $\forall x$) o para _al menos uno_ (cuantificador existencial $\exists x$) en un dominio.
- **Negación de Cuantificadores:** Para negar una proposición cuantificada, se pueden usar las leyes generalizadas de De Morgan para la lógica.
- **Inducción Matemática:** Es una técnica de demostración utilizada para probar que una propiedad $P(n)$ es válida para todos los enteros $n \geq a$, a partir de una base y un paso inductivo.

**Aplicaciones prácticas:** Se utiliza para la prueba de correctitud de algoritmos y para la inferencia de hechos en sistemas basados en reglas.

---

##### 2. Álgebra de Boole y Circuitos Lógicos

**Definición:** El Álgebra de Boole es fundamental en el diseño de circuitos digitales, permitiendo la manipulación lógica de variables binarias (0 y 1).
**Explicación:**
Las expresiones booleanas se pueden representar mediante circuitos lógicos, usando compuertas básicas como And, Or y Not. El objetivo principal es obtener la expresión booleana simplificada en sumas de productos o productos de sumas.

Para la simplificación, se utiliza el método de reducción de Mapas de Karnaugh. Este método es crucial para diseñar circuitos eficientes. Las expresiones simplificadas pueden luego implementarse usando compuertas lógicas exclusivas, como Nand o Nor, demostrando que son lógicamente equivalentes a la expresión original.

**Aspectos clave:**

- **Mapas de Karnaugh:** Herramienta interactiva para hacer el diagrama lógico de una expresión booleana. Permite la agrupación de términos para la minimización.
- **Compuertas Universales:** Las compuertas Nand y Nor son universales, lo que significa que cualquier circuito lógico puede construirse exclusivamente con uno de estos tipos de compuertas.

**Aplicaciones prácticas:** Diseño y optimización de circuitos de conmutación y _hardware_.

---

##### 3. Bases Numéricas y Aritmética Computacional

**Definición:** Los sistemas numéricos discretos (binario, octal, hexadecimal) son esenciales para representar y manipular cantidades dentro de la computadora.
**Explicación:**
Las computadoras realizan operaciones aritméticas básicas en estos sistemas. Una operación fundamental es la suma en complemento a 2 (C2), la cual permite realizar restas a través de la suma, facilitando la forma en que la computadora lleva a cabo las operaciones.

Para obtener el complemento a 2 de un número negativo, se toma su magnitud verdadera, se obtiene su complemento a 1 (invirtiendo bits), y luego se suma 1.

**Aspectos clave:**

- **Conversiones:** Se debe ser capaz de representar y convertir cantidades entre cualquier sistema numérico.
- **Complemento a 2:** Permite a la máquina manejar números negativos y realizar restas sin necesidad de un circuito de resta dedicado.
- **Desbordamiento:** Es importante considerar el tamaño de los datos (e.g., 2 bytes de memoria) para evitar el desbordamiento durante operaciones como la suma en C2.

**Aplicaciones prácticas:** Representación de datos en memoria, aritmética de bajo nivel y diseño de ALU (Unidad Aritmético-Lógica).

---

##### 4. Teoría de Conjuntos y Relaciones

**Definición:** La teoría de conjuntos define colecciones de elementos, mientras que las relaciones definen las asociaciones entre ellos, siendo cruciales para la organización de datos.
**Explicación:**
La teoría de conjuntos implica operaciones como la unión ($\cup$), intersección ($\cap$), y diferencia. En el contexto de datos, las relaciones $n$-arias se pueden representar mediante matrices de relaciones.

Las relaciones pueden tener propiedades como ser reflexivas, simétricas o transitivas. Si una relación es reflexiva, simétrica y transitiva, se considera una relación de equivalencia. También se estudian conceptos como las cerraduras para hacer que una relación cumpla estas propiedades. Las matrices se utilizan a menudo como estructuras de datos en MD, incluso en el contexto de bases de datos relacionales.

**Aspectos clave:**

- **Relación de Equivalencia:** Relación que cumple con las propiedades reflexiva, simétrica y transitiva.
- **Bases de Datos Relacionales:** La gestión de memoria, por ejemplo, utiliza listas para marcos libres que el sistema operativo debe mantener. El modelo relacional utiliza varrels, que son conjuntos de tuplas.

**Aplicaciones prácticas:** Modelado de datos (e.g., bases de datos relacionales), análisis de estructuras (como grafos y árboles) y gestión de recursos.

---

#### 📖 Glosario de Términos

<!-- markdownlint-disable MD013 -->

| Término                             | Definición                                                                                                                             | Contexto de uso                                                                           |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Álgebra de Boole                    | Rama de la matemática que trata con operaciones lógicas y valores binarios (Verdadero/Falso o 1/0).                                    | Diseño y simplificación de circuitos lógicos y compuertas.                                |
| Complemento a 2 (C2)                | Representación de números negativos en sistemas binarios, calculada invirtiendo bits (C1) y sumando 1.                                 | Aritmética de bajo nivel para permitir a las computadoras realizar restas mediante sumas. |
| Cuantificador Universal ($\forall$) | Símbolo de la lógica de primer orden que indica que una proposición es verdadera para _todos_ los elementos de un dominio.             | Formulación de proposiciones en lógica de primer orden y negaciones formales.             |
| Inducción Matemática                | Técnica de demostración para probar que una propiedad se cumple para todos los enteros $\geq a$ mediante una base y un paso inductivo. | Prueba formal de la correctitud de algoritmos y secuencias.                               |
| Proposición Condicional             | Proposición de la forma "Si $p$, entonces $q$" ($p \rightarrow q$), donde $p$ es la hipótesis y $q$ es la conclusión.                  | Análisis de argumentos y reglas de inferencia lógica.                                     |
| Mapa de Karnaugh                    | Herramienta gráfica utilizada para simplificar expresiones booleanas complejas a su forma más minimal.                                 | Optimización del diseño de circuitos lógicos, reduciendo el número de compuertas.         |
| Relación de Equivalencia            | Una relación que es simultáneamente reflexiva, simétrica y transitiva.                                                                 | Clasificación de elementos y partición de conjuntos, como en estructuras de datos.        |

<!-- markdownlint-enable MD013 -->

---

#### 🔗 Relaciones con Otros Subtemas

- **1.1 Análisis y Diseño de Algoritmos:** La MD proporciona las herramientas formales, como la inducción matemática, para demostrar la correctitud de los algoritmos. También provee las bases para el análisis de eficiencia asintótica ($\Theta$ notation).
- **1.2 Estructuras de Datos:** El descriptor de MD incluye la aplicación de estructuras de datos lineales. La teoría de conjuntos y las relaciones se utilizan para definir y manejar estructuras complejas, como matrices y grafos.
- **2.2 Compiladores:** Los conceptos de lenguajes formales y autómatas (máquinas de estado finito), aunque se estudian en Compiladores, tienen su base matemática en MD.
- **3.3 Bases de Datos:** El modelo relacional de bases de datos utiliza conceptos de relaciones $n$-arias y teoría de conjuntos para la manipulación de datos, como en las varrels y sus operaciones.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente

1.  **Operaciones Aritméticas en C2 y Bases Arbitrarias**

    - **Explicación detallada:** La capacidad de realizar la suma en Complemento a 2 (C2) para comprender la forma en que la computadora lleva a cabo operaciones aritméticas es vital. Esto requiere manejar la magnitud verdadera, el complemento a 1 y el complemento a 2, asegurando la correcta representación de los bits y el manejo de _carry_. Además, se espera operar en bases distintas a la decimal, binaria o hexadecimal (ej. base 14, base 17, base 20).
    - **Por qué es importante para Sobresaliente:** Permite al sustentante demostrar un conocimiento profundo de la aritmética de bajo nivel en sistemas de cómputo, y no solo en bases comunes.

2.  **Negación Formal y Argumentos Válidos**

    - **Explicación detallada:** Implica ir más allá de las tablas de verdad. Se requiere el uso formal de cuantificadores anidados ($\forall x \exists y$) y la aplicación de leyes de De Morgan para obtener la negación precisa de una proposición cuantificada. Asimismo, se debe poder traducir argumentos del lenguaje natural a notación lógica y usar reglas de inferencia para determinar su validez.
    - **Por qué es importante para Sobresaliente:** Demuestra la capacidad de formalizar problemas y validar el razonamiento, crucial en lógica computacional y especificaciones de sistemas.

3.  **Implementación de Circuitos con Compuertas Universales**
    - **Explicación detallada:** Después de obtener la expresión booleana simplificada (usando mapas o tautologías), el estudiante sobresaliente debe ser capaz de redibujar o describir el circuito implementándolo exclusivamente con compuertas Nand o exclusivamente con compuertas Nor.
    - **Por qué es importante para Sobresaliente:** Muestra la aplicación práctica de la teoría booleana en la optimización del diseño de _hardware_, lo cual es una integración de conceptos de lógica y arquitectura de computadoras.

---

##### Reactivos de Cuestionamiento Directo

###### Nivel Satisfactorio (1-4)

###### Reactivo 1

¿Cuál es la representación correcta del número decimal 76 en su Complemento a 2 (C2), asumiendo una representación de 8 bits (1 byte)?

A) 01001100

B) 10110100

C) 11011010

**Respuesta correcta:** B
**Justificación:** Para obtener el C2 de $-76$:

1.  Magnitud verdadera (76 en binario de 8 bits): $01001100$.
2.  Complemento a 1 (inversión de bits): $10110011$.
3.  Complemento a 2 (sumar 1 a C1): $10110011 + 1 = 10110100$.
    **Nivel:** Satisfactorio

---

###### Reactivo 2

¿Cuál es la propiedad que debe cumplir una relación binaria $R$ para ser clasificada como una relación de equivalencia, además de ser reflexiva y simétrica?

A) Antisímétrica

B) Irreflexiva

C) Transitiva

**Respuesta correcta:** C
**Justificación:** Una relación es de equivalencia si y solo si es reflexiva, simétrica y transitiva. La propiedad de transitividad establece que si $a R b$ y $b R c$, entonces $a R c$.
**Nivel:** Satisfactorio

---

###### Reactivo 3

Si $p$ es la proposición "Juan estudia la licenciatura en matemáticas" y $c$ es "Juan estudia la licenciatura en ciencias computacionales", ¿cuál es la notación lógica para el enunciado "Juan estudia la licenciatura en matemáticas pero no estudia la licenciatura en ciencias computacionales"?

A) $p \lor \neg c$

B) $p \land \neg c$

C) $\neg (p \land c)$

**Respuesta correcta:** B
**Justificación:** El término "pero" se traduce lógicamente como una conjunción ($\land$), y la negación se usa para "no estudia" ($\neg c$). Por lo tanto, es $p \land \neg c$.
**Nivel:** Satisfactorio

---

###### Reactivo 4

¿Cuál es el principal propósito del uso del método de reducción de Mapas de Karnaugh en el Álgebra de Boole?

A) Convertir expresiones booleanas a su forma canónica normal.

B) Determinar la validez de un argumento lógico complejo.

C) Simplificar una función booleana para reducir el número de compuertas necesarias.

**Respuesta correcta:** C
**Justificación:** El Mapa de Karnaugh es una herramienta para obtener la expresión booleana simplificada en sumas de productos o productos de sumas. Esto se traduce directamente en la optimización del circuito lógico, reduciendo la cantidad de compuertas.
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

Considere el argumento formal: _Si se realiza un buen diseño de la base de datos ($p$) y se hace una buena programación ($q$), entonces se accederá rápidamente a la información ($r$)_. _Si no se hace buena programación ($\neg q$), entonces toma mucho tiempo corregir el programa ($s$)_. _Por lo tanto, si no se accede rápidamente a la información ($\neg r$) y toma mucho tiempo corregir el programa ($s$), entonces no se ha realizado un buen diseño de la base de datos ($\neg p$)_. ¿Cuál es la representación formal de este argumento?

A) $[(p \land q) \rightarrow r] \land [\neg q \rightarrow s] \implies [(\neg r \land s) \rightarrow \neg p]$

B) $[p \rightarrow (q \land r)] \land [\neg q \rightarrow s] \implies [(\neg r \lor s) \rightarrow \neg p]$

C) $[(p \lor q) \rightarrow r] \land [q \rightarrow s] \implies [\neg r \rightarrow \neg p]$

**Respuesta correcta:** A
**Justificación:** La primera premisa es la conjunción de $p$ y $q$ implicando $r$. La segunda premisa es $\neg q$ implicando $s$. La conclusión se forma por la conjunción de $\neg r$ y $s$ implicando $\neg p$.
**Nivel:** Sobresaliente

---

###### Reactivo 6

Considere la proposición en lógica de primer orden: "Existe una persona $x$ en mi clase tal que para toda persona $y$ en mi clase, $x$ es al menos de la misma edad que $y$." ¿Cuál es la negación formal (usando las leyes de De Morgan generalizadas) de esta proposición?

A) $\forall x \exists y \neg P(x, y)$ (donde $P(x, y)$ es "x es al menos de la misma edad que y").

B) $\forall x \exists y (P(x) \land \neg P(y))$

C) $\exists x \forall y P(x, y)$

**Respuesta correcta:** A
**Justificación:** Si la proposición original es $\exists x \forall y P(x, y)$, la negación de una proposición cuantificada se obtiene negando los cuantificadores (cambiando $\exists$ por $\forall$ y $\forall$ por $\exists$) y negando la función proposicional. Por lo tanto, $\neg (\exists x \forall y P(x, y))$ se convierte en $\forall x \exists y \neg P(x, y)$.
**Nivel:** Sobresaliente

---

###### Reactivo 7

Si se tiene un número en base 13 como $7C9.A_{(13)}$ y otro número en base 17 como $1A3.0283_{(17)}$, ¿qué operación requiere el mayor cuidado en el manejo de símbolos y valores posicionales entre las bases dadas?

A) Suma de dos cantidades en complemento a 2 en base binaria.

B) Conversión de $7C9.A_{(13)}$ a base 10.

C) Suma de $7C9.A_{(13)}$ y $1A3.0283_{(17)}$ directamente en base decimal.

**Respuesta correcta:** B
**Justificación:** Las bases 13 y 17 son bases arbitrarias que usan símbolos para dígitos mayores a 9 (como C y A). Si bien la suma en C2 es compleja, la conversión entre una base arbitraria como la base 13 (donde $C$ vale 12, $A$ vale 10) y la base decimal requiere manejar correctamente los símbolos alfabéticos y sus valores posicionales específicos, lo que requiere un conocimiento riguroso de la generalización de las conversiones.
**Nivel:** Sobresaliente

---

###### Reactivo 8

Una función booleana $F$ ha sido simplificada, y para su implementación solo se dispone de compuertas NOR. ¿Cuál principio justifica la posibilidad de implementar cualquier función $F$ utilizando exclusivamente compuertas NOR?

A) El principio de dualidad, que asegura la existencia del complemento de la función.

B) El teorema de Shannon, que permite expandir la función en productos de sumas.

C) El carácter universal de la compuerta NOR, que permite simular las compuertas AND, OR y NOT.

**Respuesta correcta:** C
**Justificación:** Las compuertas NOR (así como las NAND) son compuertas universales. Esto significa que, con cualquiera de ellas, se pueden construir las compuertas lógicas básicas (AND, OR, NOT), y por lo tanto, cualquier circuito lógico.
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

Las variables locales en un procedimiento o función se pasan por \***\*\_\*\***, lo que significa que son tratadas como variables locales dentro del procedimiento. En cambio, los parámetros de tipo matriz se pasan por \***\*\_\*\***, lo cual significa que toda modificación efectuada dentro del procedimiento se ve reflejada en la matriz original.

El/Los elemento(s) que completa(n) correctamente el planteamiento es/son...

A) valor; referencia

B) referencia; valor

C) constante; variable

**Respuesta correcta:** A
**Justificación:** Los parámetros escalares (variables locales) se pasan por valor. Los parámetros tipo matriz o estructura se pasan por referencia, reflejando cualquier modificación realizada.
**Nivel:** Satisfactorio

---

###### Reactivo 10

El proceso de obtención de la representación de un número negativo en Complemento a 2 requiere primero obtener su Magnitud Verdadera, luego su \***\*\_\_\_\*\***, y finalmente sumarle 1 para obtener el Complemento a 2.

A) Residuo

B) Complemento a 1

C) Exceso a $2^{n-1}$

**Respuesta correcta:** B
**Justificación:** El cálculo de Complemento a 2 sigue los pasos: Magnitud Verdadera $\rightarrow$ Complemento a 1 (inversión de bits) $\rightarrow$ Complemento a 2 (sumar 1 a C1).
**Nivel:** Satisfactorio

---

###### Reactivo 11

En la Teoría de Conjuntos, si $H$, $C$ y $D$ son tres conjuntos, la región del diagrama de Venn que representa a los elementos que están en el conjunto $H$ y en el conjunto $C$, pero no en el conjunto $D$, se representa mediante la operación lógica $H \cap C \cap \neg D$.

A) $\neg (H \cup C) \cup D$

B) $H \cap C \cap \neg D$

C) $(H \cup C) \setminus D$

**Respuesta correcta:** B
**Justificación:** La conjunción $H \cap C$ representa "estar en $H$ y en $C$". El requisito de "pero no en $D$" se logra intersectando con la negación de $D$ ($\neg D$).
**Nivel:** Satisfactorio

---

###### Reactivo 12

Para que un argumento sea considerado válido, el valor de verdad de su conclusión debe ser \***\*\_\_\_\*\*** en todos los casos en los que el valor de verdad de sus premisas es \***\*\_\_\_\*\***.

A) Falso; Verdadero

B) Verdadero; Falso

C) Verdadero; Verdadero

**Respuesta correcta:** C
**Justificación:** Un argumento es válido si es imposible que las premisas sean verdaderas y la conclusión sea falsa. Por lo tanto, si las premisas son Verdaderas, la conclusión _debe_ ser Verdadera para que el argumento se mantenga.
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

El cálculo del total anual de producción para un arreglo tridimensional $A[I, J, L]$ requiere la acumulación de cantidades mensuales (índice $J$). Si se tienen los límites inferiores $I_{inf}=1$, $J_{inf}=1$ y $L_{inf}=1$, y los límites superiores $I_{sup}=5$, $J_{sup}=12$ y $L_{sup}=3$, el pseudocódigo para calcular $\sum_{I=1}^{5} \sum_{J=1}^{12} \sum_{L=1}^{3} A[I, J, L]$ es:

```
Hacer SUMA <- 0
Repetir con I desde 1 hasta 5
    Repetir con J desde 1 hasta 12
        Repetir con L desde 1 hasta 3
            Hacer SUMA <- SUMA + A[I, J, L]
        _________________________
    _________________________
_________________________
Escribir SUMA
```

El/Los elemento(s) que completa(n) correctamente el pseudocódigo es/son...

A) Fin del ciclo del paso L, Fin del ciclo del paso J, Fin del ciclo del paso I

B) Escribir A[I, J, L], Fin del ciclo del paso J, Fin del ciclo del paso I

C) Hacer SUMA <- SUMA + 1, Fin del ciclo del paso J, Fin del ciclo del paso I

**Respuesta correcta:** A
**Justificación:** La operación de acumulación (Hacer SUMA $\leftarrow$ SUMA + A[I, J, L]) se realiza dentro del ciclo más interno. Para que el pseudocódigo sea funcional, los ciclos deben cerrarse con las instrucciones de fin de ciclo correspondientes.
**Nivel:** Sobresaliente

---

###### Reactivo 14

Considere la suma en Complemento a 2 de dos números representados en 2 bytes (16 bits). Si se suman $-225_{(10)}$ y $76_{(10)}$, la representación binaria resultante de $2$ bytes del número $-149_{(10)}$ es $11111111101101001_{(2)}$. Para evitar el desbordamiento, se requiere agregar un byte adicional de extensión de signo. La representación final de 3 bytes (24 bits) para el número $-149_{(10)}$ es:

A) $00000000\ 11111111\ 10110100$

B) $11111111\ 11111111\ 01001011$

C) $11111111\ 11111111\ 10110100$

**Respuesta correcta:** C
**Justificación:** Cuando se extiende la representación de un número negativo en C2, se debe realizar la extensión del signo. El bit más significativo de $-149_{(10)}$ en 2 bytes es 1. Para extender a 3 bytes (24 bits), se agregan 8 bits con el valor 1 (el bit de signo) al inicio. La representación de 2 bytes es $11111111\ 10110100_{(2)}$. La extensión a 3 bytes es $11111111\ 11111111\ 10110100_{(2)}$.
**Nivel:** Sobresaliente

---

###### Reactivo 15

La definición de una región de ciclo $R$ en el análisis de flujo de datos requiere un cálculo iterativo. El proceso implica realizar el cálculo de la figura $9.50(b)$ y una pasada de arriba hacia abajo para buscar los valores del flujo de datos al inicio de cada región. Si $R_n$ es la última región, su cálculo de entrada es $ENT[R_n] = ENT[ENTRADA]$. El cálculo para cualquier otra región $R$ en $\{R_1, \ldots, R_{n-1}\}$, en orden descendente, es:

A) $ENT[R] = f_{R'} , ENT[R] (ENT[R'])$

B) $ENT[R] = f_{R, ENT[B]} = I$

C) $ENT[R] = \text{max}(ENT[R_1], ENT[R_2], \dots)$

**Respuesta correcta:** A
**Justificación:** Para una región $R$ en el orden descendente, se calcula $ENT[R]$ mediante la función $f_{R'}$ aplicada a la entrada de la región $R'$ inmediata anterior, lo que se denota como $ENT[R] = f_{R'} , ENT[R] (ENT[R'])$.
**Nivel:** Sobresaliente

---

###### Reactivo 16

Utilizando la simplificación booleana por Mapas de Karnaugh, si la función de salida simplificada en sumas de productos es $F = A'B'C'E + AB'C'E + BC + ABC'D' + AB'CE + A'B'C'DE' + ABC'DE$ ¿Cuál de las siguientes es una expresión lógicamente equivalente a la anterior?

A) $F = B'C'E + A'B'C'D + ABD' + ABC'E + BC$

B) $F = A'B'C'D'E + A'B'C'DE'$

C) $F = (A + C)(B + C')(C + D')$

**Respuesta correcta:** A
**Justificación:** La expresión original corresponde a un ejemplo de simplificación extensa. Durante el proceso de simplificación, se pueden utilizar tautologías y equivalencias lógicas (como $B'C'E(A' + A)$ o $BC(A' + A)$) para reducir la expresión. La expresión simplificada $F = B'C'E + A'B'C'D + ABD' + ABC'E + BC$ es una forma intermedia o final resultante de la aplicación rigurosa de estas leyes.
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione el concepto de Lógica Matemática con su definición:
**[Conjunto A]**

1. Proposición Bicondicional
2. Proposición Condicional
3. Lógica de Primer Orden
4. Cuantificadores
   **[Conjunto B]**
   a) Permite expresar que una proposición es válida para _todos_ o _existe al menos uno_.
   b) Expresión lógica de la forma "Si $p$, entonces $q$" ($p \rightarrow q$).
   c) Extensión de la lógica proposicional que incluye cuantificadores y predicados.
   d) Expresión lógica de la forma "$p$ si y solo si $q$" ($p \leftrightarrow q$).
   e) Argumento con premisas verdaderas y conclusión falsa.
   A) 1-b, 2-d, 3-a, 4-c
   B) 1-d, 2-b, 3-c, 4-a
   C) 1-d, 2-e, 3-c, 4-b
   **Respuesta correcta:** B
   **Justificación:**

- 1-d: La Proposición Bicondicional se denota como $p \leftrightarrow q$, que significa "$p$ si y solo si $q$".
- 2-b: La Proposición Condicional se denota como $p \rightarrow q$, que significa "Si $p$, entonces $q$".
- 3-c: La Lógica de Primer Orden, a diferencia de la proposicional, incorpora predicados y cuantificadores.
- 4-a: Los Cuantificadores (universal $\forall$ y existencial $\exists$) se usan para especificar si la proposición aplica a todos o a algunos elementos.
  **Nivel:** Satisfactorio

---

###### Reactivo 18

Relacione el tipo de operación de conjuntos o lógica con su descripción funcional:
**[Conjunto A]**

1. Conjunción ($\land$)
2. Disyunción ($\lor$)
3. Negación ($\neg$)
4. Intersección de conjuntos ($\cap$)
   **[Conjunto B]**
   a) Es verdadera si al menos una de las proposiciones es verdadera.
   b) Invierte el valor de verdad de una proposición.
   c) Es verdadera si ambas proposiciones son verdaderas.
   d) Conjunto de elementos que pertenecen a ambos conjuntos.
   e) Conjunto de elementos que pertenecen a cualquiera de los conjuntos.
   A) 1-c, 2-a, 3-b, 4-d
   B) 1-a, 2-c, 3-b, 4-e
   C) 1-c, 2-e, 3-b, 4-a
   **Respuesta correcta:** A
   **Justificación:**

- 1-c: La conjunción ($p \land q$) es verdadera solo si $p$ y $q$ son verdaderas.
- 2-a: La disyunción ($p \lor q$) es verdadera si $p$ o $q$ es verdadera.
- 3-b: La negación ($\neg p$) invierte el valor de verdad de $p$.
- 4-d: La Intersección de conjuntos produce los elementos comunes a ambos.
  **Nivel:** Satisfactorio

---

###### Reactivo 19

Relacione las estructuras de MD con su campo de aplicación principal:
**[Conjunto A]**

1. Matrices
2. Bases Numéricas
3. Teoría de Relaciones
4. Álgebra de Boole
   **[Conjunto B]**
   a) Representación de datos estructurados en una tabla.
   b) Fundamento del diseño de la lógica digital y circuitos de conmutación.
   c) Análisis de algoritmos y solución de problemas en diversos ámbitos.
   d) Representación de cantidades para operaciones aritméticas de la computadora.
   e) Implementación de estructuras de datos complejos (e.g., matrices de adyacencia en grafos).
   A) 1-a, 2-d, 3-e, 4-b
   B) 1-e, 2-c, 3-a, 4-d
   C) 1-c, 2-d, 3-a, 4-b
   **Respuesta correcta:** A
   **Justificación:**

- 1-a: Las matrices son estructuras de datos que almacenan elementos en renglones y columnas.
- 2-d: Los sistemas numéricos (binario, octal, hexadecimal) se usan para representar las cantidades con las que opera la máquina.
- 3-e: La teoría de relaciones se usa en bases de datos relacionales y en la representación de conexiones, como las matrices de adyacencia de los grafos.
- 4-b: El Álgebra de Boole se aplica directamente al diseño de circuitos lógicos, optimizando la lógica digital.
  **Nivel:** Satisfactorio

---

###### Reactivo 20

Relacione los errores lógicos con su descripción:
**[Conjunto A]**

1. Error Converso
2. Error Contrario
3. Argumento Válido (Modus Ponens)
4. Argumento Válido (Modus Tollens)
   **[Conjunto B]**
   a) Si $p \rightarrow q$ es premisa, y $\neg q$ es premisa, la conclusión es $\neg p$.
   b) Si $p \rightarrow q$ es premisa, y $\neg p$ es premisa, la conclusión incorrecta es $\neg q$.
   c) Si $p \rightarrow q$ es premisa, y $q$ es premisa, la conclusión incorrecta es $p$.
   d) Si $p \rightarrow q$ es premisa, y $p$ es premisa, la conclusión es $q$.
   e) La conclusión es siempre verdadera, sin importar las premisas.
   A) 1-c, 2-b, 3-d, 4-a
   B) 1-b, 2-c, 3-a, 4-d
   C) 1-c, 2-d, 3-a, 4-b
   **Respuesta correcta:** A
   **Justificación:**

- 1-c: El error converso se produce al concluir $p$ a partir de $p \rightarrow q$ y $q$.
- 2-b: El error contrario se produce al concluir $\neg q$ a partir de $p \rightarrow q$ y $\neg p$.
- 3-d: Modus Ponens es la regla válida: $p \rightarrow q$ y $p$ implican $q$.
- 4-a: Modus Tollens es la regla válida: $p \rightarrow q$ y $\neg q$ implican $\neg p$.
  **Nivel:** Satisfactorio

---

###### Reactivo 21

Relacione los conceptos de programación con su definición o aplicación en Algoritmia y MD:
**[Conjunto A]**

1. Matriz
2. Puntero
3. Multiplicación a la Russe
4. Recursividad
   **[Conjunto B]**
   a) Técnica que se utiliza cuando un procedimiento o función se llama a sí mismo.
   b) Una estructura de datos que consta de un número fijo de ítems del mismo tipo, almacenados contiguos.
   c) Mecanismo que se usa para crear dinámicamente registros o acceder a ellos.
   d) Algoritmo de multiplicación de enteros grandes cuyo tiempo requerido es por el orden de $mn$ (donde $m$ y $n$ son tamaños de operandos).
   e) Secuencia ordenada de elementos que permite inserción y eliminación rápidas.
   A) 1-b, 2-c, 3-d, 4-a
   B) 1-c, 2-a, 3-d, 4-b
   C) 1-b, 2-d, 3-a, 4-c
   **Respuesta correcta:** A
   **Justificación:**

- 1-b: Una matriz es una estructura de datos con número fijo de ítems del mismo tipo, almacenados contiguamente.
- 2-c: Los punteros se utilizan para la creación dinámica de registros o para hacer alusión a campos.
- 3-d: La multiplicación a la Russe requiere un tiempo por el orden de $mn$ para multiplicar enteros grandes de tamaños $m$ y $n$.
- 4-a: La recursividad implica que una función o procedimiento se llama a sí mismo.
  **Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Un ingeniero debe convertir una función booleana a su forma más compacta para luego implementarla usando solo compuertas NAND. Relacione las tareas con el concepto de MD que se aplica en cada paso:
**[Conjunto A]**

1. Simplificación a Suma de Productos (SOP)
2. Representación Gráfica de Minterms
3. Implementación exclusiva con NAND
4. Prueba de Equivalencia
   **[Conjunto B]**
   a) Teoremas y leyes del Álgebra de Boole (e.g., asociatividad, absorción).
   b) Uso de tablas de verdad completas para demostrar igualdad entre la función original y la simplificada.
   c) Uso de Mapas de Karnaugh para agrupación y minimización.
   d) Principio de compuertas universales.
   e) Lógica de primer orden.
   A) 1-c, 2-a, 3-d, 4-b
   B) 1-c, 2-b, 3-d, 4-a
   C) 1-c, 2-d, 3-a, 4-b
   **Respuesta correcta:** A
   **Justificación:**

- 1-c: La simplificación a SOP se realiza mediante técnicas como los Mapas de Karnaugh.
- 2-a: Aunque los mapas de Karnaugh son visuales, su justificación y la realización de la simplificación implican la aplicación de los teoremas y leyes del álgebra de Boole.
- 3-d: La implementación con un solo tipo de compuerta (NAND o NOR) se basa en el principio de compuertas universales.
- 4-b: La verificación de que la expresión simplificada es idéntica a la original se comprueba mediante la tabla de verdad, donde las columnas deben coincidir en todas sus líneas.
  **Nivel:** Sobresaliente

---

###### Reactivo 23

Relacione el concepto avanzado de la teoría de relaciones con el requisito de propiedad correspondiente que debe cumplir:
**[Conjunto A]**

1. Cerradura Transitiva
2. Relación Simétrica
3. Clases de Equivalencia
4. Transitividad
   **[Conjunto B]**
   a) Si la relación tiene $a R b$, también debe tener $b R a$.
   b) Partición de un conjunto en subconjuntos donde todos los elementos de un subconjunto están relacionados entre sí.
   c) La propiedad que debe agregarse a una relación para que satisfaga la condición de ser transitiva.
   d) Si $a R b$ y $b R c$, entonces $a R c$.
   e) Si la relación tiene $a R a$ para todo $a$ en el dominio.
   A) 1-c, 2-a, 3-b, 4-d
   B) 1-a, 2-c, 3-d, 4-b
   C) 1-d, 2-a, 3-b, 4-c
   **Respuesta correcta:** A
   **Justificación:**

- 1-c: La cerradura transitiva es el mecanismo para hacer que una relación que no es transitiva cumpla con esta propiedad.
- 2-a: Simetría: si $a$ está relacionado con $b$, $b$ debe estar relacionado con $a$.
- 3-b: Las clases de equivalencia son los subconjuntos resultantes de una relación de equivalencia, y forman una partición del conjunto original.
- 4-d: Transitividad: Si existe una conexión de $a$ a $c$ a través de $b$.
  **Nivel:** Sobresaliente

---

###### Reactivo 24

Considere las siguientes expresiones aritméticas que involucran bases numéricas arbitrarias y operaciones de bajo nivel. Relacione la operación con el concepto de MD que se aplica:
**[Conjunto A]**

1. Suma $2A.76_{(12)} + 5B7468A.9_{(12)}$
2. Cálculo de la fecha del Domingo de Pascua
3. Suma en Complemento a 2
4. Conversión de $D7C3F.5G_{(18)}$ a base 10
   **[Conjunto B]**
   a) Aplicación de un algoritmo basado en residuos (módulo) y divisiones sucesivas.
   b) Conversión y manejo posicional de caracteres alfabéticos como dígitos.
   c) Realización de la operación aritmética en sistemas no decimales.
   d) Uso de bits de signo y operaciones a nivel binario para simular la resta.
   e) Problema de combinatoria basado en reglas de conteo.
   A) 1-c, 2-a, 3-d, 4-b
   B) 1-d, 2-a, 3-c, 4-b
   C) 1-c, 2-e, 3-d, 4-a
   **Respuesta correcta:** A
   **Justificación:**

- 1-c: La suma en base 12 es una operación aritmética en un sistema no decimal, que requiere un manejo cuidadoso de los acarreos.
- 2-a: El cálculo de la fecha de Pascua se realiza mediante un algoritmo que utiliza operaciones módulo y manipulación de variables temporales, como $a = año \pmod{19}$.
- 3-d: El Complemento a 2 se utiliza para realizar la resta mediante la suma binaria, apoyándose en la representación de signo.
- 4-b: La base 18 requiere la conversión de símbolos alfabéticos $D, F, G$ a sus valores numéricos correspondientes, lo cual es fundamental en la generalización de conversiones.
  **Nivel:** Sobresaliente

---

###### Reactivo 25 - Integrador

Un equipo de desarrollo necesita diseñar una Unidad Aritmético Lógica (ALU) eficiente, para lo cual debe integrar conceptos de bases numéricas, álgebra de Boole y simplificación. Relacione las tareas de diseño con el concepto de MD subyacente que las resuelve:
**[Conjunto A]**

1. Definición del método para realizar la resta
2. Obtención de la expresión lógica minimal
3. Implementación del circuito final con bajo costo
4. Verificación de la correctitud de la implementación
   **[Conjunto B]**
   a) El uso exclusivo de compuertas NOR o NAND, aprovechando su universalidad.
   b) El análisis de la tabla de verdad de la función simplificada.
   c) Uso de Mapas de Karnaugh de 5 variables.
   d) Aplicación de la Suma en Complemento a 2.
   e) El uso de redes de Petri.
   A) 1-d, 2-c, 3-a, 4-b
   B) 1-a, 2-c, 3-d, 4-b
   C) 1-d, 2-a, 3-b, 4-c
   **Respuesta correcta:** A
   **Justificación:**

- 1-d: El método más eficiente para realizar la resta en una ALU es mediante la aplicación de la Suma en Complemento a 2 (C2), lo que requiere solo un circuito sumador.
- 2-c: La obtención de la expresión lógica minimal de la función del circuito (por ejemplo, para el sumador completo) se logra mediante herramientas de minimización, como los Mapas de Karnaugh.
- 3-a: La implementación más económica y modular se logra utilizando compuertas universales (NAND o NOR).
- 4-b: Una vez diseñado el circuito y obtenida la función booleana simplificada, la prueba rigurosa de que la función es lógicamente equivalente a la original se hace mediante la Tabla de Verdad.
  **Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

Antes de continuar al siguiente subtema, verifica que puedas:

##### Nivel Satisfactorio Checklist

- [x] Explicar con tus propias palabras todos los conceptos del glosario
- [x] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio (85%)
- [x] Identificar las aplicaciones prácticas de los conceptos
- [x] Traducir proposiciones simples del lenguaje natural a notación lógica.
- [x] Determinar las propiedades básicas de las relaciones (simetría, reflexividad).

##### Nivel Sobresaliente Checklist

- [x] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%)
- [x] Lograr al menos 21/25 reactivos correctos en total (84%)
- [x] Analizar escenarios complejos que integren múltiples conceptos (e.g., C2 y bases numéricas).
- [x] Relacionar este subtema con otros del EGEL (e.g., lógica en compiladores).
- [x] Formular la negación de proposiciones con cuantificadores anidados.
- [x] Justificar la implementación de circuitos usando solo compuertas universales.

---

#### 📌 Notas y Observaciones Personales

[Espacio para agregar notas durante el estudio]

---

#### 🔄 Última revisión

**Fecha:** [DD/MM/YYYY]
**Estado:** [ ] Por estudiar | [ ] En progreso | [ ] Revisado | [ ] Dominado
**Puntuación en cuestionario:** **\*/25 (**_** %)
**Desglose:** Satisfactorio **_/13 | Sobresaliente \_\*\* /12

---

#### 📚 Referencias

- Aho, Alfred, Hopcroft, John, E. y Ullman, Jefrey. (1988). Estructuras de Datos y Algoritmos.
- Brassard, G. & Bratley, P. (2008). Fundamentos de algoritmia.
- Cairo, Osvaldo y Guardati, Silvia. (2013). Estructuras de datos.
- Harris, John. M., Hirst, Jeffrey,L. y Mossinghoff, Micahel. J. (2008). Combinatorics and Graph Theory.
- Johnsonbaugh, Richard. (2005). Matemáticas Discretas.
- Murillo Jiménez, José Antonio. (2015) Matemáticas para la computación.
- Guía para el sustentante EGEL Plus COMPU (Junio de 2025).
- Compiladores - Principios, técnicas y herramientas.
- Fundamentos de Sistemas de Bases de Datos by Ramez A. Elmasri Shamkant B. Navathe José Manuel Díaz.
- Introducion-a-los-sistemas-de-bases-de-datos-cj-date.
- Fundamentos de Algoritmia - Bradley.
<!-- format:on -->
