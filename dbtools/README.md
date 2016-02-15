### Backup
Comment récupérer les données déployées sur un environnement situé à <urlàsauvegarder> ?
- **Given** le script backup.sh a été placé à la racine de dbtools on a ouvert un terminal et on a fait :
$ cd dbtools
- **When** on lance :
$ meteor mongo urlàsauvegarder --url | ./backup.sh
- **Then** la sauvegarde sera effectuée dans un dossier ./dump avec les points de urlàsauvegarder remplacés par des _ (exemple klub.aubryconseil.com -> klub_aubryconseil_com)

### Restore en distant
Comment injecter dans <urlàinjecter> les données sauvegardées par un backup ?
- **Given**  
le contenu du dossier /dump a été généré par un backup et le script restore.sh a été placé à la racine de dbtools et on a ouvert un terminal et on a fait  
$ cd dbtools
- **When** on lance :
$ meteor mongo urlàinjecter --url | ./restore.sh dump/urlsauvegardéeavecdestirets
- **Then**
les données présentes sur urlàinjecter seront détruites et le contenu du dossier /dump sera injecté dans urlàinjecter

### Restore en local
Comment injecter dans local les données sauvegardées par un backup ?
- Meteor doit fonctionner. On lance dans un terminal la commande :
$ mongorestore -h localhost:3001 -d meteor dump/urlsauvegardéeavecdestirets --objcheck --drop
