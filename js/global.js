/** 
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {
	"use strict";

	Drupal.behaviors.ug_theme = {
		attach: function (context, settings) { },
	};

	/*REGISTER ZMIAN*/
	$(".toggle_record-link").click(function (event) {
		event.preventDefault();
		$(".toggle_record-box-two").toggleClass("toggle_record-hide");
		$(".toggle_record-description").toggleClass("toggle_record-active");
	});

	/*SCROLL NAV*/

	$(window).scroll(function () {
		if (window.scrollY > 200) {
			$(".ug_navbar").css({ top: "0", height: "80px" });
			$(".ug_navbar .container").addClass("pos-rel");
			$(".navbar-brand").addClass("m-reset");
			$("#superfish-menu-glowne-toggle").attr("style", "top: -52px !important");

		} else {
			$(".ug_navbar").css({ top: "0", height: "auto" });
			$(".ug_navbar .container").removeClass("pos-rel");
			$(".navbar-brand").removeClass("m-reset");
			$("#superfish-menu-glowne-toggle").attr("style", "top:");

		}
		/*SCROLL top*/

		if ($(this).scrollTop() < 200) {
			$('.top-arrow-btn').fadeOut();
		} else {
			$('.top-arrow-btn').fadeIn();
		}
	});

	/* ADD COLOR TO TABLE WITHOUT THEAD */

	if ($(".field--name-body table").has("thead").length > 0) {
		$(".field--name-body table tbody tr").css({ color: "#141414" });
	}

	/*CHANGE IMAGE ON HOVER*/

	$(".wheel-logo-footer").mouseover(function () {
		$(this).attr('src', $(this).data("hover"));
	}).mouseout(function () {
		$(this).attr('src', $(this).data("src"));
	});

	// Accordion open / close

	$('.closeall').click(function () {
		$('.collapse').collapse('hide');
	});


	$('.openall').click(function () {
	  $('.collapse').collapse('show');
	});

})(jQuery, Drupal);


