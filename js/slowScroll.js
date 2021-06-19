
		// script that scrolls the page's focus depending on which button a user click

		function slowScroll(id) {
			var offset = 0;
			$('html, body').animate({
				scrollTop: $(id).offset().top - offset
			}, 1000);
			return false
        }

		// script that scrolls the page's focus to the header after refreshing

		var body = $("html, body");
			body.stop().animate({scrollTop:0}, 300, 'swing', function() {
		});