const buttonStart = document.querySelector("#start");
const buttonStop = document.querySelector("#stop");
buttonStart.addEventListener('click', startTime);
buttonStop.addEventListener('click', stopTime);

function Time () {
	this.startTimer = 0;
	this.stopTimer = 0;
	this.interval = 0;
};

Time.prototype.start = function (value) {
	this.startTimer = value;	
	console.log(`Статровий час: ${this.startTimer}`);
};

Time.prototype.stop = function (value) {
	this.stopTimer = value;
	this.interval = this.stopTimer - this.startTimer;
	console.log(`Фінішний час: ${this.stopTimer}`);
	console.log(`Різниця часу: ${this.interval}`);
};


let time = new Time ();

function startTime (event) {	
	time.start(Date.now());
};

function stopTime (event) {
	time.stop(Date.now());	
};

