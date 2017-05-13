
var questions = ["Winterfell is the home of which family?","Tyrion killed which former lover after she betrayed him at his trial?","The Mountain and The Hound are:","Theon Greyjoy was given a new name by Ramsay Bolton. What was it?","Ser Loras Tyrell was known as:","The warrior eunuchs are known as the:"]

var ans       = ["Stark","Shae","brothers","Reek","Knight of Flowers","Unsullied"]

var choices   = {
					a: ["Tully","Sansa","brothers","Creep","Kingslayer","Unsullied"],
					b: ["Baratheon","Cersei","rival claimants to the Iron Throne","Reek","Knight of Flowers","Varys"],
					c: ["Stark","Arya","on the Small Council","Freak","Littlefinger","Khaleesi"],
					d: ["Tarly","Shae","cousins of the Lannisters","Leak","King of the North","Septons"]
}


var i=0;
var time = 15;
var myVar;
var correct = 0;
var incorrect = 0;

$( ".start" ).click(function() {

	$(".btn-primary").remove();
	writeQuestion(0);
	myVar = setInterval(timer,1000);

});




$(".choice").click(function() {

	if($(this).text()===ans[i]){
		$(".question").html("Correct!");
		$(".choice").empty();
		correct++;
		clearInterval(myVar);
		var delay = setTimeout(resume,3000);
	}
	else{
		$(".question").html("Incorrect! The correct answer was: "+ans[i]);
		$(".choice").empty();
		incorrect++;
		clearInterval(myVar);
		var delay = setTimeout(resume,3000);
	}
});

function writeQuestion(index){
	$(".question").html(questions[index]);
	$(".a").html(choices.a[index]);
	$(".b").html(choices.b[index]);
	$(".c").html(choices.c[index]);
	$(".d").html(choices.d[index]);

	if(i===6){
	$(".question").html("All Done!");
	$(".a").html("Correct: "+correct);
	$(".b").html("Incorrect: "+incorrect);
	var nores = 6-correct-incorrect
	$(".c").html("No response: "+nores);
	i=7;
	$(".timer").html('<button type="button" class="btn btn-primary btn-lg restart" onclick="restart()"">Restart</button>');
	}

}


function timer(){
	if(time>=0){
		$(".timer").html("Time Left: " + time);
	}

	if(time===0){
		$(".question").html("Out of Time! The correct answer was: "+ans[i]);
		$(".choice").empty();
	}

	time--;

	//WAIT 4 SECS BEFORE WRITING NEXT QUESTION
	if(time===-4){
		writeQuestion(++i);
		time=15;
	}
}



function resume(){


		writeQuestion(++i);
		time = 15;
		if(i<=5){
			myVar = setInterval(timer,1000);
		}	

}


function restart(){
	i=0;
	time = 15;
	correct = 0;
	incorrect = 0;
	$(".btn-primary").remove();
	writeQuestion(0);
	myVar = setInterval(timer,1000);

};