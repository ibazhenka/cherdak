
import {groups, directions} from '../../../../data'
import {teachers, team} from '../../../../data'


function getTeacherFullName(idTeacher) {
    for (const teacher of Object.values(teachers)) {
        if (teacher.id == idTeacher) {
            return `${teacher.forename} ${teacher.surname}`
       }
    }
    return ''
}

function getTeacherDirections(directionsID) {
    let arr=[]
    for (const dir of directionsID)
        for (const direction of Object.values(directions)){
            if(direction.id == dir) {
                arr.push(direction.title)
            }
            continue
    }
    return arr.join(' | ')
}

function okField(group, filter, field) {
    if (filter[field]==undefined) {
        return true
    }
    if (filter[field].length == 0 ) {
        return true
    }
    if (Array.isArray(group[field])){
        for (const value of group[field]){
            if (filter[field].indexOf(value) != -1) {
                return true
            }
        }
        return false
    }
    else if (filter[field].indexOf(group[field]) == -1 ) {
            return false
    }
    return true
}

/**
 *  Функция выполняет проверку на выполнение условий фильтрации
 * @param {*} group проверяемый объект
 * @param {*} filter объект состоящий из условий фильтрации
 * @return {boolean} true если условия фильтрации прошли проверку
 */
function groupIsVisible(group, filter){
    if (!okField(group, filter, 'title')){
        return false
    }
    if (!okField(group, filter, 'type')){
        return false
    }
    if (!okField(group, filter, 'levels')){
        return false
    }
    return true
}

function filterGroups(groups, filter) {
    const groupsFiltered=[]
    for (const group of groups) {
        if(groupIsVisible(group, filter)==true){
            groupsFiltered.push(group)
        }
    }
    return groupsFiltered
}
// console.log(filterGroups(groups, {type:[], levels: [], title: []}))
// console.log(filterGroups(groups, {type:[], levels: ['Начинающие'], title: ['Аргентинское танго','Хастл']}))
/**
 * Функция возвращает отфильтрованный по запросу объект с данными необходимыми для отрисовки ячейки в таблице
 * @param {*} day День недели(в заголовке)
 * @param {*} timeStart Время начала занятия(в первой колонке)
 * @param {*} hall Зал (определяет порядок отрисовки в таблице)
 * @param {*} filter объект с данными для фильтрации
 * @return {*} Отфильтрованный объект, null - если не попадает под фильтрацию
 * 
 */
function getLesson(day, timeStart, hall, filter){
    for (const group of groups) {
        if (!groupIsVisible(group, filter)) {
            continue
        }
        for (const time of group.times){
            if(
                day.short.toLowerCase()==time.day && 
                timeStart.slice(0,2)==time.start.slice(0,2) && 
                hall==time.hall ) {
                return {
                    className: group.id, 
                    name: group.title, 
                    type: group.type,
                    time: `${time.start} - ${time.end}`, 
                    levels: group.levels, 
                    teacher: group.teachers
                }
            }
        } 
    }
    return null
}


export default getLesson 
export {getTeacherFullName, getTeacherDirections}
