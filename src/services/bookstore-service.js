import {createEffect} from 'effector';
//import { BOOK1, BOOK2} from '../image';

const data = [
        {
            id: 1,
            title: 'IT как оружие. Какие опасности таит в себе развитие высоких технологий',
            author: 'Смит Брэд, Браун Кэрол Энн',
            price: 412,
            coverImage: 'https://ir.ozone.ru/s3/multimedia-s/wc1000/6030410308.jpg'
        },
        {
            id: 2,
            title: 'Общая теория занятости, процента и денег',
            author: 'Кейнс Джон Мейнард',
            price: 205,
            coverImage: 'https://ir.ozone.ru/s3/multimedia-8/wc1000/6370735352.jpg'
        },
        {
            id: 3,
            title: 'Изучаем Python: программирование игр, визуализация данных, веб-приложения. 3-е изд.',
            author: 'Мэтиз Эрик',
            price: 1175,
            coverImage: 'https://ir.ozone.ru/s3/multimedia-u/wc1000/6656344158.jpg'
        },
        {
            id: 4,
            title: 'Эффективный и современный С++: 42 рекомендации по использованию C++11 и C++14',
            author: 'Мейерс Скотт',
            price: 1326,
            coverImage: 'https://ir.ozone.ru/multimedia/wc1000/1026889199.jpg'
        }
    ];

const getBooksFx = createEffect(async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.75) {
                reject(new Error('Something bad happen'));
            }
            else {
                resolve(data);
            }
        }, 700);
    });
});

export default getBooksFx;