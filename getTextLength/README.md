    Ti.include('getTextLength.js');
    
    var myButton1 = Titanium.UI.createButton({
    	title: 'Test',
    	top: 0,
    	left: 0,
    	height: 20
    });
    Titanium.UI.currentWindow.add(myButton1);
    
    var myButton2 = Titanium.UI.createButton({
    	title: 'Test',
    	top: 20,
    	left: 0,
    	height: 20,
    	width: getTextLength('Test')
    });
    Titanium.UI.currentWindow.add(myButton2);