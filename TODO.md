# TODO: Transformer le tutoriel FaceSnap en éléments professionnels pour KOBA

## Étapes complétées

- [x] Mettre à jour le modèle Realisation : changer 'snaps' en 'likes' dans src/app/models/realisation.ts
- [x] Mettre à jour src/app/intro/intro.component.ts : utiliser la classe Realisation, ajouter DatePipe, implémenter onLike() pour gérer les likes
- [x] Mettre à jour src/app/intro/intro.component.html : remplacer par le template pour une seule réalisation avec bouton like
- [x] Mettre à jour src/styles.scss : remplacer par les styles professionnels pour .realisation-card

## Étapes suivantes
- [ ] Tester l'application localement avec `ng serve`
- [ ] Vérifier que l'image s'affiche correctement depuis public/imag/
- [ ] Déployer avec `firebase deploy` si prêt
