export type SampleStatus = '미검수' | '주문예정' | '검수중' | '통과' | '보류'
export type Product = { id:string; name:string; category:string; supplier:string; cost:number; price:number; shipping:number; feeRate:number; otherCost:number; moq:number; imageRights:boolean; stockCheckedAt:string; sampleStatus:SampleStatus; assumption:boolean }
export type ProductInput = Omit<Product,'id'>
