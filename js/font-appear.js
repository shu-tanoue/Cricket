var sX_syncerModal = 0;
var sY_syncerModal = 0;

$(function() {
  //　Click event that causes a modal window to appear
  $("#modal-open").click(function() {
    //　Prevents overlays from being activated multiple times due to keyboard operation, etc.
    $(this).blur(); // Remove focus from the button
    if ($("#modal-overlay")[0]) return false; //Do not launch new modal window (prevention measure 1)
    //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//Delete the current modal window and start it again (prevention measure 2)

    // Record scroll position
    var dElm = document.documentElement,
      dBody = document.body;
    sX_syncerModal = dElm.scrollLeft || dBody.scrollLeft; // X coordinate of current position
    sY_syncerModal = dElm.scrollTop || dBody.scrollTop; // Y coordinate of current positio

    // Make overlay appear
    $("body").append('<div id="modal-overlay"></div>');
    $("#modal-overlay").fadeIn("slow");

    // Center content
    centeringModalSyncer();

    // Fade in content
    $("#modal-content").fadeIn("slow");

    // If you click [# modal-overlay] or [# modal-close] ...
    $("#modal-overlay,#modal-close")
      .unbind()
      .click(function() {
        // Return scroll position
        window.scrollTo(sX_syncerModal, sY_syncerModal);

        // After fading out [# modal-content] and [# modal-overlay] ...
        $("#modal-content,#modal-overlay").fadeOut("slow", function() {
          // Remove [# modal-overlay]
          $("#modal-overlay").remove();
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
    var cw = $("#modal-content").outerWidth();
    var ch = $("#modal-content").outerHeight();

    // Perform centering
    //$("#modal-content").css({
    //  left: (w - cw) / 2 + "px",
    //  top: (h - ch) / 2 + "px"
    //});
  }
});
/*-----------------------------------------------------------------------------*/
