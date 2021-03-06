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
  /**
   * init state
   */
  state = {
    unit : this.props.unit,//最小单元宽度,蛇体宽度,步长
    snake    : this.props.snake,
    foods    : Util.randomGenFoods(this.props.gameRegion.maxX,this.props.gameRegion.maxY,this.props.foodsCount),
    obstacle : [{x:-1,y:-1,w:100,h:1},{x:-1,y:-1,w:1,h:100}], //障碍物
    gameState : "unstart"
  };
  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
      }else if(clashObj.type ==='outside'){
        this.setState({gameState:'fail'},function(){
          console.log('撞到边界了');
          this.gameOver();
        });
      }
    }
  }


  /**
   * 蛇和食物,障碍物,边界的碰撞,返回碰撞物体
   * @param target
   * @returns {*}
   * @private
     */
  _detectClash(target){
    let result = null;
    let posArr = [];
    let {foods,obstacle} = this.state;

    foods = foods.map(food =>{
      food.type = 'food';
      return food;
    });
    obstacle = obstacle.map(obstacleItem => {
      obstacleItem.type = 'obstacle';
      return obstacleItem;
    });
    posArr = foods.concat(obstacle);
    posArr.some(pos => {
      if(pos.x == target.x && pos.y == target.y){
        result = pos;
        return true;
      }
    });
    if(this._isOutside(target)){
      result =  {type:'outside'};
    }
    return result;
  }
  /**
   * 游戏结束
   */
  gameOver(){
    this.refs.snake.stop();
    console.log(this.state.gameState);
  }
  handleFoodEmpty(){
    this.setState({'gameState':'success'}, function () {
      this.gameOver();
    })
  }
  /**
   * 检测是否出边界
   * @param newPos
   * @returns {boolean}
   */
  _isOutside(newPos){
    var gameRegion = this.props.gameRegion;
    if(newPos.x >= gameRegion.maxX || newPos.y >= gameRegion.maxY || newPos.x < 0 || newPos.y < 0){
      return true;
    }
    return false;
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
      <div className={styles.gamescence} style={this.props.scenceStyle}>
        <Snake ref="snake" model={this.state.snake}  unit={this.state.unit}  onMove={this.handleMove.bind(this)}/>
        <Food ref="food" model={this.state.foods}  unit={this.state.unit} onEmpty={this.handleFoodEmpty.bind(this)}/>
        <Obstacle ref="obstacle" model={this.state.obstacle}  unit={this.state.unit}/>
      </div>
    );
  }
}
