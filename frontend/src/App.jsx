import React from 'react';
import AppRouter from './router/AppRouter.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-4 flex-1 overflow-auto">
          <AppRouter />
        </main>
      </div>
    </div>
  );
}

export default App;
