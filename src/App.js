import { HomePage } from './pages/HomePage/HomePage';
import { InvitationPage } from './pages/InvitationPage/InvitationPage';
import { Route, Routes } from 'react-router-dom';
import { DetailsPage } from './pages/DetailsPage/DetailsPage'
import { DressCode } from './components/DressCode/DressCode';
import { Gifts } from './components/Gifts/Gifts';
import { Activity } from './components/Activity/Activity';
import { DetailsLayout } from './components/DetailsLayout/DetailsLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/invitation' element={<InvitationPage />} />
        <Route path='/details' element={<DetailsPage />} />

        <Route element={<DetailsLayout />}>
          <Route path='/details/dress_code' element={<DressCode />} />
          <Route path='/details/gifts' element={<Gifts />} />
          <Route path='/details/activity' element={<Activity />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
