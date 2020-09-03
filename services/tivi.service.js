const databaseService = require('./database.service');

const find = ({
  id,
  // tiviName,
  // tiviGroupName
}) => {
  return databaseService.getTiviList()
    .then(tivis => {
      const result = tivis.find(tivi => {
        return tivi.Ma_so === id;
      });
      return result;
    });
};

const findAll = ({
  tiviName,
  tiviGroupName
}) => {
  return databaseService.getTiviList()
    .then(tivis => {
      const result = !tiviName && !tiviGroupName ?
        tivis :
        tivis.filter(tivi => {
          if (tiviName && tivi.Ten.indexOf(tiviName) !== -1) {
            return true;
          }
          if (tiviGroupName && tivi.Nhom_Tivi.Ten.indexOf(tiviGroupName) !== -1) {
            return true;
          }
          return false;
        });
      return result;
    });
};

module.exports = {
  find,
  findAll,
}
