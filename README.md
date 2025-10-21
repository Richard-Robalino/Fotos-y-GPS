


# 📸 MiUbicacionAPP - Aplicación de Fotos con Ubicación

## 📝 Descripción

Esta aplicación permite **tomar fotografías** y **guardar la ubicación geográfica (latitud y longitud)** donde fueron tomadas.  
Además, genera un **archivo de texto** con la información de la imagen y un **hipervínculo a Google Maps** para visualizar la ubicación exacta.

El enlace de Google Maps sigue la estructura:

[https://www.google.com/maps/@](https://www.google.com/maps/@)<LATITUD>,<LONGITUD>

````


## 🚀 Funcionalidades

- Tomar una foto con la cámara del dispositivo.
- Obtener automáticamente la ubicación actual mediante GPS.
- Guardar los datos (foto, latitud, longitud y enlace a Google Maps) en un archivo de texto.
- Mostrar la foto tomada junto con su enlace correspondiente.

---

## 🧰 Tecnologías Utilizadas

- Android Studio
- Google Play Services (ubicación)
- File Storage API
- CameraX / Camera Intent

---

## ⚙️ Instalación y Configuración

1. Clona el repositorio base:
   ```bash
   git clone https://github.com/jzaldumbide/MiUbicacionAPP_2025B.git
````

2. Abre el proyecto en **Android Studio**.

3. Configura los permisos en `AndroidManifest.xml`:

   ```xml
   <uses-permission android:name="android.permission.CAMERA" />
   <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
   <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
   ```

4. Conecta un dispositivo físico o usa un emulador con servicios de ubicación activados.


## 🖼️ Capturas de Pantalla

> 📷 A continuación puedes añadir imágenes del funcionamiento de la app:

| Pantalla                             | Descripción                                             |
| ------------------------------------ | ------------------------------------------------------- |
| ![Captura 1](<img width="1261" height="251" alt="image" src="https://github.com/user-attachments/assets/c36120db-06df-45df-9bba-29512effda06" />) | Interfaz principal de la app                            |
| ![Captura 2](ruta/a/tu/captura2.png) | Foto tomada con su enlace a Google Maps                 |
| ![Captura 3](ruta/a/tu/captura3.png) | Archivo de texto generado con la información de la foto |

---

## 📂 Ejemplo de Archivo Generado

```
Foto: IMG_20251020_153045.jpg
Latitud: -0.2106699335048009
Longitud: -78.48820656605636
Mapa: https://www.google.com/maps/@-0.2106699335048009,-78.48820656605636
```


