let form = document.getElementById('form')
let seedColor = document.getElementById('seed-color')
let theme = document.getElementById('theme')
let colorContainer = document.getElementById('color-container')



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
       
            <div class="flex flex-col h-[300px]">
                <img src="${color.image.bare}" class="h-[100%]">
                <p class="text-center">${color.hex.value}</p>
            </div>
      
        `
        colorContainer.innerHTML = colorHtml
       
       }
    })
})
