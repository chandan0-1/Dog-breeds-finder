
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

function fetchImage(){
	$.get("https://dog.ceo/api/breeds/image/random",function(data){
		var imgurl = data.message;
		$('#image').attr("src",imgurl);
	})
}




$('#button').click(fetchImage);