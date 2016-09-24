var x=0;
var y=0;
var i=0;
var j=0;
var k=0;

	function first(firs){
		x=firs;
		// window.alert(x);
	}
    function second(firs){
		y=firs;
		// window.alert(y);
	}
   function third(firs){
		i=firs;
		// window.alert(i);
	}
   function fourth(firs){
		j=firs;
		// window.alert(j);
	}
	function fifth(firs){
		k=firs;
		// window.alert(k);
	}

	function sum(x,y,i,j,k) {
		
		total=Number(x)+Number(y)+Number(i)+Number(j)+Number(k);
		//document.getElementById("total").innerHTML = " <span style='font-size:100%' > $"+total+"</span>"
		window.alert('Your total is:'+total);
	}
