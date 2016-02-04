/**
 * Created by Cedric on 06/01/16.
 */
App.header = React.createClass({
    handleClick: function(){
        $("#search-overlay").css({visibility:"visible",opacity:0.98});
    },
    render(){
        return(
            <div id="header"  ref={function(ref){this.header = ref}}>
                <div className='container'>
                    <div className="header-text header-item header-item-left">Homepage</div>
                    <div className="header-item" id="logo"><img src="logo.png" alt=""/></div>
                    <i className="fa fa-search header-item header-item-right header-icon header-search-icon" onClick={this.handleClick}></i>
                    <i className="fa fa-spoon margin-bar header-item header-item-right header-icon"></i>
                    <div className="header-text header-item header-item-right">
                        {
                            this.props.currentUser? <App.LogoutButton currentUser={this.props.currentUser}/> :<a onClick={this.props.handleShowModal} href="#">
                                Connection</a>
                        }
                    </div>
                </div>


            </div>
        )
    },
    propTypes:{
        handleShowModal: React.PropTypes.func.isRequired
    }
})