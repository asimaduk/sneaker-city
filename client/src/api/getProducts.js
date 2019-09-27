//api to fetch first 10 sorted products
export default function getProducts(start, end) {
    return new Promise((resolve, reject) => {
        return fetch(`http://localhost:5000/api/products?start=${start}&end=${end}`)
            .then(async response => {
                const products = await response.json();

                return resolve(products);
            })
            .catch(error => {
                return reject('Sorry an unknown error occurred.'+error)
            })
    })
}