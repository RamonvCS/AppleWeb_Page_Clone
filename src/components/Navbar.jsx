import React from 'react';
// Importing navLists from '../constants';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full'>
        <img src="/assets/images/apple.svg" alt="Apple " width={14} height={18} />
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {/* Mapping over hardcoded values */}
          {['Store', 'Mac', 'iPhone', 'Support'].map((nav) => (
            <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
              {nav}
            </div>
          ))}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src="/assets/images/search.svg" alt="Search" width={18} height={18} />
          <img src="/assets/images/bag.svg" alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
