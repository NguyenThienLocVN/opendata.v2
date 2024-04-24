'use client'
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  let ajaxSettings: object = {
          url: hostUrl + "api/FileManager/FileOperations",
          getImageUrl: hostUrl + "api/FileManager/GetImage"
        };

  return (
    <div className="control-section">
        <FileManagerComponent id="file" view="LargeIcons" ajaxSettings = {ajaxSettings} >
          <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>
  );
}
export default App;