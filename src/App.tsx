import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(100)

  return ( //びょうがされるとこ
    //npm run dev
    <>
      <header>
        <div className="header-right">部員図鑑ジェネレーター</div>
      </header>
      <div className='Vertical'>
        <div className='form'>
          テスト
        </div>
        <div className='preview'>
          テスト２
        </div>
      </div>
      <div className="card">
        {/* setContで使用した方が処理が早い？  */}
        <button onClick={() => setCount((count) => count + 6)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
