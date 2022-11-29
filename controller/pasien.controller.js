const dataPasien = require("../models/dataPasien");
const dataRekmed = require("../models/rekmed");
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    addPasien: (req, res) => {
        const newPasien = req.body
        const pasien = new dataPasien(newPasien)
    
        pasien.save()
        
        res.status(201).json({
          message: "data has been created!",
        })
    },

    getAllPasien: async (req, res) => {
      try {
        const pasiens = await dataPasien.find({}, "-__v")
  
        res.status(200).json({
          message: "Getting Data",
          data: pasiens
        })
      } catch (error) {
        res.status(500).json({message : "Server Error"})
      }
    },

    getPasien: async (req, res) => {
      try {
          const pasiens = await dataPasien.findOne({nik : req.params.nik}, "-__v")
    
          if(pasiens){
            res.status(200).json({
              message: "You Searched for",
              data: pasiens
            })
          } else{
            res.status(404).json({
              message : "Could not Found"
            });
          }
        } catch (error) {
          res.status(500).json({ message: "Server Error" })
        }
  },

  deletePasien: async (req, res) => {
    try {
        const pasiens = await dataPasien.findOne({nik : req.params.nik}, "-__v")
  
        if(pasiens){
          pasiens.deleteOne()
            res.status(201).json({
                message: "Data Deleted"
            });
        }else{
            res.status(404).json({
                message : "Could not Found"
            })
      }
      } catch (error) {
        res.status(500).json({ message: "Server Error" })
      }
  },

  updatePasien: async (req, res) => {
    try {
        const pasiens = await dataPasien.findOne({nik : req.params.nik}, "-__v")
  
        Object.assign(pasiens, req.body)
        pasiens.save();
        res.status(201).send({ 
          message : "Succes updated user!",
          data : pasiens })
     
      } catch (error) {
        res.status(500).json({ message: "Server Error" })
      }
    },

    getRekmed: async (req, res) => {
      try {
        const rekmed = await dataRekmed.find({nik : req.params.nik}).populate("pasien", "nama").populate("dokter", "nama")
  
        if(!rekmed){
          res.status(404).json({
            message : "Could not Found"
          });
      } else{
        res.status(200).json({
          message: "You Searched for",
          data: rekmed
        })
      }
      } catch (error) {
        res.status(500).json({ message: "Server Error" })
      }
    }
}