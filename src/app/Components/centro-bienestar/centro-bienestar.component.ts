import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-centro-bienestar',
  imports: [CommonModule, RouterLink],
  templateUrl: './centro-bienestar.component.html',
  styleUrl: './centro-bienestar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CentroBienestarComponent {

}
