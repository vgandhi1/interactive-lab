/* Glossary data for ai-guide.html — loaded before React app */
window.GLOSSARY_SECTIONS = [
  {
    category: 'architecture',
    title: 'Model Architecture & Capacity',
    icon: '🏗️',
    accent: 'indigo',
    terms: [
      { title: 'Model Parameters', desc: 'Trainable numerical values (weights and biases) inside a model that encode learned knowledge.' },
      { title: 'Parameter Count', desc: 'Total number of trainable parameters in a model, often used as a proxy for model capacity.' },
      { title: 'Overparameterization', desc: 'Condition where a model has more parameters than strictly needed, enabling better generalization in deep learning.' },
      { title: 'Model Capacity', desc: 'Ability of a model to fit complex functions, influenced by depth, width, and parameters.' },
      { title: 'Scaling Laws', desc: 'Empirical relationships showing that performance improves predictably with more data, parameters, and compute.' },
      { title: 'Mixture of Experts (MoE)', desc: 'Architecture routing each token to a subset of expert networks, enabling larger effective capacity with lower active compute.' },
      { title: 'Mixture of Depths (MoD)', desc: 'Efficiency technique where different tokens pass through different numbers of layers, reducing average compute per token.' }
    ]
  },
  {
    category: 'architecture',
    title: 'Model Types & Categories',
    icon: '📊',
    accent: 'blue',
    terms: [
      { title: 'Foundation Model', desc: 'Large pre-trained model adaptable to many downstream tasks through prompting or fine-tuning.' },
      { title: 'Frontier Model', desc: 'State-of-the-art large-scale models at the cutting edge of performance, cost, and capability.' },
      { title: 'Base Model', desc: 'Pre-trained model without task-specific alignment or instruction tuning.' },
      { title: 'Instruction-Tuned Model', desc: 'Model fine-tuned to follow human instructions and prompts.' },
      { title: 'Chat Model', desc: 'Instruction-tuned model optimized for conversational interactions.' },
      { title: 'Reasoning Model', desc: 'Models optimized for multi-step logic, math, and planning — often using extended test-time compute (e.g. o-series, DeepSeek-R1 class).' },
      { title: 'Small Language Model (SLM)', desc: 'Compact models (typically under ~10B parameters) tuned for edge deployment, latency, and cost efficiency.' },
      { title: 'Multimodal Model', desc: 'Models processing and generating multiple modalities — text, images, audio, video — in a unified architecture.' }
    ]
  },
  {
    category: 'training',
    title: 'Training & Adaptation',
    icon: '🎓',
    accent: 'emerald',
    terms: [
      { title: 'Pretraining', desc: 'Initial large-scale training phase where a model learns general language patterns from broad corpora.' },
      { title: 'Fine-Tuning', desc: 'Additional training on task- or domain-specific data.' },
      { title: 'Instruction Tuning', desc: 'Fine-tuning using prompt–response pairs to improve usability.' },
      { title: 'Alignment', desc: 'Process of shaping model behavior to align with human intent and values.' },
      { title: 'RLHF', desc: 'Reinforcement Learning from Human Feedback — training using human preference rankings as reward signals.' },
      { title: 'DPO', desc: 'Direct Preference Optimization — alignment without a separate reward model, optimizing directly on preference pairs.' },
      { title: 'GRPO', desc: 'Group Relative Policy Optimization — RL variant used in recent reasoning models; compares outputs within a group rather than absolute scores.' },
      { title: 'RLAIF', desc: 'Reinforcement Learning from AI Feedback — scalable alignment using AI-generated preference labels instead of human raters.' },
      { title: 'Constitutional AI', desc: 'Self-critique training where models revise outputs against a written set of principles.' },
      { title: 'LoRA', desc: 'Low-Rank Adaptation — parameter-efficient fine-tuning via low-rank weight updates.' },
      { title: 'QLoRA', desc: 'Quantized LoRA — combines 4-bit quantization with LoRA for fine-tuning large models on consumer GPUs.' },
      { title: 'PEFT', desc: 'Parameter-Efficient Fine-Tuning — umbrella term for methods updating minimal parameters (LoRA, adapters, prefix tuning).' }
    ]
  },
  {
    category: 'inference',
    title: 'Inference & Performance',
    icon: '⚡',
    accent: 'orange',
    terms: [
      { title: 'Inference', desc: 'Running a trained model to generate predictions or outputs.' },
      { title: 'Latency', desc: 'Time taken for a model to return a response (time-to-first-token and total generation time).' },
      { title: 'Throughput', desc: 'Number of requests or tokens processed per unit time.' },
      { title: 'Batching', desc: 'Grouping multiple requests to improve GPU utilization.' },
      { title: 'KV Cache', desc: 'Cached key-value attention tensors to speed up autoregressive generation.' },
      { title: 'Speculative Decoding', desc: 'A smaller draft model proposes tokens; the target model verifies in parallel, accelerating generation.' },
      { title: 'Test-Time Compute', desc: 'Allocating extra inference compute (more tokens, search, verification) to improve answer quality — central to reasoning models.' },
      { title: 'Prompt Caching', desc: 'Reusing cached prefix computations for repeated system prompts or documents, cutting latency and cost.' },
      { title: 'Context Caching', desc: 'Provider feature storing and reusing long static context (docs, codebases) across requests without reprocessing.' }
    ]
  },
  {
    category: 'efficiency',
    title: 'Quantization & Efficiency',
    icon: '💾',
    accent: 'purple',
    terms: [
      { title: 'Quantization', desc: 'Reducing numerical precision of weights to improve speed and reduce memory usage.' },
      { title: 'FP32 / FP16 / BF16', desc: 'Floating-point precision formats used during training and inference.' },
      { title: 'INT8 / INT4', desc: 'Low-precision integer formats used in quantized models.' },
      { title: 'Post-Training Quantization', desc: 'Quantization applied after model training.' },
      { title: 'Quantization-Aware Training', desc: 'Training that simulates quantization effects for better accuracy at low precision.' },
      { title: 'Model Compression', desc: 'Techniques to reduce model size — quantization, pruning, distillation.' },
      { title: 'Flash Attention', desc: 'IO-aware attention algorithm reducing memory from O(n²) to O(n), enabling longer contexts.' },
      { title: 'Gradient Checkpointing', desc: 'Trades compute for memory by recomputing activations during backpropagation.' },
      { title: 'Model Distillation', desc: 'Training a smaller student model to mimic a larger teacher model.' }
    ]
  },
  {
    category: 'inference',
    title: 'Memory & Context',
    icon: '🧠',
    accent: 'cyan',
    terms: [
      { title: 'Context Window', desc: 'Maximum tokens a model can process in one request — frontier models now reach 200K–1M+ tokens.' },
      { title: 'Prompt Truncation', desc: 'Removing older tokens when input exceeds the context window limit.' },
      { title: 'Long-Context Model', desc: 'Models architected for very large context via sparse attention, ring attention, or other scaling techniques.' },
      { title: 'Sliding Window Attention', desc: 'Attention limited to a local token window, reducing compute for long sequences.' },
      { title: 'Sparse Attention', desc: 'Computes attention for a subset of token pairs, lowering cost on long inputs.' },
      { title: 'Context Engineering', desc: 'Deliberately structuring prompts — system rules, RAG chunks, examples, history — within the attention budget.' },
      { title: 'Prompt Compression', desc: 'Summarizing or encoding prompts to fit more information into a fixed context window.' }
    ]
  },
  {
    category: 'generation',
    title: 'Generation & Decoding',
    icon: '✨',
    accent: 'yellow',
    terms: [
      { title: 'Autoregressive Generation', desc: 'Generating tokens one at a time conditioned on all prior tokens.' },
      { title: 'Temperature', desc: 'Sampling parameter controlling output randomness — lower = deterministic, higher = creative.' },
      { title: 'Top-K Sampling', desc: 'Limits next-token selection to the K highest-probability candidates.' },
      { title: 'Top-P (Nucleus Sampling)', desc: 'Selects from the smallest set of tokens whose cumulative probability exceeds P.' },
      { title: 'Beam Search', desc: 'Deterministic decoding exploring multiple candidate sequences in parallel.' },
      { title: 'Structured Outputs', desc: 'Constraining model responses to a JSON schema or tool format — critical for reliable agent and API integration.' }
    ]
  },
  {
    category: 'safety',
    title: 'Reliability, Safety & Evaluation',
    icon: '🛡️',
    accent: 'red',
    terms: [
      { title: 'Hallucination', desc: 'Confident but incorrect or unsupported model output.' },
      { title: 'Faithfulness', desc: 'Degree to which generated content is grounded in provided source context.' },
      { title: 'Ground Truth', desc: 'Correct reference data used for evaluation.' },
      { title: 'Guardrails', desc: 'Input/output filters and policies ensuring safe, compliant model behavior.' },
      { title: 'Evaluation Harness', desc: 'Framework for systematically testing model outputs against benchmarks.' },
      { title: 'LLM-as-Judge', desc: 'Using a strong LLM to score or compare outputs from other models — common in automated eval pipelines.' },
      { title: 'Red Teaming', desc: 'Adversarial testing to discover jailbreaks, bias, and safety failures before deployment.' },
      { title: 'Watermarking', desc: 'Embedding detectable signals in AI-generated text, images, or audio for provenance tracking.' }
    ]
  },
  {
    category: 'deployment',
    title: 'Deployment & Operations',
    icon: '🚀',
    accent: 'green',
    terms: [
      { title: 'Model Serving', desc: 'Infrastructure deploying models as scalable APIs (vLLM, TGI, TensorRT-LLM, etc.).' },
      { title: 'Cold Start', desc: 'Initial latency when a model is first loaded into GPU memory.' },
      { title: 'Autoscaling', desc: 'Automatically adjusting compute resources based on request load.' },
      { title: 'Observability', desc: 'Monitoring inputs, outputs, latency, errors, token usage, and model drift in production.' },
      { title: 'Prompt Versioning', desc: 'Tracking prompt template changes over time for reproducibility and A/B testing.' },
      { title: 'Edge / On-Device LLM', desc: 'Running quantized models locally on phones, laptops, or embedded hardware for privacy and offline use.' }
    ]
  },
  {
    category: 'advanced',
    title: 'Advanced Techniques',
    icon: '🔮',
    accent: 'violet',
    terms: [
      { title: 'Chain-of-Thought (CoT)', desc: 'Prompting models to show intermediate reasoning steps before the final answer.' },
      { title: 'Tree of Thoughts (ToT)', desc: 'Exploring multiple reasoning branches and selecting the best path.' },
      { title: 'Self-Consistency', desc: 'Generating multiple reasoning paths and voting on the most common answer.' },
      { title: 'ReAct', desc: 'Reasoning + Acting — interleaving thought traces with tool calls and environment actions.' },
      { title: 'Tool-Augmented LLM', desc: 'LLM invoking external tools (search, code, APIs) during inference.' },
      { title: 'Function Calling', desc: 'Model identifying when to call structured API functions and formatting arguments correctly.' },
      { title: 'Agentic AI', desc: 'Autonomous systems that plan, use tools, and iterate toward goals with minimal human steering.' },
      { title: 'Synthetic Data', desc: 'AI-generated data used to augment or replace scarce training/evaluation datasets.' },
      { title: 'Retrieval-Augmented Fine-Tuning (RAFT)', desc: 'Fine-tuning that teaches models to use retrieved documents during training, not just inference.' }
    ]
  },
  {
    category: 'emerging',
    title: 'AI Landscape 2025–2026',
    icon: '🌐',
    accent: 'rose',
    terms: [
      { title: 'Model Context Protocol (MCP)', desc: 'Open standard for connecting AI assistants to external data sources and tools via a unified protocol — adopted by Claude, Cursor, and others.' },
      { title: 'Extended Thinking', desc: 'Models allocating hidden reasoning tokens before responding — improves math, code, and complex planning.' },
      { title: 'Computer Use', desc: 'Agents controlling GUIs — clicking, typing, navigating browsers or desktops to complete tasks autonomously.' },
      { title: 'Deep Research', desc: 'Agentic multi-step web research: search, read, synthesize, and cite sources in a structured report.' },
      { title: 'GraphRAG', desc: 'Combining knowledge graphs with vector retrieval for richer, relationship-aware RAG over complex corpora.' },
      { title: 'Agentic RAG', desc: 'RAG pipelines where the agent decides what to retrieve, when, and how many times — not a single fixed retrieval step.' },
      { title: 'AI Coding Agents', desc: 'Autonomous dev tools (Cursor Agent, Claude Code, Codex, Devin-class) that edit repos, run tests, and iterate on code.' },
      { title: 'Vibe Coding', desc: 'Building software through conversational AI iteration — describing intent and refining through natural language rather than manual typing.' },
      { title: 'Vision-Language Models', desc: 'Models understanding images and video alongside text — enabling document OCR, UI understanding, and visual QA.' },
      { title: 'Video Understanding', desc: 'Multimodal models processing temporal video frames for summarization, search, and agent perception.' },
      { title: 'Agentic Workflow', desc: 'Orchestrated multi-agent pipelines with defined roles (planner, coder, reviewer) coordinating on complex tasks.' },
      { title: 'Mixture of Agents', desc: 'Routing tasks to specialized sub-agents or models, then synthesizing their outputs.' },
      { title: 'Evals', desc: 'Structured evaluation suites (MMLU, HumanEval, SWE-bench, custom domain tests) for measuring model and agent quality.' },
      { title: 'Inference-Time Scaling', desc: 'Deliberately spending more compute at inference (parallel samples, verification, search) to boost accuracy — key 2025–2026 frontier.' }
    ]
  }
];

window.VISUAL_CONCEPTS = [
  { id: 'transformer', keywords: ['transformer', 'architecture', 'attention', 'self-attention', 'encoder', 'decoder', 'moe', 'mixture of experts'] },
  { id: 'reasoning', keywords: ['reasoning', 'test-time', 'test time compute', 'extended thinking', 'o1', 'chain of thought', 'cot', 'inference scaling'] },
  { id: 'temperature', keywords: ['temperature', 'randomness', 'creativity', 'sampling', 'generation', 'top-k', 'top-p', 'nucleus'] },
  { id: 'learning', keywords: ['zero-shot', 'few-shot', 'learning', 'examples', 'prompting', 'in-context'] },
  { id: 'tokens', keywords: ['tokens', 'tokenization', 'context window', 'token limit', 'bpe'] },
  { id: 'context', keywords: ['context engineering', 'context window', 'attention budget', 'prompt compression'] },
  { id: 'rag', keywords: ['rag', 'retrieval augmented generation', 'vector', 'embedding', 'semantic search', 'graphrag', 'agentic rag'] },
  { id: 'agents', keywords: ['agents', 'agentic', 'autonomous', 'mcp', 'computer use', 'tool use', 'function calling', 'react'] },
  { id: 'mcp', keywords: ['mcp', 'model context protocol', 'tools', 'integration', 'server'] }
];
