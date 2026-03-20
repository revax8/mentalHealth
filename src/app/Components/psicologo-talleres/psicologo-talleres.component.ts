import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-psicologo-talleres',
  imports: [CommonModule, RouterLink],
  templateUrl: './psicologo-talleres.component.html',
  styleUrl: './psicologo-talleres.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsicologoTalleresComponent {

}
