const clock = document.querySelector('.clock');
const ho = document.querySelector('.hours');
const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');


const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const h = `${("0" + hours).slice(-2)}<span> :</span>`;
    const m = `${("0" + minutes).slice(-2)}<span> :</span>`;
    const s = `${("0" + seconds).slice(-2)}`;

    ho.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
};

setInterval(tick, 1000);
