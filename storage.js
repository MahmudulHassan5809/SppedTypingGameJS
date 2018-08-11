class Store{

  addHighscore(score){
  	let highScore = localStorage.getItem('highScore');
  	if (score > highScore) {
  		localStorage.setItem('highScore', score);
  	}

  }

  getHighScore(){
  	let highScore = localStorage.getItem('highScore');
  	const ui = new Ui();
  	ui.showHighScore(highScore);
  }

}
