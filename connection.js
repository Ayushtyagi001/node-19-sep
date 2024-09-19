const mongoose = require('mongoose');
async function connection(){
    try {
        let coonect = await  mongoose.connect(`mongodb://localhost:27017/batch1`)
        console.log('connection created....')
    } catch (error) {
        console.error(error);
        
    }
}
module.exports = connection