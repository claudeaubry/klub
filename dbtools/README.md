### Backup
Comment récupérer les données déployées sur un environnement situé à <urlàsauvegarder> ?
- **Given** le script backup.sh a été placé à la racine du <dbtools> et on a ouvert un terminal et on a fait :
$ cd <dbtools>
- **When** on lance :
$ meteor mongo <urlàsauvegarder> --url | ./backup.sh
- **Then** la sauvegarde sera effectuée dans un dossier ./dump avec les points de <urlàsauvegarder> remplacés par des _ (exemple klub.aubryconseil.com -> klub_aubryconseil_com)

### Restore en distant
Comment injecter dans <urlàinjecter> les données sauvegardées par un backup ?
- **Given**  
1. le contenu du dossier /dump a été généré par un backup
2. le script restore.sh a été placé à la racine du <dbtools> et on a ouvert un terminal et on a fait  
$ cd <dbtools>
- **When** on lance :
$ meteor mongo <urlàinjecter> --url | ./restore.sh dump/<urlsauvegardéeavecdestirets>
- **Then**
1. les données présentes sur <urlàinjecter> seront détruites
2. le contenu du dossier /dump sera injecté dans <urlàinjecter>

### Restore en local
Comment injecter dans <local> les données sauvegardées par un backup ?
mongorestore -h localhost:3001 -d meteor dump/<urlsauvegardéeavecdestirets> --objcheck --drop
