const mongoose = require('mongoose')

const schema = mongoose.Schema

const employschema = new Schema({
    name: {
        type: String
    },
    designation: {
        type: String
    }
},{timestaps: true})


const Employee = mongoose.model('Employee',employschema)