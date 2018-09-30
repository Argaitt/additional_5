module.exports = function check(str, bracketsConfig) {
  let strLocal = str, tmp;
  for (let i = 0, len = bracketsConfig.length; i < len; i++){
      while ( strLocal.indexOf(bracketsConfig[i][1], strLocal.indexOf(bracketsConfig[i][0]) + 1) != -1) {
        strLocal = strLocal.slice(0, strLocal.indexOf(bracketsConfig[i][0])) + strLocal.slice(strLocal.indexOf(bracketsConfig[i][0])+1);
        strLocal = strLocal.slice(0, strLocal.indexOf(bracketsConfig[i][1])) + strLocal.slice(strLocal.indexOf(bracketsConfig[i][1])+1);
      }
      if (strLocal.indexOf(bracketsConfig[i][1]) != -1){
        return false;
      }
  }
  return true;
}
