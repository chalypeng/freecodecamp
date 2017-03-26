/**
 * Created by chalypeng on 2017/3/25.
 */
function chunk(arr, size) {
    // Break it up.
    if(size<arr.length){
        var finalArr = [];
        var count;
        count = Math.floor(arr.length/size);
        for(var i=0;i<count;i++){
            finalArr.push(arr.slice(i*size,(i+1)*size));
        }
        if(arr.length%size>0){
            finalArr.push(arr.slice(count*size,arr.length));
        }
        return finalArr;
    }
    return arr;
}


console.log(chunk(["a", "b", "c"], 3));