mw.igadget.base = function() {

  function initialize() {
    let $modalCart = $("body").find(".modalContainer");

    $modalCart.DOMNodeAppear(function(){
      $(this).css("top", window.pageYOffset + 15)
    })
  }

  return {
    init: initialize,
    name: "mw-global"
  };
}();
