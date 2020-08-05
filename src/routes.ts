import Router from '@koa/router'

import getTransactions from './controllers/getTransactions'

const router = new Router()

router.get('/transactions', getTransactions)

router.get('/transactions/biggest', getTransactions)

export default router
