import React from 'react';

var Menu = React.createClass({

    clicked: function(m){

        var item = m.toLowerCase();
        var element = document.getElementById(item);
        var y = element.offsetTop;
        var headerHeight = 50;
        window.scrollTo(0,y-headerHeight);

    },

    render: function() {

        var self = this;

        return (
            <div className="row main-men-bar">
                <ul className="menu-list" >{ this.props.items.map(function(m, index){

                    return <li className="menu-item" key={index} onClick={self.clicked.bind(self, m)}>{m}</li>;

                }) }

                </ul>
            </div>
        );

    }
});

export default Menu



