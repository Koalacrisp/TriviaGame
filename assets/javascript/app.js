$(document).ready(function(){

	score = 0
	wrong = 0

	function titlescreen(){
		$(".time").hide();
		$(".questions_1").hide();
		$(".questions_2").hide();
		$(".submit").hide();
		score = 0
		wrong = 0
		document.getElementById("q1").reset();
		document.getElementById("q2").reset(); 
		document.getElementById("q3").reset(); 
		document.getElementById("q4").reset(); 
		document.getElementById("q5").reset(); 
		document.getElementById("q6").reset(); 
		document.getElementById("q7").reset(); 
		document.getElementById("q8").reset(); 
		document.getElementById("q9").reset(); 
		document.getElementById("q10").reset();  
	}

	titlescreen();

	var clock = {

		time: 180,

		count: function(){
			clock.time--;
		},

		newTime: function(){
			$(".timer").html(clock.time);
		}
	}

	$("#play").click(function(){
		$(".play_button").hide();
		$(".time").show();
		$(".questions_1").show();
		$(".questions_2").show();
		$(".submit").show();
		$(".timer").html(clock.time);
		intervalId = setInterval(clock.newTime, 1000);
		intervalId2 = setInterval(clock.count, 1000);
	});

	$("#submit").click(function(){
		$(".time").hide();
		$(".questions_1").hide();
		$(".questions_2").hide();
		$(".submit").hide();

		if($("input[name=q1]:checked").val()="correct"){
			score++;
		}
		if($("input[name=q2]:checked").val()="correct"){
			score++
		}
		if($("input[name=q3]:checked").val()="correct"){
			score++
		}
		if($("input[name=q4]:checked").val()="correct"){
			score++
		}
		if($("input[name=q5]:checked").val()="correct"){
			score++
		}
		if($("input[name=q6]:checked").val()="correct"){
			score++
		}
		if($("input[name=q7]:checked").val()="correct"){
			score++
		}
		if($("input[name=q8]:checked").val()="correct"){
			score++
		}
		if($("input[name=q9]:checked").val()="correct"){
			score++
		}
		if($("input[name=q10]:checked").val()="correct"){
			score++
		}
		console.log(score);
	});
});