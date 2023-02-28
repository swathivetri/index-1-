var itemList=document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundcplor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);
//parentElement;
console.log(itemList.parentElement);
//lastelementchild;
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='item 4';
//lastChild
console.log(itemList.lastChild);
itemList.lastChild.textContent='Hello 4';
//createchild;
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.background='yellow';
//firstElementChild;
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';
//firstChild;
console.log(itemList.firstChild);
//nextSibling;
console.log(itemList.nextSibling);
//nextElementSibling;
console.log(itemList.nextElementSibling);
//previousSibling;
console.log(itemList.previousSibling);
//previousElementSibling;
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';
//createElement;
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello 1';
newDiv.setAttribute('title','helloDiv');
//create text node;
var newDivText=document.createTextNode('Hello world');
newDiv appendChild(newDivText);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontsize='30px';
container.insertBefore('newDiv','h1');




