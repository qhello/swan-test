import dotenv from 'dotenv'

dotenv.config()

export default {
	csv: {
		file: {
			path: process.env.CSV_FILEPATH || '../ressources/transactions.csv',
		},
	},
	port: process.env.PORT || 3000,
}
