module.exports = function() {
  console.log("Starting scripts/sections/header.js");

  let $mwHeader = $(tag("header", { class: "mw-header" }));
  let $mwHeaderTop = $(tag("div", {class: "mw-header-top"}));
  let $mwHeaderBottom = $(tag("div", {class: "mw-header-bottom"}));
  let $mwMenuBtn = $(tag("div", {class: "mw-menu-btn sprites-menu"}));
  let $menuIconList = $body.find("#TopMenu ul");
  let $menuIcons = $menuIconList.find("li");
  let $searchForm = $body.find("#SearchForm form");
  let $menu = $body.find("#Menu");
 

  $body.prepend($mwHeader);
  $mwHeader.append($mwHeaderTop);
  $mwHeader.append($mwHeaderBottom);

  // Place elements into header rows
  $mwHeaderTop.append($body.find("#Logo").addClass("mw-logo"));
  $mwHeaderTop.append($menuIconList);
  $mwHeaderBottom.append($mwMenuBtn);
  $mwHeaderBottom.append($searchForm);
            
   // Remove unwanted elements from the menu icons list
   $menuIcons.not(":contains(Account), :contains(Cart)").remove();
   $menuIcons.addClass("mw-header-icon-wrapper");
   $menuIcons.filter(":contains(Account)").find("a").addClass("mw-header-icon sprites-user").text("");
   $menuIcons.filter(":contains(Cart)").find("a").addClass("mw-header-icon sprites-cart").text("");

   // Modify search form
  $searchForm.find("input[type=text]").attr("placeholder", "Search...");
  $searchForm.find("input[type=image]").wrap("div", {class: "mw-search-btn sprites-search"});

    // Move updated menu into header element
    $mwHeader.append($menu);
    $menu.append($body.find("#SideCategoryList"));
    $menu.find("li").addClass("mw-bar-menu");

};
