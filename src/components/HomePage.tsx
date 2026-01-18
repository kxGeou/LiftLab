import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Layout from './Layout'
import Product from './Product'
import Testimonials from './Testimonials'

function HomePage() {
  return (
    <Layout>
        <Hero></Hero>
        <About></About>
        <Testimonials></Testimonials>
        <Product></Product>
        <Contact></Contact>
    </Layout>
  )
}

export default HomePage