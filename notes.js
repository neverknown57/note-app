const fs= require('fs');
const chalk = require('chalk');

const addnote= function(title,body)
{   
    const notes=loadNotes();
    const note=
                {
                    title: title,
                    body:body
                };
    
    if(Duplichecker(notes, title))
    {
        console.log('title already in use')
    }
    else
    {   
        notes.push(note);
        const notesString= JSON.stringify(notes);
        fs.writeFileSync('notes.json',notesString);
        console.log('New Note added!');
    }
}

// remove a note
const removeNote = function (title)
                {
                    const notes=loadNotes();
                    for(i=0; i<notes.length; i++)
                        {
                            if(notes[i].title===title)
                            {
                                notes.splice(i, 1);
                                console.log("Note with title: ", chalk.bgGreen.bold.yellow(title) , "removed");
                                saveNotes(notes);
                                return;
                            }
                        }
                    console.log(chalk.bgRed("Does not found note!"))
                }
const listNotes= ()=>{
    const notes=loadNotes();
    console.log( chalk.bold.yellow('Note Titles'))
    notes.forEach((note)=>{
        console.log(chalk.bgCyan.bold(note.title))
    })
}

// Read Note!
const readNote = (title) => {
    const notes= loadNotes();
    for(let i=0; i<notes.length; i++) {
        if(notes[i].title===title) {
            console.log(chalk.bold.yellow(title));
            console.log(chalk.italic.greenBright(notes[i].body))
            return;
        }
    }
    console.log(chalk.bold.red('Note doesn\'t exist with this title'))
}
function Duplichecker(notes, title)
{
    for( i=0; i<notes.length; i++) 
    {
        // console.log("Hellow" ,notes[i].title);
        if(notes[i].title===title) 
            return true;
        
    }
    console.log("No Dupli found");
    return false;
    
}


function loadNotes()
{
    try
    {
        const noteBuffer= fs.readFileSync("notes.json") //read data in Binary format;
 
        const notesArrofObj=JSON.parse(noteBuffer);

        return notesArrofObj;
    }
    catch
    {
        return []; // return empty array
    }
}
 
//saveNotes
function saveNotes(notes)
{
    const stgNotes=JSON.stringify(notes);
    fs.writeFileSync('notes.json',stgNotes);
}
 
module.exports  = {
    addnote: addnote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
    // getnotes: getnotes
}