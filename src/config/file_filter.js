const fileFilter = (request,file,callback) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        callback(null , true);
    }
    else{
        callback(null , false);
    }
}

export default fileFilter;