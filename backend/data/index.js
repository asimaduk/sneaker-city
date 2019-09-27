//generate timestamp between two dates e.g May (05) and two months from now
const randomDate = (start, end) => {
    return (new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).getTime();
}

//mock data for products and available sizes
module.exports = {
    products: [
        {
            name: 'Adidas',
            model: 'AdiPower Howard 2',
            price: 100,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id: 'adidas-adipower-howard-2',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/hhnusv9z39rud9bnls3s.jpg'
        },
        {
            name: 'Adidas',
            model: 'Crazy BYW',
            price: 220,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id:'adidas-crazy-byw',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/qjw4rw0c8sc3wlott3t0.jpg'
        },
        {
            name: 'Adidas',
            model: 'EQT Support Ultra',
            price: 200,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id:'adidas-eqt-support-ultra',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/ow3kgs2w1agzsmgvzijk.jpg'
        },
        {
            name: 'Adidas',
            model: 'D.O.N. Issue #1',
            price: 100,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id:'adidas-don-issue-1',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/wk55kju9inlej4btda9f.jpg'
        },
        {
            name: 'Nike',
            model: 'Air Tech Challenge 2 (II)',
            price: 130,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id:'nike-air-tech-challenge-2-ii',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/nike-air-tech-challenge-2-hot-lava_lfj5vg.jpg'
        },
        {
            name: 'Nike',
            model: 'Air Flare',
            price: 130,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id:'nike-air-flare',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/nike-air-flare-model_yzggcq.jpg'
        },
        {
            name: 'Nike',
            model: 'Air Force 1 High',
            price: 200,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id:'nike-air-force-1-high',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/nike-air-force-1-high_mymvol.jpg'
        },
        {
            name: 'Nike',
            model: 'Air Max 1',
            price: 150,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id:'nike-air-max-1',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/nike-air-max-1-model-image_kx3ybw.jpg'
        },
        {
            name: 'Converse',
            model: 'Aero Jam',
            price: 110,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id: 'converse-aero-jam',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/toxxcddnnp2xlff2yr5b.jpg'
        },
        {
            name: 'Converse',
            model: 'All Star Pro BB',
            price: 140,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id: 'converse-all-star-pro-bb',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/tzifcjbeoufgr09qyfox.jpg'
        },
        {
            name: 'Jordan',
            model: 'Air Jordan 1 Mid "Quai 54"',
            price: 140,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id: 'air-jordan-1-i-mid-black-quai-54',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/kkaugnp5dwxkrv5klujs.jpg'
        },
        {
            name: 'Jordan',
            model: 'Air Jordan 10 (X)',
            price: 190,
            releaseDate: randomDate(new Date(2019, 5, 1), new Date(Date.now() + (86400*1000*60))),
            id: 'air-jordan-10-x',
            image: 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/air-jordan-10-retro-og-hero_tlrkaf.jpg'
        }
    ],
    productsAvailableSizes: {
        'adidas-adipower-howard-2': [
            {
                size: '7',
                quantity: 34 
            },
            {
                size: '7.5',
                quantity: 20 
            },
            {
                size: '8',
                quantity: 13 
            },
            {
                size: '8.5',
                quantity: 17 
            },
            {
                size: '9',
                quantity: 10 
            }
        ],
        'adidas-crazy-byw': [
            {
                size: '7',
                quantity: 22 
            },
            {
                size: '10.5',
                quantity: 6 
            },
            {
                size: '11',
                quantity: 7 
            }
        ],
        'adidas-eqt-support-ultra': [
            {
                size: '7',
                quantity: 12 
            },
            {
                size: '7.5',
                quantity: 18 
            },
            {
                size: '10',
                quantity: 10 
            }
        ],
        'adidas-don-issue-1': [
            {
                size: '6',
                quantity: 44 
            },
            {
                size: '7.5',
                quantity: 33 
            },
            {
                size: '8',
                quantity: 11 
            },
            {
                size: '8.5',
                quantity: 7 
            },
            {
                size: '9',
                quantity: 5 
            }
        ],
        'nike-air-tech-challenge-2-ii': [
            {
                size: '9',
                quantity: 34 
            },
            {
                size: '9.5',
                quantity: 2 
            },
            {
                size: '10',
                quantity: 14 
            }
        ],
        'nike-air-flare': [
            {
                size: '12',
                quantity: 34 
            },
            {
                size: '12.5',
                quantity: 20 
            },
            {
                size: '13',
                quantity: 13 
            }
        ],
        'nike-air-force-1-high': [
            {
                size: '9.5',
                quantity: 45 
            },
            {
                size: '10.5',
                quantity: 11 
            }
        ],
        'nike-air-max-1': [
            {
                size: '11',
                quantity: 19 
            },
            {
                size: '12',
                quantity: 20 
            },
            {
                size: '12.5',
                quantity: 3 
            },
            {
                size: '13',
                quantity: 10 
            },
            {
                size: '14',
                quantity: 26 
            },
            {
                size: '15.5',
                quantity: 31
            }
        ],
        'converse-aero-jam': [
            {
                size: '9',
                quantity: 34 
            },
            {
                size: '9.5',
                quantity: 20 
            },
            {
                size: '13',
                quantity: 13 
            }
        ],
        'converse-all-star-pro-bb': [
            {
                size: '14',
                quantity: 17 
            },
            {
                size: '15',
                quantity: 11 
            },
            {
                size: '16',
                quantity: 15 
            }
        ],
        'air-jordan-1-i-mid-black-quai-54': [
            {
                size: '17',
                quantity: 54 
            },
        ],
        'air-jordan-10-x': [
            {
                size: '8',
                quantity: 13 
            },
            {
                size: '9.5',
                quantity: 64 
            },
            {
                size: '11.5',
                quantity: 3 
            }
        ]
    }
}