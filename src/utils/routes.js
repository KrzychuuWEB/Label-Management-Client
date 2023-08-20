export const routes = {
    home: "/",
    accounts: {
        login: "/accounts/login",
        register: "/accounts/register",
        settings: "/accounts/settings",
    },
    labels: {
        create: "/labels/create",
    },
    products: {
        create: "/products/create",
        getBySlug: (slug) => `/products/${slug}`,
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
        }
    }
}