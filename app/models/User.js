import mongoose, {Schema } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
},
{
    timestamps: true
}
);

const User = mongoose.models.Users || mongoose.model("Users", userSchema)

export default User