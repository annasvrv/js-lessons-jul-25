const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

// Defensive checks in case DOM hasn't loaded or IDs changed
if (!form || !input || !list) {
  // Nothing to do if essential elements are missing
  console.error("To-do app: missing form/input/list element(s)");
} else {
  // Handle form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskItem = input.value.trim();
    if (taskItem === "") return;

    // Create a new li
    const li = document.createElement("li");
    li.textContent = taskItem;

    // Add a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "\u274c";
    deleteBtn.classList.add("delete");
    li.appendChild(deleteBtn);

    // Add li to the list
    list.appendChild(li);

    // Clear input
    input.value = "";
  });

  // Event delegation for delete buttons - attach once
  list.addEventListener("click", (e) => {
    if (e.target.classList && e.target.classList.contains("delete")) {
      const parent = e.target.parentElement;
      if (parent) parent.remove();
    }
  });
}
