export const convertDateToDayMonthYearArray = (dateString) => {
    const months = ["Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
    const [day, monthIndex, year] = dateString.split("-").map((str, index) => index === 1 ? months[parseInt(str) - 1] : parseInt(str));
    return [day, monthIndex, year];
}

export const convertDateToReadableString = (dateString) => {
    const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const [year, monthIndex, day] = dateString.split("-").map((str, index) => index === 1 ? parseInt(str) - 1 : parseInt(str));
    const month = months[monthIndex];
    return `${day} ${month} ${year}`;
}

export const convertDateToReadableStringWithTime = (dateString) => {
    const readableDate = convertDateToReadableString(dateString.split("T")[0]);
    const time = dateString.split("T")[1].split(".")[0].split(":").slice(0, 2).join("h");
    return `${readableDate} à ${time}`;
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

// Write function dateTimeComesBefore where date1 and date2 are both in the format YYYY-MM-DDTHH:MM:SS.000Z. Compare date first then time.
export const dateTimeComesBefore = (date1, date2) => {
    
    const datePart1 = date1.split("T")[0];
    const datePart2 = date2.split("T")[0];

    if(datePart1 === datePart2) {
        const timePart1 = date1.split("T")[1].split(".")[0];
        const timePart2 = date2.split("T")[1].split(".")[0];

        const hmsArr1 = timePart1.split(":").map(el => Number);
        const hmsArr2 = timePart2.split(":").map(el => Number);

        const hms1inSeconds = (hmsArr1[0] * 60 * 60) + (hmsArr1[1] * 60) + hmsArr1[2];
        const hms2inSeconds = (hmsArr2[0] * 60 * 60) + (hmsArr2[1] * 60) + hmsArr2[2];

        return hms1inSeconds < hms2inSeconds;
    }

    return dateComesBefore(datePart1, datePart2);
}
    
    

export const daysBetweenTwoDatesInDDMMYYYY = (date1, date2) => {
    const date1Arr = date1.split("-").map((el) => Number(el));
    const date2Arr = date2.split("-").map((el) => Number(el));

    const date1Obj = new Date(date1Arr[2], date1Arr[1] - 1, date1Arr[0]);
    const date2Obj = new Date(date2Arr[2], date2Arr[1] - 1, date2Arr[0]);

    const diffTime = Math.abs(date2Obj - date1Obj);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

export const daysBetweenTwoDatesInYYYYMMDD = (date1, date2) => {
    const date1Arr = date1.split("-").map((el) => Number(el));
    const date2Arr = date2.split("-").map((el) => Number(el));

    const date1Obj = new Date(date1Arr[0], date1Arr[1] - 1, date1Arr[2]);
    const date2Obj = new Date(date2Arr[0], date2Arr[1] - 1, date2Arr[2]);

    const diffTime = Math.abs(date2Obj - date1Obj);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

export const todayInYYYYMMDD = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`;
}
