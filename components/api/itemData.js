import { clientCredentials } from '../../utils/client';

const endpoint = clientCredentials.databaseURL;

// Get all the Items
const getItems = () => {
  const url = `${endpoint}/items`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getItems,
};
