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
    var foodNodes = this.props.model.map(function(food){
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
}
