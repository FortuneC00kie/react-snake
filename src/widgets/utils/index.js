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
      width    : win.innerWidth,
      height    : win.innerHeight,
      left : win.scrollX,
      top  : win.scrollY
    }
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
  randomGenFoods : function(w,h,count) {
    let result = [];
    while(count>0){
      count --;
      result.push({
        x : this.randomInt(0,w),
        y : this.randomInt(0,h)
      })
    }
    return result;
  }

}
