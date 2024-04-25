import { Component, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
  export class InicioComponent implements AfterViewInit {

    @ViewChild('submenuAcademico', { static: false }) submenuAcademico: ElementRef<any> | undefined;

    constructor() { }

    ngAfterViewInit() {
    }

    toggleSubmenu() {
      if (this.submenuAcademico) {
        const submenuElement = this.submenuAcademico.nativeElement;

        // Verifica si el submenú está visible u oculto
        if (submenuElement.style.display === "block") {
          // Si está visible, ocúltalo
          submenuElement.style.display = "none";
        } else {
          // Si está oculto, muéstralo
          submenuElement.style.display = "block";
        }
      }
    }
    mostrarFechaActual() {
      const fechaElement = document.getElementById('fecha');

      if (fechaElement) {
        const fecha = new Date();
        fechaElement.innerHTML = fecha.toLocaleDateString('es-MX', { weekday: 'long', month: 'short', day: 'numeric' });
      }
    }
}

