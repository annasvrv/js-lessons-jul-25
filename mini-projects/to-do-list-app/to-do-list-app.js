// const form = document.querySelector("#todo-form");
// const input = document.querySelector("#todo-input");
// const list = document.querySelector("#todo-list");

// // Defensive checks in case DOM hasn't loaded or IDs changed
// if (!form || !input || !list) {
//   // Nothing to do if essential elements are missing
//   console.error("To-do app: missing form/input/list element(s)");
// } else {
//   // Handle form submit
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const taskItem = input.value.trim();
//     if (taskItem === "") return;

//     // Create a new li
//     const li = document.createElement("li");
//     li.textContent = taskItem;

//     // Add a delete button
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "\u274c";
//     deleteBtn.classList.add("delete");
//     li.appendChild(deleteBtn);

//     // Add li to the list
//     list.appendChild(li);

//     // Clear input
//     input.value = "";
//   });

//   // Event delegation for delete buttons - attach once
//   list.addEventListener("click", (e) => {
//     if (e.target.classList && e.target.classList.contains("delete")) {
//       const parent = e.target.parentElement;
//       if (parent) parent.remove();
//     }
//   });
// }



// State + persistence ------------------------------------------------------
const STORAGE_KEY = "todo-mini-project-v1";
const state = {
  todos: load() ?? [],
  filter: "all" // 'all' | 'active' | 'completed'
};

function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; }
  catch { return null; }
}

// DOM refs ----------------------------------------------------------------
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const filters = document.querySelector(".filters");
const countEl = document.querySelector("#count");
const clearBtn = document.querySelector("#clear-completed");

// Render ------------------------------------------------------------------
function render() {
  // compute filtered view
  const filtered = state.todos.filter(t => {
    if (state.filter === "active") return !t.completed;
    if (state.filter === "completed") return t.completed;
    return true;
  });

  // list
  list.innerHTML = "";
  const frag = document.createDocumentFragment();

  filtered.forEach(t => {
    const li = document.createElement("li");
    li.className = "item";
    li.dataset.id = t.id;
    li.dataset.completed = String(t.completed);

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = t.completed;
    toggle.setAttribute("aria-label", `Toggle ${t.text}`);
    toggle.className = "toggle";

    const txt = document.createElement("span");
    txt.className = "text";
    txt.textContent = t.text;
    txt.title = "Click text to toggle completed";

    const del = document.createElement("button");
    del.type = "button";
    del.className = "delete";
    del.textContent = "Delete";
    del.setAttribute("aria-label", `Delete ${t.text}`);

    li.append(toggle, txt, del);
    frag.appendChild(li);
  });

  list.appendChild(frag);

  // count
  const activeLeft = state.todos.filter(t => !t.completed).length;
  countEl.textContent = `${activeLeft} item${activeLeft === 1 ? "" : "s"} left`;

  // filters active state
  [...filters.querySelectorAll("button")].forEach(btn => {
    const isActive = btn.dataset.filter === state.filter;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });

  save();
}

// Actions -----------------------------------------------------------------
function addTask(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  state.todos.push({ id: crypto.randomUUID?.() || String(Date.now() + Math.random()), text: trimmed, completed: false });
  render();
}

function toggleTask(id) {
  const t = state.todos.find(t => t.id === id);
  if (t) { t.completed = !t.completed; render(); }
}

function deleteTask(id) {
  state.todos = state.todos.filter(t => t.id !== id);
  render();
}

function clearCompleted() {
  state.todos = state.todos.filter(t => !t.completed);
  render();
}

function setFilter(next) {
  state.filter = next;
  render();
}

// Event wiring ------------------------------------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(input.value);
  input.value = "";
  input.focus();
});

// Delegation for list interactions
list.addEventListener("click", (e) => {
  const li = e.target.closest(".item");
  if (!li) return;
  const id = li.dataset.id;

  if (e.target.classList.contains("delete")) {
    deleteTask(id);
  } else if (e.target.classList.contains("toggle") || e.target.classList.contains("text")) {
    // toggle when clicking checkbox or the text
    toggleTask(id);
  }
});

// Filter buttons
filters.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-filter]");
  if (!btn) return;
  setFilter(btn.dataset.filter);
});

// Clear completed
clearBtn.addEventListener("click", clearCompleted);

// Init
render();