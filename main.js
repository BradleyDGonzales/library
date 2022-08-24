/*

TODO: Figured out how to push objects into an array, so at this point just need to do the DOM manipulation along with a simple webpage to show the results

TODO 08/22: gathered input from data, DOM manipulation working, made a small popup form (nothing special), as of rn just need to
            actually display the form data onto the webpage as well as making everything required (check for `` or null or undefined values in input(?));


TODO 08/23: added a more pleasing looking webpage, figured out how to append child to last value of card-row div but still need to actually display the new book onto the webpage. also still
            need to toggle read status
*/


const newBookButton = document.getElementById(`btnAddForm`);
const myBooksDiv = document.querySelector(`.myBooks`)
console.log(myBooksDiv);
let myLibrary = [];
let clickCount = 0;
let called = false;


let title;
let author;
let pageCount;
let read;



function Book(title, author, pageCount, read) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;
}


//function that makes new object and pushes it to myLibrary[]
function addBookToLibrary(title, author, pageCount, read) {

  myLibrary.push({
    title: `${title}`,
    author: `${author}`,
    pageCount: `${pageCount}`,
    read: `${read}`
  });

  const newBook = new Book(title, author, pageCount, read)

}
//dynamic form
function makeForm() {
  popup.classList.add(`open-popup`);
  clickCount++;

  if (clickCount > 1) {
    return;
  }



  const newForm = document.createElement(`form`);
  newForm.setAttribute(`id`, `bookForm`);

  const labelBookName = document.createElement(`label`);
  labelBookName.setAttribute(`for`, `title`);
  labelBookName.innerText = `Name of book: `

  const bookName = document.createElement(`input`);
  bookName.setAttribute(`type`, `text`);
  bookName.setAttribute(`name`, `title`);
  bookName.setAttribute(`id`, `title`);
  bookName.required = true;

  const labelAuthorName = document.createElement(`label`);
  labelAuthorName.setAttribute(`for`, `author`);
  labelAuthorName.innerText = `Author: `;

  const authorName = document.createElement(`input`);
  authorName.setAttribute(`type`, `text`);
  authorName.setAttribute(`name`, `author`);
  authorName.setAttribute(`id`, `author`);
  authorName.required = true;

  const labelPageCount = document.createElement(`label`);
  labelPageCount.setAttribute(`for`, `pagecount`);
  labelPageCount.innerText = `Page Count: `;

  const pageCountEl = document.createElement(`input`);
  pageCountEl.setAttribute(`type`, `number`);
  pageCountEl.setAttribute(`name`, `pagecount`);
  pageCountEl.setAttribute(`id`, `pagecount`);
  pageCountEl.required = true;

  const labelReadBook = document.createElement(`label`);
  labelReadBook.setAttribute(`for`, `read`);
  labelReadBook.innerText = `Read? `;

  const readBook = document.createElement(`input`);
  readBook.setAttribute(`type`, `checkbox`);
  readBook.setAttribute(`name`, `read`);
  readBook.setAttribute(`id`, `read`);

  const submitButton = document.createElement(`input`);
  submitButton.setAttribute(`type`, `submit`);
  submitButton.setAttribute(`onclick`, `closeForm()`)


  newForm.appendChild(labelBookName);
  newForm.appendChild(bookName);
  newForm.appendChild(labelAuthorName);
  newForm.appendChild(authorName);
  newForm.appendChild(labelPageCount);
  newForm.appendChild(pageCountEl);
  newForm.appendChild(labelReadBook);
  newForm.appendChild(readBook);
  newForm.appendChild(submitButton);

  //document.getElementsByTagName("div")[0].style.display = `block`
  if (typeof document.forms[0] !== `undefined`) return;
  document.getElementById(`popup`).appendChild(newForm);



  const myForm = document.querySelectorAll(`form`);
  const submitInput = myForm[0].querySelector(`input[type="submit"]`);

  submitInput.addEventListener(`click`, function (e) {
    e.preventDefault();


    const inputBookName = document.getElementById(`title`);
    const inputAuthorName = document.getElementById(`author`);
    const inputPageCount = document.getElementById(`pagecount`);
    const inputReadBook = document.getElementById(`read`);


    title = document.querySelector(`#title`).value
    author = document.querySelector(`#author`).value
    pageCount = document.querySelector(`#pagecount`).value

    if (readBook.checked) {
      read = `Read`;
    }
    else {
      read = `Not yet read`
    }

    if (!(inputBookName.checkValidity())) {
      inputBookName.reportValidity();
      return;
    }
    if (!(inputAuthorName.checkValidity())) {
      inputAuthorName.reportValidity();
      return;
    }
    if (!(inputPageCount.checkValidity())) {
      inputPageCount.reportValidity();
      return;
    }
    let userBook = new Book(title, author, pageCount, read)
    addBookToLibrary(title, author, pageCount, read);
    console.table(userBook);

    clickCount = 0;
    document.getElementById("bookForm").reset();
    closeForm();
    addBookToWebpage();



  });

}
function closeForm() {
  if ((title === `` || title === undefined) || (author === `` || author === undefined) || (pageCount === `` || pageCount === undefined) || (read === `` || read === undefined)) {
    return;
  }
  else {
    title = ``;
    author = ``;
    pageCount = ``;
    read = ``;
    popup.classList.remove(`open-popup`);

  }
}

function addBookToWebpage() {

  //creates new H2 Element
  const newH2Element = document.createElement(`h2`);
  newH2Element.classList.add(`labelvalue`);
  newH2Element.setAttribute(`id`,`titlevalue1`)

  const cardRow = document.getElementById(`card-row`)
  cardRow.appendChild(newH2Element)

  //const lastElement = document.getElementById(`titlevalue`);
  //lastElement.innerText = `Testing this`

}
//loops through myLibrary[]
function looper(array) {
  for (let i = 0; i < array.length; i++) {
    title = array[i].title;
    author = array[i].author;
    pageCount = array[i].pageCount;
    read = array[i].read;
  }
  console.log(array);
}
//looper(myLibrary);



