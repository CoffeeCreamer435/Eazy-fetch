class Properties {
  static header = {};

  static url;

  static returnJson = false;

  /**
   * Set a header object.
   * @param {Object} setHeader
   */
  setHeader = setHeader => {
    header = setHeader;
  };

  /**
   * Add a object to the current header object.
   * @param {Object} addValue
   */
  addToHeader = addValue => {
    header.push(addValue);
  };

  /**
   * Remove a property from the current header object.
   * @param {ObjectPropertyName} removeValue
   */
  removeFromHeader = removeValue => {
    delete removeValue.removeValue;
  };

  /**
   * Reset the header property.
   */
  resetHeader = () => {
    header = {};
  };

  /**
   * Set the URL for a request.
   * @param {String} url
   */
  setUrl = url => {
    this.url = url;
  };

  /**
   * Set the output type as json.
   */
  setOutputAsJson = () => {
    returnJson = true;
  };

  /**
   * Set the output type as a fetch data return.
   */
  setOutputAsFetch = () => {
    returnJson = false;
  };
}
