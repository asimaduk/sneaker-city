//api to fetch single product
export default function getProduct(productId) {
    return new Promise((resolve, reject) => {
        return fetch(`http://localhost:5000/api/products/${productId}`)
            .then(async response => {
                const product = await response.json()

                return resolve(product);
            })
            .catch(error => {
                return reject('Sorry an unknown error occurred. ');
            })
    })
}

