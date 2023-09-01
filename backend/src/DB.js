import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://gamyageethika330:Geethika1234@cluster0.oby0qxu.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("21B91A04I3");
    cb();
}
export {db,connectToDB};