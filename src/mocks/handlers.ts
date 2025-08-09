import { http, HttpResponse } from 'msw';

const FAKE_PROFILE = {
  id: '12345',
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  companyName: 'OpenAI',
};

export const handlers = [
  http.get('http://localhost:9000/profile', () => {
    return HttpResponse.json(FAKE_PROFILE, { status: 200 });
  }),
];
