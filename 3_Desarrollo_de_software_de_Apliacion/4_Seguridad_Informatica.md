<!-- line-width: 1000 -->
<!-- format:off -->

### 3.4 Seguridad Informática

**Área:** Desarrollo de Software de Aplicación
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

La seguridad informática en el desarrollo de software de aplicación es la disciplina encargada de proteger la integridad, confidencialidad y disponibilidad de la información y los recursos del sistema. No se trata solo de añadir contraseñas, sino de un enfoque integral que abarca desde el análisis de riesgos y la identificación de vulnerabilidades hasta la implementación de mecanismos de control de acceso, criptografía y protocolos seguros.

Este subtema es crucial porque el software moderno opera en entornos hostiles y conectados. El egresado debe ser capaz de distinguir entre amenazas y vulnerabilidades, aplicar controles de acceso (como DAC, MAC y RBAC), y comprender los fundamentos de la criptografía y la firma digital para asegurar transacciones y datos sensibles. Además, implica la gestión de riesgos para evaluar el impacto y la probabilidad de fallos de seguridad.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [ ] Identificar los conceptos básicos de la tríada de seguridad (Confidencialidad, Integridad, Disponibilidad).
- [ ] Distinguir entre amenaza, vulnerabilidad y riesgo.
- [ ] Reconocer los tipos básicos de malware y ataques comunes (virus, gusanos, denegación de servicio).

##### Nivel Sobresaliente

- [ ] Analizar y clasificar riesgos basándose en la probabilidad e impacto para proponer contramedidas específicas.
- [ ] Aplicar esquemas de seguridad avanzados como criptografía asimétrica, firmas digitales y control de acceso basado en roles (RBAC).
- [ ] Diseñar estrategias de mitigación para vulnerabilidades complejas en bases de datos y sistemas operativos (ej. inyección SQL, desbordamiento de búfer).

---

#### 📚 Contenido Teórico

##### 1. Conceptos Fundamentales y la Tríada CID

**Definición:** La base de la seguridad informática se sustenta en tres pilares fundamentales conocidos como la tríada CID (o CIA en inglés).
**Explicación:**
Cualquier control de seguridad busca satisfacer uno o más de estos objetivos.

- **Confidencialidad:** Garantiza que la información sea accesible únicamente por entidades autorizadas. Se logra mediante encriptación y control de acceso.
- **Integridad:** Asegura que la información no ha sido modificada de manera no autorizada o imprevista. Se protege mediante sumas de verificación (hashing) y controles de cambios.
- **Disponibilidad:** Asegura que los sistemas y datos estén accesibles cuando los usuarios autorizados los necesiten. Se protege mediante redundancia y prevención de ataques DoS.

##### 2. Análisis de Riesgos: Amenazas y Vulnerabilidades

**Definición:** Proceso de identificar activos, valorar su importancia y determinar la probabilidad de que una amenaza explote una vulnerabilidad.
**Aspectos clave:**

- **Activo:** Cualquier recurso (hardware, software, datos) que tiene valor para la organización.
- **Vulnerabilidad:** Una debilidad intrínseca en el diseño, implementación u operación de un sistema (ej. un puerto abierto innecesariamente, falta de validación de entradas).
- **Amenaza:** Un evento potencial, malicioso o accidental, que puede aprovechar una vulnerabilidad para causar daño (ej. un hacker, un virus, un desastre natural).
- **Riesgo:** Es la probabilidad de que una amenaza explote una vulnerabilidad, multiplicado por el impacto que causaría.

##### 3. Mecanismos de Protección y Control de Acceso

**Definición:** Métodos para limitar el acceso a los recursos del sistema y asegurar que solo los usuarios autenticados y autorizados puedan realizar acciones específicas.
**Aspectos clave:**

- **Matriz de Protección:** Modelo abstracto que define los derechos de acceso de los sujetos (procesos/usuarios) sobre los objetos (archivos/recursos).
- **Control de Acceso Discrecional (DAC):** El propietario del objeto decide quién accede (común en UNIX/Windows tradicionales).
- **Control de Acceso Obligatorio (MAC):** El sistema impone políticas de acceso basadas en etiquetas de seguridad (ej. "Top Secret"), común en entornos militares.
- **Control de Acceso Basado en Roles (RBAC):** Los permisos se asignan a roles (ej. "Gerente", "Cajero") y los usuarios se asignan a roles, simplificando la administración.

##### 4. Criptografía y Firma Digital

**Definición:** Uso de algoritmos matemáticos para transformar datos de modo que sean ininteligibles para terceros (cifrado) y para verificar la autenticidad (firma).
**Aspectos clave:**

- **Cifrado Simétrico:** Usa la misma clave para encriptar y desencriptar (rápido, pero difícil de distribuir la clave).
- **Cifrado Asimétrico (Clave Pública):** Usa un par de claves; una pública para cifrar y una privada para descifrar (o viceversa para firmas). Resuelve el problema de distribución de claves.
- **Firma Digital:** Garantiza autenticidad (quién lo envió), integridad (no fue alterado) y no repudio (el emisor no puede negar haberlo enviado). Se logra encriptando el "hash" del mensaje con la clave privada del emisor.

---

#### 📖 Glosario de Términos

<!-- markdownlint-disable MD013 -->

| Término                     | Definición                                                                                                 | Contexto de uso                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Confidencialidad**        | Propiedad que impide la divulgación de información a personas o sistemas no autorizados.                   | Protección de datos sensibles como contraseñas o datos bancarios.              |
| **Integridad**              | Garantía de que los datos no han sido alterados o destruidos de manera no autorizada.                      | Validación de transacciones bancarias o transferencia de archivos.             |
| **Disponibilidad**          | Certeza de que los sistemas y datos están accesibles cuando se requieren.                                  | Prevención de ataques DDoS en servidores web.                                  |
| **Vulnerabilidad**          | Debilidad o fallo en un sistema que puede ser explotada.                                                   | Falta de parches de seguridad, contraseñas débiles, bugs de software.          |
| **Amenaza**                 | Causa potencial de un incidente no deseado que puede dañar un sistema.                                     | Hackers, malware, fallos eléctricos, errores humanos.                          |
| **Caballo de Troya**        | Programa aparentemente útil que contiene código malicioso oculto.                                          | Descarga de software gratuito que instala puertas traseras.                    |
| **Gusano (Worm)**           | Malware que se replica a sí mismo para propagarse a otras computadoras, a menudo saturando redes.          | Infecciones en redes corporativas sin intervención del usuario.                |
| **Desbordamiento de Búfer** | Escribir más datos de los que caben en un bloque de memoria asignado, corrompiendo datos adyacentes.       | Ataques a servidores para ejecutar código arbitrario con privilegios elevados. |
| **Inyección SQL**           | Técnica de ataque que inserta código SQL malicioso en entradas de usuario para manipular la base de datos. | Formularios web de login o búsqueda mal saneados.                              |
| **Firma Digital**           | Mecanismo criptográfico que asegura autenticidad, integridad y no repudio.                                 | Facturación electrónica, contratos digitales, correo seguro.                   |

<!-- markdownlint-enable MD013 -->

---

#### 🔗 Relaciones con Otros Subtemas

- **3.3 Bases de Datos:** La seguridad en BD (roles, GRANT/REVOKE, inyección SQL) es una aplicación directa de los conceptos de seguridad.
- **2.1 Arquitectura de Computadoras y SO:** Los mecanismos de protección de memoria y modos de usuario/núcleo (Kernel) son la base del control de acceso.
- **2.3 Redes de Computadoras:** La seguridad perimetral (Firewalls) y protocolos seguros (SSL/TLS, IPSec) son fundamentales para la transmisión de datos.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente

1.  **Evaluación de Riesgos Cuantitativa y Cualitativa**
    - No basta con identificar riesgos; debes saber priorizarlos. Entender que el **Riesgo = Probabilidad × Impacto**. Saber distinguir cuándo aplicar medidas preventivas vs. correctivas basándose en el costo-beneficio.
2.  **Mecanismos Avanzados de Autenticación y Criptografía**
    - Comprender cómo funciona la infraestructura de clave pública (PKI). Saber explicar _exactamente_ qué clave (pública o privada) se usa para cifrar vs. firmar. Entender el concepto de "Salting" en contraseñas para evitar ataques de diccionario o rainbow tables.

---

#### 📝 Cuestionario de Práctica

##### Instrucciones

- Total de reactivos: 25
- Cada reactivo tiene 3 opciones de respuesta (A, B, C)
- Solo una opción es correcta
- Tiempo sugerido: 50 minutos

##### Distribución de Reactivos

- **Reactivos 1-8:** Cuestionamiento directo
- **Reactivos 9-16:** Completamiento
- **Reactivos 17-25:** Relación de elementos

---

##### Reactivos de Cuestionamiento Directo

###### Nivel Satisfactorio (1-4)

###### Reactivo 1

Un desarrollador necesita asegurar que los mensajes enviados entre dos sucursales bancarias no sean leídos por interceptores en la red pública. ¿Qué propiedad de la seguridad informática debe priorizar?

A) Integridad

B) Disponibilidad

C) Confidencialidad

**Respuesta correcta:** C
**Justificación:** La confidencialidad se refiere específicamente a prevenir que la información sea revelada a entidades no autorizadas (como interceptores). La integridad evitaría la modificación, y la disponibilidad aseguraría el acceso, pero la "lectura no autorizada" es un problema de confidencialidad.
**Nivel:** Satisfactorio

###### Reactivo 2

En el contexto de seguridad informática, ¿cómo se define una vulnerabilidad?

A) Es una debilidad en el sistema que permite a un atacante reducir la seguridad de la información.

B) Es un evento potencial que puede causar daño a los activos de la organización.

C) Es la probabilidad de que una amenaza se materialice causando un impacto negativo.

**Respuesta correcta:** A
**Justificación:** Según las fuentes, una vulnerabilidad es una debilidad intrínseca (fallo de diseño, error de código). La opción B define una amenaza y la C define un riesgo.
**Nivel:** Satisfactorio

###### Reactivo 3

¿Qué tipo de malware se caracteriza por ser un programa que aparenta tener una función útil pero que contiene código malicioso oculto que se ejecuta al iniciar el programa?

A) Gusano (Worm)

B) Caballo de Troya

C) Virus polimórfico

**Respuesta correcta:** B
**Justificación:** El Caballo de Troya se define por disfrazarse de software legítimo para engañar al usuario y ejecutar acciones maliciosas. Los gusanos se replican por red y los virus infectan otros archivos.
**Nivel:** Satisfactorio

###### Reactivo 4

Para proteger una base de datos de accesos no autorizados, el administrador decide implementar un sistema donde el acceso a los objetos se basa en la identidad del usuario y reglas explícitas definidas por el propietario del objeto. ¿Qué tipo de control de acceso es este?

A) Control de Acceso Obligatorio (MAC)

B) Control de Acceso Discrecional (DAC)

C) Control de Acceso Basado en Roles (RBAC)

**Respuesta correcta:** B
**Justificación:** En el DAC (Discretionary Access Control), el propietario del recurso tiene la discreción de otorgar o revocar permisos a otros usuarios.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (5-8)

###### Reactivo 5

Una empresa de comercio electrónico desea implementar un sistema de no repudio para sus transacciones de alto valor. ¿Qué mecanismo criptográfico garantiza que el emisor de una orden de compra no pueda negar posteriormente haberla enviado?

A) Cifrado simétrico con AES-256

B) Firma digital utilizando la clave privada del emisor

C) Hash MD5 del mensaje de la orden

**Respuesta correcta:** B
**Justificación:** La firma digital proporciona autenticidad, integridad y no repudio. Al firmar con la clave privada (que solo el emisor posee), se garantiza matemáticamente que solo él pudo generar la firma. El cifrado simétrico (A) no prueba identidad única y el Hash (C) solo prueba integridad.
**Nivel:** Sobresaliente

###### Reactivo 6

Durante una auditoría de código, se identifica que una aplicación web concatena directamente las entradas del usuario en las cadenas de consulta a la base de datos sin validación. ¿A qué vulnerabilidad crítica está expuesta la aplicación y cuál es la mitigación correcta?

A) Cross-Site Scripting (XSS); usar HTTPS.

B) Desbordamiento de búfer; usar canarios de pila.

C) Inyección SQL; usar consultas parametrizadas (prepared statements).

**Respuesta correcta:** C
**Justificación:** La concatenación directa de entradas en consultas SQL permite la Inyección SQL. La solución técnica estándar es el uso de consultas parametrizadas donde la entrada se trata estrictamente como datos, no como código ejecutable.
**Nivel:** Sobresaliente

###### Reactivo 7

Un sistema crítico de control industrial requiere que la información fluya únicamente desde niveles de seguridad bajos hacia niveles altos para mantener la confidencialidad (modelo Bell-LaPadula). Si un proceso tiene un nivel de seguridad "Secreto", ¿qué operación le está permitida sobre un objeto clasificado como "Top Secret"?

A) Lectura (Read Up)

B) Escritura (Write Up)

C) Ejecución y modificación

**Respuesta correcta:** B
**Justificación:** El modelo Bell-LaPadula (mencionado en) aplica la regla "No Read Up" (no leer niveles superiores) y "No Write Down" (no escribir en niveles inferiores). Por lo tanto, un nivel inferior (Secreto) puede escribir hacia arriba (Top Secret) sin violar la confidencialidad del nivel superior, pero no puede leer.
**Nivel:** Sobresaliente

###### Reactivo 8

Se está diseñando una base de datos distribuida con requisitos estrictos de seguridad. Se debe implementar un control donde los permisos se asignen a funciones laborales y los usuarios hereden estos permisos al ser asignados a dichas funciones. ¿Cuál es la ventaja principal de este modelo (RBAC) sobre DAC en una organización con alta rotación de personal?

A) Permite que los usuarios definan sus propias políticas de seguridad de manera flexible.

B) Reduce la carga administrativa al gestionar permisos por grupos funcionales en lugar de usuario por usuario.

C) Garantiza que los datos estén etiquetados con niveles de sensibilidad obligatorios por el sistema operativo.

**Respuesta correcta:** B
**Justificación:** RBAC (Role-Based Access Control) facilita la gestión en grandes organizaciones. Al cambiar de personal, solo se cambia la asignación del usuario al rol, sin necesidad de reconfigurar los permisos de cada objeto individualmente, lo cual es la principal desventaja administrativa de DAC.
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

###### Reactivo 9

En el análisis de riesgos de seguridad informática, se define \***\*\_\_\*\*** como la probabilidad de que una amenaza explote una vulnerabilidad causando una pérdida.

A) el impacto

B) el activo

C) el riesgo

**Respuesta correcta:** C
**Justificación:** El riesgo es el producto de la probabilidad de ocurrencia por el impacto. La definición dada corresponde exactamente al concepto de riesgo en seguridad.
**Nivel:** Satisfactorio

###### Reactivo 10

Un ataque de \***\*\_\_\*\*** consiste en saturar los recursos de un sistema (como ancho de banda o capacidad de procesamiento) para que este deje de responder a las peticiones legítimas de los usuarios.

A) denegación de servicio (DoS)

B) phishing

C) inyección de código

**Respuesta correcta:** A
**Justificación:** El objetivo de un ataque DoS (Denial of Service) es comprometer la disponibilidad del sistema saturándolo, impidiendo el acceso legítimo.
**Nivel:** Satisfactorio

###### Reactivo 11

El protocolo \***\*\_\_\*\*** es una versión segura de HTTP que utiliza SSL/TLS para cifrar la comunicación entre el navegador web y el servidor, garantizando la confidencialidad de los datos transmitidos.

A) SFTP

B) HTTPS

C) IPSec

**Respuesta correcta:** B
**Justificación:** HTTPS (Hypertext Transfer Protocol Secure) es el estándar para la navegación web segura mediante cifrado [2545, 2549 - implícito en contexto de protocolos seguros].
**Nivel:** Satisfactorio

###### Reactivo 12

Para garantizar la integridad de un archivo descargado de internet, se suele comparar su \***\*\_\_\*\*** calculado con el valor proporcionado por el desarrollador original.

A) cifrado asimétrico

B) resumen hash (checksum)

C) certificado digital

**Respuesta correcta:** B
**Justificación:** Las funciones hash (como MD5 o SHA-256) generan una cadena única (resumen) para un archivo. Si el archivo cambia un solo bit, el hash cambia drásticamente, sirviendo para verificar integridad.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (13-16)

###### Reactivo 13

En un esquema de Criptografía de Clave Pública (PKI), si el Usuario A desea enviar un mensaje confidencial al Usuario B, el Usuario A debe cifrar el mensaje utilizando la \***\*\_\_\*\***, y el Usuario B lo descifrará utilizando su \***\*\_\_\*\***.

A) clave pública de B / clave privada de B

B) clave privada de A / clave pública de A

C) clave pública de A / clave privada de B

**Respuesta correcta:** A
**Justificación:** Para confidencialidad en criptografía asimétrica, se cifra con la clave pública del destinatario (que cualquiera puede conocer) para que solo el destinatario, con su clave privada (secreta), pueda leerlo.
**Nivel:** Sobresaliente

###### Reactivo 14

La técnica de \***\*\_\_\*\*** implica la inserción de instrucciones "no-operation" (NOP) seguidas de código malicioso en la pila de memoria, aprovechando una vulnerabilidad de desbordamiento de búfer para alterar el puntero de instrucción y ejecutar el código inyectado.

A) cross-site scripting

B) buffer overflow (desbordamiento de búfer)

C) man-in-the-middle

**Respuesta correcta:** B
**Justificación:** Esta es la mecánica técnica precisa de un ataque de desbordamiento de búfer clásico (stack-based buffer overflow), donde se sobrescribe la dirección de retorno para apuntar al shellcode del atacante.
**Nivel:** Sobresaliente

###### Reactivo 15

Un firewall con \***\*\_\_\*\*** no solo examina las cabeceras de los paquetes individuales, sino que también mantiene un registro de las conexiones activas (TCP handshake) para tomar decisiones de filtrado basadas en el contexto de la comunicación.

A) filtrado de paquetes estático

B) inspección de estado (stateful inspection)

C) proxy de aplicación

**Respuesta correcta:** B
**Justificación:** Los firewalls de inspección de estado (stateful) monitorean el estado de las conexiones activas y usan esa información para determinar qué paquetes de red permitir a través del firewall, siendo más seguros que los filtros estáticos.
**Nivel:** Sobresaliente

###### Reactivo 16

En el contexto de la seguridad de bases de datos, el principio de \***\*\_\_\*\*** establece que a un usuario o proceso solo se le deben otorgar los permisos estrictamente necesarios para realizar su trabajo y nada más.

A) defensa en profundidad

B) mínimo privilegio

C) seguridad por oscuridad

**Respuesta correcta:** B
**Justificación:** El principio de mínimo privilegio es fundamental en el diseño de sistemas seguros para limitar el daño potencial en caso de un compromiso de cuenta.
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

###### Reactivo 17

Relacione los conceptos de seguridad con su descripción básica.

**Conceptos**

1. Confidencialidad
2. Integridad
3. Disponibilidad

**Descripción**
a) Garantía de que el sistema funciona y los servicios no son negados a usuarios autorizados.
b) Protección contra la modificación no autorizada de datos.
c) Protección contra la divulgación no autorizada de información.

A) 1a, 2b, 3c

B) 1c, 2b, 3a

C) 1b, 2a, 3c

**Respuesta correcta:** B
**Justificación:**

- 1-c: Confidencialidad = No divulgación.
- 2-b: Integridad = No modificación.
- 3-a: Disponibilidad = Acceso garantizado.
  **Nivel:** Satisfactorio

###### Reactivo 18

Relacione el tipo de malware con su característica principal.

**Malware**

1. Virus
2. Gusano
3. Spyware

**Característica**
a) Se replica a través de redes sin necesitar un archivo anfitrión.
b) Recopila información del usuario sin su consentimiento.
c) Inserta su código en otros archivos ejecutables para propagarse.

A) 1c, 2a, 3b

B) 1a, 2b, 3c

C) 1b, 2c, 3a

**Respuesta correcta:** A
**Justificación:**

- 1-c: Virus requiere anfitrión (archivo).
- 2-a: Gusano es autónomo en red.
- 3-b: Spyware espía/recopila datos.
  **Nivel:** Satisfactorio

###### Reactivo 19

Relacione los mecanismos de control de acceso con su definición.

**Mecanismo**

1. Identificación
2. Autenticación
3. Autorización

**Definición**
a) Verificar que el usuario es quien dice ser (ej. password).
b) Determinar qué recursos puede usar el usuario verificado.
c) El usuario declara quién es (ej. nombre de usuario).

A) 1a, 2c, 3b

B) 1c, 2a, 3b

C) 1b, 2a, 3c

**Respuesta correcta:** B
**Justificación:**

- 1-c: Identificación es decir quién eres.
- 2-a: Autenticación es probarlo.
- 3-b: Autorización es otorgar permisos.
  **Nivel:** Satisfactorio

###### Reactivo 20

Relacione el tipo de amenaza con la categoría de activo afectado.

**Amenaza**

1. Intercepción (Sniffing)
2. Modificación de datos
3. Interrupción (DoS)

**Activo Afectado**
a) Disponibilidad
b) Confidencialidad
c) Integridad

A) 1b, 2c, 3a

B) 1a, 2b, 3c

C) 1c, 2a, 3b

**Respuesta correcta:** A
**Justificación:**

- 1-b: Interceptar rompe la confidencialidad.
- 2-c: Modificar rompe la integridad.
- 3-a: Interrumpir rompe la disponibilidad.
  **Nivel:** Satisfactorio

###### Reactivo 21

Relacione los términos de criptografía básica.

**Término**

1. Texto plano
2. Texto cifrado
3. Algoritmo de cifrado
4. Clave

**Descripción**
a) El resultado ininteligible del proceso.
b) El mensaje original legible.
c) Información secreta usada para personalizar la transformación.
d) Función matemática usada para encriptar.

A) 1b, 2a, 3d, 4c

B) 1a, 2b, 3c, 4d

C) 1b, 2a, 3c, 4d

**Respuesta correcta:** A
**Justificación:**

- 1-b: Texto plano es el original.
- 2-a: Texto cifrado es el resultado.
- 3-d: Algoritmo es la función matemática.
- 4-c: Clave es el secreto variable.
  **Nivel:** Satisfactorio

###### Nivel Sobresaliente (22-25)

###### Reactivo 22

Relacione los modelos de seguridad con su objetivo principal.

**Modelo**

1. Bell-LaPadula
2. Biba
3. Clark-Wilson

**Objetivo**
a) Enfocado en la integridad de datos comerciales y reglas de consistencia.
b) Enfocado estrictamente en la confidencialidad (niveles de clasificación).
c) Enfocado estrictamente en la integridad (prevenir modificación no autorizada).

A) 1b, 2c, 3a

B) 1a, 2b, 3c

C) 1c, 2a, 3b

**Respuesta correcta:** A
**Justificación:**

- 1-b: Bell-LaPadula es el modelo clásico de confidencialidad militar.
- 2-c: Biba es el inverso, enfocado en integridad de niveles.
- 3-a: Clark-Wilson se enfoca en transacciones bien formadas e integridad comercial.
  **Nivel:** Sobresaliente

###### Reactivo 23

Relacione el tipo de ataque web con la técnica de mitigación más efectiva.

**Ataque**

1. SQL Injection
2. Cross-Site Scripting (XSS)
3. Brute Force (Login)

**Mitigación**
a) Bloqueo de cuenta tras N intentos fallidos o retardos progresivos.
b) Uso de Prepared Statements (Consultas parametrizadas).
c) Escapado de caracteres de salida (Output encoding) y validación de entrada.

A) 1c, 2a, 3b

B) 1b, 2c, 3a

C) 1a, 2b, 3c

**Respuesta correcta:** B
**Justificación:**

- 1-b: La inyección SQL se evita separando datos de comandos mediante parámetros.
- 2-c: XSS se evita asegurando que el navegador no interprete datos como scripts.
- 3-a: Fuerza bruta se mitiga limitando los intentos.
  **Nivel:** Sobresaliente

###### Reactivo 24

Relacione los protocolos de seguridad de red con la capa del modelo OSI donde operan principalmente.

**Protocolo**

1. WPA2 (Wi-Fi)
2. IPSec
3. TLS/SSL
4. PGP (Email)

**Capa OSI**
a) Capa de Transporte / Sesión
b) Capa de Aplicación
c) Capa de Enlace de Datos
d) Capa de Red

A) 1c, 2d, 3a, 4b

B) 1d, 2c, 3b, 4a

C) 1a, 2b, 3c, 4d

**Respuesta correcta:** A
**Justificación:**

- 1-c: WPA2 asegura el enlace inalámbrico (Enlace).
- 2-d: IPSec asegura paquetes IP (Red).
- 3-a: TLS opera sobre TCP (Transporte/Sesión).
- 4-b: PGP asegura el contenido del correo (Aplicación).
  **Nivel:** Sobresaliente

###### Reactivo 25 - Integrador

Relacione la vulnerabilidad de seguridad con el principio de diseño violado y el impacto potencial en una base de datos distribuida.

**Vulnerabilidad**

1. Almacenar contraseñas en texto plano en la base de datos.
2. Permitir que un usuario "Invitado" tenga permisos de `DROP TABLE`.
3. No cifrar la replicación de datos entre nodos distribuidos a través de Internet.

**Principio Violado / Impacto**
a) Violación de Mínimo Privilegio / Pérdida de Disponibilidad e Integridad.
b) Violación de Defensa en Profundidad / Compromiso total de cuentas si hay una filtración.
c) Violación de Protección de Datos en Tránsito / Pérdida de Confidencialidad por Sniffing.

A) 1c, 2a, 3b

B) 1b, 2a, 3c

C) 1a, 2b, 3c

**Respuesta correcta:** B
**Justificación:**

- 1-b: Guardar contraseñas en texto plano es un fallo de defensa en profundidad (si acceden a la tabla, tienen todo). Impacto: Compromiso de cuentas.
- 2-a: Invitado con `DROP` viola el mínimo privilegio. Impacto: Borrado de datos (Integridad/Disponibilidad).
- 3-c: Datos sin cifrar en red pública viola la protección en tránsito. Impacto: Sniffing (Confidencialidad).
  **Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

##### Nivel Satisfactorio Checklist

- [ ] Explicar con tus propias palabras todos los conceptos del glosario
- [ ] Responder correctamente al menos 11/13 reactivos de nivel Satisfactorio (85%)
- [ ] Identificar las aplicaciones prácticas de los conceptos (ej. uso de HTTPS, antivirus)
- [ ] Definir correctamente Confidencialidad, Integridad y Disponibilidad.
- [ ] Diferenciar entre Virus, Gusano y Troyano.

##### Nivel Sobresaliente Checklist

- [ ] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%)
- [ ] Lograr al menos 21/25 reactivos correctos en total (84%)
- [ ] Analizar escenarios complejos que integren múltiples conceptos (ej. Reactivo 25)
- [ ] Relacionar este subtema con Bases de Datos y Redes
- [ ] Explicar la diferencia entre cifrado simétrico y asimétrico y cuándo usar cada uno.
- [ ] Identificar estrategias de mitigación para Inyección SQL y Buffer Overflows.

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

- 3.4 Seguridad Informática.pdf
- Stallings, W. Sistemas Operativos.,
- Tanenbaum, A. Sistemas Operativos Modernos.
- Kurose, J. & Ross, K. Redes de Computadoras.
- Elmasri, R. & Navathe, S. Fundamentos de Sistemas de Bases de Datos.
