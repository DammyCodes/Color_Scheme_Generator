let form = document.getElementById('form')
let seedColor = document.getElementById('seed-color')
let theme = document.getElementById('theme')
let colorContainer = document.getElementById('color-container')



form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(seedColor.value)
   

    const seedColorOption = seedColor.value.slice(1)
    console.log(seedColorOption)
    const themeOption = theme.value
    console.log(themeOption)
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
        console.log(colorHtml)
        colorContainer.innerHTML = colorHtml
       
       }
      console.log(seedColorOption)

    })
})







// colorHtml += `
// <div class="grid grid-cols-5">
//      
//      <div class="flex flex-col justify-between h-[300px]">
//          <div class=" bg-purple-600 h-[100%]"></div>
//          <p class="text-center">#F55A5A</p>
//      </div>
//      <div class="flex flex-col justify-between h-[300px]">
//          <div class=" bg-red-600 h-[100%]"></div>
//          <p class="text-center">#F55A5A</p>
//      </div>
//      <div class="flex flex-col justify-between h-[300px]">
//          <div class=" bg-pink-600 h-[100%]"></div>
//          <p class="text-center">#F55A5A</p>
//      </div>
//      <div class="flex flex-col justify-between h-[300px]">
//          <div class=" bg-yellow-600 h-[100%]"></div>
//          <p class="text-center">#F55A5A</p>
//      </div>
//      <div class="flex flex-col justify-between h-[300px]">
//          <div class=" bg-slate-600 h-[100%]"></div>
//          <p class="text-center">#F55A5A</p>
//      </div>
//  </div>   
   
// `