const CoutDown = () => {
    let endDate = new Date("01/01/2025 00:00:00").getTime();
    let check = setInterval(function () {
        let now = new Date().getTime();
        let distance = endDate - now;
        let day = Math.floor(distance / (24 * 60 * 60 * 1000));
        let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
        let secounds = Math.floor((distance % (60 * 1000)) / 1000);

        document.getElementById("day").innerText = day;
        document.getElementById("hour").innerText = hour;
        document.getElementById("minute").innerText = minute;
        document.getElementById("secound").innerText = secounds; // corrected spelling here
        if (distance <= 0) {
            clearInterval(check);
        }
    }, 1000);
}


export default CoutDown;
