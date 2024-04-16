import { clientCredentials } from '../../utils/client';

const endpoint = clientCredentials.databaseURL;

// Get all the Orders Endpoint
const getOrders = () => {
  const url = `${endpoint}/orders`;

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

// Get an Order by Id
const getOrderById = (orderId) => {
  const url = `${endpoint}/orders/${orderId}`;

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

// Delete an Order by Id
const deleteOrderById = (orderId) => {
  const url = `${endpoint}/orders/${orderId}`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
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

// Delete an Item from an Order
const deleteItemFromOrder = (orderId, orderItemId) => {
  const url = `${endpoint}/orders/${orderId}/items/${orderItemId}`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
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

// Create an Order
const createNewOrder = (orderDetails) => {
  const url = `${endpoint}/orders/new`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderDetails),
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

// Update an Order
const updateOrder = (orderId, updateOrderDetails) => {
  const url = `${endpoint}/orders/${orderId}`;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateOrderDetails),
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

// Add Items to Order
const addItemToOrder = (orderId, itemId) => {
  const url = `${endpoint}/orders/${orderId}/items/${itemId}`;
  const payload = { itemId };

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
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
  getOrders,
  getOrderById,
  deleteOrderById,
  deleteItemFromOrder,
  createNewOrder,
  updateOrder,
  addItemToOrder,
};
