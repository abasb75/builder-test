import { useEffect, useState } from "react";
import TriangleArrow from "../components/icon/TriangleArrow";

export default function TreeNode({node,depth}){
    const [showChilds,setShowChilds] = useState(false);
    useEffect(()=>{
        return ()=>{};
    },[showChilds])
    if(!node){
        return <></>
    }
    if(node?.children?.length > 0){
        return (<div className="text-white w-full">
            <h3 
                className="h-7 leading-7 text-white cursor-pointer hover:bg-yellow-300 flex"
                style={{paddingLeft:16*depth+'px'}} 
                title={node.getAttribute('class')}
                onClick={()=>{
                    setShowChilds(!showChilds);
                }}
                >
                <span className={`w-7 h-7 p-2 ${!showChilds && '-rotate-90'} scale-75 transition`}>
                    <TriangleArrow  />
                </span>
                <span>{node.tagName.toLowerCase()}</span>
            </h3>
            <div 
            className="w-full overflow-hidden"
            style={{
                height:showChilds?'auto':'0',
            }} 
            >
                {Array.from(node?.children)?.map((node,index)=><TreeNode node={node} depth={depth+1} key={index} />)}
            </div>
        </div>);
    }
    else{
        return (<div className="text-white w-full">
            <h3 
                className="h-7 leading-7 text-white cursor-pointer hover:bg-yellow-300 flex"
                style={{paddingLeft:(16*depth+28)+'px'}} 
                title={node.getAttribute('class')}
                >
                <span>{node.tagName.toLowerCase()}</span>
            </h3>
        </div>);
    }
}

