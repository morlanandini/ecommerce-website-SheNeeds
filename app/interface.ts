export interface simplifiedProduct {
    _id : string;
    imageUrl : string;
    price : number;
    slug : string;
    categoryName : string;
    name : string;
}

export interface fullProduct {
    _id : string;
    image : any;
    price : number;
    slug : string;
    categoryName : string;
    name: string,
    description : string,
    size : string,
    price_id : string
}