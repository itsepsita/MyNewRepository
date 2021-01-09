export class Product {
    prodId: number;
    prodName: string;
    prodPrice: number;
    aqty: number;
    sCode: number;


    constructor(prodId:number, prodName: string, prodPrice: number, aqty:number, sCode:number)
    {
        this.prodId = prodId;
        this.prodName=prodName;
        this.prodPrice=prodPrice;
        this.aqty=aqty;
        this.sCode=sCode;
    }
}
