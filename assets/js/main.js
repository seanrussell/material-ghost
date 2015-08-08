var themeSetup = {
	responsiveIframe: function() {
		$('.post').fitVids();
	},
	init:function(){
		themeSetup.responsiveIframe();
	}
}

$(document).ready(function(){
	themeSetup.init();
});