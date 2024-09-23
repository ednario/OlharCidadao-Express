import multer from "multer";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});