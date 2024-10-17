# Oh-my-Code---button-game

Projet de Compteur de Clics avec Animation
Description
Ce projet est une petite application web qui permet d'incrémenter un compteur à chaque clic sur l'un des deux boutons animés (rouge et bleu). Le compteur est affiché en tant que titre (h1) et change dynamiquement à chaque clic sur les boutons. L'animation des boutons simule un mouvement autour de la page. Au bout de 10 secondes, les boutons disparaissent.

Fonctionnalités
Compteur dynamique : Chaque clic sur un bouton augmente le compteur, et le résultat s'affiche dans le titre.
Animation des boutons : Les boutons rouge et bleu se déplacent selon une animation prédéfinie en CSS.
Suppression des boutons : Après 10 secondes, les deux boutons sont retirés de la page et un message est affiché dans la console.
Technologies utilisées
HTML : Structure de base de la page.
CSS : Animation et mise en page des boutons ainsi que du conteneur.
JavaScript : Gestion des événements de clic, manipulation du DOM pour le compteur, et suppression des boutons après un délai.
Installation
Clonez ou téléchargez le projet à partir du dépôt.
Ouvrez le fichier index.html dans un navigateur.
Fichiers
index.html : Structure HTML de la page.
style.css : Fichier CSS contenant les animations et le style de la page.
script.js : Fichier JavaScript gérant le compteur, les événements de clic et la suppression des boutons.
Fonctionnement du Code
HTML : Le fichier HTML définit la structure de la page avec un conteneur centré et deux divs représentant les boutons.
CSS :
Le fichier CSS crée une animation pour chaque bouton, les faisant bouger selon une trajectoire définie avec des @keyframes.
Le style de la page est simple avec une mise en page centrée et un fond noir.
JavaScript :
À chaque clic sur l'un des boutons (btn-red ou btn-blue), le compteur est incrémenté et le nouveau compteur est affiché dans le titre de la page.
Après 10 secondes, les boutons sont retirés de la page et un message "fin du chrono" est affiché dans la console.
Exécution
Ouvrez la page dans un navigateur et cliquez sur les boutons rouge et bleu pour incrémenter le compteur.
Observez les animations des boutons qui se déplacent autour de la page.
Après 10 secondes, les boutons seront supprimés.
