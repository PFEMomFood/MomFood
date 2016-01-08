/**
 * Created by Emily on 08/01/16.
 */
App.ConnModal=React.createClass({
        render(){
            return (
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
                    <div className="modal-dialog" >

                            <App.LoginForm></App.LoginForm>
                            <App.RegisterForm></App.RegisterForm>

                    </div>
                </div>
            );
        }


    }
)