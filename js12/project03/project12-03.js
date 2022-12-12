"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author:     Isabelle Samaniego
      Date:       December 11, 2022

      Filename: project12-03.js
*/

// 2.
$("article > h2").click(function (e) {
    // 3.
    let heading = $(e.target);
    // list variable referencing the next sibling element of the heading variable
    let list = heading.next();
    // headingImage variable referencing the children of the heading variable whose tag name is “img”
    let headingImage = $(heading).children("img");
  
    // 4.
    $(list).slideToggle(500);
  
    // 5.
    let src = $(headingImage).attr("src");
    
    // If src attribute value is equal to “plus.pg”, apply the attr() method to headingImage to set the src attribute value to “minus.png”;
    if (src == "plus.png") {
      $(headingImage).attr("src", "minus.png");
    } else {
      // otherwise set the src attribute value to “plus.png”.
      $(headingImage).attr("src", "plus.png");
    }
    
  });
  
