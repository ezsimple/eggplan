import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DateUtil } from 'utils';

// AirBnB datepicker 사용
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

import styles from './PigBreedStatus.module.scss';

import { Trans } from 'react-i18next';
import moment from 'moment';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { bindPromise } from 'mobx-promise'

import PigBreedGrid from './PigBreedGrid'
import ExportExcel from './ExportExcel'

@inject("TopMenuStore")
class PigBreedStatus extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: (moment(new Date()).format('YYYY-MM-DD')),
			focused: false,
			storeData1 : [],
			storeData2 : [],
			excelHeader : [],
			excelParam : {
				state: false,
				header : [],
				data : [],
			},
		};
	}
	componentWillMount() {
		//this.state.date = '2019-10-10';
		//this.populateValueFromProps(this.props);
	}
  	componentDidMount() {
		//let newDate = new Date()
		//this.setState({
		//	date: (moment(new Date()).format('YYYY-MM-DD')),
		//});
		this.setState({ date: (moment(new Date()).format('YYYY-MM-DD')) 
					}, function() {
										this.fnSearch()
		});
  	}
 /*
  prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
  위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
  예: return nextProps.id !== this.props.id;
  JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.
  */
 
 	// shouldComponentUpdate(nextProps, nextState) {
	//  	console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
	//  	//return nextProps.id !== this.props.id;
	//  	return true;
  	// }

    // onDateChange = date => {
    //    this.setState({
	// 	 date:  (moment(date).format('YYYY-MM-DD')) ,
	//    });
	   
    //  };
	/*
	*	fnSearch
	*/
	fnSearch = async (e, data) => {

		await this.props.TopMenuStore.onSearch(this.state.date).then(function (response) { 
		} );
		let storeData = [];
		bindPromise(this.props.TopMenuStore.storeData)
		.to( storeData)
		.then((result) => {
				this.setState({
					storeData1: storeData.data.rows1,
					storeData2: storeData.data.rows2,
					}, function() { })
				} )
		.catch((err) => alert(err));
	}
	fnClick = (e, obj) => {
		console.log('===>', obj);
	}
	fnExportExcel = async (e, obj) => {

		let p = this.state.excelParam;
		p["state"] = true;
		p["header"][0] = [{"header" : "구분"},
						  {"header" : "모돈계"},
						  {"header" : "후보S"},
						  {"header" : "종모돈"},
						  {"header" : "후보U"},
						  {"header" : "이유모돈"},
						  {"header" : "임신돈"},
						  {"header" : "포유모돈"},
						  {"header" : "사고후대기돈"},
						];
		p["header"][1] = [{"header" : "구분"},
						  {"header" : "비육돈계"},
						  {"header" : "포유자돈"},
						  {"header" : "이유자돈"},
						  {"header" : "육성돈"},
						  {"header" : "비육전기"},
						  {"header" : "비육후기"},
						];
		p["data"][0] = this.state.storeData1;
		p["data"][1] = this.state.storeData2;


		this.setState({
			excelParam: p,
		}, function() { 

		});
		
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
		return (
			<Fragment>
				{/* 디자인 영역 */}
				<div className="pig-container">
					<div className="pig-search">
						<label htmlFor="">
						<Trans>m.기준일</Trans>
						</label>
						{/* datepicker 사용법 */}
						<SingleDatePicker
						placeholder="일자"
						date={DateUtil.now(this.state.date)} // momentPropTypes.momentObj or null
						displayFormat="YYYY-MM-DD" // 날짜 형식 변경을 위해서 필요.
						onDateChange={date => this.setState({ date: (moment(date).format('YYYY-MM-DD')) })} // PropTypes.func.isRequired
						focused={this.state.focused} // PropTypes.bool
						onFocusChange={({ focused }) => {
							this.setState({ focused });
						}} // PropTypes.func.isRequired
						numberOfMonths={1}
						withPortal //모달
						showDefaultInputIcon
						showClearDate
						readOnly
						id={'datepicker1'} // PropTypes.string.isRequired,
						/>
					</div>
					<div className="con_search">
						<button className="btn_type3" onClick={(e) => this.fnSearch(e, 'click')}>
						<i className="mdi mdi-magnify"></i> <Trans>m.조회하기</Trans>
						</button>
					</div>

					<PigBreedGrid 
						storeData1={this.state.storeData1}
						storeData2={this.state.storeData2}
						fnClick = {this.fnClick}
					/>

					<div className="top-btn">
						<button className="btn-excel f-right" onClick={(e) => this.fnExportExcel(e, 'export-excel')}>
						<Trans>m.엑셀다운</Trans>
						</button>
					</div>
				</div>
				<ExportExcel param={this.state.excelParam}/>
				{/* 디자인 영역 */}
			</Fragment>
		);
  	}
}

export default PigBreedStatus;
