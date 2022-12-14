document.addEventListener(`DOMContentLoaded`, function () {
  if (localStorage.length > 1 && localStorage.getItem(`incrementer`) !== null) {
    for (let i = 0; i <= parseInt(localStorage.getItem(`incrementer`)); i++) {
      incrementer = i;
      if (localStorage.getItem(`title${i}`) !== null && localStorage.getItem(`author${i}`) && localStorage.getItem(`pageCount${i}`) && localStorage.getItem(`read${i}`)) {
        localStorage.setItem(`title${i}`, localStorage.getItem(`title${i}`));
        localStorage.setItem(`author${i}`, localStorage.getItem(`author${i}`));
        localStorage.setItem(`pageCount${i}`, localStorage.getItem(`pageCount${i}`));
        localStorage.setItem(`read${i}`, localStorage.getItem(`read${i}`));
        addBookToWebpage();
      }
    }
  }
}, false);

const newBookButton = document.getElementById(`btnAddForm`);
const myBooksDiv = document.querySelector(`.myBooks`)
const myButtons = document.querySelectorAll(`.statusButton`)

let myLibrary = [];
let userBook;
let clickCount = 0;
let called = false;
let incrementer = 0;


let title;
let author;
let pageCount;
let read;



function changeStatus(element) {
  let btnIdName = element.getAttribute(`id`);
  let btnIdNumber = btnIdName.slice(-1);

  if (document.getElementById(`statusbutton${btnIdNumber}`).innerText === `Read`) {
    document.getElementById(`statusbutton${btnIdNumber}`).innerText = `Not yet read`;
    localStorage.setItem(`read${btnIdNumber}`, `Not yet read`);
  }
  else if (document.getElementById(`statusbutton${btnIdNumber}`).innerText === `Not yet read`) {
    document.getElementById(`statusbutton${btnIdNumber}`).innerText = `Read`;
    localStorage.setItem(`read${btnIdNumber}`, `Read`);
  }
}
function Book(title, author, pageCount, read) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;
}


function addBookToLibrary(title, author, pageCount, read) {
  localStorage.setItem(`incrementer`, incrementer);
  myLibrary.push({
    title: `${title}`,
    author: `${author}`,
    pageCount: `${pageCount}`,
    read: `${read}`
  });
  localStorage.setItem(`title${incrementer}`, userBook.title);
  localStorage.setItem(`author${incrementer}`, userBook.author);
  localStorage.setItem(`pageCount${incrementer}`, userBook.pageCount);
  localStorage.setItem(`read${incrementer}`, userBook.read);





}
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
  if (typeof document.forms[0] !== `undefined`) return;
  document.getElementById(`popup`).appendChild(newForm);



  const myForm = document.querySelectorAll(`form`);
  const submitInput = myForm[0].querySelector(`input[type="submit"]`);

  submitInput.addEventListener(`click`, function (e) {
    e.preventDefault();


    const inputBookName = document.getElementById(`title`);
    const inputAuthorName = document.getElementById(`author`);
    const inputPageCount = document.getElementById(`pagecount`);


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
    userBook = new Book(title, author, pageCount, read)
    addBookToLibrary(title, author, pageCount, read);


    clickCount = 0;
    document.getElementById("bookForm").reset();
    closeForm();
    addBookToWebpage();



  });

}
function removeBook(element) {
  let idName = element.getAttribute(`id`);
  let idNumber = idName.slice(-1);
  element.parentElement.remove();
  localStorage.removeItem(`title${idNumber}`)
  localStorage.removeItem(`author${idNumber}`)
  localStorage.removeItem(`pageCount${idNumber}`)
  localStorage.removeItem(`read${idNumber}`)
  incrementer--;
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
  const labelsElement = document.querySelector(`.labels`);
  const newCardRowElement = document.createElement(`div`);
  newCardRowElement.classList.add(`card-row`);
  newCardRowElement.setAttribute(`id`, `book${incrementer}`)

  labelsElement.after(newCardRowElement);

  const newRemoveIcon = document.createElement(`img`);
  newRemoveIcon.setAttribute(`src`, `icons/remove.png`);
  newRemoveIcon.classList.add(`labelvalue`);
  newRemoveIcon.setAttribute(`id`, `remove${incrementer}`)
  newRemoveIcon.setAttribute(`onclick`, `removeBook(this)`);
  const newH2TitleElement = document.createElement(`h2`);
  newH2TitleElement.classList.add(`labelvalue`);
  newH2TitleElement.setAttribute(`id`, `titlevalue${incrementer}`)
  newH2TitleElement.innerText = localStorage.getItem(`title${incrementer}`)

  const newH2AuthorElement = document.createElement(`h2`);
  newH2AuthorElement.classList.add(`labelvalue`);
  newH2AuthorElement.setAttribute(`id`, `authornamevalue${incrementer}`)
  newH2AuthorElement.innerText = localStorage.getItem(`author${incrementer}`)

  const newH2PageCountElement = document.createElement(`h2`);
  newH2PageCountElement.classList.add(`labelvalue`);
  newH2PageCountElement.setAttribute(`id`, `pagecountvalue${incrementer}`)
  newH2PageCountElement.innerText = localStorage.getItem(`pageCount${incrementer}`)

  const newButtonStatusElement = document.createElement(`button`);
  newButtonStatusElement.classList.add(`statusButton`);
  newButtonStatusElement.setAttribute(`id`, `statusbutton${incrementer}`)
  newButtonStatusElement.setAttribute(`onclick`, `changeStatus(this)`)
  newButtonStatusElement.innerText = localStorage.getItem(`read${incrementer}`)


  newCardRowElement.appendChild(newRemoveIcon)
  newCardRowElement.appendChild(newH2TitleElement)
  newCardRowElement.appendChild(newH2AuthorElement)
  newCardRowElement.appendChild(newH2PageCountElement)
  newCardRowElement.appendChild(newButtonStatusElement)

  incrementer++;


}
//loops through myLibrary[]
function looper(array) {
  for (let i = 0; i < array.length; i++) {
    title = array[i].title;
    author = array[i].author;
    pageCount = array[i].pageCount;
    read = array[i].read;
  }
}