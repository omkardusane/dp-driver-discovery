const validationsDe = {
    dl: ["CE", "C", "C1E", "C1", "B"],
    deu: ["Muttersprache", "Fließend", "Grundlegend", "Keine Deutschkenntnisse"],
    eng: ["Native speaker", "Fluent", "Basic", "Keine Englischkenntnisse"],
    exp: ['< 1 Jahr', '1-2 Jahre', '2-5 Jahre', '> 5 Jahre']
}
const validationsEn = {
    dl: ["CE", "C", "C1E", "C1", "B"],
    deu: ["Native speaker", "Fluent", "Basic", "No knowledge of German"],
    eng: ["Native speaker", "Fluent", "Basic", "No knowledge of English"],
    exp: ['< 1 Year', '1-2 Years', '2-5 Years', '> 5 years']
}

const FormMappers = {
    dl: 'Führerschein', //
    deu: 'Deutsch',  // 
    eng: 'Englisch', // 
    exp: "Erfahrung" // id = 7
}
module.exports = {
    validationsDe, validationsEn, FormMappers
}