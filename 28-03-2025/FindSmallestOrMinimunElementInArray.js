//Find the minimum element in a rotated sorted array.

let a=[4,5,6,1,2,0,3];

for(var i=0;i<a.length;i++)
{
	for(var j=i+1;j<a.length;j++)
	{
		if(a[i]>a[j])
		{
			let temp=a[i];
			a[i]=a[j];
			a[j]=temp;
		}
	}
}
console.log(a[0]);