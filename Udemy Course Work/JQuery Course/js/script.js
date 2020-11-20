// Element Selectors:
// CSS:
$(function(){
// $('p').css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('.red-box').css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('#list').css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('input[type= text]').css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('h2, p, input').css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('li:last').css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('p:first').css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('li:even').css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('li:odd').css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('input:text').css('background-color', 'rgba(180, 180, 30, 0.8)');
});

// METHODS OF TRANSVERSAL:
$(function(){
  // .find() goes though all that matches the selector and applies changes to all levels of children that are available.
// $('#list').find('li').css('background-color', 'rgba(180, 180, 30, 0.8)');

// .children() will only look for and apply changes to the direct children of the element selected not the grandchildren. Sub items is not selected.
// $('#list').children('li').css('background-color', 'rgba(180, 180, 30, 0.8)');

// Going up the Hiearchy: .parents()     This goes through all of the parents of he selected element and their parents. Filter by being very specific in the selector '()'. If you want a direct specific parent reove the s in parents
// $('#list').parents('body').css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('#list').parent('div').css('background-color', 'rgba(180, 180, 30, 0.8)');

// .siblings() will select all of the sibling elements. That is, all elements having the same parents and who are on the saame level. But NOT the element itself.
// $('#list').siblings('').css('background-color', 'rgba(180, 180, 30, 0.8)');
// You can be specific with the sibling selector also. This works for 'headers' by putting ':header'.
// $('#list').siblings(':header').css('background-color', 'rgba(180, 180, 30, 0.8)');

// These ones do not have a heiarchy but they highlight the element just before or after the selected class or ID... previous and next:
// $('#list').prev().css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('#list').next().css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('.headers').next().css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('form').children('input:password').css('background-color', 'rgba(180, 180, 30, 0.8)');
})


// METHODS FOR FILTERING:
$(function(){ 
  // This will filter through the 'even' elements on the html index. Principles apply for the above selectors as well:
// $('#list').find('li').filter(':even').css('background-color', 'rgba(180, 180, 30, 0.8)');

// This will filter by function:
// based on your selector JQuery willset the first item in that selector as an index at 0. It will number that index based on how many elements is in the previously selected. In the case below I am entering a boolean into the filter function and it will return each item that is true. But you need to be specific. For example, modelar(%) 3(increments) === 0 will only return the true statements in increments of 3 starting with index 0. Any element that does not fit into this parameter is disgarded.:
// $('li').filter(function(index){
// return index % 3 === 0;
// }).css('background-color', 'rgba(180, 180, 30, 0.8)');

// $('li').filter(function(index){
//   return index % 3 === 2;
//   }).css('background-color', 'rgba(180, 180, 30, 0.8)');

// This reduces your set of matched items to only the first and/or last element in the selected.
// $('li').first().css('background-color', 'rgba(180, 180, 30, 0.8)');
// $('li').last().css('background-color', 'rgba(180, 180, 30, 0.8)');

// This filters any element in any position needed: .eq() means equals, then specify the index that you need. 
// $('li').eq(4).css('background-color', 'rgba(180, 180, 30, 0.8)');
// This can work even when passing in a negative number in the index. JQuery will read from back to front when using negative numbers in index.
// $('li').eq(-2).css('background-color', 'rgba(180, 180, 30, 0.8)');

// This will specify what you do NOT want. Meaning it will grab everything accept the item listed in the selector. You can pass in a function or other element specifics.:
// $('li').not(':first').css('background-color', 'rgba(180, 180, 30, 0.8)');
// This can also target specifics within an ID. Below this grabbed the main items in the '#list' but not the 'ul li' sub items.
// $('li').not('#list ul li').css('background-color', 'rgba(180, 180, 30, 0.8)');
// A function can also be used to futher target.
// $('li').not(function(index){
// return index % 3 === 2
// }).css('background-color', 'rgba(180, 180, 30, 0.8)');
});


// MANIPULATING THE DOM 1- INSERTING, REPLACING AND REMOVING ELEMENTS:
// What is the DOM? Document Object Model
// This is a tree representation of your website. From the root element (sometimes HTML) come children such as "body" and "head". Both of those elements can have multiple children as well. It also defines the API for the JavaScript. This mean that JavaScript knows how to access and manipulate each of these objects in each element. DOM also has much to do with how html pages are rendered. 

$(function(){




});









// getJSON with JQuery:
// What is AJAX?  AJAX is an acronym standing for Asynchronous JavaScript and XML and this technology helps us to load data from the server without a browser page refresh. Ways to do this is by: $.get(),    $.post(), $.ajax(), $.getJSON...


$(function(){




});

























































// Animations:
$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);
});







