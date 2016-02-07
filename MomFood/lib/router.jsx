/**
 * Created by Cedric on 06/01/16.
 */

FlowRouter.route('/',{
    action:function(){
        ReactLayout.render(App.index,
            {content: <App.IndexMain/>} );
    }
})

FlowRouter.route('/events/:eventId',{
    action:function(params){
        ReactLayout.render(App.index,{
            content: <App.EventMain eventId={params.eventId}/>
        })
    }
})

