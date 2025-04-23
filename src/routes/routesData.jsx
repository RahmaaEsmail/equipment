import CartPage from '../pages/CartPage/CartPage';
import HomePage from '../pages/HomePage/HomePage';
import PaymentProccessedPage from '../pages/PaymentProccessedPage/PaymentProccessedPage';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import Quotations from '../pages/Quotations/Quotations';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import AccountPage from "../pages/AccountPage/AccountPage";
import DeliveryLocations from "../pages/AccountPage/DeliveryLocations/DeliveryLocations";
import FavoriteItems from "../pages/AccountPage/FavoriteItems/FavoriteItems";
import GiftsPage from "../pages/AccountPage/GiftsPage/GiftsPage";
import MyOrdersPage from "../pages/AccountPage/MyOrdersPage/MyOrdersPage";
import ProfilePage from "../pages/AccountPage/ProfilePage/ProfilePage";
import Reviews from "../pages/AccountPage/Review/Reviews";
import SettingsPage from "../pages/AccountPage/SettingsPage/SettingsPage";
import WalletPage from "../pages/AccountPage/WalletPage/WalletPage";
import EnterResetCodePage from "../pages/EnterResetCodePage/EnterResetCodePage";
import ForgetPasswordPage from "../pages/ForgetPassword/ForgetPassword";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";

export const routesData  = [
    {
        id:1,
        name:"الصفحه الرئيسية",
        route:'/',
        component : HomePage ,
        hidden : false
    },
    {
        id:2,
        name:"Quick View",
        component : ProductDetails ,
        route:"/product-details/:product_id",
        hidden : false
    },
    {
        id:3,
        name:"Products",
        component :ProductsPage,
        route:"/products",
        hidden:false
    },
    {
        id:4,
        name:"Quotations",
        component : Quotations ,
        route:"/quotations",
        hidden:false
    },
    {
        id:5,
        name:"Processed Cart",
        component : PaymentProccessedPage,
        route:"/payment_processed",
        hidden:false
    },
    {
        id:6,
        name:"Cart",
        component : CartPage,
        route:"/cart",
        hidden:false
    },
    {
        id:7,
        name:"Product Details",
        component : DetailsPage,
        route:"/Products/:id"
    },
    {
        id: 8,
        name: "login",
        route: "/login",
        component: LoginPage,
      },
      {
        id: 9,
        name: "registerPage",
        route: "/register",
        component: RegisterPage,
      },
      {
        id: 10,
        name: "ForgetPasswordPage",
        route: "/forgetPassword",
        component: ForgetPasswordPage,
      },
      {
        id: 11,
        name: "EnterResetCodePage",
        route: "/resetCode",
        component: EnterResetCodePage,
      },
      {
        id: 12,
        name: "ResetPasswordPage",
        route: "/resetPassword",
        component: ResetPasswordPage,
      },
      {
        id: 13,
        name: "Account",
        route: "/account",
        component: AccountPage,
        children: [
          { id: 91, route: "", component: ProfilePage },
          { id: 91, route: "gifts", component: GiftsPage }, 
          { id: 91, route: "wallet", component: WalletPage }, 
          { id: 91, route: "my-orders", component: MyOrdersPage }, 
          { id: 91, route: "reviews", component: Reviews }, 
          { id: 91, route: "delivery-locations", component: DeliveryLocations }, 
          { id: 91, route: "favorite-items", component: FavoriteItems }, 
          { id: 91, route: "settings-page", component: SettingsPage }, 
    
        ],
      },
]