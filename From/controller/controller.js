const session = require('../session/session')
const user = require('../model/model');


exports.singup = (async(req, res) => {

    await user.insertMany(req.body).then(async data => {

        const reference = req.body.reference
        await user.find({ email: req.body.reference }).then(async data => {

            const email = data[0].email

            if (reference == email) {

                const salary = data[0].salary
                const totalsalary = salary * 0.07 + salary

                await user.updateOne({ email }, {
                    $set: {
                        salary: totalsalary
                    }
                })
            }
        })
    })
})

exports.login = (async(req, res) => {

    await user.find({ email: req.body.email }).then(async data => {

        session.session = [req.body.email, req.body.password]

        req.session = session.session
        console.log(req.session)

        if (data == '') {
            res.send("please enter vaid email")
        } else {
            const sign = data[0].password
            const login = req.body.password


            if (sign == login) {
                const email = data[0].email
                const arr_email = []
                await user.find().then(data => {
                    data.forEach(element => {
                        (element.email != req.body.email) ? arr_email.push(element): 0
                    })
                    res.send(arr_email)
                })

            } else {
                res.json({ "msg": "login fail" })

            }
        }

    })
})

exports.update = ((req, res) => {
    user.updateOne({ email: req.body.email }, {
        $set: {
            email: req.body.email,
            password: req.body.password,
            salary: req.body.salary,
        }
    }).then(data => {
        // console.log(data)
        if (data.modifiedCount == 1) {
            res.send('data update')
        } else {
            res.send('not updated')
        }
    }).catch((e) => console.log(e))

})

exports.delete = ((req, res) => {
    user.deleteOne({ email: req.body.email }).then(() => { console.log('data is delete') })
})