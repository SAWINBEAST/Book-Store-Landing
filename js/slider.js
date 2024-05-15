//создаем нужные контейнеры и элементы и вставляем их
let sliderDiv = document.createElement('div');
sliderDiv.classList.add('sliderDiv');

let photoDiv = document.createElement('div');
photoDiv.classList.add('photoDiv');

let sliderHeader = document.createElement('div');
sliderHeader.classList.add('sliderHeader');

let titleSlider=document.createElement('h2');
titleSlider.classList.add('titleSlider');
titleSlider.innerText ='Популярные книги месяца:';
sliderHeader.append(titleSlider);

let collection = document.querySelector(".collection-Books");
collection.after(photoDiv);
collection.after(sliderDiv);
collection.after(sliderHeader);



  //Пускаем якоря для работы
  let photoCon = document.querySelector('.sliderDiv');
  let photoMain = document.querySelector('.photoDiv');



  //Коллекция фоток:
  nameBook.forEach(element => {
      let imgMini = document.createElement('img');
      imgMini.classList.add('imgMini');
      imgMini.setAttribute('src',`${element.imageLink}`);
      imgMini.setAttribute('onclick', `showClickedPhoto(${element})`); 
    // imgMini.addEventListener('click', showClickedPhoto(element) );
               //   imgMini.onclick = `showClickedPhoto(${element})`; 
      photoCon.append(imgMini);
  });


  function showClickedPhoto(element){
      //console.log(source);
      let imgMainClone = document.querySelector('.imgMain');
    //   imgMain.src = source.imageLink;
      imgMainClone.attributes.removeNamedItem('src');
      imgMainClone.setAttribute('src', `${element.imageLink}`); 
      photos.forEach((el, i) =>{
          if(source === el){
              num = i;
          }
      })
  }


  //Основная фотка
  let num = 4;

  let imgMain = document.createElement('img');
  imgMain.classList.add('imgMain');
  imgMain.setAttribute('src',`${showCurrentPhoto(num)}`);
  photoMain.append(imgMain);

  
  //обёртка для кнопок
 let buttonDiv = document.createElement('div');
 buttonDiv.classList.add('buttonDiv');
 photoDiv.append(buttonDiv);

   //Разбор кнопок:
  let prevPhoto = document.createElement('button');
  prevPhoto.classList.add('prevPhoto');
  prevPhoto.innerText = `назад`;
  prevPhoto.addEventListener("click", clickMinus);
  buttonDiv.append(prevPhoto);
  
  let slideShow = document.createElement('button');
  slideShow.classList.add('slideShow');
  slideShow.innerText = `слайдшоу`;
  slideShow.addEventListener("click", toSlideShow);
  buttonDiv.append(slideShow);
  
  let nextPhoto = document.createElement('button');
  nextPhoto.classList.add('nextPhoto');
  nextPhoto.innerText = `вперёд`;
  nextPhoto.addEventListener("click", clickPlus);
  buttonDiv.append(nextPhoto);




  //Области нажатия на фотке
  imgMain.addEventListener('click', (event)=> {
      let myTarget = event.target;
      event.clientX >= (myTarget.x + myTarget.clientWidth)/2 ? clickPlus() : clickMinus();
  });


  //Кнопки на клавиатуре и их переключения
  document.addEventListener('keydown', event =>{
      if(event.code == 'ArrowLeft')
          return clickMinus();
  })

  document.addEventListener('keydown', event =>{
      if(event.code == 'ArrowRight')
          return clickPlus();
  })

  


  // Functions description:

  function clickPlus(){
      if(num<(nameBook.length-1) && num>=0){
          num+=1;
      }
      else if(num=(nameBook.length-1)){
          num = 0;
      }
      changeSourceImg(num);

  }

  function clickMinus(){
      if(num<=(nameBook.length-1) && num>0){
          num-=1;
      }
      else if(num<=0){
          num = (nameBook.length-1);
      }
      changeSourceImg(num);
      
  }




  function changeSourceImg(num){
      imgMain.attributes.removeNamedItem('src');
      imgMain.src = showCurrentPhoto(num);      //   imgMain.setAttribute('src', showCurrentPhoto(num));
    //   console.log(showCurrentPhoto(num));
  }


  function showCurrentPhoto(num){
      let imgSourse = nameBook[num].imageLink;
      return imgSourse;
  }


  let timerId = 0;
  let clicked = true;
  
  function toSlideShow(){

    if(clicked) {
        timerId = setInterval(clickPlus, 1500); // 2 секунды мне показались долгими)
        clicked = false;
    }
    else {
        clearInterval(timerId);
        clicked = true;
    }
  }
