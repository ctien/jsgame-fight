(() => {
  //Constant
  /**
   * something is constant
   */
  function Factory() {}
  //Getter: chuyển về prototype để tối ưu bộ nhớ
  var _proto = Factory.prototype;
  //Public
  _proto.somethingIsPublic = () => {};
  //Private
  _proto._somethingIsPrivate = () => {};
  //Static
  
  return Factory;
})();
