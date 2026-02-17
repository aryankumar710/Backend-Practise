import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
  path: "/.env",
});



connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(error);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listning to the port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

/*

const app = express()

;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log(error)
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listning to the port ${process.env.PORT}`)
        })
    }catch(err){
        console.error(err)
    }
})
    */
