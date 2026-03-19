import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-psicologo-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './psicologo-home.component.html',
  styleUrl: './psicologo-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsicologoHomeComponent {
  constructor() {}
}
