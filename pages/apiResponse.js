
import {useEffect, useState} from 'react';
import axios from 'axios';

function ApiResponse ({categories}) {
  console.log('api response');
  console.log(categories);  
  const [cnt, setCnt] = useState(0);
  const [anotherState, setAnotherState] = useState(0);
  // const [categories, setCategories] = useState([]);

  let sungpah = 'good';
  useEffect(  () => {
    // setTimeout(() => {
    //   alert('haha!');
    // }, 2000)
    // alert('sdf');
    console.log(sungpah);

  }, [sungpah] )

  // useEffect(() => {
  //   axios.get('https://api.ringleplus.com/{module}/{method}')
  // .then(function (response) {
  //   // handle success
  //   console.log(resopnse.data)
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  //   // alert('somehthing went wrong');
  //   // setError(error.toSring())
  // })  
  // }, [])

  useEffect(() => {
  //  fetchLandingCourses();
  }, [])

  // const fetchLandingCourses = () => {
  //   axios.get('https://api.ringleplus.com/api/v4/student/landing/course?locale=en')
  //   .then(function (response) {
  //     // handle success
  //     console.log('response!!!');
  //     console.log(response.data);
  //     setCategories(response.data.categories);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //     alert('somehthing went wrong');
  //     // setError(error.toSring())
  //   })
  //   .then(function () {
  //     // always executed
  //   });
  // }

  // useEffect( () => {
  //   alert('s');
  // }, [anotherState])

  return <>
    <button onClick={e => setCnt(cnt => cnt +1)}>++{cnt}</button>  
    <button onClick={e => {
      sungpah = 'nice';
      setCnt(cnt => cnt + 1);
    }}>change!</button> 

    <button onClick={e => {
      fetchLandingCourses();
    }}>Fetch Landing Courses</button>

    {categories.map((category, index) => {
      return <div key={index}>
        {category.title}

        {category.courses.map((course,index) => {
          return <div key={course.id}>
            {course.subtitle}
            <br/>
            <img src={course.image_url} style={{width:300, height:150,}}/>
          </div>
        })}
      </div>
    })} 
  </>
}

export async function getServerSideProps() {

  const res = await axios.get('https://api.ringleplus.com/api/v4/student/landing/course?locale=en')
  const categories = res.data.categories

  return {
    props: {categories: categories}
  }

}


// export async function getServerSideProps() {
//   const res = await axios.get('https://api.ringleplus.com/api/v4/student/landing/course?locale=en')
  
//   // return {
//   //   redirect: {
//   //     destination: "/",
//   //     permanent: false,
//   //   }
//   // }

//   return { props: { data: res.data } }
// }

export default ApiResponse
