(function(){const stackLayers=[{id:"model-foundation",title:"Model Foundation",meta:"Tokens, embeddings, transformer blocks, alignment",summary:"This is the layer where the model learns the world compressed into token probabilities and latent structure.",chips:["Tokenization","Pretraining","SFT","Reasoning"],explanation:"LLM behavior starts with tokenization, embedding lookup, transformer attention, and the training stages that shape how the model reasons. Pretraining gives breadth, instruction tuning sharpens behavior, preference optimization shapes style, and reasoning-specialized training can improve multi-step problem solving. Everything above this layer inherits its strengths and limits.",buildNow:["Know the difference between base model capability, alignment behavior, and inference-time scaffolding.","Treat model choice as a systems decision: latency, context, tool quality, and cost matter as much as benchmark scores.","Understand that hallucination, tool discipline, and structured output reliability are partly model-dependent."],watchouts:["A stronger model does not erase bad retrieval, weak tool schemas, or poor orchestration.","Longer context helps, but it does not replace retrieval quality or memory design.","Reasoning models often trade speed and price for better planning and deeper chain behavior."]},{id:"serving-runtime",title:"Serving Runtime",meta:"Inference gateways, batching, routing, caching, streaming",summary:"This layer decides how requests reach models and how efficiently you spend tokens, GPUs, and latency budgets.",chips:["Routing","Streaming","Caching","Fallbacks"],explanation:"A production LLM system rarely calls one model in one fixed way. Teams add request routing, speculative or tiered model selection, prompt caching, response streaming, retries, failover, and rate management. OpenAI-compatible runtimes such as vLLM make it easier to swap in self-hosted models, while managed platforms hide infrastructure at the cost of less control.",buildNow:["Separate application logic from provider-specific model invocation.","Track latency, prompt tokens, completion tokens, and failure class for every call.","Use streaming wherever perceived responsiveness matters."],watchouts:["Fallback models can change behavior in subtle ways if prompts or tools are not normalized.","Caching improves cost and speed, but stale context can create silent correctness issues.","Self-hosted inference saves money only when you can keep hardware utilization healthy."]},{id:"context-retrieval",title:"Context & Retrieval",meta:"Chunking, embeddings, reranking, citations, grounding",summary:"This layer turns proprietary data into the context the model actually sees at inference time.",chips:["RAG","Chunking","Embeddings","Vector Search"],explanation:"Most useful enterprise LLM apps are grounded. That means documents get parsed, chunked, embedded, stored, retrieved, and often reranked before being fused into the model prompt. The quality of this pipeline determines whether the system feels knowledgeable or merely fluent. Retrieval is not one decision; it is an end-to-end chain of segmentation, metadata, filters, recall, ranking, and citation rendering.",buildNow:["Design chunks for the way users ask questions, not for the way files are stored.","Keep source metadata, document lineage, and snippet boundaries so you can show citations.","Measure retrieval separately from answer quality."],watchouts:["Bad chunking and missing metadata can make a good vector store look bad.","Pure vector search often benefits from lexical search, metadata filters, or reranking.","Grounded answers can still be wrong if the prompt fails to force source use."]},{id:"orchestration",title:"Orchestration Layer",meta:"Prompt assembly, state, workflows, control loops",summary:"This layer is the application brain that decides what context, tools, and decisions happen in what order.",chips:["State","Workflows","Routing","Guard Conditions"],explanation:"Prompt templates are only the visible tip. Real systems accumulate conversation state, retrieved context, tool results, memory snapshots, user profile signals, and policy constraints. Orchestration decides what gets assembled, when models are called, and whether the next step is deterministic code or model-led reasoning. This is where simple assistants become reliable products or unreliable spaghetti.",buildNow:["Use deterministic code for routing and validation wherever possible.","Persist state transitions so you can replay failures and inspect decisions.","Make every major branch observable."],watchouts:["Monolithic prompts hide control flow and are hard to debug.","Agent autonomy without explicit stop conditions creates token burn and looping behavior.","Every new branch multiplies the test surface."]},{id:"tools-protocols",title:"Tools & Protocols",meta:"Function calling, MCP, APIs, computer use, A2A",summary:"This is how the model leaves pure text generation and starts touching systems, data, and other agents.",chips:["Tool Use","MCP","A2A","Computer Use"],explanation:"A model becomes useful when it can act. Tools provide typed interfaces into search, code execution, CRMs, databases, calendars, or internal APIs. Function calling keeps the boundary explicit. MCP standardizes how models discover tools, prompts, and resources. A2A extends the idea to agent-to-agent interoperability. This is also where safety requirements rise sharply because errors can now trigger real actions.",buildNow:["Design tool schemas as product interfaces, not as leftovers from backend code.","Prefer narrow tools with clear validation over one giant do-everything endpoint.","Log tool arguments, responses, and tool-selection rationale when possible."],watchouts:["Poor schemas create wrong calls even when the model understood the task.","Tool results must be normalized or the next reasoning step becomes brittle.","Server-side tools reduce client complexity, but can hide execution detail if you do not trace them."]},{id:"memory-evals",title:"Memory, Evals & Observability",meta:"Short-term state, long-term memory, traces, feedback, benchmarks",summary:"This layer determines whether you can improve the system intentionally instead of guessing.",chips:["Memory","Tracing","Offline Evals","Feedback"],explanation:"Without observability, complex LLM systems feel magical until they fail. You need traces, prompts, retrieved documents, tool calls, model versions, latency, cost, and user feedback stitched together. Memory adds another dimension: what should survive a single turn, a session, or months of user history. Evaluations then turn all of that into a controlled feedback loop.",buildNow:["Create benchmark sets for retrieval, task completion, and policy adherence.","Store enough run metadata to reproduce failures after the fact.","Distinguish between ephemeral working memory and durable user memory."],watchouts:["Memory can improve personalization while silently amplifying outdated or wrong user state.","A single pass/fail score is not enough for agent systems; measure per-step quality too.","If you cannot replay runs, debugging production failures becomes guesswork."]},{id:"governance",title:"Governance & Safety",meta:"Guardrails, policy, access control, approvals, audit",summary:"This layer keeps autonomy from outrunning trust, compliance, and business reality.",chips:["Guardrails","Approvals","Security","Audit"],explanation:"Safety is not one classifier. It is policy at multiple layers: prompt constraints, tool access boundaries, retrieval filtering, output checks, red teaming, human approval gates, tenant isolation, secrets handling, and auditability. Agentic systems especially need explicit authority boundaries because the model can plan across many steps and side effects.",buildNow:["Decide which actions are fully autonomous, approval-gated, or never model-executed.","Separate model permissions from user permissions.","Red-team prompt injection, retrieval poisoning, and unsafe tool use."],watchouts:["Prompt-only safety rules are fragile if tools or retrieved content can override them.","RAG systems inherit security issues from the underlying documents and connectors.","The more autonomous the system, the more important durable audit trails become."]}];const ladderStages=[{id:"stage-1",title:"Stage 1: Prompted Assistants",meta:"Single-shot and multi-turn chat apps",summary:"You are mostly building prompt templates, response formatting, and lightweight memory for chat continuity.",focus:["System prompts, role prompting, output formatting, and response streaming.","Basic conversation state and session management.","Input/output moderation and simple UX guardrails."],shipNow:["Summaries, drafting, classification, extraction, and internal copilots with no side effects."],doNotSkip:["Input validation, output formatting, token accounting, and a benchmark set for quality."]},{id:"stage-2",title:"Stage 2: Grounded Applications",meta:"RAG, search, file chat, domain assistants",summary:"The app starts answering questions about proprietary data instead of relying only on pretraining.",focus:["Document parsing, chunking, embeddings, vector search, hybrid retrieval, and citations.","Prompt assembly that explicitly binds the model to retrieved evidence.","Relevance evaluation and failure analysis for retrieval quality."],shipNow:["Policy assistants, support bots, sales enablement, internal knowledge copilots, analyst copilots."],doNotSkip:["Document lineage, metadata filters, reranking, and retrieval-specific metrics."]},{id:"stage-3",title:"Stage 3: Tool-Using Systems",meta:"Function calling, external APIs, structured actions",summary:"The model is no longer just answering. It is deciding when to call tools and how to use returned results.",focus:["Tool schemas, validation, retries, deterministic branching, and idempotent actions.","Search tools, code execution, CRM actions, database queries, and MCP integrations.","Per-tool observability so you know what the model asked for and why."],shipNow:["Research assistants, workflow copilots, ticketing helpers, ops assistants, coding assistants."],doNotSkip:["Permission boundaries, confirmation steps for risky actions, and tool call replay."]},{id:"stage-4",title:"Stage 4: Agentic Workflows",meta:"Planning loops, reflection, retries, memory",summary:"Now the system can decompose goals, decide next steps, maintain state, and revise its approach over multiple turns.",focus:["Planner-executor loops, graph workflows, human-in-the-loop checkpoints, and durable state.","Short-term memory, long-term memory, task queues, and branching execution.","Observability across reasoning steps, tool chains, and intermediate artifacts."],shipNow:["Complex research, report generation, triage systems, workflow automation, analyst copilots with tools."],doNotSkip:["Termination rules, cost ceilings, resumability, and step-level evals."]},{id:"stage-5",title:"Stage 5: Advanced Multi-Agent Systems",meta:"Specialized agents, protocol-based collaboration, production operations",summary:"You are orchestrating multiple specialists, shared memory, protocol boundaries, and production governance.",focus:["Role-specialized agents, delegation strategies, A2A or internal contracts, and arbitration.","Shared memory versus private memory, tool ownership, and inter-agent communication.","Audit, policy, trace stitching, deployment isolation, and lifecycle management."],shipNow:["Research desks, engineering copilots with planner/reviewer loops, enterprise automation meshes."],doNotSkip:["Governance, tenancy, execution budgets, trace correlation, and rollback paths."]}];const architectures=[{id:"chat",title:"Prompted Assistant",summary:"Fastest path to value for drafting, summarization, and internal chat copilots.",whenToUse:"Use when the answer mostly comes from model knowledge or user-provided input.",flow:[{title:"User Request",text:"Free-form text, files, or multimodal input enters the app."},{title:"Prompt Assembly",text:"System prompt, conversation history, and response format rules are added."},{title:"Model Call",text:"One model call generates the answer, maybe with streaming enabled."},{title:"Output Checks",text:"Formatting, moderation, and post-processing finalize the response."}],controls:["Strong prompt contracts and output schemas.","Caching and streaming for UX.","Session state for multi-turn continuity."],risks:["Hallucination on factual questions.","Weak personalization if memory is too shallow.","Prompt drift across turns."]},{id:"rag",title:"Grounded RAG Assistant",summary:"Best when users expect answers tied to private documents, knowledge bases, or policies.",whenToUse:"Use when accuracy, citations, and freshness depend on proprietary or frequently changing content.",flow:[{title:"User Query",text:"Question arrives with intent and optional filters."},{title:"Retrieve",text:"Search indexes, metadata filters, and rerankers gather relevant context."},{title:"Synthesize",text:"Prompt binds the model to cited evidence and asks for grounded output."},{title:"Citations",text:"Response is delivered with sources and confidence affordances."}],controls:["Chunking strategy, embedding choice, reranking, and metadata filters.","Prompt rules that force evidence use.","Evaluation split between retrieval quality and answer quality."],risks:["Low recall because of weak chunking or indexing.","Citation theater, where sources are shown but not actually used.","Context stuffing that increases latency without improving correctness."]},{id:"langchain-rag",title:"LangChain RAG Workbench",summary:"A focused retrieval-and-answer pipeline for grounded assistants with clear source boundaries.",whenToUse:"Use when the task is mostly retrieval, re-ranking, and grounded synthesis rather than open-ended autonomy.",flow:[{title:"Ingest",text:"Documents are parsed, split into chunks, and annotated with source metadata."},{title:"Index",text:"Chunks are embedded and stored in a vector store or hybrid retrieval backend."},{title:"Retrieve",text:"The query is transformed into search terms, then top passages are gathered and ranked."},{title:"Ground",text:"A retrieval chain fuses the question with evidence and asks the model to answer from sources."}],controls:["Chunk size, overlap, metadata filters, and which retriever backend you choose.","Reranking, citation formatting, and prompt rules that make evidence usage explicit.","Separate evaluation for retrieval recall, answer faithfulness, and source attribution quality."],risks:["A clean-looking answer can still be wrong if the retrieval set is incomplete.","Prompt injection inside retrieved documents can hijack the response if you do not sanitize context.","Overstuffing the prompt with too many chunks can bury the most relevant evidence."]},{id:"tool-agent",title:"Tool-Calling Agent",summary:"A strong default for systems that must search, compute, or take actions beyond text generation.",whenToUse:"Use when the application needs API actions, DB queries, web access, or code execution.",flow:[{title:"Task Intake",text:"The system interprets the task and decides whether tools are needed."},{title:"Tool Planning",text:"The model selects a tool and emits structured arguments."},{title:"Tool Execution",text:"Code runs the tool, validates results, and sends output back."},{title:"Final Synthesis",text:"The model integrates tool results into a user-facing answer or next step."}],controls:["Typed tool schemas and retries with validation.","Deterministic tool wrappers and approval gates for risky actions.","Traceability for arguments, results, and final synthesis."],risks:["Bad tool choice even when the reasoning looked plausible.","Schema mismatch and argument hallucination.","Action loops that burn tokens and repeat failed tools."]},{id:"langgraph-agentic",title:"LangGraph Agentic Workflow",summary:"A stateful control graph for tool use, branching, checkpoints, and human review.",whenToUse:"Use when the agent needs explicit state transitions, durable execution, or approval-gated branching.",flow:[{title:"State",text:"The graph starts from a typed state object that carries messages, flags, and working memory."},{title:"Node",text:"Each node makes one decision: classify, tool-call, refine, approve, or answer."},{title:"Route",text:"Conditional edges decide the next step based on state instead of hidden prompt logic."},{title:"Persist",text:"Checkpoints, interrupts, and resume logic keep the workflow inspectable across turns."}],controls:["Typed state, checkpoint storage, explicit stop conditions, and branch predicates.","Tool nodes, approval interrupts, and time or cost ceilings for long runs.","Step-level traces so you can inspect how the graph got to its final answer."],risks:["Without clear stop rules, a graph can loop between tool use and reflection.","State schema drift can make the workflow brittle as branches grow.","Durable workflows are easier to debug than prompt spaghetti, but only if you persist enough state."]},{id:"multi-agent",title:"Multi-Agent Control Plane",summary:"Used when one agent is not enough and specialization, delegation, or isolation clearly helps.",whenToUse:"Use when the task benefits from planner, researcher, reviewer, or executor roles with distinct tools and state.",flow:[{title:"Coordinator",text:"A top-level agent receives the goal and breaks it into subproblems."},{title:"Specialists",text:"Role-specific agents research, compute, retrieve, or draft independently."},{title:"Arbitration",text:"Results are merged, checked, and possibly sent back for revisions."},{title:"Execution",text:"Approved actions or final deliverables are emitted with logs and artifacts."}],controls:["Shared contracts for artifacts and messages.","Private versus shared memory boundaries.","Human checkpoints and execution budgets."],risks:["Coordination overhead outweighing gains from specialization.","Hidden prompt explosion across agents.","Trace complexity if runs are not correlated end to end."]}];const marketTools=[{title:"OpenAI Responses API",category:"Managed Platforms",summary:"Unified model interface with built-in tools, stateful response chains, and remote MCP support.",fits:"Good for production apps that want a single API for model calls plus tools such as web search, file search, code interpreter, and computer use.",details:["Built-in tools let the model search the web, retrieve from files, run code, use remote MCP servers, or drive computer workflows.","The Responses API is the current primary interface for advanced OpenAI agentic interactions.","Useful when you want managed tool execution patterns without building the entire loop yourself."],sourceLabel:"OpenAI tools guide",sourceUrl:"https://platform.openai.com/docs/guides/tools?api-mode=responses"},{title:"Anthropic Claude Tool Use",category:"Managed Platforms",summary:"Claude supports client tools and server tools, including web search and computer-use style flows.",fits:"Good for structured tool loops where you want explicit control over tool execution and Claude-centric orchestration.",details:["Anthropic distinguishes client tools that run on your systems from server tools that run on Anthropic infrastructure.","Versioned tool types are part of the compatibility model.","Common fit for research agents, coding assistants, and computer-use prototypes."],sourceLabel:"Anthropic tool use overview",sourceUrl:"https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview"},{title:"Vertex AI Agent Engine",category:"Managed Platforms",summary:"Managed Google runtime for deploying, scaling, observing, and governing production agents.",fits:"Strong fit when your stack is already on Google Cloud or you want managed sessions, memory, observability, and enterprise controls.",details:["Agent Engine offers runtime, sessions, memory bank, evaluation, code execution, and observability.","Google positions it as part of Vertex AI Agent Builder.","It supports multiple frameworks and the Agent2Agent open protocol."],sourceLabel:"Vertex AI Agent Engine overview",sourceUrl:"https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/overview"},{title:"Amazon Bedrock",category:"Managed Platforms",summary:"Managed foundation model platform with broad model access and enterprise integrations.",fits:"Good for AWS-heavy stacks that want model choice, Bedrock agents, knowledge bases, and managed governance.",details:["Bedrock provides secure access to many foundation models and multiple API styles, including OpenAI-compatible endpoints.","Amazon is also pushing AgentCore and server-side tools around Bedrock workflows.","Useful when you want a managed platform with deep AWS integration."],sourceLabel:"Amazon Bedrock overview",sourceUrl:"https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"},{title:"Amazon Bedrock Agents",category:"Agent Services",summary:"Managed agent orchestration around instructions, action groups, prompt templates, and knowledge bases.",fits:"Use when you want AWS-managed orchestration for tool-calling agents tied to APIs and enterprise data.",details:["Build-time components include foundation model choice, instructions, action groups, prompt templates, and optional knowledge bases.","Runtime orchestration can invoke actions, query knowledge bases, and continue multi-step reasoning.","Agent memory can retain conversational context across sessions."],sourceLabel:"Amazon Bedrock agents",sourceUrl:"https://docs.aws.amazon.com/bedrock/latest/userguide/agents-how.html"},{title:"Amazon Bedrock Knowledge Bases",category:"Retrieval & Data",summary:"Managed RAG layer for connecting data sources, retrieval, citations, multimodal search, and reranking.",fits:"Use when you want managed retrieval on AWS rather than assembling your own ingestion and search stack.",details:["Knowledge Bases can retrieve, generate grounded responses, add citations, support multimodal content, and work with reranking.","They can connect to supported vector stores or create OpenSearch Serverless-backed setups.","Often paired directly with Bedrock Agents."],sourceLabel:"Bedrock Knowledge Bases",sourceUrl:"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"},{title:"Microsoft Foundry Agent Service",category:"Managed Platforms",summary:"Hosted agent runtime with scaling, identity, observability, and a growing managed tool catalog.",fits:"Strong fit for Azure-centric enterprise deployments that want hosted agents but framework flexibility.",details:["Foundry Agent Service can host prompt agents and code-based hosted agents built with Agent Framework, LangGraph, or custom code.","Managed tools include web search, file search, memory, code interpreter, MCP servers, and custom functions.","Microsoft positions observability and enterprise security as first-class features."],sourceLabel:"Foundry Agent Service overview",sourceUrl:"https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview"},{title:"LangChain",category:"Orchestration Frameworks",summary:"High-level framework with model abstraction, integrations, and prebuilt agent architecture.",fits:"Good when you want to get an agent running quickly and swap providers without rewriting the app shape.",details:["LangChain standardizes how you interact with models and tools across providers.","Its agent layer is easier to start with than lower-level orchestration frameworks.","LangChain agents are built on top of LangGraph for more durable workflows underneath."],sourceLabel:"LangChain overview",sourceUrl:"https://docs.langchain.com/oss/python/langchain/overview"},{title:"LangGraph",category:"Orchestration Frameworks",summary:"Low-level orchestration runtime for long-running, stateful, inspectable agent workflows.",fits:"Best when you need durable execution, human-in-the-loop, replay, and explicit graph control.",details:["LangGraph focuses on stateful workflows and long-running agents rather than high-level prompt abstraction.","The docs emphasize durable execution, memory, human oversight, and production deployment.","A strong fit when a simple agent loop becomes too implicit or brittle."],sourceLabel:"LangGraph overview",sourceUrl:"https://docs.langchain.com/oss/python/langgraph/overview"},{title:"LlamaIndex",category:"Orchestration Frameworks",summary:"A strong choice for document-heavy RAG and agentic workflows built around data interfaces.",fits:"Use when your app is retrieval-heavy and you want query engines, data connectors, and workflow abstractions.",details:["LlamaIndex provides workflows, agent patterns, and strong RAG-centered abstractions.","Its workflows are event-driven and can be used to build agents, extraction flows, and retrieval flows.","LlamaIndex is often chosen when data ingestion and retrieval quality are the center of the product."],sourceLabel:"LlamaIndex workflows",sourceUrl:"https://docs.llamaindex.ai/en/stable/understanding/workflows/"},{title:"CrewAI",category:"Orchestration Frameworks",summary:"Framework centered on structured flows plus collaborating multi-agent crews.",fits:"Useful when you explicitly want role-based multi-agent teams inside event-driven workflows.",details:["CrewAI distinguishes Flows for structured stateful control and Crews for collaborative autonomous agents.","Good mental model when you want both deterministic scaffolding and autonomous subteams.","Often used for research pipelines, internal automation, and role-based task delegation."],sourceLabel:"CrewAI introduction",sourceUrl:"https://docs.crewai.com/introduction"},{title:"Model Context Protocol (MCP)",category:"Protocols",summary:"Open protocol for exposing tools, prompts, and resources to models in a standard way.",fits:"Use when you want reusable tool connectors across IDEs, apps, and LLM clients.",details:["MCP gives models a standard way to discover and use external capabilities.","It is especially valuable when you do not want one-off custom tool integrations for every client.","In practice, MCP is becoming a common bridge between applications and developer tools."],sourceLabel:"MCP introduction",sourceUrl:"https://modelcontextprotocol.io/introduction"},{title:"Agent2Agent (A2A)",category:"Protocols",summary:"Open protocol aimed at communication and collaboration between AI agents.",fits:"Relevant when multiple agents or agent services need interoperable message contracts instead of bespoke glue.",details:["Google documents A2A as an open standard for seamless communication and collaboration between AI agents.","It matters most in advanced multi-agent or cross-system settings.","A2A becomes more useful as teams move from one agent to agent ecosystems."],sourceLabel:"Vertex AI agent usage overview",sourceUrl:"https://cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/use/overview"},{title:"Pinecone",category:"Retrieval & Data",summary:"Managed vector database with integrated embeddings, namespaces, reranking, and production tooling.",fits:"Good when you want a managed vector store and fast path to semantic or hybrid retrieval.",details:["Pinecone supports integrated embedding and reranking as well as bring-your-own-vectors workflows.","Namespaces and metadata filtering make it a common fit for multitenant production retrieval.","Teams often use it to reduce ops overhead around vector infrastructure."],sourceLabel:"Pinecone overview",sourceUrl:"https://docs.pinecone.io/guides/get-started/overview"},{title:"Weaviate",category:"Retrieval & Data",summary:"Open-source vector database oriented around semantic search, hybrid search, and RAG backends.",fits:"Useful when you want an open-source vector database with strong semantic retrieval ergonomics.",details:["Weaviate stores objects plus vector embeddings and supports semantic and hybrid search.","The docs explicitly position it as a backend for RAG workflows.","A good fit when you want self-hostable vector infrastructure with higher-level retrieval affordances."],sourceLabel:"Weaviate docs",sourceUrl:"https://docs.weaviate.io/weaviate/"},{title:"Milvus",category:"Retrieval & Data",summary:"High-performance open-source vector database built for scale and large retrieval workloads.",fits:"Useful when you need serious scale, distributed deployment options, and control over vector indexing.",details:["Milvus is built for high-performance similarity search and large-scale vector workloads.","Its docs emphasize cloud-native deployment, scale, and AI agent use cases.","Common choice when retrieval scale and infra control matter more than turnkey simplicity."],sourceLabel:"Milvus docs",sourceUrl:"https://milvus.io/docs"},{title:"pgvector",category:"Retrieval & Data",summary:"Vector similarity search inside PostgreSQL, which keeps vectors near relational data and app logic.",fits:"Great default when your app already lives in Postgres and you want simpler operations or hybrid relational plus vector queries.",details:["pgvector adds exact and approximate nearest-neighbor search to Postgres.","It supports common distance functions, HNSW and IVFFlat indexes, and ACID-friendly data modeling.","Very attractive for product teams that do not want to add a separate vector system too early."],sourceLabel:"pgvector repository",sourceUrl:"https://github.com/pgvector/pgvector"},{title:"vLLM",category:"Serving Runtimes",summary:"High-throughput open-source inference server with OpenAI-compatible APIs and advanced scheduling.",fits:"Use when you want to self-host models efficiently for production inference.",details:["vLLM is widely used for fast serving of open-weight models and can expose OpenAI-compatible endpoints.","Teams choose it for batching efficiency, throughput, and self-hosted control.","A common backbone behind internal model gateways."],sourceLabel:"vLLM serving docs",sourceUrl:"https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html"},{title:"Ollama",category:"Serving Runtimes",summary:"Local model runtime that makes it easy to run open models on laptops, desktops, and dev machines.",fits:"Perfect for prototyping, local developer workflows, privacy-sensitive experiments, and offline demos.",details:["Ollama is especially popular for local model experimentation with a simple runtime experience.","The project also supports OpenAI compatibility and tool-support patterns.","It is best thought of as a local runtime, not a replacement for every production serving case."],sourceLabel:"Ollama repository",sourceUrl:"https://github.com/ollama/ollama"},{title:"Hugging Face Text Generation Inference",category:"Serving Runtimes",summary:"Optimized server for deploying LLMs with streaming, batching, and production observability hooks.",fits:"Useful when you want a mature open-source serving stack in the Hugging Face ecosystem.",details:["TGI has long been a standard self-hosted serving option for transformer-based generation workloads.","It provides operational features like streaming and metrics for production systems.","Still relevant in many teams even as newer runtimes compete on performance."],sourceLabel:"TGI docs",sourceUrl:"https://huggingface.co/docs/text-generation-inference"},{title:"LangSmith",category:"Observability & Evals",summary:"Tracing, debugging, and monitoring platform tightly integrated with LangChain and LangGraph apps.",fits:"Use when you need end-to-end traces of agent execution and strong developer debugging ergonomics.",details:["LangSmith records traces, runs, threads, metadata, feedback, and monitoring information.","It is especially useful for stepping through tool calls and graph execution in agent systems.","Strong choice when your orchestration layer is in the LangChain ecosystem."],sourceLabel:"LangSmith observability",sourceUrl:"https://docs.langchain.com/langsmith/observability"},{title:"W&B Weave",category:"Observability & Evals",summary:"Platform for tracing, evaluating, versioning, and improving LLM applications over time.",fits:"Good when you want prompt/model comparison, trace visibility, datasets, scorers, and experiment tracking.",details:["Weave emphasizes traces, evaluations, versioning, experimentation, feedback, and production monitoring.","It works well for teams that want both experiment iteration and runtime visibility in one workflow.","Useful for tracking changes across prompts, models, datasets, and outputs."],sourceLabel:"What is Weave?",sourceUrl:"https://docs.wandb.ai/weave/concepts/what-is-weave"},{title:"Promptfoo",category:"Observability & Evals",summary:"Open-source evaluation and red-teaming toolkit for prompts, models, RAG systems, and agent apps.",fits:"Best when you want lightweight, local, CI-friendly evals and security testing.",details:["Promptfoo focuses on test-driven LLM development rather than ad hoc prompting.","It supports evaluation matrices, red teaming, benchmarks, and automated scoring.","A very practical option for teams that want evals in CI/CD."],sourceLabel:"Promptfoo intro",sourceUrl:"https://www.promptfoo.dev/docs/intro/"},{title:"NeMo Guardrails",category:"Safety & Governance",summary:"Programmable guardrails toolkit for adding controllable safety and policy rails to LLM apps.",fits:"Use when you need runtime rails around allowed topics, dialogue paths, or policy behavior.",details:["NeMo Guardrails is designed for programmable rails that are separate from model training.","It is useful when prompt rules alone are not trustworthy enough.","Think of it as policy infrastructure around a model-driven app."],sourceLabel:"NeMo Guardrails publication",sourceUrl:"https://nvidia.github.io/NeMo/publications/2023/2023-guardrails/"}];const codeExamples=[{id:"openai-tools",title:"OpenAI Responses API with built-in tools",language:"python",summary:"A production-flavored starter pattern for web-backed answers with file search and a custom action.",why:["Use this pattern when you want one API surface for model responses plus tools.","It shows the shape of an app where the model can pick built-in or custom tools."],notes:["Keep your custom tool schema narrow and well-typed.","Log every tool call and its result so you can replay failures."],code:String.raw`from openai import OpenAI

client = OpenAI()

tools = [
    {"type": "web_search"},
    {"type": "file_search", "vector_store_ids": ["vs_knowledge_base"]},
    {
        "type": "function",
        "name": "create_support_ticket",
        "description": "Create a support ticket for the user.",
        "parameters": {
            "type": "object",
            "properties": {
                "priority": {"type": "string", "enum": ["low", "medium", "high"]},
                "summary": {"type": "string"},
                "customer_email": {"type": "string"}
            },
            "required": ["priority", "summary", "customer_email"]
        }
    }
]

response = client.responses.create(
    model="gpt-5",
    tools=tools,
    input=[
        {
            "role": "system",
            "content": (
                "Answer from retrieved evidence when possible. "
                "If the user asks for an account action, call the ticket tool."
            ),
        },
        {
            "role": "user",
            "content": "My invoice is wrong. Check our billing policy and open a high-priority ticket."
        }
    ]
)

print(response.output_text)`,},{id:"anthropic-tool-use",title:"Anthropic tool use loop",language:"python",summary:"A minimal client-side tool execution loop for Claude.",why:["Use this structure when you want Claude to choose tools but your app to execute them.","This keeps side effects inside your own audited code path."],notes:["Always validate tool arguments before you call external systems.","Handle multiple tool calls and retry strategy deliberately."],code:String.raw`import anthropic
import json

client = anthropic.Anthropic()

tools = [
    {
        "name": "lookup_order",
        "description": "Look up an order by order id.",
        "input_schema": {
            "type": "object",
            "properties": {
                "order_id": {"type": "string"}
            },
            "required": ["order_id"]
        }
    }
]

messages = [{"role": "user", "content": "Where is order 84721?"}]

response = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    tools=tools,
    messages=messages
)

for block in response.content:
    if block.type == "tool_use" and block.name == "lookup_order":
        result = {"status": "shipped", "eta": "2026-04-08"}
        messages.extend([
            {"role": "assistant", "content": response.content},
            {
                "role": "user",
                "content": [{
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": json.dumps(result)
                }]
            }
        ])

final = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    tools=tools,
    messages=messages
)

print(final.content[0].text)`,},{id:"langgraph-loop",title:"LangGraph agent loop with explicit state",language:"python",summary:"A graph-based control loop that decides when to call tools and when to finish.",why:["Use this when simple high-level agents become too implicit to debug.","Graph orchestration helps you encode durable state and deterministic routing."],notes:["Persist checkpoints if the workflow is long-running or approval-gated.","Add explicit stop rules to prevent infinite loops."],code:String.raw`from typing import TypedDict
from langgraph.graph import StateGraph, END

class AgentState(TypedDict):
    user_query: str
    tool_result: str
    should_call_tool: bool
    final_answer: str

def decide(state: AgentState) -> AgentState:
    query = state["user_query"].lower()
    return {**state, "should_call_tool": "latest" in query or "search" in query}

def call_tool(state: AgentState) -> AgentState:
    return {**state, "tool_result": "Top search result summary"}

def answer(state: AgentState) -> AgentState:
    if state["tool_result"]:
        final = f"Using the tool result: {state['tool_result']}"
    else:
        final = "Answering directly from the model."
    return {**state, "final_answer": final}

graph = StateGraph(AgentState)
graph.add_node("decide", decide)
graph.add_node("call_tool", call_tool)
graph.add_node("answer", answer)
graph.set_entry_point("decide")
graph.add_conditional_edges(
    "decide",
    lambda state: "call_tool" if state["should_call_tool"] else "answer"
)
graph.add_edge("call_tool", "answer")
graph.add_edge("answer", END)

app = graph.compile()
result = app.invoke({
    "user_query": "Search the latest cloud pricing changes",
    "tool_result": "",
    "should_call_tool": False,
    "final_answer": ""
})

print(result["final_answer"])`,},{id:"rag-pgvector",title:"RAG with pgvector",language:"python + sql",summary:"A compact pattern for storing embeddings in Postgres and retrieving grounded context.",why:["Use this when your app already depends on Postgres and you want a simple RAG stack.","This is often the most practical early production choice."],notes:["Normalize your document metadata and retain source ids for citations.","Evaluate chunk size and overlap with real user queries."],code:String.raw`CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE doc_chunks (
    id bigserial PRIMARY KEY,
    document_id text NOT NULL,
    chunk_index int NOT NULL,
    content text NOT NULL,
    metadata jsonb NOT NULL,
    embedding vector(1536) NOT NULL
);

CREATE INDEX ON doc_chunks USING hnsw (embedding vector_cosine_ops);

from openai import OpenAI
import psycopg

client = OpenAI()
question = "What does our refund policy say about annual plans?"
embedding = client.embeddings.create(
    model="text-embedding-3-large",
    input=question
).data[0].embedding

with psycopg.connect("postgresql://localhost/app") as conn:
    rows = conn.execute(
        """
        SELECT document_id, content, metadata
        FROM doc_chunks
        ORDER BY embedding <=> %s::vector
        LIMIT 6
        """,
        (embedding,)
    ).fetchall()

context = "\n\n".join(f"[{row[0]}] {row[1]}" for row in rows)
answer = client.responses.create(
    model="gpt-5-mini",
    input=[
        {"role": "system", "content": "Answer only from the supplied context and cite the source ids."},
        {"role": "user", "content": f"Question: {question}\n\nContext:\n{context}"}
    ]
)
print(answer.output_text)`,},{id:"langchain-rag-chain",title:"LangChain RAG retrieval chain",language:"python",summary:"A focused retrieval chain that loads documents, retrieves evidence, and answers with citations.",why:["Use this when you want a clear, composable RAG pipeline with separate retrieval and generation stages.","It mirrors how teams usually start in LangChain: build the chain, then tune retrieval depth and prompt constraints."],notes:["Tune chunking and retriever settings before changing the prompt shape.","Keep the answer prompt strict about using only retrieved context."],code:String.raw`from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain

docs = TextLoader("./policies/refund_policy.txt").load()
chunks = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=80
).split_documents(docs)

vectorstore = FAISS.from_documents(chunks, OpenAIEmbeddings())
retriever = vectorstore.as_retriever(search_kwargs={"k": 4})

prompt = ChatPromptTemplate.from_messages([
    ("system", "Answer only from the supplied context and cite source ids."),
    ("human", "{input}\\n\\nContext:\\n{context}")
])

llm = ChatOpenAI(model="gpt-4.1-mini", temperature=0)
document_chain = create_stuff_documents_chain(llm, prompt)
rag_chain = create_retrieval_chain(retriever, document_chain)

result = rag_chain.invoke({
    "input": "Can annual subscriptions be refunded after 14 days?"
})
print(result["answer"])`,},{id:"llamaindex-agent",title:"LlamaIndex agent with retrieval tool",language:"python",summary:"A retrieval-centric agent pattern with a tool boundary around the query engine.",why:["Use this when your application leans heavily on document retrieval and you want a data-first framework.","It shows how retrieval becomes one tool among several possible capabilities."],notes:["Keep query-engine prompts focused on grounded answers and citations.","Use workflows when you need more explicit orchestration around the agent."],code:String.raw`from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.core.tools import QueryEngineTool, ToolMetadata
from llama_index.core.agent.workflow import FunctionAgent
from llama_index.llms.openai import OpenAI

documents = SimpleDirectoryReader("./handbook").load_data()
index = VectorStoreIndex.from_documents(documents)
query_engine = index.as_query_engine(similarity_top_k=5)

handbook_tool = QueryEngineTool(
    query_engine=query_engine,
    metadata=ToolMetadata(
        name="handbook_search",
        description="Search the internal handbook for policy and process questions."
    )
)

agent = FunctionAgent(
    tools=[handbook_tool],
    llm=OpenAI(model="gpt-4.1"),
    system_prompt=(
        "Use handbook_search whenever the answer depends on company policy. "
        "Respond with a concise answer and cite the relevant sections."
    )
)

response = agent.run("Can contractors expense travel to an onsite?")
print(response)`,},{id:"langgraph-agent-loop",title:"LangGraph agent with checkpoints",language:"python",summary:"A durable graph workflow with an explicit tool branch and resumable state.",why:["Use this when the agent needs a visible control loop rather than one opaque prompt-driven pass.","LangGraph makes the route through tool use, review, and final response easier to inspect and resume."],notes:["Store checkpoints for long runs or any flow that may need human approval.","Keep the state small and typed so branch logic stays understandable."],code:String.raw`from typing import Annotated, TypedDict
from langchain_core.messages import BaseMessage
from langchain_core.tools import tool
from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode, tools_condition
from langchain_openai import ChatOpenAI

@tool
def lookup_policy(topic: str) -> str:
    """Return a short policy summary for a topic."""
    return f"Policy summary for {topic}: check the handbook and verify with the owner."

class AgentState(TypedDict):
    messages: Annotated[list[BaseMessage], add_messages]

llm = ChatOpenAI(model="gpt-4.1-mini")
tools = [lookup_policy]
model = llm.bind_tools(tools)

def agent_node(state: AgentState):
    response = model.invoke(state["messages"])
    return {"messages": [response]}

graph = StateGraph(AgentState)
graph.add_node("agent", agent_node)
graph.add_node("tools", ToolNode(tools))
graph.add_edge(START, "agent")
graph.add_conditional_edges("agent", tools_condition)
graph.add_edge("tools", "agent")

app = graph.compile(checkpointer=MemorySaver())
result = app.invoke(
    {"messages": [{"role": "user", "content": "Summarize the policy for annual refunds."}]},
    config={"configurable": {"thread_id": "refund-demo"}}
)
print(result["messages"][-1].content)`,},{id:"vllm-serve",title:"Serve an open model with vLLM",language:"bash",summary:"A practical self-hosted runtime pattern that keeps your app on an OpenAI-compatible surface.",why:["Use this when you want to control runtime cost, data flow, or model choice with self-hosted inference.","OpenAI-compatible serving reduces migration friction for application code."],notes:["Measure throughput, context usage, and prompt cache behavior under realistic load.","Separate the serving layer from your app layer so you can swap runtimes later."],code:String.raw`python -m vllm.entrypoints.openai.api_server \
  --model meta-llama/Llama-3.3-70B-Instruct \
  --tensor-parallel-size 4 \
  --max-model-len 32768 \
  --port 8000

curl http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta-llama/Llama-3.3-70B-Instruct",
    "messages": [
      {"role": "system", "content": "You are a concise assistant."},
      {"role": "user", "content": "Explain retrieval-augmented generation."}
    ],
    "temperature": 0.2
  }'`,},{id:"promptfoo-eval",title:"Promptfoo evaluation for a RAG app",language:"yaml",summary:"A lightweight eval harness to test answer quality, policy adherence, and hallucination risk.",why:["Use this when you want fast local or CI-based evaluation before shipping changes.","Good eval hygiene is what separates iteration from random prompt tweaking."],notes:["Add failure cases from real production traces into your eval set.","Separate retrieval evals from answer-style evals when possible."],code:String.raw`description: refund-policy-rag
providers:
  - openai:gpt-5-mini

prompts:
  - |
    You are a support assistant. Answer only from the provided policy context.
    If the answer is missing, say you do not have enough information.

tests:
  - vars:
      question: "Can I cancel an annual plan midway?"
      context: "Annual plans are non-refundable after 14 days from purchase."
    assert:
      - type: contains
        value: "14 days"
      - type: not-contains
        value: "monthly"
  - vars:
      question: "Does the policy mention crypto refunds?"
      context: "The policy covers card and ACH refunds only."
    assert:
      - type: contains
        value: "do not have enough information"`,}];const productionChecks=[{id:"evals",title:"Evaluation Harness",summary:"Treat evaluation as a release gate for behavior, not as an afterthought when users start complaining.",chips:["Offline evals","Golden sets","Regression tests","Scorecards"],focus:["Build task suites for retrieval quality, answer correctness, formatting, refusal behavior, and tool discipline.","Add examples from real traces so the eval set reflects how users actually break the system.","Track per-step metrics for agent workflows, not just final-answer pass rates."],watchouts:["A single overall score can hide that retrieval improved while task completion got worse.","Human review is still needed for ambiguity, policy nuance, and high-impact actions.","If prompts and tool schemas change but evals do not, the test harness becomes cosmetic."]},{id:"context",title:"Context Engineering",summary:"The model only reasons over what you actually place in front of it, so context construction is product logic.",chips:["Chunking","Prompt assembly","Citations","Memory boundaries"],focus:["Decide what belongs in system instructions, retrieval context, tool output, user memory, and structured metadata.","Make chunking and reranking decisions with real user questions instead of arbitrary token sizes.","Force evidence use explicitly when the task depends on grounded sources."],watchouts:["Too much context can bury the few passages that really matter.","Long memory improves continuity only if stale or wrong facts can be corrected.","If tool output is messy, the next reasoning step becomes brittle even with a strong model."]},{id:"release",title:"Prompt and Workflow Release Discipline",summary:"Prompts, tool schemas, and orchestration rules need versioning, review, and rollback just like application code.",chips:["Prompt versions","Schema changes","Rollbacks","Change logs"],focus:["Version prompts, system policies, tool contracts, and retrieval settings together so runs stay reproducible.","Capture why a change was made and which evals it was expected to improve.","Keep rollback paths ready when a prompt fix improves style but hurts task completion."],watchouts:["Silent prompt edits make regression analysis nearly impossible.","Tool schemas can break behavior even when the prompt is unchanged.","Release notes should include operational impact, not just wording changes."]},{id:"guardrails",title:"Guardrails and Approval Boundaries",summary:"The more agency a system has, the more you need explicit boundaries around what it may decide versus what it may execute.",chips:["Policy rails","Approvals","Permissions","Audit trails"],focus:["Separate user permissions, model permissions, and tool permissions so the model cannot quietly exceed authority.","Add approval steps around payments, account changes, destructive edits, or low-confidence actions.","Log why a tool was selected, what arguments were proposed, and what human or system approved execution."],watchouts:["Prompt-only rules are fragile if retrieved text or tools can override them.","Approval UX must be fast enough that humans actually use it instead of bypassing it.","Guardrails need red-team coverage for prompt injection, tool misuse, and retrieval poisoning."]},{id:"ops",title:"Caching, Cost, and Human Recovery",summary:"A production LLM app needs graceful failure paths, cost controls, and fallback behavior long before perfect autonomy.",chips:["Caching","Fallbacks","HITL","Recovery playbooks"],focus:["Cache stable context, retrieval artifacts, and safe repeated responses where correctness will not drift silently.","Design fallbacks such as smaller models, deterministic code paths, or queue-based retries for degraded states.","Create human review queues and rework flows for cases the model should draft but not finalize."],watchouts:["Caching can preserve stale policy answers or outdated user state if invalidation is weak.","Fallback models may require different prompts, tool choices, or output validation rules.","If humans only see failures with no trace context, recovery work becomes guesswork."]}];const sources=[{title:"OpenAI Tools Guide",meta:"Built-in tools, file search, function calling, remote MCP",url:"https://platform.openai.com/docs/guides/tools?api-mode=responses"},{title:"OpenAI Responses API",meta:"Stateful response interface and model/tool entrypoint",url:"https://platform.openai.com/docs/api-reference/responses/compact?api-mode=responses"},{title:"Anthropic Tool Use Overview",meta:"Client tools, server tools, pricing, and patterns",url:"https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview"},{title:"Vertex AI Agent Engine Overview",meta:"Managed runtime, sessions, memory, observability, governance",url:"https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/overview"},{title:"Amazon Bedrock Overview",meta:"Managed model platform, APIs, current positioning",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"},{title:"Amazon Bedrock Agents",meta:"Instructions, action groups, orchestration, memory",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/agents-how.html"},{title:"Amazon Bedrock Knowledge Bases",meta:"Managed retrieval, citations, multimodal content, reranking",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"},{title:"Microsoft Foundry Agent Service",meta:"Hosted agents, managed tools, scaling, observability",url:"https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview"},{title:"LangChain Overview",meta:"High-level agent framework and model abstraction",url:"https://docs.langchain.com/oss/python/langchain/overview"},{title:"LangGraph Overview",meta:"Durable execution, stateful agent workflows, HITL",url:"https://docs.langchain.com/oss/python/langgraph/overview"},{title:"LlamaIndex Workflows",meta:"Event-driven workflows for RAG and agents",url:"https://docs.llamaindex.ai/en/stable/understanding/workflows/"},{title:"CrewAI Introduction",meta:"Flows plus collaborative crews",url:"https://docs.crewai.com/introduction"},{title:"Model Context Protocol",meta:"Standard model access to tools, prompts, and resources",url:"https://modelcontextprotocol.io/introduction"},{title:"Pinecone Overview",meta:"Managed vector database and integrated reranking",url:"https://docs.pinecone.io/guides/get-started/overview"},{title:"Weaviate Docs",meta:"Semantic search and RAG backend",url:"https://docs.weaviate.io/weaviate/"},{title:"Milvus Docs",meta:"Scalable vector database for GenAI applications",url:"https://milvus.io/docs"},{title:"pgvector",meta:"Vector similarity search for Postgres",url:"https://github.com/pgvector/pgvector"},{title:"vLLM OpenAI-Compatible Server",meta:"Open-source serving runtime",url:"https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html"},{title:"Ollama",meta:"Local model runtime",url:"https://github.com/ollama/ollama"},{title:"Hugging Face TGI",meta:"Self-hosted inference server",url:"https://huggingface.co/docs/text-generation-inference"},{title:"LangSmith Observability",meta:"Tracing, runs, threads, and monitoring",url:"https://docs.langchain.com/langsmith/observability"},{title:"W&B Weave",meta:"Tracing, evaluation, versioning, and monitoring",url:"https://docs.wandb.ai/weave/concepts/what-is-weave"},{title:"Promptfoo Intro",meta:"Open-source evals and red teaming",url:"https://www.promptfoo.dev/docs/intro/"},{title:"NeMo Guardrails",meta:"Programmable guardrails for LLM apps",url:"https://nvidia.github.io/NeMo/publications/2023/2023-guardrails/"}];const state={stackId:stackLayers[0].id,ladderId:ladderStages[0].id,architectureId:resolveInitialGenAIView().architectureId||architectures[0].id,marketFilter:"All",marketQuery:"",codeId:resolveInitialGenAIView().codeId||codeExamples[0].id,checkId:productionChecks[0].id};const elements={stackList:document.getElementById("stackList"),stackDetail:document.getElementById("stackDetail"),ladderList:document.getElementById("ladderList"),ladderDetail:document.getElementById("ladderDetail"),architectureTabs:document.getElementById("architectureTabs"),architectureCanvas:document.getElementById("architectureCanvas"),architectureDetail:document.getElementById("architectureDetail"),marketSearch:document.getElementById("marketSearch"),marketFilters:document.getElementById("marketFilters"),marketGrid:document.getElementById("marketGrid"),codeTabs:document.getElementById("codeTabs"),codeDetail:document.getElementById("codeDetail"),checksTabs:document.getElementById("checksTabs"),checksDetail:document.getElementById("checksDetail"),sourcesList:document.getElementById("sourcesList")};renderStack();renderLadder();renderArchitectures();renderMarket();renderCode();renderChecks();renderSources();initSystemsWorkbench();applyInitialGenAIView();elements.stackList.addEventListener("click",(event)=>{const button=event.target.closest("[data-stack-id]");if(!button)return;state.stackId=button.dataset.stackId;renderStack();});elements.ladderList.addEventListener("click",(event)=>{const button=event.target.closest("[data-ladder-id]");if(!button)return;state.ladderId=button.dataset.ladderId;renderLadder();});elements.architectureTabs.addEventListener("click",(event)=>{const button=event.target.closest("[data-architecture-id]");if(!button)return;state.architectureId=button.dataset.architectureId;renderArchitectures();});elements.marketFilters.addEventListener("click",(event)=>{const button=event.target.closest("[data-market-filter]");if(!button)return;state.marketFilter=button.dataset.marketFilter;renderMarket();});elements.marketSearch.addEventListener("input",(event)=>{state.marketQuery=event.target.value.trim().toLowerCase();renderMarket();});elements.codeTabs.addEventListener("click",(event)=>{const button=event.target.closest("[data-code-id]");if(!button)return;state.codeId=button.dataset.codeId;renderCode();});elements.checksTabs.addEventListener("click",(event)=>{const button=event.target.closest("[data-check-id]");if(!button)return;state.checkId=button.dataset.checkId;renderChecks();});elements.codeDetail.addEventListener("click",async(event)=>{const button=event.target.closest("[data-copy-code]");if(!button)return;const example=codeExamples.find((item)=>item.id===state.codeId);if(!example)return;try{await navigator.clipboard.writeText(example.code);button.textContent="Copied";window.setTimeout(()=>{button.textContent="Copy code";},1500);}catch(error){button.textContent="Copy failed";window.setTimeout(()=>{button.textContent="Copy code";},1500);}});function initSystemsWorkbench(){const ids=["wbUseCase","wbModelTier","wbPromptTokens","wbChunkSize","wbTopK","wbRerank","wbTools","wbAutonomy","wbMemory","wbApproval","wbEvals"];const controls=ids.map((id)=>document.getElementById(id)).filter(Boolean);if(controls.length!==ids.length)return;const render=()=>renderSystemsWorkbench(controls);controls.forEach((control)=>{const eventName=control.type==="checkbox"||control.tagName==="SELECT"?"change":"input";control.addEventListener(eventName,render);});window.addEventListener("resize",render);render();}
function renderSystemsWorkbench(controls){const values=Object.fromEntries(controls.map((control)=>{if(control.type==="checkbox")return[control.id,control.checked];if(control.type==="range")return[control.id,Number(control.value)];return[control.id,control.value];}));const tier={fast:{label:"Fast",context:16000,speed:0.72,cost:0.42,baseLatency:0.75},balanced:{label:"Balanced",context:128000,speed:1,cost:1,baseLatency:1.15},reasoning:{label:"Reasoning",context:200000,speed:1.85,cost:2.4,baseLatency:2.1}}[values.wbModelTier];const useCase={support:{label:"Grounded",output:700,riskBias:-4,notes:["Citations and refusal behavior matter more than creative fluency.","Keep chunk boundaries aligned with policy, FAQ, and troubleshooting units."]},analyst:{label:"Research",output:1200,riskBias:2,notes:["Retrieval recall and citation ranking dominate answer quality.","Use reranking, metadata filters, and source freshness checks."]},agent:{label:"Agentic",output:900,riskBias:10,notes:["Tool schemas, approval gates, and stop rules are part of the product.","Trace every plan step, tool call, argument, and final action."]},creative:{label:"Creative",output:1600,riskBias:-8,notes:["Less retrieval pressure, more style control and iteration memory.","Use examples, brand constraints, and explicit revision criteria."]}}[values.wbUseCase];const retrievalTokens=values.wbTopK*values.wbChunkSize;const toolSchemaTokens=values.wbTools*180;const memoryTokens=values.wbMemory?900:0;const evalTokens=values.wbEvals?260:0;const packedTokens=values.wbPromptTokens+retrievalTokens+toolSchemaTokens+memoryTokens+evalTokens;const contextUse=Math.min(100,Math.round((packedTokens/tier.context)*100));const grounding=clamp(34+values.wbTopK*2.8+values.wbRerank*0.34-values.wbChunkSize/110+(values.wbEvals?8:0),12,96);const latency=tier.baseLatency+tier.speed*(packedTokens/9000+
values.wbTopK*0.07+
values.wbTools*0.11+
values.wbAutonomy*0.014+
values.wbRerank*0.004);const cost=tier.cost*((packedTokens/1000)*0.012+(useCase.output/1000)*0.032);const riskScore=clamp(values.wbAutonomy*0.32+
values.wbTools*4.2+
(values.wbMemory?8:0)+
(values.wbApproval?-16:14)+
(values.wbEvals?-12:12)+
(contextUse>85?10:0)+
(values.wbRerank<35?8:0)+
useCase.riskBias,0,100);setText("wbPromptTokensVal",String(values.wbPromptTokens));setText("wbChunkSizeVal",String(values.wbChunkSize));setText("wbTopKVal",String(values.wbTopK));setText("wbRerankVal",`${values.wbRerank}%`);setText("wbToolsVal",String(values.wbTools));setText("wbAutonomyVal",`${values.wbAutonomy}%`);setText("wbModeBadge",`${useCase.label} / ${tier.label}`);setText("wbContextUse",`${contextUse}%`);setText("wbLatency",`${latency.toFixed(1)}s`);setText("wbCost",cost.toFixed(3));setText("wbRisk",riskLabel(riskScore));const model={...values,tier,useCase,retrievalTokens,toolSchemaTokens,memoryTokens,evalTokens,packedTokens,contextUse,grounding,latency,cost,riskScore};renderStageNotes(model);renderRecommendations(model);drawSystemsPipeline(model);drawSystemsBudget(model);}
function renderStageNotes(model){const items=[["Context packing",`${model.packedTokens.toLocaleString()} tokens before generation. Retrieval is ${model.retrievalTokens.toLocaleString()} tokens, tools add ${model.toolSchemaTokens.toLocaleString()} schema tokens, and memory adds ${model.memoryTokens.toLocaleString()} tokens.`],["Grounding score",`${Math.round(model.grounding)} out of 100. Higher values mean retrieval is more likely to include the right evidence before the model writes.`],["Control loop",model.wbAutonomy>65?"The model can make many intermediate decisions, so approval gates, step limits, and rollback paths become first-class design requirements.":"Most decisions remain deterministic or user-led, which lowers risk and makes debugging easier."],["Use-case emphasis",model.useCase.notes.join(" ")]];const target=document.getElementById("wbStageNotes");if(!target)return;target.innerHTML=items.map(([title,text])=>`
      <div class="wb-note"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></div>
    `).join("");}
function renderRecommendations(model){const recommendations=[];if(model.contextUse>80){recommendations.push(["Reduce context pressure","Lower chunk size, retrieve fewer chunks, summarize long memory, or move stable policy text into cached prompt sections. High context use increases latency and makes relevant evidence harder to attend to."]);}else{recommendations.push(["Context budget is healthy","There is room for citations, short tool results, and a structured answer format without crowding the prompt."]);}
if(model.grounding<58&&model.wbUseCase!=="creative"){recommendations.push(["Improve retrieval quality","Raise reranker strength, add hybrid lexical search, attach metadata filters, and evaluate recall before tuning the answer prompt."]);}else{recommendations.push(["Retrieval is doing useful work","Keep measuring hit rate, citation faithfulness, and whether the top snippets actually contain the answer."]);}
if(model.riskScore>62){recommendations.push(["Add stricter action controls","Use allow-listed tools, typed arguments, human approval for irreversible actions, budget limits, and explicit stop conditions."]);}else{recommendations.push(["Risk is bounded for this shape","Keep traces, eval gates, and release versioning so behavior changes are visible before rollout."]);}
if(model.wbTools>7){recommendations.push(["Split the tool surface","Group tools by workflow and expose only the small set needed for the current route. Too many choices makes tool selection harder to test."]);}
if(model.wbMemory&&!model.wbEvals){recommendations.push(["Test memory behavior","Memory changes the prompt invisibly. Add regression cases for stale preferences, privacy boundaries, and cross-session leakage."]);}
const target=document.getElementById("wbRecommendations");if(!target)return;target.innerHTML=recommendations.map(([title,text])=>`
      <div class="wb-note"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></div>
    `).join("");}
function drawSystemsPipeline(model){const canvas=document.getElementById("systemsPipelineCanvas");if(!canvas)return;const ctx=fitCanvas(canvas);const width=canvas.clientWidth;const height=canvas.clientHeight;const colors=themeColors();ctx.clearRect(0,0,width,height);const stages=[{title:"Prompt",meta:`${model.wbPromptTokens} tokens`,active:true,score:0.75},{title:"Retrieve",meta:`${model.wbTopK} chunks`,active:model.wbTopK>0,score:model.grounding/100},{title:"Rerank",meta:`${model.wbRerank}%`,active:model.wbRerank>0,score:model.wbRerank/100},{title:"Pack",meta:`${model.contextUse}% ctx`,active:true,score:1-model.contextUse/130},{title:"Model",meta:model.tier.label,active:true,score:model.wbModelTier==="reasoning"?0.9:0.72},{title:"Tools",meta:`${model.wbTools} tools`,active:model.wbTools>0,score:clamp(model.wbTools/10,0.12,1)},{title:"Approval",meta:model.wbApproval?"gated":"direct",active:model.wbApproval,score:model.wbApproval?0.82:0.25},{title:"Evals",meta:model.wbEvals?"enabled":"missing",active:model.wbEvals,score:model.wbEvals?0.86:0.2}];const margin=30;const gap=18;const cols=width>760?4:2;const rows=Math.ceil(stages.length/cols);const cardW=(width-margin*2-gap*(cols-1))/cols;const cardH=Math.min(112,(height-margin*2-gap*(rows-1))/rows);stages.forEach((stage,index)=>{const col=index%cols;const row=Math.floor(index/cols);const x=margin+col*(cardW+gap);const y=margin+row*(cardH+gap);if(index>0){const prevCol=(index-1)%cols;const prevRow=Math.floor((index-1)/cols);const px=margin+prevCol*(cardW+gap)+cardW;const py=margin+prevRow*(cardH+gap)+cardH/2;const tx=x;const ty=y+cardH/2;ctx.strokeStyle=stage.active?colors.accent:colors.border;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(px,py);ctx.lineTo(tx,ty);ctx.stroke();}
ctx.fillStyle=stage.active?colors.surface:colors.mutedSurface;ctx.strokeStyle=stage.active?colors.accent:colors.border;roundRect(ctx,x,y,cardW,cardH,8);ctx.fill();ctx.stroke();ctx.fillStyle=stage.active?colors.highlight:colors.muted;ctx.fillRect(x+14,y+cardH-18,Math.max(8,(cardW-28)*stage.score),5);ctx.fillStyle=colors.text;ctx.font="700 16px Segoe UI, sans-serif";ctx.fillText(stage.title,x+14,y+30);ctx.fillStyle=colors.muted;ctx.font="13px Segoe UI, sans-serif";ctx.fillText(stage.meta,x+14,y+55);});}
function drawSystemsBudget(model){const canvas=document.getElementById("systemsBudgetCanvas");if(!canvas)return;const ctx=fitCanvas(canvas);const width=canvas.clientWidth;const height=canvas.clientHeight;const colors=themeColors();ctx.clearRect(0,0,width,height);const parts=[["Prompt",model.wbPromptTokens,colors.accent],["Retrieval",model.retrievalTokens,colors.highlight],["Tools",model.toolSchemaTokens,colors.warning],["Memory",model.memoryTokens,colors.success],["Evals",model.evalTokens,colors.muted]];const maxTokens=Math.max(model.tier.context,model.packedTokens);const x=26;const barY=74;const barW=width-52;const barH=42;let offset=0;ctx.fillStyle=colors.surface;roundRect(ctx,x,barY,barW,barH,8);ctx.fill();parts.forEach(([label,tokens,color])=>{const partW=(tokens/maxTokens)*barW;if(partW<1)return;ctx.fillStyle=color;ctx.fillRect(x+offset,barY,partW,barH);if(partW>54){ctx.fillStyle=colors.bg;ctx.font="700 12px Segoe UI, sans-serif";ctx.fillText(label,x+offset+8,barY+26);}
offset+=partW;});ctx.strokeStyle=colors.border;roundRect(ctx,x,barY,barW,barH,8);ctx.stroke();const markerX=x+(model.tier.context/maxTokens)*barW;ctx.strokeStyle=colors.text;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(markerX,barY-16);ctx.lineTo(markerX,barY+barH+16);ctx.stroke();ctx.fillStyle=colors.text;ctx.font="700 14px Segoe UI, sans-serif";ctx.fillText(`${model.tier.context.toLocaleString()} token window`,Math.max(26,markerX-150),barY-24);const riskY=180;const riskW=barW*(model.riskScore/100);ctx.fillStyle=colors.surface;roundRect(ctx,x,riskY,barW,30,8);ctx.fill();ctx.fillStyle=model.riskScore>66?colors.warning:model.riskScore>38?colors.highlight:colors.success;roundRect(ctx,x,riskY,riskW,30,8);ctx.fill();ctx.fillStyle=colors.text;ctx.font="700 14px Segoe UI, sans-serif";ctx.fillText(`Operational risk: ${Math.round(model.riskScore)} / 100`,x,riskY-14);ctx.fillText(`Packed input: ${model.packedTokens.toLocaleString()} tokens`,x,42);}
function fitCanvas(canvas){const ratio=window.devicePixelRatio||1;const rect=canvas.getBoundingClientRect();const width=Math.max(320,Math.floor(rect.width));const height=Math.max(220,Math.floor(rect.height));canvas.width=Math.floor(width*ratio);canvas.height=Math.floor(height*ratio);const ctx=canvas.getContext("2d");ctx.setTransform(ratio,0,0,ratio,0,0);return ctx;}
function themeColors(){const styles=getComputedStyle(document.documentElement);return{bg:styles.getPropertyValue("--bg").trim()||"#07111d",text:styles.getPropertyValue("--text").trim()||"#e8f1ff",muted:styles.getPropertyValue("--muted").trim()||"#a7bbd4",border:styles.getPropertyValue("--border").trim()||"#27415d",surface:styles.getPropertyValue("--surface-strong").trim()||"#12263b",mutedSurface:styles.getPropertyValue("--surface-muted").trim()||"#102133",accent:styles.getPropertyValue("--accent").trim()||"#14b8a6",highlight:styles.getPropertyValue("--highlight").trim()||"#38bdf8",warning:styles.getPropertyValue("--warning").trim()||"#fb923c",success:styles.getPropertyValue("--success").trim()||"#22c55e"};}
function roundRect(ctx,x,y,width,height,radius){const r=Math.min(radius,width/2,height/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+width,y,x+width,y+height,r);ctx.arcTo(x+width,y+height,x,y+height,r);ctx.arcTo(x,y+height,x,y,r);ctx.arcTo(x,y,x+width,y,r);ctx.closePath();}
function setText(id,text){const target=document.getElementById(id);if(target)target.textContent=text;}
function clamp(value,min,max){return Math.max(min,Math.min(max,value));}
function riskLabel(score){if(score>66)return"High";if(score>38)return"Medium";return"Low";}
function renderStack(){elements.stackList.innerHTML=stackLayers.map((item)=>{const active=item.id===state.stackId;return[`<button class="stack-button${active ? " is-active" : ""}" type="button" data-stack-id="${escapeHtml(item.id)}">`,`<span class="stack-button__meta">${escapeHtml(item.meta)}</span>`,`<span class="stack-button__title">${escapeHtml(item.title)}</span>`,`<span>${escapeHtml(item.summary)}</span>`,"</button>"].join("");}).join("");const layer=stackLayers.find((item)=>item.id===state.stackId)||stackLayers[0];elements.stackDetail.innerHTML=renderDetailCard(layer.title,layer.explanation,layer.chips,[infoBlock("Build for",layer.buildNow),infoBlock("Watch for",layer.watchouts)]);}
function renderLadder(){elements.ladderList.innerHTML=ladderStages.map((item)=>{const active=item.id===state.ladderId;return[`<button class="ladder-button${active ? " is-active" : ""}" type="button" data-ladder-id="${escapeHtml(item.id)}">`,`<span class="ladder-button__meta">${escapeHtml(item.meta)}</span>`,`<span class="ladder-button__title">${escapeHtml(item.title)}</span>`,`<span>${escapeHtml(item.summary)}</span>`,"</button>"].join("");}).join("");const stage=ladderStages.find((item)=>item.id===state.ladderId)||ladderStages[0];elements.ladderDetail.innerHTML=renderDetailCard(stage.title,stage.summary,[stage.meta],[infoBlock("Core focus",stage.focus),infoBlock("Good first products",stage.shipNow),infoBlock("Do not skip",stage.doNotSkip)]);}
function renderArchitectures(){elements.architectureTabs.innerHTML=architectures.map((item)=>{const active=item.id===state.architectureId;return`<button class="tab-button${active ? " is-active" : ""}" type="button" data-architecture-id="${escapeHtml(item.id)}">${escapeHtml(item.title)}</button>`;}).join("");const architecture=architectures.find((item)=>item.id===state.architectureId)||architectures[0];elements.architectureCanvas.innerHTML=`
      <div class="flow-track">
        ${architecture.flow.map((step) => `<article class="flow-node"><p class="eyebrow">Step</p><h3 class="flow-node__title">${escapeHtml(step.title)}</h3><p>${escapeHtml(step.text)}</p></article>`).join("")}
      </div>
    `;elements.architectureDetail.innerHTML=renderDetailCard(architecture.title,`${architecture.summary} ${architecture.whenToUse}`,["Reference pattern","Control loop","Production trade-offs"],[infoBlock("Key controls",architecture.controls),infoBlock("Typical failure modes",architecture.risks)]);}
function renderMarket(){const categories=["All"].concat(Array.from(new Set(marketTools.map((tool)=>tool.category))).sort());elements.marketFilters.innerHTML=categories.map((category)=>{const active=category===state.marketFilter;return`<button class="filter-button${active ? " is-active" : ""}" type="button" data-market-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`;}).join("");const filteredTools=marketTools.filter((tool)=>{const matchesCategory=state.marketFilter==="All"||tool.category===state.marketFilter;const haystack=`${tool.title} ${tool.category} ${tool.summary} ${tool.fits} ${tool.details.join(" ")}`.toLowerCase();const matchesQuery=!state.marketQuery||haystack.includes(state.marketQuery);return matchesCategory&&matchesQuery;});if(filteredTools.length===0){elements.marketGrid.innerHTML=`<div class="empty-state">No tools match the current filter. Try a broader search.</div>`;return;}
elements.marketGrid.innerHTML=filteredTools.map((tool)=>`
      <article class="market-card">
        <div>
          <p class="market-card__meta">${escapeHtml(tool.category)}</p>
          <h3>${escapeHtml(tool.title)}</h3>
        </div>
        <p>${escapeHtml(tool.summary)}</p>
        <div class="info-block">
          <h4>Where it fits</h4>
          <p>${escapeHtml(tool.fits)}</p>
        </div>
        <div class="info-block">
          <h4>Why teams use it</h4>
          <ul class="bullet-list">
            ${tool.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}
          </ul>
        </div>
        <div class="market-card__footer">
          <a class="action-link action-link--primary" href="${escapeAttribute(tool.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(tool.sourceLabel)}</a>
        </div>
      </article>
    `).join("");}
function renderCode(){elements.codeTabs.innerHTML=codeExamples.map((item)=>{const active=item.id===state.codeId;return`<button class="tab-button${active ? " is-active" : ""}" type="button" data-code-id="${escapeHtml(item.id)}">${escapeHtml(item.title)}</button>`;}).join("");const example=codeExamples.find((item)=>item.id===state.codeId)||codeExamples[0];elements.codeDetail.innerHTML=`
      <div class="detail-card__header">
        <div>
          <p class="eyebrow">${escapeHtml(example.language)}</p>
          <h3>${escapeHtml(example.title)}</h3>
        </div>
        <button class="copy-button" type="button" data-copy-code="true">Copy code</button>
      </div>
      <p>${escapeHtml(example.summary)}</p>
      <div class="detail-grid">
        ${infoBlock("Why this pattern matters", example.why)}
        ${infoBlock("Operational notes", example.notes)}
      </div>
      <div class="code-block">
        <pre><code>${escapeHtml(example.code)}</code></pre>
      </div>
    `;}
function renderChecks(){elements.checksTabs.innerHTML=productionChecks.map((item)=>{const active=item.id===state.checkId;return`<button class="tab-button${active ? " is-active" : ""}" type="button" data-check-id="${escapeHtml(item.id)}">${escapeHtml(item.title)}</button>`;}).join("");const check=productionChecks.find((item)=>item.id===state.checkId)||productionChecks[0];elements.checksDetail.innerHTML=renderDetailCard(check.title,check.summary,check.chips,[infoBlock("Build into the system",check.focus),infoBlock("Failure modes to watch",check.watchouts)]);}
function renderSources(){elements.sourcesList.innerHTML=sources.map((item)=>`
      <article class="source-card">
        <div>
          <p class="source-card__meta">Official source</p>
          <h3>${escapeHtml(item.title)}</h3>
        </div>
        <p>${escapeHtml(item.meta)}</p>
        <div class="source-card__footer">
          <a class="action-link" href="${escapeAttribute(item.url)}" target="_blank" rel="noreferrer">Open source</a>
        </div>
      </article>
    `).join("");}
function renderDetailCard(title,explanation,chips,blocks){return[`<div class="detail-card__header"><div><h3>${escapeHtml(title)}</h3></div></div>`,`<p>${escapeHtml(explanation)}</p>`,`<div class="tag-row">${chips.map((chip) => `<span class="tag">${escapeHtml(chip)}</span>`).join("")}</div>`,`<div class="detail-grid">${blocks.join("")}</div>`].join("");}
function resolveInitialGenAIView(){const hash=String(window.location.hash||"").replace(/^#/,"").trim();if(hash==="langchain-rag"){return{architectureId:"langchain-rag",codeId:"langchain-rag-chain"};}
if(hash==="langgraph-agentic"){return{architectureId:"langgraph-agentic",codeId:"langgraph-agent-loop"};}
return{};}
function applyInitialGenAIView(){const view=resolveInitialGenAIView();if(!view.architectureId){return;}
state.architectureId=view.architectureId;state.codeId=view.codeId||state.codeId;renderArchitectures();renderCode();window.requestAnimationFrame(()=>{document.getElementById("architectures")?.scrollIntoView({block:"start",behavior:"auto"});});}
function infoBlock(title,items){return`
      <section class="info-block">
        <h4>${escapeHtml(title)}</h4>
        <ul class="mini-list">
          ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
    `;}
function metric(value,label){return`
      <article class="metric">
        <strong class="metric__value">${escapeHtml(value)}</strong>
        <span class="metric__label">${escapeHtml(label)}</span>
      </article>
    `;}
function escapeHtml(value){return String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}
function escapeAttribute(value){return escapeHtml(value);}})();