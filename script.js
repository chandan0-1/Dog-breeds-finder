

function fetchImage(){
	var xhrRequest = new XMLHttpRequest();

	xhrRequest.onload = function(){
		console.log(xhrRequest.response);
		var resposeJSON = JSON.parse(xhrRequest.response);
		var imgurl = resposeJSON.message;

		$('#image').attr("src",imgurl);
	}

	xhrRequest.open('get',"https://dog.ceo/api/breeds/image/random" );
	xhrRequest.send();
}






$('#button').click(fetchImage);