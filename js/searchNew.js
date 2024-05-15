let search = document.querySelector('.search');

search.oninput = function () {

    //соберем контейнер-бук по новой, засунув туда вообще все книги, несмотря на то, что мы используем сейчас пагинацию. Поиск нужно осуществить по всему перечню книг
    nameBook.forEach(elem => {
        createBookDiv(elem);
    });

    let value = this.value.trim().toLowerCase();
    let books = document.querySelectorAll('.books > .divBookInfo');


    if (value != '') {
        books.forEach(elem => {
            const liName = elem.children[5];
            // console.log(liName);

            const liTitle = liName.children[0].textContent.toLowerCase();

            if(liTitle.search(value) == -1 ) {
                // console.log(elem.parentElement);
                elem.parentElement.classList.add('hide');
            } 
            //чтобы стирать постепенно , и видеть актуальные книги
            else {
                elem.parentElement.classList.remove('hide');
            }

        });
    }

    //для стирания строки ввода
    else {
        books.forEach(elem => {
            elem.parentElement.classList.remove('hide')
        })
    }
};