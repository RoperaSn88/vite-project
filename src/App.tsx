import { useState } from 'react'
import './App.css'
import baseImage from "./assets/base.png";

//がちで、コピペ。
export const ImageComponent = () => {
  const [base64Images, setBase64Images] = useState<string[]>([]);

  const handleInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }

    // FileListのままだとforEachが使えないので配列に変換する
    const fileArray = Array.from(files);

    fileArray.forEach((file) => {
      // ファイルを読み込むためにFileReaderを利用する
      const reader = new FileReader();
      // ファイルの読み込みが完了したら、画像の配列に加える
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result !== "string") {
          return;
        }
        setBase64Images((prevImages) => [...prevImages, result]);
      };
      // 画像ファイルをbase64形式で読み込む
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="relative border-2 border-red-200 bg-red-100 w-[600px] h-[600px] flex flex-col space-y-4">
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={handleInputFile}
      />
      {/* アイコンを表示 */}
      <div className="preview-icon">
        <div className="flex space-x-4 overflow-x-auto py-4">
          {base64Images.length !== 0 &&
            base64Images.map((image, idx) => (
              <div key={idx} className="flex-shrink-0">
                <img src={image} className="preview-icon" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(1)

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
          <img width="800" height="450" src={baseImage}></img>
          <ImageComponent></ImageComponent>
          <p className='preview-class'>世代</p>
          <p className='preview-name'>名前</p>
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
