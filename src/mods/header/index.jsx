/**
 * Created by 舒克<shuke.cl@taobao.com> on 2016-3-21.
 * Header module
 */

import { React } from 'base';
const { Component, PropTypes } = React;
const { PureRenderMixin } = React.addons;

import classNames from 'classnames/bind';
import styles from './index.scss';
const cx = classNames.bind(styles);

export default class PageHeader extends Component {

  static propTypes = {
    /**
     * 标题
     */
    title: PropTypes.string,

    /**
     * 副标题
     */
    subTitle: PropTypes.string
  };

  /**
   * default props
   * @type {{title: string, subTitle: string}}
   */
  static defaultProps = {
    title: 'H5 ES6 + React Snake Demo',
    subTitle: 'Go!Go!Go'
  };

  /**
   * @constructor
   */
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  /**
   * init state
   * @type {{highlighted: boolean}}
   */
  state = {
    highlighted: false
  };

  handleCheckChange(event) {
    event.preventDefault();
    this.setState({
      highlighted: !this.state.highlighted
    });
  }

  render() {
    const highlighted = this.state.highlighted;

    // 动态合并 className
    const labelClassNames = cx({
      root: true,
      highlighted
    });

    return (
      <div className={labelClassNames}
        ref="headerContainer"
        onTouchTap={this.handleCheckChange}>
        <h2 className={styles.title}>{this.props.title}</h2>
        <h4 className={styles.subTitle}>{this.props.subTitle}</h4>
      </div>
    );
  }
}
