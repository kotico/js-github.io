alert (эДобрый день);

var buttonStart = document.getElementById('button_start');
var buttonStop = document.getElementById('button_split');
var buttonReset = document.getElementById('button_reset');

var timeShow = document.querySelector('.time_show');

var timerId; // идентификатор для таймера

var clickCounter = 0; // счетчик кликов для кнопки start/stop

var clickShowTimeCount = 0; // счетчик кликов вывода значений таймера для stop && split

var ms = s = m = h = '00'; аданы переменные для милисекунд, секунд, минут и часов


function startTimerButton() {
	clickCounter++;  // cчетчик увеличивается на 1  при клике


// При не четном значчении счетчика запускаем таймер и меняем название кнопки на stop

if (clickCounter % 2 !==0) {
	var buttonNameChange = document.getElementById('button_start');
	buttonNameChange.value = 'Stop';
	workTimer();


   // при четном значении счетчика останавливаем таймер и выводим его значение со сменой кнопки на start

} else if (clickCounter % 2 ==0) {
	clearTimeout(timerId);

	clickShowTimeCount++;

	timeValue = document.createElement("p");
	timeValue.className ='time_value_output';
	timeValue.innerHTML = clickShowTimeCount + '.' + ' ' + 'Stop:' + h + ':' + s + '.' + ms;
	timeShow.appendChild(timeValue);

	var buttonNameChange = document.getElementById('button_start');
	buttonNameChange.value = 'Start';	
}

console.log('COUNT:', clickCounter);
}

function workTimer() {
	var timer = document.getElementById('timer');
	ms++;
	  if (ms < 10) ms = '0' + ms;
	  if (ms > 99) {
	  	ms = '00';
	  	s++;

	    if (s < 10) s = '0' + s;
	    if (s > 59) {
	    	s = '00';
	    	m++;

	    	if (m < 10) {
	    		m = '0' + m;
	    	}

	    	if (m > 59) {
	    		m = '00';
	    		h++;

	    		if (h < 10) {
	    			h = '0' + h;
	    		}

	    		if (h > 23) {
	    			h = '00';
	    			m = '00';
	    			s = '00';
	    			ms = '00';
	    		}
	    	}

	    }
	  }

	  timer.innerHTML = h + ':' + m + ':' + s + '.' + ms;
	  timerId = setTimeout(workTimer, 9);
}


function splitTimerButton() {

	// при четном значении счетчика таймер останавливается и состояние split не выводится
if ((clickCounter % 2 == 0) || (clickCounter == 0)) {

	return;

	// при нечетном значении счетчика,выводтся текущее знчение таймера (split) 

} else {

	timeValue = document.createElement('p');

	clickShowTimeCount++;

	timeValue.className = 'time_value_output';
	timeValue.innerHTML = clickShowTimeCount + '.' + ' ' + 'Split:' + h + ':' + m + ':' + s + '.' + ms;
	timeShow.appendChild(timeValue);

}

}

function resetTimerButton() {

	clearTimeout(timerId);

	ms = s = m = h = '00';

	document.getElementById('timer').innerHTML = h + ':' + m + ':' + s + '.' + ms;
	timeShow.innerHTML = '';

	// сброс счетчиков кликов
	clickShowTimeCount = 0;
	clickCounter = 0;
}

buttonStart.addEventListener('click', startTimerButton);
buttonStop.addEventListener('click', splitTimerButton);
buttonReset.addEventListener('click', resetTimerButton);