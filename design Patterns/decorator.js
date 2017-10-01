/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-08 09:29:28
 * @version $Id$
 */
Sale.prototype.decorate = function(decorator){
    var F = function(){},
    		overrides = this.constructor.decorators[decorator],
    		i,newobj;
    F.prototype = this;
    newobj = new F();
    newobj.uber = F.prototype;
    for(i in overrides){
        if(overrides.hasOwnProperty(i)){
            newobj[i] = overrides[i];
        }
    }
    return newobj;
}
Sale.decorators.cdn = {
    getPrice: function () {
        return this.uber.getPrice().toFixed(2);
    }
};