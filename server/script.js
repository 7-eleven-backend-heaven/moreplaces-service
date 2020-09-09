import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1s', target: 1 },
    { duration: '1s', target: 10 },
    { duration: '1s', target: 100 },
    { duration: '1s', target: 1000 },
  ],
};

export default function() {
  const res = http.get('http://localhost:3009/property/200');
  check(res, { 'status was 200': (r) => r.status == 200 });

  sleep(1);
}
