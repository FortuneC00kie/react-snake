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
import Header from '@mods/header/index';
import Food from '@mods/food/index';
import Obstacle from '@mods/obstacle/index';

export default class App extends Component {

  static propTypes = {

  };

  /**
   * default props
   */
  static defaultProps = {
    clashObjs : []//需要进行碰撞检测的区域
  };

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
    obstacle : [{x:-1,y:-1,w:100,h:1}]
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
  handleEat(food){
    this.state.snake.unshift(food);
  }

  /**
   * 移动,碰撞检测
   * @param newPos
     */
  handleMove(newPos){
    debugger;
    this.clashObjs.some(clashObj => {
      console.log(this._isRegionOverlap(this._parseClashObj(newPos,'snake'),clashObj));
    })

  }

  /**
   * 撞击到障碍物
   */
  handleClash(){

  }
  _detectClash(objs,target){

  }

  /**
   * 重新计算可碰撞物体位置
   * @private
     */
  _refreshClashObject(){
    this.clashObjs=[];
    this.clashObjs.concat(this.state.foods.map(food => {
      return this._parseClashObj(food,'food');
    }));
    this.clashObjs.concat(this.state.obstacle.map(obstacle =>{
      return this._parseClashObj(obstacle,'obstacle');
    }))
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
        <Snake unit={this.state.unit} model={this.state.snake} onEat={this.handleEat} onMove={this.handleMove} onClash={this.handleClash} />
        <Food model={this.state.foods}  unit={this.state.unit}/>
        <Obstacle model={this.state.obstacle}  unit={this.state.unit}/>
      </div>
    );
  }
}
