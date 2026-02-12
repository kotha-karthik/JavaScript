<html>
<head>
<script>
	function clickme()
	{
		alert(this.value);
	}
    function createButtons(howmany) {
        doc = document.getElementById("container");
        for (i = 0; i < howmany; i++) {
            ele = document.createElement("input");
            ele.type = "button";
            ele.value = i;
			ele.onclick=clickme;
            doc.appendChild(ele);
        }
    }
</script>
</head>
<body>
    <div id="container"></div>
    <input type="button" id="btn" value="Click" name="btn" onclick="createButtons(5)">
</body>
</html>
