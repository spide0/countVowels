function countVowels(str) {
    //"arnab"
    let count=0;
  //here i is the index, str[i] is the character at that index
    for(let i=0; i<str.length; i++) {
        if(str[i]==="a" ||str[i]==="e" ||str[i]==="i" || str[i]==="o" || str[i]==="u" )
        {
         count++;
        }
    }
    console.log(count);
}