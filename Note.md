# React Native

### Créer une application RN avec expo :

```sh
npx create-expo-app B2Isitech --template blank
```

### Les vues & le dev mobile :

La vue est la brique de base de l'interface user dans React Native (et dans tout les langages mobiles).


### Pour lancer l'application

```sh
npx expo start
```

Sinon 

### En mode tunnel

```sh
npx expo start --tunnel
```

### Structure de l'app :

- Dossier App : Contient les éléments de navigation (file based routing). La structure du dossier app qui détermine la navigation de l'application.
- Assets :
- Constants : Contient tous les composants de l'app qui ne sont pas désitnés à être des écrans.
- Hooks : Contient les hooks custom de l'application.
- Scripts :
- app.json : Contient la configuration de l'app
- babel.config.js : Contient la config de babel

Github : scrcopy (Screencopy)

### Expo CLI :

Le cli expo permet de lancer l'app, de la déployer, de la build, de la publier etc.

### EAS Cli :

EAS est un service de build & déploiement d'Expo. Il permet de build des app plus rapidement & de les déployer sur les stores.

```
npm install -g eas-cli
```

Extension : Expo Tools

### Expo Router :

Expo Router est un router pour React Native qui permet de baviguer entre les écrans de l'application en utilisant le sys de fichier (Similaire a Next.js)

```sh
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

### Les composants de base :

React Native est un framework qui permet de créer des applications mobiles multiplateformes en utilisant React. Il est basé sur les composants de React.

Les cores components de React Native sont des composants de base qui permettent de créer des interfaces users. Ils utilisent des composants natifs pour créer des interfaces user.


![alt text](picture\image.png)

#### Splash Screen

```sh
npx expo install expo-splash-screen
```

### Firebase

Fire base demo
Cloud Firestore

Supabase free