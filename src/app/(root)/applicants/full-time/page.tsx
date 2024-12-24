import { Specialties, Title } from '@/components';

export default function FullTimePage() {
  return (
    <main className='flex flex-col gap-12 py-12'>
      <section className='w-full flex flex-col gap-12 max-w-screen-xl mx-auto px-3'>
        <Title label='Дневное отделение' className='self-start' />
        <article className='flex flex-col gap-6 items-center text-xl font-semibold text-center text-zinc-700'>
          <p>
            В колледже реализуются следующие образовательные программы
            <br />
            <i>
              по <u>очной</u> форме обучения на <u>бюджетной</u> основе (бесплатно) на базе 9 и 11 классов:
            </i>
          </p>
          <div className='flex flex-col gap-1 items-center text-lg'>
            <a
              className='text-blue-500 transition-colors duration-300 hover:text-blue-800'
              href='https://www.gosuslugi.ru/'
              target='_blank'
            >
              Подать документы через Портал государственых услуг
            </a>
            <p>
              в приемную комиссию
              <br />
              (с Вами свяжется секретарь приемной комиссии)
            </p>
          </div>
        </article>
      </section>
      <Specialties />
    </main>
  );
}
