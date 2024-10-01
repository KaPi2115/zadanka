
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function dodaj(a, b) {
    return a + b;
}


function odejmij(a, b) {
    return a - b;
}

rl.question('Podaj pierwszą liczbę: ', (liczba1) => {
    rl.question('Podaj drugą liczbę: ', (liczba2) => {
        rl.question('Wybierz operację (+ lub -): ', (operacja) => {

            const a = parseFloat(liczba1);
            const b = parseFloat(liczba2);

            let wynik;
            if (operacja === '+') {
                wynik = dodaj(a, b);
            } else if (operacja === '-') {
                wynik = odejmij(a, b);
            } else {
                console.log('Nieprawidłowa operacja');
                rl.close();
                return;
            }

            console.log(`Wynik: ${wynik}`);
            rl.close();
        });
    });
})