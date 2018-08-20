
const groups= [{
    id:'irish',
    title: 'Ирландские танцы',
    levels: ['Начинающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'пн', start: '17:00', end: '18:00', hall: 'bighall'},
        {day:'пт', start: '17:00', end: '18:00', hall: 'bighall'}
    ],
    teachers: ['zholobova']
},
{
    id:'irish',
    title: 'Ирландские танцы',
    levels: ['Продолжающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'пн', start: '18:00', end: '19:00', hall: 'bighall'},
        {day:'пт', start: '18:00', end: '19:00', hall: 'bighall'},
        {day:'ср', start: '20:00', end: '21:00', hall: 'bighall'}
    ],
    teachers: ['zholobova']
},
{
    id:'irish',
    title: 'Ирландские танцы',
    levels: ['Про'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'ср', start: '17:00', end: '18:00', hall: 'bighall'},
        {day:'ср', start: '18:00', end: '19:00', hall: 'bighall'},
        {day:'сб', start: '15:00', end: '16:00', hall: 'bighall'}
    ],
    teachers: ['voronina']
},
{
    id:'irish',
    title: 'Ирландские танцы',
    levels: ['Начинающие', 'Про','Продолжающие'],
    type: 'Практика',
    times: [ 
        {day:'сб', start: '16:00', end: '18:00', hall: 'bighall'},
    ],
    teachers: []
},
{
    id:'hustle',
    title: 'Хастл',
    levels: ['Начинающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'пн', start: '19:00', end: '20:00', hall: 'bighall'},
        {day:'чт', start: '19:00', end: '20:00', hall: 'bighall'}
    ],
    teachers: ['severin', 'bolotina']
},
{
    id:'hustle',
    title: 'Хастл',
    levels: ['Продолжающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'пн', start: '20:00', end: '21:00', hall: 'bighall'},
        {day:'чт', start: '20:00', end: '21:00', hall: 'bighall'}
    ],
    teachers: ['severin', 'bolotina']
},
{
    id:'hustle',
    title: 'Хастл',
    levels: ['Про'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'пн', start: '21:00', end: '21:30', hall: 'bighall'},
        {day:'чт', start: '21:00', end: '21:30', hall: 'bighall'}
    ],
    teachers: ['mikhaylov', 'bolotina']
},
{
    id:'hustle',
    title: 'Хастл',
    levels: ['Начинающие', 'Про', 'Продолжающие'],
    type: 'Техника',
    times: [ 
        {day:'вс', start: '17:00', end: '18:30', hall: 'loft'}
    ],
    teachers: ['mikhaylov', 'bolotina']
},
{
    id:'hustle',
    title: 'Хастл',
    levels: ['Начинающие', 'Про', 'Продолжающие'],
    type: 'Практика',
    times: [ 
        {day:'вс', start: '18:30', end: '20:00', hall: 'loft'}
    ],
    teachers: []
},
{
    id:'bachata',
    title: 'Бачата',
    levels: ['Начинающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'пн', start: '19:00', end: '20:00', hall: 'loft'},
        {day:'ср', start: '19:00', end: '20:00', hall: 'loft'}
    ],
    teachers: ['zolotarev', 'stanishevskaya']
},
{
    id:'bachata',
    title: 'Бачата',
    levels: ['Продолжающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'пн', start: '20:00', end: '21:00', hall: 'loft'},
        {day:'ср', start: '20:00', end: '21:00', hall: 'loft'}
    ],
    teachers: ['zolotarev', 'stanishevskaya']
},
{
    id:'salsa',
    title: 'Руэда',
    levels: ['Продолжающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'пн', start: '21:00', end: '22:00', hall: 'loft'},
        {day:'ср', start: '21:00', end: '22:00', hall: 'loft'}
    ],
    teachers: ['zolotarev', 'kokina']
},
{
    id:'reggeton',
    title: 'Реггетон',
    levels: ['Начинающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'вт', start: '19:00', end: '21:00', hall: 'loft'},
        {day:'чт', start: '19:00', end: '21:00', hall: 'loft'},
        {day:'сб', start: '12:00', end: '13:00', hall: 'bighall'}
    ],
    teachers: ['nepomnyaschaya']
},
{
    id:'salsa',
    title: 'Сальса ЛА',
    levels: ['Начинающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'вт', start: '20:00', end: '21:00', hall: 'loft'},
        {day:'чт', start: '20:00', end: '21:00', hall: 'loft'}
    ],
    teachers: ['kaurakov', 'nepomnyaschaya']
},
{
id:'salsa',
title: 'Сальса ЛА',
levels: ['Продолжающие'],
type: 'Регулярное занятие',
times: [ 
    {day:'вт', start: '21:00', end: '22:00', hall: 'loft'},
    {day:'чт', start: '21:00', end: '22:00', hall: 'loft'}
],
teachers: ['kaurakov', 'nepomnyaschaya']
},
{
    id:'tango',
    title: 'Аргентинское танго',
    levels: ['Начинающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'вт', start: '19:00', end: '20:00', hall: 'bighall'},
        {day:'пт', start: '19:00', end: '20:00', hall: 'bighall'}
    ],
    teachers: ['bogdan','lacheva']
},
{
    id:'tango',
    title: 'Аргентинское танго',
    levels: ['Продолжающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'вт', start: '20:00', end: '21:00', hall: 'bighall'},
        {day:'пт', start: '20:00', end: '21:00', hall: 'bighall'}
    ],
    teachers: ['bogdan','perykina']
},
{
    id:'tango',
    title: 'Аргентинское танго',
    levels: ['Про'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'вт', start: '21:00', end: '22:30', hall: 'bighall'},
        {day:'пт', start: '21:00', end: '22:30', hall: 'bighall'}
    ],
    teachers: ['bogdan','perykina']
},
{
    id:'tango',
    title: 'Аргентинское танго',
    levels: ['Начинающие', 'Про', 'Продолжающие'],
    type: 'Техника',
    times: [ 
        {day:'вс', start: '18:00', end: '19:30', hall: 'bighall'}
    ],
    teachers: []
},
{
    id:'tango',
    title: 'Аргентинское танго',
    levels: ['Начинающие', 'Про', 'Продолжающие'],
    type: 'Практика',
    times: [ 
        {day:'вс', start: '19:30', end: '21:00', hall: 'bighall'}
    ],
    teachers: []
},
{
    id:'tango',
    title: 'Аргентинское танго',
    levels: ['Начинающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'сб', start: '10:00', end: '11:00', hall: 'bighall'},
        {day:'сб', start: '11:00', end: '12:00', hall: 'bighall'}
    ],
    teachers: ['bogdan','lacheva']
},
{
    id:'salsa',
    title: 'Сальса Касино',
    levels: ['Начинающие'],
    type: 'Регулярное занятие',
    times: [ 
        {day:'пт', start: '20:00', end: '21:00', hall: 'loft'},
        {day:'пт', start: '21:00', end: '22:00', hall: 'loft'}
    ],
    teachers: ['zolotarev', 'nepomnyaschaya']
},
{
    id:'salsa',
    title: 'Сальса Касино',
    levels: ['Начинающие', 'Про', 'Продолжающие'],
    type: 'Женский стиль',
    times: [ 
        {day:'сб', start: '13:00', end: '14:00', hall: 'bighall'}
    ],
    teachers: ['kokina']
},
]
module.exports = groups