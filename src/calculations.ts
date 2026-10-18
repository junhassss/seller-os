import type { Product } from './types'
export const feeAmount=(p:Product)=>p.price*p.feeRate/100
export const contribution=(p:Product)=>p.price-p.cost-p.shipping-feeAmount(p)-p.otherCost
export const margin=(p:Product)=>p.price>0?contribution(p)/p.price*100:0
export const initialCommitment=(p:Product)=>p.cost*p.moq+p.shipping+p.otherCost
export const budgetSummary=(products:Product[],budget=300000)=>{const committed=products.reduce((s,p)=>s+initialCommitment(p),0);return {budget,committed,remaining:budget-committed,rate:budget?committed/budget*100:0}}
export const scenarioContribution=(p:Product,discountRate=0,returnRate=0,adCost=0)=>{const realizedPrice=p.price*(1-discountRate/100);return realizedPrice-p.cost-p.shipping-realizedPrice*p.feeRate/100-p.otherCost-realizedPrice*returnRate/100-adCost}
export const validationEfficiency=(p:Product,discountRate=0,returnRate=0,adCost=0)=>{const commitment=initialCommitment(p);return commitment>0?scenarioContribution(p,discountRate,returnRate,adCost)/commitment:0}
export const rankCandidates=(products:Product[],discountRate=0,returnRate=0,adCost=0)=>[...products].sort((a,b)=>validationEfficiency(b,discountRate,returnRate,adCost)-validationEfficiency(a,discountRate,returnRate,adCost))
