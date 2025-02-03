const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    minlength: 5,
    maxlength: 50,
    // validate: function(value){
    //   var emailRegec = 

    // }
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: ['male', 'female', 'other']
  },
  city:{
    type: String
  },
  designation: {
    type: String
  },
  salary: {
    type: Number,
    default: 0.0,
  },
  created: { 
    type: Date,
    default: Date.now
  },
  updatedat: { 
    type: Date,
    default: Date.now

  },
});

//Declare Virtual Fields


//Custom Schema Methods
//1. Instance Method Declaration


//2. Static method declararion


//Writing Query Helpers



EmployeeSchema.pre('save', (next) => {
  console.log("Before Save")
  let now = Date.now()
   
  this.updatedat = now
  // Set a value for createdAt only if it is null
  if (!this.created) {
    this.created = now
  }
  
  // Call the next function in the pre-save chain
  next()
});

EmployeeSchema.pre('findOneAndUpdate', (next) => {
  console.log("Before findOneAndUpdate")
  let now = Date.now()
  this.updatedat = now
  console.log(this.updatedat)
  next()
});


EmployeeSchema.post('init', (doc) => {
  console.log('%s has been initialized from the db', doc._id);
});

EmployeeSchema.post('validate', (doc) => {
  console.log('%s has been validated (but not saved yet)', doc._id);
});

EmployeeSchema.post('save', (doc) => {
  console.log('%s has been saved', doc._id);
});

EmployeeSchema.post('remove', (doc) => {
  console.log('%s has been removed', doc._id);
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;