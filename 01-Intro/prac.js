<!DOCTYPE html>
<html>
<head>
    <title>10-02-2026</title>
    <script>
        function add() {
            con= document.getElementById('container');
			for(i=1;i<=6;i++){
			con.innerHTML+='<h'+i+'>Hello!!</h'+i+'>';
			}
            
        }
    </script>
</head>
<body>
    <div id="container"></div>
    <input type="button" id="btn" value="btn" onclick="add()">
</body>
</html>
