
const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    // Zero effort here. We should be able to get the count for the badge from
    // irccloud, and probably the default impl should us how but I couldn't see
    // the source, so this won't work

    const updates = document.getElementById('franz').getAttribute('data-unread');
    const inbox = document.getElementById('franz').getAttribute('data-inbox');
    Franz.setBadge(updates, inbox);
  };

  Franz.injectCSS(path.join(__dirname, 'franz.css'));

  // called every 1s
  Franz.loop(getMessages);
};
