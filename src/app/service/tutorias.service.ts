import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutoriasService {

  private tutoriasConfirmadas: { tutor: string, hora: string, fecha: string, aula: string, tema: string }[] = [];

  constructor() {}

  agregarTutoria(tutoria: { tutor: string, hora: string, fecha: string, aula: string, tema: string }) {
    this.tutoriasConfirmadas.push(tutoria);
  }

  obtenerTutorias() {
    return this.tutoriasConfirmadas;
  }
}
