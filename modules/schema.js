const mongoose =require("mongoose")

const { Schema } = mongoose;

const postSchema = new Schema({ 
  titleAR: String,
  titleFR: String,
  titleEN: String,
  nameAR:String,
  nameFR:String,
  nameEN:String,
  phone:String,
  type: String,
  DescriptionAR: String,
  DescriptionFR: String,
  DescriptionEN: String,
  date: { type: Date, default: Date.now },
  hidden: { type: Boolean, default: false }, 
  Price: Number,
  LoactionAR: String, 
  LoactionFR: String,
  LoactionEN: String,
  image: String,
});

const Truck = mongoose.model('Truck', postSchema);
module.exports = Truck; 