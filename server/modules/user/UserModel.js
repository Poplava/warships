import mongoose, { Schema } from 'mongoose';

var UserSchema = new Schema({
    username: {
        type: String
    }
});

export default mongoose.model('User', UserSchema);
