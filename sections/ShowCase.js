import { Showcase, showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <br />
            <Title title='Fresh ideas. Bold design. Smart realisation.' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {Showcase.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
         
        </div>
      </section>
    </>
  )
}

export default ShowCase
