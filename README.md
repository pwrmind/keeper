Keeper - very simple localStorage wrapper
========

```js
// Add Books to keeper:
keeper["books"] = [
    {
        id: 0,
        title: "A Tale of Two Cities"
    },
    {
        id: 1,
        title: "The Lord of the Rings"
    },
    {
        id: 2,
        title: "The Hobbit"
    }
]

// Get Books
var books = keeper["books"];

// Remove 'books'
delete keeper["books"];

```
