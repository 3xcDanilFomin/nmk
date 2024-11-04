import { Footer, Header } from '@/components';

export default function RootLayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
