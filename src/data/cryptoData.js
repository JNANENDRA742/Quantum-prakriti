export const cryptoNodes = [
  { name: 'RSA', type: 'Legacy', x: 15, y: 25, danger: true, description: 'Public-key algorithm widely deployed today and vulnerable to a sufficiently capable quantum computer using Shor\'s algorithm.' },
  { name: 'ECC', type: 'Legacy', x: 40, y: 13, danger: true, description: 'Elliptic-curve cryptography provides strong classical security but is quantum-vulnerable through Shor\'s algorithm.' },
  { name: 'TLS', type: 'Protocol', x: 52, y: 42, danger: false, description: 'Transport security layer where certificates, key exchange and signature choices meet in production.' },
  { name: 'ECDH', type: 'Key exchange', x: 19, y: 65, danger: true, description: 'Classical elliptic-curve key agreement that should be inventoried for quantum-safe migration.' },
  { name: 'Certificates', type: 'Trust', x: 48, y: 72, danger: false, description: 'Certificate chains connect identity and trust to the cryptographic algorithms underneath.' },
  { name: 'ML-KEM', type: 'PQC', x: 78, y: 27, danger: false, description: 'NIST-standardized post-quantum key encapsulation mechanism designed to resist known quantum attacks.' },
  { name: 'ML-DSA', type: 'PQC', x: 82, y: 69, danger: false, description: 'NIST-standardized post-quantum digital signature algorithm for quantum-resistant authentication.' },
  { name: 'Crypto Libraries', type: 'Infrastructure', x: 73, y: 49, danger: false, description: 'Libraries and dependencies can silently determine which cryptographic algorithms your applications use.' },
];

export const featureCards = [
  { number: '01', title: 'Discover', description: 'Build visibility across applications, infrastructure, certificates, libraries and cryptographic dependencies.', icon: 'network' },
  { number: '02', title: 'Assess', description: 'Understand which cryptographic assets are exposed to future quantum attacks and prioritize the highest-risk systems.', icon: 'activity' },
  { number: '03', title: 'Migrate', description: 'Create a practical migration path toward post-quantum algorithms while maintaining operational continuity.', icon: 'zap' },
];

export const workflowSteps = [
  ['01', 'Discover', 'Find cryptographic assets across your technology estate.'],
  ['02', 'Inventory', 'Organise findings into an evidence-aware view of your cryptographic environment.'],
  ['03', 'ASSESS', 'Add context: where an asset lives, what it protects and what depends on it.'],
  ['04', 'Prioritise', 'Bring business criticality, sensitivity and exposure together for review.'],
  ['05', 'Prepare', 'Explore migration considerations without assuming a universal replacement path.'],
  ['06', 'Migrate', 'Turn prioritised evidence into an informed quantum-safe transition plan.'],
  ['07', 'Validate', 'Re-check the environment as decisions land and the inventory evolves.'],
];
