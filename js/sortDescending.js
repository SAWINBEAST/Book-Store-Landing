let butTwo = document.querySelector('#butTwo');

butTwo.addEventListener('click',sortDescending);

function sortDescending() {
    let removeDiv = document.querySelector('.collection-Books');
    removeDiv.innerHTML = '';
    
    let resultSortDescending = [...nameBook].sort((a,b) => {
        if (a['author'] > b['author']) return -1;
    });
    
    //нужно вставить функцию из файла  js.js, чтобы не повторять код
    resultSortDescending.forEach(item => {
        createBookDiv(item);
    });    
};
