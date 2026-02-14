<html>
	<head>
		<title>Arrays</title>
		<script>
			arr=new Array(1,"karthik",90.89);
			console.log(arr);
			
			l=[1,2,3,4,5];
			for(i=0;i<l.length;i++)
			{
				console.log(l[i]);
			}
			l.push(100);
			l.push(200);
			l.push(300);
			// in used of getting the index
			for(i in l)
			{
				console.log(l[i]);
			}
			console.log(l.pop());
			for(i of l)
			{
				console.log(i);
			}
			// this is key based arrays this are internally stored in the key value pair form
			a=[]
			a["one"]=-1;
			a["two"]=-90;
			a["karthik"]="iare";
			console.log(a);
			
			for(i in a)
			{
				console.log(i);
				console.log(a[i]);
			}
		</script>
	</head>
<body>
	<h1>Arrays</h1>
	<h1>Typed Arrays</h1>
</body>
</html>
