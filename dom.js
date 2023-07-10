// // // examine the document object
// // //console.dir(document);
// // console.log(document.domain);
// // console.log(document.title);
// // document.title = "Title Changed"
// // console.log(document.title);

// // getElementsById
//  var headertitle = document.getElementById('header-title');
// // console.log(headertitle);
// // headertitle.innerHTML = '<h3>hello world</h3>'
// //  var header = document.getElementById('main-header');
// //  header.style.borderBottom = 'solid 3px black';
// // headertitle.style.border = 'solid 3px black';
// // var title = document.getElementsByClassName('title');
// // console.log(title);
// // title[0].style.fontWeight = 'bold';
// // title[0].style.color = 'green';


// //  var items = document.getElementsByClassName('list-group-item');
// //  items[2].style.backgroundColor = 'green';

// //  for(var i=0; i<items.length; i++){
// //     items[i].style.fontWeight = 'bold';
// //  }

// // create a element
// // const li = document.createElement("li");
// // li.innerHTML = 'Item 5';
// // console.log(li);
// // var ul = document.getElementById('items');
// // ul.appendChild(li);

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green';

// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display = 'none';


// // traversing the dom
var itemsList = document.querySelector('#items');
// // parnetNode
 console.log(itemsList.parentNode);

// //parentElement
 console.log(itemsList.parentElement);

 //childNoded 
 console.log(itemsList.childNodes);
 //children
// console.log(itemsList.children);
console.log(itemsList.children[1]);

// //FirstChild
 console.log(itemsList.firstChild);

// //Firstelementchild
 console.log(itemsList.firstElementChild);

// //lastChild
 console.log(itemsList.lastChild);

// //lastelementchild
 console.log(itemsList.lastElementChild);    

// // nextSibling
 console.log(itemsList.nextSibling);
// // nextElementSibling
 console.log(itemsList.nextElementSibling);


// // previousSibling
 console.log(itemsList.previousSibling);
// // previousElementSibling
 console.log(itemsList.previousElementSibling);

// create a element
// create a div
var div = document.createElement('div');
// Add a class
div.className = 'Hello';
// add a id
div.id = 'helloName';
// add a attribute
div.setAttribute('title', 'helloWorld');

//create textNode;
var divtext = document.createTextNode('HEllo!');
//add text to div
div.appendChild(divtext);
console.log(div);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(div, h1);

var items = document.querySelector('#items');
var p = document.createElement('p');
p.innerHTML = 'HEllo';
items.insertAdjacentElement('afterbegin', p);