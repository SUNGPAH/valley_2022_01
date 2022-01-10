import styles from '../styles/Home.module.css'
import axios from 'axios';

/*
export const getLandingCourses = async () => {

  export const getLandingCourses = async () => {
  const res = await fetch('https://api.ringleplus.com/api/v4/student/landing/course?locale=en');
  const data = res.json()
  return data
*/

export default function Sample(){
  return <>
    <div style={{display:'flex', flexDirection:'row',backgroundColor:'pink',
        position:'relative',
    }}>
      <div style={{width:100, height:100, backgroundColor:'red',}}>
        display
      </div>
      <div style={{backgroundColor:'gold', flex:1,}}>
        good1
      </div>
      <div style={{backgroundColor:'black', flex:4,}}>
        good2
      </div>
      <div style={{position:'absolute', left:200, top:30}}>
        성파님 올해 꼭 좋은 일이 있으면 좋겠어요.
      </div>

      <div style={{position:'absolute', left:0, bottom:30}}>
        성파님 올해 꼭 좋은 일이 있으면 좋겠어요.
      </div>

    </div>

   

    <div style={{display:'flex', 
    alignItems: 'flex-end',
    backgroundColor:'green',
    justifyContent:'space-between', flexDirection:'row', }}>
      <div style={{width:100, height:100, backgroundColor:'red',}}>
        display
      </div>
      <div style={{width:100, height:150, backgroundColor:'red',}}>
        justifyContent
      </div>
      <div style={{width:100, height:200, backgroundColor:'red',}}>
        alignItems
      </div>  
    </div>
  

  
    <br/><br/><br/>
    <hr/>
    sample
    <div style={{
      backgroundColor: "red",
      border: "3px solid green",
      border: "3px dotted green",
      borderRadius:20,
      borderTopLeftRadius:50,
      borderTopRightRadius:10,
      width:100,
      height:100,
      padding:20,
    }}>box</div>

    <div style={{
      marginTop:20,
      backgroundColor: "red",
      border: "3px solid green",
      border: "3px dotted green",
      borderRadius:20,
      borderTopLeftRadius:50,
      borderTopRightRadius:10,
      width:100,
      height:100,
      padding:20,
    }}>box</div>

    <span style={{fontSize:30,}}>text</span><span style={{marginLeft:20,}}>dkfjd</span>
    
    <div 
    className={styles.flottingBtn}>
      +
    </div>

    <div className={styles.column}>
      good god
    </div>

  </>
  
}