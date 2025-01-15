import React from 'react'
import FeatureCard from './FeatureCard'
import Affordable from '../../../../assets/Login/affordable_price.svg'
import Insight from '../../../../assets/Login/insightful.svg'
import Ranking from '../../../../assets/Login/all_india_ranking.svg'
import Solution from '../../../../assets/Login/detailed_solutions.svg'
import Quality from '../../../../assets/Login/best_quallity.svg'
import Learning from '../../../../assets/Login/adaptive_learning.svg'

const Features = () => {
    const Card = [
      {id:1, img: Affordable, title:'Affordable Pricing', desc:'We know money matters and that is why we have made our products affordable for all without the need for heavy discounts.'},
      {id:2, img: Insight, title: 'Insightful Personalized Analytics', desc:'Analytics work when they are insightful and actionable. We bring just that and tell you in simple terms where you need to focus.'},
      {id:3, img: Ranking, title: 'All India Ranking', desc:'Comparison with thousands of test takers all over the country gives you a better idea about your preparation and progress'},
      {id:4, img: Solution, title: 'Detailed Solutions', desc:'Elaborate solutions to every question help you understand your mistakes and in improving your future performance'},
      {id:5, img: Quality, title:'Best Quality Content', desc:'Our content is what brings people back to us every time. We continuously research and try to outperform ourselves and everyone else'},
      {id:6, img: Learning, title:'Adaptive Learning', desc:'Your learning must reflect your preparation. Adaptive Learning helps you start from the level you are at and then takes you higher'},
    ] 
  return (
    <div className='bg-purple-100 flex flex-col items-center px-[10vw] py-[8vh]'>
        <div className='font-[inter] font-bold text-2xl mb-[10vh]'>
            Why Us?
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-16'>
        {Card.map((card, index) => (
          <FeatureCard
            key={index} 
            img={card.img} 
            title={card.title}
            desc={card.desc}
          />
        ))}
        </div>
      
    </div>
  )
}

export default Features
