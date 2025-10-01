const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const results = []
  const requests = urls.map((url) => httpGet(url));

  responses = await Promise.allSettled(requests)
  responses.forEach((response) => {
    const { value } = response;
    const message = JSON.parse(value.body).message
    const record = value.status === 200 ? { "Arnie Quote": message } : { "FAILURE": message }

    results.push(record);
  })


  return results;
};

module.exports = {
  getArnieQuotes,
};
