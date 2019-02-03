var contextMenuItem = {
	"id": "describeImageText",
	"title": "Read the image text with Mantis OCR",
	"contexts": ["image"],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(request){
	if (request.menuItemId == "describeImageText" && request) {
		var imgSrc = request.srcUrl;
		alert('success! Url: ' + imgSrc);  // for testing
	}
})

function processText(sourceImageUrl) {
			 var params = {
					 // Request parameters
					 "language": "unk",
					 "detectOrientation ": "true",
			 };

			 $.ajax({
					 url: "https://westus.api.cognitive.microsoft.com/vision/v2.0/ocr?" + $.param(params),
					 beforeSend: function(xhrObj){
							 // Request headers
							 xhrObj.setRequestHeader("Content-Type","application/json");
							 xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","3d4299781c9f4fc394ef6ede4a429325");
					 },
					 type: "POST",
					 // Request body
					 data: '{"url": ' + '"' + sourceImageUrl + '"}',
			 })

			 .done(function(data) {
					 alert("success");
			 })
			 .fail(function() {
					 alert("error");
			 });

			 alert('abcd');
	 };
