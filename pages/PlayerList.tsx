
import React from 'react';
import { Link } from 'react-router-dom';
import { PLAYERS } from '../constants';

const PlayerList: React.FC = () => {
  return (
    <div className="p-8 md:p-12 max-w-7xl mx-auto">
      {/* Figma Banner Header */}
      <div className="w-full max-w-5xl mx-auto mb-16">
        <div className="bg-slate-200 rounded-2xl py-8 text-center shadow-sm border border-slate-300/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute left-10 bottom-0 w-32 h-2 bg-slate-400 rounded-full"></div>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-700 tracking-[0.15em] uppercase relative z-10">Statistik Pemain</h1>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PLAYERS.map((player) => (
          <div key={player.id} className="bg-white border border-slate-100 rounded-[1.5rem] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-300 group">
            {/* Player Avatar */}
            <div className="w-28 h-32 bg-primary flex-shrink-0 rounded-2xl shadow-inner overflow-hidden border-2 border-white">
              <img 
                src={player.image} 
                alt={player.name} 
                className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            
            {/* Player Info */}
            <div className="flex-1 text-center sm:text-left flex flex-col h-full justify-center">
              <h2 className="text-xl font-black text-slate-800 tracking-tight">{player.name}</h2>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">{player.position}</p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-3 w-full sm:w-auto mt-4 sm:mt-0 border-l border-slate-50 sm:pl-6">
              <Link 
                to={`/players/${player.id}/summary`}
                className="flex items-center justify-between sm:justify-end gap-3 text-xs font-bold text-slate-600 hover:text-primary transition-colors uppercase tracking-widest group/btn"
              >
                <span>Statistik Total</span>
                <span className="material-icons-outlined text-base transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <button className="flex items-center justify-between sm:justify-end gap-3 text-xs font-bold text-slate-300 cursor-not-allowed uppercase tracking-widest">
                <span>Perkembangan</span>
                <span className="material-icons-outlined text-base">arrow_forward</span>
              </button>
              <Link 
                to={`/players/${player.id}/matches`}
                className="flex items-center justify-between sm:justify-end gap-3 text-xs font-bold text-slate-600 hover:text-primary transition-colors uppercase tracking-widest group/btn"
              >
                <span>Per Pertandingan</span>
                <span className="material-icons-outlined text-base transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
