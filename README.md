# Cryper

> L'api CoinGecko que nous utilisons est rate limité à ~30 requêtes par minute. Cela semble beaucoup mais on atteint très rapidement cette limite lors de l'exécution de l'application et de ces tests.

![Image du jeu](/docs/game_screenshot_1.png 'Image du jeu')

## Exécution

Pour exécuter le projet, il suffit de lancer le conteneur Docker en indiquant le nom publié sur [Docker HUB](https://hub.docker.com/r/dockershowgirl576/cryper) avec la commande suivante :  
`docker run -d -p 8080:80 dockershowgirl576/cryper:latest`

Le port 8080 est à changer à votre guise.

## Build

Il est également possible de build le Docker pour obtenir une image locale.

```
docker build -t dockershowgirl576/cryper .
docker run --rm -d -p 80:80 dockershowgirl576/cryper
```

## Tests et Code Coverage

> Attention à la limite de requêtes de l'API CoinGecko.

Pour lancer l'exécution des tests il suffit de lancer la commande suivante :

`npm run test`

Voici le résultat obtenu :

```

> cryper@0.0.0 test
> jest --coverage

 PASS  test/example.test.js
 PASS  test/imports/api/CoinGeckoApi.test.ts (5.978 s)
 PASS  test/imports/api/RiddleApi.test.ts (7.18 s)

Test Suites: 3 passed, 3 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        17.955 s
Ran all test suites.
```

Des fichiers de récap au format `html` du code coverage sont disponibles dans le répertoire `coverage`.

![Image du code coverage](/docs/coverage_screenshot.png 'Image du code coverage')

## Fonctionalitées

### Récupération des cryptomonnaies via API

À partir de l'api de CoinGecko, nous récupérons les 500 premières coins que nous mélangeons aléatoirement en effectuant deux requêtes.

### Récupération des énigmes via API

À partir de l'api de "api-ninjas", nous récupérons une énigme. Lorsque l'utilisateur perd sa partie, il a la possibilité de regagner une vie en répondant correctement à une énigme.

### Logique du jeu et interface

Le jeu est un "plus ou moins" avec à gauche une valeur de crypto connue, et à droite, deux boutons, plus ou moins, pour deviner si la crypto à droite est supérieure ou inférieure à celle de gauche.  
Lorsque le joueur se trompe, une pop-up lui propose de répondre à une énigme comme présenté ci-dessus.

![Image du jeu 2](/docs/game_screenshot_2.png 'Image du jeu 2')
