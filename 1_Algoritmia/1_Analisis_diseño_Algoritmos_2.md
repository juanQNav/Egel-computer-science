<!-- line-width: 1000 -->
<!-- format:off -->

### 1.1 Análisis y diseño de algoritmos - V2

**Área:** Algoritmia
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

El análisis y diseño de algoritmos es la piedra angular de la computación eficiente. Este subtema se centra en determinar la cantidad de recursos (tiempo y espacio) necesarios para ejecutar un algoritmo, utilizando fundamentos matemáticos sólidos. No basta con que un programa funcione (efectividad); debe hacerlo de manera óptima (eficiencia). Se evalúa la capacidad para seleccionar el algoritmo adecuado comparando su comportamiento asintótico.

Para el EGEL Plus, este tema integra conocimientos de matemáticas discretas y lógica computacional. Se requiere no solo calcular la complejidad de un fragmento de código (como bucles anidados o recursividad), sino también aplicar teoría de conjuntos, conteo (permutaciones/combinaciones) y lógica para validar la corrección y eficiencia de las soluciones propuestas.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [ ] Identificar estructuras de datos lineales y su aplicación básica.
- [ ] Analizar la complejidad temporal básica (O grande) de algoritmos iterativos simples.
- [ ] Aplicar conceptos básicos de matemáticas discretas: bases numéricas, operaciones de conjuntos y tablas de verdad.

##### Nivel Sobresaliente

- [ ] Determinar la complejidad asintótica exacta ($\Theta$) y cotas inferiores ($\Omega$) de algoritmos complejos y recursivos.
- [ ] Resolver ecuaciones de recurrencia asociadas a algoritmos de "divide y vencerás".
- [ ] Integrar lógica de predicados, álgebra booleana y circuitos lógicos en el diseño y validación de algoritmos.

---

#### 📚 Contenido Teórico

##### 1. Complejidad Asintótica y Análisis de Algoritmos

**Definición:** Es el estudio del crecimiento del tiempo de ejecución (o espacio) de un algoritmo conforme crece el tamaño de la entrada $n$. Se utiliza notación asintótica para describir este comportamiento limitante, ignorando constantes multiplicativas y términos de orden inferior.

**Explicación:**
Al analizar algoritmos, medimos el número de operaciones elementales (asignaciones, comparaciones) en función de la entrada. El **Peor Caso** es el más utilizado pues ofrece una garantía de límite superior. El **Caso Promedio** requiere conocer la distribución estadística de las entradas.

- **Big O ($O$):** Cota superior asintótica. $f(n) = O(g(n))$ si $f(n) \le c \cdot g(n)$ para $n$ grandes. Usado para el peor caso.
- **Omega ($\Omega$):** Cota inferior asintótica. $f(n) = \Omega(g(n))$ si $f(n) \ge c \cdot g(n)$. Usado para el mejor caso.
- **Theta ($\Theta$):** Cota ajustada (orden exacto). $f(n) = \Theta(g(n))$ si es tanto $O(g(n))$ como $\Omega(g(n))$.

**Aspectos clave:**

- **Bucles Simples:** Un bucle que va de 1 a $n$ es $O(n)$.
- **Bucles Anidados:** Si el bucle interno depende del externo (ej. `for i=1 to n; for j=1 to i`), la complejidad suele ser $O(n^2)$ (suma aritmética).
- **Recursividad:** Se analiza mediante ecuaciones de recurrencia (ej. $T(n) = 2T(n/2) + n$ para MergeSort).

**Aplicaciones prácticas:**
Selección de algoritmos de ordenamiento. Para $n$ pequeño, Insertion Sort ($O(n^2)$) puede ser rápido, pero para $n$ grande, se requiere Merge Sort o Quick Sort ($O(n \log n)$).

---

##### 2. Matemáticas Discretas en Algoritmos

**Definición:** Conjunto de herramientas matemáticas utilizadas para modelar problemas computacionales y contar la complejidad de los mismos. Incluye teoría de conjuntos, conteo y relaciones.

**Explicación:**
Los algoritmos manipulan conjuntos de datos. Las **operaciones de conjuntos** (unión, intersección, diferencia) son fundamentales para bases de datos y algoritmos de búsqueda. Los **métodos de conteo** (permutaciones y combinaciones) son vitales para analizar la complejidad de algoritmos de fuerza bruta que exploran todas las posibles soluciones, así como para calcular probabilidades discretas.

**Aspectos clave:**

- **Permutaciones ($P(n,r)$):** Importa el orden. Se usa en problemas de ordenamiento o rutas (agente viajero). Fórmula: $n! / (n-r)!$.
- **Combinaciones ($C(n,r)$):** No importa el orden. Se usa para seleccionar subconjuntos. Fórmula: $n! / (r!(n-r)!)$.
- **Sistemas Numéricos:** Conversión y operaciones entre binario, octal y hexadecimal son esenciales para entender cómo se procesan los datos a bajo nivel.

**Aplicaciones prácticas:**
Calcular cuántas contraseñas posibles existen (permutación con repetición) para estimar el tiempo que tardaría un ataque de fuerza bruta.

---

##### 3. Lógica Computacional

**Definición:** Uso de lógica formal para representar y validar el flujo y la corrección de programas y circuitos digitales.

**Explicación:**
La **lógica proposicional** utiliza conectores (AND, OR, NOT, Implicación) para formar enunciados complejos. Las tablas de verdad permiten verificar todas las posibles entradas de una condición lógica. El **Álgebra de Boole** simplifica expresiones lógicas, optimizando condiciones en el código y diseño de circuitos.

**Aspectos clave:**

- **Equivalencia Lógica:** Dos proposiciones son equivalentes si tienen la misma tabla de verdad (ej. Leyes de De Morgan: $\neg(p \land q) \equiv \neg p \lor \neg q$).
- **Predicados:** Enunciados que dependen de variables (ej. $\forall x P(x)$). Usados en especificación formal de requisitos.
- **Circuitos Lógicos:** Representación física de operaciones booleanas mediante compuertas.

**Aplicaciones prácticas:**
Simplificación de un `if` complejo en programación. Si tienes `if(!A && !B)`, por De Morgan es lo mismo que `if(!(A || B))`, lo cual puede ser más legible o eficiente.

---

#### 📖 Glosario de Términos

<!-- markdownlint-disable MD013 -->

| Término                  | Definición                                                                         | Contexto de uso                                               |
| :----------------------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| **Algoritmo**            | Conjunto finito, preciso y ordenado de instrucciones para resolver un problema.    | Base de toda la programación.                                 |
| **Complejidad Temporal** | Medida del tiempo que tarda un algoritmo en función del tamaño de la entrada.      | Comparación de eficiencia entre algoritmos.                   |
| **Notación Big O ($O$)** | Cota superior asintótica; el "techo" del crecimiento de una función.               | Análisis del peor escenario de ejecución.                     |
| **Recurrencia**          | Ecuación que define una secuencia o función en términos de sus valores anteriores. | Análisis de algoritmos recursivos (ej. Fibonacci, MergeSort). |
| **Inducción Matemática** | Técnica de demostración que prueba un caso base y un paso inductivo.               | Probar la corrección de bucles y algoritmos recursivos.       |
| **Tautología**           | Proposición compuesta que es siempre verdadera.                                    | Validación de argumentos lógicos y simplificación.            |
| **Permutación**          | Arreglo ordenado de objetos de un conjunto.                                        | Problemas de búsqueda, ordenamiento y criptografía.           |
| **Álgebra Booleana**     | Estructura algebraica que esquematiza operaciones lógicas (AND, OR, NOT).          | Diseño de circuitos y optimización de condiciones lógicas.    |

<!-- markdownlint-enable MD013 -->

---

#### 🔗 Relaciones con Otros Subtemas

- **1.2 Estructuras de datos:** El análisis de algoritmos se aplica directamente para evaluar la eficiencia de operaciones (inserción, búsqueda) en pilas, colas y listas.
- **1.4 Lógica computacional:** Proporciona la base formal (tablas de verdad, inferencia) utilizada para verificar la corrección de los algoritmos diseñados en este subtema.
- **4.1 Inteligencia Artificial:** Los métodos de búsqueda y optimización en IA requieren un fuerte análisis de complejidad combinatoria (permutaciones/combinaciones).

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente

1.  **Resolución de Recurrencias (Teorema Maestro)**

    - Debes saber identificar cuando un algoritmo recursivo divide el problema en subproblemas de tamaño $n/b$. El Teorema Maestro proporciona una forma directa de obtener la complejidad ($T(n) = aT(n/b) + f(n)$).
    - **Por qué es importante:** Diferencia a un analista capaz de evaluar algoritmos complejos ("divide y vencerás") de uno que solo evalúa bucles simples.

2.  **Integración de Lógica y Circuitos**
    - Capacidad de traducir entre una expresión lógica, su tabla de verdad y su circuito digital correspondiente, y luego simplificar la expresión usando mapas de Karnaugh o álgebra booleana.
    - **Por qué es importante:** Demuestra comprensión profunda de cómo la lógica abstracta se traduce en implementaciones físicas o de software optimizadas.

---

#### 📝 Cuestionario de Práctica

##### Instrucciones

- Total de reactivos: 25.
- Cada reactivo tiene 3 opciones (A, B, C).
- Solo una opción es correcta.
- Tiempo sugerido: 50 minutos.

---

##### Reactivos de Cuestionamiento Directo

###### Nivel Satisfactorio (1-4)

###### Reactivo 1

Un algoritmo realiza una búsqueda secuencial en una lista desordenada de $n$ elementos para encontrar un valor específico. En el peor de los casos, ¿cuántas comparaciones realizará?

A) $\log_2 n$

B) $n/2$

C) $n$

**Respuesta correcta:** C
**Justificación:** En una búsqueda secuencial (lineal), el peor caso ocurre cuando el elemento buscado está al final de la lista o no existe. En este escenario, el algoritmo debe comparar el elemento buscado con cada uno de los $n$ elementos de la lista. Por tanto, la complejidad es $O(n)$.
**Nivel:** Satisfactorio

###### Reactivo 2

Se tiene el conjunto $A = \{1, 2, 3, 4, 5\}$. Se desea formar códigos de 3 dígitos utilizando los elementos de $A$ sin repetir ningún dígito en el código. ¿Cuántos códigos distintos se pueden formar?

A) 10

B) 60

C) 125

**Respuesta correcta:** B
**Justificación:** Se trata de una permutación de 5 elementos tomados de 3 en 3, ya que el orden importa (un código 123 es distinto a 321) y no hay repetición. La fórmula es $P(n,r) = n! / (n-r)!$. $P(5,3) = 5! / 2! = (5 \times 4 \times 3) = 60$.
**Nivel:** Satisfactorio

###### Reactivo 3

Determine cuál de las siguientes opciones representa la operación lógica "SI p ENTONCES q" ($p \rightarrow q$) utilizando operadores básicos (negación, disyunción).

A) $\neg p \lor q$

B) $\neg p \land q$

C) $p \lor \neg q$

**Respuesta correcta:** A
**Justificación:** La equivalencia lógica de la implicación ($p \rightarrow q$) es $\neg p \lor q$. Esto significa que la implicación es verdadera si el antecedente es falso o el consecuente es verdadero.
**Nivel:** Satisfactorio

###### Reactivo 4

¿Cuál es el resultado de sumar los números binarios $1011_2$ y $1101_2$?

A) $10100_2$

B) $11000_2$

C) $11100_2$

**Respuesta correcta:** B
**Justificación:** Suma bit a bit: $1+1=0$ (llevo 1), $1+0+1=0$ (llevo 1), $0+1+1=0$ (llevo 1), $1+1+1=1$ (llevo 1). Resultado final con acarreo: $11000_2$. ($11 + 13 = 24$ en decimal).
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

Analice el siguiente fragmento de código y determine su complejidad temporal asintótica ($\Theta$):

```
for i = 1 to n:
    j = 1
    while j < n:
        print(i, j)
        j = j * 2
```

A) $\Theta(n^2)$

B) $\Theta(n \log n)$

C) $\Theta(n)$

**Respuesta correcta:** B
**Justificación:** El ciclo externo se ejecuta $n$ veces. El ciclo interno (`while j < n`) incrementa $j$ multiplicándolo por 2 en cada iteración. Esto es un crecimiento logarítmico, ejecutándose $\log_2 n$ veces. Como el ciclo interno se ejecuta completo por cada iteración del externo, la complejidad total es $n \times \log n$.
**Nivel:** Sobresaliente

###### Reactivo 6

¿Cuál es la solución de la relación de recurrencia $T(n) = 2T(n/2) + n$, que describe algoritmos como Merge Sort?

A) $O(n)$

B) $O(n^2)$

C) $O(n \log n)$

**Respuesta correcta:** C
**Justificación:** Aplicando el Teorema Maestro: $a=2, b=2, f(n)=n$. Calculamos $n^{\log_b a} = n^{\log_2 2} = n^1 = n$. Como $f(n) = \Theta(n^{\log_b a})$, estamos en el Caso 2 del Teorema Maestro. La solución es $T(n) = \Theta(n^{\log_b a} \log n) = \Theta(n \log n)$.
**Nivel:** Sobresaliente

###### Reactivo 7

En lógica de predicados, ¿cuál es la negación correcta de la proposición "Todos los estudiantes de computación saben programar" ($\forall x (E(x) \rightarrow S(x))$)?

A) Ningún estudiante de computación sabe programar.

B) Existe al menos un estudiante de computación que no sabe programar.

C) Todos los estudiantes de computación no saben programar.

**Respuesta correcta:** B
**Justificación:** La negación de un cuantificador universal ($\forall$) es un cuantificador existencial ($\exists$) con la proposición negada. $\neg(\forall x (E(x) \rightarrow S(x))) \equiv \exists x \neg(E(x) \rightarrow S(x))$. Recordando que $p \rightarrow q \equiv \neg p \lor q$, su negación es $p \land \neg q$. Por tanto: $\exists x (E(x) \land \neg S(x))$. "Existe un estudiante que es de computación Y no sabe programar".
**Nivel:** Sobresaliente

###### Reactivo 8

Considere un algoritmo que verifica la primalidad de un número $n$ probando divisores desde 2 hasta $\sqrt{n}$. Si se usa como operación básica la división, ¿cuál es su orden de complejidad?

A) $O(n)$

B) $O(\sqrt{n})$

C) $O(\log n)$

**Respuesta correcta:** B
**Justificación:** El bucle se ejecuta mientras el divisor $i$ cumpla $i \cdot i \le n$, es decir $i \le \sqrt{n}$. El número de iteraciones crece en función de la raíz cuadrada de la entrada, resultando en una complejidad $O(\sqrt{n})$.
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

Complete la siguiente tabla de verdad para la operación XOR (O exclusiva):
| P | Q | P XOR Q |
|---|---|---|
| V | V | F |
| V | F | V |
| F | V | V |
| F | F | \_\_ |

El valor faltante es:

A) V

B) F

C) Indeterminado

**Respuesta correcta:** B
**Justificación:** La operación XOR (O exclusiva) devuelve Verdadero solo si las entradas son diferentes. Si ambas entradas son Falso (F, F), el resultado es Falso.
**Nivel:** Satisfactorio

###### Reactivo 10

Analice la siguiente sucesión generada por un algoritmo recursivo: 1, 1, 2, 3, 5, 8, \_\_, 21.
El número que completa la secuencia es:

A) 11

B) 13

C) 15

**Respuesta correcta:** B
**Justificación:** Es la sucesión de Fibonacci, donde $F_n = F_{n-1} + F\_{n-2}$. El número faltante es la suma de 5 + 8, que es 13.
**Nivel:** Satisfactorio

###### Reactivo 11

En teoría de conjuntos, la operación que resulta en un conjunto que contiene los elementos que pertenecen a A o a B, pero no a ambos, se conoce como **\_\_\_**.

A) Diferencia simétrica ($A \Delta B$)

B) Intersección ($A \cap B$)

C) Diferencia ($A - B$)

**Respuesta correcta:** A
**Justificación:** La diferencia simétrica es el equivalente en conjuntos de la operación XOR lógica. Contiene elementos en la unión menos los de la intersección.
**Nivel:** Satisfactorio

###### Reactivo 12

Complete el siguiente pseudocódigo para calcular el factorial de $n$ de forma iterativa:

```
factorial = 1
for i = 1 to n:
    ___________
return factorial
```

A) `factorial = factorial + i`

B) `factorial = factorial * i`

C) `factorial = i * i`

**Respuesta correcta:** B
**Justificación:** La definición de factorial ($n!$) es el producto de todos los enteros positivos desde 1 hasta $n$. Por tanto, se debe acumular el producto en cada iteración.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

Dada la relación de recurrencia $T(n) = T(n-1) + n$, que corresponde a un algoritmo con un bucle simple, la forma cerrada que representa su complejidad es **\_\_**.

A) $n(n+1)/2$

B) $n^2 + n$

C) $2^n$

**Respuesta correcta:** A
**Justificación:** Esta recurrencia representa la suma de los primeros $n$ enteros (1 + 2 + ... + n). La suma aritmética de Gauss es $n(n+1)/2$, que es $O(n^2)$.
**Nivel:** Sobresaliente

###### Reactivo 14

Se desea simplificar la expresión booleana $F(A,B,C) = ABC + AB\bar{C} + A\bar{B}C$.
Utilizando álgebra booleana, la expresión reducida es: **\_\_**.

A) $A(B + C)$

B) $A(B + \bar{B}C)$

C) $A$

**Respuesta correcta:** A
**Justificación:**
Factorizamos A: $A(BC + B\bar{C} + \bar{B}C)$.
Factorizamos B en los primeros términos: $A(B(C + \bar{C}) + \bar{B}C)$.
Como $C+\bar{C}=1$: $A(B + \bar{B}C)$.
Aplicando ley de absorción ($X + \bar{X}Y = X + Y$): $A(B + C)$.
**Nivel:** Sobresaliente

###### Reactivo 15

En el análisis de un algoritmo, se obtiene la función de tiempo $f(n) = 3n^2 + 10n \log n + 500$.
La clasificación $\Theta$ (orden exacto) que completa correctamente el análisis es $\Theta(\text{___})$.

A) $n \log n$

B) $n^2$

C) $n$

**Respuesta correcta:** B
**Justificación:** Para determinar $\Theta$, buscamos el término dominante cuando $n \to \infty$. $n^2$ crece más rápido que $n \log n$ y que una constante. Por lo tanto, el término cuadrático domina el comportamiento.
**Nivel:** Sobresaliente

###### Reactivo 16

Complete la siguiente definición recursiva para el conjunto de cadenas binarias palíndromas $P$:

1. $\lambda \in P$, $0 \in P$, $1 \in P$ (Base)
2. Si $x \in P$, entonces **\_\_** $\in P$ y **\_\_** $\in P$.
   A) $0x0$, $1x1$
   B) $0x1$, $1x0$
   C) $x0$, $x1$
   **Respuesta correcta:** A
   **Justificación:** Un palíndromo se lee igual al derecho y al revés. La regla recursiva debe mantener esta simetría agregando el mismo símbolo al inicio y al final de una cadena que ya es palíndroma.
   **Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione la notación asintótica con su nombre común.

**[Notación]**

1. $O(1)$
2. $O(n)$
3. $O(n^2)$
4. $O(\log n)$

**[Nombre]**
a) Lineal
b) Constante
c) Logarítmica
d) Cuadrática

A) 1b, 2a, 3d, 4c

B) 1a, 2b, 3c, 4d

C) 1b, 2c, 3a, 4d

**Respuesta correcta:** A
**Justificación:**
1-b: $O(1)$ no depende de $n$ (constante).
2-a: $O(n)$ crece proporcional a $n$ (lineal).
3-d: $O(n^2)$ crece al cuadrado (cuadrática).
4-c: $O(\log n)$ crece logarítmicamente.
**Nivel:** Satisfactorio

###### Reactivo 18

Relacione el operador de conjuntos con su diagrama de Venn o descripción conceptual.

**[Operador]**

1. $A \cup B$
2. $A \cap B$
3. $A - B$
4. $A \subseteq B$

**[Descripción]**
a) Elementos en A y también en B
b) Elementos en A que no están en B
c) Todos los elementos de A están contenidos en B
d) Elementos que están en A, en B o en ambos

A) 1d, 2a, 3b, 4c

B) 1a, 2d, 3c, 4b

C) 1d, 2c, 3b, 4a

**Respuesta correcta:** A
**Justificación:**
1-d: Unión agrupa todo.
2-a: Intersección es la parte común.
3-b: Diferencia resta los elementos de B.
4-c: Subconjunto implica contención total.
**Nivel:** Satisfactorio

###### Reactivo 19

Relacione la compuerta lógica con su expresión booleana.

**[Compuerta]**

1. AND
2. OR
3. NOT
4. NAND

**[Expresión]**
a) $\overline{A \cdot B}$
b) $A + B$
c) $A \cdot B$
d) $\bar{A}$

A) 1c, 2b, 3d, 4a

B) 1b, 2c, 3a, 4d

C) 1c, 2a, 3d, 4b

**Respuesta correcta:** A
**Justificación:**
1-c: AND es producto lógico ($\cdot$).
2-b: OR es suma lógica ($+$).
3-d: NOT es negación (barra superior).
4-a: NAND es AND negado.
**Nivel:** Satisfactorio

###### Reactivo 20

Relacione la base numérica con los dígitos permitidos en ella.

**[Base]**

1. Binario
2. Octal
3. Decimal
4. Hexadecimal

**[Dígitos]**
a) 0-9, A-F
b) 0-1
c) 0-9
d) 0-7

A) 1b, 2d, 3c, 4a

B) 1b, 2c, 3d, 4a

C) 1a, 2b, 3c, 4d

**Respuesta correcta:** A
**Justificación:**
1-b: Base 2 usa 0,1.
2-d: Base 8 usa 0-7.
3-c: Base 10 usa 0-9.
4-a: Base 16 usa 0-9 y A-F.
**Nivel:** Satisfactorio

###### Reactivo 21

Relacione el tipo de algoritmo con su característica principal.

**[Tipo]**

1. Voraz (Greedy)
2. Divide y Vencerás
3. Fuerza Bruta
4. Recursivo

**[Característica]**
a) Divide el problema en subproblemas, resuelve y combina.
b) Toma la mejor decisión local en cada paso esperando un óptimo global.
c) Se llama a sí mismo con un caso base.
d) Explora todas las posibilidades exhaustivamente.

A) 1b, 2a, 3d, 4c

B) 1a, 2b, 3c, 4d

C) 1b, 2d, 3a, 4c

**Respuesta correcta:** A
**Justificación:**
1-b: Greedy busca óptimos locales.
2-a: Divide y vencerás es partición y combinación.
3-d: Fuerza bruta es exhaustivo.
4-c: Recursividad implica autollamada.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Relacione el fragmento de código con su complejidad asintótica $\Theta$.

**[Código]**

1. `for i=1 to n { print(i) }`
2. `for i=1 to n { for j=1 to n { print(i,j) } }`
3. `for i=1 to n { for j=1 to i { print(i,j) } }`
4. `i=1; while(i<n) { print(i); i=i*2 }`

**[Complejidad]**
a) $\Theta(n^2)$
b) $\Theta(n)$
c) $\Theta(\log n)$

A) 1b, 2a, 3a, 4c

B) 1b, 2a, 3b, 4c

C) 1a, 2b, 3a, 4b

**Respuesta correcta:** A
**Justificación:**
1-b: Bucle simple $\to n$.
2-a: Bucles anidados independientes $\to n \times n = n^2$.
3-a: Bucles anidados dependientes (suma aritmética $1+2+...+n$) $\to n(n+1)/2 \to n^2$.
4-c: Bucle con multiplicación $\to \log n$.
**Nivel:** Sobresaliente

###### Reactivo 23

Relacione la ley de equivalencia lógica con su formulación.

**[Ley]**

1. De Morgan (AND)
2. Distributiva (AND sobre OR)
3. Contrapositiva
4. Absorción

**[Formulación]**
a) $p \to q \equiv \neg q \to \neg p$
b) $\neg(p \land q) \equiv \neg p \lor \neg q$
c) $p \land (p \lor q) \equiv p$
d) $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$

A) 1b, 2d, 3a, 4c

B) 1a, 2d, 3b, 4c

C) 1b, 2c, 3a, 4d

**Respuesta correcta:** A
**Justificación:**
1-b: Negación de AND es OR de negaciones.
2-d: Distribución del operador.
3-a: Invertir y negar antecedente/consecuente.
4-c: Reducción de la expresión al término común.
**Nivel:** Sobresaliente

###### Reactivo 24

Relacione la ecuación de recurrencia con el algoritmo que típicamente la genera.

**[Recurrencia]**

1. $T(n) = 2T(n/2) + n$
2. $T(n) = T(n-1) + 1$
3. $T(n) = T(n/2) + 1$
4. $T(n) = 2T(n-1) + 1$

**[Algoritmo]**
a) Búsqueda Binaria
b) Torres de Hanoi
c) Merge Sort
d) Búsqueda Lineal Recursiva

A) 1c, 2d, 3a, 4b

B) 1c, 2a, 3d, 4b

C) 1a, 2d, 3c, 4b

**Respuesta correcta:** A
**Justificación:**
1-c: Divide en 2, trabajo lineal de combinación (MergeSort).
2-d: Reduce el problema en 1 (Lineal).
3-a: Reduce el problema a la mitad, trabajo constante (Binaria).
4-b: Dos llamadas recursivas con $n-1$ (Hanoi, $2^n$).
**Nivel:** Sobresaliente

###### Reactivo 25 - Integrador

Se está diseñando un sistema seguro de control de acceso. Se requiere un módulo que verifique permutaciones de llaves. Relacione los conceptos teóricos con su aplicación en este diseño.

**[Concepto]**

1. Inducción Matemática
2. Complejidad Exponencial ($O(2^n)$)
3. Compuerta XOR
4. Combinación ($C(n,r)$)

**[Aplicación]**
a) Comparar si los bits de la llave ingresada difieren de la llave almacenada (detección de errores).
b) Probar formalmente que el algoritmo recursivo de generación de llaves funciona para cualquier longitud $n$.
c) Calcular el número de subgrupos de llaves maestras posibles sin importar el orden para asignar permisos.
d) Clasificación de eficiencia del algoritmo de fuerza bruta para romper la llave.

A) 1b, 2d, 3a, 4c

B) 1a, 2c, 3b, 4d

C) 1b, 2a, 3d, 4c

**Respuesta correcta:** A
**Justificación:**
Este reactivo integra los cuatro pilares del subtema:
1-b: **Lógica/Demostración:** La inducción es el método estándar para probar correctitud de algoritmos recursivos sobre enteros ($n$).
2-d: **Análisis de Algoritmos:** Los problemas de fuerza bruta sobre conjuntos de bits o permutaciones suelen caer en clases de complejidad intratables (exponencial).
3-a: **Circuitos Lógicos:** XOR es la operación fundamental para comparación de bits y criptografía (diferencia simétrica).
4-c: **Conteo:** Las combinaciones se usan cuando el orden de selección no importa (subgrupos).
**Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

##### Nivel Satisfactorio Checklist

- [ ] Explicar con tus propias palabras todos los conceptos del glosario (Big O, Algoritmo, etc.)
- [ ] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio (85%)
- [ ] Identificar las aplicaciones prácticas de los conceptos (ej. uso de permutaciones en contraseñas)
- [ ] Calcular operaciones binarias básicas y conversiones de base
- [ ] Analizar la complejidad de bucles `for` simples y anidados independientes

##### Nivel Sobresaliente Checklist

- [ ] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%)
- [ ] Lograr al menos 21/25 reactivos correctos en total (84%)
- [ ] Analizar escenarios complejos que integren múltiples conceptos (Reactivo 25)
- [ ] Relacionar este subtema con otros del EGEL (Estructuras de datos y Lógica)
- [ ] Resolver ecuaciones de recurrencia usando el Teorema Maestro
- [ ] Simplificar expresiones lógicas complejas y traducirlas a circuitos

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

- Fundamentos de Algoritmia - Bradley.pdf (Capítulos 2, 3, 4, 7)
- 1.4 Logica Computacional.pdf (Lógica proposicional, Circuitos)
- Algorithms and Complexity - Analysis of Algorithms.mp4 (Transcripción)
- Matemáticas discretas con aplicaciones - Johnsonbaugh (Capítulos de Conteo y Lógica)
- Descriptor EGEL Plus: Área 1 Algoritmia / 1.1 Análisis y diseño de algoritmos
