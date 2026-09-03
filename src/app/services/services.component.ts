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
  whatsappBase = 'https://wa.me/2250104221119?text=';

  services = [
    {
      icon: '🚪',
      title: 'Portail motorisé',
      description: 'Installation de portails automatiques sécurisés, coulissants ou battants.',
      image: 'imag/315892611_126807570208959_4034219954716521169_n.jpg'
    },
    {
      icon: '🛡️',
      title: 'Portail blindé',
      description: 'Portails haute sécurité renforcés pour une protection maximale.',
      image: 'imag/366487501_258531257036589_6459765901528468099_n.jpg'
    },
    {
      icon: '🪜',
      title: 'Escalier métallique',
      description: 'Design moderne et épuré. Escaliers droits, hélicoïdaux ou à limon central.',
      image: 'imag/315890942_127294330160283_4848483270757316151_n.jpg'
    },
    {
      icon: '🏗️',
      title: 'Charpente métallique',
      description: 'Structures durables pour hangars, entrepôts et bâtiments professionnels.',
      image: 'imag/317082254_131032456453137_8272383485789058486_n.jpg'
    },
    {
      icon: '🛡️',
      title: 'Rampe et Balcon inox',
      description: 'Garde-corps et rampes en inox pour balcons, terrasses et escaliers.',
      image: 'imag/13c3fc8a-66ca-4320-b276-f38537e6592c.jpeg'
    },
    {
      icon: '🔒',
      title: 'Grille de protection',
      description: 'Grilles sécurisées pour fenêtres et portes, robustes et esthétiques.',
      image: 'imag/d68c19b5-16f9-4873-bb38-deee943ba88d.jpeg'
    },
    {
      icon: '🪟',
      title: 'Rideaux motorisé',
      description: 'Rideaux métalliques automatisés pour commerces et garages.',
      image: 'imag/e438c3cc-602d-41b1-9952-848e19cb64ae.jpeg'
    },
    {
      icon: '🏢',
      title: 'Conteneur Bureau',
      description: 'Aménagement de conteneurs en bureaux modulaires et fonctionnels.',
      image: 'imag/366680172_258559897033725_7676534350561031933_n.jpg'
    },
    {
      icon: '☂️',
      title: 'Store importé',
      description: 'Stores de qualité européenne pour terrasses et vitrines.',
      image: 'imag/316806909_131032493119800_4904672118769581981_n.jpg'
    },
    {
      icon: '🎪',
      title: 'Bâche cérémonie',
      description: 'Structures temporaires pour événements et cérémonies.',
      image: 'imag/317548083_131032626453120_7150878446347957839_n.jpg'
    }
  ];

  getWhatsappLink(service: string): string {
    const msg = encodeURIComponent(`Bonjour KOBA Ferronnerie ! Je suis intéressé(e) par votre service : ${service}. Pouvez-vous me donner un devis ?`);
    return `${this.whatsappBase}${msg}`;
  }
}