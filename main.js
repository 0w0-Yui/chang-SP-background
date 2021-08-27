// ==UserScript==
// @name        change SP background
// @namespace   Violentmonkey Scripts
// @match       https://www.pottersschool.org/student/
// @grant       none
// @version     1.0
// @author      Yui
// @description 2021/8/27 上午7:26:23
// ==/UserScript==

var displayname = true;
var bg_url = "https://images2.alphacoders.com/724/724343.jpg"

document.body.onload = function(){
  if (displayname)
    {
      var div = document.getElementById("myDisplayname");  
      div.style.display = "none";
    }
}

document.body.style.backgroundImage = "url('" + bg_url + "')";

