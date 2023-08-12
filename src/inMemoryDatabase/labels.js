import {inMemoryGetProduct} from "@/inMemoryDatabase/products";
import {inMemoryBusiness} from "@/inMemoryDatabase/business";

export const inMemoryGetLabels = [
    {
        id: 1,
        business: inMemoryBusiness[0],
        productId: inMemoryGetProduct
    },
    {
        id: 2,
        business: inMemoryBusiness[0],
        productId: inMemoryGetProduct
    },
    {
        id: 3,
        business: inMemoryBusiness[1],
        productId: inMemoryGetProduct
    },
];