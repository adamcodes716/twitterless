import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';

const DashboardPage = () => (
  <div className="app">

        {/* Sidebar */}
        <Sidebar/>

        {/* Feed */}
        <Feed/>
        {/* Widgets */}
  </div>
);

export default DashboardPage;
