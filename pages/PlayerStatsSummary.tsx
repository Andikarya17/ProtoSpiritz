
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PLAYERS } from '../constants';

const PlayerStatsSummary: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const player = PLAYERS.find((p) => p.id === id);

  if (!player) return <div className="p-8">Player not found</div>;

  const stats = [
    { label: 'PPG', value: player.summaryStats.ppg },
    { label: 'RPG', value: player.summaryStats.rpg },
    { label: 'APG', value: player.summaryStats.apg },
    { label: 'SPG', value: player.summaryStats.spg },
    { label: 'BPG', value: player.summaryStats.bpg },
    { label: 'TPG', value: player.summaryStats.tpg },
    { label: 'FT', value: player.summaryStats.ft },
    { label: 'FG', value: player.summaryStats.fg },
    { label: '3P', value: player.summaryStats.p3 },
    { label: 'FTA', value: player.summaryStats.fta },
    { label: 'FGA', value: player.summaryStats.fga },
    { label: '3PA', value: player.summaryStats.p3a },
  ];

  return (
    <div className="p-8 lg:p-12 max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="flex flex-col items-center relative mb-16">
        <button 
          onClick={() => navigate('/players')}
          className="absolute left-0 top-1 w-12 h-12 bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center"
        >
          <span className="material-icons text-slate-600">arrow_back</span>
        </button>
        <div className="bg-slate-200 px-16 py-4 rounded-2xl shadow-sm border border-slate-300/50">
          <h1 className="text-xl font-black text-slate-700 uppercase tracking-[0.2em]">Detail Pemain</h1>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 mb-20">
        <div className="flex flex-col items-center space-y-6 shrink-0">
          <div className="w-64 h-72 bg-primary rounded-3xl flex items-center justify-center shadow-xl relative overflow-hidden border-4 border-white">
            <img 
              src={player.image} 
              alt={player.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">{player.name}</h2>
        </div>
        
        <div className="flex-1 w-full pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Gender', value: player.gender },
              { label: 'Tinggi', value: player.height },
              { label: 'Berat', value: player.weight },
              { label: 'Posisi', value: player.position },
              { label: 'Wingspan', value: player.wingspan },
              { label: 'Avg Speed', value: player.avgSpeed },
              { label: 'Jump Reach', value: player.jumpReach },
            ].map((bio) => (
              <div key={bio.label} className="bg-slate-100 border border-slate-200/60 px-6 py-4 rounded-xl shadow-sm flex justify-between items-center transition-transform hover:scale-[1.02]">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{bio.label}</span>
                <span className="text-sm font-bold text-slate-800">{bio.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Statistik Total</h3>
          <div className="w-12 h-1 bg-slate-200 mx-auto mt-2 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white border border-slate-100 py-6 px-6 rounded-2xl shadow-xl shadow-slate-200/50 flex justify-between items-center">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
              <span className="text-xl font-black text-slate-800">{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-slate-900 py-6 px-10 rounded-[1.5rem] shadow-2xl flex justify-around items-center w-full border border-slate-800">
          {[
            { l: 'FT%', v: player.summaryStats.ftPct },
            { l: 'FG%', v: player.summaryStats.fgPct },
            { l: '3P%', v: player.summaryStats.p3Pct }
          ].map((item) => (
            <div key={item.l} className="text-center">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.l}</div>
              <div className="text-xl font-black text-white">{item.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerStatsSummary;
