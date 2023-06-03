function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

 //   if(html.classList.contains('light')) {  - se isso que esta aqui for verdadeiro
 //      html.classList.remove('light')  - faz esta execução de código
 //   } else {  - se não
 //     html.classList.add('light') - faz esta execução de código
 //   }

    //pegar a tag img 
    // se tiver 
    //query selector = pesquise pelo seletor

    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')){
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src','./assets/avatar-light.png')
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src','./assets/avatar.png')
    }


}