import React from 'react';
import { Link } from 'react-router-dom';


export default function Banner() {
  return  (
    <section className='h-[32rem] bg-yellow-900 relative'>
      <div className='w-full bg-cover h-full bg-banner opacity-90'/>
      <div className='absolute w-full top-40 text-lg text-center text-gray-50 drop-shadow-2xl'>
        <p>오브젝트 (OBJECT)는 창작자의 관점을 통해 바라본 창작의 장면에 존재하는 모든 도구를 조명하고 있습니다. <br />
          창작하는 활동에 있어 화려한 기법보다는 자신의 관점을 어떻게 표현하고 또 어떤 이야기를 만들어가는지 그 과정에 집중합니다. <br />
          낯선 시선으로 바라본 다양한 관점과 새로운 감각을 일깨워주는 표현을 위한 장면과 도구(Scene & Tools)를 다룹니다.
        </p>
        <p className="mt-8">
          <Link to='/products' className="bg-gray-200 hover:text-white hover:bg-brand font-semibold text-gray-900 px-4 py-2 rounded-lg">
            View More
          </Link>
        </p>
      </div>
    </section>
  );
}


