const _ = require('lodash');
const moment = require('moment');

const filterArray = (array, predicate) => {
  return _.filter(array, predicate);
};

const mapArray = (array, mapper) => {
  return _.map(array, mapper);
};

const formatDate = (date, format) => {
  return moment(date).format(format);
};

module.exports = {
  filterArray,
  mapArray,
  formatDate,
};