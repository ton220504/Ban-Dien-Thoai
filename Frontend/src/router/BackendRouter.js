import Dashboard from "../pages/backend/Dashboard";
import {
    ProductCreate,
    ProductEdit,
    ProductList,
    Category,
    Brand,
    Topic,
    Page,
    Post,
    PostCreate,
    Banner,
    Contact,
    ContactCreate,
    BannerCreate,
    Menu,
    MenuCreate,
    Order,
    OrderDetail,
    OrderCreate,
    PageCreate,
    User,
    UserCreate,
    

} from "../pages/backend/product";
import Customer from "../pages/backend/Lienhe/Customer";


const BackendRouter = [
    { path: "/admin", component: Dashboard },
    { path: "/admin/product", component: ProductList },
    { path: "/admin/product/create", component: ProductCreate },
    { path: "/admin/product/edit/:id", component: ProductEdit },
    { path: "/admin/category", component: Category },
    { path: "/admin/brand", component: Brand },
    { path: "/admin/topic", component: Topic },
    { path: "/admin/page", component: Page },
    { path: "/admin/page/create", component: PageCreate },
    { path: "/admin/post", component: Post },
    { path: "/admin/post/create", component: PostCreate },
    { path: "/admin/banner", component: Banner },
    { path: "/admin/banner/create", component: BannerCreate },
    { path: "/admin/contact", component: Contact },
    { path: "/admin/contact/create", component: ContactCreate },
    { path: "/admin/menu", component: Menu },
    { path: "/admin/menu/create", component: MenuCreate },
    { path: "/admin/order", component: Order },
    { path: "/admin/order/create", component: OrderCreate },
    { path: "/admin/orderdetail", component: OrderDetail },
    { path: "/admin/user", component: User },
    { path: "/admin/customer", component: Customer },
    { path: "/admin/user/create", component: UserCreate },

];

export default BackendRouter;