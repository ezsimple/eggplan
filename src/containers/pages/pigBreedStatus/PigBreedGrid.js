import React, { Component, Fragment } from 'react';
import { Trans } from 'react-i18next';

class PigBreedGrid extends Component {
  	constructor(props) {
		super(props);
		this.state = {
		};		
  	}

  	componentDidMount() {
		//let newDate = new Date()
		//this.setState({
		//	date: (moment(new Date()).format('YYYY-MM-DD')),
		//});
		// this.setState({ date: (moment(new Date()).format('YYYY-MM-DD')) 
		// 			}, function() {
		// 								this.fnSearch()
		// });
		//console.log ('props', this.props.data) ;

  	}
	shouldComponentUpdate(nextProps, nextState) {
	// 	let props = JSON.stringify(nextProps)
	// 	let state = JSON.stringify(nextState)
	// 	console.log("shouldComponentUpdate: " + props + " " + state);
	console.log("shouldComponentUpdate: 1." + nextProps + " 2." + this.props);

		console.log('shouldComponentUpdate', (JSON.stringify(nextProps) !== JSON.stringify(this.props)) );

		return (JSON.stringify(nextProps) !== JSON.stringify(this.props))
  	}  

  	render() {
		if ( this.props.storeData1 && this.props.storeData1.length > 0) {
			console.log('this.props.data==>', this.props.storeData1)
			const showData1 = this.props.storeData1.map((contact, i) => {
				//console.log(contact);
				return (<tr key={i} onClick={(e) => this.props.fnClick(e, contact) }>
						<td>
							<Trans>{contact.구분}</Trans>
						</td>
						<td>{contact.모돈계}</td>
						<td>{contact.후보S}</td>
						<td>{contact.종모돈}</td>
						<td>{contact.후보U}</td>
						<td>{contact.이유모돈}</td>
						<td>{contact.임신돈}</td>
						<td>{contact.포유모돈}</td>
						<td>{contact.사고후대기돈}</td>
					</tr>
				);
			})
			const showData2 = this.props.storeData2.map((contact, i) => {
				//console.log(contact);
				return (<tr key={i}>
						<td>
							<Trans>{contact.구분}</Trans>
						</td>
						<td>{contact.비육돈계}</td>
						<td>{contact.포유자돈}</td>
						<td>{contact.이유자돈}</td>
						<td>{contact.육성돈}</td>
						<td>{contact.비육전기}</td>
						<td>{contact.비육후기}</td>
					</tr>
				);
			})

		return (
			<Fragment>
				<h2><Trans>m.번식돈</Trans></h2>
				<div className="board-list">
					<table>
					<colgroup>
						<col style={{ width: '10%' }} />
						<col style={{ width: '15%' }} />
						<col style={{ width: '10%' }} />
						<col style={{ width: '10%' }} />
						<col style={{ width: '10%' }} />
						<col style={{ width: '10%' }} />
						<col style={{ width: '10%' }} />
						<col style={{ width: '10%' }} />
						<col />
					</colgroup>
					<thead>
						<tr>
							<th rowSpan="2"><Trans>m.구분</Trans></th>
							<th colSpan="8"><Trans>m.번식돈</Trans></th>
						</tr>
						<tr>
							<th><Trans>m.모돈계</Trans></th>
							<th><Trans>m.후보</Trans>♂</th>
							<th><Trans>m.종모돈</Trans></th>
							<th><Trans>m.후보</Trans>♀</th>
							<th><Trans>m.이유모돈</Trans></th>
							<th><Trans>m.임신돈</Trans></th>
							<th><Trans>m.포유모돈</Trans></th>
							<th><Trans>m.사고후대기돈</Trans></th>
						</tr>
					</thead>
					<tbody>
						{showData1}
					</tbody>
					</table>
				</div>

				<h2><Trans>m.비육돈</Trans></h2>
				<div className="board-list">
					<table>
					<colgroup>
						<col style={{ width: '10%' }} />
						<col style={{ width: '20%' }} />
						<col style={{ width: '13%' }} />
						<col style={{ width: '13%' }} />
						<col style={{ width: '13%' }} />
						<col style={{ width: '13%' }} />
						<col />
					</colgroup>
					<thead>
						<tr>
							<th rowSpan="2"><Trans>m.구분</Trans></th>
							<th colSpan="8"><Trans>m.비육돈</Trans></th>
						</tr>
						<tr>
							<th><Trans>m.비육돈계</Trans></th>
							<th><Trans>m.포유자돈</Trans></th>
							<th><Trans>m.이유자돈</Trans></th>
							<th><Trans>m.육성돈</Trans></th>
							<th><Trans>m.비육전기</Trans></th>
							<th><Trans>m.비육후기</Trans></th>
						</tr>
					</thead>
					<tbody>
						{showData2}
					</tbody>
					</table>
				</div>
			</Fragment>
		)
		}else return null
  }
}

export default PigBreedGrid;
