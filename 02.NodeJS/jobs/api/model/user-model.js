'use strict';

//this file will only export mehtods like 'get'. if exports all the object, then will publish too much code

const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

// mongoose will understand that the User will be related with Users collections
const User = mongoose.model('User', schema);

module.exports.get = (query) => {
    return User.find(query);
}

module.exports.save = (user) => {
    return new Promise((resolve, reject) => {
        new User(user).save((err, data) => {
            if (err) { // the function will execute when it contains error
                return reject(err);
            }

            resolve({ // the funciton was execute successfully
                _id: data._id
            });
        });
    });
}

module.exports.update = (_id, user) => {
    let _query = { _id }; // same as let _query = { _id: _id };

    return User.update(_query, user);
};
