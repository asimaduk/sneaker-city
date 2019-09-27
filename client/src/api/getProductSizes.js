//fetch updated sizes & quantiy of a particular product/sneaker
export default function getProduct(productId) {
    return new Promise((resolve, reject) => {
        return fetch(`http://localhost:5000/api/products/${productId}/sizes`)
            .then(async response => {
                const sizes = await response.json()

                return resolve(sizes);
            })
            .catch(error => {
                return reject('Sorry an unknown error occurred.');
            })
    })
}