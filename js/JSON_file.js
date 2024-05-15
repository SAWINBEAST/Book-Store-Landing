let books = `[
    {
      "author": "Данте Алигьери",
      "country": "Италия",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Итальянский",
      "pages": 928,
      "title": "Божественная комедия",
      "year": 1315
    },
    {
      "author": "Джейн Остин",
      "country": "Великобритания",
      "imageLink": "images/pride-and-prejudice.jpg",
      "language": "Английский",
      "pages": 226,
      "title": "Гордость и предубеждение",
      "year": 1813
    },
    {
      "author": "Альберт Камю",
      "country": "Алжир",
      "imageLink": "images/l-etranger.jpg",
      "language": "Французский",
      "pages": 185,
      "title": "Посторонний",
      "year": 1942
    },
    {
      "author": "Мигель де Сервантес",
      "country": "Испания",
      "imageLink": "images/don-quijote-de-la-mancha.jpg",
      "language": "Испанский",
      "pages": 1056,
      "title": "Дон Кихот",
      "year": 1610
    },
    {
      "author": "Чарльз Диккенс",
      "country": "Великобритания",
      "imageLink": "images/great-expectations.jpg",
      "language": "Английский",
      "pages": 194,
      "title": "Большие надежды",
      "year": 1861
    },
    {
      "author": "Федор Михайлович Достоевский",
      "country": "Россия",
      "imageLink": "images/crime-and-punishment.jpg",
      "language": "Русский",
      "pages": 551,
      "title": "Преступление и наказание",
      "year": 1866
    },
    {
      "author": "Джордж Эллиот",
      "country": "Великобритания",
      "imageLink": "images/middlemarch.jpg",
      "language": "Английский",
      "pages": 800,
      "title": "Мидлмарч",
      "year": 1871
    },
    {
      "author": "Габриэль Гарсия Маркес",
      "country": "Колумбия",
      "imageLink": "images/one-hundred-years-of-solitude.jpg",
      "language": "Испанский",
      "pages": 417,
      "title": "Сто лет одиночества",
      "year": 1967
    },
    {
      "author": "Иоганн Вольфганг фон Гёте",
      "country": "Саксен-Веймар",
      "imageLink": "images/faust.jpg",
      "language": "Немецкий",
      "pages": 158,
      "title": "Фауст",
      "year": 1832
    },
    {
      "author": "Николай Васильевич Гоголь",
      "country": "Россия",
      "imageLink": "images/dead-souls.jpg",
      "language": "Русский",
      "pages": 432,
      "title": "Мертвые души",
      "year": 1842
    },

    {
      "author": "Эрнест Хемингуэй",
      "country": "Великобритания",
      "imageLink": "images/the-old-man-and-the-sea.jpg",
      "language": "Английский",
      "pages": 128,
      "title": "Старик и море",
      "year": 1952
    },
    {
      "author": "Гомер",
      "country": "Греция",
      "imageLink": "images/the-iliad-of-homer.jpg",
      "language": "Греческий",
      "pages": 608,
      "title": "Илиада",
      "year": -735
    },
    {
      "author": "Франц Кафка",
      "country": "Чехословакия",
      "imageLink": "images/the-castle.jpg",
      "language": "Немецкий",
      "pages": 352,
      "title": "Замок",
      "year": 1926
    },
    {
      "author": "Ясунари Кавабата",
      "country": "Япония",
      "imageLink": "images/the-sound-of-the-mountain.jpg",
      "language": "Японский",
      "pages": 288,
      "title": "Стон горы",
      "year": 1954
    },

    {
      "author": "Астрид Линдгрен",
      "country": "Швеция",
      "imageLink": "images/pippi-longstocking.jpg",
      "language": "Шведский",
      "pages": 160,
      "title": "Пеппи Длинныйчулок",
      "year": 1945
    },
    {
      "author": "Лу Синь",
      "country": "Китай",
      "imageLink": "images/diary-of-a-madman.jpg",
      "language": "Китайский",
      "pages": 389,
      "title": "Дневник сумасшедшего",
      "year": 1918
    },
    {
      "author": "Томас Манн",
      "country": "Германия",
      "imageLink": "images/buddenbrooks.jpg",
      "language": "Немецкий",
      "pages": 736,
      "title": "Будденброки",
      "year": 1901
    },

    {
      "author": "Герман Мелвилл",
      "country": "Великобритания",
      "imageLink": "images/moby-dick.jpg",
      "language": "Английский",
      "pages": 378,
      "title": "Моби Дик",
      "year": 1851
    },
   
    {
      "author": "Джордж Оруэлл",
      "country": "Великобритания",
      "imageLink": "images/nineteen-eighty-four.jpg",
      "language": "Английский",
      "pages": 272,
      "title": "1984",
      "year": 1949
    },
    {
      "author": "Марсель Пруст",
      "country": "Франция",
      "imageLink": "images/a-la-recherche-du-temps-perdu.jpg",
      "language": "Французский",
      "pages": 2408,
      "title": "В поисках утраченного времени",
      "year": 1920
    },
    {
      "author": "Джонатан Свифт",
      "country": "Ирландия",
      "imageLink": "images/gullivers-travels.jpg",
      "language": "Английский",
      "pages": 178,
      "title": "Приключения Гулливера",
      "year": 1726
    },
    {
      "author": "Вальмики",
      "country": "Индия",
      "imageLink": "images/ramayana.jpg",
      "language": "Санскрит",
      "pages": 152,
      "title": "Рамаяна",
      "year": -450
    },
    {
      "author": "Вергилий",
      "country": "Римская Империя",
      "imageLink": "images/the-aeneid.jpg",
      "language": "Латынь",
      "pages": 442,
      "title": "Энеида",
      "year": -23
    },
    {
      "author": "Вьяса",
      "country": "Индия",
      "imageLink": "images/the-mahab-harata.jpg",
      "language": "Санскрит",
      "pages": 276,
      "title": "Махабрахата",
      "year": -700
    },
    {
      "author": "Маргерит Юрсенар",
      "country": "Бельгия",
      "imageLink": "images/memoirs-of-hadrian.jpg",
      "language": "Французский",
      "pages": 408,
      "title": "Воспоминания Адриана",
      "year": 1951
    }
  ]`

// let nameBook = JSON.parse(books)
// console.log(nameBook)