import Image from 'next/image';
import { Fragment } from 'react';

const logos = ['/logo-1.png', '/logo-2.png', '/logo-3.svg', '/logo-4.png', '/logo-5.png', '/logo-6.svg'];

export const Partners: React.FC = () => {
  return (
    <section className='flex flex-col gap-12'>
      <div className='overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <ul className='flex flex-none gap-32 pr-32 py-3 animate-marquee'>
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {logos.map((logo) => (
                <li className='inline-flex items-center' key={logo}>
                  <a href='#!'>
                    <Image
                      className='w-full h-36'
                      src={logo}
                      alt={`Partner ${logo}`}
                      width={200}
                      height={144}
                    />
                  </a>
                </li>
              ))}
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};
