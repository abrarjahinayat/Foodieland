import React from 'react'
import { Link } from 'react-router'

const Error404 = () => {
  return (
<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Example</title>
  <section className="bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl mb-24 tracking-tight font-extrabold lg:text-9xl text-white">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
          Page not found currently
        </p>
        <p className="mb-4 text-lg font-light text-gray-300">
          Sorry, we can't find such page.
        </p>
        <Link
        to={"/"}
          type="button"
          className="text-white text-center bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-1 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Back To Home
        </Link>
      </div>
    </div>
  </section>
</>

  )
}

export default Error404