//数组去重方法
function unque(arr){
    for(var i=0,result=[],hash=[];i<arr.length;i++){
        if(hash[arr[i]]===undefined){
            result[result.length]=arr[i];
            hash[arr[i]]=true;
        }
    }
    return result;
}