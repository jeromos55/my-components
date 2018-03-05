var todoList = document.getElementById("todolist");

var item = todoList.querySelectorAll("li");
var inputs = todoList.querySelectorAll("input");

for(var i=0; i < item.length; i++){
	item[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
	inputs[i].addEventListener("keypress", itemKeypress);
}	

function editItem (){
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeypress(event) {
	if (even.which === 13) {
		updateItem.call(this);
	}
}

