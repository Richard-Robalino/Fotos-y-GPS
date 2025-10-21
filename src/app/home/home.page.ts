import { Component, OnInit } from '@angular/core';
import {
  IonApp, IonContent, IonHeader, IonTitle, IonToolbar,
  IonButton, IonList, IonItem, IonThumbnail, IonLabel
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../services/photo.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',   
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonApp, IonContent, IonHeader, IonTitle, IonToolbar,
    IonButton, IonList, IonItem, IonThumbnail, IonLabel
  ]
})
export class HomePage implements OnInit {
  loading = false;

  constructor(public photos: PhotoService) {}

  async ngOnInit() {
    await this.photos.loadFromDisk();
  }

  async onCapture() {
    this.loading = true;
    try {
      await this.photos.capture();
    } catch (e) {
      console.error(e);
      alert('Ocurrió un error al capturar la foto/ubicación.');
    } finally {
      this.loading = false;
    }
  }

  openMaps(url: string) {
    window.open(url, '_blank');
  }
}
