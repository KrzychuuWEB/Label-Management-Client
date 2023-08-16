export const routes = {
    home: "/",
    login: "/login",
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
}