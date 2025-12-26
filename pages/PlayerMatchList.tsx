
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PLAYERS, MATCHES } from '../constants';

const PlayerMatchList: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const player = PLAYERS.find((p) => p.id === id);

  if (!player) return <div className="p-8">Player not found</div>;

  return (
    <div className="p-8 lg:p-12">
      {/* Figma Banner Header */}
      <div className="max-w-5xl mx-auto mb-16 relative flex items-center justify-center">
        <button 
          onClick={() => navigate('/players')}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm hover:bg-slate-50 transition-all"
        >
          <span className="material-icons text-slate-600">arrow_back</span>
        </button>
        <div className="bg-slate-200 px-16 py-4 rounded-2xl shadow-sm border border-slate-300/50">
          <h2 className="text-xl font-black text-slate-700 uppercase tracking-[0.2em]">Detail Pemain</h2>
        </div>
      </div>

      {/* Figma Profile Info Layout */}
      <div className="max-w-4xl mx-auto flex flex-col items-center mb-20 text-center">
        <div className="w-52 h-44 bg-primary rounded-3xl mb-8 shadow-xl flex items-center justify-center overflow-hidden border-4 border-white">
          <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">{player.name}</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          {[
            { label: 'Posisi', value: player.position },
            { label: 'Tinggi', value: player.height },
            { label: 'Berat', value: player.weight },
            { label: 'Wingspan', value: player.wingspan }
          ].map((item) => (
            <div key={item.label} className="bg-slate-100 border border-slate-200/60 px-4 py-3 rounded-xl text-center">
              <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-xs font-bold text-slate-800">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Match Rows */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h4 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Statistik Per Pertandingan</h4>
          <div className="w-12 h-1 bg-slate-200 mx-auto mt-2 rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          {MATCHES.map((match) => (
            <Link 
              key={match.id}
              to={`/players/${player.id}/matches/${match.id}`}
              className="group bg-white border border-slate-100 p-5 rounded-2xl flex items-center justify-between hover:bg-slate-50 transition-all shadow-xl shadow-slate-200/40"
            >
              <div className="w-1/4 text-xs font-bold text-slate-500 uppercase tracking-wider">{match.date}</div>
              <div className="w-1/4 text-sm font-black text-slate-800 uppercase">VS {match.opponent}</div>
              <div className="w-1/4">
                <span className="text-[10px] font-black uppercase px-3 py-1 bg-slate-100 rounded-lg text-slate-500 border border-slate-200">{match.status}</span>
              </div>
              <div className="w-1/4 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase">{match.type}</span>
                <span className="material-icons text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerMatchList;
