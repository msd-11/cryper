# Cryper

> L'api CoinGecko que nous utilisons est rate limité à 30 requêtes par minute. Cela semble beaucoup mais on atteint très rapidement cette limite lors de l'exécution de l'application.

## Exécution

Pour exécuter le projet, il suffit d'exécuter le conteneur Docker avec la commande suivante :  
`docker run -d -p 8080:80 dockershowgirl576/cryper:latest`

Le port 8080 est à changer à votre guise.

## Fonctionalités

### Récupération des cryptomonnaies via API

À partir de l'api de CoinGecko, nous récupérons les 500 premières coins que nous mélangeons aléatoirement en effectuant deux requêtes.

### Récupération des énigmes via API

À partir de l'api de "api-ninjas", nous récupérons une énigme. Lorsque l'utilisateur perd sa partie, il a la possibilité de regagner une vie en répondant correctement à une énigme.

### Logique du jeu et interface

Le jeu est un "plus ou moins" avec à gauche une valeur de crypto connue, et à droite, deux boutons, plus ou moins, pour deviner si la crypto à droite est supérieure ou inférieure à celle de gauche.  
Lorsque le joueur se trompe, une pop-up lui propose de répondre à une énigme comme présenté ci-dessus.

![Image du jeu](/docs/game_screenshot_1.png 'Image du jeu')  
![Image du jeu 2](/docs/game_screenshot_2.png 'Image du jeu 2')
