import mongoose from "mongoose";




const Connection = async (username, password) =>{
    try{
        const URL = `mongodb://${username}:${password}@ac-oaogvdh-shard-00-00.mpe8zgf.mongodb.net:27017,ac-oaogvdh-shard-00-01.mpe8zgf.mongodb.net:27017,ac-oaogvdh-shard-00-02.mpe8zgf.mongodb.net:27017/?ssl=true&replicaSet=atlas-e1h63f-shard-0&authSource=admin&retryWrites=true&w=majority`
  
        await mongoose.connect(URL , {useNewUrlParser:true});
        console.log('Database Connected Successfully');
    }
    catch(error){
        console.log('Database not Connected Successfully',error);
    }
}

export default Connection;