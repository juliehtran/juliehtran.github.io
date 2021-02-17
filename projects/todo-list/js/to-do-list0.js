document.addEventListener(`keydown`, (keypress) => {
  if (keypress.key === 'Enter') {
    $(`#todo-list-items`).append(
      `
      <li class="to-do-item">
        <input type="checkbox">
          ${document.querySelector("#things-to-do").value}
        <span class="fas fa-times-circle delete hide" onclick="this.parentElement.remove()"></i>
      </li>

      `
    );
    document.querySelector("#things-to-do").value = "";
  }
})

document.querySelector('#clear-all').addEventListener('click', () => {
  $(`#todo-list-items`).html(``);
})
