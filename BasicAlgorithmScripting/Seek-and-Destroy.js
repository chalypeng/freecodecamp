/**
 * Created by chalypeng on 2017/3/26.
 */
function destroyer(arr) {
    // Remove all the values
    var args = [];
    var args1 = Array.from(arguments);
    for(var i=1;i<arguments.length;i++){
        args.push(arguments[i])
    }
    return arr.filter(function(val){
        return args.indexOf(val)===-1;
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));