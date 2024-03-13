/**
 * ===================== PRINCIPAIS OBJETOS  =================================
 */
console.log(document);
let addNote = document.querySelector('#add-note');//Botão de para adicionar nota
let closeModal =  document.querySelector('#close-modal'); //fechar janela modal com os detalhes da nota.
let modal = document.querySelector('#modal'); //Modal para edição das notas
let modalView = document.querySelector('#modal-view'); //Modal para exibição dos detalhes da nota
let notes = document.querySelector('#notes');//Lista divs com dados das notas
let btnSaveNote = document.querySelector("#btn-save-note"); //icone para salvar nota
let btnCloseNote = document.querySelector("#btn-close-note");//icone para fechar modal de edição de nota.

addNote.addEventListener("click", (evt)=>{
    evt.preventDefault();
    notes.style.display = "none";
    modal.style.display = "block";
    addNote.style.display = "none";
});

btnCloseNote.addEventListener("click", () =>{
    evt.preventDefault();
    notes.style.display = "flex";
    modal.style.display = "none";
    addNote.style.display = "block";
})

btnSaveNote.addEventListener("click", (evt) =>{
    evt.preventDefault();
    let data = { 
        id: document.querySelector("#input-id").value,
        title:document.querySelector("#input-title"). value,
        content:document.querySelector("#input-content").value
    }
    saveNote (data);
})



const saveNote = (note) => {

    let notes = leadNotes();

    note.lastTime = new Date().getTime();
    console.log(note.lastTime)
    if (note.id.length > 0){
        
    }
    else{  
        note.id = new Date().getTime();
    }

    console.log(notes);
    notes.push(note);
    notes = JSON.stringify(notes);
    console.log(notes)
    localStorage.setItem('notes',notes);
    

};
const leadsNotes = ( ) =>{
    let notes = localStorage.getItem('notes');
    if (!notes){
        notes = [];
    }
    else{
        notes = JSON.parse(notes);
    }

    return notes;
}