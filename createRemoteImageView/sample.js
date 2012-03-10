	Ti.include('createRemoteImageView.js');

	var remoteImage = Ti.UI.createRemoteImageView({
		image: 'http://www.google.de/logos/classicplus.png',
		// defaultImage: 'images/default.png', // default images are also handled
		hires: true,
		width: 275,
		height: 95,
		top: 0,
		left: 0
	});
	Ti.UI.currentWindow.add(remoteImage);