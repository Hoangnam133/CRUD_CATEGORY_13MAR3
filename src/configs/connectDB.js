const url = 'mongodb://localhost:27017/s5'
const mongoose = require('mongoose')
class ConnectMongodb {
    constructor() {
        this.connect()
    }
    connect() {
        mongoose.connect(url).then(()=>{
            console.log('Connected to MongoDB')
        }).catch(err => console(`Failed to connect to MongoDB ${err}`))
    }
    static getInstance(){
        if(!ConnectMongodb.instance) ConnectMongodb.instance = new ConnectMongodb();
        return ConnectMongodb.instance;
    }
}
module.exports = ConnectMongodb.getInstance();