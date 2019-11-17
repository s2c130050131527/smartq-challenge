import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { menuAction } from '../actions/menuAction';
import Item from './Item';
import { disabled } from '../utils';

class Menu extends React.Component {
  static getDerivedStateFromProps = (nextProps,prevState) => {
    if(nextProps.menu.loading !== prevState.loading && nextProps.menu.flag){
      return {
        menuList: nextProps.menu.data,
      }
    }
    return null;
  }
  state = {
    menuList: [],
    loading: true,
  };

  componentDidMount() {
    this.props.menuAction();
  }


  render() {
    let {menuList} = this.state; 
    if(this.props.search){
      menuList = menuList.filter(el => el.itemname.toLowerCase().includes(this.props.search.toLowerCase()))
    }
    console.log(menuList)
    return (
      <div className="main-app">
        <div className="title">Lunch</div>
        <div className="menu-items">
          {menuList.length ?  menuList.map(el => {
            return (
              <Item item={el} key={el.itemname.split(' ').join('_')} disabled={disabled(el.availabletime)}></Item>
            );
          }): <div>No Items Found</div>}
        </div>
      </div>
    );
  }
}

Menu.propTypes ={
  menuAction: PropTypes.func,
  menu:PropTypes.object,
  search: PropTypes.string,
}

const mapStateToProps = state => ({
  menu: state.menuReducer,
  search: state.searchChangeReducer
});

export default connect(mapStateToProps, { menuAction })(Menu);
