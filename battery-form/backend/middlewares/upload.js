// middlewares/upload.js
import multer from 'multer';
import path from 'path';

// Configuration du stockage des fichiers
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Répertoire pour stocker les fichiers
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Nom du fichier
    }
});

// Limiter la taille et les types de fichiers acceptés
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }, // Taille maximale de 10 Mo
    fileFilter: function (req, file, cb) {
        const allowedTypes = /jpeg|jpg|png|pdf/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Type de fichier non autorisé'));
        }
    }
});

export default upload;
