import mongoose  from 'mongoose';

const Schema = mongoose.Schema;
export const ContactSchema = new Schema({
  fistName: {
    type: String,
    lowercase: true,
    required: "Enter the FirstName",
  },
  lastName: {
    type: String,
    lowercase: true,
    required: "Enter the LastName",
  },
  email: {
    type: String,
    lowercase: true,

  },
  company: {
    type: String,
    lowercase: true,

  },
  phone: {
    type: Number,
  },
  created_date: {
    type: Date,
    default:Date.now
  }
});