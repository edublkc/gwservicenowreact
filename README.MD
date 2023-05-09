# React TS in ServiceNow

## Tutorial - EN

### 2 - Install this servicenow react boilerplate
git clone https://github.com/edublkc/gwservicenowreact.git

Navigate to snreact folder and install npm dependencies:

npm install

### 2 - Install GW React application (ServiceNow scoped application)
Install gwreact-application-servicenow.xml XML update set from this repo.


### 3 - Build deployment package
Build a ServiceNow-ready package by:

npm run snbuild

This creates ./dist/ folder with index.html file and a number of subfolders, where you can find your bundle files.

“dist” folder structure mimics your ServiceNow API structure, so you can deploy the application files to ServiceNow by drag-n-drop.
![image](https://user-images.githubusercontent.com/89402489/236961715-29148c67-8c9e-4122-96b8-78b983990bed.png)


### 4 - Deploy to ServiceNow

Simply copy html code from ./dist/index.html into moudle "index" in ServiceNow instance. HTML code already includes all necessary ServiceNow-code injections:
![image](https://user-images.githubusercontent.com/89402489/236961909-8ab9c2b4-0a13-4a35-b81f-bca86057b480.png)

![image](https://user-images.githubusercontent.com/89402489/236960964-c172c8ba-8b7f-4da9-b31e-0107cc8123da.png)

Attach (drag-n-drop) the files from ./dist/js/... folders to the corresponding GET resources. Your JS resource should look like this (see attached files on a form):
Attach js files in this module:
![image](https://user-images.githubusercontent.com/89402489/236961454-5714b05c-56fe-4e30-a9f7-d088789d9d79.png)

Attach css files in this module:
![image](https://user-images.githubusercontent.com/89402489/236961541-0a279222-6b30-4a28-9792-2098fb347962.png)

Attach image files in this module:
![image](https://user-images.githubusercontent.com/89402489/236961594-b94bfdd1-ac90-4f1d-8bf9-5860f2d188ef.png)
