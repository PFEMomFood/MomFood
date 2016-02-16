/**
 * Created by Emily on 16/02/16.
 */
App.MenuInfo=React.createClass({
   render(){
       return(
           <div className="col-md-9">
               <header className="menuTitle">Menu</header>
               <section>
                   <header className='section_title demo_line'>Entrée</header>
                   <div className="dishContainer">
                       <h3><i className="fa fa-spoon"></i> tastes of the sea</h3>
                       <p>lemon myrtle cured tasmanian salmon, yarra valley salmon caviar vinaigrette
                           poached spencer gulf prawn, black organic quinoa
                           seared hervey bay scallop, potato strings</p>
                   </div>
               </section>

               <section>
                   <header className=' section_title demo_line'>Plat</header>
                   <div className="dishContainer">
                       <h3><i className="fa fa-spoon"></i> herb crusted tasmanian salmon</h3>
                       <p>australian prawn ravioli, wilted kale, radish AND caper salad, saffron beurre noisette</p>
                   </div>

               </section>

               <section>
                   <header className='section_title demo_line'>Déssert</header>
                   <div className="dishContainer">
                       <h3><i className="fa fa-spoon"></i> gianduja semifreddo</h3>
                       <p>chocolate AND hazelnut, praline feuilletine, mango crisp</p>
                   </div>
                   <div className="dishContainer">
                       <h3><i className="fa fa-spoon"></i> banana pudding</h3>
                       <p>caramel sauce, pecan praline, vanilla bean ice-cream</p>
                   </div>
               </section>
           </div>

       )
   }
});