const bookList = document.querySelector('#book-list');

// Example book data - you can replace it with your own data
const books = [
  {
    title: 'Autumn',
    image: 'book1.jpg',
    author: 'Charles Petter',
    description: 'This book is a thrilling adventure story set in a dystopian future. It follows the journey of a young protagonist who must navigate through a dangerous world while facing various challenges and uncovering hidden truths. The story is filled with suspense, action, and thought-provoking themes, making it a captivating read for all ages'
  },
  {
    title: 'The covenant of water',
    image: 'book2.jpg',
    author: 'Abraham verghese',
    description: 'This book is a thrilling adventure story set in a dystopian future. It follows the journey of a young protagonist who must navigate through a dangerous world while facing various challenges and uncovering hidden truths. The story is filled with suspense, action, and thought-provoking themes, making it a captivating read for all ages'
  },
  {
    title: 'The tiny Dragon',
    image: 'book3.png',
    author: 'Marthew Robbert',
    description: 'This book is a thrilling adventure story set in a dystopian future. It follows the journey of a young protagonist who must navigate through a dangerous world while facing various challenges and uncovering hidden truths. The story is filled with suspense, action, and thought-provoking themes, making it a captivating read for all ages'
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




