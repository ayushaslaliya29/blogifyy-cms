import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Public pages
import HomePage from './pages/public/HomePage';
import BlogPage from './pages/public/BlogPage';
import CategoryPage from './pages/public/CategoryPage';
import PostDetailPage from './pages/public/PostDetailPage';
import SearchPage from './pages/public/SearchPage';
import ContactPage from './pages/public/ContactPage';
import StaticPage from './pages/public/StaticPage';

// Admin pages
import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import PostsPage from './pages/admin/PostsPage';
import CreateEditPostPage from './pages/admin/CreateEditPostPage';
import CategoriesPage from './pages/admin/CategoriesPage';
import PagesPage from './pages/admin/PagesPage';
import CreateEditPagePage from './pages/admin/CreateEditPagePage';
import AdsPage from './pages/admin/AdsPage';
import SubscribersPage from './pages/admin/SubscribersPage';
import MessagesPage from './pages/admin/MessagesPage';
import SettingsPage from './pages/admin/SettingsPage';

// Layouts
import AdminLayout from './components/admin/AdminLayout';

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog" element={<Navigate to="/blogs" replace />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/post/:slug" element={<PostDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Admin Login (unprotected) */}
        <Route path="/admin/login" element={<LoginPage />} />

        {/* Admin Routes (protected via AdminLayout wrapper) */}
        <Route path="/admin" element={<AdminLayout title="Dashboard"><DashboardPage /></AdminLayout>} />
        <Route path="/admin/posts" element={<AdminLayout title="All Posts"><PostsPage /></AdminLayout>} />
        <Route path="/admin/posts/new" element={<AdminLayout title="New Post"><CreateEditPostPage /></AdminLayout>} />
        <Route path="/admin/posts/:id/edit" element={<AdminLayout title="Edit Post"><CreateEditPostPage /></AdminLayout>} />
        <Route path="/admin/categories" element={<AdminLayout title="Categories"><CategoriesPage /></AdminLayout>} />
        <Route path="/admin/pages" element={<AdminLayout title="Pages"><PagesPage /></AdminLayout>} />
        <Route path="/admin/pages/new" element={<AdminLayout title="New Page"><CreateEditPagePage /></AdminLayout>} />
        <Route path="/admin/pages/:id/edit" element={<AdminLayout title="Edit Page"><CreateEditPagePage /></AdminLayout>} />
        <Route path="/admin/ads" element={<AdminLayout title="Ads Manager"><AdsPage /></AdminLayout>} />
        <Route path="/admin/subscribers" element={<AdminLayout title="Subscribers"><SubscribersPage /></AdminLayout>} />
        <Route path="/admin/messages" element={<AdminLayout title="Messages"><MessagesPage /></AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout title="Settings"><SettingsPage /></AdminLayout>} />

        {/* Dynamic Static Pages catch-all */}
        <Route path="/:slug" element={<StaticPage />} />

        {/* Catch-all Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}