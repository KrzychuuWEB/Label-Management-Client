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
}