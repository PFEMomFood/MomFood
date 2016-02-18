/**
 * Created by Emily on 16/02/16.
 */
App.HostInfo=React.createClass({
    render(){
        return(
            <div className="profileContainer col-md-9 col-sm-12">
                <header className="menuTitle ">
                    {this.props.host.profile.firstName+" "+this.props.host.profile.lastName}
                </header>
                <div className="profilePhoto col-md-6 col-sm-12">
                    <img src="/host2.jpg" alt=""/>
                </div>
                <div className="profileDesp col-md-6 col-sm-12">
                    <p className="hostDesp">
                        {this.props.host.profile.description}
                    </p>
                </div>
            </div>
        );
    }
})