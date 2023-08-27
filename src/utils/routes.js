export const routes = {
    home: "/",
    accounts: {
        login: "/accounts/login",
        register: "/accounts/register",
        settings: "/accounts/settings",
    },
    templates: {
        create: "/templates/create",
        getAll: "/templates",
    },
    labels: {
        create: "/labels/create",
        getById: id => `/labels/${id}`,
    },
    products: {
        create: "/products/create",
        getBySlug: slug => `/products/${slug}`,
    },
    initials: {
        create: "/initials/create",
        getInitials: "/initials",
    },
    companies: {
        create: "/companies/create",
        getCompanies: "/companies",
    },
    admin: {
        nutritionalValues: {
            create: "/admin/nutritionalValues/create",
            get: "/admin/nutritionalValues",
        },
        accounts: {
            get: "/admin/accounts"
        }
    }
}