import express from 'express';
import * as api from './api';

const router = express.Router();

router.get('/', (req, res) => res.render('signup'));
router.get('/report', (req, res) => {
    const users = api.getAll();
    res.send(JSON.stringify(users));
});
router.get('/guide', (req, res) => {
    const isUser = false;
    res.render('guide');
});
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
        api.insert(fname, lname, email, (err: Error) => {
            if (err) {
                errors.push({ msg: 'Error on signup. See console log.'});
                console.log('Error returned from insert.');
                res.render('signup', {
                    errors,
                    fname,
                    lname,
                    email
                });
            }});
        console.log('Insert successful.');
        res.render('guide', {
                fname: fname,
                lname: lname,
                email: email
            });
        };
    });
export default router;
