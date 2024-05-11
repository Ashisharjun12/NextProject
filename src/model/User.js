import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  Content: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: [true, "Please Enter Username"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: true,
    match: [/([A-Z])\w+/, " Use a Valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
  },
  verifyCode: {
    type: String,
    required: [true, "Please Verify Code"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Please VerifyCodeExpiry Code"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
});

const UserModal = mongoose.model.Users || mongoose.model("User", UserSchema);

export default UserModal;
