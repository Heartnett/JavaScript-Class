/**
 * Class object.
 */
var Class = (function() {

  /**
   * Used to extend the supplied source object with a single object.
   * @param (Object) source object to be extended.
   * @param (Object) value used to extend the supplied source object.
   */
	var _extendOne = function(source, value) {
    if(source === undefined || value === undefined) return;
    if(Array.isArray(value)) return;
    
    Object.keys(value).forEach(function(key) {
      source[key] = value[key];
    });
  };
    
  /**
   * Used to extend the supplied source object with either a single object or with an array of objects.
   * @param (Object) source object to be extended.
   * @param (Object[]|Object) value(s) used to extend the supplied source object.
   */
	var __extend = function(source, value) {
    if(source === undefined || value === undefined) return;
    
    if(typeof value === "object") {
      _extendOne(source, value);
    } 
    else if(Array.isArray(value)) {
      value.forEach(function(item) { 
        _extendOne(source, item);
      });
    }
    return source;
  };
    
  /**
   * The constructor of the Class object.
   * @param (object) [data] the optional object used to initialize a new instance of the class object.
   */
  var constructor = function(data) {
    if(data !== undefined) {
      __extend(this, data);
    }
  };
  
  /**
   * Extends the constructor function with a utility function.
   */
  _extendOne(constructor, {
  
    /**
     * Used to define a class type.
     */
    define: function() {
      return constructor;
    }
  });
  
  return constructor;
}());
