(function(){const THEME_STORAGE_KEY="visualizerHubTheme";const ACCENT_STORAGE_KEY="visualizerHubAccent";const FONT_STORAGE_KEY="visualizerHubFont";const THEMES={dark:true,light:true,ocean:true,forest:true,graphite:true,arctic:true};const FONT_PRESETS={system:{body:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',mono:'"Cascadia Code", Consolas, "Courier New", monospace'},inter:{body:'Inter, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',mono:'"JetBrains Mono", "Cascadia Code", Consolas, monospace'},space:{body:'"Space Grotesk", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',mono:'"IBM Plex Mono", "Cascadia Code", Consolas, monospace'},manrope:{body:'Manrope, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',mono:'"DM Mono", "Cascadia Code", Consolas, monospace'}};const SCRIPT_SRC=document.currentScript&&document.currentScript.src?document.currentScript.src:new URL("theme-sync.js",window.location.href).href;const APP_BASE_URL=new URL("./",SCRIPT_SRC);const APP_ROOT_URL=new URL("index.html",APP_BASE_URL);const HOME_LINKBAR_ID="visualizer-home-linkbar";const HIDE_CONTROLS_CSS=`
    #themeToggle,
    .theme-toggle,
    .theme-switcher,
    .theme-swatches,
    .theme-label,
    .theme-swatch {
      display: none !important;
    }
  `;const OVERRIDE_CSS=`
    :root {
      --theme-accent: #2563eb;
      --accent: var(--theme-accent);
      --font-ui: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      --font-stack: var(--font-ui);
      --body: var(--font-ui);
      --font: var(--font-ui);
      --font-mono: "Cascadia Code", Consolas, "Courier New", monospace;
      --mono: var(--font-mono);
      --selected-glow: rgba(37, 99, 235, 0.34);
      --link: var(--accent);
      color-scheme: light;
    }

    html[data-theme="dark"] {
      --bg: #0b1220;
      --bg-2: #0d1728;
      --surface: #111827;
      --surface-2: #152033;
      --surface-3: #1b2940;
      --surface-strong: #111827;
      --surface-muted: #152033;
      --surf: #111827;
      --surf2: #152033;
      --surf3: #1b2940;
      --panel: #111827;
      --panel-2: #152033;
      --panel-3: #1b2940;
      --s2: #152033;
      --s3: #1b2940;
      --s4: #22324b;
      --border: #243244;
      --border-hi: #32465f;
      --bd: #243244;
      --bd2: #32465f;
      --divider: rgba(157, 176, 201, 0.16);
      --text: #e5eefc;
      --tx: #e5eefc;
      --text-muted: #9db0c9;
      --tx2: #9db0c9;
      --muted: #9db0c9;
      --tm: #9db0c9;
      --text-soft: #7d91ab;
      --text-faint: #5f728b;
      --tx3: #5f728b;
      color-scheme: dark;
    }

    html[data-theme="light"] {
      --bg: #eef4fa;
      --bg-2: #ffffff;
      --surface: #ffffff;
      --surface-2: #f3f7fc;
      --surface-3: #e8eef6;
      --surface-strong: #ffffff;
      --surface-muted: #f3f7fc;
      --surf: #ffffff;
      --surf2: #f3f7fc;
      --surf3: #e8eef6;
      --panel: #ffffff;
      --panel-2: #f3f7fc;
      --panel-3: #e8eef6;
      --s2: #f3f7fc;
      --s3: #e8eef6;
      --s4: #dde7f1;
      --border: #d5dfec;
      --border-hi: #bcc9d8;
      --bd: #d5dfec;
      --bd2: #bcc9d8;
      --divider: rgba(33, 50, 70, 0.12);
      --text: #102033;
      --tx: #102033;
      --text-muted: #57687c;
      --tx2: #57687c;
      --muted: #57687c;
      --tm: #57687c;
      --text-soft: #7a8ea4;
      --text-faint: #9aabbd;
      --tx3: #7a8ea4;
      color-scheme: light;
    }

    html[data-theme="ocean"] {
      --bg: #081a24;
      --bg-2: #0d2230;
      --surface: #102937;
      --surface-2: #143242;
      --surface-3: #1a3f51;
      --surface-strong: #102937;
      --surface-muted: #143242;
      --surf: #102937;
      --surf2: #143242;
      --surf3: #1a3f51;
      --panel: #102937;
      --panel-2: #143242;
      --panel-3: #1a3f51;
      --s2: #143242;
      --s3: #1a3f51;
      --s4: #22506a;
      --border: #245069;
      --border-hi: #32718f;
      --bd: #245069;
      --bd2: #32718f;
      --divider: rgba(134, 191, 204, 0.16);
      --text: #e6f7fb;
      --tx: #e6f7fb;
      --text-muted: #9dc7d0;
      --tx2: #9dc7d0;
      --muted: #9dc7d0;
      --tm: #9dc7d0;
      --text-soft: #77a6b3;
      --text-faint: #5d8794;
      --tx3: #5d8794;
      color-scheme: dark;
    }

    html[data-theme="forest"] {
      --bg: #091713;
      --bg-2: #0e1f19;
      --surface: #10231d;
      --surface-2: #152c25;
      --surface-3: #1b372e;
      --surface-strong: #10231d;
      --surface-muted: #152c25;
      --surf: #10231d;
      --surf2: #152c25;
      --surf3: #1b372e;
      --panel: #10231d;
      --panel-2: #152c25;
      --panel-3: #1b372e;
      --s2: #152c25;
      --s3: #1b372e;
      --s4: #245241;
      --border: #244437;
      --border-hi: #32735a;
      --bd: #244437;
      --bd2: #32735a;
      --divider: rgba(150, 199, 172, 0.16);
      --text: #ebf7ef;
      --tx: #ebf7ef;
      --text-muted: #abcab4;
      --tx2: #abcab4;
      --muted: #abcab4;
      --tm: #abcab4;
      --text-soft: #7ea68b;
      --text-faint: #5e7f6b;
      --tx3: #5e7f6b;
      color-scheme: dark;
    }

    html[data-theme="graphite"] {
      --bg: #0f1216;
      --bg-2: #141920;
      --surface: #171d24;
      --surface-2: #1c242d;
      --surface-3: #232d38;
      --surface-strong: #171d24;
      --surface-muted: #1c242d;
      --surf: #171d24;
      --surf2: #1c242d;
      --surf3: #232d38;
      --panel: #171d24;
      --panel-2: #1c242d;
      --panel-3: #232d38;
      --s2: #1c242d;
      --s3: #232d38;
      --s4: #334152;
      --border: #2c3847;
      --border-hi: #455466;
      --bd: #2c3847;
      --bd2: #455466;
      --divider: rgba(165, 178, 193, 0.15);
      --text: #eef1f5;
      --tx: #eef1f5;
      --text-muted: #b1bccb;
      --tx2: #b1bccb;
      --muted: #b1bccb;
      --tm: #b1bccb;
      --text-soft: #8995a7;
      --text-faint: #677283;
      --tx3: #677283;
      color-scheme: dark;
    }

    html[data-theme="arctic"] {
      --bg: #edf6fb;
      --bg-2: #ffffff;
      --surface: #ffffff;
      --surface-2: #f4f9fd;
      --surface-3: #e7f1f7;
      --surface-strong: #ffffff;
      --surface-muted: #f4f9fd;
      --surf: #ffffff;
      --surf2: #f4f9fd;
      --surf3: #e7f1f7;
      --panel: #ffffff;
      --panel-2: #f4f9fd;
      --panel-3: #e7f1f7;
      --s2: #f4f9fd;
      --s3: #e7f1f7;
      --s4: #d8e7f1;
      --border: #d4e3ee;
      --border-hi: #b7ccda;
      --bd: #d4e3ee;
      --bd2: #b7ccda;
      --divider: rgba(42, 67, 90, 0.11);
      --text: #11283d;
      --tx: #11283d;
      --text-muted: #5a7388;
      --tx2: #5a7388;
      --muted: #5a7388;
      --tm: #5a7388;
      --text-soft: #7f9aac;
      --text-faint: #9cb1c0;
      --tx3: #7f9aac;
      color-scheme: light;
    }

    body,
    button,
    input,
    textarea,
    select {
      font-family: var(--body, var(--font-stack, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif)) !important;
    }

    code,
    pre,
    kbd,
    samp {
      font-family: var(--mono, var(--font-mono, "Cascadia Code", Consolas, monospace)) !important;
    }

    a {
      color: var(--link, var(--accent));
    }

    ::selection {
      background: rgba(37, 99, 235, 0.22);
      color: var(--text);
    }

    .visualizer-home-linkbar {
      position: sticky;
      top: 10px;
      z-index: 80;
      width: min(1100px, calc(100% - 28px));
      margin: 12px auto 10px;
    }

    .visualizer-home-linkbar__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.7rem 0.9rem;
      border: 1px solid color-mix(in srgb, var(--border, #243244) 82%, var(--accent, #2563eb));
      border-radius: 999px;
      background: color-mix(in srgb, var(--surface, var(--panel, #111827)) 82%, transparent);
      box-shadow: 0 12px 30px rgba(2, 6, 23, 0.16);
      backdrop-filter: blur(14px);
    }

    .visualizer-home-linkbar__home {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 38px;
      padding: 0.5rem 0.9rem;
      border: 1px solid color-mix(in srgb, var(--accent, #2563eb) 64%, transparent);
      border-radius: 999px;
      background: color-mix(in srgb, var(--accent, #2563eb) 16%, transparent);
      color: var(--text, #e5eefc);
      font-size: 0.86rem;
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
    }

    .visualizer-home-linkbar__home:hover,
    .visualizer-home-linkbar__home:focus-visible {
      border-color: var(--accent, #2563eb);
      background: color-mix(in srgb, var(--accent, #2563eb) 24%, transparent);
    }

    .visualizer-home-linkbar__title {
      min-width: 0;
      color: var(--text, #e5eefc);
      font-size: 0.9rem;
      font-weight: 700;
      line-height: 1.35;
      text-align: right;
    }

    .visualizer-home-linkbar__meta {
      display: grid;
      justify-items: end;
      gap: 0.12rem;
      min-width: 0;
    }

    .visualizer-home-linkbar__author {
      color: var(--text-muted, var(--muted, #9db0c9));
      font-size: 0.76rem;
      font-weight: 600;
      line-height: 1.3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .visualizer-home-linkbar__author a {
      color: var(--text, #e5eefc);
      text-decoration: underline;
      text-underline-offset: 0.16em;
    }

    @media (max-width: 720px) {
      .visualizer-home-linkbar {
        width: calc(100% - 18px);
        margin: 10px auto 8px;
      }

      .visualizer-home-linkbar__inner {
        gap: 0.75rem;
        padding: 0.58rem 0.7rem;
      }

      .visualizer-home-linkbar__title {
        font-size: 0.8rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .visualizer-home-linkbar__author {
        font-size: 0.7rem;
      }

      .visualizer-home-linkbar__home {
        min-height: 34px;
        padding-inline: 0.75rem;
      }
    }
  `;const root=document.documentElement;function isLightTheme(theme){return theme==="light"||theme==="arctic";}
function normalizeTheme(theme){return THEMES[theme]?theme:"dark";}
function normalizeAccent(accent){const raw=String(accent||"").trim();if(!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(raw)){return"#2563eb";}
if(raw.length===4){return("#"+
raw.slice(1).split("").map((char)=>char+char).join("").toLowerCase());}
return raw.toLowerCase();}
function normalizeFont(font){return FONT_PRESETS[font]?font:"system";}
function escapeHtml(value){return String(value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}
function getFontPreset(fontId){return FONT_PRESETS[normalizeFont(fontId)];}
function ensureStyle(id,cssText){if(document.getElementById(id)){return;}
const style=document.createElement("style");style.id=id;style.textContent=cssText;document.head.appendChild(style);}
function ensureFontAssets(){if(document.getElementById("visualizer-shared-fonts")){return;}
const link=document.createElement("link");link.id="visualizer-shared-fonts";link.rel="stylesheet";link.href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap";document.head.appendChild(link);}
function ensureHeadLink(id,rel,href,extra){if(document.getElementById(id)){return;}
const link=document.createElement("link");link.id=id;link.rel=rel;link.href=href;if(extra&&extra.type){link.type=extra.type;}
if(extra&&extra.sizes){link.sizes=extra.sizes;}
document.head.appendChild(link);}
function ensureBrandAssets(){ensureHeadLink("visualizer-shared-favicon","icon",new URL("favicon.svg",APP_BASE_URL).href,{type:"image/svg+xml"});ensureHeadLink("visualizer-shared-apple-touch-icon","apple-touch-icon",new URL("assets/icon-512.png",APP_BASE_URL).href,{sizes:"512x512"});ensureHeadLink("visualizer-shared-manifest","manifest",new URL("site.webmanifest",APP_BASE_URL).href);}
function shouldRenderHomeLinkBar(){const path=window.location.pathname.replace(/\\/g,"/");if(document.documentElement.getAttribute("data-home-landing")==="on"){return false;}
if(document.documentElement.getAttribute("data-shell-home-link")==="off"){return false;}
return!/\/hub-home\.html$/i.test(path);}
function getCurrentPageTitle(){const title=String(document.title||"").trim();if(!title){return"Visualizer";}
return title.replace(/\s+[|].*$/,"").trim();}
function ensureHomeLinkBar(){if(!document.body||!shouldRenderHomeLinkBar()||document.getElementById(HOME_LINKBAR_ID)){return;}
const bar=document.createElement("div");bar.id=HOME_LINKBAR_ID;bar.className="visualizer-home-linkbar";bar.innerHTML=`
      <div class="visualizer-home-linkbar__inner">
        <a class="visualizer-home-linkbar__home" href="${APP_ROOT_URL.href}" target="_top" rel="noreferrer">Home</a>
        <div class="visualizer-home-linkbar__meta">
          <div class="visualizer-home-linkbar__title">${escapeHtml(getCurrentPageTitle())}</div>
          <div class="visualizer-home-linkbar__author">Built by <a href="https://github.com/subramanyamnvr" target="_blank" rel="noreferrer">@subramanyamnvr</a></div>
        </div>
      </div>
    `;document.body.insertBefore(bar,document.body.firstChild||null);}
function clamp(value,min,max){return Math.min(max,Math.max(min,value));}
function hexToRgb(hex){const normalized=normalizeAccent(hex).slice(1);return{r:parseInt(normalized.slice(0,2),16),g:parseInt(normalized.slice(2,4),16),b:parseInt(normalized.slice(4,6),16)};}
function rgbToHex(rgb){return"#"+[rgb.r,rgb.g,rgb.b].map((value)=>clamp(Math.round(value),0,255).toString(16).padStart(2,"0")).join("");}
function rgbToHsl(rgb){const red=rgb.r/255;const green=rgb.g/255;const blue=rgb.b/255;const max=Math.max(red,green,blue);const min=Math.min(red,green,blue);const delta=max-min;let hue=0;let saturation=0;const lightness=(max+min)/2;if(delta!==0){saturation=delta/(1-Math.abs(2*lightness-1));if(max===red){hue=60*(((green-blue)/delta)%6);}else if(max===green){hue=60*((blue-red)/delta+2);}else{hue=60*((red-green)/delta+4);}}
if(hue<0){hue+=360;}
return{h:hue,s:saturation,l:lightness};}
function hexToHsl(hex){return rgbToHsl(hexToRgb(hex));}
function hslToHex(hue,saturation,lightness){const h=((hue%360)+360)%360;const s=clamp(saturation,0,1);const l=clamp(lightness,0,1);const chroma=(1-Math.abs(2*l-1))*s;const segment=h/60;const x=chroma*(1-Math.abs((segment%2)-1));let red=0;let green=0;let blue=0;if(segment>=0&&segment<1){red=chroma;green=x;}else if(segment<2){red=x;green=chroma;}else if(segment<3){green=chroma;blue=x;}else if(segment<4){green=x;blue=chroma;}else if(segment<5){red=x;blue=chroma;}else{red=chroma;blue=x;}
const match=l-chroma/2;return rgbToHex({r:(red+match)*255,g:(green+match)*255,b:(blue+match)*255});}
function shiftHue(hex,degrees,theme,saturationBump,lightnessBump){const hsl=hexToHsl(hex);const isLight=isLightTheme(theme);const lightnessFloor=isLight?0.34:0.48;const lightnessCeiling=isLight?0.58:0.72;const nextLightness=clamp(hsl.l+(lightnessBump||0)+(isLight?-0.08:0.04),lightnessFloor,lightnessCeiling);return hslToHex(hsl.h+degrees,clamp(hsl.s+(saturationBump||0),0.45,0.88),nextLightness);}
function alpha(hex,opacity){const rgb=hexToRgb(hex);return"rgba("+rgb.r+", "+rgb.g+", "+rgb.b+", "+opacity+")";}
function applyAccentPalette(accent,theme){const baseAccent=normalizeAccent(accent);const isLight=isLightTheme(theme);const violet=shiftHue(baseAccent,60,theme,0.03,0.02);const teal=shiftHue(baseAccent,-60,theme,0.02,0.02);const green=shiftHue(baseAccent,-105,theme,0.01,0.01);const amber=shiftHue(baseAccent,180,theme,-0.08,-0.02);const orange=shiftHue(baseAccent,150,theme,-0.05,-0.01);const rose=shiftHue(baseAccent,120,theme,0,0.01);const pink=shiftHue(baseAccent,90,theme,0.02,0.02);root.style.setProperty("--theme-accent",baseAccent);root.style.setProperty("--accent",baseAccent);root.style.setProperty("--primary",baseAccent);root.style.setProperty("--link",baseAccent);root.style.setProperty("--a1",baseAccent);root.style.setProperty("--a2",teal);root.style.setProperty("--a3",amber);root.style.setProperty("--a4",orange);root.style.setProperty("--a5",green);root.style.setProperty("--a6",violet);root.style.setProperty("--blue",baseAccent);root.style.setProperty("--violet",violet);root.style.setProperty("--teal",teal);root.style.setProperty("--green",green);root.style.setProperty("--amber",amber);root.style.setProperty("--orange",orange);root.style.setProperty("--rose",rose);root.style.setProperty("--pink",pink);root.style.setProperty("--vg",alpha(violet,isLight?0.14:0.15));root.style.setProperty("--bg2",alpha(baseAccent,isLight?0.14:0.15));root.style.setProperty("--tg",alpha(teal,isLight?0.14:0.15));root.style.setProperty("--gg",alpha(green,isLight?0.14:0.15));root.style.setProperty("--ag",alpha(amber,isLight?0.16:0.16));root.style.setProperty("--rg",alpha(rose,isLight?0.15:0.15));root.style.setProperty("--selected-glow",alpha(baseAccent,isLight?0.22:0.34));const selectionStyle=document.getElementById("visualizer-selection-style")||document.createElement("style");selectionStyle.id="visualizer-selection-style";selectionStyle.textContent="::selection { background: "+alpha(baseAccent,isLight?0.24:0.26)+"; color: var(--text); }";document.head.appendChild(selectionStyle);}
function applyFont(fontId){const normalizedFont=normalizeFont(fontId);const fontPreset=getFontPreset(normalizedFont);root.setAttribute("data-font",normalizedFont);root.style.setProperty("--font-ui",fontPreset.body);root.style.setProperty("--font-stack",fontPreset.body);root.style.setProperty("--body",fontPreset.body);root.style.setProperty("--font",fontPreset.body);root.style.setProperty("--font-mono",fontPreset.mono);root.style.setProperty("--mono",fontPreset.mono);}
function syncHighlightTheme(theme){const link=document.getElementById("hljs-theme-link");if(!link){return;}
link.href=isLightTheme(theme)?"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css":"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css";}
function readStoredTheme(){try{return normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY));}catch(error){return"dark";}}
function readStoredAccent(){try{return normalizeAccent(localStorage.getItem(ACCENT_STORAGE_KEY));}catch(error){return"#2563eb";}}
function readStoredFont(){try{return normalizeFont(localStorage.getItem(FONT_STORAGE_KEY));}catch(error){return"system";}}
function normalizePreferences(input){if(input&&typeof input==="object"){return{theme:normalizeTheme(input.theme||readStoredTheme()),accent:normalizeAccent(input.accent||readStoredAccent()),font:normalizeFont(input.font||readStoredFont())};}
return{theme:normalizeTheme(input||readStoredTheme()),accent:readStoredAccent(),font:readStoredFont()};}
function applyVisualizerTheme(input){const preferences=normalizePreferences(input);ensureBrandAssets();ensureFontAssets();ensureStyle("visualizer-theme-override",OVERRIDE_CSS);ensureStyle("visualizer-theme-hide-controls",HIDE_CONTROLS_CSS);root.setAttribute("data-theme",preferences.theme);applyAccentPalette(preferences.accent,preferences.theme);applyFont(preferences.font);syncHighlightTheme(preferences.theme);if(typeof window.setTheme==="function"){try{window.setTheme(isLightTheme(preferences.theme)?"light":"dark");}catch(error){}}
try{localStorage.setItem(THEME_STORAGE_KEY,preferences.theme);localStorage.setItem(ACCENT_STORAGE_KEY,preferences.accent);localStorage.setItem(FONT_STORAGE_KEY,preferences.font);}catch(error){}}
window.applyVisualizerTheme=applyVisualizerTheme;applyVisualizerTheme({theme:readStoredTheme(),accent:readStoredAccent(),font:readStoredFont()});document.addEventListener("DOMContentLoaded",()=>{ensureHomeLinkBar();});window.addEventListener("load",()=>{applyVisualizerTheme({theme:readStoredTheme(),accent:readStoredAccent(),font:readStoredFont()});ensureHomeLinkBar();});window.addEventListener("message",(event)=>{if(!event.data||event.data.type!=="visualizer-theme"){return;}
applyVisualizerTheme(event.data.preferences||event.data);});window.addEventListener("storage",(event)=>{if(event.key!==THEME_STORAGE_KEY&&event.key!==ACCENT_STORAGE_KEY&&event.key!==FONT_STORAGE_KEY){return;}
applyVisualizerTheme({theme:readStoredTheme(),accent:readStoredAccent(),font:readStoredFont()});});})();