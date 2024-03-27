import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

const timeConverter = (time: string) => {
  const timeConverted = dayjs(time);
  return timeConverted.format('YYYY년 M월 D일 (ddd) HH:mm');
};

export default timeConverter;
