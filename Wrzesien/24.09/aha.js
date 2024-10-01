//importowanie wymaganych modułów
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware do obsługi danych przesyłanych przez formularz
app.use(bodyParser.urlencoded({ extended: true }));

// Obsługa strony głównej z formularzem
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Obsługa danych przesłanych przez formularz
app.post('/submit', (req, res) => {
    //Pobranie danych z formularza
    const name = req.body.name;
    const email = req.body.email;
    const lastname = req.body.lastname;

    //Wypisanie danych w konsoli
    console.log(`Name: ${name}, Email: ${email}`);

    //Zwrócenie odpowiedzi do przeglądarki
    res.send(`Dane: Imie - ${name}, Nazwisko - ${lastname}, Email - ${email}`);
});
    //uruchamianie serwera i wyswietlanie informaji w konsoli
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
