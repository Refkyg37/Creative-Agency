import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
// import { BlogCard} from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='' caption='Bootcamp' className='logobg' />
          <h1 className='hero-title'>WE BUILD DIGITAL EXPERIENCES</h1>

          <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='BRANDING' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>A digital agency is an advertising agency that has evolved to meet the changing needs of marketing in the digital age1. It offers services in different areas of design, development, software engineering, digital marketing and digital communications2. Digital agencies focus primarily on marketing businesses, products and services in the digital world through website design and development, search engine optimization (SEO), content marketing, paid online advertising, social media, email marketing and other services3. These agencies specialize in helping businesses and individuals establish or boost their online presence and reach their digital goals.</p>
          </div>
          <div className='hero-content grid-4'>
            {/* {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))
            } */}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      {/* <Brand /> */}

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      {/* <BlogCard /> */}
    </>
  )
}

export default Hero
