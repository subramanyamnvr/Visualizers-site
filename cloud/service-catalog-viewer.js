(function(){const DOMAIN_META=[{key:"ai",label:"AI and intelligent systems",color:"#8b5cf6",match:/ai|ml|machine|vision|speech|language|search|gen|robot|recommend|forecast/i,summary:"Inference, models, cognitive tooling, and applied intelligence services."},{key:"build",label:"App and integration",color:"#14b8a6",match:/app|application|developer|integration|api|message|workflow|event|business/i,summary:"Developer services, messaging layers, workflow tools, and product delivery surfaces."},{key:"compute",label:"Compute and containers",color:"#f97316",match:/compute|container|serverless|batch|vm|kubernetes|hosting/i,summary:"Runtime capacity for VMs, containers, functions, and managed application execution."},{key:"data",label:"Data and analytics",color:"#0ea5e9",match:/analytics|data|stream|pipeline|lake|warehouse/i,summary:"Data movement, transformation, warehousing, streaming, and analytical processing."},{key:"storage",label:"Storage and databases",color:"#22c55e",match:/database|storage|backup|archive|file|cache/i,summary:"Persistent data layers for objects, files, relational systems, and operational stores."},{key:"network",label:"Networking and edge",color:"#f59e0b",match:/network|content|edge|delivery|dns|cdn|traffic|interconnect/i,summary:"Connectivity, traffic steering, acceleration, edge delivery, and global routing."},{key:"security",label:"Security and operations",color:"#ef4444",match:/security|identity|management|monitor|observability|financial|governance/i,summary:"Identity, policy, governance, monitoring, cost visibility, and platform controls."},{key:"hybrid",label:"Hybrid and migration",color:"#6366f1",match:/hybrid|multicloud|migration|transfer|distributed/i,summary:"Cross-environment connectivity, workload movement, and hybrid operating patterns."},{key:"industry",label:"Industry and specialist tools",color:"#ec4899",match:/industry|media|game|blockchain|contact|customer|satellite|iot/i,summary:"Vertical packages and specialist services for targeted industry workloads."}];const FALLBACK_DOMAIN={key:"platform",label:"Platform foundation",color:"#38bdf8",summary:"Shared cloud capabilities that support platform assembly and day-two operations."};const PATTERN_LIBRARY={aws:{cli:["aws configure --profile cloud-lab","aws --profile cloud-lab sts get-caller-identity","","# Study {{SERVICE_NAME}} through the official guide first:","# Docs: {{DOCS_URL}}","# Product page: {{PRODUCT_URL}}","","# Then switch to the command group or API called out in the guide.","aws <service-command> help","aws <service-command> list-*"].join("\n"),python:["import boto3","","session = boto3.Session(profile_name=\"cloud-lab\", region_name=\"us-east-1\")","client = session.client(\"<service-code>\")  # Replace with the official boto3 client name.","","print(\"Service:\", \"{{SERVICE_NAME}}\")","print(\"Docs:\", \"{{DOCS_URL}}\")","","# Start with a read-only action from the API reference before creating resources.","operation = \"<read-only-operation>\"","print(\"Next step:\", client.meta.service_model.service_name, operation)"].join("\n")},gcp:{cli:["gcloud auth login","gcloud config set project YOUR_PROJECT_ID","","# Review the official guide before choosing the exact command surface.","# Docs: {{DOCS_URL}}","# Product page: {{PRODUCT_URL}}","","gcloud services list --enabled","gcloud <service-group> --help"].join("\n"),python:["import google.auth","","credentials, project_id = google.auth.default(","    scopes=[\"https://www.googleapis.com/auth/cloud-platform\"]",")","print(\"Project:\", project_id)","print(\"Service:\", \"{{SERVICE_NAME}}\")","print(\"Docs:\", \"{{DOCS_URL}}\")","","# Replace the placeholders with the exact client library or REST method from the guide.","client_library = \"<google-cloud-package-or-api>\"","read_operation = \"<read-only-operation>\"","print(client_library, read_operation)"].join("\n")}};const state={catalog:null,activeCategory:"All categories",activeDomain:"all",query:"",selectedServiceId:null,codeMode:"cli",nodes:[],animationFrame:null};const ui={};const config=window.CLOUD_VIEWER_CONFIG||{};document.addEventListener("DOMContentLoaded",init);async function init(){cacheDom();applyConfig();bindEvents();try{const rawCatalog=await loadCatalog();state.catalog=normalizeCatalog(rawCatalog);state.selectedServiceId=state.catalog.products[0]?state.catalog.products[0].id:null;renderAll();startConstellation();}catch(error){renderLoadError(error);}}
async function loadCatalog(){if(window.CLOUD_VIEWER_CATALOG){return window.CLOUD_VIEWER_CATALOG;}
const response=await fetch("./catalog.json");if(!response.ok){throw new Error("Unable to load catalog.json");}
return response.json();}
function cacheDom(){["brandMark","brandTitle","brandSubtitle","heroEyebrow","heroTitle","heroBody","visualLead","overviewLead","catalogLead","catalogFootnote","journeyLead","referenceLead","globalFootnote","overviewGrid","legendGrid","categoryList","serviceSearch","domainSelect","catalogSummary","serviceGrid","detailPanel","journeyGrid","referenceGrid","constellationCanvas"].forEach((id)=>{ui[id]=document.getElementById(id);});}
function applyConfig(){document.documentElement.style.setProperty("--cloud-accent",config.accent||"#2563eb");document.documentElement.style.setProperty("--cloud-accent-soft",hexToRgba(config.accent||"#2563eb",0.12));if(ui.brandMark)ui.brandMark.textContent=config.mark||(config.vendor||"C").slice(0,1);if(ui.brandTitle)ui.brandTitle.textContent=config.title||document.title;if(ui.brandSubtitle)ui.brandSubtitle.textContent=config.subtitle||"";if(ui.heroEyebrow)ui.heroEyebrow.textContent=config.eyebrow||"Cloud platform visual guide";if(ui.heroTitle)ui.heroTitle.textContent=config.heroTitle||config.title||document.title;if(ui.heroBody)ui.heroBody.textContent=config.heroBody||"";if(ui.visualLead)ui.visualLead.textContent=config.visualLead||"";if(ui.overviewLead)ui.overviewLead.textContent=config.overviewLead||"";if(ui.catalogLead)ui.catalogLead.textContent=config.catalogLead||"";if(ui.catalogFootnote)ui.catalogFootnote.textContent=config.catalogFootnote||"";if(ui.journeyLead)ui.journeyLead.textContent=config.journeyLead||"";if(ui.referenceLead)ui.referenceLead.textContent=config.referenceLead||"";if(ui.globalFootnote)ui.globalFootnote.textContent=config.footnote||"";}
function bindEvents(){if(ui.serviceSearch){ui.serviceSearch.addEventListener("input",(event)=>{state.query=event.target.value.trim();renderCatalog();});}
if(ui.domainSelect){ui.domainSelect.addEventListener("change",(event)=>{state.activeDomain=event.target.value;renderCatalog();});}
if(ui.categoryList){ui.categoryList.addEventListener("click",(event)=>{const button=event.target.closest("[data-category]");if(!button){return;}
state.activeCategory=button.getAttribute("data-category");renderCatalog();});}
if(ui.serviceGrid){ui.serviceGrid.addEventListener("click",(event)=>{const button=event.target.closest("[data-service-id]");if(!button){return;}
state.selectedServiceId=button.getAttribute("data-service-id");renderDetail();renderReferences();});}
if(ui.detailPanel){ui.detailPanel.addEventListener("click",(event)=>{const tab=event.target.closest("[data-code-mode]");if(!tab){return;}
state.codeMode=tab.getAttribute("data-code-mode");renderDetail();});}
if(ui.constellationCanvas){ui.constellationCanvas.addEventListener("click",handleCanvasClick);ui.constellationCanvas.addEventListener("mousemove",handleCanvasHover);}
window.addEventListener("resize",()=>{if(state.catalog){drawConstellation(performance.now());}});}
function normalizeCatalog(raw){const displayCategories=(raw.categoryCounts||[]).map((entry,index)=>({name:entry.name,count:entry.count,index,domain:classifyCategory(entry.name)})).filter((entry)=>entry.count>0);const lookup=new Map(displayCategories.map((entry)=>[entry.name,entry]));const products=(raw.products||[]).map((product,index)=>{const primaryCategory=product.primary_category||(product.categories||[])[0]||"Uncategorized";const categoryMeta=lookup.get(primaryCategory)||{name:primaryCategory,count:0,domain:classifyCategory(primaryCategory)};return{...product,id:product.slug||"service-"+index,primary_category:primaryCategory,categoryMeta,description:cleanCopy(product.description),docs_url:product.docs_url||raw.sourceUrl,product_url:product.product_url||raw.sourceUrl};}).sort((left,right)=>left.name.localeCompare(right.name));const domainTotals={};displayCategories.forEach((category)=>{domainTotals[category.domain.key]=(domainTotals[category.domain.key]||0)+category.count;});return{...raw,displayCategories,products,domainTotals};}
function renderAll(){renderOverview();renderLegend();renderCategoryFilters();renderDomainOptions();renderCatalog();renderJourneys();renderReferences();}
function renderOverview(){if(!ui.overviewGrid||!state.catalog){return;}
const maxCount=Math.max.apply(null,state.catalog.displayCategories.map((entry)=>entry.count));const cards=state.catalog.displayCategories.slice(0,8).map((category)=>{const width=Math.max(10,Math.round((category.count/maxCount)*100));return`
        <article class="overview-card">
          <div class="category-badge">${escapeHtml(category.domain.label)}</div>
          <h3 class="journey-title">${escapeHtml(category.name)}</h3>
          <div class="overview-meta">${formatNumber(category.count)} services</div>
          <p class="overview-copy">${escapeHtml(category.domain.summary)}</p>
          <div class="status-bar"><div class="status-fill" style="width:${width}%; background: linear-gradient(90deg, ${category.domain.color}, ${config.accent || "#2563eb"});"></div></div>
        </article>
      `;});ui.overviewGrid.innerHTML=cards.join("");}
function renderLegend(){if(!ui.legendGrid||!state.catalog){return;}
ui.legendGrid.innerHTML=state.catalog.displayCategories.slice(0,8).map((category)=>`
      <button class="legend-item" type="button" data-category="${escapeHtml(category.name)}">
        <span class="legend-swatch" style="--legend-color:${category.domain.color};"></span>
        <span>
          <strong>${escapeHtml(category.name)}</strong>
          <span class="mini-note">${formatNumber(category.count)} services</span>
        </span>
      </button>
    `).join("");ui.legendGrid.querySelectorAll("[data-category]").forEach((button)=>{button.addEventListener("click",()=>{state.activeCategory=button.getAttribute("data-category");renderCatalog();});});}
function renderCategoryFilters(){if(!ui.categoryList||!state.catalog){return;}
const items=[{name:"All categories",count:state.catalog.products.length,domain:{label:"Browse everything"}}].concat(state.catalog.displayCategories);ui.categoryList.innerHTML=items.map((item)=>`
      <button class="pill ${item.name === state.activeCategory ? "is-active" : ""}" type="button" data-category="${escapeHtml(item.name)}">
        <span>
          <strong>${escapeHtml(item.name)}</strong>
          <span>${escapeHtml(item.domain.label)}</span>
        </span>
        <span>${formatNumber(item.count)}</span>
      </button>
    `).join("");}
function renderDomainOptions(){if(!ui.domainSelect||!state.catalog){return;}
const domains=Object.keys(state.catalog.domainTotals).map((key)=>DOMAIN_META.find((item)=>item.key===key)||FALLBACK_DOMAIN).sort((left,right)=>left.label.localeCompare(right.label));ui.domainSelect.innerHTML=[`<option value="all">All operating bands</option>`].concat(domains.map((domain)=>`
      <option value="${escapeHtml(domain.key)}">${escapeHtml(domain.label)}</option>
    `)).join("");ui.domainSelect.value=state.activeDomain;}
function renderCatalog(){if(!state.catalog){return;}
renderCategoryFilters();const visibleProducts=getVisibleProducts();if(ui.catalogSummary){ui.catalogSummary.textContent=`${formatNumber(visibleProducts.length)} services match the current filters.`;}
if(!visibleProducts.some((product)=>product.id===state.selectedServiceId)){state.selectedServiceId=visibleProducts[0]?visibleProducts[0].id:null;}
if(!ui.serviceGrid){return;}
if(!visibleProducts.length){ui.serviceGrid.innerHTML=`<div class="empty-state">No services match this filter set yet. Try a broader category or clear the search term.</div>`;renderDetail();renderReferences();return;}
ui.serviceGrid.innerHTML=visibleProducts.map((product)=>`
      <button class="service-button ${product.id === state.selectedServiceId ? "is-active" : ""}" type="button" data-service-id="${escapeHtml(product.id)}">
        <div class="service-button-title">
          <span>${escapeHtml(product.name)}</span>
          <span class="category-badge">${escapeHtml(product.categoryMeta.domain.label)}</span>
        </div>
        <div class="mini-note">${escapeHtml(product.primary_category)}</div>
        <div class="service-button-copy">${escapeHtml(shorten(product.description, 180))}</div>
      </button>
    `).join("");renderDetail();renderReferences();}
function renderDetail(){if(!ui.detailPanel||!state.catalog){return;}
const service=getSelectedService();if(!service){ui.detailPanel.innerHTML=`<div class="empty-state">Select a service to see its role, adjacent services, starter patterns, and official references.</div>`;return;}
const related=getRelatedServices(service).slice(0,6);const code=createCodeSamples(service);const density=Math.max(12,Math.round((service.categoryMeta.count/Math.max.apply(null,state.catalog.displayCategories.map((item)=>item.count)))*100));const insights=buildInsights(service);const decisionGuide=buildDecisionGuide(service);ui.detailPanel.innerHTML=`
      <div class="detail-hero">
        <div>
          <div class="category-badge">${escapeHtml(service.categoryMeta.domain.label)}</div>
          <h2 class="detail-title">${escapeHtml(service.name)}</h2>
          <p class="service-summary">${escapeHtml(service.description)}</p>
          <div class="meta-grid">
            <article class="meta-card">
              <div class="meta-title">Primary category</div>
              <div class="meta-value">${escapeHtml(service.primary_category)}</div>
            </article>
            <article class="meta-card">
              <div class="meta-title">Docs source</div>
              <div class="meta-value">${escapeHtml(service.docs_label || "Official docs")}</div>
            </article>
            <article class="meta-card">
              <div class="meta-title">Catalog density</div>
              <div class="meta-value">${formatNumber(service.categoryMeta.count)} peers</div>
            </article>
            <article class="meta-card">
              <div class="meta-title">Study focus</div>
              <div class="meta-value">${escapeHtml(service.categoryMeta.domain.summary)}</div>
            </article>
          </div>
          <div class="status-bar"><div class="status-fill" style="width:${density}%; background: linear-gradient(90deg, ${service.categoryMeta.domain.color}, ${config.accent || "#2563eb"});"></div></div>
        </div>
        <div class="insight-grid">
          ${insights.map((item) => `<article class="insight-card"><div class="insight-title">${escapeHtml(item.label)}</div><div class="insight-value">${escapeHtml(item.value)}</div><p class="mini-note">${escapeHtml(item.copy)}</p></article>`).join("")}
        </div>
      </div>
      <div class="timeline-list">
        ${buildTimeline(service).map((step) => `<article class="timeline-step"><div class="timeline-kicker">${escapeHtml(step.kicker)}</div><div class="timeline-title">${escapeHtml(step.title)}</div><p class="timeline-copy">${escapeHtml(step.copy)}</p></article>`).join("")}
      </div>
      <div class="study-grid">
        ${decisionGuide.map((section) => `<article class="study-card"><div class="insight-title">${escapeHtml(section.title)}</div><ul class="mini-list">${section.items.map((item)=>`<li>${escapeHtml(item)}</li>`).join("")}</ul></article>`).join("")}
      </div>
      <div class="chip-row">
        ${related.map((item) => `<button class="chip"type="button"data-service-id="${escapeHtml(item.id)}">${escapeHtml(item.name)}</button>`).join("")}
      </div>
      <div class="code-shell">
        <div class="code-tabs">
          <button class="code-tab ${state.codeMode === "cli" ? "is-active" : ""}" type="button" data-code-mode="cli">CLI discovery</button>
          <button class="code-tab ${state.codeMode === "python" ? "is-active" : ""}" type="button" data-code-mode="python">Python scaffold</button>
        </div>
        <pre class="code-block"><code>${escapeHtml(code[state.codeMode])}</code></pre>
      </div>
    `;ui.detailPanel.querySelectorAll(".chip[data-service-id]").forEach((button)=>{button.addEventListener("click",()=>{state.selectedServiceId=button.getAttribute("data-service-id");renderCatalog();});});}
function renderJourneys(){if(!ui.journeyGrid){return;}
const journeys=config.journeys||[];ui.journeyGrid.innerHTML=journeys.map((journey,index)=>`
      <article class="journey-card" style="--journey-color:${journey.color || pickJourneyColor(index)};">
        <div class="category-badge">${escapeHtml(journey.kicker || "Reference pattern")}</div>
        <h3 class="journey-title">${escapeHtml(journey.title)}</h3>
        <p class="service-summary">${escapeHtml(journey.copy)}</p>
        <div class="chip-row">
          ${(journey.steps || []).map((step) => `<span class="chip">${escapeHtml(step)}</span>`).join("")}
        </div>
      </article>
    `).join("");}
function renderReferences(){if(!ui.referenceGrid||!state.catalog){return;}
const service=getSelectedService();const cards=[{title:state.catalog.sourceLabel||"Official service catalog",copy:"The upstream catalog used to build this visual explorer.",url:state.catalog.sourceUrl}];(config.referenceLinks||[]).forEach((item)=>cards.push(item));if(service){cards.push({title:service.name+" documentation",copy:"Go straight to the official documentation path for the selected service.",url:service.docs_url});cards.push({title:service.name+" product page",copy:"Vendor overview, positioning, and entry points for deeper study.",url:service.product_url});}
ui.referenceGrid.innerHTML=cards.map((card)=>`
      <article class="reference-card">
        <div class="category-badge">Official reference</div>
        <h3 class="reference-title">${escapeHtml(card.title)}</h3>
        <p class="reference-copy">${escapeHtml(card.copy)}</p>
        <a class="reference-link" href="${escapeHtml(card.url)}" target="_blank" rel="noreferrer">Open source</a>
      </article>
    `).join("");}
function startConstellation(){if(!ui.constellationCanvas||!state.catalog){return;}
if(state.animationFrame){cancelAnimationFrame(state.animationFrame);}
const animate=(time)=>{drawConstellation(time);state.animationFrame=requestAnimationFrame(animate);};state.animationFrame=requestAnimationFrame(animate);}
function drawConstellation(time){const canvas=ui.constellationCanvas;if(!canvas||!state.catalog){return;}
const context=canvas.getContext("2d");const rect=canvas.getBoundingClientRect();const dpr=window.devicePixelRatio||1;canvas.width=Math.max(1,Math.round(rect.width*dpr));canvas.height=Math.max(1,Math.round(rect.height*dpr));context.scale(dpr,dpr);const width=rect.width;const height=rect.height;const centerX=width/2;const centerY=height/2;const categories=state.catalog.displayCategories.slice(0,12);const orbit=Math.min(width,height)*0.28;context.clearRect(0,0,width,height);state.nodes=[];const centerGlow=context.createRadialGradient(centerX,centerY,10,centerX,centerY,orbit*0.9);centerGlow.addColorStop(0,hexToRgba(config.accent||"#2563eb",0.25));centerGlow.addColorStop(1,"rgba(0,0,0,0)");context.fillStyle=centerGlow;context.fillRect(0,0,width,height);context.fillStyle="#ffffff";context.globalAlpha=0.95;context.beginPath();context.arc(centerX,centerY,10,0,Math.PI*2);context.fill();context.globalAlpha=1;context.font="700 14px Space Grotesk, sans-serif";context.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--text").trim()||"#e5eefc";context.textAlign="center";context.fillText(config.vendor||"Cloud",centerX,centerY-20);categories.forEach((category,index)=>{const angle=(index/categories.length)*Math.PI*2+time*0.00008*(index%2===0?1:-1);const radius=orbit+(index%3)*22;const x=centerX+Math.cos(angle)*radius;const y=centerY+Math.sin(angle*1.2)*radius*0.62;const size=Math.max(9,Math.min(24,9+category.count*0.22));const active=state.activeCategory===category.name;context.strokeStyle=hexToRgba(category.domain.color,active?0.42:0.22);context.lineWidth=active?2.2:1.1;context.beginPath();context.moveTo(centerX,centerY);context.lineTo(x,y);context.stroke();context.fillStyle=hexToRgba(category.domain.color,active?0.98:0.84);context.beginPath();context.arc(x,y,size,0,Math.PI*2);context.fill();context.fillStyle="#ffffff";context.font="600 11px IBM Plex Mono, monospace";context.fillText(String(category.count),x,y+4);state.nodes.push({x,y,size,category:category.name});});}
function handleCanvasClick(event){const hit=getNodeHit(event);if(!hit){return;}
state.activeCategory=hit.category;renderCatalog();}
function handleCanvasHover(event){const hit=getNodeHit(event);ui.constellationCanvas.style.cursor=hit?"pointer":"default";}
function getNodeHit(event){const rect=ui.constellationCanvas.getBoundingClientRect();const x=event.clientX-rect.left;const y=event.clientY-rect.top;return state.nodes.find((node)=>{const dx=x-node.x;const dy=y-node.y;return Math.sqrt(dx*dx+dy*dy)<=node.size;});}
function getVisibleProducts(){if(!state.catalog){return[];}
const query=state.query.toLowerCase();return state.catalog.products.filter((product)=>{const categoryMatch=state.activeCategory==="All categories"||product.primary_category===state.activeCategory;const domainMatch=state.activeDomain==="all"||product.categoryMeta.domain.key===state.activeDomain;const queryMatch=!query||[product.name,product.description,product.primary_category].join(" ").toLowerCase().includes(query);return categoryMatch&&domainMatch&&queryMatch;});}
function getSelectedService(){if(!state.catalog){return null;}
return state.catalog.products.find((product)=>product.id===state.selectedServiceId)||null;}
function getRelatedServices(service){return state.catalog.products.filter((candidate)=>{if(candidate.id===service.id){return false;}
return candidate.primary_category===service.primary_category||candidate.categoryMeta.domain.key===service.categoryMeta.domain.key;});}
function buildInsights(service){return[{label:"Primary lane",value:service.categoryMeta.domain.label,copy:"Use this to anchor the service inside the broader platform map."},{label:"Best when",value:inferBestFit(service),copy:"The operating shape most commonly associated with this service family."},{label:"Next concern",value:inferNextConcern(service),copy:"The day-two question teams usually hit after first adoption."},{label:"Pair it with",value:inferPairing(service),copy:"A natural adjacent capability to inspect in the same vendor catalog."}];}
function buildDecisionGuide(service){const related=getRelatedServices(service).slice(0,3);return[{title:"Use it when",items:["The workload needs "+inferBestFit(service)+".",inferOperatingShape(service),inferTeamSignal(service)]},{title:"Compare it against",items:buildComparisonPrompts(service,related)},{title:"Ask before adopting",items:buildAdoptionQuestions(service)}];}
function buildTimeline(service){return[{kicker:"Frame",title:"Place the service in the workload",copy:"Start by deciding whether "+service.name+" is a control-plane, data-plane, or experience-layer building block."},{kicker:"Compose",title:"Map its closest dependencies",copy:"Use the official category and neighboring services to sketch the supporting network, identity, data, and observability edges."},{kicker:"Operate",title:"Design guardrails before scale",copy:"Review quotas, cost shape, security posture, and failure modes before integrating the service into a shared platform."},{kicker:"Deepen",title:"Move into the product guide",copy:"Once the workload fit is clear, switch from product positioning into the documentation path for hands-on implementation."}];}
function createCodeSamples(service){const library=PATTERN_LIBRARY[config.vendorId]||PATTERN_LIBRARY.aws;return{cli:applyTemplate(library.cli,service),python:applyTemplate(library.python,service)};}
function applyTemplate(template,service){return template.replaceAll("{{SERVICE_NAME}}",service.name).replaceAll("{{DOCS_URL}}",service.docs_url).replaceAll("{{PRODUCT_URL}}",service.product_url);}
function classifyCategory(name){return DOMAIN_META.find((entry)=>entry.match.test(name))||FALLBACK_DOMAIN;}
function findTopDomain(domainTotals){const entries=Object.entries(domainTotals||{});if(!entries.length){return FALLBACK_DOMAIN;}
const[key]=entries.sort((left,right)=>right[1]-left[1])[0];return DOMAIN_META.find((entry)=>entry.key===key)||FALLBACK_DOMAIN;}
function inferBestFit(service){const domain=service.categoryMeta.domain.key;if(domain==="data")return"a pipeline, warehouse, or analytics backbone";if(domain==="storage")return"persistent system-of-record or durable assets";if(domain==="network")return"traffic control, connectivity, or edge delivery";if(domain==="security")return"governance, observability, or access boundaries";if(domain==="compute")return"scalable execution for APIs, jobs, or platforms";if(domain==="build")return"application assembly and event-driven composition";if(domain==="ai")return"model-enabled user experiences or decision support";if(domain==="hybrid")return"cross-environment modernization";return"shared platform assembly and workload composition";}
function inferNextConcern(service){const domain=service.categoryMeta.domain.key;if(domain==="data")return"schema control and cost discipline";if(domain==="storage")return"lifecycle policy and backup posture";if(domain==="network")return"latency, segmentation, and ingress policy";if(domain==="security")return"least privilege and alert fidelity";if(domain==="compute")return"cold starts, autoscaling, and runtime limits";if(domain==="build")return"integration sprawl and contract ownership";if(domain==="ai")return"evaluation quality and governance";if(domain==="hybrid")return"identity consistency and migration sequencing";return"ownership clarity and operating guardrails";}
function inferPairing(service){const peer=getRelatedServices(service)[0];return peer?peer.name:service.primary_category;}
function inferOperatingShape(service){const domain=service.categoryMeta.domain.key;if(domain==="data")return"Favor it when data shape, freshness, and governance are more important than generic compute flexibility.";if(domain==="storage")return"Favor it when durability, lifecycle control, and access patterns are clearer than the application runtime itself.";if(domain==="network")return"Favor it when traffic policy, connectivity, or edge behavior is the main design question.";if(domain==="security")return"Favor it when identity, policy, or detection posture must be explicit from day one.";if(domain==="compute")return"Favor it when runtime scaling and deployment ownership are central workload choices.";if(domain==="build")return"Favor it when integration speed and event-driven composition matter more than custom infrastructure.";if(domain==="ai")return"Favor it when model-enabled features still need strong evaluation and governance loops.";if(domain==="hybrid")return"Favor it when the system must span environments without hiding migration complexity.";return"Favor it when it removes a clear platform burden without creating a larger hidden operating surface.";}
function inferTeamSignal(service){const domain=service.categoryMeta.domain.key;if(domain==="data")return"Best with clear ownership of schemas, lineage, and downstream consumers.";if(domain==="storage")return"Best with explicit retention, backup, and recovery expectations.";if(domain==="network")return"Best with teams that can reason about routing, ingress, segmentation, and latency.";if(domain==="security")return"Best with clear access models, alert ownership, and compliance boundaries.";if(domain==="compute")return"Best with teams that know which parts of runtime behavior they want the platform to manage.";if(domain==="build")return"Best with teams that value integration speed but can keep contracts and dependencies tidy.";if(domain==="ai")return"Best with teams that can pair model adoption with evals, retrieval quality, and approval boundaries.";if(domain==="hybrid")return"Best with teams that already know their identity, network, and migration sequencing constraints.";return"Best when ownership, operational limits, and adjacent services are understood early.";}
function buildComparisonPrompts(service,related){if(related.length){return related.map((item)=>"Compare with "+item.name+" if you need a similar capability with a different control or operating model.");}
return["Compare it with sibling services in "+service.primary_category+" to understand the control-versus-convenience tradeoff.","Check whether a higher-level managed option removes toil without breaking core workload needs.","Check whether a lower-level building block gives necessary control that this service abstracts away."];}
function buildAdoptionQuestions(service){const domain=service.categoryMeta.domain.key;if(domain==="data"){return["What freshness, schema, and cost expectations does the workload impose?","Who owns downstream contracts when the data shape changes?","What part of the pipeline becomes hardest to recover when this service fails?"];}
if(domain==="storage"){return["What is the access pattern: hot, cold, transactional, archival, or mixed?","How will backup, retention, and lifecycle rules be enforced?","Which workloads read from this store, and how much coupling does that create?"];}
if(domain==="network"){return["What latency, ingress, and segmentation requirements drive the choice?","How will traffic fail over when an edge or regional dependency degrades?","Which identity and certificate assumptions must already be true?"];}
if(domain==="security"){return["Which identities, secrets, or policies become authoritative here?","Who triages alerts, and how will noisy detections be handled?","What evidence will prove the control is working in production?"];}
if(domain==="compute"){return["Do you need serverless speed, container flexibility, or VM-level control?","How will scaling, cold starts, quotas, and deployment rollback behave?","Which dependencies make this runtime harder to operate than it first appears?"];}
if(domain==="build"){return["What contracts or event schemas must stay stable between teams?","How will retries, duplicates, or replay affect downstream systems?","Which parts should stay deterministic instead of becoming workflow sprawl?"];}
if(domain==="ai"){return["What evaluation loop will prove the model-backed behavior is improving?","What retrieval, data, or approval boundaries sit around this service?","What happens when the model output is low confidence or clearly wrong?"];}
if(domain==="hybrid"){return["Which identity and network assumptions must hold across environments?","What sequence makes migration reversible instead of all-or-nothing?","Where will operations become split-brain unless ownership is explicit?"];}
return["What platform burden does this service remove, and what burden remains with the team?","Which adjacent service choices become easier or harder after you adopt it?","What operational evidence would you want before standardizing on it?"];}
function renderLoadError(error){const message=error&&error.message?error.message:"Catalog loading failed.";if(ui.serviceGrid){ui.serviceGrid.innerHTML=`<div class="empty-state">${escapeHtml(message)}</div>`;}
if(ui.detailPanel){ui.detailPanel.innerHTML=`<div class="empty-state">The viewer could not load its service data. Check that <code>catalog.json</code> is published with the page.</div>`;}}
function cleanCopy(text){return(text||"").replace(/\s+/g," ").replace(/[“”]/g,"\"").replace(/[‘’]/g,"'").trim();}
function shorten(text,limit){if(!text||text.length<=limit){return text||"";}
return text.slice(0,limit-1).trim()+"...";}
function pickJourneyColor(index){const palette=["#2563eb","#14b8a6","#f97316","#8b5cf6","#ef4444"];return palette[index%palette.length];}
function formatNumber(value){return new Intl.NumberFormat("en-US").format(Number(value||0));}
function escapeHtml(value){return String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}
function hexToRgba(hex,alpha){const normalized=hex.replace("#","");const value=normalized.length===3?normalized.split("").map((char)=>char+char).join(""):normalized;const number=parseInt(value,16);const red=(number>>16)&255;const green=(number>>8)&255;const blue=number&255;return"rgba("+red+", "+green+", "+blue+", "+alpha+")";}})();