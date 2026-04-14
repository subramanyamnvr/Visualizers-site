(function(){const stackLayers=[{id:"model-foundation",title:"Model Foundation",meta:"Tokens, embeddings, transformer blocks, alignment",summary:"This is the layer where the model learns the world compressed into token probabilities and latent structure.",chips:["Tokenization","Pretraining","SFT","Reasoning"],explanation:"LLM behavior starts with tokenization, embedding lookup, transformer attention, and the training stages that shape how the model reasons. Pretraining gives breadth, instruction tuning sharpens behavior, preference optimization shapes style, and reasoning-specialized training can improve multi-step problem solving. Everything above this layer inherits its strengths and limits.",buildNow:["Know the difference between base model capability, alignment behavior, and inference-time scaffolding.","Treat model choice as a systems decision: latency, context, tool quality, and cost matter as much as benchmark scores.","Understand that hallucination, tool discipline, and structured output reliability are partly model-dependent."],watchouts:["A stronger model does not erase bad retrieval, weak tool schemas, or poor orchestration.","Longer context helps, but it does not replace retrieval quality or memory design.","Reasoning models often trade speed and price for better planning and deeper chain behavior."]},{id:"serving-runtime",title:"Serving Runtime",meta:"Inference gateways, batching, routing, caching, streaming",summary:"This layer decides how requests reach models and how efficiently you spend tokens, GPUs, and latency budgets.",chips:["Routing","Streaming","Caching","Fallbacks"],explanation:"A production LLM system rarely calls one model in one fixed way. Teams add request routing, speculative or tiered model selection, prompt caching, response streaming, retries, failover, and rate management. OpenAI-compatible runtimes such as vLLM make it easier to swap in self-hosted models, while managed platforms hide infrastructure at the cost of less control.",buildNow:["Separate application logic from provider-specific model invocation.","Track latency, prompt tokens, completion tokens, and failure class for every call.","Use streaming wherever perceived responsiveness matters."],watchouts:["Fallback models can change behavior in subtle ways if prompts or tools are not normalized.","Caching improves cost and speed, but stale context can create silent correctness issues.","Self-hosted inference saves money only when you can keep hardware utilization healthy."]},{id:"context-retrieval",title:"Context & Retrieval",meta:"Chunking, embeddings, reranking, citations, grounding",summary:"This layer turns proprietary data into the context the model actually sees at inference time.",chips:["RAG","Chunking","Embeddings","Vector Search"],explanation:"Most useful enterprise LLM apps are grounded. That means documents get parsed, chunked, embedded, stored, retrieved, and often reranked before being fused into the model prompt. The quality of this pipeline determines whether the system feels knowledgeable or merely fluent. Retrieval is not one decision; it is an end-to-end chain of segmentation, metadata, filters, recall, ranking, and citation rendering.",buildNow:["Design chunks for the way users ask questions, not for the way files are stored.","Keep source metadata, document lineage, and snippet boundaries so you can show citations.","Measure retrieval separately from answer quality."],watchouts:["Bad chunking and missing metadata can make a good vector store look bad.","Pure vector search often benefits from lexical search, metadata filters, or reranking.","Grounded answers can still be wrong if the prompt fails to force source use."]},{id:"orchestration",title:"Orchestration Layer",meta:"Prompt assembly, state, workflows, control loops",summary:"This layer is the application brain that decides what context, tools, and decisions happen in what order.",chips:["State","Workflows","Routing","Guard Conditions"],explanation:"Prompt templates are only the visible tip. Real systems accumulate conversation state, retrieved context, tool results, memory snapshots, user profile signals, and policy constraints. Orchestration decides what gets assembled, when models are called, and whether the next step is deterministic code or model-led reasoning. This is where simple assistants become reliable products or unreliable spaghetti.",buildNow:["Use deterministic code for routing and validation wherever possible.","Persist state transitions so you can replay failures and inspect decisions.","Make every major branch observable."],watchouts:["Monolithic prompts hide control flow and are hard to debug.","Agent autonomy without explicit stop conditions creates token burn and looping behavior.","Every new branch multiplies the test surface."]},{id:"tools-protocols",title:"Tools & Protocols",meta:"Function calling, MCP, APIs, computer use, A2A",summary:"This is how the model leaves pure text generation and starts touching systems, data, and other agents.",chips:["Tool Use","MCP","A2A","Computer Use"],explanation:"A model becomes useful when it can act. Tools provide typed interfaces into search, code execution, CRMs, databases, calendars, or internal APIs. Function calling keeps the boundary explicit. MCP standardizes how models discover tools, prompts, and resources. A2A extends the idea to agent-to-agent interoperability. This is also where safety requirements rise sharply because errors can now trigger real actions.",buildNow:["Design tool schemas as product interfaces, not as leftovers from backend code.","Prefer narrow tools with clear validation over one giant do-everything endpoint.","Log tool arguments, responses, and tool-selection rationale when possible."],watchouts:["Poor schemas create wrong calls even when the model understood the task.","Tool results must be normalized or the next reasoning step becomes brittle.","Server-side tools reduce client complexity, but can hide execution detail if you do not trace them."]},{id:"memory-evals",title:"Memory, Evals & Observability",meta:"Short-term state, long-term memory, traces, feedback, benchmarks",summary:"This layer determines whether you can improve the system intentionally instead of guessing.",chips:["Memory","Tracing","Offline Evals","Feedback"],explanation:"Without observability, complex LLM systems feel magical until they fail. You need traces, prompts, retrieved documents, tool calls, model versions, latency, cost, and user feedback stitched together. Memory adds another dimension: what should survive a single turn, a session, or months of user history. Evaluations then turn all of that into a controlled feedback loop.",buildNow:["Create benchmark sets for retrieval, task completion, and policy adherence.","Store enough run metadata to reproduce failures after the fact.","Distinguish between ephemeral working memory and durable user memory."],watchouts:["Memory can improve personalization while silently amplifying outdated or wrong user state.","A single pass/fail score is not enough for agent systems; measure per-step quality too.","If you cannot replay runs, debugging production failures becomes guesswork."]},{id:"governance",title:"Governance & Safety",meta:"Guardrails, policy, access control, approvals, audit",summary:"This layer keeps autonomy from outrunning trust, compliance, and business reality.",chips:["Guardrails","Approvals","Security","Audit"],explanation:"Safety is not one classifier. It is policy at multiple layers: prompt constraints, tool access boundaries, retrieval filtering, output checks, red teaming, human approval gates, tenant isolation, secrets handling, and auditability. Agentic systems especially need explicit authority boundaries because the model can plan across many steps and side effects.",buildNow:["Decide which actions are fully autonomous, approval-gated, or never model-executed.","Separate model permissions from user permissions.","Red-team prompt injection, retrieval poisoning, and unsafe tool use."],watchouts:["Prompt-only safety rules are fragile if tools or retrieved content can override them.","RAG systems inherit security issues from the underlying documents and connectors.","The more autonomous the system, the more important durable audit trails become."]}];const ladderStages=[{id:"stage-1",title:"Stage 1: Prompted Assistants",meta:"Single-shot and multi-turn chat apps",summary:"You are mostly building prompt templates, response formatting, and lightweight memory for chat continuity.",focus:["System prompts, role prompting, output formatting, and response streaming.","Basic conversation state and session management.","Input/output moderation and simple UX guardrails."],shipNow:["Summaries, drafting, classification, extraction, and internal copilots with no side effects."],doNotSkip:["Input validation, output formatting, token accounting, and a benchmark set for quality."]},{id:"stage-2",title:"Stage 2: Grounded Applications",meta:"RAG, search, file chat, domain assistants",summary:"The app starts answering questions about proprietary data instead of relying only on pretraining.",focus:["Document parsing, chunking, embeddings, vector search, hybrid retrieval, and citations.","Prompt assembly that explicitly binds the model to retrieved evidence.","Relevance evaluation and failure analysis for retrieval quality."],shipNow:["Policy assistants, support bots, sales enablement, internal knowledge copilots, analyst copilots."],doNotSkip:["Document lineage, metadata filters, reranking, and retrieval-specific metrics."]},{id:"stage-3",title:"Stage 3: Tool-Using Systems",meta:"Function calling, external APIs, structured actions",summary:"The model is no longer just answering. It is deciding when to call tools and how to use returned results.",focus:["Tool schemas, validation, retries, deterministic branching, and idempotent actions.","Search tools, code execution, CRM actions, database queries, and MCP integrations.","Per-tool observability so you know what the model asked for and why."],shipNow:["Research assistants, workflow copilots, ticketing helpers, ops assistants, coding assistants."],doNotSkip:["Permission boundaries, confirmation steps for risky actions, and tool call replay."]},{id:"stage-4",title:"Stage 4: Agentic Workflows",meta:"Planning loops, reflection, retries, memory",summary:"Now the system can decompose goals, decide next steps, maintain state, and revise its approach over multiple turns.",focus:["Planner-executor loops, graph workflows, human-in-the-loop checkpoints, and durable state.","Short-term memory, long-term memory, task queues, and branching execution.","Observability across reasoning steps, tool chains, and intermediate artifacts."],shipNow:["Complex research, report generation, triage systems, workflow automation, analyst copilots with tools."],doNotSkip:["Termination rules, cost ceilings, resumability, and step-level evals."]},{id:"stage-5",title:"Stage 5: Advanced Multi-Agent Systems",meta:"Specialized agents, protocol-based collaboration, production operations",summary:"You are orchestrating multiple specialists, shared memory, protocol boundaries, and production governance.",focus:["Role-specialized agents, delegation strategies, A2A or internal contracts, and arbitration.","Shared memory versus private memory, tool ownership, and inter-agent communication.","Audit, policy, trace stitching, deployment isolation, and lifecycle management."],shipNow:["Research desks, engineering copilots with planner/reviewer loops, enterprise automation meshes."],doNotSkip:["Governance, tenancy, execution budgets, trace correlation, and rollback paths."]}];const architectures=[{id:"chat",title:"Prompted Assistant",summary:"Fastest path to value for drafting, summarization, and internal chat copilots.",whenToUse:"Use when the answer mostly comes from model knowledge or user-provided input.",flow:[{title:"User Request",text:"Free-form text, files, or multimodal input enters the app."},{title:"Prompt Assembly",text:"System prompt, conversation history, and response format rules are added."},{title:"Model Call",text:"One model call generates the answer, maybe with streaming enabled."},{title:"Output Checks",text:"Formatting, moderation, and post-processing finalize the response."}],controls:["Strong prompt contracts and output schemas.","Caching and streaming for UX.","Session state for multi-turn continuity."],risks:["Hallucination on factual questions.","Weak personalization if memory is too shallow.","Prompt drift across turns."]},{id:"rag",title:"Grounded RAG Assistant",summary:"Best when users expect answers tied to private documents, knowledge bases, or policies.",whenToUse:"Use when accuracy, citations, and freshness depend on proprietary or frequently changing content.",flow:[{title:"User Query",text:"Question arrives with intent and optional filters."},{title:"Retrieve",text:"Search indexes, metadata filters, and rerankers gather relevant context."},{title:"Synthesize",text:"Prompt binds the model to cited evidence and asks for grounded output."},{title:"Citations",text:"Response is delivered with sources and confidence affordances."}],controls:["Chunking strategy, embedding choice, reranking, and metadata filters.","Prompt rules that force evidence use.","Evaluation split between retrieval quality and answer quality."],risks:["Low recall because of weak chunking or indexing.","Citation theater, where sources are shown but not actually used.","Context stuffing that increases latency without improving correctness."]},{id:"tool-agent",title:"Tool-Calling Agent",summary:"A strong default for systems that must search, compute, or take actions beyond text generation.",whenToUse:"Use when the application needs API actions, DB queries, web access, or code execution.",flow:[{title:"Task Intake",text:"The system interprets the task and decides whether tools are needed."},{title:"Tool Planning",text:"The model selects a tool and emits structured arguments."},{title:"Tool Execution",text:"Code runs the tool, validates results, and sends output back."},{title:"Final Synthesis",text:"The model integrates tool results into a user-facing answer or next step."}],controls:["Typed tool schemas and retries with validation.","Deterministic tool wrappers and approval gates for risky actions.","Traceability for arguments, results, and final synthesis."],risks:["Bad tool choice even when the reasoning looked plausible.","Schema mismatch and argument hallucination.","Action loops that burn tokens and repeat failed tools."]},{id:"multi-agent",title:"Multi-Agent Control Plane",summary:"Used when one agent is not enough and specialization, delegation, or isolation clearly helps.",whenToUse:"Use when the task benefits from planner, researcher, reviewer, or executor roles with distinct tools and state.",flow:[{title:"Coordinator",text:"A top-level agent receives the goal and breaks it into subproblems."},{title:"Specialists",text:"Role-specific agents research, compute, retrieve, or draft independently."},{title:"Arbitration",text:"Results are merged, checked, and possibly sent back for revisions."},{title:"Execution",text:"Approved actions or final deliverables are emitted with logs and artifacts."}],controls:["Shared contracts for artifacts and messages.","Private versus shared memory boundaries.","Human checkpoints and execution budgets."],risks:["Coordination overhead outweighing gains from specialization.","Hidden prompt explosion across agents.","Trace complexity if runs are not correlated end to end."]}];const marketTools=[{title:"OpenAI Responses API",category:"Managed Platforms",summary:"Unified model interface with built-in tools, stateful response chains, and remote MCP support.",fits:"Good for production apps that want a single API for model calls plus tools such as web search, file search, code interpreter, and computer use.",details:["Built-in tools let the model search the web, retrieve from files, run code, use remote MCP servers, or drive computer workflows.","The Responses API is the current primary interface for advanced OpenAI agentic interactions.","Useful when you want managed tool execution patterns without building the entire loop yourself."],sourceLabel:"OpenAI tools guide",sourceUrl:"https://platform.openai.com/docs/guides/tools?api-mode=responses"},{title:"Anthropic Claude Tool Use",category:"Managed Platforms",summary:"Claude supports client tools and server tools, including web search and computer-use style flows.",fits:"Good for structured tool loops where you want explicit control over tool execution and Claude-centric orchestration.",details:["Anthropic distinguishes client tools that run on your systems from server tools that run on Anthropic infrastructure.","Versioned tool types are part of the compatibility model.","Common fit for research agents, coding assistants, and computer-use prototypes."],sourceLabel:"Anthropic tool use overview",sourceUrl:"https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview"},{title:"Vertex AI Agent Engine",category:"Managed Platforms",summary:"Managed Google runtime for deploying, scaling, observing, and governing production agents.",fits:"Strong fit when your stack is already on Google Cloud or you want managed sessions, memory, observability, and enterprise controls.",details:["Agent Engine offers runtime, sessions, memory bank, evaluation, code execution, and observability.","Google positions it as part of Vertex AI Agent Builder.","It supports multiple frameworks and the Agent2Agent open protocol."],sourceLabel:"Vertex AI Agent Engine overview",sourceUrl:"https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/overview"},{title:"Amazon Bedrock",category:"Managed Platforms",summary:"Managed foundation model platform with broad model access and enterprise integrations.",fits:"Good for AWS-heavy stacks that want model choice, Bedrock agents, knowledge bases, and managed governance.",details:["Bedrock provides secure access to many foundation models and multiple API styles, including OpenAI-compatible endpoints.","Amazon is also pushing AgentCore and server-side tools around Bedrock workflows.","Useful when you want a managed platform with deep AWS integration."],sourceLabel:"Amazon Bedrock overview",sourceUrl:"https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"},{title:"Amazon Bedrock Agents",category:"Agent Services",summary:"Managed agent orchestration around instructions, action groups, prompt templates, and knowledge bases.",fits:"Use when you want AWS-managed orchestration for tool-calling agents tied to APIs and enterprise data.",details:["Build-time components include foundation model choice, instructions, action groups, prompt templates, and optional knowledge bases.","Runtime orchestration can invoke actions, query knowledge bases, and continue multi-step reasoning.","Agent memory can retain conversational context across sessions."],sourceLabel:"Amazon Bedrock agents",sourceUrl:"https://docs.aws.amazon.com/bedrock/latest/userguide/agents-how.html"},{title:"Amazon Bedrock Knowledge Bases",category:"Retrieval & Data",summary:"Managed RAG layer for connecting data sources, retrieval, citations, multimodal search, and reranking.",fits:"Use when you want managed retrieval on AWS rather than assembling your own ingestion and search stack.",details:["Knowledge Bases can retrieve, generate grounded responses, add citations, support multimodal content, and work with reranking.","They can connect to supported vector stores or create OpenSearch Serverless-backed setups.","Often paired directly with Bedrock Agents."],sourceLabel:"Bedrock Knowledge Bases",sourceUrl:"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"},{title:"Microsoft Foundry Agent Service",category:"Managed Platforms",summary:"Hosted agent runtime with scaling, identity, observability, and a growing managed tool catalog.",fits:"Strong fit for Azure-centric enterprise deployments that want hosted agents but framework flexibility.",details:["Foundry Agent Service can host prompt agents and code-based hosted agents built with Agent Framework, LangGraph, or custom code.","Managed tools include web search, file search, memory, code interpreter, MCP servers, and custom functions.","Microsoft positions observability and enterprise security as first-class features."],sourceLabel:"Foundry Agent Service overview",sourceUrl:"https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview"},{title:"LangChain",category:"Orchestration Frameworks",summary:"High-level framework with model abstraction, integrations, and prebuilt agent architecture.",fits:"Good when you want to get an agent running quickly and swap providers without rewriting the app shape.",details:["LangChain standardizes how you interact with models and tools across providers.","Its agent layer is easier to start with than lower-level orchestration frameworks.","LangChain agents are built on top of LangGraph for more durable workflows underneath."],sourceLabel:"LangChain overview",sourceUrl:"https://docs.langchain.com/oss/python/langchain/overview"},{title:"LangGraph",category:"Orchestration Frameworks",summary:"Low-level orchestration runtime for long-running, stateful, inspectable agent workflows.",fits:"Best when you need durable execution, human-in-the-loop, replay, and explicit graph control.",details:["LangGraph focuses on stateful workflows and long-running agents rather than high-level prompt abstraction.","The docs emphasize durable execution, memory, human oversight, and production deployment.","A strong fit when a simple agent loop becomes too implicit or brittle."],sourceLabel:"LangGraph overview",sourceUrl:"https://docs.langchain.com/oss/python/langgraph/overview"},{title:"LlamaIndex",category:"Orchestration Frameworks",summary:"A strong choice for document-heavy RAG and agentic workflows built around data interfaces.",fits:"Use when your app is retrieval-heavy and you want query engines, data connectors, and workflow abstractions.",details:["LlamaIndex provides workflows, agent patterns, and strong RAG-centered abstractions.","Its workflows are event-driven and can be used to build agents, extraction flows, and retrieval flows.","LlamaIndex is often chosen when data ingestion and retrieval quality are the center of the product."],sourceLabel:"LlamaIndex workflows",sourceUrl:"https://docs.llamaindex.ai/en/stable/understanding/workflows/"},{title:"CrewAI",category:"Orchestration Frameworks",summary:"Framework centered on structured flows plus collaborating multi-agent crews.",fits:"Useful when you explicitly want role-based multi-agent teams inside event-driven workflows.",details:["CrewAI distinguishes Flows for structured stateful control and Crews for collaborative autonomous agents.","Good mental model when you want both deterministic scaffolding and autonomous subteams.","Often used for research pipelines, internal automation, and role-based task delegation."],sourceLabel:"CrewAI introduction",sourceUrl:"https://docs.crewai.com/introduction"},{title:"Model Context Protocol (MCP)",category:"Protocols",summary:"Open protocol for exposing tools, prompts, and resources to models in a standard way.",fits:"Use when you want reusable tool connectors across IDEs, apps, and LLM clients.",details:["MCP gives models a standard way to discover and use external capabilities.","It is especially valuable when you do not want one-off custom tool integrations for every client.","In practice, MCP is becoming a common bridge between applications and developer tools."],sourceLabel:"MCP introduction",sourceUrl:"https://modelcontextprotocol.io/introduction"},{title:"Agent2Agent (A2A)",category:"Protocols",summary:"Open protocol aimed at communication and collaboration between AI agents.",fits:"Relevant when multiple agents or agent services need interoperable message contracts instead of bespoke glue.",details:["Google documents A2A as an open standard for seamless communication and collaboration between AI agents.","It matters most in advanced multi-agent or cross-system settings.","A2A becomes more useful as teams move from one agent to agent ecosystems."],sourceLabel:"Vertex AI agent usage overview",sourceUrl:"https://cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/use/overview"},{title:"Pinecone",category:"Retrieval & Data",summary:"Managed vector database with integrated embeddings, namespaces, reranking, and production tooling.",fits:"Good when you want a managed vector store and fast path to semantic or hybrid retrieval.",details:["Pinecone supports integrated embedding and reranking as well as bring-your-own-vectors workflows.","Namespaces and metadata filtering make it a common fit for multitenant production retrieval.","Teams often use it to reduce ops overhead around vector infrastructure."],sourceLabel:"Pinecone overview",sourceUrl:"https://docs.pinecone.io/guides/get-started/overview"},{title:"Weaviate",category:"Retrieval & Data",summary:"Open-source vector database oriented around semantic search, hybrid search, and RAG backends.",fits:"Useful when you want an open-source vector database with strong semantic retrieval ergonomics.",details:["Weaviate stores objects plus vector embeddings and supports semantic and hybrid search.","The docs explicitly position it as a backend for RAG workflows.","A good fit when you want self-hostable vector infrastructure with higher-level retrieval affordances."],sourceLabel:"Weaviate docs",sourceUrl:"https://docs.weaviate.io/weaviate/"},{title:"Milvus",category:"Retrieval & Data",summary:"High-performance open-source vector database built for scale and large retrieval workloads.",fits:"Useful when you need serious scale, distributed deployment options, and control over vector indexing.",details:["Milvus is built for high-performance similarity search and large-scale vector workloads.","Its docs emphasize cloud-native deployment, scale, and AI agent use cases.","Common choice when retrieval scale and infra control matter more than turnkey simplicity."],sourceLabel:"Milvus docs",sourceUrl:"https://milvus.io/docs"},{title:"pgvector",category:"Retrieval & Data",summary:"Vector similarity search inside PostgreSQL, which keeps vectors near relational data and app logic.",fits:"Great default when your app already lives in Postgres and you want simpler operations or hybrid relational plus vector queries.",details:["pgvector adds exact and approximate nearest-neighbor search to Postgres.","It supports common distance functions, HNSW and IVFFlat indexes, and ACID-friendly data modeling.","Very attractive for product teams that do not want to add a separate vector system too early."],sourceLabel:"pgvector repository",sourceUrl:"https://github.com/pgvector/pgvector"},{title:"vLLM",category:"Serving Runtimes",summary:"High-throughput open-source inference server with OpenAI-compatible APIs and advanced scheduling.",fits:"Use when you want to self-host models efficiently for production inference.",details:["vLLM is widely used for fast serving of open-weight models and can expose OpenAI-compatible endpoints.","Teams choose it for batching efficiency, throughput, and self-hosted control.","A common backbone behind internal model gateways."],sourceLabel:"vLLM serving docs",sourceUrl:"https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html"},{title:"Ollama",category:"Serving Runtimes",summary:"Local model runtime that makes it easy to run open models on laptops, desktops, and dev machines.",fits:"Perfect for prototyping, local developer workflows, privacy-sensitive experiments, and offline demos.",details:["Ollama is especially popular for local model experimentation with a simple runtime experience.","The project also supports OpenAI compatibility and tool-support patterns.","It is best thought of as a local runtime, not a replacement for every production serving case."],sourceLabel:"Ollama repository",sourceUrl:"https://github.com/ollama/ollama"},{title:"Hugging Face Text Generation Inference",category:"Serving Runtimes",summary:"Optimized server for deploying LLMs with streaming, batching, and production observability hooks.",fits:"Useful when you want a mature open-source serving stack in the Hugging Face ecosystem.",details:["TGI has long been a standard self-hosted serving option for transformer-based generation workloads.","It provides operational features like streaming and metrics for production systems.","Still relevant in many teams even as newer runtimes compete on performance."],sourceLabel:"TGI docs",sourceUrl:"https://huggingface.co/docs/text-generation-inference"},{title:"LangSmith",category:"Observability & Evals",summary:"Tracing, debugging, and monitoring platform tightly integrated with LangChain and LangGraph apps.",fits:"Use when you need end-to-end traces of agent execution and strong developer debugging ergonomics.",details:["LangSmith records traces, runs, threads, metadata, feedback, and monitoring information.","It is especially useful for stepping through tool calls and graph execution in agent systems.","Strong choice when your orchestration layer is in the LangChain ecosystem."],sourceLabel:"LangSmith observability",sourceUrl:"https://docs.langchain.com/langsmith/observability"},{title:"W&B Weave",category:"Observability & Evals",summary:"Platform for tracing, evaluating, versioning, and improving LLM applications over time.",fits:"Good when you want prompt/model comparison, trace visibility, datasets, scorers, and experiment tracking.",details:["Weave emphasizes traces, evaluations, versioning, experimentation, feedback, and production monitoring.","It works well for teams that want both experiment iteration and runtime visibility in one workflow.","Useful for tracking changes across prompts, models, datasets, and outputs."],sourceLabel:"What is Weave?",sourceUrl:"https://docs.wandb.ai/weave/concepts/what-is-weave"},{title:"Promptfoo",category:"Observability & Evals",summary:"Open-source evaluation and red-teaming toolkit for prompts, models, RAG systems, and agent apps.",fits:"Best when you want lightweight, local, CI-friendly evals and security testing.",details:["Promptfoo focuses on test-driven LLM development rather than ad hoc prompting.","It supports evaluation matrices, red teaming, benchmarks, and automated scoring.","A very practical option for teams that want evals in CI/CD."],sourceLabel:"Promptfoo intro",sourceUrl:"https://www.promptfoo.dev/docs/intro/"},{title:"NeMo Guardrails",category:"Safety & Governance",summary:"Programmable guardrails toolkit for adding controllable safety and policy rails to LLM apps.",fits:"Use when you need runtime rails around allowed topics, dialogue paths, or policy behavior.",details:["NeMo Guardrails is designed for programmable rails that are separate from model training.","It is useful when prompt rules alone are not trustworthy enough.","Think of it as policy infrastructure around a model-driven app."],sourceLabel:"NeMo Guardrails publication",sourceUrl:"https://nvidia.github.io/NeMo/publications/2023/2023-guardrails/"}];const codeExamples=[{id:"openai-tools",title:"OpenAI Responses API with built-in tools",language:"python",summary:"A production-flavored starter pattern for web-backed answers with file search and a custom action.",why:["Use this pattern when you want one API surface for model responses plus tools.","It shows the shape of an app where the model can pick built-in or custom tools."],notes:["Keep your custom tool schema narrow and well-typed.","Log every tool call and its result so you can replay failures."],code:String.raw`from openai import OpenAI

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
print(answer.output_text)`,},{id:"llamaindex-agent",title:"LlamaIndex agent with retrieval tool",language:"python",summary:"A retrieval-centric agent pattern with a tool boundary around the query engine.",why:["Use this when your application leans heavily on document retrieval and you want a data-first framework.","It shows how retrieval becomes one tool among several possible capabilities."],notes:["Keep query-engine prompts focused on grounded answers and citations.","Use workflows when you need more explicit orchestration around the agent."],code:String.raw`from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
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
print(response)`,},{id:"vllm-serve",title:"Serve an open model with vLLM",language:"bash",summary:"A practical self-hosted runtime pattern that keeps your app on an OpenAI-compatible surface.",why:["Use this when you want to control runtime cost, data flow, or model choice with self-hosted inference.","OpenAI-compatible serving reduces migration friction for application code."],notes:["Measure throughput, context usage, and prompt cache behavior under realistic load.","Separate the serving layer from your app layer so you can swap runtimes later."],code:String.raw`python -m vllm.entrypoints.openai.api_server \
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
        value: "do not have enough information"`,}];const productionChecks=[{id:"evals",title:"Evaluation Harness",summary:"Treat evaluation as a release gate for behavior, not as an afterthought when users start complaining.",chips:["Offline evals","Golden sets","Regression tests","Scorecards"],focus:["Build task suites for retrieval quality, answer correctness, formatting, refusal behavior, and tool discipline.","Add examples from real traces so the eval set reflects how users actually break the system.","Track per-step metrics for agent workflows, not just final-answer pass rates."],watchouts:["A single overall score can hide that retrieval improved while task completion got worse.","Human review is still needed for ambiguity, policy nuance, and high-impact actions.","If prompts and tool schemas change but evals do not, the test harness becomes cosmetic."]},{id:"context",title:"Context Engineering",summary:"The model only reasons over what you actually place in front of it, so context construction is product logic.",chips:["Chunking","Prompt assembly","Citations","Memory boundaries"],focus:["Decide what belongs in system instructions, retrieval context, tool output, user memory, and structured metadata.","Make chunking and reranking decisions with real user questions instead of arbitrary token sizes.","Force evidence use explicitly when the task depends on grounded sources."],watchouts:["Too much context can bury the few passages that really matter.","Long memory improves continuity only if stale or wrong facts can be corrected.","If tool output is messy, the next reasoning step becomes brittle even with a strong model."]},{id:"release",title:"Prompt and Workflow Release Discipline",summary:"Prompts, tool schemas, and orchestration rules need versioning, review, and rollback just like application code.",chips:["Prompt versions","Schema changes","Rollbacks","Change logs"],focus:["Version prompts, system policies, tool contracts, and retrieval settings together so runs stay reproducible.","Capture why a change was made and which evals it was expected to improve.","Keep rollback paths ready when a prompt fix improves style but hurts task completion."],watchouts:["Silent prompt edits make regression analysis nearly impossible.","Tool schemas can break behavior even when the prompt is unchanged.","Release notes should include operational impact, not just wording changes."]},{id:"guardrails",title:"Guardrails and Approval Boundaries",summary:"The more agency a system has, the more you need explicit boundaries around what it may decide versus what it may execute.",chips:["Policy rails","Approvals","Permissions","Audit trails"],focus:["Separate user permissions, model permissions, and tool permissions so the model cannot quietly exceed authority.","Add approval steps around payments, account changes, destructive edits, or low-confidence actions.","Log why a tool was selected, what arguments were proposed, and what human or system approved execution."],watchouts:["Prompt-only rules are fragile if retrieved text or tools can override them.","Approval UX must be fast enough that humans actually use it instead of bypassing it.","Guardrails need red-team coverage for prompt injection, tool misuse, and retrieval poisoning."]},{id:"ops",title:"Caching, Cost, and Human Recovery",summary:"A production LLM app needs graceful failure paths, cost controls, and fallback behavior long before perfect autonomy.",chips:["Caching","Fallbacks","HITL","Recovery playbooks"],focus:["Cache stable context, retrieval artifacts, and safe repeated responses where correctness will not drift silently.","Design fallbacks such as smaller models, deterministic code paths, or queue-based retries for degraded states.","Create human review queues and rework flows for cases the model should draft but not finalize."],watchouts:["Caching can preserve stale policy answers or outdated user state if invalidation is weak.","Fallback models may require different prompts, tool choices, or output validation rules.","If humans only see failures with no trace context, recovery work becomes guesswork."]}];const sources=[{title:"OpenAI Tools Guide",meta:"Built-in tools, file search, function calling, remote MCP",url:"https://platform.openai.com/docs/guides/tools?api-mode=responses"},{title:"OpenAI Responses API",meta:"Stateful response interface and model/tool entrypoint",url:"https://platform.openai.com/docs/api-reference/responses/compact?api-mode=responses"},{title:"Anthropic Tool Use Overview",meta:"Client tools, server tools, pricing, and patterns",url:"https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview"},{title:"Vertex AI Agent Engine Overview",meta:"Managed runtime, sessions, memory, observability, governance",url:"https://docs.cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/overview"},{title:"Amazon Bedrock Overview",meta:"Managed model platform, APIs, current positioning",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"},{title:"Amazon Bedrock Agents",meta:"Instructions, action groups, orchestration, memory",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/agents-how.html"},{title:"Amazon Bedrock Knowledge Bases",meta:"Managed retrieval, citations, multimodal content, reranking",url:"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"},{title:"Microsoft Foundry Agent Service",meta:"Hosted agents, managed tools, scaling, observability",url:"https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview"},{title:"LangChain Overview",meta:"High-level agent framework and model abstraction",url:"https://docs.langchain.com/oss/python/langchain/overview"},{title:"LangGraph Overview",meta:"Durable execution, stateful agent workflows, HITL",url:"https://docs.langchain.com/oss/python/langgraph/overview"},{title:"LlamaIndex Workflows",meta:"Event-driven workflows for RAG and agents",url:"https://docs.llamaindex.ai/en/stable/understanding/workflows/"},{title:"CrewAI Introduction",meta:"Flows plus collaborative crews",url:"https://docs.crewai.com/introduction"},{title:"Model Context Protocol",meta:"Standard model access to tools, prompts, and resources",url:"https://modelcontextprotocol.io/introduction"},{title:"Pinecone Overview",meta:"Managed vector database and integrated reranking",url:"https://docs.pinecone.io/guides/get-started/overview"},{title:"Weaviate Docs",meta:"Semantic search and RAG backend",url:"https://docs.weaviate.io/weaviate/"},{title:"Milvus Docs",meta:"Scalable vector database for GenAI applications",url:"https://milvus.io/docs"},{title:"pgvector",meta:"Vector similarity search for Postgres",url:"https://github.com/pgvector/pgvector"},{title:"vLLM OpenAI-Compatible Server",meta:"Open-source serving runtime",url:"https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html"},{title:"Ollama",meta:"Local model runtime",url:"https://github.com/ollama/ollama"},{title:"Hugging Face TGI",meta:"Self-hosted inference server",url:"https://huggingface.co/docs/text-generation-inference"},{title:"LangSmith Observability",meta:"Tracing, runs, threads, and monitoring",url:"https://docs.langchain.com/langsmith/observability"},{title:"W&B Weave",meta:"Tracing, evaluation, versioning, and monitoring",url:"https://docs.wandb.ai/weave/concepts/what-is-weave"},{title:"Promptfoo Intro",meta:"Open-source evals and red teaming",url:"https://www.promptfoo.dev/docs/intro/"},{title:"NeMo Guardrails",meta:"Programmable guardrails for LLM apps",url:"https://nvidia.github.io/NeMo/publications/2023/2023-guardrails/"}];const state={stackId:stackLayers[0].id,ladderId:ladderStages[0].id,architectureId:architectures[0].id,marketFilter:"All",marketQuery:"",codeId:codeExamples[0].id,checkId:productionChecks[0].id};const elements={heroStats:document.getElementById("heroStats"),stackList:document.getElementById("stackList"),stackDetail:document.getElementById("stackDetail"),ladderList:document.getElementById("ladderList"),ladderDetail:document.getElementById("ladderDetail"),architectureTabs:document.getElementById("architectureTabs"),architectureCanvas:document.getElementById("architectureCanvas"),architectureDetail:document.getElementById("architectureDetail"),marketSearch:document.getElementById("marketSearch"),marketFilters:document.getElementById("marketFilters"),marketGrid:document.getElementById("marketGrid"),codeTabs:document.getElementById("codeTabs"),codeDetail:document.getElementById("codeDetail"),checksTabs:document.getElementById("checksTabs"),checksDetail:document.getElementById("checksDetail"),sourcesList:document.getElementById("sourcesList")};renderHeroStats();renderStack();renderLadder();renderArchitectures();renderMarket();renderCode();renderChecks();renderSources();elements.stackList.addEventListener("click",(event)=>{const button=event.target.closest("[data-stack-id]");if(!button)return;state.stackId=button.dataset.stackId;renderStack();});elements.ladderList.addEventListener("click",(event)=>{const button=event.target.closest("[data-ladder-id]");if(!button)return;state.ladderId=button.dataset.ladderId;renderLadder();});elements.architectureTabs.addEventListener("click",(event)=>{const button=event.target.closest("[data-architecture-id]");if(!button)return;state.architectureId=button.dataset.architectureId;renderArchitectures();});elements.marketFilters.addEventListener("click",(event)=>{const button=event.target.closest("[data-market-filter]");if(!button)return;state.marketFilter=button.dataset.marketFilter;renderMarket();});elements.marketSearch.addEventListener("input",(event)=>{state.marketQuery=event.target.value.trim().toLowerCase();renderMarket();});elements.codeTabs.addEventListener("click",(event)=>{const button=event.target.closest("[data-code-id]");if(!button)return;state.codeId=button.dataset.codeId;renderCode();});elements.checksTabs.addEventListener("click",(event)=>{const button=event.target.closest("[data-check-id]");if(!button)return;state.checkId=button.dataset.checkId;renderChecks();});elements.codeDetail.addEventListener("click",async(event)=>{const button=event.target.closest("[data-copy-code]");if(!button)return;const example=codeExamples.find((item)=>item.id===state.codeId);if(!example)return;try{await navigator.clipboard.writeText(example.code);button.textContent="Copied";window.setTimeout(()=>{button.textContent="Copy code";},1500);}catch(error){button.textContent="Copy failed";window.setTimeout(()=>{button.textContent="Copy code";},1500);}});function renderHeroStats(){const categories=new Set(marketTools.map((tool)=>tool.category));elements.heroStats.innerHTML=["<p class=\"eyebrow\">Snapshot</p>","<div class=\"metric-grid\">",metric(String(stackLayers.length),"System layers"),metric(String(ladderStages.length),"Build stages"),metric(String(architectures.length),"Blueprints"),metric(String(marketTools.length),"Major tools/services"),metric(String(codeExamples.length),"Code patterns"),metric(String(productionChecks.length),"Production checks"),metric(String(categories.size),"Tool categories"),"</div>"].join("");}
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