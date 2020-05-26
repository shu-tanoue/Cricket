var sX_syncerModal = 0;
var sY_syncerModal = 0;

$(function() {
  $(".slider").slick({
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true
  });
  //　Click event that causes a modal window to appear
  $("#modal-open1").click(function() {
    //　Prevents overlays from being activated multiple times due to keyboard operation, etc.
    $(this).blur(); // Remove focus from the button
    if ($("#modal-overlay1")[0]) return false; //Do not launch new modal window (prevention measure 1)
    //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//Delete the current modal window and start it again (prevention measure 2)

    // Record scroll position
    var dElm = document.documentElement,
      dBody = document.body;
    sX_syncerModal = dElm.scrollLeft || dBody.scrollLeft; // X coordinate of current position
    sY_syncerModal = dElm.scrollTop || dBody.scrollTop; // Y coordinate of current positio

    // Make overlay appear
    $("body").append('<div id="modal-overlay1"></div>');
    $("#modal-overlay1").fadeIn("slow");

    // Center content
    centeringModalSyncer();

    // Fade in content
    $("#modal-content1").addClass("active");
    $("#modal-content1").fadeIn("slow");

    // If you click [# modal-overlay] or [# modal-close] ...
    $("#modal-overlay1,#modal-close1")
      .unbind()
      .click(function() {
        // Return scroll position
        window.scrollTo(sX_syncerModal, sY_syncerModal);

        // After fading out [# modal-content] and [# modal-overlay] ...
        $("#modal-content1,#modal-overlay1").fadeOut("slow", function() {
          // Remove [# modal-overlay]
          $("#modal-overlay1").remove();
        });
      });
  });

  // When resized, execute the centering function [centeringModalSyncer ()]
  $(window).resize(centeringModalSyncer);

  // Function to perform centering
  function centeringModalSyncer() {
    // Get screen (window) width and height
    var w = $(window).width();
    var h = $(window).height();

    // Get the width and height of content (# modal-content)
    // Depending on the version of jQuery, when the argument [{margin: true}] is specified, a problem occurs.
    //		var cw = $("#modal-content").outerWidth({margin:true});
    //		var ch = $("#modal-content").outerHeight({margin:true});
    var cw = $("#modal-content1").outerWidth();
    var ch = $("#modal-content1").outerHeight();

    // Perform centering
    //$("#modal-content").css({
    //  left: (w - cw) / 2 + "px",
    //  top: (h - ch) / 2 + "px"
    //});
  }
});
