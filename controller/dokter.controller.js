const Dokter = require("../models/Dokter")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    getAllDokter: async (req, res) => {
        const dokter = await Dokter.find().populate("nama")

    res.json({
    message: "success get data",
    data: dokter
    })
},
    getDokter: async (req, res) => {    
    try {
        const dokter = await Dokter.findOne({nip : req.params.nip})
        res.status(200).json({
        message:"managed to get data",
        data:dokter
    })
    } catch (error) {
    res.status(400).json({
        message:"failed to get data"
    })
    }
},

    addDokter: async (req, res) => {
        try {
            const data = req.body
            const dokter = await new Dokter(data)
            dokter.save()

            res.json({
                message: "successfully add data"
            })
        } catch (error) {
            res.status(400).json({
                message:"failed add data"
        })
    }
    },

    deleteDokter: async (req, res) => {
    try{
        const dokter = await Dokter.deleteOne({nip : req.params.nip})
        res.status(200).json({
            message:"successfully deleted data"
        })
        } catch (error) {
        res.status(400).json({
            message:"failed deleted data"
        })
        }
},

    updateDokter: async(req, res) => {
        try {
            const dokter = await Dokter.findOneAndUpdate({nip : req.params.nip}, "-__v")

            Object.assign(dokter, req.body)
            dokter.save();

            res.status(200).json({
                message:"successfully updated data",
                data : dokter
        })
        } catch (error) { 
            res.status(400).json({
                message:"failed updated data"
        })
        }
    },
}