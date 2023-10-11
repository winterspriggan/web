import moment from 'moment';

moment('2023-10-01', 'YYYY-MM-DD');

moment().add(1,'days') // 하루 더하기
moment().subtract(1,'days') // 하루 빼기
moment().subtract(1,'months') // 한달 빼기
moment().add(1,'year') // 1년 더하기

moment().isBefore('2020-09-01'); // 파라미터로 주어진 날짜 이전인지 false
moment().isAfter('2020-09-01'); // 이후인지 true
moment().isSame('2023-10-01'); // 같은 날짜인지 true
moment().isBetween('2013-10-01', '2030-10-01'); // 사이에 있는지 true