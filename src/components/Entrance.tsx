import Image from 'next/image';

const Entrance = () => {
  return (
    <div className='h-dvh'>
      <div className='relative h-3/4 w-full'>
        <Image
          src='/IMG_5374.jpg'
          fill
          alt='entrance image'
          className='object-cover object-top'
        />
        <div className='absolute inset-x-0 bottom-[-1px] h-1/4 bg-gradient-to-t from-white to-transparent'></div>
      </div>
      <div className='absolute bottom-0 z-10 flex h-[30%] w-full flex-col items-center justify-between pb-12'>
        <span className='flex flex-col gap-4 text-center text-4xl'>
          <span className='animate-text-fade-in flex items-center gap-4'>
            <span className='font-semibold'>유민상</span>
            <span className='text-2xl'>&</span>
            <span className='font-semibold'>조정원</span>
          </span>
          <span
            className='animate-text-fade-in text-2xl opacity-0'
            style={{ animationDelay: '1s' }}
          >
            결혼합니다
          </span>
        </span>
        <span
          className='animate-text-fade-in text-center opacity-0'
          style={{ animationDelay: '1.8s' }}
        >
          2025년 4월 19일 토요일 오후 2시 <br />
          더채플앳논현 5F 라메르홀
        </span>
      </div>
    </div>
  );
};

export default Entrance;
