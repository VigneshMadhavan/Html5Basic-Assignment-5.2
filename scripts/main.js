//function to calculate Area for the circle
function check(char){

	var vowels="aeiou";
	
	if(char==null || char.length>1 || char=="" || char==undefined || !isNaN(char)){
		//if null or a number or not a single char then ask for the char again
		askChara("Plese enter single character to check is a vowel or consonant.");
	}else{
		//if it is single char then check
		if(vowels.indexOf(char.toLowerCase())==-1){
			document.write(char+" is consonant.");
		}else{
			
			document.write(char+" is vowel.");
		}
	}
	
}

function askChara(msg){
	var char =prompt(msg);
	//pass the char to check is a vowel or consonant
	check(char);
}
//call the function to check is a vowel or consonant
askChara("Plese enter a character to check is a vowel or consonant.");

