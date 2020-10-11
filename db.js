const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ws.db');

db.serialize(function(){
    //criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    //inserir dado na tabela
    const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        )VALUES(?,?,?,?,?);
    `;

    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Estudo",
        "Amet consectetur adipisicing elit.",
        "https://rocketseat.com.br"
    ];

    db.run(query, values, function(err){
        if(err) return console.log(err);
        console.log(this);
    });

    //consultar dado na tabela 
    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err) return console.log(err)
        console.log(rows)
    });

    //deletar dado na tabela

})