
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PlayerList from './pages/PlayerList';
import PlayerStatsSummary from './pages/PlayerStatsSummary';
import PlayerMatchList from './pages/PlayerMatchList';
import MatchDetail from './pages/MatchDetail';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/players" replace />} />
          <Route path="players" element={<PlayerList />} />
          <Route path="players/:id/summary" element={<PlayerStatsSummary />} />
          <Route path="players/:id/matches" element={<PlayerMatchList />} />
          <Route path="players/:playerId/matches/:matchId" element={<MatchDetail />} />
          
          {/* Placeholder routes for sidebar navigation */}
          <Route path="dashboard" element={<div className="p-8"><h1 className="text-2xl font-bold">Dashboard</h1><p>Welcome back, Justin.</p></div>} />
          <Route path="compare" element={<div className="p-8"><h1 className="text-2xl font-bold">Perbandingan Pemain</h1><p>Feature coming soon.</p></div>} />
          <Route path="scout-report" element={<div className="p-8"><h1 className="text-2xl font-bold">Laporan Scout</h1><p>Scouting reports listing.</p></div>} />
          <Route path="potential" element={<div className="p-8"><h1 className="text-2xl font-bold">Pemain & Calon Pemain</h1><p>Management of candidates.</p></div>} />
          <Route path="assign" element={<div className="p-8"><h1 className="text-2xl font-bold">Assign Calon Pemain</h1><p>Assignment workflow.</p></div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
