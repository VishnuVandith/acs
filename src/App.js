import React from 'react';
import './App.css';
import MakeCall from './MakeCall/MakeCall'
import { initializeIcons } from '@uifabric/icons';
import * as packageJson from '../package.json';

initializeIcons();

function App() {

  function VWebSdkVersion() {
    return packageJson.dependencies['@azure/communication-calling'];
  }

  return (
    <div className="App">
      <div className="header ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-lg6">
           
          </div>
          <div className="ms-Grid-col ms-lg6">
           
            <div className="sdk-docs-header">
              <a className="sdk-docs-link" href="https://docs.microsoft.com/en-us/javascript/api/azure-communication-services/@azure/communication-calling/?view=azure-communication-services-js">API Reference Documentation</a>
            </div>
          </div>
        </div>
      </div>
      <MakeCall/>
    </div>
  );
}

export default App;
