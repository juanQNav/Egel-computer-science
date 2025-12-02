<!-- line-width: 1000 -->
<!-- format:off -->

### 4.2 Minería de Datos

**Área:** Soluciones de Cómputo Inteligente
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

La minería de datos es una etapa crucial dentro del proceso más amplio conocido como Descubrimiento de Conocimiento en Bases de Datos (KDD). Su objetivo principal es la extracción no trivial de información implícita, previamente desconocida y potencialmente útil a partir de grandes volúmenes de datos. Este campo integra técnicas de estadística, inteligencia artificial y bases de datos para encontrar patrones y relaciones.

En el contexto de las Ciencias Computacionales y el EGEL Plus, este subtema abarca desde la comprensión de los tipos de datos y su preprocesamiento (limpieza y transformación) hasta la aplicación de algoritmos específicos para tareas de clasificación, regresión y agrupamiento (clustering). El profesional debe ser capaz de seleccionar los datos adecuados, prepararlos y aplicar el modelo correcto para resolver problemas de predicción o descripción,.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [ ] Identificar las etapas del proceso de Descubrimiento de Conocimiento en Bases de Datos (KDD).
- [ ] Distinguir entre los diferentes tipos de datos (datos crudos, datasets, bases de datos).
- [ ] Comprender la importancia y las técnicas básicas de preprocesamiento y limpieza de datos.

##### Nivel Sobresaliente

- [ ] Analizar y seleccionar algoritmos específicos (como K-vecinos más cercanos o Redes Neuronales) para tareas de clasificación y regresión.
- [ ] Interpretar los resultados de tareas de minería como el clustering y la clasificación.
- [ ] Evaluar la calidad de los modelos generados y su aplicación en la toma de decisiones.

---

#### 📚 Contenido Teórico

##### 1. El Proceso KDD (Knowledge Discovery in Databases)

**Definición:** Es el proceso global de descubrir conocimiento útil a partir de datos. La minería de datos es solo una etapa de este proceso.
**Explicación:** El KDD no es un evento aislado, sino un flujo de trabajo iterativo. Comienza con la comprensión del dominio y los datos, pasa por la preparación técnica de los mismos, la aplicación de algoritmos (minería) y finaliza con la interpretación de los patrones encontrados para convertirlos en conocimiento accionable.
**Aspectos clave:**

- **Selección:** Identificar y aislar los datos relevantes para el análisis.
- **Preprocesamiento:** Limpieza de datos para manejar ruido y valores faltantes.
- **Minería de Datos:** Fase donde se aplican algoritmos inteligentes para extraer patrones.
  **Aplicaciones prácticas:** Análisis de cestas de compra en supermercados para descubrir patrones de consumo o detección de fraudes en transacciones bancarias.

---

##### 2. Preprocesamiento y Transformación de Datos

**Definición:** Conjunto de técnicas aplicadas a los datos crudos (_raw data_) para hacerlos aptos para el análisis,.
**Explicación:** Los datos del mundo real suelen ser incompletos, ruidosos e inconsistentes. El preprocesamiento mejora la calidad de los datos, lo que impacta directamente en la calidad de los modelos de minería.
**Aspectos clave:**

- **Limpieza:** Manejo de valores nulos (faltantes), suavizado de datos con ruido e identificación de _outliers_ (valores atípicos).
- **Transformación:** Normalización y agregación de datos para que se ajusten a las entradas que requieren los algoritmos.
- **Reducción:** Disminuir el volumen de datos (número de variables o instancias) sin perder información crítica, facilitando el procesamiento.

---

##### 3. Tareas de Minería de Datos

**Definición:** Son los tipos de problemas específicos que resuelven los algoritmos de minería.
**Explicación:** Dependiendo del objetivo del negocio o investigación, se elige una tarea. Las más comunes son predecir una categoría (clasificación), predecir un valor numérico (regresión) o encontrar grupos naturales (clustering).
**Aspectos clave:**

- **Clasificación:** Asigna elementos a clases predefinidas (e.g., Árboles de decisión, K-NN, Redes Neuronales),.
- **Regresión:** Predice un valor continuo basándose en datos históricos.
- **Clustering (Agrupamiento):** Divide los datos en grupos con características similares sin conocer las clases a priori,.

---

#### 📖 Glosario de Términos

<!-- markdownlint-disable MD013 -->

| Término        | Definición                                                                                              | Contexto de uso                                |
| -------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **KDD**        | Descubrimiento de Conocimiento en Bases de Datos; proceso general de extracción de información.         | Metodología general de proyectos de datos.     |
| **Dataset**    | Conjunto de datos estructurado seleccionado para el análisis.                                           | Entrada principal para algoritmos de minería.  |
| **Outlier**    | Punto de datos que difiere significativamente de otras observaciones (valor atípico).                   | Fase de limpieza y detección de fraudes.       |
| **Clustering** | Tarea de agrupar objetos similares en conjuntos; aprendizaje no supervisado.                            | Segmentación de mercado, análisis de imágenes. |
| **K-NN**       | K-Nearest Neighbors; algoritmo que clasifica un objeto basándose en la mayoría de votos de sus vecinos. | Tareas de clasificación simple.                |
| **Raw Data**   | Datos crudos que no han sido procesados para su uso.                                                    | Etapa inicial antes del preprocesamiento.      |

<!-- markdownlint-enable MD013 -->

---

#### 🔗 Relaciones con Otros Subtemas

- **3.3 Bases de Datos:** La minería de datos se alimenta de la información estructurada almacenada en bases de datos y almacenes de datos (Data Warehouses).
- **4.1 Inteligencia Artificial:** Muchos algoritmos de minería, como las redes neuronales, provienen del campo de la IA.
- **1.3 Matemáticas Discretas:** Conceptos como conjuntos y funciones son la base formal para operaciones de agrupación y clasificación,.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente.

1.  **Selección y Evaluación de Modelos**

    - No basta con aplicar un algoritmo; se debe justificar por qué un método (ej. Redes Neuronales vs Árboles de Decisión) es mejor para un tipo de dato específico.
    - Es crucial entender la fase de "Evaluación e Interpretación" del KDD, donde se valida si el conocimiento extraído es novedoso y útil.

2.  **Integración de Algoritmos Complejos**
    - Comprender cómo algoritmos como _Deep Learning_ (mencionado como aprendizaje profundo y redes neuronales en) o _K-vecinos más cercanos_ procesan internamente la similitud (ej. distancia) para clasificar.

---

#### 📝 Cuestionario de Práctica

##### Instrucciones

- Total de reactivos: 25.
- Cada reactivo tiene 3 opciones de respuesta (A, B, C).
- Solo una opción es correcta.
- Lee cuidadosamente el planteamiento antes de responder.

##### Distribución de Reactivos

- **Reactivos 1-8:** Cuestionamiento directo.
- **Reactivos 9-16:** Completamiento.
- **Reactivos 17-25:** Relación de elementos.

---

##### Reactivos de Cuestionamiento Directo

###### Nivel Satisfactorio (1-4)

###### Reactivo 1

¿Cuál es el objetivo principal de la etapa de preprocesamiento dentro del proceso KDD?

A) Seleccionar los algoritmos de minería que se utilizarán.

B) Limpiar los datos de ruido y valores atípicos para mejorar su calidad.

C) Interpretar los patrones encontrados para la toma de decisiones.

**Respuesta correcta:** B
**Justificación:** El preprocesamiento y transformación tienen como objetivo realizar operaciones de limpieza, remover ruido y outliers, y tratar datos faltantes para el buen funcionamiento de los módulos siguientes.
**Nivel:** Satisfactorio

---

###### Reactivo 2

¿Qué término se utiliza para describir a los puntos de datos que se desvían significativamente de la mayoría de los datos en un dataset?

A) Clusters.

B) Raw data.

C) Outliers.

**Respuesta correcta:** C
**Justificación:** Los _outliers_ se definen como puntos fuera de la mayoría de los datos, los cuales suelen ser removidos durante el preprocesamiento.
**Nivel:** Satisfactorio

---

###### Reactivo 3

¿Cuál de las siguientes opciones es una tarea común de la minería de datos utilizada para asignar elementos a categorías predefinidas?

A) Clustering.

B) Clasificación.

C) Regresión.

**Respuesta correcta:** B
**Justificación:** La clasificación es una de las tareas más comunes cuyo objetivo es asignar datos a clases o categorías específicas.
**Nivel:** Satisfactorio

---

###### Reactivo 4

Dentro del proceso KDD, ¿qué elemento es el insumo inicial indispensable que se requiere antes de cualquier procesamiento?

A) El conocimiento descubierto.

B) Los datos.

C) El algoritmo de limpieza.

**Respuesta correcta:** B
**Justificación:** Lo primero que el proceso de KDD requiere es de los datos; es importante conocer los tipos y fuentes (dataset, raw data, database).
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

Un científico de datos está analizando un conjunto de datos médicos para predecir el riesgo de diabetes. Utiliza un algoritmo que clasifica a un nuevo paciente basándose en la similitud con los "k" pacientes más parecidos en el histórico. ¿Qué algoritmo está empleando?

A) Árboles de Decisión.

B) K-Nearest Neighbors (K-NN).

C) Regresión Lineal.

**Respuesta correcta:** B
**Justificación:** El algoritmo K-Nearest Neighbors (K-vecinos más cercanos) es un método básico de aprendizaje automático utilizado para clasificación basado en cercanía/similitud.
**Nivel:** Sobresaliente

---

###### Reactivo 6

En el contexto de KDD, si se requiere descubrir grupos de clientes con comportamientos de compra similares sin tener etiquetas o categorías previas, ¿qué técnica es la más adecuada?

A) Clasificación.

B) Regresión.

C) Clustering.

**Respuesta correcta:** C
**Justificación:** El clustering es la tarea de minería de datos utilizada para agrupar datos sin clases predefinidas, a diferencia de la clasificación que requiere etiquetas.
**Nivel:** Sobresaliente

---

###### Reactivo 7

Para realizar una tarea de regresión compleja donde las relaciones entre variables no son lineales, ¿qué técnica de las siguientes es frecuentemente utilizada y compartida con tareas de clasificación?

A) K-Means.

B) Redes Neuronales.

C) Limpieza de datos.

**Respuesta correcta:** B
**Justificación:** Muchos métodos de clasificación, como las redes neuronales (Neural Networks) y el aprendizaje profundo (Deep Learning), se utilizan también para regresión y modelado complejo,.
**Nivel:** Sobresaliente

---

###### Reactivo 8

Después de aplicar algoritmos de minería de datos y obtener patrones, ¿cuál es la fase final crítica del proceso KDD que valida la utilidad del conocimiento?

A) Transformación.

B) Evaluación e interpretación.

C) Almacenamiento (Data Warehousing).

**Respuesta correcta:** B
**Justificación:** La minería de datos es parte de un proceso mayor (KDD); tras la minería, es necesaria la fase de evaluación e interpretación para validar el conocimiento descubierto,.
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

El proceso de Descubrimiento de Conocimiento en Bases de Datos (KDD) implica varias etapas secuenciales. El orden lógico general es: Selección de datos, **\_\_\_\_**, Minería de Datos y Evaluación.

A) Visualización

B) Preprocesamiento y Transformación

C) Almacenamiento

**Respuesta correcta:** B
**Justificación:** Después de elegir los datos, se realizan operaciones de preprocesamiento y transformación (limpieza, remoción de ruido) antes de la minería.
**Nivel:** Satisfactorio

---

###### Reactivo 10

Los datos tal cual se obtienen de la fuente original, sin haber pasado por ningún proceso de limpieza o formateo, se conocen técnicamente como **\_\_\_\_**.

A) Datasets

B) Knowledge

C) Raw data

**Respuesta correcta:** C
**Justificación:** Los datos crudos (_raw data_) son el insumo inicial antes de convertirse en un dataset procesado.
**Nivel:** Satisfactorio

---

###### Reactivo 11

La tarea de **\_\_\_\_** en minería de datos busca predecir un valor numérico continuo, a diferencia de la clasificación que predice una categoría discreta.

A) Regresión

B) Clustering

C) Asociación

**Respuesta correcta:** A
**Justificación:** La regresión es una de las tareas más comunes en minería de datos, utilizada a menudo con métodos similares a la clasificación pero para valores continuos.
**Nivel:** Satisfactorio

---

###### Reactivo 12

Para garantizar la calidad de los resultados en la minería de datos, es necesario remover el **\_\_\_\_** y los datos faltantes durante la etapa de preprocesamiento.

A) Conocimiento

B) Ruido

C) Patrón

**Respuesta correcta:** B
**Justificación:** El preprocesamiento incluye limpieza para remover ruido y outliers, así como manejar datos faltantes.
**Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

En el análisis de algoritmos de aprendizaje, el método de **\_\_\_\_** se basa en encontrar los ejemplos más cercanos en el espacio de características para clasificar una nueva instancia.

A) K-Nearest Neighbors

B) Deep Learning

C) Decision Trees

**Respuesta correcta:** A
**Justificación:** "K-nearest neighbors algorithm" es explícitamente mencionado como un método básico de aprendizaje automático basado en cercanía.
**Nivel:** Sobresaliente

---

###### Reactivo 14

La **\_\_\_\_** es una técnica de minería que puede utilizarse tanto para clasificación como para regresión, inspirada en el comportamiento biológico del cerebro humano.

A) Red Neuronal

B) Regla de Asociación

C) Distancia Euclidiana

**Respuesta correcta:** A
**Justificación:** Las redes neuronales (_neural networks_) y el aprendizaje profundo (_deep learning_) son técnicas avanzadas mencionadas para tareas de clasificación y regresión.
**Nivel:** Sobresaliente

---

###### Reactivo 15

Si un conjunto de datos contiene puntos que están muy alejados de la tendencia general, estos se denominan **\_\_\_\_** y su eliminación es crucial para evitar sesgos en modelos sensibles como la regresión lineal.

A) Centroides

B) Outliers

C) Nodos hoja

**Respuesta correcta:** B
**Justificación:** Los _outliers_ son puntos fuera de la mayoría de los datos que se deben remover durante el preprocesamiento para el buen funcionamiento de los modelos.
**Nivel:** Sobresaliente

---

###### Reactivo 16

El proceso KDD no termina con la aplicación del algoritmo; la fase de **\_\_\_\_** es esencial para determinar si los patrones encontrados constituyen conocimiento válido y útil para el negocio.

A) Selección de datos

B) Interpretación y Evaluación

C) Limpieza de datos

**Respuesta correcta:** B
**Justificación:** La evaluación e interpretación es la fase final donde se da sentido a los resultados de la minería,.
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione los conceptos de minería de datos con su descripción básica.

**Conceptos**

1. Dataset
2. Raw Data
3. KDD
4. Preprocesamiento

**Descripciones**
a) Datos en su estado original sin modificaciones.
b) Proceso global de descubrimiento de conocimiento.
c) Conjunto de datos seleccionado y estructurado.
d) Etapa de limpieza y transformación de datos.
e) Algoritmo de predicción numérica.

A) 1c, 2a, 3b, 4d

B) 1a, 2c, 3d, 4e

C) 1c, 2e, 3a, 4b

**Respuesta correcta:** A
**Justificación:**

- 1-c: Dataset es el conjunto de datos.
- 2-a: Raw data son datos crudos.
- 3-b: KDD es el proceso completo de descubrimiento.
- 4-d: Preprocesamiento implica limpieza y transformación.
  **Nivel:** Satisfactorio

---

###### Reactivo 18

Relacione las tareas de minería de datos con su objetivo.

**Tareas**

1. Clasificación
2. Regresión
3. Clustering

**Objetivos**
a) Predecir un valor numérico continuo.
b) Asignar datos a categorías predefinidas.
c) Agrupar datos por similitud sin clases previas.
d) Eliminar datos ruidosos.

A) 1a, 2c, 3d

B) 1b, 2a, 3c

C) 1c, 2b, 3a

**Respuesta correcta:** B
**Justificación:**

- 1-b: Clasificación asigna categorías.
- 2-a: Regresión predice valores (implícito en uso de métodos compartidos).
- 3-c: Clustering agrupa sin clases predefinidas.
  **Nivel:** Satisfactorio

---

###### Reactivo 19

Relacione las etapas del KDD con su función principal.

**Etapas**

1. Selección
2. Transformación
3. Minería de Datos
4. Interpretación

**Funciones**
a) Aplicación de algoritmos inteligentes para hallar patrones.
b) Dar sentido y valor al patrón encontrado.
c) Elegir los datos relevantes para el análisis.
d) Adecuar los datos para el algoritmo (e.g., normalización).
e) Almacenar los datos en discos.

A) 1c, 2d, 3a, 4b

B) 1e, 2a, 3c, 4d

C) 1c, 2b, 3d, 4a

**Respuesta correcta:** A
**Justificación:**

- 1-c: Selección de datos específicos.
- 2-d: Transformación y preprocesamiento.
- 3-a: Minería es la aplicación de algoritmos.
- 4-b: Interpretación valida el conocimiento,.
  **Nivel:** Satisfactorio

---

###### Reactivo 20

Relacione los problemas de datos con la técnica de preprocesamiento adecuada.

**Problemas**

1. Valores faltantes
2. Ruido
3. Outliers

**Técnicas**
a) Remoción o suavizado.
b) Imputación o eliminación de registros.
c) Identificación y análisis/eliminación de puntos atípicos.
d) Clasificación supervisada.

A) 1b, 2a, 3c

B) 1d, 2c, 3a

C) 1a, 2b, 3d

**Respuesta correcta:** A
**Justificación:**

- 1-b: Datos faltantes se manejan en preprocesamiento.
- 2-a: Ruido se remueve o suaviza.
- 3-c: Outliers son puntos fuera de la mayoría que se remueven.
  **Nivel:** Satisfactorio

---

###### Reactivo 21

Relacione el tipo de dato con su característica.

**Tipo**

1. Raw Data
2. Dataset
3. Database

**Característica**
a) Colección estructurada y persistente de datos.
b) Conjunto de datos específico para un análisis.
c) Datos crudos sin procesar.
d) Algoritmo de limpieza.

A) 1c, 2b, 3a

B) 1a, 2c, 3b

C) 1b, 2a, 3d

**Respuesta correcta:** A
**Justificación:**

- 1-c: Raw data son datos crudos.
- 2-b: Dataset es el conjunto de datos para el problema.
- 3-a: Database es el sistema de almacenamiento base.
  **Nivel:** Satisfactorio

---

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Relacione el algoritmo con la tarea de minería para la cual es comúnmente utilizado, considerando las mejores prácticas.

**Algoritmos**

1. K-Nearest Neighbors
2. K-Means (implícito en clustering)
3. Deep Learning

**Tareas/Usos**
a) Tareas complejas de clasificación y regresión (redes neuronales).
b) Clasificación basada en la cercanía de instancias.
c) Agrupamiento de datos no etiquetados (clustering).
d) Limpieza de bases de datos.

A) 1b, 2c, 3a

B) 1a, 2b, 3c

C) 1c, 2a, 3b

**Respuesta correcta:** A
**Justificación:**

- 1-b: K-NN se usa para clasificación por cercanía.
- 2-c: K-Means es el estándar para clustering (clustering mencionado en y).
- 3-a: Deep learning/Redes neuronales para tareas complejas.
  **Nivel:** Sobresaliente

---

###### Reactivo 23

Relacione la fase del proceso KDD con el desafío técnico que resuelve.

**Fase**

1. Preprocesamiento
2. Minería de Datos
3. Evaluación

**Desafío**
a) Selección del modelo matemático adecuado (ej. clasificación vs regresión).
b) Calidad de datos (ruido, inconsistencia).
c) Validez y utilidad del patrón en el contexto del negocio.
d) Velocidad de transferencia de red.

A) 1d, 2a, 3b

B) 1b, 2a, 3c

C) 1c, 2b, 3a

**Respuesta correcta:** B
**Justificación:**

- 1-b: Preprocesamiento ataca la calidad (ruido).
- 2-a: Minería implica elegir la tarea/algoritmo (clasificación/regresión).
- 3-c: Evaluación determina la validez del conocimiento.
  **Nivel:** Sobresaliente

---

###### Reactivo 24

Relacione los términos técnicos con su función en el aprendizaje automático.

**Término**

1. Training Set (implícito)
2. Outlier removal
3. Classification Model

**Función**
a) Mejorar la precisión del modelo eliminando datos atípicos.
b) Asignar nuevas instancias a clases conocidas.
c) Conjunto de datos usado para construir el modelo.
d) Almacenar datos históricos.

A) 1c, 2a, 3b

B) 1a, 2b, 3c

C) 1b, 2c, 3a

**Respuesta correcta:** A
**Justificación:**

- 1-c: Training set (dataset) es la base para aprender.
- 2-a: Remover outliers mejora el modelo.
- 3-b: Modelo de clasificación asigna clases.
  **Nivel:** Sobresaliente

---

###### Reactivo 25 - Integrador

Un sistema de diagnóstico médico inteligente debe procesar historiales clínicos (texto y números) para detectar pacientes con riesgo alto de enfermedad cardíaca. Relacione los componentes del sistema con su implementación técnica correcta en el flujo KDD.

**Componente**

1. Datos de entrada
2. Preparación
3. Modelado
4. Validación

**Implementación**
a) Algoritmo de Red Neuronal o K-NN para clasificar riesgo.
b) Raw data proveniente de expedientes clínicos y sensores.
c) Limpieza de valores nulos y normalización de edades.
d) Interpretación de resultados por especialistas médicos.
e) Creación de base de datos SQL.

A) 1e, 2c, 3a, 4b

B) 1b, 2c, 3a, 4d

C) 1b, 2a, 3d, 4c

**Respuesta correcta:** B
**Justificación:**

- Este reactivo integra todo el flujo KDD.
- 1-b: Datos de entrada son Raw data.
- 2-c: Preparación es preprocesamiento (limpieza).
- 3-a: Modelado es la minería usando algoritmos como Redes Neuronales o K-NN.
- 4-d: Validación es la fase de evaluación e interpretación.
  **Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

Antes de continuar al siguiente subtema, verifica que puedas:

##### Nivel Satisfactorio Checklist

- [ ] Explicar con tus propias palabras el proceso KDD y sus etapas.
- [ ] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio (85%).
- [ ] Identificar la diferencia entre datos crudos y preprocesados.
- [ ] Definir qué es la limpieza de datos y por qué es necesaria.
- [ ] Distinguir entre tareas de clasificación y regresión.

##### Nivel Sobresaliente Checklist

- [ ] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%).
- [ ] Lograr al menos 21/25 reactivos correctos en total (84%).
- [ ] Justificar el uso de K-NN o Redes Neuronales para un problema dado.
- [ ] Explicar el impacto de los outliers en el modelado.
- [ ] Relacionar la minería de datos con la inteligencia artificial y las bases de datos.

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

- [4.2 Mineria de Datos.pdf] - Fuentes,,,,,.
- [Presentacion_Mineria_Datos.pdf] - Fuente.
- [15059526-guia-del-examen-egel-para-informatica...pdf] - Fuente.
- Descriptor EGEL Área 4: Soluciones de Cómputo Inteligente.
