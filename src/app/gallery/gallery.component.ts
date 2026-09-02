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
  activeFilter = 'Tous';
  filters = ['Tous', 'Portail', 'Escalier', 'Charpente', 'Garde-corps', 'Pergola'];

  allRealisations = [
    {
      image: 'imag/315892611_126807570208959_4034219954716521169_n.jpg',
      title: 'Portail Moderne Design',
      category: 'Portail'
    },
    {
      image: 'imag/316126023_127296220160094_761912074971741639_n.jpg',
      title: 'Portail Coulissant',
      category: 'Portail'
    },
    {
      image: 'imag/366330269_258534960369552_4247673311939819234_n.jpg',
      title: 'Escalier Métallique Hélicoïdal',
      category: 'Escalier'
    },
    {
      image: 'imag/317082254_131032456453137_8272383485789058486_n.jpg',
      title: 'Charpente Métallique Industrielle',
      category: 'Charpente'
    },
    {
      image: 'imag/317548083_131032626453120_7150878446347957839_n.jpg',
      title: 'Charpente Grande Portée',
      category: 'Charpente'
    },
    {
      image: 'imag/316275720_127296256826757_5818282510001705641_n.jpg',
      title: 'Garde-corps Inox',
      category: 'Garde-corps'
    },
    {
      image: 'imag/316949846_131032423119807_3219545559173287574_n.jpg',
      title: 'Pergola Sur Mesure',
      category: 'Pergola'
    },
    {
      image: 'imag/366714623_258560057033709_9194418765584821528_n.jpg',
      title: 'Escalier Design Contemporain',
      category: 'Escalier'
    },
    {
      image: 'imag/316034499_127191723503877_4707025514813957638_n.jpg',
      title: 'Portail Battant Double',
      category: 'Portail'
    }
  ];

  get realisations() {
    if (this.activeFilter === 'Tous') {
      return this.allRealisations;
    }
    return this.allRealisations.filter(r => r.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}