
//пускаем якорь и создаем новый элемент 
let collectionBooks = document.querySelector('.collection-Books');

//создаём див для кнопок
const pagination_element = document.createElement('div');     
pagination_element.setAttribute('id','pagination');
pagination_element.classList.add('pagenumbers');
collectionBooks.after(pagination_element);


//Задаём важные переменные условия
let current_page = 1;
let rows = 4;   //элементов на странице



displayList(nameBook, collectionBooks, rows, current_page);
setUpPagination(nameBook, pagination_element, rows);



function displayList (items, wrapper, rows_per_page, page) {
    wrapper.innerHTML="";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    paginatedItems.forEach(item => {
        createBookDiv(item);
    })
}


function setUpPagination (items, wrapper, rows_per_page) {
    wrapper.innerHTML="";

    let page_count = Math.ceil(items.length / rows_per_page);
    for(let i=1; i<page_count; i++) {
       let btn = paginationButton(i, items);
       wrapper.appendChild(btn);
    }
}


function paginationButton (page, items) {   
    let button = document.createElement('button');
    button.innerText = page;

    if (current_page == page) button.classList.add('active');
    
    button.addEventListener('click', function () {
        current_page = page;
        displayList(items, collectionBooks, rows, current_page)
    
        let current_btn = document.querySelector('.pagenumbers button.active')
        current_btn.classList.remove('active');

        button.classList.add('active');

    });

    return button;
}


