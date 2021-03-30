// Create an object containing the different elements
const items = {
    foodList: ['Pizza', 'Hotdog', 'Burger'],
    drinkList: ['Beer', 'Coke', 'Cider'],
    playList: ['Football', 'Tennis', 'Basketball'],
    timeList: ['now!', 'tonight!', 'tomorrow!']
}

// Create empty array to store the selections
const finalList = [];

// Iterate through the different elements and randomly add them to the final list
for(let item in items){
    let length = items[item].length;
    let randomIndex = Math.floor(Math.random() * length);
    switch(item){
        case 'foodList':
            finalList.push(`You should eat a: ${items[item][randomIndex]}.`)
            break;
        case 'drinkList':
            finalList.push(`You should drink a: ${items[item][randomIndex]}.`)
            break;
        case 'playList':
            finalList.push(`You should play: ${items[item][randomIndex]}.`)
            break;
        case 'timeList':
            finalList.push(`You should do them... ${items[item][randomIndex]}.`)
            break;
        default:
            console.log("Error")
    }
}

// Print the final message
console.log(finalList.join("\n"));