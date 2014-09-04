module.exports = function (deferred, numberOfStraws) {
  return (function () {
    var straws = 0;
    var maxStraws = numberOfStraws;
    return function (err) {
      if (err) {
        deferred.reject(err);
      }
      straws++;
      if (straws >= maxStraws) {
        deferred.resolve(true);
      }
    };
  })();
}
