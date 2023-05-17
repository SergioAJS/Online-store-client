import { Suspense, lazy } from 'react';
import Auth from "./pages/Auth"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE} from "./utils/consts"

const Admin = lazy(() => import("./pages/Admin"))
const Basket = lazy(() => import("./pages/Basket"))

const AdminLazy = () => {
    return (
        <Suspense><Admin/></Suspense>
    )
}

const BasketLazy = () => {
    return (
        <Suspense><Basket/></Suspense>
    )
}


export const authRoutes  = [
    {
        path: ADMIN_ROUTE,
        Component: AdminLazy
    },
    {
        path: BASKET_ROUTE,
        Component: BasketLazy
    },
]

export const publicRoutes  = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
]