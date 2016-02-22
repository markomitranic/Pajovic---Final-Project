var mobileMenu = {
	finished : false,
	init : function() {
		if (this.finished === false) {

			//Calculate width of all menu items and fix the scroll width if needed
			var width = 0;
			$('#sidebar nav ul li').each(function() { width += $(this).outerWidth( true ); });

			//Apply new width to element, with +10px just in case.
			$('#sidebar nav ul').css('width', width + 10);

			//Mark task as done, so that we dont overflow the DOM with junk
			this.finished = true;
		}
	},
	positionCenter : function() {
		//calculate menu position
		//scrollleft
		//.active
	}
}




