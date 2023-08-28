// eslint-disable-next-line no-unused-vars
import React from 'react'

const Main = () => {
  return (
    <main className="container">
      <section className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <section className="btn">
          <button className="btn1">Shop Now</button>
          <button className="btn2">Category</button>
        </section>

        <section className="shop">
          <p>Also Available On</p>

          <section className="brand_icon">
            <img src="/public/images/flipkart.png" alt="" />
            <img src="/public/images/amazon.png" alt="" />
          </section>
        </section>
      </section>

      <section className="image">
        <img src="/images/shoe_image.png" alt="shoe image" />
      </section>
    </main>
  );
}

export default Main