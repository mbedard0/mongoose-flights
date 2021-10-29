import { Router } from 'express'
import * as indexCtrl from '../controllers/index.js'
const router = Router()

/* GET home page. */
router.get('/', indexCtrl.index)


export { 
  router
}
