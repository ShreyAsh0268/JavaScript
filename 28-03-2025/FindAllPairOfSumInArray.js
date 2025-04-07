//Search for all pair with a given sum in an array.

let a=[1,2,3,4,5];
let target=6;

for(var i=0;i<a.length;i++)
{
	for(var j=i+1;j<a.length;j++)
	{
		if(target==(a[i]+a[j]))
		{
			console.log(a[i],a[j]);
		}
	}
}