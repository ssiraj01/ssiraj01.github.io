Welcome to Saira Siraj's project page!
Please do bookmark my page to keep an eye on my new projects. 


<br>
<br>
<br>

<html>
<body>
<p>How many minutes do you have?</p>
<input id="seconds" value="" />
<button onclick="countdown()">Click here</button>
<p id="timer"></p>
<script>
function countdown() {
   var seconds = document.getElementById("seconds").value; 
   function tick() {
         seconds = seconds - 1;
	timer.innerHTML = seconds;
	setTimeout(tick, 1000);
	    if(seconds == -1){
	        alert("Time's up!");
	    }
        } 
    tick();
}
</script>
</body>
</html>
