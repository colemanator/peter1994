/**
 * Created by Peter on 20/01/16.
 */

import React from 'react';

var Button = React.createClass({

    render: function() {
        var target = "";
        if(this.props.tab){
            target = "_blank"
        }

        return <a className="button" href={this.props.url} target={target}>{this.props.text}</a>;
    }
});

export default Button