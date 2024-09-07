import express from 'express';
import pool from './src/db/db_connect.js';
import multer from 'multer';
import storage from './src/config/multer_config.js';
const app = express();

app.use(express.urlencoded({extended : true}))
//initialize database connection
pool.getConnection((error,connnection)=>{
    if(error) return console.log("Connection Failed");
    console.log("Connection Success");
    connnection.release();
});
//initialize multer
const upload = multer({
    storage : storage
});


app.post('/createuser', upload.single('image') , (request,response) => {
    const file = request.file;
    const { name , gender , phone } = request.body;

    if(!name && !gender && phone ){
        return response.status(500).json({
            message : "Inavalid Data"
        })
    }

    pool.query(`INSERT INTO users (name,gender,phone,image) VALUES(?,?,?,?)`,[name,gender,phone,file.filename],(error,result) => {
        if(error){
            return response.status(500).json({
                message : "Somthing went wrong"
            })
        }
        response.status(200).json({
            result : result
        })
    })

})


app.listen(3000 , () => {
    console.log(`Server is running on http://localhost:3000`);
    
})