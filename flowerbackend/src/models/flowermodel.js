const mongoose = require("mongoose");


//schemas for home page flower     
const flowerSchemas = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    image: { type: String, required: true },
    name: { type: String, require: true,minlength:4,maxlength:12},
    price: { type: Number, require: true,minlength:2,maxlength:6},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Flower = mongoose.model("Flower", flowerSchemas);

//schemas for home page flower     
const weddingSchemas = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Wedding = mongoose.model("Wedding", flowerSchemas);



module.exports = {Flower,Wedding}

