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
  