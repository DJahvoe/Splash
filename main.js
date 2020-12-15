const canDOM = document.querySelector('#splash-image');

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', (e) => {
        let windowScrollY = Math.ceil((Math.floor(window.scrollY) % 720 + 1) / 2)
        let directory = "./images/render/"
        const zeroCount = 4 - String(windowScrollY).length

        let zeros = '';
        for (let i = 0; i < zeroCount; i++) {
            zeros += '0'
        }
        console.log(windowScrollY);
        console.log(zeros);
        let fileName = zeros + windowScrollY + '.png'

        canDOM.src = directory + fileName
    })

})