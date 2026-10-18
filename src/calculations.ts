import type { Product } from './types'
export const feeAmount=(p:Product)=>p.price*p.feeRate/100
export const contribution=(p:Product)=>p.price-p.cost-p.shipping-feeAmount(p)-p.otherCost
export const margin=(p:Product)=>p.price>0?contribution(p)/p.price*100:0
export const initialCommitment=(p:Product)=>p.cost*p.moq+p.shipping+p.otherCost
export const budgetSummary=(products:Product[],budget=300000)=>{const committed=products.reduce((s,p)=>s+initialCommitment(p),0);return {budget,committed,remaining:budget-committed,rate:budget?committed/budget*100:0}}
