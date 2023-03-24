export const convertDateToDayMonthYearArray = (dateString) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [day, monthIndex, year] = dateString.split("-").map((str, index) => index === 1 ? months[parseInt(str) - 1] : parseInt(str));
    return [day, monthIndex, year];
}

export const convertDateToReadableString = (dateString) => {
    const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const [day, monthIndex, year] = dateString.split("-").map((str, index) => index === 1 ? parseInt(str) - 1 : parseInt(str));
    const month = months[monthIndex];
    return `${day} ${month} ${year}`;
}

export const dateComesBefore = (date1, date2) => {
    const date1Arr = date1.split("-").map((el) => Number(el));
    const date2Arr = date2.split("-").map((el) => Number(el));

    if (date1Arr[2] < date2Arr[2]) {
        return true;
    } else if (date1Arr[2] === date2Arr[2]) {
        if (date1Arr[1] < date2Arr[1]) {
            return true;
        } else if (date1Arr[1] === date2Arr[1]) {
            if (date1Arr[0] < date2Arr[0]) {
                return true;
            }
        }
    }
    return false;
};

export const daysBetweenTwoDatesInDDMMYYYY = (date1, date2) => {
    
}