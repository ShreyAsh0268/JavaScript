//Find the union of two arrays.

let a=[1,2,5,6];
let b=[1,2,4,3];

let c=[];

for(var i=0;i<a.length;i++)
{
	c[i]=a[i];
}
for(var i=0;i<b.length;i++){
	let count=0;
	for(var j=0;j<a.length;j++){
		if(b[i]==a[j])
		{
			count++;
		}
	}
	if(count==0)
	{
		c.push(b[i]);
	}
}

for(var i=0;i<c.length;i++){
	for(var j=i+1;j<c.length;j++){
		if(c[i]>c[j]){
			let temp = c[i];
			c[i]=c[j];
			c[j]=temp;
		}
	}
}
console.log(c);