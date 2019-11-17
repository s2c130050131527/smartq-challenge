const dateObj = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    21:'st',
    22:'nd',
    23:'rd'
}

const monthObj = {
    0:'Jan',
    1:'Feb',
    2:'Mar',
    3:'Apr',
    4:'May',
    5:'Jun',
    6:'Jul',
    7:'Aug',
    8:'Sep',
    9:'Oct',
    10:'Nov',
    11:'Dec'
}
export const getDate = () => {
    const date = new Date();
    const dateVal = date.getDate();
    const month = date.getMonth();
    const dateStr = dateObj[dateVal] ? dateVal + dateObj[dateVal] :  dateVal + 'th';
    return dateStr + ' '+ monthObj[month];
}