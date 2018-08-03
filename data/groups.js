
const groups= [{
    id:`irish`,
    title: `Ирландские танцы`,
    level: `Начинающие`,
    times: [ 
        {day:`пн`, start: `17:00`, end: `18:00`, hall: `bighall`},
        {day:`пт`, start: `17:00`, end: `18:00`, hall: `bighall`}
    ],
    teachers: [`voronina`]
},
{
    id:`irish`,
    title: `Ирландские танцы`,
    level: `Продолжающие`,
    times: [ 
        {day:`пн`, start: `18:00`, end: `19:00`, hall: `bighall`},
        {day:`пт`, start: `18:00`, end: `19:00`, hall: `bighall`},
        {day:`ср`, start: `20:00`, end: `21:00`, hall: `bighall`}
    ],
    teachers: [`voronina`]
},
{
    id:`irish`,
    title: `Ирландские танцы`,
    level: `Про`,
    times: [ 
        {day:`ср`, start: `18:00`, end: `19:00`, hall: `bighall`},
        {day:`ср`, start: `18:00`, end: `19:00`, hall: `bighall`},
        {day:`сб`, start: `15:00`, end: `16:00`, hall: `bighall`}
    ],
    teachers: [`voronina`]
},
{
    id:`irish`,
    title: `Ирландские танцы`,
    level: `Практика`,
    times: [ 
        {day:`сб`, start: `16:00`, end: `18:00`, hall: `bighall`},
    ],
    teachers: []
},
{
    id:`hustle`,
    title: `Хастл`,
    level: `Начинающие`,
    times: [ 
        {day:`пн`, start: `19:00`, end: `20:00`, hall: `bighall`},
        {day:`чт`, start: `19:00`, end: `20:00`, hall: `bighall`}
    ],
    teachers: [`severin`, `bolotina`]
},
{
    id:`hustle`,
    title: `Хастл`,
    level: `Продолжающие`,
    times: [ 
        {day:`вт`, start: `20:00`, end: `21:00`, hall: `bighall`},
        {day:`пт`, start: `20:00`, end: `21:00`, hall: `bighall`}
    ],
    teachers: [`severin`, `bolotina`]
},
{
    id:`hustle`,
    title: `Хастл`,
    level: `Про`,
    times: [ 
        {day:`вт`, start: `21:00`, end: `21:30`, hall: `bighall`},
        {day:`пт`, start: `21:00`, end: `21:30`, hall: `bighall`}
    ],
    teachers: [`severin`, `bolotina`]
},
{
    id:`hustle`,
    title: `Хастл`,
    level: `Техника`,
    times: [ 
        {day:`вс`, start: `17:00`, end: `18:30`, hall: `loft`}
    ],
    teachers: [`severin`, `bolotina`]
},
{
    id:`hustle`,
    title: `Хастл`,
    level: `Практика`,
    times: [ 
        {day:`вс`, start: `18:30`, end: `20:00`, hall: `loft`}
    ],
    teachers: []
},
{
    id:`bachata`,
    title: `Бачата`,
    level: `Начинающие`,
    times: [ 
        {day:`пн`, start: `19:00`, end: `20:00`, hall: `loft`},
        {day:`ср`, start: `19:00`, end: `20:00`, hall: `loft`}
    ],
    teachers: [`zolotarev`, `stanishevskaya`]
},
{
    id:`bachata`,
    title: `Бачата`,
    level: `Продолжающие`,
    times: [ 
        {day:`пн`, start: `20:00`, end: `21:00`, hall: `loft`},
        {day:`ср`, start: `20:00`, end: `21:00`, hall: `loft`}
    ],
    teachers: [`zolotarev`, `stanishevskaya`]
},
{
    id:`salsa`,
    title: `Руэда`,
    level: `Продолжающие`,
    times: [ 
        {day:`пн`, start: `21:00`, end: `22:00`, hall: `loft`},
        {day:`ср`, start: `21:00`, end: `22:00`, hall: `loft`}
    ],
    teachers: [`zolotarev`, `kokina`]
},
{
    id:`reggeton`,
    title: `Реггетон`,
    level: `Начинающие`,
    times: [ 
        {day:`вт`, start: `19:00`, end: `21:00`, hall: `loft`},
        {day:`чт`, start: `19:00`, end: `21:00`, hall: `loft`},
        {day:`сб`, start: `12:00`, end: `13:00`, hall: `bighall`}
    ],
    teachers: [`kokina`]
},
{
    id:`salsa`,
    title: `Сальса ЛА`,
    level: `Начинающие`,
    times: [ 
        {day:`вт`, start: `20:00`, end: `21:00`, hall: `loft`},
        {day:`чт`, start: `20:00`, end: `21:00`, hall: `loft`}
    ],
    teachers: [`kaurakov`, `kokina`]
},
{
    id:`tango`,
    title: `Аргентинское танго`,
    level: `Начинающие`,
    times: [ 
        {day:`вт`, start: `19:00`, end: `20:00`, hall: `bighall`},
        {day:`пт`, start: `19:00`, end: `20:00`, hall: `bighall`}
    ],
    teachers: [`bogdan`,`lacheva`]
},
{
    id:`tango`,
    title: `Аргентинское танго`,
    level: `Продолжающие`,
    times: [ 
        {day:`вт`, start: `20:00`, end: `21:00`, hall: `bighall`},
        {day:`пт`, start: `20:00`, end: `21:00`, hall: `bighall`}
    ],
    teachers: [`bogdan`,`perykina`]
},
{
    id:`tango`,
    title: `Аргентинское танго`,
    level: `Про`,
    times: [ 
        {day:`вт`, start: `21:00`, end: `22:30`, hall: `bighall`},
        {day:`пт`, start: `21:00`, end: `22:30`, hall: `bighall`}
    ],
    teachers: [`bogdan`,`perykina`]
},
{
    id:`tango`,
    title: `Аргентинское танго`,
    level: `Техника`,
    times: [ 
        {day:`вс`, start: `18:00`, end: `19:30`, hall: `bighall`}
    ],
    teachers: [``]
},
{
    id:`tango`,
    title: `Аргентинское танго`,
    level: `Практика`,
    times: [ 
        {day:`вс`, start: `19:30`, end: `21:00`, hall: `bighall`}
    ],
    teachers: [``]
},
{
    id:`tango`,
    title: `Аргентинское танго`,
    level: `Начинающие-2`,
    times: [ 
        {day:`сб`, start: `10:00`, end: `11:00`, hall: `bighall`},
        {day:`сб`, start: `11:00`, end: `12:00`, hall: `bighall`}
    ],
    teachers: [``]
},
{
    id:`salsa`,
    title: `Cальса Касино`,
    level: `Начинающие`,
    times: [ 
        {day:`пт`, start: `20:00`, end: `21:00`, hall: `loft`},
        {day:`пт`, start: `21:00`, end: `22:00`, hall: `loft`}
    ],
    teachers: [`zolotarev`, `kokina`]
},
{
    id:`salsa`,
    title: `Cальса Касино`,
    level: `Женский стиль`,
    times: [ 
        {day:`сб`, start: `13:00`, end: `14:00`, hall: `bighall`}
    ],
    teachers: [`kokina`]
},
]
module.exports = groups