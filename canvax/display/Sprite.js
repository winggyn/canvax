/**
 * Canvax
 *
 * @author 释剑 (李涛, litao.lt@alibaba-inc.com)
 *
 * 模拟as3 中 的sprite类，目前还只是个简单的容易。
 */


KISSY.add(function(S , DisplayObjectContainer , Base){
  var Sprite = function(){
      var self = this;
      self.type = "sprite";
      arguments.callee.superclass.constructor.apply(this, arguments);
  };

  Base.creatClass(Sprite , DisplayObjectContainer , {
      init : function(){
      
      }
  });

  return Sprite;

} , {
  requires:[
    "canvax/display/DisplayObjectContainer",
    "canvax/core/Base"
  ]
})
