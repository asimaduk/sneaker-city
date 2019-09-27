const products = [
    {
        name: 'Nike',
        model: 'Air Force 1',
        price: 180,
        releaseDate: '1234567890',
        id: '1',
        image: 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/iiafzj3eynywecv7kzbu/air-jordan-xxxiv-blue-void-release-date.jpg'
    },
    {
        name: 'Adidas',
        model: 'Blue Bird',
        price: 127,
        releaseDate: '1234567890',
        id: '2',
        image: 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/xp0bxnua3vhhsbidoz9q/air-force-1-black-white-release-date.jpg'
    }
];

export default function getProducts(url) {
    return new Promise((resolve, reject) => {
        process.nextTick(() => resolve(products));
    });
}