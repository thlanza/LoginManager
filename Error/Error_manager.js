function ErrorManager(code, message) {
  var obj = { statusCode: code, message: message, err: true };
  return obj;
}
module.exports = { ErrorManager: ErrorManager };
