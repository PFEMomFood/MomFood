/**
 * Created by Emily on 20/02/16.
 */

App.WishCard = React.createClass({

    render()
    {
        return (
            <div className="eventContainer col-md-4 col-sm-6 col-xs-12">
                <div className="view view-first ">
                    <a href={"/events/"+this.props.eventData._id} className='eventCard'>
                        <img src={this.props.eventData.images[0]} alt=""/>
                        <div className="mask">
                            <h2>{this.props.eventData.title}</h2>
                            <p>{this.props.eventData.description}</p>
                            <h4 className='card-foot'>{this.props.eventData.price}€ per person</h4>
                        </div>
                    </a>
                </div>
                <div className="card-brief">

                    <div className="card-brief-item "><span>{this.props.eventData.start.toDateString()}</span></div>
                    <div className="card-brief-item item-right "><span>{this.props.eventData.address.city}</span></div>
                </div>
            </div>
        );
    }
});
