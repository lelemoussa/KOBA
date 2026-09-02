import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  services = [
    'Escalier métallique',
    'Pergola personnalisée',
    'Portail (coulissant / battant)',
    'Charpente métallique',
    'Garde-corps & Rampe',
    'Grille de protection',
    'Menuiserie métallique',
    'Ouvrage sur mesure',
    'Autre'
  ];

  onSubmit() {
    const message = `Bonjour KOBA Ferronnerie,%0A%0AJe suis ${this.formData.name}.%0A%0AService souhaité: ${this.formData.service}%0ATéléphone: ${this.formData.phone}%0AEmail: ${this.formData.email}%0A%0AMessage: ${this.formData.message}%0A%0AMerci !`;
    window.open(`https://wa.me/2250104221119?text=${message}`, '_blank');
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };
  }
}