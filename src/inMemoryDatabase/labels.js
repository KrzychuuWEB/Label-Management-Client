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
        name: "Ziele angielskie - 1kg"
    },
    {
        id: 2,
        business: companiesTable[0],
        productId: productsTable[1],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 5kg"
    },
    {
        id: 3,
        business: companiesTable[1],
        productId: productsTable[0],
        label_template_id: labelTemplatesTable[1],
        user_id: usersTable[0],
        name: "Ziele angielskie - 15kg"
    },
    {
        id: 4,
        business: companiesTable[0],
        productId: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 25kg"
    },
    {
        id: 5,
        business: companiesTable[0],
        productId: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 25kg"
    },
    {
        id: 6,
        business: companiesTable[0],
        productId: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 25kg"
    },
    {
        id: 7,
        business: companiesTable[0],
        productId: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 25kg"
    },
    {
        id: 8,
        business: companiesTable[0],
        productId: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 25kg"
    },
];