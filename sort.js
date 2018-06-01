function bubbleSort(arr){
    for(var r=1;r<arr.length;r++){
        for(var i=0;i<arr.length-r;i++){
            if(arr[i]>arr[i+1]){
                arr[i]=[arr[i+1],arr[i+1]=arr[i]][0];
            }
        }
    }
}