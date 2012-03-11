/**
 * @category   Titanium
 * @package    Snippets
 * @copyright  Copyright (c) 2011 Mario Micklisch
 * @license    http://framework.zend.com/license/new-bsd     New BSD License
 */
 
/**
 * calculate and return the length of a string in screen units
 * @param string text
 * @param object options
 * @return int 
 */
function getTextLength(text, options) {
	// create label with the given options
	var lengthCalculation = Titanium.UI.createLabel(options);
	
	// make the label width auto and apply the text
	lengthCalculation.width = 'auto';
	lengthCalculation.text = text;
	
	// the width is now an integer value we can return
	return lengthCalculation.width;
}