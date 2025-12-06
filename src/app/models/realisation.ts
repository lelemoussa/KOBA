export class Realisation {
    constructor(
        public title: string,       // Titre du projet (ex: Portail coulissant)
        public description: string, // Description technique
        public imageUrl: string,    // Chemin de la photo
        public createdAt: Date,     // Date de réalisation
        public likes: number        // Nombre de "J'aime"
    ) {}
}
  