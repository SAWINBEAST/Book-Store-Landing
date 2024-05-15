const modalController= ({modal, btnOpen, btnClose, time}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);

    modalElem.style.cssText = `
    display:flex;
    visibility:hidden;
    opacity:0;
    transition: opacity ${time}ms ease-in-out;
    `;

    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        window.addEventListener('keydown', closeModal);
    }


    const closeModal = event =>{
        const target = event.target;

        if (
            target === modalElem || 
            target.closest(btnClose) ||
            event.code === 'Escape'
            ) {

            modalElem.style.opacity = 0;

            setTimeout(()=>{
                modalElem.style.visibility = 'hidden';
            },300);

            window.removeEventListener('keydown', closeModal);
        }

    }

    buttonElems.forEach(btn =>{
        btn.addEventListener('click', openModal); 
    });
    modalElem.addEventListener('click', closeModal); 

}

//
modalController({
    modal: '.modal',
    btnOpen: '.btn',
    btnClose: '.modal__close',
    time: 300
});
