const fs = require('fs')

const registrar = (nombre, edad, tipo, color, enfermedad)=>{

    let citas = []

    try {
        const leerCitas = fs.readFileSync('citas.JSON', 'utf-8')
        citas = JSON.parse(leerCitas)       
    } catch (error) {
        console.log(error)
    }

    let nuevaCita = 
        {
        "Nombre del Animal": nombre,
        "Edad": edad,
        "Tipo de animal": tipo,
        "Color del animal": color,
        "enfermedad": enfermedad, 
        }       
    

    citas.push(nuevaCita)
    fs.writeFileSync('citas.json', JSON.stringify(citas));
}

const leer  = ()=>{
    const leerCitas = fs.readFileSync('citas.JSON', 'utf-8')

    JSON.parse(leerCitas).forEach(paciente => {
        console.log(paciente) // el desafio no deja claro en que formato se debe presentar esta info en consola, quedo atento al feedback.
    });
}

module.exports ={
    registrar,
    leer
}