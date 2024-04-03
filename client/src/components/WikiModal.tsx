/* eslint-disable no-unused-expressions */
import React from 'react';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

interface WikiModalProps {
  className?: string;
}

const WikiModal = ({ className }: WikiModalProps) => {

  return (
    <div className="fixed w-full h-full bg-black bg-opacity-40 inset-0 px-6">
      <div className="absolute flex flex-col items-center gap-6 inset-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[480px] w-[calc(100vw-32px)] h-fit p-8 bg-white rounded-xl">
        <div className='text-grayscale-800 font-bold font-pretendard font-normal text-md'>
          작성을 그만두고 페이지를 이동할까요?
        </div>
        <div className='text-grayscale-400 font-pretendard font-normal text-md'>
          다른 페이지로 이동하면 현재 작성중인 내용이 저장되지 않아요. 그래도 작성을 그만두고 다른 페이지로 이동할까요?
        </div>
        <div className='flex gap-2'>
          <Button size='xs' style='secondary' text='계속 작성하기' />
          <Button size='xs' style='primary' text='페이지 이동하기' />
        </div>
      </div>
    </div>
  );
};

export default WikiModal;
