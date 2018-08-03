const qw = [ 
    {short:"Пн", full: "Понедельник"}, 
    {short:"Вт", full: "Вторник"}, 
    {short:"Ср", full: "Среда"}, 
    {short:"Чт", full: "Четверг"}, 
    {short:"Пт", full: "Пятница"}, 
    {short:"Сб", full: "Суббота"}, 
    {short:"Вс", full: "Воскресенье"}];

const timeIntervals = [];
for (var i = 10; i < 22; i++) {
    timeIntervals.push(i+":00")
}

const direction = [
    'Аргентинское танго',
    'Бачата',
    'Сальса Касино',
    'Сальса ЛА',
    'Хастл',
    'Руэда',
    'Реггетон',
    'Ирландские танцы'];

const type = [
    'Техника',
    'Практика',
    'Модерируемая практика',
    'Спецкурс',
    'Женский стиль',
    'Открытый урок'];

const level = [
    'Начинающие',
    'Продолжающие',
    'ПРО'];
const voronina = {name:"voronina", firstname: "Анна", surname: "Воронина"}
const bogdan = {name:"bogdan", firstname: "Павел", surname: "Богдан"}
const lacheva = {name:"lacheva", firstname: "Ольга", surname: "Лачева"}
const perykina = {name:"perykina", firstname: "Марина", surname: "Перякина"}
const zholobova = {name:"zholobova", firstname: "Алёна", surname: "Жолобова"}
const zolotarev = {name:"zolotarev", firstname: "Константин", surname: "Золотарёв"}
const kaurakov = {name:"kaurakov", firstname: "Павел", surname: "Каураков"}
const stanishevskaya = {name:"stanishevskaya", firstname: "Ольга", surname: "Станишевская"}
const nepomnyaschaya = {name:"nepomnyaschaya", firstname: "Юлия", surname: "Непомнящая"}
const bolotina = {name:"bolotina", firstname: "Анна", surname: "Болотина"}
const mikhailov = {name:"mikhailov", firstname: "Сергей", surname: "Михайлов"}
const severin = {name:"severin", firstname: "Алексей", surname: "Северин"}



export {direction, type, level}
export {timeIntervals, lessons}
export default qw
