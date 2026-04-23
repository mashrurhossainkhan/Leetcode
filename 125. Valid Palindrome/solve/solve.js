function isNotAlphabet(char) {
    return !/[a-zA-Z0-9]/.test(char);
}

var isPalindrome = function(s) {
    const smallText = s.toLowerCase();
    let s1 = "";
   
    for (var i = 0 ; i< smallText.length ; i++){
        if(!isNotAlphabet(smallText[i])){
            s1 += smallText[i];
        }
    }

    let left = 0;
    let right = s1.length -1
    while(left < right){
        
        if(s1[left] == s1[right]){
            left+=1;
            right-=1;
        }else{
            return false;
             break;
        }
    }

    return true;
};


const s = "A man a plan a canal Panama"
console.log(isPalindrome(s))