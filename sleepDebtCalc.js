function getSleepHours(day) {
    switch (day) {
        case 'Monday':
            return 6;
        case 'Tuesday':
            return 5;
        case 'Wednesday':
            return 5;
        case 'Thursday':
            return 8;
        case 'Friday':
            return 9;
        case 'Saturday':
            return 11;
        case 'Sunday':
            return 7;
        default:
            return 'Please enter a valid day';
    }
}

function getActualSleepHours() {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Sunday') + getSleepHours('Saturday') + getSleepHours('Wednesday');
}

const getIdealSleepHours = () => {
    let idealHours = 8;
    return (idealHours * 7);
};

let calculateSleepDebt;
calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealHours = getIdealSleepHours();
    if (actualSleepHours === idealHours) {
        console.log('You got the right amount of sleep')
    } else if (actualSleepHours < idealHours) {
        console.log('You did not get enough sleep')
    } else if (actualSleepHours > idealHours) {
        console.log('You got more then enough sleep')
    }
};

calculateSleepDebt();