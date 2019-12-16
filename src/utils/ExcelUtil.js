import XLSX from 'xlsx';
import { DateUtil } from 'utils';
import i18n from 'i18next';

class ExcelUtil {
  // table Id를 가지고 엑셀파일을 생성 합니다.
  static exportTable = async (
    tableId,
    fileName = 'ExcelReport_' + DateUtil.toPostfixDateTimeString(),
    sheetName = 'Sheet'
  ) => {
    // -------------+-------------------------------------------------------------
    // Option Name	| Default	| Description
    // -------------+---------+---------------------------------------------------
    // raw          |		      | If true, every cell will hold raw strings
    // dateNF       |	FMT 14  |	Use specified date format in string output
    // cellDates    |	false	  | Store dates as type d (default is n)
    // sheetRows	  | 0	      |If >0, read the first sheetRows rows of the table
    // display	    | false	  | If true, hidden rows and cells will not be parsed
    // -------------+---------+---------------------------------------------------
    var option = { raw: true, type: 'string' };
    var new_workbook = XLSX.utils.book_new();
    var worksheet = XLSX.utils.table_to_sheet(
      document.getElementById(tableId),
      option
    );
    XLSX.utils.book_append_sheet(new_workbook, worksheet, sheetName);

    // write a workbook
    XLSX.writeFile(new_workbook, fileName + '.xlsx');
  };

  // jsonArray를 가지고 엑셀파일을 생성 합니다.
  static exportJSON = async (
    jsonData,
    fileName = 'ExcelReport_' + DateUtil.toPostfixDateTimeString(),
    sheetName = 'Sheet'
  ) => {
    const timeOut = 1;
    if (!jsonData || jsonData.length == 0) {
      // message.error(`${i18n.t('m.해당 데이터가 없습니다')}`, timeOut);
      return;
    }
    if (!Array.isArray(jsonData)) {
      // message.error(`${i18n.t('m.해당 데이터가 없습니다')}`, timeOut);
      return;
    }

    var new_workbook = XLSX.utils.book_new();
    var worksheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(new_workbook, worksheet, sheetName);

    // write a workbook
    XLSX.writeFile(new_workbook, fileName + '.xlsx');
  };
}

export default ExcelUtil;
