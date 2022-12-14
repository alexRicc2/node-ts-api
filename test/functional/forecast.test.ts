describe('Beach forecast functional tests', () => {
  it('should return the sum of two given numbers', async () => {
    const { body, status } = await global.testRequest
      .post('/forecast/somaNumeros')
      .send({
        numero: 2,
        numero2: 4,
      });
    expect(status).toBe(200);
    expect(body.soma).toBe(6);
  });
  it('should return status 400 if password or username is undefined', async () => {
    const combinations = [{ password: '123456' }, { username: 'alex' }, {}];
    for (const data of combinations) {
      const { status } = await global.testRequest
        .post('/forecast/login')
        .send(data);
      expect(status).toBe(400);
    }
  });
  it('given password and username, should return status 200 and an userId', async () => {
    const data = {
      username: 'alex',
      password: '123445',
    };
    const { status, body } = await global.testRequest
      .post('/forecast/login')
      .send(data);
    expect(status).toBe(200);
    expect(body.userId).toEqual(expect.any(Number));
  });
  it('should return a forecast with just a few times', async () => {
    const { body, status } = await global.testRequest.get('/forecast');
    expect(status).toBe(200);
    // Make sure we use toEqual to check value not the object and array itself
    expect(body).toEqual([
      {
        time: '2020-04-26T00:00:00+00:00',
        forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: 'Manly',
            position: 'E',
            rating: 2,
            swellDirection: 64.26,
            swellHeight: 0.15,
            swellPeriod: 3.89,
            time: '2020-04-26T00:00:00+00:00',
            waveDirection: 231.38,
            waveHeight: 0.47,
            windDirection: 299.45,
          },
        ],
      },
      {
        time: '2020-04-26T01:00:00+00:00',
        forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: 'Manly',
            position: 'E',
            rating: 2,
            swellDirection: 123.41,
            swellHeight: 0.21,
            swellPeriod: 3.67,
            time: '2020-04-26T01:00:00+00:00',
            waveDirection: 232.12,
            waveHeight: 0.46,
            windDirection: 310.48,
          },
        ],
      },
    ]);
  });
});
