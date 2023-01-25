import moment from 'moment';

const formatMilisseconds = (miliseconds) => moment.utc(miliseconds).format('HH:mm:ss:SSS');

export default formatMilisseconds;