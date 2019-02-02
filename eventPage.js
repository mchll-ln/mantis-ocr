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