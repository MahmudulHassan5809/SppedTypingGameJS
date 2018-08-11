


const word = new RandomWord();

const ui = new Ui()





//Get Weather on Dom Load
document.addEventListener('DOMContentLoaded', function(){setTimeout(getRandomWords, 5000)});

let wordsArray = []




function getRandomWords(){
	document.getElementById('startGmae').innerHTML = "Game Start...Play";
     word.getRandomWords()
	.then(results => {pushWordstoArray(results) ; })
	.catch(err => console.log(err));
}

function pushWordstoArray (results) {
	wordsArray = results.map(function(obj){
		return obj.word;
	});
	console.log(wordsArray);
	ui.init(wordsArray);
}

//Start Matching on Word Input
document.querySelector('#word-input').addEventListener('input',function(){
	ui.startMatch();
})




