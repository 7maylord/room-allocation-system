const mongoose = require('mongoose');

const OccupantSchema = new mongoose.Schema({
    name: String,
    role: { type: String, enum: ['facilitator', 'developer'], required: true },
    skillSet: { type: String, enum: ['smart contract', 'frontend', 'server-side'], required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
});

const RoomSchema = new mongoose.Schema({
    roomNumber: { type: Number, required: true, unique: true },
    occupants: [OccupantSchema],
    genderAssigned: { type: String, enum: ['male', 'female', null], default: null },
});

module.exports = mongoose.model('Room', RoomSchema);
