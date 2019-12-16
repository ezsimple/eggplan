import { observable, action, computed, configure } from 'mobx';
import axios from 'axios';
import {Server} from 'components/Properties';


//User Strict 모드 : 항상 @action 을 붙이도록 강제함, observable 을 immutable 하게 함
configure({enforceActions: 'observed' });

class TopMenuStore {
  // RootStore 통합을 위한 생성자
  constructor(root) {
    this.root = root;
  }

  @observable
  mainTab = 0;

  @observable
  subTab = 0;

  @observable storeData = [];
  @observable excelHeader = [];

  // 상위 메뉴 선택
  @action
  onClickMainTab = id => {
    this.mainTab = id;
    this.subTab = 0;
  };
  @action setUsers = (users) => { this.storeData = [...users]; }
  @action
onClickMainTab2 = id => {

console.log('onClickMainTab2');

    this.storeData = [
			  {
				"구분": "전일",
				"모돈계": 100,
				"후보S": 80,
				"종모돈": 80,
				"후보U": 80,
				"이유모돈": 50,
				"임신돈": 20,
				"포유모돈": 50,
				"사고후대기돈": 2,
			  },
			  {
				"구분": "금일",
				"모돈계": 120,
				"후보S": 90,
				"종모돈": 85,
				"후보U": 86,
				"이유모돈": 66,
				"임신돈": 25,
				"포유모돈": 40,
				"사고후대기돈": 0,
			  },
			  {
				"구분": "증감",
				"모돈계": 5,
				"후보S": 5,
				"종모돈": 5,
				"후보U": 6,
				"이유모돈": 6,
				"임신돈": 5,
				"포유모돈": 0,
				"사고후대기돈": 2,
			  },]
	

    return id;
};

	// 하위 메뉴 선택
	@action
	onClickSubTab = id => {
		this.subTab = id;
	};

	@computed
	get mainTabId() {
		return this.mainTab
	}

	@computed
	get subTabId() {
		return this.subTab
	}

	@action
	onSearch = async(date) => {

		let param = {
			strDate: date,
			endDate: '2019-10-14',
		}

		const url = Server.getRestAPI();

		this.storeData = axios({
								method:'post',
								url: url+'/greeting.json',
								params: param
							}).then(function (response) {
								console.log('response.data.rows', response)
								return response.data
							}).catch(function (error) { return [] });
		
	};
	@action
	selectExcelHeaderList = async(_code) => {

		let param = {
			code: _code,
		}
		this.excelHeader = axios({
								method:'post',
								url:'/mobile/selectExcelHeaderList.json',
								params: param
							}).then(function (response) {
								//console.log('response.data.rows', response.data)
								return response.data
							}).catch(function (error) { return [] });
		
	};
}

export default new TopMenuStore();
