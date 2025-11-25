let inputBox = document.getElementById("inp");
let addBtn = document.getElementById("btn");
let List = document.getElementById("list");

addBtn.addEventListener("click", addItem);

function addItem() {
    let inputValue = inputBox.value.trim();
    if (inputValue === "") return;

    let li = document.createElement("li");
    li.textContent = inputValue;
    li.classList.add("List-item");
    List.appendChild(li);

    // Edit button
    let update = document.createElement("button");
    update.textContent = "Edit";
    update.classList.add("up-btn");
    update.addEventListener("click", () => {
        let newValue = prompt("Enter new value", li.firstChild.textContent);
        if (newValue) li.firstChild.textContent = newValue;
    });
    li.appendChild(update);

    // Delete button
    let delbtn = document.createElement("button");
    delbtn.textContent = "X";
    delbtn.classList.add("del-btn");
    delbtn.addEventListener("click", () => {
        List.removeChild(li);
    });
    li.appendChild(delbtn);

    inputBox.value = "";
}
