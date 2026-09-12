import { ArrowRight } from 'lucide-react';
import { workflowSteps } from '../../data/cryptoData';
import './Workflow.css';
export default function Workflow(){return <section id="how-it-works" className="workflow-section"><div className="workflow-left"><div className="section-tag dark-tag"><span/>MIGRATION WORKFLOW / 03</div><h2>From<br/><em>unknown</em><br/>to<br/>quantum-ready.</h2></div><div className="workflow-right">{workflowSteps.map(([number,title,text])=><div className="workflow-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight size={18}/></div>)}</div></section>}
