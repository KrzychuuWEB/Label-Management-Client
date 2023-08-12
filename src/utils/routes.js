export const routes = {
    home: "/",
    login: "/login",
    labels: {
        create: "/labels/create",
    },
    products: {
        create: "/products/create",
        getById: (productId) => `/products/${productId}`,
    },
}