// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [23,10,100500,'red','green',-500,'18',true,false,'ok']
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 ={
  title:'Дракула',
  pageCount:500,
  genre:'fantasy'


}
let book2 ={
  title:'Жестокий принц',
  pageCount:477,
  genre:'drama'


}
let book3={
  title:'Пудинг',
  pageCount:331,
  genre:'детектив'


}
console.log(book1,book2,book3)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 ={
  title:'Дракула',
  pageCount:500,
  genre:'fantasy',
  authors:['name','age']


}
let book5 ={
  title:'Жестокий принц',
  pageCount:477,
  genre:'drama',
  authors:['name','age']


}
let book6= {
  title: 'Пудинг',
  pageCount: 331,
  genre: 'детектив',
  authors: ['name', 'age']
}
console.log(book4,book5,book6)



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
  {name:'Денис',username:'Собянін',password:555},
  {name:'Сабіна',username:'Собяніна',password: 121212},
  {name:'Макс',username:'Рахуба',password:1111111},
  {name:'Дмитро',username:'Боровий',password:1007},
  {name:'Ганна',username:'Тупіка',password:6565},
  {name:'Тамара',username:'Бос',password:666},
  {name:'Світлана',username:'Хоменко',password:6},
  {name:'Ігор',username:'Травматолог',password:455},
  {name:'Олена',username:'Собяніна',password:333},
  {name:'Принц',username:'Пес',password:100500}

]
console.log(users[0]['password'])
console.log(users[1]['password'])
console.log(users[2]['password'])
console.log(users[3]['password'])
console.log(users[4]['password'])
console.log(users[5]['password'])
console.log(users[6]['password'])
console.log(users[7]['password'])
console.log(users[8]['password'])
console.log(users[9]['password'])
// Логічні розгалуження:
//   - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


  // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
