
var newDiv = document.createElement('div');

// add class 
newDiv.className = 'hello';

// add id 
newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title','hello div');

// create text node 
var newDivText = document.createTextNode('hello world');

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


container.insertBefore(newDiv,h1);



// Now go head and add HEllo word before Item 1


var newli = document.createElement('li');

// add class 
newli.className = 'hello';

// add id 
newli.id = 'hello2';



// create text node 
var newliText = document.createTextNode('hello world');

// add text to div
newli.appendChild(newliText);

var container = document.querySelector('#items');
var h1 = document.querySelector('#helloid');


container.insertBefore(newli,h1);



