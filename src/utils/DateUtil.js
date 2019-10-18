import moment from 'moment-timezone';

class DateUtil {
  // 타임존에 따른 현재 시간 구하기
  // SingleDatePicker.props.displayFormat='YYYY-MM-DD'로
  // 변경해야만 합니다. moment의
  static now = (date = null) => {
    const timezone = 'Asia/Seoul';
    const datetimeFormat = 'YYYY-MM-DD HH:mm:ss';
    const now = date
      ? moment(new Date(date)).tz(timezone)
      : // .format(datetimeFormat)
        moment().tz(timezone);
    // .format(datetimeFormat)
    return now;
  };

  static today = (date = null) => {
    const timezone = 'Asia/Seoul';
    const datetimeFormat = 'YYYY-MM-DD';
    const now = date
      ? moment(new Date(date))
          .tz(timezone)
          .format(datetimeFormat)
      : moment()
          .tz(timezone)
          .format(datetimeFormat);
    return now;
  };
}

export default DateUtil;
