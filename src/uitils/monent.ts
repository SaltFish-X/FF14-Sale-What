// http://momentjs.cn/docs/

import moment from 'moment';

// X天过去的秒数
export const passSeconds = (day: number) => {
  return moment().unix() - moment().subtract(day, 'days').startOf('day').unix()  + day*3600*24
};

export const formatTime = (day: number, format = 'YYYY-MM-DD HH:mm:ss') =>
  moment(day).format(format);

  export const formatUnixTime = (day: number, format = 'YYYY-MM-DD HH:mm:ss') =>
  moment.unix(day).format(format);
