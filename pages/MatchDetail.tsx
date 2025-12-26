
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PLAYERS, MATCHES } from '../constants';

const MatchDetail: React.FC = () => {
  const { playerId, matchId } = useParams();
  const navigate = useNavigate();
  const player = PLAYERS.find((p) => p.id === playerId);
  const match = MATCHES.find((m) => m.id === matchId);

  if (!player || !match) return <div className="p-8 text-center font-bold text-slate-400">Match or Player not found</div>;

  const stats = [
    { label: 'PTS', value: '13' }, { label: 'REB', value: '5' }, { label: 'AST', value: '7' },
    { label: 'STL', value: '1' }, { label: 'BLK', value: '0' }, { label: 'TOV', value: '2' },
    { label: 'FTM', value: '1' }, { label: 'FTA', value: '4' }, { label: 'FGM', value: '5' },
    { label: 'FGA', value: '13' }, { label: '3PM', value: '2' }, { label: '3PA', value: '6' },
  ];

  return (
    <div className="flex-1 flex flex-col h-full bg-white overflow-hidden">
      <header className="px-10 py-10 flex items-center justify-center flex-shrink-0 relative">
        <button 
          onClick={() => navigate(`/players/${playerId}/matches`)}
          className="absolute left-10 w-12 h-12 bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center"
        >
          <span className="material-icons text-slate-600">arrow_back</span>
        </button>
        <div className="bg-slate-200 px-16 py-4 rounded-2xl shadow-sm border border-slate-300/50">
          <h1 className="text-xl font-black text-slate-700 uppercase tracking-[0.2em]">Detail Pertandingan</h1>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-10 pb-20">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Match Info Section */}
          <div className="bg-slate-100 rounded-3xl p-10 border border-slate-200/60 shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Lawan</span>
                  <span className="text-2xl font-black text-slate-800 tracking-tight">{match.opponent}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Jenis Pertandingan</span>
                  <span className="text-lg font-bold text-slate-700">{match.type}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Hasil Akhir</span>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-slate-900">{match.score}</span>
                    <span className={`text-xs font-black uppercase px-3 py-1 rounded-lg ${match.result === 'W' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {match.result === 'W' ? 'Victory' : 'Defeat'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-8 md:pl-12 md:border-l border-slate-200">
                <div>
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Tanggal</span>
                  <span className="text-lg font-bold text-slate-800">{match.date}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Tempat & Status</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-lg font-bold text-slate-800">{match.venue}</span>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest">{match.status} GAME</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Statistics Section */}
          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-2xl shadow-slate-200">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-20 bg-slate-100 rounded-xl overflow-hidden border-2 border-white shadow-md">
                <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Statistik {player.name}</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Individual Performance Summary</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-slate-50 border border-slate-100 py-6 px-6 rounded-2xl flex justify-between items-center group hover:bg-white hover:shadow-lg transition-all">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-primary transition-colors">{stat.label}</span>
                  <span className="text-2xl font-black text-slate-800">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { label: 'Field Goal %', value: '38.5%', sub: '5/13 FGA' },
                { label: '3-Point %', value: '33.3%', sub: '2/6 3PA' },
                { label: 'Free Throw %', value: '25.0%', sub: '1/4 FTA' }
              ].map((p) => (
                <div key={p.label} className="p-6 rounded-2xl bg-slate-900 text-white flex justify-between items-center">
                  <div>
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">{p.label}</span>
                    <span className="text-2xl font-black">{p.value}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">{p.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetail;
