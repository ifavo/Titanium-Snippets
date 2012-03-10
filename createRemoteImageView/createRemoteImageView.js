/**
 * download remote images in a single thread
 *
 * @category   Titanium
 * @package    Snippets
 * @copyright  Copyright (c) 2011 Mario Micklisch
 * @license    http://framework.zend.com/license/new-bsd     New BSD License
 */
 
 
 function createRemoteImageView(options) {
	// check for cached local file
	var imageUrl = options.image;
	var cacheFilename = imageUrl.replace(/[^a-zA-Z0-9\.]/ig, '_');
	var cacheFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, cacheFilename);

	// create the basic object without image url
	delete(options.image);
	var remoteImage = Titanium.UI.createImageView(options);

	// check for cached version
	if (cacheFile.exists() && cacheFile.modificationTimestamp().getTime() > (new Date().getTime()-Ti.App.cacheLifetime) ) {
		remoteImage.image = cacheFile.nativePath;
	}
	else {
		if ( options.defaultImage ) {
			remoteImage.image = options.defaultImage;
		}

		Ti.App.addEventListener("dl_" + cacheFilename, function (e) {
			remoteImage.image = e.filename;
		});
		Ti.App.fireEvent("dl_image", {imageUrl: imageUrl, eventId: "dl_" + cacheFilename});
	}

	return remoteImage;
}


/**
 * for easier use:
 * Ti.UI.createRemoteImageView
 * Titamium.UI.createRemoteImageView
 * points to createRemoteImageView
 */
Ti.UI.createRemoteImageView = Titanium.UI.createRemoteImageView = createRemoteImageView;


/**
 * create imageview listener on first include
 */
if ( !Ti.App.hasRemoteImageViewListener ) {
	Ti.App.cacheLifetime = 86400;
	Ti.App.addEventListener("dl_image", function (e) {
		var imageUrl = e.imageUrl;
		var eventId = e.eventId;
		var cacheFilename = imageUrl.replace(/[^a-zA-Z0-9\.]/ig, '_');
		var cacheFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, cacheFilename);
	
		// create http client to download the image
		var xhr = Ti.Network.createHTTPClient();
		xhr.setTimeout(Ti.App.requestTimeout);
		// … and assign the local image after successful download		
		xhr.onload = function() {
			if (xhr.status == 200) {
				try {
					// cache the file
					cacheFile.write(xhr.responseData);
				
					// assign the image
					Ti.App.fireEvent(eventId, {filename: cacheFile.nativePath});
				}
				catch (e) {
					// handle error case
				}
			};
		};
	
		// cache overwrite
		if ( imageUrl.indexOf('?') > 0 ) {
			imageUrl += '&' + new Date().getTime();
		}
		else {
			imageUrl += '?' + new Date().getTime();
		}
		
		// send the request
		xhr.open('GET', imageUrl);
		xhr.send();
	
	});
}