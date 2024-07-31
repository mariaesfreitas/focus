import { Header } from '@/components';
import logo from '../../public/images/focus-logo.png';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <img src={logo.src} alt="Logo Focus Consultoria" className="mt-4" />
    </main>
  );
}
