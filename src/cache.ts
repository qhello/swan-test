import csv from 'csv-parser'
import path from 'path'
import fs from 'fs'

import config from './config'

export interface Transaction {
	ibanSource: string
	amount: number
	transactionType: string
	companyName: string
}

export interface TransactionCsv {
	ibanSource: string
	amount: string
	transactionType: string
	companyName: string
}

export const CACHE: Transaction[] = []

fs.createReadStream(path.join(__dirname, config.csv.file.path))
	.pipe(csv())
	.on('data', ({ amount, ...transaction }: TransactionCsv) =>
		CACHE.push({
			...transaction,
			amount: parseFloat(amount),
		})
	)
