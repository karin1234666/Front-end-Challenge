// Scroll
jQuery(document).ready(function() {
  jQuery('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = jQuery(this.hash);
        target = target.length
          ? target
          : jQuery("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          event.preventDefault();
          jQuery("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              var $target = jQuery(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });
});

// Header underline
jQuery(".menu-item").on("click", function() {
  jQuery(".menu-item").removeClass("active");
  jQuery(this).addClass("active");
});

// News
jQuery('#block-adchallenge-content').attr('id', 'challenge-news');


// Squares
jQuery('<div/>', {
  "class": 'square1',
}).appendTo('.img-right');

jQuery('<div/>', {
  "class": 'square2',
}).appendTo('.img-right');