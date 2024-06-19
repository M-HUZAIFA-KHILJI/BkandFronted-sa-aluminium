const express= require(`express`);
const router=express.Router();
const authController=require('../controller/authController');
const auth=require('../middlewares/auth');


//testing
router.get('/test',(req,res)=>res.json({msg: 'Working!'}))
//user


//register
router.post('/register',authController.register);

//login
router.post('/login',authController.login);

//logout
router.post('/logout',auth,authController.logout);

//refresh
router.get('/refresh', authController.refresh);

module.exports=router;