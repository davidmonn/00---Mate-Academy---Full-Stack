const books = ([
  ['Going Over', 'Brazen'],
  ['The Enemy'],
  ['Followers', 'Belle Epoque']
]);

function sortBooks(shelves) {
  const fullBook = [];

  for (const shelf of shelves) {
    for (const book of shelf) {
      fullBook[fullBook.length] = book;
    }
  }

  for (let repeat = 0; repeat < fullBook.length - 1; repeat++) {
    for (let comp = 0; comp < fullBook.length - 1; comp++) {
      const save = fullBook[comp];

      if (save > fullBook[comp + 1]) {
        fullBook[comp] = fullBook[comp + 1];
        fullBook[comp + 1] = save;
      }
    }
  }

  return fullBook;
}

const teste = sortBooks(books);
console.log(teste);
