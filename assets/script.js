fetch("https://striveschool-api.herokuapp.com/books")
  .then(responseObj => responseObj.json())

  .then(books => {
    console.log(books);

    const grid = document.getElementById("books-container");
    grid.innerHTML = "";

    books.forEach(book => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `
                    <div class="card mt-5 rounded-4 border border-2 border-dark shadow-lg">
                        <div class="card-body d-flex flex-column p-0 bg-warning rounded-4 border border-2 border-dark">
                            <h5 class="card-title d-flex align-items-center justify-content-center py-5 px-3 fs-6 text-center p-3">${book.title}</h5>
                            <img class="card-image" src=${book.img}>
                            <div class="card-bottom d-flex flex-row justify-content-between align-items-center p-3">
                            <p class="card-text ps-3 m-0">€ ${book.price}</p>
                            <button class="bottone bg-dark text-light pe-3 rounded-4">HIDE</button>
                        </div>
                    </div>
                        `;
      grid.appendChild(col);
    });
    const buttons = document.querySelectorAll(".bottone");
    buttons.forEach(button => {
      button.addEventListener("click", event => {
        const hideCol = event.target.closest(".col");
        hideCol.classList.add("d-none");
      });
    });
  })

  .catch(error => console.log("CATCH", error));

//   const btn = document.createElement("button");
//   col.appendChild(btn);

//   btn.addEventListener("click", event => {
//     event.preventDefault();
//     col.className = "d-none";
