const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const url = process.env.MONGODB_URI;
console.log("connecting to", url);

const productSchema = new mongoose.Schema({
  content: {
    producto: String,
    precio: Number,
    img: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

productSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Producto", productSchema);
