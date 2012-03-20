function imageMirror(imageView, bgColor, factor) {
	var mirror = Titanium.UI.createImageView({
		backgroundImage: imageView.image,
		top: 0,
		left: 0,
		width: imageView.width,
		height: imageView.height,
		backgroundGradient:{type:'linear', colors:[bgColor,'transparent'],startPoint:{x:0,y:imageView.height/2},endPoint:{x:0,y:imageView.height},backFillStart:true},
		transform: Titanium.UI.create2DMatrix().scale(1,-1),
		hires: imageView.hires
	});
	var cropView = Titanium.UI.createView({
		top: imageView.top+imageView.height,
		left: imageView.left,
		width: imageView.width,
		height: imageView.height/2,
		borderRadius: 0
	});
	cropView.add(mirror);
	return cropView;
}
