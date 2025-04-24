"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: natasha
      Date:   

      Filename: project05-03.js
*/

var sourceDoc = document.getElementById("source_doc");
var toc = document.getElementById("toc");
var headingCount = 1;
const heading = "H2";

for (let n = sourceDoc.firstElementChild; n!=null; n=n.nextElementSibling){
      if(n.nodeName === heading){
            var anchor = document.createElement("a");
            anchor.setAttribute("name", "doclink" + headingCount);
            n.insertBefore(anchor, n.firstChild);

            var listItem = document.createElement("li");
            var link = document.createElement("a");

            link.textContent = n.textContent;
            listItem.appendChild(link);

            //link.setAttribute("textContent", n.textContent);
            link.setAttribute("href", "#doclink"+ headingCount);

            toc.appendChild(listItem);
            headingCount++;
      }
}
