Closures
closure is the scope created when a function is declared that allows the function to access and manipulate variables that are external to this function
var outer = 'I am outer'; //Define a value in global scope
function outerFn() { //Declare a a function in global scope
console.log(outer);
}
outerFn(); //prints - I am outer

We are declaring a variable in the global scope and declaring a function in the global scope. In the function, we are able to access the variable declared in the global scopeâ€”outer.

var outer = 'Outer'; //Variable declared in global scope
var copy;
function outerFn(){ //Function declared in global scope
var inner = 'Inner'; //Variable has function scope only, can not be
//accessed from outside
function innerFn(){ //Inner function within Outer function,
//both global context and outer
//context are available hence can access
//'outer' and 'inner'
console.log(outer);
console.log(inner);
}
copy=innerFn; //Store reference to inner function,
//because 'copy' itself is declared
//in global context, it will be available
//outside also
}
outerFn();
copy(); //Cant invoke innerFn() directly but can invoke via a
//variable declared in global scope
In innerFn(), the outer variable is available as it's part of the global context. We're executing the inner function after the outer function has been executed via copying a reference to the function to a global reference variable, copy.

When innerFn() executes, the scope in outerFn() is gone and not visible at the point at which we're invoking the function through the copy variable.
When

we declared innerFn() in outerFn(), not only was the function declaration defined, but a closure was also created that encompasses not only the function declaration,
but also all the variables that are in scope at the point of the declaration. When innerFn() executes, even if it's executed after the scope in which it was declared goes away, it has access to the original scope in which it was declared through its closure.

_.each([1, 2, 3], print);
The each() function we saw in the preceding example iterates over a list of elements, yielding each to an iteratee function in turn. Each invocation of iteratee is called with three arguments (element, index, and list). In the preceding example,
the each() function iterates over the array [1,2,3], and for each element in the array, the print function is called with the array element as the parameter.
This is a convenient alternative to the traditional looping mechanism to access all the elements in an array.
The range() function creates lists of integers. The start value, if omitted, defaults to 0 and step defaults to 1. If you'd like a negative range, use a negative step:
The map() function produces a new array of values by mapping each value in the list through a transformation function. Consider the following example:
var _ = require('underscore');
console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
//[3,6,9]
The filter() function iterates through the entire list and returns an array of all the elements that pass the condition. Take a look at the following example:
var _ = require('underscore');
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){
return num % 2 == 0; });
console.log(evens);
The contains() function is a useful little function that returns true if the value is present in the list; otherwise, returns false:
var _ = require('underscore');
console.log(_.contains([1, 2, 3], 3));

Maps
A map is a simple key-value map and can iterate its
elements in the order of their insertion.
var founders = new Map();
founders.set("facebook", "mark");
founders.set("google", "larry");
console.log(founders.size); // 2
console.log(founders.get("twitter")); // undefined
console.log(founders.has("google")); // false
for (var [key, value] of founders) {
console.log(key + " founded by " + value);
}
set method sets the maps key value pair, size is size of the map
get method parameter is the key in the map. HAS tests for existence of a key

Sets
Sets are collections of values and can be iterated in the
order of the insertion of their elements. An important characteristic about sets is that a value can occur only once in a set
var mySet = new Set();
mySet.add(1);
mySet.add("Howdy");
mySet.add("foo");
console.log(mySet.has(1)); // true
mySet.delete("foo");
console.log(mySet.size); // 2
for (let item of mySet) console.log(item);

JavaScript objects
an object contains properties, defined as a key-value pair. A property key (name) can be a string and the value can be any valid JavaScript value. You can create objects using object literals.
A property's name can be any string or an empty string. You can omit quotes around
the property name if the name is a legal JavaScript name. So quotes are required around first-name but are optional around firstname. Commas are used to separate the pairs. You can nest objects as follows:
var author = {
firstname : "Douglas",
lastname : "Crockford",
book : {
title:"JavaScript- The Good Parts",
pages:"172"
}
};
Properties of an object can be accessed by using two notations: the array-like notation and dot notation
var author = {
firstname : "Douglas",
lastname : "Crockford",
book : {
title:"JavaScript- The Good Parts",
pages:"172"
}
};
console.log(author['firstname']); //Douglas
console.log(author.lastname); //Crockford
console.log(author.book.title);
A useful trick is to use the || operator to fill in default values in this case:
console.log(author.age || "No Age Found");
You can update values of an object by assigning a new value to the property:
author.book.pages = 190;
console.log(author.book.pages);
Methods are properties of an object that can hold function values as follows:
var meetingRoom = {};
meetingRoom.book = function(roomId){
console.log("booked meeting room -"+roomId);
}
meetingRoom.book("VL")

Prototypes
there is one default property for almost all objects, called a prototype.
When an object does not have a requested property, JavaScript goes to its prototype to look for it.
Prototypes are used as a way to define properties and functions that will be applied to instances of objects.
The prototype's properties eventually become properties of the instantiated objects.
Prototypes in JavaScript are used to write a classical style object-oriented code and mimic classical inheritance.
var author = {};
author.firstname = 'Douglas';
author.lastname = 'Crockford';
we are creating an empty object and assigning
individual properties.
If you know OOP already, you will immediately see that there is no encapsulation and the usual class structure.
JavaScript provides a way around this. You can use the new operator to instantiate an object via constructors
//A function that returns nothing and creates nothing
function Player() {}
//Add a function to the prototype property of the function
Player.prototype.usesBat = function() {
return true;
}
//We call player() as a function and prove that nothing happens
var crazyBob = Player();
if(crazyBob === undefined){
console.log("CrazyBob is not defined");
}
We invoke it in two different ways. The first call of the function is as a normal function and second call is as a constructorâ€”note the use of the new() operator in this call
Once the function is defined, we add a usesBat() method to it.
When this function is called as a normal function, the object is not instantiated and we see undefined assigned to crazyBob.
However, when we call this function with the new operator,
we get a fully instantiated object, swingJay.

Instance properties are the properties that are part of the object instance itself, as shown in the following example:
function Player() {
this.isAvailable = function() {
return "Instance method says - he is hired";
};
}
Player.prototype.isAvailable = function() {
return "Prototype method says - he is Not hired";
};
var crazyBob = new Player();
console.log(crazyBob.isAvailable());
The isAvailable() function defined in the Player() function is called an instance of Player.
This means that apart from attaching properties via the prototype, you can use the this keyword to initialize properties in a constructor.
When we have the same functions defined as an instance property and also as a prototype, the instance property takes precedence

DOM
The browser renders an HTML document into a web page by creating a Document Object Model, or DOM. The DOM is a tree structure of objects with the HTML document as the root object.
The root can have several children, and those children can have several children.
jQuery doesnâ€™t replace JavaScript; it enhances it by providing an abstract layer to perform certain common tasks, such as finding elements or values, changing attributes and properties of elements, and interacting with browser events.
Accessing HTML Event Handlers
So after you add your JavaScript to the web page, how do you get it to execute? The answer is that you tie it to the browser events. Each time a page or element is loaded, the user moves or clicks the mouse or types a character, an HTML event is triggered.
Each supported event is an attribute of the object that is receiving the event. If you set the attribute value to a JavaScript function, the browser will execute your function when the event is triggered.
<!DOCTYPE html>
<html>
<head>
<title>jQuery Version</title>
<meta charset='utf-8' />
<script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script>
function writeIt(){
document.write('jQuery Version ' + $().jquery + ' loaded.');
}
</script>
</head>
<body onload='writeIt()'>
</body>
</html>
To have your script execute when the document is loaded, tie the writeIt() function to the <body> onload event
The function writeIt() is executed when the body loads and writes the jQuery version to the browser.

Accessing the DOM
Using Traditional JavaScript to Access the DOM
JavaScript uses the global document object to access elements in the web page. The simplest method of accessing an element is to directly refer to it by id. For example, if you have a paragraph with the id='question', you can access it via the following JavaScript getElementById() function:
var q = document.getElementById('question');...<p id='question'>Which method to you prefer?</p>
Using jQuery Selectors to Access HTML Elements
Accessing HTML elements is one of jQueryâ€™s biggest strengths. jQuery uses selectors that are very similar to CSS selectors to access one or more elements in the DOM; hence the name jQuery. jQuery returns back either a single element or an array of jQuerified objects. jQuerified means that additional jQuery functionality has been added to the DOM object, allowing for much easier manipulation.
The syntax for using jQuery selectors is $(selector).action(), where selector is replaced by a valid selector and actionis replaced by a jQuerified action attached to the DOM element(s).
For example, the following command finds all paragraph elements in the HTML document and sets the CSS font-weightproperty to bold:
$('p').css('font-weight', 'bold');
<!DOCTYPE html>
<html>
<head>
<title>DOM Changes</title>
<meta charset='utf-8' />
<script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script>
function writeIt(){
$('#heading').css('font-weight', 'bold').html('jQuery');
var q = document.getElementById('question');
q.innerHTML = 'I Prefer jQuery!';
}
</script>
</head>
<body onload='writeIt()'>
<p id='heading'>jQuery or JavaScript</p>
<p id='question'>Which method do you prefer?</p>
</body>
</html>

Accessing DOM Objects from JavaScript
To be able to manipulate HTML elements from JavaScript, you first need to gain access to the DOM object. You can use a few methods to accomplish that.
Finding DOM Objects by ID
The simplest is to find an HTML element using the value of the id attribute using the getElementById(id) function. getElementById(id) searches the DOM for an object with a matching id attribute.
var containerObj = document.getElementById('container');
Finding DOM Objects by Class Name
You can also search for HTML elements by their class attribute using the getElementsByClassName(class).
This function returns a list of DOM objects with matching class attributes. You can then iterate over that list using a JavaScript loop and apply changes to each DOM element.
var objs = document.getElementsByClassName('myClass');
for (var i=0; i<objs.length; i++)
    {var htmlElement = objs[i]; ...}

Finding DOM Objects by Tag Name
Another way to search for HTML elements is by their HTML tag, using the getElementsByTagName(tag). This function returns a list of DOM objects with matching HTML tags. You can then iterate over that list using a JavaScript loop and apply changes to each DOM element.
var objs = document.getElementsByTagName('div');
for (var i=0; i<objs.length; i++){  var htmlElement = objs[i];...}

HTML File That Loads JavaScript and Attaches an Event Handler to a Button Element to Update the Page
<!DOCTYPE html>
<html>
<head>
<title>DOM Objects</title>
<meta charset='utf-8' />
<script type='text/javascript' src='js/dom_objects.js'></script>
<link rel='stylesheet' type='text/css' href='css/dom_objects.css'>
</head>
<body>
<input id='textIn' type='text'/>
<input type='button' onclick='textChange()' value='Update' /><br>
<span class='heading'></span>
<p id='p1'></p>
<span class='heading'></span>
<p id='p2'></p>
</body>
</html>
 JavaScript File Contains a Function Showing Examples of Accessing Variables by id, tag, and class Attributes
//js/dom_objects.js
function textChange(){
var inElement = document.getElementById('textIn');
var outElements = document.getElementsByTagName('p');
var headingElements = document.getElementsByClassName('heading');
for(var i=0; i<outElements.length; i++){
var outItem = outElements[i];
headingElements[i].innerHTML = 'Updating ' + (i+1) +
' to ' + inElement.value;
outItem.innerHTML = inElement.value;
}
}
dom_objects.css CSS That Styles <p> Elements
p{
font-weight:bold;
font-size:50px;
margin:5px;
color:blue;
}

Using jQuery Selectors
Unlike JavaScript, jQuery enables you to find HTML elements in countless ways using selectors
jQuery selector syntax is very straightforward. After the jQuery library is loaded, use $(selector). For example:
$('#myElement')
Applying Attribute Selectors
Another way to use jQuery selectors is to select HTML elements by their attribute values. It can be a default attribute or one that you have added to the HTML elements. Attribute values are denoted in the selector syntax by being enclosed in [] brackets.
Applying Content Selectors
Another set of useful jQuery selectors are the content filter selectors. These selectors allow you to select HTML elements based on the content inside the HTML element.
Applying Form Selectors
An extremely useful set of selectors when working with dynamic HTML forms are the form jQuery selectors. These selectors enable you to select elements in the form based on the state of the form element.
Applying Visibility Selectors
f you are using visibility to control the flow and interactions of your web page components, using the visibility jQuery selectors makes it simple to select the HTML elements that are hidden or visible

Using jQuery to Access DOM Objects
<!DOCTYPE html>
<html>
<head>
<title>jQuery Selectors</title>
<meta charset='utf-8' />
<script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type='text/javascript' src='js/jquery_selectors.js'></script>
<link rel='stylesheet' type='text/css' href='css/jquery_selectors.css'>
</head>
<body>
<span onclick='setEven()'>Even</span>
<span onclick='setOdd()'>Odd</span>
<span onclick='setFirst4()'>First 4</span>
<p class='label'>Planets</p>
<ul>
<li>Poseidon</li>
<li>Ares</li>
<li>Apollo</li>
<li>Hermes</li>
<li>Nike</li>
<li>Nemesis</li>
<li>Zeus</li>
<li>Hades</li>
</ul>
</body>
</html>
function setEven(){
$('li, span').css('font-weight','');
var $evenItems = $('li:even');
$evenItems.css('font-weight','bold');
$('span:contains(Even)').css('font-weight','bold');
$('.label').html('Even');
}
function setOdd(){
$('li, span').css('font-weight','');
var $oddItems = $('li:odd');
$oddItems.css('font-weight','bold');
$('span:contains(Odd)').css('font-weight','bold');
$('.label').html('Odd');
}
function setFirst4(){
$('li, span').css('font-weight','');
var $first4 = $('li:lt(4)');
$first4.css('font-weight','bold');
$('span:contains(\'First 4\')').css('font-weight','bold');
$('.label').html('First 4');
}
span{
padding:2px;
border:3px ridge blue;
color:white;
background:blue;
cursor:pointer;
}
.label{
font-size:25px;
margin:10px;
}

Chaining jQuery Object Operations
One of the great things about jQuery objects is that you can chain multiple jQuery operations together into a single statement. Each consecutive statement will operate on the results of the previous operation in the chain.
$('div#content').children('p:first').css('font-weight','bold').children('span'). css('color','red');
The code first finds the <div> element with id='content' and then finds the first <p> element inside and changes the font-weight to bold. Then it finds the <span> elements inside the <p> and sets the color to red:
Traversing the DOM Using jQuery Objects
DOM traversal enables you to select elements based on their relationship to other elements.
jQuery objects provide an incredible set of methods that allow you to traverse the DOM in almost innumerable ways by allowing you to use the current selection of DOM elements in the jQuery object to select other sets of DOM elements in the tree.
Using .each()
The .each(function) method is one of the most important jQuery object methods because it allows you to traverse all elements in the jQuery set and perform actions on each of them individually. This is different from just applying the same action to all items in the query.
$('p').each(function (idx){
$(this).html('This is paragraph ' + idx);
});
It iterates through all paragraph elements and sets the content, including the index number of the element: Notice that idx is passed in as an index number; 0 for the first <p> element, 1 for the second, and so on. Also note that this was converted to a jQuery object using $(this) so that the .html() method could be called.
Using .map()
The .map(function) method also iterates through each element in the jQuery object set. Although very similar to .each(), there is one big difference, which is that .each() will return the same jQuery object, but .map() will return a new jQuery object with the values returned by each iteration.
var liValues = $('li').map(function (idx){
return $(this).html();
}).get().join(',');
Notice that for each iteration, the function returns the HTML content in the <li> element. You call .get() to return a JavaScript array version of the new jQuery object returned by .map() and then call .join(',') on that array to build the comma-separated string.

HTML File That Loads jQuery and JavaScript
a .ready() function that will be executed when the page is loaded:
$(document).ready(function (){
. . .
});
add a click event handler to the first button. The function uses a simple .each() function to iterate through the <p> elements; it gets the string, splits it into a color and size, and then sets the font-size and color CSS properties:
$('input:eq(0)').click(function (){
$('p').each(function(){
var parts = $(this).html().split(' ');
$(this).css({'font-size':parts[1]+'px', color:parts[0]});
});
});
add a click event handler to the second button. The function uses a simple .map() function to iterate through the <p> elements; it gets the string and splits it into a color and size. This time, however, the function returns a JavaScript object with a color and size attribute. The .get() at the end converts the results of the .map() to a JavaScript array named items:
$('input:eq(1)').click(function (){
var items = $('p').map(function(){
var parts = $(this).html().split(' ');
return {color:parts[0], size:parts[1]};
}).get();
}
});
for loop that iterates through items and creates a new <span> element with the color and size based on the values read from the <p> elements:
for (var idx in items){
var item = items[idx];
var span = $('<span>' + item.color + '</span>');
var size = item.size*5;
span.css({'background-color':item.color, 'font-size': item.size+'px',
width:size, height:size});
$('div').append(span);
}
//jquery.html
<!DOCTYPE html>
<html>
<head>
<title>DOM Manipulation</title>
<meta charset='utf-8' />
<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type='text/javascript' src='js/dom_manipulation.js'></script>
<link rel='stylesheet' type='text/css' href='css/dom_manipulation.css'>
</head>
<body>
<input type='button' value='.each()'>
<input type='button' value='.map()'>
<p>red 10</p>
<p>orange 15</p>
<p>yellow 20</p>
<p>green 25</p>
<p>blue 30</p>
<p>indigo 35</p>
<p>violet 40</p>
<div></div>
</body>
</html>
//dom_manipulation.js
$(document).ready(function (){
$('input:eq(0)').click(function (){
$('p').each(function(){
var parts = $(this).html().split(' ');
$(this).css({'font-size':parts[1]+'px', color:parts[0]});
});
});
$('input:eq(1)').click(function (){
var items = $('p').map(function(){
var parts = $(this).html().split(' ');
return {color:parts[0], size:parts[1]};
}).get();
for (var idx in items){
var item = items[idx];
var span = $('<span>' + item.color + '</span>');
var size = item.size*5;
span.css({'background-color':item.color, 'font-size': item.size+'px',
width:size, height:size});
$('div').append(span);
}
});
});
//dom_manipulation.css
p{margin:0px; padding:0px;}
span{
display:inline-block;
color: white;
text-align:center;
}

HTML File That Loads jQuery and JavaScript and Attaches Event Handler Elements to Provide User Interaction
<!DOCTYPE html>
<html>
<head>
<title>Traversing the DOM</title>
<meta charset='utf-8' />
<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type='text/javascript' src='js/traverse_dom.js'></script>
<link rel='stylesheet' type='text/css' href='css/traverse_dom.css'>
</head>
<body>
<p>How satisfied are you 1-5</p>
<div>
<label>Quality</label>
<input type='text' onkeyup='update()'></input>
<span></span><span></span><span></span><span></span><span></span>
</div>
<div><label>Taste</label>
<input type='text' onkeyup='update()'></input>
<span></span><span></span><span></span><span></span><span></span>
</div>
<div>
<label>Server</label>
<input type='text' onkeyup='update()'></input>
<span></span><span></span><span></span><span></span><span></span>
</div>
</body>
</html>
JavaScript Code That Handles the Key Up Event and Uses jQuery to Manipulate the Color of the <span> Elements Based on the Input Value
function update(){
$('span').css('background-color','lightgrey');
$('div').each(function(i){
var $input = $(this).children('input:first');
var $value = $input.val();
var filter = 'span:lt(' + $value + ')';
$input.siblings(filter).css('background-color','blue');
})
}
//traverse_dom.css
span{
display:inline-block;
height:15px;
width:10px;
background-color:lightgrey;
margin:1px;
border-radius:50%;
}
input {
width:20px;
}
label {
display:inline-block;
width:60px;
}

Events
An event is basically anytime anything happens in the browser environment, from a page loading, to a mouse movement or click, to keyboard input, to resizing the window.
The following list describes the important things that happen when a user interacts with the web page or browser window.
1. A physical event happensâ€”A physical event occurs; for example, a user clicks or moves the mouse or presses a key.
2. Events are triggered in the browserâ€”The user interaction results in events being triggered by the web browserâ€”often, multiple events at the same time. For example, when a user types a key on the keyboard, three events are triggered: the keypressed, keydown, and keyup events
3. The browser creates an object for the eventâ€”The web browser creates a separate object for each event that is triggered. The objects contain information about the event that can be used by handlers.
4. User event handlers are calledâ€”User-defined event handlers are called. You have the capability to create handlers in JavaScript that will interact with the event objects and/or page elements to provide interactivity with HTML elements. There are three phases that the event handlers can be acting in.
Capturingâ€”The capturing phase is on the way down to the target HTML
element from the document directly through each of the parent elements. By default, behavior for event handlers for the capturing phase is disabled.
Targetâ€”The target phase occurs when the event is in the HTML element where it was initially triggered.
Bubblingâ€”The bubbling phase is on the way up through each of the parents of the target HTML element, all the way back to the document. By default, the bubbling phase is enabled for events.
5. Browser handlers are calledâ€”In addition to user event handlers, the browser has default handlers that do different things based on the event that was triggered. For example, when the user clicks a link, the browser has an event handler that gets called and navigates to the href location specified in the link.

Event Objects
Event objects get created by the browser when it detects that an event has occurred. If the event handler was defined by AngularJS or jQuery, the event object is converted to a jQuery event object that has a few more attributes and methods. Therefore, you need to be aware of which event object type you are working with.
The event object provides you with additional information about the event, such as what type the event wasâ€”for instance, a click or keypressâ€”which key(s) were pressed, the position of the mouse, what HTML element the event occurred on, and so on
most commonly used event attributes that you will be working with.
Events also provide a few methods that allow you some control into the behavior of the eventâ€”for example, stopping propagation and default web behavior. Table 9.2 describes the important methods on event objects

Using the Page Load Events for Initialization
When the HTML document loads, the JavaScript code specified in the <script> tags will be loaded and executed. Typically, the JavaScript and jQuery logic will be inside functions that will be executed later. However, there will be some code that does initialization work, such as attaching event handlers to page elements or even adding additional elements to existing ones.
The problem is that the HTML element objects may not have been built by the browser at the point when the JavaScript code is loaded. An exception will be thrown if you try to reference the HTML object before it is created, so you need to wait until the page has fully loaded.
That is where the load event is extremely handy. Placing your initialization code inside of an event handler that gets triggered when the page is loaded allows you to be sure all HTML objects have been created and the DOM is fully ready.
Using the JavaScript onload Event
To add initialization code that runs when pages are loaded in JavaScript, create a function in JavaScript that performs the initialization. For example, consider the following JavaScript code that shows a simple skeleton initialization function:
function onloadHandler(){
(initialization code here...)
}
Now you have two options to cause the onloadHandler() to trigger when the page is fully loaded. The first is to attach your initialization code to the onload attribute of the <body> element in the HTML.
<body onload='onloadHandler()>
The second method is to assign it directly to the window object in your JavaScript code. For example:
window.onload = onloadHandler;

Adding Initialization Code in jQuery
In jQuery, initialization code can be triggered and executed at two different times: when the DOM is ready and when the document and its resources have fully loaded.
Using the .ready() jQuery method will trigger the initialization code to run when the DOM is fully ready. All of the DOM objects will have been created and the page will be displayed to users. All page resources, such as images, may not have fully downloaded at this point, however. This is the option that enables you to add interactions and functionality as soon as possible. The following shows an example of using .ready() to attach a simple initialization function:
$(document).ready(function(){
(initialization code here...)
}
Using the .load() jQuery method will trigger the initialization code to run after all page resources have loaded and are rendered to the user.
$(window).load(function(){
(initialization code here...)
}
The .ready() and .load() methods are not compatible with using the onload='...' attribute in the <body> tag. If you are using jQuery, use .ready() or .load(); if not, use the onload attribute.

Assigning Event Handlers in HTML
The most basic methods of adding an event handler to a DOM element is directly in the HTML code. The advantage of this method is that it is simple and easy to see what event handler gets assigned to a particular DOM object.
<div onclick='clickHandler()'>Click Here</div>
This would call the following function when the <div> element is clicked:
function clickHandler(){
$('div').html('clicked');
}
<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<script
src="https://code.jquery.com/jquery-3.5.1.min.js"
integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
crossorigin="anonymous"></script>
<script type="text/javascript">
function clickHandler(){
$('div').html('clicked');
}
</script>
<body>
<div onclick='clickHandler()'>Click Here</div>
</body>
</html>
You can also include the DOM event object as a parameter to the event handler using the event keyword. This allows you to access the event information in event handler; for example:
<div onclick='clickHandler(event)'>Click Here</div>
Would call the following function when the <div> element is clicked and change the text to display the x coordinate of the mouse cursor by reading e.screenX:
function clickHandler(e){
$('div').html('clicked at X postion: ' + e.screenX);
}
<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<script
src="https://code.jquery.com/jquery-3.5.1.min.js"
integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
crossorigin="anonymous"></script>
<script type="text/javascript">
function clickHandler(e){
$('div').html('clicked at X postion: ' + e.screenX);
}
</script>
<body>
<div onclick='clickHandler(event)'>Click Here</div>
</body>
</html>

Adding Event Handlers in JavaScript
You can also add and remove event handlers dynamically to DOM objects inside of JavaScript code. This method provides the advantage that you can dynamically add event handlers at any point in time, not just when the page is loaded. Thus, it enables you to add event listeners to elements created after the page load.
To add an event handler in JavaScript, call addEventListener() on the DOM object. The addEventListener() function takes three parameters: the first is the event type (event types are defined in Table 9.1), the second is the function to call, and the third is a Boolean that specifies true if the handler should be called during the capturing phase and the bubbling phase, or false if the handler should be called only during the bubbling phase.
The trick with using addEventListener() is how to pass custom data into the handler call. One method is to wrap the actual function handler inside of a simple wrapper function that passes the arguments to the event handler.
function clickHandler(e,objId,num,msg){
var obj = document.getElementById(objId);
obj.innerHTML = 'DIV ' + num + ' says ' + msg +' at X postion: ' + e.screenX;
}
document.getElementById('div1').addEventListener('click',
function(e){
clickHandler (e, 'heading', 1, 'yes');
},false);
So here is what is going on in the addEventListener() calls in the preceding code. The event type 'click' is specified, and then a new anonymous function with no name is defined that accepts the event object as the only parameter represented by e. Inside the wrapper function, the actual event handler is called with the custom parameters, including the e variable to pass the event object along. In the example, false is used to indicate that the handler should be called only during the bubbling phase.

Adding Event Handlers to DOM Objects via JavaScript
<!DOCTYPE html>
<html>
<head>
<title>Broken Event</title>
<meta charset='utf-8' />
<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type='text/javascript' src='js/broken_event.js'></script>
<link rel='stylesheet' type='text/css' href='css/broken_event.css'>
</head>
<body onload='onloadHandler()'>
<div id='div1')>Say Yes</div>
<div id='div2')>Say No</div>
<h1 id='heading'></h1>
</body>
</html>
//broken_event.js
function clickHandler(e,objId,num,msg){
var obj = document.getElementById(objId);
obj.innerHTML = 'DIV ' + num + ' says ' + msg +' at X postion: ' + e.screenX;
}
function yesWrapper(e){
clickHandler(e, 'heading', 1, 'yes');
e.target.removeEventListener('click', yesWrapper);
}
function noWrapper(e){
clickHandler(e, 'heading', 2, 'no');
e.target.removeEventListener('click', noWrapper);
}
function onloadHandler(){
document.getElementById('div1').addEventListener('click', yesWrapper, false);
document.getElementById('div2').addEventListener('click', noWrapper, false);
}
//broken_event.css
div{
border-radius:5px;
margin:3px;
padding:5px;
background-color:lightgrey;
font-weight:bold;
display:inline-block;
cursor:pointer;
}
The wrapper functions only accept the event object as argument e. Then they call the clickHandler() function with the appropriate values. You can remove  the event handler from the target object by calling removeEventListener().


Applying Event Handlers in jQuery
The best method of attaching event handlers to DOM elements is using jQuery. Using jQuery objects makes it simple to select different sets of objects and apply the same event handler to all of them at the same time.
In the past, jQuery has had a couple of ways to add and remove event handlers, including bind()/unbind() and delegate()/undelegate().
As of jQuery 1.7, these methods have all been replaced by a simple pair, on() and off(). Event handlers are attached to jQuery objects using the on() method. The on() method can be called in one of the two following formats:
on(events [, selector] [, data], handler(eventObject))
on(events-map [, selector][, data])
eventsâ€”One or more space-separated event types and optional namespaces denoted by dot syntax; for example, 'click', 'mouseenter mouseleave', or 'keydown.myPlugin'.
events-mapâ€”A mapping object in which the string keys specify one or more space-separated event types, and then the values specify handler functions that will be called when the event is triggered; for example, {'click':myhandler} or {'click':function myHandler(e){return true;}}.
selectorâ€”Optional. Selector string that specifies which descendants should also call the event handler when the event is triggered. This replaces the functionality of the delegate() method.
dataâ€”Optional. This can be a number, a string, or an object that will get passed to the handler as the data part of the event as event.data when an event is triggered.
handler(eventObject)â€”If you are not using an events-map, you will need to specify the handler function that will be executed when the event is triggered.
To remove an event handler from elements using jQuery, call the off() method on the jQuery object. The syntax for the off method is one of the following:
off(events [, selector] [, handler(eventObject]))
off(events-map [, selector])
if no handler is specified, the off() function removes all event handlers for the events specified. The following example shows a basic example of adding an event handler to all <div> elements using on() and then removing it using off():
$('div').on('click',clickHandler);
$('div').off('click',clickHandler);

Adding Event Handlers Using jQuery
The event takes only the event object as argument e. It relies on the data portion of the event object to provide the objId of the element that text should be added to. It also uses the e.target.id, e.screenX, and e.data.answer values as part of the message written to the <h1> element:
function clickHandler(e){
$('#'+e.data.objId).html(e.target.id + ' says ' + e.data.answer + ' at X postion: ' + e.screenX);
}
the ready() function will automatically be called when the document has been loaded and is ready:
$(document).ready(function(){
... });
jQuery code that finds the #div1 element and then uses on() to add an event handler. In this example, an events-map object is passed specifying clickHandler() for the click event type. In addition, an object is passed in that it will add the heading and answer attributes to the event object data.
$('#div1').on({'click':clickHandler},
{'objId':'heading', 'answer':'yes'});
Add the following jQuery code that gets the document object and then adds the event handler to the #div2 element. The difference between this method and the oneabove is that we use a selector. By using a selector, you can delete and re-add the #div2 element, and it will still call the event handler. Also notice that, rather than an event-map, you use the events method and add the hander as the final argument:
$(document).on('click',
'#div2',
{'objId':'heading', 'answer':'no'},
clickHandler);
//sample.html
<!DOCTYPE html>
<html>
<head>
<title>Working Events</title>
<meta charset='utf-8' />
<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type='text/javascript' src='js/working_event.js'></script>
<link rel='stylesheet' type='text/css' href='css/working_event.css'>
</head>
<body>
<div id='div1')>Say Yes</div>
<div id='div2')>Say No</div>
<h1 id='heading'></h1>
</body>
</html>
//working_event.js
function clickHandler(e){
$('#'+e.data.objId).html(e.target.id + ' says ' + e.data.answer +
' at X postion: ' + e.screenX);
}
$(document).ready(function(){
$('#div1').on({'click':clickHandler},
{'objId':'heading', 'answer':'yes'});
$(document).on('click','#div2',{'objId':'heading', 'answer':'no'},clickHandler);
});
//working_event.css
div{
border-radius:5px;
margin:3px;
padding:5px;
background-color:lightgrey;
font-weight:bold;
display:inline-block;
cursor:pointer;
}

Dynamically Manipulating Page Elements
Adding Page Elements in JavaScript
There are several ways to add HTML elements dynamically. The most basic is to set the innerHTML attribute of a container object to an HTML string. For example, the following code sets the contents of an existing object to a new <p> element:
domObj.innerHTML = '<p>Paragraph 1 goes here</p>';
domObj.innerHTML += '<p>Paragraph 2 goes here</p>';
The document.createElement(tag) method allows you to create an element object, and the document.createTextNode(text) allows you to create the text node that is part of the element. Then the appendChild(object) method can be called on the DOM objects to append the newly created elements and nodes.
var newP = createElement('p');
var newT = createTextNode('Paragraph 1 goes here');
newP.appendChild(newT);
domObj.appendChild(newP);
var newImg = createElement('img');
newImg.src = 'images/sunset.jpg';
newImg.height = 200;
domObj.appendChild(newImg);
Adding Page Elements in jQuery
You can apply the same innerHTML shortcut in jQuery as in JavaScript by using the .html() method, which will get or set the innerHTML string.
$('#myDiv').html('<p>Paragraph 1 goes here</p>');
The better method is to create a new jQuery object and append it. The following code takes you through that process. The first step is to create the object by passing the tag name or HTML string to the jQuery object $. For example, the following statement creates a new jQuery object with one <p> element in the set:
var newP = $('<p></p>');
Then you can append an element to one or more existing elements using .append(jQueryObject). For example, the following code adds the paragraph to all <div> elements:
$('div').append(newP);
the following code creates a new jQuery object with an <img> element in the set and adds it to all <li> elements:
var newImg = $('<img></img>');
newImg.attr('src', 'images/sunset.jpg');
newImg.height(30);
$('li').append(newImg);

Removing Page Elements
Page elements can be removed in a couple of ways. The most basic way is to get the parent object and then set domObj.innerHTML = '' for DOM objects or call jObj.html('') for jQuery objects. This erases all content inside the parent element and thus removes any child elements.
In JavaScript, you can also call the .removeElement(child) on the parent element. For example, the following code gets an element with id='container' and then removes a child with 
id='paragraphA':
var parent=document.getElementById('container');
var child=document.getElementById('paragraphA');
child.parentNode.removeChild(child);
jQuery provides two methods to remove elements. The first is .empty(), which is equivalent to .html(''). With .empty(), all child elements and text will be removed. 
The second method is .remove([selector]), which removes elements based only on the original query and an optional selector.
If no selector is specified, the elements from the original query are removed. For example, to remove all <div> elements, use the following statement:
$('div').remove()
if a selector is specified, child elements from the original query that match the selector will be removed. For example, to remove the <p> elements inside <div> elements, use the following:
$('div').remove('p');

Replacing Elements in jQuery
You can use three methods to replace elements in jQuery. The simplest is to use .html(). 
The .html() method in jQuery is extremely useful for replacing the contents of an existing element with completely different content. 
The .html() method accepts a string or an object and replaces the content of the set of elements in the jQuery with the object or string. 
For example, the following statement replaces the contents of all <div> elements with a new paragraph:
$('div').html($('<p>New Paragraph</p>'));
Another method of replacing a set of elements in the document with new content is the .replaceAll(target) method. 
This method replaces the set of elements that match the target selector with those of the current set. 
For example, to replace all <div> elements in a parentB with <span> elements from parentA, you could use the following:
$('#parentA span').replaceAll('#parentB div');
The final method is to use .replaceWith(newContent), which does the opposite of .replaceAll(). 
The .replaceWith() function replaces the elements in the current set with the content specified. For example, to replace all <div> elements with a single new blank <div>, you could use the following:
$('div').replaceWith($('<div></div>'));

Inserting Elements in jQuery
You have already seen how to append items to the end; however, what if you want to put content into the middle? That is where the .before() and .after() methods come in handy.
The .after(content [,content]) method allows you to specify an element that should be inserted after each element in the current jQuery objectâ€™s set. 
For example, to insert a new paragraph after the third <p> element in the document, you would use the following:
$('p:eq(2)').after($('<p>New Fourth Paragraph</p>'));
The .before(content [,content]) method allows you to specify an element that should be inserted before each element in the current jQuery objectâ€™s set. 
For example, to insert a new paragraph before the third <p> element in the document, you would use the following:
$('p:eq(2)').before($('<p>New Third Paragraph</p>'));
Changing Classes
Classes are added using the .addClass(className) method. 
For example, to add a class named active to all <span> elements, you could use the following statement:
$('span').addClass('active');
Classes are removed using the .removeClass([className]) method. 
For example, to remove the active class from the <span> elements, you would call the following:
$('span').removeClass('active');
You can also use remove with no className, which removes all classes from the elements. For example, the following statement removes all classes from <p> elements:
$('p').removeClass();
You can also toggle classes on and off using the .toggleClass(className [, switch) method. In addition to the className, you can specify a true or false for the optional switch parameter indicating to turn the class on or off.
$('span').toggleClass('active', true);
$('span').toggleClass('inactive', false);
Toggling Visibility
A simple way of changing the look and feel of web pages is to toggle the visibility of elements.
To display an element using jQuery, call the .show() method on that object. 
Then to hide the element, use the .hide() method. Itâ€™s as simple as that. For example, to hide an object name jObj, use the following statement:
jObj.hide();
To display it again, use the following:
jObj.show();

Dynamically Manipulating Web Page Elements
Line 2 hides the docMenu div, which will be shown only when the user clicks the Docs button. The rest of the lines add click handlers for the buttons:
$(window).load(function(){
$('docMenu').hide();
$('#lessons').click(setLessonNav);
$('#docs').click(setDocNav);
$('#fade').click(fade);
});
The setHourNav() function is called when the user clicks the Lessons button.
This function goes through the process of creating a new <select> element and adding 24 <option> elements to it.
This function goes through the process of creating a new <select> element and adding 40 <option> elements to it.
function setHourNav(){
$('#docMenu').hide();
$('span').removeClass('active');
$('#lessons').addClass('active');
var select = $('<select id=\"lessonSelect\"></select>');
select.change(setHour);
for(var x=1; x<41; x++){
var option = $('<option></option');
option.val(x);
option.html('Lesson '+x);
select.append(option);
}
The second function sets the content paragraph element to match the lesson selected:
$('#content').html('');
$('#content').append(select).append('<br><p></p>');
}
This function shows the Doc menu, removes the active class from all <span> elements, and then adds it to the Docs button to show it is active:
function setDocNav(){
$('#docMenu').show();
$('span').removeClass('active');
$('#docs').addClass('active');
}
This function creates a new <iframe> element that points to the selected doc and then replaces the contents of the #content <div> with that new element:
function setDoc(doc){
var frame = $('<iframe></iframe>');
frame.attr('src', doc);
$('#content').html(frame);
}
This checks the current opacity CSS property and increases it or decreases it to cause the content to fade in and out:
function fade(){
var opacity = $('#content').css('opacity');
if (opacity < 1){
$('#content').css('opacity', 1);}
else {
$('#content').css('opacity', .5); }
}
<!DOCTYPE html>
<html>
<head>
<title>Web Element Manipulation</title>
<meta charset='utf-8' />
<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type='text/javascript' src='js/web_element_manipulation.js'></script>
<link rel='stylesheet' type='text/css' href='css/web_manipulation.css'>
</head>
<body>
<div id='container'>
<div id='menu' class='menu'>
<span id='lessons' class='menuItem'>lessons</span>
<span id='docs' class='menuItem'>Docs</span>
<span id='fade' class='menuItem'>Fade</span>
</div>
<div id='content'></div>
</div>
<div id='docMenu'>
<span onclick = 'setDoc("http://api.jquery.com/")'>jQuery</span>
<span onclick = 'setDoc("http://api.jqueryui.com/")'>jQueryUI</span>
<span onclick = 'setDoc("http://jquerymobile.com/demos/1.4.0/")'>jQueryMobile</span>
</div>
</body>
</html>
$(document).ready(function(){
$('#docMenu').hide();
$('#lessons').click(setHourNav);
$('#docs').click(setDocNav);
$('#fade').click(fade);
});
function setHour(e){
var hour = $('#lessonSelect').val();
$('#content p').html('Lesson '+ hour);
}
function setHourNav(){
$('#docMenu').hide();
$('span').removeClass('active');
$('#lessons').addClass('active');
var select = $('<select id=\"lessonSelect\"></select>');
select.change(setHour);
for(var x=1; x<41; x++){
var option = $('<option></option');
option.val(x);
option.html('Lesson '+x);
select.append(option);
}
$('#content').html('');
$('#content').append(select).append('<br><p></p>');
}
function setDocNav(){
$('#docMenu').show();
$('span').removeClass('active');
$('#docs').addClass('active');
}
function setDoc(doc){
var frame = $('<iframe></iframe>');
frame.attr('src', doc);
$('#content').html(frame);
}
function fade(){
var opacity = $('#content').css('opacity');
if (opacity < 1){
$('#content').css('opacity', 1);}
else {
$('#content').css('opacity', .5); }
}
#banner{
height:100px;
color:white; background-color:blue;
font-size:40px; text-align:center;
}
#menu, #docMenu{
background-color:black;
padding:6px 4px 9px 4px;
}
.menuItem, #docMenu span{
padding:2px;
background-image: -moz-linear-gradient(top, #2244ff 0%, #AACCFF 85%, #0022ff 100%);
background-image: -webkit-linear-gradient(top, #2244ff 0%, #AACCFF 85%, #0022ff 100%);
background-image: -ms-linear-gradient(top, #2244ff 0%, #AACCFF 85%, #0022ff 100%);
font:20px bold;
cursor:pointer;
}
.active{ border:5px groove; }
#docMenu span{ display:block; margin-top:1px; }
#content, iframe{
display:inline-block;
width:700px; height:500px;
}
#container{ width:800px; background-color:#C0C0C0}
#docMenu{
position:fixed; right:60px; top:60px;
}
#content{
padding:2px;
color:blue;
font-size:20px;
}

Interacting with Web Forms in jQuery and JavaScript part 1
Accessing Form Elements
The most important part of interacting with web forms is being able to access the data that they represent. 
Accessing the form data allows you to get and set the values, change selections, and serialize the data to be used in other ways.
Accessing Form Element Attributes
The different elements have many of the same attributes as well as a few unique to the element type. There are several attributes you need to access when implementing dynamic code:
idâ€”Used to query for and identify the form element.
nameâ€”Used in multiple fashions. For radio inputs, this attribute is used to group the elements together so that only one can be selected at a time. For serialization and submission of the form, the name attribute is used as the name given to the elementâ€™s value.
typeâ€”Used to identify the type of <input> element.
valueâ€”Stores a value that is associated with the element. For text elements, the value is displayed in the text box; for buttons, it is the string in the button; for <option> elements, it is the value associated with the option.
checkedâ€”Used to access the selection state of a radio or check box <input> element.
These attributes can be accessed directly in JavaScript by attribute name. For example, to get and set the value attribute, you could use the following:
domObj.value = 'New Text';
var newValue = domObj.value;
In jQuery, there are three ways to get the properties and attributes of the form objects: the .attr(), .prop(), and .val() methods. 
The .attr() method is used to access attributes of the DOM object that correspond to the HTML attributes, such as id, name, and type, whereas the .prop() method is used to access properties of the DOM object that are more JavaScript specific, such as selectedIndex of <select> elements.
jQuery provides the .val() method to access values represented by the form element. 
In jQuery, the value can be accessed using the .val() method of the jQuery object
$('input:text').val('New Text');
var newValue = $('input:text').val();

Accessing Text Input Elements
The most common types of form elements are the textual inputs. 
These elements include the <textarea> element as well as <input> elements with the following type attribute values: color, date, datetime, datetime-local, email, month, number, password, range, search, tel, text, time, url, and week.
the following sets the value of a text input element and then gets the value:
textDomObj.value = 'New Text';
var newValue = textDomObj.value;
In jQuery, the value can be accessed using the .val() method of the jQuery object. For example, the following statements set the value of all <input> elements with type='text' element and then get the value of the first:
$('input:text').val('New Text');
var newValue = $('input:text').val();
Accessing Check Box Inputs
Check box input elements have a Boolean value based on whether the element is checked. The value is accessed by getting the value of the checked attribute. If the element is checked, then checked has a value such as true or 'checked'; otherwise, the value is undefined or false.
You can get and set the state of a check box element from JavaScript in the following manner:
domObj.checked = true;
domObj.checked = false;
var state = domObj.checked;
With jQuery determining if an item is checked, it is a bit different. Remember, in jQuery you may be dealing with multiple check boxes at once, so the safest way to see if the jQuery object represents an object that is checked is the .is() method. For example:
jObj.is(':checked');
To set the state of a jQuery object representing check boxes to checked, you set the checked attribute as follows:
jObj.prop('checked', true);
To set the state of a jQuery object representing check boxes to unchecked is similar.
jObj.prop('checked', false);

Accessing Radio Inputs
Individual radio inputs work the same way as check boxes.
radio inputs are almost always used in groups. The value of a radio input group represents is not Boolean. Instead, it is the value attribute of the currently selected element.
When submitting the form or serializing the form data, the value of the radio input group is automatically populated. 
To get the value of a radio input group in code, you need to first access all the elements in the group, find out which one is selected, and then get the value attribute from that object
var groupValue = $('input[name=myGroup]').filter(':checked').val();
The code first finds the <input> elements with name='myGroup', then filters them down to the ones that are checked, and finally returns the value
Accessing Select Inputs
Select inputs are really container inputs for a series of <option> elements. The value of the select element is the value(s) of the currently selected option(s).
There are a couple of values that you may want when accessing a <select> element. One is the full value represented by the element. To get that value is very simple in jQuery using the .val() method.
<select id='mySelect'>
<option value='one'>One</option>
<option value='two'>Two</option>
<option value='three'>Three</option>
</select>
$('#mySelect').val();
The value returned by the jQuery statement if the first option is selected is the following:
'one'
For multiple selects, the .val() method returns an array of the values instead of a single value. For example, on a multiple select, the value returned by the jQuery statement if the first option is selected is the following:
['one']
On a multiple select, the value returned by the jQuery statement if the first three options are selected is the following:
['one', 'two', 'three']
You can also use the .val() method to set the selected elements. For example, the following statement selects the second element from the list:
['one', 'two', 'three']
$('#mySelect').val('two');

Serializing Form Data
Many of the input elements in a form can be easily serialized into strings or arrays. Serializing the form data makes it easier to deal with when storing it, sending it to a server, or dynamically making adjustments based on a form event.
For a form to be serialized, it needs two things: a name attribute and a value attribute that can be assigned to the name
Converting a Form into a Query String
One of the most common serialization tasks is converting the form data into a serialized array. jQuery makes this a snap with the .serialize() method. The .serialize() method will access the form and convert the name/value pairs into an URL-encoded string ready to be transmitted across the web.
HTML:
<form id='simpleForm'>
<input name='title' type='text' /><br>
<select name='mySelection' multiple size=3 id='mySelect'>
<option value='one'>One</option>
<option value='two'>Two</option>
<option value='three'>Three</option>
</select><br>
<input type='radio' name='gender' value='male'>Male</input>
<input type='radio' name='gender' value='female'>Female</input><br>
</form>
title=Lumber+Jack&mySelection=one&mySelection=two&gender=male
Converting a Form into a JavaScript Object
Another very useful serialization technique is to convert the form data into a JavaScript object that can then be accessed. 
The jQuery .serializeArray() method will do just that. All name/value pairs are converted to an array that can be accessed via your code.
consider the following jQuery statement running on the same form
var formArr = $('#simpleForm').serializeArray();
The resulting value of formArr would be the following:
{0: {'name':'title', 'value':'Lumber Jack'},
1: {'name':'mySelection', 'value':'one'},
2: {'name':'mySelection', 'value':'two'},
3: {'name':'gender', 'value':'male'}};

Accessing and Manipulating Form Element Data
<!DOCTYPE html>
<html>
<head>
<title>Form Manipulation</title>
<meta charset='utf-8' />
<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type='text/javascript' src='js/form_manipulation.js'></script>
<link rel='stylesheet' type='text/css' href='css/form_manipulation.css'>
</head>
<body>
<div><form id='formA'>
<label>Time</label><br>
<input type='image' src='/images/day.png' />
<input type='image' src='/images/night.png' /><br>
<input name='tilte' type='text' /><br>
<textarea name='comments'></textarea><br>
<input type='radio' name='gender' value='male'>Male
<input type='radio' name='gender' value='female'>Female<br>
<input type='checkbox' name='Registered'>Registered<br>
<select size=3 multiple name='count'>
<option>One</option><option>Two</option><option>Three</option>
</select><br>
<input id='resetB' type='button' value='Reset'></input>
<input id='serializeB' type='button' value='Serialize'></input>
</form></div>
<div><form id='formB'>
<label>Destination</label><br>
<input type='image' alt='No Image'></input><br>
<input type='text' /><br>
<textarea></textarea><br>
<input type='radio' name='gender' value='male'>Male</input>
<input type='radio' name='gender' value='female'>Female</input><br>
<input type='checkbox'>Checked</input><br>
<select size=3 multiple>
<option>One</option><option>Two</option><option>Three</option>
</select>
</form></div><br>
<div><label>Serialized</label><p id='serialized'></p></div>
<div><label>Serialized Array</label><span id='serializedA'></span></div>
</body>
</html>
//form_manipulation.js
$(document).ready(function(){
$('#formA input:text').keyup(function(){
$('#formB input:text').val($(this).val());});
$('#formA textarea').keyup(function(){
$('#formB textarea').val($(this).val());});
$('#formA input:radio').change(function(){
var radioB = $('#formB input[value=' +
$(this).val() + ']');
radioB.prop('checked', $(this).is(':checked'));
});
$('#formA input:checkbox').click(function(){
$('#formB input:checkbox').prop('checked',
$(this).prop('checked'));
});
$('#formA select').change(function(){
$('#formB select').val($(this).val());});
$('#formA label').click(function(){
$('#formB label').html(new Date().toUTCString());
});
$('#formA input:image').click(function(e){
$('#formB input:image').attr('src', $(this).attr('src'));
e.preventDefault();
});
$('#resetB').click(function(){
$('#formB').get(0).reset();
$('#formB input:checked').prop('checked', false);
$('#formB input:image').attr('src', '');
});
$('#serializeB').click(function(e){
$('#serialized').html($('#formA').serialize());
$('#serializedA').empty();
var arr = $('#formA').serializeArray();
jQuery.each(arr, function(i, prop){
$('#serializedA').append($('<p>' + prop.name + ' = ' +
prop.value + '</p>'));
});
});
});
//form_manipulation.css
input[type=image] {height:40px; margin-top:15px;}
div{
vertical-align:top; width:300px; height:auto;
display:inline-block; padding:20px; margin:5px;
border-radius:10px; border:1px solid;
}
label{ background-color:blue; color:white;
border-radius:8px; padding:5px; }
p { margin:1px; padding:2px; width: 100%;
border-radius:8px; display:inline-block;
word-wrap: break-word; }
span {width:300px;}
attaches a keyup handler to the text input and textarea so that when it is changed in formA, the value also changes in formB. The values are retrieved and set by .val() method:
$('#formA input:text').keyup(function(){
$('#formB input:text').val($(this).val());});
$('#formA textarea').keyup(function(){
$('#formB textarea').val($(this).val());});
attach a change handler to the radio input group. Notice that to get the same radio input element in the other form, you need to get the input element with the same value using $('#formB input[value=' + $(this).val() + ']');. The value is set using .prop():
$('#formA input:radio').change(function(){
var radioB = $('#formB input[value=' +
$(this).val() + ']');
radioB.prop('checked', $(this).is(':checked'));
});
attach a click handler to the check box in formA and uses the .prop() method to check the same check box in formB when clicked
$('#formA input:checkbox').click(function(){
$('#formB input:checkbox').prop('checked',
$(this).prop('checked'));
});
attach a click handler to the selection in formA so that when the selection changes, the .val() can be called to get the value from formA and set formB:
$('#formA select').change(function(){
$('#formB select').val($(this).val());});
attach a click handler to the image input so that when it is clicked, the src attribute of the image input in formB will be changed to match:
$('#formA input:image').click(function(e){
$('#formB input:image').attr('src', $(this).attr('src'));
e.preventDefault();
});
click handler for the Reset button. 
The handler calls the .reset() function on formB by getting the formB DOM element using $('#formB').get(0). It then removes the check attribute from all checked elements and resets the src attribute of the image element:
$('#resetB').click(function(){
$('#formB').get(0).reset();
$('#formB input:checked').prop('checked', false);
$('#formB input:image').attr('src', '');
});
click handler for the Serialize button. The handler first calls .serialize() on form and writes the string out to the serialized paragraph element. 
Then it retrieves a serialized array by calling .serializeArray(). The jQuery.each() method is used to iterate through the array and append a new paragraph with name and value pair to the serializedA paragraph:
$('#serializeB').click(function(e){
$('#serialized').html($('#formA').serialize());
$('#serializedA').empty();
var arr = $('#formA').serializeArray();
jQuery.each(arr, function(i, prop){
$('#serializedA').append($('<p>' + prop.name + ' = ' +
prop.value + '</p>'));
});
})

Accessing File Inputs
The file input is an interestingly different type of form element. It provides both a button and text box. The button links into the OSâ€™s file browser and the text box displays the path to the file that needs to be uploaded to the web server.
The value attribute of the file input will be the name of the file, so you can access it directly from JavaScript or by using the .val() method in jQuery.
In Chrome and Firefox, the DOM object also provides a files attribute that is an array of file objects representing the files selected by this element. You can access files selected by the user from JavaScript using the following code:
HTML:
<input id=fileSelect type='file' />
javascript
var fileSelector = document.getElementById('fileSelect');
var fileList = fileSelector.files;
for (var i in fileList){
var fileObj = fileList[i];
var fileName = fileObj.name;
var filePath = fileObj.mozFullPath;
var fileSize = fileObj.size;
var fileType = fileObj.type;
}
Each file object contains several attributes that are useful in dynamic programming. Some of the most commonly used are
Accessing Hidden Inputs
A great HTML element to use if you need to supply additional information to the browser from a form is the hidden input. The hidden input will not be displayed with the form; however, it can contain a name and value pair that is submitted, or even just values that you want to store in the form and have accessible during dynamic operations.
HTML:
<input id='invisibleMan' name='InvisibleMan' type='hidden' />
jQuery:
$('#invisibleMan').val('alive');
$('#invisibleMan').data('hairColor', 'clear');
var state = $('#invisibleMan').val();
var state = $('#invisibleMan').data('hairColor');

Accessing Server-Side Data via JavaScript and jQuery AJAX Request
Clarifying AJAX Versus Page Requests
The first step is to define the difference between AJAX and normal page linking request. You are already familiar with page links; when you click a link, a new web page appears. Often that is the case even if all the controls, tables, graphics, and so on are the same, but only some data has changed. In the case of form submission, none of the data changes, but the web page must still be reloaded from the server.
AJAX is completely different. An AJAX request does not request a new web page from the server. Instead, an AJAX request only sends and receives bits of data necessary. If the new data received from the web server requires the web page to be updated, then jQuery and JavaScript can update the page elements, as you have already seen.
The following is a list of a few of the benefits of AJAX requests:
Less data requested from the web server.
Allows the user to continue using the web page even while the request is being processed.
Errors can be caught and handled on the client side before a request is ever made to the server.
Understanding Server-Side Services Such as Node.js, ASP, PHP, and MySQL
The back-end processes can be the web server returning a static HTML, text, XML, or JSON file. The back-end process often is an ASP, JSP, PHP, Python, or Node.js script that is running on the server reading data from memory, files, databases, and other sources. 
The back-end process can also be a myriad of other frameworks that are integrated into the web server.
None of that really matters to the AJAX script running in the browser. All that matters is that the server sends back a status and data.
Looking at GET Versus POST Requests
The two main types of requests that you send to the web server are GET and POST. There are only a few differences between the two, but they are important. A GET request passes parameters as part of the URL, whereas a POST request passes them as part of the request data.
Which request type should you use? The basic rule is to use a GET for retrieving information from the server and a POST if you are changing data on the server.
AJAX from jQuery
This section looks at implementing AJAX requests from jQuery. jQuery provides very simple-to-use wrapper methods to implement AJAX requests, .load(), .get(), and .post().
The helper function are wrappers around the .ajax() interface, which is discussed later. These helper functions are the following:
.load(url [, data ] [, success(data, textStatus, jqXHR) ] )â€”This method is used to load data directly elements represented by the jQuery object.
.getScript (url [, data ] [, success(data, textStatus, jqXHR) ] ) )â€”This method is used to load and then immediately execute a JavaScript/jQuery script.
.getJSON(url [, data ] [, success(data, textStatus, jqXHR) ] ) )â€”This method is used to load data in JSON format using a JSONP request to servers on different domains.
.get(url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ]) )â€”This method is used to send a generic GET request to the server.
.post(url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ]) )â€”This method is used to send a generic POST request to the server.
Each of these methods enables you to specify the url of the request. The .load() method is used to load data directly into elements represented by jQuery object. The .get() and .post() methods are used to send GET and POST requests.
You can also specify the function that executes when the response from the server succeeds. For example, the following success handler sets the value of the #email element to the value response data:
$.get('/getEmail?first=Brad&last=Dayley', null, function (data, status, xObj){
$('#email').html(data);
}));

Sending an AJAX Request from jQuery
<!DOCTYPE html>
<html>
<head>
<title>Loading Content</title>
<meta charset='utf-8' />
<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type='text/javascript' src='js/load_content.js'></script>
<link rel='stylesheet' type='text/css' href='css/load_content.css'>
</head>
<body>
<div id='banner'>AngularJS, JavaScript and jQuery Articles</div>
<br>
<div>
<div id='leftNav'>
<span class='navItem'
article='article1'>Responsive Web Design</span>
<span class='navItem'
article='article2'>jQUery Under the Hood</span>
<span class='navItem'
article='article3'>AngularJS Your New Best Friend</span>
<span class='navItem'
article='article4'>Turbo Charged Web Sites</span>
</div>
<div id='content'>
<span id='title'>&nbsp;</span>
<div id='article'></div>
</div>
</div>
</body>
</html>
//load_content.js
function setArticle(){
$('#content').load('data/'+$(this).attr('article')+'.html');
}
$(document).ready(function(){
$('.navItem').click(setArticle);
});
//load_content.css
div { margin:0px; display:inline-block; float:left; text-align:center; }
p { margin:2px; }
#banner { border-radius: 3px 3px 0px 0px;
background-image: -moz-linear-gradient(top , #0000FF, #88BBFF);
background-image: -webkit-linear-gradient(top , #0000FF, #88BBFF);
background-image: -ms-linear-gradient(top , #0000FF, #88BBFF);
color:white; height:30px; width:550px; font-size:25px; }
#leftNav { width:150px; height:404px; border:1px groove #000088; }
.navItem { border:1px dotted; display:block; margin:3px; }
.navItem:hover { border:1px solid; background-color:#00FF00; cursor:pointer; }
#content {border:1px solid blue;}
#article { width: 375px; height:350px; padding:10px; overflow-y:scroll; }
#title { font-weight:bold; font-size:25px; border-bottom: 1px blue solid;
display:block; margin:5px; color:black; }
#by { text-align:right; font:bold italic 16px arial black; float:left;
margin-bottom:20px; }
#date { text-align:right; font:italic 12px arial black; float:right;}
#article p {margin-top:20px; background-color:#EEEEEE; border-radius:5px;
clear:both; padding:5px; }
//htdocs/data/article1.html
<!DOCTYPE html>
<html>
<head>
<title>article 1</title>
</head>
<body>
<p>article 1</p>
</body>
</html>
//htdocs/data/article2.html
<!DOCTYPE html>
<html>
<head>
<title>article 2</title>
</head>
<body>
<p>article 2</p>
</body>
</html>
#articles 3 and 4 are the same as above. and change the contents of article 1 to 4

Automatically Focusing and Blurring Form Elements
A great flow control feature for web forms is to automatically focus elements when you know the user is ready to enter them. For example, if the user selects a year and the next element is a month selection, it makes sense to make the month active for the user automatically.
To set the focus of an element in jQuery, call the .focus() method on that object. For example, the following code sets the focus for an object with id='nextInput':
$('#nextInput').focus();
You can also blur an element that you want to navigate the user away from by calling the .blur() method:
$('#nextInput').blur();
Hiding and Showing Elements
Another great trick when providing flow control for a web form is to dynamically hide and show elements. In effect, less is more, meaning that you shouldnâ€™t necessarily show users more than the elements they will need to fill out.
Form elements can be shown and hidden in jQuery using the .show() and .hide() methods. Alternatively, if you only want to make the element invisible but still take up space, you can set the opacity CSS attribute to 0 or 1.
Disabling Elements
Disabling web elements will still display them, but the user will not be able to interact with them. Typically, it makes sense to disable a form element instead of hiding it only if you still want the user to be able to see the values of the elements.
To disable a form element, you need to set the disabled attribute. In JavaScript, you can do this directly on the DOM object. In jQuery, you use the .prop() method. For example:
$('#deadElement').prop('disabled', 'disabled');
To reenable a disabled element, you remove the disabled value. For example:
$('#deadElement').prop('disabled', '');
Controlling Submit and Reset
Another important aspect of form flow control dynamically is intercepting the submit and reset event and performing actions based on various conditions. For example, you might want to validate form values before you allow the form to be submitted.
You control the form submission functions by attaching a submit event handler to the form. Inside the event handler, you have access to information about the event as well as the form data that will be submitted. You can perform whatever tasks you need and then either allow the form to be submitted or reset or prevent the default browser action.
The following code illustrates an example of stopping the form submission by calling .preventDefault() on the event:
$('form').submit(function(e){
    alert('Sorry. Not yet Implemented.');
    e.preventDefault();
  });
jQuery does not provide an event handler for the form reset event for some reason. To get past this in jQuery, change the input type from reset to button for the Reset button. Then add a click handler to the button event where it will call .reset() on the DOM element of the form. The following code does just that based on a user prompt:
$('#resetB').click(function(e){
    if(confirm('Are you sure?')){ $('form').get(0).reset(); }
  });


Adding Dynamic Flow Control to Forms  
HTML Document That Implements the Payment Form Used in the Example
<!DOCTYPE html>
 <html>
   <head>
     <title>Form Flow</title>
     <meta charset='utf-8' />
     <script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
     <script type='text/javascript' src='js/form_flow.js'></script>
     <link rel='stylesheet' type='text/css' href='css/form_flow.css'>
   </head>
   <body>
     <div id='box'>
       <p>Check Out</p>
       <form>
         <span>Shipping Info</span><br>
           <div id='billInfo'>
           <label class='headLabel'>Name</label>
           <input type='text' id='name'/><br>
           <label class='headLabel'>Address</label>
           <input type='text' id='addr' /><br>
           <label class='headLabel'>City</label>
           <input type='text' id='city' />
           <label>State</label>
           <select class='state' id='state'></select>
           <label>Zip</label><input type='text'  id='zip'/><br>
         </div>
         <span>Billing Info</span><br>
         <div id='billInfo'>
          <input type='checkbox' id='cbSame'/>
             <label for='cbSame'>Same as Shipping</label><br>
           <label class='headLabel'>Name on Card</label>
           <input type='text'  id='nameB'/><br>
           <label class='headLabel'>Address</label>
           <input type='text'  id='addrB'/><br>
           <label class='headLabel'>City</label>
           <input type='text'  id='cityB'/>
           <label>State</label>
           <select class='state'  id='stateB'></select>
           <label>Zip</label><input type='text'  id='zipB'/><br>
           <input type='radio' name='ptype' id='visa' />
             <label for='visa'><img src='/images/visa.png'/></label>
           <input type='radio' name='ptype' id='mc' />
             <label for='mc'><img src='/images/mc.png' /></label>
           <input type='radio' name='ptype' id='amex' />
             <label for='amex'><img src='/images/amex.png'/></label>
           <input type='radio' name='ptype' id='ppal' />
             <label for='ppal'><img src='/images/ppal.png'/></label>
           <br>
           <div id='ccInfo'>
             <label class='headLabel'>Card Number</label>
             <input type='text' id='cardNum'/>
             <input type='password'  id='csc'/>
             <label>csc</label><br>
             <label>Expires</label><select id='expiresY'></select>
             <select id='expiresM'></select><br>
           </div>
           <div id='ppInfo'>
             <input type='text'  id='ppEmail'/>
             <label>PayPal Email</label><br>
             <input type='text'  id='ppPW'/>
             <label>PayPal Password</label><br>
           </div>
         </div>
         <input type='submit' value='Submit' id='submitB' />
         <input type='button' value='Reset' id='resetB' />
       </form>
     </div>
   </body>
</html>
jQuery Code That Provides the Intelligent Flow Control for the Payment Form
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
 var sArr = ['AK','AL','AR','AS','AZ','CA','CO','CT','DC','DE','FL',
    'GA','GU','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MH','MI','MN',
    'MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','PR',
    'PW','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'];
function buildSelects(){
  for(var i in sArr){ 
      $('#state, #stateB').append($('<option>'+sArr[i]+'</option>')); 
    }
  for(var i in months){ 
    $('#expiresM').append($('<option>'+months[i]+'</option>')); 
  }
  for(var y=2015; y<2020;y++){ 
    $('#expiresY').append($('<option>'+y+'</option>')); }
 }
 function updateAddr(){
   var cb = $('#cbSame');
   if (cb.prop('checked')){
     $('#nameB').val($('#name').val());
     $('#addrB').val($('#addr').val());
     $('#cityB').val($('#city').val());
     $('#stateB').val($('#state').val());
     $('#zipB').val($('#zip').val());
     $('#addrB, #cityB, #stateB, #zipB').prop('disabled', 'disabled');
   } else{ $('#addrB, #cityB, #stateB, #zipB').prop('disabled', ''); }
}
function updatePaymentType(){
   if(this.id == 'ppal'){
     $('#ccInfo').hide();
     $('#ppInfo').show();
     $('#ppEmail').focus();
   } else {
     $('#ppInfo').hide();
     $('#ccInfo').show();
     $('#cardNum').focus();
   }
 }
 $(document).ready(function(){
   $('#ppInfo').hide();
   buildSelects();
   $('#cbSame').click(updateAddr);
   $('input:radio').click(updatePaymentType);
   $('form').submit(function(e){
       alert('Sorry. Not yet Implemented.');
       e.preventDefault();
     });
   $('#resetB').click(function(e){
    console.log($('form').get(0));
       if(confirm('Are you sure?')){ $('form').get(0).reset(); }
     });
 });
CSS Code That Styles the Payment Form Elements
input[type=text] {
    width:200px; margin-left:15px; padding-left:10px;
    border-radius: 3px; border:2px groove blue;}
select {margin-left:10px}
img {margin-top:10px; }
 #addr, #addrB { width:400px; }
 #zip, #zipB { width:60px ; }
 #csc { width:40px; }
 #box, #billInfo, #shipInfo{
    font:italic 20px/30px Georgia, serif;
    width:650px; height:auto; padding-bottom:20px; margin:10px;
    border-radius: 3px; box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3); }
 #billInfo, #shipInfo { width:550px; padding:10px;}
 #submitB, #resetB{
    background-color:#3377FF; color:white; font-weight:bold;
    border:2px groove blue; border-radius:15px; }
p{ color:white; background-color:dodgerblue;
    font-weight:bold; margin:0px;
    text-align:center; border-radius: 4px 4px 0px 0px ; }
span{ dispaly:inline-block;
   margin-left:-15px -15px; color:black; font-weight:bold; }
form{ padding:20px; }
.headLabel{ display:block; margin-bottom:-8px;}
label{ color:#000088; font-size:14px;}

Validating a Form
Manually Validating a Web Form
The most basic way of validating forms is by accessing their values and checking the actual contents against the requirements. This can be done when the user is entering data by adding, for example, a blur, change, or keypress event handler, and then inside the event handler checking the value of the data.
$('input:text').keypress(function (){
    if(!$.isNumeric($(this).val())) {
      $('#validLabel').html('Not a Number'));
    }
  });
You can also implement the validation when the user submits the form by adding the validation to a submit handler. For example, the following code adds a validation function to a submit handler so that if the element does not begin with the text 'vfx', an alert is displayed and the form is not submitted:
$('form').submit(function (){
    if (!$('#vfxField').val().match('^vfx')){
      alert('Invalid vfx element');
      e.preventDefault();
    }
  });

  Getting the jQuery Validation Plug-In
Using the techniques in the previous section, you can validate pretty much any type of form element. The problem is that it takes a lot of code and time to add validation. Rather than reinventing the wheel, you can use the jQuery validation plug-in that takes care of most of the validation needs.
Applying Simple jQuery Validation Using HTML
The validator can be implemented in HTML using the class and title attributes. The validator uses a set of rules, such as required or email, to validate the form element. Setting the class attribute to one or more of these rules applies the validation when .validate() is called on the form.
jQuery:
$(document).ready(function(){
    $('#myForm').validate();
  };
Adding Validation Rules
The rules method allows you to define the different rules, listed in Table 13.3, that apply to a form element by referencing the name attribute. For example, the following code adds the required and email rules to an element with name='emailField' using the validator object:.
HTML:
<form id='myForm'>
  <input type='text' name='emailField' />
</form
jQuery:
$(document).ready(function(){
    $('#myForm').validate({
        emailField: {
          required:true,
          email:true
        }
      );
  };
Adding Validation Messages
The messages attribute of the validation object allows you to specify custom messages that will be applied to the individual rules for the element. The messages attribute is also based on the name attribute of the element.
$(document).ready(function(){
  $('#simpleForm').validate(
    {rules: {
      emailField: {
        required:true,
        email:true,
        accept:'jpg|cvs'
        }
      },
     messages: {
        emailField: {
          required:'Must add Email',
          email:'Email format = me@here.com'
        }
      }
    }
  );
};
The .validate() method returns a Validator object, which provides several methods that are valuable for checking form validation. Table 13.4 lists the methods available from the Validator object. The following code illustrates using the Validator object to check the validity of the form by calling the .form() method:
$(document).ready(function(){
  var validator = $('#simpleForm').validate( ...);
  if(!validator.form()){ alert('Form is not valid'));
});
When errors are detected in a form element, a label is added to the form to display the error message. The plug-in adds a class named error to both the element and the new label for the message. This makes it very easy to style the message as well as the element.
To style the element, you can add a CSS rule for the element type and add the .error. For example, to style input elements that have errors to display the text in red, you use the following CSS rule:
input.error { color:red; }
Placing Validation Messages
The validation plug-in places the error messages directly after the element that was validated
The errorPlacement attribute value is a function that gets called to add an error element to the web form. The errorPlacement function will be passed two parameters. The first parameter is the jQuery object that represents the new error message, and the second is a jQuery object that represents the element that failed validation. Using these parameters, you can define your own function that places the elements wherever you want them.
The errorPlacement is set to a function that receives the error and element arguments. The element is tested to see if it is a radio. If the element is a radio input, the error is inserted after the label that follows the last radio input in the form, If the element is not a radio input, the error is inserted immediately after the element:
$('#simpleForm').validate({
  rules: {
    gender: {required:true}
  errorPlacement: function(error, element){
    if (element.is(':radio')){
      error.insertAfter($('input:radio:last').next('label'))}
    else {error.insertAfter(element)}}
});

HTML Document That Implements the Registration Form
<!DOCTYPE html>
<html>
   <head>
     <title>Form Validation</title>
     <meta charset='utf-8' />
     <script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
     <script type='text/javascript' src='https://cdn.jsdelivr.net/.../dist/jquery.validate.min.js'></script>
     <script type='text/javascript' src='js/form_validation.js'></script>
     <link rel='stylesheet' type='text/css' href='css/form_validation.css'>
   </head>
   <body>
     <div id='container'><p>Welcome to the Fight</p>
     <form action='test.html' method='get' name='test'
           id='simpleForm'>
       <label>Name</label>
       <input name='name' type='text' /><br>
       <label>Email</label>
       <input name='email' type='text' /><br>
       <label>Password</label>
       <input name='password1' type='password' /><br>
       <label>Confirm</label>
       <input name='password2' id='password2' type='password' /><br>
       <label>Birth Date</label>
       <input name='birthDate' type='text' /><br>
       <select name='class' multiple size=4>
         <option>Melee</option>
         <option>Mage</option>
         <option>Ranged</option>
         <option>Stealth</option>
       </select><br>
       <div class='buttonGroup'>
           <input type='radio' name='hands' value='right' />
           <label>Right Handed</label>
           <input type='radio' name='hands' value='left' />
           <label>Left Handed</label>
       </div><br>
       <div class='buttonGroup'>
        <input type='checkbox' name='armor' value='helmet' />
         <label>Helmet</label>
        <input type='checkbox' name='armor' value='shield' />
         <label>Shield</label><br>
         <input type='checkbox' name='armor' value='chainmail' />
        <label>Chainmail</label>
         <input type='checkbox' name='armor' value='plated' />
       <label>Plated</label><br>
         <input type='checkbox' name='armor' value='gloves' />
         <label>Gloves</label>
         <input type='checkbox' name='armor' value='boots' />
        <label>Boots</label>
       </div><br>
       <label>Comments:</label><br><textarea></textarea><br>
       <input type='submit' value='Engage'/>
     </form>
    </div>
   </body>
 </html>
jQuery Code Implements the Validation of Form Elements
$(document).ready(function(){
 //$('simpleForm').get(0).reset();
   var validationObj = $('#simpleForm').validate({
     rules: {
       name: { required:true, minlength:5 },
       email: { required:true, email:true },
       password1: { required:true, rangelength:[6,12],
                    equalTo:'#password2' },
       birthDate: { required:true, date:true },
       class: { required:true, rangelength:[2,2]},
       hands: {required:true},
       armor: {required:true, minlength:2 }},
     messages: {
         password1: { equalTo:'Passwords Do Not Match'},
         class: { rangelength:'Select 2 class types'},
         armor: { minlength:'2 Pieces of Armor Required'},
       },
     errorPlacement: function(error, element){
       if (element.is(':radio')){
         error.insertAfter($('input:radio:last').next('label'))}
       else if (element.is(':checkbox')){
         error.insertAfter($('input:checkbox:last').next('label'))}
       else {error.insertAfter(element)}}
   });
   validationObj.form();
   $('form').submit(function(e){
     if(!validationObj.form()){
       alert('Form Errors');
       e.preventDefault(); } });
});
CSS Code That Styles the Form Elements and Errors
label{display:inline-block;min-width:100px; text-align:right;}
 input+label{text-align:left;}
 input.error, select.error{
 color:darkblue}
 label.error{color:blue;}
 br{clear:both;}
 form{ margin:15px; margin:0px;
   border: 1px solid darkred;}
 div{vertical-align:middle;
   padding-bottom:20px;
   font:italic 15px/30px Georgia, serif;}
 #container{
     width:600px; height:auto;}
 .buttonGroup { display: inline-block; padding: 5px;
   border-radius: 4px; margin:15px;
   box-shadow: 0px 0px 8px rgba(255, 0, 0, 0.5);}
 p{
   color:white; background-color:darkred;
   font-weight:bold; margin:0px;
   text-align:center; border-radius: 4px 4px 0px 0px ; }
 select, textarea, input{
   border-radius: 4px; margin:5px;
   border:2px groove crimson; padding:5px;}
 select:focus, textarea:focus, input:focus {
   border-radius: 4px; margin:5px;
   border:2px groove #3377FF; }

   Integrating Jquery and Laravel
We can fetch data from a Laravel backend via jquery ajax calls.
when an ajax request is received by laravel backend, it will serve a JSON response.
This is not a REST API. as laravel api requires authentication using laravel PASSPORT or by using jWT tokens. We'll be using our regular controllers and routes. Our controller actions will be returning JSON data and not laravel views.  
install Postman to test backend and view json response data.
1. setup views
//layouts/header.blade.php
<link href="https://maxcdn.bootstrapcdn.com/.../css/bootstrap.min.css" rel="stylesheet"> 
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/.../js/bootstrap.min.js" ></script>
<script src="https://kit.fontawesome.com/c88097f817.js" crossorigin="anonymous"></script>
<script src="{{asset('js/custom.js')}}"></script>
<script type="text/javascript">
    var token = '{{ csrf_token() }}';
</script>
//layouts/base.blade.php
<!doctype html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <title></title>
 </head>
 <body>
 @yield('body')
 @include('layouts.header')
 </body>
 </html>
 //customer/index.blade.php
@extends('layouts.base')
@section('body')
    <div class="container">
       <a href="{{route('customer.create')}}" class="btn btn-primary a-btn-slide-text">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
        <span><strong>ADD</strong></span>            
    </a>
@if ($message = Session::get('success'))
 <div class="alert alert-success alert-block">
 <button type="button" class="close" data-dismiss="alert">Ã—</button> 
         <strong>{{ $message }}</strong>
 </div>
@endif
  <a href="{{Auth::logout()}}">Logout</a>
<div id="ctable" class="table-responsive">
<table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Customer ID</th>
        <th>Title</th>
        <th>lname</th>
        <th>fname</th>
        <th>address</th>
        <th>phone</th>
        <th>Edit</th>
        <th>Delete</th>
        <th>Restore</th>
        </tr>
    </thead>
    <tbody id="cbody">
     </tbody>
  </table>
</div>
</div>
@endsection
2. create CustomerController methods
//customercontroller
public function index()
    {
       return View::make('customer.index');
    }
    public function getCustomerAll(Request $request){
        if ($request->ajax()){
            $customers = Customer::orderBy('created_at','DESC')->get();
            return response()->json($customers);
         }
    }
3. establish routes
//routes
Route::get('/customer/show/{id}',['uses' => 'CustomerController@getCustomer','as' => 'customer.getcustomer'] );
Route::get('/customer/all',['uses' => 'CustomerController@getCustomerAll','as' => 'customer.getcustomerall'] );
Route::resource('customer', 'CustomerController');
/create jquery functions
//public/js/custom.js
$(document).ready(function() {
  $.ajax({
      type: "GET",
      url: "/customer/all",
      dataType: 'json',
      success: function (data) {
          console.log(data);
          $.each(data, function(key, value) {
            console.log(value);
            var id = value.id;
            var tr = $("<tr>");
            tr.append($("<td>").html(value.title));
            tr.append($("<td>").html(value.id));
            tr.append($("<td>").html(value.lname));
            tr.append($("<td>").html(value.fname));
            tr.append($("<td>").html(value.addressline));
            tr.append($("<td>").html(value.phone));
            tr.append("<td align='center'><a href="+'/customer/'+id+'/edit'+"><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
            $("#cbody").append(tr);
     });
        },
      error: function(){
        console.log('AJAX load did not work');
        alert("error");
      }
  });
});

Jquery change customer id in dropdown,  fetch new customer, change text fields.
//edit function
public function edit($id)
    {
        $customer = Customer::find($id);
        $customers = Customer::pluck('id');
        return view('customer.edit',compact('customer','customers'));
    }
//customer/edit.blade.php
@extends('layouts.base')
@section('body')
<div class="container">
  <h2>Edit Customer</h2>
   {!! Form::model($customer,['method'=>'PATCH','route' => ['customer.update',$customer->id]]) !!}
 <div class="form-group">
    <label for="customer_id" class="control-label">Title</label>
    {!! Form::select('id',$customers, null,['class' => 'form-control','id'=>'customer_id']) !!}
  </div> 
  <div class="form-group">
    <label for="title" class="control-label">Title</label>
    {{ Form::text('title',null,array('class'=>'form-control','id'=>'title')) }}
  </div> 
  <div class="form-group"> 
    <label for="lname" class="control-label">last name</label>
    {{ Form::text('lname',null,array('class'=>'form-control','id'=>'lname')) }}
  </div> 
  <div class="form-group"> 
    <label for="fname" class="control-label">First Name</label>
    {{ Form::text('fname',null,array('class'=>'form-control','id'=>'fname')) }}
  </div>
  <div class="form-group"> 
    <label for="address" class="control-label">Address</label>
    {{ Form::text('addressline',null,array('class'=>'form-control','id'=>'address')) }}
  </div>
  <div class="form-group"> 
    <label for="town" class="control-label">Town</label>
     {{ Form::text('town',null,array('class'=>'form-control','id'=>'town')) }}
  </div>
  <div class="form-group"> 
    <label for="zipcode" class="control-label">Zip code</label>
    {{ Form::text('zipcode',null,array('class'=>'form-control','id'=>'zipcode')) }}
  </div>
  <div class="form-group"> 
    <label for="phone" class="control-label">Phone</label>
    {{ Form::text('phone',null,array('class'=>'form-control','id'=>'phone')) }}
  </div>
  <button type="submit" class="btn btn-primary">Save</button>
  <a href="{{url()->previous()}}" class="btn btn-default" role="button">Cancel</a>
  </div>     
</div>
{!! Form::close() !!} 
@endsection
customer controller
public function getCustomer(Request $request, $id){
        if ($request->ajax()) {
            $customer = Customer::where('id',$id)->first();
             return response()->json($customer);
    }
    }
//custom.js
add inside document ready
$("#customer_id").on('change', function () {
     var val = this.value;
  //send ajax request
    $.ajax({
        type: "GET",
        url: "/customer/show/"+ val,
        success: function(data){
               console.log(data);
               $("#title").val(data.title);
               $("#lname").val(data.lname);
               $("#fname").val(data.fname);
               $("#address").val(data.addressline);
               $("#town").val(data.town);
               $("#zipcode").val(data.zipcode);
               $("#phone").val(data.phone);
          },
         error: function(){
        console.log('AJAX load did not work');
        alert("error");
          }
      });
    });

    sending form data to Postman 
we'll be adding a new customer by using jquery's serialize() function. the format when serializing form data is like url parameters key value pairs. 
_token=aW6wryRYQ7KHhzv4Dwm1er8EVwTYjNpskYEmCfRL&title=mr&lname=foo&fname=bar&addressline=bingham&town=taguig&zipcode=1444&phone=23231
this is x-form-urlencoded is the defaultformat.when sending form data.
Form data in postman is used to send files(multipart).
create the controller store method
 public function store(Request $request)
    {
        $customer = Customer::create($request->all());
        return response()->json($customer);
    } 
2. create POST test case in postman by adding key value pairs
3. since we are sending form data, laravel expects a csrf token to be  present on the http request, we can disable laravel's csrf protection by commenting line verifycsrftoken class on kernel.php
protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            // \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
4. send data in postmant and view the json response. response should be the new customer json object.
5. dont forget to enable again csrf in kernel.php

customer form inside bootstrap modal
@extends('layouts.base')
@section('body')
    <div class="container">
       <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal"  >add <span  class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
    </a>
@if ($message = Session::get('success'))
 <div class="alert alert-success alert-block">
 <button type="button" class="close" data-dismiss="alert">Ã—</button> 
         <strong>{{ $message }}</strong>
 </div>
@endif
  <a href="{{Auth::logout()}}">Logout</a>
<div  class="table-responsive">
<table id="ctable" class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Customer ID</th>
        <th>Title</th>
        <th>lname</th>
        <th>fname</th>
        <th>address</th>
        <th>phone</th>
        <th>Edit</th>
        <th>Delete</th>
        <th>Restore</th>
        </tr>
    </thead>
    <tbody id="cbody">
     </tbody>
  </table>
</div>
</div>
<div class="modal fade" id="myModal" role="dialog" style="display:none">
    <div class="modal-dialog modal-lg" >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Create new customer</h4>
        </div>
        <div class="modal-body">
          {{-- <form id="cform" method="post" action="{{route('customer.store')}}" > --}}
            <form id="cform" method="post" action="#" >
          <input type="hidden" name="_token" value="{{ csrf_token() }}">
          <div class="form-group">
            <label for="title" class="control-label">Title</label>
            <input type="text" class="form-control" id="titulo" name="title" value="{{old('title')}}" >
            @if($errors->has('title'))
         <small>{{ $errors->first('title') }}</small>
         @endif
          </div> 
          <div class="form-group"> 
            <label for="lname" class="control-label">last name</label>
            <input type="text" class="form-control " id="lname" name="lname" value="{{old('lname')}}" ></text>
             @if($errors->has('lname'))
         <small>{{ $errors->first('lname') }}</small>
         @endif
          </div> 
          <div class="form-group"> 
            <label for="fname" class="control-label">First Name</label>
            <input type="text" class="form-control " id="fname" name="fname" value="{{old('fname')}}">
             @if($errors->has('fname'))
         <small>{{ $errors->first('fname') }}</small>
         @endif
          </div>
          <div class="form-group"> 
            <label for="address" class="control-label">Address</label>
            <input type="text" class="form-control" id="address" name="addressline" value="{{old('addressline')}}">
             @if($errors->has('addressline'))
         <small>{{ $errors->first('addressline') }}</small>
         @endif
          </div>
          <div class="form-group"> 
            <label for="town" class="control-label">Town</label>
            <input type="text" class="form-control" id="town" name="town" value="{{old('town')}}">
             @if($errors->has('town'))
         <small>{{ $errors->first('town') }}</small>
         @endif
          </div>
          <div class="form-group"> 
            <label for="zipcode" class="control-label">Zip code</label>
            <input type="text" class="form-control" id="zipcode" name="zipcode" value="{{old('zipcode')}}">
             @if($errors->has('zipcode'))
         <small>{{ $errors->first('zipcode') }}</small>
         @endif
          </div>
          <div class="form-group"> 
            <label for="phone" class="control-label">Phone</label>
            <input type="text" class="form-control" id="phone" name="phone" value="{{old('phone')}}">
             @if($errors->has('phone'))
         <small>{{ $errors->first('phone') }}</small>
         @endif
          </div>
        </div>
        </form> 
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  <button id="myFormSubmit" type="submit" class="btn btn-primary">Save</button>
                </div>
              </div>
  </div>
  </div>
@endsection

Jquery ajax call to laravel store method and "refresh" table
$("#myFormSubmit").on('click', function(e) {
    e.preventDefault();
    var data = $("#cform").serialize();
    console.log(data);
    $.ajax({
        type: "post",
        url: "/customer",
        data: data,
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        dataType: "json",
        success: function(data) {
            console.log(data);
            // $("myModal").modal("hide");
             $('#myModal').each(function(){
                    $(this).modal('hide'); });
              // $.each(data, function(key, value){
               var tr = $("<tr>");
              tr.append($("<td>").html(data.id));
                tr.append($("<td>").html(data.title));
                tr.append($("<td>").html(data.lname));
                tr.append($("<td>").html(data.fname));
                tr.append($("<td>").html(data.addressline));
                tr.append($("<td>").html(data.phone));
            $('#ctable').prepend(tr);
        },
        error: function(error) {
            console.log('error');
        }
    });
});

Edit a customer
edit method
public function edit($id)
    {
        $customer = Customer::find($id);
        return response()->json($customer);
        }
return customer json object
2.  insert another modal for editing customer
<div class="modal fade" id="editModal" role="dialog" style="display:none">
    <div class="modal-dialog modal-lg" >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Update customer</h4>
        </div>
        <div class="modal-body">
          <form id="updateform" method="#" action="#" >
          <input type="hidden" name="_token" value="{{ csrf_token() }}">
          <input type="hidden" name="_method" value="PUT">
          <div class="form-group">
            <label for="etitle" class="control-label">Title</label>
            <input type="text" class="form-control" id="etitle" name="title"  >
            @if($errors->has('title'))
         <small>{{ $errors->first('title') }}</small>
         @endif
          </div> 
          <div class="form-group"> 
            <label for="elname" class="control-label">last name</label>
            <input type="text" class="form-control " id="elname" name="lname"  ></text>
          @if($errors->has('lname'))
         <small>{{ $errors->first('lname') }}</small>
         @endif
          </div> 
          <div class="form-group"> 
            <label for="efname" class="control-label">First Name</label>
            <input type="text" class="form-control " id="efname" name="fname" >
             @if($errors->has('fname'))
         <small>{{ $errors->first('fname') }}</small>
         @endif
          </div>
          <div class="form-group"> 
            <label for="eaddress" class="control-label">Address</label>
            <input type="text" class="form-control" id="eaddress" name="addressline" >
             @if($errors->has('addressline'))
         <small>{{ $errors->first('addressline') }}</small>
         @endif
          </div>
          <div class="form-group"> 
            <label for="etown" class="control-label">Town</label>
            <input type="text" class="form-control" id="etown" name="town" >
             @if($errors->has('town'))
         <small>{{ $errors->first('town') }}</small>
         @endif
          </div>
          <div class="form-group"> 
            <label for="ezipcode" class="control-label">Zip code</label>
            <input type="text" class="form-control" id="ezipcode" name="zipcode" >
             @if($errors->has('zipcode'))
         <small>{{ $errors->first('zipcode') }}</small>
         @endif
          </div>
          <div class="form-group"> 
            <label for="ephone" class="control-label">Phone</label>
            <input type="text" class="form-control" id="ephone" name="phone" >
             @if($errors->has('phone'))
         <small>{{ $errors->first('phone') }}</small>
         @endif
          </div>
        </div>
        </form> 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button id="updatebtn" type="submit" class="btn btn-primary">Update</button>
        </div>
      </div>
  </div>
you should be creating a single form for creating and updating a customer. 
3. ajax call on customer table
when updating a customer, we need to the id of the customer. we need to pass the id to the modal. and create a hidden field for that ID. we add data-id attribute to the edit link. when the modal pops up, we extract the data-id value which is the customer id. that way, we dont need to make another ajax call to fetch just the customer id when the modal shows.
$.ajax({
      type: "GET",
      url: "/customer/all",
      dataType: 'json',
      success: function (data) {
          //console.log(data);
          $.each(data, function(key, value) {
            //console.log(value);
            id = value.id;
            var tr = $("<tr>");
            tr.append($("<td>").html(value.id));
            tr.append($("<td>").html(value.title));
            tr.append($("<td>").html(value.lname));
            tr.append($("<td>").html(value.fname));
            tr.append($("<td>").html(value.addressline));
            tr.append($("<td>").html(value.phone));
            tr.append("<td align='center'><a href='#' data-toggle='modal' data-target='#editModal' id='editbtn' data-id="+ id + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");

Edit ajax call
the event when the modal shows is "show.bs.modal".
when the modal pops, we get the data-id from the anchor that was clicked. the event.relatedtarget property tracks cursor movements to determine when an element is being entered or exited.
this is a mouse event.
after acquiring the customer id, add a hidden field attribute to the form using appendTo method.
$('#editModal').on('show.bs.modal', function(e) {
    var id = $(e.relatedTarget).attr('data-id');
    console.log(id);
    $('<input>').attr({type: 'hidden', id:'customerid',name: 'customer_id',value: id}).appendTo('#updateform');
    $.ajax({
        type: "GET",
        url: "/customer/" + id + "/edit",
        success: function(data){
               console.log(data);
               $("#etitle").val(data.title);
               $("#elname").val(data.lname);
               $("#efname").val(data.fname);
               $("#eaddress").val(data.addressline);
               $("#etown").val(data.town);
               $("#ezipcode").val(data.zipcode);
               $("#ephone").val(data.phone);
          },
         error: function(){
        console.log('AJAX load did not work');
        alert("error");
          }
      });
});
2. clear the form when modal is closed dismissed
when the event hidden.bs.modal happens, the trigger method on the form executes all handlers and behaviors attached to the form element. the reset clear all form inputs.
$('#editModal').on('hidden.bs.modal', function (e) {
  $("#updateform").trigger("reset");
});

customer update
update method
public function update(Request $request, $id)
    {
        if ($request->ajax()) {
        $customer = Customer::find($id);
        $customer = $customer->update($request->all());
         return response()->json($customer);
        }
    } 
2. update ajax call
we again serialize the form data, the http method is PUT and add csrf token to the header. 
remove the _method spoofing on the modal update form as we have specified it already on the ajax call
$("#updatebtn").on('click', function(e) {
    var id = $('#customerid').val();
     var data = $("#updateform").serialize();
    console.log(data);
    $.ajax({
        type: "PUT",
        url: "/customer/"+ id,
        data: data,
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        dataType: "json",
        success: function(data) {
            console.log(data);
            $('#editModal').each(function(){
                    $(this).modal('hide'); });
        },
        error: function(error) {
            console.log('error');
        }
    });
});

AJAX delete customer
add the row after successful fetch of all customers
 tr.append("<td><a href='#'  class='deletebtn' data-id="+ id + "><i  class='fa fa-trash-o' style='font-size:24px; color:red' ></a></i></td>");
2. add bootbox dialogs and popper dependencies
<script src="https://cdnjs.cloudflare.com/.../2.6.0/umd/popper.min.js" integrity="sha512-BmM0/BQlqh02wuK5Gz9yrbe7VyIVwOzD1o40yi1IsTjriX/NGF37NyXHfmFzIlMmoSIBXgqDiG1VNU6kB5dBbA==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/.../boo.../4.4.0/bootbox.min.js" integrity="sha512-8NOmlkzoskIBni4iy5onHC57Mndt17mZgWkYJvxe5jwBJu3spYIRSjTkYJ9OLNS9Min+bsSqbDfGaoejWxyFiw==" crossorigin="anonymous"></script>
2. customer controller destroy method
public function destroy($id)
    {
        $customer = Customer::findOrFail($id);
        $customer->delete();
        // return Redirect::to('/customer')->with('success','Customer deleted!');
        return response()->json(["success" => "customer created successfully.",
             "data" => $customer,"status" => 200]);
    }
3. to bind a click handler to all instances of the delete icon, we use .on method and specifying the class ".deletebtn" to attach an event handler to all links.
jquery closest method finds and returns the first ancestor of the selected element in the DOM tree. This method traverse upwards starting with itself. we need to reference the row where the link was clicked. no need for the id of the <td> tag
to call the popup we use bootbox.confirm with several customizations.
if the user presses yes, a callback function will be executed. the function now sends an ajax delete http request.
after successful deletion, the <td> will fade using fadeout(no. of seconds) and remove the row using tr.remove()
$("#cbody").on('click',".deletebtn",function(e) {
    var id = $(this).data('id');
    var $tr = $(this).closest('tr')
        // var id = $(e.relatedTarget).attr('id');
    console.log(id);
        e.preventDefault();
        bootbox.confirm({
            message: "do you want to delete this customer",
            buttons: {
                confirm: {
                    label: 'yes',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'no',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result)
                    $.ajax({
                        type: "DELETE",
                        url: "/customer/"+ id,
                        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                        dataType: "json",
                        success: function(data) {
                            console.log(data);
                            // bootbox.alert('success');
                            $tr.find('td').fadeOut(2000,function(){ 
                            $tr.remove();  
                            });   
                        },
                        error: function(error) {
                            console.log('error');
                        }
                        });
            }
        });
    });