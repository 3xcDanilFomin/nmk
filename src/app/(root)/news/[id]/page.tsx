import { PublicationDate, Slider } from '@/components';
import { Hash } from 'lucide-react';

const hashtags: string[] = ['хештег1', 'хештег2', 'хештег3']

export default async function NewsDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  console.log(id);
  return (
    <main className='flex flex-col gap-24 py-12'>
      <div className='w-full max-w-screen-xl mx-auto px-3 flex gap-8'>
        <div className='w-2/4 h-[460] shrink-0'>
          <Slider />
        </div>
        <div className='flex flex-col gap-3'>
          <PublicationDate className='self-end' size='md'/>
          <h1 className='w-full text-center text-3xl font-medium text-blue-800 leading-none'>Название новости</h1>
          <p className='text-lg text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, necessitatibus, libero accusamus suscipit enim omnis, voluptatem optio ad fugiat esse quam dicta architecto temporibus! In incidunt voluptate autem nesciunt corrupti.
          Nesciunt quibusdam vero deleniti optio, sequi tempore minima autem dolorem et sapiente, mollitia quod error iusto voluptatibus molestiae voluptatum aspernatur ad ipsa ab nihil maxime corporis animi. Eius, ipsa nostrum?
          Nisi, doloribus! Commodi perspiciatis voluptatem dolor laudantium reiciendis laboriosam ipsa, expedita reprehenderit culpa ratione maxime ex incidunt! Exercitationem, quam quidem. Nam nisi, eos repellendus excepturi natus vitae nostrum et quae.
          </p>
          <ul className='flex items-center gap-2'>
            {
              hashtags.map(hashtag => (
                <li key={hashtag} className='flex items-center'>
                  <Hash className='size-4 stroke-blue-800' />
                  <span className='text-lg text-blue-600'>{hashtag}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </main>
  );
}
