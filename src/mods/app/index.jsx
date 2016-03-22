/**
 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-22.
 */
"use strict";

import {React} from 'base';
let { Component, PropTypes } = React;
let { PureRenderMixin } = React.addons;

import classNames from 'classnames/bind';
import styles from './index.scss';
let cx = classNames.bind(styles);

import Snake from '@mods/snake/index';
import Food from '@mods/food/index';
import Obstacle from '@mods/obstacle/index';

export default class App extends Component {

  static propTypes = {

  };

  /**
   * default props
   */
  static defaultProps = {

  };

  clashObjs = [];//需要进行碰撞检测的区域
  /**
   * init state
   */
  state = {
    unit : 20,//最小单元宽度,蛇体宽度,步长
    snake    : [{
      x : 0,
      y : 5
    },{
      x : 0,
      y : 6
    }],
    foods    : [{x:10,y:30}],
    obstacle : [{x:-1,y:-1,w:100,h:1},{x:-1,y:-1,w:1,h:100}],
    gameState : 'play'
  };
  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this._refreshClashObject();
  }

  /**
   * 初始化state
   * @returns {*}
     */
  getInitialState() {
    return this.props;
  }

  /**
   * 吃食
   * @param food
     */
  eat(food){
    var foods = this.state.foods;
    var indexOf = function(arr,target){
      let result = -1;
      arr.some((item,index) => {
        if(target.x === item.x && target.y === item.y){
          result = index;
        }
      })
      return result;
    }
    this.setState({foods : foods.splice(indexOf(foods,food),1)});
    this.state.snake.unshift(food);

  }

  /**
   * 每一次移动调用,碰撞检测
   * @param newPos
     */
  handleMove(newPos){
    var clashObj = this._detectClash(newPos);
    if(clashObj){//如果发生碰撞则停止
      if(clashObj.type === "obstacle"){
        this.setState({
          gameState : "stop"
        });
      }else if(clashObj.type === "food"){
        this.eat(newPos);
      }
    }
  }

  /**
   * 撞击到障碍物
   */
  handleClash(){

  }

  /**
   * 蛇和食物,障碍物的碰撞,返回碰撞物体
   * @param target
   * @returns {*}
   * @private
     */
  _detectClash(target){
    var result = null;
    this.clashObjs.some(clashObj => {
      if(this._isRegionOverlap(this._parseClashObj(target,'snake'),clashObj)){
        result = clashObj;
        return true;
      }
    });
    return result;
  }

  /**
   * 重新计算可碰撞物体位置
   * @private
     */
  _refreshClashObject(){
    this.clashObjs=[];
    this.clashObjs = this.state.foods.map(food => {
      return this._parseClashObj(food,'food');
    }).concat(this.state.obstacle.map(obstacle =>{
      return this._parseClashObj(obstacle,'obstacle');
    }));
  }
  /**
   * 将原始食物和障碍物转化为对象
   * @param obj
   * @param type
   * @private
     */
  _parseClashObj(obj,type){
    var unit = this.state.unit
    obj.w = obj.w || 1;
    obj.h = obj.h || 1;
    obj.type = type;
    obj.left = obj.x * unit;
    obj.top = obj.y * unit;
    obj.right = (obj.x+obj.w) * unit;
    obj.bottom = (obj.y+obj.h) * unit;
    return obj;
  }

  /**
   * 检测两个矩形是否碰撞
   * @param region1
   * @param region2
   * @returns {boolean}
     * @private
     */
  _isRegionOverlap(region1, region2) {
    var min = Math.min;
    var max = Math.max;
    var left   = max(region1.left,region2.left);
    var top    = min(-region1.top,-region2.top);
    var right  = min(region1.right,region2.right);
    var bottom = max(-region1.bottom,-region2.bottom);
    return right > left && top >  bottom;
  }
  render() {
    return (
      <div>
        <Snake gameState={this.state.gameState} unit={this.state.unit} model={this.state.snake}  onMove={this.handleMove.bind(this)} onClash={this.handleClash} />
        <Food gameState={this.state.gameState} model={this.state.foods}  unit={this.state.unit}/>
        <Obstacle gameState={this.state.gameState} model={this.state.obstacle}  unit={this.state.unit}/>
      </div>
    );
  }
}
