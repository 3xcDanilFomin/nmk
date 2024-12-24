import Link from 'next/link';
import { AtSign, Circle, MapPin, Phone } from 'lucide-react';

import { Title } from '@/components';

export default function AdmissionsPage() {
  return (
    <main className='flex flex-col gap-12 py-12'>
      <section className='w-full flex flex-col gap-12 max-w-screen-xl mx-auto px-3'>
        <Title label='Приемная комиссия' className='self-start' />
        <div className='flex gap-3'>
          <div className='w-full flex flex-col gap-4 shadow shadow-zinc-700 px-3 py-2 rounded'>
            <h2 className='text-xl text-center font-semibold text-blue-500'>
              Есть несколько способов для подачи документов на поступление в колледж
            </h2>
            <ul className='flex flex-col gap-1 text-base font-medium'>
              <li className='flex items-center gap-2'>
                <Circle className='size-2 fill-blue-500 stroke-none' />
                <span className='text-zinc-700'>Приехать в колледж и подать документы лично</span>
              </li>
              <li className='flex items-center gap-2'>
                <Circle className='size-2 fill-blue-500 stroke-none' />
                <a
                  className='text-blue-500 transition-colors duration-300 hover:text-blue-700'
                  href='https://www.gosuslugi.ru/'
                  target='_blank'
                >
                  Подать документы через Портал государственых услуг
                </a>
              </li>
              <li className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                  <Circle className='size-2 fill-blue-500 stroke-none' />
                  <span className='text-zinc-700'>Скачать следующие формы документов:</span>
                </div>
                <ol className='indent-3'>
                  <li className='text-zinc-700 transition-colors duration-300 hover:text-blue-700'>
                    <span className='text-current'>1) </span>
                    <a className='text-blue-500 transition-colors duration-300 hover:text-blue-700' href=''>
                      Заявление на поступление
                    </a>
                  </li>
                  <li className='text-zinc-700 transition-colors duration-300 hover:text-blue-700'>
                    <span className='text-current'>2) </span>
                    <a className='text-blue-500 transition-colors duration-300 hover:text-blue-700' href=''>
                      Форма согласия на обработку персональных данных для родителей
                    </a>
                  </li>
                  <li className='text-zinc-700 transition-colors duration-300 hover:text-blue-700'>
                    <span className='text-current'>3) </span>
                    <a className='text-blue-500 transition-colors duration-300 hover:text-blue-700' href=''>
                      Форма согласия на обработку персональных данных совершеннолетним
                    </a>
                  </li>
                </ol>
                <p className='text-zinc-700'>
                  заполнить и отправить их на электронную почту:{' '}
                  <a
                    className='text-blue-500 transition-colors duration-300 hover:text-blue-700'
                    href='mailto:priemnmk35@ya.ru'
                  >
                    priemnmk35@ya.ru
                  </a>{' '}
                  так же прикрепив к письму{' '}
                  <i className='text-blue-600'>свое фото и сканированные копии аттестата, паспорта и СНИЛС</i>
                </p>
              </li>
            </ul>
          </div>
          <div className='w-full flex flex-col gap-4 justify-center shadow shadow-zinc-700 px-3 py-2 rounded'>
            <h2 className='text-xl text-center font-semibold text-blue-500'>Контактные данные приёмной комиссии</h2>
            <ul className='flex flex-col gap-2'>
              <li className='group w-fit flex items-center gap-2'>
                <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                  <svg className='size-4 fill-current' viewBox='0 0 192 192' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z' />
                  </svg>
                </div>
                <a
                  className='text-base font-medium text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                  href='https://t.me/eduncollege'
                  target='_blank'
                >
                  t.me/eduncollege
                </a>
              </li>
              <li className='group w-fit flex items-center gap-2'>
                <div className='text-white bg-blue-500 p-1.5 pr-[5px] rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                  <svg
                    className='size-4 fill-current'
                    viewBox='0 0 90 90'
                    xmlSpace='preserve'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <path d='M90,43.8c0,24.2-19.8,43.8-44.2,43.8c-7.7,0-15-2-21.4-5.5L0,90l8-23.5c-4-6.6-6.3-14.4-6.3-22.6     C1.6,19.6,21.4,0,45.8,0C70.2,0,90,19.6,90,43.8z M45.8,7C25.3,7,8.7,23.5,8.7,43.8c0,8.1,2.6,15.5,7.1,21.6l-4.6,13.7l14.3-4.5     c5.9,3.9,12.9,6.1,20.4,6.1C66.3,80.7,83,64.2,83,43.8S66.3,7,45.8,7z M68.1,53.9c-0.3-0.4-1-0.7-2.1-1.3     c-1.1-0.5-6.4-3.1-7.4-3.5c-1-0.4-1.7-0.5-2.4,0.5c-0.7,1.1-2.8,3.5-3.4,4.2c-0.6,0.7-1.3,0.8-2.3,0.3c-1.1-0.5-4.6-1.7-8.7-5.3     c-3.2-2.8-5.4-6.4-6-7.4c-0.6-1.1-0.1-1.7,0.5-2.2c0.5-0.5,1.1-1.3,1.6-1.9c0.5-0.6,0.7-1.1,1.1-1.8c0.4-0.7,0.2-1.3-0.1-1.9     c-0.3-0.5-2.4-5.8-3.3-8c-0.9-2.1-1.8-1.8-2.4-1.8c-0.6,0-1.4-0.1-2.1-0.1s-1.9,0.3-2.9,1.3c-1,1.1-3.8,3.7-3.8,9 c0,5.3,3.9,10.4,4.4,11.1c0.5,0.7,7.5,11.9,18.5,16.2c11,4.3,11,2.9,13,2.7c2-0.2,6.4-2.6,7.3-5.1C68.4,56.5,68.4,54.4,68.1,53.9z' />
                  </svg>
                </div>
                <a
                  className='text-base font-medium text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                  href='https://wa.me/+79910870208'
                  target='_blank'
                >
                  +7 (991) 087-02-08
                </a>
              </li>
              <li className='group w-fit flex items-center gap-2'>
                <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                  <AtSign className='size-4' />
                </div>
                <a
                  className='text-base font-medium text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                  href='mailto:priemnmk35@ya.ru'
                >
                  priemnmk35@ya.ru
                </a>
              </li>
              <li className='w-fit flex items-center gap-2'>
                <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300hover:bg-blue-600'>
                  <Phone className='size-4' />
                </div>
                <a
                  className='text-base font-medium text-zinc-700 transition-colors duration-300 hover:text-blue-500'
                  href='tel:+79910870208'
                >
                  +7 (991) 087-02-08,
                </a>
                <a
                  className='text-base font-medium text-zinc-700 transition-colors duration-300 hover:text-blue-500'
                  href='tel:+78635228150'
                >
                  +7 (8635) 228-150,
                </a>
                <a
                  className='text-base font-medium text-zinc-700 transition-colors duration-300 hover:text-blue-500'
                  href='tel:+78635222555'
                >
                  +7 (8635) 222-555
                </a>
              </li>
              <li className='group w-fit flex items-center gap-2'>
                <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                  <MapPin className='size-4' />
                </div>
                <a
                  className='text-base font-medium text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                  href='https://yandex.ru/maps/238/novocherkassk/house/mikhaylovskaya_ulitsa_166/YEkYdg9gTE0FQFptfXhwd3hqZg==/?ll=40.080582%2C47.416492&z=16'
                  target='_blank'
                >
                  346400, Ростовская обл., г. Новочеркасск, ул. Михайловская, д.166
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='w-full max-w-screen-xl mx-auto px-3'>
        <table className='text-zinc-700 font-medium shadow shadow-zinc-700 rounded'>
          <caption className='text-2xl text-blue-500 mb-3 text-nowrap'>График работы приемной комиссии</caption>
          <thead>
            <tr>
              <th className='p-1.5 text-blue-600 text-center shadow shadow-zinc-700'>День</th>
              <th className='p-1.5 text-blue-600 text-center shadow shadow-zinc-700'>Время</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-2 text-center shadow shadow-zinc-700'>Понедельник</td>
              <td className='p-2 text-center shadow shadow-zinc-700' rowSpan={5}>
                с 09:00 до 16:00
              </td>
            </tr>
            <tr>
              <td className='p-2 text-center shadow shadow-zinc-700'>Вторник</td>
            </tr>
            <tr>
              <td className='p-2 text-center shadow shadow-zinc-700'>Среда</td>
            </tr>
            <tr>
              <td className='p-2 text-center shadow shadow-zinc-700'>Четверг</td>
            </tr>
            <tr>
              <td className='p-2 text-center shadow shadow-zinc-700'>Пятница</td>
            </tr>
            <tr>
              <td className='p-2 text-center shadow shadow-zinc-700'>Суббота</td>
              <td className='p-2 text-center shadow shadow-zinc-700'>с 09:00 до 12:00</td>
            </tr>
            <tr>
              <td className='p-2 text-center shadow shadow-zinc-700'>Воскресенье</td>
              <td className='p-2 text-center shadow shadow-zinc-700'>Выходной</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='flex flex-col gap-6 w-full max-w-screen-xl mx-auto px-3'>
        <h2 className='text-blue-600 text-xl font-medium text-center'>
          Сведения о ходе приема на 2024-2025 учебный год на 16.08.2024 <br />{' '}
          <span className='underline'>очное отделение</span>
        </h2>
        <table className='w-full text-zinc-700 font-medium shadow shadow-zinc-700 rounded'>
          <thead>
            <tr>
              <th className='p-1.5 text-blue-700 text-center shadow shadow-zinc-700' rowSpan={2}>
                Специальность
              </th>
              <th className='p-1.5 text-blue-700 text-center shadow shadow-zinc-700' rowSpan={2}>
                Уровень образования
              </th>
              <th className='p-1.5 text-blue-700 text-center shadow shadow-zinc-700' rowSpan={2}>
                Условия обучения
              </th>
              <th className='p-1.5 text-blue-700 text-center shadow shadow-zinc-700' rowSpan={2}>
                Уровень образовательной программы
              </th>
              <th className='p-1.5 text-blue-700 text-center shadow shadow-zinc-700' colSpan={2}>
                Приём
              </th>
              <th className='p-1.5 text-blue-700 text-center shadow shadow-zinc-700' rowSpan={2}>
                Средний балл*
              </th>
            </tr>
            <tr>
              <th className='p-1.5 text-blue-700 text-center shadow shadow-zinc-700'>План набора</th>
              <th className='p-1.5 text-blue-700 text-center shadow shadow-zinc-700'>Кол-во аттестатов</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-2 shadow shadow-zinc-700'>
                <Link
                  href='/specialties/1'
                  className='text-blue-500 transition-colors duration-300 hover:text-blue-800'
                >
                  09.02.06 Сетевое и системное администрирование
                </Link>
              </td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>9 классов</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>бюджет</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>базовый</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>25</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>25</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>4,1</td>
            </tr>
            <tr>
              <td className='p-2 shadow shadow-zinc-700'>
                <Link
                  href='/specialties/1'
                  className='text-blue-500 transition-colors duration-300 hover:text-blue-800'
                >
                  13.02.13 Эксплуатация и обслуживание электрического и электромеханического оборудования (по отраслям)
                </Link>
              </td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>9 классов</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>бюджет</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>базовый</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>50</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>48</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>3,8</td>
            </tr>
            <tr>
              <td className='p-2 shadow shadow-zinc-700'>
                <Link
                  href='/specialties/1'
                  className='text-blue-500 transition-colors duration-300 hover:text-blue-800'
                >
                  15.02.09 Аддитивные технологи
                </Link>
              </td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>9 классов</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>бюджет</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>базовый</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>50</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>49</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>3,9</td>
            </tr>
            <tr>
              <td className='p-2 shadow shadow-zinc-700'>
                <Link
                  href='/specialties/1'
                  className='text-blue-500 transition-colors duration-300 hover:text-blue-800'
                >
                  38.02.08 Торговое дело
                </Link>
              </td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>9 классов</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>бюджет</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>базовый</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>50</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>41</td>
              <td className='p-2 text-zinc-700 text-center shadow shadow-zinc-700 font-normal'>3,75</td>
            </tr>
          </tbody>
        </table>
        <div className='flex flex-col gap-0.5 text-zinc-700'>
          <p className='text-base leading-6 font-medium'>
            <span className='text-blue-500'>* </span>средний балл аттестата по специальности по всем поданным
            заявлениям.{' '}
          </p>
          <p className='indent-6 leading-6'>
            Минимальный балл будет указан для специальности в тот момент, когда количество поданных абитуриентами
            заявлений превысит количество мест по специальности. Далее балл будет меняться в зависимости от результатов
            поданных аттестатов на каждую из специальностей.
          </p>
          <p className='indent-6 leading-6'>
            Приказ о зачислении и вся дополнительная информация для зачисленных абитуриентов будет опубликована на
            сайте.
          </p>
        </div>
      </section>
    </main>
  );
}
