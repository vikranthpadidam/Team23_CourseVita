import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoute from './components/PublicRoute';
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ApplyAdmin from './pages/ApplyAdmin';
import NotificationPage from './pages/NotificationPage';
import Admins from './pages/admin/Admins';
import Users from './pages/admin/Users';
import Profile from './pages/faculty/Profile';
import BookingPage from './pages/BookingPage';
import Appointments from './pages/Appointments';
import FacultyAppointments from './pages/faculty/FacultyAppointments';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CertificatePdf from './pages/CertificatePdf';
import PersonalDetails from "./components/PersonalDetails";
import AdmissionDetails from "./components/AdmissionDetails";
import CommunicationDetails from "./components/CommunicationDetails";
import EducationDetails from "./components/EducationDetails";
import Instructions from './components/Instructions';


function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <div className="">
      <Router>
      {loading ? (
          <Spinner />
        ) : (
        <Routes>
           <Route path="/" element={<> <Navbar />
<Home />        <Footer />
</>} />
          <Route path='/H' 
          
          element={
          <ProtectedRoutes>
<HomePage />
          </ProtectedRoutes>
          } />
         
           <Route path='/apply-admin' 
          
          element={
          <ProtectedRoutes>
<ApplyAdmin />
          </ProtectedRoutes>
          } />
           <Route path='/notification' 
          
          element={
          <ProtectedRoutes>
<NotificationPage />
          </ProtectedRoutes>
          } />
          

            <Route path='/admin/admins' 
          
          element={
          <ProtectedRoutes>
<Admins />
          </ProtectedRoutes>
          } />
             <Route path='/appointments' 
          
          element={
          <ProtectedRoutes>
<Appointments />
          </ProtectedRoutes>
          } />
          <Route path='/CertificatePdf' 
          
          element={
          <ProtectedRoutes>
<CertificatePdf />
          </ProtectedRoutes>
          } />
           <Route path='/H/faculty-appointments' 
          
          element={
          <ProtectedRoutes>
<FacultyAppointments />
          </ProtectedRoutes>
          } />
            <Route path='/admin/users' 
          
          element={
          <ProtectedRoutes>
<Users />
          </ProtectedRoutes>
          } />
           <Route path='/faculty/profile/:id' 
          
          element ={
          <ProtectedRoutes>
<Profile />
          </ProtectedRoutes>
          } />
          
           <Route path='/faculty/book-appointment/:facultyId' 
          
          element ={
          <ProtectedRoutes>
<BookingPage />
          </ProtectedRoutes>
          } />
          <Route path='/login' element={
          <PublicRoute>
<Login/>
          </PublicRoute>
          }/>
          <Route path='/register' element={ <PublicRoute>
            <Register/>          </PublicRoute>}/>

            <Route path="/profile" element={ <ProtectedRoutes>
              <PersonalDetails />          </ProtectedRoutes>} />
          <Route path="/AdmissionDetails" element={<ProtectedRoutes>
              <AdmissionDetails />         </ProtectedRoutes>} />
          <Route path="/CommunicationDetails" element={<ProtectedRoutes>
            <CommunicationDetails />         </ProtectedRoutes>} />
          <Route path="/EducationDetails" element={<ProtectedRoutes>
            <EducationDetails />       </ProtectedRoutes>} />
          <Route path="/Instructions" element={<ProtectedRoutes>
            <Instructions />      </ProtectedRoutes>} />
          
        </Routes>
        
        )}
      </Router>
    </div>
  );
}

export default App;
