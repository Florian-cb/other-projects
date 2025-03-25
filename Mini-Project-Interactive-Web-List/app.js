// const form = document.querySelector('#submit');
// const input = document.querySelector('#add');
// const list = document.querySelector('#list');

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const add = input.value;
//     const newLi = document.createElement("li");
//     newLi.innerText = add;
//     console.log(newLi);
//     list.append(newLi);
//     input.value = "";
// })

const form = document.querySelector('#submit');
const input = document.querySelector('#add');
const list = document.querySelector('#list');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const add = input.value;
    if (add.trim() === "") return; // prevent adding empty items

    // Create new list item
    const newLi = document.createElement("li");
    newLi.innerText = add;
    list.append(newLi);

    // Create delete button item beside the added list item
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function () {
        newLi.remove();
    });
    newLi.appendChild(deleteBtn);

    // Erases input text after the new list item is submitted
    input.value = "";
});
