const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');



// const argv = process.argv;
// console.log(yargs.argv);
// yargs.argv = process.argv;

// console.log(argv);
console.log('\n After assign');
// add note comand;
yargs.command(
    {
        command: 'add',
        describe: 'add a new note',
        builder: {
                    title:{
                            describe: 'note title ',
                            demandOption: true,
                            type: 'string'
                        },
                    body:{
                        describe:'note body',
                        demandOption: true,
                        type: 'string'
                        }
            },
    handler: function (argv) 
            {
               notes.addnote(argv.title, argv.body);
            }
})


// Remove Note from the list
yargs.command( 
    {
        command: 'remove',
        describe: 'Note to be removed',
        builder: {
                    title: {
                             describe: 'title to be removed',
                             demandOption: true,
                             type: 'string'
                           }
                 },
        handler: function (argv) 
                {
                    console.log("Item to be removed");
                    notes.removeNote(argv.title);
                } 
    }
)

yargs.command(
    {
        command:'NoteList',
        describe:"Title of Notes",
        handler() {notes.listNotes()}
    }
)
yargs.command( 
    {
        command: 'read',
        describe:"Read the note",
        builder: 
                {
                    title:
                          {
                            describe:"Read the note",
                            demandOption:true,
                            type:'string'
                          }
                },
                handler(argv) 
                            {
                                console.log('Reading the file title as ', argv.title);
                                notes.readNote(argv.title)
                            }
    }
)

    
yargs.parse();
// console.log(yargs.argv);
// parse.yargs(argv)

