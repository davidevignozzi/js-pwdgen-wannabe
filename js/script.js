var nome = prompt('Inserisci qui il tuo nome');
console.log('Il nome dell\'utente è ' + nome);

var cognome = prompt('Inserisci qui il tuo cognome');
console.log('Il cognome dell\'utente è ' + cognome);

var colore = prompt('Qual è il tuo colore preferito?');
console.log('Il colore preferito dell\'utente è ' + colore);

var annoCorrente = new Date().getFullYear();

var passwordContent = document.getElementById('password');
passwordContent.innerText = 'La tua password è: ' + nome + cognome + colore + annoCorrente;
