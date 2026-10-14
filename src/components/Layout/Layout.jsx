// En /components/Layout/Layout.jsx
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

// Todo lo que pongamos dentro de <Layout> en App.jsx será el "children".
export function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>
               <Outlet />
            </main>
            <Footer />
        </div>);
}