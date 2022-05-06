const express = require('express')
const actions = require('../methods/actions')  // having all our actions
const router = express.Router()



// 
router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

//@desc Adding new user
//@route POST /adduser
router.post('/adduser', actions.addNew)

router.get('/showusers', actions.getAllDoc)
//finduser
router.get('/showusers/:id', actions.find)

//@desc Adding new user
//@route POST /adduser
router.post('/addMass', actions.addNewMass)

router.get('/showMass', actions.getAllMass)

router.post('/addSleep', actions.addNewSleep)

router.get('/showSleep', actions.getAllSleep)


module.exports = router
