import {productsTable} from "@/inMemoryDatabase/products";

export const batchesTable = [
    {
        id: 1,
        product_id: productsTable[0],
        batch: "1234P",
        date: "09/2023",
        country: "Polska",
    },
    {
        id: 2,
        product_id: productsTable[1],
        batch: "BATCH12345A",
        date: "01/2026",
        country: "Chiny",
    },
    {
        id: 3,
        product_id: productsTable[1],
        batch: "fdgfsdgfsda324",
        date: "06/2029",
        country: "Hiszpania",
    },
];