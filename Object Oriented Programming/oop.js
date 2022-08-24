/*
The Reading List: An object-oriented book-list!

Create a class BookList
Create another class called Book
BookLists should have the following properties:
  read: Number of books marked as read
  unread: Number of books marked not read yet
  toRead: Array of books that you plan to read
  readBooks: Array of books that you have already finished reading
  nextBook: A reference to the next book to read (book object)
  currentBook: A reference to the current book being read (book object)
  lastBook: A reference to the last book you read (book object)

Each Book should have several properties:
  Title
  Genre
  Author
  Read (true or false)

Every Booklist should have a few methods:
  .add(book): 
    should add a book to the toRead array and increment the number of unread books
  .finishCurrentBook()
    should mark the currentBook as "read"
    Add the currentBook to the "readBooks" array
    Change the lastBook to be the book that just got finished
    Change the currentBook to be the nextBook to be read
    Change the nextBook property to be the first unread book you find in the list of books
    Increment the "read" books & Decrement the number of "unread" books

Booklists and Books might need more methods than that. Try to think of more that might be useful.

Also, if you find the time, do not forget to handle edge cases. For example,
- I need to add the very first book. that book will be my currentBook. When I add another one, then the behavior described above in the add function should apply.
- What about if I finished all books? handle when the array of next books is empty or when I don't have a current book anymore.
*/