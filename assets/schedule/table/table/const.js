const qw = [ 
    {id: "1", short:"Пн", full: "Понедельник"}, 
    {id: "2", short:"Вт", full: "Вторник"}, 
    {id: "3", short:"Ср", full: "Среда"}, 
    {id: "4", short:"Чт", full: "Четверг"}, 
    {id: "5", short:"Пт", full: "Пятница"}, 
    {id: "6", short:"Сб", full: "Суббота"}, 
    {id: "0", short:"Вс", full: "Воскресенье"}];

const timeIntervals = [];
for (var i = 12; i < 22; i++) {
    timeIntervals.push(i+":00")
}






export {timeIntervals}
export default qw
