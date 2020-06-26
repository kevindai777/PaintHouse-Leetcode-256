//Objective is to find the cheapest cost to paint 'n' houses, given that
//a house cannot be the same color as any of it's adjacent houses.

let costs = [[17,2,17], [16,16,5], [14,3,19]]


//O(n) solution that has a dynamic programming approach, updating the cheapest
//costs starting from the first row all the way down to the bottom.

if (costs.length == 0) {
    return 0
}

//Start from the first row
let previousRow = costs[0]

for (let i = 1; i < costs.length; i++) {
    //Add the possible sums into the next row, choosing the min cost between the two possible houses
    //from the previous row
    let currentRow = [...costs[i]]
    currentRow[0] += Math.min(previousRow[1], previousRow[2])
    currentRow[1] += Math.min(previousRow[0], previousRow[2])
    currentRow[2] += Math.min(previousRow[0], previousRow[1])
    //Update the previous row for the next iteration
    previousRow = currentRow
}

//Once we have all of the possible sums, get the min between them all
return Math.min(Math.min(previousRow[0], previousRow[1]), previousRow[2])