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
class voter {
    constructor(name, age, votingCard) {
        this.name = name;
        this.age = age;
        this.votingCard = votingCard;
    }
}
new new Voter('Jane Finnegan', 19, [1, 3]);
new Voter('Norman Beracha', 35, [3, 4]);
new Voter('Salome Kadek', 22, [2, 1, 3]);
new Vote('Wei Li', 19, [1, 2]);
new Vote('Sam MacKinnon', 59, [1, 4]);

/**
 * 2 - Write a Candidate class modelling a candidate in the election. Candidates are also voters (they can vote for themselves, or anyone else).
 * However they have some extra properties.
 */

/**
 * 3 - Write an Election class which models the election.
 */

// Include your votingPopulation array here.
let votingPopulation = [];


// Include your candidates object here.
let candidates = {};


let allVoters = votingPopulation.concat(candidatesObjToArray(candidates));

let validVoters = filterInvalidVoters(allVoters);

let election = new Election(validVoters, candidates);

election.runElection(); // Example of how runElection() can be called.

console.log(election.printWinnerMessage()); // Example of how the winner message can be printed.
