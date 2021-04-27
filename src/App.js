import './App.css';

function App() {

  return (
    <div id="viewDiv">
      <div style={{background: '#fff'}} id="mainWindow">
        <div>
          <div>
            <p>Add a zipped shapefile to the map.</p>
            <form encType="multipart/form-data" method="post" id="uploadForm">
              <div className="field">
                <label className="file-upload">
                  <span>
                    <strong>Add File</strong>
                  </span>
                  <input type="file" name="file" id="inFile" />
                </label>
              </div>
            </form>
            <span
              className="file-upload-status"
              id="upload-status"
            ></span>
            <div id="fileInfo"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
