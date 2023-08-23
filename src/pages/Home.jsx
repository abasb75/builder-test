import { useEffect, useState } from "react";
import { useRef } from "react";
import TreeNode from "./TreeNode";

function Home() {
  const iframeRef = useRef(null);
  const [elementsTree,setElementTree] = useState(null);
  useEffect(()=>{
    if(iframeRef && iframeRef.current){
      iframeRef.current.onload = ()=>{
        setElementTree(iframeRef.current?.contentWindow?.document?.body?.querySelectorAll('div#root')[0]?.children);
      }
    }
    return ()=>{};
  },[iframeRef]);

  useEffect(()=>{
    return ()=>{};
  },[elementsTree]);

  return (
    <div className="w-full min-h-screen flex gap-10">
      <aside className="w-72 bg-slate-900">
        {elementsTree ? 
        <TreeNode node={elementsTree[0]} depth={1}/> : 
        <p className="text-white">loading</p>}
      </aside>
      <iframe
        ref={iframeRef}
        className="flex flex-1 m-10 rounded-2xl shadow-lg"
        src="/template"
      />
    </div>
  );
}

export default Home;
