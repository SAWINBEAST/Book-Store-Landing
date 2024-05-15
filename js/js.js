const nameBook = JSON.parse(books);
// console.log(nameBook);

const mainCollection = document.createElement('div');
mainCollection.classList.add('collection-Books');
document.body.append(mainCollection);


addBooks();
addHeader();


function addHeader() {
    let header = document.createElement('header');
    header.classList.add('header');

    let nav = document.createElement('div');
    nav.classList.add('nav')
    nav.innerHTML = `<h1 class="name" >Магазин Книжек</h1>`;

    let form = document.createElement('form');
    nav.append(form);

    let inputSearch = document.createElement('input');
    inputSearch.setAttribute('type', 'search');
    inputSearch.setAttribute('placeholder', 'Введите название книги');
    inputSearch.classList.add('search');
    form.append(inputSearch);

    let nameSearch = document.createElement('h3');
    nameSearch.classList.add('nameSearch');
    nameSearch.innerText = "Поиск книг:";
    form.prepend(nameSearch);

    // let inputBut = document.createElement('input');
    // form.append(inputBut)
    // inputBut.setAttribute('type','submit');
    // inputBut.setAttribute('value','Найти Книгу');

    header.append(nav);

    document.body.prepend(header);
};


// function addSliderDiv{

// }


function addBooks() {
    nameBook.forEach(item => {
        createBookDiv(item);    //создание дива каждой книги. Нужна, что использовать её в сортировках. Кода становитсья гораздо меньше
    });
}


//многоуважаемая функция, которая встречается много где
function createBookDiv(item) {
    let divBooks = document.createElement('div');
    divBooks.classList.add('books');
    divBooks.setAttribute('id', 'book');
    mainCollection.append(divBooks);

    let divBookInfo = document.createElement('div');
    divBookInfo.classList.add('divBookInfo');
    divBooks.append(divBookInfo);
    
    //
    let div = document.createElement('div');
    let imageLink = document.createElement('img');
    imageLink.src = item.imageLink;
    imageLink.classList.add('img-Book');
    div.append(imageLink);

    let author = document.createElement('p');
    author.innerHTML += `Автор: <span>${item.author}</span>`;
    author.classList.add('pText');

    let country = document.createElement('p');
    country.innerHTML += `Страна: <span>${item.country}</span>`;
    country.classList.add('pText');


    let language = document.createElement('p');
    language.innerHTML += `Язык: <span>${item.language}</span>`;
    language.classList.add('pText');


    let pages = document.createElement('p');
    pages.innerHTML += `Страницы: <span>${item.pages}</span>`;
    pages.classList.add('pText');


    let title = document.createElement('p');
    title.classList.add('pText');
    title.innerHTML += `Название: <span>${item.title}</span>`;

    let year = document.createElement('p');
    year.innerHTML += `Год: <span>${item.year}</span>`;
    year.classList.add('pText');

    let modalBut = document.createElement('button');
    modalBut.classList.add('btn');
    modalBut.setAttribute('id', 'btnWin');
    modalBut.innerText = 'Подробнее';

    divBookInfo.append(div, author, country, language, pages, title, year, modalBut);
}


