let a=[1,2,1,3,2,4,5,4];

for(var i=0;i<a.length;i++)
{
	let count=0;
	for(var j=0;j<a.length;j++)
	{
		if(a[i]==a[j])
		{
			count++;
		}
	}
		if(count==1)
		{
			console.log(a[i]);
		}
}