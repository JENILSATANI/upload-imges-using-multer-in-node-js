const express = require('express')
const app = express()
const fs = require('fs')
const images = require('../app')
const {ObjectId} = require('mongodb')
const { uploadimage } = require('../controllers/userControllers')
const fileupload = require('express-fileupload')
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var uploadsDir = __dirname + '/public';
app.use(fileupload)
const router = express.Router()

router.get('/get/:id', (req, res) => {
    const id = req.params.id
        images.findById(ObjectId(id))
            .exec(function (err, result) {
                if (err) {
                    console.log("err", err)
                } else {
                    res.status(200).json({  
                        data: result, success: true
                    })
                }
            })
    })

    router.get('/', (req, res) => {
        images.find({}).exec(function(err, user) {
            if(err) throw err;
            if(!user) {
                res.json({ success: fale, message: 'User not found' });
            } else {
                res.json({ success: true, message: 'get details Successfully', data: user });
            }
        })
    })
router.post('/', uploadimage, (req, res) => {
    console.log("Hello");
    console.log("req.body", req.file);
    console.log("req.body", req.body);
    const data = images({
        name:req.body.name,
        gmail:req.body.gmail,
        password:req.body.password,
        photo: req.file.filename,
        photo_path:"http://localhost:8600/user/" + req.file.filename
    })
    data.save((err) => {
        if(err){
            console.log(err)
        }
    })
    // console.log(req.file)
    res.send("Submit successful");
    // res.send(req.body)
    // photo: req.file.filename,
    // photo_path:"http://localhost:8600/user/" + req.file.filename
}
)


router.put('/:id', uploadimage, async (req, res) => {
        console.log("past____-", req.body);
    images.findOne({_id: req.params.id}).exec((err, result) => {
        if(err) {
            console.log(err)
        } 
        else {
            if(req.file == null) {
                result.name = req.body.name,
                result.gmail = req.body.gmail,
                result.password = req.body.password
                result.save()
            }
          else{
              result.name = req.body.name,
              result.gmail = req.body.gmail,
              result.password = req.body.password
              result.photo = req.file.filename;
              result.photo_path = "http://localhost:8600/user/" + req.file.filename;
  
              result.save(function(err){
                  if(err){
                      console.log(err);
                  }
              }); 
              res.send("update")
          }
        }
    })


})
router.delete("/:id", async (req, res) => {
    // images.find({ _id: req.params.id }).exec(function (err, ress) {
        // res.json({'data':ress})
        const user = await images.findByIdAndDelete(req.params.id);
        res.send(user)
        // console.log("ress.photo", ress[0].photo);
        // fs.unlink("public/"+ress[0].photo, async (err) => {
        //     if (err) throw err;
       
        // })
    })
// }),



module.exports = router