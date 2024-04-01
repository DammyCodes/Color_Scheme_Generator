const form = document.getElementById('form')
const seedColor = document.getElementById('seed-color')
const theme = document.getElementById('theme')
const colorContainer = document.getElementById('color-container')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const seedColorOption = seedColor.value.slice(1)
    const themeOption = theme.value
    let colorHtml = ``

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColorOption}&mode=${themeOption}&count=6`)
    .then(res => res.json())
    .then(data => {
       
       for (let color of data.colors) {

        colorHtml +=  `
       
            <div class="flex flex-col h-[100%] max-sm:w-[100%] max-sm:grid max-sm:grid-cols-2 max-sm:h-[50px]">
                <img src="${color.image.bare}" class="h-[100%] max-sm:[w-100%]">
                <p class="text-center max-sm:text-[10px]">${color.hex.value}</p>
            </div>
      
        `
        colorContainer.innerHTML = colorHtml
       }
    })
})
