"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "Oracle",
    role: "AI/ML Engineer",
    period: "Jul 2024 – Present",
    location: "San Francisco, CA",
    highlights: [
      "Developed Python-based multi-agent workflows using Oracle AI Agent Studio, implementing supervisor orchestration, specialized agents, and intelligent task routing to automate complex enterprise finance and procurement processes.",
      "Engineered enterprise RAG pipelines using Python, Oracle AI Vector Search, hybrid retrieval, embeddings, and semantic reranking, improving response accuracy by 24% across evaluated enterprise queries.",
      "Implemented LLM-powered agent orchestration using OCI Generative AI, prompt engineering, tool calling, and asynchronous execution, reducing inference costs by 30% through optimized model interactions.",
      "Integrated Oracle Fusion ERP, HCM, and Procurement APIs with AI agents, enabling secure enterprise workflow automation supporting 10,000 active users across business functions.",
      "Designed scalable Python FastAPI microservices using Pydantic, REST APIs, and AsyncIO, implementing structured request validation, asynchronous tool execution, and resilient enterprise system integrations.",
      "Deployed containerized AI microservices using Docker, Kubernetes, and OCI Container Engine for Kubernetes, configuring horizontal autoscaling, health checks, resource allocation, and production deployment strategies.",
      "Built automated document ingestion pipelines using Python, Oracle Database, vector embeddings, and metadata enrichment, enabling contextual retrieval across enterprise knowledge repositories and business documentation.",
      "Integrated OCI Object Storage, Functions, and API Gateway with enterprise agent workflows, enabling secure document processing, event-driven execution, and scalable API-based communication between services.",
      "Established CI/CD pipelines using Git, OCI DevOps, Docker, and automated testing, streamlining application releases, infrastructure configuration, deployment validation, and continuous integration across environments.",
      "Implemented agent evaluation and observability using Pytest, RAGAS, LLM-as-Judge, OCI Logging, and Monitoring, tracking retrieval quality, tool execution reliability, response latency, and production performance.",
    ],
  },
  {
    company: "Datadog",
    role: "AI/ML Engineer",
    period: "Jun 2023 – Aug 2023",
    location: "New York, NY",
    highlights: [
      "Developed Python-based anomaly detection models using Scikit-learn, Pandas, NumPy, and statistical techniques, analyzing application telemetry, distributed traces, and infrastructure metrics to identify abnormal production behavior.",
      "Engineered time-series anomaly detection pipelines using Python, SciPy, Isolation Forest, and statistical baselines, improving detection precision by 27% across production monitoring datasets.",
      "Implemented Python-based root-cause analysis algorithms using NetworkX, statistical correlation, and service dependency mapping, identifying probable application failures through distributed traces and deployment events.",
      "Optimized real-time machine learning inference using Python, Apache Kafka, Apache Flink, and Redis caching, reducing anomaly detection latency by 32% across distributed monitoring workflows.",
      "Developed scalable Python FastAPI microservices using Pydantic, REST APIs, and asynchronous processing, deploying containerized ML services on AWS EKS with Docker and Kubernetes.",
      "Established automated MLOps workflows using Apache Airflow, MLflow, Jenkins, Terraform, and Helm, supporting model versioning, CI/CD deployments, infrastructure provisioning, and production monitoring through Datadog APM.",
    ],
  },
  {
    company: "Foxconn",
    role: "Machine Learning Engineer",
    period: "Dec 2019 – Jul 2022",
    location: "India",
    highlights: [
      "Developed Python-based computer vision models using OpenCV, PyTorch, YOLOv5, CNNs, and Variational Autoencoders, automating manufacturing defect detection and targeting 29% higher inspection accuracy across production lines.",
      "Optimized Python inference pipelines using ONNX Runtime, NVIDIA TensorRT, FP16/INT8 quantization, and CUDA acceleration, targeting 36% lower inference latency for real-time electronic component inspection.",
      "Engineered deep learning workflows using TensorFlow, Scikit-learn, NumPy, and Pandas, incorporating transfer learning, data augmentation, image preprocessing, and anomaly detection for manufacturing quality assurance.",
      "Developed scalable Python FastAPI microservices with REST APIs, Docker, and PostgreSQL, enabling automated inspection processing, defect classification, and integration with manufacturing execution systems.",
      "Implemented automated ML pipelines using Apache Airflow, Python ETL, Azure Machine Learning, and Azure Blob Storage, supporting image ingestion, dataset validation, preprocessing, and reproducible model training.",
      "Deployed containerized machine learning services using Azure Virtual Machines, Docker, and Jenkins, establishing automated CI/CD pipelines, model versioning, and reliable production deployment processes.",
      "Integrated MLflow, Prometheus, Grafana, and SQL-based monitoring to track model performance, inspection throughput, defect trends, and system reliability across distributed manufacturing inspection stations.",
    ],
  },
];

const skills: Record<string, string[]> = {
  "Generative & Agentic AI": ["LLMs", "RAG", "Oracle AI Agent Studio", "OCI Generative AI", "LangChain", "LangGraph", "MCP", "Multi-Agent Orchestration", "Tool Calling", "Hybrid Search"],
  "ML & Deep Learning": ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "XGBoost", "LightGBM", "CNNs", "VAEs", "Anomaly Detection", "Time-Series"],
  "NLP & Vision": ["Transformers", "Hugging Face", "Sentence Transformers", "OpenCV", "Object Detection", "Semantic Search"],
  "Backend & Data": ["Python", "SQL", "FastAPI", "Pydantic", "Kafka", "Flink", "Airflow", "PostgreSQL", "Redis", "Oracle AI Vector Search"],
  "Cloud & MLOps": ["AWS", "OCI", "Azure", "Docker", "Kubernetes", "Helm", "Terraform", "MLflow", "ONNX Runtime", "CUDA", "RAGAS", "CI/CD"],
  "Observability": ["Datadog APM", "Prometheus", "Grafana", "OCI Monitoring", "Pytest", "LLM-as-Judge"],
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0a0a0a] pt-32 pb-8 px-6 md:px-24 rounded-t-[3rem] -mt-10 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto">
        {/* Summary */}
        <motion.div {...fadeUp} className="mb-24 max-w-4xl">
          <p className="text-emerald-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">About</p>
          <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            5+ years shipping ML, GenAI &amp; <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Agentic AI</span> in production.
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
            I build multi-agent workflows, enterprise RAG pipelines, LLM orchestration, and real-time inference systems
            with Python, PyTorch, TensorFlow, and Scikit-learn. My work covers FastAPI microservices, vector search, model optimization,
            and cloud-native deployments on AWS, OCI, and Azure, along with the MLOps, Kubernetes, CI/CD, and evaluation needed to
            improve accuracy, latency, and cost in measurable ways.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <motion.h2 {...fadeUp} className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-12">Experience</motion.h2>
        <div className="relative border-l border-white/10 ml-2 mb-28">
          {experience.map((job) => (
            <motion.div key={job.company} {...fadeUp} className="relative pl-8 md:pl-12 pb-14 last:pb-0 group">
              <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.6)] group-hover:scale-125 transition-transform" />
              <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 md:p-8 hover:bg-white/[0.06] hover:border-emerald-400/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                    {job.company} <span className="text-white/40 font-light">· {job.role}</span>
                  </h3>
                  <p className="text-white/50 text-sm uppercase tracking-widest">{job.period} · {job.location}</p>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-white/70 font-light flex gap-3">
                      <span className="text-emerald-400 mt-1">▹</span>{h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.h2 {...fadeUp} className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-12">Skills</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
          {Object.entries(skills).map(([group, items]) => (
            <motion.div key={group} {...fadeUp} className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 hover:border-blue-400/30 transition-colors">
              <h3 className="text-white font-semibold mb-4 tracking-wide">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-xs text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:text-emerald-300 hover:border-emerald-400/40 transition-colors">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="bg-[#0a0a0a] pb-24 px-6 md:px-24 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="rounded-3xl bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-white/10 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-emerald-400 text-sm font-medium uppercase tracking-[0.2em] mb-2">Education</p>
            <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">M.S. Data Science and Engineering</h3>
          </div>
          <p className="text-white/70 text-lg">City University of New York</p>
        </motion.div>
      </div>
    </section>
  );
}
