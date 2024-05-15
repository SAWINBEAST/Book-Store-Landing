
//пускаем якорь и создаем новый элемент 

const divList = document.createElement('div');
divList.classList.add('divList');

const list_element = document.createElement('div');
list_element.classList.add('list');
list_element.setAttribute('id','list');
divList.append(list_element);


let allCollection = document.querySelector('.collection-Books');
allCollection.after(divList);

const pagination_element = document.createElement('div');     
pagination_element.setAttribute('id','pagination');
pagination_element.classList.add('pagenumbers');
list_element.after(pagination_element);


//создаем массив названий книг
list_items = [];
nameBook.forEach(item =>{
    list_items.push(item.title);
});


//Задаём важные переменные условия
let current_page = 1;
let rows = 5;



displayList(list_items, list_element, rows, current_page);
setUpPagination(list_items, pagination_element, rows);



function displayList (items, wrapper, rows_per_page, page) {
    wrapper.innerHTML="";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for(let i = 0; i<paginatedItems.length; i++) {
        // console.log(items[i]);
        let item = paginatedItems[i];

        let item_element = document.createElement('div');
        item_element.classList.add('item');
        item_element.innerHTML = `<span>${item}</span>`;

        wrapper.appendChild(item_element);
    }
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
        displayList(items, list_element, rows, current_page)
    
        let current_btn = document.querySelector('.pagenumbers button.active')
        current_btn.classList.remove('active');

        button.classList.add('active');

    });

    return button;
}


