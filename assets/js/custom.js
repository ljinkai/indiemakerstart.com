function navScroll (id) {
    let fix = 20
    let obj = document.getElementById(id);
    if (obj) {
        let hei = obj.offsetTop;
        window.location.hash=id;
        window.scrollTo(0,hei - fix);
	}

}
(function($) {



// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});

		// block nav item
		var navHash = location.hash;
		navHash = navHash.replace(/#/g, '');
        navScroll(navHash);
        jQuery(".block-nav-item[data-anchor='" + navHash + "']").addClass("block-nav-item-active")

        jQuery(".block-nav-item").bind("click", function (event) {
			var obj = jQuery(this);
			jQuery(".block-nav-item-active").removeClass("block-nav-item-active")
			obj.addClass("block-nav-item-active")
			var id = jQuery(this).data("anchor")
            navScroll(id)
        })

	});



		
})(jQuery);