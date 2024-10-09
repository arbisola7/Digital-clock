document.addEventListener("DOMContentLoaded", function() {
    const hourEl = document.getElementById("hour");
    const minuteEl = document.getElementById("minutes");
    const secondEl = document.getElementById("seconds");
    const ampmEl = document.getElementById("ampm");

    function updateClock() {
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let ampm = h >= 12 ? "PM" : "AM";

        if (h > 12) h -= 12;
        if (h === 0) h = 12;

        hourEl.textContent = h < 10 ? "0" + h : h;
        minuteEl.textContent = m < 10 ? "0" + m : m;
        secondEl.textContent = s < 10 ? "0" + s : s;
        ampmEl.textContent = ampm;

        setTimeout(updateClock, 1000);
    }

    updateClock();
});

