import numeral from 'numeraljs'

export const formatPrice = num => `$ ${numeral(num).format('0,0.00')}`
