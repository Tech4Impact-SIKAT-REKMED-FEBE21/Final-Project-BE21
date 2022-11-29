const mongoose = require('mongoose');
const { Schema } = mongoose

// schema untuk data rekam medis
const dataRekmedSchema = new Schema({
    noRm : {
        type: String,
        required: true
    },
    pasien : {
        type :  mongoose.ObjectId,
        ref : "DataPasien"
    },
    nik : {
        type: String,
        required: true
    },
    dokter : {
        type :  mongoose.ObjectId,
        ref : "Dokter"
    },
    keluhan : String,
    diagnosis : String,
    info_pengobatan : String,
    tanggal_periksa : Date
})

const dataRekmed = mongoose.model("DataRekmed", dataRekmedSchema)

module.exports = dataRekmed
