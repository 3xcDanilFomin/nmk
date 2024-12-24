import { DocumentList, Title } from '@/components';

export default function RegulatoryDocumentsPage() {
  return (
    <main className='flex flex-col gap-12 py-12'>
      <div className='w-full max-w-screen-xl mx-auto px-3'>
        <Title label='Нормативная документация' className='self-start' />
      </div>
      <section className='w-full flex flex-col gap-12 max-w-screen-xl mx-auto px-3'>
        <DocumentList label='Документы' />
      </section>
    </main>
  );
}
