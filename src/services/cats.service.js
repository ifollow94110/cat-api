export function getCatsList() {
    return new Promise((resolve, reject) => {
        fetch("https://catfact.ninja/breeds").then(response => {
            response.json().then(response => {
                resolve(response.data)
            })
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}
export function getCatPic() {
    return new Promise((resolve, reject) => {
        fetch("https://cataas.com/cat?json=true").then(response => {
            response.json().then(response => {
                resolve(`https://cataas.com${response.url}`)
            })
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}