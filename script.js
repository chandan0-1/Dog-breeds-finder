
// -------------Method - 1
// function fetchImage(){
// 	var xhrRequest = new XMLHttpRequest();

// 	xhrRequest.onload = function(){
// 		console.log(xhrRequest.response);
// 		var resposeJSON = JSON.parse(xhrRequest.response);
// 		var imgurl = resposeJSON.message;

// 		$('#image').attr("src",imgurl);
// 	}

// 	xhrRequest.open('get',"https://dog.ceo/api/breeds/image/random" );
// 	xhrRequest.send();
// }

                            // Method 2

// $.ajax({
// 	url:"https://dog.ceo/api/breeds/image/random",
// 	method:"get",
// 	success:function(data){

// 		var imgurl = data.message;
// 		$('#image').attr("src",imgurl);
// 	}
// })

						// Method 3

// For initial loading 
$.get(`https://dog.ceo/api/breeds/image/random`,function(data){
		var imgurl = data.message;
		$('#image').attr("src",imgurl);
	})



// Getting all breed list 
$.get("https://dog.ceo/api/breeds/list/all", function(data){
	var list = data.message
	for (let v in list){
		$("#drp-down").append(`<option>${v}</option>`)
	}
})


function fetchImage(){
	var Val = $("#drp-down").val();
	console.log(Val)
	$.get(`https://dog.ceo/api/breed/${Val}/images/random`,function(data){
		var imgurl = data.message;
		$('#image').attr("src",imgurl);
	})
}

$('#button').click(fetchImage);