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

## DEPLOIEMENT 

### Déployement sur un serveur Meteor Galaxy (OPTION PAYANTE NON UTILISEE)

`$> meteor deploy monapp.meteor.com`

### DEPLOIEMENT EN PROD SUR SCALINGO (OPTION PAYANTE QUI N'EST PLUS UTILISEE)

Pour déployer en production sur scalingo, 
il faut enregistrer d'abord sa clé SSH sur le compte scalingo 

Page: https://my.osc-fr1.scalingo.com/apps
Username: agiletoulouse
Password: S'adresser au bureau de l'association Agile Toulouse

Ensuite:

`$> git push scalingo master



### DEPLOIEMENT SUR UN SERVEUR (VPS) avec accès ssh et meteor-up 

Meteor-up MUP par la suite, est une application à installer sur le poste de développement pour faciliter le packaging et le déploiement d'applications meteor (ou autre), par l'usage de docker.
Un pré-requis est d'avoir une connection à un compte ssh sudoable.

1. Installer meteor-up

2. S'assurer que vos clés ssh sont bien positionnées et que vous accédez bien à la machine en ssh

ssh ubuntu@46.226.107.168

(dans le cas où votre clé nécessite une passphrase, en recréer une sans passphrase, et ajouter la clé publique sur le serveur dans le fichier /home/ubuntu/.ssh/authorized_keys)

3. Effectuer des modifs de code et tester localement

meteor

4. Déployer sur le serveur

- Ajuster le fichier ./.deploy/mup.js avec vos critères d'authentification (fichier identifiant .ssh pem)
- Déployer 

mup deploy

### MIGRATION DES DONNEES DE MONGODB SCALINGO vers MONGODB MUP (N'est plus à faire...)

1. Créer un tunnel de connection et de retourner les infos utiles user password pour faire le dump dans un nouveau terminal 
$ scalingo -a klubat db-tunnel SCALINGO_MONGO_URL

2. Remplacer dans la ligne de commande les u user p password et h port et -d par les bonnes valeurs
mongodump -u klubat-6149 -p dwLx19S_CVDpNEQgwuZS -h 127.0.0.1:10001 -d klubat-6149 --archive=dump-klubat.tar.gz --gzip

3. Copier le fichier dump via scp sur le serveur (possible de s'en passer)

4. Procéder au chargement du dump

cat dump-klubat.tar.gz | docker exec -i mongodb mongorestore  --nsFrom='klubat-6149.*' --nsTo='klub.*' --archive --gzip --drop

### BACKUP / RESTORE de la db mongo sur le serveur 

1. backup
docker exec mongodb mongodump -d klub --archive --gzip > dump-klub-radical.gz

2. restore a database from / to the same namspace (klub) - drop nécessaire pour ne pas conserver des enregistrements en base qui ne seraient pas dans le dump.

cat dump-klubat.tar.gz | docker exec -i mongodb mongorestore --archive --gzip --drop


### RENOUVELLEMENT DES CERTIFICATS

sudo certbot renew


### AUTOMATISATION SUR LE SERVEUR

TODO à l'aide d'un crontab

1. Tâche de sauvegarde de BD

2. Tâche de renouvellement de certificats ssl
