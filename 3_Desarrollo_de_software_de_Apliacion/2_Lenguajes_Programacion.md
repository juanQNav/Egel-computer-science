<!-- line-width: 1000 -->
<!-- format:off -->

### [3.2] Lenguajes de Programación

**Área:** Desarrollo de Software de Aplicación
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

El subtema de Lenguajes de Programación se centra en la capacidad de seleccionar, aplicar y evaluar diferentes herramientas de codificación según el problema a resolver. No se limita a la sintaxis de un solo lenguaje, sino que abarca la comprensión de los **paradigmas de programación** (imperativo, orientado a objetos, funcional), sus características distintivas y sus entornos de ejecución (Web, Móvil, Escritorio).

Es fundamental comprender cómo se estructuran los programas, desde el uso de estructuras de control básicas hasta conceptos avanzados como el polimorfismo y la herencia en la Orientación a Objetos (OO). Además, se integra el conocimiento sobre el desarrollo moderno, incluyendo la distinción entre _Front-End_ y _Back-End_, el manejo de bases de datos a través de lenguajes como PHP, y el desarrollo para dispositivos móviles.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [ ] Identificar las características principales de los paradigmas de programación (estructurado vs. orientado a objetos).
- [ ] Reconocer la sintaxis y estructura básica de lenguajes comunes (C, Java) y estructuras de control (bucles, condicionales).
- [ ] Distinguir entre tecnologías de desarrollo Web _Client-side_ (HTML, CSS, JS) y _Server-side_ (PHP).

##### Nivel Sobresaliente

- [ ] Analizar y aplicar conceptos avanzados de POO como polimorfismo, herencia y encapsulamiento en la resolución de problemas.
- [ ] Evaluar la idoneidad de un lenguaje o paradigma (incluyendo programación funcional) para escenarios específicos (concurrencia, web, móvil).
- [ ] Integrar conceptos de intercambio de información mediante APIs (REST) y manejo de memoria en la selección de soluciones tecnológicas.

---

#### 📚 Contenido Teórico

##### 1. Paradigmas de Programación

**Definición:** Un paradigma es un estilo o forma de programación que dicta cómo se estructuran y ejecutan las instrucciones del software. No es un lenguaje en sí, sino una filosofía de construcción.

**Explicación:**
El área de algoritmia se basa en paradigmas imperativos y procedimentales, donde se detalla el "cómo" se hace una tarea paso a paso. Sin embargo, el área de aplicación moderna se inclina fuertemente hacia la **Programación Orientada a Objetos (POO)** y, más recientemente, la **Programación Funcional**.

**Aspectos clave:**

- **Imperativo/Procedural:** Se basa en instrucciones secuenciales, modularidad y cambios de estado (ej. C).
- **Orientado a Objetos (POO):** Organiza el código en "objetos" que contienen datos y comportamientos. Sus pilares son: Clases, Objetos, Herencia, Polimorfismo y Encapsulamiento.
- **Funcional:** Trata la computación como la evaluación de funciones matemáticas, evitando cambios de estado y datos mutables. Ha ganado fuerza recientemente.

##### 2. Programación Orientada a Objetos (POO)

**Definición:** Modelo que estructura el diseño de software alrededor de datos u objetos, en lugar de funciones y lógica.

**Explicación:**
Es crucial para el examen, ya que la bibliografía resalta Java y C++. Se debe entender cómo los objetos interactúan mediante mensajes.

**Aspectos clave:**

- **Herencia:** Mecanismo donde una nueva clase (subclase) adquiere propiedades y comportamientos de una clase existente (superclase). Facilita la reutilización.
- **Polimorfismo:** Capacidad de una entidad (método u objeto) de comportarse de diferentes formas. Permite que una referencia a una clase padre apunte a un objeto de la clase hija y ejecute el método sobrescrito correspondiente,.
- **Encapsulamiento:** Ocultar los detalles internos del funcionamiento de un objeto y exponer solo lo necesario (interfaz pública).

##### 3. Desarrollo Web y Móvil

**Definición:** Conjunto de lenguajes y tecnologías para crear aplicaciones que se ejecutan en navegadores o dispositivos móviles.

**Explicación:**
El examen evalúa tanto el _Front-End_ (lo que ve el usuario) como el _Back-End_ (lógica del servidor). Se asume un énfasis en PHP y MySQL para el Back-End debido a la bibliografía.

**Aspectos clave:**

- **Front-End:** HTML (estructura), CSS (estilo), Javascript (interactividad).
- **Back-End:** PHP es el lenguaje de script del lado del servidor predominante en la bibliografía de la guía. Se encarga de la lógica de negocio y conexión a BD.
- **API REST:** Mecanismo para el intercambio de información entre sistemas web, fundamental para la comunicación entre Front y Back o entre distintos servicios.
- **Móvil:** Desarrollo enfocado principalmente en Android (Java) según la bibliografía.

---

#### 📖 Glosario de Términos

<!-- markdownlint-disable MD013 -->

| Término           | Definición                                                                                                   | Contexto de uso                                          |
| :---------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| **Polimorfismo**  | Capacidad de objetos de diferentes clases de responder al mismo mensaje de manera distinta.                  | POO, diseño de jerarquías de clases y métodos virtuales. |
| **Herencia**      | Propiedad que permite crear nuevas clases a partir de existentes, reutilizando código y atributos.           | POO, relaciones "es-un" (ej. Gerente es un Empleado).    |
| **API REST**      | Interfaz de programación de aplicaciones que usa HTTP para obtener, poner, publicar y eliminar datos (CRUD). | Comunicación entre servicios web y aplicaciones móviles. |
| **Scripting**     | Lenguaje de programación interpretado (como PHP o JS) diseñado para integrar y comunicar otros componentes.  | Desarrollo Web, automatización de tareas.                |
| **Sobrecarga**    | Definir múltiples métodos con el mismo nombre pero diferentes parámetros dentro de la misma clase.           | POO, flexibilidad en la llamada de funciones.            |
| **Sobrescritura** | Redefinir un método heredado de la clase padre en la clase hija.                                             | POO, implementación específica en subclases (Override).  |

<!-- markdownlint-enable MD013 -->

---

#### 🔗 Relaciones con Otros Subtemas

- **3.1 Ingeniería de Software:** El diseño de clases y diagramas UML (Clase, Secuencia) modelan la estructura de los lenguajes POO.
- **3.3 Bases de Datos:** Los lenguajes de _Back-End_ (PHP) interactúan directamente con SQL para la persistencia de datos.
- **1.1 Análisis de Algoritmos:** La eficiencia del código escrito en cualquier lenguaje depende de la complejidad algorítmica subyacente.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos distinguen al experto del novato.

1.  **Manejo de Memoria y Punteros:**
    - Entender la diferencia entre paso por valor y paso por referencia, y cómo lenguajes como C/C++ manejan punteros explícitos, mientras que Java maneja referencias implícitas. Esto es vital para la depuración y optimización.
2.  **Distinción Fina en POO:**
    - No confundir **Sobrecarga** (mismo nombre, distinta firma, tiempo de compilación) con **Sobrescritura** (mismo nombre, misma firma, tiempo de ejecución/polimorfismo dinámico). Los reactivos de innovación o de código suelen trampear con esto.

---

#### 📝 Cuestionario de Práctica

##### Instrucciones

- **Tiempo sugerido:** 40 minutos.
- **Regla de oro:** Lee cuidadosamente cada línea de código presentada.

---

##### Reactivos de Cuestionamiento Directo

###### Nivel Satisfactorio (1-4)

###### Reactivo 1

En el contexto del desarrollo web, ¿cuál es la función principal de un lenguaje de _scripting_ del lado del servidor como PHP?

A) Definir la estructura semántica y el contenido del documento web que visualiza el usuario.

B) Procesar la lógica de negocio, interactuar con la base de datos y generar contenido dinámico antes de enviarlo al cliente.

C) Proporcionar estilos visuales, animaciones y adaptabilidad a diferentes tamaños de pantalla en el navegador.

**Respuesta correcta:** B
**Justificación:** PHP es un lenguaje de _Back-End_ (lado del servidor). Su función es procesar datos, conectar con bases de datos (como MySQL) y generar el HTML resultante. La opción A describe HTML y la C describe CSS.
**Nivel:** Satisfactorio

---

###### Reactivo 2

En el paradigma de Programación Orientada a Objetos, ¿cómo se denomina al mecanismo que permite agrupar datos y los métodos que operan sobre esos datos en una sola unidad, ocultando los detalles internos de implementación?

A) Herencia

B) Polimorfismo

C) Encapsulamiento

**Respuesta correcta:** C
**Justificación:** El encapsulamiento es el principio de ocultar el estado interno y la funcionalidad de un objeto, exponiendo solo lo necesario. La herencia (A) es para reutilización jerárquica y el polimorfismo (B) para múltiples formas de comportamiento.
**Nivel:** Satisfactorio

---

###### Reactivo 3

¿Cuál de los siguientes paradigmas de programación se basa en el cambio de estado del programa a través de la ejecución secuencial de instrucciones y el uso de asignaciones destructivas?

A) Paradigma Imperativo

B) Paradigma Funcional

C) Paradigma Lógico

**Respuesta correcta:** A
**Justificación:** El paradigma imperativo (y por extensión el procedural) se centra en describir "cómo" se realiza la tarea mediante secuencias de comandos que modifican el estado de la memoria. El funcional (B) evita cambios de estado.
**Nivel:** Satisfactorio

---

###### Reactivo 4

En el lenguaje Java, ¿cuál es la firma correcta para declarar el método principal (_main_) que sirve como punto de entrada de la aplicación?

A) `public void main(String args)`

B) `public static void main(String[] args)`

C) `static public int main(String args[])`

**Respuesta correcta:** B
**Justificación:** Según la guía de referencia técnica para Java en el contexto del examen, el método debe ser público, estático, no retornar valor (`void`) y recibir un arreglo de cadenas (`String[] args` o `String args[]`).
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

Analice el siguiente fragmento de código en C. ¿Qué concepto de manejo de memoria está ilustrado y cuál es el riesgo potencial?

```c
struct recurso { float medida; float *acceso; };
struct recurso informe;
informe.acceso = &datos;
```

A) Paso por valor; riesgo de duplicación de datos innecesaria.

B) Asignación de punteros; riesgo de acceder a memoria no válida si el arreglo `datos` sale de ámbito.

C) Herencia de estructuras; riesgo de sobrescritura de métodos en tiempo de ejecución.

**Respuesta correcta:** B
**Justificación:** El código asigna la dirección de memoria de un elemento de un arreglo a un puntero dentro de una estructura. Esto es manipulación directa de memoria (punteros). El riesgo (dangling pointer) ocurre si `datos` deja de existir pero `informe.acceso` sigue apuntando allí. C no tiene herencia (opción C),.
**Nivel:** Sobresaliente

---

###### Reactivo 6

En una aplicación que requiere alta concurrencia sin efectos secundarios en los datos compartidos, ¿qué paradigma de programación es el más recomendado y por qué?

A) Orientado a Objetos, debido a su capacidad de encapsular el estado en objetos individuales.

B) Imperativo, debido a su control granular sobre el flujo de ejecución y la memoria.

C) Funcional, debido a la inmutabilidad de los datos y la ausencia de efectos secundarios.

**Respuesta correcta:** C
**Justificación:** La programación funcional evita el estado mutable. Al no haber cambios de estado, se eliminan las condiciones de carrera en entornos concurrentes, lo que la hace ideal para este escenario. La POO (A) se basa en el estado mutable (objetos).
**Nivel:** Sobresaliente

---

###### Reactivo 7

Se desea implementar un sistema que intercambie información entre una aplicación móvil Android y un servidor web. La arquitectura debe ser ligera y sin estado. ¿Qué tecnología es la más adecuada para la comunicación?

A) SOAP con XML

B) API REST con JSON

C) Conexión directa a base de datos MySQL

**Respuesta correcta:** B
**Justificación:** Para comunicación moderna, ligera y sin estado entre móvil y web, las APIs REST (generalmente usando JSON) son el estándar. Permiten el intercambio de información entre diferentes plataformas. La conexión directa (C) es insegura y mala práctica.
**Nivel:** Sobresaliente

---

###### Reactivo 8

Considere una clase `Figura` con un método `dibujar()` y dos subclases `Circulo` y `Cuadrado` que implementan su propia versión de `dibujar()`. Si se tiene una lista de tipo `Figura` que contiene instancias mixtas y se llama a `dibujar()` en cada una, se ejecuta la versión correcta. ¿Qué pilar de la POO permite esto?

A) Polimorfismo por sobrecarga

B) Polimorfismo por inclusión (o dinámico)

C) Herencia simple

**Respuesta correcta:** B
**Justificación:** Es polimorfismo dinámico (o por inclusión/sobrescritura). El método a ejecutar se decide en tiempo de ejecución según el tipo real del objeto, no el tipo de la variable referencia. La herencia (C) es el medio, pero el polimorfismo es el mecanismo de ejecución,.
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

En la estructura de control repetitiva `do-while`, la condición se evalúa **\_\_** del bloque de instrucciones, lo que garantiza que el bloque se ejecute al menos **\_\_** vez/veces.

A) al inicio - una

B) al final - una

C) al final - cero

**Respuesta correcta:** B
**Justificación:** A diferencia del `while` o `for`, el `do-while` ejecuta primero el cuerpo y luego evalúa la condición, garantizando al menos una ejecución,.
**Nivel:** Satisfactorio

---

###### Reactivo 10

En el lenguaje C, para declarar una variable que almacenará un número real con punto decimal, se utiliza la palabra reservada **\_\_**; mientras que para un número entero se utiliza **\_\_**.

A) float - int

B) real - entero

C) double - long

**Respuesta correcta:** A
**Justificación:** Las palabras reservadas estándar en C para estos tipos de datos son `float` (o `double`) e `int`. "Real" y "entero" son términos de pseudocódigo.
**Nivel:** Satisfactorio

---

###### Reactivo 11

Para que una clase en Java pueda utilizar los métodos de otra clase existente, se debe establecer una relación de **\_\_**, utilizando la palabra reservada `extends`.

A) composición

B) herencia

C) instanciación

**Respuesta correcta:** B
**Justificación:** La herencia es el mecanismo que permite a una clase derivar de otra. En Java se implementa explícitamente con `extends`.
**Nivel:** Satisfactorio

---

###### Reactivo 12

En el contexto de bases de datos y programación, un **\_\_** es un bloque de código SQL almacenado en la base de datos que se ejecuta automáticamente en respuesta a un evento específico en una tabla.

A) procedimiento almacenado

B) disparador (trigger)

C) índice

**Respuesta correcta:** B
**Justificación:** Aunque ambos son código en la BD, la característica de ejecución _automática_ ante un evento (INSERT, UPDATE, DELETE) define al disparador o _trigger_.
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

Analice el siguiente código recursivo:

```c
int funcion(int n) {
  if (n == 0) return 1;
  else return n * funcion(n - 1);
}
```

Si se llama a `funcion(4)`, el valor de retorno será **\_\_** y el número de llamadas totales a la función (incluyendo la original) será **\_\_**.

A) 24 - 4

B) 24 - 5

C) 12 - 5

**Respuesta correcta:** B
**Justificación:** La función calcula el factorial. 4! = 24. Las llamadas son: f(4), f(3), f(2), f(1), f(0). Total = 5 llamadas.
**Nivel:** Sobresaliente

---

###### Reactivo 14

En la programación móvil para Android, el ciclo de vida de una **\_\_** es fundamental. Métodos como `onCreate()`, `onStart()` y `onResume()` gestionan los estados de la pantalla visible al usuario.

A) Activity (Actividad)

B) Service (Servicio)

C) Intent (Intención)

**Respuesta correcta:** A
**Justificación:** En Android, una `Activity` representa una pantalla única con una interfaz de usuario. Su gestión de ciclo de vida es el concepto central del desarrollo en esta plataforma.
**Nivel:** Sobresaliente

---

###### Reactivo 15

Para optimizar una consulta en una aplicación que maneja grandes volúmenes de datos, se decide utilizar un **\_\_** en la columna de búsqueda frecuente, lo que cambia la complejidad de búsqueda de O(n) a O(log n) en promedio.

A) arreglo

B) índice (B-tree)

C) disparador

**Respuesta correcta:** B
**Justificación:** La estructura de datos subyacente de un índice en base de datos (comúnmente árboles B o B+) permite búsquedas logarítmicas, mejorando drásticamente el rendimiento frente a un escaneo secuencial.
**Nivel:** Sobresaliente

---

###### Reactivo 16

En C++, si una clase base tiene un método virtual puro, la clase se convierte en una clase **\_\_**, lo que impide su **\_\_**.

A) abstracta - herencia

B) abstracta - instanciación

C) estática - compilación

**Respuesta correcta:** B
**Justificación:** Un método virtual puro hace que la clase sea abstracta. Las clases abstractas no pueden ser instanciadas (no se pueden crear objetos directos de ellas), solo pueden ser heredadas.
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione el paradigma de programación con su característica principal.

**[Conjunto A] Paradigma**

1. Orientado a Objetos
2. Funcional
3. Procedural
4. Lógico

**[Conjunto B] Característica**
a) Se basa en reglas y hechos formales.
b) Estructura el programa en términos de entidades que combinan estado y comportamiento.
c) Evita el estado mutable y trata el cómputo como evaluación matemática.
d) Divide el programa en variables, datos y subrutinas secuenciales.

A) 1b, 2c, 3d, 4a

B) 1c, 2b, 3a, 4d

C) 1b, 2a, 3c, 4d

**Respuesta correcta:** A
**Justificación:** OO=Objetos (1b), Funcional=Matemática/Inmutabilidad (2c), Procedural=Subrutinas/Secuencial (3d), Lógico=Hechos/Reglas (4a),.
**Nivel:** Satisfactorio

---

###### Reactivo 18

Relacione la estructura de control con su descripción.

**[Conjunto A] Estructura**

1. `if-else`
2. `switch`
3. `while`
4. `for`

**[Conjunto B] Descripción**
a) Ejecuta un bloque de código un número determinado de veces.
b) Selecciona entre múltiples caminos basándose en el valor de una variable (generalmente entera o char).
c) Ejecuta un bloque mientras una condición sea verdadera (0 a n veces).
d) Evalúa una condición booleana para decidir entre dos caminos.

A) 1d, 2b, 3c, 4a

B) 1b, 2d, 3a, 4c

C) 1d, 2a, 3c, 4b

**Respuesta correcta:** A
**Justificación:** if-else es la selección binaria (1d), switch es la selección múltiple (2b), while es el ciclo condicional (3c), for es el ciclo determinado/conteo (4a),,.
**Nivel:** Satisfactorio

---

###### Reactivo 19

Relacione el operador lógico/relacional en C con su función.

**[Conjunto A] Operador**

1. `&&`
2. `||`
3. `!=`
4. `==`

**[Conjunto B] Función**
a) Comparación de igualdad.
b) AND lógico.
c) OR lógico.
d) Comparación de desigualdad.

A) 1b, 2c, 3d, 4a

B) 1c, 2b, 3a, 4d

C) 1b, 2c, 3a, 4d

**Respuesta correcta:** A
**Justificación:** En C y derivados, `&&` es AND, `||` es OR, `!=` es diferente de, y `==` es igual a.
**Nivel:** Satisfactorio

---

###### Reactivo 20

Relacione el tipo de dato en C con su uso típico.

**[Conjunto A] Tipo de Dato**

1. `char`
2. `int`
3. `float`
4. `void`

**[Conjunto B] Uso**
a) Números con decimales.
b) Caracteres individuales o enteros pequeños.
c) Números enteros.
d) Indicar que una función no retorna valor.

A) 1b, 2c, 3a, 4d

B) 1c, 2a, 3b, 4d

C) 1b, 2a, 3c, 4d

**Respuesta correcta:** A
**Justificación:** char almacena caracteres (1 byte), int enteros, float reales, void es el tipo nulo o vacío para retornos de función.
**Nivel:** Satisfactorio

---

###### Reactivo 21

Relacione la función de manejo de cadenas en C con su propósito.

**[Conjunto A] Función**

1. `strlen`
2. `strcpy`
3. `strcat`
4. `strcmp`

**[Conjunto B] Propósito**
a) Concatena (une) dos cadenas.
b) Compara dos cadenas.
c) Obtiene la longitud de una cadena.
d) Copia el contenido de una cadena a otra.

A) 1c, 2d, 3a, 4b

B) 1c, 2a, 3d, 4b

C) 1b, 2d, 3a, 4c

**Respuesta correcta:** A
**Justificación:** `strlen` (length), `strcpy` (copy), `strcat` (concatenate), `strcmp` (compare). Son funciones estándar de la librería `string.h`.
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Relacione el concepto de POO con el problema que resuelve en el diseño de software.

**[Conjunto A] Concepto**

1. Polimorfismo
2. Herencia
3. Encapsulamiento
4. Abstracción

**[Conjunto B] Problema Resuelto**
a) Reduce la duplicación de código al permitir compartir atributos y métodos comunes.
b) Permite tratar objetos de tipos derivados como si fueran del tipo base, facilitando la extensibilidad.
c) Protege la integridad de los datos internos impidiendo el acceso directo no autorizado.
d) Simplifica la complejidad enfocándose en las características esenciales y ocultando detalles irrelevantes.

A) 1b, 2a, 3c, 4d

B) 1a, 2b, 3d, 4c

C) 1b, 2c, 3a, 4d

**Respuesta correcta:** A
**Justificación:** Esta relación requiere entender la _utilidad_ del concepto, no solo su definición. Polimorfismo = extensibilidad/trato uniforme (1b); Herencia = reutilización (2a); Encapsulamiento = protección/integridad (3c); Abstracción = manejo de complejidad (4d),.
**Nivel:** Sobresaliente

---

###### Reactivo 23

Relacione la tecnología web con su rol específico en una arquitectura de tres capas.

**[Conjunto A] Tecnología**

1. HTML/CSS/JS
2. PHP
3. MySQL
4. REST

**[Conjunto B] Rol**
a) Gestión y persistencia de datos estructurados.
b) Lógica de negocio y procesamiento en el servidor.
c) Interfaz de usuario y presentación en el cliente.
d) Protocolo de interfaz para la comunicación entre capas o sistemas.

A) 1c, 2b, 3a, 4d

B) 1b, 2c, 3d, 4a

C) 1c, 2a, 3b, 4d

**Respuesta correcta:** A
**Justificación:** Front-end (1c), Back-end/Lógica (2b), Persistencia/BD (3a), Comunicación/Interoperabilidad (4d). Es fundamental distinguir el rol de PHP (procesamiento) vs el de MySQL (almacenamiento).
**Nivel:** Sobresaliente

---

###### Reactivo 24

Relacione la técnica de paso de parámetros con su efecto en la memoria y la variable original.

**[Conjunto A] Técnica**

1. Paso por Valor
2. Paso por Referencia (puntero en C)
3. Paso de Arreglo (en C)

**[Conjunto B] Efecto**
a) Se pasa la dirección de memoria; los cambios afectan a la variable original.
b) Se crea una copia local del dato; los cambios no afectan a la variable original.
c) Se pasa la dirección del primer elemento; se comporta como referencia aunque sintácticamente parece valor.

A) 1b, 2a, 3c

B) 1a, 2b, 3c

C) 1b, 2c, 3a

**Respuesta correcta:** A
**Justificación:** El paso por valor protege el dato original (copia). El paso por referencia (o punteros) permite modificar el original. Los arreglos en C decaen a punteros automáticamente, comportándose como referencia,.
**Nivel:** Sobresaliente

---

###### Reactivo 25 - Integrador

Relacione el fragmento de código/diseño con el concepto avanzado de programación o patrón que ilustra.

**[Conjunto A] Código/Diseño**

1. `class Pato extends Ave { void volar() { ... } }`
2. `List<Figura> lista; lista.add(new Circulo()); lista.get(0).dibujar();`
3. `try { ... } catch (Exception e) { ... }`
4. `function(x) { return x + y; }` (donde `y` es externa y cambia)

**[Conjunto B] Concepto**
a) Polimorfismo dinámico (binding tardío).
b) Manejo de excepciones (robustez).
c) Función impura (efecto secundario / dependencia de estado externo).
d) Herencia simple.

A) 1d, 2a, 3b, 4c

B) 1a, 2d, 3c, 4b

C) 1d, 2b, 3a, 4c

**Respuesta correcta:** A
**Justificación:**
1-d: `extends` denota herencia simple.
2-a: Usar una referencia genérica (`Figura`) para operar una instancia específica (`Circulo`) es polimorfismo.
3-b: `try-catch` es el mecanismo estándar de manejo de excepciones.
4-c: Una función que depende de variables externas mutables no es una función pura (concepto de prog. funcional).
**Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

##### Nivel Satisfactorio Checklist

- [ ] Definir qué es un paradigma de programación y citar ejemplos básicos.
- [ ] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio.
- [ ] Identificar la sintaxis de bucles `for`, `while` y condicionales `if` en C/Java.
- [ ] Explicar la diferencia básica entre Front-End y Back-End.

##### Nivel Sobresaliente Checklist

- [ ] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente.
- [ ] Lograr al menos 21/25 reactivos correctos en total.
- [ ] Diferenciar con precisión técnica entre Polimorfismo y Herencia.
- [ ] Identificar riesgos de manejo de memoria (punteros) en código C.
- [ ] Entender el rol de APIs REST en la integración de sistemas.

---

#### 📌 Notas y Observaciones Personales

<!-- Espacio para que el estudiante agregue sus notas -->

---

#### 🔄 Última revisión

**Fecha:** [DD/MM/YYYY]
**Estado:** [ ] Por estudiar | [ ] En progreso | [ ] Revisado | [ ] Dominado
**Puntuación en cuestionario:** **_/25 (_** %)
**Desglose:** Satisfactorio **_/13 | Sobresaliente _**/12

---

#### 📚 Referencias

- [3.2 Lenguajes de Programacion.pdf] - Paradigmas, Web, Móvil.
- [Diseno de algoritmos y su codificacion en lenguaje c.pdf] - Estructuras de control, Funciones, Arreglos.
- [Guia_EGEL_Anterior - Ing Software.pdf] - Conceptos de OO (GRASP, Patrones).
