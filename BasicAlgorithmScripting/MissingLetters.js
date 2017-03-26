/**
 * Created by chalypeng on 2017/3/26.
 */
function fearNotLetter(str) {
    var theFirstCharCode = str.charCodeAt(0);
    var theLastCharCode = str.charCodeAt(str.length-1);
    if(theLastCharCode-theFirstCharCode+1 === str.length){
        return undefined;
    }

    for(var i=0;i<str.length;i++){
        if(str.charCodeAt(i)!==theFirstCharCode+i){
            return string.fromCharCode(str.charCodeAt(i)-1);
        }
    }

}

console.log(fearNotLetter("abce"));