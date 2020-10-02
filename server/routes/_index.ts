import express from 'express';
import * as userRepo from '../api/_index';

const router = express.Router();

router.get('/', (req, res) => res.render('signup'));
router.post('/guide', (req, res) => {
    const { fname, lname, uname } = req.body;
    let errors = [];

    if (!fname || !lname || !uname) {
        errors.push({ msg: 'Please enter all fields' });
    }

    let user = userRepo.getByUsername(uname);
    if (!user) {
        errors.push({ msg: 'Username not found' });
    }

    if (errors.length > 0) {
        res.render('signup', {
            errors,
            fname,
            lname,
            uname,
        });
    } else {
        res.render('guide', {
            user,
        });
    }
});

export default router;
