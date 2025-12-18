import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    { icon: '🚗', title: 'Carrosserie', description: 'Réparation et customisation de carrosseries' },
    { icon: '🚪', title: 'Portail motorisé', description: 'Installation de portails automatiques sécurisés' },
    { icon: '🏢', title: 'Conteneur Bureau', description: 'Aménagement de conteneurs en bureaux' },
    { icon: '🪟', title: 'Rideaux motorisé', description: 'Rideaux métalliques automatisés' },
    { icon: '🏗️', title: 'Charpente métallique', description: 'Structures métalliques sur mesure' },
    { icon: '🛡️', title: 'Rampe et Balcon inox', description: 'Garde-corps et rampes en inox' },
    { icon: '🔒', title: 'Grille de protection', description: 'Grilles sécurisées pour fenêtres et portes' },
    { icon: '☂️', title: 'Store importé', description: 'Stores de qualité européenne' },
    { icon: '🎪', title: 'Bâche cérémonie', description: 'Structures temporaires pour événements' },
    { icon: '🛡️', title: 'Portail blindé', description: 'Portails haute sécurité renforcés' }
  ];
}