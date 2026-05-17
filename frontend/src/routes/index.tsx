import { Routes, Route, Navigate } from 'react-router-dom'
import UserLayout from '@/layouts/UserLayout'
import AdminLayout from '@/layouts/AdminLayout'
import Home from '@/pages/home/Home'
import Shop from '@/pages/shop/Shop'
import ProductDetail from '@/pages/product-detail/ProductDetail'
import Cart from '@/pages/cart/Cart'
import Checkout from '@/pages/checkout/Checkout'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import CategoryPage from '@/pages/category/CategoryPage'
import About from '@/pages/about/About'
import Contact from '@/pages/contact/Contact'
import ShippingInfo from '@/pages/shipping-info/ShippingInfo'
import Dashboard from '@/pages/admin/Dashboard'
import ProductList from '@/pages/admin/products/ProductList'
import ProductForm from '@/pages/admin/products/ProductForm'
import OrderList from '@/pages/admin/orders/OrderList'
import OrderDetail from '@/pages/admin/orders/OrderDetail'
import CategoryList from '@/pages/admin/categories/CategoryList'
import CategoryForm from '@/pages/admin/categories/CategoryForm'
import UserList from '@/pages/admin/users/UserList'
import AIConfig from '@/pages/admin/chat/AIConfig'

export default function AppRoutes() {
  return (
    <Routes>
      {/* User routes */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-feature" element={<CategoryPage category="new-feature" />} />
        <Route path="/rackets" element={<CategoryPage category="rackets" />} />
        <Route path="/shoes" element={<CategoryPage category="shoes" />} />
        <Route path="/shirts" element={<CategoryPage category="shirts" />} />
        <Route path="/shorts" element={<CategoryPage category="shorts" />} />
        <Route path="/skirts" element={<CategoryPage category="skirts" />} />
        <Route path="/bags" element={<CategoryPage category="bags" />} />
        <Route path="/backpacks" element={<CategoryPage category="backpacks" />} />
        <Route path="/accessories" element={<CategoryPage category="accessories" />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping-info" element={<ShippingInfo />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/new" element={<ProductForm />} />
        <Route path="products/:id/edit" element={<ProductForm />} />
        <Route path="orders" element={<OrderList />} />
        <Route path="orders/:id" element={<OrderDetail />} />
        <Route path="categories" element={<CategoryList />} />
        <Route path="categories/new" element={<CategoryForm />} />
        <Route path="categories/:id/edit" element={<CategoryForm />} />
        <Route path="users" element={<UserList />} />
        <Route path="chat" element={<AIConfig />} />
      </Route>
    </Routes>
  )
}
