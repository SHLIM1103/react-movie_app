import React from 'react'
import PropTypes from 'prop-types'

const foodILike = [
  {
    id: 1,
    name: "김치",
    image: "https://i.pinimg.com/originals/61/df/8b/61df8bd2286b87ba9d7605a20c0f909d.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "삼겹살",
    image: "https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304",
    rating: 2.8
  },
  {
    id: 3,
    name: "쭈꾸미",
    image: "https://blog.kakaocdn.net/dn/dh9Dqr/btqzsWLoYqY/KgEhm09QyxfW29QfeWlkWk/img.png",
    rating: 4.1
  },
  {
    id: 4,
    name: "부침개",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/10/02/afc71dd02e34f835bdacefe72272f37d1.jpg",
    rating: 4.9
  }
]

const Food = ({ name, pic, rating }) => {
  return (
    <div>
      <h2>I like {name} ❤️</h2>
      <h4>📊 {rating} /5.0</h4>
      <img src={pic} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const App = () => {
  return (
    <div>
      <h1>Hello React !</h1>
      {foodILike.map(dish => (
        <Food key={dish.id}
        name={dish.name}
        pic={dish.image}
        rating={dish.rating} />
      ))}
    </div>
  )
}

export default App
