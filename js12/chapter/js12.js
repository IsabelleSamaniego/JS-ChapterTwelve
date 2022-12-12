"use strict";

/*  JavaScript 7th Edition
    Chapter 12
    Chapter case

    Bonsai Expressions FAQ 
    Author:     Isabelle Samaniego
    Date:       December 11, 2022

    Filename: js12.js
*/

// Run once the page is loaded and ready
$( () => {

    // Animate the h1 heading
    $("section > h1").css({
        fontSize: 0,
        opacity: 0
    })
    // Add the following animate() method to increase the font size 
    // and opacity of the h1 heading over a 0.6-second interval
    .animate({
        fontSize: "2.3em",
        opacity: 1
    }, 600);

    // Reveal the questions when the page opens
    $("dl#faq")
    .hide()
    // Add the following effect() method to “unclip” 
    // the list of questions horizontally over a 0.6-second time interval
    .effect("clip", {
        mode: "show",
        direction: "horizontal"
    }, 600);

    // Add click events to each question in the FAQ
    $("dl#faq dt").click( e => {

        // Alternate between hiding and showing the answer
        let question = $(e.target);
        let answer = $(question.next());

        $(question).toggleClass("hiddenAnswer");

        if ($(question).hasClass("hiddenAnswer")) {
            $(answer).slideUp(600);
        } else {
            $(answer).slideDown(600);
        }

    });

});