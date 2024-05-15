let butOne = document.querySelector('#butOne');

butOne.addEventListener('click',sortIncrease);


function sortIncrease() {
    let removeDiv = document.querySelector('.collection-Books');
    removeDiv.innerHTML = '';
   
    let resultSortIncrease = [...nameBook].sort((a,b) => {
        if (a['author'] < b['author']) return -1;
    });
    
    resultSortIncrease.forEach(item => {
        createBookDiv(item);
    });
}




