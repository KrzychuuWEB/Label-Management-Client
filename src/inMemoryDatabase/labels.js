import {productsTable} from "@/inMemoryDatabase/products";
import {companiesTable} from "@/inMemoryDatabase/companies";
import {usersTable} from "@/inMemoryDatabase/users";
import {labelTemplatesTable} from "@/inMemoryDatabase/labelTemplates";

export const labelsTable = [
    {
        id: 1,
        company_id: companiesTable[0],
        product_id: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 1kg"
    },
    {
        id: 2,
        company_id: companiesTable[0],
        product_id: productsTable[1],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 5kg"
    },
    {
        id: 3,
        company_id: companiesTable[1],
        product_id: productsTable[0],
        label_template_id: labelTemplatesTable[1],
        user_id: usersTable[0],
        name: "Ziele angielskie - 15kg"
    },
    {
        id: 4,
        company_id: companiesTable[0],
        product_id: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 25kg"
    },
    {
        id: 5,
        company_id: companiesTable[0],
        product_id: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 25kg"
    },
    {
        id: 6,
        company_id: companiesTable[0],
        product_id: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 25kg"
    },
    {
        id: 7,
        company_id: companiesTable[0],
        product_id: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 25kg"
    },
    {
        id: 8,
        company_id: companiesTable[0],
        product_id: productsTable[0],
        label_template_id: labelTemplatesTable[0],
        user_id: usersTable[1],
        name: "Ziele angielskie - 25kg"
    },
];