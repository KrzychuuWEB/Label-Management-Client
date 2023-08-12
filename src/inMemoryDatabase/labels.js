import {productsTable} from "@/inMemoryDatabase/products";
import {businessTable} from "@/inMemoryDatabase/business";

export const labelsTable = [
    {
        id: 1,
        business: businessTable[0],
        productId: productsTable[0]
    },
    {
        id: 2,
        business: businessTable[0],
        productId: productsTable[1]
    },
    {
        id: 3,
        business: businessTable[1],
        productId: productsTable[0]
    },
];