const countTimer = deadline => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');
    timerHours.textContent = '';
    timerMinutes.textContent = '';
    timerSeconds.textContent = '';

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000;
        const mapDate = new Map();
        mapDate.set('timeRemaining', timeRemaining);

        if (dateStop < dateNow || !deadline) {
            clearTimer();
            setFinishColor();
        } else {
            setTimer();
        }

        function clearTimer() {
            mapDate.set('seconds', '00');
            mapDate.set('minutes', '00');
            mapDate.set('hours', '00');
        }

        function setFinishColor() {
            const finishColor = '#fe193f';
            timerHours.style.color = finishColor;
            timerMinutes.style.color = finishColor;
            timerSeconds.style.color = finishColor;
        }

        function setTimer() {
            mapDate.set('seconds', Math.floor(timeRemaining % 60)); // остаток от деления на 60
            mapDate.set('minutes', Math.floor((timeRemaining / 60) % 60)); // снова остаток от деления
            mapDate.set('hours', Math.floor(timeRemaining / 60 / 60)); //везде предыдущий ч/з остаток от деления
            mapDate.forEach((item, key) => {
                if (item < 10) {
                    item = "0" + item;
                }
                mapDate.set(key, item);
            });
        }

        return mapDate;
    };

    const idInterval = setInterval(updateClock, 1000);

    function updateClock() {
        const timer = getTimeRemaining();
        timerHours.textContent = timer.get('hours');
        timerMinutes.textContent = timer.get('minutes');
        timerSeconds.textContent = timer.get('seconds');

        if (timer.get('timeRemaining') < 0) clearInterval(idInterval);
    }

};
export default countTimer;