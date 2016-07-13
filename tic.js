var oneName="Player1";//prompt("PLayer 1 name");
var twoName="Player2"//prompt("Player 2 name");



var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
var i=0;




var isOne=true;
var isTwo=false;

var oneturn=document.querySelector(".oneturn");
oneturn.textContent=oneName;
var twoturn=document.querySelector(".twoturn");
twoturn.textContent=twoName;
oneturn.classList.toggle("turndiv");


//Button 1
function pressOne(){

			if(isOne)
			{
				this.textContent="x";
				a=1;

	

				if((b===1&&c===1)||(d===1&&g===1)||(e===1&&i===1))
				{
					alert(oneName+" wins");
				}
				else{

					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}

				isOne=false;
				isTwo=true;
				twoturn.classList.toggle("turndiv");
				oneturn.classList.toggle("turndiv");
    		}

    		else if(isTwo)
    		{
				this.textContent="0";
				a=2;

				
				
				if((b===2&&c===2)||(d===2&&g===2)||(e===2&&i===2))
				{
					alert(twoName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
						alert("Draw");
					}

				}





				isTwo=false;
				isOne=true;
				oneturn.classList.toggle("turndiv");
				twoturn.classList.toggle("turndiv");
    		}


    	this.removeEventListener("click",pressOne,false);
	}


document.querySelector(".manone .one").addEventListener("click",pressOne);


//Button 2
function pressTwo(){

			if(isOne)
			{
				this.textContent="x";
				b=1;

				
				
				if((a===1&&c===1)||(e===1&&h===1))
				{
					alert(oneName+" wins");
				}
				else{

					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isOne=false;
				isTwo=true;
				twoturn.classList.toggle("turndiv");
				oneturn.classList.toggle("turndiv");
    		}

    		else if(isTwo)
    		{
				this.textContent="0";
				b=2;

				
				
				if((a===2&&c===2)||(e===2&&h===2))
				{
					alert(twoName+" wins");
				}
				else{

					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isTwo=false;
				isOne=true;
				oneturn.classList.toggle("turndiv");
				twoturn.classList.toggle("turndiv");
    		}


    	this.removeEventListener("click",pressTwo,false);
	}


document.querySelector(".manone .two").addEventListener("click",pressTwo);

	

//Button 3
function pressThree(){

			if(isOne)
			{
				this.textContent="x";
				c=1;

				
				
				if((a===1&&b===1)||(f===1&&i===1)||(e===1&&g===1))
				{
					alert(oneName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}

				isOne=false;
				isTwo=true;
				twoturn.classList.toggle("turndiv");
				oneturn.classList.toggle("turndiv");
    		}

    		else if(isTwo)
    		{
				this.textContent="0";
				c=2;

				

				
				if((a===2&&b===2)||(f===2&&i===2)||(e===2&&g===2))
				{
					alert(twoName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}
				isTwo=false;
				isOne=true;
				oneturn.classList.toggle("turndiv");
				twoturn.classList.toggle("turndiv");
    		}


    	this.removeEventListener("click",pressThree,false);
	}


document.querySelector(".manone .three").addEventListener("click",pressThree);


//button 4 
function pressFour(){

			if(isOne)
			{
				this.textContent="x";
				d=1;

				
				

				if((a===1&&g===1)||(e===1&&f===1))
				{
					alert(oneName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isOne=false;
				isTwo=true;
				twoturn.classList.toggle("turndiv");
				oneturn.classList.toggle("turndiv");
    		}

    		else if(isTwo)
    		{
				this.textContent="0";
				d=2;

				
				
				if((a===2&&g===2)||(e===2&&f===2))
				{
					alert(twoName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isTwo=false;
				isOne=true;
				oneturn.classList.toggle("turndiv");
				twoturn.classList.toggle("turndiv");
    		}


    	this.removeEventListener("click",pressFour,false);
	}


document.querySelector(".mantwo .one").addEventListener("click",pressFour);


//button 5
function pressFive(){

			if(isOne)
			{
				this.textContent="x";
				e=1;

				

				
				
				if((a===1&&i===1)||(b===1&&h===1)||(d===1&&f===1))
				{
					alert(oneName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isOne=false;
				isTwo=true;
				twoturn.classList.toggle("turndiv");
				oneturn.classList.toggle("turndiv");
    		}

    		else if(isTwo)
    		{
				this.textContent="0";
				e=2;

				

				
				if((a===2&&i===2)||(b===2&&h===2)||(d===2&&f===2))
				{
					alert(twoName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isTwo=false;
				isOne=true;
				oneturn.classList.toggle("turndiv");
				twoturn.classList.toggle("turndiv");
    		}


    	this.removeEventListener("click",pressFive,false);
	}


document.querySelector(".mantwo .two").addEventListener("click",pressFive);



//button 6
function pressSix(){

			if(isOne)
			{
				this.textContent="x";
				f=1;

				

				
				if((d===1&&e===1)||(c===1&&i===1))
				{
					alert(oneName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isOne=false;
				isTwo=true;
				twoturn.classList.toggle("turndiv");
				oneturn.classList.toggle("turndiv");
    		}

    		else if(isTwo)
    		{
				this.textContent="0";
				f=2;

				

				
				if((d===2&&e===2)||(c===2&&i===2))
				{
					alert(twoName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isTwo=false;
				isOne=true;
				oneturn.classList.toggle("turndiv");
				twoturn.classList.toggle("turndiv");
    		}


    	this.removeEventListener("click",pressSix,false);
	}


document.querySelector(".mantwo .three").addEventListener("click",pressSix);


//button 7
function pressSeven(){

			if(isOne)
			{
				this.textContent="x";
				g=1;

				

				
				if((a===1&&d===1)||(e===1&&c===1)||(h===1&&i===1))
				{
					alert(oneName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isOne=false;
				isTwo=true;
				twoturn.classList.toggle("turndiv");
				oneturn.classList.toggle("turndiv");
    		}

    		else if(isTwo)
    		{
				this.textContent="0";
				g=2;

				
				
				if((a===2&&d===2)||(e===2&&c===2)||(h===2&&i===2))
				{
					alert(twoName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isTwo=false;
				isOne=true;
				oneturn.classList.toggle("turndiv");
				twoturn.classList.toggle("turndiv");
    		}


    	this.removeEventListener("click",pressSeven,false);
	}


document.querySelector(".manthree .one").addEventListener("click",pressSeven);




//button 8
function pressEight(){

			if(isOne)
			{
				this.textContent="x";
				h=1;

				

				
				if((b===1&&e===1)||(g===1&&i===1))
				{
					alert(oneName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isOne=false;
				isTwo=true;
				twoturn.classList.toggle("turndiv");
				oneturn.classList.toggle("turndiv");
    		}

    		else if(isTwo)
    		{
				this.textContent="0";
				h=2;

				

				
				if((b===2&&e===2)||(g===2&&i===2))
				{
					alert(twoName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isTwo=false;
				isOne=true;
				oneturn.classList.toggle("turndiv");
				twoturn.classList.toggle("turndiv");
    		}


    	this.removeEventListener("click",pressEight,false);
	}


document.querySelector(".manthree .two").addEventListener("click",pressEight);



//button 9
function pressNine(){

			if(isOne)
			{
				this.textContent="x";
				i=1;

				

				
				if((g===1&&h===1)||(c===1&&f===1)||(a===1&&e===1))
				{
					alert(oneName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isOne=false;
				isTwo=true;
				twoturn.classList.toggle("turndiv");
				oneturn.classList.toggle("turndiv");
    		}

    		else if(isTwo)
    		{
				this.textContent="0";
				i=2;

				

				
				if((g===2&&h===2)||(c===2&&f===2)||(a===2&&e===2))
				{
					alert(twoName+" wins");
				}
				else{
					if(a!==0&&b!==0&&c!==0&&d!==0&&e!==0&&f!==0&&g!==0&&h!==0&&i!==0){
					alert("Draw");
					}
				}	
				isTwo=false;
				isOne=true;
				oneturn.classList.toggle("turndiv");
				twoturn.classList.toggle("turndiv");
    		}


    	this.removeEventListener("click",pressNine,false);
	}


document.querySelector(".manthree .three").addEventListener("click",pressNine);
