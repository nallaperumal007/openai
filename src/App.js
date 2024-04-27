
import React, { useState } from 'react'

export default function App() {

  const [content, setContent] = useState('')
  const [summary, setSummary] = useState('')


  const summarize = async () => {
    const apiUrl = 'https://api.openai.com/v1/chat/completions'
    const apiKey = 'YOUR_API_KEY'
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }

    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant. and you have to summarize the text provided by the user.' },
        { role: 'user', content }
      ]
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    })

    const result = await response.json()
    const summary = result.choices[0].message.content

    setSummary(summary)

  }

  return (
    <>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl">AyyazTech</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/"  className="mr-5 hover:text-gray-900">First Link</a>
      <a href="/"  className="mr-5 hover:text-gray-900">Second Link</a>
      <a href="/"  className="mr-5 hover:text-gray-900">Third Link</a>
      <a href="/"  className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button 
    
    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      
    </button>
  </div>
</header>



<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">AI Summarization Tool</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        This is a simple AI summarization tool that can summarize any text into a few sentences. Just paste the text in the box below and click the button to get the summary.
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
       
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Content</label>
            <textarea 
              value={content}
              onChange={e => setContent(e.target.value)}
            id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button   onClick={summarize} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Summarize</button>
        </div>
    
      </div>
    </div>
  </div>
</section>

    {/* Summary */}
<hr />
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Summary</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        {summary}
      </p>
    </div>
  </div>
</section>

    </>
  )
}