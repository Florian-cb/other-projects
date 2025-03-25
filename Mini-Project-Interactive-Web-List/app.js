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

    // Create new list item and delete button
    const newLi = document.createElement("li");
    newLi.innerText = add;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.marginLeft = "10px"; // optional styling

    // Attach event listener to the delete button
    deleteBtn.addEventListener("click", function () {
        newLi.remove();
    });

    // Append the delete button to the list item, then the list item to the list
    newLi.appendChild(deleteBtn);
    list.append(newLi);
    input.value = "";
});
