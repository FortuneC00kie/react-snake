/**
 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
 */
"use strict";

import {React} from 'base';
let { Component, PropTypes } = React;
let { PureRenderMixin } = React.addons;

import classNames from 'classnames/bind';
import styles from './index.scss';
let cx = classNames.bind(styles);
let indexOfArr = function(arr,target){
  let result = -1;
  arr.some((item,index) => {
    if(target.x === item.x && target.y === item.y){
      result = index;
    }
  })
  return result;
}
export default class Food extends Component {

  static propTypes = {

  };

  /**
   * default props
   */
  static defaultProps = {
    model:[],
    unit : 10
  };

  /**
   * init state
   */
  state = {
    model : this.props.model
  };

  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    var unit = this.props.unit;
    var foodNodes = this.state.model.map(function(food){
      let foodStyle = {
        left : food.x * unit,
        top : food.y * unit,
        width:unit,
        height:unit
      }
      return (
        <div className={styles.food} style={foodStyle}></div>
      )
    });
    return (
      <div>
        {foodNodes}
      </div>
    );
  }

  /**
   * 食物被吃掉
   * @param food
     */
  del(food){
    var foods = this.state.model;
    let foodIndex = indexOfArr(foods,food);
    if(foodIndex < 0){
      return;
    }
    foods.splice(foodIndex,1);//食物消失
    this.setState({model : foods.concat()},function(){
      this.props.onDel();
    });
    if(foods.length < 1){
      this.props.onEmpty();
    }
  }
}
