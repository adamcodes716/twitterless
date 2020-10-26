import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

const DashboardPage = () => (
  <div className="app">

        {/* Sidebar */}
        <Sidebar/>

        {/* Feed */}
        <Feed/>
        {/* Widgets */}
        <Widgets />
  </div>
);

export default DashboardPage;
