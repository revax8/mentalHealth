import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-psicologo-servicios',
  imports: [CommonModule, RouterLink],
  templateUrl: './psicologo-servicios.component.html',
  styleUrl: './psicologo-servicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsicologoServiciosComponent {
  services: Service[] = [
    {
      icon: 'fas fa-user',
      title: 'Terapia Individual',
      description: 'Sesiones personalizadas para trabajar en tu crecimiento personal y bienestar emocional.',
      features: ['Atención personalizada', 'Enfoque terapéutico adaptado', 'Confidencialidad absoluta', 'Seguimiento continuo']
    },
    {
      icon: 'fas fa-heart',
      title: 'Terapia de Pareja',
      description: 'Espacio seguro para fortalecer la comunicación y resolver conflictos en pareja.',
      features: ['Mejora comunicación', 'Resolución de conflictos', 'Fortalecimiento del vínculo', 'Técnicas prácticas']
    },
    {
      icon: 'fas fa-brain',
      title: 'Terapia Cognitivo-Conductual',
      description: 'Enfoque basado en evidencia para modificar patrones de pensamiento negativos.',
      features: ['Técnicas basadas en evidencia', 'Resultados medibles', 'Herramientas prácticas', 'Prevención recaídas']
    },
    {
      icon: 'fas fa-users',
      title: 'Talleres Grupales',
      description: 'Talleres emocionales y de crecimiento personal en pequeños grupos.',
      features: ['Dinámicas grupales', 'Aprendizaje colaborativo', 'Apoyo entre pares', 'Técnicas vivenciales']
    },
    {
      icon: 'fas fa-child',
      title: 'Terapia Infantil',
      description: 'Atención especializada para niños y adolescentes con enfoques lúdicos.',
      features: ['Terapia de juego', 'Técnicas lúdicas', 'Apoyo familiar', 'Desarrollo emocional']
    },
    {
      icon: 'fas fa-spa',
      title: 'Mindfulness y Relajación',
      description: 'Técnicas de meditación y relajación para el manejo del estrés y ansiedad.',
      features: ['Meditación guiada', 'Técnicas de respiración', 'Relajación progresiva', 'Mindfulness']
    }
  ];

  getServiceKey(title: string): string {
    const serviceKeys: { [key: string]: string } = {
      'Terapia Individual': 'individual',
      'Terapia de Pareja': 'pareja',
      'Terapia Cognitivo-Conductual': 'cognitiva',
      'Talleres Grupales': 'talleres',
      'Terapia Infantil': 'infantil',
      'Mindfulness y Relajación': 'mindfulness'
    };
    return serviceKeys[title] || 'individual';
  }
}
