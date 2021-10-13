const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    endpoint: {
      orders: 'orders',
    },
  },
  popupMessages: {
    orderConfirm: 'Order completed',
    orderIncomplete: 'Please fill all required field and try again',
  },
};

export default settings;