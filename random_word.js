class RandomWord  {

   constructor(){

   }

	// Fetch Weather From Api
	async getRandomWords(){
		const response = await fetch(`https://api.datamuse.com/words?sp=??????&max=1000`)
		const responseData = await response.json();
		return responseData;
	}


}
