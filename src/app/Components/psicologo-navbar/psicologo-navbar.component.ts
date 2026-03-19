import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-psicologo-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './psicologo-navbar.component.html',
  styleUrl: './psicologo-navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsicologoNavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
