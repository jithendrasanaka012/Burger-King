import React from 'react';
import Nav from './components/Nav';
import Cont from './components/Cont';
import Cards from './components/Cards';
import data from './components/data';
import Cont1 from './components/Cont1';
import Foot from './components/Foot';

class App extends React.Component{


  render(){
      return(
          <>
              <Nav/>
              <Cont/>
             <div  style={
              {
                display:"flex",
                flexWrap:"wrap",
                padding:"20px 160px",
                justifyContent:"space-between",
                // gap:"10px",
                backgroundColor:"#f5ebdc",
                // border:"solid 1px",
                minHeight:"215vh",
                maxHeight:"280vh"
              }
             }>
             {
                data.map((x,y)=>{
                  return(
                   <div key={y}>
                     <Cards img = {x.img} h2={x.h2} p={x.p} a={x.a} button={x.button}/>
                   </div>
                  )
                })
              }
             </div>
             <Cont1/>
             <Foot/>
          </>
      )
  }
}
export default App;
