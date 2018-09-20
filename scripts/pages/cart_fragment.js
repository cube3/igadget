module.exports = function () {

    let $textarea = $root.find("textarea");
  $textarea.text($textarea.text().replace(/OK, (.*?) was added (.*?)\. What next\?/, "$1 has been added $2"));

}