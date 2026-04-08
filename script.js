
const io=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:0,rootMargin:'0px 0px -20px 0px'});
document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));

const T={
  en:{
    'nav-cta':'Contact Us','nav-svc':'Services','nav-about':'Why','nav-pricing':'Pricing','nav-more':'More',
    'dnav1':'Network &amp; IT Infrastructure','dnav1d':'Enterprise-grade networks, structured cabling, Wi-Fi, VLANs',
    'dnav2':'Cloud &amp; Data Center','dnav2d':'Secure cloud architecture, hybrid environments',
    'dnav3':'Connectivity Solutions','dnav3d':'High-availability internet, SD-WAN, failover',
    'dnav4':'Physical Security','dnav4d':'HD CCTV, smart locks, NFC access control',
    'dnav5':'Firewall as a Service','dnav5d':'Next-gen managed firewall, no hardware required',
    'dnav6':'Zero Trust Architecture','dnav6d':'Never trust, always verify — full ZTA design',
    'dnav7':'Security Awareness Training','dnav7d':'Phishing, social engineering &amp; insider threat training',
    'hero-label':'Cybersecurity as a Service',
    'hero-h1':'Protect Your<br><em>Business —</em><em>No Internal</em>Team Needed',
    'hero-sub':'Get enterprise-level security without hiring or managing teams. SOC 24/7 AI-powered, Penetration Testing, Incident Response, and GRC — all under one roof.',
    'hero-btn1':'Get Protected in 24 Hours','hero-btn2':'Talk to a Security Expert',
    'svc-label':'Our Services',
    'svc-h2':'Full AI<br><span style="color:var(--cyan)">Powered</span><br>Cybersecurity',
    'svc-sub':'Enterprise-grade cybersecurity driven entirely by AI — SOC monitoring, threat detection, incident response, and compliance, all automated and always on.',
    'svc1-name':'SOC 24/7 Monitoring (AI-Powered)','svc1-desc':'IA monitorea tu entorno 24/7 — detecta y responde a amenazas automáticamente.',
    'svc2-name':'Penetration Testing','svc2-desc':'AI-assisted simulated attacks expose your real vulnerabilities — reconnaissance, exploitation, and a prioritized report with AI-ranked remediation steps.',
    'svc3-name':'CSIRT','svc3-desc':'Security Operations and Incident Response Unit — the same team that detects a threat is the team that contains it. No handoffs. No delays. Just rapid, specialized action protecting your business around the clock.',
    'svc4-name':'GRC — Governance, Risk &amp; Compliance','svc4-desc':'AI-powered risk assessments, automated policy monitoring, and continuous compliance tracking — aligned to ISO 27001 and NIST standards.',
    'svc5-name':'Digital Forensics','svc5-desc':'Post-incident investigation and evidence-grade reporting for compliance and legal purposes.',
    'more-label':'More Services',
    'more-hero-label':'Additional Services','more-hero-h2':'Technology, Connectivity<br>&amp; <span style="color:var(--cyan)">Integral Security</span>',
    'more-hero-sub':'From physical security to cloud infrastructure — we cover every layer of your digital and physical environment.',
    'ms1-label':'Cybersecurity','ms1-h2':'Enterprise Protection.<br><span style="color:var(--cyan)">AI-Driven.</span>','ms1-sub':'SOC, XDR, Zero Trust, Firewall as a Service, and Ethical Hacking — complete cybersecurity for your organization.',
    'ms1i1':'SOC-CSIRT 24/7','ms1d1':'AI-powered Security Operations Center monitoring your entire environment around the clock.',
    'ms1i2':'XDR — Extended Detection &amp; Response','ms1d2':'Unified threat detection across endpoints, networks, and cloud environments.',
    'ms1i3':'Zero Trust Architecture','ms1d3':'Never trust, always verify. Every user and device authenticated before access is granted.',
    'ms1i4':'Firewall as a Service','ms1d4':'Next-gen managed firewall in the cloud — no hardware, always up to date.',
    'ms1i5':'Ethical Hacking / Pentesting','ms1d5':'Simulated real-world attacks to find vulnerabilities before criminals do.',
    'ms1i6':'Security Awareness Training','ms1d6':'Train your team to recognize phishing, social engineering, and insider threats.',
    'ms2-label':'Cloud &amp; Data Center','ms2-h2':'Infrastructure for<br><span style="color:var(--cyan)">Critical Environments</span>','ms2-sub':'Private cloud, public cloud, hybrid models, and colocation — resilient infrastructure for high-demand organizations.',
    'ms2i1':'Private Cloud','ms2d1':'Dedicated infrastructure for organizations with strict compliance and total data control requirements.',
    'ms2i2':'Public Cloud','ms2d2':'Cloud platforms for backup, storage, and on-demand computing. Scale quickly.',
    'ms2i3':'Hybrid Model','ms2d3':'INVERSSYS integrates cloud with connectivity, cybersecurity, and operational continuity in one ecosystem.',
    'ms2i4':'Data Center &amp; Colocation','ms2d4':'Critical hosting with SLA 100%, redundant infrastructure, biometric access, and regulatory compliance.',
    'ms2i5':'High Availability','ms2d5':'100% SLA with redundant infrastructure and uninterrupted power supply.',
    'ms2i6':'Cost Optimization','ms2d6':'Economy of scale. Reduce investment in owned hardware through managed cloud services.',
    'ms3-label':'Enterprise Connectivity','ms3-h2':'Your organization,<br><span style="color:var(--cyan)">always connected</span>','ms3-sub':'Dedicated internet, GPON fiber, Cloud Connect, and Private Ethernet Lines — enterprise-grade connectivity.',
    'ms3i1':'Dedicated Internet','ms3d1':'High-performance connections optimized for cloud workloads and critical business applications.',
    'ms3i2':'GPON Fiber','ms3d2':'Ideal fiber optic connectivity for SMEs. Stable, scalable network built to your needs.',
    'ms3i3':'Cloud Connect','ms3d3':'Private, secure direct link to your cloud without routing through the public internet.',
    'ms3i4':'Private Ethernet Lines','ms3d4':'Connect branches with dedicated bandwidth and guaranteed security across all locations.',
    'ms4-label':'Physical Security','ms4-h2':'Protect people,<br><span style="color:var(--cyan)">facilities &amp; assets</span>','ms4-sub':'IP video surveillance, access control, VMS, and C2 command centers — integrated with your IT environment.',
    'ms4i1':'IP Video Surveillance','ms4d1':'HD video/audio transmission over local network or internet. Total flexibility and remote access.',
    'ms4i2':'Access Control','ms4d2':'Advanced devices to regulate entry of people and vehicles — NFC, biometric, and keyless systems.',
    'ms4i3':'C2 Command Centers','ms4d3':'Emergency management with advanced technology and real-time coordination across all facilities.',
    'ms4i4':'VMS — Video Management','ms4d4':'Software to monitor and analyze video in real time from multiple sources simultaneously.',
    'ms5-label':'IT Infrastructure','ms5-h2':'Networks built<br><span style="color:var(--cyan)">to perform</span>','ms5-sub':'Enterprise LAN/Wi-Fi networks, structured cabling, and integral management — the foundation everything runs on.',
    'ms5i1':'Enterprise LAN / Wi-Fi','ms5d1':'High-performance wired and wireless networks designed for large-scale enterprise environments.',
    'ms5i2':'Structured Cabling','ms5d2':'Organized, labeled, and documented cabling infrastructure built to scale and last.',
    'ms5i3':'Network Management','ms5d3':'End-to-end management of your network infrastructure with 24/7 monitoring and rapid response.',
    'ms5i4':'Firewall &amp; Routing','ms5d4':'Next-gen firewalls and advanced routing configuration to secure and optimize your traffic flow.',
    'more-hero-sub':'From physical security to cloud infrastructure — we cover every layer of your digital and physical environment.',
    'mfi1':'Network &amp; IT Infrastructure','mfi1tag':'Infrastructure','mfi1body':'Enterprise-grade networks using UniFi and Cisco Meraki. Structured cabling, Wi-Fi heatmapping, VLAN segmentation, and remote monitoring — all connected to our SOC platform from day one.',
    'mfi1l1':'<strong>Structured Cabling &amp; Rack Setup</strong>Organized, labeled infrastructure built to last.','mfi1l2':'<strong>Wi-Fi Heatmapping &amp; Deployment</strong>Signal-optimized access point placement.','mfi1l3':'<strong>VLAN Segmentation</strong>Separate IoT, staff, guests, and servers.',
    'mfi2':'Cloud &amp; Data Center','mfi2tag':'Cloud','mfi2body':'Secure cloud architecture, hybrid environments, and data center management. Resilient, optimized, and protected.',
    'mfi2l1':'<strong>Secure Cloud Architecture</strong>Security built in from the start.','mfi2l2':'<strong>Hybrid Environments</strong>Seamlessly connect on-premise with cloud.','mfi2l3':'<strong>Backup &amp; Disaster Recovery</strong>Automated backups with tested recovery.',
    'mfi3':'Connectivity Solutions','mfi3tag':'Connectivity','mfi3body':'High-availability internet, SD-WAN, and failover setups. Every minute offline costs you money.',
    'mfi3l1':'<strong>High-Availability Internet</strong>Primary and failover connections.','mfi3l2':'<strong>SD-WAN Implementation</strong>Intelligent traffic routing.','mfi3l3':'<strong>VPN &amp; Secure Remote Access</strong>Encrypted tunnels for your team.',
    'mfi4':'Physical Security','mfi4tag':'Physical','mfi4body':'HD CCTV, smart locks, NFC access control, and secure footage storage — integrated with your IT environment.',
    'mfi4l1':'<strong>HD CCTV Installation</strong>High-definition cameras with remote access.','mfi4l2':'<strong>Smart Locks &amp; NFC Access</strong>Log every entry without physical keys.','mfi4l3':'<strong>IT + Physical Integration</strong>Physical events fed into your SOC dashboard.',
    'mfi5':'Firewall as a Service','mfi5tag':'Network Security','mfi5body':'Next-generation firewall as a managed cloud service. No hardware, always up to date, always enforcing your policies.',
    'mfi5l1':'<strong>Next-Gen Threat Prevention</strong>Deep packet inspection and app control.','mfi5l2':'<strong>DNS Filtering</strong>Block malicious domains before connections are made.','mfi5l3':'<strong>Real-Time Reporting</strong>Full visibility into what is being blocked.',
    'mfi6':'Zero Trust Architecture','mfi6tag':'Advanced','mfi6body':'Never trust, always verify. Every user, device, and connection authenticated before access is granted.',
    'mfi6l1':'<strong>Identity Verification</strong>MFA and continuous validation.','mfi6l2':'<strong>Least Privilege Access</strong>Users only access what they need.','mfi6l3':'<strong>Micro-Segmentation</strong>Contain lateral movement across your network.',
    'mfi7':'Security Awareness Training','mfi7tag':'Human Security','mfi7body':'Over 90% of breaches start with human error. We train your team to recognize phishing, social engineering, and insider threats.',
    'mfi7l1':'<strong>Phishing Simulations</strong>Real-world campaigns to test and educate.','mfi7l2':'<strong>Social Engineering Awareness</strong>Training on manipulation tactics.','mfi7l3':'<strong>Insider Threat Recognition</strong>Teach staff to identify suspicious behavior.','mfi7l4':'<strong>Progress Tracking</strong>Measurable improvement reports.',
    'more-cta-h':'Ready to build your complete security stack?','more-cta-sub':'Combine any of these with our core SOC, Pentesting, IR, and GRC offering.','more-cta-btn':'Get a Custom Quote',
    'more1':'Network &amp; IT Infrastructure','more2':'Cloud &amp; Data Center','more3':'Connectivity Solutions',
    'more4':'Physical Security','more5':'Firewall as a Service','more6':'Zero Trust Architecture',
    'more7':'Security Awareness Training',
    'more1d':'Enterprise-grade networks using UniFi and Cisco Meraki — structured cabling, Wi-Fi deployment, VLANs, and scalable connectivity for any size environment.',
    'more2d':'Secure cloud architecture, hybrid environments, and data center management — keeping your infrastructure resilient, optimized, and protected.',
    'more3d':'High-availability internet, SD-WAN, and failover setups that keep your business online — even when primary connections go down.',
    'more4d':'HD CCTV, smart locks, NFC access control, and secure footage storage — fully integrated with your IT environment for complete visibility.',
    'more5d':'Next-generation firewall protection delivered as a managed cloud service — no hardware to maintain, always up-to-date, always enforcing your policies.',
    'more6d':'Never trust, always verify. We design Zero Trust frameworks that ensure every user, device, and connection is authenticated before access is granted.',
    'more7d':'Your people are your biggest vulnerability. We train your team to recognize phishing, social engineering, and insider threats — turning them into your first line of defense.',
    'soc-label':'SOC-CSIRT','soc-h2':'24/7 AI-Powered Security Operations',
    'soc-body':"Most businesses can't afford a full internal security team. INVERSSYS gives you a complete SOC — monitoring, detection, and automated response — powered by AI, for a fraction of the cost.",
    'soc-li1':'<strong>Continuous Monitoring</strong> — All endpoints and servers via SIEM and XDR',
    'soc-li2':'<strong>AI Threat Detection</strong> — Correlation engines that detect suspicious behavior and escalate instantly',
    'soc-li3':'<strong>Automated Response</strong> — SOAR-driven playbooks contain threats before they spread',
    'soc-li4':'<strong>Threat Intelligence</strong> — MISP-powered, tracking actors targeting your industry',
    'soc-li5':'<strong>Compliance Support</strong> — ISO/IEC 27001:2022 alignment and audit documentation',
    'soc-btn':'Get a SOC Quote','soc-visual-label':'AI-Powered Coverage',
    'pt-label':'Penetration Testing','pt-h2':'Find Your Vulnerabilities Before Hackers Do',
    'pt-body':'Simulated real-world attacks against your web applications, networks, and infrastructure — with a clear, actionable report and step-by-step remediation.',
    'pt-li1':'<strong>Web Application Testing</strong> — OWASP Top 10, SQL injection, XSS, CORS, auth bypasses',
    'pt-li2':'<strong>Network Penetration Testing</strong> — Internal &amp; external, firewall rules, lateral movement paths',
    'pt-li3':'<strong>Wi-Fi Security Assessment</strong> — Encryption weaknesses, rogue APs, password vulnerabilities',
    'pt-li4':'<strong>Full Written Report</strong> — Severity ratings, proof-of-concept, remediation checklist',
    'pt-li5':'<strong>Retest Included</strong> — We verify your fixes after remediation',
    'pt-btn':'Request a Pentest Quote','pt-visual-label':'Phase Methodology',
    'ir-label':'CSIRT','ir-h2':'When an alert becomes an attack, our CSIRT activates immediately.',
    'ir-body':'Security Operations and Incident Response Unit — the same team that detects a threat is the team that contains it. No handoffs. No delays. Just rapid, specialized action protecting your business around the clock.',
    'ir-li1':'<strong>Detection &amp; Triage</strong> — Rapid identification of threat scope and affected systems',
    'ir-li2':'<strong>Containment</strong> — Immediate isolation to stop the attack from spreading',
    'ir-li3':'<strong>Forensic Analysis</strong> — Deep investigation of root cause and attacker behavior',
    'ir-li4':'<strong>Eradication</strong> — Complete removal of malware, backdoors, and persistence',
    'ir-li5':'<strong>Recovery &amp; Hardening</strong> — Full restoration with security improvements to prevent recurrence',
    'ir-btn':'Talk to Us About IR','ir-visual-label':'Response Phases',
    'grc-label':'GRC — Governance, Risk &amp; Compliance','grc-h2':'Security that satisfies regulators, clients, and partners.',
    'grc-body':"Compliance isn't just paperwork — it's the foundation of client trust. INVERSSYS builds and maintains your GRC framework so audits never catch you off-guard.",
    'grc-li1':'<strong>Risk Assessments</strong> — Identify, quantify, and prioritize your organization\'s security risks',
    'grc-li2':'<strong>Policy Development</strong> — Security policies tailored to your business and industry',
    'grc-li3':'<strong>ISO/IEC 27001 Alignment</strong> — Full certification path guidance',
    'grc-li4':'<strong>NIST Framework</strong> — Structured cybersecurity posture using the industry standard',
    'grc-li5':'<strong>Audit Readiness</strong> — Documentation, controls, and evidence packages ready for review',
    'grc-btn':'Start Your GRC Journey','grc-visual-label':'Governance · Risk · Compliance',
    'partners-label':'Our Partners','partners-h2':'Trusted technology we work with',
    'stat1-label':'AI SOC Coverage','stat2-label':'Avg Alert Response','stat3-label':'Security Ecosystem','stat4-label':'27001 Aligned',
    'about-label':'Why INVERSSYS','about-h2':'The cybersecurity team built for your business',
    'about-p1':'INVERSSYS delivers a <strong>complete cybersecurity operation as a service</strong> — replacing internal teams with our SOC-CSIRT — a unified team for AI-driven monitoring, risk management, and real-time threat response.',
    'about-p2':"We've seen too many businesses suffer breaches and data loss simply because they didn't have access to real security expertise. <strong>That changes with us.</strong>",
    'about-p3':'Based in Santo Domingo. Actively pursuing <strong>ISO/IEC 27001:2022</strong> certification.',
    'diff1-title':'SOC-CSIRT 24/7 Monitoring','diff1-body':'Our SOC-CSIRT never sleeps. One unified team — detection, containment, and response — powered by AI, around the clock.',
    'diff2-title':'Immediate Response','diff2-body':'When a real threat is confirmed, we act. No waiting for tickets — containment starts within minutes.',
    'diff3-title':'Full 360° Ecosystem','diff3-body':'SOC-CSIRT, pentesting, incident response, GRC, physical security, cloud, network — everything under one strategic partner.',
    'diff4-title':'Compliance Ready','diff4-body':'ISO/IEC 27001 and NIST-aligned. We build your compliance posture and keep it audit-ready at all times.',
    'diff5-title':'Scalable Cloud Integration','diff5-body':'Our platform scales with your business — from a single office to a multi-location cloud-connected operation.',
    'diff6-title':'One Strategic Partner','diff6-body':'No vendor chaos. INVERSSYS is your single point of accountability for the entire security and infrastructure stack.',
    'pricing-label':'Pricing',
    'pricing-h2':'Managed Cybersecurity Plans',
    'pricing-sub':'Enterprise-grade protection, monitoring, and response tailored to your business.',
    'pt-badge':'Most Popular',
    'pc-badge':'Core service',
    'pc-t1':'Tier 1','pc-t2':'Tier 2','pc-t3':'Tier 3',
    'pc-n1':'Essential Security','pc-n2':'MDR','pc-n3':'Enterprise SOC',
    'pc-d1':'Entry-level protection for businesses starting their security journey. Business-hours visibility with core endpoint defense.',
    'pc-d2':'Managed Detection & Response. 24/7 monitoring with full SIEM visibility, AI-driven analytics, and automated response.',
    'pc-d3':'Full security operations with dedicated analyst, compliance-ready reporting, forensics, and priority incident response.',
    'pc-pu1':'/ device / mo','pc-pu2':'/ device / mo','pc-pu3':'/ device / mo',
    'pc-pn1':'Business hours · Mon–Fri','pc-pn2':'24/7 continuous coverage','pc-pn3':'Hybrid pricing available · custom SLAs',
    'pc-inc1':'Includes','pc-inc2':'Includes','pc-inc3':'Includes',
    'pf1-1':'Endpoint protection (XDR)','pf1-2':'Basic SIEM monitoring','pf1-3':'Email + SMS alerting',
    'pf1-4':'Monthly security report','pf1-5':'24/7 coverage','pf1-6':'Threat intelligence','pf1-7':'IR & forensics',
    'pf2-1':'Everything in Essential','pf2-2':'24/7 SOC monitoring','pf2-3':'SIEM + AI behavioral analytics',
    'pf2-4':'Threat intelligence integration','pf2-5':'SOAR automated response','pf2-6':'Device isolation + IP blocking','pf2-7':'Dedicated analyst',
    'pf3-1':'Everything in MDR','pf3-2':'Dedicated SOC analyst','pf3-3':'Priority incident response',
    'pf3-4':'Digital forensics (full stack)','pf3-5':'Malware analysis lab','pf3-6':'Compliance-ready reporting','pf3-7':'Executive + technical reports',
    'pc-cta1':'Request proposal','pc-cta2':'Request proposal','pc-cta3':'Request proposal',
    'cap-hdr0':'Capability','cap-hdr1':'Essential','cap-hdr2':'MDR','cap-hdr3':'Enterprise',
    'cap-r1':'Endpoint protection (XDR)','cap-r2':'SIEM monitoring','cap-r3':'Coverage hours',
    'cap-r4':'AI behavioral analytics','cap-r5':'Threat intelligence','cap-r6':'SOAR automated response',
    'cap-r7':'Incident response','cap-r8':'Digital forensics','cap-r9':'Malware analysis',
    'cap-r10':'Dedicated analyst','cap-r11':'Compliance reporting',
    'cap-r2e':'Basic','cap-r2m':'Full','cap-r2x':'Full',
    'cap-r7e':'Add-on','cap-r7m':'Add-on','cap-r7x':'Included',
    'cap-r11m':'Basic','cap-r11x':'Full',
    'pt-l1':'Best for','pt-l2':'Monitoring','pt-l3':'Protection (XDR)',
    'pt-l4':'SIEM (Visibility)','pt-l5':'Threat Intelligence','pt-l6':'Incident Response',
    'pt-l7':'IR & Forensics','pt-l8':'Compliance Support','pt-l9':'Security Testing',
    'pt-l10':'Reporting','pt-l11':'Support','pt-l12':'Technology stack',
    'pt-c1':'1–25 devices','pt-c2':'25–150 devices','pt-c3':'100+ / Multi-location',
    'pt-c4':'Business hours','pt-c5':'24/7 Monitoring','pt-c6':'24/7 Priority',
    'pt-c7':'Basic','pt-c8':'Advanced','pt-c9':'Full Coverage',
    'pt-c12':'Advanced<br><span style="color:var(--muted);font-size:12px">Splunk / Sentinel</span>',
    'pt-c15':'✓ <span style="color:var(--muted);font-size:12px">Advanced</span>',
    'pt-c16':'Alerts only','pt-c17':'Remote Response','pt-c18':'Dedicated Analyst',
    'pt-c23':'Basic Guidance','pt-c24':'ISO 27001 Support',
    'pt-c25':'Add-on',
    'pt-c28':'Monthly Summary',
    'pt-c29':'Weekly Updates<br><span style="color:var(--muted);font-size:12px">+ Detailed Report</span>',
    'pt-c30':'Executive +<br><span style="color:var(--muted);font-size:12px">Technical Reports</span>',
    'pt-c32':'Email + Phone',
    'pt-c33':'Priority +<br><span style="color:var(--muted);font-size:12px">Dedicated Analyst</span>',
    'pt-c34':'Open-source<br><span style="color:var(--muted);font-size:12px">(Wazuh-based)</span>',
    'pt-c35':'Enterprise<br><span style="color:var(--muted);font-size:12px">(XDR + SIEM)</span>',
    'pt-c36':'Advanced enterprise<br><span style="color:var(--muted);font-size:12px">(Splunk / Sentinel + IR)</span>',
    'pricing-cta1':'Get Started','pricing-cta2':'Start Protection','pricing-cta3':'Request Consultation',
    'pkg-placeholder':'Interested package',
    'pkg-opt1':'Essential','pkg-opt2':'MDR',
    'pkg-opt3':'Enterprise','pkg-opt4':'Custom / Not sure yet',
    'pricing-note':'// All prices quoted in USD. Per-endpoint pricing available. Contact us for a custom quote.',
    'p-feature':'Feature','p-best':'Best for','p-best1':'1–10 endpoints','p-best2':'10–50 endpoints','p-best3':'50+ / Multi-location',
    'p-soc':'SOC Monitoring','p-soc1':'Business hours','p-soc2':'24/7 AI','p-soc3':'24/7 AI Priority',
    'p-agents':'Endpoint Agents','p-agents1':'Up to 10','p-agents2':'Up to 50','p-agents3':'Unlimited',
    'p-ti':'Threat Intelligence','p-ir':'Incident Response','p-ir1':'Email','p-ir2':'Phone + Email','p-ir3':'Dedicated Analyst',
    'p-grc':'GRC &amp; Compliance','p-grc1':'ISO 27001 Prep','p-grc2':'Full Audit Support',
    'p-pt':'Penetration Test','p-pt1':'Add-on','p-pt2':'1× / year','p-pt3':'2× / year',
    'p-report':'Monthly Report','p-report1':'Summary','p-report2':'Detailed','p-report3':'Executive + Technical','p-cta':'Contact Us  ·  🇺🇸  ·  🇩🇴  ·  🇵🇦  ·  🇨🇴  ·  🇨🇦',
    'contact-h2':'Get Protected.<br>Start Today.',
    'contact-sub':"No sales pressure. No jargon. We'll evaluate your current security posture and tell you exactly where you stand — for free.",
    'contact-label1':'Phone','contact-label2':'Email','contact-label3':'Address',
    'contact-ph1':'Your name','contact-ph5':'Company name','contact-ph6':'Position / Title','contact-ph2':'Email address','contact-ph3':'Phone / WhatsApp','contact-ph4':'Tell us about your business and what you need',
    'contact-btn':'Send Message →',
    'footer-copy':'© 2026 INVERSSYS  ·  🇺🇸 USA  ·  🇩🇴 DR  ·  🇵🇦 PAN  ·  🇨🇴 COL  ·  🇨🇦 CAN',
    'cost-label':'The Real Cost of In-House Security',
    'cost-h2':'Why pay for one analyst<br>when you can have<br>an entire 24/7 team?',
    'cost-sub':"Building an internal SOC sounds smart — until you see the numbers. Cybersecurity doesn't need to be in-house. Here's what it actually costs to run a bare minimum operation.",
    'cost-t1':'The Salary Floor','cost-d1':'Junior analysts command $70k–$90k. Seniors cross $150k. For 24/7 coverage you need at least 5 people to cover shifts, PTO, and burnout.',
    'cost-t2':'The Manager Premium','cost-d2':"You can't leave junior analysts unsupervised. A SOC Manager adds $140k+ to your burn rate before benefits or recruiting fees.",
    'cost-t3':'The Tooling Tax','cost-d3':'SIEM, EDR, SOAR, and Threat Intel feeds can easily hit $200k+ in annual licensing before you\'ve analyzed a single log.',
    'cost-t4':'The Poaching Cycle','cost-d4':'The talent shortage is critical. Your best people will be poached within 12 months, leaving massive recruitment and retraining costs on repeat.',
    'alt-label':'The Alternative','alt-h2':'INVERSSYS SOC-CSIRT',
    'alt-body':'One flat monthly fee. A complete team of experts. Enterprise tools included. No recruiting, no burnout, no tooling contracts — just 24/7/365 protection from day one.',
    'alt-btn':'Calculate Your Savings',
    'alt-l1':'24/7/365 Coverage','alt-s1':' — Immediate protection from day one, no ramp-up',
    'alt-l2':'Integrated Stack','alt-s2':' — SIEM, EDR, SOAR, Threat Intel all included',
    'alt-l3':'Senior Expertise','alt-s3':' — No junior-only teams, no unsupervised analysts',
    'alt-l4':'Zero Talent Risk','alt-s4':' — No poaching, no recruiting cycles, no knowledge gaps',
    'alt-l5':'Predictable Cost','alt-s5':' — Per-endpoint pricing, scales with your business',
    'ind-label':'Industries We Protect','ind-h2':'Built for businesses across every sector',
    'ind-sub':'Every industry faces unique cyber threats. INVERSSYS delivers tailored protection for the specific risks your business faces.',
    'ind1':'Hotels &amp; Hospitality','ind1r':'POS attacks, guest data breaches, Wi-Fi vulnerabilities',
    'ind2':'Clinics &amp; Healthcare','ind2r':'Patient record theft, ransomware, compliance gaps',
    'ind3':'Restaurants &amp; Retail','ind3r':'Payment card fraud, phishing, unmonitored networks',
    'ind4':'Corporate &amp; SMEs','ind4r':'Business email compromise, insider threats, data loss',
    'ind5':'Finance &amp; Legal','ind5r':'Regulatory compliance, wire fraud, confidential data',
    'ind6':'Education &amp; Government','ind6r':'Credential theft, nation-state threats, legacy systems',
    'hiw-label':'How It Works','hiw-h2':'Protected in 3 steps. Starting in 24 hours.',
    'hiw-t1':'Assessment','hiw-b1':'We map your entire attack surface — endpoints, networks, cloud, and physical access — and identify your highest-risk vulnerabilities within 24 hours.',
    'hiw-t2':'Deployment','hiw-b2':'We deploy lightweight agents across your environment, connect to our SOC platform, and baseline normal behavior — zero disruption to your operations.',
    'hiw-t3':'24/7 Protection','hiw-b3':'Our AI and analysts monitor everything around the clock. Threats are detected, contained, and neutralized — you get reports and peace of mind.',
    'hiw-btn':'See Your Vulnerabilities Today',
    'whu-label':'The Risk of Doing Nothing','whu-h2':'What happens without us?',
    'whu-sub':"Most businesses don't find out they've been breached until it's too late. No monitoring means no warning — just damage.",
    'whu-btn':'Don\'t Wait. Get Protected.',
    'whu-t1':'Attacks Go Undetected','whu-b1':'Without 24/7 monitoring, attackers can sit inside your network for months — stealing data, mapping systems, and preparing a bigger strike.',
    'whu-t2':'Data Loss &amp; Ransomware','whu-b2':'Ransomware encrypts your files in minutes. Without containment, one infected endpoint becomes a full business shutdown.',
    'whu-t3':'Business Interruption','whu-b3':'Every hour of downtime costs money, clients, and reputation. Recovery without a plan takes days or weeks — with one, it takes hours.',
    'whu-t4':'Compliance &amp; Legal Exposure','whu-b4':'A breach without documented controls means fines, lawsuits, and lost contracts. Compliance is your legal protection.',
    'footer-svc':'Services','footer-soc':'SOC','footer-pt':'Pentesting','footer-grc':'GRC','footer-about':'About','footer-pricing':'Pricing','footer-contact':'Contact',
  },
  es:{
    'nav-cta':'Contáctanos','nav-svc':'Servicios','nav-about':'Por Qué','nav-pricing':'Precios','nav-more':'Más',
    'dnav1':'Red e Infraestructura IT','dnav1d':'Redes empresariales, cableado estructurado, Wi-Fi, VLANs',
    'dnav2':'Nube y Centro de Datos','dnav2d':'Arquitectura cloud segura, entornos híbridos',
    'dnav3':'Soluciones de Conectividad','dnav3d':'Internet alta disponibilidad, SD-WAN, failover',
    'dnav4':'Seguridad Física','dnav4d':'CCTV HD, cerraduras inteligentes, control de acceso NFC',
    'dnav5':'Firewall como Servicio','dnav5d':'Firewall gestionado de próxima generación, sin hardware',
    'dnav6':'Arquitectura Zero Trust','dnav6d':'Nunca confiar, siempre verificar — diseño ZTA completo',
    'dnav7':'Formación en Seguridad','dnav7d':'Phishing, ingeniería social y formación contra amenazas internas',
    'hero-label':'Ciberseguridad como Servicio',
    'hero-h1':'Protege tu<br><em>Empresa —</em><em>Sin Equipos</em>Internos',
    'hero-sub':'Seguridad empresarial sin contratar equipos. SOC 24/7 con IA, Pentesting, IR y GRC.',
    'hero-btn1':'Protección en 24h','hero-btn2':'Hablar con un Experto',
    'svc-label':'Nuestros Servicios',
    'svc-h2':'Ciberseguridad<br><span style="color:var(--cyan)">Totalmente</span><br>con IA',
    'svc-sub':'Ciberseguridad de nivel empresarial impulsada completamente por IA — monitoreo SOC, detección de amenazas, respuesta a incidentes y cumplimiento, todo automatizado y siempre activo.',
    'svc1-name':'SOC 24/7 Monitoreo (Con IA)','svc1-desc':'La IA monitorea continuamente todo tu entorno vía SIEM y XDR — detectando, correlacionando y respondiendo automáticamente a amenazas antes de que causen daño.',
    'svc2-name':'Pruebas de Penetración','svc2-desc':'Ataques simulados asistidos por IA exponen tus vulnerabilidades reales — reconocimiento, explotación y un informe priorizado con pasos de remediación clasificados por IA.',
    'svc3-name':'CSIRT','svc3-desc':'Unidad de Operaciones de Seguridad y Respuesta a Incidentes — el mismo equipo que detecta la amenaza es el que la contiene. Sin traspasos. Sin demoras. Acción rápida las 24 horas.',
    'svc4-name':'GRC — Gobernanza, Riesgo y Cumplimiento','svc4-desc':'Evaluaciones de riesgo con IA, monitoreo automatizado de políticas y seguimiento continuo de cumplimiento — alineado a ISO 27001 y NIST.',
    'svc5-name':'Análisis Forense Digital','svc5-desc':'Investigación post-incidente e informes con calidad de evidencia para cumplimiento y fines legales.',
    'more-label':'Más Servicios',
    'more-hero-label':'Servicios Adicionales','more-hero-h2':'Tecnología, Conectividad<br>y <span style="color:var(--cyan)">Seguridad</span> Integral.',
    'more-hero-sub':'Desde seguridad física hasta infraestructura cloud — cubrimos cada capa de tu entorno digital y físico.',
    'ms1-label':'Ciberseguridad','ms1-h2':'Protección Empresarial.<br><span style="color:var(--cyan)">Impulsada por IA.</span>','ms1-sub':'SOC, XDR, Zero Trust, Firewall as a Service y Ethical Hacking — ciberseguridad completa para tu organización.',
    'ms1i1':'SOC-CSIRT 24/7','ms1d1':'Centro de Operaciones de Seguridad con IA que monitorea tu entorno completo las 24 horas.',
    'ms1i2':'XDR — Detección y Respuesta Extendida','ms1d2':'Detección unificada de amenazas en endpoints, redes y entornos cloud.',
    'ms1i3':'Arquitectura Zero Trust','ms1d3':'Nunca confiar, siempre verificar. Cada usuario y dispositivo autenticado antes de otorgar acceso.',
    'ms1i4':'Firewall como Servicio','ms1d4':'Firewall de próxima generación gestionado en la nube — sin hardware, siempre actualizado.',
    'ms1i5':'Ethical Hacking / Pentesting','ms1d5':'Ataques simulados del mundo real para encontrar vulnerabilidades antes que los delincuentes.',
    'ms1i6':'Formación en Seguridad','ms1d6':'Entrena a tu equipo para reconocer phishing, ingeniería social y amenazas internas.',
    'ms2-label':'Nube y Centro de Datos','ms2-h2':'Infraestructura para<br><span style="color:var(--cyan)">Entornos Críticos</span>','ms2-sub':'Nube privada, pública, modelos híbridos y colocation — infraestructura resiliente para organizaciones de alta demanda.',
    'ms2i1':'Nube Privada','ms2d1':'Infraestructura dedicada para organizaciones con cumplimiento normativo estricto y control total de datos.',
    'ms2i2':'Nube Pública','ms2d2':'Plataformas cloud para respaldo, almacenamiento y cómputo bajo demanda. Escale rápidamente.',
    'ms2i3':'Modelo Híbrido','ms2d3':'INVERSSYS integra nube con conectividad, ciberseguridad y continuidad operativa en un solo ecosistema.',
    'ms2i4':'Data Center &amp; Colocation','ms2d4':'Hospedaje crítico con SLA 100%, infraestructura redundante, acceso biométrico y cumplimiento normativo.',
    'ms2i5':'Alta Disponibilidad','ms2d5':'SLA 100% con infraestructura redundante y energía ininterrumpida.',
    'ms2i6':'Optimización de Costos','ms2d6':'Economía de escala. Reduzca inversión en hardware propio mediante servicios cloud gestionados.',
    'ms3-label':'Conectividad Empresarial','ms3-h2':'Su organización,<br><span style="color:var(--cyan)">siempre conectada</span>','ms3-sub':'Internet dedicado, fibra GPON, Cloud Connect y Líneas Privadas Ethernet — conectividad empresarial para cualquier tamaño.',
    'ms3i1':'Internet Dedicado','ms3d1':'Conexiones de alto desempeño optimizadas para la nube y aplicaciones críticas de negocio.',
    'ms3i2':'Fibra GPON','ms3d2':'Conectividad de fibra óptica ideal para PyMES. Red estable y escalable a la medida.',
    'ms3i3':'Cloud Connect','ms3d3':'Enlace privado y seguro directo a su nube sin pasar por Internet público.',
    'ms3i4':'Líneas Privadas Ethernet','ms3d4':'Conecte sucursales con ancho de banda dedicado y seguridad garantizada en todas las ubicaciones.',
    'ms4-label':'Seguridad Física','ms4-h2':'Proteja personas,<br><span style="color:var(--cyan)">instalaciones y activos</span>','ms4-sub':'Videovigilancia IP, control de accesos, VMS y centros de comando C2 — integrado con tu entorno IT.',
    'ms4i1':'Videovigilancia IP','ms4d1':'Transmisión de video/audio en red local o Internet. Flexibilidad total y acceso remoto.',
    'ms4i2':'Control de Accesos','ms4d2':'Dispositivos avanzados para regular el ingreso de personas y vehículos — NFC, biométrico y sin llave.',
    'ms4i3':'Centros de Comando C2','ms4d3':'Gestión de emergencias con tecnología avanzada y coordinación en tiempo real en todas las instalaciones.',
    'ms4i4':'VMS — Gestión de Video','ms4d4':'Software para monitorear y analizar video en tiempo real desde múltiples fuentes simultáneamente.',
    'ms5-label':'Infraestructura TI','ms5-h2':'Redes construidas<br><span style="color:var(--cyan)">para rendir</span>','ms5-sub':'Redes LAN/Wi-Fi empresariales, cableado estructurado y gestión integral — la base sobre la que todo funciona.',
    'ms5i1':'LAN / Wi-Fi Empresarial','ms5d1':'Redes cableadas e inalámbricas de alto rendimiento diseñadas para entornos empresariales a gran escala.',
    'ms5i2':'Cableado Estructurado','ms5d2':'Infraestructura de cableado organizada, etiquetada y documentada construida para escalar y durar.',
    'ms5i3':'Gestión de Redes','ms5d3':'Gestión integral de tu infraestructura de red con monitoreo 24/7 y respuesta rápida.',
    'ms5i4':'Firewall y Enrutamiento','ms5d4':'Firewalls de próxima generación y configuración avanzada de enrutamiento para asegurar y optimizar tu tráfico.',
    'more-hero-sub':'Desde seguridad física hasta infraestructura cloud — cubrimos cada capa de tu entorno digital y físico.',
    'mfi1':'Red e Infraestructura IT','mfi1tag':'Infraestructura','mfi1body':'Redes empresariales con UniFi y Cisco Meraki. Cableado estructurado, heatmapping Wi-Fi, segmentación VLAN y monitoreo remoto — todo conectado a nuestra plataforma SOC desde el primer día.',
    'mfi1l1':'<strong>Cableado Estructurado y Racks</strong>Infraestructura organizada y etiquetada para durar.','mfi1l2':'<strong>Heatmapping y Despliegue Wi-Fi</strong>Colocación óptima de puntos de acceso.','mfi1l3':'<strong>Segmentación VLAN</strong>Separa IoT, empleados, invitados y servidores.',
    'mfi2':'Nube y Centro de Datos','mfi2tag':'Cloud','mfi2body':'Arquitectura cloud segura, entornos híbridos y gestión de centros de datos. Resiliente, optimizado y protegido.',
    'mfi2l1':'<strong>Arquitectura Cloud Segura</strong>Seguridad integrada desde el inicio.','mfi2l2':'<strong>Entornos Híbridos</strong>Conecta sistemas locales con la nube.','mfi2l3':'<strong>Backup y Recuperación</strong>Copias automáticas con procedimientos probados.',
    'mfi3':'Soluciones de Conectividad','mfi3tag':'Conectividad','mfi3body':'Internet de alta disponibilidad, SD-WAN y configuraciones de failover. Cada minuto offline te cuesta dinero.',
    'mfi3l1':'<strong>Internet Alta Disponibilidad</strong>Conexiones primaria y de respaldo.','mfi3l2':'<strong>Implementación SD-WAN</strong>Enrutamiento inteligente del tráfico.','mfi3l3':'<strong>VPN y Acceso Remoto</strong>Túneles cifrados para tu equipo.',
    'mfi4':'Seguridad Física','mfi4tag':'Físico','mfi4body':'CCTV HD, cerraduras inteligentes, control de acceso NFC y almacenamiento seguro — integrado con tu entorno IT.',
    'mfi4l1':'<strong>Instalación CCTV HD</strong>Cámaras de alta definición con acceso remoto.','mfi4l2':'<strong>Cerraduras Inteligentes y NFC</strong>Registra cada entrada sin llaves físicas.','mfi4l3':'<strong>Integración IT + Física</strong>Eventos físicos enviados a tu dashboard SOC.',
    'mfi5':'Firewall como Servicio','mfi5tag':'Seguridad de Red','mfi5body':'Firewall de próxima generación como servicio cloud gestionado. Sin hardware, siempre actualizado, siempre aplicando tus políticas.',
    'mfi5l1':'<strong>Prevención de Amenazas</strong>Inspección profunda de paquetes y control de apps.','mfi5l2':'<strong>Filtrado DNS</strong>Bloquea dominios maliciosos antes de conectar.','mfi5l3':'<strong>Reportes en Tiempo Real</strong>Visibilidad total de lo que se bloquea.',
    'mfi6':'Arquitectura Zero Trust','mfi6tag':'Avanzado','mfi6body':'Nunca confiar, siempre verificar. Cada usuario, dispositivo y conexión autenticado antes de otorgar acceso.',
    'mfi6l1':'<strong>Verificación de Identidad</strong>MFA y validación continua.','mfi6l2':'<strong>Acceso Mínimo Necesario</strong>Los usuarios solo acceden a lo que necesitan.','mfi6l3':'<strong>Micro-Segmentación</strong>Contiene el movimiento lateral en tu red.',
    'mfi7':'Formación en Seguridad','mfi7tag':'Seguridad Humana','mfi7body':'Más del 90% de las brechas comienzan con error humano. Entrenamos a tu equipo para reconocer phishing, ingeniería social y amenazas internas.',
    'mfi7l1':'<strong>Simulaciones de Phishing</strong>Campañas reales para probar y educar.','mfi7l2':'<strong>Ingeniería Social</strong>Entrenamiento en tácticas de manipulación.','mfi7l3':'<strong>Amenazas Internas</strong>Enseña al personal a identificar comportamiento sospechoso.','mfi7l4':'<strong>Seguimiento de Progreso</strong>Reportes de mejora medibles.',
    'more-cta-h':'¿Listo para construir tu stack de seguridad completo?','more-cta-sub':'Combina cualquiera de estos con nuestro SOC, Pentesting, IR y GRC.','more-cta-btn':'Obtener Cotización Personalizada',
    'more1':'Red e Infraestructura IT','more2':'Nube y Centro de Datos','more3':'Soluciones de Conectividad',
    'more4':'Seguridad Física','more5':'Firewall como Servicio','more6':'Arquitectura Zero Trust',
    'more7':'Formación en Seguridad',
    'more1d':'Redes de nivel empresarial con UniFi y Cisco Meraki — cableado estructurado, despliegue Wi-Fi, VLANs y conectividad escalable para cualquier entorno.',
    'more2d':'Arquitectura cloud segura, entornos híbridos y gestión de centros de datos — manteniendo tu infraestructura resiliente, optimizada y protegida.',
    'more3d':'Internet de alta disponibilidad, SD-WAN y configuraciones de failover que mantienen tu negocio en línea — incluso cuando las conexiones principales fallan.',
    'more4d':'CCTV HD, cerraduras inteligentes, control de acceso NFC y almacenamiento seguro de grabaciones — integrado con tu entorno IT para visibilidad total.',
    'more5d':'Protección de firewall de próxima generación como servicio cloud gestionado — sin hardware que mantener, siempre actualizado, siempre aplicando tus políticas.',
    'more6d':'Nunca confiar, siempre verificar. Diseñamos marcos Zero Trust que aseguran que cada usuario, dispositivo y conexión sea autenticado antes de otorgar acceso.',
    'more7d':'Tu equipo es tu mayor vulnerabilidad. Entrenamos a tu personal para reconocer phishing, ingeniería social y amenazas internas — convirtiéndolos en tu primera línea de defensa.',
    'soc-label':'SOC-CSIRT','soc-h2':'Operaciones de Seguridad 24/7 con IA',
    'soc-body':'SOC completo sin equipo interno. Monitoreo, detección y respuesta automatizada con IA.',
    'soc-li1':'<strong>Monitoreo Continuo</strong> — Todos los endpoints y servidores vía Wazuh SIEM y XDR',
    'soc-li2':'<strong>Detección con IA</strong> — Motores de correlación que detectan comportamiento sospechoso al instante',
    'soc-li3':'<strong>Respuesta Automatizada</strong> — Playbooks SOAR contienen amenazas antes de que se propaguen',
    'soc-li4':'<strong>Inteligencia de Amenazas</strong> — Impulsado por MISP, rastreando actores que atacan tu industria',
    'soc-li5':'<strong>Soporte de Cumplimiento</strong> — Alineación ISO/IEC 27001:2022 y documentación para auditorías',
    'soc-btn':'Cotizar SOC','soc-visual-label':'Cobertura con IA 24/7',
    'pt-label':'Pruebas de Penetración','pt-h2':'Encuentra tus Vulnerabilidades Antes que sea Muy Tarde',
    'pt-body':'Ataques simulados contra tus sistemas. Informe claro con cada hallazgo y remediación.',
    'pt-li1':'<strong>Pruebas de Aplicaciones Web</strong> — OWASP Top 10, inyección SQL, XSS, CORS, bypass de autenticación',
    'pt-li2':'<strong>Pentesting de Redes</strong> — Interno y externo, reglas de firewall, rutas de movimiento lateral',
    'pt-li3':'<strong>Evaluación de Seguridad Wi-Fi</strong> — Debilidades de cifrado, APs falsos, vulnerabilidades de contraseñas',
    'pt-li4':'<strong>Informe Completo</strong> — Clasificación de severidad, prueba de concepto, lista de remediación',
    'pt-li5':'<strong>Reprueba Incluida</strong> — Verificamos tus correcciones después de la remediación',
    'pt-btn':'Solicitar Cotización de Pentest','pt-visual-label':'Metodología de Fases',
    'ir-label':'CSIRT','ir-h2':'Cuando ocurre un ataque,<br>actuamos de inmediato.',
    'ir-body':'Unidad de Operaciones de Seguridad y Respuesta a Incidentes — el mismo equipo que detecta la amenaza es el que la contiene. Sin traspasos. Sin demoras. Acción rápida y especializada protegiendo tu negocio las 24 horas.',
    'ir-li1':'<strong>Detección y Triaje</strong> — Identificación rápida del alcance de la amenaza y sistemas afectados',
    'ir-li2':'<strong>Contención</strong> — Aislamiento inmediato para detener la propagación del ataque',
    'ir-li3':'<strong>Análisis Forense</strong> — Investigación profunda de la causa raíz y comportamiento del atacante',
    'ir-li4':'<strong>Erradicación</strong> — Eliminación completa de malware, backdoors y persistencia',
    'ir-li5':'<strong>Recuperación y Refuerzo</strong> — Restauración completa con mejoras de seguridad para evitar recurrencia',
    'ir-btn':'Hablar sobre IR','ir-visual-label':'Fases de Respuesta',
    'grc-label':'GRC — Gobernanza, Riesgo y Cumplimiento','grc-h2':'Cumplimiento sin complicaciones.<br>Auditorías siempre listas.',
    'grc-body':'Cumplimiento sin complicaciones. Construimos y mantenemos tu marco GRC.',
    'grc-li1':'<strong>Evaluaciones de Riesgo</strong> — Identificar, cuantificar y priorizar los riesgos de seguridad de tu organización',
    'grc-li2':'<strong>Desarrollo de Políticas</strong> — Políticas de seguridad adaptadas a tu negocio e industria',
    'grc-li3':'<strong>Alineación ISO/IEC 27001</strong> — Guía completa para el camino de certificación',
    'grc-li4':'<strong>Marco NIST</strong> — Postura de ciberseguridad estructurada con el estándar de la industria',
    'grc-li5':'<strong>Preparación para Auditorías</strong> — Documentación, controles y paquetes de evidencia listos para revisión',
    'grc-btn':'Iniciar GRC','grc-visual-label':'Gobernanza · Riesgo · Cumplimiento',
    'partners-label':'Nuestros Socios','partners-h2':'Tecnología de confianza',
    'stat1-label':'Cobertura SOC con IA','stat2-label':'Respuesta Promedio','stat3-label':'Ecosistema de Seguridad','stat4-label':'27001 Alineado',
    'about-label':'Por Qué INVERSSYS','about-h2':'El equipo de ciberseguridad construido para tu empresa',
    'about-p1':'INVERSSYS entrega <strong>ciberseguridad completa como servicio</strong> — sin equipos internos.',
    'about-p2':'Muchas empresas sufren brechas por falta de experiencia real. <strong>Eso cambia con nosotros.</strong>',
    'about-p3':'Con sede en Santo Domingo. Activamente en proceso de certificación <strong>ISO/IEC 27001:2022</strong>.',
    'diff1-title':'SOC-CSIRT 24/7','diff1-body':'Nuestro SOC-CSIRT nunca duerme. Un equipo unificado — detección, contención y respuesta — con IA, las 24 horas.',
    'diff2-title':'Respuesta Inmediata','diff2-body':'Cuando se confirma una amenaza real, actuamos. Sin esperar tickets — la contención comienza en minutos.',
    'diff3-title':'Ecosistema 360° Completo','diff3-body':'SOC-CSIRT, pentesting, respuesta a incidentes, GRC, seguridad física, nube, red — todo bajo un socio estratégico.',
    'diff4-title':'Listo para el Cumplimiento','diff4-body':'Alineado con ISO/IEC 27001 y NIST. Construimos tu postura de cumplimiento y la mantenemos lista para auditorías.',
    'diff5-title':'Integración Cloud Escalable','diff5-body':'Nuestra plataforma escala con tu negocio — desde una sola oficina hasta una operación multilocación conectada a la nube.',
    'diff6-title':'Un Socio Estratégico','diff6-body':'Sin caos de proveedores. INVERSSYS es tu único punto de responsabilidad para toda la pila de seguridad e infraestructura.',
    'pricing-label':'Precios',
    'pricing-h2':'Planes de Ciberseguridad Gestionada',
    'pricing-sub':'Protección, monitoreo y respuesta de nivel empresarial adaptados a tu negocio.',
    'pt-badge':'Más Popular',
    'pc-badge':'Servicio principal',
    'pc-t1':'Nivel 1','pc-t2':'Nivel 2','pc-t3':'Nivel 3',
    'pc-n1':'Essential Security','pc-n2':'MDR','pc-n3':'Enterprise SOC',
    'pc-d1':'Protección básica para empresas que inician su camino en ciberseguridad. Visibilidad en horario laboral con defensa de endpoints.',
    'pc-d2':'Detección y Respuesta Gestionada. Monitoreo 24/7 con visibilidad SIEM completa, analítica con IA y respuesta automatizada.',
    'pc-d3':'Operaciones de seguridad completas con analista dedicado, reportes de cumplimiento, forense y respuesta prioritaria a incidentes.',
    'pc-pu1':'/ dispositivo / mes','pc-pu2':'/ dispositivo / mes','pc-pu3':'/ dispositivo / mes',
    'pc-pn1':'Horario laboral · Lun–Vie','pc-pn2':'Cobertura continua 24/7','pc-pn3':'Precios híbridos disponibles · SLAs personalizados',
    'pc-inc1':'Incluye','pc-inc2':'Incluye','pc-inc3':'Incluye',
    'pf1-1':'Protección de endpoints (XDR)','pf1-2':'Monitoreo SIEM básico','pf1-3':'Alertas por email + SMS',
    'pf1-4':'Informe mensual de seguridad','pf1-5':'Cobertura 24/7','pf1-6':'Inteligencia de amenazas','pf1-7':'IR y forense',
    'pf2-1':'Todo en Essential','pf2-2':'Monitoreo SOC 24/7','pf2-3':'SIEM + analítica conductual con IA',
    'pf2-4':'Integración de inteligencia de amenazas','pf2-5':'Respuesta automatizada SOAR','pf2-6':'Aislamiento de dispositivos + bloqueo IP','pf2-7':'Analista dedicado',
    'pf3-1':'Todo en MDR','pf3-2':'Analista SOC dedicado','pf3-3':'Respuesta prioritaria a incidentes',
    'pf3-4':'Forense digital (stack completo)','pf3-5':'Laboratorio de análisis de malware','pf3-6':'Reportes listos para cumplimiento','pf3-7':'Informes ejecutivos y técnicos',
    'pc-cta1':'Solicitar propuesta','pc-cta2':'Solicitar propuesta','pc-cta3':'Solicitar propuesta',
    'cap-hdr0':'Capacidad','cap-hdr1':'Essential','cap-hdr2':'MDR','cap-hdr3':'Enterprise',
    'cap-r1':'Protección de endpoints (XDR)','cap-r2':'Monitoreo SIEM','cap-r3':'Horas de cobertura',
    'cap-r4':'Analítica conductual con IA','cap-r5':'Inteligencia de amenazas','cap-r6':'Respuesta automatizada SOAR',
    'cap-r7':'Respuesta a incidentes','cap-r8':'Forense digital','cap-r9':'Análisis de malware',
    'cap-r10':'Analista dedicado','cap-r11':'Reportes de cumplimiento',
    'cap-r2e':'Básico','cap-r2m':'Completo','cap-r2x':'Completo',
    'cap-r7e':'Complemento','cap-r7m':'Complemento','cap-r7x':'Incluido',
    'cap-r11m':'Básico','cap-r11x':'Completo',
    'pt-l1':'Ideal para','pt-l2':'Monitoreo','pt-l3':'Protección (XDR)',
    'pt-l4':'SIEM (Visibilidad)','pt-l5':'Inteligencia de Amenazas','pt-l6':'Respuesta a Incidentes',
    'pt-l7':'IR y Forense','pt-l8':'Soporte de Cumplimiento','pt-l9':'Pruebas de Seguridad',
    'pt-l10':'Reportes','pt-l11':'Soporte','pt-l12':'Stack Tecnológico',
    'pt-c1':'1–25 dispositivos','pt-c2':'25–150 dispositivos','pt-c3':'100+ / Multi-ubicación',
    'pt-c4':'Horario laboral','pt-c5':'Monitoreo 24/7','pt-c6':'24/7 Prioritario',
    'pt-c7':'Básico','pt-c8':'Avanzado','pt-c9':'Cobertura Total',
    'pt-c12':'Avanzado<br><span style="color:var(--muted);font-size:12px">Splunk / Sentinel</span>',
    'pt-c15':'✓ <span style="color:var(--muted);font-size:12px">Avanzado</span>',
    'pt-c16':'Solo alertas','pt-c17':'Respuesta Remota','pt-c18':'Analista Dedicado',
    'pt-c23':'Orientación Básica','pt-c24':'Apoyo ISO 27001',
    'pt-c25':'Complemento',
    'pt-c28':'Resumen Mensual',
    'pt-c29':'Actualizaciones semanales<br><span style="color:var(--muted);font-size:12px">+ Informe Detallado</span>',
    'pt-c30':'Ejecutivo +<br><span style="color:var(--muted);font-size:12px">Informes Técnicos</span>',
    'pt-c32':'Correo + Teléfono',
    'pt-c33':'Prioritario +<br><span style="color:var(--muted);font-size:12px">Analista Dedicado</span>',
    'pt-c34':'Open-source<br><span style="color:var(--muted);font-size:12px">(basado en Wazuh)</span>',
    'pt-c35':'Empresarial<br><span style="color:var(--muted);font-size:12px">(XDR + SIEM)</span>',
    'pt-c36':'Stack empresarial avanzado<br><span style="color:var(--muted);font-size:12px">(Splunk / Sentinel + IR)</span>',
    'pricing-cta1':'Comenzar','pricing-cta2':'Iniciar Protección','pricing-cta3':'Solicitar Consultoría',
    'pkg-placeholder':'Paquete de interés',
    'pkg-opt1':'Essential','pkg-opt2':'MDR',
    'pkg-opt3':'Enterprise','pkg-opt4':'Personalizado / No estoy seguro aún',
    'pricing-note':'Todos los precios están en USD. Los planes Enterprise pueden incluir licencias separadas según los requisitos del cliente. Precios personalizados disponibles.',
    'p-feature':'Característica','p-best':'Ideal para','p-best1':'1–10 endpoints','p-best2':'10–50 endpoints','p-best3':'50+ / Multi-ubicación',
    'p-soc':'Monitoreo SOC','p-soc1':'Horario laboral','p-soc2':'24/7 IA','p-soc3':'24/7 IA Prioritario',
    'p-agents':'Agentes Endpoint','p-agents1':'Hasta 10','p-agents2':'Hasta 50','p-agents3':'Ilimitado',
    'p-ti':'Inteligencia de Amenazas','p-ir':'Respuesta a Incidentes','p-ir1':'Email','p-ir2':'Teléfono + Email','p-ir3':'Analista Dedicado',
    'p-grc':'GRC y Cumplimiento','p-grc1':'Preparación ISO 27001','p-grc2':'Soporte Auditoría Completo',
    'p-pt':'Prueba de Penetración','p-pt1':'Servicio adicional','p-pt2':'1× / año','p-pt3':'2× / año',
    'p-report':'Informe Mensual','p-report1':'Resumen','p-report2':'Detallado','p-report3':'Ejecutivo + Técnico','p-cta':'Contáctanos  ·  🇺🇸  ·  🇩🇴  ·  🇵🇦  ·  🇨🇴  ·  🇨🇦',
    'contact-h2':'Protégete.<br>Empieza Hoy.',
    'contact-sub':'Sin presión ni tecnicismos. Evaluamos tu seguridad gratis.',
    'contact-label1':'Teléfono','contact-label2':'Correo','contact-label3':'Dirección',
    'contact-ph1':'Tu nombre','contact-ph5':'Nombre de la empresa','contact-ph6':'Cargo / Título','contact-ph2':'Correo electrónico','contact-ph3':'Teléfono / WhatsApp','contact-ph4':'Cuéntanos sobre tu empresa y lo que necesitas',
    'contact-btn':'Solicitar Evaluación →',
    'footer-copy':'© 2026 INVERSSYS  ·  🇺🇸 USA  ·  🇩🇴 RD  ·  🇵🇦 PAN  ·  🇨🇴 COL  ·  🇨🇦 CAN',
    'cost-label':'El Costo Real de la Seguridad Interna',
    'cost-h2':'¿Por qué pagar por<br>un analista cuando puedes<br>tener un equipo 24/7?',
    'cost-sub':'Construir un SOC interno parece buena idea — hasta que ves los números.',
    'cost-t1':'El Piso Salarial','cost-d1':'Los analistas junior exigen $70k–$90k. Los senior superan $150k. Para cobertura 24/7 necesitas al menos 5 personas cubriendo turnos, vacaciones y rotación.',
    'cost-t2':'La Prima del Manager','cost-d2':'No puedes dejar analistas junior sin supervisión. Un SOC Manager agrega $140k+ a tu presupuesto antes de beneficios o honorarios de reclutamiento.',
    'cost-t3':'El Impuesto de Herramientas','cost-d3':'SIEM, EDR, SOAR y feeds de inteligencia de amenazas pueden alcanzar fácilmente $200k+ en licencias anuales antes de analizar un solo log.',
    'cost-t4':'El Ciclo de Fuga de Talento','cost-d4':'La escasez de talento es crítica. Tu mejor gente será reclutada por la competencia en 12 meses, dejándote con enormes costos de reclutamiento y reentrenamiento.',
    'alt-label':'La Alternativa','alt-h2':'INVERSSYS SOC-CSIRT',
    'alt-body':'Tarifa fija mensual. Equipo completo. Herramientas incluidas. Sin reclutamiento ni contratos.',
    'alt-btn':'Calcula tu Ahorro',
    'alt-l1':'Cobertura 24/7/365','alt-s1':' — Protección inmediata desde el primer día, sin tiempo de adaptación',
    'alt-l2':'Stack Integrado','alt-s2':' — SIEM, EDR, SOAR, Inteligencia de Amenazas incluidos',
    'alt-l3':'Experiencia Senior','alt-s3':' — Sin equipos solo junior, sin analistas sin supervisión',
    'alt-l4':'Cero Riesgo de Talento','alt-s4':' — Sin fuga de talento, sin ciclos de reclutamiento, sin brechas de conocimiento',
    'alt-l5':'Costo Predecible','alt-s5':' — Precio por endpoint, escala con tu negocio',
    'ind-label':'Industrias que Protegemos','ind-h2':'Construido para empresas de todos los sectores',
    'ind-sub':'Cada industria enfrenta amenazas únicas. INVERSSYS entrega protección adaptada a los riesgos específicos de tu negocio.',
    'ind1':'Hoteles y Hospitalidad','ind1r':'Ataques POS, brechas de datos de huéspedes, vulnerabilidades Wi-Fi',
    'ind2':'Clínicas y Salud','ind2r':'Robo de expedientes de pacientes, ransomware, brechas de cumplimiento',
    'ind3':'Restaurantes y Retail','ind3r':'Fraude con tarjetas, phishing, redes sin monitoreo',
    'ind4':'Corporativo y PYMEs','ind4r':'Compromiso de correo empresarial, amenazas internas, pérdida de datos',
    'ind5':'Finanzas y Legal','ind5r':'Cumplimiento regulatorio, fraude bancario, datos confidenciales',
    'ind6':'Educación y Gobierno','ind6r':'Robo de credenciales, amenazas de estados, sistemas heredados',
    'hiw-label':'Cómo Funciona','hiw-h2':'Protegido en 3 pasos. En 24 horas.',
    'hiw-t1':'Evaluación','hiw-b1':'Mapeamos tu superficie de ataque e identificamos vulnerabilidades críticas en 24h.',
    'hiw-t2':'Despliegue','hiw-b2':'Instalamos agentes ligeros y conectamos tu infraestructura a nuestro SOC — sin interrupciones.',
    'hiw-t3':'Protección 24/7','hiw-b3':'IA y analistas monitorean todo 24/7. Amenazas detectadas y neutralizadas. Tú recibes reportes.',
    'hiw-btn':'Ver tus Vulnerabilidades Hoy',
    'whu-label':'El Riesgo de No Actuar','whu-h2':'¿Qué pasa sin nosotros?',
    'whu-sub':'Sin monitoreo, no hay alerta. Solo daños cuando ya es tarde.',
    'whu-btn':'Protégete Ahora',
    'whu-t1':'Los Ataques Pasan Desapercibidos','whu-b1':'Sin monitoreo 24/7, los atacantes pueden estar dentro de tu red por meses — robando datos, mapeando sistemas y preparando un ataque mayor.',
    'whu-t2':'Pérdida de Datos y Ransomware','whu-b2':'El ransomware cifra tus archivos en minutos. Sin contención, un endpoint infectado se convierte en un cierre total del negocio.',
    'whu-t3':'Interrupción del Negocio','whu-b3':'Cada hora de inactividad cuesta dinero, clientes y reputación. La recuperación sin un plan toma días o semanas — con uno, toma horas.',
    'whu-t4':'Exposición Legal y de Cumplimiento','whu-b4':'Una brecha sin controles documentados implica multas, demandas y contratos perdidos. El cumplimiento es tu protección legal.',
    'footer-svc':'Servicios','footer-soc':'SOC','footer-pt':'Pentesting','footer-grc':'GRC','footer-about':'Nosotros','footer-pricing':'Precios','footer-contact':'Contacto',
  },
  fr:{
    'nav-cta':'Contactez-nous','nav-svc':'Services','nav-about':'Pourquoi','nav-pricing':'Tarifs','nav-more':'Plus',
    'dnav1':'Réseau &amp; Infrastructure IT','dnav1d':'Réseaux enterprise, câblage structuré, Wi-Fi, VLANs',
    'dnav2':'Cloud &amp; Centre de Données','dnav2d':'Architecture cloud sécurisée, environnements hybrides',
    'dnav3':'Solutions de Connectivité','dnav3d':'Internet haute disponibilité, SD-WAN, basculement',
    'dnav4':'Sécurité Physique','dnav4d':'CCTV HD, serrures intelligentes, contrôle d\'accès NFC',
    'dnav5':'Pare-feu en tant que Service','dnav5d':'Pare-feu next-gen géré, aucun matériel requis',
    'dnav6':'Architecture Zero Trust','dnav6d':'Ne jamais faire confiance, toujours vérifier — conception ZTA complète',
    'dnav7':'Formation en Sécurité','dnav7d':'Hameçonnage, ingénierie sociale &amp; menaces internes',
    'hero-h1':'Protégez votre<br><em>Entreprise —</em><em>Sans Équipe</em>Interne',
    'hero-sub':'Sécurité enterprise sans équipes internes. SOC-CSIRT 24/7, Pentesting, IR et GRC.',
    'hero-btn1':'Protégé en 24h','hero-btn2':'Parler à un Expert',
    'hero-label':'Cybersécurité en tant que Service',
    'svc-label':'Nos Services',
    'svc-h2':'Cybersécurité<br><span style="color:var(--cyan)">Complète</span><br>Pilotée par IA',
    'svc-sub':'INVERSSYS remplace vos équipes internes. Un partenaire pour toute votre sécurité.',
    'svc1-name':'SOC 24/7 Surveillance (Alimenté par IA)','svc1-desc':'L\'IA surveille en permanence votre environnement via SIEM et XDR — détection, corrélation et réponse automatique aux menaces avant qu\'elles ne causent des dommages.',
    'svc2-name':'Tests d\'Intrusion','svc2-desc':'Les attaques simulées assistées par IA exposent vos véritables vulnérabilités — avec un rapport priorisé et des étapes de remédiation.',
    'svc3-name':'CSIRT','svc3-desc':"Unité Opérations de Sécurité et Réponse aux Incidents — la même équipe qui détecte une menace est celle qui la contient. Aucun transfert. Aucun délai. Action rapide 24h/24.",
    'svc4-name':'GRC — Gouvernance, Risque &amp; Conformité','svc4-desc':'Évaluations des risques par IA, surveillance automatisée des politiques et suivi continu de la conformité — aligné sur ISO 27001 et NIST.',
    'svc5-name':'Investigation Numérique','svc5-desc':'Investigation post-incident et rapports de qualité légale pour la conformité et les procédures judiciaires.',
    'more-label':'Plus de Services',
    'cost-label':'Le Coût Réel de la Sécurité Interne',
    'cost-h2':'Pourquoi payer pour<br>un analyste quand vous<br>pouvez avoir une équipe 24/7 ?',
    'cost-sub':'Construire un SOC interne paraît bien — jusqu\'à ce que vous voyiez les chiffres.',
    'cost-t1':'Le Plancher Salarial','cost-d1':'Les analystes juniors exigent 70 000–90 000 $. Les seniors dépassent 150 000 $. Pour une couverture 24/7, il faut au moins 5 personnes.',
    'cost-t2':'La Prime du Manager','cost-d2':'Vous ne pouvez pas laisser les analystes juniors sans surveillance. Un responsable SOC ajoute 140 000 $+ à votre budget.',
    'cost-t3':'La Taxe Outillage','cost-d3':'SIEM, EDR, SOAR et les flux de renseignements peuvent facilement atteindre 200 000 $+ en licences annuelles.',
    'cost-t4':'Le Cycle de Départ des Talents','cost-d4':'La pénurie de talents est critique. Vos meilleurs éléments seront débauchés dans les 12 mois.',
    'alt-label':'L\'Alternative','alt-h2':'INVERSSYS SOC-CSIRT',
    'alt-body':'Forfait fixe. Équipe complète. Outils inclus. Sans recrutement ni contrats complexes.',
    'alt-btn':'Calculer mes Économies',
    'alt-l1':'Couverture 24/7/365','alt-s1':' — Protection immédiate dès le premier jour',
    'alt-l2':'Stack Intégré','alt-s2':' — SIEM, EDR, SOAR, Threat Intel inclus',
    'alt-l3':'Expertise Senior','alt-s3':' — Pas d\'équipes junior uniquement, pas d\'analystes non supervisés',
    'alt-l4':'Zéro Risque de Talents','alt-s4':' — Pas de débauchage, pas de cycles de recrutement',
    'alt-l5':'Coût Prévisible','alt-s5':' — Tarification par endpoint, évolue avec votre entreprise',
    'ind-label':'Industries que Nous Protégeons','ind-h2':'Conçu pour les entreprises de tous les secteurs',
    'ind-sub':'Chaque secteur fait face à des cybermenaces uniques. INVERSSYS offre une protection adaptée aux risques spécifiques de votre entreprise.',
    'ind1':'Hôtels &amp; Hôtellerie','ind1r':'Attaques POS, violations de données clients, vulnérabilités Wi-Fi',
    'ind2':'Cliniques &amp; Santé','ind2r':'Vol de dossiers patients, ransomware, lacunes de conformité',
    'ind3':'Restaurants &amp; Commerce','ind3r':'Fraude aux cartes, hameçonnage, réseaux non surveillés',
    'ind4':'Entreprises &amp; PME','ind4r':'Compromission des e-mails, menaces internes, perte de données',
    'ind5':'Finance &amp; Juridique','ind5r':'Conformité réglementaire, fraude bancaire, données confidentielles',
    'ind6':'Éducation &amp; Gouvernement','ind6r':'Vol d\'identifiants, menaces étatiques, systèmes hérités',
    'hiw-label':'Comment Ça Fonctionne','hiw-h2':'Protégé en 3 étapes. En 24 heures.',
    'hiw-t1':'Évaluation','hiw-b1':'Nous cartographions votre surface d\'attaque et identifions vos vulnérabilités critiques en 24h.',
    'hiw-t2':'Déploiement','hiw-b2':'Agents légers déployés, infrastructure connectée à notre SOC — zéro interruption.',
    'hiw-t3':'Protection 24/7','hiw-b3':'IA et analystes surveillent 24/7. Menaces détectées, contenues, neutralisées. Rapports inclus.',
    'hiw-btn':'Voir vos Vulnérabilités Aujourd\'hui',
    'whu-label':'Le Risque de Ne Rien Faire','whu-h2':'Que se passe-t-il sans nous ?',
    'whu-sub':'La plupart des entreprises ne découvrent qu\'elles ont été compromises qu\'après qu\'il soit trop tard. Sans surveillance, pas d\'alerte — seulement des dégâts.',
    'whu-btn':'Protégez-vous Maintenant',
    'whu-t1':'Les Attaques Passent Inaperçues','whu-b1':'Sans surveillance 24/7, les attaquants peuvent rester dans votre réseau pendant des mois — volant des données et préparant une attaque plus importante.',
    'whu-t2':'Perte de Données &amp; Ransomware','whu-b2':'Le ransomware chiffre vos fichiers en minutes. Sans containment, un endpoint infecté devient un arrêt total de l\'activité.',
    'whu-t3':'Interruption d\'Activité','whu-b3':'Chaque heure d\'arrêt coûte de l\'argent, des clients et de la réputation. La récupération sans plan prend des jours — avec un plan, des heures.',
    'whu-t4':'Exposition Légale &amp; Conformité','whu-b4':'Une violation sans contrôles documentés entraîne des amendes, des procès et des contrats perdus. La conformité est votre protection légale.',
    'soc-label':'SOC-CSIRT','soc-h2':'Opérations de Sécurité 24/7 Alimentées par IA',
    'soc-body':'La plupart des entreprises ne peuvent pas se permettre une équipe interne complète. INVERSSYS vous offre un SOC complet — surveillance, détection et réponse automatisée — alimenté par l\'IA, pour une fraction du coût.',
    'soc-li1':'<strong>Surveillance Continue</strong>Tous les endpoints et serveurs via SIEM et XDR',
    'soc-li2':'<strong>Détection IA</strong>Moteurs de corrélation qui détectent les comportements suspects instantanément',
    'soc-li3':'<strong>Réponse Automatisée</strong>Playbooks SOAR qui contiennent les menaces avant qu\'elles ne se propagent',
    'soc-li4':'<strong>Renseignement sur les Menaces</strong>MISP-powered, suivi des acteurs ciblant votre secteur',
    'soc-li5':'<strong>Support Conformité</strong>Alignement ISO/IEC 27001:2022 et documentation d\'audit',
    'soc-btn':'Obtenir un Devis SOC','soc-visual-label':'Couverture IA 24/7',
    'pt-label':'Tests d\'Intrusion','pt-h2':'Trouvez vos Vulnérabilités Avant Qu\'il Ne Soit Trop Tard',
    'pt-body':'Attaques simulées sur vos systèmes. Rapport clair avec chaque découverte et remédiation.',
    'pt-li1':'<strong>Tests d\'Applications Web</strong>OWASP Top 10, injection SQL, XSS, CORS, contournements d\'auth',
    'pt-li2':'<strong>Tests d\'Intrusion Réseau</strong>Interne &amp; externe, règles de pare-feu, chemins de mouvement latéral',
    'pt-li3':'<strong>Évaluation Sécurité Wi-Fi</strong>Faiblesses de chiffrement, AP malveillants, vulnérabilités mots de passe',
    'pt-li4':'<strong>Rapport Complet</strong>Évaluations de gravité, preuve de concept, liste de remédiation',
    'pt-li5':'<strong>Re-test Inclus</strong>Nous vérifions vos corrections après remédiation',
    'pt-btn':'Demander un Devis Pentest','pt-visual-label':'Méthodologie en Phases',
    'ir-label':'CSIRT','ir-h2':"Quand une alerte devient attaque, notre CSIRT s'active immédiatement.",
    'ir-body':"Unité Opérations de Sécurité et Réponse aux Incidents — la même équipe qui détecte une menace est celle qui la contient. Aucun transfert. Aucun délai. Action rapide et spécialisée 24h/24.",
    'ir-li1':'<strong>Détection &amp; Triage</strong>Identification rapide de la portée de la menace et des systèmes affectés',
    'ir-li2':'<strong>Confinement</strong>Isolation immédiate pour arrêter la propagation de l\'attaque',
    'ir-li3':'<strong>Analyse Forensique</strong>Investigation approfondie de la cause racine et du comportement de l\'attaquant',
    'ir-li4':'<strong>Éradication</strong>Suppression complète des malwares, backdoors et persistance',
    'ir-li5':'<strong>Récupération &amp; Renforcement</strong>Restauration complète avec améliorations de sécurité',
    'ir-btn':'Nous Contacter','ir-visual-label':'Phases de Réponse',
    'grc-label':'GRC — Gouvernance, Risque &amp; Conformité','grc-h2':'Conformité sans complication.<br>Audits toujours prêts.',
    'grc-body':'La conformité n\'est pas seulement de la paperasse — c\'est le fondement de la confiance client. INVERSSYS construit et maintient votre cadre GRC.',
    'grc-li1':'<strong>Évaluations des Risques</strong>Identifier, quantifier et prioriser les risques de sécurité',
    'grc-li2':'<strong>Développement de Politiques</strong>Politiques de sécurité adaptées à votre entreprise',
    'grc-li3':'<strong>Alignement ISO/IEC 27001</strong>Guidance complète pour le chemin de certification',
    'grc-li4':'<strong>Cadre NIST</strong>Posture de cybersécurité structurée selon la norme industrielle',
    'grc-li5':'<strong>Préparation aux Audits</strong>Documentation, contrôles et packages de preuves prêts',
    'grc-btn':'Démarrer le GRC','grc-visual-label':'Gouvernance · Risque · Conformité',
    'partners-label':'Nos Partenaires','partners-h2':'Technologie de confiance avec laquelle nous travaillons',
    'stat1-label':'Couverture SOC IA','stat2-label':'Réponse Moy. Alertes','stat3-label':'Écosystème Sécurité','stat4-label':'27001 Aligné',
    'about-label':'Pourquoi INVERSSYS','about-h2':'L\'équipe de cybersécurité construite pour votre entreprise',
    'about-p1':'INVERSSYS fournit une <strong>cybersécurité complète en service</strong> — sans équipes internes.',
    'about-p2':'Trop d\'entreprises subissent des violations par manque d\'expertise. <strong>Cela change avec nous.</strong>',
    'about-p3':'Basé à Santo Domingo. Activement en cours de certification <strong>ISO/IEC 27001:2022</strong>.',
    'diff1-title':'SOC-CSIRT 24/7','diff1-body':'Notre SOC-CSIRT ne dort jamais. Une équipe unifiée — détection, confinement et réponse — par IA, 24h/24.',
    'diff2-title':'Réponse Immédiate','diff2-body':'Quand une menace réelle est confirmée, nous agissons. Pas d\'attente — le confinement commence en minutes.',
    'diff3-title':'Écosystème 360° Complet','diff3-body':'SOC-CSIRT, pentesting, réponse aux incidents, GRC, sécurité physique, cloud, réseau — tout sous un seul partenaire stratégique.',
    'diff4-title':'Prêt pour la Conformité','diff4-body':'Aligné ISO/IEC 27001 et NIST. Nous construisons votre posture de conformité et la maintenons prête pour les audits.',
    'diff5-title':'Intégration Cloud Évolutive','diff5-body':'Notre plateforme évolue avec votre entreprise — d\'un seul bureau à une opération multi-sites connectée au cloud.',
    'diff6-title':'Un Partenaire Stratégique','diff6-body':'Pas de chaos de fournisseurs. INVERSSYS est votre seul point de responsabilité pour l\'ensemble de la stack de sécurité.',
    'pricing-label':'Tarifs',
    'pricing-h2':'Plans de Cybersécurité Managée',
    'pricing-sub':'Protection, surveillance et réponse de niveau entreprise adaptées à votre activité.',
    'pt-badge':'Le Plus Populaire',
    'pc-badge':'Service principal',
    'pc-t1':'Niveau 1','pc-t2':'Niveau 2','pc-t3':'Niveau 3',
    'pc-n1':'Essential Security','pc-n2':'MDR','pc-n3':'Enterprise SOC',
    'pc-d1':'Protection de base pour les entreprises débutant en cybersécurité. Visibilité aux heures ouvrables avec défense des endpoints.',
    'pc-d2':'Détection et Réponse Managées. Surveillance 24/7 avec visibilité SIEM complète, analytique IA et réponse automatisée.',
    'pc-d3':'Opérations de sécurité complètes avec analyste dédié, rapports conformité, forensique et réponse prioritaire aux incidents.',
    'pc-pu1':'/ appareil / mois','pc-pu2':'/ appareil / mois','pc-pu3':'/ appareil / mois',
    'pc-pn1':'Heures ouvrables · Lun–Ven','pc-pn2':'Couverture continue 24/7','pc-pn3':'Tarification hybride · SLAs personnalisés',
    'pc-inc1':'Inclut','pc-inc2':'Inclut','pc-inc3':'Inclut',
    'pf1-1':'Protection des endpoints (XDR)','pf1-2':'Surveillance SIEM basique','pf1-3':'Alertes e-mail + SMS',
    'pf1-4':'Rapport mensuel de sécurité','pf1-5':'Couverture 24/7','pf1-6':'Renseignements sur les menaces','pf1-7':'IR et forensique',
    'pf2-1':'Tout en Essential','pf2-2':'Surveillance SOC 24/7','pf2-3':'SIEM + analytique comportementale IA',
    'pf2-4':'Intégration renseignements menaces','pf2-5':'Réponse automatisée SOAR','pf2-6':'Isolation appareils + blocage IP','pf2-7':'Analyste dédié',
    'pf3-1':'Tout en MDR','pf3-2':'Analyste SOC dédié','pf3-3':'Réponse prioritaire aux incidents',
    'pf3-4':'Forensique numérique (stack complet)','pf3-5':'Laboratoire analyse malware','pf3-6':'Rapports conformité','pf3-7':'Rapports exécutifs et techniques',
    'pc-cta1':'Demander un devis','pc-cta2':'Demander un devis','pc-cta3':'Demander un devis',
    'cap-hdr0':'Capacité','cap-hdr1':'Essential','cap-hdr2':'MDR','cap-hdr3':'Enterprise',
    'cap-r1':'Protection des endpoints (XDR)','cap-r2':'Surveillance SIEM','cap-r3':'Heures de couverture',
    'cap-r4':'Analytique comportementale IA','cap-r5':'Renseignements sur les menaces','cap-r6':'Réponse automatisée SOAR',
    'cap-r7':'Réponse aux incidents','cap-r8':'Forensique numérique','cap-r9':'Analyse de malware',
    'cap-r10':'Analyste dédié','cap-r11':'Rapports de conformité',
    'cap-r2e':'Basique','cap-r2m':'Complet','cap-r2x':'Complet',
    'cap-r7e':'En option','cap-r7m':'En option','cap-r7x':'Inclus',
    'cap-r11m':'Basique','cap-r11x':'Complet',
    'pt-l1':'Idéal pour','pt-l2':'Surveillance','pt-l3':'Protection (XDR)',
    'pt-l4':'SIEM (Visibilité)','pt-l5':'Renseignements sur les Menaces','pt-l6':'Réponse aux Incidents',
    'pt-l7':'IR et Forensique','pt-l8':'Support Conformité','pt-l9':'Tests de Sécurité',
    'pt-l10':'Rapports','pt-l11':'Support','pt-l12':'Stack Technologique',
    'pt-c1':'1–25 appareils','pt-c2':'25–150 appareils','pt-c3':'100+ / Multi-site',
    'pt-c4':'Heures ouvrables','pt-c5':'Surveillance 24/7','pt-c6':'24/7 Prioritaire',
    'pt-c7':'Basique','pt-c8':'Avancé','pt-c9':'Couverture Complète',
    'pt-c12':'Avancé<br><span style="color:var(--muted);font-size:12px">Splunk / Sentinel</span>',
    'pt-c15':'✓ <span style="color:var(--muted);font-size:12px">Avancé</span>',
    'pt-c16':'Alertes uniquement','pt-c17':'Réponse à Distance','pt-c18':'Analyste Dédié',
    'pt-c23':'Conseil de Base','pt-c24':'Support ISO 27001',
    'pt-c25':'En option',
    'pt-c28':'Résumé Mensuel',
    'pt-c29':'Mises à jour hebdomadaires<br><span style="color:var(--muted);font-size:12px">+ Rapport Détaillé</span>',
    'pt-c30':'Exécutif +<br><span style="color:var(--muted);font-size:12px">Rapports Techniques</span>',
    'pt-c32':'E-mail + Téléphone',
    'pt-c33':'Prioritaire +<br><span style="color:var(--muted);font-size:12px">Analyste Dédié</span>',
    'pt-c34':'Open-source<br><span style="color:var(--muted);font-size:12px">(basé sur Wazuh)</span>',
    'pt-c35':'Entreprise<br><span style="color:var(--muted);font-size:12px">(XDR + SIEM)</span>',
    'pt-c36':'Stack entreprise avancé<br><span style="color:var(--muted);font-size:12px">(Splunk / Sentinel + IR)</span>',
    'pricing-cta1':'Commencer','pricing-cta2':'Démarrer la Protection','pricing-cta3':'Demander une Consultation',
    'pkg-placeholder':'Package souhaité',
    'pkg-opt1':'Essential','pkg-opt2':'MDR',
    'pkg-opt3':'Enterprise','pkg-opt4':'Personnalisé / Pas encore sûr',
    'pricing-note':'Tous les prix sont en USD. Les plans Enterprise peuvent inclure des licences séparées selon les exigences du client. Tarification personnalisée disponible.',
    'p-feature':'Fonctionnalité','p-best':'Idéal pour','p-best1':'1–10 endpoints','p-best2':'10–50 endpoints','p-best3':'50+ / Multi-sites',
    'p-soc':'Surveillance SOC','p-soc1':'Heures ouvrables','p-soc2':'24/7 IA','p-soc3':'24/7 IA Prioritaire',
    'p-agents':'Agents Endpoint','p-agents1':'Jusqu\'à 10','p-agents2':'Jusqu\'à 50','p-agents3':'Illimité',
    'p-ti':'Renseignement sur les Menaces','p-ir':'Réponse aux Incidents','p-ir1':'E-mail','p-ir2':'Téléphone + E-mail','p-ir3':'Analyste Dédié',
    'p-grc':'GRC &amp; Conformité','p-grc1':'Préparation ISO 27001','p-grc2':'Support Audit Complet',
    'p-pt':'Test d\'Intrusion','p-pt1':'Service additionnel','p-pt2':'1× / an','p-pt3':'2× / an',
    'p-report':'Rapport Mensuel','p-report1':'Résumé','p-report2':'Détaillé','p-report3':'Exécutif + Technique','p-cta':'Contactez-nous',
    'contact-h2':'Soyez Protégé.<br>Commencez Aujourd\'hui.',
    'contact-sub':'Sans pression ni jargon. Évaluation de sécurité gratuite.',
    'contact-label1':'Téléphone','contact-label2':'E-mail','contact-label3':'Adresse',
    'contact-ph1':'Votre nom','contact-ph5':'Nom de l\'entreprise','contact-ph6':'Poste / Titre','contact-ph2':'Adresse e-mail','contact-ph3':'Téléphone / WhatsApp','contact-ph4':'Parlez-nous de votre entreprise et de vos besoins',
    'contact-btn':'Demander une Évaluation →',
    'footer-copy':'© 2026 INVERSSYS · 🇺🇸 USA · 🇩🇴 DR · 🇵🇦 PAN · 🇨🇴 COL · 🇨🇦 CAN',
    'footer-svc':'Services','footer-soc':'SOC','footer-pt':'Pentesting','footer-grc':'GRC','footer-about':'À Propos','footer-pricing':'Tarifs','footer-contact':'Contact',
    'more-hero-label':'Services Additionnels','more-hero-h2':'Technologie, Connectivité<br>&amp; <span style="color:var(--cyan)">Sécurité Intégrale</span>',
    'more-hero-sub':'De la sécurité physique à l\'infrastructure cloud — nous couvrons chaque couche de votre environnement.',
    'ms1-label':'Cybersécurité','ms1-h2':'Protection Enterprise.<br><span style="color:var(--cyan)">Pilotée par IA.</span>','ms1-sub':'SOC, XDR, Zero Trust, Pare-feu en tant que Service et Ethical Hacking — cybersécurité complète pour votre organisation.',
    'ms1i1':'SOC-CSIRT 24/7','ms1d1':'Centre d\'opérations de sécurité IA surveillant votre environnement complet en permanence.',
    'ms1i2':'XDR — Détection &amp; Réponse Étendue','ms1d2':'Détection unifiée des menaces sur les endpoints, réseaux et environnements cloud.',
    'ms1i3':'Architecture Zero Trust','ms1d3':'Ne jamais faire confiance, toujours vérifier. Chaque utilisateur et appareil authentifié avant l\'accès.',
    'ms1i4':'Pare-feu en tant que Service','ms1d4':'Pare-feu next-gen géré dans le cloud — sans matériel, toujours à jour.',
    'ms1i5':'Ethical Hacking / Pentesting','ms1d5':'Attaques simulées du monde réel pour trouver les vulnérabilités avant les criminels.',
    'ms1i6':'Formation en Sécurité','ms1d6':'Formez votre équipe à reconnaître le hameçonnage, l\'ingénierie sociale et les menaces internes.',
    'ms2-label':'Cloud &amp; Centre de Données','ms2-h2':'Infrastructure pour<br><span style="color:var(--cyan)">Environnements Critiques</span>','ms2-sub':'Cloud privé, public, modèles hybrides et colocation — infrastructure résiliente pour les organisations à forte demande.',
    'ms2i1':'Cloud Privé','ms2d1':'Infrastructure dédiée pour les organisations avec des exigences strictes de conformité et de contrôle total des données.',
    'ms2i2':'Cloud Public','ms2d2':'Plateformes cloud pour la sauvegarde, le stockage et le calcul à la demande. Évoluez rapidement.',
    'ms2i3':'Modèle Hybride','ms2d3':'INVERSSYS intègre le cloud avec la connectivité, la cybersécurité et la continuité opérationnelle en un seul écosystème.',
    'ms2i4':'Data Center &amp; Colocation','ms2d4':'Hébergement critique avec SLA 100%, infrastructure redondante, accès biométrique et conformité réglementaire.',
    'ms2i5':'Haute Disponibilité','ms2d5':'SLA 100% avec infrastructure redondante et alimentation électrique ininterrompue.',
    'ms2i6':'Optimisation des Coûts','ms2d6':'Économie d\'échelle. Réduisez l\'investissement en matériel propre via des services cloud gérés.',
    'ms3-label':'Connectivité Entreprise','ms3-h2':'Votre organisation,<br><span style="color:var(--cyan)">toujours connectée</span>','ms3-sub':'Internet dédié, fibre GPON, Cloud Connect et Lignes Ethernet Privées — connectivité enterprise.',
    'ms3i1':'Internet Dédié','ms3d1':'Connexions haute performance optimisées pour le cloud et les applications métier critiques.',
    'ms3i2':'Fibre GPON','ms3d2':'Connectivité fibre optique idéale pour les PME. Réseau stable et évolutif à la mesure.',
    'ms3i3':'Cloud Connect','ms3d3':'Lien privé et sécurisé direct vers votre cloud sans passer par Internet public.',
    'ms3i4':'Lignes Ethernet Privées','ms3d4':'Connectez les succursales avec une bande passante dédiée et une sécurité garantie.',
    'ms4-label':'Sécurité Physique','ms4-h2':'Protégez les personnes,<br><span style="color:var(--cyan)">installations &amp; actifs</span>','ms4-sub':'Vidéosurveillance IP, contrôle d\'accès, VMS et centres de commandement C2 — intégré avec votre environnement IT.',
    'ms4i1':'Vidéosurveillance IP','ms4d1':'Transmission vidéo/audio HD sur réseau local ou Internet. Flexibilité totale et accès à distance.',
    'ms4i2':'Contrôle d\'Accès','ms4d2':'Dispositifs avancés pour réguler l\'entrée des personnes et véhicules — NFC, biométrique, sans clé.',
    'ms4i3':'Centres de Commandement C2','ms4d3':'Gestion des urgences avec technologie avancée et coordination en temps réel dans toutes les installations.',
    'ms4i4':'VMS — Gestion Vidéo','ms4d4':'Logiciel pour surveiller et analyser la vidéo en temps réel depuis plusieurs sources simultanément.',
    'ms5-label':'Infrastructure IT','ms5-h2':'Réseaux construits<br><span style="color:var(--cyan)">pour performer</span>','ms5-sub':'Réseaux LAN/Wi-Fi enterprise, câblage structuré et gestion intégrale — la base sur laquelle tout fonctionne.',
    'ms5i1':'LAN / Wi-Fi Entreprise','ms5d1':'Réseaux filaires et sans fil haute performance conçus pour les environnements enterprise à grande échelle.',
    'ms5i2':'Câblage Structuré','ms5d2':'Infrastructure de câblage organisée, étiquetée et documentée construite pour durer.',
    'ms5i3':'Gestion de Réseau','ms5d3':'Gestion de bout en bout de votre infrastructure réseau avec surveillance 24/7 et réponse rapide.',
    'ms5i4':'Pare-feu &amp; Routage','ms5d4':'Pare-feu next-gen et configuration avancée du routage pour sécuriser et optimiser votre flux de trafic.',
    'more-cta-h':'Prêt à construire votre stack de sécurité complet ?','more-cta-sub':'Combinez n\'importe lequel de ces services avec notre offre principale SOC, Pentesting, IR et GRC.','more-cta-btn':'Obtenir un Devis Personnalisé',
  }
};

let lang='en';
const langCycle={en:'es',es:'fr',fr:'en'};
const langFlag={en:'🇪🇸',es:'🇫🇷',fr:'🇺🇸'};
const langLabel2={en:'ES',es:'FR',fr:'EN'};

function toggleLang(){
  lang=langCycle[lang];
  const t=T[lang];
  document.getElementById('langLabel').textContent=langLabel2[lang];
  var mob=document.getElementById('langLabelMobile');
  if(mob) mob.textContent=langLabel2[lang];
  document.querySelectorAll('.lang-flag').forEach(function(el){ el.textContent=langFlag[lang]; });
  document.documentElement.lang=lang;
  const navEl=document.querySelector('.nav');
  if(navEl){navEl.classList.toggle('fr-nav',lang==='fr');}

  const s=(id,k,html)=>{const el=document.getElementById(id);if(el&&t[k]){if(html)el.innerHTML=t[k];else el.textContent=t[k];}};
  const ph=(id,k)=>{const el=document.getElementById(id);if(el&&t[k])el.placeholder=t[k];};

  // MORE SERVICES PAGE
  s('more-hero-label','more-hero-label'); s('more-hero-h2','more-hero-h2',true); s('more-hero-sub','more-hero-sub',true);
  s('more-cta-h','more-cta-h',true); s('more-cta-sub','more-cta-sub',true); s('more-cta-btn','more-cta-btn');
  for(let sec=1;sec<=5;sec++){
    s('ms'+sec+'-label','ms'+sec+'-label'); s('ms'+sec+'-h2','ms'+sec+'-h2',true); s('ms'+sec+'-sub','ms'+sec+'-sub',true);
    for(let i=1;i<=6;i++){ s('ms'+sec+'i'+i,'ms'+sec+'i'+i,true); s('ms'+sec+'d'+i,'ms'+sec+'d'+i,true); }
  }
  const backEl=document.getElementById('back-btn-label');
  const breadEl=document.getElementById('more-breadcrumb');
  if(backEl) backEl.textContent=lang==='es'?'Volver al Inicio':lang==='fr'?'Retour à l\'Accueil':'Back to Home';
  if(breadEl) breadEl.textContent=lang==='es'?'INVERSSYS / Más Servicios':lang==='fr'?'INVERSSYS / Plus de Services':'INVERSSYS / More Services';
  // INDUSTRIES
  s('ind-label','ind-label'); s('ind-h2','ind-h2',true); s('ind-sub','ind-sub',true);
  for(let i=1;i<=6;i++){s('ind'+i,'ind'+i,true); s('ind'+i+'r','ind'+i+'r',true);}
  // HOW IT WORKS
  s('hiw-label','hiw-label'); s('hiw-h2','hiw-h2',true);
  for(let i=1;i<=3;i++){s('hiw-t'+i,'hiw-t'+i); s('hiw-b'+i,'hiw-b'+i,true);}
  s('hiw-btn','hiw-btn');
  // WITHOUT US
  s('whu-label','whu-label'); s('whu-h2','whu-h2',true); s('whu-sub','whu-sub',true); s('whu-btn','whu-btn');
  for(let i=1;i<=4;i++){s('whu-t'+i,'whu-t'+i); s('whu-b'+i,'whu-b'+i,true);}
  // COST SECTION
  s('cost-label','cost-label'); s('cost-h2','cost-h2',true); s('cost-sub','cost-sub',true);
  for(let i=1;i<=4;i++){s('cost-t'+i,'cost-t'+i); s('cost-d'+i,'cost-d'+i,true);}
  s('alt-label','alt-label'); s('alt-h2','alt-h2',true); s('alt-body','alt-body',true); s('alt-btn','alt-btn');
  for(let i=1;i<=5;i++){s('alt-l'+i,'alt-l'+i); s('alt-s'+i,'alt-s'+i);}
  // NAV
  s('nav-cta','nav-cta'); s('nav-svc','nav-svc'); s('nav-about','nav-about'); s('nav-pricing','nav-pricing'); s('nav-more','nav-more');
  // MOBILE DRAWER MENU
  s('mob-svc','nav-svc'); s('mob-about','nav-about'); s('mob-pricing','nav-pricing'); s('mob-more','nav-more');
  for(let i=1;i<=7;i++){s('dnav'+i,'dnav'+i,true); s('dnav'+i+'d','dnav'+i+'d',true);}
  // HERO
  s('hero-label','hero-label'); s('hero-h1','hero-h1',true); s('hero-sub','hero-sub',true);
  s('hero-btn1','hero-btn1'); s('hero-btn2','hero-btn2');
  // SERVICES
  s('svc-label','svc-label'); s('svc-h2','svc-h2',true); s('svc-sub','svc-sub',true);
  s('svc1-name','svc1-name'); s('svc1-desc','svc1-desc',true);
  s('svc2-name','svc2-name'); s('svc2-desc','svc2-desc',true);
  s('svc3-name','svc3-name'); s('svc3-desc','svc3-desc',true);
  s('svc4-name','svc4-name',true); s('svc4-desc','svc4-desc',true);
  s('svc5-name','svc5-name',true); s('svc5-desc','svc5-desc',true);
  s('more-label','more-label');
  for(let i=1;i<=7;i++){s('more'+i,'more'+i,true); s('more'+i+'d','more'+i+'d',true);}
  // SOC
  s('soc-label','soc-label'); s('soc-h2','soc-h2',true); s('soc-body','soc-body',true);
  for(let i=1;i<=5;i++) s('soc-li'+i,'soc-li'+i,true);
  s('soc-btn','soc-btn'); s('soc-visual-label','soc-visual-label');
  // PENTEST
  s('pt-label','pt-label'); s('pt-h2','pt-h2',true); s('pt-body','pt-body',true);
  for(let i=1;i<=5;i++) s('pt-li'+i,'pt-li'+i,true);
  s('pt-btn','pt-btn'); s('pt-visual-label','pt-visual-label');
  // IR
  s('ir-label','ir-label'); s('ir-h2','ir-h2',true); s('ir-body','ir-body',true);
  for(let i=1;i<=5;i++) s('ir-li'+i,'ir-li'+i,true);
  s('ir-btn','ir-btn'); s('ir-visual-label','ir-visual-label');
  // GRC
  s('grc-label','grc-label',true); s('grc-h2','grc-h2',true); s('grc-body','grc-body',true);
  for(let i=1;i<=5;i++) s('grc-li'+i,'grc-li'+i,true);
  s('grc-btn','grc-btn'); s('grc-visual-label','grc-visual-label');
  // PARTNERS
  s('partners-label','partners-label'); s('partners-h2','partners-h2',true);
  // STATS
  for(let i=1;i<=4;i++) s('stat'+i+'-label','stat'+i+'-label');
  // ABOUT
  s('about-label','about-label'); s('about-h2','about-h2',true);
  s('about-p1','about-p1',true); s('about-p2','about-p2',true); s('about-p3','about-p3',true);
  for(let i=1;i<=6;i++){s('diff'+i+'-title','diff'+i+'-title'); s('diff'+i+'-body','diff'+i+'-body',true);}
  // PRICING
  s('pricing-label','pricing-label'); s('pricing-h2','pricing-h2',true);
  s('pricing-sub','pricing-sub'); s('pricing-note','pricing-note',true);
  s('pt-badge','pt-badge');
  for(var i=1;i<=11;i++) s('pt-l'+i,'pt-l'+i);
  // Package cards
  s('pc-badge','pc-badge');
  for(var i=1;i<=3;i++){
    s('pc-t'+i,'pc-t'+i); s('pc-n'+i,'pc-n'+i); s('pc-d'+i,'pc-d'+i);
    s('pc-pu'+i,'pc-pu'+i); s('pc-pn'+i,'pc-pn'+i); s('pc-inc'+i,'pc-inc'+i); s('pc-cta'+i,'pc-cta'+i);
    for(var j=1;j<=7;j++) s('pf'+i+'-'+j,'pf'+i+'-'+j);
  }
  // Capability table headers + row labels
  s('cap-hdr0','cap-hdr0'); s('cap-hdr1','cap-hdr1'); s('cap-hdr2','cap-hdr2'); s('cap-hdr3','cap-hdr3');
  for(var i=1;i<=11;i++) s('cap-r'+i,'cap-r'+i);
  s('cap-r2e','cap-r2e'); s('cap-r2m','cap-r2m'); s('cap-r2x','cap-r2x');
  s('cap-r7e','cap-r7e'); s('cap-r7m','cap-r7m'); s('cap-r7x','cap-r7x');
  s('cap-r11m','cap-r11m'); s('cap-r11x','cap-r11x');
  // Cells that need text translation (✓ and — cells are skipped)
  [1,2,3,4,5,6,7,8,9,12,15,16,17,18,23,24,25,28,29,30,32,33].forEach(function(n){
    s('pt-c'+n,'pt-c'+n,true);
  });
  s('pricing-cta1','pricing-cta1'); s('pricing-cta2','pricing-cta2'); s('pricing-cta3','pricing-cta3');
  s('pkg-placeholder','pkg-placeholder'); s('pkg-opt1','pkg-opt1'); s('pkg-opt2','pkg-opt2'); s('pkg-opt3','pkg-opt3'); s('pkg-opt4','pkg-opt4');
  document.querySelectorAll('[data-pricing]').forEach(el=>{
    const k='p-'+el.getAttribute('data-pricing');
    if(t[k]) el.textContent=t[k];
  });
  // CONTACT
  s('contact-h2','contact-h2',true); s('contact-sub','contact-sub',true);
  s('contact-label1','contact-label1'); s('contact-label2','contact-label2'); s('contact-label3','contact-label3');
  ph('contact-ph1','contact-ph1'); ph('contact-ph5','contact-ph5'); ph('contact-ph6','contact-ph6'); ph('contact-ph2','contact-ph2'); ph('contact-ph3','contact-ph3'); ph('contact-ph4','contact-ph4');
  s('contact-btn','contact-btn');
  // Form success card
  var fsLabel={'en':'Message Received','es':'Mensaje Recibido','fr':'Message Reçu'};
  var fsTitle={'en':"We'll be in touch within 24 hours.",'es':'Estaremos en contacto en 24 horas.','fr':'Nous vous contacterons sous 24 heures.'};
  var fsBody={'en':'Our team monitors threats 24/7 — your message is already in our queue. Expect a response from <span style="color:var(--white)">info@inverssys.com</span>.','es':'Nuestro equipo monitorea amenazas 24/7 — tu mensaje ya está en nuestra cola. Espera respuesta de <span style="color:var(--white)">info@inverssys.com</span>.','fr':'Notre équipe surveille les menaces 24h/24 — votre message est déjà dans notre file. Attendez une réponse de <span style="color:var(--white)">info@inverssys.com</span>.'};
  var fsl=document.getElementById('fs-label'); if(fsl) fsl.textContent=fsLabel[lang];
  var fst=document.getElementById('fs-title'); if(fst) fst.textContent=fsTitle[lang];
  var fsb=document.getElementById('fs-body'); if(fsb) fsb.innerHTML=fsBody[lang];
  // FOOTER
  s('footer-copy','footer-copy');
  ['footer-svc','footer-soc','footer-pt','footer-grc','footer-about','footer-pricing','footer-contact'].forEach(id=>s(id,id));
}

function toggleMobileNav(){
  var drawer = document.getElementById('mobile-drawer');
  var overlay = document.getElementById('drawer-overlay');
  var h = document.getElementById('hamburger');
  var isOpen = drawer.classList.toggle('open');
  if(overlay) overlay.classList.toggle('open', isOpen);
  h.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeMobileNav(){
  var drawer = document.getElementById('mobile-drawer');
  var overlay = document.getElementById('drawer-overlay');
  var h = document.getElementById('hamburger');
  if(drawer) drawer.classList.remove('open');
  if(overlay) overlay.classList.remove('open');
  if(h) h.classList.remove('open');
  document.body.style.overflow = '';
}

// Netlify Forms AJAX handler
const form = document.getElementById('contact-form');
if(form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = form.querySelector('.f-submit');
    const success = document.getElementById('form-success');
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.6';
    btn.disabled = true;

    // Encode as URL-encoded for Netlify Forms
    const get = function(id){ var el=document.getElementById(id); return el ? el.value.trim() : ''; };
    const data = new URLSearchParams({
      'form-name':        'contact',
      'Name':             get('contact-ph1'),
      'Company':          get('contact-ph5'),
      'Position':         get('contact-ph6'),
      'Package':          get('contact-pkg'),
      'Email':            get('contact-ph2'),
      'Phone':            get('contact-ph3'),
      'Message':          get('contact-ph4')
    });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString()
      });
      if(res.ok) {
        form.reset();
        form.style.display = 'none';
        if(success) { success.style.display = 'block'; }
      } else {
        btn.textContent = 'Error — try again';
        btn.style.opacity = '1';
        btn.disabled = false;
      }
    } catch(err) {
      btn.textContent = 'Error — try again';
      btn.style.opacity = '1';
      btn.disabled = false;
    }
  });
}

function showMore(e) {
  e.preventDefault();
  document.body.classList.add('show-more');
  window.scrollTo({top:0, behavior:'instant'});
}

function showMain(anchor) {
  document.body.classList.remove('show-more');
  if(anchor) {
    setTimeout(()=>{ const el=document.querySelector(anchor); if(el) el.scrollIntoView({behavior:'smooth'}); }, 50);
  } else {
    window.scrollTo({top:0, behavior:'instant'});
  }
}

// ── Event listeners (replaces all inline onclick attributes) ──────────
document.addEventListener('DOMContentLoaded', function() {
  function on(id, evt, fn) {
    var el = document.getElementById(id);
    if(el) el.addEventListener(evt, fn);
  }
  function onAll(sel, evt, fn) {
    document.querySelectorAll(sel).forEach(function(el){ el.addEventListener(evt, fn); });
  }

  // Hamburger
  on('hamburger', 'click', toggleMobileNav);

  // Drawer close & overlay
  on('drawer-close-btn', 'click', closeMobileNav);
  on('drawer-overlay', 'click', closeMobileNav);
  on('drawer-overlay', 'touchstart', function(e){ e.preventDefault(); closeMobileNav(); });

  // Logo links (scroll to top)
  on('nav-logo-link', 'click', function(e){ e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });
  on('footer-logo-link', 'click', function(e){ e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });

  // Lang toggles
  on('lang-toggle-desktop', 'click', toggleLang);
  on('drawer-lang-btn', 'click', function(){ toggleLang(); closeMobileNav(); });

  // Nav CTA
  on('nav-cta', 'click', showMain);

  // Desktop nav links
  on('nav-svc',     'click', function(){ showMain(); });
  on('nav-more',    'click', function(e){ showMore(e); });
  on('nav-soc',     'click', function(){ showMain('#soc-csirt'); });
  on('nav-pentest', 'click', function(){ showMain(); });
  on('nav-grc',     'click', function(){ showMain(); });
  on('nav-about',   'click', function(){ showMain(); });
  on('nav-pricing', 'click', function(){ showMain(); });

  // Mobile drawer nav links (close drawer first, then navigate)
  ['mob-svc','mob-about','mob-pricing','mob-free-assess','mob-pentest','mob-grc'].forEach(function(id){
    on(id, 'click', function(){ closeMobileNav(); showMain(); });
  });
  on('mob-more', 'click', function(e){ closeMobileNav(); showMore(e); });
  on('mob-soc',  'click', function(){ closeMobileNav(); showMain('#soc-csirt'); });

  // Hero / CTA buttons
  on('hero-btn1', 'click', function(){ showMain(); });
  on('hero-btn2', 'click', function(){ showMain(); });
  on('more-cta-btn', 'click', function(){ showMain(); setTimeout(function(){ var el=document.getElementById('contact'); if(el) el.scrollIntoView({behavior:'smooth'}); }, 320); });
  function goToForm(pkg) {
    // Hide "more" view if active, but don't scroll to top
    document.body.classList.remove('show-more');
    var form = document.getElementById('contact-form');
    if(form) {
      form.scrollIntoView({behavior:'smooth', block:'start'});
      if(pkg) {
        var sel = document.getElementById('contact-pkg');
        if(sel) sel.value = pkg;
      }
    }
  }
  on('pricing-cta1', 'click', function(e){ e.preventDefault(); goToForm('Essential'); });
  on('pricing-cta2', 'click', function(e){ e.preventDefault(); goToForm('MDR'); });
  on('pricing-cta3', 'click', function(e){ e.preventDefault(); goToForm('Enterprise'); });

  // More section back button
  on('more-back-btn', 'click', function(){ showMain(); });
  // Hover styles for back button via CSS (no inline onmouseover)
});
