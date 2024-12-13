
if (process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path:'./src/config/.env'
    });
}

const connectDatabase=require('./DB/database.js')
const app=require('./App.js')
const PORT=process.env.PORT

const server= app.listen(PORT,async()=>{
    connectDatabase();
    console.log(`The server is running on  ${PORT} URL: http://localhost:${PORT}`)
});