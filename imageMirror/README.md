    Ti.include('imageMirror.js');
    
	var image = Titanium.UI.createImageView({
		image: 'http://25.media.tumblr.com/tumblr_m0tl9niWM81rrub3eo1_500.png',
		top: 100,
		left: 500,
		width: 250,
		height: 185,
		hires: true
	});
	Titanium.UI.currentWindow.add(image);
	
	var mirror = imageMirror(image, '#FFFFFF');
	Titanium.UI.currentWindow.add(mirror);
