/**
 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-23.
 */
"use strict";

// Import Base
let win = window;
let doc = document;
/**
 * @desc widgets
 */
export default {
  randomInt : function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getWindowRegion : function(){
    let documentEle  = doc.documentElement;
    return {
      width   : win.innerWidth,
      height  : win.innerHeight,
      left : win.scrollX,
      top  : win.scrollY
    }
  },
  /**
   * 获取游戏画布大小和位置
   */
  getLayerPosition(margin=0.9){
    let winRegion = this.getWindowRegion();
    let result = {};
    let unit = 0;
    result.width = winRegion.width * margin;
    result.height = winRegion.height * margin;
    unit = this.calculateUnit(result);
    result = Object.assign(result,{
      width  : result.width - result.width % unit,
      height : result.height - result.height % unit,
      left   : (winRegion.width - result.width)/2,
      top    : (winRegion.height - result.height)/2,
      unit   : unit,
      maxX   : Math.floor(result.width /  unit),
      maxY   : Math.floor(result.height / unit)
    })
    return result;
  },
  calculateUnit : function(region){
    const BEST_SCENCE_UNIT_COUNT= 10;//最大变的步长为50步
    let minBorder = Math.min(region.width,region.height);
    return Math.floor(minBorder/BEST_SCENCE_UNIT_COUNT);
  },
  /**
   * 随机创建一批食物
   * @param w
   * @param h
   * @param count
     */
  randomGenFoods : function(maxX,maxY,count) {
    let result = [];
    while(count>0){
      count --;
      result.push(Object.assign(this.createUniquePoint(maxX,maxY,result),{
        type : 'food'
      }));
    }
    return result;
  },
  /**
   * 生成一个唯一的XY坐标点
   * @param maxX
   * @param maxY
     */
  createUniquePoint(maxX,maxY,usedPoints){
    let randomXY = function (maxX,maxY) {
      return {
        x : this.randomInt(0,maxX),
        y : this.randomInt(0,maxY)
      };
    }.bind(this);
    let inArray = function(arr,pos){
      let result =  arr.findIndex(function (item) {
        return item.x === pos.x && item.y === pos.y;
      });
      return result >= 0;
    };
    var _point = randomXY(maxX,maxY);
    if(inArray(usedPoints,_point)){
      this.createUniquePoint.apply(this,this.arguments);
      return false;
    }
    return _point;
  }
}
