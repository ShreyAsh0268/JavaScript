//Find the majority element in an array (element that appears more than ⌊ n/2 ⌋ times).

let a=[1,2,1,3,1,4];


for(var i=0;i<a.length;i++)
{let count=1;
	for(var j=i+1;j<a.length;j++)
	{
		if(a[i]==a[j])
		{
			count++;
		}
	}
	if(count>=a.length/2)
	{
		console.log(a[i]);
	}
}