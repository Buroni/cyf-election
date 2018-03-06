// Importing the functions from what you did in part 1.
const {
    candidatesObjToArray,
    filterInvalidVoters,
    runElection,
    getWinner,
    winnerMessage,
} = require('./election');

/**
 * 1 - Write a Voter class modelling a member of the population who votes in the election.
 */
class Voter {
    constructor(name, age, votingCard) {
        this.name = name;
        this.age = age;
        this.votingCard = votingCard;
    }
}
let votingPopulation = [
    new Voter('Jane Finnegan', 19, [1, 3]),
    new Voter('Norman Beracha', 35, [3, 4]),
    new Voter('Salome Kadek', 22, [2, 1, 3]),
    new Voter('Wei Li', 19, [1, 2]),
    new Voter('Sam MacKinnon', 59, [1, 4])
]


/**
 * 2 - Write a Candidate class modelling a candidate in the election. Candidates are also voters (they can vote for themselves, or anyone else).
 * However they have some extra properties.
 */
class Candidate extends Voter {
    constructor(name, age, votingCard, party, numVotes) {
        super(name, age, votingCard);
        this.party = party;
        this.numVotes = numVotes;
    }
}
let candidates = {
    1: new Candidate('Tamara Faiza', 46, 'Pizza Party', [1, 1]),
    2: new Candidate('Aylin Duke', 39, 'Foam Party', [2, 2]),
    3: new Candidate('Clay Roderick', 54, 'Flat Earth Party', [3, 4]),
    4: new Candidate('Nour al-Din', 32, 'Pizza Party', [4, 1])
}



/**
 * 3 - Write an Election class which models the election.
 */
class Election {
    constructor(validVoters, candidates) {
        this.validVoters = validVoters;
        this.candidates = candidates;
        this.winner = 'winner has not been chosen yet';
    }
    runElection() {
        // altering the voting cards of the candidates class variable
        this.candidates = runElection(this.validVoters, this.candidates)

    } getWinner() {
        //setting the winner class variable after the winner is calculated
        this.winner = getWinner(this.candidates);

    } printWinnerMessage() {
        // should print a message as before including who won, 
        //and how many votes he/she received
        if (this.winner === null) { return "The election was a draw"; }
        return this.winner.name + " has won the election with " + this.winner.numVotes + " votes!";
    }

}



// Include your votingPopulation array here.
//let votingPopulation = [];


// Include your candidates object here.
//let candidates = {};

window.onload = function () {
    let allVoters = votingPopulation.concat(candidatesObjToArray(candidates));

    let validVoters = filterInvalidVoters(allVoters);

    let election = new Election(validVoters, candidates);

    election.runElection(); // Example of how runElection() can be called.

    console.log(election.printWinnerMessage()); // Example of how the winner message can be printed.

}


