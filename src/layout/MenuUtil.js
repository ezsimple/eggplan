export default class MenuUtil {
  static fnMenuClick = (e, state, props) => {
    // console.log('click:', e, 'state:', state);
    const location = {
      pathname: e.key,
      state: state // this.props.location.state.row;
    };
    props.history.push(location);
  };

  static fnMenuSelectedKey = () => {
    const pathname = window.location.pathname.split('/');
    const type = pathname[1];
    const cate = pathname[2];
    const id = pathname[3];
    const selectedKey = '/' + type + '/' + cate + '/' + id;
    console.log('selectedKey : ', selectedKey);
    return selectedKey;
  };

  static fnMenuOpenKey = () => {
    const selectedKey = this.fnMenuSelectedKey();
    let openKey = '';
    if (
      selectedKey.indexOf('/member/') > -1 ||
      selectedKey.indexOf('/group/') > -1 ||
      selectedKey.indexOf('/roll/') > -1
    ) {
      openKey = '_user';
    }
    if (
      selectedKey.indexOf('/rcvmng/') > -1 ||
      selectedKey.indexOf('/rcvlist/') > -1
    ) {
      openKey = '_rcv';
    }
    if (
      selectedKey.indexOf('/transegg/') > -1 ||
      selectedKey.indexOf('/transchick/') > -1
    ) {
      openKey = '_trans';
    }
    console.log('openKey : ', openKey);
    return openKey;
  };
}
