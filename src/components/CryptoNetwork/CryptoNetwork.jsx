import { ArrowRight, CircleDot } from 'lucide-react';
import { useState } from 'react';
import { cryptoNodes } from '../../data/cryptoData';
import './CryptoNetwork.css';

export default function CryptoNetwork(){
 const [active,setActive]=useState(null); const selected=cryptoNodes.find(n=>n.name===active);
 return <div className="constellation-wrapper">
  <div className="constellation-header"><div><span className="live-dot"/>LIVE ENVIRONMENT VIEW</div><span>SIMULATED SIGNALS · CONTEXT REQUIRED</span></div>
  <div className="constellation">
   <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
   <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="15" y1="25" x2="40" y2="13"/><line x1="40" y1="13" x2="78" y2="27"/><line x1="15" y1="25" x2="52" y2="42"/><line x1="52" y1="42" x2="78" y2="27"/><line x1="19" y1="65" x2="48" y2="72"/><line x1="48" y1="72" x2="82" y2="69"/><line x1="73" y1="49" x2="78" y2="27"/><line x1="73" y1="49" x2="82" y2="69"/></svg>
   <div className="constellation-center"><div className="center-pulse"/><span>CONTEXT</span><strong>REQUIRED</strong></div>
   {cryptoNodes.map(node=><button key={node.name} className={`crypto-node ${node.danger?'danger-node':'safe-node'} ${active===node.name?'active-node':''}`} style={{left:`${node.x}%`,top:`${node.y}%`}} onClick={()=>setActive(node.name)}><CircleDot size={12}/>{node.name}</button>)}
   <div className="migration-path"><span>MIGRATION PATH</span><div/><ArrowRight size={14}/></div>
   <div className="network-scan-line"/>
  </div>
  {selected && <div className="node-inspector"><div><span>SELECTED ASSET · {selected.type}</span><strong>{selected.name}</strong><p>{selected.description}</p></div><button onClick={()=>setActive(null)}>Close</button></div>}
 </div>
}
