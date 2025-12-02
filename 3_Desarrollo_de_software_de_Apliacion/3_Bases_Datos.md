<!-- line-width: 1000 -->
<!-- format:off -->

### 3.3 Bases de Datos

**Área:** Desarrollo de Software de Aplicación
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

Las bases de datos son componentes fundamentales en el desarrollo de software de aplicación, encargadas de almacenar, organizar y recuperar información de manera eficiente. Un Sistema de Gestión de Bases de Datos (DBMS) es el software que interactúa con los usuarios y las aplicaciones para capturar y analizar datos. El modelo predominante es el **Modelo Relacional**, que estructura los datos en tablas (relaciones) y utiliza el lenguaje SQL para su manipulación y definición.

Además del diseño tradicional centralizado, el entorno actual exige conocimientos sobre **Bases de Datos Distribuidas**, donde la información reside en múltiples ubicaciones físicas pero se gestiona como una sola base lógica. Esto implica técnicas de fragmentación y replicación para asegurar la disponibilidad y eficiencia. Asimismo, para el nivel sobresaliente, es crucial distinguir entre las bases de datos operacionales (OLTP) y los almacenes de datos (Data Warehouse/OLAP) diseñados para el análisis y la toma de decisiones.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [ ] Interpretar las funciones básicas de un DBMS y el ciclo de vida del diseño de bases de datos.
- [ ] Aplicar el Modelo Entidad-Relación (ER) y el Modelo Relacional, incluyendo integridad y claves.
- [ ] Emplear sentencias SQL básicas (DDL y DML) para la definición y manipulación de datos.

##### Nivel Sobresaliente

- [ ] Analizar y aplicar las formas normales (1FN, 2FN, 3FN, BCNF) para eliminar redundancias y anomalías.
- [ ] Distinguir arquitecturas y técnicas de bases de datos distribuidas (fragmentación horizontal, vertical y mixta).
- [ ] Contrastar las tecnologías de bases de datos operacionales con Data Warehouse y minería de datos.

---

#### 📚 Contenido Teórico

##### 1. Modelado de Datos y Modelo Relacional

**Definición:** Proceso de crear una representación visual de un sistema de información. El modelo ER usa entidades, atributos y relaciones. El modelo relacional usa tablas (relaciones), filas (tuplas) y columnas (atributos).
**Explicación:** El diseño conceptual (ER) se transforma en un esquema lógico (Relacional). Una relación es un conjunto de tuplas donde cada tupla es única. Las restricciones de integridad (entidad y referencial) aseguran la calidad de los datos.
**Aspectos clave:**

- **Claves:** **Superclave** (identifica única), **Clave Candidata** (superclave mínima), **Clave Primaria** (candidata elegida), **Clave Foránea** (referencia a clave primaria de otra tabla).
- **Integridad Referencial:** Garantiza que las relaciones entre tablas sean consistentes; un valor de clave foránea debe existir en la tabla referenciada o ser nulo.
- **Operaciones Relacionales:** Selección ($\sigma$), Proyección ($\pi$), Unión ($\cup$), Diferencia ($-$), Producto Cartesiano ($\times$), Junta/Join ($\bowtie$).

##### 2. Normalización

**Definición:** Técnica para diseñar tablas relacionales minimizando la duplicación de datos y evitando anomalías de inserción, actualización y eliminación.
**Explicación:** Se basa en dependencias funcionales. Una tabla se descompone en tablas más pequeñas sin pérdida de información.
**Aspectos clave:**

- **1FN:** Atomicidad de atributos (no grupos repetitivos).
- **2FN:** Todo atributo no clave depende totalmente de la clave primaria (elimina dependencias parciales).
- **3FN:** No existen dependencias transitivas (atributo no clave depende de otro no clave).
- **BCNF:** Forma más estricta de 3FN donde todo determinante es una clave candidata.

##### 3. Bases de Datos Distribuidas

**Definición:** Colección de múltiples bases de datos interrelacionadas lógicamente pero distribuidas físicamente en una red de computadores.
**Explicación:** Busca transparencia para el usuario (que parezca una sola BD). Utiliza técnicas de fragmentación para dividir las relaciones y asignarlas a diferentes sitios.
**Aspectos clave:**

- **Fragmentación Horizontal:** Selecciona subconjuntos de tuplas (filas) mediante una condición (operación `SELECT`). Se reconstruye con `UNION`.
- **Fragmentación Vertical:** Subdivide atributos (columnas) en fragmentos, manteniendo la clave primaria en todos (operación `PROJECT`). Se reconstruye con `JOIN`.
- **Fragmentación Mixta:** Combinación de ambas.

##### 4. Data Warehouse y OLAP

**Definición:** Un almacén de datos (Data Warehouse) es una colección de datos orientada a temas, integrada, no volátil y variante en el tiempo para apoyar la toma de decisiones.
**Explicación:** A diferencia de los sistemas transaccionales (OLTP) optimizados para operaciones rápidas y frecuentes, los sistemas OLAP (Procesamiento Analítico en Línea) permiten consultas complejas y análisis multidimensional (cubos de datos).
**Aspectos clave:**

- **ETL:** Extracción, Transformación y Carga de datos desde fuentes operacionales.
- **Esquema en Estrella:** Tabla de hechos central conectada a tablas de dimensiones.

---

#### 📖 Glosario de Términos

<!-- markdownlint-disable MD013 -->

| Término              | Definición                                                                              | Contexto de uso                                  |
| :------------------- | :-------------------------------------------------------------------------------------- | :----------------------------------------------- |
| **DDL**              | Lenguaje de Definición de Datos (CREATE, ALTER, DROP). Define la estructura o esquema.  | Creación de tablas y restricciones.              |
| **DML**              | Lenguaje de Manipulación de Datos (SELECT, INSERT, UPDATE, DELETE). Gestiona los datos. | Consultas y actualizaciones de registros.        |
| **ACID**             | Propiedades de transacciones: Atomicidad, Consistencia, Aislamiento, Durabilidad.       | Gestión de transacciones y concurrencia.         |
| **Fragmentación**    | División lógica de una relación en partes para distribuirlas en nodos.                  | Diseño de BD Distribuidas.                       |
| **Minería de Datos** | Descubrimiento de patrones y conocimientos nuevos en grandes volúmenes de datos.        | Análisis predictivo y KDD (Knowledge Discovery). |
| **Foreign Key**      | Atributo que crea una relación lógica entre dos tablas referenciando la Primary Key.    | Integridad Referencial en SQL.                   |

<!-- markdownlint-enable MD013 -->

---

#### 🔗 Relaciones con Otros Subtemas

- **3.1 Ingeniería de Software:** El diseño de BD es una fase crítica (diseño de datos) dentro del ciclo de vida del desarrollo de software.
- **3.4 Seguridad Informática:** Las BD requieren control de acceso discrecional (GRANT/REVOKE) y mecanismos de seguridad contra inyección SQL.
- **4.2 Minería de Datos:** Utiliza como fuente los Data Warehouses estructurados en el área de Bases de Datos.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente.

1.  **Diseño Distribuido y Reconstrucción**
    - Debes saber no solo qué es la fragmentación, sino cómo reconstruir la relación original.
    - **Horizontal:** Reconstrucción mediante UNIÓN.
    - **Vertical:** Reconstrucción mediante JOIN (Junta Natural) a través de la clave primaria.
2.  **Normalización Avanzada**
    - Distinguir sutilmente entre 3FN y BCNF.
    - Entender las anomalías específicas que ocurren si no se normaliza (redundancia, anomalías de actualización).

---

#### 📝 Cuestionario de Práctica

##### Instrucciones

- Total de reactivos: 25
- Cada reactivo tiene 3 opciones (A, B, C).
- Solo una opción es correcta.
- Tiempo sugerido: 50 minutos.

---

##### Reactivos de Cuestionamiento Directo

###### Nivel Satisfactorio (1-4)

###### Reactivo 1

¿Qué sentencia SQL se utiliza para modificar la estructura de una tabla existente, por ejemplo, para añadir una nueva columna?

A) UPDATE TABLE

B) ALTER TABLE

C) MODIFY TABLE

**Respuesta correcta:** B
**Justificación:** Según el estándar SQL (Elmasri, Cap. 8), `ALTER TABLE` es el comando DDL correcto para modificar la definición de una tabla base, como añadir columnas o restricciones. `UPDATE` es DML para datos, y `MODIFY` no es el comando estándar de nivel tabla.
**Nivel:** Satisfactorio

###### Reactivo 2

En el modelo relacional, ¿cómo se denomina a la restricción que establece que ninguna clave primaria puede tener un valor NULO?

A) Integridad Referencial

B) Integridad de Dominio

C) Integridad de Entidad

**Respuesta correcta:** C
**Justificación:** La regla de **Integridad de Entidad** establece que ningún valor de clave primaria puede ser NULL, ya que la clave primaria se usa para identificar tuplas individuales (Elmasri, Cap. 5). La referencial trata sobre claves foráneas.
**Nivel:** Satisfactorio

###### Reactivo 3

¿Cuál es el objetivo principal de aplicar la Primera Forma Normal (1FN) a una relación?

A) Eliminar dependencias transitivas

B) Asegurar la atomicidad de los atributos

C) Eliminar dependencias parciales

**Respuesta correcta:** B
**Justificación:** La definición de **1FN** (Date, Cap. 11; Elmasri, Cap. 10) establece que el dominio de un atributo debe incluir solo valores atómicos (simples e indivisibles), eliminando grupos repetitivos o atributos multivaluados.
**Nivel:** Satisfactorio

###### Reactivo 4

En un diagrama Entidad-Relación, ¿qué representa un rombo?

A) Un tipo de Entidad

B) Un tipo de Relación

C) Un Atributo derivado

**Respuesta correcta:** B
**Justificación:** En la notación estándar ER (Chen), los rectángulos representan entidades y los **rombos** representan tipos de relación entre entidades (Elmasri, Cap. 3).
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

En el contexto de bases de datos distribuidas, si se divide una relación `ALUMNOS` seleccionando solo aquellos registros donde la carrera sea "Sistemas", ¿qué tipo de fragmentación se está aplicando?

A) Fragmentación Vertical

B) Fragmentación Horizontal

C) Fragmentación Mixta

**Respuesta correcta:** B
**Justificación:** La **fragmentación horizontal** divide una relación en subconjuntos de tuplas (filas) mediante una operación de selección ($\sigma$) basada en una condición (ej. Carrera = 'Sistemas'), según se detalla en el documento "Taller Bases de Datos Distribuidas".
**Nivel:** Sobresaliente

###### Reactivo 6

Una relación está en Tercera Forma Normal (3FN) si está en 2FN y además:

A) Todos sus atributos son atómicos.

B) No existen dependencias funcionales transitivas de atributos no clave hacia la clave primaria.

C) Todo determinante es una clave candidata.

**Respuesta correcta:** B
**Justificación:** La definición de **3FN** requiere eliminar las dependencias transitivas, donde un atributo no clave depende de otro atributo no clave (Elmasri, Cap. 10). La opción C corresponde a BCNF.
**Nivel:** Sobresaliente

###### Reactivo 7

¿Cuál es la diferencia fundamental entre un sistema OLTP (Procesamiento de Transacciones en Línea) y un Data Warehouse?

A) OLTP es para datos históricos y Data Warehouse para datos actuales.

B) OLTP se orienta a aplicaciones operativas y Data Warehouse a la toma de decisiones.

C) OLTP utiliza esquemas en estrella y Data Warehouse esquemas normalizados.

**Respuesta correcta:** B
**Justificación:** Los sistemas **OLTP** están optimizados para transacciones diarias y rápidas (operacionales). El **Data Warehouse** (Elmasri, Cap. 29) almacena datos históricos, integrados y no volátiles para el análisis y soporte a decisiones (OLAP).
**Nivel:** Sobresaliente

###### Reactivo 8

¿Qué propiedad de las transacciones (ACID) garantiza que, una vez confirmada una transacción, sus cambios persisten incluso ante fallos del sistema?

A) Atomicidad

B) Aislamiento

C) Durabilidad

**Respuesta correcta:** C
**Justificación:** La **Durabilidad** asegura que los cambios de una transacción confirmada (committed) deben persistir en la base de datos y no perderse por fallos posteriores (Elmasri, Cap. 17).
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

Complete la sentencia SQL para obtener el nombre de los empleados que ganan más de 20,000:
`SELECT Nombre ____ EMPLEADO ____ Sueldo > 20000;`

A) IN - IF

B) FROM - WHERE

C) ON - HAVING

**Respuesta correcta:** B
**Justificación:** La estructura básica de consulta SQL es `SELECT ... FROM ... WHERE` (Elmasri, Cap. 8). `FROM` especifica la tabla y `WHERE` la condición de filtrado de filas.
**Nivel:** Satisfactorio

###### Reactivo 10

Una **\_\_\_** es una columna o conjunto de columnas en una tabla cuyos valores coinciden con los valores de la clave primaria de otra tabla, estableciendo una relación entre ambas.

A) Clave Candidata

B) Clave Foránea (Foreign Key)

C) Superclave

**Respuesta correcta:** B
**Justificación:** La **Clave Foránea** es el mecanismo del modelo relacional para establecer relaciones entre tablas, referenciando la clave primaria de otra tabla (Elmasri, Cap. 5).
**Nivel:** Satisfactorio

###### Reactivo 11

El modelo **\_\_\_** representa los datos como una colección de tablas, donde cada tabla tiene un nombre único y consiste en filas y columnas.

A) Entidad-Relación

B) Jerárquico

C) Relacional

**Respuesta correcta:** C
**Justificación:** El **Modelo Relacional** (Date, Elmasri) se define por el uso de relaciones (tablas) para representar datos y las asociaciones entre ellos.
**Nivel:** Satisfactorio

###### Reactivo 12

La operación del álgebra relacional que produce un conjunto con todas las tuplas que están en la relación R o en la relación S (o en ambas) se denomina **\_\_\_** y se denota como $R \cup S$.

A) Intersección

B) Unión

C) Diferencia

**Respuesta correcta:** B
**Justificación:** La **Unión** ($\cup$) es la operación de conjuntos que combina tuplas de dos relaciones compatibles, incluyendo aquellas presentes en una, en otra o en ambas (Elmasri, Cap. 6).
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

Para reconstruir la relación original R a partir de sus fragmentos obtenidos por **fragmentación vertical**, se debe utilizar la operación de **\_\_\_** sobre el atributo de clave primaria que se replicó en todos los fragmentos.

A) Unión (Union)

B) Junta Natural (Natural Join)

C) Selección (Select)

**Respuesta correcta:** B
**Justificación:** En la fragmentación vertical (Taller Bases de Datos Distribuidas), se dividen los atributos. Para reconstruir la tupla completa, se necesita hacer un **Join (Junta)** utilizando la clave primaria que debe estar presente en todos los fragmentos verticales.
**Nivel:** Sobresaliente

###### Reactivo 14

Un esquema de relación R está en **\_\_\_** si, y solo si, siempre que existe una dependencia funcional $X \rightarrow A$ válida en R, entonces $X$ es una superclave de R.

A) Segunda Forma Normal (2FN)

B) Tercera Forma Normal (3FN)

C) Forma Normal de Boyce-Codd (BCNF)

**Respuesta correcta:** C
**Justificación:** Esta es la definición formal de **BCNF** (Date, Cap. 11; Elmasri, Cap. 10), que es más estricta que la 3FN y elimina anomalías causadas por dependencias funcionales donde el determinante no es una clave candidata.
**Nivel:** Sobresaliente

###### Reactivo 15

En el contexto de bases de datos distribuidas, la transparencia de **\_\_\_** permite al usuario acceder a los datos sin saber si están particionados o replicados en diferentes nodos.

A) Ubicación

B) Fragmentación

C) Concurrencia

**Respuesta correcta:** B
**Justificación:** La **transparencia de fragmentación** (Date, Cap. 20; Elmasri, Cap. 25) asegura que el usuario no necesita saber cómo están fragmentados los datos (si es horizontal o vertical) ni dónde residen los fragmentos; el sistema maneja la reconstrucción automáticamente.
**Nivel:** Sobresaliente

###### Reactivo 16

El proceso conocido como **\_\_\_** (Knowledge Discovery in Databases) incluye etapas de selección, preprocesamiento, transformación, minería de datos e interpretación.

A) KDD

B) ETL

C) OLAP

**Respuesta correcta:** A
**Justificación:** **KDD** es el proceso general de descubrimiento de conocimiento (Elmasri, Cap. 28), del cual la minería de datos es una fase específica. ETL se refiere solo a la carga de Data Warehouses.
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione la operación del álgebra relacional con su símbolo y descripción.
**[Operación]**

1. Selección
2. Proyección
3. Producto Cartesiano
4. Junta (Join)
   **[Descripción/Símbolo]**
   a) $\bowtie$ Combina tuplas relacionadas de dos relaciones.
   b) $\sigma$ Selecciona filas que cumplen una condición.
   c) $\pi$ Selecciona columnas específicas.
   d) $\times$ Combina cada fila de una tabla con todas las de otra.

A) 1b, 2c, 3d, 4a

B) 1c, 2b, 3a, 4d

C) 1b, 2a, 3c, 4d

**Respuesta correcta:** A
**Justificación:**

- 1-b: Selección ($\sigma$) filtra filas (Elmasri Cap 6).
- 2-c: Proyección ($\pi$) filtra columnas.
- 3-d: Producto cartesiano ($\times$) es la combinatoria total.
- 4-a: Join ($\bowtie$) combina basado en una condición.
  **Nivel:** Satisfactorio

###### Reactivo 18

Relacione el tipo de restricción de integridad con su definición.
**[Restricción]**

1. De Dominio
2. De Entidad
3. Referencial
   **[Definición]**
   a) La clave primaria no puede ser NULL.
   b) Una clave foránea debe coincidir con una clave primaria existente o ser NULL.
   c) El valor de un atributo debe pertenecer al conjunto de valores permitidos (tipo de dato).

A) 1a, 2b, 3c

B) 1c, 2a, 3b

C) 1b, 2c, 3a

**Respuesta correcta:** B
**Justificación:**

- 1-c: Dominio define los valores válidos (tipo, rango).
- 2-a: Integridad de Entidad (PK != NULL).
- 3-b: Integridad Referencial (FK consistency). (Elmasri, Cap. 5).
  **Nivel:** Satisfactorio

###### Reactivo 19

Relacione el comando SQL con su sub-lenguaje correspondiente.
**[Comando]**

1. CREATE
2. SELECT
3. GRANT
4. INSERT
   **[Tipo]**
   a) DCL (Data Control Language)
   b) DDL (Data Definition Language)
   c) DML (Data Manipulation Language)

A) 1b, 2c, 3a, 4c

B) 1a, 2b, 3c, 4b

C) 1b, 2a, 3c, 4a

**Respuesta correcta:** A
**Justificación:**

- 1-b: CREATE define estructura (DDL).
- 2-c: SELECT consulta datos (DML).
- 3-a: GRANT controla permisos (DCL).
- 4-c: INSERT manipula datos (DML).
  **Nivel:** Satisfactorio

###### Reactivo 20

Relacione el componente del modelo ER con su representación gráfica.
**[Componente]**

1. Entidad
2. Atributo
3. Relación
4. Atributo Multivaluado
   **[Gráfico]**
   a) Elipse con doble borde
   b) Rectángulo
   c) Rombo
   d) Elipse

A) 1b, 2d, 3c, 4a

B) 1c, 2a, 3b, 4d

C) 1b, 2a, 3d, 4c

**Respuesta correcta:** A
**Justificación:** Según la notación estándar (Chen) descrita en Elmasri Cap 3: Entidad=Rectángulo, Atributo=Elipse, Relación=Rombo, Multivaluado=Elipse doble.
**Nivel:** Satisfactorio

###### Reactivo 21

Relacione la función de agregación SQL con su propósito.
**[Función]**

1. COUNT
2. SUM
3. AVG
4. MAX
   **[Propósito]**
   a) Calcula el promedio de una columna numérica.
   b) Devuelve el valor más alto.
   c) Cuenta el número de filas.
   d) Suma los valores de una columna.

A) 1c, 2d, 3b, 4a

B) 1c, 2d, 3a, 4b

C) 1d, 2a, 3c, 4b

**Respuesta correcta:** B
**Justificación:** Definiciones estándar de funciones agregadas SQL (Elmasri Cap 8): COUNT (conteo), SUM (suma), AVG (promedio), MAX (máximo).
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Relacione el problema de diseño relacional con la Forma Normal que lo soluciona directamente.
**[Problema]**

1. Grupos repetitivos (atributos no atómicos).
2. Dependencia parcial (atributo no clave depende de parte de la clave primaria).
3. Dependencia transitiva (atributo no clave depende de otro no clave).
   **[Forma Normal]**
   a) 2FN
   b) 3FN
   c) 1FN

A) 1c, 2b, 3a

B) 1c, 2a, 3b

C) 1a, 2c, 3b

**Respuesta correcta:** B
**Justificación:**

- 1-c: La **1FN** elimina grupos repetitivos/no atómicos.
- 2-a: La **2FN** elimina dependencias parciales (requiere 1FN).
- 3-b: La **3FN** elimina dependencias transitivas (requiere 2FN). (Date, Cap. 11).
  **Nivel:** Sobresaliente

###### Reactivo 23

Relacione el tipo de fragmentación en bases de datos distribuidas con la operación de álgebra relacional utilizada para crearla y para reconstruirla.
**[Tipo de Fragmentación]**

1. Horizontal
2. Vertical
   **[Operaciones (Crear / Reconstruir)]**
   a) Proyección ($\pi$) / Junta Natural ($\bowtie$)
   b) Selección ($\sigma$) / Unión ($\cup$)
   c) Producto Cartesiano / Intersección

A) 1b, 2a

B) 1a, 2b

C) 1b, 2c

**Respuesta correcta:** A
**Justificación:**

- 1-b: La fragmentación **horizontal** usa `Selección` para dividir filas y `Unión` para unir.
- 2-a: La fragmentación **vertical** usa `Proyección` para dividir columnas (incluyendo la PK) y `Join` para reconstruir. (Taller Bases de Datos Distribuidas).
  **Nivel:** Sobresaliente

###### Reactivo 24

Relacione los conceptos de Data Warehouse con su descripción técnica.
**[Concepto]**

1. Esquema en Estrella
2. OLAP
3. Data Mart
   **[Descripción]**
   a) Almacén de datos departamental o especializado en un subconjunto del negocio.
   b) Diseño con una tabla de hechos central y tablas de dimensiones desnormalizadas.
   c) Tecnología que permite análisis multidimensional rápido de grandes volúmenes de datos.

A) 1b, 2c, 3a

B) 1c, 2a, 3b

C) 1b, 2a, 3c

**Respuesta correcta:** A
**Justificación:**

- 1-b: **Esquema en Estrella** (Star Schema) es característico de DW (Elmasri Cap 29).
- 2-c: **OLAP** es la tecnología de análisis.
- 3-a: **Data Mart** es una versión más pequeña/especializada del DW.
  **Nivel:** Sobresaliente

###### Reactivo 25 - Integrador

Un arquitecto de software está diseñando un sistema distribuido para una universidad. La tabla `ESTUDIANTES(ID, Nombre, Carrera, Promedio)` se fragmentará. La Sede A requiere solo estudiantes de "Sistemas". La Sede B requiere solo los nombres y promedios de todos los estudiantes para un cuadro de honor (sin carrera). Además, se debe asegurar que las modificaciones concurrentes no generen inconsistencias. Relacione los requerimientos con la técnica adecuada.
**[Requerimiento]**

1. Fragmentación para Sede A
2. Fragmentación para Sede B
3. Control de Concurrencia
4. Reconstrucción de datos de Sede A para vista global
   **[Técnica]**
   a) Fragmentación Vertical
   b) Fragmentación Horizontal ($\sigma_{Carrera='Sistemas'}$)
   c) Unión ($\cup$)
   d) Bloqueo en Dos Fases (2PL) o Timestamping

A) 1b, 2a, 3d, 4c

B) 1a, 2b, 3c, 4d

C) 1b, 2c, 3d, 4a

**Respuesta correcta:** A
**Justificación:**

- 1-b: Sede A necesita filtrar filas por condición (Horizontal).
- 2-a: Sede B necesita subconjunto de columnas (Vertical).
- 3-d: El control de concurrencia en sistemas distribuidos usa 2PL o estampas de tiempo.
- 4-c: La fragmentación horizontal se reconstruye con Unión.
  **Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

Antes de continuar, verifica que puedas:

##### Nivel Satisfactorio Checklist

- [ ] Explicar con tus propias palabras qué es un DBMS, una clave primaria y una foránea.
- [ ] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio (85%).
- [ ] Identificar sentencias SQL básicas (SELECT, INSERT, UPDATE, DELETE).
- [ ] Interpretar un diagrama ER básico.
- [ ] Distinguir entre DDL y DML.

##### Nivel Sobresaliente Checklist

- [ ] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%).
- [ ] Lograr al menos 21/25 reactivos correctos en total (84%).
- [ ] Explicar la diferencia técnica y de reconstrucción entre fragmentación horizontal y vertical.
- [ ] Normalizar una tabla hasta 3FN o BCNF identificando dependencias.
- [ ] Analizar escenarios que requieren Data Warehouse vs Base de Datos relacional.

---

#### 📌 Notas y Observaciones Personales

[Espacio para agregar notas durante el estudio]

---

#### 🔄 Última revisión

**Fecha:** [DD/MM/YYYY]
**Estado:** [ ] Por estudiar | [ ] En progreso | [ ] Revisado | [ ] Dominado
**Puntuación en cuestionario:** **_/25 (_**%)
**Desglose:** Satisfactorio **_/13 | Sobresaliente _**/12

---

#### 📚 Referencias

- Elmasri, R., & Navathe, S. B. (2005). _Fundamentos de Sistemas de Bases de Datos_ (5ª ed.). Addison-Wesley.
- Date, C. J. (2001). _Introducción a los Sistemas de Bases de Datos_ (7ª ed.). Prentice Hall.
- Castillo Barrera, F. E. _Taller Bases de Datos Distribuidas_. Material de curso.
- Descriptor EGEL Plus: Desarrollo de Software de Aplicación / Bases de Datos.
