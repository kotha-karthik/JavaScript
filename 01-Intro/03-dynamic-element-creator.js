<html>
<head>
<script>
	function remove()
	{
		doc=document.getElementById("container");
		doc.removeChild(this);
	}

	function sayHello()
	{
		alert(this.textContent);
	}
    function createhtags() {
        doc = document.getElementById("container");
        for (i = 1; i <= 6; i++) {   
            helement = document.createElement("h" + i);
            helement.textContent = "hello";
			//helement.onclick=sayHello;
			helement.onclick=remove;
            doc.appendChild(helement);
        }
    }
</script>
</head>
<body>
    <div id="container"></div>
    <input type="button" id="btn" value="ok" name="btn" onclick="createhtags()">
</body>
</html>
