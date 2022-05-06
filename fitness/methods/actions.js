var User = require('../models/user')
var config = require('../config/dbconfig')
var Mass = require('../models/mass')
var Sleep = require('../models/sleep')

var functions = {
    addNew: function (req, res) {
        
        if ( ((req.body.percent==false))   ||   ((req.body.name==false))   ||   ((req.body.day==false)) ) {

                res.json({success: false, msg: 'Enter all fields'}) }
        else {
            var newUser = User({
                name: req.body.name,
                percent: req.body.percent,
                day:req.body.day
            });
            newUser.save(function (err, newUser) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'}),
                    console.log("name:" +  req.body.name),
                    console.log("password:" +  req.body.percent ),
                    console.log("ID:" +  req.body.id ),
                    console.log("Day" +  req.body.day )
                
                    
                }
            })
            
        }
    },
     getAllDoc : async(req, res) =>{
        try {
          const result = await User.find()
          res.send(result)
        } catch (error) {
          console.log(error)
        }
      },


     find : (req, res)=>{
       // if the user wanted to find a selected id 
          //  retrive and return a single user we use params in postman + select a certain id the url is diff like this : http://localhost:3000/api/users?id=6252e9a55b5291c52a429dbd
          const id = req.params.id; 
            User.findById(id)
                .then(data =>{
                    if(!data){
                        res.status(404).send({ message : "Not found user with id "+ id})
                    }else{
                        res.send(data)
                    }
                })
                .catch(err =>{
                    res.status(500).send({ message: "Erro retrieving user with id " + id})
                })
    
        
    },
    addNewMass: function (req, res) {
        
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
      }
}

module.exports = functions