function imageReflection(imageView, bgColor) {

	// create a rotated view with a background gradient on top of a background image
	var reflection = Titanium.UI.createView({
		backgroundImage: imageView.image,
		top: 0,
		left: 0,
		width: imageView.width,
		height: imageView.height,
		backgroundGradient:{type:'linear', colors:[bgColor,'transparent'],startPoint:{x:0,y:imageView.height/2},endPoint:{x:0,y:imageView.height},backFillStart:true},
		transform: Titanium.UI.create2DMatrix().scale(1,-1)
	});

	// crop the image at 50% height
	var cropView = Titanium.UI.createView({
		top: imageView.top+imageView.height,
		left: imageView.left,
		width: imageView.width,
		height: imageView.height/2,
		borderRadius: 0
	});

	cropView.add(reflection);
	return cropView;
}
