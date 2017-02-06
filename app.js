const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const decriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

listUl.addEventListener('click', (event) => {
	if (event.target.tagName == 'BUTTON') {
		if (event.target.className == 'remove') {
			let li = event.target.parentNode;
			let ul = li.parentNode;
			ul.removeChild(li);
		}


		if (event.target.className == 'up') {
			let li = event.target.parentNode;
			let prevLi = li.previousElementSibling;
			let ul = li.parentNode;
			if (prevLi) {
				ul.insertBefore(li, prevLi);
			}
		}
	}
});


toggleList.addEventListener('click', () => {
	if (listDiv.style.display == 'none') {
		toggleList.textContent = 'Hide list';
		listDiv.style.display = 'block';
	} else {
		toggleList.textContent = 'Show list';
		listDiv.style.display = 'none';
	}
});

descriptionButton.addEventListener('click', () => {
	descriptionP.innerHTML = descriptionInput.value + ':';
	descriptionInput.value = '';
});