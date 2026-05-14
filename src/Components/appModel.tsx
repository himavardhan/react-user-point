import React, { Fragment } from 'react';

type openModel = {
    open?:boolean;
    close:()=> void;
}

const AppModel:React.FC<openModel> = (props:openModel) => {

    return <Fragment>
      { props.open &&  <Fragment> <div  style={{position: 'absolute', top:0, left: 0,right:0, bottom:0, backgroundColor:'blue',color:'white',opacity: 0.5,zIndex:9}}>
            This is for Model
        </div>

        <div  tabIndex={0} aria-labelledBy='modelTitle' style={{position: 'absolute', minHeight:'200px', top:50, left: 20,right:20, backgroundColor:'white',color:'black',zIndex:99}}>
         <h3 id='modelTitle' > This is model Title </h3>
         <span  role='Close Model' onClick={() => props.close()} style={{float:'right',marginTop:'-50px',marginRight:'10px'}} aria-label='Close Model'> X </span>
            {/* Content goes here */}
            hello content
        </div> 
        </Fragment>
        }
    </Fragment>

}

export default AppModel;
