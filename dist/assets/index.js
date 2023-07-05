//JS para display de experiencias

const inmo = () =>{
    document.getElementById('brujas').style.display = 'none'
    document.getElementById('gitHub').style.display = 'none'
    document.getElementById('bigSky').style.display = 'none'
    document.getElementById('inmo').style.display = 'block'
}

const brujas = () =>{
    document.getElementById('inmo').style.display = 'none'
    document.getElementById('bigSky').style.display = 'none'
    document.getElementById('gitHub').style.display = 'none'
    document.getElementById('brujas').style.display = 'block'
}

const bigSky = () =>{
    document.getElementById('inmo').style.display = 'none'
    document.getElementById('gitHub').style.display = 'none'
    document.getElementById('brujas').style.display = 'none'
    document.getElementById('bigSky').style.display = 'block'
}

const gitHub = () =>{
    document.getElementById('inmo').style.display = 'none'
    document.getElementById('brujas').style.display = 'none'
    document.getElementById('bigSky').style.display = 'none'
    document.getElementById('gitHub').style.display = 'block'
}

const about = () => {
    document.getElementById('about')
}
const study = () => {
    console.log(document.getElementById("study"))
   
}