function createSelectTag() {
	selectTag = document.createElement('select');
	selectTag.id = 'selectTag';
	const option = document.createElement('option');
	selectTag.appendChild(option);
	selectTag.style = "position: absolute;left: 2.9%;top: 26%;width: 15vh;height: 3.2vh;background: hsl(222deg 9.8% 20%);opacity: 0.8;outline: none;border: none;border-radius: 3px;font-size: 20px;z-index: 2;overflow:visible;"

	const keys = Object.keys(localStorage);
	keys.forEach((key) => {
		const option = document.createElement('option');
		option.value = key;
		option.text = key;
		selectTag.appendChild(option);
	});

	selectTag.addEventListener('change', (event) => {
		const selectedValue = event.target.value;
		select.options[select.value = 0].text = selectedValue.split(" ")[1]
		a.setValue(localStorage.getItem(selectedValue));
		name.value = selectedValue.split(" ")[0]
	});

	selectContainer.appendChild(selectTag);
}