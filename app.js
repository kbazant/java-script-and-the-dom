const myList = document.getElementByTagName('li');

for  (let i = 0, i < myList.length; i += 1) {
	myList[i].style.color = 'purple';
}