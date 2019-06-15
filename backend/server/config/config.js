// =========================
//  Puerto
// =========================

process.env.PORT = process.env.PORT || 3001;

// ======================
//     Base de Datos
// ======================
let urlDB;
// if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/TODO";
// }

process.env.MONGODB = urlDB;
