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
  const id = Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;
  const res = http.get(`http://localhost:3009/property/${id}`);
  check(res, { 'status was 200': (r) => r.status === 200 });

  sleep(1);
}
