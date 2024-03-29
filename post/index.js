//http://localhost:8000/student/register
//http://localhost:8000/course/register
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const studModel = require('./studModel')
const bcrypt = require('bcrypt')
const bodyparser = require("body-parser");
const courseModel = require('./coursemodel')
const port = process.env.PORT || 8000
    // app.use(bodyparser.urlencoded({ extended: true }));
    //  app.use(bodyparser.json());  

app.use(express.json())
const { studentRouter, courseRouter } = require("./rout")
app.use("/student", studentRouter);
app.use("/course", courseRouter)
const uri = 'mongodb+srv://DhruvikBhayani:Dk5@bhayani@dhruvik.0qfcz.mongodb.net/student?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/find", (req, res) => {
    studModel.find(req.query).then((data) => res.json(data))

})

app.post("/submit", (req, res) => {

    var queryObject = req.body
    var newUser = new studModel(queryObject);
    newUser.save().then(() => console.log("Document Inserted...")).catch(error => console.log(error))

})

app.get("/coursefind", (req, res) => {
    courseModel.find(req.query).then((data) => res.json(data))

})

app.post("/submitCourse", async(req, res) => {

    // a(queryObject.fees, queryObject)
    var queryObject = req.body
    try {
        var newUsers = await new courseModel(queryObject);

        newUsers.fees = await bcrypt.hash(newUsers.fees, 10)
            // console.log(newUsers.fees)
        newUsers.save().then((data) => res.status(201)).catch(error => console.log(error))
    } catch {
        console.log("erro")
    }

})
app.listen(port, () => {
    console.log("listing port 8000");
})






// var count = studModel.count().then(data => data)
// console.log(count);

// if (count == 0) {
//     queryObject.form_no = 1001
//     console.log(queryObject.form_no);
// } else {
//     var lastRecord = studModel.find().select("form_no").sort({ _id: -1 }).limit(1);
//     console.log(lastRecord);
//     queryObject.form_no = lastRecord[0].form_no + 1
// }