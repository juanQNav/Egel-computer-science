<!-- line-width: 1000 -->
<!-- format:off -->

### 2.3 Redes de Computadoras

**Área:** Desarrollo de Software de Base
**Nivel objetivo:** Sobresaliente
**Reactivos en examen:** 10
**Reactivos de práctica:** 25

---

#### 📋 Resumen Ejecutivo

El subtema de Redes de Computadoras aborda los principios fundamentales que permiten la interconexión y comunicación entre sistemas informáticos. Se centra en la arquitectura de protocolos, específicamente los modelos de referencia OSI y TCP/IP, que estructuran las funciones de comunicación en capas abstracatas. Este campo abarca desde la transmisión física de bits hasta las aplicaciones distribuidas complejas que utilizamos diariamente, como la Web y el correo electrónico.

Para el profesional en Ciencias Computacionales, el dominio de este tema implica no solo conocer los componentes de hardware (routers, switches) y software (protocolos), sino también comprender los mecanismos de control de flujo, enrutamiento, seguridad y calidad de servicio (QoS) que garantizan una transmisión de datos eficiente y segura en entornos locales y globales.

---

#### 🎯 Objetivos de Aprendizaje

##### Nivel Satisfactorio

- [ ] Distinguir los protocolos y componentes de redes de computadoras a través de los modelos de referencia OSI y TCP/IP.
- [ ] Identificar las funciones principales de las capas de Aplicación, Transporte, Red, Enlace y Física.
- [ ] Diferenciar entre los protocolos de transporte TCP (orientado a conexión) y UDP (no orientado a conexión).

##### Nivel Sobresaliente

- [ ] Distinguir los mecanismos de interconexión de redes considerando protocolos de seguridad (como IPsec y SSL/TLS).
- [ ] Analizar estrategias de Calidad de Servicio (QoS) para aplicaciones multimedia y de tiempo real.
- [ ] Valorar los algoritmos de enrutamiento (como vector de distancias y estado de enlace) y su impacto en la eficiencia de la red.

---

#### 📚 Contenido Teórico

##### 1. Modelos de Referencia y Arquitectura

**Definición:** Los modelos de referencia dividen la compleja tarea de la comunicación en capas funcionales. El modelo **OSI** (Open Systems Interconnection) consta de 7 capas (Aplicación, Presentación, Sesión, Transporte, Red, Enlace de Datos, Física), mientras que el modelo **TCP/IP** (o pila de protocolos de Internet) condensa estas funciones en 5 capas prácticas.

**Explicación:** La arquitectura de Internet se basa en el modelo TCP/IP. La información desciende por la pila en el emisor, siendo **encapsulada** en cada capa (agregando cabeceras), y asciende en el receptor, siendo desencapsulada. Esto permite que los desarrolladores de aplicaciones ignoren los detalles del hardware subyacente.

**Aspectos clave:**

- **Encapsulamiento:** Proceso donde una unidad de datos de protocolo (PDU) de una capa superior se coloca dentro del campo de datos de la PDU de la capa inferior.
- **Diferencia OSI vs TCP/IP:** TCP/IP no implementa estrictamente las capas de Presentación y Sesión; estas funciones quedan a cargo del desarrollador de la aplicación si son necesarias.
- **Capas Superiores:** Enfocadas en el software y la aplicación (HTTP, DNS).
- **Capas Inferiores:** Enfocadas en el transporte de datos y hardware (IP, Ethernet).

**Aplicaciones prácticas:** Diagnóstico de fallos de red (aislar si el problema es físico, de direccionamiento IP o de la aplicación).

##### 2. Capa de Transporte y Fiabilidad

**Definición:** Responsable de la comunicación lógica entre procesos de aplicación que se ejecutan en hosts diferentes. Sus protocolos principales son TCP y UDP.

**Explicación:** Mientras que la capa de red (IP) entrega paquetes entre hosts ("de máquina a máquina"), la capa de transporte entrega datos entre procesos ("de puerto a puerto").

**Aspectos clave:**

- **TCP (Transmission Control Protocol):** Ofrece un servicio orientado a conexión, fiable y con control de flujo y congestión. Utiliza un saludo de tres vías (three-way handshake) para establecer la conexión.
- **UDP (User Datagram Protocol):** Protocolo ligero, sin conexión y no fiable. No garantiza la entrega ni el orden, pero es más rápido. Ideal para streaming o DNS.
- **Puertos:** Identificadores numéricos (16 bits) para distinguir procesos (ej. 80 para Web, 25 para correo).

**Aplicaciones prácticas:** Selección de UDP para una videollamada (donde la velocidad prima sobre la pérdida de algunos cuadros) vs. TCP para transferir un archivo bancario (donde la integridad es crítica).

##### 3. Capa de Red y Enrutamiento

**Definición:** Se encarga de mover los paquetes desde el origen hasta el destino a través de múltiples redes, utilizando direcciones lógicas (IP) y algoritmos de enrutamiento.

**Explicación:** Esta capa determina la mejor ruta para los datos. Se divide en el **plano de datos** (reenvío local en el router) y el **plano de control** (lógica global de enrutamiento).

**Aspectos clave:**

- **Protocolo IP:** Ofrece un servicio de "mejor esfuerzo" (best-effort); no garantiza entrega ni orden.
- **Algoritmos de Enrutamiento:**
  - _Intra-dominio (IGP):_ Como OSPF (Estado de Enlace) o RIP (Vector de Distancias), usados dentro de una organización.
  - _Inter-dominio (EGP):_ Como **BGP**, fundamental para unir los miles de ISP en Internet.
- **SDN (Redes Definidas por Software):** Separación del plano de control del plano de datos, permitiendo una gestión centralizada y programable de la red.

**Aplicaciones prácticas:** Configuración de subredes y routers para optimizar el tráfico en una empresa.

##### 4. Seguridad y Calidad de Servicio (QoS)

**Definición:** Mecanismos para proteger la integridad y privacidad de los datos (seguridad) y asegurar el rendimiento para aplicaciones críticas (QoS).

**Explicación:** La seguridad incluye cifrado, autenticación e integridad. QoS implica priorizar cierto tráfico (como voz sobre IP) sobre otro menos sensible al retardo (como descargas).

**Aspectos clave:**

- **Seguridad:**
  - _SSL/TLS:_ Seguridad en capa de transporte (ej. HTTPS).
  - _IPsec:_ Seguridad en capa de red (VPNs), que cifra todo el datagrama IP.
- **QoS (Quality of Service):** Parámetros como ancho de banda, retardo, jitter y pérdida de paquetes son críticos para multimedia.

**Aplicaciones prácticas:** Implementación de VPNs corporativas y configuración de prioridades en routers para asegurar que las llamadas VoIP no se corten.

##### 5. Modelo OSI

<!-- markdownlint-disable MD013 -->

| **N°** | **Capa (Inglés / Español)** | **Función Principal**                                 | **Ejemplos de Protocolos / Tecnologías**     |
| ------ | --------------------------- | ----------------------------------------------------- | -------------------------------------------- |
| **7**  | Application / Aplicación    | Interacción con el usuario y aplicaciones             | HTTP, HTTPS, FTP, SMTP, DNS, Telnet          |
| **6**  | Presentation / Presentación | Formato de datos, cifrado, compresión                 | SSL/TLS, JPEG, MPEG, ASCII, Unicode          |
| **5**  | Session / Sesión            | Manejo de sesiones, autenticación, control de diálogo | NetBIOS, RPC, PPTP                           |
| **4**  | Transport / Transporte      | Control de flujo, confiabilidad, segmentación         | TCP, UDP, SCTP                               |
| **3**  | Network / Red               | Ruteo, direcciones lógicas                            | IP, ICMP, IPsec, RIP, OSPF, BGP              |
| **2**  | Data Link / Enlace de Datos | Direccionamiento físico, control de errores           | Ethernet, Wi-Fi (IEEE 802.11), PPP, MAC, ARP |
| **1**  | Physical / Física           | Transmisión de bits, señales eléctricas/ópticas       | Cable UTP, Fibra óptica, Hubs, Bluetooth     |

<!-- markdownlint-enable MD013 -->

---

#### 📖 Glosario de Términos

<!-- markdownlint-disable MD013 -->

| Término                   | Definición                                                                                                                      | Contexto de uso                                             |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------- |
| **PDU**                   | Unidad de Datos de Protocolo. Nombre genérico de los datos en una capa específica.                                              | Capa 4: Segmento, Capa 3: Datagrama, Capa 2: Trama.         |
| **Encapsulamiento**       | Proceso de añadir cabeceras de control a los datos a medida que descienden por la pila de protocolos.                           | Envío de datos de una aplicación a la red.                  |
| **Socket**                | Interfaz de software que actúa como punto final de una conexión de red bidireccional entre procesos.                            | Programación de aplicaciones de red (ej. en Python o C).    |
| **DNS**                   | Sistema de Nombres de Dominio. Traduce nombres legibles (www.ejemplo.com) a direcciones IP numéricas.                           | Navegación web, resolución de direcciones.                  |
| **Handshake (Tres vías)** | Proceso de negociación para establecer una conexión TCP (SYN, SYN-ACK, ACK).                                                    | Inicio de cualquier sesión TCP fiable.                      |
| **BGP**                   | Border Gateway Protocol. Protocolo de enrutamiento estándar para intercambiar información entre sistemas autónomos en Internet. | Conexión entre proveedores de servicios de Internet (ISPs). |
| **Firewall**              | Dispositivo o software que filtra el tráfico de red basándose en reglas de seguridad predefinidas.                              | Protección perimetral de redes corporativas o personales.   |
| **IPsec**                 | Conjunto de protocolos para asegurar las comunicaciones IP autenticando y cifrando cada paquete IP.                             | Creación de Redes Privadas Virtuales (VPN).                 |

<!-- markdownlint-enable MD013 -->

---

#### 🔗 Relaciones con Otros Subtemas

- **Sistemas Operativos:** La gestión de sockets, el stack TCP/IP y los drivers de dispositivos de red son gestionados por el kernel del sistema operativo.
- **Seguridad Informática:** Los protocolos como SSL/TLS y IPsec son aplicaciones directas de los conceptos de criptografía y autenticación en la infraestructura de comunicación.
- **Sistemas Distribuidos:** Las redes son la base física sobre la que operan los sistemas distribuidos, dependiendo de la latencia y el ancho de banda para la sincronización y consistencia.

---

#### 💡 Puntos Críticos para Nivel Sobresaliente

**Atención:** Estos conceptos son fundamentales para alcanzar el nivel Sobresaliente.

1.  **Seguridad en Diferentes Capas**
    - Debes entender dónde operan los protocolos de seguridad. **SSL/TLS** opera en la capa de transporte (o justo encima), protegiendo la comunicación de aplicación a aplicación (ej. banca en línea). **IPsec** opera en la capa de red, protegiendo la comunicación entre hosts o redes completas (ej. VPN sitio a sitio). Confundir sus niveles de operación es un error común.
2.  **Protocolos de Enrutamiento (Intra vs Inter Dominio)**
    - Para _Sobresaliente_, no basta saber qué es un router. Debes distinguir entre protocolos **IGP** (Interior Gateway Protocols) como OSPF, que usan algoritmos de estado de enlace para rutas internas rápidas, y **EGP** (Exterior Gateway Protocols) como BGP, que usan vectores de ruta y políticas complejas para la "columna vertebral" de Internet. BGP es crucial para la estabilidad global de la red.

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
En el modelo TCP/IP, ¿cuál es la capa responsable de proporcionar comunicación lógica extremo a extremo entre procesos de aplicación y que puede ofrecer servicios de fiabilidad y control de flujo?

A) Capa de Red

B) Capa de Transporte

C) Capa de Enlace

**Respuesta correcta:** B
**Justificación:** La capa de Transporte (donde residen TCP y UDP) es la encargada de la comunicación host-to-host a nivel de procesos, manejando la fiabilidad y el control de flujo. La capa de red se encarga del enrutamiento entre hosts, no entre procesos específicos.
**Nivel:** Satisfactorio

**Reactivo 2**
¿Cuál es el protocolo de la capa de aplicación utilizado para la resolución de nombres de dominio a direcciones IP?

A) DHCP

B) HTTP

C) DNS

**Respuesta correcta:** C
**Justificación:** DNS (Domain Name System) es el protocolo encargado de traducir nombres de dominio legibles por humanos a direcciones IP numéricas. DHCP asigna IPs dinámicamente y HTTP transfiere hipertexto.
**Nivel:** Satisfactorio

**Reactivo 3**
¿Qué dispositivo de red opera principalmente en la Capa 2 (Enlace de Datos) del modelo OSI y utiliza direcciones MAC para filtrar y reenviar tramas?

A) Hub

B) Router

C) Switch

**Respuesta correcta:** C
**Justificación:** El Switch es un dispositivo de Capa 2 que toma decisiones de reenvío basándose en direcciones físicas (MAC). El Router es de Capa 3 (IP) y el Hub es de Capa 1 (física).
**Nivel:** Satisfactorio

**Reactivo 4**
¿Qué protocolo de la capa de transporte sería más adecuado para una aplicación de transmisión de video en tiempo real donde la velocidad es crítica y se tolera cierta pérdida de datos?

A) TCP

B) UDP

C) FTP

**Respuesta correcta:** B
**Justificación:** UDP no tiene el overhead de establecimiento de conexión ni retransmisión de TCP, lo que lo hace ideal para aplicaciones sensibles al tiempo como el streaming o VoIP, donde es preferible perder un paquete que detener la transmisión.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (5-8)

**Reactivo 5**
En el contexto de la seguridad de red, ¿qué característica distingue principalmente a IPsec de SSL/TLS?

A) IPsec opera en la capa de red cifrando todo el datagrama IP, mientras que SSL/TLS opera sobre la capa de transporte.

B) SSL/TLS solo cifra la cabecera del paquete, mientras que IPsec cifra solo la carga útil.

C) IPsec se utiliza exclusivamente para asegurar correos electrónicos, mientras que SSL/TLS asegura la web.

**Respuesta correcta:** A
**Justificación:** IPsec es un protocolo de Capa 3 que asegura paquetes IP completos (ideal para VPNs), mientras que SSL/TLS opera en Capa 4/5 asegurando flujos de datos de aplicaciones específicas.
**Nivel:** Sobresaliente

**Reactivo 6**
¿Qué diferencia fundamental existe entre los protocolos de enrutamiento OSPF y BGP?

A) OSPF es un protocolo de vector de distancias, mientras que BGP es de estado de enlace.

B) OSPF se utiliza para enrutamiento dentro de un sistema autónomo (Intra-AS), mientras que BGP se utiliza entre sistemas autónomos (Inter-AS).

C) BGP garantiza la entrega más rápida posible, mientras que OSPF se centra en políticas de seguridad.

**Respuesta correcta:** B
**Justificación:** OSPF es un IGP (Interior Gateway Protocol) usado dentro de organizaciones. BGP es un EGP (Exterior Gateway Protocol) diseñado para conectar diferentes sistemas autónomos en Internet, manejando políticas y escalabilidad masiva.
**Nivel:** Sobresaliente

**Reactivo 7**
Para garantizar Calidad de Servicio (QoS) en una red convergente, ¿qué mecanismo se utiliza para clasificar y marcar paquetes a fin de darles tratamiento preferencial en los routers?

A) Control de congestión de TCP (Windowing).

B) Servicios Diferenciados (DiffServ).

C) Traducción de Direcciones de Red (NAT).

**Respuesta correcta:** B
**Justificación:** DiffServ es una arquitectura de QoS que marca paquetes (usando el campo DS en la cabecera IP) para que los routers intermedios apliquen políticas de prioridad (per-hop behaviors) sin mantener estado por flujo.
**Nivel:** Sobresaliente

**Reactivo 8**
En una arquitectura definida por software (SDN), ¿cuál es el cambio fundamental respecto a las redes tradicionales?

A) La eliminación física de los cables de red.

B) La separación del plano de control del plano de datos, centralizando la lógica de control.

C) El uso exclusivo de IPv6 sobre IPv4.

**Respuesta correcta:** B
**Justificación:** SDN desacopla el plano de control (cerebro, software centralizado) del plano de datos (músculo, switches de reenvío), permitiendo programabilidad y gestión dinámica, a diferencia de los routers tradicionales monolíticos.
**Nivel:** Sobresaliente

---

##### Reactivos de Completamiento

###### Nivel Satisfactorio (9-12)

**Reactivo 9**
El protocolo \_\_\_\_\_\_\_\_\_\_ es el estándar para la transferencia de archivos en Internet, permitiendo subir y bajar archivos de un servidor, mientras que \_\_\_\_\_\_\_\_\_\_ es el protocolo utilizado para la asignación dinámica de direcciones IP a los dispositivos de una red.

A) DNS, SMTP

B) HTTP, ARP

C) FTP, DHCP

**Respuesta correcta:** C
**Justificación:** FTP (File Transfer Protocol) es para transferencia de archivos. DHCP (Dynamic Host Configuration Protocol) automatiza la configuración de red de los hosts.
**Nivel:** Satisfactorio

**Reactivo 10**
En el modelo OSI, la capa de \_\_\_\_\_\_\_\_\_\_ se encarga del direccionamiento físico y el acceso al medio, utilizando la dirección \_\_\_\_\_\_\_\_\_\_ como identificador único de hardware.

A) Red, IP

B) Enlace de Datos, MAC

C) Transporte, Puerto

**Respuesta correcta:** B
**Justificación:** La Capa 2 (Enlace) maneja el acceso al medio (como Ethernet) y usa direcciones MAC (Media Access Control) físicas grabadas en la tarjeta de red.
**Nivel:** Satisfactorio

**Reactivo 11**
El mecanismo de \_\_\_\_\_\_\_\_\_\_ permite que múltiples dispositivos en una red privada compartan una única dirección IP pública para acceder a Internet.

A) DNS (Domain Name System)

B) NAT (Network Address Translation)

C) ARP (Address Resolution Protocol)

**Respuesta correcta:** B
**Justificación:** NAT traduce direcciones IP privadas a una pública (y viceversa), permitiendo la conservación de direcciones IPv4 y cierta seguridad por ocultamiento.
**Nivel:** Satisfactorio

**Reactivo 12**
Para verificar la conectividad básica entre dos hosts y medir el tiempo de ida y vuelta, se utiliza la herramienta \_\_\_\_\_\_\_\_\_\_, que emplea el protocolo \_\_\_\_\_\_\_\_\_\_.

A) Telnet, TCP

B) Traceroute, UDP

C) Ping, ICMP

**Respuesta correcta:** C
**Justificación:** Ping es la herramienta de diagnóstico básica que envía mensajes de eco ICMP (Internet Control Message Protocol) para verificar si un destino es alcanzable.
**Nivel:** Satisfactorio

###### Nivel Sobresaliente (13-16)

**Reactivo 13**
El establecimiento de una conexión TCP utiliza un proceso conocido como \_\_\_\_\_\_\_\_\_\_, que involucra el intercambio de segmentos con los flags \_\_\_\_\_\_\_\_\_\_, SYN-ACK y ACK.

A) Ventana deslizante, FIN

B) Saludo de tres vías (Three-way handshake), SYN

C) Encapsulamiento, PSH

**Respuesta correcta:** B
**Justificación:** El "Three-way handshake" es el proceso fundamental de TCP: Cliente envía SYN, Servidor responde SYN-ACK, Cliente confirma ACK. Esto establece los números de secuencia iniciales.
**Nivel:** Sobresaliente

**Reactivo 14**
En el protocolo IPsec, el modo \_\_\_\_\_\_\_\_\_\_ cifra solo la carga útil del paquete IP (dejando la cabecera original intacta), mientras que el modo \_\_\_\_\_\_\_\_\_\_ cifra todo el paquete original y lo encapsula en uno nuevo, siendo este último el más común para VPNs.

A) Transporte, Túnel

B) Túnel, Transporte

C) Autenticación, Cifrado

**Respuesta correcta:** A
**Justificación:** El modo Transporte se usa para comunicaciones host-a-host (solo datos cifrados). El modo Túnel cifra todo el paquete IP original (datos + cabecera) y es el estándar para VPNs seguras entre redes.
**Nivel:** Sobresaliente

**Reactivo 15**
Para mitigar el agotamiento de direcciones IPv4, se desarrolló \_\_\_\_\_\_\_\_\_\_, que utiliza direcciones de \_\_\_\_\_\_\_\_\_\_ bits, ofreciendo un espacio de direccionamiento inmensamente mayor.

A) NAT, 64

B) IPv6, 128

C) IPv5, 256

**Respuesta correcta:** B
**Justificación:** IPv6 es el sucesor de IPv4. IPv4 usa 32 bits (aprox 4 mil millones de direcciones). IPv6 usa 128 bits, permitiendo un número virtualmente infinito de direcciones.
**Nivel:** Sobresaliente

**Reactivo 16**
El protocolo \_\_\_\_\_\_\_\_\_\_ es utilizado por los navegadores web para establecer una comunicación segura; este protocolo opera insertando una capa de seguridad entre la capa de \_\_\_\_\_\_\_\_\_\_ y la de transporte.

A) SSH, Red

B) HTTPS (SSL/TLS), Aplicación

C) IPsec, Enlace

**Respuesta correcta:** B
**Justificación:** HTTPS no es un protocolo nuevo, es HTTP sobre SSL/TLS. SSL/TLS se sitúa entre Aplicación y Transporte (TCP), cifrando los datos de la aplicación antes de que sean segmentados.
**Nivel:** Sobresaliente

---

##### Reactivos de Relación de Elementos

###### Nivel Satisfactorio (17-21)

**Reactivo 17**
Relacione la capa del modelo TCP/IP con su Unidad de Datos de Protocolo (PDU) correspondiente.

**[Capa]**

1. Aplicación
2. Transporte
3. Red (Internet)
4. Enlace (Acceso a Red)

**[PDU]**
a) Datagrama / Paquete
b) Mensaje / Datos
c) Trama (Frame)
d) Segmento (TCP) / Datagrama (UDP)

A) 1b, 2d, 3a, 4c

B) 1a, 2c, 3d, 4b

C) 1d, 2a, 3b, 4c

**Respuesta correcta:** A
**Justificación:**

- 1-b: En aplicación hablamos de mensajes o datos.
- 2-d: Transporte segmenta los datos (Segmentos en TCP).
- 3-a: Red empaqueta segmentos en Datagramas/Paquetes.
- 4-c: Enlace encuadra paquetes en Tramas para el medio físico.
  **Nivel:** Satisfactorio

**Reactivo 18**
Relacione el protocolo de aplicación con su número de puerto estándar.

**[Protocolo]**

1. HTTP
2. HTTPS
3. DNS
4. SMTP

**[Puerto]**
a) 53
b) 443
c) 25
d) 80

A) 1d, 2a, 3b, 4c

B) 1d, 2b, 3a, 4c

C) 1b, 2d, 3c, 4a

**Respuesta correcta:** B
**Justificación:**

- 1-d: HTTP usa el puerto 80.
- 2-b: HTTPS (seguro) usa el 443.
- 3-a: DNS usa el 53 (UDP/TCP).
- 4-c: SMTP (correo) usa el 25.
  **Nivel:** Satisfactorio

**Reactivo 19**
Relacione el dispositivo de red con la capa del modelo OSI en la que opera principalmente.

**[Dispositivo]**

1. Router
2. Switch
3. Hub
4. Firewall (Filtrado de paquetes)

**[Capa OSI]**
a) Capa 1 (Física)
b) Capa 2 (Enlace de Datos)
c) Capa 3 (Red) y superior
d) Capa 3 (Red)

A) 1c, 2b, 3a, 4d

B) 1d, 2b, 3a, 4c

C) 1b, 2d, 3c, 4a

**Respuesta correcta:** B
**Justificación:**

- 1-d: El Router enruta paquetes IP (Capa 3).
- 2-b: El Switch conmuta tramas MAC (Capa 2).
- 3-a: El Hub es un repetidor eléctrico (Capa 1).
- 4-c: El Firewall opera en Capa 3 (IP/Puerto) y superiores (Inspección de estado/Aplicación).
  **Nivel:** Satisfactorio

**Reactivo 20**
Relacione el medio de transmisión con su característica principal.

**[Medio]**

1. Fibra Óptica
2. Cable UTP (Par Trenzado)
3. Cable Coaxial
4. WiFi (Aire)

**[Característica]**
a) Transmisión por ondas de radio, susceptible a interferencias.
b) Núcleo de vidrio, transmisión por luz, inmune a interferencia electromagnética, alta velocidad y distancia.
c) Hilos de cobre trenzados para cancelar interferencia, común en LANs, distancia limitada (100m).
d) Conductor central de cobre, blindado, usado en TV por cable y redes antiguas.

A) 1b, 2c, 3d, 4a

B) 1a, 2b, 3c, 4d

C) 1c, 2d, 3a, 4b

**Respuesta correcta:** A
**Justificación:**

- 1-b: Fibra usa luz, es la más rápida y segura.
- 2-c: UTP es el estándar en oficinas (RJ45).
- 3-d: Coaxial es robusto pero menos usado en LANs modernas.
- 4-a: WiFi usa el espectro electromagnético.
  **Nivel:** Satisfactorio

**Reactivo 21**
Relacione el comando de red con su utilidad principal.

**[Comando]**

1. ipconfig / ifconfig
2. ping
3. tracert / traceroute
4. nslookup

**[Utilidad]**
a) Consultar servidores DNS para obtener información de dominios.
b) Mostrar la configuración IP actual del adaptador de red.
c) Verificar conectividad básica con un host remoto.
d) Mostrar la ruta y saltos que toman los paquetes hacia un destino.

A) 1b, 2d, 3c, 4a

B) 1b, 2c, 3d, 4a

C) 1a, 2b, 3c, 4d

**Respuesta correcta:** B
**Justificación:**

- 1-b: Configuración local.
- 2-c: Conectividad (Eco).
- 3-d: Traza de ruta (Saltos).
- 4-a: Consultas DNS.
  **Nivel:** Satisfactorio

###### Nivel Sobresaliente (22-25)

**Reactivo 22**
Relacione el tipo de ataque a la seguridad de red con su descripción técnica.

**[Ataque]**

1. DDoS (Distributed Denial of Service)
2. Man-in-the-Middle (MitM)
3. IP Spoofing
4. Sniffing

**[Descripción]**
a) Interceptar y leer tráfico de red en tránsito sin autorización.
b) Saturar un servidor o red con tráfico desde múltiples fuentes para dejarlo inoperable.
c) Interceptar y posiblemente alterar la comunicación entre dos partes que creen comunicarse directamente.
d) Falsificar la dirección IP de origen en los paquetes para ocultar la identidad o suplantar a otro sistema confiable.

A) 1b, 2c, 3d, 4a

B) 1a, 2b, 3c, 4d

C) 1c, 2d, 3a, 4b

**Respuesta correcta:** A
**Justificación:**

- 1-b: DDoS busca agotar recursos (ancho de banda/CPU).
- 2-c: MitM se coloca activamente entre víctimas.
- 3-d: Spoofing miente sobre el origen (IP falsa).
- 4-a: Sniffing es escucha pasiva (Wireshark).
  **Nivel:** Sobresaliente

**Reactivo 23**
Relacione el protocolo de la suite IPsec con su función específica.

**[Protocolo/Concepto]**

1. AH (Authentication Header)
2. ESP (Encapsulating Security Payload)
3. IKE (Internet Key Exchange)
4. SA (Security Association)

**[Función]**
a) Proporciona autenticación e integridad, pero NO confidencialidad (cifrado).
b) Acuerdo unidireccional lógico entre dos partes que define parámetros de seguridad (claves, algoritmos).
c) Proporciona confidencialidad (cifrado), autenticación e integridad.
d) Protocolo para negociar y establecer claves de sesión y asociaciones de seguridad.

A) 1a, 2c, 3d, 4b

B) 1c, 2a, 3b, 4d

C) 1b, 2d, 3a, 4c

**Respuesta correcta:** A
**Justificación:**

- 1-a: AH firma el paquete pero no lo cifra (visible pero inalterable).
- 2-c: ESP es el caballo de batalla, cifra y firma (VPNs).
- 3-d: IKE maneja la complejidad del intercambio de claves (Fase 1 y 2).
- 4-b: SA es el "contrato" de seguridad vigente en un sentido.
  **Nivel:** Sobresaliente

**Reactivo 24**
Relacione la métrica de Calidad de Servicio (QoS) con su impacto en aplicaciones de Voz sobre IP (VoIP).

**[Métrica]**

1. Ancho de banda (Bandwidth)
2. Latencia (Delay)
3. Jitter (Variación del retardo)
4. Pérdida de paquetes (Packet Loss)

**[Impacto en VoIP]**
a) Si es alto, la voz suena robotizada o se entrecorta; requiere un buffer de reproducción (jitter buffer) para compensar.
b) Si es insuficiente, no se puede establecer la llamada o se degrada la calidad del códec.
c) Si es alto (>150ms), la conversación se vuelve difícil por los "pisos" al hablar (efecto walkie-talkie).
d) Provoca huecos de silencio o clicks en la conversación; VoIP tolera muy poco (<1%).

A) 1b, 2c, 3a, 4d

B) 1a, 2b, 3c, 4d

C) 1d, 2a, 3b, 4c

**Respuesta correcta:** A
**Justificación:**

- 1-b: Necesario para el caudal de datos.
- 2-c: Retardo fijo afecta la interactividad.
- 3-a: La variación en la llegada de paquetes es lo más dañino para el flujo constante de voz.
- 4-d: La pérdida directa degrada la señal reconstruida.
  **Nivel:** Sobresaliente

**Reactivo 25 - Integrador**
Relacione el escenario de problema de red con la capa del modelo OSI donde reside la causa raíz y la solución teórica.

**[Escenario]**

1. Los usuarios no pueden acceder a `www.google.com` pero sí pueden hacer ping a `8.8.8.8`.
2. Un servidor web recibe las peticiones TCP SYN pero nunca responde con SYN-ACK, saturándose (ataque SYN Flood).
3. Un cable de red pasa cerca de un motor eléctrico potente y la conexión es intermitente.
4. Dos computadoras tienen configurada la misma dirección IP estática en la misma LAN.

**[Capa y Solución]**
a) Capa Física: Problema de interferencia electromagnética. Solución: Usar fibra óptica o cable blindado (STP).
b) Capa de Red (Lógica): Conflicto de direccionamiento. Solución: Configurar DHCP o corregir la IP estática.
c) Capa de Aplicación: Fallo de resolución de nombres. Solución: Verificar configuración de servidor DNS.
d) Capa de Transporte: Agotamiento de recursos. Solución: Implementar SYN Cookies o Firewall con protección de estado.

A) 1c, 2d, 3a, 4b

B) 1b, 2a, 3d, 4c

C) 1d, 2b, 3c, 4a

**Respuesta correcta:** A
**Justificación:**

- 1-c: Si hay conectividad IP (ping funciona) pero no por nombre, es **DNS** (Capa Aplicación).
- 2-d: El ataque SYN Flood explota el handshake de **TCP** (Capa Transporte).
- 3-a: Interferencia física en el cable (Capa **Física**).
- 4-b: La IP es direccionamiento lógico de Capa 3 (**Red**), un conflicto IP impide el enrutamiento correcto.
  **Nivel:** Sobresaliente

---

#### ✅ Checklist de Dominio del Subtema

##### Nivel Satisfactorio Checklist

- [ ] Explicar la función de cada una de las 7 capas del modelo OSI.
- [ ] Diferenciar claramente entre un Switch (L2) y un Router (L3).
- [ ] Saber cuándo usar TCP (fiabilidad) y cuándo UDP (velocidad).
- [ ] Entender qué es una dirección IP y una máscara de subred.
- [ ] Conocer los puertos estándar (80, 443, 53, 25, 21).

##### Nivel Sobresaliente Checklist

- [ ] Responder correctamente al menos 10/12 reactivos de nivel Sobresaliente (83%).
- [ ] Lograr al menos 21/25 reactivos correctos en total (84%).
- [ ] Explicar la diferencia entre enrutamiento vector de distancias y estado de enlace.
- [ ] Describir cómo funciona el handshake de 3 vías de TCP.
- [ ] Entender los modos (Túnel vs Transporte) de IPsec.
- [ ] Analizar problemas de red identificando la capa OSI afectada (Integración).

---
