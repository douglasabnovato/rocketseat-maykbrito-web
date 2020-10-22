const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ws.db');

db.serialize(function(){
    /*
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
    `)*/
    
    //trecho do insert
    const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        )VALUES(?,?,?,?,?);
    `;
    
    //trecho do insert
    const values = [
        "https://www.flaticon.com/svg/static/icons/svg/2317/2317963.svg",
        "Fundamentos de Programação",
        "Developer",
        "Tornar-se programador.",
        "https://www.khanacademy.org/"
    ];

    /*  
    //inserir dado na tabela
    db.run(query, values, function(err){
        if(err) return console.log(err);
        console.log(this);
    });
    */

    /* 
    //deletar dado na tabela
    db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
        if (err) return console.log(err)
        console.log("DELETE", this)    
    });
    */

    /*
    //consultar dado na tabela 
    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err) return console.log(err)
        console.log(rows)
    }); 
    */
})

module.exports = db