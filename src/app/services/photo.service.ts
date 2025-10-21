import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { PhotoEntry } from '../models/photo-entry';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  private entries: PhotoEntry[] = [];
  private readonly TEXT_FILE = 'ubicaciones.txt';
  private readonly JSON_FILE  = 'entries.json';

  get list() {
    return this.entries;
  }


  private async readTextFromFile(path: string): Promise<string> {
    const res = await Filesystem.readFile({
      path,
      directory: Directory.Documents,
  
      encoding: Encoding.UTF8,
    });
    if (typeof res.data === 'string') {
      return res.data;
    }
    
    return await res.data.text();
  }

  async loadFromDisk() {
    try {
      const text = await this.readTextFromFile(this.JSON_FILE);
      this.entries = text ? JSON.parse(text) : [];
    } catch {
      this.entries = [];
    }
  }

  async capture() {
    const photo = await Camera.getPhoto({
      quality: 80,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      saveToGallery: false,
      presentationStyle: 'fullscreen',
    });

    const { coords } = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 15000,
    });

    const latitude  = coords.latitude;
    const longitude = coords.longitude;
    const mapsUrl   = `https://www.google.com/maps/@${latitude},${longitude},19z`;

    const entry: PhotoEntry = {
      id: crypto?.randomUUID?.() ?? String(Date.now()),
      dataUrl: photo.dataUrl!,
      latitude,
      longitude,
      timestamp: new Date().toISOString(),
      mapsUrl,
    };

    const line = `${entry.timestamp} | ${latitude} | ${longitude}\n`;
    await this.appendTextLine(line);

    this.entries.unshift(entry);
    await this.saveJson();

    return entry;
  }

  private async appendTextLine(line: string) {
    try {
      await Filesystem.appendFile({
        path: this.TEXT_FILE,
        data: line,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
    } catch {
      await Filesystem.writeFile({
        path: this.TEXT_FILE,
        data: line,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
        recursive: true,
      });
    }
  }

  private async saveJson() {
    await Filesystem.writeFile({
      path: this.JSON_FILE,
      data: JSON.stringify(this.entries),
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
  }

  async getTextFileUri() {
    const info = await Filesystem.getUri({
      path: this.TEXT_FILE,
      directory: Directory.Documents,
    });
    return info.uri;
  }
}
