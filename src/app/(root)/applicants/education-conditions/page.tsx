import { Title } from '@/components';
import { Circle, MapPin, Phone } from 'lucide-react';

export default function EducationConditionsPage() {
  return (
    <main className='flex flex-col gap-12 py-12'>
      <section className='w-full flex flex-col gap-12 max-w-screen-xl mx-auto px-3'>
        <Title label='Условия обучения' className='self-start' />
        <div className='flex gap-3'>
          <div className='w-full flex flex-col gap-4 shadow shadow-zinc-700 px-3 py-2 rounded'>
            <h2 className='text-xl text-center font-semibold text-blue-500'>Колледж:</h2>
            <ul className='flex flex-col gap-1 text-base font-medium'>
              <li className='flex items-center gap-2'>
                <Circle className='size-2 fill-blue-500 stroke-none' />
                <span className='text-zinc-700'>
                  Ведет образовательную деятельность <i className='text-blue-500'>на русском языке</i>
                </span>
              </li>
              <li className='flex items-center gap-2'>
                <Circle className='size-2 fill-blue-500 stroke-none' />
                <span className='text-zinc-700'>
                  Осуществляет обучение по <i className='text-blue-500'>очной</i> форме
                </span>
              </li>
              <li className='flex items-center gap-2'>
                <Circle className='size-2 fill-blue-500 stroke-none' />
                <span className='text-zinc-700'>
                  Реализует <i className='text-blue-500'>базовый уровень</i> образования
                </span>
              </li>
              <li className='flex items-center gap-2'>
                <Circle className='shrink-0 size-2 fill-blue-500 stroke-none' />
                <span className='text-zinc-700'>
                  Имеет <i className='text-blue-500'>лицензию</i> (
                  <a className='text-blue-700 transition-colors duration-300 hover:text-blue-900' href=''>
                    бессрочную
                  </a>
                  ) и <i className='text-blue-500'>государственную аккредитацию</i> образовательной деятельности, срок
                  действия до <i className='text-blue-500'>29 октября 2021 г.</i> (
                  <a className='text-blue-700 transition-colors duration-300 hover:text-blue-900' href=''>
                    свидетельство об аккредитации
                  </a>
                  )
                </span>
              </li>
            </ul>
          </div>
          <div className='w-full flex flex-col gap-4 shadow shadow-zinc-700 px-3 py-2 rounded'>
            <table className='h-full text-sm shadow shadow-zinc-700 rounded'>
              <caption className='text-xl text-center font-semibold text-blue-500 mb-3'>
                Информация о наличии мест в общежитии ГБПОУ РО «НМК»
              </caption>
              <thead>
                <tr>
                  <th className='text-base text-blue-700 font-medium py-1 px-2 shadow shadow-zinc-700 rounded'>
                    Адрес общежития
                  </th>
                  <th className='text-base text-blue-700 font-medium py-1 px-2 shadow shadow-zinc-700 rounded'>
                    Количество мест
                  </th>
                  <th className='text-base text-blue-700 font-medium py-1 px-2 shadow shadow-zinc-700 rounded'>
                    Размещение в комнатах
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='group w-ful h-full flex items-center gap-2 shadow shadow-zinc-700 rounded py-1 px-2'>
                    <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-600'>
                      <MapPin className='size-4' />
                    </div>
                    <a
                      className='text-zinc-700 transition-colors duration-300 group-hover:text-blue-500'
                      href='https://yandex.ru/maps/238/novocherkassk/house/mikhaylovskaya_ulitsa_166/YEkYdg9gTE0FQFptfXhwd3hqZg==/?ll=40.080582%2C47.416492&z=16'
                      target='_blank'
                    >
                      Ростовская обл., г. Новочеркасск, ул. Михайловская, д.166
                    </a>
                  </td>
                  <td rowSpan={2} className='shadow shadow-zinc-700 rounded text-center py-1 px-2'>
                    150
                  </td>
                  <td rowSpan={2} className='shadow shadow-zinc-700 rounded text-center py-1 px-2'>
                    2-3 человека
                  </td>
                </tr>
                <tr>
                  <td className='group w-full h-full flex items-center gap-2 shadow shadow-zinc-700 rounded py-1 px-2'>
                    <div className='text-white bg-blue-500 p-1.5 rounded-full transition-colors duration-300hover:bg-blue-600'>
                      <Phone className='size-4' />
                    </div>
                    <a
                      className='text-zinc-700 transition-colors duration-300 hover:text-blue-500'
                      href='tel:+78635223503'
                    >
                      +7 (8635) 22-35-03
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col gap-1 max-w-screen-xl mx-auto px-3'>
        <p className='text-zinc-700 leading-5 indent-6'>
          Учебный год в колледже начинается 1 сентября и продолжается 43 недели, включая: теоретическое обучение,
          практику, итоговую и промежуточную аттестацию и зимние каникулы.
        </p>
        <p className='text-zinc-700 leading-5 indent-6'>
          На большом перерыве <i className='text-blue-500'>для обеда</i> студенты пользуются услугами киосков горячего
          питания, расположенными на расстоянии не более 50м от здания колледжа, и столовой ГБПОУ РО «НГК».
        </p>
        <p className='text-zinc-700 leading-5 indent-6'>
          <i className='text-blue-500'>Медицинскую помощь</i> студенты получают в поликлиниках города.
        </p>
      </section>
    </main>
  );
}
