const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.MONGODB_CONEX, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Base de datos online");
} catch (error) {
  console.log(error);
  throw new Error("Error en iniciar la base de datos");
}
