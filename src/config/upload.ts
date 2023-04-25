import multer from 'multer';
import path from 'path';
const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');
import crypto from 'crypto';

export default {
  directory: uploadFolder,
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename(Request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');

      const filename = `${fileHash}-${file.originalname}`;

      callback(null, filename);
    },
  }),
};
