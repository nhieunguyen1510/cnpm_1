const databaseService = require('./database.service');

const find = ({
  tiviName,
  tiviGroupName
}) => {
  return databaseService.getTiviList()
    .then(tivis => {
      const result = tivis.filter(tivi => {
        if (tiviName !== undefined && tivi.Ten.indexOf(tiviName) !== -1) {
          return true;
        }
        if (tiviGroupName !== undefined && tivi.Ten.indexOf(tiviGroupName) !== -1) {
          return true;
        }
        return false;
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
