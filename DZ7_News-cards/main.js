const showImages = async () => {
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const array = await resp.json()
        array.map(data => {
            const figure = document.createElement('figure')
            document.querySelector('.block-main').append(figure)
            figure.innerHTML = `
            <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/835A/production/_129962633_gettyimages-1255034481.jpg.webp" alt="Elon Mask">
            <h3>${data.title}</h3>
            <figcaption>${data.body}</figcaption>
        `
        })
        }catch (e) {
        console.log(e, 'error')
    }
}
showImages()