function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

 
    const hourDeg = (hours % 12 + minutes / 60) * 30;
    const minuteDeg = (minutes + seconds / 60) * 6;
    const secondDeg = (seconds + milliseconds / 1000) * 6;

    document.querySelector('.hour').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.second').style.transform = `rotate(${secondDeg}deg)`;

    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.querySelector('.digital-time').textContent = timeString;

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    document.querySelector('.digital-date').textContent = dateString;

    const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });
    document.querySelector('.digital-day').textContent = dayString;

    requestAnimationFrame(updateClock);
}


updateClock();


setInterval(() => {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1000);
}, 100);