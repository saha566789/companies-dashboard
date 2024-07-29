import React from 'react';
import Header from '@/components/shared/Header';
import Rightside from '@/components/shared/Rightside';
import Leftside from '@/components/shared/Leftside';
import History from '@/components/shared/History';
const page = () => {
  return (
    <div className='p-4 bg-blue-100'>
     <Header />
     <div className='flex gap-3 '>
     <Rightside />
     <Leftside />
     </div>
     <History />
    </div>
  );
};

export default page;