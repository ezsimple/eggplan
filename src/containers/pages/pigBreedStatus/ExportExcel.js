import React, { Component, Fragment } from 'react';
import { Trans } from 'react-i18next';
import XLSX from 'xlsx';

class ExportExcel extends Component {
  	constructor(props) {
		super(props);
		this.state = {
		};		
  	}

  	componentDidMount() {
	}
	
	// shouldComponentUpdate(nextProps, nextState) {
		
	// 	console.log("excel param", this.props.param);
	// 	console.log(JSON.stringify(nextProps));
	// 	console.log(JSON.stringify(this.props));
		
	// 		return (JSON.stringify(nextProps) !== JSON.stringify(this.props));
	// 	}  

	fnExportExcel = async (param) => {
		
		console.log("excel param", param.data.length);
		if ( param.data[0].length == 0 ) return;
			let data = [];
			for (var ii=0 ; ii < param.data.length ; ii ++){
				let col = [];
				param.data[ii].map((r,i) => {
					let rec = {};
					param.header[ii].map(c => { 
						rec[c.header] =r[c.header] ;
					})
					col[i] = rec;
				})
				data[ii] = col;
			}

			// param.data[1].map((r,i) => {
			// 	let rec = {};
			// 	param.header[1].map(c => { 
			// 		console.log(c.header, r[c.header] );
			// 		rec[c.header] =r[c.header] ;
			// 		})
			// 	data2.push(rec);			

			// })
			// console.log('data1===>', data1);


					/* convert from workbook to array of arrays */
					//var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
					//var data = XLSX.utils.sheet_to_json(first_worksheet, {header:1});
					/* convert from array of arrays to workbook */
					
					var new_workbook = XLSX.utils.book_new();
					for (var ii=0 ; ii < param.data.length ; ii ++){
						var worksheet = XLSX.utils.json_to_sheet( data[ii]);
						XLSX.utils.book_append_sheet(new_workbook, worksheet, "Sheet" + (ii+1));

						//var worksheet = XLSX.utils.json_to_sheet(data[1]);
						//XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetData" + 2);
					}

					/* write a workbook */

					XLSX.writeFile(new_workbook, "sheetjs.xlsx")

					//const wbout = XLSX.write(new_workbook, {type:'binary', bookType:"xlsx"});
					//writeFile(file, wbout, 'ascii').then((r)=>{/* :) */}).catch((e)=>{/* :( */});		

		// await this.props.TopMenuStore.selectExcelHeaderList('981008');
		// let storeData = [];
		// bindPromise(this.props.TopMenuStore.excelHeader)
		// .to( storeData)
		// .then((result) => {
		// 	this.setState({
		// 		excelHeader: storeData.data,
		// 	}, function() {
				

		// 		const data1 = [];
		// 		const data2 = [];
		// 		this.state.storeData1.map((r,i) => {
		// 			let rec = {};
		// 			this.state.excelHeader.map(c => { 
		// 				console.log(c.header, r[c.header] );
		// 				rec[c.header] =r[c.header] ;
		// 				})
		// 			data1.push(rec);			

		// 		})
		// 		this.state.storeData2.map((r,i) => {
		// 			let rec = {};
		// 			this.state.excelHeader.map(c => { 
		// 				console.log(c.header, r[c.header] );
		// 				rec[c.header] =r[c.header] ;
		// 				})
		// 			data2.push(rec);			

		// 		})
		// 		console.log('data1===>', data1);


		// 				/* convert from workbook to array of arrays */
		// 				//var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
		// 				//var data = XLSX.utils.sheet_to_json(first_worksheet, {header:1});
						
		// 				/* convert from array of arrays to workbook */
		// 				var worksheet = XLSX.utils.json_to_sheet( data1);
		// 				console.log('===>', worksheet);
		// 				var new_workbook = XLSX.utils.book_new();
		// 				console.log('===>', new_workbook);
		// 				XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetData1");

		// 				var worksheet = XLSX.utils.json_to_sheet(data2);
		// 				//var new_workbook = XLSX.utils.book_new();
		// 				XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetData2");

		// 				/* write a workbook */

		// 				XLSX.writeFile(new_workbook, "sheetjs.xlsx")

		// 				//const wbout = XLSX.write(new_workbook, {type:'binary', bookType:"xlsx"});
		// 				//writeFile(file, wbout, 'ascii').then((r)=>{/* :) */}).catch((e)=>{/* :( */});						
		// 			 })
		// 		} )
		// .catch((err) => alert(err));


	}	

  	render() {
		if ( this.props.param.state ) this.fnExportExcel(this.props.param);
		return null;
  	}
}

export default ExportExcel;
