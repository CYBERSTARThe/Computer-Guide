/* =========================================================
   COMPUTER GUIDE
   SEARCH + KNOWLEDGE ENGINE
========================================================= */


/* =========================================================
   TOPIC DATABASE
========================================================= */

const topics = {

    cpu: {

        title: "CPU — Central Processing Unit",

        category: "Computers",

        icon: "🧠",

        keywords: [
            "cpu",
            "processor",
            "central processing unit",
            "processing"
        ],

        quickAnswer:
            "The CPU is the main processor in a computer. It executes instructions, performs calculations, and coordinates many of the operations required by programs.",

        howItWorks:
            "When software needs something done, the CPU retrieves instructions and processes them. It performs operations, makes decisions, and works with other components such as RAM and storage.",

        whyItMatters:
            "The CPU plays a major role in how quickly a computer can perform many tasks. Its architecture, number of cores, clock speed, cache, and workload all affect performance.",

        example:
            "When you open a calculator and perform a calculation, the CPU processes the instructions required to produce the result.",

        deepDive:
            "Modern CPUs contain multiple processing cores and several levels of cache memory. They can execute many instructions extremely quickly and use techniques such as pipelining and branch prediction to improve performance.",

        keyPoints: [
            "CPU stands for Central Processing Unit.",
            "It executes program instructions.",
            "Modern CPUs commonly contain multiple cores.",
            "CPU cache provides very fast access to frequently used data.",
            "CPU performance depends on more than clock speed alone."
        ],

        related: [
            "ram",
            "gpu",
            "operating-system"
        ]

    },


    ram: {

        title: "RAM — Random Access Memory",

        category: "Computers",

        icon: "🧮",

        keywords: [
            "ram",
            "memory",
            "random access memory",
            "computer memory"
        ],

        quickAnswer:
            "RAM is fast temporary memory used to hold data and instructions that programs are actively using.",

        howItWorks:
            "When you open an application, the operating system loads information needed by that application into RAM. The CPU can then access that working data much more quickly than it could from long-term storage.",

        whyItMatters:
            "Having enough RAM helps a computer handle multiple applications and larger workloads without relying as heavily on slower storage.",

        example:
            "If you have a browser open with many tabs, the computer may need to keep information associated with those tabs in RAM.",

        deepDive:
            "RAM is volatile memory, meaning its contents normally disappear when the computer loses power. Modern systems commonly use DDR-family memory. Operating systems can also use storage as virtual memory when physical RAM is under pressure.",

        keyPoints: [
            "RAM is temporary working memory.",
            "RAM is much faster than normal storage.",
            "RAM is usually measured in gigabytes.",
            "RAM is volatile memory.",
            "More RAM can help with multitasking."
        ],

        related: [
            "cpu",
            "ssd",
            "operating-system"
        ]

    },


    gpu: {

        title: "GPU — Graphics Processing Unit",

        category: "Computers",

        icon: "🎮",

        keywords: [
            "gpu",
            "graphics",
            "graphics card",
            "graphics processing unit",
            "video card"
        ],

        quickAnswer:
            "A GPU is a processor designed to efficiently perform large numbers of calculations in parallel, making it especially useful for graphics and many other highly parallel workloads.",

        howItWorks:
            "Instead of focusing primarily on sequential general-purpose instructions like a CPU, a GPU contains many processing resources designed to work on large numbers of similar operations at the same time.",

        whyItMatters:
            "GPUs are important for gaming, 3D graphics, video processing, scientific computing, and many artificial-intelligence workloads.",

        example:
            "When a game renders thousands of objects, lighting calculations, textures, and effects, the GPU performs much of the graphical workload.",

        deepDive:
            "Modern GPUs can perform highly parallel calculations and often include dedicated memory called VRAM. Their architecture also makes them useful beyond graphics, including machine learning and scientific workloads.",

        keyPoints: [
            "GPU stands for Graphics Processing Unit.",
            "GPUs are highly parallel processors.",
            "They are important for graphics rendering.",
            "Dedicated graphics cards often include VRAM.",
            "GPUs can also accelerate non-graphics workloads."
        ],

        related: [
            "cpu",
            "ram",
            "operating-system"
        ]

    },


    ssd: {

        title: "SSD — Solid-State Drive",

        category: "Computers",

        icon: "💾",

        keywords: [
            "ssd",
            "solid state drive",
            "solid-state drive",
            "storage"
        ],

        quickAnswer:
            "An SSD is a storage device that uses flash memory to store data without moving mechanical parts.",

        howItWorks:
            "SSDs store information in flash memory cells. A controller manages reading, writing, error correction, and other operations needed to use the drive.",

        whyItMatters:
            "SSDs generally provide much faster access to stored data than traditional mechanical hard drives, which can make operating systems and applications feel more responsive.",

        example:
            "When a computer starts an operating system from an SSD, the files needed for startup can be read quickly from the drive.",

        deepDive:
            "SSDs have no spinning platters or moving read/write heads. Different types of NAND flash and controller technologies affect performance, endurance, and capacity.",

        keyPoints: [
            "SSD stands for Solid-State Drive.",
            "SSDs use flash memory.",
            "They have no traditional moving mechanical parts.",
            "SSDs are generally faster than HDDs.",
            "SSDs provide long-term data storage."
        ],

        related: [
            "hdd",
            "ram",
            "operating-system"
        ]

    },


    hdd: {

        title: "HDD — Hard Disk Drive",

        category: "Computers",

        icon: "💿",

        keywords: [
            "hdd",
            "hard drive",
            "hard disk",
            "hard disk drive",
            "storage"
        ],

        quickAnswer:
            "A hard disk drive stores data magnetically on spinning disks called platters.",

        howItWorks:
            "An HDD uses spinning platters and moving read/write heads. The heads move across the platters to read or change magnetic information.",

        whyItMatters:
            "HDDs can provide large amounts of storage at relatively low cost, making them useful for storing large collections of files.",

        example:
            "A desktop computer might use an HDD to store a large collection of videos, photos, backups, or other files.",

        deepDive:
            "Because HDDs contain mechanical components, access times are generally slower than SSDs. Their performance can also be affected by fragmentation and the physical location of data on the disk.",

        keyPoints: [
            "HDD stands for Hard Disk Drive.",
            "HDDs use magnetic storage.",
            "They contain moving mechanical parts.",
            "They can provide high-capacity storage.",
            "They are generally slower than SSDs."
        ],

        related: [
            "ssd",
            "ram",
            "file-system"
        ]

    },


    "operating-system": {

        title: "Operating System",

        category: "Software",

        icon: "🖥️",

        keywords: [
            "operating system",
            "os",
            "windows",
            "linux",
            "macos"
        ],

        quickAnswer:
            "An operating system is the core software that manages computer hardware and provides services that applications use.",

        howItWorks:
            "The operating system manages resources such as CPU time, memory, storage, files, devices, and network connections. It also provides interfaces that allow people and applications to interact with the computer.",

        whyItMatters:
            "Without an operating system, most users would have to interact with hardware at a much lower level. The OS provides the foundation on which applications run.",

        example:
            "When you open a program, the operating system helps load it into memory, allocate resources, communicate with hardware, and manage its files.",

        deepDive:
            "Operating systems contain components such as kernels, drivers, file systems, process managers, and user interfaces. Examples include Windows, Linux, macOS, Android, and iOS.",

        keyPoints: [
            "An operating system manages hardware resources.",
            "It provides services for applications.",
            "It manages processes and memory.",
            "It manages files and storage.",
            "Different operating systems are designed for different environments."
        ],

        related: [
            "cpu",
            "ram",
            "file-system"
        ]

    },


    wifi: {

        title: "Wi-Fi",

        category: "Internet & Networking",

        icon: "📡",

        keywords: [
            "wifi",
            "wi-fi",
            "wireless",
            "wireless network",
            "wireless internet"
        ],

        quickAnswer:
            "Wi-Fi is a family of wireless networking technologies that allows compatible devices to communicate over radio waves.",

        howItWorks:
            "A Wi-Fi device communicates with a wireless access point using radio signals. The access point can connect the local wireless network to other networks, including the Internet.",

        whyItMatters:
            "Wi-Fi allows phones, computers, televisions, game consoles, and other devices to communicate without requiring a physical Ethernet cable for every connection.",

        example:
            "When your phone connects to your home Wi-Fi, it communicates wirelessly with your router or wireless access point.",

        deepDive:
            "Wi-Fi technologies are based on IEEE 802.11 standards. Different generations can provide different capabilities involving speed, frequency bands, channel use, security, and efficiency.",

        keyPoints: [
            "Wi-Fi uses radio communication.",
            "Devices connect to wireless access points.",
            "Wi-Fi can provide local network access and Internet access.",
            "Different Wi-Fi generations have different capabilities.",
            "Wireless security helps protect network communications."
        ],

        related: [
            "router",
            "ip-address",
            "internet"
        ]

    },


    "ip-address": {

        title: "IP Address",

        category: "Internet & Networking",

        icon: "🌐",

        keywords: [
            "ip",
            "ip address",
            "ipv4",
            "ipv6",
            "internet protocol"
        ],

        quickAnswer:
            "An IP address is a numerical identifier associated with a network interface and used to help deliver network traffic.",

        howItWorks:
            "When data travels across an IP network, addressing information helps networking equipment determine where packets should be sent.",

        whyItMatters:
            "IP addressing allows devices and networks to communicate and provides a fundamental addressing system for the Internet and other IP networks.",

        example:
            "Your home network may use private IP addresses for devices such as computers and phones while the router communicates with the wider Internet.",

        deepDive:
            "IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses. IPv6 provides a vastly larger address space and includes additional networking capabilities.",

        keyPoints: [
            "IP stands for Internet Protocol.",
            "IPv4 and IPv6 are major versions of IP.",
            "Private and public IP addresses serve different purposes.",
            "IP addressing helps networks deliver packets.",
            "IP addresses are not the same thing as domain names."
        ],

        related: [
            "dns",
            "router",
            "internet"
        ]

    },


    dns: {

        title: "DNS — Domain Name System",

        category: "Internet & Networking",

        icon: "🔎",

        keywords: [
            "dns",
            "domain name system",
            "domain",
            "name resolution"
        ],

        quickAnswer:
            "DNS translates domain names into information such as IP addresses so networked systems can locate services using human-readable names.",

        howItWorks:
            "When you enter a domain name, a DNS resolver can query DNS infrastructure to determine the information associated with that name. Your device can then use the result to connect to the appropriate service.",

        whyItMatters:
            "People can remember names much more easily than numerical IP addresses. DNS provides the naming system that makes services such as websites easier to access.",

        example:
            "Instead of remembering an IP address for a website, you can enter its domain name into your browser.",

        deepDive:
            "DNS uses a distributed hierarchy that includes root servers, top-level domain servers, authoritative name servers, and recursive resolvers. DNS can provide several types of records, not just addresses.",

        keyPoints: [
            "DNS stands for Domain Name System.",
            "DNS provides a naming system for network resources.",
            "Resolvers help clients obtain DNS information.",
            "DNS is distributed rather than stored in one central database.",
            "DNS records can contain different types of information."
        ],

        related: [
            "ip-address",
            "internet",
            "web-browser"
        ]

    },


    programming: {

        title: "Programming",

        category: "Programming",

        icon: "💻",

        keywords: [
            "programming",
            "coding",
            "code",
            "software development",
            "programming language"
        ],

        quickAnswer:
            "Programming is the process of creating instructions that computers can execute to perform tasks.",

        howItWorks:
            "A programmer writes source code using a programming language. Tools such as compilers or interpreters translate or execute that code so a computer can perform the requested operations.",

        whyItMatters:
            "Programming is used to create websites, applications, operating systems, games, automation tools, databases, and countless other technologies.",

        example:
            "A simple program can take a user's input, process it using instructions, and display a result.",

        deepDive:
            "Programming involves concepts such as variables, data types, conditions, loops, functions, objects, data structures, algorithms, debugging, and software architecture.",

        keyPoints: [
            "Programming creates executable instructions.",
            "Different programming languages serve different purposes.",
            "Programs can range from tiny scripts to massive systems.",
            "Debugging is an important part of programming.",
            "Good programming involves both logic and organization."
        ],

        related: [
            "algorithms",
            "variables",
            "functions"
        ]

    },


    "artificial-intelligence": {

        title: "Artificial Intelligence",

        category: "Artificial Intelligence",

        icon: "🤖",

        keywords: [
            "ai",
            "artificial intelligence",
            "machine learning",
            "generative ai",
            "intelligent systems"
        ],

        quickAnswer:
            "Artificial intelligence is a field of computing focused on creating systems capable of tasks that can involve pattern recognition, prediction, language processing, planning, or decision-making.",

        howItWorks:
            "Many modern AI systems use machine-learning models trained on data. During training, a model adjusts internal parameters to capture useful patterns. After training, the model can process new inputs and produce outputs.",

        whyItMatters:
            "AI is used in search, recommendations, translation, computer vision, fraud detection, scientific research, software development, and many other areas.",

        example:
            "An image-recognition system can analyze an image and use learned patterns to identify objects or other features.",

        deepDive:
            "AI includes many approaches, from rule-based systems to machine learning and neural networks. Generative AI systems can produce new text, images, audio, video, or code based on learned patterns.",

        keyPoints: [
            "AI is a broad field rather than one single technology.",
            "Machine learning is one major approach to AI.",
            "Training data influences what models learn.",
            "AI systems can make mistakes.",
            "AI is used across many industries."
        ],

        related: [
            "programming",
            "cloud-computing",
            "data-centers"
        ]

    }

};


/* =========================================================
   SEARCH
========================================================= */

function searchTopics() {

    const searchInput =
        document.getElementById("topicSearch");

    const results =
        document.getElementById("searchResults");

    const status =
        document.getElementById("searchStatus");


    const query =
        searchInput.value
            .trim()
            .toLowerCase();


    results.innerHTML = "";


    if (query === "") {

        status.textContent =
            "Type something to search the Computer Guide.";

        return;

    }


    const matches =
        Object.entries(topics).filter(
            ([id, topic]) => {

                const searchableText = [

                    topic.title,

                    topic.category,

                    ...topic.keywords,

                    topic.quickAnswer,

                    topic.howItWorks,

                    topic.whyItMatters

                ]
                .join(" ")
                .toLowerCase();


                return searchableText.includes(query);

            }
        );


    status.textContent =
        matches.length +
        " topic" +
        (matches.length === 1 ? "" : "s") +
        " found.";


    if (matches.length === 0) {

        results.innerHTML = `

            <div class="lesson">

                <h2>🔎 No Topics Found</h2>

                <p>
                    We couldn't find a topic matching
                    "<strong>${escapeHTML(query)}</strong>".
                </p>

                <p>
                    Try searching for something like
                    <strong>CPU</strong>,
                    <strong>RAM</strong>,
                    <strong>Wi-Fi</strong>,
                    <strong>DNS</strong>, or
                    <strong>programming</strong>.
                </p>

            </div>

        `;

        return;

    }


    matches.forEach(
        ([id, topic]) => {

            results.innerHTML += `

                <div class="lesson search-result">

                    <h2>
                        ${topic.icon}
                        ${topic.title}
                    </h2>

                    <p>
                        <strong>Category:</strong>
                        ${topic.category}
                    </p>

                    <p>
                        ${topic.quickAnswer}
                    </p>

                    <button
                        type="button"
                        onclick="openTopic('${id}')"
                    >
                        Learn More →
                    </button>

                </div>

            `;

        }
    );

}


/* =========================================================
   OPEN TOPIC
========================================================= */

function openTopic(id) {

    const topic =
        topics[id];


    if (!topic) {

        return;

    }


    const viewer =
        document.getElementById("topicViewer");


    viewer.innerHTML = `

        <article>

            <h2>
                ${topic.icon}
                ${topic.title}
            </h2>

            <p>
                <strong>Category:</strong>
                ${topic.category}
            </p>


            <hr>


            <h3>📖 Quick Answer</h3>

            <p>
                ${topic.quickAnswer}
            </p>


            <h3>⚙️ How It Works</h3>

            <p>
                ${topic.howItWorks}
            </p>


            <h3>🎯 Why It Matters</h3>

            <p>
                ${topic.whyItMatters}
            </p>


            <h3>💡 Real-World Example</h3>

            <p>
                ${topic.example}
            </p>


            <h3>🔬 Deep Dive</h3>

            <p>
                ${topic.deepDive}
            </p>


            <h3>🧠 Key Things to Remember</h3>

            <ul>

                ${topic.keyPoints
                    .map(point => `<li>${point}</li>`)
                    .join("")
                }

            </ul>


            <h3>🔗 Related Topics</h3>

            <div class="topics">

                ${topic.related
                    .map(
                        relatedId => {

                            const related =
                                topics[relatedId];

                            if (!related) {
                                return "";
                            }

                            return `

                                <button
                                    type="button"
                                    onclick="openTopic('${relatedId}')"
                                >
                                    ${related.icon}
                                    ${related.title}
                                </button>

                            `;

                        }
                    )
                    .join("")
                }

            </div>

        </article>

    `;


    viewer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   CATEGORY VIEW
========================================================= */

function showCategory(category) {

    const categoryMap = {

        computers:
            "computersLesson",

        programming:
            "programmingLesson",

        internet:
            "internetLesson",

        ai:
            "aiLesson",

        cybersecurity:
            "cybersecurityLesson",

        technology:
            "technologyLesson"

    };


    const lessonId =
        categoryMap[category];


    if (!lessonId) {

        return;

    }


    const lesson =
        document.getElementById(lessonId);


    if (!lesson) {

        return;

    }


    lesson.style.display = "block";


    lesson.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   ENTER KEY SEARCH
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const searchInput =
            document.getElementById("topicSearch");


        if (!searchInput) {

            return;

        }


        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    searchTopics();

                }

            }
        );

    }
);


/* =========================================================
   BASIC HTML SAFETY
========================================================= */

function escapeHTML(value) {

    return value

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}
