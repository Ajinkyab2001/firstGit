// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// get element by id
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// // headerTitle.textcontent = 'hello';
// // headerTitle.innerText = 'goodbye';

// header.style.borderBottom = 'solid 3px #000';

// var addItems = document.getElementById('add');
// console.log(addItems);

// addItems.style.color = 'green';

 
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].style.backgroundColor = 'green';
items[0].style.fontWeight  = 'bold';
items[1].style.fontWeight  = 'bold';
items[3].style.fontWeight  = 'bold';
items[2].style.fontWeight  = 'bold';
