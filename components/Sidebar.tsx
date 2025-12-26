
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { label: 'Statistik Pemain', path: '/players', icon: 'query_stats' },
    { label: 'Perbandingan Pemain', path: '/compare', icon: 'compare_arrows' },
    { label: 'Laporan Scout', path: '/scout-report', icon: 'description' },
    { label: 'Pemain & Calon', path: '/potential', icon: 'group_add' },
    { label: 'Assign Pemain', path: '/assign', icon: 'assignment_ind' },
  ];

  return (
    <aside className="w-72 bg-white flex flex-col flex-shrink-0 h-screen overflow-y-auto border-r border-slate-200">
      <div className="p-8">
        <div className="flex items-center space-x-2 mb-8 px-2">
          <div className="w-8 h-8 bg-primary rounded-lg"></div>
          <span className="font-extrabold text-xl tracking-tighter text-slate-800 uppercase">TEAM SPIRITZ<span className="text-primary">.</span></span>
        </div>
        
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center space-x-3 shadow-sm mb-8">
          <div className="h-12 w-12 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-500 font-bold shrink-0 overflow-hidden shadow-sm">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Justin" alt="avatar" />
          </div>
          <div className="overflow-hidden">
            <h3 className="text-sm font-bold text-slate-800 truncate">Justin Laksana</h3>
            <p className="text-xs font-medium text-slate-500">Head Coach</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`
              }
            >
              <span className="material-icons-outlined text-xl mr-3 opacity-70 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      
      <div className="p-8 mt-auto border-t border-slate-100 flex items-center justify-between">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Team Spiritz v1.0</div>
        <span className="material-icons-outlined text-slate-300 text-sm">settings</span>
      </div>
    </aside>
  );
};

export default Sidebar;
