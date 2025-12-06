// Fichier: src/app/intro/intro.component.ts
import { Component, OnInit } from '@angular/core';
import { Realisation } from '../models/realisation';
import { DatePipe } from '@angular/common'; // Pour afficher la date proprement

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [DatePipe], // On ajoute le DatePipe
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  // On utilise notre nouveau modèle 'Realisation'
  myRealisation!: Realisation;
  isLiked!: boolean;
  likeButtonText!: string;

  ngOnInit() {
    // Initialisation avec une de tes vraies images (Portail moderne)
    this.myRealisation = new Realisation(
      'Portail Moderne Design',
      'Portail métallique avec motifs découpés au laser et finition thermolaquée.',
      'imag/315892611_126807570208959_4034219954716521169_n.jpg', // Chemin vers ton image dans le dossier public
      new Date(),
      15
    );

    this.isLiked = false;
    this.likeButtonText = "🤍 J'aime";
  }

  onLike() {
    if (this.isLiked) {
      this.myRealisation.likes--;
      this.likeButtonText = "🤍 J'aime";
      this.isLiked = false;
    } else {
      this.myRealisation.likes++;
      this.likeButtonText = "❤️ J'aime déjà";
      this.isLiked = true;
    }
  }
}
