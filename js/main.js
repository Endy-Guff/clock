function time(){
    const clock = document.querySelector('.clock'),
        hourArrow = clock.querySelector('.hour'),
        minuteArrow = clock.querySelector('.minute'),
        secondArrow = clock.querySelector('.second');

    const deg = 6;


    setInterval(() => {
        const date = new Date();
        const seconds = date.getSeconds() * deg;
        const minutes = date.getMinutes() * deg;
        const hours = (date.getHours() * deg) * 5;
        secondArrow.style.cssText = `transform: rotate(${seconds}deg)`;
        minuteArrow.style.cssText = `transform: rotate(${minutes}deg)`;
        hourArrow.style.cssText = `transform: rotate(${hours}deg)`

    }, 0)
}

time();

