import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: function () {
      return !this.googleId; // Password required only if not signing up via Google
    },
  },

  role: {
    type: String,
    enum: ["learner", "mentor", "both"],
    default: "learner",
  },

  googleId: {
    type: String,
    default: null,
  },

  skillCoins: {
    type: Number,
    default: 0,
  },

  bio: {
    type: String,
    default: "",
  },

  skills: {
    type: [String], // e.g., ["React", "Node.js"]
    default: [],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);
