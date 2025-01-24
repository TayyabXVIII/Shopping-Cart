import { useState } from 'react'
import { Route, Routes,Link } from 'react-router-dom'

import './App.css'
import SearchComponent from './Components/SearchComponent'
import ShowCourseComponent from './Components/ShowCourseComponent'
import UserCartComponent from './Components/UserCartComponent'

function App() {
  const [courses , setCourses] = useState([
  { id:1,
    name: "T-shirt",
    price: 499,
    image:"https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png"
  },
  {
    id:2,
    name: "Bag",
    price: 699,
    image:"https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg"
  },
  {
    id:3, 
    name: "Hoodie",
    price: 799,
    image:"https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg"
  }
])
const [cartCourses,setCartCourses]=useState([]);
const [searchCourse,setSearchCourse]=useState("");

const addCourseToCartFunction = (NEWcourse) => {
  const alreadyCourses = cartCourses.find((item) => item.product.id === NEWcourse.id);
  if(alreadyCourses){
    const latestCartUpdate = cartCourses.map(item => 
      item.product.id === NEWcourse.id ? {
        ...item, quantity:item.quantity + 1}:item)
        setCartCourses(latestCartUpdate);
  }else{
    setCartCourses([...cartCourses, {product:NEWcourse, quantity:1}])
  }
}

const deleteCourseFromCartFunction = (NEWcourse) => {
    const UpdatedCart = cartCourses.filter(item => item.product.id !== NEWcourse.id);
    setCartCourses(UpdatedCart); 
}

const totalAmountCalculationFunction = () => {
  return cartCourses.reduce((total,item) =>
    total + item.product.price * item.quantity,0);
};

const courseSearchUserFunction = (event) =>{
  setSearchCourse(event.target.value);
}

const filterCourseFunction = courses.filter((course) => 
course.name.toLowerCase().includes(searchCourse.toLowerCase()));



return(
  <div className='App'>
    <SearchComponent 
      searchCourse={searchCourse}
      courseSearchUserFunction={courseSearchUserFunction}
    />
     
      <Routes className='App-main'>
        <Route path='/Home' element={
          <ShowCourseComponent
            courses={courses} 
            addCourseToCartFunction={addCourseToCartFunction}
            filterCourseFunction={filterCourseFunction}
          />}
        />

        <Route path='/MyCart' element={
          <UserCartComponent 
          cartCourses={cartCourses}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          totalAmountCalculationFunction={totalAmountCalculationFunction}
          setCartCourses={setCartCourses}
          />}
        />    
      </Routes>

      

  </div>
);
}


export default App

