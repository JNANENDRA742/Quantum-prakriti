import { Activity, ArrowRight, Network, Zap } from 'lucide-react';
import { featureCards } from '../../data/cryptoData';
import './Platform.css';
const icons={network:<Network/>,activity:<Activity/>,zap:<Zap/>};
export default function Platform(){return <section id="platform" className="platform-section"><div className="section-heading"><div className="section-tag"><span/>CRYPTOGRAPHIC VISIBILITY / 02</div><h2>See the cryptography<br/><span>behind your systems.</span></h2><p>Your first step toward quantum-safe migration is knowing where cryptography exists, what algorithms are being used, and which systems need attention first.</p></div><div className="feature-grid">{featureCards.map(card=><article className="feature-card" key={card.number}><div className="card-top"><div className="card-icon">{icons[card.icon]}</div><span>{card.number}</span></div><h3>{card.title}</h3><p>{card.description}</p><div className="card-arrow"><ArrowRight size={18}/></div></article>)}</div></section>}
