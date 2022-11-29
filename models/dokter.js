const mongoose = require('mongoose');
const { Schema } = mongoose

// schema untuk data dokter
const dokterSchema = new Schema({
    nip : {
        type: String,
        required: true
    },

    nama: {
        type: String,
        required: true
    },

    spesialis: {
        type: String,
        required: true
    },

    alamat: {
        type: String,
        required: true
    },

    jk : {
       type : String,
       enum : ['laki-laki', 'perempuan']
    },
    noHp : String
})

const Dokter = mongoose.model("Dokter", dokterSchema)

module.exports = Dokter