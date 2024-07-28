import ErrorRepository from '../error';

test('ErrorRepository test unknown error', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(237)).toBe('Unknown error');
});

test('ErrorRepository test known error', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errors.set(400, 'Bad request');
  expect(errorRepository.translate(400)).toBe('Bad request');
});
