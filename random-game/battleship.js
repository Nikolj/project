let isSound = true;
let rezultat = document.querySelector('.resultat');
let newGame = document.querySelector('.newGame');
let nom = 0;
nom = nom;

let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] }
    ],



    fire: function(guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);

            if (ship.hits[index] === "hit") {
                view.displayMessage("Oops, you already hit that location!");
                return true;
            } else if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (isSound == true) {
                    sound("song/vzryv.mp3");
                }

                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },

    isSunk: function(ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    generateShipLocations: function() {
        let locations;
        for (let i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
        console.log("Ships array: ");
        console.log(this.ships);
    },

    generateShip: function() {
        let direction = Math.floor(Math.random() * 2);
        let row, col;

        if (direction === 1) { // horizontal
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
        } else { // vertical
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
            col = Math.floor(Math.random() * this.boardSize);
        }

        let newShipLocations = [];
        for (let i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },

    collision: function(locations) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            for (let j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }

};


let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }

};

let controller = {
    guesses: 0,

    processGuess: function(guess) {
        let location = parseGuess(guess);
        if (location) {
            this.guesses++;
            let hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                rezultat.classList.toggle('displ');
                rezultat.innerHTML = `Game end. <br> You sank all my battleships, in ${this.guesses} guesses! <br> OK!`;
                if (localStorage.length == 10) {
                    for (let k = 0; k < 9; k++) {
                        localStorage.setItem(k, localStorage.getItem(k + 1));
                    }
                    delete localStorage[9];
                };
                nom = histori.length;
                if (localStorage.length == 9) {
                    nom = 9;
                }
                histori[nom] = `You sank all my battleships, in ${this.guesses} guesses!`;
                localStorage.setItem(nom, histori[nom]);
                if (isSound == true) {
                    sound("song/victory.mp3");
                };
                rezultat.onclick = function(e) {
                    document.location.reload();
                };
            }
        }

    }
}

function parseGuess(guess) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        let firstChar = guess.charAt(0);
        let row = alphabet.indexOf(firstChar);
        let column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize ||
            column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
        } else {
            return row + column;
        }
    }
    return null;
}


function handleFireButton() {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value.toUpperCase();
    controller.processGuess(guess);
    guessInput.value = "";
    if (isSound == true) {
        sound("song/fire.mp3");
    }
}

function sound(a) {
    let audio = new Audio();
    audio.src = a;
    audio.play();
}

function handleKeyPress(e) {
    let fireButton = document.getElementById("fireButton");
    e = e || window.event;
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

window.onload = init;

function init() {

    let fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    let guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    model.generateShipLocations();
}


var m = 0;
let histori = [];

function showData(data) {
    let key;
    for (key in data) {
        const p = `<p class="paragraf"> ${Number(key) + 1}.)  ${data[key]} <br> </p>`;
        History.insertAdjacentHTML("beforeend", p);
    }
}


function getLocalStorage() {

    if (localStorage.getItem(m)) {
        for (let i = 0; i < localStorage.length; i++) {
            histori[i] = localStorage.getItem(i);
        }
    }
}
window.addEventListener('load', getLocalStorage);



const hamburger = document.querySelector(".hamburger");
const History = document.querySelector(".History");

function myFunction(x) {
    x.classList.toggle("change");
    History.classList.toggle("History-List");
    let gallery = document.querySelectorAll(".paragraf");
    gallery.forEach((gallery) => gallery.remove());
    showData(histori);
}