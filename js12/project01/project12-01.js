"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author:     Isabelle Samaniego
      Date:       December 11, 2022

      Filename: project12-01.js
*/
$(() => {
// 4.
$("li#submenu").mouseover( (e) => {

    $(e.currentTarget).children("ul").show();

})
// 5.
.mouseout( (e) => {

    $(e.currentTarget).children("ul").hide();

})

});
                                                