import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../../shared/styles/style.css';

const MainLayout = () => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <main className="flex-grow">
          <Outlet />
        </main>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default MainLayout;