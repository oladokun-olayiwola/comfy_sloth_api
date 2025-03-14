import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/users";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["super_admin", "admin"], default: "admin" },
});

export default mongoose.model<IUser>("User", UserSchema);
