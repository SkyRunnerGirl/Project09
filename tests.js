

// The following is extra credit (10pts):
//  • Write a Unit Test using Mocha and Chai for at least one of the functions you write.
//  • Note Mocha/Chai: The Mocha/Chai framework recently removed Common JS functionality. You will need to use these specific versions:
//      o chai: "^4.3.10”
//      o mocha: "^10.2.0”
//      o You can use this boiler plate project for your unit testing: Mocha/Chai Github Repository

const expect = chai.expect
const assert = chai.assert

//Test to check if the created deck equals the number of cards in a standard deck.
describe("Create Deck", function() {
    it("The length of the deck should be 52", function() {
        const deck = new Deck();
        const playerDeck = deck.createDeck()
        console.log(playerDeck)
        expect(playerDeck.length).to.equal(52)
    })
})

//Test to make sure it fails when the number is not the standard number of cards in a deck.
describe("Create Deck", function() {
    it("The length of the deck should be 52", function() {
        const deck = new Deck();
        const playerDeck = deck.createDeck()
        console.log(playerDeck)
        expect(playerDeck.length).to.equal(50)
    })
})
