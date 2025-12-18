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
    'Portail motorisé',
    'Grille de protection', 
    'Garde-corps',
    'Escalier métallique',
    'Charpente métallique',
    'Carrosserie',
    'Autre'
  ];

  onSubmit() {
    // Simulation d'envoi
    alert('Merci pour votre demande ! Nous vous recontacterons rapidement.');
    this.resetForm();
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