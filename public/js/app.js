document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelector('.lista-conocimientos');

    if(skills) {
        skills.addEventListener('click', agregarSkills);
    }
})

const skills = new Set();
const agregarSkills = e => {
    if(e.target.tagName === 'LI'){
        if(e.target.classList.contains('activo')){
            // quitarlo del set y quitar la clase activo
            skills.delete(e.target.textContent);
            e.target.classList.remove('activo');
        } else {
            // agregarlo al set y agregar la clase activo
            skills.add(e.target.textContent);
            e.target.classList.add('activo');
        }
        //console.log(skills);
    }
    const skillsArray = [...skills]
    document.querySelector('#skills').value = skillsArray;
}