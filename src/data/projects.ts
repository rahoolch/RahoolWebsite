export const projects = [
  {
    id: 1,
    title: "Voice AI Ordering Agent",
    category: "LLM Orchestration / AI Integration",
    image: "/projects/voice_ai.png",
    technologies: ["Python", "Twilio", "Deepgram Nova", "ElevenLabs", "GPT-4", "Redis", "FastAPI"],
    description: "Distributed Voice AI agent for handling restaurant phone orders conversationally.",
    expandedContent: `
At Cyntra Labs, I architected an end-to-end Agentic AI voice ordering agent designed to seamlessly handle restaurant phone orders. Traditional voice bots rely on rigid decision trees, but this system leveraged Large Language Models for open-ended, fully conversational ordering.

By deeply integrating Twilio, Deepgram Nova, ElevenLabs, and GPT-4, the agent achieved remarkable fluidity. The critical engineering challenge was reducing latency—I engineered a distributed architecture with a high-throughput caching layer that bypassed redundant API calls, successfully achieving sub-300ms response latency across the stack.

To ensure business reliability, I developed a prompt optimization and guardrails layer utilizing few-shot prompting and chain-of-thought techniques. This drastically reduced LLM hallucinations, slashed order processing errors by 35%, and consistently maintained a natural conversation score of 4.7/5 from customers.
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
  }
];
