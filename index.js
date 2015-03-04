console.log("Ein JS Beispiel");
console.log("Ist abeer nicht fertig");
alert("DO NOT USE IN PRODUCTION");
alert("BAD THINGS WILL HAPPEN");

document.body.style.backgroundColor = "red";

var yes = confirm("Are you sure you don´t wan´t this in production");

if(!yes) {
	window.close();
}