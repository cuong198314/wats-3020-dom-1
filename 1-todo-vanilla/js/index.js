//TODO add event to listen to when DOM is ready to access
document.addEventListener("DOMcontentloaded", (event) => {
  document.addEventListener("submit", (event) => {
event.preventDefault();
    
    let itemInput = document.querySelector("input[name='item-input']");
    let itemValue = itemInput.value;
    //test to be sure that user entered a value
    if (itemValue.length !== 0) {
      //create new item
let newItemEl = document.createElement("li");
let newCheckBox = document.createElement("input");
newCheckBox.setAttribute("type", "checkbox");
newItemEl.appendChild(newCheckBox);
let newLabel = document.createElement("label");
newLabel.textContent = itemValue;
newItemEl.appendChild(newLabel);
      //get a reference to list and append list item
      let list = document.querySelector('.todo-list');
      list.appendChild(newItemEl);
      //clear the user input
      itemInput.value = '';

      //add a click event listener that serves a toggle
      //TODO add click event toggle that strikes out text in label associated with list item
      newCheckBox.addEventListener("click", function (event) {
      
        if (this.nextSibling.style.textDecoration == "line-through" ) {
          this.nextSibling.style.textDecoration = "";
        } else {
          this.nextSibling.style.textDecoration = "line-through";
        }
      });

    }
  }) // form submit
}) // document ready