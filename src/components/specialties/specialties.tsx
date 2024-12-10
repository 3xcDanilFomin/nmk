import Link from 'next/link';
import { CircuitBoard, Cpu, CreditCard, MoveRight, ShieldCheck } from 'lucide-react';

import { Button } from '@/components';

export const Specialties: React.FC = () => {
  return (
    <section className='bg-blue-100 bg-opacity-60'>
      <div className='max-w-screen-xl mx-auto flex flex-col gap-6 py-12 px-3'>
        <header className='flex items-center justify-between gap-7'>
          <div className='flex items-center gap-2'>
            <span className='w-28 h-1 rounded bg-blue-600' />
            <h2 className='text-4xl font-semibold text-blue-600 text-nowrap leading-3'>Ваша будующая специальность</h2>
          </div>
          <p className='w-2/5 text-zinc-700 text-sm font-light leading-4'>
            Сделайте правильный выбор сегодня, и пусть ваша мечта о ярком будущем станет реальностью!
          </p>
        </header>
        <ul className='grid grid-cols-3 gap-6'>
          <li className='bg-white py-5 px-4 rounded-lg  shadow-[0_0_12px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-95'>
            <article className='h-full flex flex-col gap-4 justify-between'>
              <div className='flex items-center gap-3'>
                <div className='p-0.5 bg-blue-300 rounded'>
                  <ShieldCheck className='size-8 stroke-white stroke-[1.5px]' />
                </div>
                <h3 className='text-blue-800 font-bold leading-3'>Сетевое и системное администрирование</h3>
              </div>
              <p className='text-sm text-zinc-600 font-normal line-clamp-5 transition-colors'>
                Специалист по сетевому и системному администрированию обеспечивает бесперебойную работу компьютерной
                техники, локальной сети и программного обеспечения в компаниях. Он несет ответственность за работу
                компьютеров, а также за их безопасность. В целом спектр обязанностей этого специалиста достаточно широк
                – от закупки компьютерной техники до создания сайтов. Также важной обязанностью техника является защита
                компьютеров от злоумышленников.
              </p>
              <Link href='/' className='self-end'>
                <Button className='group text-blue-900' size='sm' variant='ghost'>
                  <span className='text-sm'>Подробнее</span>
                  <MoveRight className='size-5 stroke-[1.5px] stroke-current transition-transform duration-300 group-hover:translate-x-1' />
                </Button>
              </Link>
            </article>
          </li>
          <li className='bg-white py-5 px-4 rounded-lg  shadow-[0_0_12px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-95'>
            <article className='h-full flex flex-col gap-4 justify-between'>
              <div className='flex items-center gap-3'>
                <div className='p-0.5 bg-blue-300 rounded'>
                  <Cpu className='size-8 stroke-white stroke-[1.5px]' />
                </div>
                <h3 className='text-blue-800 font-bold leading-[16px]'>Аддитивные технологии</h3>
              </div>
              <p className='text-sm text-zinc-600 font-normal line-clamp-5'>
                Это послойное наращивание и синтез объекта с помощью компьютерных 3d технологий. Изобретение принадлежит
                Чарльзу Халлу, в 1986 г. сконструировавшему первый стереолитографический трехмерный принтер. Что значит
                аддитивный процесс послойного создания модели и как он происходит? В современной промышленности это
                несколько разных процессов, в результате которых моделируется 3d объект.
              </p>
              <Link href='/' className='self-end'>
                <Button className='group' size='sm' variant='ghost'>
                  <span className='text-sm'>Подробнее</span>
                  <MoveRight className='size-5 stroke-[1.5px] stroke-current transition-transform duration-300 group-hover:translate-x-1' />
                </Button>
              </Link>
            </article>
          </li>
          <li className='bg-white py-5 px-4 rounded-lg  shadow-[0_0_12px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-95'>
            <article className='h-full flex flex-col gap-4 justify-between'>
              <div className='flex items-center gap-3'>
                <div className='p-0.5 bg-blue-300 rounded'>
                  <CreditCard className='size-8 stroke-white stroke-[1.5px]' />
                </div>
                <h3 className='text-blue-800 font-bold leading-[16px]'>Торговое дело</h3>
              </div>
              <p className='text-sm text-zinc-600 font-normal line-clamp-5'>
                Направление &laquo;Торговое дело&raquo; готовит специалистов, обладающих знаниями и навыками в области
                организации и управления торговой деятельностью. Выпускники смогут эффективно работать в сфере финансов
                и экономики, а также в сервисе и оказании услуг населению, включая торговлю, общественное питание и
                услуги гостеприимства.
              </p>
              <Link href='/' className='self-end'>
                <Button className='group' size='sm' variant='ghost'>
                  <span className='text-sm'>Подробнее</span>
                  <MoveRight className='size-5 stroke-[1.5px] stroke-current transition-transform duration-300 group-hover:translate-x-1' />
                </Button>
              </Link>
            </article>
          </li>
          <li className='col-span-3 bg-white py-5 px-4 rounded-lg  shadow-[0_0_12px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-95'>
            <article className='h-full flex flex-col gap-4 justify-between'>
              <div className='flex items-center gap-3'>
                <div className='p-0.5 bg-blue-300 rounded'>
                  <CircuitBoard className='size-8 stroke-white stroke-[1.5px]' />
                </div>
                <h3 className='text-blue-800 font-bold leading-[16px]'>
                  Эксплуатация и обслуживание электрического и электромеханического оборудования (по отраслям)
                </h3>
              </div>
              <p className='text-sm text-zinc-600 font-normal line-clamp-5'>
                Это одна из ведущих и перспективных специальностей. Профессиональная деятельность в качестве техника по
                монтажу, наладке, настройке, ремонту, техническому обслуживанию эксплуатации приборов и инструментов для
                измерения, контроля, испытания и регулирования технологических процессов и производств.
              </p>
              <Link href='/' className='self-end'>
                <Button className='group' size='sm' variant='ghost'>
                  <span className='text-sm'>Подробнее</span>
                  <MoveRight className='size-5 stroke-[1.5px] stroke-current transition-transform duration-300 group-hover:translate-x-1' />
                </Button>
              </Link>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};
