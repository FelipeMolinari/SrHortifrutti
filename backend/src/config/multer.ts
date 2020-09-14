import multer from 'multer'
import path from 'path'
import crypto from 'crypto'


const upload = multer({
  dest: path.resolve(__dirname, '..','..','tmp','uploads'),
  storage: multer.diskStorage({
    destination: (_, __, cb)=>{
      cb(null, path.resolve(__dirname, '..','..','tmp','uploads'))
    },
    filename: (_, file, cb)=>{
      crypto.randomBytes(16, (err, hash)=>{
        if(err) cb(err, file.originalname);
        const filename = `${hash.toString('hex')}-${file.originalname}`
        cb(null, filename)
      })
    }
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (_, file, cb) => {
      const allowedMimes = [
        "image/jpeg",
        "image/pjpeg",
        "image/png",
      ]
      if(allowedMimes.includes(file.mimetype)){
        cb(null, true)
      }else{
        cb(new Error("Invalid file type."))
      }
  },
});

export default upload;