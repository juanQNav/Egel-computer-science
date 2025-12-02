<!-- line-width: 1000 -->
<!-- format:off -->

### 4.1 Inteligencia Artificial

**Área:** Soluciones de Cómputo Inteligente
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

La Inteligencia Artificial (IA) en el contexto del EGEL Plus se enfoca en la creación de sistemas capaces de razonar, aprender y actuar racionalmente. Este subtema abarca desde la representación formal del conocimiento y los mecanismos de inferencia lógica hasta el reconocimiento de patrones mediante aprendizaje automático. Es fundamental comprender cómo los agentes inteligentes perciben su entorno y toman decisiones para maximizar una medida de rendimiento.

Además, el área integra conceptos de Minería de Datos (como parte del proceso KDD) y Cómputo Distribuido, necesarios para procesar grandes volúmenes de información. Se evalúa la capacidad para seleccionar algoritmos adecuados (clasificación, agrupamiento, regresión) y arquitecturas de sistemas (secuencial vs. paralelo) para resolver problemas complejos de ingeniería.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [ ] Interpretar los tipos de representación del conocimiento (lógica, redes semánticas, marcos).
- [ ] Identificar las funciones de membresía en la lógica difusa.
- [ ] Reconocer la arquitectura básica de los sistemas basados en conocimiento y las etapas del proceso KDD.

##### Nivel Sobresaliente

- [ ] Contrastar matrices de semejanza y aprendizaje y aplicar la distancia euclidiana entre objetos.
- [ ] Distinguir y aplicar tipos de aprendizaje automático (supervisado, no supervisado) y tareas de preprocesamiento.
- [ ] Establecer el recorrido de inferencia (encadenamiento hacia atrás) y valorar estrategias de tolerancia a fallas en cómputo distribuido.

---

#### 📚 Contenido Teórico

##### 1. Agentes Inteligentes y Representación del Conocimiento

**Definición:** Un agente es cualquier entidad que percibe su entorno a través de sensores y actúa sobre él mediante actuadores. La representación del conocimiento es el método para codificar lo que el agente sabe para que pueda razonar.
**Explicación:** Los agentes racionales buscan maximizar su medida de desempeño. Para entornos complejos, se utilizan representaciones estructuradas. La lógica de primer orden permite representar objetos y relaciones, mientras que las ontologías organizan categorías.
**Aspectos clave:**

- **PEAS:** Descripción del entorno de tarea: Performance (Medida de rendimiento), Environment (Entorno), Actuators (Actuadores), Sensors (Sensores) [AIMA-3rd-edition.pdf].
- **Tipos de Conocimiento:** Declarativo (hechos), Procedimental (cómo hacer algo), Heurístico (reglas de experiencia).
- **Lógica:** Proposicional (hechos simples) y de Primer Orden (objetos, predicados y cuantificadores) [AIMA-3rd-edition.pdf].

##### 2. Sistemas Basados en Conocimiento (SBC) e Inferencia

**Definición:** Sistemas que separan el conocimiento (base de conocimientos) del mecanismo de razonamiento (motor de inferencia).
**Explicación:** El motor de inferencia aplica reglas lógicas a la base de conocimientos para deducir nueva información.
**Aspectos clave:**

- **Encadenamiento hacia adelante (Data-driven):** Parte de los hechos conocidos para derivar conclusiones.
- **Encadenamiento hacia atrás (Goal-driven):** Parte de una hipótesis (objetivo) y busca evidencias que la sustenten. Es típico en sistemas de diagnóstico [AIMA-3rd-edition.pdf].
- **Lógica Difusa:** Permite valores de verdad intermedios entre 0 y 1, utilizando funciones de membresía para modelar la incertidumbre y conceptos vagos (e.g., "temperatura alta") [4.1 Inteligencia Artificial.pdf].

##### 3. Minería de Datos y Aprendizaje Automático

**Definición:** El aprendizaje automático es la capacidad de mejorar el desempeño en una tarea a través de la experiencia. La minería de datos es una etapa del KDD para descubrir patrones.
**Explicación:** Se busca encontrar una hipótesis que se ajuste a los datos observados. El proceso KDD incluye selección, preprocesamiento, transformación, minería y evaluación.
**Aspectos clave:**

- **Aprendizaje Supervisado:** Se entrena con pares (entrada, salida esperada). Ejemplos: Clasificación (etiquetas discretas), Regresión (valores continuos) [2015_Book_DataMining.pdf].
- **Aprendizaje No Supervisado:** Encuentra patrones sin etiquetas previas. Ejemplo: Clustering (agrupamiento).
- **Preprocesamiento:** Limpieza de datos (ruido, valores faltantes), normalización y reducción de dimensionalidad [2015_Book_DataMining.pdf].

---

#### 📖 Glosario de Términos

<!-- markdownlint-disable MD013 -->

| Término                       | Definición                                                                                                                                                     | Contexto de uso                                              |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| **KDD**                       | Knowledge Discovery in Databases. Proceso no trivial de identificar patrones válidos, novedosos y útiles en los datos.                                         | Contexto general de análisis de datos y minería.             |
| **Distancia Euclidiana**      | Medida de similitud entre dos puntos en un espacio métrico, calculada como la raíz cuadrada de la suma de los cuadrados de las diferencias de sus coordenadas. | Algoritmos de clasificación (K-NN) y agrupamiento (K-Means). |
| **Sobreajuste (Overfitting)** | Cuando un modelo aprende el "ruido" de los datos de entrenamiento en lugar del patrón subyacente, fallando en generalizar.                                     | Evaluación de modelos de aprendizaje automático.             |
| **Redes Bayesianas**          | Modelo gráfico probabilístico que representa un conjunto de variables y sus dependencias condicionales.                                                        | Razonamiento bajo incertidumbre y diagnóstico.               |
| **Cómputo en la Nube**        | Entrega de servicios de computación (servidores, almacenamiento, bases de datos) a través de Internet.                                                         | Infraestructura para desplegar soluciones de IA escalables.  |

<!-- markdownlint-enable MD013 -->

---

#### 🔗 Relaciones con Otros Subtemas

- **1.1 Análisis y Diseño de Algoritmos:** La complejidad computacional es vital al elegir algoritmos de aprendizaje (e.g., tiempo de entrenamiento vs. predicción).
- **1.4 Lógica Computacional:** Base fundamental para la representación del conocimiento y los motores de inferencia en IA.
- **3.3 Bases de Datos:** Fuente primaria de información para los procesos de KDD y minería de datos.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente.

1.  **Cálculo de Similitud (Distancia Euclidiana):**

    - Debes ser capaz de calcular manualmente la distancia entre dos vectores de características. Dados $P=(p_1, p_2, \dots, p_n)$ y $Q=(q_1, q_2, \dots, q_n)$, la distancia es $d(P,Q) = \sqrt{\sum_{i=1}^n (q_i - p_i)^2}$.
    - Es crucial para algoritmos como K-Vecinos Más Cercanos (K-NN) y K-Medias (Clustering) [2015_Book_DataMining.pdf].

2.  **Lógica del Encadenamiento Hacia Atrás:**
    - No solo definirlo, sino trazar la ejecución. Si el objetivo es probar $G$, el sistema busca reglas que concluyan $G$ (ej. $A \to G$) y establece $A$ como nuevo sub-objetivo. Esto se repite hasta llegar a hechos conocidos. Es esencial para sistemas expertos de diagnóstico [AIMA-3rd-edition.pdf].

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

¿Cuál es la etapa del proceso de Descubrimiento de Conocimiento en Bases de Datos (KDD) que se encarga de la eliminación de ruido y el manejo de datos faltantes?

A) Selección

B) Preprocesamiento

C) Transformación

**Respuesta correcta:** B
**Justificación:** El preprocesamiento incluye la limpieza de datos, que abarca el manejo de valores faltantes, eliminación de ruido y corrección de inconsistencias, preparando los datos para la minería [2015_Book_DataMining.pdf].
**Nivel:** Satisfactorio

###### Reactivo 2

En el contexto de los agentes inteligentes, ¿qué término describe la medida que evalúa qué tan exitoso es un agente en completar su tarea?

A) Función de utilidad

B) Medida de rendimiento

C) Modelo de transición

**Respuesta correcta:** B
**Justificación:** La medida de rendimiento (Performance measure) es el criterio objetivo para evaluar el éxito del comportamiento de un agente. La función de utilidad es una internalización de esta medida utilizada por el agente para tomar decisiones [AIMA-3rd-edition.pdf].
**Nivel:** Satisfactorio

###### Reactivo 3

¿Qué tipo de lógica permite representar conceptos vagos o imprecisos, asignando grados de pertenencia a los conjuntos, como "temperatura media" o "velocidad alta"?

A) Lógica de primer orden

B) Lógica proposicional

C) Lógica difusa

**Respuesta correcta:** C
**Justificación:** La lógica difusa utiliza funciones de membresía para asignar grados de verdad entre 0 y 1, permitiendo modelar la incertidumbre asociada a la vaguedad del lenguaje natural [4.1 Inteligencia Artificial.pdf].
**Nivel:** Satisfactorio

###### Reactivo 4

En una Red Neuronal Artificial, ¿cuál es el propósito del algoritmo de _Backpropagation_ (propagación hacia atrás)?

A) Definir la topología de la red

B) Calcular el error y ajustar los pesos

C) Normalizar los datos de entrada

**Respuesta correcta:** B
**Justificación:** _Backpropagation_ es el algoritmo estándar para el aprendizaje en redes multicapa. Calcula el gradiente del error respecto a los pesos y los ajusta para minimizar dicho error [Machine-Learning-Tom-Mitchell.pdf].
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

Dados dos objetos representados por los vectores de características $A = (2, 5)$ y $B = (5, 1)$, calcule la distancia euclidiana entre ellos.

A) 5

B) 7

C) 25

**Respuesta correcta:** A
**Justificación:** La fórmula es $\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.
Cálculo: $\sqrt{(5-2)^2 + (1-5)^2} = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.
**Nivel:** Sobresaliente

###### Reactivo 6

Un sistema de diagnóstico médico utiliza un motor de inferencia. El sistema comienza con la hipótesis de que el paciente tiene "Gripe" y busca en su base de reglas los síntomas que confirman esa enfermedad para luego preguntar al paciente si los presenta. ¿Qué estrategia de control está utilizando?

A) Encadenamiento hacia adelante

B) Encadenamiento hacia atrás

C) Búsqueda en amplitud

**Respuesta correcta:** B
**Justificación:** El encadenamiento hacia atrás (goal-driven) comienza con una hipótesis (objetivo) y trabaja hacia atrás buscando reglas que la soporten hasta llegar a los hechos (datos) necesarios [AIMA-3rd-edition.pdf].
**Nivel:** Sobresaliente

###### Reactivo 7

Al diseñar un sistema de cómputo distribuido tolerante a fallas para procesar grandes volúmenes de datos de IA, ¿qué técnica es la más adecuada para asegurar que el sistema continúe operando si un nodo falla durante el procesamiento?

A) Replicación de estado

B) Checkpointing local

C) Exclusión mutua

**Respuesta correcta:** A
**Justificación:** La replicación (específicamente la replicación activa o de estado) permite que múltiples copias de un componente procesen la misma solicitud, asegurando disponibilidad inmediata si uno falla. El checkpointing implica recuperación y retraso [tanenbaum-sistemas-operativos-distribuidos.pdf].
**Nivel:** Sobresaliente

###### Reactivo 8

Se tiene un conjunto de datos con una alta dimensionalidad (100 atributos) y pocos registros. Se desea aplicar un clasificador, pero se teme el sobreajuste. ¿Qué técnica de preprocesamiento es la más indicada antes de entrenar el modelo?

A) Discretización

B) Selección de características (Feature Selection)

C) Sobremuestreo (Oversampling)

**Respuesta correcta:** B
**Justificación:** La selección de características reduce la dimensionalidad eliminando atributos irrelevantes o redundantes, lo cual ayuda a mitigar la "maldición de la dimensionalidad" y el riesgo de sobreajuste cuando hay pocos datos [2015_Book_DataMining.pdf].
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

El aprendizaje **\_\_\_\_** es un tipo de aprendizaje automático donde el modelo se construye a partir de un conjunto de datos que contiene tanto las entradas como las etiquetas de salida deseadas.

A) por refuerzo

B) supervisado

C) no supervisado

**Respuesta correcta:** B
**Justificación:** En el aprendizaje supervisado, el agente observa pares de ejemplo (entrada, salida) y aprende una función que mapea de la entrada a la salida [AIMA-3rd-edition.pdf].
**Nivel:** Satisfactorio

###### Reactivo 10

En la arquitectura de un Sistema Experto, la **\_\_\_\_** contiene los hechos y reglas específicas del dominio que se está modelando, separada del motor de inferencia.

A) interfaz de usuario

B) memoria de trabajo

C) base de conocimientos

**Respuesta correcta:** C
**Justificación:** La base de conocimientos es el componente que almacena el conocimiento especializado (reglas, hechos) en un sistema experto [AIMA-3rd-edition.pdf].
**Nivel:** Satisfactorio

###### Reactivo 11

Para determinar la similitud entre dos documentos de texto representados como vectores de frecuencias de palabras, una métrica comúnmente utilizada que mide el coseno del ángulo entre ellos es la similitud **\_\_\_\_**.

A) de Jaccard

B) Coseno

C) Manhattan

**Respuesta correcta:** B
**Justificación:** La similitud coseno es estándar en minería de texto para medir la similitud entre documentos, independiente de su longitud, basándose en la orientación de sus vectores [2015_Book_DataMining.pdf].
**Nivel:** Satisfactorio

###### Reactivo 12

El servicio de cómputo en la nube conocido como **\_\_\_\_** proporciona a los desarrolladores un entorno para construir aplicaciones y servicios a través de internet, sin preocuparse por la infraestructura subyacente (servidores, almacenamiento, redes).

A) IaaS (Infraestructura como Servicio)

B) PaaS (Plataforma como Servicio)

C) SaaS (Software como Servicio)

**Respuesta correcta:** B
**Justificación:** PaaS ofrece herramientas de desarrollo y despliegue. IaaS ofrece hardware virtualizado y SaaS ofrece aplicaciones finales. [Guía_EGEL_Anterior - Ing Software.pdf].
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

En el algoritmo _K-Means_, el paso de asignación consiste en asignar cada punto de datos al **\_\_\_\_** más cercano según una medida de distancia, generalmente la euclidiana.

A) centroide

B) vecino

C) outlier

**Respuesta correcta:** A
**Justificación:** K-Means itera entre asignar puntos al centroide (media del cluster) más cercano y recalcular los centroides basándose en los nuevos miembros del cluster [2015_Book_DataMining.pdf].
**Nivel:** Sobresaliente

###### Reactivo 14

Considere la regla lógica: "Si el motor no arranca y las luces no encienden, entonces la batería está muerta". En un sistema de encadenamiento hacia adelante, si se introducen los hechos "El motor no arranca" y "Las luces no encienden", el motor de inferencia **\_\_\_\_** la regla para concluir el estado de la batería.

A) rechazará

B) disparará (fire)

C) podará

**Respuesta correcta:** B
**Justificación:** En sistemas de producción y encadenamiento hacia adelante, cuando las condiciones de una regla se cumplen (match), la regla se "dispara" para agregar la conclusión a la memoria de trabajo [AIMA-3rd-edition.pdf].
**Nivel:** Sobresaliente

###### Reactivo 15

El problema de la **\_\_\_\_** ocurre cuando múltiples hilos o procesos intentan acceder y modificar un recurso compartido al mismo tiempo, lo que puede resultar en datos inconsistentes si no se utilizan mecanismos de sincronización adecuados como semáforos.

A) condición de carrera

B) inanición (starvation)

C) exclusión mutua

**Respuesta correcta:** A
**Justificación:** Una condición de carrera (race condition) sucede cuando el resultado de la ejecución depende del orden no determinista en que se ejecutan los hilos sobre recursos compartidos [Sistemas Operativos Modernos - Andrew S. Tanenbaum.pdf].
**Nivel:** Sobresaliente

###### Reactivo 16

Para evaluar un clasificador binario con clases desbalanceadas, la **\_\_\_\_** no es una métrica confiable. En su lugar, se debe utilizar la matriz de confusión para calcular precisión, recall o F1-score.

A) sensibilidad

B) exactitud (accuracy)

C) especificidad

**Respuesta correcta:** B
**Justificación:** La exactitud puede ser engañosa en datos desbalanceados (ej. 99% clase A, 1% clase B; un modelo que siempre predice A tiene 99% de exactitud pero es inútil). Sensibilidad y especificidad son más robustas [2015_Book_DataMining.pdf].
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione el tipo de agente inteligente con su descripción característica.

**Tipo de Agente**

1. Reactivo simple
2. Basado en modelos
3. Basado en objetivos
4. Basado en utilidad

**Descripción**
a) Toma decisiones basadas únicamente en el percepto actual, ignorando el historial.
b) Mantiene un estado interno para rastrear aspectos del mundo que no son evidentes en el percepto actual.
c) Utiliza información sobre situaciones deseables para guiar su toma de decisiones y planificar.
d) Toma decisiones considerando una medida de preferencia entre estados para maximizar la felicidad o éxito.

A) 1a, 2b, 3c, 4d

B) 1b, 2a, 3d, 4c

C) 1a, 2c, 3b, 4d

**Respuesta correcta:** A
**Justificación:**

- 1-a: Los reactivos simples actúan solo sobre la entrada actual (reglas condición-acción).
- 2-b: Los basados en modelos requieren memoria (estado interno) para manejar la observabilidad parcial.
- 3-c: Los basados en objetivos necesitan saber la meta para decidir la acción.
- 4-d: La utilidad permite comparar qué tan bueno es un estado o meta [AIMA-3rd-edition.pdf].
  **Nivel:** Satisfactorio

###### Reactivo 18

Relacione las técnicas de Inteligencia Artificial con su aplicación principal.

**Técnica**

1. Lógica Difusa
2. Redes Neuronales
3. Algoritmos Genéticos
4. Sistemas Expertos

**Aplicación**
a) Diagnóstico médico basado en reglas explícitas definidas por humanos.
b) Control de temperatura en un aire acondicionado (suave/medio/fuerte).
c) Reconocimiento de imágenes y patrones complejos.
d) Optimización de rutas y problemas de búsqueda evolutiva.

A) 1b, 2c, 3d, 4a

B) 1a, 2b, 3c, 4d

C) 1c, 2d, 3a, 4b

**Respuesta correcta:** A
**Justificación:**

- 1-b: Lógica difusa es ideal para control suave y variables lingüísticas.
- 2-c: Redes neuronales sobresalen en reconocimiento de patrones perceptuales.
- 3-d: Algoritmos genéticos se usan para optimización y búsqueda inspirada en evolución.
- 4-a: Sistemas expertos emulan la toma de decisiones de un experto humano mediante reglas [4.1 Inteligencia Artificial.pdf].
  **Nivel:** Satisfactorio

###### Reactivo 19

Relacione el tipo de aprendizaje automático con el escenario descrito.

**Tipo de Aprendizaje**

1. Supervisado
2. No Supervisado
3. Por Refuerzo

**Escenario**
a) Un programa de ajedrez aprende jugando millones de partidas contra sí mismo, recibiendo puntos al ganar.
b) Un banco utiliza datos históricos de créditos (pagados/no pagados) para entrenar un modelo de riesgo.
c) Un departamento de marketing segmenta a sus clientes en grupos basados en patrones de compra sin etiquetas previas.

A) 1b, 2c, 3a

B) 1a, 2b, 3c

C) 1c, 2a, 3b

**Respuesta correcta:** A
**Justificación:**

- 1-b: Datos históricos etiquetados implican aprendizaje supervisado.
- 2-c: Segmentación (clustering) sin etiquetas es no supervisado.
- 3-a: Aprender mediante premios/castigos en un entorno es aprendizaje por refuerzo [AIMA-3rd-edition.pdf].
  **Nivel:** Satisfactorio

###### Reactivo 20

Relacione el concepto de KDD con su definición.

**Concepto**

1. Data Warehouse
2. Limpieza de datos
3. Minería de datos
4. Interpretación

**Definición**
a) Aplicación de algoritmos inteligentes para extraer patrones.
b) Repositorio unificado de datos históricos para análisis.
c) Evaluación de los patrones descubiertos para convertirlos en conocimiento útil.
d) Proceso de remover inconsistencias y ruido de los datos.

A) 1b, 2d, 3a, 4c

B) 1d, 2a, 3c, 4b

C) 1a, 2b, 3d, 4c

**Respuesta correcta:** A
**Justificación:**

- 1-b: Data Warehouse almacena datos integrados.
- 2-d: Limpieza es parte del preprocesamiento.
- 3-a: Minería es la etapa algorítmica de extracción.
- 4-c: Interpretación da sentido a los patrones [2015_Book_DataMining.pdf].
  **Nivel:** Satisfactorio

###### Reactivo 21

Relacione las compuertas lógicas con su comportamiento en lógica proposicional.

**Compuerta**

1. AND ($\wedge$)
2. OR ($\vee$)
3. NOT ($\neg$)
4. Implicación ($\to$)

**Comportamiento**
a) Verdadero solo si ambas entradas son verdaderas.
b) Falso solo si la primera es verdadera y la segunda falsa.
c) Invierte el valor de verdad.
d) Falso solo si ambas entradas son falsas.

A) 1a, 2d, 3c, 4b

B) 1d, 2a, 3b, 4c

C) 1a, 2b, 3c, 4d

**Respuesta correcta:** A
**Justificación:**

- 1-a: Conjunción.
- 2-d: Disyunción.
- 3-c: Negación.
- 4-b: La implicación $P \to Q$ solo es falsa cuando $P$ es V y $Q$ es F [AIMA-3rd-edition.pdf].
  **Nivel:** Satisfactorio

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Relacione los algoritmos de clasificación con sus características distintivas de funcionamiento.

**Algoritmo**

1. Naive Bayes
2. Árboles de Decisión (ID3/C4.5)
3. K-Nearest Neighbors (K-NN)
4. Support Vector Machines (SVM)

**Característica**
a) Basado en el teorema de Bayes, asume independencia entre atributos.
b) Busca el hiperplano que maximiza el margen de separación entre clases.
c) Utiliza medidas de ganancia de información o entropía para dividir el espacio de datos.
d) Clasifica una nueva instancia basándose en la clase mayoritaria de sus vecinos más cercanos en el espacio de características.

A) 1a, 2c, 3d, 4b

B) 1a, 2d, 3c, 4b

C) 1c, 2a, 3b, 4d

**Respuesta correcta:** A
**Justificación:**

- 1-a: Naive Bayes asume independencia condicional.
- 2-c: Árboles usan entropía para crear divisiones (splits).
- 3-d: K-NN es un método basado en instancias (lazy learning).
- 4-b: SVM busca el margen máximo [Machine-Learning-Tom-Mitchell.pdf].
  **Nivel:** Sobresaliente

###### Reactivo 23

Relacione el mecanismo de tolerancia a fallas en sistemas distribuidos con su descripción técnica.

**Mecanismo**

1. Checkpointing
2. Replicación Pasiva (Primary-Backup)
3. Replicación Activa (State Machine)
4. Atomicidad (Transacciones)

**Descripción**
a) Todas las réplicas procesan cada solicitud concurrentemente; requiere determinismo.
b) Solo una réplica procesa la solicitud y actualiza a las demás; si falla, otra toma el control.
c) Guardar periódicamente el estado del sistema en almacenamiento estable para recuperación.
d) Propiedad que asegura que una operación se realiza completamente o no se realiza en absoluto.

A) 1c, 2b, 3a, 4d

B) 1d, 2a, 3b, 4c

C) 1c, 2a, 3b, 4d

**Respuesta correcta:** A
**Justificación:**

- 1-c: Checkpointing guarda estados.
- 2-b: Pasiva implica un líder (primario) y respaldos.
- 3-a: Activa implica procesamiento paralelo en todas las réplicas.
- 4-d: Atomicidad es clave en transacciones distribuidas (ACID) [tanenbaum-sistemas-operativos-distribuidos.pdf].
  **Nivel:** Sobresaliente

###### Reactivo 24

Relacione el esquema de representación de conocimiento con su estructura y limitación principal.

**Esquema**

1. Redes Semánticas
2. Marcos (Frames)
3. Lógica de Predicados
4. Reglas de Producción

**Estructura/Limitación**
a) Estructura de grafos con nodos y arcos etiquetados; carece de semántica formal estandarizada para los enlaces.
b) Estructura de objetos con ranuras (slots) y facetas; ideal para herencia y valores por defecto.
c) Formalismo matemático preciso con cuantificadores; computacionalmente costoso e indecidible en casos generales.
d) Estructura IF-THEN modular; puede ser difícil de mantener en sistemas muy grandes y propensa a conflictos.

A) 1a, 2b, 3c, 4d

B) 1b, 2a, 3d, 4c

C) 1a, 2c, 3b, 4d

**Respuesta correcta:** A
**Justificación:**

- 1-a: Redes semánticas son grafos, sufren de ambigüedad en enlaces.
- 2-b: Marcos organizan conocimiento en objetos/clases.
- 3-c: Lógica de primer orden es potente pero semidecidible.
- 4-d: Reglas son modulares pero difíciles de gestionar a gran escala [AIMA-3rd-edition.pdf].
  **Nivel:** Sobresaliente

###### Reactivo 25 - Integrador

Un ingeniero debe diseñar un sistema de visión artificial distribuido para detectar defectos en líneas de manufactura. El sistema debe clasificar imágenes en tiempo real y tolerar la caída de sensores. Relacione los componentes del diseño con la justificación técnica adecuada para cumplir los requisitos.

**Componente de Diseño**

1. Algoritmo de Clasificación: Red Neuronal Convolucional (CNN)
2. Preprocesamiento: Normalización de histograma
3. Arquitectura Distribuida: Edge Computing
4. Tolerancia a Fallas: Redundancia de Sensores y Votación

**Justificación Técnica**
a) Permite procesar los datos cerca de la fuente (línea de manufactura) reduciendo la latencia para tiempo real.
b) Estandariza el contraste y brillo de las imágenes para que el modelo sea robusto a cambios de iluminación.
c) Método especializado en extraer características espaciales y patrones visuales complejos de imágenes crudas.
d) Permite comparar salidas de múltiples fuentes; si un sensor falla o da datos erróneos, el sistema sigue operando por mayoría.

A) 1c, 2b, 3a, 4d

B) 1a, 2c, 3d, 4b

C) 1b, 2a, 3c, 4d

**Respuesta correcta:** A
**Justificación:**

- 1-c: CNN es el estado del arte para visión (imágenes).
- 2-b: Normalización es vital en imágenes para consistencia.
- 3-a: Edge computing es la solución estándar para baja latencia en IoT/Industria.
- 4-d: La votación con redundancia es una estrategia clásica de tolerancia a fallas de hardware [Combinación de 4.1, 4.2 y 4.3].
  **Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

Antes de continuar al siguiente subtema, verifica que puedas:

##### Nivel Satisfactorio Checklist

- [ ] Explicar con tus propias palabras qué es un agente inteligente y las métricas PEAS.
- [ ] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio.
- [ ] Identificar las diferencias entre lógica proposicional y difusa.
- [ ] Describir las etapas del proceso KDD.

##### Nivel Sobresaliente Checklist

- [ ] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente.
- [ ] Calcular la distancia euclidiana entre dos vectores numéricos sin dudar.
- [ ] Explicar la diferencia entre encadenamiento hacia adelante y hacia atrás.
- [ ] Justificar la selección de un algoritmo de ML (SVM, K-NN, Naive Bayes) dado un escenario específico.

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

- Russell, S., & Norvig, P. (2010). _Artificial Intelligence: A Modern Approach_ (3rd ed.). [AIMA-3rd-edition.pdf]
- Aggarwal, C. C. (2015). _Data Mining: The Textbook_. Springer. [2015_Book_DataMining.pdf]
- Tanenbaum, A. S. (2009). _Sistemas Operativos Modernos_. [Sistemas Operativos Modernos - Andrew S. Tanenbaum - 3ra Edicion.pdf]
- Guía CENEVAL EGEL Plus Ciencias Computacionales.
