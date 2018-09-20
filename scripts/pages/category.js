module.exports = function() {

  let $shopByPrice = $body.find(".ShopByPrice");
  let $shopByPriceContent = $shopByPrice.find(".BlockContent");

  $body.addClass("mw-category");

  $shopByPrice.attr("data-ur-set", "toggler");

  $shopByPrice.addClass("mw-menu-filter")
  $shopByPrice.find("h2").addClass("mw-headline-menu").attr("data-ur-toggler-component","button")
  $shopByPriceContent.attr("data-ur-toggler-component","content");
  $shopByPriceContent.find("a").addClass("mw-bar-menu"); 



  };
  