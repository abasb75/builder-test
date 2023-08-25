import { useState } from "react";
import TriangleArrow from "../components/icon/TriangleArrow";

export default function TreeNode({node,depth}){

    console.log(node.type)
    const [showChilds,setShowChilds] = useState(false);
    const type = node.type?.name || node.type;

    if(!node ){
        return <></>
    }



    if(node?.child){
        let childrens = [node?.child];
        let childItem = node?.child;
        while(childItem?.sibling){
            childrens = [...childrens,childItem?.sibling];
            childItem = childItem?.sibling;
        }
       // console.log(childrens);
        return (<div className="text-white w-full">
            <h3 
                className="h-7 leading-7 text-white cursor-pointer hover:bg-yellow-300 flex"
                style={{paddingLeft:16*depth+'px'}} 
                onClick={()=>{
                    setShowChilds(!showChilds);
                }}
                >
                <span className={`w-7 h-7 p-2 ${!showChilds && '-rotate-90'} scale-75 transition`}>
                    <TriangleArrow  />
                </span>
                <span>{type}</span>
            </h3>
            <div 
            className="w-full overflow-hidden"
            style={{
                height:showChilds?'auto':'0',
            }} 
            >
                {childrens.map((child,index)=> <TreeNode node={child} depth={depth+1} key={index} />)}
            </div>
        </div>);
    }
    else{
        return (<div className="text-white w-full">
            <h3 
                className="h-7 leading-7 text-white cursor-pointer hover:bg-yellow-300 flex"
                style={{paddingLeft:(16*depth+28)+'px'}} 
                >
                <span>{type}</span>
            </h3>
        </div>);
    }
}

