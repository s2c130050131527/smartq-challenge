import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { menuAction } from '../actions/menuAction';
import Item from './Item';

class Menu extends React.Component {
  static getDerivedStateFromProps = (nextProps,prevState) => {
    if(nextProps.menu.loading !== prevState.loading && nextProps.menu.flag){
      return {
        menuList: nextProps.menu.data,
      }
    }
  }
  state = {
    menuList: [],
    loading: true,
  };

  componentDidMount() {
    this.props.menuAction();
  }


  render() {
    return (
      <div className="main-app">
        <div className="title">Lunch</div>
        <div className="menu-items">
          {this.state.menuList.map(el => {
            return (
              <Item item={el} key={el.itemname.split(' ').join('_')}></Item>
            );
          })}
        </div>
      </div>
    );
  }
}

Menu.propTypes ={
  menuAction: PropTypes.func,
  menu:{
    data:[],
    loading: false,
    flag: false,
    error:false,
  }
}

const mapStateToProps = state => ({
  menu: state.menuReducer
});

export default connect(mapStateToProps, { menuAction })(Menu);
