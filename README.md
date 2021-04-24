Klub
====

## La vie de klub
- application de notions lues dans le tuto Meteor 1.4, première moitié
- saisie d'un nouvel élément

## Utilisation de Meteor

Installer meteor:

`$> curl https://install.meteor.com/ | /bin/sh`

Créer une application :

`$ meteor create monapp`

Le lancer en local :

`$ cd monapp`

`$ meteor`

=> Meteor server running on: http://localhost:3000/

Pour déployer :

`$> meteor deploy monapp.meteor.com`

## DEPLOIEMENT EN PROD SUR SCALINGO

Pour déployer en production sur scalingo, 
il faut enregistrer d'abord sa clé SSH sur le compte scalingo 

Page: https://my.osc-fr1.scalingo.com/apps
Username: agiletoulouse
Password: S'adresser au bureau de l'association Agile Toulouse

Ensuite:

`$> git push scalingo master
