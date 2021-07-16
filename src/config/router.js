
const routes = [
    {
        path: "/dashboard",
        title: "Dashboard",
    },
    {
        path: "/product",
        title: "Product",
        sub:
            [{ path: `/product/new`, title: "New Product" }]
    }, 
    {
        path: "/unit",
        title: "Unit"
    },
    {
        path: "/order",
        title: "Order"
    }, 
    {
        path: "/user",
        title: "User",
        sub:
            [{ path: `/user/add-user`, title: "Add User" }]

    },
]

export default routes;