(function(){const hub=window.VISUALIZER_HUB;const CATEGORY_ORDER=["Machine Learning","Deep Learning","Gen AI","Data Engineering","Cloud","Cloud Architecture","System Design","Python","NLP","Computer Vision","Miscellaneous"];const FEATURED_CATEGORIES=["Machine Learning","Gen AI","Cloud","System Design"];const HUB_INDEX_PATH="./index.html";if(!hub||!Array.isArray(hub.visualizers)||hub.visualizers.length===0){return;}
const categoryGrid=document.getElementById("categoryGrid");const featuredGrid=document.getElementById("featuredGrid");const homeStats=document.getElementById("homeStats");const categoryMeta=hub.categories||{};const groups=CATEGORY_ORDER.map((category,index)=>{const items=hub.visualizers.filter((item)=>item.category===category);if(!items.length){return null;}
return{category,items,accent:items[0].accent||getFallbackAccent(index),href:HUB_INDEX_PATH+"#"+items[0].id,openLabel:items[0].navLabel||items[0].title,description:(categoryMeta[category]&&categoryMeta[category].description)||items[0].description||items[0].plainIntro||"",preview:items.slice(0,3).map((item)=>item.navLabel||item.title)};}).filter(Boolean);renderStats();renderFeatured();renderCategories();function renderStats(){if(!homeStats){return;}
homeStats.innerHTML=[renderStat(hub.visualizers.length,"Visualizers"),renderStat(groups.length,"Categories"),renderStat(countUniqueTags(hub.visualizers),"Tagged topics"),renderStat("Fast","Static delivery")].join("");}
function renderFeatured(){if(!featuredGrid){return;}
const featuredGroups=FEATURED_CATEGORIES.map((category)=>groups.find((group)=>group.category===category)).filter(Boolean);featuredGrid.innerHTML=[renderSpotlightCard(),featuredGroups.map((group)=>renderFeatureCard(group)).join("")].join("");}
function renderCategories(){if(!categoryGrid){return;}
categoryGrid.innerHTML=groups.map((group)=>renderCategoryCard(group)).join("");}
function renderSpotlightCard(){const firstGroup=groups[0];return`
      <article class="spotlight-card" style="--panel-accent:${escapeHtml(firstGroup.accent)};">
        <div class="spotlight-card__content">
          <div>
            <p class="panel-card__kicker">Library Overview</p>
            <h3>Browse by category first, then jump straight into the right atlas.</h3>
          </div>
          <p>
            The homepage now focuses on readable category summaries, direct visualizer links, and faster scanning across the full collection.
          </p>
          <div class="spotlight-card__chips">
            <span class="spotlight-chip">${hub.visualizers.length} visualizers</span>
            <span class="spotlight-chip">${groups.length} categories</span>
            <span class="spotlight-chip">Direct links</span>
            <span class="spotlight-chip">Theme-aware styling</span>
          </div>
          <div class="spotlight-card__cta-row">
            <a class="spotlight-card__action spotlight-card__action--primary" href="${escapeHtml(firstGroup.href)}" target="_top" rel="noreferrer">Open ${escapeHtml(firstGroup.category)}</a>
            <a class="spotlight-card__action" href="#categoryPanelsTitle">Browse every category</a>
          </div>
        </div>
      </article>
    `;}
function renderFeatureCard(group){return`
      <a
        class="feature-card"
        href="${escapeHtml(group.href)}"
        target="_top"
        rel="noreferrer"
        style="--panel-accent:${escapeHtml(group.accent)};"
      >
        <div class="feature-card__content">
          <div>
            <p class="panel-card__kicker">Featured Category</p>
            <h3>${escapeHtml(group.category)}</h3>
          </div>
          <p>${escapeHtml(group.description)}</p>
          <div class="feature-card__footer">
            <span class="feature-card__count">${group.items.length} ${group.items.length === 1 ? "visualizer" : "visualizers"}</span>
            <span class="feature-card__cta">Open ${escapeHtml(group.openLabel)}</span>
          </div>
        </div>
      </a>
    `;}
function renderCategoryCard(group){return`
      <a
        class="category-panel"
        href="${escapeHtml(group.href)}"
        target="_top"
        rel="noreferrer"
        style="--panel-accent:${escapeHtml(group.accent)};"
      >
        <div class="category-panel__content">
          <div>
            <p class="panel-card__kicker">Category</p>
            <h3>${escapeHtml(group.category)}</h3>
          </div>
          <p>${escapeHtml(group.description)}</p>
          <div class="category-panel__meta">
            <span class="category-count-pill">${group.items.length} ${group.items.length === 1 ? "visualizer" : "visualizers"}</span>
            <span class="category-panel__link-label">Opens ${escapeHtml(group.openLabel)}</span>
          </div>
          <div class="category-panel__previews">
            ${group.preview.map((label) => `<span class="preview-pill">${escapeHtml(label)}</span>`).join("")}
          </div>
          <span class="category-panel__cta">Open category</span>
        </div>
      </a>
    `;}
function renderStat(value,label){return`
      <article class="stat-pill">
        <strong>${escapeHtml(String(value))}</strong>
        <span>${escapeHtml(label)}</span>
      </article>
    `;}
function countUniqueTags(items){return new Set(items.flatMap((item)=>Array.isArray(item.tags)?item.tags:[])).size;}
function getFallbackAccent(index){const accents=["#2563eb","#0f766e","#4f46e5","#ea580c","#0891b2","#15803d"];return accents[index%accents.length];}
function escapeHtml(value){return String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}})();