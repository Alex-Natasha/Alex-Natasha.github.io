"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: natasha
      Date:   

      Filename: project06-02.js
*/

window.addEventListener("load", function(){

      var allSelect = document.querySelectorAll('form#govLinks select');
      for(var i = 0; i<allSelect.length; i++){
            allSelect[i].onchange = function(evt) {
                  var linkURL = evt.target.value;
                  var newWin = window.open(linkURL, "_blank");
            }
      }
});

