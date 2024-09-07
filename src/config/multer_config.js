//destination,filename=> diskstorage
import multer from "multer";
const storage = multer.diskStorage({
    destination : (request,file,callback) => {
        callback(null , './upload');
    },
    filename : (request,file,callback) => {
        callback(null , Math.floor(Math.random() * 10001)+'-'+file.originalname)
    }
});

export default storage;