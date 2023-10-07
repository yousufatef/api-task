import { useState } from 'react';
import { ExcelUtility } from './ExcelUtility';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { SpreadsheetCell } from 'igniteui-react-spreadsheet';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();

export const ExcelViewer = () => {
  const [activeCell, setactiveCell] = useState();
  const [inputAddress, setinputAddress] = useState("C9");
  let spreadsheet;
  let inputAddress2 = "C9";

  function onActiveCellChanged(s, e) {
    setactiveCell(e.newValue.toString());
  }

  const onInputAddress = (e) => {
    inputAddress2 = e.target.value;
    inputAddress2 = inputAddress.toUpperCase()
    setinputAddress(inputAddress2);
  }

  const onClick = () => {

    if (inputAddress2 === "") {
      inputAddress2 = "C9";
      setinputAddress(inputAddress2 );
    }
    spreadsheet.activeCell = new SpreadsheetCell(inputAddress2);
  }

  function onSpreadsheetRef(spreadsheet2) {
    if (!spreadsheet2) { return; }

    spreadsheet = spreadsheet2;
    // const url = "https://static.infragistics.com/xplatform/excel/SalesData.xlsx";
    const url = "file_example_XLS_10.xlsx";
    ExcelUtility.loadFromUrl(url).then(async (w) => {
      spreadsheet.workbook = await w;
      spreadsheet.activeCell = new SpreadsheetCell("C15");
    });
  }

  return (
    <div>

      <div className="container sample">
        <div className="options horizontal">
          <input className="options-text" type="text" name="inputAddress" value={inputAddress} onChange={onInputAddress} />
          <button className="options-button" onClick={onClick} >Active Cell</button>
          <label className="options-label"> Current Active Cell: {activeCell} </label>
        </div>
        <div className="container">
          <IgrSpreadsheet activeCellChanged={onActiveCellChanged} ref={onSpreadsheetRef}
            height="600px" width="100%" />
        </div>
      </div>
    </div>
  );
}




