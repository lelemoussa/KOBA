import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snaped!: boolean;
  snapedtext!:string;

  ngOnInit() {
    this.title = 'KOBA';
    this.description = 'KOBA est une entreprise ivoirienne reconnue pour son expertise';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snaped= false;
    this.snapedtext="🤍 j aime pas"
  }
  onAddSnap() {
    if(this.snaped === false){
      this.snaps++;
      this.snapedtext="❤️ j aime"
       this.snaped=true
    }
    else
    {
      this.snaps--
      this.snapedtext="🤍 j aime pas"
      this.snaped=false
    }

    

  }

  
}
