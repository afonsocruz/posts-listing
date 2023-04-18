import moment from 'moment/moment';

export const getCurrentTimestamp = () => {
  return moment().startOf('day').fromNow();
};

export const getTimestampForDB = () => {
  return moment().format('LLL');
};
