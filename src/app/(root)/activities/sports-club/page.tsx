import { DocumentList, Title } from '@/components';

export default function SportsClubPage() {
  return (
    <main className='flex flex-col gap-12 py-12'>
      <div className='w-full max-w-screen-xl mx-auto px-3'>
        <Title label='Студенческий спортивный клуб «Машиностроитель»' className='self-start' />
      </div>
      <section className='w-full flex flex-col gap-2 max-w-screen-xl mx-auto px-3'>
        <p className='text-zinc-700 indent-6'>
          Основная цель клуба - воспитание у студентов устойчивого интереса к систематическим занятиям физической
          культуры, к здоровому образу жизни; укрепление и сохранение здоровья при помощи регулярных занятий. Одним из
          главных результатов деятельности спортивного клуба является рост количества студентов, которые желают
          следовать пути здорового образа жизни, заниматься физической культурой и спортом.
        </p>
        <p className='text-zinc-700 indent-6'>
          Члены клуба постоянно участвуют в спортивных соревнованиях колледжа, города и области.
        </p>
        <DocumentList label='Документы' />
      </section>
    </main>
  );
}
