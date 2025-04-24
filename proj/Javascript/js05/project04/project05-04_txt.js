"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: natasha
      Date:   

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

for(var i=0; i<phrases.length;i++){
      phrases[i].onclick = function(){
            var phrase = document.createElement("h1");
            phrase.textContent = this.textContent
            var footnote = document.createElement("p");
            footnote.textContent = footnote[i];
            footnote.style.fontStyle = "italic";
            footnote.style.fontSize = "1.2em";

            var closeButton = document.createElement("input");
            closeButton.setAttribute("type", "button");
            closeButton.setAttribute("value", "Close Footnote");
            closeButton.style.design = "block";
            closeButton.style.margin = "10px auto";

            var popup = window.open("","footnote","width=300,height=200,top=100,left=100" );
            popup.document.body.style.backgroundColor = "ivory";
            popup.document.body.style.fontSize = "16px";
            popup.document.body.style.padding = "10px";
            popup.document.body.appendChild(phrase);
            popup.document.body.appendChild(footnote);
            popup.document.body.appendChild(closeButton);
            
            closeButton.onclick = function(){
                  popup.close();
            }
      }
}


