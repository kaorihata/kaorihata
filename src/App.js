import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FcContacts, FcBusiness, FcGraduationCap, FcTreeStructure, FcLandscape } from "react-icons/fc";
import About from './components/Panel_About';
import Edu from './components/Panel_Edu';
import Work from './components/Panel_Work';
import Project from './components/Panel_Project';
import Hobbies from './components/Panel_Hobbies';
import "./App.css";


function App() {
  return (
    <Tabs className="tabs">
      <div className="panel-list">
        <TabPanel className="panel">
          <About />
        </TabPanel>
        <TabPanel className="panel">
          <h2 className="panel-title">Education</h2>
          <Edu/>
        </TabPanel>
        <TabPanel className="panel">
          <h2 className="panel-title">Work</h2>
          <Work />
        </TabPanel>
        <TabPanel className="panel">
          <h2 className="panel-title">Side projects</h2>
          <Project/>
        </TabPanel>
        <TabPanel className="panel">
          <h2 className="panel-title">Hobbies</h2>
          <Hobbies/>
        </TabPanel>
      </div>
      <TabList className="tab-list">
        <Tab className="tab">
          <FcContacts size={31} />
          <span className="tab-txt">About</span>
        </Tab>
        <Tab className="tab">
          <FcGraduationCap size={31} />
          <span className="tab-txt">Education</span>
        </Tab>
        <Tab className="tab">
          <FcBusiness size={31} />
          <span className="tab-txt">Work</span>
        </Tab>
        <Tab className="tab">
          <FcTreeStructure size={31} />
          <span className="tab-txt">Side projects</span>
        </Tab>
        <Tab className="tab">
          <FcLandscape size={31} />
          <span className="tab-txt">Hobbies</span>
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default App;
