import { Title } from '@/components';
import { BookCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactsPage() {
  return (
    <main className='flex flex-col gap-12 py-12'>
      <section className='w-full flex flex-col gap-12 max-w-screen-xl mx-auto px-3'>
        <Title label='Контакты' className='self-start' />
        <div className='flex  gap-8'>
          <div className='flex flex-col gap-4'>
            <article>
              <h2 className='text-lg text-blue-500 font-medium'>Полное наименование образовательной организации</h2>
              <p className='text-zinc-700'>
                Государственное бюджетное профессиональное образовательное учреждение Ростовской области «Новочеркасский
                машиностроительный колледж»
              </p>
            </article>

            <article>
              <h2 className='text-lg text-blue-500 font-medium'>
                Сокращенное наименование образовательной организации
              </h2>
              <p className='text-zinc-700'>ГБПОУ РО «НМК»</p>
            </article>

            <article>
              <h2 className='text-lg text-blue-500 font-medium'>Дата создания образовательной организации</h2>
              <time className='text-zinc-700' dateTime='1959-04-23'>
                23 апреля 1959 года
              </time>
            </article>

            <article>
              <h2 className='text-lg text-blue-500 font-medium'>Учредитель образовательной организации</h2>
              <ul className='flex flex-col gap-2'>
                <li className='group w-fit flex items-center gap-2'>
                  <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                    <BookCheck className='size-4 stroke-current' />
                  </div>
                  <a
                    className='text-base text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                    href='https://minobr.donland.ru/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Министерство общего и профессионального образования Ростовской области'
                  >
                    Министерство общего и профессионального образования Ростовской области
                  </a>
                </li>
                <li className='group w-fit flex items-center gap-2'>
                  <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                    <MapPin className='size-4 stroke-current' />
                  </div>
                  <a
                    className='text-base text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                    href='https://yandex.ru/maps/39/rostov-na-donu/house/dolomanovskiy_pereulok_31/Z0AYcA5mTkQDQFptfX5zcHtnbA==/?ll=39.696714%2C47.221748&z=16.47'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Адрес учреждения: Ростов-на-Дону, пер. Доломановский, д. 31'
                  >
                    Ростов-на-Дону, пер. Доломановский, д. 31
                  </a>
                </li>
                <li className='group w-fit flex items-center gap-2'>
                  <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                    <Phone className='size-4 stroke-current' />
                  </div>
                  <a
                    className='text-base text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='tel:+78632403497'
                    title='Позвонить'
                  >
                    +7 (863) 240-34-97
                  </a>
                </li>
                <li className='group w-fit flex items-center gap-2'>
                  <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                    <Mail className='size-4 stroke-current' />
                  </div>
                  <a
                    className='text-base text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='mailto:minobr@donland.ru'
                    title='Написать на почту'
                  >
                    minobr@donland.ru
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <h2 className='text-lg text-blue-500 font-medium'>
                Информация о наименовании представительств и филиалов образовательной организации (при наличии) (в том
                числе, находящихся за пределами Российской Федерации)
              </h2>
              <p className='text-zinc-700'>
                У образовательной организации нет представительств и филиалов (в том числе находящихся за пределами
                Российской Федерации)
              </p>
            </article>

            <article>
              <h2 className='text-lg text-blue-500 font-medium'>
                Информация о месте нахождения образовательной организации
              </h2>
              <div className='group w-fit flex items-center gap-2'>
                <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                  <MapPin className='size-4 stroke-current' />
                </div>
                <a
                  className='text-base text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                  href='https://yandex.ru/maps/238/novocherkassk/house/troitskaya_ulitsa_39_166/YEkYdg9hTEMGQFptfXhwd3prZQ==/?ll=40.081561%2C47.416681&z=16.47'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Адрес учреждения: 346400, Ростовская область, Новочеркасск, ул. Троицкая, д. 39/166'
                >
                  346400, Ростовская область, Новочеркасск, ул. Троицкая, д. 39/166
                </a>
              </div>
            </article>

            <article>
              <h2 className='text-lg text-blue-500 font-medium'>
                Информация о режиме и графике работы образовательной организации
              </h2>
              <p className='text-zinc-700'>Понедельник - Пятница: 08:30 – 17:00</p>
              <p className='text-zinc-700'>Перерыв с 12:15 до 13:00</p>
              <p className='text-zinc-700'>Выходные дни - суббота, воскресенье</p>
              <p className='text-zinc-700'>
                Учебный процесс осуществляется с понедельника по субботу согласно утвержденному расписанию
              </p>
            </article>

            <article>
              <h2 className='text-lg text-blue-500 font-medium'>
                Информация о контактных телефонах образовательной организации
              </h2>
              <ul className='flex flex-col gap-2'>
                <li className='group w-fit flex items-center gap-2'>
                  <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                    <Phone className='size-4 stroke-current' />
                  </div>
                  <a
                    className='text-base text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                    href='tel:+78635223430'
                    title='Телефон/факс'
                  >
                    +7 (8635) 22-34-30
                  </a>
                </li>
                <li className='group w-fit flex items-center gap-2'>
                  <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                    <Phone className='size-4 stroke-current' />
                  </div>
                  <a
                    className='text-base text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                    href='tel:+79910870208'
                    title='Телефон приёмной комиссии'
                  >
                    +7 (991) 087-02-08
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <h2 className='text-lg text-blue-500 font-medium'>Информация об адресах электронной почты</h2>
              <div className='group w-fit flex items-center gap-2'>
                <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                  <Mail className='size-4 stroke-current' />
                </div>
                <a
                  className='text-base text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                  href='mailto:nmk@rostobr.ru'
                  title='Написать на почту'
                >
                  nmk@rostobr.ru
                </a>
              </div>
            </article>
          </div>

          <aside className='w-full h-fit shadow shadow-zinc-700 rounded overflow-hidden'>
            <iframe
              src='https://yandex.ru/map-widget/v1/?um=constructor%3A7898a008536ab67febcbdf70a3d1686b956a15fc17cbf740d25dd355717c7cce&amp;source=constructor'
              width='650'
              height='400'
              frameBorder='0'
              title='Карта'
            ></iframe>
          </aside>
        </div>
      </section>
    </main>
  );
}
