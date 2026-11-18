export const projects = [
  {
    id: 1,
    title: "Multi-Industry AI Voice Agent Platform",
    category: "Multi-Agent Voice AI / Production",
    image: "/projects/voice_ai.png",
    technologies: ["GPT-4", "Claude", "Retell", "Vapi", "Twilio", "Speech-to-Text", "Kafka", "Docker", "Kubernetes", "Supabase", "MongoDB"],
    description: "A multi-agent voice platform that answers calls for 16+ salons, cafés, and clinics. It cut handling time by 40% and keeps escalations under 10%.",
    expandedContent: `
The problem: salons, cafés, and clinics were missing calls, and every missed call was a lost booking or order. Front-desk staff couldn't answer the phone and serve the customer in front of them at the same time.

The architecture: a router agent classifies each caller's intent in real time and hands the call to a specialist. A booking agent handles appointments, a menu agent handles orders and dietary questions, and an availability agent handles staff schedules and opening hours. Each specialist can only call the tools for its own job, which keeps its answers grounded and lowers the risk of hallucinations.

Memory over live data: short-term memory holds the state of the current conversation, so callers never have to repeat themselves. Long-term memory in Supabase and MongoDB remembers returning callers' preferences and history. Every agent reads live business data, so the slots it offers can actually be booked.

The voice stack: telephony runs on Twilio, with Retell and Vapi orchestrating the voice layer and streaming speech-to-text keeping turn-taking fast. GPT-4 and Claude are both available, so each task uses the model best suited to it. Kafka streams call events to downstream systems. The services run in Docker on Kubernetes, so one platform scales across many businesses and industries.

Results: the platform is live at 16+ businesses. Average handling time dropped 40%, and fewer than 10% of calls need a human.
    `
  },
  {
    id: 2,
    title: "Facial Recognition Loyalty",
    category: "Computer Vision / Android Kiosk",
    image: "/projects/facial_rec.png",
    technologies: ["OpenCV", "DeepFace", "Android Kiosks", "GCP Cloud Run", "Docker", "REST APIs"],
    description: "End-to-end Facial Recognition loyalty system deployed on Android-based kiosks.",
    expandedContent: `
I led the development of a Facial Recognition loyalty system designed for frictionless customer identification across retail storefronts. Built for deployment on Android-based kiosks, the system utilizes OpenCV and DeepFace to scan and authenticate returning customers securely at checkout.

The resulting computer vision pipeline achieved over 95% recognition accuracy, allowing retail clients to automatically apply personalized loyalty rewards without requiring physical cards or phone numbers.

To support the heavy computation of simultaneous kiosk requests, I migrated the on-premise containerized workloads to GCP Cloud Run using Docker. This distributed computing environment enabled robust auto-scaling, successfully mitigating zero downtime during 3x holiday traffic spikes while concurrently cutting deployment cycles by 60%.
    `
  },
  {
    id: 3,
    title: "Predictive Location Pricing",
    category: "Machine Learning / Data Pipeline",
    image: "/projects/ml_pipeline.png",
    technologies: ["Python", "Scikit-Learn", "Pandas", "BigQuery", "Geospatial Analysis", "Microservices"],
    description: "Location-based price prediction microservices benchmarking competitor store pricing in real-time.",
    expandedContent: `
To give retail clients a competitive edge, I developed a location-based price prediction microservice. This project required synthesizing massive amounts of geospatial and comparative market data into actionable pricing recommendations.

Leveraging Python and Scikit-Learn, I structured a predictive model that benchmarks competitor store pricing locally in real-time. By analyzing distance, median local income, and live competitor catalog changes, the system provides optimal dynamic price recommendations dynamically without manual analyst intervention.

The resulting distributed service operates seamlessly in production, continuously analyzing and improving clients' competitive positioning and direct ROI.
    `
  },
  {
    id: 4,
    title: "Automated LLM Fallback System",
    category: "Distributed AI Infrastructure / AWS",
    image: "/projects/llm_fallback.png",
    technologies: ["AWS EC2", "AWS S3", "Vicuna LLM", "HuggingFace Transformers", "LangChain", "FAISS"],
    description: "Designed a serverless offline LLM fallback system to mitigate API latency spikes.",
    expandedContent: `
During my tenure at Conch AI, ensuring reliability for AI-driven products was paramount. We faced significant challenges with latency spikes and timeouts from external models like ChatGPT, which directly degraded user experience.

To solve this, I designed and deployed an automated LLM fallback architecture using AWS EC2, S3, and serverless Lambda endpoints. The system acts as an intelligent circuit breaker: whenever primary API response times exceeded a strict 200ms SLA, queries were automatically rerouted to our internal offline models.

To power this fallback layer, I fine-tuned open-source Vicuna LLMs on domain-specific datasets using HuggingFace Transformers. I then constructed a robust RAG (Retrieval-Augmented Generation) pipeline using FAISS vector databases and LangChain for context-grounded, hallucination-reduced inference. This architecture decreased user-facing AI downtime by 30% and achieved sub-500ms fallback latency at production scale without requiring dedicated GPU infrastructure.
    `
  },
  {
    id: 5,
    title: "Asthma Predictive Pipeline",
    category: "Healthcare Analytics / Data Science",
    image: "/projects/asthma_pipeline.png",
    technologies: ["Python", "Pandas", "Time-Series Analysis", "Predictive Modeling", "AirFlow ETL"],
    description: "Built ML pipelines predicting asthma hospitalization rates from environmental sensor data.",
    expandedContent: `
At the City University of New York, I operated as a Graduate Assistant specializing in Applied Data Analytics, where my work intersected public health and machine learning.

I engineered a predictive ML pipeline designed to forecast asthma hospitalization rates by analyzing hyper-local air quality sensor data (PM2.5, PM10, NO₂, O₃) cross-referenced against 50,000+ patient records. A key challenge was standardizing multi-source environmental data—I automated efficient ETL pipelines using Python and Pandas, which reduced preprocessing time by over 60%.

From an analytics perspective, I applied advanced time-series analysis and geospatial feature engineering to uncover hidden correlations between atmospheric pollutant concentrations and respiratory health outcomes. Ultimately, the classification accuracy reached 95% across varied demographic groups, creating a reliable predictor for potential hospitalization spikes based solely on ambient air quality.
    `
  },
  {
    id: 6,
    title: "Live NAV Ingestion Pipeline",
    category: "FinTech / Serverless Architecture",
    image: "/projects/nav_ingestion.png",
    technologies: ["AWS Lambda", "AWS S3", "Terraform", "PostgreSQL", "ReactJS Dashboards", "Event-Driven Arch"],
    description: "Architected real-time net asset value data ingestion pipelines ensuring zero downtime.",
    expandedContent: `
While Engineering at Arihant Capital Markets, reliable data velocity was highly critical for active traders relying on real-time dashboards. 

I architected robust, live NAV (Net Asset Value) data ingestion pipelines leveraging an event-driven AWS architecture utilizing S3 and Lambda functions to bypass traditional batch processing overhead. This allowed for real-time mutual fund performance tracking and ensured fresh, reliable data delivery directly to our ReactJS client-facing dashboards.

Furthermore, I engineered over 15 RESTful APIs utilizing Python and distributed patterns designed to easily handle peak financial market trading loads—supporting over 10,000 active traders with strict sub-100ms p95 latencies. The entire infrastructure was tightly containerized, and managed via Terraform, achieving zero downtime SLAs and notably cutting traditional infrastructure costs by 30%.
    `
  },
  {
    id: 7,
    title: "Salon Scheduling Platform & Agent Dashboard",
    category: "Full-Stack / Real-Time Systems",
    image: "/projects/salon_scheduling.png",
    technologies: ["React", "TypeScript", "PostgreSQL", "Docker", "Real-Time Sync", "Observability"],
    description: "A scheduling app that handles ~1,500 appointments a month, ~30% of them booked by voice, with a live dashboard monitoring 30+ agents.",
    expandedContent: `
The problem: a voice agent is only useful if its bookings land in the same calendar as bookings made in the app or at the front desk. Otherwise you get double bookings and confused staff.

What I built: a full-stack scheduling platform in React, TypeScript, and PostgreSQL. Appointments booked directly or by the AI voice agent sync in real time and share one source of truth. PostgreSQL transactions prevent double bookings when the agent and a person book the same slot at once.

The agent dashboard: a live operations view covers 30+ deployed agents. It shows call outcomes, booking success, escalations, and failures as they happen, so problems get caught before customers notice.

Results: about 1,500 appointments a month for 40+ staff, with roughly 30% booked by the voice agent. Failures now surface about 50% faster. Everything runs in Docker for repeatable deployments.
    `
  },
  {
    id: 8,
    title: "LLM Evaluation Harness",
    category: "LLMOps / Evaluation",
    image: "/projects/llm_eval_harness.png",
    technologies: ["LLM-as-Judge", "A/B Testing", "Red-Teaming", "Python", "CI/CD", "Benchmark Datasets"],
    description: "Automated LLM-as-judge evaluation on every prompt change, which raised intent accuracy from ~85% to ~92%.",
    expandedContent: `
The problem: changing a prompt in a production voice agent is risky. A tweak that fixes one conversation can quietly break ten others.

What I built: an evaluation harness that runs on every prompt change, like a test suite for code. Its benchmark has about 300 conversations built from real caller questions, including edge cases, ambiguous requests, and adversarial inputs.

How it works: a judge model scores each response against rubrics for intent accuracy, correctness, and tone. A/B tests compare candidate prompts head to head before they ship. Red-teaming probes look for jailbreaks, policy violations, and wrong tool use.

Results: intent accuracy rose from about 85% to about 92%. Prompt changes are now measured, regression-tested releases instead of guesswork.
    `
  },
  {
    id: 9,
    title: "MCP Tools for Enterprise Data",
    category: "Model Context Protocol / Agentic AI",
    image: "/projects/mcp_enterprise_data.png",
    technologies: ["Model Context Protocol", "Claude", "NetSuite", "Salesforce", "Snowflake", "Python", "TypeScript"],
    description: "MCP servers that let Claude agents query NetSuite, Salesforce, and Snowflake with per-call permissions, cutting routine lookups by ~40%.",
    expandedContent: `
The problem: teams spent hours on routine lookups that meant switching between NetSuite, Salesforce, and Snowflake. Giving an AI agent broad access to all three would be a security risk.

What I built: Model Context Protocol (MCP) servers that expose each system to Claude agents as narrow, clearly described tools. Permissions are scoped per tool call, so each call gets only the access that specific action needs.

Design choices: tool inputs and outputs are typed and validated against schemas. Tools default to read-only, and write actions are tightly controlled. Results are trimmed so the agent's context stays small.

Results: routine lookups dropped by about 40%. The work also includes open-source contributions to the MCP ecosystem.
    `
  },
  {
    id: 10,
    title: "Procure-to-Pay AI Agent (Design)",
    category: "Agentic AI Architecture / Finance",
    image: "/projects/procure_to_pay.png",
    technologies: ["Document AI", "LLM Agents", "3-Way Matching", "Guardrails", "Audit Logging", "Fraud Detection"],
    description: "An end-to-end agent design for procure-to-pay: invoice extraction, 3-way matching, guardrails, and a phased rollout plan.",
    expandedContent: `
The goal: automate procure-to-pay from end to end while keeping the controls, audit trail, and fraud protection finance teams require.

The design: document AI extracts line items, totals, vendors, and terms from invoices. Three-way matching checks each invoice against its purchase order and goods receipt. Mismatches are classified and sent to the right person with the context they need.

Controls: approval rules scale with policy and dollar amount, and high-value actions always require a human. Every agent decision and tool call is written to an audit log. Safeguards protect against both fraud and prompt-injection attacks hidden in documents.

Rollout and KPIs: the plan moves in phases from shadow mode to assisted mode to autonomous mode. KPIs such as touchless rate, cycle time, and exception rate decide when each phase is ready.
    `
  },
  {
    id: 11,
    title: "Autonomous Assistant on Hermes Agent",
    category: "Autonomous Agents / MCP",
    image: "/projects/autonomous_assistant.png",
    technologies: ["Hermes Agent", "MCP Servers", "Custom Tools", "Persistent Memory", "Scheduled Jobs"],
    description: "An always-on agent with custom tools, persistent memory, and scheduled runs that acts directly in business systems.",
    expandedContent: `
What it is: an always-on autonomous assistant built on Hermes Agent. Instead of waiting for a prompt, it keeps working inside real business systems.

Capabilities: custom tools and MCP servers connect it to business systems. Persistent memory carries context, preferences, and task history from one session to the next. Scheduled runs handle recurring work such as reports, follow-ups, and monitoring.

The result is an assistant that takes real actions in business systems rather than only making suggestions.
    `
  },
  {
    id: 12,
    title: "Prompt-Injection Robustness of Tool-Using Agents",
    category: "In Progress · AI Security Research",
    image: "/projects/prompt_injection.png",
    technologies: ["AI Security", "Prompt Injection", "Tool-Using Agents", "Multi-Model Benchmarking", "Python"],
    description: "Research measuring how often instructions hidden in tool outputs hijack agents, and which defenses work.",
    expandedContent: `
Status: in progress.

The question: when an agent reads a webpage, email, or API response that contains hidden instructions, how often does it follow them?

The approach: a benchmark that plants instructions in tool outputs and measures how often the attack succeeds on different models. It then tests defenses such as input isolation, instruction hierarchy, output filtering, and permission scoping to see which ones lower the success rate.

Why it matters: agents now take actions in real systems, which makes prompt injection one of the biggest security risks for AI in production.
    `
  },
  {
    id: 13,
    title: "Product Enrichment Agent",
    category: "In Progress · Agentic Data Quality",
    image: "/projects/product_enrichment.png",
    technologies: ["LLM Agents", "Taxonomy Mapping", "Precision / Recall / F1", "Confidence Scoring", "Human-in-the-Loop"],
    description: "Maps raw product data to a category taxonomy, scores every attribute, and sends low-confidence items to human review.",
    expandedContent: `
Status: in progress.

What it does: an agent that turns messy raw product data into clean, structured catalog entries mapped to a category taxonomy.

Built-in measurement: every extracted attribute is scored by precision, recall, and F1, so quality is measured rather than assumed.

Human in the loop: low-confidence items go to a review queue. The agent handles the straightforward items automatically, and people only see the ones that need judgment.
    `
  },
  {
    id: 14,
    title: "Event-Driven Agent Triggers",
    category: "In Progress · Cloud Agent Infrastructure",
    image: "/projects/event_driven_agents.png",
    technologies: ["Azure Service Bus", "AWS EventBridge", "Identity & Access", "Audit Logging", "Serverless"],
    description: "Agents started by Service Bus or EventBridge events, with identity checked on every tool call and full audit logs.",
    expandedContent: `
Status: in progress.

The idea: start agents from business events instead of chat messages. A new order, a failed payment, or a support ticket arriving on Azure Service Bus or AWS EventBridge starts the right agent automatically.

Security model: identity is checked on every tool call, not just once at the start, and full audit logs record what each agent did, when, and why.

The goal is for agents to be a dependable part of event-driven cloud systems.
    `
  }
];
