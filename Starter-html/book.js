const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]

const totalCategory = booksByCategory.length
console.log(`Quantidades de categorias: ${totalCategory}`)

let authorTotal = []

for (let category of booksByCategory) {
    for(let book of category.books) {
        let authorNotIncluded = authorTotal.includes(book.author)
        if (!authorNotIncluded) {
            authorTotal.push(book.author)
        }
    }
    console.log(`Quantidades de livros da categoria ${category.category}: ${category.books.length}`)
}

console.log(`Quantidades de autores: ${authorTotal.length}`)

function bookByAuthorName(name) {
    for (let category of booksByCategory) {
        for(let book of category.books) {
            let authorExist = book.author.includes(name)
            if(authorExist) {
                console.log(book.title)
            }
        }
    }

    return
}

bookByAuthorName("Augusto Cury")
bookByAuthorName("Stephen")
