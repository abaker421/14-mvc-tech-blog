const mysql = require('mysql2')


const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'blog_post_db'
})

module.exports= connection