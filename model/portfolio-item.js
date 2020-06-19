const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            unique: true
        },
        description:{
            type: String,
            trim: true,
            unique: true
        },
        git:{
            type: String,
            trim: true,
            unique: true
        },
        app:{
            type: String,
            trim: true,
            unique: true
        },
        gifUrl:{
            type: String,
            trim: true,
            unique: true
        }
    }
//   {
//     username: {
//       type: String,
//       lowercase: true,
//       required: true,
//       trim: true,
//       minlength: 1,
//       maxlength: 20,
//       unique: true,
//     },
//     name: {
//       type: String,
//       trim: true,
//       minlength: 1,
//       maxlength: 20,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     friends: [
//       {
//         _id: Schema.Types.ObjectId,
//         date: Date,
//       },
//     ],
//     bio: {
//       type: String,
//       minlength: 1,
//       maxlength: 50,
//       trim: true,
//     },
//     location: {
//       type: String,
//       minlength: 1,
//       maxlength: 50,
//       trim: true,
//     },
//     profilePic: {
//       type: String,
//       maxlength: 50,
//       trim: true,
//       default: "/images/orangemonster.jpg"
//     },
//     events: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Event",
//       },
//     ],
//     createdAt: Date
//   },
//   { timestamps: true }
);

const PortfolioItem = mongoose.model("PortfolioItem", ItemSchema);

module.exports = PortfolioItem;
