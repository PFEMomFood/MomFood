/**
 * Created by Emily on 16/02/16.
 */
App.HostInfo=React.createClass({
    render(){
        return(
            <div className="profileContainer col-md-9 col-sm-12">
                <header className="menuTitle ">About the host</header>
                <div className="profilePhoto col-md-6 col-sm-12">
                    <img src="/host2.jpg" alt=""/>
                </div>
                <div className="profileDesp col-md-6 col-sm-12">
                    <p className="hostDesp">Bonjour!
                        Since I was a girl, I’ve dreamed of all things French: the fashion, the art, the history, but most of all the food.
                        To uncover the magic of French cuisine, I recently traveled for six months throughout France,
                        determined to discover and bring home a bit of that je ne sais quoi in French cuisine.
                        I studied under Susan Herrmann Loomis, one of the most renowned authorities on French cooking.
                        While living in Susan’s 14th-century home for a month, I assisted her with tastings and dinner parties and helped test recipes for
                        her upcoming book, In a French Kitchen (ask me about the time I burned the apple compote and the lesson I learned). Outside a French
                        village, I harvested and sold produce at the farmers market with Baptiste, an organic farmer, who delivers vegetables and fruit daily to
                        Michelin-starred restaurants.
                    </p>
                </div>
            </div>
        );
    }
})