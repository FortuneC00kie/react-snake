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
    foodModel : [
      {
        x:100,
        y:100
      }
    ]

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

    return (
      <p>Demo</p>
    );
  }
}
