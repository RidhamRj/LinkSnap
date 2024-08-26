import { useState } from "react";
// import Error from "./components/Error";
// import './App.css'

function App() {
  const [inputURL, setInputURL] = useState(null);
  const [outputURL, setOutputURL] = useState(null);
  function urlSubmit() {
    if (!inputURL){
      alert('enter url/valid url')
      return
    }
    const fetchURL = `https://api.tinyurl.com/create?url=${(
      inputURL
    )}`;
    const apiKey =
    "VEubholAvekeZyvp2TtB6xo9nb1Rwy4deF2qnQQRq7OJuP6IDFtBwjflf71l";
    fetch(fetchURL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: inputURL,
      }),
    })
      .then((res) => res.json())
      .then((e) => {
        if(!e.data.tiny_url){
          alert('invalid url')
          return
        }
        if (e.data) {
          setOutputURL(e.data.tiny_url)
          return
        }
      })
      
     
    // console.log(inputURL);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-top ">
      <h1 className=" text-3xl font-bold m-10">LinkSnap</h1>
      {/* <hr className="w-[100vw]   " /> */}
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-xl font-semibold">Enter the link:-</h2>
        <input className="p-2 px-4 rounded-md border-2 border-solid border-gray-300"
          onChange={(e) => {
            setInputURL(e.target.value);
          }}
          type="url"
          required
          pattern="https://.*"
          name=""
          id=""
          placeholder="paste URL"
        />
        <button className="bg-cyan-300 rounded-lg w-fit p-2 px-10" onClick={urlSubmit}>Snap</button>
      </div>
      <div>
      <div>
          {!outputURL && (<p>{outputURL}</p>)}
          <p>Output - {outputURL}</p>
        </div>
        {/* <button>Copy</button> */}
      </div>
    </div>
  );
}

export default App;
