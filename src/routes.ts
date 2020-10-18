import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.render('signup'));

router.post('/guide', (req, res) => {
    const { fname, lname, email } = req.body;
    console.log(`fname=${!fname ? 'NOT': fname}, lname=${!lname?'NOT':lname}, email=${email}`);
    let errors = [];

    if (!fname || !lname || !email) {
        errors.push({ msg: 'Please enter all fields' });
    }

    if (errors.length > 0) {
        res.render('signup', {
            errors,
            fname,
            lname,
            email
        });
    } else {
        res.render('guide', {
            fname: fname,
            lname: lname,
            email: email
        });
    }
});

export default router;
