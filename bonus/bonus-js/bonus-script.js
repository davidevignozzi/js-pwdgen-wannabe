var nome = prompt('Ciao, come ti chiami?');
console.log('Il Tipo si chiama ' + nome);

var età = prompt('Ciao ' + nome + ' quanti anni hai?');
var annoCorrente = new Date().getFullYear();
var annoDiNascita = (annoCorrente - età);
console.log('Il tipo è del ' + annoDiNascita);

if (età < 18) {
  alert(nome + ', questo è un sito per adulti sicuro di avere ' + età + ' anni? Secondo me ne hai qualcuno in più, Ti rifaccio la domanda')
  var etàFalsa = prompt('Ciao ' + nome + ' quanti anni hai?');
  var annoDiNascitaFalso = (annoCorrente - etàFalsa);
  console.log('Ok, adesso ' + nome + ' è del ' + annoDiNascitaFalso)
  var passwordContent = document.getElementById('password');
  passwordContent.innerText = 'La tua nuova password super sicura è ' + nome + annoDiNascitaFalso
}

if (età > 18) {
  var passwordContent = document.getElementById('password');
  passwordContent.innerText = 'La tua nuova password super sicura è ' + nome + annoDiNascita
}
