//  JRSet.js 1.0d1
//      Copyright (c) 2009 Jonathan 'Wolf' Rentzsch: <http://rentzsch.com>
//      Some rights reserved: <http://opensource.org/licenses/mit-license.php>
//      
//  A simple implemention of a Set in javascript.
//
//  Compatibility: IE 6-8, Firefox 3-3.5, Safari 3-4, Chrome 3.

jQuery.pkg('JRSet-1.0d1.pkg.js', {
    require: 'http://cloud.github.com/downloads/rentzsch/Math.uuid.js/Math.uuid.js-1.4.pkg.js',
    init: function(){
        JRSet = function JRSet(sourceArray){
            this._elements = {};
            this._length = 0;
            if (sourceArray !== undefined) {
                this.addFromArray(sourceArray);
            }
        }
        JRSet.prototype.contains = function(element){
            if (typeof element === 'string') {
                return element in this._elements;
            } else {
                if (element.__uuid__ === undefined) {
                    return false;
                } else {
                    return element.__uuid__ in this._elements;
                }
            }
        }
        JRSet.prototype.add = function(element){
            var uuid = element;
            
            if (typeof element !== 'string') {
                if (element.__uuid__ === undefined) {
                    element.__uuid__ = Math.uuid();
                }
                uuid = element.__uuid__;
            }
            
            if (!(uuid in this._elements)) {
                this._elements[uuid] = element;
                this._length++;
            }
        }
        JRSet.prototype.remove = function(element){
            var uuid = element;
            
            if (typeof element !== 'string') {
                if (element.__uuid__ === undefined) {
                    return; // Couldn't be in set since we annotate all non-strings.
                }
                uuid = element.__uuid__;
            }
            
            if (uuid in this._elements) {
                delete this._elements[uuid];
                this._length--;
            }
        }
            
        JRSet.prototype.length = function(){
            return this._length;
        }
        JRSet.prototype.toArray = function(){
            var elementKey,
                result = [];
            
            for (elementKey in this._elements) {
                result.push(this._elements[elementKey]);
            }
            return result;
        }
        JRSet.prototype.addFromArray = function(array){
            var arrayIndex = 0;
            
            for (; arrayIndex < array.length; arrayIndex++) {
                this.add(array[arrayIndex]);
            }
        }
        JRSet.unique = function(array){
            return (new JRSet(array)).toArray();
        }
    }
});