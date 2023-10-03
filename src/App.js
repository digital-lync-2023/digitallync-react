import React from 'react';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Header from './Components/includes/Header'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Footer from './Components/includes/Footer';
import Aws from './Components/Pages/Aws';
import Azure from './Components/Pages/Azure';
import DevOps from './Components/Pages/DevOps';
import AzureDevOps from './Components/Pages/AzureDevOps';
import Salesforce from './Components/Pages/SalesForce';
import Java from './Components/Pages/Java';
import ReactCourse from './Components/Pages/ReactCourse';
import FullStack from './Components/Pages/FullStack';
import Courses from './Components/Pages/Courses';
import DevOpsMasters from './Components/Pages/DevOpsMasters';
import Career from './Components/Pages/Career';
import Python from './Components/Pages/Python';
import BusinessAnalyst from './Components/Pages/BusinessAnalyst';
import Tableau from './Components/Pages/Tableau';
import Angular from './Components/Pages/Angular';
import PowerBi from './Components/Pages/PowerBi';
import SoftwareTesting from './Components/Pages/SoftwareTesting';

function App() {
  return (
    <> <Router>
        <div>

          <Header />

          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/aws-training-in-hyderabad.html' element={<Aws />}></Route>
            <Route exact path='/azure-training-in-hyderabad.html' element={<Azure />}></Route>
            <Route exact path='/devops-training-in-hyderabad.html' element={<DevOps />}></Route>
            <Route exact path='/azure-devops-training-in-hyderabad.html' element={<AzureDevOps />}></Route>
            <Route exact path='/sales-force-training-in-hyderabad.html' element={<Salesforce />}></Route>
            <Route exact path='/java-training-in-hyderabad.html' element={<Java />}></Route>
            <Route exact path='/react-training-in-hyderabad.html' element={<ReactCourse />}></Route>
            <Route exact path='/full-stack-training-in-hyderabad.html' element={<FullStack />}></Route>
            <Route exact path='/courses.html' element={<Courses />}></Route>
            <Route exact path='/devops-masters-training-in-hyderabad.html' element={<DevOpsMasters />}></Route>
            <Route exact path='/career.html' element={<Career />}>  </Route>
            <Route exact path='/python-training-in-hyderabad.html' element={<Python />}></Route>
            <Route exact path='/business-analyst-training-in-hyderabad.html' element={<BusinessAnalyst />}> </Route>
            <Route extact path='/tableau-training-in-hyderabad.html' element={<Tableau />}></Route>
            <Route extact path='/angular-training-in-hyderabad.html' element={<Angular />}></Route>
            <Route extact path='/power-bi-training-in-hyderabad.html' element={<PowerBi />}></Route>
            <Route exact path='/software-testing-training-in-hyderabad.html' element={<SoftwareTesting />}></Route>

          </Routes>

          <Footer />
         
        </div>
      </Router>
      
      
      </>
  );
}

export default App;
