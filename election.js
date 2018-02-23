/**
* CYF JS core 3 election project
*/

/**
 * 1 - Convert candidates object to array
 */
function candidatesObjToArray(candidates) {
    var arrOfKeys = Object.keys(candidates);
    var arrOfCandidates = arrOfKeys.map(function (key) { return candidates[key]; });
    return arrOfCandidates;
}

/**
 * 2 - Remove any voters who have voted for more than 2 people, or have voted for the same person twice.
*/

function filterInvalidVoters(allVoters) {
    return allVoters.filter(function (item) {
        return item.votingCard.length < 3 && item.votingCard[0] !== item.votingCard[1]
    })
}

/**
 * 3 - Add up all the votes cast by the voting population. Note that for two adjacent votes in the vote array,
 * the right vote counts for half of the left vote.
 */
function runElection(validVoters, candidates) {
    /* votes = [];
    for (var i = 0; i < validVoters.length; i++) {
        votes.push(validVoters[i].votingCard);
    } */
    votes = [];
    validVoters.forEach(function (item) {
        votes.push(item.votingCard)
    })
    for (var i = 0; i < votes.length; i++) { //loop through vote array
        for (var j = 1; j < 5; j++) { //loop through candidates array
            if (votes[i][0] === j)
                candidates[j].numVotes += 1;
            if (votes[i][1] === j)
                candidates[j].numVotes += 0.5
        }
    }
    return candidates;
}
/**
 * 4 - After an election has been run, return the winner
 *
 * Desired return value: {name: "Tamara Faiza", age: 46, party: "Pizza Party", numVotes: 3}
 */
function getWinner(candidates) {
    finalVotes = [];
    for (var key in candidates) {
        finalVotes.push(candidates[key].numVotes);
    }
    /* var min = Math.min(...finalVotes);
    var max = Math.max(...finalVotes);
    if (min === max) return null //if all candidates numVotes is equal so we have no winner */
    var max = Math.max(...finalVotes);
    var maxDuplicate = []
    for (var i = 0; i < finalVotes.length; i++) {
        if (finalVotes[i] === max)
            maxDuplicate.push(finalVotes[i]);
    }
    if (maxDuplicate.length > 1) return null;
    else
        return candidates[Object.keys(candidates)[finalVotes.indexOf(max)]]
    //horrific line above:returns the candidate connected to max based on key object, needs refactor!
}
/**
 * 5 - Return a message including the name of the winner, and how many votes
 * he/she received
 */
function winnerMessage(winner) {
    var winner = getWinner(candidates)
    if (winner !== null) {
        var mes = winner.name + " has won the election with " + winner.numVotes + " votes.";
        return mes;
    }
    else return "The election was a draw";
}

// A sample population of a small number of voters, stored as an array
let votingPopulation = [
    { name: 'Jane Finnegan', age: 19, votingCard: [1, 3] },
    { name: 'Norman Beracha', age: 35, votingCard: [3, 4] },
    { name: 'Salome Kadek', age: 22, votingCard: [2, 1, 3] },
    { name: 'Wei Li', age: 19, votingCard: [1, 2] },
    { name: 'Sam MacKinnon', age: 59, votingCard: [1, 4] }
];

// The election candidates, stored as an object where each object key is the candidate ID, and the object
// value is the candidate object itself.
let candidates = {
    1: { name: 'Tamara Faiza', age: 46, votingCard: [1, 1], party: 'Pizza Party', numVotes: 0 },
    2: { name: 'Aylin Duke', age: 39, votingCard: [2, 2], party: 'Foam Party', numVotes: 0 },
    3: { name: 'Clay Roderick', age: 54, votingCard: [3, 4], party: 'Flat Earth Party', numVotes: 0 },
    4: { name: 'Nour al-Din', age: 32, votingCard: [4, 3], party: 'Pizza Party', numVotes: 0 }
};

let allVoters = votingPopulation.concat(candidatesObjToArray(candidates));
//console.log(allVoters);

let validVoters = filterInvalidVoters(allVoters);
//console.log(validVoters,"validdddddddddd")

candidates = runElection(validVoters, candidates);
//console.log(candidates);

let winner = getWinner(candidates);
//console.log("and the winner is: ",winner)

console.log(winnerMessage());

module.exports = {
    candidatesObjToArray,
    filterInvalidVoters,
    runElection,
    getWinner,
    winnerMessage
}

