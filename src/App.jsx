
import { useState } from 'react';
import './App.css'
import Editor from './views/editor';
import View from './views/view';
import { ContentProvider } from './context/content';

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
    <ContentProvider value={{content,setContent}}>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 h-screen ">
        <div className="bg-gray-600 	sm:grid-cols-1"><Editor  /></div>
        <div className={`flex content-center flex-wrap  bg-[url('${content.bgImage}')]  bg-[length:100%_100%]   bg-no-repeat lg:col-span-2 sm:grid-cols-1`}> <View/></div>
      </div>
      </ContentProvider>
    </>
  )
}

export default App
