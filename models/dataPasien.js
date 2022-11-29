const mongoose = require('mongoose');
const { Schema } = mongoose

// schema untuk data pasien
const dataPasienSchema = new Schema({
    nik : {
        type: String,
        required: true
    },
    nama :{
        type: String,
        required: true
    },
    tglLahir : {
        type: Date,
        required: true
    },
    umur : {
        type: String,
        required: true
    },
    jk : {
        type: String,
        required: true
    },
    alamat : {
        type: String,
        required: true
    },
    noHp :{
        type: String,
        required: true
    }
})

const dataPasien = mongoose.model("DataPasien", dataPasienSchema)

module.exports = dataPasien