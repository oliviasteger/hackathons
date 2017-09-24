function highlite(){
var href = window.location.href;
var selection = window.getSelection();

	var selection=window.getSelection();
	var an =selection.anchorNode;
	var ao = selection.anchorOffset;
	var fn =selection.focusNode;
	var fo = selection.focusOffset;
	var range = selection.getRangeAt(0);
	window.something = range;
	window.an = an;
	window.fn=fn;
	console.log(range);

	var selected = range.extractContents();
	var highlited = document.createElement("SPAN");
	highlited.className = "highlited";
	highlited.setAttribute("id", "getting");
	highlited.appendChild(selected);
	range.insertNode(highlited);
	var parent = $("#getting").parent();
	window.parent=parent;
	var ptag = parent.prop("tagName");
	var pindex = parent.index();
	$("#getting").removeAttr("id");

	var newParent = parent.html();

	$.ajax({
		url:"https://data.sparkfun.com/input/JxJZjqg2Y8IrOY7GNZzy?private_key=gzq7nvZAobFo0xzNWEJX&parent="+newParent+"&index="+pindex+"&tag="+ptag+"&url="+href,
		success: function(){			console.log(selection);
		}
	})
	$.ajax({
		url:
		"https://data.sparkfun.com/output/JxJZjqg2Y8IrOY7GNZzy.json",
		success: function(result){
			for(var i=result.length-1;i>=0;i--){
			if(result[i].url==href){
			var index =result[i].index;
			index-=1;
			console.log(result[i].parent);
				var pnode = document.getElementsByTagName(result[i].tag).item(index);
				window.pnode=pnode;
				pnode.innerHTML=result[i].parent;

				}
			}
		}
	})
}
  $("body").prepend("<a href='http://inspectorelement.github.io/stuy-hacks/totalaesthetic.html'><button>Instructions</button></a>");
$("body").prepend("<a href='http://inspectorelement.github.io/stuy-hacks/notepad.html'><button>See your notepad</button></a>");
 $("body").prepend("<button id='hb' onclick='highlite()'>HIGHLIGHT</button>");

var script3 = document.createElement("script");
script3.src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js";
$("head").append(script3);
var script = document.createElement("script");
script.src = chrome.extension.getURL('script.js');
$("head").append(script);
