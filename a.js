const arrOfObj = [{
    name: 'Artem',
    gender: 'male',
    age: 31
}, 
{
    name: 'Bazhena',
    gender: 'female',
    age: 28

}, {
    name: 'Kate',
    gender: 'female',
    age: 18
}
]

function findByName(arr, name) {
    for (const obj of arr) {
        if (obj.name == name){
            return obj
        }
    }
    return null
}

function checkByName(arr, name) {
    for (const obj of arr) {
        if (obj.name == name){
            return true
        }
    }
    return false
}
function containsName(arr, name) {
    for (const obj of arr) {
        if (Object.values(obj).includes(name)){
            return true
        }
    }
    return false
}
function containsName1(arr, name) {
    return arr.filter(obj=>obj.name==name).length >0
}

function containsName2(arr, name) {
    return arr.find(obj=>obj.name==name)!=undefined
}

function checkAge(arr,age) {
    const ageMin=[]
    for (const obj of arr) {
        if (obj.age <= age){
            ageMin.push(obj)
        }
    }
    return ageMin
}

function filtersAge(arr,age) {
    return arr.filter(obj=>obj.age<age)
}

console.log( containsName2(arrOfObj, 'Artem'))