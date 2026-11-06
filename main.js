/* ==========================================================================
   MAIN.JS — SHARED THEME ENGINE, NAVIGATION, SCROLL-SPY & MULTI-PAGE RENDERER
   ========================================================================== */

const BRAND_SVG = `
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="64" height="64" rx="16" fill="#2563EB"/>
    <path d="M18 20V44M18 32L30 20M22 28L31 44" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M47 23C45.5 20.8 42.8 20 40 20C35.5 20 33 22.5 33 25.8C33 29.5 36.5 30.8 40.5 32C44.5 33.2 48 34.8 48 39C48 42.8 44.5 45 39.5 45C36 45 33.2 43.8 31.5 41.5" stroke="#93C5FD" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/* 1. Initialize Theme (Default: Soft Light Mode; remembers preference) */
(function initTheme() {
    const savedTheme = localStorage.getItem("saymon_theme") || "light";
    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
})();

document.addEventListener("DOMContentLoaded", () => {
    injectBrandLogos();
    setupThemeToggle();
    setupMobileMenu();
    setupScrollProgress();
    setupScrollSpy();
    setupTypingEffect();
    setupCustomCursor(); // <-- Ensure this is called here
    
    renderHomeProjects();
    renderAllProjectsPage();
    renderProjectDetailPage();
    renderHomeBlogs();
    renderAllBlogsPage();
    renderBlogDetailPage();
    setupContactForm();
    syncGitHubDates();
});

function injectBrandLogos() {
    document.querySelectorAll(".brand-logo-slot").forEach(slot => {
        slot.innerHTML = `${BRAND_SVG}<span>Saymon<span class="accent-text">.</span></span>`;
    });
}

function setupThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;

    const updateIcon = () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        toggleBtn.innerHTML = isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
        toggleBtn.setAttribute("aria-label", isDark ? "Switch to Light Mode" : "Switch to Dark Mode");
    };

    updateIcon();

    toggleBtn.addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        if (isDark) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("saymon_theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("saymon_theme", "dark");
        }
        updateIcon();
    });
}

function setupMobileMenu() {
    const menuBtn = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
    if (!menuBtn || !navbar) return;

    menuBtn.addEventListener("click", () => {
        const open = navbar.classList.toggle("active");
        menuBtn.innerHTML = open
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    navbar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
}

function setupScrollProgress() {
    const bar = document.querySelector(".scroll-progress");
    if (!bar) return;
    window.addEventListener("scroll", () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
        bar.style.width = `${pct}%`;
    });
}

/* Scroll-Spy so navbar links highlight smoothly as user scrolls */
function setupScrollSpy() {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".navbar a[href^='#']");
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach(link => {
                        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                    });
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach(sec => observer.observe(sec));
}

/* Grammatical Typing Effect (Avoids "I'm a AI Researcher" bug from video) */
function setupTypingEffect() {
    const target = document.querySelector(".typing-text");
    if (!target) return;

    const roles = [
        "a Software Engineer",
        "an AI & Vision Researcher",
        "an Algorithmic Problem Solver",
        "a Full-Stack Developer"
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function tick() {
        const current = roles[roleIdx];
        if (!deleting) {
            charIdx++;
            target.textContent = current.substring(0, charIdx);
            if (charIdx >= current.length) {
                deleting = true;
                setTimeout(tick, 1500);
                return;
            }
        } else {
            charIdx--;
            target.textContent = current.substring(0, charIdx);
            if (charIdx <= 0) {
                deleting = false;
                roleIdx = (roleIdx + 1) % roles.length;
            }
        }
        setTimeout(tick, deleting ? 38 : 70);
    }
    tick();
}

/* ==========================================================================
   PROJECT CARD HTML BUILDER (NATURAL PHOTOGRAPHY THUMBNAILS)
   ========================================================================== */
function createProjectCardHTML(project) {
    const tagsHTML = project.tech.map(t => `<span class="tag-chip">${t}</span>`).join("");
    return `
        <article class="project-card" data-category="${project.category}">
            <a href="project-details.html?id=${project.id}" aria-label="${project.title} details">
                ${renderProjectThumbnail(project)}
            </a>
            <div class="project-body">
                <h3><a href="project-details.html?id=${project.id}">${project.title}</a></h3>
                <p>${project.summary}</p>
                <div class="tag-row">${tagsHTML}</div>
                <div class="project-actions">
                    <a href="project-details.html?id=${project.id}" class="case-study-link">
                        <span>View Case Study</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                    <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="repo-icon-link" aria-label="GitHub Repository" title="View Source on GitHub">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderHomeProjects() {
    const container = document.getElementById("home-projects-grid");
    if (!container || typeof SITE_DATA === "undefined") return;

    const featured = SITE_DATA.projects.filter(p => p.featured).slice(0, 4);
    container.innerHTML = featured.map(createProjectCardHTML).join("");
}

function renderAllProjectsPage() {
    const container = document.getElementById("all-projects-grid");
    if (!container || typeof SITE_DATA === "undefined") return;

    const renderFiltered = (filter) => {
        const list = filter === "all"
            ? SITE_DATA.projects
            : SITE_DATA.projects.filter(p => p.category === filter);
        container.innerHTML = list.map(createProjectCardHTML).join("");
    };

    renderFiltered("all");

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderFiltered(btn.dataset.filter);
        });
    });
}

function renderProjectDetailPage() {
    const wrapper = document.getElementById("project-detail-mount");
    if (!wrapper || typeof SITE_DATA === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const project = SITE_DATA.projects.find(p => p.id === id) || SITE_DATA.projects[0];

    document.title = `${project.title} | KM Shofiullah Saymon`;

    const featuresList = project.features.map(f => `<li>${f}</li>`).join("");
    const techBadges = project.tech.map(t => `<span class="skill-item">${t}</span>`).join("");

    wrapper.innerHTML = `
        <section class="page-hero">
            <div class="container">
                <a href="projects.html" class="breadcrumb">
                    <i class="fa-solid fa-arrow-left"></i> Back to All Projects
                </a>
                <h1 class="section-title">${project.title}</h1>
                <p class="section-desc" style="margin-top: 0.6rem;">${project.summary}</p>
            </div>
        </section>

        <div class="detail-container">
            <div class="detail-banner">
                <img src="${project.image}" alt="${project.imageAlt || project.title}" style="width: 100%; max-height: 460px; object-fit: cover;">
            </div>

            <div class="detail-meta-grid">
                <div>
                    <span class="section-kicker">CATEGORY</span>
                    <strong>${project.categoryLabel}</strong>
                </div>
                <div>
                    <span class="section-kicker">TIMELINE</span>
                    <strong>${project.date}</strong>
                </div>
                <div>
                    <span class="section-kicker">SOURCE CODE</span>
                    <div>
                        <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="case-study-link">
                            GitHub Repository <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="article-content">
                <h3>1. Problem Statement & Context</h3>
                <p>${project.problem}</p>

                <h3>2. Engineering Approach & Architecture</h3>
                <p>${project.solution}</p>

                <h3>3. Key Technical Highlights</h3>
                <ul>${featuresList}</ul>

                <h3>4. Technologies & Toolkit Used</h3>
                <div class="skill-badge-grid" style="margin-top: 1rem; margin-bottom: 2.5rem;">
                    ${techBadges}
                </div>

                <div class="btn-group">
                    <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        <i class="fa-brands fa-github"></i> View GitHub Repository
                    </a>
                    <a href="projects.html" class="btn btn-secondary">
                        Browse More Projects
                    </a>
                </div>
            </div>
        </div>
    `;
}

/* ==========================================================================
   BLOG CARD & READER BUILDER (WITH NATURAL PHOTOGRAPHY COVERS)
   ========================================================================== */
function createBlogCardHTML(post) {
    return `
        <article class="blog-card">
            <a href="post.html?id=${post.id}" class="blog-thumb" aria-label="${post.title}">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
            </a>
            <div class="blog-card-body">
                <div class="blog-meta">
                    <span class="blog-category-pill">${post.category}</span>
                    <span>${post.readTime}</span>
                </div>
                <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
                <p>${post.excerpt}</p>
                <div class="project-actions">
                    <span style="font-family: 'DM Mono', monospace; font-size: 0.72rem; color: var(--muted-light);">${post.date}</span>
                    <a href="post.html?id=${post.id}" class="case-study-link">
                        Read Article <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderHomeBlogs() {
    const container = document.getElementById("home-blog-grid");
    if (!container || typeof SITE_DATA === "undefined") return;
    container.innerHTML = SITE_DATA.blogs.slice(0, 3).map(createBlogCardHTML).join("");
}

function renderAllBlogsPage() {
    const container = document.getElementById("all-blogs-grid");
    if (!container || typeof SITE_DATA === "undefined") return;
    container.innerHTML = SITE_DATA.blogs.map(createBlogCardHTML).join("");
}

function renderBlogDetailPage() {
    const wrapper = document.getElementById("blog-detail-mount");
    if (!wrapper || typeof SITE_DATA === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const post = SITE_DATA.blogs.find(b => b.id === id) || SITE_DATA.blogs[0];

    document.title = `${post.title} | Saymon's Engineering Notes`;

    const tagsHTML = post.tags.map(t => `<span class="tag-chip">#${t}</span>`).join("");

    wrapper.innerHTML = `
        <section class="page-hero">
            <div class="container">
                <a href="blog.html" class="breadcrumb">
                    <i class="fa-solid fa-arrow-left"></i> Back to All Articles
                </a>
                <div style="margin-bottom: 0.75rem;">
                    <span class="blog-category-pill" style="font-family: 'DM Mono', monospace; font-size: 0.75rem;">${post.category}</span>
                </div>
                <h1 class="section-title" style="max-width: 840px;">${post.title}</h1>
                <p class="section-desc" style="margin-top: 0.8rem; font-family: 'DM Mono', monospace; font-size: 0.8rem;">
                    By KM Shofiullah Saymon • ${post.date} • ${post.readTime}
                </p>
            </div>
        </section>

        <article class="detail-container">
            <div class="detail-banner">
                <img src="${post.image}" alt="${post.title}" style="width: 100%; max-height: 420px; object-fit: cover;">
            </div>
            <div class="article-content">
                ${post.content}
            </div>
            <div class="tag-row" style="margin-top: 2.5rem;">
                ${tagsHTML}
            </div>
            <div style="margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--line);">
                <a href="blog.html" class="btn btn-secondary">
                    <i class="fa-solid fa-arrow-left"></i> More Engineering Notes
                </a>
            </div>
        </article>
    `;
}

function setupContactForm() {
    const form = document.getElementById("portfolio-contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value;
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(form.querySelector('[name="message"]').value);
        window.location.href = `mailto:shofiullahsaymon@gmail.com?subject=${subject}&body=${body}`;
    });
}
/* ==========================================================================
   CUSTOM CURSOR TRACKER & HOVER STATES (AUTO-INJECT + EVENT DELEGATION)
   ========================================================================== */
function setupCustomCursor() {
    // Only run on desktop/laptop with fine pointers
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // Auto-create cursor elements if missing on subpages (projects, blog, etc.)
    let dot = document.querySelector(".cursor-dot");
    let ring = document.querySelector(".cursor-ring");

    if (!dot) {
        dot = document.createElement("div");
        dot.className = "cursor-dot";
        dot.setAttribute("aria-hidden", "true");
        document.body.appendChild(dot);
    }

    if (!ring) {
        ring = document.createElement("div");
        ring.className = "cursor-ring";
        ring.setAttribute("aria-hidden", "true");
        document.body.appendChild(ring);
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isVisible = false;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!isVisible) {
            ringX = mouseX;
            ringY = mouseY;
            dot.style.opacity = "1";
            ring.style.opacity = "1";
            isVisible = true;
        }

        // Instant hardware-accelerated update for the inner dot
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }, { passive: true });

    // Smooth lerp animation loop for the outer ring
    function renderCursor() {
        ringX += (mouseX - ringX) * 0.2;
        ringY += (mouseY - ringY) * 0.2;
        ring.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0)`;
        requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Event delegation so dynamically rendered project/blog cards work automatically
    const interactiveSelectors = "a, button, input, textarea, .project-card, .bento-card, .blog-card, .filter-btn";

    document.addEventListener("mouseover", (e) => {
        if (e.target.closest(interactiveSelectors)) {
            document.body.classList.add("cursor-hover");
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.closest(interactiveSelectors)) {
            document.body.classList.remove("cursor-hover");
        }
    });

    // Hide cleanly when cursor leaves the browser window
    document.addEventListener("mouseleave", () => {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
        isVisible = false;
    });
}

/* Automatically fetches actual repository upload dates from GitHub API */
/*async function syncGitHubDates() {
    if (typeof SITE_DATA === "undefined") return;
    try {
        const res = await fetch("https://api.github.com/users/KMSSaymon/repos?per_page=100&sort=updated");
        if (!res.ok) {
            console.warn("GitHub API status:", res.status);
            return;
        }
        const repos = await res.json();

        // Log all your public repos + their exact upload dates in F12 Console
        console.table(
            repos.map(r => ({
                repoName: r.name,
                uploadedDate: new Date(r.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }),
                lastPushed: new Date(r.pushed_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                })
            }))
        );

        SITE_DATA.blogs.forEach(blog => {
            let match = null;

            // 1. Try exact match if githubRepo is set
            if (blog.githubRepo) {
                match = repos.find(
                    r => r.name.toLowerCase() === blog.githubRepo.toLowerCase()
                );
            }

            // 2. Fallback: keyword match by blog ID
            if (!match && blog.id === "detecting-ai-generated-vs-real-media") {
                match = repos.find(r => /ai|real|media|deepfake|vision|detect/i.test(r.name));
            }
            if (!match && blog.id === "levenshtein-and-dijkstra-in-cpp") {
                match = repos.find(r => /library|book|dijkstra|levenshtein|cpp|finder/i.test(r.name));
            }

            if (match && match.created_at) {
                const uploadedDate = new Date(match.created_at);
                blog.date = uploadedDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                });
            }
        });

        // Re-render blog cards & detail view with updated dates
        renderHomeBlogs();
        renderAllBlogsPage();
        renderBlogDetailPage();
    } catch (err) {
        console.warn("GitHub date sync skipped:", err);
    }
}
*/