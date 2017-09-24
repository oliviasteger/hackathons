var words = [];
var word = "";
var run = 0;
var counter = 0;
var definition = "";
function randomWords() {
  var requestStr = "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=4&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
	$.ajax({
		type: "GET",
		url: requestStr,
		success: (response) => {
			for(var x = 0; x < 4; x++){
				words.push(response[x].word);
			}
		}
	})
}
function getWords(){
	randomWords();
	getDefinition();
}
function getDefinition(){
	var index = Math.floor((Math.random() * 3) );
	word = words[words.length - 1 - index];
	var url = "http://api.wordnik.com:80/v4/word.json/" + word + "/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
	$.ajax({
		type: "GET",
		url: url,
		success: (response) => {
			definition = response[0].text;
			start(definition);
		}
	})
}

function start(definition){
	$("#question").show();
	$("#start").hide();
	$('#def').empty();

	$("#l1").text(words[words.length - 5]);
	$('#word1').val(words[words.length - 5]);

	$("#l2").text(words[words.length-6]);
	$('#word2').val(words[words.length-6]);

	$("#l3").text(words[words.length-7]);
	$('#word3').val(words[words.length-7]);

	$("#l4").text(words[words.length-8]);
	$('#word4').val(words[words.length-8]);

	$('#def').append(definition);

	if(run <= 1){
		run++;
		getWords();
	}
}


function check(){
	var index = $('input[name="choose"]:checked').val();
  var page = Math.floor((Math.random() * 3) + 1 );
	if(index == word){
		alert("Right! Good job!");
    if(page == 1){
      window.location.href = "craftyhomework2.html";
    }
    else if(page == 2){
      window.location.href = "Crafty3.html";
    }
    else{
      window.location.href = "flappybird.html";
    }
  }
	else{
		alert("Incorrect! Try again.");
	}
}
function speak(word){
	var msg = new SpeechSynthesisUtterance(word);
	var voices = window.speechSynthesis.getVoices();
	msg.volume = 1; // 0 to 1
	msg.rate = 0.8; // 0.1 to 10
	msg.pitch = 1.3; //0 to 2
	window.speechSynthesis.speak(msg);
}
function speach1() {
  speak($("#word1").val());
}
function speach2() {
  speak($("#word2").val());
}
function speach3() {
  speak($("#word3").val());
}
function speach4() {
  speak($("#word4").val());
}
$( document ).ready(function() {
    getWords();
});
