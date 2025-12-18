import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  realisations = [
    {
      image: 'imag/315892611_126807570208959_4034219954716521169_n.jpg',
      title: 'Portail Moderne Design',
      category: 'Portail'
    },
    {
      image: 'imag/316275720_127296256826757_5818282510001705641_n.jpg',
      title: 'Grille de Protection',
      category: 'Sécurité'
    },
    {
      image: 'imag/366330269_258534960369552_4247673311939819234_n.jpg',
      title: 'Escalier Métallique',
      category: 'Escalier'
    },
    {
      image: 'imag/366487501_258531257036589_6459765901528468099_n.jpg',
      title: 'Garde-corps Inox',
      category: 'Garde-corps'
    },
    {
      image: 'imag/317082254_131032456453137_8272383485789058486_n.jpg',
      title: 'Charpente Métallique',
      category: 'Charpente'
    },
    {
      image: 'imag/316949846_131032423119807_3219545559173287574_n.jpg',
      title: 'Menuiserie Métallique',
      category: 'Menuiserie'
    }
  ];
}