/**
 * Created by Emily on 15/02/16.
 */
App.ReserveInfo= React.createClass({


    render(){
      return(
          <div className="col-md-3 col-sm-12">
                      <div id="reserveInfo">
                          <h2 className="details-title">{this.props.reserveInfo.title}</h2>

                          <p className="details-intro">{this.props.reserveInfo.description}</p>

                          <h5>€{this.props.reserveInfo.price}/person</h5>
                          <div className="detail-content">
                              <div className=" col-md-12 col-sm-6">
                                  <div className="theme-btn" >{this.props.reserveInfo.start.toDateString()} </div>
                              </div>
                              <div className=" col-md-12 col-sm-3">
                                  <select className=" theme-btn" >
                                      <option >1 guests</option>
                                      <option >2 guests</option>
                                      <option >3 guests</option>
                                  </select>
                              </div>
                              <div className="col-md-12 col-sm-3">
                                  <button className="col-md-12 col-sx-3 submit-btn ">Book now</button>
                              </div>
                          </div>


                      </div>

          </div>

      );
    }
})