/**
 * Created by Emily on 15/02/16.
 */
App.ReserveInfo= React.createClass({


    render(){
      return(
          <div className="col-md-3 col-sm-12">
              <h2 className="details-title">素味平生</h2>

              <p className="details-intro">南普陀寺的“天下第一素宴”在北京也可以吃到啦</p>

              <h5>RMB188元/1位</h5>
              <div className="detail-content">
                  <div className=" col-md-12 col-sm-6">
                      <input className="theme-btn" value="Fri. Mar 11th 8:00PM">  </input>
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

      );
    }
})