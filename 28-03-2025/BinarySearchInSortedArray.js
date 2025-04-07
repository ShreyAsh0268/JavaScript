let a = [1, 3, 5, 7, 9, 11];

let target = 7;

low=0;
heigh=a.length-1;

mid=(low+high)/2;

if(low>heigh){
    console.log("not found");
}
else if(a[mid]==target){
    console.log("found");
}