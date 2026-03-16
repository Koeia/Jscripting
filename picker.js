//I always have a hard time picking where to eat, made this to avoid the difficulty

let randomNumber = Math.floor(Math.random() * 5);
function getRandomItem(val) {
    val = randomNumber;
    switch (val) {
        case 4:
            return 'Panera'
        case 3:
            return 'Cookout'
        case 2:
            return 'Chickfila'
        case 1:
            return 'Zaxbys'
        case 0:
            return 'Wendys'
        default:
            return 'Dont eat lol';
    }
}
console.log(getRandomItem())