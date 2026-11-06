/* ==========================================================================
   DATA.JS — CENTRALIZED CONTENT STORE WITH NATURAL PHOTOGRAPHY & LOCAL OVERRIDE
   ========================================================================== */

const SITE_DATA = {
    profile: {
        name: "KM Shofiullah Saymon",
        shortName: "Saymon",
        role: "CSE Undergraduate & AI Researcher",
        university: "Netrokona University",
        cgpa: "3.86",
        semester: "4th Year, 1st Semester",
        location: "Netrokona, Bangladesh",
        email: "shofiullahsaymon@gmail.com",
        phone: "+880 1744-737702",
        github: "https://github.com/KMSSaymon",
        linkedin: "https://www.linkedin.com/in/km-shofiullah-saymon-899b64227",
        facebook: "https://www.facebook.com/kmshofiullah.saymon.5",
        photographyPage: "https://www.facebook.com/profile.php?id=61581383651911",
        cvFile: "KM_Shofiullah_Saymon_CV.pdf",
        aboutPhoto: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85"
    },

    projects: [
        {
            id: "inventory-management-system",
            number: "01",
            title: "Inventory Management System",
            category: "software",
            categoryLabel: "Full-Stack Web",
            featured: true,
            date: "2026",
            image: "images\\inventory_management_system.webp",
            imageAlt: "Inventory analytics dashboard on a laptop screen",
            badge: "DJANGO ORM • ERP",
            summary: "A full-featured Django inventory platform supporting product cataloguing, supplier & customer workflows, purchase orders, and automated stock tracking.",
            problem: "Small and medium retail operations often rely on fragmented spreadsheets to track stock levels, leading to over-ordering, unrecorded sales, and zero visibility into supplier lead times.",
            solution: "Engineered a relational database-backed web application in Django with role-based views, real-time stock deduction upon sales, low-inventory alerts, and clean Bootstrap dashboard reporting.",
            features: [
                "End-to-end CRUD workflows for Products, Categories, Suppliers, and Customers",
                "Automated stock ledger updates when purchase orders or sales transactions are recorded",
                "Relational schema design in SQLite/MySQL with normalized foreign-key constraints",
                "Responsive admin and operator dashboard with search and category filtering"
            ],
            tech: ["Django", "Python", "SQLite", "Bootstrap 5", "HTML/CSS"],
            repoUrl: "https://github.com/KMSSaymon/inventory_management_system",
            liveUrl: null
        },
        {
            id: "ai-vs-real-media-detection",
            number: "02",
            title: "AI vs. Real Media Detection",
            category: "ai",
            categoryLabel: "AI & Computer Vision",
            featured: true,
            date: "2026",
            image: "images\\AI_vs_Real_media_detection.png",
            imageAlt: "Computer vision matrix analysis and neural network visualization",
            badge: "DEEP LEARNING • RESEARCH",
            summary: "Deep learning research pipeline designed to distinguish synthetic AI-generated imagery from authentic camera photographs using frequency and spatial cues.",
            problem: "With hyper-realistic diffusion and GAN models, visual inspection can no longer reliably separate synthetic media from authentic photography, creating misinformation and verification risks.",
            solution: "Developed an experimental computer vision pipeline in Python that evaluates spatial artifacts and high-frequency residuals across curated datasets of real and generative images.",
            features: [
                "Curated dataset preprocessing pipeline pairing authentic photos with diffusion-generated counterparts",
                "Deep CNN and transfer-learning feature extraction for artifact detection",
                "Evaluation suite reporting Precision, Recall, ROC-AUC, and confusion matrices",
                "Visual interpretability heatmaps highlighting regions of synthetic manipulation"
            ],
            tech: ["Python", "Deep Learning", "OpenCV", "PyTorch / Keras", "Computer Vision"],
            repoUrl: "https://github.com/KMSSaymon",
            liveUrl: null
        },

        {
            id: "agricultural-duck-robot",
            number: "06",
            title: "Autonomous Agricultural Duck Robot",
            category: "academic",
            categoryLabel: "Robotics & Embedded",
            featured: false,
            date: "2025",
            image: "images\\Duck_robot.jpg",
            imageAlt: "Arduino microcontroller hardware circuit and robotics sensors",
            badge: "HARDWARE • ARDUINO",
            summary: "An Arduino-powered field robotics prototype inspired by sustainable rice-paddy weeding concepts, integrating ultrasonic obstacle avoidance and motor control.",
            problem: "Manual weed control and chemical herbicide usage in rice paddies are labor-intensive and ecologically harmful to local soil and water systems.",
            solution: "Designed a low-cost hardware prototype using Arduino microcontrollers, ultrasonic ranging sensors, and L298N dual H-bridge motor drivers to navigate between crop rows.",
            features: [
                "Real-time obstacle detection and row navigation via HC-SR04 ultrasonic sensors",
                "Differential drive actuation controlled through an L298N motor driver module",
                "Embedded C++ control loop tuned for smooth turn recovery",
                "Built as a practical hardware-software integration showcase for sustainable ag-tech"
            ],
            tech: ["Arduino", "Embedded C++", "Ultrasonic Sensors", "L298N Driver", "Robotics"],
            repoUrl: "https://github.com/KMSSaymon",
            liveUrl: null
        },

        {
            id: "gemini-ai-streamlit-suite",
            number: "03",
            title: "Gemini AI Interactive Workspace",
            category: "ai",
            categoryLabel: "AI Engineering",
            featured: true,
            date: "2026",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
            imageAlt: "Python IDE code and interactive AI terminal workspace",
            badge: "LLM API • STREAMLIT",
            summary: "A lightweight, fast Python Streamlit web application integrating the Google Gemini API for structured prompt workflows and conversational assistance.",
            problem: "Developers and students frequently need a clean, customizable local interface to test multi-turn LLM prompts, system instructions, and API parameters without heavy frontend boilerplate.",
            solution: "Built a modular Streamlit workspace wrapping the Gemini API with session state persistence, markdown code rendering, and configurable generation parameters.",
            features: [
                "Real-time streaming and structured Markdown/code-block rendering",
                "Session-persistent conversation history for multi-turn context",
                "Environment-secured API key handling and error recovery",
                "Clean, distraction-free UI tailored for technical queries and code generation"
            ],
            tech: ["Python", "Streamlit", "Gemini API", "REST APIs", "Markdown"],
            repoUrl: "https://github.com/KMSSaymon/streamlit_gemini_project",
            liveUrl: null
        },
        {
            id: "smart-library-book-finder",
            number: "04",
            title: "Smart Library Book Finder & Router",
            category: "academic",
            categoryLabel: "Algorithms & C++",
            featured: true,
            date: "2025",
            image: "images\\Smart Library Book Finder & Router.jpg",
            imageAlt: "University library bookshelves and structured aisle navigation",
            badge: "GRAPH ALGORITHMS • C++",
            summary: "High-performance C++ system combining Levenshtein edit-distance fuzzy search with Dijkstra's shortest-path routing to locate library shelves.",
            problem: "Students searching university libraries often misspell book titles and waste time navigating multi-aisle floor layouts to find the physical rack.",
            solution: "Combined dynamic-programming string matching (Levenshtein distance) for typo-tolerant search with graph-based shortest path routing (Dijkstra's algorithm) to guide users to the exact shelf.",
            features: [
                "Typo-tolerant fuzzy title & author search powered by Levenshtein Edit Distance",
                "Weighted graph model of library aisles solved via Dijkstra's Shortest Path algorithm",
                "Persistent file-handling database for instant catalog lookup and updates",
                "Zero-dependency, fast C++ console interface built with STL containers"
            ],
            tech: ["C++", "Dijkstra's Algorithm", "Levenshtein Distance", "STL", "File I/O"],
            repoUrl: "https://github.com/KMSSaymon",
            liveUrl: null
        },
        {
            id: "android-photo-gallery",
            number: "05",
            title: "Native Android Photo Gallery",
            category: "mobile",
            categoryLabel: "Mobile App",
            featured: false,
            date: "2025",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
            imageAlt: "Smartphone displaying a clean mobile photo gallery interface",
            badge: "ANDROID • JAVA",
            summary: "A structured multi-activity Android photo organizer built with Java, RecyclerView grids, and ViewPager2 full-screen swipe gestures.",
            problem: "Standard gallery starter apps often struggle with smooth scrolling across categorized local media folders and lack clean transitions between grid and detail views.",
            solution: "Architected a native Java Android app utilizing RecyclerView view-holder recycling and ViewPager2 for fluid 60fps album browsing and pinch-to-zoom inspection.",
            features: [
                "Categorized album grid views built on optimized RecyclerView adapters",
                "Full-screen swipeable image viewer powered by ViewPager2",
                "Clean multi-activity intent navigation and local storage permissions handling",
                "Responsive Material-inspired layout across varied screen densities"
            ],
            tech: ["Java", "Android SDK", "RecyclerView", "ViewPager2", "XML Layouts"],
            repoUrl: "https://github.com/KMSSaymon/PhotoGalleryapp",
            liveUrl: null
        },
        
        {
            id: "android-todo-manager",
            number: "07",
            title: "TaskFlow — Android ToDo Manager",
            category: "mobile",
            categoryLabel: "Mobile App",
            featured: false,
            date: "2025",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=85",
            imageAlt: "Mobile task management checklist and productivity planning",
            badge: "ANDROID • PRODUCTIVITY",
            summary: "A focused Java Android productivity app for daily task tracking, priority toggling, and clean mobile UI state management.",
            problem: "Bloated productivity apps create friction for quick daily academic and personal task capture on mobile devices.",
            solution: "Created a lightweight, fast-launching native Android task manager focusing on instant item creation, completion toggling, and clean list lifecycle handling.",
            features: [
                "Instant task creation, completion check-offs, and swipe deletion",
                "Clean Java object model and responsive list adapters",
                "Minimalist user interface designed for one-handed operation",
                "Zero unnecessary background permissions or bloat"
            ],
            tech: ["Java", "Android Studio", "UI/UX", "List Adapters"],
            repoUrl: "https://github.com/KMSSaymon/ToDoList",
            liveUrl: null
        },
        {
            id: "precision-stopwatch-app",
            number: "08",
            title: "Precision Android Stopwatch",
            category: "mobile",
            categoryLabel: "Mobile App",
            featured: false,
            date: "2024",
            image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=85",
            imageAlt: "Precision digital timer and chronograph display",
            badge: "ANDROID • UTILITY",
            summary: "Millisecond-accurate Android stopwatch utility demonstrating handler thread timing, lifecycle state preservation, and clean tactile controls.",
            problem: "Screen rotations and backgrounding in beginner Android apps often reset active timers due to unhandled Activity lifecycle recreation.",
            solution: "Implemented a resilient timer architecture in Java using Handler loops and savedInstanceState bundles so timing stays accurate across configuration changes.",
            features: [
                "Start, Pause, Lap, and Reset controls with millisecond readout",
                "State persistence across device rotation and activity lifecycle events",
                "High-contrast typography for instant readability during sports or lab timing",
                "Lightweight native Java implementation"
            ],
            tech: ["Java", "Android SDK", "Handler Threads", "Activity Lifecycle"],
            repoUrl: "https://github.com/KMSSaymon/StopWatch",
            liveUrl: null
        }
    ],

    blogs: [
        {
            id: "detecting-ai-generated-vs-real-media",
            title: "Detecting AI-Generated vs. Real Media: Notes from Building a Vision Pipeline",
            category: "AI & Computer Vision",
            githubRepo: "AI_vs_Real_media_detection",
            date: "March 12, 2026", 
            readTime: "6 min read",
            featured: true,
            image: "images/AI_vs_Real.jpg",
            excerpt: "Why human eyes struggle to spot modern diffusion outputs, and how spatial-frequency cues and CNN classifiers expose synthetic artifacts.",
            tags: ["Computer Vision", "Deep Learning", "Research", "Python"],
            content: `
                <p>Early GAN images were easy to spot if you looked closely at hands, teeth, or background text. With modern latent diffusion models, those obvious visual glitches are mostly gone. While working on my undergraduate research project on <strong>AI vs. Real Media Detection</strong>, I wanted to test a practical question: <em>when a generated image looks completely natural to the human eye, what mathematical traces still give it away?</em></p>

                <h3>1. Why Visual Inspection Fails</h3>
                <p>Every real photograph passes through a physical hardware pipeline. Light hits the lens (introducing slight chromatic aberration), passes through a Bayer color filter array, gets demosaiced into RGB pixels, and picks up sensor thermal noise before JPEG compression. Diffusion models skip the physics entirely and build images by iteratively denoising latent tensors. Even when the subject looks real, the high-frequency pixel residuals behave very differently from a camera sensor.</p>

                <h3>2. Avoiding the Dataset Bias Trap</h3>
                <p>The fastest way to ruin a synthetic media detector is training it on mismatched formats. If all your real samples are uncompressed DSLR photos and your AI samples are scraped WebP/JPEG files from social media, the model simply learns to detect compression artifacts instead of AI generation. To keep the benchmark fair, I structured the preprocessing pipeline in Python and <code>OpenCV</code> around three strict rules:</p>
                <ul>
                    <li>Paired real photographs across varied lighting conditions with diffusion-generated images matching the same scene categories.</li>
                    <li>Normalized resolution crops, color spaces (<code>cv2.cvtColor</code>), and JPEG quality factors across both classes before training.</li>
                    <li>Kept generator families separated across train and test splits to measure how well the classifier generalizes to unseen models.</li>
                </ul>

                <h3>3. Combining Spatial and Frequency Cues</h3>
                <p>Standard convolutional backbones do a decent job on spatial textures, but they become much more reliable when paired with high-pass filtered inputs and Fast Fourier Transform (FFT) spectrum analysis. Upsampling layers inside generative decoders often leave subtle periodic grid patterns in the frequency domain that are invisible in normal RGB views.</p>

                <blockquote>"In computer vision research, clean dataset curation and leak-free validation splits matter far more than just stacking deeper layers."</blockquote>

                <h3>What I Learned</h3>
                <p>Reproducing baseline papers first saved weeks of blind trial and error. Writing a clean evaluation script early on that logs precision, recall, ROC-AUC, and false-positive samples made it easy to see exactly which lighting conditions or textures were fooling the network.</p>
            `
        },
        {
            id: "levenshtein-and-dijkstra-in-cpp",
            title: "Combining Levenshtein Distance & Dijkstra's Algorithm for Smart Library Navigation",
            category: "Algorithms & C++",
            githubRepo: "Smart-Library-Book-Finder", // Optional: exact GitHub repo name under @KMSSaymon
            date: "November 10, 2025", // Aligned with your 2025 C++ project timeline
            readTime: "5 min read",
            featured: true,
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
            excerpt: "How dynamic programming and shortest-path graph routing work together in C++ to turn a misspelled book title into aisle-by-aisle shelf directions.",
            tags: ["C++", "Algorithms", "Dynamic Programming", "Graphs"],
            content: `
                <p>In university algorithm courses and on platforms like Codeforces, we usually practice Dynamic Programming and Graph Theory as separate topics. When I built the <strong>Smart Library Book Finder &amp; Router</strong> in C++, my goal was to connect both concepts into a single tool that solves an everyday campus problem: finding a physical book when you neither know the exact spelling nor the shelf layout.</p>

                <h3>Phase 1: Handling Typos with Levenshtein Edit Distance</h3>
                <p>If a student types <code>"Introducton to Algorthms"</code> into a basic search bar using <code>std::string::find</code>, it returns zero matches. To make the search forgiving, I implemented the <strong>Levenshtein Edit Distance</strong> algorithm, which calculates the minimum number of single-character insertions, deletions, or substitutions needed to turn the user's query string <code>A</code> into a catalog title <code>B</code>.</p>
                <p>Instead of allocating a full 2D matrix of size <code>O(N &times; M)</code> for every book comparison, I used a space-optimized two-row rolling array in C++ (<code>O(min(N, M))</code> memory). That keeps catalog ranking instantaneous even across thousands of titles.</p>

                <h3>Phase 2: Aisle Routing with Dijkstra's Algorithm</h3>
                <p>Knowing a book is on "Rack 14B" doesn't help much if you don't know the floor plan. I modeled the library layout as a weighted undirected graph using C++ STL adjacency lists (<code>std::vector&lt;std::pair&lt;int, int&gt;&gt;</code>), where nodes represent aisle intersections and shelves, and edge weights represent walking distance in meters.</p>
                <ul>
                    <li><strong>Shortest-Path Engine:</strong> Runs Dijkstra's algorithm with a min-heap (<code>std::priority_queue</code>) from the library entrance node to the target rack node in <code>O((V + E) log V)</code> time.</li>
                    <li><strong>Parent-Pointer Reconstruction:</strong> Backtracks through the <code>parent[]</code> array to print clear step-by-step walking directions in the console.</li>
                </ul>

                <h3>Why Classical Algorithms Still Shine</h3>
                <p>Not every search problem needs a heavy database server or an external API call. A well-structured C++ binary with STL containers runs locally in under a millisecond, uses almost zero memory, and behaves predictably every time.</p>
            `
        },
        {
            id: "photography-and-frontend-engineering",
            title: "How Shooting Photography Makes Me a Better Frontend Engineer",
            category: "Design & Perspective",
            githubRepo: null,
            date: "August 24, 2025",
            readTime: "4 min read",
            featured: true,
            image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80",
            excerpt: "Running my photography page S'Clixora taught me framing, negative space, and lighting balance, principles that carry straight into UI engineering.",
            tags: ["Photography", "UI/UX", "Frontend", "Creative"],
            content: `
                <p>Whenever I step away from writing C++, Python, or training vision models, I usually have my Camera (Phone Camera) in hand. Over the past couple of years running my photography page (<strong>S'Clixora</strong>) and shooting portraits and street scenes, I noticed that composing a clean photograph and building a clean web interface use the exact same visual instincts.</p>

                <h3>1. Subject Separation &amp; Visual Hierarchy</h3>
                <p>When shooting a portrait at <code>50mm f/1.8</code>, shallow depth of field blurs distracting background clutter so the viewer's eye locks straight onto the subject. In frontend engineering, we don't have an aperture ring, so we create depth using font weight, subtle border contrast, and elevation shadows. If every button and badge on a page screams in bright colors, nothing stands out.</p>

                <h3>2. Giving Elements Room to Breathe</h3>
                <p>A common mistake when starting out in photography is cropping too tight or crowding the edges of the frame. The same thing happens in CSS when cards are packed together with cramped padding. Leaving generous negative space around typography and inside grid containers makes technical content much easier to read.</p>

                <h3>3. Color Grading &amp; Theme Contrast</h3>
                <p>In RAW photo editing, pure blown-out whites and crushed blacks look harsh and unnatural. The same rule applies to dark and light UI themes. Using pure <code>#000000</code> backgrounds with neon text strains the eyes after a few minutes. Calibrating soft alabaster surfaces for light mode and deep slate tones for dark mode gives a website the same balanced feel as a well-graded photograph.</p>
            `
        }
    ]
};

/* ==========================================================================
   HELPER: RENDER NATURAL PHOTOGRAPHIC PROJECT THUMBNAIL
   ========================================================================== */
function renderProjectThumbnail(project) {
    return `
        <div class="project-preview">
            <span class="preview-badge">${project.badge}</span>
            <span class="preview-num">${project.number}</span>
            <img
                src="${project.image}"
                alt="${project.imageAlt || project.title}"
                class="preview-photo"
                loading="lazy"
            >
            <div class="preview-overlay">
                <span class="preview-cta-pill">
                    <i class="fa-solid fa-expand"></i> View Case Study
                </span>
            </div>
        </div>
    `;
}
