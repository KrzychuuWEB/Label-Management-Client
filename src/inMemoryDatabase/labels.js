import {productsTable} from "@/inMemoryDatabase/products";
import {companiesTable} from "@/inMemoryDatabase/companies";
import {usersTable} from "@/inMemoryDatabase/users";
import {labelTemplatesTable} from "@/inMemoryDatabase/labelTemplates";

export const labelsTable = [
    {
        id: 1,
        business: companiesTable[0],
        productId: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
    },
    {
        id: 2,
        business: companiesTable[0],
        productId: productsTable[1],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
    },
    {
        id: 3,
        business: companiesTable[1],
        productId: productsTable[0],
        label_template_id: labelTemplatesTable[1],
        user_id: usersTable[0],
    },
];