// complete the given function

function palindrome(str){
let revStr = str.split(" ").reverse().join(" ");
	if(str === revstr){
		return true;
	}else{
		return false;
	}
}
module.exports = palindrome
