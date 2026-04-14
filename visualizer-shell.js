(function(){const definitions=[{key:"deep-learning",pagePath:"deep-learning/index.html",match:/deep-learning\//i,category:"Deep Learning",description:"Start with the basics of training and representation, then move into attention, modern architectures, and deployment.",stats:[{label:"Topics",value:()=>Math.max(0,document.querySelectorAll(".sb-item[data-page]").length-1)},{label:"Study Tracks",value:()=>Math.max(0,document.querySelectorAll(".sb-section-title").length-1)},{label:"Home Cards",value:()=>document.querySelectorAll(".sec-card").length||0}],guide:{intro:"Deep learning is easier to understand when you stop treating it like a list of models. At its core, it is about learning useful representations, training them stably, and making architecture choices that fit your data, latency budget, and evaluation needs.",studyPath:["Use the home page first, then learn Foundations and Training Mechanics before you dive into transformers or newer architectures.","Treat transformer internals, fine-tuning, and efficiency as one thread. They explain most modern GenAI model behavior.","Leave reinforcement learning, multimodal systems, and infrastructure topics for later unless they match your current work."],workUses:["Explain why a model trains well, stalls, overfits, or becomes too expensive to serve.","Connect data quality, loss design, optimizer behavior, and architecture choice instead of blaming one thing.","Build a sharper mental model for fine-tuning, inference bottlenecks, and evaluation design."],pitfalls:["Assuming a bigger model fixes weak data, poor labels, or bad evaluation.","Learning architecture names without understanding optimization, normalization, and memory costs.","Treating benchmark scores as production performance without checking latency, drift, and failure modes."],questions:["What problem does attention solve better than recurrence or convolution?","Why do gradients vanish or explode, and which techniques stabilize training?","When is fine-tuning worth the cost compared with prompting, retrieval, or smaller models?"]}},{key:"ml-models",pagePath:"ml-models/index.html",match:/ml-models\//i,category:"Machine Learning",description:"Understand what each model family is good at, what assumptions it makes, and when a simple baseline is enough.",stats:[{label:"Algorithms",value:()=>document.querySelectorAll(".panel-title").length||0},{label:"Model Families",value:()=>document.querySelectorAll(".sidebar-group-label").length||0},{label:"Filters",value:()=>document.querySelectorAll(".filter-btn").length||0}],guide:{intro:"Machine learning is mostly about matching a problem to the right level of model complexity. The useful skill is not memorizing every algorithm. It is understanding what signal your data contains, how a model behaves, and how you will judge whether it is actually working.",studyPath:["Start with linear regression, logistic regression, and decision trees. Those pages teach most of the core tradeoffs in a manageable way.","Move next to ensembles, clustering, dimensionality reduction, and metrics so you can compare families instead of studying them in isolation.","Use the neural and advanced sections after you already know how to pick baselines and evaluate them honestly."],workUses:["Choose a baseline model quickly and explain why a fancier model is or is not justified.","Compare interpretability, accuracy, data requirements, training cost, and deployment complexity across families.","Talk more clearly about overfitting, leakage, bias and variance, and the cost of being wrong."],pitfalls:["Optimizing the wrong metric for the business decision.","Skipping simple baselines and jumping straight to a complex model.","Leaking future or target information into training and then trusting the score."],questions:["What would make you choose a linear model over a tree ensemble?","When do precision, recall, calibration, or ranking matter more than accuracy?","How do you know a model improved because it learned signal rather than memorized noise?"]}},{key:"nlp-visual-reference",pagePath:"nlp-visual-reference/index.html",match:/nlp-visual-reference\//i,category:"Natural Language Processing",description:"Learn how text moves from tokens to meaning through preprocessing, modeling, retrieval, and evaluation.",stats:[{label:"Study Sections",value:()=>document.querySelectorAll(".panel").length||0},{label:"Concept Cards",value:()=>document.querySelectorAll(".card").length||0},{label:"Code Examples",value:()=>document.querySelectorAll(".code-card").length||0}],guide:{intro:"NLP becomes easier when you follow the pipeline from text cleanup to representation, then from representation to a task such as classification, retrieval, extraction, or generation. The point is not just to learn model names. It is to understand where language structure is lost, preserved, or recovered.",studyPath:["Start with the overview and foundations so tokenization, sequence modeling, and context windows feel concrete before task-specific sections.","Move next through preprocessing and classical pipelines because they explain why text quality, chunking, and labeling still matter in modern systems.","Use later sections to compare retrieval, extraction, multilingual work, and LLM-era workflows."],workUses:["Choose between classification, retrieval, extraction, and generation based on the real product goal.","Explain why chunking, normalization, reranking, and multilingual handling change output quality.","Debug text systems with a cleaner eye for tokenization issues, data skew, and evaluation gaps."],pitfalls:["Treating all language tasks as chat problems when a narrower pipeline would be more reliable.","Ignoring multilingual behavior, domain terminology, or label ambiguity in the dataset.","Measuring only final answer quality without checking retrieval relevance or extraction precision."],questions:["What does this product really need: classification, retrieval, extraction, generation, or a mix?","Where is text being split, normalized, or truncated in a way that changes meaning?","How would you test errors caused by language, domain jargon, or prompt formatting?"]}},{key:"computer-vision-visual-reference",pagePath:"computer-vision-visual-reference/index.html",match:/computer-vision-visual-reference\//i,category:"Computer Vision",description:"Study how images move from raw pixels to recognition, localization, segmentation, tracking, and deployment.",stats:[{label:"Study Sections",value:()=>document.querySelectorAll(".panel").length||0},{label:"Concept Cards",value:()=>document.querySelectorAll(".card").length||0},{label:"Table Views",value:()=>document.querySelectorAll(".study-table").length||0}],guide:{intro:"Computer vision gets easier when you stop thinking only about model architectures and start from the imaging pipeline itself. Optics, sampling, labeling, geometry, and deployment constraints often explain performance just as much as the network does.",studyPath:["Read the overview and image foundations first so you understand how visual information is captured and lost before any model sees it.","Move through image processing and geometry before deep recognition tasks. Those sections explain why edges, noise, alignment, and scale matter.","Leave tracking, video, 3D, and production deployment topics for later unless they match your current work."],workUses:["Choose between classification, detection, segmentation, OCR, and tracking with more precision.","Explain why lighting, annotation quality, augmentation, and deployment hardware shape results.","Debug whether failures come from sensing, labeling, model choice, or post-processing."],pitfalls:["Treating every error as a model problem when the root cause is data capture or labeling.","Ignoring metrics such as IoU or mAP and then over-trusting accuracy alone.","Building for lab images without checking edge cases such as glare, motion blur, or occlusion."],questions:["What signal is available in the image, and what was already lost during capture?","Does the task require semantic recognition, localization, segmentation, or temporal understanding?","How will environment, labeling policy, and hardware change model behavior in production?"]}},{key:"token-embeddings",pagePath:"token-embeddings/index.html",match:/token-embeddings\//i,category:"Transformers",description:"Follow how tokens become vectors the model can compare, combine, and pass through a transformer.",stats:[{label:"Learning Steps",value:()=>document.querySelectorAll(".step-pill").length||0},{label:"Visual Sections",value:()=>document.querySelectorAll(".section-card").length||0},{label:"Similarity Demos",value:()=>document.querySelectorAll(".sim-card").length||0}],guide:{intro:"Embeddings are learned coordinates for tokens. They give the model a numeric space where similar concepts can end up near each other, but each dimension does not carry a simple human label. This page is most useful if you read it as a bridge from discrete symbols to usable machine representations.",studyPath:["Go in order from Vocabulary to Cosine Similarity. Each step depends on the previous one.","Pay special attention to tokenization and the embedding matrix. They explain why language models see text the way they do.","Treat the analogy and similarity sections as intuition builders, not perfect definitions of meaning."],workUses:["Understand why tokenization quirks affect prompts, chunking, and retrieval quality.","Build a cleaner mental model for semantic search, vector databases, and transformer inputs.","Explain why one-hot vectors are only a starting point and why learned embeddings matter."],pitfalls:["Assuming each embedding dimension has a single human-readable meaning.","Thinking nearest-neighbor similarity always means the same thing across every context.","Ignoring tokenization and then wondering why the model splits or groups text strangely."],questions:["Why are one-hot vectors too sparse and weak for useful semantic learning?","What does cosine similarity measure, and what does it leave out?","How can tokenization choices change what an LLM can represent or retrieve?"]}},{key:"genai-llm-systems",pagePath:"genai-llm-systems/index.html",match:/genai-llm-systems\//i,category:"Generative AI",description:"Study an LLM application as a full stack: model choice, retrieval, orchestration, tools, memory, evaluation, and safety.",stats:[{label:"System Layers",value:7},{label:"Build Stages",value:5},{label:"Tool / Service Cards",value:20}],guide:{intro:"Most LLM projects stop feeling simple as soon as they need fresh data, tools, state, reliability, or approvals. That is why this page is structured as a systems guide. It helps you see where prompts end and product architecture begins.",studyPath:["Read System Stack first so you understand the moving parts before comparing agent patterns or tooling.","Use the Maturity Ladder as a reality check. Many teams should master grounded assistants before they build agents.","Only then compare architecture blueprints, market tools, and code patterns."],workUses:["Frame product discussions around retrieval quality, orchestration, observability, and governance instead of vague AI language.","Explain when RAG is enough, when tools are needed, and when multi-step agents are truly justified.","Plan production controls such as tracing, evals, retries, permission boundaries, and human review."],pitfalls:["Treating every failure as a prompt problem instead of checking retrieval, tools, or state handling.","Using agent loops where deterministic code would be safer, cheaper, and easier to debug.","Skipping evaluation and observability until after the app is already brittle."],questions:["What can deterministic code do better than the model in this workflow?","When is grounded retrieval enough, and when does the task really need tools or planning?","Which actions should be autonomous, approval-gated, or never model-executed?"]}},{key:"mlops-llmops-atlas",pagePath:"mlops-llmops-atlas/index.html",match:/mlops-llmops-atlas\//i,category:"Miscellaneous",description:"Learn how model systems ship through deployment, evals, monitoring, versioning, rollback, and feedback loops.",stats:[{label:"Study Sections",value:()=>document.querySelectorAll(".panel").length||0},{label:"Ops Paths",value:()=>document.querySelectorAll(".sidebar-nav .nav-btn").length||0},{label:"Reference Cards",value:()=>document.querySelectorAll(".card, .code-card").length||0}],guide:{intro:"MLOps and LLMOps are the operating layers that make model quality survivable in production. The useful question is not only whether a model works. It is whether the full system can be released safely, observed clearly, rolled back quickly, and improved intentionally.",startHere:["Best for: teams shipping ML or LLM features that need release discipline, observability, and feedback loops.","Prerequisites: basic ML or GenAI familiarity plus some understanding of deployment and monitoring concepts.","Estimated first pass: 40 to 65 minutes if you follow release flow, evals, monitoring, then feedback."],studyPath:["Read the overview first so deployment, evaluation, and runtime visibility feel like one operating loop.","Move next through deployment and evaluation because those sections explain how change should be gated.","Use monitoring, versioning, and feedback loops last to understand day-two operations and improvement."],useWhen:["You need stronger release controls for models, prompts, retrieval settings, or tool contracts.","Your team can ship experiments but struggles to explain regressions or rollbacks.","You want a clearer map of monitoring, evals, promotion criteria, and human review."],workUses:["Plan safer deployment paths for ML and LLM systems without treating them like ordinary stateless APIs.","Explain why evals, traces, and versioning belong together in the same release process.","Design feedback loops that produce actionable fixes instead of noisy logs."],pitfalls:["Versioning the model while leaving prompts, indexes, or tool schemas undocumented.","Relying on one aggregate eval score instead of tracking failure classes and runtime behavior.","Monitoring uptime while quality or cost silently degrades."],caseStudy:["Scenario: a support copilot improves answer style but suddenly escalates more tickets and costs more to run.","Tension: the system changed in prompt bundle, retrieval policy, and fallback routing, not just in the model.","Study lens: use the atlas to trace artifact versions, eval gates, runtime metrics, and rollback decisions."],vocabulary:["Promotion gate: the checks that must pass before a candidate release reaches production traffic.","Shadow traffic: replay or observe real requests without letting the candidate system affect users.","Trace stitching: tying prompts, retrieved context, tool calls, latency, and outcomes into one run record.","Feedback triage: sorting failures into categories that can map to specific fixes."],questions:["Which artifacts in this system can change behavior and therefore deserve version IDs?","What would prove a release improved quality rather than simply changed style or cost?","How fast could the team explain and reverse a bad production change?"],practicePrompts:["What would your release checklist include for a RAG assistant with tools and approvals?","Which monitoring signals would you alert on if quality is drifting but uptime is still healthy?","How would you separate retrieval regressions from prompt regressions in the feedback loop?"],related:[{key:"genai-llm-systems",label:"GenAI & LLM Systems",reason:"Use this for the product architecture underneath LLMOps decisions."},{key:"field-atlas",label:"Data Engineering Field Atlas",reason:"Helpful when pipelines, freshness, and contracts feed the model system."},{key:"system-design-ai-workbench",label:"System Design Atlas",reason:"Connect model operations to queues, storage, retries, and platform reliability."}]}},{key:"search-recommender-systems",pagePath:"search-recommender-systems/index.html",match:/search-recommender-systems\//i,category:"Miscellaneous",description:"Understand retrieval, ranking, personalization, candidate generation, and feedback loops as one ranking pipeline.",stats:[{label:"Study Sections",value:()=>document.querySelectorAll(".panel").length||0},{label:"Ranking Paths",value:()=>document.querySelectorAll(".sidebar-nav .nav-btn").length||0},{label:"Reference Cards",value:()=>document.querySelectorAll(".card, .code-card").length||0}],guide:{intro:"Search and recommender systems are both ranking systems. The main difference is whether the user expresses intent directly or the system has to infer it from behavior and context. This page is most useful if you study it as a layered pipeline rather than as one ranking model.",startHere:["Best for: anyone building search, feeds, recommendations, retrieval, or ranking-heavy user experiences.","Prerequisites: basic ML intuition and some comfort with user behavior metrics.","Estimated first pass: 40 to 70 minutes if you go from retrieval to ranking to evaluation."],studyPath:["Start with the overview so candidate generation, retrieval, ranking, and personalization stay connected.","Move next through retrieval and ranking because those stages explain most quality bottlenecks.","Finish with feedback loops and evaluation so the system can be improved without teaching itself the wrong lesson."],useWhen:["You need to reason about recall, ranking quality, diversity, and freshness together.","Users search, browse, or consume recommendations and the order of results matters a lot.","You want a cleaner mental model for candidate generation and personalization tradeoffs."],workUses:["Explain why retrieval quality limits ranking quality before heavier models ever run.","Design personalization logic without collapsing the experience into repetitive recommendations.","Choose better metrics for search and recommendation systems than raw clicks alone."],pitfalls:["Optimizing CTR so aggressively that quality, diversity, or trust declines.","Ignoring cold start and assuming behavioral history already exists for every user or item.","Treating feedback as objective truth instead of something shaped by prior ranking decisions."],caseStudy:["Scenario: a marketplace search system boosts popular items so strongly that new inventory becomes invisible.","Tension: click metrics look healthy short term, but long-term ecosystem health and item discovery suffer.","Study lens: compare candidate generation, ranking signals, diversity controls, and evaluation choices."],vocabulary:["Candidate generation: the fast stage that narrows a huge corpus into a manageable shortlist.","Reranking: applying a richer model or signal set to a smaller candidate set.","Position bias: the tendency for higher-ranked results to receive more interaction regardless of true relevance.","Cold start: the challenge of ranking well when user or item history is sparse."],questions:["What part of the system decides recall, and what part decides final order?","Which user or business signals deserve to influence rank, and which should be side constraints instead?","How would you know whether a ranking improvement is real or just amplified bias?"],practicePrompts:["When should hybrid lexical plus semantic retrieval replace a pure vector search approach?","How would you keep a recommender fresh without sacrificing personalization?","Which offline and online metrics would you track for a ranked feed?"],related:[{key:"ml-models",label:"ML Models",reason:"Useful for baseline model thinking behind ranking and recommendation approaches."},{key:"nlp-visual-reference",label:"NLP Visual Reference",reason:"Helpful when search depends heavily on text retrieval and query understanding."},{key:"token-embeddings",label:"Token Embeddings",reason:"Use this for the vector and similarity foundations behind semantic retrieval."}]}},{key:"sql-databases-visualizer",pagePath:"sql-databases-visualizer/index.html",match:/sql-databases-visualizer\//i,category:"Miscellaneous",description:"Study SQL and databases through workload shape, indexing, joins, transactions, schema design, and OLTP versus OLAP.",stats:[{label:"Study Sections",value:()=>document.querySelectorAll(".panel").length||0},{label:"Database Paths",value:()=>document.querySelectorAll(".sidebar-nav .nav-btn").length||0},{label:"Reference Cards",value:()=>document.querySelectorAll(".card, .code-card").length||0}],guide:{intro:"SQL gets much easier when you connect query syntax to the physical and operational reality underneath it. Indexes, joins, isolation, and workload shape are what turn a correct query into a fast or fragile system.",startHere:["Best for: backend and data engineers who want stronger instincts for query performance and schema tradeoffs.","Prerequisites: basic SQL familiarity and some understanding of tables and keys.","Estimated first pass: 45 to 70 minutes if you move from relational model to indexing to transactions."],studyPath:["Read the overview first so the relational model, indexing, and workload shape feel like one system.","Move through relational model and indexing before joins and plans so access paths make sense.","Use transactions, modeling, and OLTP versus OLAP last to connect correctness and analytics tradeoffs."],useWhen:["You need to debug slow queries or choose a better schema for a workload.","Transactions, concurrency, or isolation decisions are starting to matter.","You want to understand why OLTP and OLAP systems are optimized differently."],workUses:["Explain why an index helps one query and hurts another write-heavy workload.","Connect schema design, query planning, and transactional guarantees in one mental model.","Choose better tradeoffs between normalized transactional models and analytical designs."],pitfalls:["Adding indexes without checking whether the access pattern really benefits.","Assuming a query is slow because of syntax instead of cardinality, sorting, or join order.","Treating transactions as optional even when the business action spans multiple state changes."],caseStudy:["Scenario: an ecommerce checkout system stays correct but order-history queries become slow as the catalog and order volume grow.","Tension: transactional correctness, reporting needs, and query performance now pull the schema in different directions.","Study lens: compare indexing, denormalization, and OLTP versus OLAP separation."],vocabulary:["Selectivity: how much a filter narrows the row set.","Covering index: an index that contains enough columns to satisfy the query without extra row lookups.","Isolation level: the rules controlling what concurrent transactions may observe.","Cardinality: how many rows a plan step is expected to touch or produce."],questions:["What workload shape is this database really serving: transactional, analytical, or both?","Where does the query shrink the row set, and which access path makes that efficient?","What correctness issue would appear if this operation ran concurrently at scale?"],practicePrompts:["How would you explain to a teammate why a composite index column order matters?","When should a reporting need move to an analytical path instead of burdening the OLTP store?","Which transaction anomalies would be unacceptable for payments or inventory?"],related:[{key:"field-atlas",label:"Data Engineering Field Atlas",reason:"Connect databases to pipelines, warehousing, and governance decisions."},{key:"system-design-ai-workbench",label:"System Design Atlas",reason:"Useful for placing databases inside larger traffic and state architectures."},{key:"backend-api-auth-atlas",label:"Backend API & Auth Atlas",reason:"Follow this when database design meets request contracts and service behavior."}]}},{key:"distributed-systems-patterns",pagePath:"distributed-systems-patterns/index.html",match:/distributed-systems-patterns\//i,category:"Miscellaneous",description:"Learn the recurring moves behind scale and correctness: replication, sharding, consistency, queues, consensus, retries, and reconciliation.",stats:[{label:"Study Sections",value:()=>document.querySelectorAll(".panel").length||0},{label:"Pattern Paths",value:()=>document.querySelectorAll(".sidebar-nav .nav-btn").length||0},{label:"Reference Cards",value:()=>document.querySelectorAll(".card, .code-card").length||0}],guide:{intro:"Distributed systems stop feeling abstract when you reduce them to repeated moves: replicate for durability, partition for scale, coordinate for correctness, retry carefully, and reconcile whatever still diverges. This page is organized around those moves.",startHere:["Best for: backend and platform engineers studying scale, coordination, and failure tradeoffs.","Prerequisites: comfort with APIs, databases, and the idea that networks and nodes can fail independently.","Estimated first pass: 45 to 75 minutes if you read from replication through retries."],studyPath:["Begin with the overview so replication, sharding, and consistency are framed as connected tradeoffs.","Move through replication and sharding before consistency and consensus, because state placement drives guarantees.","Finish with queues and retries so failure recovery feels grounded in the architecture."],useWhen:["A system is scaling beyond one process, one machine, or one database node.","You need to reason about stale reads, retries, duplicates, or coordination bottlenecks.","You want better system design language for failure handling and state boundaries."],workUses:["Explain why stronger consistency or coordination costs latency and complexity.","Choose between queues, streams, replicas, and shards with clearer tradeoff language.","Design retries and reconciliation paths that do not create accidental corruption."],pitfalls:["Adding retries without idempotency or backoff.","Sharding by a key that creates hotspots or cross-shard pain in the main read path.","Using strong coordination for every path instead of reserving it for truly dangerous disagreement."],caseStudy:["Scenario: a notification platform scales write throughput with queues and partitions, but users see duplicate or out-of-order deliveries.","Tension: throughput improved while ordering and idempotency assumptions were left vague.","Study lens: use the atlas to inspect queues, retries, shard keys, and authoritative state."],vocabulary:["Read-your-writes: a guarantee that a client can immediately observe its own recent update.","Quorum: a write or read threshold used to establish enough agreement among replicas.","Backpressure: slowing producers or callers so downstream systems can recover.","Reconciliation: repairing derived or duplicated state after partial failure or delayed convergence."],questions:["Where is authoritative state, and which copies are merely replicas or caches?","What can be stale without harming the product, and what cannot?","How does the system recover when a retry succeeds partially or arrives twice?"],practicePrompts:["What workload would justify strong coordination instead of eventual convergence?","How would you explain the downside of the chosen shard key six months from now?","Which failure would cause the most confusing user-visible inconsistency here?"],related:[{key:"system-design-ai-workbench",label:"System Design Atlas",reason:"Use this for broader architectural case studies built from the same moves."},{key:"sql-databases-visualizer",label:"SQL & Databases",reason:"Helpful for understanding state placement and transactional boundaries."},{key:"backend-api-auth-atlas",label:"Backend API & Auth Atlas",reason:"Connect distributed system behavior to request-facing API contracts."}]}},{key:"backend-api-auth-atlas",pagePath:"backend-api-auth-atlas/index.html",match:/backend-api-auth-atlas\//i,category:"Miscellaneous",description:"Study backend interfaces through HTTP, REST versus gRPC, auth flows, sessions, rate limiting, caching, and operational contracts.",stats:[{label:"Study Sections",value:()=>document.querySelectorAll(".panel").length||0},{label:"API Paths",value:()=>document.querySelectorAll(".sidebar-nav .nav-btn").length||0},{label:"Reference Cards",value:()=>document.querySelectorAll(".card, .code-card").length||0}],guide:{intro:"APIs are not just endpoint lists. They are agreements about methods, identity, retries, rate limits, cache behavior, and error semantics. This page is most useful if you treat transport, auth, and traffic control as one connected surface.",startHere:["Best for: backend engineers, API designers, and anyone refreshing auth and traffic-control fundamentals.","Prerequisites: basic web or service development experience and some familiarity with HTTP requests.","Estimated first pass: 40 to 65 minutes if you move from HTTP into auth, limits, and caching."],studyPath:["Read the overview first so transport, auth, and operational controls feel like one system.","Move through HTTP and REST versus gRPC before auth flows so the contract surface is clear.","Use sessions, rate limiting, and caching last because those controls depend on the interface and identity model."],useWhen:["You are designing or reviewing backend interfaces and auth behavior.","A team needs better intuition for sessions, tokens, idempotency, and API protection.","You want to connect protocol choices to operational behavior under real traffic."],workUses:["Explain the tradeoff between REST and gRPC without reducing it to fashion.","Design cleaner auth flows and token strategies for both users and services.","Choose rate limiting and caching policies that fit the real API behavior."],pitfalls:["Treating auth as token parsing instead of a broader permissions and trust problem.","Returning vague errors or inconsistent status semantics that make clients fragile.","Adding caches or retries without thinking through invalidation and idempotency."],caseStudy:["Scenario: a public API grows quickly, then starts suffering from token misuse, bursty traffic, and stale cached responses.","Tension: convenience for developers and clients now competes with correctness, fairness, and abuse protection.","Study lens: compare interface style, auth flow, limit policy, and cache strategy together."],vocabulary:["Idempotency key: a client-provided identifier that makes repeated create-like requests safe.","Delegated authorization: allowing one system or user to act with limited permission on behalf of another.","Token bucket: a limiting strategy that allows controlled bursts while enforcing an average rate.","Cache invalidation: the mechanism that prevents fast responses from becoming silently wrong."],questions:["What should this API promise about retries, errors, and cache freshness?","Who is authenticated here, and who is actually authorized to do the action?","Which interface decisions will make client behavior easier or harder to evolve later?"],practicePrompts:["When should you choose server sessions instead of stateless access tokens?","How would you explain REST versus gRPC to a team building both public and internal APIs?","What should happen after a client exceeds its limit: reject, defer, or degrade?"],related:[{key:"distributed-systems-patterns",label:"Distributed Systems",reason:"Connect request-facing contracts to retries, queues, and coordination tradeoffs."},{key:"sql-databases-visualizer",label:"SQL & Databases",reason:"Useful when API behavior depends on transactional or query-layer decisions."},{key:"system-design-ai-workbench",label:"System Design Atlas",reason:"Use this for end-to-end design patterns that depend on API and auth choices."}]}},{key:"azure-cloud-services",pagePath:"data-engineering/azure-cloud-services/index.html",match:/azure-cloud-services\//i,category:"Cloud",description:"Use this map to move from a workload need to the right Azure compute, data, networking, and operations services.",stats:[{label:"Service Categories",value:()=>document.querySelectorAll("[data-category]").length||0},{label:"Service Details",value:"80+"},{label:"Code Starters",value:()=>document.querySelectorAll("[data-lang]").length||0}],guide:{intro:"Learning a cloud platform gets easier when you stop trying to memorize every product. The goal is to understand how a handful of services usually fit together to solve compute, storage, identity, networking, and operations problems.",studyPath:["Start with the Category Radar so you see the whole platform shape before opening individual services.","Pick one real workload and use the Service Explorer to build a shortlist instead of reading everything.","Use the detail panel and official references to understand what the service actually does and where it does not fit."],workUses:["Translate business requirements into a short Azure architecture rather than an overwhelming service list.","Compare managed platform services with lower-level infrastructure choices.","Map Azure services to familiar patterns in identity, databases, eventing, analytics, and operations."],pitfalls:["Picking a service because its name sounds close to the problem.","Ignoring identity, network boundaries, and operational limits until late in the design.","Assuming a richer catalog automatically means a better architecture."],questions:["Which Azure services are control-plane choices and which are data-plane choices?","When is a managed platform service a better bet than building on VMs or containers?","Which services are core to the workload and which are only support layers?"]}},{key:"aws-cloud-services",pagePath:"cloud/aws-cloud-services/index.html",match:/aws-cloud-services\//i,category:"Cloud",description:"Use this map to move from a workload need to the right AWS compute, data, networking, and operations services.",stats:[{label:"Service Categories",value:()=>Math.max(0,document.querySelectorAll("[data-category]").length-1)},{label:"Visible Services",value:()=>document.querySelectorAll(".service-button").length||0},{label:"Reference Cards",value:()=>document.querySelectorAll(".reference-card").length||0}],guide:{intro:"AWS is easier to learn when you treat it like a set of recurring patterns, not a giant catalog to memorize. This page is meant to help you narrow the service space based on workload shape, operational burden, and the kind of control you really need.",studyPath:["Begin with Category Radar so you know where compute, storage, networking, data, and operations live.","Use the filters to focus on one service family at a time, then open a detail panel for just a few representative services.","Finish with the journeys and references so you build a repeatable study flow instead of random browsing."],workUses:["Shortlist AWS services for a workload without getting lost in product names.","Compare similar services such as compute runtimes, databases, queues, and storage options with better context.","Explain the tradeoff between managed convenience and lower-level control."],pitfalls:["Reading service pages without first knowing which problem you are trying to solve.","Assuming two AWS services in the same family are interchangeable.","Ignoring operational overhead when comparing a managed service with a DIY path."],questions:["What are the smallest AWS building blocks this workload truly needs?","Which services are differentiated by scale, performance model, or operational burden?","Where would managed AWS services reduce team toil the most?"]}},{key:"gcp-cloud-services",pagePath:"cloud/gcp-cloud-services/index.html",match:/gcp-cloud-services\//i,category:"Cloud",description:"Use this map to move from a workload need to the right Google Cloud compute, data, networking, and operations services.",stats:[{label:"Service Categories",value:()=>Math.max(0,document.querySelectorAll("[data-category]").length-1)},{label:"Visible Services",value:()=>document.querySelectorAll(".service-button").length||0},{label:"Reference Cards",value:()=>document.querySelectorAll(".reference-card").length||0}],guide:{intro:"Google Cloud becomes easier to navigate when you connect products to recurring design problems: analytics, application runtimes, networking, AI, and platform operations. This page is meant to help you organize those choices instead of skimming product pages without a frame.",studyPath:["Start with the platform overview so you know where each service family lives.","Filter the catalog by operating band, then inspect the detail cards for just a few services that match your workload.","Use the references after you already have a shortlist and specific questions."],workUses:["Understand where GCP is especially strong for analytics, managed services, and developer workflows.","Translate common workload needs into the right GCP compute, storage, and operations services.","Compare GCP decisions with equivalent patterns in AWS or Azure."],pitfalls:["Treating product names as if they explain architecture by themselves.","Overlooking operational boundaries because a managed service feels simple at first glance.","Comparing clouds only by feature count instead of team fit, defaults, and workflow quality."],questions:["Which GCP services are core to the workload and which are only supporting pieces?","Where does GCP offer a clearly managed path compared with lower-level options?","How would you explain the same architecture to a team that knows another cloud better?"]}},{key:"cloud-platforms-comparison",pagePath:"cloud/cloud-platforms-comparison/index.html",match:/cloud-platforms-comparison\//i,category:"Cloud",description:"Compare AWS, Azure, and Google Cloud by workload fit, service families, and operating tradeoffs instead of memorizing product names.",stats:[{label:"Clouds Compared",value:3},{label:"Decision Lenses",value:()=>document.querySelectorAll("[data-lens-id]").length||0},{label:"Reference Cards",value:()=>document.querySelectorAll(".reference-card").length||0}],guide:{intro:"Most clouds can solve the same core problems. What changes are the defaults, developer experience, pricing patterns, organizational fit, and how easy it is to operate what you build. This page helps you compare those differences in a more useful way.",studyPath:["Read the decision lenses first. They give you a framework before you compare named services.","Use the service crosswalks to translate families of products, not to force one-to-one naming matches.","Finish with workload archetypes so the comparison stays anchored in real design choices."],workUses:["Guide cloud selection and migration conversations without getting trapped in brand loyalty.","Translate an architecture from one cloud to another with clearer tradeoff language.","Spot where skills, org habits, and existing tooling matter more than product differences."],pitfalls:["Comparing clouds only by product names or total service count.","Ignoring the team's existing skill set, support model, and operating maturity.","Treating list price as the whole cost picture."],questions:["Which differences between the clouds actually matter for this workload?","What parts of the design are portable and what parts create lock-in?","How much of the decision is technical and how much is organizational?"]}},{key:"well-architected-frameworks",pagePath:"cloud-architecture/well-architected-frameworks/index.html",match:/well-architected-frameworks\//i,category:"Cloud Architecture",description:"Use the major well-architected frameworks to review systems through reliability, security, cost, performance, and operations.",stats:[{label:"Frameworks",value:3},{label:"Pillar Views",value:()=>document.querySelectorAll("#pillarButtons .tab-btn").length||0},{label:"Study Sections",value:()=>document.querySelectorAll(".section-card").length||0}],guide:{intro:"A well-architected framework is not a diagram template. It is a structured way to review a system and ask whether the current design can meet reliability, security, performance, cost, and operational goals without hiding the tradeoffs.",studyPath:["Start by understanding the shared pillars before you compare cloud-specific wording.","Read each framework with one workload in mind so the guidance stays concrete.","Use the scenario or review sections last. They are the best test of whether the framework is becoming usable, not just familiar."],workUses:["Run architecture reviews that feel evidence-based instead of opinion-driven.","Turn incidents, migrations, and redesigns into more structured learning loops.","Explain why one design change may improve one pillar while hurting another."],pitfalls:["Scoring each pillar separately without discussing the tradeoffs between them.","Treating the framework as a one-time compliance document.","Using pillar labels without gathering real evidence about the system."],questions:["What evidence would convince you a pillar is healthy rather than merely documented?","Which improvements increase reliability but also raise cost or complexity?","How often should a system be reviewed against these pillars as it evolves?"]}},{key:"python-deep-dive",pagePath:"python-deep-dive/index.html",match:/python-deep-dive\//i,category:"Python",description:"Learn Python in the order that makes everyday code easier to read: values, functions, objects, the standard library, and the data stack.",stats:[{label:"Study Sections",value:()=>document.querySelectorAll(".section-card").length||0},{label:"Topic Views",value:()=>document.querySelectorAll(".tab-btn").length||0},{label:"Reference Cards",value:()=>document.querySelectorAll(".reference-card, .glossary-card").length||0}],guide:{intro:"Python gets easier when you understand how names point to objects, how functions capture behavior, and how the runtime asks objects what they can do. This page is designed to turn Python from a syntax list into a working mental model.",studyPath:["Read Atlas, Foundations, Types, Functions, and Iteration in order. That sequence explains most day-to-day Python behavior.","Move to OOP and the standard library after the core data and function model feels clear.","Treat the ecosystem section as applied context, not the foundation."],workUses:["Debug mutability, scope, imports, and method lookup with less guesswork.","Write clearer code by choosing the right collection type, iterator pattern, or function shape.","Understand pandas and numpy code faster because the base language model is stronger."],pitfalls:["Using mutable default arguments without realizing the object is shared.","Confusing copying with aliasing and then mutating the wrong value.","Mixing identity, equality, and truthiness in ways that hide bugs."],questions:["When should a generator replace a list?","How does attribute lookup work when a method or property is missing?","What makes code feel Pythonic because it is clearer, not just shorter?"]}},{key:"system-design-ai-workbench",pagePath:"system-design/ai-workbench/index.html",match:/system-design\/ai-workbench\//i,category:"System Design",description:"Learn system design as repeatable reasoning about traffic, state, storage, queues, failures, and operating tradeoffs.",stats:[{label:"Study Sections",value:()=>document.querySelectorAll(".section-card").length||0},{label:"Pattern Views",value:()=>document.querySelectorAll("[data-pattern-id]").length||0},{label:"Chapter Cards",value:()=>document.querySelectorAll("[data-chapter-id]").length||0}],guide:{intro:"System design becomes more manageable when you stop memorizing finished architectures and instead learn the moves behind them: partitioning, caching, queues, indexes, fanout, consistency boundaries, retries, and reconciliation. This page is organized around those reusable moves.",studyPath:["Begin with Architecture Engine so you have a base checklist for new problems.","Use Pattern Studio and Family Explorer next. They show how the same ideas reappear across many products.","Leave the matrix, internals, and playbook sections for review and comparison work after the basics feel stable."],workUses:["Break vague product ideas into clear flows, bottlenecks, and storage decisions.","Explain tradeoffs in a design review without jumping straight to vendor product names.","Prepare for interviews and architecture docs with a more repeatable structure."],pitfalls:["Starting from technologies instead of starting from traffic, state, and failure modes.","Ignoring background jobs, replay, and reconciliation because the happy path looks clean.","Treating read scaling and write correctness as separate problems when they interact constantly."],questions:["Where does authoritative state live, and where is it cached or derived?","Which path is latency-critical and which path can be asynchronous?","What happens when a dependency slows down, returns stale data, or fails entirely?"]}},{key:"field-atlas",pagePath:"data-engineering/field-atlas/index.html",match:/field-atlas\//i,category:"Data Engineering",description:"See how raw data becomes dependable data products across ingestion, storage, transformation, orchestration, and governance.",stats:[{label:"Field Sections",value:()=>document.querySelectorAll(".nav-chip").length||0},{label:"Study Modes",value:4},{label:"Tool Clusters",value:()=>document.querySelectorAll(".tool-chip").length||0}],guide:{intro:"Data engineering is about turning raw, moving data into dependable assets that other teams can trust. That means the real work includes ownership, contracts, orchestration, quality checks, lineage, and operating discipline, not just choosing storage or compute tools.",studyPath:["Start with the field map and the overall pipeline shapes before you compare tools.","Then study storage, batch, stream, and orchestration layers as connected design choices rather than separate categories.","Use the governance and operating sections after the movement of data itself is clear."],workUses:["Explain how ingestion, transformation, quality, and delivery fit into one accountable flow.","Compare warehouse, lake, lakehouse, and streaming choices with more realistic language.","Design pipelines that are easier to monitor, recover, and hand over to other teams."],pitfalls:["Focusing on tooling before you define data ownership, contracts, and freshness expectations.","Adding quality checks only at the end of the pipeline.","Thinking of governance as paperwork instead of an operating aid."],questions:["Where should transformations happen and why?","What makes streaming harder to operate than it first appears?","How do lineage and contracts reduce surprises for downstream users?"]}}];const GUIDE_CORE_CONTENT={"deep-learning":{startHere:["Best for: readers who already know basic ML and want to reason about training, architectures, and inference tradeoffs.","Prerequisites: loss functions, gradient descent, basic linear algebra, and a working sense of overfitting.","Estimated first pass: 60 to 90 minutes if you follow the foundations-first route."],useWhen:["You need learned representations for text, images, audio, or multimodal data.","A tabular baseline is no longer enough and feature engineering is becoming the bottleneck.","You need to reason about training stability, GPU cost, or inference architecture."],caseStudy:["Scenario: build a document-intelligence system that classifies, extracts, and summarizes long reports.","Tension: retrieval quality, long-context cost, and model latency all matter at once.","Study lens: compare encoder-style pipelines, fine-tuning, and LLM-based orchestration before defaulting to the largest model."],vocabulary:["Representation learning: learning features automatically instead of hand-designing them.","Inductive bias: the structure a model assumes before it sees your data.","Regularization: techniques that improve generalization instead of memorization.","Throughput vs latency: overall work per second versus time for one request."],practicePrompts:["Train loss falls, validation stalls, and GPU memory is tight. What would you inspect first?","When does distillation beat serving the original model directly?","What failure mode would make you choose retrieval or prompt engineering before fine-tuning?"],related:[{key:"ml-models",label:"ML Models",reason:"Use this first if you need cleaner baseline instincts before deep architectures."},{key:"token-embeddings",label:"Token Embeddings",reason:"A tighter bridge into transformer internals and representation learning."},{key:"genai-llm-systems",label:"GenAI & LLM Systems",reason:"Follow this when you want product architecture on top of deep learning."}]},"ml-models":{startHere:["Best for: tabular ML, baseline selection, and practical model comparison before you jump to deep learning.","Prerequisites: basic statistics, train/validation/test splits, and familiarity with business metrics.","Estimated first pass: 45 to 75 minutes if you focus on baseline families first."],useWhen:["You need a fast baseline for classification, regression, ranking, or anomaly detection.","Interpretability, data efficiency, or operational simplicity matters as much as raw accuracy.","You want a decision path for class imbalance, leakage, calibration, or feature design."],caseStudy:["Scenario: predict churn for a subscription product with sparse events, CRM data, and changing cohorts.","Tension: class imbalance, leakage from future events, and the need for calibrated risk scores.","Study lens: compare logistic regression, tree ensembles, and uplift-style thinking before reaching for a deep model."],vocabulary:["Class imbalance: the positive and negative classes appear at very different rates.","Leakage: information from the future or the label sneaks into training features.","Calibration: predicted probabilities should line up with real-world frequencies.","Baseline model: the simplest honest model you can compare everything else against."],practicePrompts:["Which baseline would you ship first for a new tabular problem, and why?","If accuracy improved but calibration got worse, would that help the product?","How would you detect whether a feature is only working because of leakage?"],related:[{key:"python-deep-dive",label:"Python Deep Dive",reason:"Useful if you want stronger implementation fluency around ML code and data handling."},{key:"deep-learning",label:"Deep Learning",reason:"Move here when features and model capacity become the limiting factor."},{key:"field-atlas",label:"Data Engineering Field Atlas",reason:"Connect model work to data freshness, contracts, and production pipelines."}]},"nlp-visual-reference":{startHere:["Best for: anyone building text classification, search, extraction, summarization, or multilingual workflows.","Prerequisites: basic ML concepts and a willingness to inspect raw text instead of only model outputs.","Estimated first pass: 50 to 80 minutes if you go from foundations to retrieval and generation."],useWhen:["You need to choose between retrieval, classification, extraction, or generation for a text-heavy product.","Chunking, reranking, multilingual quality, or domain terminology is affecting results.","You want a stronger mental model for tokenization, sequence length, and text-specific evaluation."],caseStudy:["Scenario: build a support assistant that routes tickets, extracts entities, and retrieves policy answers.","Tension: one workflow mixes classification, extraction, retrieval, and generation under noisy user language.","Study lens: separate each text task and evaluate them independently before merging them into one assistant."],vocabulary:["Tokenization: how raw text is split into model-consumable units.","Chunking: dividing long documents into retrieval-sized pieces with manageable context loss.","Reranking: using a second model or heuristic to improve the order of retrieved results.","Multilingual transfer: when a model trained mostly on one language must generalize to others."],practicePrompts:["A retrieval assistant fails on short acronyms and product names. What would you inspect first?","When should a text problem stay a classifier instead of becoming a chat assistant?","How would you design an error review for multilingual search quality?"],related:[{key:"token-embeddings",label:"Token Embeddings",reason:"Use this to go deeper on vector spaces, pooling, and similarity."},{key:"genai-llm-systems",label:"GenAI & LLM Systems",reason:"Extend the text pipeline into retrieval, tools, and production controls."},{key:"ml-models",label:"ML Models",reason:"Helpful for comparing classical text pipelines with newer LLM-era approaches."}]},"computer-vision-visual-reference":{startHere:["Best for: image understanding problems where capture conditions, annotations, and deployment hardware all matter.","Prerequisites: basic ML plus comfort reading examples in terms of signal, geometry, and labels.","Estimated first pass: 55 to 85 minutes if you move from image formation into recognition tasks."],useWhen:["You need to choose between classification, detection, segmentation, OCR, tracking, or edge deployment.","Model metrics look fine in the lab but real-world images fail because of blur, glare, or occlusion.","You want better instincts for augmentation, annotation policy, and task-specific metrics."],caseStudy:["Scenario: create a manufacturing defect detector for a line with varying lighting and camera angles.","Tension: labeling is expensive, edge hardware is constrained, and false negatives are costly.","Study lens: compare classical preprocessing, detection pipelines, segmentation, and deployment compression together."],vocabulary:["IoU: overlap between predicted and ground-truth regions.","mAP: a detection summary metric across recall levels and often across IoU thresholds.","Augmentation: synthetic changes to training images that improve generalization.","Annotation schema: the exact policy for labels, boxes, masks, tracks, and edge cases."],practicePrompts:["If a detector performs well indoors but fails outdoors, what layers of the pipeline would you inspect?","When is segmentation worth the added annotation burden over detection?","How would you decide whether OCR should be a standalone stage or part of a larger vision flow?"],related:[{key:"deep-learning",label:"Deep Learning",reason:"Follow this for training mechanics, architectures, and inference efficiency."},{key:"ml-models",label:"ML Models",reason:"Helpful when you want stronger baseline discipline before larger vision systems."}]},"token-embeddings":{startHere:["Best for: readers who want to understand the bridge between raw text and transformer reasoning.","Prerequisites: basic vectors, cosine similarity, and some comfort with tokenization ideas.","Estimated first pass: 35 to 55 minutes if you follow the page linearly."],useWhen:["You want to understand semantic search, vector databases, or transformer inputs more honestly.","You need to distinguish token embeddings from sentence, document, and positional representations.","Chunking, pooling, or ANN search tradeoffs are affecting retrieval quality."],caseStudy:["Scenario: build internal policy search where short queries must find long documents with consistent citations.","Tension: chunk size, embedding choice, pooling strategy, and reranking all change recall and trust.","Study lens: compare token-level representation, sentence embeddings, and retrieval-stage post-processing together."],vocabulary:["Token embedding: a learned vector for a token or subword unit.","Positional embedding: extra signal that tells the model where a token appears in sequence.","Pooled representation: a compressed vector meant to summarize a larger text span.","ANN index: approximate nearest-neighbor data structure for faster vector search."],practicePrompts:["Why can token embeddings and sentence embeddings behave differently on the same query?","When does chunking hurt retrieval more than the embedding model does?","What would make cosine similarity alone an unsafe final ranking signal?"],related:[{key:"nlp-visual-reference",label:"NLP Visual Reference",reason:"Use this for the broader text pipeline around embeddings."},{key:"genai-llm-systems",label:"GenAI & LLM Systems",reason:"Move here when embeddings become part of a production retrieval system."},{key:"deep-learning",label:"Deep Learning",reason:"Useful for the training and architecture context behind transformer representations."}]}};const GUIDE_PRODUCT_CONTENT={"genai-llm-systems":{startHere:["Best for: product and engineering teams turning model capability into a reliable system with retrieval, tools, and controls.","Prerequisites: basic understanding of prompts, embeddings, and API-driven application design.","Estimated first pass: 60 to 90 minutes if you follow stack, ladder, blueprints, then production controls."],useWhen:["You are deciding whether a workflow needs plain prompting, RAG, tool use, or agentic loops.","You need a production frame for evals, context engineering, guardrails, prompt versions, and approvals.","You want to compare platforms without losing sight of retrieval and orchestration fundamentals."],caseStudy:["Scenario: launch a customer support copilot that retrieves policies, drafts actions, and can trigger back-office tools.","Tension: retrieval quality, permission boundaries, human review, and regression testing all interact.","Study lens: split the system into context, orchestration, tools, evals, and governance before debating model choice."],vocabulary:["Context engineering: structuring the exact information, instructions, and tool outputs a model sees.","Prompt versioning: treating prompts and tool schemas as release-managed artifacts.","Approval boundary: a point where the model may reason but cannot execute without a check.","Eval set: a curated task collection used to detect regressions and verify quality claims."],practicePrompts:["Which failures in your app are prompt issues, and which are retrieval or tool issues?","Where should approvals sit if the system can draft, decide, and execute in one loop?","How would you know a new prompt version improved style but harmed task completion?"],related:[{key:"token-embeddings",label:"Token Embeddings",reason:"Useful for understanding the retrieval and representation layer more deeply."},{key:"system-design-ai-workbench",label:"System Design Atlas",reason:"Connect LLM application design to queues, storage, retries, and operating tradeoffs."},{key:"field-atlas",label:"Data Engineering Field Atlas",reason:"Helpful when RAG quality depends on ingestion, lineage, and data freshness."}]},"python-deep-dive":{startHere:["Best for: strengthening day-to-day Python reasoning before moving deeper into data, ML, or backend work.","Prerequisites: comfort with basic syntax and the desire to understand how Python actually behaves.","Estimated first pass: 45 to 75 minutes if you read from foundations through functions and objects first."],useWhen:["You want clearer instincts for mutability, scope, iteration, imports, and object behavior.","You need a stronger bridge into decorators, context managers, async code, typing, or packaging.","Debugging and profiling feel harder than writing the first draft of the code."],caseStudy:["Scenario: maintain a small ETL and automation service that mixes files, APIs, retries, and pandas-heavy scripts.","Tension: bugs often come from state, imports, iterators, resource cleanup, and hidden shared objects.","Study lens: use Python fundamentals to explain the runtime behavior before you add more frameworks."],vocabulary:["Generator: an iterator that yields values lazily over time.","Context manager: an object that controls setup and cleanup around a block of code.","Type hint: optional annotation that improves readability and tooling, not runtime semantics by itself.","GIL: Python's global interpreter lock, which shapes concurrency tradeoffs in CPython."],practicePrompts:["When would a generator be better than returning a list?","What bug pattern makes mutable default arguments dangerous?","How would you choose between threads, async I/O, and multiprocessing for a workload?"],related:[{key:"ml-models",label:"ML Models",reason:"Useful if Python is your path into practical machine learning."},{key:"field-atlas",label:"Data Engineering Field Atlas",reason:"Connect Python fluency to production data pipelines and orchestration."},{key:"system-design-ai-workbench",label:"System Design Atlas",reason:"Helpful when Python services become distributed systems with queues and storage."}]},"system-design-ai-workbench":{startHere:["Best for: interviews, architecture reviews, and turning vague product ideas into concrete systems.","Prerequisites: comfort with APIs, databases, and some notion of latency, scale, and failure.","Estimated first pass: 55 to 90 minutes if you follow architecture engine, patterns, then case-style sections."],useWhen:["You need reusable reasoning for caches, queues, storage choices, observability, or multi-region design.","A system looks complex because traffic, consistency, and failure boundaries are not yet explicit.","You want end-to-end case studies instead of memorizing finished diagrams."],caseStudy:["Scenario: design a notification system that handles fanout, retries, preferences, and provider failures.","Tension: latency-critical APIs depend on asynchronous pipelines, idempotency, and replay-safe workers.","Study lens: map the authoritative state, async boundaries, and failure recovery before naming technologies."],vocabulary:["Idempotency: safely retrying an operation without creating duplicate side effects.","Backpressure: slowing or shaping traffic so downstream systems can recover.","Consistency model: the guarantees about when readers see writes.","Fanout: distributing one event or write into many downstream deliveries."],practicePrompts:["Which path must stay synchronous, and which path can move to a queue?","Where is authoritative state, and how is stale derived state repaired?","What changes when the system must survive a regional failure?"],related:[{key:"well-architected-frameworks",label:"Well-Architected Frameworks",reason:"Use this to turn design reasoning into a review checklist."},{key:"field-atlas",label:"Data Engineering Field Atlas",reason:"Helpful when the design includes pipelines, warehouses, and streaming systems."},{key:"genai-llm-systems",label:"GenAI & LLM Systems",reason:"Connect core system design moves to modern AI application stacks."}]},"field-atlas":{startHere:["Best for: designing reliable pipelines, analytical foundations, and data products that other teams can trust.","Prerequisites: basic SQL or warehouse familiarity plus some understanding of APIs, events, or storage.","Estimated first pass: 50 to 80 minutes if you move from pipeline shapes into governance and operations."],useWhen:["You need a map for ingestion, storage, transformation, orchestration, quality, and delivery.","Batch versus stream, CDC, medallion layers, and data contracts are active design choices.","The hard part is no longer storing data, but operating and governing it safely."],caseStudy:["Scenario: build a lakehouse-style analytics platform for orders, payments, support events, and reverse ETL outputs.","Tension: freshness, ownership, lineage, and downstream trust matter more than any one tool choice.","Study lens: design the contract, ingestion, transformation, and recovery flow before optimizing the storage engine."],vocabulary:["CDC: change data capture, which moves database changes into downstream systems.","Medallion architecture: layered data refinement such as raw, cleaned, and trusted data products.","Data contract: an explicit agreement about schema, semantics, freshness, and ownership.","Reverse ETL: sending modeled data back into operational tools such as CRMs or support systems."],practicePrompts:["Where should transformations happen in this pipeline, and why?","What makes streaming harder to govern and recover than it first appears?","How would you explain lineage and contract ownership to a non-data stakeholder?"],related:[{key:"python-deep-dive",label:"Python Deep Dive",reason:"Useful for the implementation side of orchestration, scripts, and data tooling."},{key:"aws-cloud-services",label:"AWS Cloud Services",reason:"Map data platform patterns into a specific vendor catalog."},{key:"system-design-ai-workbench",label:"System Design Atlas",reason:"Helpful when pipelines intersect with queues, storage, and platform reliability."}]}};const GUIDE_CLOUD_CONTENT={"azure-cloud-services":{startHere:["Best for: teams mapping Azure services to app, data, identity, networking, and platform operations needs.","Prerequisites: basic cloud concepts such as compute, storage, IAM, networking, and observability.","Estimated first pass: 40 to 70 minutes if you anchor on one workload instead of browsing randomly."],useWhen:["You need to assemble a workload path for APIs, analytics, internal platforms, or enterprise governance.","You want to compare managed Azure services with container, VM, or hybrid alternatives.","Identity, landing zones, and operating posture matter as much as feature coverage."],caseStudy:["Scenario: modernize an internal business application into an Azure-hosted API and analytics platform.","Tension: identity integration, network boundaries, data movement, and platform ownership all shape the design.","Study lens: map the workload from ingress to compute, data, secrets, and monitoring before naming products."],vocabulary:["Landing zone: the foundational subscription, policy, identity, and network setup for Azure workloads.","Control plane: the management surface used to configure and govern services.","Managed runtime: a service that removes part of the infrastructure burden from the team.","Observability baseline: the minimum logs, metrics, traces, and alerts needed to run safely."],practicePrompts:["Which Azure services are core to the workload and which only support operations?","Where would managed services reduce toil without creating hidden constraints?","What identity and network assumptions should be verified before any service choice?"],related:[{key:"cloud-platforms-comparison",label:"Cloud Platforms Comparison",reason:"Use this when Azure is one option among several clouds."},{key:"well-architected-frameworks",label:"Well-Architected Frameworks",reason:"Follow this to review the design after the service shortlist is clear."},{key:"field-atlas",label:"Data Engineering Field Atlas",reason:"Helpful if the Azure workload centers on pipelines, warehousing, or governance."}]},"aws-cloud-services":{startHere:["Best for: teams narrowing AWS choices by workload shape instead of memorizing service names.","Prerequisites: basic cloud building blocks and a concrete workload to study against.","Estimated first pass: 40 to 70 minutes if you move by journey and category, not alphabetically."],useWhen:["You need to shortlist compute, storage, database, eventing, and operations services for a real workload.","You want sharper `use X vs Y` comparisons for databases, runtimes, queues, and analytics.","Managed convenience versus control is one of the main design tensions."],caseStudy:["Scenario: build a B2B SaaS API platform with event-driven workflows, analytics, and tenant-aware operations.","Tension: service sprawl grows quickly unless compute, data, messaging, and monitoring choices stay deliberate.","Study lens: design the smallest viable AWS stack first, then add security, observability, and scale concerns."],vocabulary:["Shared responsibility: which parts AWS handles versus what your team must still secure and operate.","Managed service bias: preferring higher-level services unless a lower-level option solves a real gap.","Control plane vs data plane: management APIs versus the actual workload traffic path.","Blast radius: the scope of impact when one component, policy, or region fails."],practicePrompts:["Where would serverless help this workload, and where would it hide important constraints?","Which AWS services are easy to confuse but serve different operating models?","What would you review before declaring the first architecture production-ready?"],related:[{key:"cloud-platforms-comparison",label:"Cloud Platforms Comparison",reason:"Translate AWS choices into multi-cloud language and constraints."},{key:"well-architected-frameworks",label:"Well-Architected Frameworks",reason:"Use this to pressure-test reliability, cost, and operations after design."},{key:"system-design-ai-workbench",label:"System Design Atlas",reason:"Helpful for reasoning about queues, caches, storage, and failures before vendor mapping."}]},"gcp-cloud-services":{startHere:["Best for: teams learning GCP through analytics, managed runtimes, AI services, and globally distributed app patterns.","Prerequisites: core cloud concepts plus some familiarity with application or data platform design.","Estimated first pass: 40 to 70 minutes if you follow a workload journey."],useWhen:["You need a structured view of GCP compute, data, networking, AI, and platform operations.","You want to understand where GCP feels especially strong for managed analytics and developer workflows.","You are translating AWS or Azure mental models into GCP service families."],caseStudy:["Scenario: launch a globally available product that mixes APIs, event processing, analytics, and model-backed features.","Tension: one platform must balance global delivery, developer velocity, analytics depth, and operations.","Study lens: compare Cloud Run, GKE, BigQuery, Vertex AI, and networking choices through one workload narrative."],vocabulary:["Managed analytics plane: the warehousing and processing layer optimized for large-scale data work.","Service perimeter: the security boundary around data access and platform usage.","Runtime portability: how easily application code moves between managed and lower-level options.","Operational surface area: how much day-two ownership a service creates."],practicePrompts:["When does Cloud Run beat a heavier container platform for application teams?","Which GCP services should be compared together before you commit to an analytics stack?","How would you explain this GCP design to a team that mostly knows AWS?"],related:[{key:"cloud-platforms-comparison",label:"Cloud Platforms Comparison",reason:"Helpful when you need team-fit and portability language across clouds."},{key:"well-architected-frameworks",label:"Well-Architected Frameworks",reason:"Use this to turn the GCP architecture into a reviewable operating checklist."},{key:"genai-llm-systems",label:"GenAI & LLM Systems",reason:"Useful if the GCP workload centers on retrieval and model-serving products."}]},"cloud-platforms-comparison":{startHere:["Best for: choosing a cloud, comparing migrations, or translating one platform architecture into another.","Prerequisites: basic familiarity with at least one major cloud and the workload you are comparing.","Estimated first pass: 35 to 60 minutes if you stay anchored to constraints instead of vendor marketing."],useWhen:["You need to choose a cloud by team fit, governance model, workload shape, or data gravity.","You want service-equivalency language without pretending every product maps one-to-one.","The real debate is portability, operating model, and org readiness rather than raw feature count."],caseStudy:["Scenario: choose a primary cloud for a SaaS product with analytics, internal AI tooling, and strict enterprise identity needs.","Tension: the technically strongest option is not always the one the team can operate best.","Study lens: score clouds by constraints such as skills, identity alignment, data ecosystem, and cost predictability."],vocabulary:["Portability: how much of the system can move without a major redesign.","Data gravity: the tendency for tools and services to cluster around where data already lives.","Identity plane: the way users, services, and policies are modeled across the platform.","Egress sensitivity: how much network transfer pricing or latency affects the architecture."],practicePrompts:["Which cloud differences matter for this workload, and which are mostly cosmetic?","Where would lock-in be acceptable because it buys a major operating advantage?","How would you defend a cloud choice to both engineers and finance or governance stakeholders?"],related:[{key:"aws-cloud-services",label:"AWS Cloud Services",reason:"Drill into AWS once the comparison tells you where it fits."},{key:"azure-cloud-services",label:"Azure Cloud Services",reason:"Helpful if enterprise identity, Microsoft ecosystem, or governance is central."},{key:"gcp-cloud-services",label:"Google Cloud Services",reason:"Use this when analytics, managed runtimes, or developer workflow is a major factor."}]},"well-architected-frameworks":{startHere:["Best for: architecture reviews, migration checklists, and post-incident design reflection.","Prerequisites: a workload sketch, some production context, and willingness to discuss tradeoffs openly.","Estimated first pass: 30 to 55 minutes if you use one concrete workload while reading."],useWhen:["You need a structured review after an incident, redesign, migration, or cost shock.","Teams are debating opinions and need shared evidence around reliability, security, cost, and operations.","You want a reusable checklist instead of a one-off architecture discussion."],caseStudy:["Scenario: review an ecommerce platform after a traffic spike caused slow checkout, alert noise, and rising cost.","Tension: reliability improvements, tighter security, and better observability may raise complexity or spend.","Study lens: walk pillar by pillar, but force every recommendation to name its tradeoff."],vocabulary:["SLO: a concrete reliability target tied to user experience or business expectations.","Blast radius: the amount of the system a failure can affect.","Game day: an intentional exercise that tests incident readiness and resilience assumptions.","Cost guardrail: a budget or limit that prevents invisible spending growth."],practicePrompts:["What evidence would prove this system is resilient rather than merely documented?","Which recommendation improves one pillar while potentially hurting another?","How often should this workload be reviewed as it changes?"],related:[{key:"cloud-platforms-comparison",label:"Cloud Platforms Comparison",reason:"Helpful when the review feeds a cloud choice or migration question."},{key:"system-design-ai-workbench",label:"System Design Atlas",reason:"Use this for the underlying architecture patterns behind the checklist."},{key:"aws-cloud-services",label:"AWS Cloud Services",reason:"Map review findings back into concrete service choices on a platform."}]}};const GUIDE_ENHANCEMENTS={...GUIDE_CORE_CONTENT,...GUIDE_PRODUCT_CONTENT,...GUIDE_CLOUD_CONTENT};const GUIDE_LIBRARY=definitions.reduce((library,item)=>{if(item.key){library[item.key]=item;}
return library;},{});const locationPath=window.location.pathname.replace(/\\/g,"/");const definition=mergeGuideDefinition(definitions.find((item)=>item.match.test(locationPath)));if(!definition){return;}
const COVER_STYLE_ID="visualizer-shell-cover-style";const COVER_ID="visualizerShellCover";const SHORTCUTS_ID="visualizerShellShortcuts";const GUIDE_ID="visualizerShellGuide";let primerTimer=null;let mobileNavSyncTimer=null;const workbenchState={activePage:null};const PRIMER_RECIPES=[{test:/linear regression|least squares/,simple:"Linear regression is a way to draw the best straight line through many examples so we can guess a number for a new example.",analogy:"Imagine dots on graph paper and a ruler in your hand. You slide the ruler until it sits close to most dots. That ruler is the model.",steps:["Start with facts we know, like size of a house or hours studied.","Give each fact a weight to show how much it matters.","Add those weighted facts together to make one guess.","Keep adjusting the weights until the guesses are close to the real answers."],why:"It is useful when the answer is a number, such as price, temperature, score, distance, or sales.",watch:["It works best when the pattern is roughly straight, not very curvy.","A few strange examples can pull the line in the wrong direction.","A good line does not prove one thing caused the other."]},{test:/logistic regression|classification|precision|recall|f1|roc|auc/,simple:"This is a yes-or-no sorter. It studies clues and decides which group something most likely belongs to.",analogy:"Think of two baskets on the floor. The model looks at the clues on each object and chooses the basket that fits best.",steps:["Read the clues, such as words in an email or numbers in a health report.","Turn those clues into one score.","Change the score into a chance between 0 and 1.","Pick a class by comparing that chance to a cutoff."],why:"It helps with spam detection, fraud checks, medical screening, and other tasks where the answer is a label.",watch:["The cutoff matters. A bad cutoff can miss important cases.","Accuracy alone can hide problems when one class is rare.","A confident score is not always a well-calibrated score."]},{test:/decision tree|random forest|bagging|boost|xgboost|lightgbm|adaboost|ensemble/,simple:"A tree model learns a chain of little questions. An ensemble uses many such models together so the final answer is stronger.",analogy:"It is like playing a guessing game: 'Is it heavy?' 'Is it round?' 'Is it red?' Each answer sends you down a path.",steps:["Choose a question that separates the examples well.","Split the data into smaller groups based on the answer.","Keep asking questions until each group is easier to predict.","For ensembles, combine many trees by voting or by correcting earlier mistakes."],why:"These models are strong general-purpose tools because they can learn bent, messy patterns without much manual feature work.",watch:["A single deep tree can memorize noise.","Huge ensembles can be harder to explain and slower to run.","Good scores can still come from leaked or messy data."]},{test:/support vector|svm|svr/,simple:"A support vector machine tries to draw the safest boundary between groups by leaving the widest possible gap.",analogy:"Imagine two teams standing on the floor. You stretch a rope between them and try to keep the rope as far from both teams as you can.",steps:["Look for the border that separates classes.","Push that border to create the largest margin, or safe gap.","Use the most important nearby points, called support vectors, to hold the border in place.","For curved patterns, map the data into a space where separation is easier."],why:"It can work very well when the border between groups is clear but not easy to see in the original space.",watch:["Large datasets can make training slow.","Picking the wrong kernel or settings can hurt a lot.","Scores are not naturally easy to interpret as probabilities."]},{test:/k-nearest neighbors|knn/,simple:"K-nearest neighbors makes a guess by looking at the most similar examples nearby.",analogy:"If you forget what an animal is, you look at the few animals standing closest to it and copy the group most of them belong to.",steps:["Store the old examples.","Measure how close the new example is to each old example.","Pick the nearest few neighbors.","Vote among them or average their numbers."],why:"It is simple and often easy to teach because it uses the idea that similar things tend to behave similarly.",watch:["It can get slow when there are many stored examples.","Distance works poorly when features are on very different scales.","Too many noisy neighbors can confuse the answer."]},{test:/naive bayes|probabilistic graphical model|gaussian process|hypothesis testing|statistical/,simple:"Probabilistic models talk in chances. They ask, 'Given these clues, how likely is each answer?'",analogy:"It is like hearing footsteps, seeing wet shoes, and guessing whether it rained outside. Each clue changes your belief a little.",steps:["Start with a belief about how common each answer is.","See how likely the clues would be under each answer.","Update the belief after each clue.","Choose the answer with the strongest final belief or keep the full probability."],why:"They are helpful when you want uncertainty, not just a single hard answer.",watch:["Simple assumptions can be unrealistic.","Bad probability calibration can mislead decisions.","People often treat uncertain outputs as certain facts."]},{test:/k-means|dbscan|clustering|gmm|hierarchical/,simple:"Clustering groups similar things together when no teacher has already labeled them.",analogy:"Imagine a mixed box of buttons. You sort them into piles by noticing which ones look alike, even though nobody gave you category names first.",steps:["Look at the features of each item.","Measure which items are similar or close.","Build groups based on centers, density, or merge rules.","Check whether the groups are meaningful in the real world."],why:"It helps you discover patterns, customer segments, strange behavior, or natural structure hiding in raw data.",watch:["A cluster is not automatically a real or useful category.","Different algorithms make different assumptions about shape and density.","Scaling and noise can change the groups a lot."]},{test:/principal component|pca|t-sne|tsne|umap|dimensionality/,simple:"Dimensionality reduction squeezes a big, complicated space into a smaller one while trying to keep the most useful structure.",analogy:"It is like folding a giant paper map so it still shows the main roads but fits in your pocket.",steps:["Start with data that has many columns or features.","Find which directions carry the most useful variation.","Build a smaller set of new directions.","Use that smaller view for plotting, noise reduction, or faster modeling."],why:"It helps you visualize, compress, and simplify data that is otherwise too large to see clearly.",watch:["A pretty 2D picture can still hide important structure.","Some methods are great for visualization but not for downstream distance calculations.","Reduced dimensions are new combinations, not the original features."]},{test:/autoencoder|variational autoencoder|vae|anomaly detection/,simple:"An autoencoder learns how to shrink information into a small code and then rebuild it. If it rebuilds badly, something may be unusual.",analogy:"Think of packing a toy set into a tiny box and then unpacking it again. If a new toy does not fit the pattern, the rebuilt version looks wrong.",steps:["Feed the model an example.","Compress it into a short hidden code.","Expand that code back into a reconstruction.","Train the model to make the reconstruction close to the original."],why:"It is useful for compression, denoising, feature learning, and spotting examples that do not look normal.",watch:["A too-powerful model may memorize instead of learn structure.","A low reconstruction error does not always mean true understanding.","VAE outputs are smoother because they learn a probabilistic latent space."]},{test:/neural network|mlp|activation|loss function|regularization|bias-variance|gradient descent|optimizer|backprop|dropout|batch norm|layer norm|weight initialization|vanishing gradient|softmax/,simple:"A neural network is a stack of tiny math units that slowly learns which patterns matter by making mistakes and correcting them.",analogy:"Picture many little knobs on a music mixer. Training means turning the knobs a little, checking the sound, and turning them again until it improves.",steps:["Send the input forward through layers to make a guess.","Measure how wrong the guess was with a loss function.","Send the error backward so each weight learns its share of the mistake.","Update the weights and repeat many times."],why:"This idea powers many modern AI systems because it can learn very complex patterns from images, text, sound, and numbers.",watch:["Bigger models need more data, more compute, and better regularization.","Training can become unstable if learning rates, normalization, or initialization are poor.","A low training loss does not guarantee good real-world behavior."]},{test:/attention|transformer|token|embedding|rope|kv cache|causal|bert|word2vec|rag|in-context learning|prompt tuning|prefix tuning|lora|qlora|instruction tuning|rlhf|dpo|reward modeling|decoding/,simple:"Transformer-style models break text into tokens, turn them into vectors, and let each token look at other useful tokens before making the next decision.",analogy:"It is like reading with many highlighters at once. Each word decides which earlier words deserve attention before it answers.",steps:["Split text into tokens and turn them into embeddings.","Use attention to compare tokens and mix in the important context.","Pass the richer representation through more layers.","Generate, classify, retrieve, or reason using the final token states."],why:"This is the core idea behind modern language models, chatbots, retrieval systems, and many multimodal tools.",watch:["Tokenization changes what the model can easily represent.","Long context is not the same as perfect memory or perfect recall.","Fluent output can still be wrong, stale, or ungrounded."]},{test:/convolution|cnn|vision transformer|vit|object detection|segmentation|u-net|clip|swin|multimodal|vision-language|llava/,simple:"Vision models learn to look for patterns in images, from tiny edges to full objects and scenes.",analogy:"It is like first noticing lines, then corners, then eyes, wheels, or doors, and finally understanding the whole picture.",steps:["Read the image as numbers.","Find local patterns or patches.","Combine small patterns into bigger shapes and objects.","Use the final features to classify, detect, segment, or connect images with text."],why:"These models power photo search, medical imaging, self-driving perception, OCR, and image generation systems.",watch:["Image data often hides bias in lighting, angle, background, and label quality.","Detection and segmentation need more than just one class label.","A strong benchmark score may still fail on unusual real-world images."]},{test:/recurrent|rnn|lstm|gru|seq2seq|mamba|ssm|time series|forecast/,simple:"Sequence models care about order. They remember what came before so they can better understand what comes next.",analogy:"When you hear a song, each note makes more sense because you remember the notes just before it.",steps:["Read one item in the sequence at a time.","Keep a hidden memory of what has happened so far.","Update that memory as new items arrive.","Use the memory to predict the next value, class, or output sequence."],why:"They help with language, time series, speech, forecasting, and any task where order changes meaning.",watch:["Long sequences are hard when memory fades.","A model can learn timing patterns without learning real causes.","Forecasting becomes shaky when the future behaves unlike the past."]},{test:/gan|diffusion|autoregressive|normalizing flow|stable diffusion|classifier-free guidance|dit|generative/,simple:"Generative models learn the pattern of real data so they can create new examples that look or sound believable.",analogy:"It is like learning the style of many drawings and then making a brand-new drawing in a similar style.",steps:["Study many real examples.","Learn the rules or distribution behind those examples.","Start from noise, a prompt, or a partial example.","Create a new sample step by step."],why:"They are used for image creation, text generation, speech synthesis, simulation, and creative tools.",watch:["Good-looking output can still be wrong or inconsistent.","Generated data can copy bias or private details from training data.","Sampling settings strongly change quality, speed, and variety."]},{test:/reinforcement learning|bandit|q-learning|dqn|ppo|actor-critic|gae|exploration/,simple:"Reinforcement learning teaches an agent by reward. The agent tries actions, sees what happens, and slowly learns which actions bring better long-term results.",analogy:"It is like training a game player. Good moves earn points, bad moves lose points, and the player gets smarter after many rounds.",steps:["Observe the current situation, called the state.","Choose an action.","Receive a reward and move to a new state.","Update the policy or value estimate so future choices improve."],why:"It helps in games, robotics, recommendations, resource control, and other problems where actions change the future.",watch:["Bad reward design teaches bad behavior.","Exploration is needed, but too much can be wasteful or unsafe.","A model can look good in simulation and fail in the real world."]},{test:/feature engineering|preprocessing|cleaning|cross validation|hyperparameter|evaluation metric|model evaluation|regression evaluation|classification evaluation|clustering evaluation/,simple:"This topic is about preparing data and checking models honestly so you can trust the result instead of being fooled by a lucky score.",analogy:"It is like cleaning your glasses before reading and then taking more than one test before saying you have learned the lesson.",steps:["Clean and shape the data so the model gets sensible inputs.","Pick metrics that match the real goal.","Test the model on data it did not learn from.","Tune settings carefully without peeking at the final exam."],why:"A strong algorithm is not enough. Good data preparation and fair testing are what make results believable.",watch:["Leaking future or target information creates fake success.","One metric rarely tells the whole story.","Tuning on the test set quietly ruins the test."]},{test:/pipeline|mlops|orchestration|lineage|governance|warehouse|lakehouse|streaming|batch|cdc|semantic|quality|recovery|observability/,simple:"A pipeline is the path data follows from its starting place to the people or systems that need it. Good pipeline design keeps that path clean, steady, and trustworthy.",analogy:"Think of a city water system. Water must be collected, cleaned, stored, checked, and delivered without leaks or mix-ups.",steps:["Collect data from sources.","Validate, clean, and reshape it.","Store it in the right layer for later use.","Schedule and monitor the flow so problems are caught and fixed."],why:"This matters because useful dashboards, models, and reports all depend on dependable data flow.",watch:["Pipelines fail in real life because of bad inputs, late arrivals, and schema changes.","Without ownership and monitoring, small issues grow quietly.","Fast pipelines are not enough if the data is wrong."]},{test:/system stack|maturity ladder|architecture|blueprint|request flow|service explorer|category radar|platform constellation|well-architected|reliability|security|cost optimization|operational excellence|performance efficiency|sustainability/,simple:"This topic helps you see a big technical system as smaller jobs working together. That makes complex architecture easier to understand and review.",analogy:"It is like looking at a school from above. You can see classrooms, hallways, the office, and the playground, and each part has its own job.",steps:["Name the main parts of the system.","See what each part is responsible for.","Follow how requests, data, or users move between parts.","Check where failures, delays, or extra cost could appear."],why:"Architecture gets clearer when you stop memorizing product names and start seeing jobs, connections, and tradeoffs.",watch:["Big diagrams can hide the true source of state and failure.","A service name does not explain how or why it should be used.","Reliability, security, and cost must be reviewed together."]},{test:/interpretability|xai|causal inference|experimental design|ethics|fairness|privacy|distributional shift|ood detection|calibration/,simple:"These topics ask an important question: can we trust what the model is doing, and is it behaving fairly and safely?",analogy:"It is like checking not only whether a student got the answer right, but also whether they used a fair method and can explain their thinking.",steps:["Inspect how the model made its decision or how certain it is.","Test for unfair patterns, drift, or weak assumptions.","Compare results across groups, settings, or experiments.","Use that evidence to improve the data, model, or policy."],why:"A powerful model is only truly useful when people can trust its behavior in the real world.",watch:["An explanation tool can be suggestive without being the full truth.","Fairness is not one single number.","A model that worked yesterday can drift as the world changes."]},{test:/python|decorator|generator|iterator|context manager|numpy|pandas|object model|dunder|import system/,simple:"Python topics are easiest when you think in terms of values, objects, and clear step-by-step instructions instead of trying to memorize many special cases.",analogy:"It is like building with blocks. Small simple pieces connect to make bigger programs.",steps:["Start with values such as text, numbers, and collections.","Use functions or classes to organize behavior.","Let loops, iterators, or libraries move through the data.","Read the result and refine the code until it is clear and correct."],why:"Python is used everywhere because it lets people express useful ideas in a readable way.",watch:["Shared mutable data can surprise you.","Imports and scope rules matter more than beginners expect.","Readable code is usually better than clever code."]}];window.addEventListener("load",()=>{ensureStyle();applyFrameLayout();applyStudyWorkbenchLayout();injectLearningPrimers();applyMobileBreadcrumbNavigation();observeDynamicContent();});function ensureStyle(){if(document.getElementById(COVER_STYLE_ID)){return;}
const style=document.createElement("style");style.id=COVER_STYLE_ID;style.textContent=`
      .visualizer-shell-cover {
        margin: 16px auto 18px;
        width: min(1100px, calc(100% - 28px));
        border: 1px solid var(--border, #243244);
        border-radius: 8px;
        background:
          linear-gradient(135deg, rgba(37, 99, 235, 0.1), transparent 38%),
          var(--surface, var(--panel, #111827));
        box-shadow: 0 10px 24px rgba(2, 6, 23, 0.14);
      }

      .visualizer-shell-cover__inner {
        display: grid;
        grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.78fr);
        gap: 16px;
        padding: 18px;
      }

      .visualizer-shell-cover__eyebrow {
        margin: 0 0 6px;
        color: var(--accent, #2563eb);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .visualizer-shell-cover__title {
        margin: 0;
        color: var(--text, #e5eefc);
        font-size: clamp(1.2rem, 1.02rem + 0.8vw, 1.8rem);
        font-weight: 800;
        line-height: 1.08;
        letter-spacing: -0.03em;
        background: linear-gradient(125deg, var(--text, #e5eefc) 32%, var(--accent, #2563eb));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .visualizer-shell-cover__desc {
        margin: 10px 0 0;
        color: var(--text-muted, var(--muted, #9db0c9));
        max-width: 60ch;
        font-size: 0.92rem;
        line-height: 1.6;
      }

      .visualizer-shell-cover__stats {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
      }

      .visualizer-shell-stat {
        padding: 12px;
        border: 1px solid var(--border, #243244);
        border-radius: 8px;
        background: var(--surface-2, var(--panel-2, rgba(255,255,255,0.04)));
      }

      .visualizer-shell-stat strong {
        display: block;
        color: var(--text, #e5eefc);
        font-size: 1.08rem;
        line-height: 1.1;
      }

      .visualizer-shell-stat span {
        display: block;
        margin-top: 4px;
        color: var(--text-muted, var(--muted, #9db0c9));
        font-size: 0.78rem;
      }

      .visualizer-shell-shortcuts {
        margin: 0 auto 18px;
        width: min(1100px, calc(100% - 28px));
      }

      .visualizer-shell-shortcuts__grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 14px;
      }

      .visualizer-shell-shortcut {
        display: grid;
        gap: 8px;
        width: 100%;
        padding: 18px;
        border: 1px solid var(--border, #243244);
        border-radius: 8px;
        background: var(--surface, var(--panel, #111827));
        color: inherit;
        font: inherit;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
        transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease,
          background-color 160ms ease;
      }

      .visualizer-shell-shortcut:hover,
      .visualizer-shell-shortcut:focus-visible {
        transform: translateY(-2px);
        border-color: var(--accent, #2563eb);
        box-shadow: 0 8px 24px rgba(2, 6, 23, 0.18);
      }

      .visualizer-shell-shortcut__kicker {
        color: var(--accent, #2563eb);
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .visualizer-shell-shortcut__title {
        color: var(--text, #e5eefc);
        font-size: 0.95rem;
        font-weight: 700;
        line-height: 1.3;
      }

      .visualizer-shell-shortcut__desc {
        color: var(--text-muted, var(--muted, #9db0c9));
        font-size: 0.8rem;
        line-height: 1.55;
      }

      .visualizer-shell-shortcut__meta {
        display: inline-flex;
        align-items: center;
        justify-self: start;
        padding: 0.22rem 0.62rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--accent, #2563eb) 14%, transparent);
        color: var(--accent, #2563eb);
        font-size: 0.7rem;
        font-weight: 700;
      }

      .visualizer-shell-guide {
        margin: 0 auto 18px;
        width: min(1100px, calc(100% - 28px));
        padding: 18px;
        border: 1px solid var(--border, #243244);
        border-radius: 8px;
        background: var(--surface, var(--panel, #111827));
        box-shadow: 0 10px 24px rgba(2, 6, 23, 0.14);
      }

      .visualizer-shell-guide__header {
        display: grid;
        gap: 8px;
        margin-bottom: 14px;
      }

      .visualizer-shell-guide__eyebrow {
        margin: 0;
        color: var(--accent, #2563eb);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .visualizer-shell-guide__title {
        margin: 0;
        color: var(--text, #e5eefc);
        font-size: clamp(1.1rem, 1rem + 0.45vw, 1.45rem);
        font-weight: 800;
        line-height: 1.2;
      }

      .visualizer-shell-guide__subtitle {
        margin: 0;
        color: var(--text-muted, var(--muted, #9db0c9));
        max-width: 70ch;
        font-size: 0.92rem;
        line-height: 1.6;
      }

      .visualizer-shell-guide__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 14px;
      }

      .visualizer-shell-guide__card {
        display: grid;
        gap: 10px;
        padding: 14px;
        border: 1px solid var(--border, #243244);
        border-radius: 8px;
        background: var(--surface-2, var(--panel-2, rgba(255,255,255,0.04)));
      }

      .visualizer-shell-guide__card-kicker {
        margin: 0;
        color: var(--accent, #2563eb);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .visualizer-shell-guide__card-copy {
        margin: 0;
        color: var(--text-muted, var(--muted, #9db0c9));
        font-size: 0.88rem;
        line-height: 1.6;
      }

      .visualizer-shell-guide__list {
        margin: 0;
        padding-left: 18px;
        color: var(--text-muted, var(--muted, #9db0c9));
      }

      .visualizer-shell-guide__list li + li {
        margin-top: 8px;
      }

      .visualizer-shell-guide__link-list {
        display: grid;
        gap: 12px;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .visualizer-shell-guide__link-item {
        display: grid;
        gap: 4px;
      }

      .visualizer-shell-guide__link {
        color: var(--accent, #2563eb);
        font-weight: 700;
        text-decoration: none;
      }

      .visualizer-shell-guide__link:hover,
      .visualizer-shell-guide__link:focus-visible {
        text-decoration: underline;
      }

      .visualizer-shell-guide__link-note {
        color: var(--text-muted, var(--muted, #9db0c9));
        font-size: 0.86rem;
        line-height: 1.55;
      }

      .header,
      .site-header,
      .topbar,
      .hdr {
        display: none !important;
      }

      body > header.hero {
        display: none !important;
      }

      .sidebar {
        top: 0 !important;
      }

      .quick-nav,
      .jump-nav,
      .steps-nav {
        top: 8px !important;
      }

      .visualizer-topic-primer {
        display: grid;
        gap: 14px;
        margin: 14px 0 18px;
        padding: 16px 18px;
        border: 1px solid color-mix(in srgb, var(--border, #243244) 82%, var(--accent, #2563eb));
        border-radius: 8px;
        background:
          linear-gradient(180deg, color-mix(in srgb, var(--surface-2, rgba(255,255,255,0.04)) 94%, transparent), color-mix(in srgb, var(--surface, #111827) 84%, transparent)),
          var(--surface-2, var(--panel-2, rgba(255,255,255,0.04)));
        box-shadow: 0 10px 28px rgba(2, 6, 23, 0.12);
        animation: visualizerPrimerReveal 260ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      .visualizer-topic-primer__bullets {
        display: grid;
        gap: 10px;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .visualizer-topic-primer__bullets li {
        position: relative;
        padding-left: 18px;
        color: var(--text-muted, var(--muted, #9db0c9));
        font-size: 0.9rem;
        line-height: 1.7;
      }

      .visualizer-topic-primer__bullets li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.72rem;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent, #2563eb);
        box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent, #2563eb) 18%, transparent);
      }

      .visualizer-topic-primer__refs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.55rem;
      }

      .visualizer-topic-primer__ref {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        min-height: 34px;
        padding: 0.45rem 0.72rem;
        border: 1px solid color-mix(in srgb, var(--border, #243244) 78%, var(--accent, #2563eb));
        border-radius: 999px;
        background: color-mix(in srgb, var(--surface, #111827) 86%, transparent);
        color: var(--text, #e5eefc);
        font-size: 0.82rem;
        line-height: 1.2;
        text-decoration: none;
        transition:
          transform 160ms ease,
          border-color 160ms ease,
          background 160ms ease,
          box-shadow 160ms ease;
      }

      .visualizer-topic-primer__ref:hover {
        transform: translateY(-1px);
        border-color: color-mix(in srgb, var(--accent, #2563eb) 76%, white);
        background: color-mix(in srgb, var(--surface-2, rgba(255,255,255,0.05)) 90%, transparent);
        box-shadow: 0 10px 20px rgba(2, 6, 23, 0.16);
      }

      .visualizer-mobile-breadcrumb,
      .visualizer-mobile-nav {
        display: none;
      }

      .visualizer-mobile-breadcrumb {
        position: sticky;
        top: 0;
        z-index: 160;
        align-items: center;
        justify-content: space-between;
        gap: 0.9rem;
        padding: 0.95rem 1rem;
        border-bottom: 1px solid var(--border, #243244);
        background: color-mix(in srgb, var(--surface, #111827) 88%, transparent);
        backdrop-filter: blur(18px);
      }

      .visualizer-mobile-breadcrumb__trail {
        display: grid;
        gap: 0.18rem;
        min-width: 0;
        text-align: left;
      }

      .visualizer-mobile-breadcrumb__group {
        color: var(--text-muted, var(--muted, #9db0c9));
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .visualizer-mobile-breadcrumb__topic {
        color: var(--text, #e5eefc);
        font-size: 0.94rem;
        font-weight: 700;
        line-height: 1.25;
      }

      .visualizer-mobile-breadcrumb__browse {
        flex: 0 0 auto;
        min-height: 36px;
        padding: 0.55rem 0.88rem;
        border: 1px solid color-mix(in srgb, var(--border, #243244) 76%, var(--accent, #2563eb));
        border-radius: 999px;
        background: color-mix(in srgb, var(--surface-2, rgba(255,255,255,0.04)) 90%, transparent);
        color: var(--text, #e5eefc);
        font-size: 0.8rem;
        font-weight: 600;
        transition: transform 150ms ease, border-color 150ms ease, background 150ms ease;
      }

      .visualizer-mobile-breadcrumb__browse:hover {
        transform: translateY(-1px);
        border-color: color-mix(in srgb, var(--accent, #2563eb) 76%, white);
      }

      .visualizer-mobile-nav {
        position: fixed;
        inset: 0;
        z-index: 320;
      }

      .visualizer-mobile-nav__scrim {
        position: absolute;
        inset: 0;
        background: rgba(2, 6, 23, 0.56);
      }

      .visualizer-mobile-nav__panel {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        max-height: min(78vh, 720px);
        display: grid;
        grid-template-rows: auto 1fr;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        border: 1px solid var(--border, #243244);
        background:
          linear-gradient(180deg, color-mix(in srgb, var(--surface-2, rgba(255,255,255,0.04)) 96%, transparent), color-mix(in srgb, var(--surface, #111827) 92%, transparent)),
          var(--surface, #111827);
        box-shadow: 0 -20px 60px rgba(2, 6, 23, 0.3);
        transform: translateY(104%);
        transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      body[data-mobile-nav-open="on"] .visualizer-mobile-nav {
        display: block;
      }

      body[data-mobile-nav-open="on"] .visualizer-mobile-nav__panel {
        transform: translateY(0);
      }

      .visualizer-mobile-nav__head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1rem 1rem 0.9rem;
        border-bottom: 1px solid var(--border, #243244);
      }

      .visualizer-mobile-nav__title {
        color: var(--text, #e5eefc);
        font-size: 0.98rem;
        font-weight: 700;
      }

      .visualizer-mobile-nav__close {
        width: 34px;
        height: 34px;
        flex: 0 0 auto;
        border: 1px solid var(--border, #243244);
        border-radius: 999px;
        background: color-mix(in srgb, var(--surface-2, rgba(255,255,255,0.04)) 90%, transparent);
        color: var(--text, #e5eefc);
        font-size: 1rem;
      }

      .visualizer-mobile-nav__body {
        overflow-y: auto;
        padding: 0.8rem 1rem 1rem;
      }

      .visualizer-mobile-nav__group + .visualizer-mobile-nav__group {
        margin-top: 1rem;
      }

      .visualizer-mobile-nav__group-title {
        margin-bottom: 0.55rem;
        color: var(--text-muted, var(--muted, #9db0c9));
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .visualizer-mobile-nav__list {
        display: grid;
        gap: 0.5rem;
      }

      .visualizer-mobile-nav__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.85rem;
        width: 100%;
        padding: 0.8rem 0.9rem;
        border: 1px solid var(--border, #243244);
        border-radius: 12px;
        background: color-mix(in srgb, var(--surface-2, rgba(255,255,255,0.04)) 88%, transparent);
        color: var(--text, #e5eefc);
        text-align: left;
      }

      .visualizer-mobile-nav__item.is-active {
        border-color: color-mix(in srgb, var(--accent, #2563eb) 78%, var(--border, #243244));
        background: color-mix(in srgb, var(--accent, #2563eb) 12%, transparent);
      }

      .visualizer-mobile-nav__item-label {
        min-width: 0;
        font-size: 0.92rem;
        line-height: 1.35;
      }

      .visualizer-mobile-nav__item-state {
        color: var(--text-muted, var(--muted, #9db0c9));
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      body[data-study-workbench="on"] .quick-nav {
        display: none !important;
      }

      .visualizer-study-workbench {
        display: flex;
        min-height: 100vh;
      }

      .visualizer-study-nav {
        width: 280px;
        flex-shrink: 0;
        position: sticky;
        top: 0;
        height: 100vh;
        overflow-y: auto;
        padding: 1.05rem 0 1.8rem;
        border-right: 1px solid var(--border, #243244);
        background: color-mix(in srgb, var(--surface, #111827) 88%, transparent);
        backdrop-filter: blur(18px);
      }

      .visualizer-study-nav__top {
        display: grid;
        gap: 0.65rem;
        padding: 0 1rem 1rem;
        margin-bottom: 0.65rem;
        border-bottom: 1px solid var(--border, #243244);
      }

      .visualizer-study-nav__title {
        color: var(--text, #e5eefc);
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .visualizer-study-nav__copy {
        color: var(--text-muted, var(--muted, #9db0c9));
        font-size: 0.8rem;
        line-height: 1.55;
      }

      .visualizer-study-nav__group {
        padding: 0.45rem 0;
      }

      .visualizer-study-nav__group-title {
        padding: 0.25rem 1rem 0.45rem;
        color: var(--text-muted, var(--muted, #9db0c9));
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .visualizer-study-nav__list {
        display: grid;
        gap: 2px;
      }

      .visualizer-study-nav__item {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.55rem;
        width: 100%;
        padding: 0.52rem 1rem 0.52rem 1.05rem;
        border-left: 2px solid transparent;
        border-radius: 0 8px 8px 0;
        background: transparent;
        color: var(--text-muted, var(--muted, #9db0c9));
        text-align: left;
        overflow: hidden;
        transition:
          transform 150ms ease,
          color 150ms ease,
          background 150ms ease,
          border-color 150ms ease,
          box-shadow 150ms ease;
      }

      .visualizer-study-nav__item:hover {
        background: color-mix(in srgb, var(--surface-2, rgba(255,255,255,0.04)) 88%, transparent);
        color: var(--text, #e5eefc);
        transform: translateX(2px);
      }

      .visualizer-study-nav__item.is-active {
        background: color-mix(in srgb, var(--surface-2, rgba(255,255,255,0.05)) 92%, transparent);
        color: var(--text, #e5eefc);
        border-left-color: var(--accent, #2563eb);
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,0.04),
          0 12px 24px rgba(2, 6, 23, 0.16);
      }

      .visualizer-study-nav__item::after {
        content: "";
        position: absolute;
        left: 1rem;
        right: 1rem;
        bottom: 0.45rem;
        height: 1px;
        background: linear-gradient(90deg, color-mix(in srgb, var(--accent, #2563eb) 75%, transparent), transparent);
        opacity: 0;
        transform: scaleX(0.45);
        transform-origin: left center;
        transition: opacity 180ms ease, transform 180ms ease;
      }

      .visualizer-study-nav__item:hover::after,
      .visualizer-study-nav__item.is-active::after {
        opacity: 0.8;
        transform: scaleX(1);
      }

      .visualizer-study-nav__dot {
        width: 7px;
        height: 7px;
        flex: 0 0 auto;
        border-radius: 50%;
        background: currentColor;
        opacity: 0.55;
        transition: transform 160ms ease, opacity 160ms ease, box-shadow 180ms ease;
      }

      .visualizer-study-nav__item:hover .visualizer-study-nav__dot {
        transform: scale(1.15);
      }

      .visualizer-study-nav__item.is-active .visualizer-study-nav__dot {
        opacity: 1;
        box-shadow: 0 0 10px currentColor;
        animation: visualizerNavPulse 2.4s ease-in-out infinite;
      }

      .visualizer-study-content {
        flex: 1;
        min-width: 0;
        overflow-y: auto;
        scroll-behavior: smooth;
      }

      .visualizer-study-page {
        display: none;
        padding: 2rem 2.5rem 3rem;
        max-width: var(--study-max-width, 1040px);
        opacity: 0;
        transform: translateY(10px);
        animation: visualizerStudyFade 240ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      .visualizer-study-page.is-active {
        display: block;
        opacity: 1;
        transform: translateY(0);
      }

      .visualizer-study-page > .hero {
        padding-top: 0 !important;
      }

      .visualizer-study-page > .section-card,
      .visualizer-study-page > .panel,
      .visualizer-study-page > .catalog-panel,
      .visualizer-study-page > .experience-layout,
      .visualizer-study-page > .category-panel,
      .visualizer-study-page > .explorer,
      .visualizer-study-page > .method,
      .visualizer-study-page > .footer {
        margin-top: 0 !important;
      }

      @keyframes visualizerStudyFade {
        from {
          opacity: 0;
          transform: translateY(10px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes visualizerPrimerReveal {
        from {
          opacity: 0;
          transform: translateY(8px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes visualizerNavPulse {
        0%,
        100% {
          box-shadow: 0 0 0 0 color-mix(in srgb, currentColor 22%, transparent);
        }

        50% {
          box-shadow: 0 0 0 6px color-mix(in srgb, currentColor 0%, transparent);
        }
      }

      .home-hero,
      .hero {
        gap: 18px;
      }

      .hero-card,
      .hero-copy,
      .hero__copy,
      .hero-visual,
      .hero__stats,
      .hero-side {
        border-radius: 8px;
      }

      .hero-card,
      .hero-copy,
      .hero__copy {
        padding: 22px;
      }

      .hero h1,
      .hero h2,
      .home-hero h1,
      .hero-title,
      .hero__copy h1 {
        font-size: clamp(1.7rem, 1.35rem + 1.15vw, 2.75rem);
        line-height: 1.06;
        letter-spacing: -0.035em;
        max-width: 15ch;
      }

      .hero-title {
        margin-top: 12px;
        margin-bottom: 10px;
      }

      .hero p,
      .hero__lede,
      .hero-copy p {
        max-width: 60ch;
      }

      @media (max-width: 900px) {
        .visualizer-shell-cover__inner,
        .visualizer-shell-cover__stats {
          grid-template-columns: 1fr;
        }

        .hero h1,
        .hero h2,
        .home-hero h1,
        .hero-title,
        .hero__copy h1 {
          max-width: none;
        }
      }

      @media (max-width: 980px) {
        body[data-mobile-breadcrumb="on"] .visualizer-mobile-breadcrumb {
          display: flex;
        }

        body[data-mobile-breadcrumb="on"] .visualizer-study-nav,
        body[data-mobile-breadcrumb="on"] .py-sidebar,
        body[data-mobile-breadcrumb="on"] .sidebar {
          display: none !important;
        }

        body[data-mobile-breadcrumb="on"] .visualizer-study-content,
        body[data-mobile-breadcrumb="on"] .py-content,
        body[data-mobile-breadcrumb="on"] .content {
          overflow: visible !important;
        }
      }

      @media (max-width: 760px) {
        .header,
        .site-header,
        .topbar,
        .hdr,
        .header-actions,
        .toolbar {
          flex-wrap: wrap;
        }

        .header-actions,
        .toolbar {
          width: 100%;
          justify-content: flex-start;
        }

        .quick-nav,
        .jump-nav,
        .steps-nav,
        .tab-row,
        .chip-row,
        .docs-links,
        .family-tabs,
        .mechanic-tabs,
        .hero-actions {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 4px;
        }

        .quick-nav::-webkit-scrollbar,
        .jump-nav::-webkit-scrollbar,
        .steps-nav::-webkit-scrollbar,
        .tab-row::-webkit-scrollbar,
        .chip-row::-webkit-scrollbar,
        .docs-links::-webkit-scrollbar,
        .family-tabs::-webkit-scrollbar,
        .mechanic-tabs::-webkit-scrollbar,
        .hero-actions::-webkit-scrollbar {
          display: none;
        }

        .quick-nav > *,
        .jump-nav > *,
        .steps-nav > *,
        .tab-row > *,
        .chip-row > *,
        .docs-links > *,
        .family-tabs > *,
        .mechanic-tabs > *,
        .hero-actions > * {
          flex: 0 0 auto;
        }

        .visualizer-shell-shortcuts {
          width: calc(100% - 24px);
          margin-bottom: 16px;
        }

        .visualizer-shell-shortcuts__grid {
          grid-template-columns: 1fr;
        }

        .visualizer-shell-guide {
          width: calc(100% - 24px);
          padding: 16px;
        }

        .visualizer-topic-primer {
          margin-inline: 0;
          padding: 14px;
        }

        .visualizer-study-workbench {
          display: block;
        }

        .visualizer-study-content {
          overflow: visible;
        }

        .visualizer-study-page {
          padding: 1.25rem 1rem 2rem;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .visualizer-topic-primer,
        .visualizer-topic-primer__ref,
        .visualizer-study-nav__item,
        .visualizer-study-nav__dot,
        .visualizer-study-page {
          animation: none !important;
          transition: none !important;
        }

        .visualizer-study-content {
          scroll-behavior: auto;
        }
      }
    `;document.head.appendChild(style);}
function insertCover(){if(document.documentElement.getAttribute("data-shell-cover")==="off"||document.getElementById(COVER_ID)){return;}
const cover=document.createElement("section");cover.id=COVER_ID;cover.className="visualizer-shell-cover";cover.innerHTML=`
      <div class="visualizer-shell-cover__inner">
        <div>
          <p class="visualizer-shell-cover__eyebrow">${escapeHtml(definition.category)}</p>
          <h1 class="visualizer-shell-cover__title">${escapeHtml(document.title.replace(/\s+(?:â€”|-).*$/, ""))}</h1>
          <p class="visualizer-shell-cover__desc">${escapeHtml(definition.description)}</p>
        </div>
        <div class="visualizer-shell-cover__stats">
          ${definition.stats.map((item) => {
            const value = typeof item.value === "function" ? item.value() : item.value;
            return `<article class="visualizer-shell-stat"><strong>${escapeHtml(String(value))}</strong><span>${escapeHtml(item.label)}</span></article>`;
          }).join("")}
        </div>
      </div>
    `;const anchor=findInsertAnchor();if(!anchor||!anchor.parentNode){document.body.insertBefore(cover,document.body.firstElementChild||null);return;}
if(anchor.nextSibling){anchor.parentNode.insertBefore(cover,anchor.nextSibling);}else{anchor.parentNode.appendChild(cover);}}
function insertShortcuts(){if(document.documentElement.getAttribute("data-shell-shortcuts")==="off"||document.getElementById(SHORTCUTS_ID)||document.querySelector(".section-grid .sec-card")){return;}
const items=getShortcutItems();if(items.length<2){return;}
const shortcuts=document.createElement("section");shortcuts.id=SHORTCUTS_ID;shortcuts.className="visualizer-shell-shortcuts";shortcuts.innerHTML=`
      <div class="visualizer-shell-shortcuts__grid">
        ${items.map((item, index) => `<${item.kind==="action"?"button type=\"button\"":"a href=\"#"+escapeHtml(item.id)+"\""}class="visualizer-shell-shortcut"data-shortcut-index="${index}"><span class="visualizer-shell-shortcut__kicker">Section ${String(index+1).padStart(2,"0")}</span><span class="visualizer-shell-shortcut__title">${escapeHtml(item.title)}</span><span class="visualizer-shell-shortcut__desc">${escapeHtml(item.description)}</span><span class="visualizer-shell-shortcut__meta">Open</span></${item.kind==="action"?"button":"a"}>`).join("")}
      </div>
    `;items.forEach((item)=>{if(!item.section.style.scrollMarginTop){item.section.style.scrollMarginTop="96px";}});items.forEach((item,index)=>{if(item.kind!=="action"){return;}
const shortcut=shortcuts.querySelector('[data-shortcut-index="'+index+'"]');if(!shortcut){return;}
shortcut.addEventListener("click",()=>{activateShortcut(item);});});const cover=document.getElementById(COVER_ID);if(cover&&cover.parentNode){if(cover.nextSibling){cover.parentNode.insertBefore(shortcuts,cover.nextSibling);}else{cover.parentNode.appendChild(shortcuts);}
return;}
const anchor=findInsertAnchor();if(!anchor||!anchor.parentNode){document.body.insertBefore(shortcuts,document.body.firstElementChild||null);return;}
if(anchor.nextSibling){anchor.parentNode.insertBefore(shortcuts,anchor.nextSibling);}else{anchor.parentNode.appendChild(shortcuts);}}
function insertGuide(){if(document.documentElement.getAttribute("data-shell-cover")==="off"||document.getElementById(GUIDE_ID)||!definition.guide){return;}
const guide=document.createElement("section");guide.id=GUIDE_ID;guide.className="visualizer-shell-guide";const guideCards=[renderGuideCard("Start Here",definition.guide.startHere),renderGuideCard("Best Study Order",definition.guide.studyPath),renderGuideCard("Use It When",definition.guide.useWhen),renderGuideCard("What This Helps With",definition.guide.workUses),renderGuideCard("Common Mistakes",definition.guide.pitfalls),renderGuideCard("Mini Case Study",definition.guide.caseStudy),renderGuideCard("Core Vocabulary",definition.guide.vocabulary),renderGuideCard("Check Your Understanding",definition.guide.questions),renderGuideCard("Practice Prompts",definition.guide.practicePrompts),renderGuideRelatedCard("Explore Next",definition.guide.related)].join("");guide.innerHTML=`
      <div class="visualizer-shell-guide__header">
        <p class="visualizer-shell-guide__eyebrow">Study Guide</p>
        <h2 class="visualizer-shell-guide__title">Read this before you dive in</h2>
        <p class="visualizer-shell-guide__subtitle">${escapeHtml(definition.guide.intro)}</p>
      </div>
      <div class="visualizer-shell-guide__grid">
        ${guideCards}
      </div>
    `;const shortcuts=document.getElementById(SHORTCUTS_ID);if(shortcuts&&shortcuts.parentNode){if(shortcuts.nextSibling){shortcuts.parentNode.insertBefore(guide,shortcuts.nextSibling);}else{shortcuts.parentNode.appendChild(guide);}
return;}
const cover=document.getElementById(COVER_ID);if(cover&&cover.parentNode){if(cover.nextSibling){cover.parentNode.insertBefore(guide,cover.nextSibling);}else{cover.parentNode.appendChild(guide);}
return;}
const anchor=findInsertAnchor();if(!anchor||!anchor.parentNode){document.body.insertBefore(guide,document.body.firstElementChild||null);return;}
if(anchor.nextSibling){anchor.parentNode.insertBefore(guide,anchor.nextSibling);}else{anchor.parentNode.appendChild(guide);}}
function applyFrameLayout(){[COVER_ID,SHORTCUTS_ID,GUIDE_ID].forEach((id)=>{const node=document.getElementById(id);if(node){node.remove();}});}
function getWorkbenchConfig(){if(/data-engineering\/field-atlas\//i.test(locationPath)){return{mountSelector:"main",title:"Data Engineering Atlas",copy:"Open one chapter at a time instead of scanning the whole field in one long scroll.",maxWidth:"1080px",pages:[{id:"home",label:"Home",group:"Overview",selectors:[".hero"]}],autoSelector:"section.section-card[id][data-nav]",autoGroup:"Topics"};}
if(/data-engineering\/azure-cloud-services\//i.test(locationPath)){return{mountSelector:".shell",title:"Azure Cloud Services",copy:"Move from overview to category study and then into the live service explorer.",maxWidth:"1320px",pages:[{id:"home",label:"Overview",group:"Guide",selectors:[".hero",".method"]},{id:"categories",label:"Category Studio",group:"Guide",selectors:[".category-panel"]},{id:"explorer",label:"Service Explorer",group:"Explore",selectors:[".explorer",".footer"]}]};}
if(/well-architected-frameworks\//i.test(locationPath)){return{mountSelector:".shell",title:"Well-Architected Atlas",copy:"Review one framework topic at a time like a study workbook, not a dashboard.",maxWidth:"1080px",pages:[{id:"home",label:"Home",group:"Overview",selectors:[".hero"]}],autoSelector:"section.section-card[id]",autoGroup:"Topics"};}
if(/system-design\/ai-workbench\//i.test(locationPath)){return{mountSelector:".shell",title:"System Design Atlas",copy:"Study one system-design idea at a time and keep the bigger map in the left rail.",maxWidth:"1100px",pages:[{id:"home",label:"Home",group:"Overview",selectors:[".hero"]}],autoSelector:"section.section-card[id]",autoGroup:"Topics"};}
return null;}
function applyStudyWorkbenchLayout(){const config=getWorkbenchConfig();if(!config){return;}
const mount=document.querySelector(config.mountSelector);if(!mount||mount.getAttribute("data-study-workbench")==="on"){return;}
const pages=buildWorkbenchPages(config,mount);if(!pages.length){return;}
const wrapper=document.createElement("div");wrapper.className="visualizer-study-workbench";wrapper.style.setProperty("--study-max-width",config.maxWidth||"1040px");const nav=document.createElement("aside");nav.className="visualizer-study-nav";const content=document.createElement("div");content.className="visualizer-study-content";wrapper.append(nav,content);mount.appendChild(wrapper);pages.forEach((page)=>{const section=document.createElement("section");section.className="visualizer-study-page";section.setAttribute("data-study-page",page.id);page.nodes.forEach((node)=>{section.appendChild(node);});content.appendChild(section);});renderWorkbenchNav(nav,config,pages);nav.addEventListener("click",(event)=>{const button=event.target.closest("[data-study-target]");if(!button){return;}
setWorkbenchPage(button.getAttribute("data-study-target"));content.scrollTop=0;});mount.setAttribute("data-study-workbench","on");document.body.setAttribute("data-study-workbench","on");setWorkbenchPage(resolveInitialWorkbenchPage(pages));}
function buildWorkbenchPages(config,mount){const pages=[];const used=new Set();(config.pages||[]).forEach((page)=>{const nodes=(page.selectors||[]).map((selector)=>mount.querySelector(selector)).filter(Boolean).filter((node)=>!used.has(node));if(!nodes.length){return;}
nodes.forEach((node)=>used.add(node));pages.push({id:page.id,label:page.label,group:page.group||"Topics",nodes});});if(config.autoSelector){Array.from(mount.querySelectorAll(config.autoSelector)).forEach((node)=>{if(used.has(node)){return;}
used.add(node);pages.push({id:node.id,label:resolveWorkbenchLabel(node),group:config.autoGroup||"Topics",nodes:[node]});});}
return pages;}
function resolveWorkbenchLabel(node){const title=cleanText((node.querySelector(".section-title, .hero-title, h2, h3, h4")||{}).textContent||"");if(title){return title;}
return formatId(node.id||"Topic");}
function renderWorkbenchNav(nav,config,pages){const grouped=pages.reduce((accumulator,page)=>{const group=page.group||"Topics";if(!accumulator[group]){accumulator[group]=[];}
accumulator[group].push(page);return accumulator;},{});nav.innerHTML=`
      <div class="visualizer-study-nav__top">
        <div class="visualizer-study-nav__title">${escapeHtml(config.title)}</div>
        <p class="visualizer-study-nav__copy">${escapeHtml(config.copy)}</p>
      </div>
      ${Object.keys(grouped).map((group) => `<section class="visualizer-study-nav__group"><h2 class="visualizer-study-nav__group-title">${escapeHtml(group)}</h2><div class="visualizer-study-nav__list">${grouped[group].map((page)=>`
              <button class="visualizer-study-nav__item" type="button" data-study-target="${escapeHtml(page.id)}">
                <span class="visualizer-study-nav__dot" aria-hidden="true"></span>
                <span>${escapeHtml(page.label)}</span>
              </button>
            `).join("")}</div></section>`).join("")}
    `;}
function resolveInitialWorkbenchPage(pages){const hash=String(window.location.hash||"").replace(/^#/,"");if(hash&&pages.some((page)=>page.id===hash)){return hash;}
return pages[0].id;}
function setWorkbenchPage(pageId){if(!pageId){return;}
workbenchState.activePage=pageId;document.querySelectorAll(".visualizer-study-page").forEach((page)=>{page.classList.toggle("is-active",page.getAttribute("data-study-page")===pageId);});document.querySelectorAll(".visualizer-study-nav__item").forEach((item)=>{const isActive=item.getAttribute("data-study-target")===pageId;item.classList.toggle("is-active",isActive);item.setAttribute("aria-pressed",isActive?"true":"false");});if(window.location.hash!==`#${pageId}`){try{window.history.replaceState(null,"",`#${pageId}`);}catch(error){window.location.hash=pageId;}}
scheduleMobileBreadcrumbSync();}
function applyMobileBreadcrumbNavigation(){const source=findMobileNavSource();if(!source){document.body.removeAttribute("data-mobile-breadcrumb");return;}
const mount=getMobileBreadcrumbMount(source);if(!mount){return;}
document.body.setAttribute("data-mobile-breadcrumb","on");let breadcrumb=document.getElementById("visualizerMobileBreadcrumb");if(!breadcrumb){breadcrumb=document.createElement("div");breadcrumb.id="visualizerMobileBreadcrumb";breadcrumb.className="visualizer-mobile-breadcrumb";breadcrumb.innerHTML=`
        <button class="visualizer-mobile-breadcrumb__trail" type="button" data-mobile-nav-toggle></button>
        <button class="visualizer-mobile-breadcrumb__browse" type="button" data-mobile-nav-toggle>Browse</button>
      `;}
if(breadcrumb.parentNode!==mount){mount.insertBefore(breadcrumb,mount.firstChild||null);}
let drawer=document.getElementById("visualizerMobileNav");if(!drawer){drawer=document.createElement("div");drawer.id="visualizerMobileNav";drawer.className="visualizer-mobile-nav";drawer.innerHTML=`
        <div class="visualizer-mobile-nav__scrim" data-mobile-nav-close></div>
        <section class="visualizer-mobile-nav__panel" aria-label="Topic navigation">
          <div class="visualizer-mobile-nav__head">
            <div class="visualizer-mobile-nav__title">Browse Topics</div>
            <button class="visualizer-mobile-nav__close" type="button" aria-label="Close topic navigation" data-mobile-nav-close>Close</button>
          </div>
          <div class="visualizer-mobile-nav__body"></div>
        </section>
      `;document.body.appendChild(drawer);}
bindMobileBreadcrumbEvents(breadcrumb,drawer);renderMobileBreadcrumb(source,breadcrumb,drawer);observeMobileNavSource(source.root);}
function findMobileNavSource(){const workbenchNav=document.querySelector(".visualizer-study-nav");if(workbenchNav&&workbenchNav.querySelector(".visualizer-study-nav__item")){return{type:"workbench",root:workbenchNav,itemSelector:".visualizer-study-nav__item",activeClass:"is-active",groupLabel(button){const group=button.closest(".visualizer-study-nav__group");return cleanText(((group&&group.querySelector(".visualizer-study-nav__group-title"))||{}).textContent||"");}};}
const pythonNav=document.querySelector(".py-sidebar");if(pythonNav&&pythonNav.querySelector(".py-sidebar__item")){return{type:"python",root:pythonNav,itemSelector:".py-sidebar__item",activeClass:"is-active",groupLabel(button){const group=button.closest(".py-sidebar__group");return cleanText(((group&&group.querySelector(".py-sidebar__group-title"))||{}).textContent||"");}};}
const deepNav=document.querySelector(".sidebar .sb-item")?document.querySelector(".sidebar"):null;if(deepNav&&deepNav.querySelector(".sb-item")){return{type:"deep-learning",root:deepNav,itemSelector:".sb-item",activeClass:"active",groupLabel(button){const group=button.closest(".sb-section");return cleanText(((group&&group.querySelector(".sb-section-title"))||{}).textContent||"");}};}
const modelNav=document.querySelector(".sidebar .tab-btn")?document.querySelector(".sidebar"):null;if(modelNav&&modelNav.querySelector(".tab-btn")){return{type:"ml-models",root:modelNav,itemSelector:".tab-btn",activeClass:"active",groupLabel(button){const group=button.closest(".sidebar-group");return cleanText(((group&&group.querySelector(".sidebar-group-label"))||{}).textContent||"");}};}
return null;}
function getMobileBreadcrumbMount(source){if(!source){return null;}
if(source.type==="workbench"){return document.querySelector(".visualizer-study-content");}
if(source.type==="python"){return document.querySelector(".py-content");}
return document.getElementById("content")||document.querySelector(".content")||document.querySelector("main");}
function getMobileNavSnapshot(source){if(!source||!source.root){return[];}
return Array.from(source.root.querySelectorAll(source.itemSelector)).filter((button)=>isVisibleNavItem(button)).map((button,index)=>{const key=getMobileNavSourceKey(button,source.type,index);return{key,group:normalizeMobileLabel(source.groupLabel(button)||definition.category),label:normalizeMobileLabel(button.textContent),active:button.classList.contains(source.activeClass),button};});}
function renderMobileBreadcrumb(source,breadcrumb,drawer){const items=getMobileNavSnapshot(source);if(!items.length){return;}
const active=items.find((item)=>item.active)||items[0];const trail=breadcrumb.querySelector("[data-mobile-nav-toggle]");if(trail){trail.innerHTML=`
        <span class="visualizer-mobile-breadcrumb__group">${escapeHtml(active.group || definition.category)}</span>
        <span class="visualizer-mobile-breadcrumb__topic">${escapeHtml(active.label || definition.category)}</span>
      `;}
const body=drawer.querySelector(".visualizer-mobile-nav__body");const grouped=items.reduce((accumulator,item)=>{if(!accumulator[item.group]){accumulator[item.group]=[];}
accumulator[item.group].push(item);return accumulator;},{});body.innerHTML=Object.keys(grouped).map((group)=>`
          <section class="visualizer-mobile-nav__group">
            <h2 class="visualizer-mobile-nav__group-title">${escapeHtml(group)}</h2>
            <div class="visualizer-mobile-nav__list">
              ${grouped[group]
                .map(
                  (item) => `<button
class="visualizer-mobile-nav__item ${item.active ? "is-active" : ""}"
type="button"
data-mobile-nav-drawer-key="${escapeHtml(item.key)}"><span class="visualizer-mobile-nav__item-label">${escapeHtml(item.label)}</span><span class="visualizer-mobile-nav__item-state">${item.active?"Open":"Go"}</span></button>`
                )
                .join("")}
            </div>
          </section>
        `).join("");}
function bindMobileBreadcrumbEvents(breadcrumb,drawer){if(document.body.getAttribute("data-mobile-breadcrumb-bindings")==="on"){return;}
document.body.setAttribute("data-mobile-breadcrumb-bindings","on");breadcrumb.addEventListener("click",(event)=>{if(event.target.closest("[data-mobile-nav-toggle]")){setMobileNavOpen(true);}});drawer.addEventListener("click",(event)=>{if(event.target.closest("[data-mobile-nav-close]")){setMobileNavOpen(false);return;}
const button=event.target.closest("[data-mobile-nav-drawer-key]");if(!button){return;}
const key=button.getAttribute("data-mobile-nav-drawer-key");const sourceButton=document.querySelector(`[data-mobile-nav-source-key="${key}"]`);if(sourceButton){sourceButton.click();}
setMobileNavOpen(false);scheduleMobileBreadcrumbSync();});window.addEventListener("resize",()=>{if(window.innerWidth>980){setMobileNavOpen(false);}
scheduleMobileBreadcrumbSync();});document.addEventListener("keydown",(event)=>{if(event.key==="Escape"){setMobileNavOpen(false);}});}
function observeMobileNavSource(root){if(!root||root.getAttribute("data-mobile-nav-observer")==="on"){return;}
const observer=new MutationObserver(()=>{scheduleMobileBreadcrumbSync();});observer.observe(root,{childList:true,subtree:true,attributes:true,attributeFilter:["class","style","hidden","aria-pressed"]});root.setAttribute("data-mobile-nav-observer","on");}
function scheduleMobileBreadcrumbSync(){if(mobileNavSyncTimer){window.clearTimeout(mobileNavSyncTimer);}
mobileNavSyncTimer=window.setTimeout(()=>{mobileNavSyncTimer=null;applyMobileBreadcrumbNavigation();},60);}
function setMobileNavOpen(open){document.body.setAttribute("data-mobile-nav-open",open?"on":"off");}
function isVisibleNavItem(button){if(!button){return false;}
const computed=window.getComputedStyle(button);if(computed.display==="none"||computed.visibility==="hidden"){return false;}
return!button.classList.contains("hidden");}
function getMobileNavSourceKey(button,type,index){const existing=cleanText(button.getAttribute("data-mobile-nav-source-key"));if(existing){return existing;}
const key=[type,index,normalizeMobileKey(button.textContent)].join("-");button.setAttribute("data-mobile-nav-source-key",key);return key;}
function normalizeMobileLabel(value){return cleanText(value).replace(/Â/g,"");}
function normalizeMobileKey(value){return normalizeMobileLabel(value).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"item";}
function observeDynamicContent(){if(!document.body||document.body.getAttribute("data-primer-observer")==="on"){return;}
const observer=new MutationObserver(()=>{if(primerTimer){window.clearTimeout(primerTimer);}
primerTimer=window.setTimeout(()=>{primerTimer=null;injectLearningPrimers();applyMobileBreadcrumbNavigation();},80);});observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:["class"]});document.body.setAttribute("data-primer-observer","on");}
function injectLearningPrimers(){collectPrimerTargets().forEach((target)=>{if(!shouldExplainTarget(target)){return;}
const details=getPrimerTargetDetails(target);if(!details){return;}
const signature=[details.title,details.description].join(" | ");let primer=Array.from(target.children).find((node)=>node.classList&&node.classList.contains("visualizer-topic-primer"));if(primer&&primer.getAttribute("data-primer-signature")===signature){return;}
if(primer){primer.remove();}
primer=document.createElement("section");primer.className="visualizer-topic-primer";primer.setAttribute("data-primer-signature",signature);primer.innerHTML=buildPrimerMarkup(details.title,details.description,target);const anchor=getPrimerAnchor(target);if(anchor&&anchor.parentNode===target){if(anchor.nextSibling){target.insertBefore(primer,anchor.nextSibling);}else{target.appendChild(primer);}
return;}
target.insertBefore(primer,target.firstElementChild||null);});}
function collectPrimerTargets(){const selectors=["main section[id]",".page-shell section[id]",".tab-panel.active[id^=\"panel-\"]",".page.active[id^=\"page-\"]",".section-card[id]","[id$=\"Detail\"]","#detailPanel"];const seen=new Set();const targets=[];selectors.forEach((selector)=>{Array.from(document.querySelectorAll(selector)).forEach((node)=>{if(!node||seen.has(node)){return;}
seen.add(node);targets.push(node);});});return targets;}
function shouldExplainTarget(target){if(!target||!target.id){return false;}
const id=String(target.id||"").trim().toLowerCase();if(!id||id==="page-home"||id==="panel-overview"){return false;}
if(id===COVER_ID.toLowerCase()||id===SHORTCUTS_ID.toLowerCase()||id===GUIDE_ID.toLowerCase()){return false;}
if(target.classList.contains("hidden")){return false;}
if(target.classList.contains("page")&&!target.classList.contains("active")){return false;}
if(target.classList.contains("tab-panel")&&!target.classList.contains("active")){return false;}
const computed=window.getComputedStyle(target);if(computed.display==="none"||computed.visibility==="hidden"){return false;}
return Boolean(getPrimerTargetTitle(target));}
function getPrimerTargetDetails(target){const title=getPrimerTargetTitle(target);if(!title){return null;}
return{title,description:getPrimerTargetDescription(target)};}
function getPrimerTargetTitle(target){const selectors=[".panel-title",".pg-title",".detail-title",".section-title",".flow-node__title","h2","h3","h4"];for(const selector of selectors){const match=Array.from(target.querySelectorAll(selector)).find((node)=>!node.closest(".visualizer-topic-primer"));const text=cleanText(match?match.textContent:"");if(text){return text;}}
return cleanText(target.getAttribute("data-title"))||formatId(target.id);}
function getPrimerTargetDescription(target){const selectors=[".panel-sub",".section-desc",".section-copy",".service-summary",".pg-desc",".hero-copy",".detail-card > p","p"];for(const selector of selectors){const match=Array.from(target.querySelectorAll(selector)).find((node)=>{if(node.closest(".visualizer-topic-primer")){return false;}
return cleanText(node.textContent).length>24;});const text=cleanText(match?match.textContent:"");if(text){return text;}}
return"";}
function getPrimerAnchor(target){const selectors=[".panel-header",".section-head",".section-header",".detail-hero",".detail-card__header",".pg-desc"];for(const selector of selectors){const match=Array.from(target.querySelectorAll(selector)).find((node)=>!node.closest(".visualizer-topic-primer"));if(match&&match.parentNode===target){return match;}}
return null;}
function buildPrimerMarkup(title,description,target){const bullets=buildPrimerBullets(title,description,target);const references=buildTopicReferences(title,description,target);return`
      <ul class="visualizer-topic-primer__bullets">
        ${renderPrimerList(bullets)}
      </ul>
      ${references.length ? `<div class="visualizer-topic-primer__refs">${renderReferenceLinks(references)}</div>` : ""}
    `;}
function buildPrimerData(title,description){const haystack=cleanText([title,description].join(" ")).toLowerCase();const recipe=PRIMER_RECIPES.find((item)=>item.test.test(haystack));if(recipe){return recipe;}
return buildFallbackPrimer(title,description);}
function findInsertAnchor(){return document.querySelector(".hdr, .header, .site-header, .topbar, body > header");}
function getShortcutItems(){const anchorItems=getAnchorShortcutItems();if(anchorItems.length>=2){return prioritizeShortcutItems(anchorItems).slice(0,6);}
const actionItems=getActionShortcutItems();if(actionItems.length>0){return prioritizeShortcutItems(actionItems).slice(0,6);}
return anchorItems.slice(0,6);}
function getAnchorShortcutItems(){const selector=["main section[id]","main .section-card[id]","main .tab-panel[id]",".content section[id]",".content .section-card[id]",".content .tab-panel[id]",".page-shell section[id]",".page section[id]",".page .section-card[id]",".page .tab-panel[id]","section[id]"].join(", ");const seen=new Set();return Array.from(document.querySelectorAll(selector)).filter((section)=>{const id=String(section.id||"").trim();if(!id||seen.has(id)||isIgnoredSection(section)){return false;}
const computed=window.getComputedStyle(section);if(computed.display==="none"||computed.visibility==="hidden"){return false;}
seen.add(id);return true;}).map((section)=>{const title=findTitle(section);if(!title){return null;}
return{kind:"anchor",id:section.id,title,description:findDescription(section)||definition.description,section};}).filter(Boolean);}
function getActionShortcutItems(){const items=[];const seen=new Set();Array.from(document.querySelectorAll(".step-pill[data-step]")).forEach((button)=>{const stepId="step-"+button.getAttribute("data-step");const section=document.getElementById(stepId);if(!section||seen.has(stepId)){return;}
const title=findTitle(section)||cleanText(button.textContent);if(!title){return;}
seen.add(stepId);items.push({kind:"action",id:stepId,title,description:findDescription(section)||definition.description,section,trigger:button});});Array.from(document.querySelectorAll(".tab-btn[data-tab]")).forEach((button)=>{const tabId=String(button.getAttribute("data-tab")||"").trim();const panel=document.getElementById("panel-"+tabId)||document.getElementById(tabId);if(!tabId||!panel||seen.has(tabId)){return;}
const title=findTitle(panel)||cleanText(button.textContent);if(!title){return;}
seen.add(tabId);items.push({kind:"action",id:tabId,title,description:findDescription(panel)||definition.description,section:panel,trigger:button});});return items;}
function isIgnoredSection(section){const id=String(section.id||"").trim().toLowerCase();if(!id){return true;}
if(id===COVER_ID.toLowerCase()||id===SHORTCUTS_ID.toLowerCase()){return true;}
if(id.indexOf("visualizershell")!==-1){return true;}
return Boolean(section.closest("#"+COVER_ID)||section.closest("#"+SHORTCUTS_ID));}
function findTitle(section){const heading=section.querySelector("h2, h3, h4, .section-title, .panel-title, .page-title, .topic-title, .section-heading");const text=cleanText(heading?heading.textContent:"");if(text){return text;}
return cleanText(section.getAttribute("data-title"))||formatId(section.id);}
function findDescription(section){const paragraph=Array.from(section.querySelectorAll("p, .section-desc, .panel-copy, .topic-copy, .section-copy")).find((node)=>cleanText(node.textContent).length>=48);const text=cleanText(paragraph?paragraph.textContent:"");if(!text){return"";}
return text.length>132?text.slice(0,129).trimEnd()+"...":text;}
function prioritizeShortcutItems(items){if(items.length<=6){return items;}
const grouped=new Map();const bucketOrder=[];items.forEach((item)=>{const bucket=inferShortcutBucket(item.section);if(!bucket){return;}
if(!grouped.has(bucket)){grouped.set(bucket,[]);bucketOrder.push(bucket);}
grouped.get(bucket).push(item);});if(bucketOrder.length<3){return items;}
const ordered=[];const seenIds=new Set();let offset=0;let addedInRound=true;while(addedInRound){addedInRound=false;bucketOrder.forEach((bucket)=>{const candidate=grouped.get(bucket)[offset];if(!candidate||seenIds.has(candidate.id)){return;}
ordered.push(candidate);seenIds.add(candidate.id);addedInRound=true;});offset+=1;}
items.forEach((item)=>{if(!seenIds.has(item.id)){ordered.push(item);}});return ordered;}
function inferShortcutBucket(section){const source=section.querySelector(".panel-cat-badge, .section-num, .topic-badge, .eyebrow, .section-kicker, .section-label");return cleanText(source?source.textContent:"");}
function activateShortcut(item){if(!item||!item.trigger){return;}
if(typeof item.trigger.click==="function"){item.trigger.click();}
if(!item.section){return;}
window.setTimeout(()=>{try{item.section.scrollIntoView({behavior:"smooth",block:"start"});}catch(error){item.section.scrollIntoView();}},40);}
function buildPrimerBullets(title,description,target){const primer=buildPrimerData(title,description);return dedupeStrings([primer.simple,primer.analogy,...extractTopicContentBullets(target),...buildPrimerDepthBullets(title,description),...(Array.isArray(primer.steps)?primer.steps:[]),primer.why,...(Array.isArray(primer.watch)?primer.watch:[])]).map(cleanText).filter(Boolean).slice(0,11);}
function renderPrimerList(items){return(Array.isArray(items)?items:[]).filter(Boolean).map((item)=>`<li>${escapeHtml(item)}</li>`).join("");}
function renderReferenceLinks(references){return(Array.isArray(references)?references:[]).filter((reference)=>reference&&reference.url).map((reference)=>`
          <a class="visualizer-topic-primer__ref" href="${escapeHtml(reference.url)}" target="_blank" rel="noreferrer noopener">
            <span>${escapeHtml(reference.label || formatReferenceLabel(reference.url))}</span>
          </a>
        `).join("");}
function buildPrimerDepthBullets(title,description){const category=cleanText(definition.category).toLowerCase();const intro=firstSentence(description);if(category.includes("machine learning")){return[intro&&!sameMeaning(intro,title)?"Keep one eye on the training data and one eye on the test data, because a model that sounds clever can still fail on fresh examples.":"",`${title} becomes much easier to judge when you ask four things in order: what goes in, what pattern it can learn, what score proves it works, and what kind of mistake would hurt most in real use.`];}
if(category.includes("deep learning")||category.includes("transformer")||category.includes("generative")){return[`${title} usually makes sense once you trace the flow of numbers through the model: how the input becomes vectors, how layers reshape those vectors, and how the loss or next-token decision pushes learning.`,"Most real tradeoffs here are about memory, speed, data quality, and evaluation, not only about architecture names."];}
if(category.includes("cloud")){return[`${title} is easiest to remember when you learn its real job in a system: what it stores or computes, who can talk to it, how it scales, and which neighboring services it usually works with.`,"Cloud services are rarely judged in isolation. Cost model, security boundary, limits, and operational overhead matter just as much as features."];}
if(category.includes("python")){return[`${title} gets clearer when you watch the exact rule Python follows behind the syntax: which object is created, which object is changed, what scope is active, and what exception appears when the rule is broken.`,"A lot of Python confusion disappears when you check mutability, name lookup, iteration rules, and the methods a language feature calls under the hood."];}
if(category.includes("system design")){return[`${title} is better studied as a request journey than as a box diagram. Trace one user action end to end and ask where state lives, where delay appears, and what breaks first under load.`,"Professional system design also means knowing how operators will measure, alert, retry, and recover when the happy path stops being true."];}
if(category.includes("data engineering")){return[`${title} becomes practical when you follow the data path from source to ingestion to storage to transformation to serving, then ask who owns freshness, quality, and recovery at each step.`,"A strong data platform topic is not only about moving bytes. It is about trust: correct schemas, understandable lineage, dependable schedules, and safe backfills."];}
return[intro?`A simple way to study ${title} is to connect the overview to the mechanics: ${intro}`:"",`${title} becomes more useful when you learn where it fits in the larger workflow, what assumptions it depends on, and which mistakes show up first when inputs are messy.`];}
function extractTopicContentBullets(target){if(!target){return[];}
const selectors=[".detail-body li",".detail-body p",".detail-grid li",".detail-grid p",".detail-copy li",".detail-copy p",".section-copy",".service-summary",".detail-card > p",".detail-card li",".content-card li",".content-card p","article li","article p","p","li"];const seenNodes=new Set();const bullets=[];selectors.forEach((selector)=>{Array.from(target.querySelectorAll(selector)).forEach((node)=>{if(!node||seenNodes.has(node)||!shouldUseTopicFact(node)){return;}
seenNodes.add(node);const text=shortenTopicFact(cleanText(node.textContent));if(text){bullets.push(text);}});});return dedupeStrings(bullets).slice(0,4);}
function shouldUseTopicFact(node){if(!node||!node.textContent){return false;}
if(node.closest(".visualizer-topic-primer, nav, aside, pre, code, .visualizer-study-nav, .quick-nav, .jump-nav, .steps-nav, .reference-card, .glossary-card, .hero-actions, .hero-stats, .chip-row, .tab-row, .sidebar, .py-sidebar, .footer, .legend, .docs-links")){return false;}
const text=cleanText(node.textContent);if(text.length<36||text.length>320){return false;}
if(/https?:\/\//i.test(text)){return false;}
return true;}
function shortenTopicFact(text){const sentence=firstSentence(text);const value=cleanText(sentence||text);if(!value){return"";}
return value.length>220?`${value.slice(0, 217).trim()}...`:value;}
function buildTopicReferences(title,description,target){return dedupeReferences([...extractExistingReferenceLinks(target),...buildReferenceRecipes(title,description),...buildCategoryReferences()]).slice(0,4);}
function extractExistingReferenceLinks(target){if(!target){return[];}
return Array.from(target.querySelectorAll("a[href]")).filter((node)=>{if(!node||node.closest(".visualizer-topic-primer, nav, .visualizer-study-nav, .quick-nav, .jump-nav, .steps-nav")){return false;}
const href=cleanText(node.getAttribute("href"));return/^https?:\/\//i.test(href);}).map((node)=>({label:cleanText(node.textContent)||formatReferenceLabel(node.getAttribute("href")),url:cleanText(node.getAttribute("href"))}));}
function buildReferenceRecipes(title,description){const haystack=cleanText([title,description].join(" ")).toLowerCase();if(/linear regression|least squares/.test(haystack)){return[{label:"Google ML: Linear Regression",url:"https://developers.google.com/machine-learning/crash-course/linear-regression"},{label:"scikit-learn Linear Models",url:"https://scikit-learn.org/stable/modules/linear_model.html#ordinary-least-squares"}];}
if(/logistic regression|classification|precision|recall|f1|roc|auc/.test(haystack)){return[{label:"Google ML: Classification",url:"https://developers.google.com/machine-learning/crash-course/classification"},{label:"scikit-learn Logistic Regression",url:"https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression"}];}
if(/decision tree|random forest|bagging|boost|xgboost|lightgbm|adaboost|ensemble/.test(haystack)){return[{label:"scikit-learn Decision Trees",url:"https://scikit-learn.org/stable/modules/tree.html"},{label:"scikit-learn Ensembles",url:"https://scikit-learn.org/stable/modules/ensemble.html"}];}
if(/support vector|svm|svr/.test(haystack)){return[{label:"scikit-learn SVM Guide",url:"https://scikit-learn.org/stable/modules/svm.html"},{label:"SVM Overview",url:"https://en.wikipedia.org/wiki/Support_vector_machine"}];}
if(/k-nearest neighbors|knn/.test(haystack)){return[{label:"scikit-learn Nearest Neighbors",url:"https://scikit-learn.org/stable/modules/neighbors.html"},{label:"KNN Overview",url:"https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm"}];}
if(/naive bayes|bayes/.test(haystack)){return[{label:"scikit-learn Naive Bayes",url:"https://scikit-learn.org/stable/modules/naive_bayes.html"},{label:"Naive Bayes Overview",url:"https://en.wikipedia.org/wiki/Naive_Bayes_classifier"}];}
if(/cluster|k-means|dbscan|hierarchical/.test(haystack)){return[{label:"scikit-learn Clustering",url:"https://scikit-learn.org/stable/modules/clustering.html"},{label:"Google ML: Clustering",url:"https://developers.google.com/machine-learning/clustering/overview"}];}
if(/pca|dimensionality reduction|embedding|manifold/.test(haystack)){return[{label:"scikit-learn Decomposition",url:"https://scikit-learn.org/stable/modules/decomposition.html"},{label:"PCA Overview",url:"https://en.wikipedia.org/wiki/Principal_component_analysis"}];}
if(/autoencoder|variational autoencoder|vae/.test(haystack)){return[{label:"Keras VAE Example",url:"https://keras.io/examples/generative/vae/"},{label:"Deep Learning Book: Autoencoders",url:"https://www.deeplearningbook.org/contents/autoencoders.html"}];}
if(/neural network|backprop|gradient descent|optimizer|regularization|dropout/.test(haystack)){return[{label:"Google ML: Neural Networks",url:"https://developers.google.com/machine-learning/crash-course/neural-networks"},{label:"Deep Learning Book: MLPs",url:"https://www.deeplearningbook.org/contents/mlp.html"}];}
if(/attention|transformer|bert|gpt|rag|retrieval|prompt/.test(haystack)){return[{label:"Attention Is All You Need",url:"https://arxiv.org/abs/1706.03762"},{label:"Hugging Face Transformers Docs",url:"https://huggingface.co/docs/transformers/index"}];}
if(/cnn|convolution|vision/.test(haystack)){return[{label:"CS231n: Convolutional Networks",url:"https://cs231n.github.io/convolutional-networks/"},{label:"PyTorch Vision Tutorial",url:"https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html"}];}
if(/rnn|lstm|gru|sequence model|time series/.test(haystack)){return[{label:"Understanding LSTM Networks",url:"https://colah.github.io/posts/2015-08-Understanding-LSTMs/"},{label:"PyTorch Sequence Tutorial",url:"https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html"}];}
if(/gan|diffusion|generative/.test(haystack)){return[{label:"Keras Diffusion Example",url:"https://keras.io/examples/generative/ddpm/"},{label:"Diffusion Models Paper",url:"https://arxiv.org/abs/2006.11239"}];}
if(/reinforcement learning|policy|value function|q-learning|bandit/.test(haystack)){return[{label:"OpenAI Spinning Up",url:"https://spinningup.openai.com/en/latest/"},{label:"David Silver RL Course",url:"https://www.davidsilver.uk/teaching/"}];}
if(/metric|evaluation|cross validation|bias variance|feature engineering|preprocessing|calibration/.test(haystack)){return[{label:"scikit-learn Model Evaluation",url:"https://scikit-learn.org/stable/modules/model_evaluation.html"},{label:"scikit-learn Preprocessing",url:"https://scikit-learn.org/stable/modules/preprocessing.html"}];}
if(cleanText(definition.category).toLowerCase().includes("python")||/\blist comprehension\b|\btuple\b|\bdictionary\b|\bdecorator\b|\biterator\b|\bgenerator\b|\basyncio\b|\bnumpy\b|\bpandas\b/.test(haystack)){return[{label:"Python Tutorial",url:"https://docs.python.org/3/tutorial/"},{label:"Python Library Reference",url:"https://docs.python.org/3/library/"}];}
if(/spark|structured streaming|pyspark/.test(haystack)){return[{label:"Apache Spark Docs",url:"https://spark.apache.org/docs/latest/"},{label:"Spark SQL Guide",url:"https://spark.apache.org/docs/latest/sql-programming-guide.html"}];}
if(/kafka|streaming|event hub|pub\/sub|message queue|event-driven/.test(haystack)){return[{label:"Apache Kafka Docs",url:"https://kafka.apache.org/documentation/"},{label:"Google Pub/Sub Docs",url:"https://cloud.google.com/pubsub/docs"}];}
if(/airflow|orchestration|dag|scheduler/.test(haystack)){return[{label:"Apache Airflow Docs",url:"https://airflow.apache.org/docs/"},{label:"Airflow Tutorial",url:"https://airflow.apache.org/docs/apache-airflow/stable/tutorial/"}];}
if(/lakehouse|delta|iceberg|warehouse/.test(haystack)){return[{label:"Delta Lake Docs",url:"https://docs.delta.io/latest/index.html"},{label:"Apache Iceberg Docs",url:"https://iceberg.apache.org/docs/latest/"}];}
if(/well-architected|pillar|reliability|security|performance efficiency|cost optimization|operational excellence/.test(haystack)){return[{label:"AWS Well-Architected",url:"https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"},{label:"Azure Well-Architected",url:"https://learn.microsoft.com/en-us/azure/well-architected/"}];}
if(/latency|cache|queue|consistency|replication|availability|sharding|load balancer|system design/.test(haystack)){return[{label:"AWS Builders Library",url:"https://aws.amazon.com/builders-library/"},{label:"Martin Fowler Architecture",url:"https://martinfowler.com/architecture/"}];}
return[];}
function buildCategoryReferences(){if(/azure-cloud-services\//i.test(locationPath)){return[{label:"Azure Documentation",url:"https://learn.microsoft.com/en-us/azure/"},{label:"Azure Architecture Center",url:"https://learn.microsoft.com/en-us/azure/architecture/"}];}
if(/aws-cloud-services\//i.test(locationPath)){return[{label:"AWS Documentation",url:"https://docs.aws.amazon.com/"},{label:"AWS Architecture Center",url:"https://aws.amazon.com/architecture/"}];}
if(/gcp-cloud-services\//i.test(locationPath)){return[{label:"Google Cloud Docs",url:"https://cloud.google.com/docs"},{label:"Google Cloud Architecture",url:"https://cloud.google.com/architecture"}];}
if(/well-architected-frameworks\//i.test(locationPath)){return[{label:"AWS Well-Architected",url:"https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"},{label:"Google Cloud Architecture Framework",url:"https://cloud.google.com/architecture/framework"}];}
if(/system-design\/ai-workbench\//i.test(locationPath)){return[{label:"AWS Builders Library",url:"https://aws.amazon.com/builders-library/"},{label:"Google SRE Books",url:"https://sre.google/books/"}];}
if(/python-deep-dive\//i.test(locationPath)){return[{label:"Python Tutorial",url:"https://docs.python.org/3/tutorial/"},{label:"Python Standard Library",url:"https://docs.python.org/3/library/"}];}
if(/data-engineering\/field-atlas\//i.test(locationPath)){return[{label:"Apache Spark Docs",url:"https://spark.apache.org/docs/latest/"},{label:"Apache Airflow Docs",url:"https://airflow.apache.org/docs/"}];}
if(/ml-models\//i.test(locationPath)){return[{label:"scikit-learn User Guide",url:"https://scikit-learn.org/stable/user_guide.html"},{label:"Google ML Crash Course",url:"https://developers.google.com/machine-learning/crash-course"}];}
if(/deep-learning\//i.test(locationPath)){return[{label:"PyTorch Tutorials",url:"https://pytorch.org/tutorials/"},{label:"Deep Learning Book",url:"https://www.deeplearningbook.org/"}];}
if(/token-embeddings\//i.test(locationPath)||/genai-llm-systems\//i.test(locationPath)){return[{label:"Hugging Face LLM Course",url:"https://huggingface.co/learn/llm-course/chapter1/1"},{label:"Transformers Docs",url:"https://huggingface.co/docs/transformers/index"}];}
return[];}
function dedupeStrings(items){const seen=new Set();return(Array.isArray(items)?items:[]).filter((item)=>{const cleaned=cleanText(item);if(!cleaned){return false;}
const key=cleaned.toLowerCase().replace(/[^a-z0-9]+/g," ");if(seen.has(key)){return false;}
seen.add(key);return true;});}
function dedupeReferences(items){const seen=new Set();return(Array.isArray(items)?items:[]).filter((item)=>{const url=cleanText(item&&item.url);if(!url||seen.has(url)){return false;}
seen.add(url);return true;});}
function formatReferenceLabel(url){try{const parsed=new URL(url);const host=parsed.hostname.replace(/^www\./i,"");const path=parsed.pathname.replace(/\/+$/,"");if(!path||path==="/"){return host;}
return`${host}${path}`;}catch(error){return cleanText(url);}}
function sameMeaning(left,right){const leftKey=cleanText(left).toLowerCase().replace(/[^a-z0-9]+/g," ");const rightKey=cleanText(right).toLowerCase().replace(/[^a-z0-9]+/g," ");return Boolean(leftKey&&rightKey&&leftKey===rightKey);}
function buildFallbackPrimer(title,description){const category=cleanText(definition.category).toLowerCase();const intro=firstSentence(description);const simple=intro?`${title} is one part of the bigger picture. In simple words: ${intro}`:`${title} is one small job inside a bigger system. The easiest way to learn it is to ask what goes in, what it changes, and what comes out.`;return{simple,analogy:buildCategoryAnalogy(category),steps:buildCategorySteps(category),why:buildCategoryWhy(category),watch:buildCategoryWatch(category)};}
function buildCategoryAnalogy(category){if(category.includes("machine learning")){return"Think of it like teaching by examples. You show many worked examples, and the model slowly notices the pattern.";}
if(category.includes("deep learning")||category.includes("transformer")||category.includes("generative")){return"Think of it like a giant pattern machine with many layers. Each layer notices a little more, and together they build a smarter guess.";}
if(category.includes("cloud")){return"Think of a cloud platform like a giant toolbox. Each tool has one main job, and good design means picking the right small set of tools to work together.";}
if(category.includes("python")){return"Think of Python like giving careful instructions to a helper. Small, clear steps make the computer do bigger jobs without confusion.";}
if(category.includes("system design")){return"Think of system design like planning a city. You need roads, storage, rules, backup plans, and ways to handle traffic jams.";}
if(category.includes("data engineering")){return"Think of it like moving water through pipes. You collect it, clean it, store it, and make sure it reaches the right place on time.";}
return"Think of it as one tool inside a larger workshop. It makes more sense when you see the job it does for the full system.";}
function buildCategorySteps(category){if(category.includes("machine learning")){return["Start with examples and the answer you want the model to learn.","Turn each example into useful features or signals.","Let the model search for a pattern.","Test whether that pattern also works on new examples."];}
if(category.includes("deep learning")||category.includes("transformer")||category.includes("generative")){return["Turn the input into numbers the model can work with.","Pass those numbers through layers that transform the pattern.","Compare the output with the target or prompt goal.","Adjust weights over many rounds so the next output improves."];}
if(category.includes("cloud")){return["Start with the job you need to do, such as compute, storage, data, or networking.","Pick the managed or low-level service that fits that job.","Connect the services so data and requests can move safely.","Monitor cost, speed, and reliability after the system is live."];}
if(category.includes("python")){return["Write a small instruction or function.","Run it on values such as numbers, text, or lists.","Check the result and improve the logic.","Combine simple pieces into a bigger program."];}
if(category.includes("system design")){return["Start with the user action and expected traffic.","Choose where the real source of truth will live.","Add queues, caches, indexes, or workers where needed.","Plan for failures, retries, scaling, and monitoring."];}
if(category.includes("data engineering")){return["Collect data from source systems.","Clean, reshape, and validate it.","Store it in a place built for analysis or serving.","Schedule, monitor, and recover the pipeline when something breaks."];}
return["Start with the input.","Understand the work done in the middle.","Check the output.","Notice how it connects to the rest of the system."];}
function buildCategoryWhy(category){if(category.includes("machine learning")){return"It matters because the whole goal of machine learning is to make useful guesses on new data, not just memorize old examples.";}
if(category.includes("deep learning")||category.includes("transformer")||category.includes("generative")){return"It matters because modern AI systems are made from many small ideas working together, and this topic is one of those building blocks.";}
if(category.includes("cloud")){return"It matters because cloud design is really about choosing the right services for the job without wasting money or adding needless complexity.";}
if(category.includes("python")){return"It matters because clearer Python thinking makes everyday coding, debugging, and automation much easier.";}
if(category.includes("system design")){return"It matters because real systems must keep working under traffic, failure, delay, and change.";}
if(category.includes("data engineering")){return"It matters because bad data flow creates bad dashboards, bad models, and bad decisions.";}
return"It matters because this part helps the larger system work in a reliable and understandable way.";}
function buildCategoryWatch(category){if(category.includes("machine learning")){return["Do not trust a model before checking it on new data.","Simple models are often stronger baselines than people expect.","Bad data can ruin even a clever algorithm."];}
if(category.includes("deep learning")||category.includes("transformer")||category.includes("generative")){return["Large models can sound smart even when they are wrong.","Training and serving costs rise quickly.","Good prompts do not replace good data and good evaluation."];}
if(category.includes("cloud")){return["Do not choose a service just because the name sounds close.","Managed tools save work, but they still have limits and tradeoffs.","Security, reliability, and cost need attention from the start."];}
if(category.includes("python")){return["Short code is not always clear code.","Mutability and shared state can surprise beginners.","Reading error messages carefully saves a lot of time."];}
if(category.includes("system design")){return["Happy-path diagrams hide real failure modes.","Caching, queues, and replication all add tradeoffs.","Scale problems usually begin as measurement problems."];}
if(category.includes("data engineering")){return["A pipeline is not done just because it runs once.","Freshness, quality, and lineage matter as much as storage.","Recovery plans are part of the design, not an afterthought."];}
return["Watch for hidden assumptions.","Check how this piece behaves when inputs are messy.","Make sure the explanation matches the real job of the system."];}
function firstSentence(text){const cleaned=cleanText(text);if(!cleaned){return"";}
const match=cleaned.match(/.+?[.!?](?:\s|$)/);if(match){return cleanText(match[0]);}
return cleaned;}
function mergeGuideDefinition(baseDefinition){if(!baseDefinition){return null;}
const baseGuide=baseDefinition.guide||{};const enhancement=GUIDE_ENHANCEMENTS[baseDefinition.key]||{};return{...baseDefinition,guide:{...baseGuide,...enhancement,related:normalizeGuideRelated(enhancement.related||baseGuide.related||[])}};}
function normalizeGuideRelated(items){return(Array.isArray(items)?items:[]).map((item)=>{const rawItem=typeof item==="string"?{key:item}:item;const source=rawItem.key?GUIDE_LIBRARY[rawItem.key]:null;const path=normalizeGuidePath(rawItem.path||(source&&source.pagePath));if(!path){return null;}
return{label:rawItem.label||formatId(rawItem.key||path),note:rawItem.reason||rawItem.note||"",path};}).filter(Boolean);}
function renderGuideCard(title,items){const safeItems=Array.isArray(items)?items.filter(Boolean):[];if(!safeItems.length){return"";}
return`
      <article class="visualizer-shell-guide__card">
        <p class="visualizer-shell-guide__card-kicker">${escapeHtml(title)}</p>
        <ul class="visualizer-shell-guide__list">
          ${safeItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    `;}
function renderGuideRelatedCard(title,items){const safeItems=Array.isArray(items)?items.filter((item)=>item&&item.path):[];if(!safeItems.length){return"";}
return`
      <article class="visualizer-shell-guide__card">
        <p class="visualizer-shell-guide__card-kicker">${escapeHtml(title)}</p>
        <ul class="visualizer-shell-guide__link-list">
          ${safeItems.map((item) => `<li class="visualizer-shell-guide__link-item"><a class="visualizer-shell-guide__link"href="${escapeHtml(buildGuideHref(item.path))}">${escapeHtml(item.label)}</a>${item.note?`<span class="visualizer-shell-guide__link-note">${escapeHtml(item.note)}</span>`:""}</li>`).join("")}
        </ul>
      </article>
    `;}
function buildGuideHref(targetPath){const normalizedTarget=normalizeGuidePath(targetPath);if(!normalizedTarget){return"#";}
return getGuideRootPath()+normalizedTarget;}
function getGuideRootPath(){const currentPath=normalizeGuidePath(definition&&definition.pagePath);const guideSegments=currentPath?currentPath.split("/").filter(Boolean):[];const currentSegments=locationPath.split("/").filter(Boolean);const lastSegment=currentSegments[currentSegments.length-1]||"";const hasFileSegment=/\.[a-z0-9]+$/i.test(lastSegment);const removableSegments=Math.max(1,guideSegments.length-(hasFileSegment?0:1));const rootSegments=currentSegments.slice(0,Math.max(0,currentSegments.length-removableSegments));return"/"+(rootSegments.length?rootSegments.join("/")+"/":"");}
function normalizeGuidePath(value){return cleanText(value).replace(/^\.?\//,"").replace(/\\/g,"/").replace(/\/+$/,"");}
function cleanText(value){return String(value||"").replace(/\s+/g," ").trim();}
function formatId(value){return cleanText(String(value||"").replace(/[-_]+/g," ").replace(/\b\w/g,(character)=>character.toUpperCase()));}
function escapeHtml(value){return String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}})();