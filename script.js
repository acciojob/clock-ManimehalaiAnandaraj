//your JS code here. If required.
let timerdisplay=document.getElementById("timer");

let currentdate=new Date();

setInterval(
	function() {
		currentdate=new Date();
		timerdisplay.innerHTML=currentdate.toLocaleString();
		
	},1000
)