module.exports = (clients, data) => {
  clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(data);
    }
  });
};
