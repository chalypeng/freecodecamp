function palindrome(str) {
    // Good luck!
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】    ‘；：”“'。，、？\\-/_]");
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs = rs+str.substr(i, 1).replace(pattern, '');
    }
    var strNoSpSym = rs.replace(' ','').toLowerCase();
    var arrLen = strNoSpSym.length;
    for(var j=0;j<Math.floor(arrLen/2);j++){
        if(strNoSpSym[j]!==strNoSpSym[arrLen-j-1]){
            return false;
        }
    }
    return true;
}
console.log(palindrome("0_0 (: /-\ :) 0-0"));
