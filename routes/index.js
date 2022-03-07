const express = require('express')
const images = require('../app')
const { uploadimage } = require('../controllers/userControllers')

const router = express.Router()
// localhost:3000/user/upload
router.get('/', (req, res) => {
    res.send('hettt')
})
router.post('/upload', uploadimage, (req, res) => {
    const data = images({
        photo: req.file.filename
    })
    data.save()
    console.log(data)
    res.send(req.file)
    console.log(req.file)
}

)
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const file =  await images.findByIdAndDelete(id)
    res.send(file)
    // console.log(req.file)

})
module.exports = router