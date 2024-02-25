const name = document.querySelector("#name")
name.value = prompt("Enter File Name")
console.log(name.value)
let text_place = document.querySelector("#text-place")
const e = "python"
let a = ace.edit(text_place,{})
a.getSession().setUseWorker(false)
a.setTheme("ace/theme/dracula")
a.getSession().setMode("ace/mode/python")
function val(e) {
	e = e.options[e.selectedIndex].text
	a.getSession().setMode("ace/mode/"+e)
}
programming_languages = {
	"python": "py",
	"javascript": "js",
	"c_cpp": "cpp",
	"xml": "xml",
	"java": "java",
	"swift": "swift",
	"golang": "go",
	"csharp": "cs",
	"html": "html",
	"css": "css",
	"typescript": "ts",
	"lua": "lua",
	"ruby": "rb",
	"json": "json",
	"dart": "dart",
	"fortran": "f90",
	"markdown": "md",
	"php": "php",
	"django": "dj",
	"scss": "scss",
	"dockerfile": "dockerfile",
	"kotlin": "kt",
	"livescript": "ls",
	"pascal": "pas",
	"xquery": "xquery",
	"sql": "sql",
	"nginx": "nginx"
}
extension_language = {
	"py": "python",
	"js": "javascript",
	"cpp": "c_cpp",
	"xml": "xml",
	"java": "java",
	"swift": "swift",
	"go": "golang",
	"cs": "csharp",
	"html": "html",
	"css": "css",
	"ts": "typescript",
	"lua": "lua",
	"rb": "ruby",
	"json": "json",
	"dart": "dart",
	"f90": "fortran",
	"md": "markdown",
	"php": "php",
	"dj": "django",
	"scss": "scss",
	"dockerfile": "dockerfile",
	"kt": "kotlin",
	"ls": "livescript",
	"pas": "pascal",
	"xquery": "xquery",
	"sql": "sql",
	"nginx": "nginx"
}

const select = document.querySelector('select')
const button = document.querySelector('#download')

button.addEventListener('click', () => {
	if (name.value) {
		const language = select.options[select.selectedIndex].text
		const extension = `.${programming_languages[language]}`
		const link = document.createElement('a')
		const file = new Blob([a.getValue()], { type: `${extension}` })
		link.href = URL.createObjectURL(file)
		link.download = `${name.value}${extension}`
		link.click()
	}
})
document.addEventListener("DOMContentLoaded", function() {
	const uploadImg = document.querySelector("#upload")

	uploadImg.addEventListener("click", function() {
		const uploadInput = document.createElement("input")
		uploadInput.type = "file"
		uploadInput.style.display = "none"
				
		uploadInput.addEventListener("change", function(event) {
			const file = event.target.files[0]

			if (file) {
				const reader = new FileReader()
				reader.onload = function(event) {
					const textContent = event.target.result
					const filename = file.name.split(".")
					a.setValue(textContent)
					name.value = filename[0]
					a.getSession().setMode("ace/mode/"+extension_language[filename[filename.length - 1]])
					select.options[select.value = 0].text = extension_language[filename[filename.length - 1]]
				}
				reader.readAsText(file)
			}
		})
		document.body.appendChild(uploadInput)
		uploadInput.click()
		document.body.removeChild(uploadInput)
	})
})
const clear_all_but = document.querySelector("#delete")
clear_all_but.addEventListener('click',function () {
	const bool = confirm("Are you sure you want to delete all swap file?")
	if (bool){
		localStorage.clear()
	}
})

setInterval(function() {
	const length_of_localStorage = Object.keys(localStorage).length
	if (length_of_localStorage > 0 && localStorage.getItem(`${name.value} ${select.options[select.selectedIndex].text}`) == undefined && a.getValue() != "" && select.options[select.selectedIndex].text != "" && name != ""){
		localStorage.setItem(`${name.value} ${select.options[select.selectedIndex].text}`,a.getValue())
	}
	if (length_of_localStorage > 0 && localStorage.getItem(`${name.value} ${select.options[select.selectedIndex].text}`) != undefined){
		localStorage.setItem(`${name.value} ${select.options[select.selectedIndex].text}`,a.getValue())
	}else if (length_of_localStorage === 0 && a.getValue() != "" && select.options[select.selectedIndex].text != "" && name != ""){
		localStorage.setItem(`${name.value} ${select.options[select.selectedIndex].text}`,a.getValue())
	}
}, 1000)

const toggleButton = document.getElementById('data');
const selectContainer = document.getElementById('container');

let selectTag = null; // Keep track of the created select tag

toggleButton.addEventListener('click', () => {
	if (!selectTag) {
		createSelectTag();
	} else {
		removeSelectTag();
	}
});

function createSelectTag() {
	selectTag = document.createElement('div');
	selectTag.id = 'selectTag';
	selectTag.style = "position: absolute;left: 2.9%;top: 5%;width: 10%;height: 95%;background: hsl(220 10% 14%);outline: none;border: none;font-size: 15px;z-index: 2;overflow:visible;"

	const keys = Object.keys(localStorage);
	keys.forEach((key) => {
		const option = document.createElement('button');
		option.innerHTML = key.replace(" ",".");
		selectTag.appendChild(option);
	});

	selectTag.addEventListener('click', (event) => {
		const selectedValue = event.target.innerHTML;
		a.setValue(localStorage.getItem(selectedValue.replace("."," ")));
		name.value = selectedValue.split(".")[0]
		select.options[select.selectedIndex].text = selectedValue.split(".")[1]
	});

	selectContainer.appendChild(selectTag);
}

function removeSelectTag() {
	selectContainer.removeChild(selectTag);
	selectTag = null;
}
const create_new_data = document.getElementById("new_data");
create_new_data.addEventListener("click",() => {
	name.value = ""
	select.options[select.value = 0].text = ""
	a.setValue("")
})