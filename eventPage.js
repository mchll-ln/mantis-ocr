chrome.contextMenus.create({
	"id": "getImageText",
	"title": "Read the image text",
	"contexts": ["image"]
});
	
chrome.contextMenus.create({
	"id": "getImageContent",
	"title": "Get the image content",
	"contexts": ["image"]
});

chrome.contextMenus.onClicked.addListener(function(request){
	if (!request.srcUrl) {
		alert('Error: Image does not have a valid URL.')
	} else if  (request.menuItemId == "getImageText") {
		var imgSrc = request.srcUrl;
		alert('Success! Get text from url: ' + imgSrc);  // for testing
	} else if (request.menuItemId == "getImageContent") {
		var imgSrc = request.srcUrl;
		alert('Success! Get content from url: ' + imgSrc);
	}
})