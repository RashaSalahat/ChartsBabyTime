
var config = require('../config/dbconfig')
var Mass = require('../models/mass')
var Sleep = require('../models/sleep')
var Workout = require('../models/workout')
var functions = {
    addNewMass:  (req, res) =>{
        
        if ( ((req.body.name==false))   ||   ((req.body.Age==false))   ||   ((req.body.Height==false))  ||   ((req.body.Mass==false)) ) {

                res.json({success: false, msg: 'Enter all fields'}) }
        else {
            var newMass = Mass({
                name: req.body.name,
                Age: req.body.Age,
                Height:req.body.Height,
                Mass:req.body.Mass,
            });
            newMass.save(function (err, newMass) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                    
                }
            })
            
        }
    },
    getAllMass : async(req, res) =>{
        try {
          const result = await Mass.find()
          res.send(result)
        } catch (error) {
          console.log(error)
        }
      },
//FindOneMass
getOneMass : async (req, res) =>{
    const name = req.params.name;
    console.log(name);
   await Mass.findOne({name: req.params.name},)
    .then(mass => {
        res.send(mass),
        console.log(mass);
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving mass information" })
    })
  },
addNewSleep: function (req, res) {
            var newSleep = Sleep({
                name: req.body.name,
                Mon: req.body.Mon,
                Tue:req.body.Tue,
                Wed:req.body.Wed,
                Thur:req.body.Thur,
                Fri:req.body.Fri,
                Sat:req.body.Sat,
                Sun:req.body.Sun,
            });
            newSleep.save(function (err, newSleep) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                    
                }
            })
            
        
    },
    getAllSleep : async(req, res) =>{
        try {
          const result = await Sleep.find()
          res.send(result)
        } catch (error) {
          console.log(error)
        }
      },

      addNewWorkout: function (req, res) {
        var newWorkout = Workout({
            name: req.body.name,
            Mon: req.body.Mon,
            Tue:req.body.Tue,
            Wed:req.body.Wed,
            Thur:req.body.Thur,
            Fri:req.body.Fri,
            Sat:req.body.Sat,
            Sun:req.body.Sun,
        });
        newWorkout.save(function (err, newWorkout) {
            if (err) {
                res.json({success: false, msg: 'Failed to save'})
            }
            else {
                res.json({success: true, msg: 'Successfully saved'})
                
            }
        })
        
    
},
getAllWorkout: async(req, res) =>{
    try {
      const result = await Workout.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  },
    getAllSleep : async(req, res) =>{
        try {
          const result = await Sleep.find()
          res.send(result)
        } catch (error) {
          console.log(error)
        }
      },

      addNewWorkout: function (req, res) {
        var newWorkout = Workout({
            name: req.body.name,
            Mon: req.body.Mon,
            Tue:req.body.Tue,
            Wed:req.body.Wed,
            Thur:req.body.Thur,
            Fri:req.body.Fri,
            Sat:req.body.Sat,
            Sun:req.body.Sun,
        });
        newWorkout.save(function (err, newWorkout) {
            if (err) {
                res.json({success: false, msg: 'Failed to save'})
            }
            else {
                res.json({success: true, msg: 'Successfully saved'})
                
            }
        })
        
    
},
getAllWorkout: async(req, res) =>{
    try {
      const result = await Workout.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  },
  addNewMilk: function (req, res) {
    var newMilk = Milk({
        name: req.body.name,
        Mon: req.body.Mon,
        Tue:req.body.Tue,
        Wed:req.body.Wed,
        Thur:req.body.Thur,
        Fri:req.body.Fri,
        Sat:req.body.Sat,
        Sun:req.body.Sun,
    });
    newMilk.save(function (err, newMilk) {
        if (err) {
            res.json({success: false, msg: 'Failed to save'})
        }
        else {
            res.json({success: true, msg: 'Successfully saved'})
            
        }
    })
    

},
getAllMilk : async(req, res) =>{
try {
  const result = await Milk.find()
  res.send(result)
} catch (error) {
  console.log(error)
}
}
}

module.exports = functions