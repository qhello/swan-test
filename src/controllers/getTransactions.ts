import { Context } from 'koa'
import _ from 'lodash'

import { CACHE, Transaction } from '../cache'

export default async (ctx: Context): Promise<void> => {
	const { searchIban } = ctx.request.query

	let result: Transaction[] | Transaction | undefined = CACHE

	// Search IBAN?
	if (searchIban) {
		result = result.filter(({ ibanSource }) => ibanSource.includes(searchIban))
	}

	// Looking for biggest transation
	if (ctx.url.includes('/biggest')) {
		result = _.last(_.sortBy(result, 'amount'))
	}

	ctx.body = result
}
