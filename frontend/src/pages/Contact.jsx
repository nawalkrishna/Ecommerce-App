import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t uppercase'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600 '>Our Store</p>
          <p className='text-gray-500'>Kerala, India <br/> Kannur South, Kerala</p>
          <p className='text-gray-500'>Tel: (+91) 8138063728 <br/> Email: info@forever.com</p>
          <p className='font-semibold text-xl text-gray-600 '>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='bg-white text-black border px-4 py-2'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact