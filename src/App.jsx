
import { useState } from 'react';
import './App.css'
import Editor from './views/editor';
import View from './views/view';

function App() {
  const [content, setContent] = useState({
    title: "Page Title",
    description: `Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Atque fuga doloremque culpa iste,
     tempora ex necessitatibus, ipsum eveniet repellat
     eos id itaque et aspernatur corrupti, voluptatem 
     sed qui incidunt neque?`,
    btnText: 'Get Started',
    btnUrl: '#',
    bgImage: 'assets/logo.png'
  })

  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2">
        <div className="bg-gray-600 	sm:grid-cols-1"><Editor content={content} changeContent={setContent} /></div>
        <div className="lg:col-span-2 sm:grid-cols-1"> <View content={content} /></div>


      </div>

    </>
  )
}

export default App
