import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-fab',
  standalone: true,
  templateUrl: './whatsapp-fab.component.html',
  styleUrl: './whatsapp-fab.component.scss'
})
export class WhatsappFabComponent {
  whatsappNumber = '2250104221119';
  defaultMessage = 'Bonjour KOBA Ferronnerie ! Je suis intéressé(e) par vos services. Pouvez-vous me donner plus d\'informations ?';

  openWhatsapp() {
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.defaultMessage)}`;
    window.open(url, '_blank');
  }
}
