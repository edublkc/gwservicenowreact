# React TS in ServiceNow

## Tutorial - EN

### 1 - Install GW React application (ServiceNow scoped application)
Download and install gwreact-application-servicenow.xml XML update set from this repo.




### 2 - Install this servicenow react boilerplate
git clone https://github.com/edublkc/gwservicenowreact.git

Navigate to snreact folder and install npm dependencies:

npm install




### 3 - Build deployment package
Build a ServiceNow-ready package by:

npm run snbuild

This creates ./dist/ folder with index.html file and a number of subfolders, where you can find your bundle files.

“dist” folder structure mimics your ServiceNow API structure, so you can deploy the application files to ServiceNow by drag-n-drop.




### 4 - Deploy to ServiceNow

Simply copy html code from ./dist/index.html into moudle "index" in ServiceNow instance. HTML code already includes all necessary ServiceNow-code injections for:
