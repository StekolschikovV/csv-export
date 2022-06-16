import React, {useEffect, useState} from 'react';
import { saveAs } from "file-saver";

import {fetchAll, getModels} from "../../utils/contentApis";
import {convertToCSV} from "../../utils/csvHelper";
import "./style.css"

const App = () => {

  const [models, setModels] = useState([]);

  useEffect(() => {
    async function loadContentTypes() {
      const models = await getModels();
      setModels(models);
    }
    loadContentTypes();
  }, []);

  const download = async (collectionName, apiID) => {
    const data = await fetchAll(collectionName)
    if (data) {
      const current = new Date();
      const filename = `${apiID}-${current.getTime()}`
      const file = new File([convertToCSV.convert(data)], `${filename}.csv`, { type: "text/csv;charset=utf-8" });
      saveAs(file);
    }
  }

  return (
    <div className="container export">
      <div className="row">
        <div className="col-sm-12 header-title p-0">
          <h1 className="mt-5">Export Content</h1>
          <p>Export content into CSV format</p>
        </div>
      </div>
      <div className="row">
        <div className={"col-12 mt-5"}></div>
      </div>
      {
        models.map((model) => (
          <div className="model-table row mt-3" key={model.uid}>
            <div className="col-8  p-4 row-title">{model.schema.name}</div>
            <div className="col-4  p-4 text-right">
              <button onClick={() => download(model.schema.collectionName, model.apiID)} type="button" className="btn btn-primary">Download</button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default App;
