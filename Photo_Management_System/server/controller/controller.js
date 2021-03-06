const UploadModel = require('../model/schema');
const fs = require('fs');



exports.home = async(req, res) => {
    const all_images = await UploadModel.find().sort({ date: 1 })
    res.render('main', { images: all_images });
}


exports.home1 = async(req, res) => {
    const all_images = await UploadModel.find().sort({ date: 1 })
    res.render('main', { images: all_images });
}


exports.home2 = async(req, res) => {
    const all_images = await UploadModel.find().sort({ date: -1 })
    res.render('main', { images: all_images });
}


exports.home3 = async(req, res) => {
    const all_images = await UploadModel.find().sort({ size: +1 })
    res.render('main', { images: all_images });
}


exports.home4 = async(req, res) => {
    const all_images = await UploadModel.find().sort({ size: -1 })
    res.render('main', { images: all_images });
}

function getFilesizeInBytes(filename) {
    var stats = fs.statSync(filename);
    var fileSizeInBytes = stats.size;
    return fileSizeInBytes;
}

function getSize(a) {
    return a.length;
}
exports.uploads = (req, res, next) => {
    const files = req.files;

    if (!files) {
        const error = new Error('Please choose files');
        error.httpStatusCode = 400;
        return next(error)
    }

   
    let imgArray = files.map((file) => {
        let img = fs.readFileSync(file.path)

        return encode_image = img.toString('base64')
    })

    let result = imgArray.map((src, index) => {

        
        let finalImg = {
            filename: files[index].originalname,
            contentType: files[index].mimetype,
            imageBase64: src,
            date: Date.now(),
            size: getSize(src)
        }

        let newUpload = new UploadModel(finalImg);

        return newUpload
            .save()
            .then(() => {
                return { msg: `${files[index].originalname} Uploaded Successfully...!` }
            })
            .catch(error => {
                if (error) {
                    if (error.name === 'MongoError' && error.code === 11000) {
                        return Promise.reject({ error: `Duplicate ${files[index].originalname}. File Already exists! ` });
                    }
                    return Promise.reject({ error: error.message || `Cannot Upload ${files[index].originalname} Something Missing!` })
                }
            })
    });

    Promise.all(result)
        .then(msg => {
            // res.json(msg);
            res.redirect('/')
        })
        .catch(err => {
            res.json(err);
        })
}