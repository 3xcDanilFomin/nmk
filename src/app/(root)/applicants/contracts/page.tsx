import { DocumentList, Title } from '@/components';

export default function ContractsPage() {
  return (
    <main className='flex flex-col gap-12 py-12'>
      <div className='w-full max-w-screen-xl mx-auto px-3'>
        <Title label='Договора с ВУЗами и социальные партнеры' className='self-start' />
      </div>
      <section className='w-full flex flex-col gap-12 max-w-screen-xl mx-auto px-3'>
        <h2 className='text-2xl text-blue-500'>
          Колледж заключил договора с ВУЗАами на продолжение обучения выпускников в ВПО
        </h2>
        <DocumentList label='Договора' />
      </section>
    </main>
  );
}
