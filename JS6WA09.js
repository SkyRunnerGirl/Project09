// Coding Steps:
// • For the final project, you will be creating an automated version of the classic card game War! There are many versions of the game War. In this version, there are only 2 players.
//      o You don’t need to do anything special when there is a tie in a round.
// • Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, Player, as well as what properties and methods they may include.
//      Four suits to represent the appearance (user interface - ui) for your cards:
//      let cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
//      console.log("Card Suits Example:", cardSuits);
// • The game itself will automatically play using console.log() to display turns, points, cards used, and the outcome of the game. No user input via prompts is required.
// • The completed project should, when executed, do the following:
//      1. Deal 26 cards to each player from a deck of 52 cards.
//      2. Iterate through the turns where each player plays a card.
//      3. The player who played the higher card is awarded a point.
//          o Ties result in zero points for both players.
//      4. After all cards have been played, display the score and declare the winner.


class Deck {
    constructor() {
        this.deck = [];
        this.suits = ['Spades 🗡️', 'Hearts ❤️', 'Diamonds 💎', 'Clubs 🍀'];
        this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    }
//Below creates the deck of cards by iterating through the suits & values and pushing into the array deck.
    createDeck() {    
        for(let i = 0; i < this.suits.length; i++) {
            for(let j = 0; j < this.values.length; j++) {
                let card = {
                    name: `${this.values[j]} of ${this.suits[i]}`,
                    value: j + 2
                }
                this.deck.push(card);
            }
        }
    return this.deck
}
//I also added the method shuffle deck by using a part of the Fisher-Yates method (https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/)
    shuffle() { 
        for(let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        }
    }

    playGame() {
        //creates a new shuffled deck to begin the game
        const deck = new Deck
        deck.createDeck()
        deck.shuffle()

        //creates a hand for each player to play the game
        while(deck.deck.length !== 0) {
            //shift() will remove the first item in shuffled deck array and push it to player hand arrays
            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }
        //the for loop, loops through the player hand arrays as long as there are cards
        //it compares the value of the cards for each loop and the player with the higher value gets a point
        //tie values give no points to either player
        //I put console logs to keep track of who won each round and the updated score
        for(let i = 0; i < this.player1.hand.length; i++) {
            if(this.player1.hand[i].value > this.player2.hand[i].value) {
                this.player1.score ++
                console.log(`
                    Player 1 Card: ${this.player1.hand[i].name}
                    Player 2 Card: ${this.player2.hand[i].name}
                    Player 1 wins 1 point!
                    Current Score:
                    Player 1 Score: ${this.player1.score}
                    Player 2 Score: ${this.player2.score}
                    `)
            } else if(this.player2.hand[i].value > this.player1.hand[i].value) {
                this.player2.score ++
                console.log(`
                    Player 1 Card: ${this.player1.hand[i].name}
                    Player 2 Card: ${this.player2.hand[i].name}
                    Player 2 wins 1 point!
                    Current Score:
                    Player 1 Score: ${this.player1.score}
                    Player 2 Score: ${this.player2.score}
                    `)
            } else {
                console.log(`
                    Player 1 Card: ${this.player1.hand[i].name}
                    Player 2 Card: ${this.player2.hand[i].name}
                    Tie...no one gets a point.
                    Current Score:
                    Player 1 Score: ${this.player1.score}
                    Player 2 Score: ${this.player2.score}
                    `)
            }
        }
        //this final statement kicks in when there are no more cards in the player hand arrays
        //it compares the total score for each player and displays the winner of the game
        //or if a tie, prompts them to play again
        if(this.player1.score > this.player2.score) {
            console.log(`Player 1 WINS!!
                Final Score:
                Player 1 Score: ${this.player1.score}
                Player 2 Score: ${this.player2.score}
                `)
        } else if(this.player2.score > this.player2.score) {
            console.log(`Player 2 WINS!!
                Final Score:
                Player 1 Score: ${this.player1.score}
                Player 2 Score: ${this.player2.score}
                `)
        } else {
            console.log(`Tie game...play again!
                Final Score:
                Player 1 Score: ${this.player1.score}
                Player 2 Score: ${this.player2.score}
                `)
        }
    }
}
//this creates a new instance of the Object game and then calls the method playGame() on that new variable
const game = new Game
game.playGame()
