const currency = require('./');
const nock = require('nock');

beforeEach(() => {
  nock('https://api.exchangeratesapi.io')
    .get('/latest?base=USD')
    .reply(200, {
      'base': 'USD',
      'rates': {
        'EUR': 0.899
      }
    });

  nock('https://api.exchangeratesapi.io')
    .get('/latest?base=EUR')
    .reply(200, {
      'base': 'EUR',
      'rates': {
        'USD': 1.1122
      }
    });

  nock('https://blockchain.info')
    .get('/ticker')
    .reply(200, {
      'USD': {
        '15m': 8944.49,
        'last': 8944.49,
        'buy': 8944.49,
        'sell': 8944.49,
        'symbol': '$'
      },
      'EUR': {
        '15m': 8048.11,
        'last': 8048.11,
        'buy': 8048.11,
        'sell': 8048.11,
        'symbol': '€'
      }
    });
});

describe('currency', () => {
  test('should convert 1 USD to EUR', async () => {
    const converted = await currency({'amount': 1, 'from': 'USD', 'to': 'EUR'});

    expect(converted).toBe(0.899);
  });

  test('should convert 1 USD to USD', async () => {
    throw new Error(
      'test not yet defined... remove the throw and write your test here'
    );
  });

  test('should convert 1 EUR to USD', async () => {
    throw new Error(
      'test not yet defined... remove the throw and write your test here'
    );
  });

  test('should convert 1 BTC to USD', async () => {
    throw new Error(
      'test not yet defined... remove the throw and write your test here'
    );
  });

  test('should convert 1 BTC to EUR', async () => {
    throw new Error(
      'test not yet defined... remove the throw and write your test here'
    );
  });

  test('should convert (with default values) without arguments', async () => {
    throw new Error(
      'test not yet defined... remove the throw and write your test here'
    );
  });

  test('should convert with amount only as argument', async () => {
    throw new Error(
      'test not yet defined... remove the throw and write your test here'
    );
  });

  test('should convert with amount and (from) currency only as arguments', async () => {
    throw new Error(
      'test not yet defined... remove the throw and write your test here'
    );
  });

  test('should return errors message for unknown `from` or `to` currency value', async () => {
    throw new Error(
      'test not yet defined... remove the throw and write your test here'
    );
  });
});
