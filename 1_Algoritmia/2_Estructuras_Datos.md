<!-- line-width:1000 -->
<!-- format:off -->

### [1.2] Estructuras de datos

**Área:** Algoritmia
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

El subtema de Estructuras de Datos es crucial dentro del área de Algoritmia y requiere la capacidad de aplicar tanto estructuras de datos lineales como colecciones heterogéneas. Las estructuras de datos permiten almacenar información de manera eficiente y son fundamentales para el diseño de algoritmos eficaces. Se distingue entre colecciones de elementos del mismo tipo, como las matrices, y colecciones heterogéneas definidas por el usuario, como los registros o estructuras.

Para un nivel Satisfactorio, el sustentante debe dominar el concepto de estructuras definidas por el usuario (registros) y las operaciones básicas en estructuras lineales como las pilas (LIFO). Para alcanzar el nivel Sobresaliente, es necesario comprender y aplicar la sintaxis para estructuras anidadas, así como diferenciar el uso de punteros para la creación dinámica de registros (listas) y la implementación de mecanismos de control como la recursividad.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [x] Definir un registro (estructura) como un tipo de dato estructurado y heterogéneo definido por el usuario.
- [x] Identificar los componentes de un registro (campos, elementos o miembros).
- [x] Comprender el principio de funcionamiento de la estructura de datos lineal tipo Pila (Last In, First Out o LIFO).

##### Nivel Sobresaliente

- [x] Aplicar la sintaxis de acceso a campos de registros simples y estructuras anidadas (registros dentro de registros).
- [x] Distinguir entre las estructuras que almacenan datos de tipo homogéneo (matrices) y las de tipo heterogéneo (registros).
- [x] Reconocer la utilidad de los punteros para la implementación de listas y la creación dinámica de registros.

---

#### 📚 Contenido Teórico

##### 1. Estructuras de Dato Registro (Struct)

**Definición:**
Un registro o estructura es un tipo de dato estructurado, definido por el usuario, que permite almacenar datos de diferente tipo (heterogéneos) en una sola variable. Se define como una colección finita y heterogénea de elementos, donde cada componente se llama campo.

**Explicación:**
Los datos dentro de un registro se conocen como campos, elementos o miembros. Estos campos pueden ser de tipos simples (caracteres, enteros, o coma flotante) o compuestos (vectores, listas u otras estructuras). En lenguajes como C, la sintaxis para definir una estructura es `struct ident_registro { ... } nomb_var`.

**Aspectos clave:**

- **Acceso a campos simples:** No se tiene acceso al registro directamente, sino a sus campos, utilizando la sintaxis `variable_registro.id_campo` (separado por un punto).
- **Registros anidados:** Un campo dentro de un registro puede ser, a su vez, otro registro (ej. un campo `dirección` que es un registro `DOMICILIO`).
- **Acceso anidado:** Para acceder a un campo que es un registro, se sigue la sintaxis `variable_registro.id_campo1.id_campo2`.

**Aplicaciones prácticas:**
Los registros se usan para almacenar información compleja y relacionada de una entidad, como todos los datos de un empleado (nombre, dirección, edad, sexo, antigüedad) o de un cliente (nombre, teléfono, saldo mensual del último año y si es moroso).

---

##### 2. Estructuras de Dato Matrices y Listas

**Definición:**
Una matriz (arreglo) es una estructura de datos que consta de un número fijo de ítems del mismo tipo (homogéneos). Sus elementos se almacenan en posiciones contiguas de la memoria. Una lista es una colección de elementos de información dispuestos en un cierto orden.

**Explicación:**
A diferencia de los registros, las matrices solo pueden contener componentes del mismo tipo. Una estructura compuesta como una lista puede ser implementada usando una matriz, aunque esto puede presentar desventajas de almacenamiento.

**Aspectos clave:**

- **Listas y punteros:** Si se emplean punteros para implementar una lista, los nodos suelen ser registros que contienen el valor y uno o más punteros. Los punteros se utilizan en conjunción con los registros para crear y destruir registros dinámicamente.
- **Pila (LIFO):** Es una clase de lista donde la adición y el borrado de elementos solo se pueden efectuar en un extremo. El principio LIFO (Last In, First Out) indica que el último elemento añadido es el primero en ser retirado.
- **Recursividad:** Es cuando una función se llama a sí misma. Para que la recursividad finalice, debe existir una condición previamente definida.

**Aplicaciones prácticas:**
Los arreglos pueden ser campos dentro de registros (ej., el saldo mensual del último año como un arreglo de reales dentro de un registro CLIENTE). La pila se usa, por ejemplo, en la retirada de documentos, donde los elementos añadidos en orden A, B, C, D se retirarían en orden D, C, B, A.

---

#### 📖 Glosario de Términos

| Término               | Definición                                                                                                                  | Contexto de uso                                                                                                  |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| Registro o Estructura | Tipo de dato estructurado definido por el usuario que almacena datos de diferente tipo (heterogéneos) en una sola variable. | Se utiliza para modelar objetos complejos de la vida real (ej. empleados, clientes).                             |
| Campo / Miembro       | Se refiere a cada uno de los datos individuales contenidos dentro de un registro.                                           | Se identifica con un nombre único para referenciar el dato específico dentro de la estructura.                   |
| Matriz (Arreglo)      | Colección de elementos de información que son todos del mismo tipo (homogéneos).                                            | Ideal para colecciones donde todos los datos son uniformes, como una lista de saldos reales.                     |
| Pila (LIFO)           | Estructura de colección en la que el último elemento en ser añadido es el primero en ser retirado (Last In, First Out).     | Modelado de secuencias donde la eliminación/adición ocurre solo en un extremo, como en la gestión de documentos. |
| Recursividad          | Es cuando una función o procedimiento se llama a sí misma.                                                                  | Se aplica en algoritmos donde la solución depende de resolver instancias más pequeñas del mismo problema.        |
| Puntero               | Mecanismo que se utiliza para hacer alusión a registros en conjunción con la creación dinámica.                             | Esencial para implementar estructuras dinámicas como listas, donde los nodos son registros.                      |

---

#### 🔗 Relaciones con Otros Subtemas

- **1.1 Análisis y diseño de algoritmos:** El uso de estructuras de datos adecuadas es un factor crucial para el diseño de algoritmos eficientes. La notación para los programas utiliza conceptos de registros y recursividad.
- **1.3 Matemáticas discretas:** Las matrices son estructuras estudiadas en esta subárea. Conceptos como funciones, teoría de conjuntos, reglas de conteo, y recursividad (sucesión de Fibonacci) se basan en nociones discretas.
- **3.2 Lenguajes de programación:** Los lenguajes orientados a objetos (como C++ o Java) utilizan estructuras (registros) y punteros. La programación orientada a objetos se relaciona con los registros al abstraer el comportamiento y atributos de objetos reales.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente

1. **Acceso a Elementos Anidados en Registros**
   - **Explicación detallada:** Cuando un registro contiene otro registro como uno de sus campos (registro anidado), el acceso a los datos de la estructura interna requiere especificar la jerarquía completa. La sintaxis utilizada es `variable_registro.id_campo1.id_campo2`.
   - **Por qué es importante para Sobresaliente:** Demuestra la comprensión de estructuras de datos complejas y heterogéneas (Sobresaliente) más allá de los registros simples, replicando cómo se modelan datos en contextos como bases de datos (Dirección: Calle, Número, Ciudad).
2. **Diferencia Fundamental: Matriz vs. Registro**
   - **Explicación detallada:** La matriz (arreglo) se caracteriza por la **homogeneidad**, lo que significa que todos sus elementos deben ser del mismo tipo. El registro (estructura) se caracteriza por la **heterogeneidad**, permitiendo almacenar datos de tipos distintos en una sola variable. Esta distinción es crítica para decidir qué estructura utilizar en el modelado de datos.
   - **Por qué es importante para Sobresaliente:** Permite al sustentante justificar la elección de la estructura óptima para un problema, como por ejemplo, decidir que la información de un empleado no puede ser un arreglo.
3. **Rol de los Punteros y Recursividad en Estructuras Dinámicas**
   - **Explicación detallada:** Los punteros se asocian con estructuras de datos que necesitan ser dinámicas, como las listas enlazadas. Un puntero puede tener el valor especial `nil` (o nulo) cuando no apunta a ningún registro. En el ámbito algorítmico, la **recursividad** es la técnica para resolver problemas llamándose a sí misma, y requiere una **condición de finalización**.
   - **Por qué es importante para Sobresaliente:** Demuestra la integración de conceptos algorítmicos (recursividad) y la implementación de estructuras de datos dinámicas (punteros, listas).

---

##### Reactivos de Cuestionamiento Directo

###### Nivel Satisfactorio (1-4)

###### Reactivo 1

¿Cuál es la característica fundamental que define la necesidad de utilizar un registro o estructura (struct) en lugar de una matriz (array)?

A) La capacidad de almacenar datos en posiciones de memoria no contiguas.

B) La posibilidad de que los elementos o campos almacenados sean de tipos de datos diferentes.

C) La restricción de que el acceso a los datos se realiza únicamente mediante notación de punto.

**Respuesta correcta:** B
**Justificación:** Un registro o estructura es una colección heterogénea de elementos, permitiendo almacenar datos de diferente tipo en una sola variable, a diferencia de una matriz, que requiere que todos los elementos sean del mismo tipo.

---

###### Reactivo 2

En el contexto de las estructuras de datos, ¿qué principio de operación rige a una Pila (Stack)?

A) FIFO (First In, First Out).

B) LIFO (Last In, First Out).

C) FEFO (First Executed, First Out).

**Respuesta correcta:** B
**Justificación:** Una Pila es una clase de lista donde el último elemento en ser añadido es el primero en ser retirado. Este comportamiento es conocido como LIFO.

---

###### Reactivo 3

Si se declara una variable de tipo registro llamada `CLIENTE` con un campo llamado `nombre`, ¿cuál es la sintaxis correcta para acceder y manipular el valor del campo `nombre`?

A) `CLIENTE -> nombre`

B) `nombre[CLIENTE]`

C) `CLIENTE.nombre`

**Respuesta correcta:** C
**Justificación:** Para acceder a un campo de una variable tipo registro, se utiliza la notación de punto, siguiendo la sintaxis `variable_registro.id_campo`.

---

###### Reactivo 4

¿Cómo se denomina a los datos individuales (caracteres, números enteros, o de coma flotante) que conforman un registro o estructura?

A) Celdas o índices.

B) Campos, elementos o miembros.

C) Vectores o tuplas.

**Respuesta correcta:** B
**Justificación:** A los datos del registro se les denomina campos, elementos o miembros.

---

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

Se requiere modelar la información de un acreedor que incluye su `nombre` (cadena de caracteres) y su `dirección`, donde la `dirección` está compuesta por `calle` (cadena) y `número` (entero). ¿Cuál es la estructura de acceso correcta para obtener el `número` del acreedor, asumiendo que el registro `ACREEDOR` tiene un campo `dirección` de tipo `DOMICILIO`?

A) `ACREEDOR.DOMICILIO.número`

B) `ACREEDOR.dirección.número`

C) `ACREEDOR->dirección->número`

**Respuesta correcta:** B
**Justificación:** Para acceder a los campos de un registro anidado, se debe utilizar la sintaxis `variable_registro.id_campo1.id_campo2`, donde `dirección` es el campo intermedio y `número` es el campo final al que se desea acceder.

---

###### Reactivo 6

Un desarrollador utiliza punteros para implementar una lista de registros. Si un puntero no apunta a ningún registro, ¿qué valor especial se le asigna típicamente?

A) `Void`

B) `Zero`

C) `Nil`

**Respuesta correcta:** C
**Justificación:** Un puntero tiene el valor especial `nil` (o nulo) si no apunta a ningún registro, lo cual es común al inicio o al final de las listas.
**Nivel:** Sobresaliente

---

###### Reactivo 7

¿Cuál es la condición indispensable para que el concepto de recursividad pueda ser aplicado exitosamente en el diseño de un algoritmo?

A) Que la función se declare como un procedimiento.

B) Que exista una condición previamente definida para finalizar la llamada a sí misma.

C) Que la función utilice punteros para la autoinvocación.

**Respuesta correcta:** B
**Justificación:** La recursividad es cuando una función se llama a sí misma, y para finalizarla debe existir una condición previamente definida.
**Nivel:** Sobresaliente

---

###### Reactivo 8

Una compañía necesita almacenar datos complejos y heterogéneos para cada uno de sus empleados (Nombre, Dirección, Edad, Sexo, Antigüedad). ¿Por qué no es posible usar un arreglo (matriz) para esta tarea?

A) Porque el tamaño del arreglo no se puede determinar de antemano.

B) Porque los componentes de un arreglo deben ser todos del mismo tipo.

C) Porque los arreglos no permiten el uso de notación de punto para acceder a sus elementos.

**Respuesta correcta:** B
**Justificación:** Si se desea almacenar datos de diferente tipo (cadenas, enteros, caracteres) no es posible usar un arreglo, ya que sus componentes deben ser todos del mismo tipo.
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

Un registro o estructura es un tipo de dato **\*\*\*\***\_\_**\*\*\*\*** y definido por el usuario que permite almacenar datos de **\*\*\*\***\_\_**\*\*\*\*** tipo en una sola variable.
El/Los elemento(s) que completa(n) correctamente el planteamiento es/son...

A) simple / único

B) estructurado / diferente

C) primitivo / el mismo

**Respuesta correcta:** B
**Justificación:** Un registro es un tipo de dato _estructurado_ que permite almacenar datos de _diferente_ tipo. Es la base de las estructuras heterogéneas.
**Nivel:** Satisfactorio

---

###### Reactivo 10

Si se añaden cuatro documentos (A, B, C, D) a una Pila en ese orden, y luego se retiran dos documentos, los primeros en salir serán **\*\***\_\_**\*\*** siguiendo el principio **\*\***\_\_**\*\***.

A) A y B / FIFO

B) C y D / LIFO

C) D y C / LIFO

**Respuesta correcta:** C
**Justificación:** El principio LIFO (Last In, First Out) dicta que el último elemento en entrar (D) es el primero en salir, seguido por el penúltimo (C).
**Nivel:** Satisfactorio

---

###### Reactivo 11

En la terminología de estructuras de datos, a los elementos que componen un registro, los cuales pueden ser de tipo simple o compuesto, se les denomina comúnmente **\*\*\*\***\_\_**\*\*\*\***, **\*\*\*\***\_\_**\*\*\*\*** o **\*\*\*\***\_\_**\*\*\*\***.

A) celdas, filas, columnas

B) campos, elementos, miembros

C) punteros, referencias, nodos

**Respuesta correcta:** B
**Justificación:** Los datos que componen un registro se denominan campos, elementos o miembros.
**Nivel:** Satisfactorio

---

###### Reactivo 12

La sintaxis en pseudocódigo para definir un registro típicamente inicia con `registro ident_registro inicio`, mientras que la sintaxis equivalente en lenguaje C es `struct ident_registro ______________`.

A) `public:`

B) `(`

C) `{`

**Respuesta correcta:** C
**Justificación:** Según la correspondencia entre pseudocódigo y lenguaje C para la definición de un registro, la palabra clave `inicio` se traduce en el corchete de apertura `{` en C.
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

Para implementar una lista de registros que pueden ser creados y destruidos de forma dinámica en tiempo de ejecución, se recomienda el uso de **\*\*\*\***\_\_**\*\*\*\*** en conjunción con los registros. Cuando la lista está vacía, el elemento que indica la ausencia de un registro se representa con el valor especial **\*\*\*\***\_\_**\*\*\*\***.

A) funciones / `NULL_PTR`

B) punteros / `nil`

C) índices / `0`

**Respuesta correcta:** B
**Justificación:** Los punteros se utilizan con registros para crear/destruir registros dinámicamente, y `nil` es el valor especial para indicar que un puntero no apunta a ningún registro.
**Nivel:** Sobresaliente

---

###### Reactivo 14

Para acceder a un campo de un registro que a su vez es un arreglo (por ejemplo, el campo `saldos` que es un arreglo de reales dentro de un registro `CLIENTE`), se debe utilizar la sintaxis que combina la notación de punto para el campo de registro con la notación de corchetes para el índice: `variable_registro.campo_arreglo [índice]`. Si se desea acceder al saldo del mes 5 del cliente `mi_cliente`, la sintaxis sería `mi_cliente.saldos`.
Si el campo `saldos` fuera a su vez un registro llamado `info_saldos` que contiene el arreglo, la sintaxis correcta para acceder al mes 5 sería `mi_cliente.info_saldos.saldos`.
Asumiendo que el campo `saldos` es directamente un arreglo, la sintaxis de acceso al mes 12 es:

A) `mi_cliente.saldos.12`

B) `mi_cliente.saldos`

C) `mi_cliente.saldos`

**Respuesta correcta:** C
**Justificación:** Se accede primero al campo `saldos` del registro `mi_cliente` utilizando la notación de punto, y luego se indexa el arreglo con corchetes para obtener el valor del mes 12: `variable_registro.campo_arreglo[índice]`.
**Nivel:** Sobresaliente

---

###### Reactivo 15

La definición del registro `CLIENTE` incluye los campos `nombre` (cadena), `teléfono` (cadena), `saldos` y `moroso` (booleano). Para almacenar los saldos mensuales del último año (12 reales), el campo `saldos` debe definirse como un **\*\*\*\***\_\_**\*\*\*\***.

A) registro `FECHA`

B) arreglo `[1..12] DE reales`

C) lista enlazada `DE reales`

**Respuesta correcta:** B
**Justificación:** El campo `saldos` es una colección de elementos del mismo tipo (reales), idealmente definidos como un arreglo unidimensional de tamaño 12 (ej. `ARREGLO [1..12] DE reales`).
**Nivel:** Sobresaliente

---

###### Reactivo 16

Una matriz es una estructura de datos que consta de un número fijo de ítems del mismo tipo, cuyos elementos suelen almacenarse en **\*\*\*\***\_\_**\*\*\*\*** contiguas de **\*\*\*\***\_\_**\*\*\*\***.

A) ubicaciones / registros

B) posiciones / almacenamiento

C) funciones / la variable

**Respuesta correcta:** B
**Justificación:** Los elementos de una matriz suelen almacenarse en _posiciones_ contiguas de _almacenamiento_.
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione el tipo de estructura de datos con su característica definitoria.

**[Estructura]**

1. Matriz (Arreglo)
2. Registro (Estructura)
3. Pila
   **[Característica]**
   a) Colección de campos relacionados de tipos de datos diferentes.
   b) Principio de funcionamiento LIFO (Last In, First Out).
   c) Colección de ítems que deben ser todos del mismo tipo.

A) 1-a, 2-c, 3-b

B) 1-b, 2-a, 3-c

C) 1-c, 2-a, 3-b

**Respuesta correcta:** C
**Justificación:** Una Matriz consta de ítems del mismo tipo (1-c). Un Registro almacena campos de diferente tipo (2-a). Una Pila opera bajo el principio LIFO (3-b).
**Nivel:** Satisfactorio

---

###### Reactivo 18

Relacione el concepto fundamental con su descripción clave.

**[Concepto]**

1. Recursividad
2. Punteros
3. Campo
   **[Descripción Clave]**
   a) Mecanismo esencial para la creación y destrucción dinámica de registros en estructuras de listas.
   b) Parte de un registro al que se tiene acceso mediante la notación de punto.
   c) Técnica algorítmica que requiere una condición predefinida para su finalización.

A) 1-c, 2-a, 3-b

B) 1-a, 2-c, 3-b

C) 1-c, 2-b, 3-a

**Respuesta correcta:** A
**Justificación:** La Recursividad debe tener una condición para finalizar (1-c). Los Punteros se usan para manejar registros dinámicamente (2-a). El Campo es un dato dentro del registro (3-b).
**Nivel:** Satisfactorio

---

###### Reactivo 19

Una compañía define un registro `CLIENTE` con varios campos. Relacione el tipo de dato requerido con el concepto de campo.

**[Tipo de Dato Requerido]**

1. Dato único y heterogéneo (ej. Edad)
2. Colección de datos homogéneos (ej. Saldos mensuales)
3. Dato complejo heterogéneo (ej. Dirección que incluye calle, número, ciudad)
   **[Concepto de Campo]**
   a) Campo que debe ser de tipo Estructura o Registro anidado.
   b) Campo que debe ser de tipo Matriz o Arreglo unidimensional.
   c) Campo que debe ser de tipo Entero simple.

A) 1-c, 2-b, 3-a

B) 1-a, 2-b, 3-c

C) 1-c, 2-a, 3-b

**Respuesta correcta:** A
**Justificación:** La Edad es un tipo simple (1-c). Los Saldos son homogéneos y recurrentes, ideales para un Arreglo (2-b). La Dirección compleja es un Registro dentro de otro (anidado) (3-a).
**Nivel:** Satisfactorio

---

###### Reactivo 20

Relacione la estructura de datos con su concepto de definición en el contexto de la programación.

**[Concepto]**

1. Estructura (Struct)
2. Lista
3. Matriz
   **[Definición]**
   a) Colección de ítems cuyo acceso se realiza mediante un índice numérico para un elemento específico.
   b) Colección ordenada de elementos que, en implementaciones dinámicas, suele requerir el uso de punteros.
   c) Colección de datos donde no es necesario establecer un orden entre los componentes ni la homogeneidad de tipos.

A) 1-c, 2-b, 3-a

B) 1-a, 2-c, 3-b

C) 1-b, 2-a, 3-c

**Respuesta correcta:** A
**Justificación:** La Estructura no requiere orden ni homogeneidad (1-c). Una Lista es una colección ordenada que a menudo usa punteros (2-b). El acceso a una Matriz se realiza por índice (3-a).
**Nivel:** Satisfactorio

---

###### Reactivo 21

Relacione la palabra clave utilizada en la definición de registros con el contexto de programación al que corresponde.

**[Contexto]**

1. Pseudocódigo
2. Lenguaje C
   **[Palabra/Símbolo]**
   a) `struct`
   b) `registro`
   c) `{`
   d) `fin`

A) 1-a,d; 2-b,c

B) 1-b,d; 2-a,c

C) 1-c,a; 2-b,d

**Respuesta correcta:** B
**Justificación:** En Pseudocódigo, se usan `registro` y `fin`. En Lenguaje C, se usan `struct` y `{` para iniciar la definición.
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Relacione el desafío de la estructura de datos con el mecanismo o principio que resuelve el problema.

**[Desafío/Problema]**

1. Acceder al código de la carrera en un registro `ESTUDIANTE` que contiene campos anidados.
2. Almacenar datos complejos de diferente tipo (Nombre, Dirección, Edad) para un objeto.
3. Garantizar que un algoritmo de autoinvocación (recursividad) no corra indefinidamente.
4. Simular la extracción de elementos en el orden inverso al que fueron introducidos.
   **[Mecanismo/Principio Solución]**
   a) Principio LIFO.
   b) Definición de una condición de finalización.
   c) Uso de un Registro o Estructura.
   d) Sintaxis de acceso con punto anidado (`reg.campo1.campo2`).

A) 1-d, 2-c, 3-b, 4-a

B) 1-c, 2-d, 3-a, 4-b

C) 1-d, 2-c, 3-a, 4-b

**Respuesta correcta:** A
**Justificación:** El acceso a campos anidados se logra con notación de punto anidada (1-d). Los datos heterogéneos requieren un Registro (2-c). La recursividad debe tener una condición de finalización (3-b). La simulación de orden inverso (el último entra, el primero sale) es el principio LIFO de la Pila (4-a).
**Nivel:** Sobresaliente

---

###### Reactivo 23

Relacione las siguientes operaciones de estructura de datos con el elemento subyacente que las facilita o requiere.

**[Operación Requerida]**

1. Determinar el fin de una secuencia de elementos en una lista implementada dinámicamente.
2. Almacenar los datos de un cliente (nombre, saldo, teléfono) en una sola variable.
3. Trasladar un elemento a la memoria local en un proceso de carga colaborativa (en cómputo paralelo).
   **[Elemento Estructural Subyacente]**
   a) Un campo tipo Arreglo para la colección de datos.
   b) Un puntero con valor `nil`.
   c) Una estructura de tipo Registro.

A) 1-b, 2-c, 3-a

B) 1-a, 2-c, 3-b

C) 1-b, 2-a, 3-c

**Respuesta correcta:** A
**Justificación:** El fin de una lista dinámica se marca con un puntero `nil` (1-b). Los datos heterogéneos de un cliente se modelan con un Registro (2-c). La carga colaborativa de datos tabulares (matrices) se realiza elemento por elemento (ej. `c5,2` de A y B) (3-a).
**Nivel:** Sobresaliente

---

###### Reactivo 24

Relacione la sintaxis de acceso con el tipo de estructura o implementación que le corresponde.

**[Sintaxis de Acceso]**

1. `variable_registro.id_campo`
2. `variable_registro.id_campo1.id_campo2`
3. `nombre_arreglo[i][j]`
   **[Estructura o Implementación]**
   a) Matriz multidimensional.
   b) Registro con campos anidados.
   c) Registro simple.

A) 1-c, 2-b, 3-a

B) 1-b, 2-c, 3-a

C) 1-a, 2-b, 3-c

**Respuesta correcta:** A
**Justificación:** La sintaxis de acceso por punto simple es para registros sin anidamiento (1-c). El punto anidado es para registros dentro de registros (2-b). El acceso con múltiples corchetes es típico de una Matriz multidimensional (3-a).
**Nivel:** Sobresaliente

---

###### Reactivo 25

Relacione el uso de estructuras con la flexibilidad y el propósito que ofrecen.

**[Uso o Propósito]**

1. Almacenamiento de elementos en memoria contigua, accediendo por índice.
2. Permitir que una función se repita, siempre que exista un mecanismo de parada.
3. Definir un tipo de dato que contiene campos de diferente naturaleza.
   **[Estructura o Concepto]**
   a) Recursividad.
   b) Matriz.
   c) Registro.

A) 1-b, 2-a, 3-c

B) 1-c, 2-b, 3-a

C) 1-a, 2-c, 3-b

**Respuesta correcta:** A
**Justificación:** La Matriz permite el almacenamiento contiguo y el acceso por índice (1-b). La Recursividad implica la repetición o autoinvocación controlada por una condición de parada (2-a). El Registro se define para contener datos heterogéneos (3-c).
**Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

Antes de continuar al siguiente subtema, verifica que puedas:

##### Nivel Satisfactorio Checklist

- [x] Explicar con tus propias palabras todos los conceptos del glosario.
- [x] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio (85%)
- [x] Identificar las aplicaciones prácticas de los conceptos (ej. modelar un empleado).
- [x] Identificar la sintaxis básica para la definición y acceso a los campos de un registro.
- [x] Explicar la lógica de adición y retiro de elementos en una pila (LIFO).

##### Nivel Sobresaliente Checklist

- [x] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%)
- [x] Lograr al menos 21/25 reactivos correctos en total (84%)
- [x] Analizar escenarios complejos que integren múltiples conceptos (ej. registros anidados, uso de punteros `nil`).
- [x] Relacionar este subtema con otros del EGEL (ej. influencia en el diseño algorítmico y paradigmas de programación).
- [x] Diferenciar el uso de un arreglo de un registro basándose en la homogeneidad de los datos.
- [x] Determinar la sintaxis correcta para acceder a campos que son, a su vez, otros registros.

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

- Cabrera Rodríguez, Jacinto. (2020). Programación multimedia y dispositivos móviles.
- Cairo, O. (2015). Metodología de la programación. Algoritmos, diagramas de flujo y programas (3ª ed.). Alfaomega.
- Cairo, O., & Guardati, S. (2013). Estructuras de datos (3ª ed.). McGraw Hill.
- Corona, M., & Ancona, M. (2011). Diseño de algoritmos y su codificación en lenguaje C. McGraw Hill.
- Estructuras de Datos - Cairo.
- Fundamentos de Algoritmia - Bradley.
- Guía CENEVAL EGEL PLUS CIENCIAS COMPUTACIONALES...
- Guía para el sustentante EGEL Plus COMPU_Junio de 2025.
- Prog. Paradigms for Dummies.
- Programming Paradigms 2.
- Sistemas Operativos William Stallings.
- Subtema_Actual_ED.md.
- Excerpts from "2018_Book_IntroductionToParallelComputin.pdf".

  <!-- format:off -->
