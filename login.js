let submitForm =  document.getElementById('btn').addEventListener('click', ()=>{

    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM content Loaded');
    })
    submitForm.addEventListener('click', (e) =>{
        console.log(document.querySelector('form'))
    })
})


