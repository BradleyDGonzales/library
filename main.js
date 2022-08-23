/*

TODO: Figured out how to push objects into an array, so at this point just need to do the DOM manipulation along with a simple webpage to show the results

TODO 08/22: gathered input from data, DOM manipulation working, made a small popup form (nothing special), as of rn just need to
            actually display the form data onto the webpage as well as making everything required (check for `` or null or undefined values in input(?));

*/


const newBookButton = document.getElementById(`btnAddForm`);
let myLibrary = [];
let clickCount = 0;

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

  myLibrary.push({title: `${title}`,
  author: `${author}`,
  pageCount:`${pageCount}`,
  read: `${read}`});
  
  const newBook = new Book(title, author, pageCount, read)
  console.log(newBook);

}
//dynamic form
function makeForm() {
  popup.classList.add(`open-popup`);
  clickCount++;

  if (clickCount > 1) {
    return;
  }

  const doneButton = document.createElement(`button`);
  doneButton.setAttribute(`type`,`button`)
  doneButton.innerText = `Done`;


  const newForm = document.createElement(`form`);
  newForm.setAttribute(`id`,`bookForm`);

  const labelBookName = document.createElement(`label`);
  labelBookName.setAttribute(`for`,`title`);
  labelBookName.innerText = `Name of book: `

  const bookName = document.createElement(`input`);
  bookName.setAttribute(`type`,`text`);
  bookName.setAttribute(`name`,`title`);
  bookName.setAttribute(`id`,`title`);

  const labelAuthorName = document.createElement(`label`);
  labelAuthorName.setAttribute(`for`,`author`);
  labelAuthorName.innerText = `Author: `;

  const authorName = document.createElement(`input`);
  authorName.setAttribute(`type`,`text`);
  authorName.setAttribute(`name`,`author`);
  authorName.setAttribute(`id`,`author`);

  const labelPageCount = document.createElement(`label`);
  labelPageCount.setAttribute(`for`,`pagecount`);
  labelPageCount.innerText = `Page Count: `;

  const pageCountEl = document.createElement(`input`);
  pageCountEl.setAttribute(`type`,`number`);
  pageCountEl.setAttribute(`name`,`pagecount`);
  pageCountEl.setAttribute(`id`,`pagecount`);
  pageCountEl.setAttribute(`required`,``);

  const labelReadBook = document.createElement(`label`);
  labelReadBook.setAttribute(`for`,`read`);
  labelReadBook.innerText = `Read? `;

  const readBook = document.createElement(`input`);
  readBook.setAttribute(`type`,`checkbox`);
  readBook.setAttribute(`name`,`read`);
  readBook.setAttribute(`id`,`read`);
  readBook.setAttribute(`required`,``)
  const submitButton = document.createElement(`input`);
  submitButton.setAttribute(`type`,`submit`);
  submitButton.setAttribute(`onclick`,`closeForm()`)




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
  console.log(typeof document.forms[0])
  if (typeof document.forms[0] !== `undefined`) return;
  document.getElementById(`popup`).appendChild(newForm);



  const myForm = document.querySelectorAll(`form`);
  const submitInput = myForm[0].querySelector(`input[type="submit"]`);

  submitInput.addEventListener(`click`, function(e) {
    e.preventDefault();
    
    
    title = document.querySelector(`#title`).value
    author = document.querySelector(`#author`).value
    pageCount = document.querySelector(`#pagecount`).value
    read = document.querySelector(`#read`).value
    
    let userBook = new Book(title, author, pageCount, read)
    addBookToLibrary(title, author, pageCount, read);
    console.log(title, author, pageCount, read);
    console.table(userBook);
    
    console.log(myLibrary)
    clickCount = 0;
    document.getElementById("bookForm").reset();
    closeForm();
    



  });

}
function closeForm() {
  popup.classList.remove(`open-popup`);
}
//loops through myLibrary[]
function looper(array) {
  for (let i = 0; i < array.length;i++) {
    console.log(array[i]);
  }
}
looper(myLibrary);
