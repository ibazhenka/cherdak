const qw = [ 
    {short:"Пн", full: "Понедельник"}, 
    {short:"Вт", full: "Вторник"}, 
    {short:"Ср", full: "Среда"}, 
    {short:"Чт", full: "Четверг"}, 
    {short:"Пт", full: "Пятница"}, 
    {short:"Сб", full: "Суббота"}, 
    {short:"Вс", full: "Воскресенье"}];

const timeIntervals = [];
for (var i = 12; i < 22; i++) {
    timeIntervals.push(i+":00")
}






export {timeIntervals}
export default qw
