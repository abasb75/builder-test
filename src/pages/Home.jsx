import { useEffect, useState } from "react";
import { useRef } from "react";
import TreeNode from "./TreeNode";

function Home() {
  const iframeRef = useRef(null);
  const [elementsTree,setElementTree] = useState(null);
  useEffect(()=>{
    if(iframeRef && iframeRef.current){
      iframeRef.current.onload = ()=>{
        const element  = iframeRef.current?.contentWindow?.document?.body?.querySelectorAll('div#root')[0]?.children[0];
        const node = element[Object.keys(element).find((key)=>key.startsWith('__reactContainer$') || key.startsWith('__reactFiber$'))];
        setElementTree(node);
      }
    }
    return ()=>{};
  },[iframeRef]);

  useEffect(()=>{
   // console.log(elementsTree)
  },[elementsTree])

  return (
    <div className="w-full min-h-screen flex gap-10">
      <aside className="w-72 bg-slate-900">
        {elementsTree ? 
        <TreeNode node={elementsTree} depth={1}/> : 
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
