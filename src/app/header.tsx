import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full text-center mb-6">
      <div className="custom-heading flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://momo.mtn.com/wp-content/uploads/sites/15/2022/11/MoMo-Logo-Clear-Space-RGB-Stacked-01-1.png?resize=82%2C82"
          />
          <div>
            <p className="font-bold text-lg">MoMo</p>
            <p className="text-sm">Payment Service Bank</p>
          </div>
        </div>
        <div className="mailimg">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJApF8rvLKSHZ2YuJ2bn7bdMIovFRVbSDuTRZ1-ghEqmR5IeY"/></div>
      </div>
    </header>
  );
}

export default Header;
