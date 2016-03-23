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
import Util from '@widgets/utils/index';

export default class App extends Component {

  static propTypes = {

  };

  /**
   * default props
   */
  static defaultProps = Object.assign({
    unit : 10,
    scenceStyle : {
      left:0,
      top:0
    }
  });

  clashObjs = [];//需要进行碰撞检测的区域
  /**
   * init state
   */
  state = {
    unit : this.props.unit,//最小单元宽度,蛇体宽度,步长
    snake    : this.props.snake,
    foods    : Util.randomGenFoods(this.props.gameRegion.w,this.props.gameRegion.h,this.props.foodsCount),
    obstacle : [{x:-1,y:-1,w:100,h:1},{x:-1,y:-1,w:1,h:100}],
    gameState : "ing"
  };
  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.refreshClashObject();
  }
  /**
   * 吃食
   * @param food
     */
  eat(food){
    this.refs.snake.eat(food);
    this.refs.food.del(food);
  }

  /**
   * 每一次移动调用,碰撞检测
   * @param newPos
     */
  handleMove(newPos){
    var clashObj = this._detectClash(newPos);
    if(clashObj){//如果发生碰撞则停止
      if(clashObj.type === "obstacle"){//撞到障碍物
        this.setState({gameState:'fail'},function(){
          this.gameOver();
        });

      }else if(clashObj.type === "food"){//撞到食物
        this.eat(newPos);
      }
    }
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
  refreshClashObject(){
    this.clashObjs=[];
    this.clashObjs = this.state.foods.map(food => {
      return this._parseClashObj(food,'food');
    }).concat(this.state.obstacle.map(obstacle =>{
      return this._parseClashObj(obstacle,'obstacle');
    }));
  }

  /**
   * 游戏结束
   */
  gameOver(){
    this.refs.snake.stop();
    console.log(this.state.gameState);
  }
  handleFoodEmpty(){
    this.gameOver('success');
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
      <div style={this.props.scenceStyle}>
        <Snake ref="snake" model={this.state.snake}  unit={this.state.unit}  onMove={this.handleMove.bind(this)} />
        <Food ref="food" model={this.state.foods}  unit={this.state.unit} onDel={this.refreshClashObject.bind(this)} onEmpty={this.handleFoodEmpty.bind(this)}/>
        <Obstacle ref="obstacle" model={this.state.obstacle}  unit={this.state.unit}/>
      </div>
    );
  }
}
