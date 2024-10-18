const mongoose =require("mongoose")
const connectionDB = async () => {
  mongoose
    .connect("mongodb+srv://chadiidac:Ux2Uigkd3GW2U1PW@on-stock.w6j72.mongodb.net/?retryWrites=true&w=majority&appName=on-stock")
    .catch((error) => handleError(error));
  try {
    await mongoose.connect("mongodb+srv://chadiidac:Ux2Uigkd3GW2U1PW@on-stock.w6j72.mongodb.net/?retryWrites=true&w=majority&appName=on-stock");
    console.log("database is running");
  } catch (error) {
    handleError(error);
  }
};
module.exports=connectionDB 

// Ux2Uigkd3GW2U1PW
// chadiidac
// mongodb+srv://chadiidac:Ux2Uigkd3GW2U1PW@on-stock.w6j72.mongodb.net/?retryWrites=true&w=majority&appName=on-stock