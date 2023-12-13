const bookList = document.querySelector('#book-list');

// Example book data - you can replace it with your own data
const books = [
  {
    title: 'Book 1',
    image: 'book1.jpg',
    author: 'Author 1',
    description: 'Description 1'
  },
  {
    title: 'Book 2',
    image: 'book2.jpg',
    author: 'Author 2',
    description: 'Description 2'
  },
  {
    title: 'Book 3',
    image: 'book3.jpg',
    author: 'Author 3',
    description: 'Description 3'
  }
];

// Loop through the books and create HTML elements to display them
books.forEach(book => {
  const bookElement = document.createElement('div');
  bookElement.classList.add('book');
  
  const imageElement = document.createElement('img');
  imageElement.src = book.image;
  
  const titleElement = document.createElement('h2');
  titleElement.textContent = book.title;
  
  const authorElement = document.createElement('p');
  authorElement.textContent = `By ${book.author}`;
  
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = book.description;
  
  bookElement.appendChild(imageElement);
  bookElement.appendChild(titleElement);
  bookElement.appendChild(authorElement);
  bookElement.appendChild(descriptionElement);
  
  bookList.appendChild(bookElement);
});
