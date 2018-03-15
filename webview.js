
const path = require('path');

module.exports = Franz => {
  const getMessages = () => {
    const directMessages = document.getElementsByClassName("buffer conversation active unread activeBadge").length;
    const indirectMessages = document.getElementsByClassName("buffer channel active unread").length;

    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getMessages);
};
