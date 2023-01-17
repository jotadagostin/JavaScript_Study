// SEARCHING FOR DATAS WITH ARRAYS:

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T, Marv Eker",
            },
            {
                title: "O homem mais rico da babilonia",
                author:"George S. Classon",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kyioski e Sharon L."
            }
        ]
    },
    {
        category: 'Inteligencia Emocional',
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade-Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os sete hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ],
    },
];

const totalCategories = booksByCategory.length
console.log("total of categories: ", totalCategories);

for (let category of booksByCategory) {
    console.log('Total of books by category: ', category.category)
    console.log(category.books.length)
}

function contAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total of authors: ", authors.length);
}

contAuthors();

function bookOfAugustoCury() {
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === "Augusto Cury") {
                books.push(book.title)
            }
        }
    }

    console.log("Books of the Author(Augusto_Cury): ", books);
}
bookOfAugustoCury();

function bookOfAuthor(author) {
    let books = [];
    
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Books of the author ${author}: ${books.join(", ")}`);
}

bookOfAuthor('Augusto Cury');