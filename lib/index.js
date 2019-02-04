const hackerNewsApi = require('hacker-news-api');

/**
 * Retrieve info of this Convo helper library, in this case, package name and version.
 *
 * @return the info
 */
function getInfo() {
  return '%s-%s';
}

/**
 * Get Hacker News top stories 
 *
 * @param {Object} params: query parameters passed from Convo middleware
 * @param {Function} operationCb: callback function to be passed to method call as the last argument
 * @param {Function} errCb: callback function with reply text argument
 * @param {Object} convoOpts:
 */
function getTopStories(params, operationCb, errCb, convoOpts) {
  console.info('Calling API using Convo Hacker News Helper...');
  hackerNewsApi.story().show_hn().top(function (err, data) {
    if (err) {
      errCb(err);
    } else {
      console.dir(data);
      operationCb(data);
    }
  });
}

module.exports = {
  getInfo: getInfo,
  getTopStories: getTopStories
};
