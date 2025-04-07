let a = [1,2,5,3,7,4,6];

for(var i=0;i<a.length;i++){
    if(i<a[i-1] && i<a[i+1]){
        console.log(a[i]);
    }
}