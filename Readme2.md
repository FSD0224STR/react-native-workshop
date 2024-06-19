## Clase 2: Navegación en React Native

### Navegación en React Native

La navegación es un aspecto esencial en cualquier aplicación móvil. En React Native, la biblioteca más popular para manejar la navegación es `React Navigation`. Esta biblioteca ofrece una variedad de navegadores que se pueden usar para crear diferentes tipos de flujos de navegación en tu aplicación.

### 1. Instalación de React Navigation

#### Paso 1: Instalar `react-navigation`

Primero, necesitas instalar el core de `React Navigation`.

```bash
npm install @react-navigation/native
```

#### Paso 2: Instalar dependencias adicionales

React Navigation depende de otras librerías como `react-native-screens` y `react-native-safe-area-context`, que también necesitas instalar.

```bash
npx expo install react-native-screens react-native-safe-area-context
```

#### Paso 3: Instalar navegadores específicos

Para este ejemplo, instalaremos el stack navigator, que es uno de los navegadores más comunes.

```bash
npm install @react-navigation/native-stack
```

### 2. Configuración del contenedor de navegación

Configura el contenedor de navegación en el archivo `App.js`, donde envolverás toda la estructura de navegación con el `NavigationContainer` y definirás las rutas utilizando un stack navigator.

```javascript
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

### 3. Creación de pantallas

Crea dos pantallas básicas, `HomeScreen` y `DetailsScreen`, que representarán las diferentes vistas a las que el usuario puede navegar.

**_screens/HomeScreen.js_**

```javascript
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Inicio</Text>
      <Button
        title="Ir a Detalles"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
```

**_screens/DetailsScreen.js_**

```javascript
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Detalles</Text>
      <Button
        title="Volver a Inicio"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DetailsScreen;
```

### 4. Actualización de la home

```javascript
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### 5. Explicación del código

- **`NavigationContainer`**: Es un componente que gestiona el estado de la navegación y debe envolver toda la estructura de navegación.
- **`createNativeStackNavigator`**: Crea un stack navigator, que es un tipo de navegador que gestiona una pila de pantallas.
- **`initialRouteName`**: Especifica la pantalla inicial del navegador.
- **`Stack.Screen`**: Define una pantalla dentro del stack navigator.

### 5. Ejercicio práctico

#### Objetivo

Añadir una tercera pantalla a la aplicación de navegación y configurar la navegación entre las tres pantallas.

#### Instrucciones

1. Crea una nueva pantalla llamada `ProfileScreen.js` en la carpeta `screens`.
2. Configura `App.js` para incluir la nueva pantalla en el stack navigator.
3. Añade botones en `HomeScreen` y `DetailsScreen` para navegar a `ProfileScreen`.
4. Añade un botón en `ProfileScreen` para navegar de vuelta a `HomeScreen`.

### Uso de APIs nativas en React Native

En el desarrollo de aplicaciones móviles, es común interactuar con APIs nativas del dispositivo (como la cámara, el GPS, o el almacenamiento) y con APIs de terceros (como servicios web RESTful o GraphQL). React Native facilita estas integraciones a través de módulos y bibliotecas específicas.

### 1. APIs nativas

#### a. Instalación de módulos nativos

Para acceder a funcionalidades nativas, utilizamos módulos que permiten interactuar con las APIs del sistema operativo. Uno de los enfoques más populares es usar Expo, que proporciona una serie de APIs nativas de manera sencilla.

#### b. Ejemplos de APIs nativas comunes

1. **Cámara**

   - Usar la cámara del dispositivo para capturar fotos o videos.
   - Bibliotecas: `expo-camera`.

2. **GPS**

   - Obtener la ubicación geográfica del dispositivo.
   - Bibliotecas: `expo-location`.

3. **Almacenamiento**
   - Acceder al sistema de archivos del dispositivo para leer o guardar datos.
   - Bibliotecas: `expo-file-system`.

### 2. APIs de terceros

#### a. Instalación de bibliotecas para consumir APIs

Para consumir servicios web externos, podemos usar bibliotecas como `axios` o `fetch`.

#### b. Ejemplos de integración con APIs de terceros

1. **RESTful APIs**

   - Hacer peticiones HTTP a un servidor para obtener o enviar datos.
   - Bibliotecas: `axios`, `fetch`.

### 3. Ejemplos prácticos

#### a. Uso de la cámara con `expo-camera`

1. Instalar `expo-camera`:

```bash
 expo install expo-camera
```

2. Configuración y permisos:

```javascript
import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

const CameraExample = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Solicitando permiso para usar la cámara...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No se ha concedido permiso para usar la cámara</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)} />
      <Button
        title="Tomar foto"
        onPress={async () => {
          if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            setPhoto(photo.uri);
          }
        }}
      />
      {photo && <Image source={{ uri: photo }} style={styles.photo} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
  photo: {
    width: 100,
    height: 100,
  },
});

export default CameraExample;
```

#### b. Obtener la ubicación con `expo-location`

1. Instalar `expo-location`:

```bash
expo install expo-location
```

2. Configuración y permisos:

```javascript
import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Location from "expo-location";

const LocationExample = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permiso para acceder a la ubicación denegado");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Esperando..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default LocationExample;
```

3. Obtener y mostrar la ubicación:
   - Implementar el código para obtener y mostrar la ubicación del usuario.

### 4. Ejercicio práctico

#### Objetivo

Crear una aplicación que utilice tanto una API nativa

#### Instrucciones

a. **Capturar una imagen**:

2. **Obtener la ubicación**:
   - Utilizar `expo-location` para obtener la ubicación actual del usuario.

### 5. Conclusión

El uso de APIs nativas y de terceros es fundamental para aprovechar al máximo las capacidades de los dispositivos móviles y para interactuar con servicios externos. React Native, junto con herramientas como Expo y bibliotecas como `axios`, facilita enormemente estas integraciones, permitiendo desarrollar aplicaciones móviles robustas y funcionales.

### Publicación de la aplicación en la Apple App Store utilizando Xcode Cloud

La publicación de una aplicación móvil en la Apple App Store es el último paso en el proceso de desarrollo. Utilizar Xcode Cloud puede simplificar este proceso mediante la integración continua y la entrega continua (CI/CD). A continuación, se describen los pasos necesarios para publicar una aplicación en dispositivos iOS utilizando React Native, Expo y Xcode Cloud.

### 1. Preparación de la Aplicación

#### a. Configuración de App.json (Expo)

Antes de construir la aplicación, es necesario configurar el archivo `app.json` o `app.config.js` en un proyecto de Expo. Este archivo contiene información importante sobre la aplicación, como su nombre, icono y permisos necesarios.

#### b. Optimización de Activos

Asegúrate de que todos los activos (imágenes, íconos, etc.) estén optimizados para reducir el tamaño de la aplicación y mejorar el rendimiento.

### 2. Construcción de la Aplicación para iOS

#### a. Configurar Certificados y Perfiles de Aprovisionamiento

1. **Crear una Cuenta de Desarrollador de Apple**:

   - Regístrate en el [Apple Developer Program](https://developer.apple.com/programs/) y paga la tarifa anual.

2. **Configurar Certificados en Xcode**:
   - Abre Xcode y ve a `Preferences > Accounts`, añade tu Apple ID y crea un perfil de aprovisionamiento.

#### b. Usar Expo para Construir la Aplicación

1. **Ejecutar el Comando de Construcción**:
   - Utiliza Expo para construir la aplicación y generar un archivo IPA que se puede subir a la App Store.

![expo build ios](https://i.imgur.com/8VJXxF2.png)

### 3. Configuración de Xcode Cloud

#### a. Configurar el Proyecto en Xcode Cloud

1. **Crear un Nuevo Workflow en Xcode Cloud**:

   - Abre Xcode, ve a `Xcode Cloud` y selecciona `Create a new workflow`.

2. **Configurar el Workflow**:
   - Define el workflow seleccionando el esquema, el tipo de dispositivo y la versión de iOS. También puedes configurar triggers para que el workflow se ejecute automáticamente al hacer push en el repositorio.

![xcode cloud workflow](https://developer.apple.com/assets/elements/icons/xcode-cloud/xcode-cloud-64x64.png)

#### b. Configurar Certificados y Perfiles de Aprovisionamiento en Xcode Cloud

1. **Subir Certificados**:
   - Sube tus certificados y perfiles de aprovisionamiento a Xcode Cloud desde la sección `Certificates, Identifiers & Profiles` en tu cuenta de desarrollador de Apple.

### 4. Publicación en TestFlight

#### a. Crear una Nueva Aplicación en App Store Connect

1. **Usar App Store Connect**:

   - Inicia sesión en [App Store Connect](https://appstoreconnect.apple.com/) y crea una nueva aplicación.

2. **Rellenar Información de la Aplicación**:
   - Proporciona detalles como el nombre de la aplicación, la descripción, las capturas de pantalla y el icono.

#### b. Subir el Archivo IPA desde Xcode Cloud

1. **Subir el Archivo IPA**:
   - Configura Xcode Cloud para que suba automáticamente el archivo IPA a TestFlight después de una build exitosa.

#### c. Configurar TestFlight

1. **Configurar Grupos de Prueba**:

   - En App Store Connect, ve a la sección de TestFlight y crea grupos de prueba. Añade los correos electrónicos de los testers.

2. **Invitar Testers**:
   - Invita a los testers para que descarguen la aplicación a través de TestFlight. Los testers recibirán una invitación por correo electrónico para instalar la aplicación.

#### d. Enviar para Pruebas Internas o Externas

1. **Pruebas Internas**:

   - Puedes invitar hasta 25 miembros de tu equipo que tengan acceso a App Store Connect para pruebas internas. No requiere revisión de Apple.

2. **Pruebas Externas**:
   - Para pruebas externas, invita hasta 10,000 usuarios externos. Apple revisará la aplicación antes de permitir pruebas externas.

### 5. Publicación en la App Store

#### a. Completar la Información de la Aplicación

1. **Usar App Store Connect**:

   - Asegúrate de completar toda la información requerida, incluyendo la clasificación por edades, la política de privacidad, y los detalles de contacto.

2. **Seleccionar Países y Regiones**:
   - Selecciona los países y regiones en los que deseas distribuir la aplicación.

#### b. Enviar para Revisión

1. **Enviar la Aplicación para Revisión**:
   - Una vez que toda la información esté completa, envía la aplicación para revisión por parte del equipo de Apple. Este proceso puede tardar algunos días.

### 6. Bonus track

¿Por que, actualmente, no uso react native, o por lo menos no inicio proyectos con react native?
¿Por que otra tecnología me estoy decantando?
