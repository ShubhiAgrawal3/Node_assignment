const mongoose = require('mongoose');
const express = require('express');


const dbURI = 'mongodb+srv://Shubhi_Agrawal:5727856sh@newcluster.xh8kjhp.mongodb.net/EmployeeDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true },(err) => {
    if(!err){
        console.log('Connection established');
    }
});

require('./employee.model')

