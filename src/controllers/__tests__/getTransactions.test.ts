import request from 'supertest'
import app from '../..'

const server = app.callback()

// TODO: Doesn't work :(
describe('Get biggest transaction with Iban chunk', () => {
	it('Should return correct transaction', async () => {
		const res = await request(server).get('transactions/biggest').expect(200)

		expect(res.body).toEqual({
			ibanSource: 'FO3999710728608287',
			transactionType: 'deposit',
			companyName: 'Dare  Turner and Rogahn',
			amount: 942.5,
		})
	})
})
