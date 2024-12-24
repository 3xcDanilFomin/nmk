import { DocumentList, Title } from '@/components';

export default function EmploymentSupportPage() {
  return (
    <main className='flex flex-col gap-12 py-12'>
      <div className='w-full max-w-screen-xl mx-auto px-3'>
        <Title label='Содействие трудоустройству' className='self-start' />
      </div>
      <section className='w-full flex flex-col gap-12 max-w-screen-xl mx-auto px-3'>
        <h2 className='text-2xl text-blue-500'>Договора с ВУЗами</h2>
        <DocumentList label='Договора' />
      </section>
    </main>
  );
}
