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
    menuList: this.props.menu,
    loading: true,
  };

  componentDidMount() {
    console.log(this.props);
    this.props.menuAction();
  }


  render() {
    return (
      <div className="main-app">
        <div className="title">Lunch</div>
        <div className="menu-items">
          {this.state.menuList.map(el => {
            return (
              <Item item={el} key={el.itemname.split(' ').join('_')} disabled={disabled(el.availabletime)}></Item>
            );
          })}
        </div>
      </div>
    );
  }
}

Menu.propTypes ={
  menuAction: PropTypes.func,
  menu:PropTypes.array
}

Menu.defaultProps = {
  menu: [
    {
      "itemname": "idli",
      "availabletime": "7:00-11:00,17:00-22:00",
      "price": 20
    },
    {
      "itemname": "vada",
      "availabletime": "7:00-11:00,17:00-22:01",
      "price": 15
    },
    {
      "itemname": "rava idli",
      "availabletime": "7:00-11:00,17:00-22:02",
      "price": 35
    },
    {
      "itemname": "set dosa",
      "availabletime": "7:00-11:00,17:00-22:03",
      "price": 30
    },
    {
      "itemname": "ghee dosa",
      "availabletime": "7:00-11:00,17:00-22:04",
      "price": 40
    },
    {
      "itemname": "pongal",
      "availabletime": "7:00-11:00,17:00-22:05",
      "price": 50
    },
    {
      "itemname": "medu vada",
      "availabletime": "7:00-11:00,17:00-22:06",
      "price": 15
    },
    {
      "itemname": "upma",
      "availabletime": "7:00-11:00,18:00-22:07",
      "price": 30
    },
    {
      "itemname": "idiyappam",
      "availabletime": "7:00-11:00,17:00-22:08",
      "price": 10
    },
    {
      "itemname": "uttapam",
      "availabletime": "7:00-11:00,17:00-22:09",
      "price": 20
    },
    {
      "itemname": "puttu",
      "availabletime": "7:00-11:00,17:00-22:10",
      "price": 30
    },
    {
      "itemname": "rice bath",
      "availabletime": "7:00-11:00,17:00-22:11",
      "price": 50
    }
  ]
}

const mapStateToProps = state => ({
  search: state.searchReducer,
  // menu: state.menuReducer
});

export default connect(mapStateToProps, { menuAction })(Menu);
