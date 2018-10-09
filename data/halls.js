
const arendaData= {
    bighall: {
      id: 'bighall',
      title: 'Большой зал',
      area: '100 м²',
      description: 'Большой светлый зал прямоугольной формы. Расположен на 7 этаже. По двум стенам расположено 7 окон. Площадь других двух стен оборудована по периметру зеркалами (высота 2 м). Пол — ламинированный паркет хорошего качества. Хорошее естественное и искусственное освещение. Широкие двери ведут в зону отдыха и ресепшна.',
      equipments: [
        'Музыкальное оборудование — две колонки, пульт, сабвуфер высокой мощности, ноутбук.', 
        'Световое оборудование — дополнительные цветные светильники.',],
      addServices:[
        'Проектор высокой мощности + экран.', 
        'Магнитная доска + маркеры.'],
      cost: '700',      
      department:'Авиаторов',
      imgs: ['bighall.jpg','bighall1.jpg'],
      type: 'dancehall',
    },
    loft: {
      id:'loft',
      title: 'Мансарда',
      area: '75 м²',
      description: 'Зал с дизайнерским интерьером в стиле «лофт». Расположен на 8 этаже. Два высоких окна расположены по одной стене. Три другие стены оборудованы зеркалами (высота 2,5 м). Пол — ламинированный паркет хорошего качества. Хорошее естественное и искусственное освещение. Фортепиано.',
      equipments:[
        'Музыкальное оборудование — две колонки, пульт, сабвуфер высокой мощности, ноутбук.',
        'Световое оборудование — три световых сценария светильников. Мебель (по необходимости) — 5 круглых столов, 30 стульев, 20 подушек (можно использовать на полу).',],
      addServices:[
        'Проектор высокой мощности + экран.',
        'Магнитная доска + маркеры.',],
        cost: '500',
        department:'Авиаторов',
        imgs: ['loft.jpg', 'loft1.jpg', 'loft2.jpg', 'loft3.jpg', 'loft4.jpg', ],
        type: 'dancehall',
    },
    poledancehall: {
      id:'poledancehall', 
      title: 'Пилонный зал',
      area: '20 м²',
      description: 'Зал прямоугольной формы. Пол — ламинированный паркет хорошего качества. Хорошее искусственное освещение. Две стены оборудованы зеркалами (высота 2 м).',
      equipments:[
        'Музыкальное оборудование — две колонки, ноутбук.',
        'Два пилона — стационарный и крутящийся.',
        '20 подушек (можно использовать на полу).',],
      addServices:[
        'Пенополиуретановые коврики.',
        'Бумажные полотенца.'],
      cost: '350',
      department:'Авиаторов',
      imgs: ['poledancehall.jpg'],
      type: 'dancehall',
    },
    reception: {
      id: 'reception',
      title: 'Ресепшн',
      description:'Зона отдыха оборудована большим мягким диваном П-образной формы с журнальным столиком посередине. Хорошее искусственное освещения (два сценария — яркий верхний и приглушенный нижний свет).',
      equipments:[
        'Плазменный телевизор с большой диагональю.',
        'DVD проигрыватель.',
        'Кулер — чистая вода, одноразовые стаканчики.',
        'Магнитная доска + маркеры.'],
        addServices:'Стеклянные стаканы и глубокие тарелки, одноразовая посуда, микроволновка, чайник, френчпрессы, подносы, лед для коктейлей, холодильник.',
        cost: '',
        department:'Авиаторов',
        imgs: ['reception.jpg', 'reception1.jpg',],
        type: 'otherhall',
    },
    wardrobes: {
      id:'wardrobes',
      title: 'Гардеробные',
      description: 'Две удобные гардеробные.',
      equipments:'Вешалки для верхней одежды, квадратные ячейки для одежды и обуви, лавочки, зеркало.',
      addServices:'',
      cost: '',
      department:'Авиаторов',
      imgs:['wardrobes.jpg'],
      type: 'otherhall',
    },
    wc: {
      id:'wc', 
      title: 'Туалетные комнаты',
      description: '2 туалета + отдельно раковина и зеркало.',
      equipments:'Бумажные полотенца, жидкое мыло, туалетная бумага, зеркала.',
      addServices:'',
      cost: '',
      department:'Авиаторов',
      imgs: ['wc.jpg', 'wc1.jpg'],
      type: 'otherhall',
    },
    bathroom: {
      id:'bathroom', 
      title: 'Душевая',
      description: 'Душ для одного человека.',
      equipments:'Кафель, душевая кабина, крючки для одежды.',
      addServices:'',
      cost: '',
      department:'Авиаторов',
      imgs: ['bathroom.jpg'],
      type: 'otherhall',
    }
}
module.exports = arendaData