
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");

  const generateImage = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setImage(data.image);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Image Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt"
        style={{ width: "300px", marginRight: "10px" }}
      />
      <button onClick={generateImage}>Generate</button>
      {image && <div><img src={image} alt="Generated" style={{ marginTop: 20, maxWidth: "100%" }} /></div>}
    </div>
  );
}
