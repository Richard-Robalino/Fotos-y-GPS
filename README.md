


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

ORDENADOR 

<img width="876" height="313" alt="image" src="https://github.com/user-attachments/assets/f7ec126c-58cc-4ef9-bfc4-84e5b4b53659" />

<img width="973" height="770" alt="image" src="https://github.com/user-attachments/assets/2ebf35e6-6624-4f74-b4ff-c0fed1f96e91" />

<img width="421" height="188" alt="image" src="https://github.com/user-attachments/assets/270c54bb-fe80-4fb4-a668-b8c9e6c8c08e" />

<img width="905" height="796" alt="image" src="https://github.com/user-attachments/assets/394c18a4-0640-4ceb-81fc-1b256abb8112" />

GUARDAO DE IMAGEN TXT

<img width="1262" height="528" alt="image" src="https://github.com/user-attachments/assets/7175ff82-edee-457e-afc1-c2ef1deec9b3" />

CELULAR



---

## 📂 Ejemplo de Archivo Generado

```
Foto: IMG_20251020_153045.jpg
Latitud: -0.2106699335048009
Longitud: -78.48820656605636
Mapa: https://www.google.com/maps/@-0.2106699335048009,-78.48820656605636
```


