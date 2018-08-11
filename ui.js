class Ui{

   constructor(){
        this.wordInput = document.querySelector('#word-input');
		this.currentWord = document.querySelector('#current-word');
		this.scoreDisplay = document.querySelector('#score');
		this.highScore = document.querySelector('#hiscore');
		this.timeDisplay = document.querySelector('#time');
		this.message = document.querySelector('#message');
		this.seconds = document.querySelector('#seconds');
		this.startGmae = document.getElementById('startGmae');
		document.querySelector('#option').addEventListener('change',function(){

			location.reload();


		});

		this.option = document.querySelector('#option');

		this.level = {
		easy : 15,
		medium : 10,
		hard : 5
	    }

	    this.score = 0;
		this.isPlaying;
		this.level_value = this.option.options[this.option.selectedIndex].value;
		this.time;
		this.wordsArray = [];

       //Init Storage
       this.store  = new Store();



	}



   //Initialize The Game
   init(wordsArray){
   	 console.log('Initialize The Game')



   	 this.wordsArray = wordsArray
     //Load word From Array
     this.showWord(this.wordsArray);


    this.store.getHighScore();

     //Get The Time
     this.getTime();

     //Call CountDown Every Seconds
     setInterval(this.countDown.bind(this),1000);

     setInterval(this.checkStatus.bind(this),50);


   }

   //Pick & Show random Word
   showWord(wordsArray){
    //Generate Random Array Index
   	const randIndex = Math.floor(Math.random() * this.wordsArray.length)
   	//Output Random Word
   	this.currentWord.innerHTML = this.wordsArray[randIndex];

	}

  //Count Time
  getTime(){
    this.time;
    let level = this.level;
    if(parseInt(this.level_value) == 1){
     	this.time = level.easy + 1;
    }
    else if(parseInt(this.level_value) == 2){
     	this.time = level.medium + 1;
    }
	else if(parseInt(this.level_value) == 3){
     	this.time = level.hard + 1;
    }
  }

  countDown(){
  	if (this.time > 0){
  		this.time--;
  	}else if(time == 0){
  		isPlaying = false;
  	}
  	this.timeDisplay.innerHTML = this.time;
  	if(this.level_value == 1){
  		let total_time = this.level.easy;
  		this.seconds.innerHTML = total_time;
  	}else if(this.level_value == 2){
  		let total_time = this.level.medium;
  		this.seconds.innerHTML = total_time;
  	}else if(this.level_value == 3){
  		let total_time = this.level.hard;
  		this.seconds.innerHTML = total_time;
  	}

  }

  checkStatus(){
  	if(!this.isPlaying && this.time == 0){
  		this.message.innerHTML = `Game Over!! To Play Again Refresh The Page...`;
  		this.startGmae.innerHTML = "Game Over!! To Play Again Refresh The Page...";
  		this.wordInput.value = '';
  		return false;
  	}
  }

  startMatch(){
  	let totalScore = 0;
  	if(this.matchWords()){
       if(this.checkStatus() !== false){
	       this.checkStatus();
	       this.time = this.time + 1
	       this.showWord();
	       this.wordInput.value = '';
	       this.score++

	   }
     totalScore = totalScore + this.score;
  	}

  	this.scoreDisplay.innerHTML = this.score;
  	this.store.addHighscore(totalScore);

  }

 matchWords(){
	if(this.wordInput.value === this.currentWord.innerHTML){
		this.message.innerHTML = 'Correct!!!!';
		return true
	}else{
		this.message.innerHTML = '';
		return false;
	}
 }

 showHighScore(score){
 	this.highScore.innerHTML = score;
 	console.log(score);
 }





}


