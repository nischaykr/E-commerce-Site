import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corrupti et ducimus consectetur voluptate rerum voluptatem ea amet id laudantium cupiditate, numquam commodi aspernatur quod pariatur eveniet repellat quia cum.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus, illum dicta iste necessitatibus, eos nemo minima id magnam quaerat obcaecati nam totam exercitationem quae ad, alias laboriosam amet ducimus.</p>
          </div>
      </div>

    </div>
  )
}

export default About