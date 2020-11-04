export const msToTime = (duration) => {
    let minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    let postedTime;

    if(minutes < 60) {
        postedTime = (minutes < 10) ? `0${minutes} Minutes Ago` : `${minutes} Minutes Ago`;
    } else if(hours < 24) {
        postedTime = (hours < 10) ? `0${hours} Hours Ago` : `${hours} Hours Ago`;
    }    

    return postedTime.toUpperCase();
};