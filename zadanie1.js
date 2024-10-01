//pirwszy przykład jak pobierać dane z konsoli 
process.stdout.write('Jak masz na imię?');
 
process.stdin.on('data', function(name) {
console.log('Witaj: '+ name.toString());
});








//drugi przykład jak pobierać dane z konsoli ale jeszcze jakiś interface
var readline = require('readline');
 
var rl = readline.createInterface({ // tworzenie interfejsu
input: process.stdin,
output: process.stdout
});
 
rl.question('Jak masz na imię?', function(answer){
rl.setPrompt('Jaki jest twój ulubiony język programowania ' + answer + '?');
rl.prompt();
rl.on('line', function(language){
console.log(language);
});
//rl.close();
});


