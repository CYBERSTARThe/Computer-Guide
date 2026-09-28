/* =========================================================
   COMPUTER GUIDE
   SEARCH + KNOWLEDGE + LEARNING PATH ENGINE
========================================================= */


/* =========================================================
   TOPIC DATABASE
========================================================= */

const topics = {

    /* =====================================================
       COMPUTERS & HARDWARE
    ===================================================== */

    cpu: {
        title: "CPU — Central Processing Unit",
        category: "Computers",
        icon: "🧠",
        keywords: ["cpu", "processor", "central processing unit"],
        quickAnswer:
            "The CPU is the main general-purpose processor in a computer. It executes instructions, performs calculations, and coordinates many operations.",
        howItWorks:
            "The CPU retrieves instructions, decodes them, performs operations, and produces results. It works closely with RAM, storage, and other hardware.",
        whyItMatters:
            "The CPU performs a huge amount of the general-purpose processing required by software.",
        example:
            "When you open an application, the CPU executes the instructions needed for that program to run.",
        deepDive:
            "Modern CPUs can contain multiple cores, cache memory, branch prediction, and other technologies designed to improve performance.",
        keyPoints: [
            "CPU means Central Processing Unit.",
            "It executes program instructions.",
            "Modern CPUs commonly have multiple cores.",
            "CPU cache provides very fast memory.",
            "Clock speed is only one part of CPU performance."
        ],
        related: ["ram", "gpu", "operating-system"]
    },


    ram: {
        title: "RAM — Random Access Memory",
        category: "Computers",
        icon: "🧮",
        keywords: ["ram", "memory", "random access memory"],
        quickAnswer:
            "RAM is fast temporary memory used to hold data and instructions that programs are actively using.",
        howItWorks:
            "When programs run, the operating system places required information into RAM so the CPU can access it quickly.",
        whyItMatters:
            "Having enough RAM helps a computer handle multiple programs and larger workloads.",
        example:
            "A browser with many open tabs can use a significant amount of RAM.",
        deepDive:
            "RAM is volatile memory, meaning its contents normally disappear when power is removed. Modern computers commonly use DDR memory.",
        keyPoints: [
            "RAM is temporary working memory.",
            "RAM is faster than normal storage.",
            "RAM is usually measured in gigabytes.",
            "RAM is volatile.",
            "More RAM can improve multitasking."
        ],
        related: ["cpu", "ssd", "virtual-memory"]
    },


    gpu: {
        title: "GPU — Graphics Processing Unit",
        category: "Computers",
        icon: "🎮",
        keywords: ["gpu", "graphics", "graphics card", "video card"],
        quickAnswer:
            "A GPU is a processor designed to perform large numbers of calculations in parallel, especially for graphics and other highly parallel workloads.",
        howItWorks:
            "A GPU contains many processing resources that can work on large numbers of similar calculations at the same time.",
        whyItMatters:
            "GPUs are important for gaming, graphics, video processing, scientific computing, and many AI workloads.",
        example:
            "A game uses the GPU to render objects, lighting, textures, shadows, and other visual effects.",
        deepDive:
            "Modern GPUs often contain dedicated video memory called VRAM and can also accelerate workloads beyond graphics.",
        keyPoints: [
            "GPU means Graphics Processing Unit.",
            "GPUs are highly parallel processors.",
            "They are important for graphics rendering.",
            "Dedicated GPUs commonly have VRAM.",
            "GPUs can accelerate AI workloads."
        ],
        related: ["cpu", "ram", "artificial-intelligence"]
    },


    ssd: {
        title: "SSD — Solid-State Drive",
        category: "Computers",
        icon: "💾",
        keywords: ["ssd", "solid state drive", "storage"],
        quickAnswer:
            "An SSD is a storage device that uses flash memory to store data without traditional moving mechanical parts.",
        howItWorks:
            "SSDs store information in flash memory cells while a controller manages reading, writing, error correction, and other operations.",
        whyItMatters:
            "SSDs generally provide much faster access to stored data than traditional mechanical hard drives.",
        example:
            "A computer using an SSD can often start its operating system and applications quickly.",
        deepDive:
            "Different NAND flash technologies and controllers affect an SSD's speed, capacity, endurance, and power usage.",
        keyPoints: [
            "SSD means Solid-State Drive.",
            "SSDs use flash memory.",
            "SSDs have no traditional spinning platters.",
            "They are generally faster than HDDs.",
            "SSDs provide long-term storage."
        ],
        related: ["hdd", "ram", "file-system"]
    },


    hdd: {
        title: "HDD — Hard Disk Drive",
        category: "Computers",
        icon: "💿",
        keywords: ["hdd", "hard drive", "hard disk", "hard disk drive"],
        quickAnswer:
            "An HDD stores data magnetically on spinning disks called platters.",
        howItWorks:
            "A read/write head moves across spinning platters to read or change magnetic information.",
        whyItMatters:
            "HDDs can provide large amounts of storage at relatively low cost.",
        example:
            "An HDD can be used to store large collections of videos, photos, backups, and other files.",
        deepDive:
            "Because HDDs contain moving mechanical components, their access times are generally slower than SSDs.",
        keyPoints: [
            "HDD means Hard Disk Drive.",
            "HDDs use magnetic storage.",
            "They contain moving parts.",
            "They can provide large capacities.",
            "They are generally slower than SSDs."
        ],
        related: ["ssd", "file-system"]
    },


    motherboard: {
        title: "Motherboard",
        category: "Computers",
        icon: "🧩",
        keywords: ["motherboard", "mainboard", "system board"],
        quickAnswer:
            "The motherboard is the main circuit board that connects many of a computer's components.",
        howItWorks:
            "The motherboard provides electrical connections and communication pathways between components such as the CPU, RAM, storage, expansion cards, and peripherals.",
        whyItMatters:
            "It provides the foundation that allows the computer's major hardware components to work together.",
        example:
            "A desktop motherboard can provide slots for RAM, a CPU socket, storage connections, USB ports, and expansion slots.",
        deepDive:
            "Motherboards contain chipsets, firmware, power circuitry, buses, connectors, and expansion interfaces.",
        keyPoints: [
            "The motherboard connects major components.",
            "It provides expansion slots and connectors.",
            "It contains important system circuitry.",
            "Different motherboards support different CPUs and memory.",
            "The motherboard helps components communicate."
        ],
        related: ["cpu", "ram", "computer-ports"]
    },


    psu: {
        title: "Power Supply — PSU",
        category: "Computers",
        icon: "🔌",
        keywords: ["psu", "power supply", "power supply unit"],
        quickAnswer:
            "A power supply converts electrical power from an outlet into the types of power required by computer components.",
        howItWorks:
            "A PSU converts incoming electrical power and supplies regulated power to components such as the motherboard, CPU, storage, and GPU.",
        whyItMatters:
            "Computer components require stable electrical power to operate correctly.",
        example:
            "A desktop's PSU supplies power to the motherboard and graphics card through different cables.",
        deepDive:
            "Power supplies have different capacities and efficiency ratings. Choosing appropriate power capacity is important when building a computer.",
        keyPoints: [
            "PSU means Power Supply Unit.",
            "It converts and regulates electrical power.",
            "It supplies power to computer components.",
            "PSUs have different power capacities.",
            "Efficiency varies between models."
        ],
        related: ["motherboard", "gpu", "computer-cooling"]
    },


    "computer-cooling": {
        title: "Computer Cooling",
        category: "Computers",
        icon: "🌡️",
        keywords: ["cooling", "computer cooling", "fans", "heatsink", "liquid cooling"],
        quickAnswer:
            "Computer cooling removes heat produced by electronic components so they can operate within appropriate temperature ranges.",
        howItWorks:
            "Heat moves from components such as the CPU and GPU into heatsinks or other cooling systems. Fans or pumps then help move heat away.",
        whyItMatters:
            "Excessive heat can cause components to reduce performance or shut down to protect themselves.",
        example:
            "A CPU cooler transfers heat away from the processor while a case fan moves warm air out of the computer.",
        deepDive:
            "Cooling systems can use air cooling, liquid cooling, heatsinks, thermal interfaces, and carefully designed airflow.",
        keyPoints: [
            "Cooling removes heat from components.",
            "Heatsinks help transfer heat.",
            "Fans move air through the system.",
            "Liquid cooling can use a pump and radiator.",
            "Good airflow helps manage system temperatures."
        ],
        related: ["cpu", "gpu", "psu"]
    },


    "bios-uefi": {
        title: "BIOS & UEFI",
        category: "Computers",
        icon: "⚙️",
        keywords: ["bios", "uefi", "firmware", "boot firmware"],
        quickAnswer:
            "BIOS and UEFI are firmware systems that initialize hardware and help start the computer's operating system.",
        howItWorks:
            "When a computer powers on, firmware performs hardware initialization and follows configured boot information to begin loading an operating system.",
        whyItMatters:
            "Firmware provides an important bridge between the computer's hardware and the software used to start the system.",
        example:
            "You can enter a computer's firmware settings to change boot order or configure certain hardware options.",
        deepDive:
            "UEFI is the modern firmware interface used by most current computers. It provides features beyond traditional BIOS implementations.",
        keyPoints: [
            "Firmware runs before the operating system.",
            "BIOS is an older firmware approach.",
            "UEFI is the modern replacement in most systems.",
            "Firmware initializes hardware.",
            "Boot settings can often be changed through firmware settings."
        ],
        related: ["operating-system", "motherboard", "boot-process"]
    },


    "computer-ports": {
        title: "Computer Ports",
        category: "Computers",
        icon: "🔗",
        keywords: ["ports", "usb", "hdmi", "displayport", "ethernet", "computer ports"],
        quickAnswer:
            "Computer ports are physical or logical interfaces used to connect hardware or network services.",
        howItWorks:
            "Physical ports provide electrical or optical connections for devices, while logical network ports identify services running over network protocols.",
        whyItMatters:
            "Ports allow computers to communicate with peripherals, displays, networks, storage devices, and software services.",
        example:
            "USB ports connect peripherals, HDMI can connect displays, and Ethernet ports connect wired networks.",
        deepDive:
            "The word port can refer to both physical connectors and numbered network endpoints used by TCP or UDP services.",
        keyPoints: [
            "USB is a common physical computer interface.",
            "HDMI and DisplayPort are used for displays.",
            "Ethernet provides wired networking.",
            "Network ports are logical numbers.",
            "Physical ports and network ports are different concepts."
        ],
        related: ["ethernet", "http-https", "network-switch"]
    },


    "operating-system": {
        title: "Operating System",
        category: "Operating Systems",
        icon: "🖥️",
        keywords: ["operating system", "os", "system software"],
        quickAnswer:
            "An operating system is core system software that manages computer hardware and provides services for applications.",
        howItWorks:
            "The operating system manages resources such as CPU time, memory, storage, devices, files, networking, and user interaction.",
        whyItMatters:
            "Applications rely on the operating system to access hardware and common system services.",
        example:
            "Windows, Linux, and macOS are operating systems used on computers.",
        deepDive:
            "Operating systems contain components such as kernels, device drivers, system services, security mechanisms, and user interfaces.",
        keyPoints: [
            "An OS manages hardware resources.",
            "An OS provides services to applications.",
            "The kernel is a central part of an operating system.",
            "Operating systems manage files and devices.",
            "Windows, Linux, and macOS are examples."
        ],
        related: ["windows", "linux", "macos"]
    },


    windows: {
        title: "Windows",
        category: "Operating Systems",
        icon: "🪟",
        keywords: ["windows", "microsoft windows", "windows os"],
        quickAnswer:
            "Windows is a family of operating systems developed by Microsoft.",
        howItWorks:
            "Windows provides a graphical interface, system services, hardware management, file management, networking, security features, and application support.",
        whyItMatters:
            "Windows is widely used across personal computers, organizations, and many other computing environments.",
        example:
            "A Windows PC can run applications, manage files, connect to networks, and use hardware devices through the operating system.",
        deepDive:
            "Modern Windows systems are built around the Windows NT architecture and include many services and security technologies.",
        keyPoints: [
            "Windows is developed by Microsoft.",
            "It is an operating system family.",
            "Windows supports a large software ecosystem.",
            "It manages hardware and system resources.",
            "Windows includes built-in security features."
        ],
        related: ["operating-system", "device-drivers", "file-system"]
    },


    linux: {
        title: "Linux",
        category: "Operating Systems",
        icon: "🐧",
        keywords: ["linux", "linux operating system", "gnu linux", "distribution"],
        quickAnswer:
            "Linux commonly refers to operating systems built around the Linux kernel, often combined with other open-source software.",
        howItWorks:
            "The Linux kernel manages hardware and system resources while a distribution packages it with software, tools, libraries, and often a desktop environment.",
        whyItMatters:
            "Linux is widely used in servers, cloud infrastructure, embedded devices, development environments, and personal computers.",
        example:
            "Ubuntu, Fedora, Debian, and Arch Linux are examples of Linux distributions.",
        deepDive:
            "Linux distributions differ in package management, default software, configuration, release models, and target users.",
        keyPoints: [
            "Linux uses the Linux kernel.",
            "Distributions package the kernel with other software.",
            "Linux is widely used on servers.",
            "Many Linux components are open source.",
            "Different distributions have different tools and defaults."
        ],
        related: ["operating-system", "command-line", "servers"]
    },


    macos: {
        title: "macOS",
        category: "Operating Systems",
        icon: "🍎",
        keywords: ["macos", "mac os", "apple operating system"],
        quickAnswer:
            "macOS is Apple's desktop operating system for Mac computers.",
        howItWorks:
            "macOS manages Mac hardware and provides system services, a graphical interface, security features, file management, networking, and application support.",
        whyItMatters:
            "macOS provides the software environment used by Mac computers.",
        example:
            "A Mac uses macOS to run applications, manage files, connect to networks, and interact with hardware.",
        deepDive:
            "macOS is built on technologies including the Darwin foundation and includes Apple's graphical and system frameworks.",
        keyPoints: [
            "macOS is developed by Apple.",
            "It runs on Mac computers.",
            "It provides system and application services.",
            "It includes built-in security technologies.",
            "macOS is based on Unix-related technologies."
        ],
        related: ["operating-system", "applications", "file-system"]
    },


    applications: {
        title: "Applications",
        category: "Software",
        icon: "📱",
        keywords: ["applications", "apps", "software", "programs"],
        quickAnswer:
            "Applications are software programs designed to perform tasks for users or other software systems.",
        howItWorks:
            "Applications use programming logic and operating-system services to perform functions such as editing documents, browsing websites, communicating, or playing games.",
        whyItMatters:
            "Applications are the software people use to accomplish specific tasks.",
        example:
            "A web browser, text editor, media player, and calculator are all applications.",
        deepDive:
            "Applications can be desktop programs, mobile apps, web applications, command-line programs, or services.",
        keyPoints: [
            "Applications are software.",
            "Apps perform specific tasks.",
            "Applications depend on operating-system services.",
            "Applications can run on many platforms.",
            "Web applications run through web technologies."
        ],
        related: ["operating-system", "web-browser", "software"]
    },


    "device-drivers": {
        title: "Device Drivers",
        category: "Software",
        icon: "🔧",
        keywords: ["drivers", "device drivers", "hardware drivers"],
        quickAnswer:
            "Device drivers are software components that allow an operating system to communicate with hardware devices.",
        howItWorks:
            "A driver provides the operating system with software interfaces for controlling or communicating with a particular type of hardware.",
        whyItMatters:
            "Drivers allow operating systems and applications to use hardware such as graphics cards, printers, network adapters, and storage controllers.",
        example:
            "A graphics driver allows the operating system and applications to communicate with a GPU.",
        deepDive:
            "Drivers operate at different levels depending on the operating system and hardware architecture. Some drivers interact closely with the kernel.",
        keyPoints: [
            "Drivers connect software with hardware.",
            "Operating systems use drivers to communicate with devices.",
            "Graphics and network hardware commonly require drivers.",
            "Driver compatibility matters.",
            "Drivers can affect hardware functionality and performance."
        ],
        related: ["operating-system", "gpu", "computer-ports"]
    },


    "file-system": {
        title: "File System",
        category: "Software",
        icon: "📁",
        keywords: ["file system", "filesystem", "files", "folders", "ntfs", "ext4"],
        quickAnswer:
            "A file system organizes and manages how data is stored and retrieved on storage devices.",
        howItWorks:
            "A file system keeps track of files, directories, metadata, permissions, and the storage locations used by data.",
        whyItMatters:
            "File systems provide the structure that allows operating systems and applications to store and retrieve files.",
        example:
            "Windows commonly uses NTFS, while many Linux systems use file systems such as ext4.",
        deepDive:
            "Different file systems provide different features involving permissions, journaling, performance, compatibility, and storage limits.",
        keyPoints: [
            "File systems organize stored data.",
            "Files contain data and metadata.",
            "Directories organize files.",
            "Different operating systems support different file systems.",
            "File systems can provide permissions and other features."
        ],
        related: ["ssd", "hdd", "operating-system"]
    },


    software: {
        title: "Software",
        category: "Software",
        icon: "💻",
        keywords: ["software", "program", "computer software"],
        quickAnswer:
            "Software is a collection of programs, data, and instructions that tell computers how to perform tasks.",
        howItWorks:
            "Software consists of instructions that processors execute, often using operating-system services and hardware resources.",
        whyItMatters:
            "Software provides the functionality that makes computers useful for users and organizations.",
        example:
            "Web browsers, operating systems, games, and programming tools are examples of software.",
        deepDive:
            "Software can be categorized into system software, applications, development tools, utilities, services, and many other types.",
        keyPoints: [
            "Software consists of instructions and related data.",
            "Programs are executed by processors.",
            "Software can interact with hardware through operating systems.",
            "Applications are one category of software.",
            "Operating systems are system software."
        ],
        related: ["applications", "operating-system", "programming"]
    },


    programming: {
        title: "Programming",
        category: "Programming",
        icon: "👨‍💻",
        keywords: ["programming", "coding", "software development", "development"],
        quickAnswer:
            "Programming is the process of creating instructions that computers can execute to perform tasks.",
        howItWorks:
            "Programmers write source code using programming languages. That code may be interpreted, compiled, or otherwise transformed into forms that computers can execute.",
        whyItMatters:
            "Programming is used to create applications, websites, operating systems, automation tools, games, and many other technologies.",
        example:
            "A Python program can read information, perform calculations, and display a result.",
        deepDive:
            "Programming involves concepts such as variables, functions, data structures, algorithms, control flow, debugging, testing, and software design.",
        keyPoints: [
            "Programming creates computer instructions.",
            "Programming languages provide ways to express those instructions.",
            "Programs use logic and data.",
            "Debugging is an important programming skill.",
            "Programming is used across many technology fields."
        ],
        related: ["python", "algorithms", "software"]
    },


    python: {
        title: "Python",
        category: "Programming",
        icon: "🐍",
        keywords: ["python", "python programming", "python language"],
        quickAnswer:
            "Python is a general-purpose programming language known for readable syntax and a large ecosystem of libraries.",
        howItWorks:
            "Python source code is typically executed by a Python interpreter, which processes the program and performs its instructions.",
        whyItMatters:
            "Python is widely used for automation, web development, data analysis, scientific computing, education, and many other tasks.",
        example:
            "A simple Python program can store information in variables and use functions to process it.",
        deepDive:
            "Python supports procedural, object-oriented, and functional programming styles and has a large standard library and third-party ecosystem.",
        keyPoints: [
            "Python is a general-purpose language.",
            "Python emphasizes readable syntax.",
            "Python has many libraries.",
            "Python is used for automation and development.",
            "Python is popular for learning programming."
        ],
        related: ["programming", "algorithms", "artificial-intelligence"]
    },


    "command-line": {
        title: "Command Line",
        category: "Programming",
        icon: "⌨️",
        keywords: ["command line", "terminal", "shell", "cmd", "powershell", "bash"],
        quickAnswer:
            "A command line is an interface where users interact with a computer by entering text commands.",
        howItWorks:
            "A shell or command interpreter reads commands and performs the requested operations using operating-system services.",
        whyItMatters:
            "Command-line tools are widely used for administration, development, automation, troubleshooting, and system management.",
        example:
            "A user can use a terminal command to navigate directories, inspect files, or run a program.",
        deepDive:
            "Different operating systems and environments provide different shells and commands. Common examples include Bash, PowerShell, and Command Prompt.",
        keyPoints: [
            "The command line uses text commands.",
            "A shell interprets commands.",
            "Command-line tools can automate tasks.",
            "Developers often use terminals.",
            "Different shells have different commands and syntax."
        ],
        related: ["linux", "programming", "operating-system"]
    },


    algorithms: {
        title: "Algorithms",
        category: "Programming",
        icon: "🧠",
        keywords: ["algorithm", "algorithms", "problem solving", "logic"],
        quickAnswer:
            "An algorithm is a defined sequence of steps used to solve a problem or perform a task.",
        howItWorks:
            "An algorithm takes inputs, processes them according to defined rules, and produces an output or result.",
        whyItMatters:
            "Algorithms provide structured ways to solve computational problems efficiently and reliably.",
        example:
            "A sorting algorithm can arrange a collection of numbers from smallest to largest.",
        deepDive:
            "Algorithm design involves correctness, efficiency, resource usage, and often analysis of time and space complexity.",
        keyPoints: [
            "Algorithms are step-by-step procedures.",
            "Algorithms can process inputs.",
            "Algorithms produce outputs.",
            "Different algorithms can solve the same problem.",
            "Efficiency can be analyzed using complexity."
        ],
        related: ["programming", "data-structures", "python"]
    },


    "data-structures": {
        title: "Data Structures",
        category: "Programming",
        icon: "🗂️",
        keywords: ["data structures", "arrays", "lists", "stacks", "queues", "trees"],
        quickAnswer:
            "Data structures are organized ways of storing and managing data so programs can use it effectively.",
        howItWorks:
            "A data structure defines how data is arranged and what operations can efficiently be performed on that data.",
        whyItMatters:
            "Choosing an appropriate data structure can make programs easier to build and more efficient.",
        example:
            "An array can store a sequence of values, while a queue can organize items in first-in-first-out order.",
        deepDive:
            "Common data structures include arrays, linked lists, stacks, queues, hash tables, trees, graphs, and heaps.",
        keyPoints: [
            "Data structures organize information.",
            "Different structures support different operations.",
            "Arrays store ordered collections.",
            "Stacks use last-in-first-out behavior.",
            "Queues commonly use first-in-first-out behavior."
        ],
        related: ["algorithms", "programming", "python"]
    },


    "version-control": {
        title: "Version Control",
        category: "Programming",
        icon: "🔄",
        keywords: ["version control", "git", "github", "source control", "repository"],
        quickAnswer:
            "Version control systems track changes to files so developers can manage, compare, and collaborate on code.",
        howItWorks:
            "A version control system records changes as versions or commits, allowing developers to review history and work with different branches.",
        whyItMatters:
            "Version control helps developers track work, recover earlier versions, collaborate, and manage software projects.",
        example:
            "Git can record changes to a programming project and allow those changes to be shared through a hosting service.",
        deepDive:
            "Git is a distributed version control system. Platforms such as GitHub provide hosting and collaboration features around Git repositories.",
        keyPoints: [
            "Version control tracks changes.",
            "Git is a popular version control system.",
            "Commits record changes.",
            "Branches can support separate lines of development.",
            "Repositories contain project history."
        ],
        related: ["programming", "software-development", "github"]
    },


    "software-development": {
        title: "Software Development",
        category: "Programming",
        icon: "🛠️",
        keywords: ["software development", "development", "coding", "programming", "software engineering"],
        quickAnswer:
            "Software development is the process of designing, creating, testing, deploying, and maintaining software.",
        howItWorks:
            "Development typically involves requirements, design, implementation, testing, deployment, monitoring, and ongoing maintenance.",
        whyItMatters:
            "A structured development process helps teams build reliable and maintainable software.",
        example:
            "A development team might design a web application, write the code, test it, deploy it, and continue improving it.",
        deepDive:
            "Software development can use methodologies such as agile approaches, continuous integration, automated testing, code review, and version control.",
        keyPoints: [
            "Development includes more than writing code.",
            "Testing is an important part of development.",
            "Version control helps manage source code.",
            "Software requires maintenance after release.",
            "Development processes vary between teams."
        ],
        related: ["programming", "version-control", "software"]
    },


    "web-development": {
        title: "Web Development",
        category: "Programming",
        icon: "🌐",
        keywords: ["web development", "website development", "frontend", "backend", "web programming"],
        quickAnswer:
            "Web development is the process of creating websites and web applications.",
        howItWorks:
            "Web development commonly combines browser-side technologies with server-side software, databases, APIs, and network protocols.",
        whyItMatters:
            "Web technologies power websites, online services, web applications, and many digital products.",
        example:
            "A website can use HTML for structure, CSS for presentation, and JavaScript for interactive behavior.",
        deepDive:
            "Web development can include frontend development, backend development, databases, APIs, authentication, deployment, performance, and security.",
        keyPoints: [
            "Web development creates websites and web applications.",
            "HTML provides structure.",
            "CSS controls presentation.",
            "JavaScript can provide interactivity.",
            "Backend systems can process requests and data."
        ],
        related: ["html", "css", "javascript"]
    },


    html: {
        title: "HTML",
        category: "Programming",
        icon: "📄",
        keywords: ["html", "hypertext markup language", "web pages", "markup"],
        quickAnswer:
            "HTML is the markup language used to structure content on web pages.",
        howItWorks:
            "Browsers parse HTML documents and build a document structure that can be displayed and manipulated by other web technologies.",
        whyItMatters:
            "HTML provides the basic structure for websites and web documents.",
        example:
            "HTML can define headings, paragraphs, links, images, forms, and other page elements.",
        deepDive:
            "HTML uses elements and attributes to describe document structure and meaning. Modern HTML is standardized as part of the HTML Living Standard.",
        keyPoints: [
            "HTML stands for HyperText Markup Language.",
            "HTML provides structure.",
            "Browsers parse HTML.",
            "HTML uses elements and attributes.",
            "HTML works with CSS and JavaScript."
        ],
        related: ["css", "javascript", "web-development"]
    },


    css: {
        title: "CSS",
        category: "Programming",
        icon: "🎨",
        keywords: ["css", "cascading style sheets", "web design", "styling"],
        quickAnswer:
            "CSS is a stylesheet language used to control the presentation and layout of web pages.",
        howItWorks:
            "Browsers apply CSS rules to HTML elements to determine properties such as colors, sizes, spacing, positioning, and responsive layouts.",
        whyItMatters:
            "CSS allows developers to create readable, responsive, and visually organized websites.",
        example:
            "CSS can change the size, spacing, alignment, and appearance of a navigation bar.",
        deepDive:
            "CSS includes selectors, the cascade, inheritance, layout systems such as Flexbox and Grid, media queries, animations, and many other features.",
        keyPoints: [
            "CSS controls presentation.",
            "CSS works with HTML.",
            "Selectors target elements.",
            "Flexbox and Grid help with layout.",
            "Media queries support responsive design."
        ],
        related: ["html", "javascript", "web-development"]
    },


    javascript: {
        title: "JavaScript",
        category: "Programming",
        icon: "⚡",
        keywords: ["javascript", "js", "web scripting", "frontend javascript"],
        quickAnswer:
            "JavaScript is a programming language widely used to add behavior and interactivity to web pages and applications.",
        howItWorks:
            "Browsers execute JavaScript using a JavaScript engine. Scripts can interact with page elements, respond to events, make network requests, and process data.",
        whyItMatters:
            "JavaScript is a core technology of modern interactive web applications.",
        example:
            "JavaScript can respond when a user clicks a button and then update content on the page.",
        deepDive:
            "JavaScript supports asynchronous programming, objects, functions, modules, APIs, and many modern language features.",
        keyPoints: [
            "JavaScript is a programming language.",
            "Browsers can execute JavaScript.",
            "JavaScript can modify web pages.",
            "JavaScript can respond to user events.",
            "JavaScript can communicate with web services."
        ],
        related: ["html", "css", "web-development"]
    },


    "database": {
        title: "Database",
        category: "Software",
        icon: "🗄️",
        keywords: ["database", "databases", "data storage", "sql", "nosql"],
        quickAnswer:
            "A database is an organized system for storing, managing, and retrieving data.",
        howItWorks:
            "Database systems store data according to a defined model and provide mechanisms for querying, updating, indexing, and protecting that data.",
        whyItMatters:
            "Databases allow applications to reliably manage large amounts of structured or semi-structured information.",
        example:
            "A website might store user accounts, products, posts, and settings in a database.",
        deepDive:
            "Relational databases organize data into tables and commonly use SQL. Other database models include document, key-value, graph, and wide-column systems.",
        keyPoints: [
            "Databases store organized information.",
            "Applications use databases to persist data.",
            "SQL is common with relational databases.",
            "Indexes can improve query performance.",
            "Different database models fit different use cases."
        ],
        related: ["sql", "web-development", "servers"]
    },


    sql: {
        title: "SQL",
        category: "Programming",
        icon: "🗃️",
        keywords: ["sql", "structured query language", "database queries"],
        quickAnswer:
            "SQL is a language used to work with many relational databases.",
        howItWorks:
            "SQL statements can retrieve, insert, update, and delete data and can also define database structures and permissions depending on the database system.",
        whyItMatters:
            "SQL provides a standard way to interact with relational data.",
        example:
            "An application can use a SQL query to retrieve customer records that match certain conditions.",
        deepDive:
            "SQL includes commands for data definition, manipulation, querying, transactions, and other database operations.",
        keyPoints: [
            "SQL stands for Structured Query Language.",
            "SQL is widely used with relational databases.",
            "SQL can retrieve data.",
            "SQL can modify data.",
            "SQL syntax varies somewhat between database systems."
        ],
        related: ["database", "programming", "servers"]
    },


    "computer-network": {
        title: "Computer Network",
        category: "Internet & Networking",
        icon: "🌐",
        keywords: ["network", "computer network", "networking", "lan", "wan"],
        quickAnswer:
            "A computer network is a group of connected devices that can exchange data and share resources.",
        howItWorks:
            "Networks use communication protocols, addressing systems, physical or wireless links, and networking hardware to move data between devices.",
        whyItMatters:
            "Networks allow computers and other devices to communicate and share services.",
        example:
            "A home network can connect phones, computers, printers, smart TVs, and other devices.",
        deepDive:
            "Networks can range from small local networks to large interconnected systems such as the Internet.",
        keyPoints: [
            "Networks connect devices.",
            "Networks use communication protocols.",
            "LANs cover local areas.",
            "WANs connect larger geographic areas.",
            "The Internet is a global network of networks."
        ],
        related: ["router", "network-switch", "internet"]
    },


    internet: {
        title: "Internet",
        category: "Internet & Networking",
        icon: "🌎",
        keywords: ["internet", "online", "world wide web", "network of networks"],
        quickAnswer:
            "The Internet is a global system of interconnected networks that communicate using standardized protocols.",
        howItWorks:
            "Devices and networks exchange packets using Internet protocols such as IP, while higher-level protocols provide services such as web browsing, email, and DNS.",
        whyItMatters:
            "The Internet provides the infrastructure for a huge range of communication and online services.",
        example:
            "When you visit a website, your device communicates across networks using Internet protocols to reach the site's servers.",
        deepDive:
            "The Internet is decentralized and consists of many independently operated networks connected through routing systems and shared protocols.",
        keyPoints: [
            "The Internet is a network of networks.",
            "IP is a fundamental Internet protocol.",
            "Packets carry network data.",
            "Routers connect different networks.",
            "The Web is a service that runs over the Internet."
        ],
        related: ["ip-address", "dns", "web-browser"]
    },


    ethernet: {
        title: "Ethernet",
        category: "Internet & Networking",
        icon: "🔌",
        keywords: ["ethernet", "wired network", "network cable", "lan"],
        quickAnswer:
            "Ethernet is a family of wired networking technologies commonly used to connect devices within local networks.",
        howItWorks:
            "Ethernet sends network frames across physical connections such as twisted-pair cables or fiber-optic links.",
        whyItMatters:
            "Ethernet provides reliable wired networking for computers, servers, switches, routers, and many other devices.",
        example:
            "A desktop PC can connect to a router or switch using an Ethernet cable.",
        deepDive:
            "Ethernet standards support different speeds and physical media. Modern Ethernet can operate from common gigabit speeds to much higher data rates.",
        keyPoints: [
            "Ethernet is commonly wired.",
            "Ethernet is widely used in local networks.",
            "Ethernet uses frames.",
            "Ethernet can provide high-speed connections.",
            "Ethernet connections can be made through switches and routers."
        ],
        related: ["network-switch", "router", "wifi"]
    },


    router: {
        title: "Router",
        category: "Internet & Networking",
        icon: "📡",
        keywords: ["router", "routing", "network router"],
        quickAnswer:
            "A router connects networks and forwards network traffic toward its destination.",
        howItWorks:
            "Routers examine packet addressing information and use routing information to determine where packets should be forwarded.",
        whyItMatters:
            "Routers allow different networks to communicate, including connections between home networks and the Internet.",
        example:
            "Your home router connects devices on your local network to your Internet service provider.",
        deepDive:
            "Routers can maintain routing tables, perform network address translation, provide firewall functions, and support wireless access depending on the device.",
        keyPoints: [
            "Routers connect networks.",
            "Routers forward packets.",
            "Routing decisions use destination information.",
            "Home routers often provide several networking functions.",
            "Routers are different from switches."
        ],
        related: ["ip-address", "network-switch", "dhcp"]
    },


    "network-switch": {
        title: "Network Switch",
        category: "Internet & Networking",
        icon: "🔀",
        keywords: ["switch", "network switch", "ethernet switch", "lan switch"],
        quickAnswer:
            "A network switch connects devices within a local network and forwards Ethernet frames to appropriate ports.",
        howItWorks:
            "A switch learns which devices are reachable through its ports and uses that information to forward frames.",
        whyItMatters:
            "Switches allow many wired devices to communicate efficiently on a local network.",
        example:
            "A business can connect dozens of computers to a network switch using Ethernet cables.",
        deepDive:
            "Most modern switches use MAC addresses to make forwarding decisions. Managed switches can provide additional configuration and monitoring features.",
        keyPoints: [
            "Switches commonly connect devices on LANs.",
            "They forward Ethernet frames.",
            "Switches learn device locations.",
            "Managed switches offer additional configuration.",
            "Switches and routers serve different primary purposes."
        ],
        related: ["ethernet", "router", "ip-address"]
    },


    "ip-address": {
        title: "IP Address",
        category: "Internet & Networking",
        icon: "🌐",
        keywords: ["ip", "ip address", "ipv4", "ipv6", "internet protocol"],
        quickAnswer:
            "An IP address is an identifier associated with a network interface that helps deliver network traffic.",
        howItWorks:
            "IP addressing allows packets to contain source and destination addressing information used by networks.",
        whyItMatters:
            "IP addressing provides a fundamental way for devices and networks to communicate.",
        example:
            "Devices on a home network can have private IP addresses while the router communicates with the wider Internet.",
        deepDive:
            "IPv4 uses 32-bit addresses and IPv6 uses 128-bit addresses. IPv6 provides a vastly larger address space.",
        keyPoints: [
            "IP means Internet Protocol.",
            "IPv4 and IPv6 are major versions.",
            "Private and public addresses have different uses.",
            "IP addresses help route packets.",
            "IP addresses are different from domain names."
        ],
        related: ["dns", "router", "internet"]
    },


    dns: {
        title: "DNS — Domain Name System",
        category: "Internet & Networking",
        icon: "🔎",
        keywords: ["dns", "domain name system", "domain", "name resolution"],
        quickAnswer:
            "DNS provides a naming system that helps translate domain names into network information such as IP addresses.",
        howItWorks:
            "A DNS resolver obtains information from DNS servers so a device can determine where a requested domain's services are located.",
        whyItMatters:
            "DNS lets people use memorable names instead of having to remember numerical IP addresses.",
        example:
            "When you enter a website domain into a browser, DNS helps determine where the website can be reached.",
        deepDive:
            "DNS uses a distributed hierarchy involving root servers, top-level domain servers, authoritative servers, and recursive resolvers.",
        keyPoints: [
            "DNS means Domain Name System.",
            "DNS provides name resolution.",
            "DNS is distributed.",
            "DNS can contain several record types.",
            "DNS is essential to many Internet services."
        ],
        related: ["ip-address", "web-browser", "internet"]
    },


    dhcp: {
        title: "DHCP",
        category: "Internet & Networking",
        icon: "📋",
        keywords: ["dhcp", "dynamic host configuration protocol", "ip assignment"],
        quickAnswer:
            "DHCP automatically provides network configuration information to devices joining a network.",
        howItWorks:
            "A DHCP server can provide information such as an IP address, subnet configuration, gateway, and DNS servers.",
        whyItMatters:
            "DHCP saves administrators and users from manually configuring every device on many networks.",
        example:
            "When your phone joins a home Wi-Fi network, the router can automatically provide it with network configuration.",
        deepDive:
            "DHCP uses a client-server process that includes discovery, offers, requests, and acknowledgments.",
        keyPoints: [
            "DHCP automates network configuration.",
            "It can assign IP addresses.",
            "It can provide gateway information.",
            "It can provide DNS server information.",
            "It reduces manual configuration."
        ],
        related: ["ip-address", "router", "dns"]
    },


    "http-https": {
        title: "HTTP & HTTPS",
        category: "Internet & Networking",
        icon: "🔐",
        keywords: ["http", "https", "web protocol", "tls", "web traffic"],
        quickAnswer:
            "HTTP is a protocol used to exchange web information, while HTTPS uses HTTP over a protected TLS connection.",
        howItWorks:
            "A browser sends requests to a web server and receives responses. HTTPS adds cryptographic protection to the connection.",
        whyItMatters:
            "HTTPS helps protect information exchanged between a browser and a website against certain forms of interception or modification.",
        example:
            "When you visit a secure website, your browser commonly uses HTTPS to communicate with the server.",
        deepDive:
            "HTTPS relies on TLS to provide encryption, authentication, and integrity protections for network communication.",
        keyPoints: [
            "HTTP is a web communication protocol.",
            "HTTPS uses TLS protection.",
            "HTTPS helps protect data in transit.",
            "Browsers and servers communicate using requests and responses.",
            "HTTPS does not make a website automatically trustworthy."
        ],
        related: ["web-browser", "dns", "internet"]
    },


    "web-browser": {
        title: "Web Browser",
        category: "Internet & Networking",
        icon: "🌎",
        keywords: ["browser", "web browser", "chrome", "firefox", "safari", "edge"],
        quickAnswer:
            "A web browser is software that retrieves and displays content from websites and web applications.",
        howItWorks:
            "The browser resolves domain names, establishes network connections, requests resources, interprets web technologies, and renders pages.",
        whyItMatters:
            "Browsers provide the main interface through which people interact with the World Wide Web.",
        example:
            "Chrome, Firefox, Safari, and Edge can retrieve a website and display its HTML, CSS, JavaScript, images, and other resources.",
        deepDive:
            "Modern browsers contain networking systems, rendering engines, JavaScript engines, security features, storage systems, and sandboxing technologies.",
        keyPoints: [
            "Browsers display web content.",
            "They communicate with web servers.",
            "They interpret HTML, CSS, and JavaScript.",
            "Browsers include security features.",
            "Modern browsers are complex software platforms."
        ],
        related: ["html", "css", "javascript"]
    },    "search-engine": {
        title: "Search Engine",
        category: "Internet & Networking",
        icon: "🔍",
        keywords: ["search engine", "google", "bing", "web search"],
        quickAnswer:
            "A search engine is a system that helps people find information on the Internet by searching an indexed collection of web content.",
        howItWorks:
            "Search engines discover web pages, analyze and index their content, and then use ranking systems to return relevant results for user queries.",
        whyItMatters:
            "Search engines make it easier to locate information across the enormous amount of content available online.",
        example:
            "A person can search for a programming concept and receive a list of relevant web pages.",
        deepDive:
            "Search engines commonly use crawlers, indexes, ranking systems, query processing, and many other technologies to provide results.",
        keyPoints: [
            "Search engines help locate information.",
            "Search engines maintain indexes.",
            "Crawlers discover web content.",
            "Ranking systems determine result order.",
            "Search engines process user queries."
        ],
        related: ["internet", "web-browser", "dns"]
    },


    "web-server": {
        title: "Web Server",
        category: "Internet & Networking",
        icon: "🖥️",
        keywords: [
            "web server",
            "website server",
            "http server",
            "web hosting server"
        ],
        quickAnswer:
            "A web server is software or a computer system that receives web requests and provides web content or services in response.",
        howItWorks:
            "A browser sends an HTTP or HTTPS request to a web server. The server processes the request and sends back a response such as an HTML page, image, file, or API result.",
        whyItMatters:
            "Web servers provide the infrastructure that allows websites and web applications to be accessed over networks.",
        example:
            "When you open a website, a web server can receive your browser's request and return the requested page.",
        deepDive:
            "Web servers can serve static files or forward requests to application software that generates dynamic responses.",
        keyPoints: [
            "Web servers handle web requests.",
            "HTTP and HTTPS are commonly used.",
            "Servers can deliver files.",
            "Servers can communicate with application software.",
            "Web servers are an important part of website infrastructure."
        ],
        related: ["http-https", "website-hosting", "computer-server"]
    },


    "computer-server": {
        title: "Computer Server",
        category: "Computers",
        icon: "🖥️",
        keywords: [
            "server",
            "computer server",
            "server computer",
            "server machine"
        ],
        quickAnswer:
            "A server is a computer or software system that provides services or resources to other computers called clients.",
        howItWorks:
            "A server listens for requests and responds using a defined protocol. Servers can provide websites, files, databases, email, applications, and many other services.",
        whyItMatters:
            "Servers allow shared services and resources to be provided to many users or devices.",
        example:
            "A file server can store files that authorized computers access across a network.",
        deepDive:
            "Servers can be physical computers, virtual machines, containers, or cloud-based systems. A single computer can provide several different services.",
        keyPoints: [
            "Servers provide services or resources.",
            "Clients request services from servers.",
            "Servers can be physical or virtual.",
            "Servers can provide many different services.",
            "A server is not necessarily a special type of computer hardware."
        ],
        related: ["web-server", "database", "cloud-computing"]
    },


    "website-hosting": {
        title: "Website Hosting",
        category: "Internet & Networking",
        icon: "🏠",
        keywords: [
            "hosting",
            "website hosting",
            "web hosting",
            "host a website"
        ],
        quickAnswer:
            "Website hosting is a service or infrastructure that makes website files and applications available over the Internet.",
        howItWorks:
            "A hosting system stores or runs website resources on connected servers so visitors can request and receive them through web protocols.",
        whyItMatters:
            "Hosting allows a website to be available to people outside the developer's own computer.",
        example:
            "A static website can be hosted on a platform that serves its HTML, CSS, JavaScript, and image files.",
        deepDive:
            "Hosting options include static hosting, shared hosting, virtual servers, dedicated servers, and cloud platforms.",
        keyPoints: [
            "Hosting makes websites available online.",
            "Hosting can serve static files.",
            "Dynamic sites may require application servers.",
            "Hosting providers supply computing infrastructure.",
            "Different hosting types have different capabilities and costs."
        ],
        related: ["web-server", "domain-name", "cloud-computing"]
    },


    "domain-name": {
        title: "Domain Name",
        category: "Internet & Networking",
        icon: "🌐",
        keywords: [
            "domain",
            "domain name",
            "website domain",
            "url domain",
            "dns domain"
        ],
        quickAnswer:
            "A domain name is a human-readable name used to identify an Internet resource, commonly a website.",
        howItWorks:
            "DNS translates domain names into information used by networked systems, such as IP addresses for websites.",
        whyItMatters:
            "Domain names provide memorable names instead of requiring users to remember numerical network addresses.",
        example:
            "A website can use a domain name such as example.com instead of asking visitors to type an IP address.",
        deepDive:
            "Domain names are hierarchical and consist of labels separated by dots. Domain registration and DNS hosting are related but separate services.",
        keyPoints: [
            "Domain names are human-readable Internet names.",
            "DNS helps resolve domain names.",
            "Domains have hierarchical structures.",
            "A domain and website hosting are different things.",
            "Domains can be registered through registrars."
        ],
        related: ["dns", "website-hosting", "internet"]
    },


    "url": {
        title: "URL — Uniform Resource Locator",
        category: "Internet & Networking",
        icon: "🔗",
        keywords: [
            "url",
            "uniform resource locator",
            "web address",
            "website address"
        ],
        quickAnswer:
            "A URL is an address that identifies a resource and provides information about how it can be accessed.",
        howItWorks:
            "A URL can specify a scheme such as HTTPS, a domain, a path, and sometimes a query string or fragment.",
        whyItMatters:
            "URLs allow browsers and other software to identify and request specific resources.",
        example:
            "A web address can contain a protocol, domain name, path, and query parameters.",
        deepDive:
            "URL syntax can include schemes, authentication information, hostnames, ports, paths, queries, and fragments depending on the resource.",
        keyPoints: [
            "URL means Uniform Resource Locator.",
            "URLs identify resources.",
            "HTTPS is a common URL scheme.",
            "URLs can contain paths and queries.",
            "A URL is not exactly the same thing as a domain name."
        ],
        related: ["domain-name", "http-https", "web-browser"]
    },


    "cloud-computing": {
        title: "Cloud Computing",
        category: "Technology",
        icon: "☁️",
        keywords: [
            "cloud",
            "cloud computing",
            "cloud services",
            "cloud infrastructure"
        ],
        quickAnswer:
            "Cloud computing provides computing resources such as servers, storage, databases, and applications through network-accessible infrastructure.",
        howItWorks:
            "Cloud providers operate large pools of computing resources and allow customers to use them through management interfaces, APIs, and other services.",
        whyItMatters:
            "Cloud computing can provide scalable infrastructure without requiring organizations to own and maintain all of the physical hardware themselves.",
        example:
            "A company can run a web application on cloud servers instead of maintaining its own physical data center.",
        deepDive:
            "Cloud services can include infrastructure, platforms, software, storage, databases, networking, machine learning, and many other capabilities.",
        keyPoints: [
            "Cloud computing uses remote infrastructure.",
            "Cloud providers operate physical data centers.",
            "Resources can often scale up or down.",
            "Cloud services can be accessed through APIs.",
            "Cloud computing does not mean data exists in an abstract location; physical infrastructure still exists."
        ],
        related: ["computer-server", "website-hosting", "artificial-intelligence"]
    },


    "virtual-machine": {
        title: "Virtual Machine",
        category: "Technology",
        icon: "🖥️",
        keywords: [
            "virtual machine",
            "vm",
            "virtualization",
            "virtual computer"
        ],
        quickAnswer:
            "A virtual machine is a software-created computer environment that runs on physical hardware.",
        howItWorks:
            "A hypervisor or virtualization system provides virtual hardware resources to a guest operating system running inside the virtual machine.",
        whyItMatters:
            "Virtual machines allow multiple isolated computing environments to share physical hardware.",
        example:
            "A developer can run a Linux virtual machine on a Windows computer for testing software.",
        deepDive:
            "Virtualization abstracts CPU, memory, storage, and networking resources. Virtual machines can be used for development, testing, servers, security research, and cloud computing.",
        keyPoints: [
            "VM means Virtual Machine.",
            "A VM simulates a computer environment.",
            "VMs run guest operating systems.",
            "Hypervisors manage virtualization.",
            "Multiple VMs can share physical hardware."
        ],
        related: ["cloud-computing", "operating-system", "computer-server"]
    },


    "cybersecurity": {
        title: "Cybersecurity",
        category: "Cybersecurity",
        icon: "🛡️",
        keywords: [
            "cybersecurity",
            "cyber security",
            "information security",
            "computer security",
            "security"
        ],
        quickAnswer:
            "Cybersecurity is the practice of protecting computers, networks, systems, applications, and data from unauthorized access, misuse, disruption, or damage.",
        howItWorks:
            "Cybersecurity combines technologies, processes, policies, monitoring, secure design, authentication, access controls, and user awareness to reduce security risks.",
        whyItMatters:
            "Modern systems contain valuable information and provide important services, making security an important part of technology.",
        example:
            "Using strong authentication and keeping software updated are common cybersecurity practices.",
        deepDive:
            "Cybersecurity includes areas such as network security, application security, cloud security, identity management, incident response, vulnerability management, and security operations.",
        keyPoints: [
            "Cybersecurity protects digital systems and information.",
            "Security involves both technology and people.",
            "Authentication verifies identity.",
            "Access control determines permissions.",
            "Security is an ongoing process."
        ],
        related: ["authentication", "firewall", "malware"]
    },


    "malware": {
        title: "Malware",
        category: "Cybersecurity",
        icon: "🦠",
        keywords: [
            "malware",
            "malicious software",
            "virus",
            "trojan",
            "ransomware",
            "spyware"
        ],
        quickAnswer:
            "Malware is software intentionally designed to perform harmful, unauthorized, or unwanted actions.",
        howItWorks:
            "Different types of malware use different techniques to execute, spread, collect information, disrupt systems, or perform other malicious actions.",
        whyItMatters:
            "Malware can affect confidentiality, integrity, availability, and the normal operation of systems.",
        example:
            "Ransomware is a type of malware associated with restricting access to data or systems and demanding payment.",
        deepDive:
            "Malware categories include viruses, worms, trojans, ransomware, spyware, rootkits, and other malicious programs. A single piece of malware can exhibit characteristics of multiple categories.",
        keyPoints: [
            "Malware means malicious software.",
            "Viruses and worms are different concepts.",
            "Trojans disguise malicious functionality.",
            "Ransomware can disrupt access to data.",
            "Security software and safe practices can reduce risk."
        ],
        related: ["cybersecurity", "antivirus", "phishing"]
    },


    phishing: {
        title: "Phishing",
        category: "Cybersecurity",
        icon: "🎣",
        keywords: [
            "phishing",
            "phishing attack",
            "fake email",
            "scam message",
            "credential theft"
        ],
        quickAnswer:
            "Phishing is a social engineering technique that attempts to trick people into revealing information or taking an unsafe action.",
        howItWorks:
            "An attacker may send a deceptive message or create a fraudulent website designed to appear legitimate and persuade a person to provide information or interact with malicious content.",
        whyItMatters:
            "Phishing can lead to compromised accounts, stolen information, malware infections, or financial losses.",
        example:
            "A fraudulent message might imitate a legitimate service and ask a user to sign in through a deceptive link.",
        deepDive:
            "Phishing can occur through email, text messages, social media, phone calls, and other communication channels. Targeted phishing is often called spear phishing.",
        keyPoints: [
            "Phishing relies heavily on deception.",
            "Messages may imitate legitimate organizations.",
            "Links should be checked carefully.",
            "Unexpected requests for sensitive information deserve caution.",
            "Multi-factor authentication can reduce the impact of stolen passwords."
        ],
        related: ["cybersecurity", "authentication", "social-engineering"]
    },


    "social-engineering": {
        title: "Social Engineering",
        category: "Cybersecurity",
        icon: "🧠",
        keywords: [
            "social engineering",
            "human manipulation",
            "security awareness",
            "psychological manipulation"
        ],
        quickAnswer:
            "Social engineering involves manipulating people into revealing information, granting access, or performing actions that benefit an attacker.",
        howItWorks:
            "Attackers may use trust, urgency, authority, fear, curiosity, or other psychological techniques to influence a target.",
        whyItMatters:
            "Even strong technical security controls can be undermined when users are manipulated into bypassing them.",
        example:
            "An attacker may pretend to be a support employee and ask a user to reveal account information.",
        deepDive:
            "Social engineering can include phishing, pretexting, baiting, impersonation, and other deception-based techniques.",
        keyPoints: [
            "Social engineering targets people.",
            "Attackers may impersonate trusted individuals.",
            "Urgency is commonly used as a manipulation technique.",
            "Security awareness can reduce risk.",
            "Sensitive information should not be shared simply because someone asks for it."
        ],
        related: ["phishing", "cybersecurity", "authentication"]
    },


    authentication: {
        title: "Authentication",
        category: "Cybersecurity",
        icon: "🔑",
        keywords: [
            "authentication",
            "login",
            "identity verification",
            "password",
            "mfa"
        ],
        quickAnswer:
            "Authentication is the process of verifying that someone or something is the identity it claims to be.",
        howItWorks:
            "Authentication can use factors such as passwords, possession of a device or token, or biometric characteristics.",
        whyItMatters:
            "Authentication helps systems determine who or what is attempting to access a resource.",
        example:
            "Entering a password and completing a verification step can authenticate a user to an account.",
        deepDive:
            "Authentication is different from authorization. Authentication establishes identity, while authorization determines what an authenticated identity is allowed to do.",
        keyPoints: [
            "Authentication verifies identity.",
            "Passwords are one authentication factor.",
            "Multi-factor authentication uses multiple factors.",
            "Authentication and authorization are different.",
            "Strong authentication can reduce account compromise."
        ],
        related: ["authorization", "password-security", "cybersecurity"]
    },


    authorization: {
        title: "Authorization",
        category: "Cybersecurity",
        icon: "🚪",
        keywords: [
            "authorization",
            "permissions",
            "access control",
            "privileges"
        ],
        quickAnswer:
            "Authorization determines what an authenticated user, system, or process is allowed to access or do.",
        howItWorks:
            "After identity is established, an access-control system evaluates permissions and determines whether the requested action is allowed.",
        whyItMatters:
            "Authorization limits access to resources and helps prevent users or programs from performing actions they should not be allowed to perform.",
        example:
            "A regular user might be allowed to read a file while an administrator is allowed to modify it.",
        deepDive:
            "Authorization models can include role-based access control, attribute-based access control, access control lists, and policy-based systems.",
        keyPoints: [
            "Authorization controls permissions.",
            "Authentication verifies identity.",
            "Least privilege limits unnecessary access.",
            "Permissions can be assigned through roles.",
            "Access-control policies should match business or system requirements."
        ],
        related: ["authentication", "cybersecurity", "password-security"]
    },


    "password-security": {
        title: "Password Security",
        category: "Cybersecurity",
        icon: "🔐",
        keywords: [
            "password security",
            "strong passwords",
            "passwords",
            "password manager",
            "credential security"
        ],
        quickAnswer:
            "Password security involves protecting passwords and using authentication practices that make account compromise more difficult.",
        howItWorks:
            "Secure systems should store passwords using appropriate password-hashing techniques rather than storing them as readable text. Users can reduce risk by using unique passwords and strong authentication.",
        whyItMatters:
            "Compromised passwords can provide unauthorized access to accounts and systems.",
        example:
            "Using a unique password for each important account reduces the chance that one stolen password compromises multiple accounts.",
        deepDive:
            "Password managers can generate and store unique passwords. Multi-factor authentication provides another layer of protection.",
        keyPoints: [
            "Avoid reusing important passwords.",
            "Password managers can help manage unique passwords.",
            "Passwords should be stored securely by services.",
            "Multi-factor authentication adds protection.",
            "Never share passwords unnecessarily."
        ],
        related: ["authentication", "cybersecurity", "phishing"]
    },


    "firewall": {
        title: "Firewall",
        category: "Cybersecurity",
        icon: "🧱",
        keywords: [
            "firewall",
            "network firewall",
            "security firewall",
            "packet filtering"
        ],
        quickAnswer:
            "A firewall controls or filters network traffic according to defined security rules.",
        howItWorks:
            "A firewall examines network traffic and allows or blocks connections based on configured policies and characteristics.",
        whyItMatters:
            "Firewalls can help limit unwanted network communication and reduce exposure to certain threats.",
        example:
            "A firewall can allow approved network connections while blocking traffic that violates its rules.",
        deepDive:
            "Firewalls can operate on individual devices or at network boundaries and can use different techniques such as packet filtering, stateful inspection, and application-aware policies.",
        keyPoints: [
            "Firewalls filter network traffic.",
            "Rules determine what traffic is allowed.",
            "Firewalls can run on computers or network devices.",
            "Firewalls are one layer of security.",
            "A firewall does not replace other security controls."
        ],
        related: ["cybersecurity", "router", "network-security"]
    },


    "antivirus": {
        title: "Antivirus Software",
        category: "Cybersecurity",
        icon: "🛡️",
        keywords: [
            "antivirus",
            "anti-malware",
            "malware protection",
            "virus scanner"
        ],
        quickAnswer:
            "Antivirus or anti-malware software helps detect, block, and remove malicious software.",
        howItWorks:
            "Security software can use signatures, behavioral analysis, reputation information, heuristics, and other techniques to identify suspicious or malicious activity.",
        whyItMatters:
            "Malicious software can compromise systems, so automated detection and protection can provide an important security layer.",
        example:
            "Security software may scan a downloaded file and warn the user if it appears malicious.",
        deepDive:
            "Modern endpoint security products often provide capabilities beyond traditional virus scanning, including behavior monitoring and threat detection.",
        keyPoints: [
            "Antivirus software helps detect malware.",
            "Modern security products use multiple detection techniques.",
            "Security software should be kept updated.",
            "No security tool detects every possible threat.",
            "Safe user behavior remains important."
        ],
        related: ["malware", "cybersecurity", "firewall"]
    },


    "network-security": {
        title: "Network Security",
        category: "Cybersecurity",
        icon: "🔒",
        keywords: [
            "network security",
            "network protection",
            "secure networking",
            "network defense"
        ],
        quickAnswer:
            "Network security is the practice of protecting network infrastructure, traffic, systems, and services from unauthorized access and other threats.",
        howItWorks:
            "Network security uses controls such as firewalls, authentication, encryption, segmentation, monitoring, secure configuration, and access policies.",
        whyItMatters:
            "Networks connect many systems, making their security important for protecting information and services.",
        example:
            "A company can separate sensitive systems into network segments and restrict which devices can communicate with them.",
        deepDive:
            "Network security includes perimeter controls, internal segmentation, secure protocols, monitoring, intrusion detection, access control, and incident response.",
        keyPoints: [
            "Network security protects connected systems.",
            "Firewalls can filter traffic.",
            "Encryption can protect data in transit.",
            "Segmentation can limit movement between systems.",
            "Monitoring helps identify suspicious activity."
        ],
        related: ["firewall", "encryption", "cybersecurity"]
    },


    "encryption": {
        title: "Encryption",
        category: "Cybersecurity",
        icon: "🔐",
        keywords: [
            "encryption",
            "cryptography",
            "encrypted data",
            "data protection"
        ],
        quickAnswer:
            "Encryption transforms readable information into protected ciphertext using a cryptographic process.",
        howItWorks:
            "An encryption algorithm uses a key to transform plaintext into ciphertext. Authorized systems can use the appropriate key to recover the original information.",
        whyItMatters:
            "Encryption can protect sensitive information from being understood by unauthorized parties who obtain the protected data.",
        example:
            "HTTPS uses cryptographic mechanisms to help protect information exchanged between a browser and a website.",
        deepDive:
            "Symmetric encryption uses related shared keys for encryption and decryption, while asymmetric cryptography uses public and private keys for different operations.",
        keyPoints: [
            "Encryption protects data using cryptography.",
            "Plaintext is transformed into ciphertext.",
            "Keys are central to encryption systems.",
            "Symmetric and asymmetric cryptography have different designs.",
            "Encryption protects data but does not solve every security problem."
        ],
        related: ["cryptography", "http-https", "cybersecurity"]
    },


    cryptography: {
        title: "Cryptography",
        category: "Cybersecurity",
        icon: "🔢",
        keywords: [
            "cryptography",
            "crypto",
            "cryptographic algorithms",
            "security mathematics"
        ],
        quickAnswer:
            "Cryptography is the study and practice of techniques for protecting information and communications using mathematical methods.",
        howItWorks:
            "Cryptographic systems use algorithms and keys to provide properties such as confidentiality, integrity, authentication, and non-repudiation.",
        whyItMatters:
            "Cryptography provides the foundation for many security technologies used in modern computing and networking.",
        example:
            "Digital signatures can help verify that data came from a particular key holder and was not changed after signing.",
        deepDive:
            "Cryptography includes encryption, hashing, digital signatures, key exchange, authentication protocols, and other techniques.",
        keyPoints: [
            "Cryptography uses mathematical techniques.",
            "Encryption can provide confidentiality.",
            "Hashing can help verify data integrity.",
            "Digital signatures provide authentication and integrity properties.",
            "Keys must be managed securely."
        ],
        related: ["encryption", "hashing", "digital-signatures"]
    },


    hashing: {
        title: "Hashing",
        category: "Cybersecurity",
        icon: "#️⃣",
        keywords: [
            "hashing",
            "hash function",
            "cryptographic hash",
            "sha",
            "sha256"
        ],
        quickAnswer:
            "Hashing uses a mathematical function to produce a fixed-size value representing input data.",
        howItWorks:
            "A hash function processes input data and produces a digest. Good cryptographic hash functions make it difficult to find different inputs that produce the same result.",
        whyItMatters:
            "Hashing is useful for integrity checking, data structures, digital systems, and secure password storage designs.",
        example:
            "A software publisher can provide a file's hash so users can compare the downloaded file against the expected value.",
        deepDive:
            "Cryptographic hash functions such as SHA-256 are designed with properties including resistance to preimage and collision attacks.",
        keyPoints: [
            "Hashes are derived from input data.",
            "Small input changes can produce very different hashes.",
            "Cryptographic hashes are designed to resist certain attacks.",
            "Hashing is not the same as encryption.",
            "Password systems should use password-specific hashing approaches."
        ],
        related: ["cryptography", "encryption", "password-security"]
    },


    "digital-signatures": {
        title: "Digital Signatures",
        category: "Cybersecurity",
        icon: "✍️",
        keywords: [
            "digital signature",
            "digital signatures",
            "signature",
            "public key cryptography"
        ],
        quickAnswer:
            "A digital signature is a cryptographic mechanism used to help verify the origin and integrity of digital information.",
        howItWorks:
            "A signer uses a private key to create a signature. A verifier uses the corresponding public key to check the signature.",
        whyItMatters:
            "Digital signatures can provide evidence that data was signed by someone controlling a particular private key and was not altered after signing.",
        example:
            "Software releases can be digitally signed so users and systems can verify their origin and integrity.",
        deepDive:
            "Digital signatures typically use public-key cryptography and cryptographic hash functions as part of the signing and verification process.",
        keyPoints: [
            "Digital signatures use cryptography.",
            "Private keys are used to create signatures.",
            "Public keys are used to verify signatures.",
            "Signatures can help verify integrity.",
            "A signature does not automatically prove that a person is trustworthy."
        ],
        related: ["cryptography", "hashing", "encryption"]
    },


    "artificial-intelligence": {
        title: "Artificial Intelligence",
        category: "Technology",
        icon: "🤖",
        keywords: [
            "ai",
            "artificial intelligence",
            "machine intelligence",
            "ai systems"
        ],
        quickAnswer:
            "Artificial intelligence is a broad field involving computer systems designed to perform tasks that can require capabilities associated with human intelligence.",
        howItWorks:
            "AI systems can use algorithms, data, statistical methods, machine learning, rules, or combinations of techniques to produce outputs or decisions.",
        whyItMatters:
            "AI is used in areas such as search, recommendations, language processing, computer vision, automation, and scientific research.",
        example:
            "An AI system can analyze text and produce a response based on patterns learned or programmed into the system.",
        deepDive:
            "AI includes many approaches. Modern machine learning systems often learn patterns from data rather than relying entirely on manually written rules.",
        keyPoints: [
            "AI is a broad field.",
            "AI systems can use different techniques.",
            "Machine learning is one area of AI.",
            "AI can process large amounts of data.",
            "AI systems have limitations and can produce incorrect results."
        ],
        related: ["machine-learning", "gpu", "programming"]
    },


    "machine-learning": {
        title: "Machine Learning",
        category: "Technology",
        icon: "🧠",
        keywords: [
            "machine learning",
            "ml",
            "training",
            "models",
            "machine learning models"
        ],
        quickAnswer:
            "Machine learning is a field where computer systems learn patterns from data to make predictions, classifications, or other outputs.",
        howItWorks:
            "A machine-learning process typically uses data to train a model. The trained model can then process new inputs and produce predictions or other results.",
        whyItMatters:
            "Machine learning can automate pattern recognition and prediction across many domains.",
        example:
            "A model can be trained on examples of images and then used to classify new images.",
        deepDive:
            "Machine learning includes supervised learning, unsupervised learning, reinforcement learning, and many specialized approaches.",
        keyPoints: [
            "Machine learning uses data.",
            "Models learn patterns from training information.",
            "Training and inference are different stages.",
            "Machine learning can perform classification and prediction.",
            "Model quality depends on data, methods, and evaluation."
        ],
        related: ["artificial-intelligence", "gpu", "python"]
    },


    "internet-of-things": {
        title: "Internet of Things — IoT",
        category: "Technology",
        icon: "📡",
        keywords: [
            "iot",
            "internet of things",
            "smart devices",
            "connected devices"
        ],
        quickAnswer:
            "The Internet of Things refers to physical devices that contain computing and networking capabilities and can communicate with other systems.",
        howItWorks:
            "IoT devices can collect information through sensors, communicate over networks, process data, and sometimes control physical systems.",
        whyItMatters:
            "Connected devices are used in homes, businesses, manufacturing, transportation, healthcare, agriculture, and many other environments.",
        example:
            "A smart thermostat can measure temperature and communicate with a networked service.",
        deepDive:
            "IoT systems can include sensors, embedded computers, wireless networks, cloud services, databases, APIs, and management platforms.",
        keyPoints: [
            "IoT connects physical devices to networks.",
            "Sensors can collect information.",
            "IoT devices can communicate with cloud services.",
            "Security is important for connected devices.",
            "IoT exists across many industries."
        ],
        related: ["computer-network", "cloud-computing", "cybersecurity"]
    },


    "computer-science": {
        title: "Computer Science",
        category: "Technology",
        icon: "🧠",
        keywords: [
            "computer science",
            "cs",
            "computing",
            "computer theory"
        ],
        quickAnswer:
            "Computer science is the study of computation, algorithms, information, software, systems, and related computational concepts.",
        howItWorks:
            "Computer science combines theory and practical techniques to understand and build computational systems.",
        whyItMatters:
            "Computer science provides foundational ideas behind programming, algorithms, operating systems, networks, databases, artificial intelligence, and many other areas.",
        example:
            "Studying algorithms helps explain how computers can efficiently solve computational problems.",
        deepDive:
            "Computer science includes areas such as algorithms, programming languages, computer architecture, operating systems, networking, databases, security, artificial intelligence, and theoretical computer science.",
        keyPoints: [
            "Computer science is broader than programming.",
            "Algorithms are a major area of study.",
            "Computer science includes both theory and practice.",
            "It covers many areas of computing.",
            "Programming is an important tool within computer science."
        ],
        related: ["programming", "algorithms", "computer-network"]
    },


    "computer-architecture": {
        title: "Computer Architecture",
        category: "Computers",
        icon: "🏗️",
        keywords: [
            "computer architecture",
            "cpu architecture",
            "computer organization",
            "hardware architecture"
        ],
        quickAnswer:
            "Computer architecture describes the organization and design of a computer system and how its components work together.",
        howItWorks:
            "Computer architecture covers processors, memory systems, instruction sets, storage, input/output, buses, and how these components communicate.",
        whyItMatters:
            "Understanding architecture helps explain how software instructions become operations performed by hardware.",
        example:
            "An instruction-set architecture defines the instructions that a processor can execute.",
        deepDive:
            "Computer architecture can include instruction-set architecture, microarchitecture, memory hierarchy, caching, pipelines, parallelism, and input/output systems.",
        keyPoints: [
            "Architecture describes computer organization.",
            "CPUs execute instructions.",
            "Memory hierarchy affects performance.",
            "Instruction sets define processor operations.",
            "Hardware and software interact through defined interfaces."
        ],
        related: ["cpu", "ram", "motherboard"]
    },


    "boot-process": {
        title: "Computer Boot Process",
        category: "Computers",
        icon: "🚀",
        keywords: [
            "boot process",
            "booting",
            "startup",
            "computer startup",
            "boot sequence"
        ],
        quickAnswer:
            "The boot process is the sequence of operations that occurs when a computer starts and loads its operating system.",
        howItWorks:
            "Firmware initializes hardware and identifies boot options, then a bootloader or related mechanism loads the operating system.",
        whyItMatters:
            "The boot process connects the initial hardware startup process to the running operating system.",
        example:
            "When a computer starts, firmware can locate a bootloader on a storage device and begin loading the operating system.",
        deepDive:
            "Modern systems can use UEFI firmware and boot managers. The exact process varies by hardware and operating system.",
        keyPoints: [
            "Booting begins when a computer starts.",
            "Firmware initializes hardware.",
            "A bootloader can load the operating system.",
            "The operating system takes control after startup.",
            "Boot problems can have hardware or software causes."
        ],
        related: ["bios-uefi", "operating-system", "file-system"]
    },


    "computer-memory": {
        title: "Computer Memory",
        category: "Computers",
        icon: "💾",
        keywords: [
            "computer memory",
            "memory",
            "ram",
            "cache",
            "rom"
        ],
        quickAnswer:
            "Computer memory refers to technologies used to store information for immediate or longer-term use by computing systems.",
        howItWorks:
            "Different types of memory provide different combinations of speed, capacity, persistence, and cost.",
        whyItMatters:
            "Computers rely on multiple levels of memory and storage to efficiently process and retain information.",
        example:
            "A CPU may use cache for very fast access while the computer uses RAM for active programs and an SSD for persistent storage.",
        deepDive:
            "Computer systems use a memory hierarchy that can include CPU registers, caches, RAM, and persistent storage.",
        keyPoints: [
            "Different memory technologies have different properties.",
            "RAM is volatile.",
            "Storage is generally persistent.",
            "CPU cache is very fast.",
            "Computer systems use a memory hierarchy."
        ],
        related: ["ram", "cpu", "ssd"]
    },


    "file-extension": {
        title: "File Extension",
        category: "Software",
        icon: "📄",
        keywords: [
            "file extension",
            "file type",
            "extension",
            ".exe",
            ".txt",
            ".html"
        ],
        quickAnswer:
            "A file extension is a suffix in a filename that commonly indicates the file's format or intended type.",
        howItWorks:
            "Operating systems and applications can use file extensions as one piece of information when determining which program can open or handle a file.",
        whyItMatters:
            "File extensions help users and software identify different types of files.",
        example:
            "A filename ending in .html commonly indicates an HTML document.",
        deepDive:
            "An extension is not a guarantee of a file's actual contents. Software should not rely on an extension alone for security-sensitive decisions.",
        keyPoints: [
            "Extensions often appear after a filename.",
            "Extensions can indicate file types.",
            "Different applications use different formats.",
            "An extension does not guarantee file contents.",
            "Changing an extension does not necessarily convert a file."
        ],
        related: ["file-system", "software", "applications"]
    },


    "open-source": {
        title: "Open Source Software",
        category: "Software",
        icon: "🔓",
        keywords: [
            "open source",
            "open-source software",
            "source code",
            "free software"
        ],
        quickAnswer:
            "Open-source software is software whose source code is made available under license terms that allow specified forms of use, study, modification, and redistribution.",
        howItWorks:
            "Developers can inspect and, depending on the license, modify and redistribute the source code. Projects may be maintained by individuals, organizations, or communities.",
        whyItMatters:
            "Open-source software supports collaboration, transparency, reuse, and development of shared software infrastructure.",
        example:
            "Many programming tools, operating systems, libraries, and web technologies are open source.",
        deepDive:
            "Open-source licenses define the rights and obligations associated with using, modifying, and distributing the software.",
        keyPoints: [
            "Open source refers to source-code availability under specific licenses.",
            "Licenses determine what users can do.",
            "Open-source projects can have many contributors.",
            "Open source is not automatically the same as public domain.",
            "Some open-source software is also commercially supported."
        ],
        related: ["software", "linux", "programming"]
    },


    "api": {
        title: "API — Application Programming Interface",
        category: "Programming",
        icon: "🔌",
        keywords: [
            "api",
            "application programming interface",
            "software interface",
            "web api"
        ],
        quickAnswer:
            "An API is a defined interface that allows software systems or components to communicate and interact.",
        howItWorks:
            "An API specifies how software can request data or functionality from another system, often through defined operations, inputs, and outputs.",
        whyItMatters:
            "APIs allow different software systems to work together without requiring each system to know the other's internal implementation.",
        example:
            "A weather application can use an API to request weather data from another service.",
        deepDive:
            "APIs can be local programming interfaces, web APIs, operating-system APIs, library interfaces, or other forms of software contracts.",
        keyPoints: [
            "API means Application Programming Interface.",
            "APIs define ways for software to interact.",
            "Web APIs commonly use HTTP.",
            "APIs can return structured data.",
            "An API hides implementation details behind an interface."
        ],
        related: ["web-development", "http-https", "programming"]
    },


    "json": {
        title: "JSON",
        category: "Programming",
        icon: "📦",
        keywords: [
            "json",
            "javascript object notation",
            "data format",
            "json data"
        ],
        quickAnswer:
            "JSON is a text-based data format commonly used to represent structured information.",
        howItWorks:
            "JSON represents objects, arrays, strings, numbers, booleans, and null values using a standardized syntax.",
        whyItMatters:
            "JSON is widely used for exchanging structured data between applications and services.",
        example:
            "A web API can return a JSON object containing information about a user or product.",
        deepDive:
            "JSON is language-independent even though its syntax originated from JavaScript notation. Many programming languages provide JSON parsing and serialization tools.",
        keyPoints: [
            "JSON stands for JavaScript Object Notation.",
            "JSON is text-based.",
            "JSON can represent structured data.",
            "APIs commonly use JSON.",
            "Many programming languages can parse JSON."
        ],
        related: ["api", "javascript", "database"]
    },


    "debugging": {
        title: "Debugging",
        category: "Programming",
        icon: "🐛",
        keywords: [
            "debugging",
            "debug",
            "bugs",
            "software bugs",
            "troubleshooting code"
        ],
        quickAnswer:
            "Debugging is the process of finding, understanding, and fixing problems in software.",
        howItWorks:
            "Developers reproduce a problem, inspect program behavior, identify its cause, make changes, and test the result.",
        whyItMatters:
            "Software can contain errors, and debugging helps developers make programs behave as intended.",
        example:
            "A developer can use a debugger to pause a program and inspect variable values while investigating a problem.",
        deepDive:
            "Debugging techniques include logging, breakpoints, tracing, testing, code inspection, reproduction of failures, and controlled experimentation.",
        keyPoints: [
            "A bug is an error or unexpected behavior.",
            "Debugging investigates problems.",
            "Reproducing a problem helps identify its cause.",
            "Logs can provide useful evidence.",
            "Testing confirms whether a fix works."
        ],
        related: ["programming", "software-development", "python"]
    },


    "operating-system-kernel": {
        title: "Operating System Kernel",
        category: "Operating Systems",
        icon: "⚙️",
        keywords: [
            "kernel",
            "operating system kernel",
            "os kernel",
            "kernel space"
        ],
        quickAnswer:
            "The kernel is the central component of an operating system that manages hardware resources and provides core services.",
        howItWorks:
            "The kernel manages CPU scheduling, memory, hardware access, system calls, and other fundamental operations.",
        whyItMatters:
            "Applications depend on operating-system services that are provided or coordinated by the kernel.",
        example:
            "An application can request that the operating system read a file, and the kernel coordinates the underlying hardware operations.",
        deepDive:
            "Kernels can use different architectures and designs. Common concepts include processes, virtual memory, device drivers, system calls, and scheduling.",
        keyPoints: [
            "The kernel is central to an operating system.",
            "It manages hardware resources.",
            "Applications interact with kernel services.",
            "System calls provide controlled access to operating-system functionality.",
            "Different operating systems use different kernel designs."
        ],
        related: ["operating-system", "linux", "device-drivers"]
    },


    "process": {
        title: "Computer Process",
        category: "Operating Systems",
        icon: "⚙️",
        keywords: [
            "process",
            "computer process",
            "running program",
            "process management"
        ],
        quickAnswer:
            "A process is a running instance of a program managed by an operating system.",
        howItWorks:
            "The operating system gives a process resources such as memory and CPU time and manages its execution state.",
        whyItMatters:
            "Processes allow an operating system to run multiple programs and tasks while managing their resources.",
        example:
            "Opening a web browser causes the operating system to create one or more processes for the browser.",
        deepDive:
            "Processes can contain one or more threads and have resources such as virtual memory, handles, and security credentials.",
        keyPoints: [
            "A process is a running program instance.",
            "Processes use system resources.",
            "The operating system manages processes.",
            "Processes can contain threads.",
            "Processes are isolated to varying degrees depending on the operating system."
        ],
        related: ["operating-system-kernel", "ram", "cpu"]
    },


    "thread": {
        title: "Computer Thread",
        category: "Operating Systems",
        icon: "🧵",
        keywords: [
            "thread",
            "software thread",
            "cpu thread",
            "multithreading"
        ],
        quickAnswer:
            "A thread is a unit of execution within a process.",
        howItWorks:
            "Threads within the same process generally share the process's memory and resources while having their own execution state.",
        whyItMatters:
            "Threads allow programs to perform multiple tasks concurrently and can help software take advantage of multiple CPU cores.",
        example:
            "A program may use separate threads for handling user interaction and processing background work.",
        deepDive:
            "Multithreading introduces opportunities for parallelism but also requires careful synchronization when threads access shared data.",
        keyPoints: [
            "Threads execute within processes.",
            "Threads usually share process memory.",
            "Multiple threads can run concurrently.",
            "Multithreading can improve responsiveness.",
            "Shared data can create synchronization challenges."
        ],
        related: ["process", "cpu", "operating-system"]
    },


    "virtual-memory": {
        title: "Virtual Memory",
        category: "Operating Systems",
        icon: "🧠",
        keywords: [
            "virtual memory",
            "memory paging",
            "swap",
            "page file"
        ],
        quickAnswer:
            "Virtual memory is an operating-system technique that provides processes with an address space and can use storage as part of memory management.",
        howItWorks:
            "The operating system and hardware memory-management mechanisms map virtual addresses to physical memory and can move less-active pages to storage when appropriate.",
        whyItMatters:
            "Virtual memory provides process isolation and flexible memory management and can allow systems to handle workloads that exceed available physical RAM, although storage is much slower than RAM.",
        example:
            "An operating system can use a page file or swap area as part of its virtual-memory system.",
        deepDive:
            "Virtual memory commonly uses pages and page tables. Hardware memory-management units translate virtual addresses into physical addresses.",
        keyPoints: [
            "Virtual memory provides virtual address spaces.",
            "Processes can have isolated address spaces.",
            "Pages can be mapped to physical memory.",
            "Storage can be used for paging.",
            "Virtual memory is not a replacement for sufficient RAM."
        ],
        related: ["ram", "operating-system-kernel", "process"]
    },


    "computer-security-basics": {
        title: "Computer Security Basics",
        category: "Cybersecurity",
        icon: "🔐",
        keywords: [
            "computer security",
            "security basics",
            "computer protection",
            "security fundamentals"
        ],
        quickAnswer:
            "Computer security basics involve protecting systems, accounts, networks, applications, and data from unauthorized or harmful activity.",
        howItWorks:
            "Security uses multiple layers including authentication, authorization, updates, backups, encryption, secure configuration, monitoring, and user awareness.",
        whyItMatters:
            "No single security feature protects every part of a computer system, so layered defenses are important.",
        example:
            "Keeping software updated, using strong authentication, and maintaining backups are basic security practices.",
        deepDive:
            "Security programs often consider confidentiality, integrity, and availability, commonly called the CIA triad.",
        keyPoints: [
            "Security uses multiple layers.",
            "Updates help address known vulnerabilities.",
            "Authentication protects accounts.",
            "Backups help recover from some incidents.",
            "Security requires ongoing attention."
        ],
        related: ["cybersecurity", "authentication", "malware"]
    },


    "backup": {
        title: "Backup",
        category: "Technology",
        icon: "💾",
        keywords: [
            "backup",
            "backups",
            "data backup",
            "file backup",
            "backup strategy"
        ],
        quickAnswer:
            "A backup is a separate copy of data maintained so it can be restored if the original data is lost or damaged.",
        howItWorks:
            "Backup systems copy selected data to another storage location or service according to a defined schedule or process.",
        whyItMatters:
            "Backups can help recover from accidental deletion, hardware failure, software problems, and some security incidents.",
        example:
            "A person can maintain copies of important files on an external drive and another storage location.",
        deepDive:
            "Backup strategies can use full, incremental, or differential backups and can follow practices such as keeping multiple copies in different locations.",
        keyPoints: [
            "Backups are copies of data.",
            "Backups should be separate from the original.",
            "Multiple backup locations can improve resilience.",
            "Backups should be tested by restoring data.",
            "A backup strategy should consider what data needs protection."
        ],
        related: ["file-system", "cybersecurity", "cloud-computing"]
    },


    "data-center": {
        title: "Data Center",
        category: "Technology",
        icon: "🏢",
        keywords: [
            "data center",
            "datacenter",
            "server facility",
            "data centre"
        ],
        quickAnswer:
            "A data center is a facility designed to house computing, networking, storage, power, cooling, and other infrastructure.",
        howItWorks:
            "Data centers provide controlled environments and infrastructure for operating servers and other technology systems.",
        whyItMatters:
            "Data centers support websites, cloud services, enterprise systems, databases, communications, and many other digital services.",
        example:
            "A cloud provider can operate large data centers containing many servers that customers access remotely.",
        deepDive:
            "Data centers require power systems, cooling, networking, physical security, monitoring, redundancy, and operational procedures.",
        keyPoints: [
            "Data centers house computing infrastructure.",
            "They require reliable power.",
            "Cooling is essential.",
            "Networking connects systems.",
            "Redundancy can improve availability."
        ],
        related: ["cloud-computing", "computer-server", "computer-cooling"]
    },


    "artificial-neural-network": {
        title: "Artificial Neural Network",
        category: "Technology",
        icon: "🧠",
        keywords: [
            "neural network",
            "artificial neural network",
            "ann",
            "deep learning"
        ],
        quickAnswer:
            "An artificial neural network is a computational model made of interconnected processing units that can learn patterns from data.",
        howItWorks:
            "A neural network processes inputs through layers of interconnected units and adjusts parameters during training to reduce errors according to a chosen objective.",
        whyItMatters:
            "Neural networks are used in areas such as image recognition, language processing, prediction, and other machine-learning tasks.",
        example:
            "A neural network can be trained to classify images into different categories.",
        deepDive:
            "Modern neural networks can contain many layers and parameters. Deep learning refers broadly to machine learning using multi-layer neural networks.",
        keyPoints: [
            "Neural networks can learn patterns from data.",
            "Networks contain layers and parameters.",
            "Training adjusts model parameters.",
            "Deep learning commonly uses many layers.",
            "Neural networks are one family of machine-learning models."
        ],
        related: ["machine-learning", "artificial-intelligence", "gpu"]
    },


    "computer-file": {
        title: "Computer File",
        category: "Software",
        icon: "📄",
        keywords: [
            "file",
            "computer file",
            "data file",
            "digital file"
        ],
        quickAnswer:
            "A computer file is a named collection of data stored by a computer system.",
        howItWorks:
            "The operating system and file system keep track of files and their metadata, locations, permissions, and other properties.",
        whyItMatters:
            "Files provide a basic way for users and software to store information persistently.",
        example:
            "A document, image, program, or configuration file can all be stored as files.",
        deepDive:
            "Files can contain many different formats of data. The operating system uses file-system structures and metadata to manage them.",
        keyPoints: [
            "Files store digital information.",
            "Files can have different formats.",
            "File systems organize files.",
            "Files can have permissions and metadata.",
            "Applications interpret file contents according to their formats."
        ],
        related: ["file-system", "file-extension", "applications"]
    },


    "computer-network-protocol": {
        title: "Network Protocol",
        category: "Internet & Networking",
        icon: "📡",
        keywords: [
            "network protocol",
            "protocol",
            "communication protocol",
            "networking protocols"
        ],
        quickAnswer:
            "A network protocol is a defined set of rules that allows devices and software to communicate.",
        howItWorks:
            "Protocols specify how information is formatted, transmitted, received, interpreted, and sometimes how errors are handled.",
        whyItMatters:
            "Shared protocols allow different devices and systems to communicate even when they are made by different organizations.",
        example:
            "HTTP defines rules used by web clients and servers to exchange web information.",
        deepDive:
            "Networking uses multiple protocol layers. Examples include Ethernet, IP, TCP, UDP, DNS, and HTTP.",
        keyPoints: [
            "Protocols define communication rules.",
            "Different protocols perform different functions.",
            "Networking commonly uses multiple protocol layers.",
            "Protocols allow interoperability.",
            "Internet communication relies on many standardized protocols."
        ],
        related: ["internet", "http-https", "ip-address"]
    },


    "tcp-ip": {
        title: "TCP/IP",
        category: "Internet & Networking",
        icon: "🌐",
        keywords: [
            "tcp ip",
            "tcp/ip",
            "transmission control protocol",
            "internet protocol suite"
        ],
        quickAnswer:
            "TCP/IP refers to the family of networking protocols used as the foundation of Internet communication.",
        howItWorks:
            "Different protocols handle different responsibilities, including addressing, routing, reliable transport, and application communication.",
        whyItMatters:
            "TCP/IP allows diverse networks and devices to communicate using standardized protocols.",
        example:
            "A web connection can use IP for addressing and routing, TCP for transport, and HTTP for application-level communication.",
        deepDive:
            "The Internet protocol suite includes IP, TCP, UDP, DNS, HTTP, and many other protocols. The exact stack depends on the application.",
        keyPoints: [
            "TCP/IP is a protocol suite.",
            "IP handles addressing and routing.",
            "TCP provides reliable ordered transport.",
            "UDP provides connectionless transport.",
            "Applications use higher-level protocols."
        ],
        related: ["ip-address", "computer-network-protocol", "http-https"]
    },


    "wifi": {
        title: "Wi-Fi",
        category: "Internet & Networking",
        icon: "📶",
        keywords: [
            "wifi",
            "wi-fi",
            "wireless network",
            "wireless internet"
        ],
        quickAnswer:
            "Wi-Fi is a family of wireless networking technologies used to connect devices to local networks.",
        howItWorks:
            "Wi-Fi uses radio communication between compatible devices and wireless access points or routers.",
        whyItMatters:
            "Wi-Fi allows devices to connect to networks without a physical Ethernet cable.",
        example:
            "A phone can connect to a home network through a Wi-Fi router.",
        deepDive:
            "Wi-Fi standards operate over specified radio bands and provide different capabilities for speed, range, security, and network efficiency.",
        keyPoints: [
            "Wi-Fi is wireless networking technology.",
            "Wi-Fi uses radio communication.",
            "Wireless access points provide network connectivity.",
            "Wi-Fi networks should use appropriate security.",
            "Wi-Fi and the Internet are not the same thing."
        ],
        related: ["router", "computer-network", "ethernet"]
    },


    "computer-security-update": {
        title: "Software Updates",
        category: "Cybersecurity",
        icon: "🔄",
        keywords: [
            "software updates",
            "updates",
            "security updates",
            "patches",
            "software patch"
        ],
        quickAnswer:
            "Software updates modify software to add features, fix bugs, improve compatibility, or address security vulnerabilities.",
        howItWorks:
            "Developers release updated versions or patches that replace or modify components of existing software.",
        whyItMatters:
            "Security updates can address known vulnerabilities that could otherwise be exploited.",
        example:
            "An operating system may release a security update that fixes a vulnerability in a system component.",
        deepDive:
            "Patch management is an important part of system administration and security operations. Organizations may test updates before widespread deployment.",
        keyPoints: [
            "Updates can fix security vulnerabilities.",
            "Updates can also add features and fix bugs.",
            "Delaying critical security patches can increase exposure.",
            "Organizations may test updates before deployment.",
            "Only trusted update sources should be used."
        ],
        related: ["cybersecurity", "operating-system", "malware"]
    },


    "security-vulnerability": {
        title: "Security Vulnerability",
        category: "Cybersecurity",
        icon: "⚠️",
        keywords: [
            "vulnerability",
            "security vulnerability",
            "software vulnerability",
            "security flaw",
            "weakness"
        ],
        quickAnswer:
            "A security vulnerability is a weakness in a system that could potentially be used to violate security requirements.",
        howItWorks:
            "Vulnerabilities can exist in software, hardware, configurations, processes, or human practices and may create opportunities for unauthorized actions.",
        whyItMatters:
            "Unaddressed vulnerabilities can increase security risk and may be exploited by attackers.",
        example:
            "A software bug that allows unauthorized access to protected information can be a security vulnerability.",
        deepDive:
            "Security teams identify, assess, prioritize, remediate, and monitor vulnerabilities using vulnerability-management processes.",
        keyPoints: [
            "Vulnerabilities are weaknesses.",
            "They can exist in software or configurations.",
            "Not every vulnerability has the same risk.",
            "Patching can remediate some vulnerabilities.",
            "Vulnerability management is ongoing."
        ],
        related: ["cybersecurity", "computer-security-update", "firewall"]
    },


    "zero-day": {
        title: "Zero-Day Vulnerability",
        category: "Cybersecurity",
        icon: "⏱️",
        keywords: [
            "zero day",
            "zero-day",
            "zero day vulnerability",
            "zero-day exploit"
        ],
        quickAnswer:
            "A zero-day generally refers to a vulnerability or related exploit that is unknown to the party responsible for fixing or defending against it, or for which no effective patch is yet available, depending on context.",
        howItWorks:
            "A zero-day situation can create a security gap before defenders have developed and deployed an effective fix.",
        whyItMatters:
            "Security teams have fewer defensive options when a vulnerability is newly discovered and lacks an available patch or established mitigation.",
        example:
            "A newly discovered software vulnerability with no available vendor patch may be described as a zero-day vulnerability.",
        deepDive:
            "The term can refer to the vulnerability, exploit, or broader period before a fix is available. Context matters when interpreting the term.",
        keyPoints: [
            "Zero-day terminology relates to newly discovered or unpatched vulnerabilities.",
            "Definitions can vary depending on context.",
            "Defenders may use mitigations before a patch exists.",
            "Vendors can release patches after vulnerabilities are reported.",
            "Security monitoring remains important."
        ],
        related: ["security-vulnerability", "cybersecurity", "computer-security-update"]
    },


    "data-privacy": {
        title: "Data Privacy",
        category: "Cybersecurity",
        icon: "🔒",
        keywords: [
            "privacy",
            "data privacy",
            "personal data",
            "privacy protection",
            "data protection"
        ],
        quickAnswer:
            "Data privacy concerns how information about people is collected, used, shared, stored, and protected.",
        howItWorks:
            "Organizations can use policies, technical controls, access restrictions, data minimization, retention practices, and other measures to manage personal information.",
        whyItMatters:
            "Personal information can affect people's safety, finances, identity, and autonomy, so appropriate handling is important.",
        example:
            "A website may limit access to personal information to employees who need it for a specific purpose.",
        deepDive:
            "Privacy requirements vary by jurisdiction and context. Technical security and privacy are related but not identical concepts.",
        keyPoints: [
            "Privacy concerns the handling of information about people.",
            "Security helps protect data but is not identical to privacy.",
            "Data minimization can reduce unnecessary collection.",
            "Access controls can restrict who can view information.",
            "Retention policies determine how long information is kept."
        ],
        related: ["cybersecurity", "encryption", "database"]
    },


    "computer-ethics": {
        title: "Computer Ethics",
        category: "Technology",
        icon: "⚖️",
        keywords: [
            "computer ethics",
            "technology ethics",
            "digital ethics",
            "ethical computing"
        ],
        quickAnswer:
            "Computer ethics concerns responsible principles for designing, using, and managing computer systems and technology.",
        howItWorks:
            "Ethical decisions in computing can involve privacy, security, fairness, access, transparency, intellectual property, safety, and the effects of technology on people.",
        whyItMatters:
            "Technology can affect individuals and society, so technical decisions can have consequences beyond whether a system simply works.",
        example:
            "A developer might consider whether collecting certain user information is necessary and appropriate before adding the feature.",
        deepDive:
            "Computing ethics can involve competing values and requires considering stakeholders, consequences, rights, responsibilities, and applicable rules.",
        keyPoints: [
            "Technology decisions can affect people.",
            "Privacy is an ethical consideration.",
            "Security and safety can create responsibilities.",
            "Developers should consider consequences of system design.",
            "Ethical questions can involve competing values."
        ],
        related: ["data-privacy", "cybersecurity", "computer-science"]
    },


    "binary": {
        title: "Binary",
        category: "Computers",
        icon: "0️⃣",
        keywords: [
            "binary",
            "binary numbers",
            "base 2",
            "bits",
            "computer binary"
        ],
        quickAnswer:
            "Binary is a number system that uses only two digits: 0 and 1.",
        howItWorks:
            "Each position in a binary number represents a power of two. Computers use binary representations because digital hardware can represent two distinct states.",
        whyItMatters:
            "Binary is fundamental to how digital computers represent and process information.",
        example:
            "The decimal number 5 can be represented in binary as 101.",
        deepDive:
            "Binary can represent numbers, text, images, instructions, and many other forms of information when combined with defined encoding systems.",
        keyPoints: [
            "Binary uses 0 and 1.",
            "Binary is base 2.",
            "Each position represents a power of two.",
            "Digital systems commonly use binary states.",
            "Binary representation can encode many kinds of information."
        ],
        related: ["bit", "byte", "computer-architecture"]
    },


    "bit": {
        title: "Bit",
        category: "Computers",
        icon: "1️⃣",
        keywords: [
            "bit",
            "binary digit",
            "binary bit",
            "bits"
        ],
        quickAnswer:
            "A bit is the smallest basic unit of digital information and can represent one of two values, commonly written as 0 or 1.",
        howItWorks:
            "Digital systems use physical or logical states to represent bit values.",
        whyItMatters:
            "Bits are the foundation of digital data representation and computing.",
        example:
            "Eight bits make one byte.",
        deepDive:
            "Groups of bits can represent larger numbers and encoded information. Network speeds are often measured in bits per second.",
        keyPoints: [
            "Bit means binary digit.",
            "A bit has two possible values.",
            "Bits can be grouped together.",
            "Eight bits make a byte.",
            "Network speeds are commonly measured in bits per second."
        ],
        related: ["binary", "byte", "computer-memory"]
    },


    "byte": {
        title: "Byte",
        category: "Computers",
        icon: "📦",
        keywords: [
            "byte",
            "bytes",
            "8 bits",
            "digital storage unit"
        ],
        quickAnswer:
            "A byte is a group of eight bits and is a common basic unit for representing data.",
        howItWorks:
            "Eight binary digits can represent 256 different combinations, from 00000000 through 11111111.",
        whyItMatters:
            "Bytes are widely used to measure file sizes, memory capacity, and storage capacity.",
        example:
            "A text encoding can use one or more bytes to represent a character.",
        deepDive:
            "Larger quantities are commonly expressed using units such as kilobytes, megabytes, gigabytes, and terabytes, although decimal and binary conventions differ.",
        keyPoints: [
            "One byte contains eight bits.",
            "Bytes are used to represent data.",
            "File sizes are often measured in bytes.",
            "Memory capacity is commonly measured in bytes.",
            "Decimal and binary storage units can differ."
        ],
        related: ["bit", "binary", "ram"]
    },


    "computer-input-output": {
        title: "Input & Output",
        category: "Computers",
        icon: "↔️",
        keywords: [
            "input output",
            "i/o",
            "io",
            "computer input",
            "computer output"
        ],
        quickAnswer:
            "Input and output, often called I/O, describe how a computer receives information and produces or transfers information.",
        howItWorks:
            "Input devices and systems provide information to a computer, while output devices and systems present or transmit results.",
        whyItMatters:
            "I/O allows computers to interact with users, storage, networks, sensors, and other systems.",
        example:
            "A keyboard provides input while a monitor provides output.",
        deepDive:
            "I/O can involve physical devices, storage, network communication, and software interfaces.",
        keyPoints: [
            "Input provides information to a system.",
            "Output provides information from a system.",
            "I/O includes more than keyboards and monitors.",
            "Storage and networking can involve I/O.",
            "Operating systems manage many I/O operations."
        ],
        related: ["computer-ports", "operating-system", "computer-network"]
    },


    "computer-peripherals": {
        title: "Computer Peripherals",
        category: "Computers",
        icon: "🖱️",
        keywords: [
            "peripherals",
            "computer peripherals",
            "keyboard",
            "mouse",
            "printer",
            "external devices"
        ],
        quickAnswer:
            "Computer peripherals are devices connected to a computer that provide input, output, storage, communication, or other functionality.",
        howItWorks:
            "Peripherals communicate with a computer through interfaces such as USB, Bluetooth, Ethernet, or other connections.",
        whyItMatters:
            "Peripherals expand what a computer can do and how users interact with it.",
        example:
            "A keyboard, mouse, webcam, printer, or external storage device can function as a peripheral.",
        deepDive:
            "Peripheral devices can use device drivers and standardized interfaces so operating systems can communicate with them.",
        keyPoints: [
            "Peripherals extend computer functionality.",
            "They can provide input or output.",
            "Some peripherals provide storage.",
            "Peripherals use different connection technologies.",
            "Drivers may be required for certain devices."
        ],
        related: ["computer-ports", "device-drivers", "computer-input-output"]
    },


    "computer-performance": {
        title: "Computer Performance",
        category: "Computers",
        icon: "📈",
        keywords: [
            "computer performance",
            "pc performance",
            "system performance",
            "performance"
        ],
        quickAnswer:
            "Computer performance describes how quickly and efficiently a computer system completes tasks.",
        howItWorks:
            "Performance depends on factors including processor capabilities, memory, storage, software, workload, thermals, and system configuration.",
        whyItMatters:
            "Understanding performance helps explain why different systems behave differently under different workloads.",
        example:
            "A system with a faster SSD may load applications more quickly, while a stronger GPU can improve graphics performance.",
        deepDive:
            "Performance should be evaluated using workload-appropriate measurements rather than relying on a single specification such as clock speed.",
        keyPoints: [
            "Performance depends on many components.",
            "Different workloads stress different hardware.",
            "Benchmarks measure specific aspects of performance.",
            "Thermal limits can affect performance.",
            "Software optimization can also matter."
        ],
        related: ["cpu", "gpu", "ram"]
    },


    "computer-specifications": {
        title: "Computer Specifications",
        category: "Computers",
        icon: "📋",
        keywords: [
            "computer specs",
            "specifications",
            "pc specs",
            "hardware specifications"
        ],
        quickAnswer:
            "Computer specifications describe the hardware and capabilities of a computer system.",
        howItWorks:
            "Specifications can include processor model, memory capacity, storage, graphics hardware, display characteristics, ports, networking, and other features.",
        whyItMatters:
            "Specifications help people understand what a computer is equipped to do.",
        example:
            "A PC specification sheet might list its CPU, RAM, SSD capacity, GPU, and operating system.",
        deepDive:
            "Specifications should be interpreted in context because component names and numbers do not always directly translate into real-world performance.",
        keyPoints: [
            "Specifications describe system components.",
            "CPU model is one specification.",
            "RAM capacity is another specification.",
            "Storage capacity describes available persistent storage.",
            "Performance depends on the combination of components."
        ],
        related: ["computer-performance", "cpu", "ram"]
    },


    "computer-architecture-64-bit": {
        title: "32-Bit vs 64-Bit",
        category: "Computers",
        icon: "🔢",
        keywords: [
            "32 bit",
            "64 bit",
            "x64",
            "x86",
            "64-bit computing"
        ],
        quickAnswer:
            "32-bit and 64-bit describe aspects of processor architectures and software environments, including the size of certain data paths and address representations.",
        howItWorks:
            "A 64-bit architecture can generally address a much larger theoretical memory space than a 32-bit architecture, subject to the actual hardware and operating system.",
        whyItMatters:
            "Modern general-purpose computers commonly use 64-bit architectures, which support larger memory spaces and modern software environments.",
        example:
            "A modern 64-bit operating system can generally use much more memory than a traditional 32-bit operating system.",
        deepDive:
            "The terms x86 and x64 are often used in software contexts, but architecture terminology can vary and should be interpreted carefully.",
        keyPoints: [
            "64-bit systems support larger address spaces.",
            "Modern desktop systems are commonly 64-bit.",
            "Software must be compatible with the target architecture.",
            "Architecture affects more than just memory.",
            "32-bit software can sometimes run on 64-bit systems."
        ],
        related: ["cpu", "computer-architecture", "operating-system"]
    },


    "computer-cache": {
        title: "CPU Cache",
        category: "Computers",
        icon: "⚡",
        keywords: [
            "cpu cache",
            "cache memory",
            "l1 cache",
            "l2 cache",
            "l3 cache"
        ],
        quickAnswer:
            "CPU cache is very fast memory located on or close to a processor and used to store frequently needed data and instructions.",
        howItWorks:
            "The processor checks cache levels for requested information before accessing slower levels of the memory hierarchy.",
        whyItMatters:
            "Cache can reduce the time a processor spends waiting for frequently accessed information.",
        example:
            "A CPU may check its L1 cache before looking in larger but slower cache levels or main memory.",
        deepDive:
            "Modern processors can have multiple cache levels, often called L1, L2, and L3, with different sizes and performance characteristics.",
        keyPoints: [
            "Cache is faster than main memory.",
            "CPUs can have multiple cache levels.",
            "L1 is typically smaller and very fast.",
            "Larger cache levels can hold more data.",
            "Cache improves memory-access performance."
        ],
        related: ["cpu", "ram", "computer-memory"]
    },


    "computer-bus": {
        title: "Computer Bus",
        category: "Computers",
        icon: "🚌",
        keywords: [
            "computer bus",
            "bus",
            "data bus",
            "system bus",
            "computer communication"
        ],
        quickAnswer:
            "A computer bus is a communication system that transfers data, addresses, or control information between components.",
        howItWorks:
            "Hardware components communicate through defined electrical or logical interfaces that specify how information is transferred.",
        whyItMatters:
            "Buses and interconnects allow processors, memory, storage, and peripherals to communicate.",
        example:
            "A system can use high-speed interconnects to connect a CPU with memory and expansion devices.",
        deepDive:
            "Modern computers use a variety of interconnect technologies rather than relying on one universal bus.",
        keyPoints: [
            "Buses transfer information between components.",
            "Different buses serve different purposes.",
            "Modern systems use multiple interconnect technologies.",
            "Bus performance can affect system communication.",
            "Hardware interfaces define communication rules."
        ],
        related: ["motherboard", "cpu", "computer-architecture"]
    },


    "computer-firmware": {
        title: "Firmware",
        category: "Computers",
        icon: "⚙️",
        keywords: [
            "firmware",
            "device firmware",
            "hardware firmware",
            "embedded firmware"
        ],
        quickAnswer:
            "Firmware is software stored in or closely associated with hardware that provides low-level control and functionality.",
        howItWorks:
            "Firmware can initialize hardware, control devices, and provide low-level functions that higher-level software depends on.",
        whyItMatters:
            "Many hardware devices rely on firmware to operate correctly.",
        example:
            "A motherboard's UEFI firmware initializes hardware before the operating system starts.",
        deepDive:
            "Firmware can exist in computers, routers, storage devices, printers, cameras, embedded systems, and many other devices.",
        keyPoints: [
            "Firmware is software closely tied to hardware.",
            "Firmware can initialize hardware.",
            "UEFI is a type of system firmware.",
            "Many devices contain firmware.",
            "Firmware updates can add features or fix problems."
        ],
        related: ["bios-uefi", "computer-architecture", "device-drivers"]
    },


    "embedded-systems": {
        title: "Embedded Systems",
        category: "Technology",
        icon: "🔧",
        keywords: [
            "embedded system",
            "embedded systems",
            "microcontroller",
            "embedded computing"
        ],
        quickAnswer:
            "An embedded system is a computing system designed to perform specific functions as part of a larger device or product.",
        howItWorks:
            "Embedded systems often combine processors or microcontrollers, memory, firmware, sensors, communication interfaces, and application-specific software.",
        whyItMatters:
            "Embedded computing is present in vehicles, appliances, industrial systems, medical equipment, consumer electronics, and many other products.",
        example:
            "A washing machine can contain an embedded computer that controls its cycles and sensors.",
        deepDive:
            "Embedded systems are often designed around constraints involving power consumption, size, cost, timing, reliability, and hardware resources.",
        keyPoints: [
            "Embedded systems perform specific functions.",
            "They are often part of larger devices.",
            "Microcontrollers are common in embedded systems.",
            "Firmware is often important.",
            "Embedded systems can have strict resource constraints."
        ],
        related: ["computer-firmware", "internet-of-things", "computer-architecture"]
    },


    "microcontroller": {
        title: "Microcontroller",
        category: "Technology",
        icon: "🔬",
        keywords: [
            "microcontroller",
            "mcu",
            "microcontroller unit",
            "embedded controller"
        ],
        quickAnswer:
            "A microcontroller is an integrated circuit containing a processor, memory, and input/output capabilities designed for embedded control applications.",
        howItWorks:
            "A microcontroller executes firmware and interacts with sensors, switches, motors, displays, and other components through its interfaces.",
        whyItMatters:
            "Microcontrollers provide compact and efficient computing for embedded devices.",
        example:
            "A microcontroller can read a temperature sensor and control a fan based on the measured temperature.",
        deepDive:
            "Microcontrollers often prioritize low power, low cost, predictable operation, and integrated peripherals rather than the raw performance of desktop processors.",
        keyPoints: [
            "Microcontrollers combine several computing functions in one chip.",
            "They commonly run firmware.",
            "They are widely used in embedded systems.",
            "They interact with sensors and hardware.",
            "They are often designed for low-power applications."
        ],
        related: ["embedded-systems", "computer-firmware", "internet-of-things"]
    },


    "computer-display": {
        title: "Computer Display",
        category: "Computers",
        icon: "🖥️",
        keywords: [
            "monitor",
            "display",
            "computer screen",
            "lcd",
            "oled"
        ],
        quickAnswer:
            "A computer display is an output device that presents visual information generated by a computer.",
        howItWorks:
            "The computer sends image information to the display through an interface such as HDMI or DisplayPort, and the display converts that information into visible images.",
        whyItMatters:
            "Displays provide visual feedback and allow users to interact with graphical software.",
        example:
            "A monitor can display text, images, video, and graphical interfaces produced by a computer.",
        deepDive:
            "Display characteristics include resolution, refresh rate, panel technology, color reproduction, response time, and connection standards.",
        keyPoints: [
            "Displays are output devices.",
            "Resolution describes image dimensions.",
            "Refresh rate describes how often the display updates.",
            "Different display technologies have different characteristics.",
            "Graphics hardware generates the image data."
        ],
        related: ["gpu", "computer-ports", "computer-input-output"]
    },


    "computer-keyboard": {
        title: "Keyboard",
        category: "Computers",
        icon: "⌨️",
        keywords: [
            "keyboard",
            "computer keyboard",
            "input device",
            "mechanical keyboard"
        ],
        quickAnswer:
            "A keyboard is an input device that allows users to enter characters, commands, and other controls into a computer.",
        howItWorks:
            "Pressing keys produces electrical or electronic signals that are interpreted by the keyboard's controller and communicated to the computer.",
        whyItMatters:
            "Keyboards provide one of the primary ways people enter text and commands into computers.",
        example:
            "A user can type a document or enter a command using a keyboard.",
        deepDive:
            "Keyboards can use different switch mechanisms and can connect through USB, Bluetooth, or other interfaces.",
        keyPoints: [
            "Keyboards are input devices.",
            "They send information to computers.",
            "Different keyboards use different switch technologies.",
            "Keyboards can be wired or wireless.",
            "Operating systems interpret keyboard input."
        ],
        related: ["computer-peripherals", "computer-input-output", "computer-ports"]
    },


    "computer-mouse": {
        title: "Computer Mouse",
        category: "Computers",
        icon: "🖱️",
        keywords: [
            "mouse",
            "computer mouse",
            "input device",
            "pointing device"
        ],
        quickAnswer:
            "A computer mouse is a pointing input device used to control a cursor and interact with graphical interfaces.",
        howItWorks:
            "A mouse detects movement and button actions and sends that information to the computer.",
        whyItMatters:
            "Mouse input provides a convenient way to interact with graphical user interfaces.",
        example:
            "Moving a mouse moves the pointer on the screen, while clicking a button can select an item.",
        deepDive:
            "Modern mice commonly use optical sensors and can communicate through USB or wireless technologies.",
        keyPoints: [
            "A mouse is an input device.",
            "It controls a pointer or cursor.",
            "Mice detect movement.",
            "Buttons provide additional input.",
            "Mice can be wired or wireless."
        ],
        related: ["computer-peripherals", "computer-input-output", "computer-ports"]
    },


    "computer-storage": {
        title: "Computer Storage",
        category: "Computers",
        icon: "💾",
        keywords: [
            "computer storage",
            "storage",
            "data storage",
            "persistent storage"
        ],
        quickAnswer:
            "Computer storage is used to retain data for longer periods, even when a system is powered off.",
        howItWorks:
            "Storage technologies encode data in physical or electronic media and provide mechanisms for reading and writing that information.",
        whyItMatters:
            "Storage allows operating systems, applications, documents, photos, videos, and other information to persist.",
        example:
            "An SSD can store a computer's operating system and personal files even after the computer is turned off.",
        deepDive:
            "Storage technologies include SSDs, HDDs, optical media, flash drives, memory cards, and network storage.",
        keyPoints: [
            "Storage is generally persistent.",
            "SSDs use flash memory.",
            "HDDs use magnetic media.",
            "Storage capacity is commonly measured in bytes.",
            "Storage is different from RAM."
        ],
        related: ["ssd", "hdd", "file-system"]
    },


    "network-latency": {
        title: "Network Latency",
        category: "Internet & Networking",
        icon: "⏱️",
        keywords: [
            "latency",
            "network latency",
            "ping",
            "response time",
            "network delay"
        ],
        quickAnswer:
            "Network latency is the time required for data to travel between network endpoints or for a request and response to complete, depending on how it is measured.",
        howItWorks:
            "Latency is affected by physical distance, routing, congestion, processing, transmission, and other network conditions.",
        whyItMatters:
            "High latency can make interactive applications feel slow even when a connection has high bandwidth.",
        example:
            "Online games can be affected by high network latency because player actions and updates take longer to travel.",
        deepDive:
            "Latency is commonly measured using tools such as ping, though measurements vary depending on what part of the communication path is tested.",
        keyPoints: [
            "Latency is a measure of delay.",
            "Distance can affect latency.",
            "Network congestion can increase latency.",
            "Latency and bandwidth are different.",
            "Interactive applications often care strongly about latency."
        ],
        related: ["computer-network", "wifi", "internet"]
    },


    "network-bandwidth": {
        title: "Network Bandwidth",
        category: "Internet & Networking",
        icon: "📊",
        keywords: [
            "bandwidth",
            "network bandwidth",
            "internet speed",
            "data rate"
        ],
        quickAnswer:
            "Network bandwidth describes the amount of data that a connection can carry over a given period, commonly measured in bits per second.",
        howItWorks:
            "A connection has a maximum data rate determined by its technologies and configuration, while actual throughput can be lower due to network conditions and overhead.",
        whyItMatters:
            "Bandwidth affects how much data can be transferred over a network within a given time.",
        example:
            "A high-bandwidth connection can transfer a large video file faster than a lower-bandwidth connection under similar conditions.",
        deepDive:
            "Bandwidth is not the same as latency or actual throughput. Network protocols, congestion, signal quality, and other factors affect real-world transfer rates.",
        keyPoints: [
            "Bandwidth is commonly measured in bits per second.",
            "Bandwidth and latency are different.",
            "Actual throughput can be below advertised bandwidth.",
            "Network conditions affect performance.",
            "Higher bandwidth can support more data transfer."
        ],
        related: ["network-latency", "wifi", "ethernet"]
    },


    "cloud-storage": {
        title: "Cloud Storage",
        category: "Technology",
        icon: "☁️",
        keywords: [
            "cloud storage",
            "online storage",
            "remote storage",
            "file storage"
        ],
        quickAnswer:
            "Cloud storage stores data on remote infrastructure that users access through a network.",
        howItWorks:
            "A cloud storage provider stores data on its infrastructure and provides access through applications, web interfaces, APIs, or other protocols.",
        whyItMatters:
            "Cloud storage can make files accessible across devices and can provide features such as synchronization and sharing.",
        example:
            "A person can store documents in a cloud-storage service and access them from multiple devices.",
        deepDive:
            "Cloud storage systems use distributed infrastructure, redundancy, authentication, access controls, and storage-management systems.",
        keyPoints: [
            "Cloud storage uses remote infrastructure.",
            "Files can be accessed over networks.",
            "Synchronization can keep copies across devices.",
            "Access controls protect stored information.",
            "Cloud storage does not eliminate the need for backups."
        ],
        related: ["cloud-computing", "backup", "data-privacy"]
    },


    "technology": {
        title: "Technology",
        category: "Technology",
        icon: "⚡",
        keywords: [
            "technology",
            "tech",
            "computer technology",
            "information technology",
            "it"
        ],
        quickAnswer:
            "Technology refers broadly to tools, techniques, systems, and processes created and used to solve problems or accomplish goals.",
        howItWorks:
            "Technology combines knowledge, engineering, science, design, and practical methods to create useful systems and tools.",
        whyItMatters:
            "Technology affects communication, education, business, entertainment, transportation, science, and everyday life.",
        example:
            "Computers, networks, smartphones, software, and digital services are all examples of modern technology.",
        deepDive:
            "Technology is a broad category that includes computing, electronics, communications, biotechnology, manufacturing, transportation, and many other fields.",
        keyPoints: [
            "Technology is broader than computers.",
            "Technology can solve practical problems.",
            "Modern technology often combines multiple fields.",
            "Computing is one major technology field.",
            "Technology changes as new methods and systems are developed."
        ],
        related: ["computer-science", "computers", "artificial-intelligence"]
    }

};/* =====================================================
   COMPUTER GUIDE
   UPDATED SEARCH + KNOWLEDGE ENGINE
   PART 3
===================================================== */


/* =====================================================
   TOPIC CARD CREATOR
===================================================== */

function createTopicCard(id, topic) {

    if (!topic) {
        return "";
    }

    const title =
        escapeHTML(topic.title || id);

    const category =
        escapeHTML(topic.category || "Technology");

    const icon =
        topic.icon || "💻";

    const quickAnswer =
        escapeHTML(
            topic.quickAnswer ||
            "Information about this topic is available in Computer Guide."
        );

    return `
        <article
            class="topic-card"
            data-topic="${escapeHTML(id)}"
            onclick="openTopic('${escapeHTML(id)}')"
        >

            <div class="topic-card-icon">
                ${icon}
            </div>

            <div class="topic-card-content">

                <span class="topic-card-category">
                    ${category}
                </span>

                <h3>
                    ${title}
                </h3>

                <p>
                    ${quickAnswer}
                </p>

                <span class="topic-card-link">
                    Learn More →
                </span>

            </div>

        </article>
    `;
}


/* =====================================================
   LEARNING PATHS
===================================================== */

function getLearningPath(pathName) {

    if (!pathName) {
        return null;
    }

    const normalizedPath =
        normalizeSearchText(pathName);

    return Object.entries(learningPaths)
        .find(([key]) =>
            normalizeSearchText(key) === normalizedPath
        )?.[1] || null;
}


/* =====================================================
   SEARCH TEXT NORMALIZATION
===================================================== */

function normalizeSearchText(text) {

    return String(text || "")
        .toLowerCase()
        .trim()
        .replace(/[_-]+/g, " ")
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, " ");
}


/* =====================================================
   SEARCH TOKENIZER
===================================================== */

function tokenizeSearch(text) {

    return normalizeSearchText(text)
        .split(" ")
        .filter(Boolean);
}


/* =====================================================
   SEARCH RELEVANCE
===================================================== */

function calculateSearchScore(
    id,
    topic,
    query
) {

    const normalizedQuery =
        normalizeSearchText(query);

    const queryWords =
        tokenizeSearch(normalizedQuery);

    const title =
        normalizeSearchText(topic.title || "");

    const topicId =
        normalizeSearchText(id);

    const keywords =
        (topic.keywords || [])
            .map(keyword =>
                normalizeSearchText(keyword)
            );

    const category =
        normalizeSearchText(topic.category || "");

    let score = 0;


    /*
       Exact topic ID
    */

    if (topicId === normalizedQuery) {
        score += 1000;
    }


    /*
       Exact title
    */

    if (title === normalizedQuery) {
        score += 950;
    }


    /*
       Exact keyword
    */

    if (keywords.includes(normalizedQuery)) {
        score += 900;
    }


    /*
       Title contains entire search
    */

    if (
        normalizedQuery &&
        title.includes(normalizedQuery)
    ) {
        score += 700;
    }


    /*
       Topic ID contains search
    */

    if (
        normalizedQuery &&
        topicId.includes(normalizedQuery)
    ) {
        score += 600;
    }


    /*
       Keyword contains search
    */

    keywords.forEach(keyword => {

        if (
            normalizedQuery &&
            keyword.includes(normalizedQuery)
        ) {
            score += 500;
        }

    });


    /*
       Individual word matching
    */

    queryWords.forEach(word => {

        if (title.includes(word)) {
            score += 120;
        }

        if (topicId.includes(word)) {
            score += 100;
        }

        keywords.forEach(keyword => {

            if (keyword.includes(word)) {
                score += 80;
            }

        });

        if (category.includes(word)) {
            score += 40;
        }

    });


    return score;
}


/* =====================================================
   SMART SEARCH
===================================================== */

function searchTopics() {

    const input =
        document.getElementById("topicSearch");

    const results =
        document.getElementById("searchResults");

    const status =
        document.getElementById("searchStatus");


    if (!input) {
        return;
    }


    const originalQuery =
        input.value.trim();


    /*
       HOME PAGE SEARCH

       If search is being used from the Home page,
       send the visitor to Learn.
    */

    if (!results) {

        if (!originalQuery) {
            return;
        }

        window.location.href =
            `learn.html?search=${encodeURIComponent(originalQuery)}`;

        return;
    }


    /*
       LEARN PAGE SEARCH
    */

    if (!originalQuery) {

        results.innerHTML = "";

        if (status) {
            status.textContent =
                "Search for a computer or technology topic.";
        }

        return;
    }


    const query =
        normalizeSearchText(originalQuery);


    const rankedResults =
        Object.entries(topics)
            .map(([id, topic]) => {

                return {
                    id,
                    topic,
                    score:
                        calculateSearchScore(
                            id,
                            topic,
                            query
                        )
                };

            })
            .filter(result =>
                result.score > 0
            )
            .sort((a, b) =>
                b.score - a.score
            );


    /*
       NO RESULTS
    */

    if (rankedResults.length === 0) {

        results.innerHTML = `
            <div class="no-results">

                <div class="no-results-icon">
                    🔎
                </div>

                <h3>
                    No topics found
                </h3>

                <p>
                    We couldn't find a topic matching
                    "${escapeHTML(originalQuery)}".
                </p>

                <p>
                    Try searching for something like
                    <strong>CPU</strong>,
                    <strong>RAM</strong>,
                    <strong>Linux</strong>,
                    <strong>Internet</strong>,
                    or <strong>Cybersecurity</strong>.
                </p>

            </div>
        `;

        if (status) {

            status.textContent =
                "0 topics found";

        }

        return;
    }


    /*
       DISPLAY RESULT COUNT
    */

    if (status) {

        status.textContent =
            `${rankedResults.length} ${
                rankedResults.length === 1
                    ? "topic"
                    : "topics"
            } found`;

    }


    /*
       DISPLAY SEARCH RESULTS
    */

    results.innerHTML =
        rankedResults
            .map(result =>
                createTopicCard(
                    result.id,
                    result.topic
                )
            )
            .join("");

}


/* =====================================================
   OPEN TOPIC
===================================================== */

function openTopic(topicId) {

    const topic =
        topics[topicId];

    if (!topic) {
        return;
    }


    const viewer =
        document.getElementById("topicViewer");

    if (!viewer) {
        return;
    }


    const title =
        escapeHTML(
            topic.title || topicId
        );

    const category =
        escapeHTML(
            topic.category || "Technology"
        );

    const quickAnswer =
        escapeHTML(
            topic.quickAnswer || ""
        );

    const howItWorks =
        escapeHTML(
            topic.howItWorks || ""
        );

    const whyItMatters =
        escapeHTML(
            topic.whyItMatters || ""
        );

    const example =
        escapeHTML(
            topic.example || ""
        );

    const deepDive =
        escapeHTML(
            topic.deepDive || ""
        );


    const keyPoints =
        Array.isArray(topic.keyPoints)
            ? topic.keyPoints
            : [];


    const related =
        Array.isArray(topic.related)
            ? topic.related
            : [];


    viewer.innerHTML = `

        <div class="topic-viewer-inner">

            <button
                class="topic-close"
                onclick="closeTopic()"
                aria-label="Close topic"
            >
                ✕
            </button>


            <div class="topic-viewer-header">

                <div class="topic-viewer-icon">
                    ${topic.icon || "💻"}
                </div>

                <div>

                    <span class="topic-viewer-category">
                        ${category}
                    </span>

                    <h2>
                        ${title}
                    </h2>

                </div>

            </div>


            ${
                quickAnswer
                ? `
                    <section class="lesson-section">

                        <h3>
                            Quick Answer
                        </h3>

                        <p>
                            ${quickAnswer}
                        </p>

                    </section>
                `
                : ""
            }


            ${
                howItWorks
                ? `
                    <section class="lesson-section">

                        <h3>
                            How It Works
                        </h3>

                        <p>
                            ${howItWorks}
                        </p>

                    </section>
                `
                : ""
            }


            ${
                whyItMatters
                ? `
                    <section class="lesson-section">

                        <h3>
                            Why It Matters
                        </h3>

                        <p>
                            ${whyItMatters}
                        </p>

                    </section>
                `
                : ""
            }


            ${
                example
                ? `
                    <section class="lesson-section">

                        <h3>
                            Example
                        </h3>

                        <p>
                            ${example}
                        </p>

                    </section>
                `
                : ""
            }


            ${
                deepDive
                ? `
                    <section class="lesson-section">

                        <h3>
                            Deep Dive
                        </h3>

                        <p>
                            ${deepDive}
                        </p>

                    </section>
                `
                : ""
            }


            ${
                keyPoints.length
                ? `
                    <section class="lesson-section">

                        <h3>
                            Key Points
                        </h3>

                        <ul>

                            ${keyPoints
                                .map(point => `
                                    <li>
                                        ${escapeHTML(point)}
                                    </li>
                                `)
                                .join("")
                            }

                        </ul>

                    </section>
                `
                : ""
            }


            ${
                related.length
                ? `
                    <section class="lesson-section">

                        <h3>
                            Related Topics
                        </h3>

                        <div class="related-topics">

                            ${related
                                .map(relatedId => {

                                    const relatedTopic =
                                        topics[relatedId];

                                    if (!relatedTopic) {
                                        return "";
                                    }

                                    return `
                                        <button
                                            class="related-topic"
                                            onclick="openTopic('${escapeHTML(relatedId)}')"
                                        >
                                            ${
                                                relatedTopic.icon ||
                                                "💻"
                                            }

                                            <span>
                                                ${
                                                    escapeHTML(
                                                        relatedTopic.title ||
                                                        relatedId
                                                    )
                                                }
                                            }
                                        </button>
                                    `;

                                })
                                .join("")
                            }

                        </div>

                    </section>
                `
                : ""
            }

        </div>
    `;


    viewer.classList.add("active");

    viewer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    /*
       Keep the selected topic in the URL.
    */

    try {

        const url =
            new URL(window.location.href);

        url.searchParams.set(
            "topic",
            topicId
        );

        window.history.replaceState(
            {},
            "",
            url
        );

    } catch (error) {

        console.warn(
            "Could not update topic URL.",
            error
        );

    }

}


/* =====================================================
   CLOSE TOPIC
===================================================== */

function closeTopic() {

    const viewer =
        document.getElementById("topicViewer");

    if (!viewer) {
        return;
    }


    viewer.classList.remove("active");


    try {

        const url =
            new URL(window.location.href);

        url.searchParams.delete("topic");

        window.history.replaceState(
            {},
            "",
            url
        );

    } catch (error) {

        console.warn(
            "Could not clear topic URL.",
            error
        );

    }

}


/* =====================================================
   CATEGORY VIEW
===================================================== */

function showCategory(categoryName) {

    const results =
        document.getElementById("searchResults");

    const status =
        document.getElementById("searchStatus");

    if (!results) {
        return;
    }


    const normalizedCategory =
        normalizeSearchText(categoryName);


    const categoryResults =
        Object.entries(topics)
            .filter(([id, topic]) => {

                return (
                    normalizeSearchText(
                        topic.category || ""
                    ) === normalizedCategory
                );

            });


    if (categoryResults.length === 0) {

        results.innerHTML = `
            <div class="no-results">

                <div class="no-results-icon">
                    📚
                </div>

                <h3>
                    No topics found
                </h3>

                <p>
                    There are currently no topics
                    in this category.
                </p>

            </div>
        `;

        if (status) {
            status.textContent =
                "0 topics found";
        }

        return;
    }


    if (status) {

        status.textContent =
            `${categoryResults.length} ${
                categoryResults.length === 1
                    ? "topic"
                    : "topics"
            } found`;

    }


    results.innerHTML =
        categoryResults
            .map(([id, topic]) =>
                createTopicCard(id, topic)
            )
            .join("");

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   LEARN PAGE INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const searchInput =
            document.getElementById("topicSearch");

        const searchButton =
            document.getElementById("searchButton");

        const searchForm =
            document.getElementById("searchForm");


        /*
           SEARCH BUTTON
        */

        if (searchButton) {

            searchButton.addEventListener(
                "click",
                function () {

                    searchTopics();

                }
            );

        }


        /*
           SEARCH FORM
        */

        if (searchForm) {

            searchForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();

                    searchTopics();

                }
            );

        }


        /*
           ENTER KEY SEARCH
        */

        if (searchInput) {

            searchInput.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter"
                    ) {

                        event.preventDefault();

                        searchTopics();

                    }

                }
            );

        }


        /*
           HOME → LEARN SEARCH

           Example:

           learn.html?search=CPU

           The Learn page fills the search box,
           performs the search, and automatically
           opens an exact topic or keyword match.
        */

        const params =
            new URLSearchParams(
                window.location.search
            );

        const urlSearch =
            params.get("search");


        if (
            urlSearch &&
            searchInput
        ) {

            searchInput.value =
                urlSearch;

            searchTopics();


            const normalizedURLSearch =
                normalizeSearchText(
                    urlSearch
                );


            const exactMatch =
                Object.entries(topics)
                    .find(
                        ([id, topic]) => {

                            const title =
                                normalizeSearchText(
                                    topic.title
                                );

                            const topicId =
                                normalizeSearchText(
                                    id
                                );

                            const keywords =
                                (
                                    topic.keywords ||
                                    []
                                )
                                    .map(
                                        keyword =>
                                            normalizeSearchText(
                                                keyword
                                            )
                                    );


                            return (

                                title ===
                                normalizedURLSearch

                                ||

                                topicId ===
                                normalizedURLSearch

                                ||

                                keywords.includes(
                                    normalizedURLSearch
                                )

                            );

                        }
                    );


            if (exactMatch) {

                openTopic(
                    exactMatch[0]
                );

            }

        }


        /*
           OPEN TOPIC FROM URL

           Example:

           learn.html?topic=cpu
        */

        const urlTopic =
            params.get("topic");


        if (
            urlTopic &&
            topics[urlTopic]
        ) {

            openTopic(
                urlTopic
            );

        }

    }
);


/* =====================================================
   STARTUP
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const results =
            document.getElementById(
                "searchResults"
            );

        const status =
            document.getElementById(
                "searchStatus"
            );


        /*
           Show all topics initially
           when the Learn page loads.
        */

        if (
            results &&
            Object.keys(topics).length
        ) {

            results.innerHTML =
                Object.entries(topics)
                    .map(
                        ([id, topic]) =>
                            createTopicCard(
                                id,
                                topic
                            )
                    )
                    .join("");


            if (status) {

                const total =
                    Object.keys(topics).length;

                status.textContent =
                    `${total} ${
                        total === 1
                            ? "topic"
                            : "topics"
                    } available`;

            }

        }

    }
);/* =========================================================
   OPEN TOPIC
========================================================= */

function openTopic(id) {

    const topic = topics[id];

    if (!topic) {
        return;
    }


    const viewer =
        document.getElementById("topicViewer");

    const results =
        document.getElementById("searchResults");

    const status =
        document.getElementById("searchStatus");


    if (!viewer) {
        return;
    }


    if (results) {
        results.style.display = "none";
    }


    if (status) {
        status.style.display = "none";
    }


    /* =====================================================
       RELATED TOPICS
    ====================================================== */

    const relatedTopics =
        (topic.related || [])
            .map(relatedId => {

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

            })
            .join("");


    /* =====================================================
       KEY POINTS
    ====================================================== */

    const keyPoints =
        (topic.keyPoints || [])
            .map(point => {

                return `
                    <li>
                        ${point}
                    </li>
                `;

            })
            .join("");


    /* =====================================================
       LEARNING PATH
    ====================================================== */

    const learningPath =
        getLearningPath(id, topic);


    const learningSteps =
        learningPath
            .map((step, index) => {

                return `

                    <li>

                        <span class="learning-step-number">
                            ${index + 1}
                        </span>

                        <div>
                            ${step}
                        </div>

                    </li>

                `;

            })
            .join("");


    /* =====================================================
       DISPLAY TOPIC
    ====================================================== */

    viewer.innerHTML = `

        <article class="topic-page">


            <!-- =============================================
                 BACK BUTTON
            ============================================== -->

            <button
                type="button"
                class="back-to-results"
                onclick="backToResults()"
            >
                ← Back to Results
            </button>


            <!-- =============================================
                 TOPIC HEADER
            ============================================== -->

            <div class="topic-header">

                <div class="topic-icon">
                    ${topic.icon}
                </div>

                <div>

                    <h2>
                        ${topic.title}
                    </h2>

                    <p class="topic-category">

                        <strong>
                            Category:
                        </strong>

                        ${topic.category}

                    </p>

                </div>

            </div>


            <hr>


            <!-- =============================================
                 WHAT IS IT?
            ============================================== -->

            <section class="topic-section">

                <h3>
                    📖 What Is It?
                </h3>

                <p>
                    ${topic.quickAnswer}
                </p>

            </section>


            <!-- =============================================
                 HOW IT WORKS
            ============================================== -->

            <section class="topic-section">

                <h3>
                    ⚙️ How It Works
                </h3>

                <p>
                    ${topic.howItWorks}
                </p>

            </section>


            <!-- =============================================
                 WHY IT MATTERS
            ============================================== -->

            <section class="topic-section">

                <h3>
                    🎯 Why It Matters
                </h3>

                <p>
                    ${topic.whyItMatters}
                </p>

            </section>


            <!-- =============================================
                 REAL WORLD EXAMPLE
            ============================================== -->

            <section class="topic-section">

                <h3>
                    💡 Real-World Example
                </h3>

                <p>
                    ${topic.example}
                </p>

            </section>


            <!-- =============================================
                 DEEPER EXPLANATION
            ============================================== -->

            <section class="topic-section">

                <h3>
                    🔬 Deeper Explanation
                </h3>

                <p>
                    ${topic.deepDive}
                </p>

            </section>


            <!-- =============================================
                 GETTING STARTED
            ============================================== -->

            <section class="topic-section learning-path">

                <h3>
                    🚀 How to Get Started
                </h3>

                <p>
                    Follow these steps to build your knowledge
                    of <strong>${topic.title}</strong>.
                </p>


                <ol class="learning-path-list">

                    ${learningSteps}

                </ol>

            </section>


            <!-- =============================================
                 KEY POINTS
            ============================================== -->

            <section class="topic-section">

                <h3>
                    🧠 Key Things to Remember
                </h3>

                <ul class="topic-key-points">

                    ${keyPoints}

                </ul>

            </section>


            <!-- =============================================
                 RELATED TOPICS
            ============================================== -->

            <section class="topic-section">

                <h3>
                    🔗 Related Topics
                </h3>

                <p>
                    Continue exploring related computer
                    and technology topics.
                </p>

                <div class="topics">

                    ${relatedTopics}

                </div>

            </section>


        </article>

    `;


    viewer.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}


/* =========================================================
   BACK TO RESULTS
========================================================= */

function backToResults() {

    const viewer =
        document.getElementById("topicViewer");

    const results =
        document.getElementById("searchResults");

    const status =
        document.getElementById("searchStatus");


    if (results) {
        results.style.display = "";
    }


    if (status) {
        status.style.display = "";
    }


    if (viewer) {

        viewer.innerHTML = `

            <div class="lesson">

                <h2>
                    Welcome to the Computer Guide
                </h2>

                <p>
                    Search for another topic or choose
                    a topic from the results.
                </p>

            </div>

        `;

    }


    if (results) {

        results.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


/* =========================================================
   BROWSE TOPICS BY CATEGORY
========================================================= */

function showCategory(category) {

    const results =
        document.getElementById("searchResults");

    const status =
        document.getElementById("searchStatus");

    const viewer =
        document.getElementById("topicViewer");

    const input =
        document.getElementById("topicSearch");


    if (!results) {
        return;
    }


    results.style.display = "";

    if (status) {
        status.style.display = "";
    }


    if (input) {
        input.value = "";
    }


    const matches =
        Object.entries(topics).filter(
            ([id, topic]) => {

                return topic.category
                    .toLowerCase()
                    === category.toLowerCase();

            }
        );


    results.innerHTML = "";


    if (viewer) {

        viewer.innerHTML = `

            <div class="lesson">

                <h2>
                    ${category}
                </h2>

                <p>
                    Choose a topic below to begin learning.
                </p>

            </div>

        `;

    }


    if (matches.length === 0) {

        if (status) {

            status.textContent =
                "No topics found in this category.";

        }

        return;
    }


    if (status) {

        status.textContent =
            `${matches.length} topic${matches.length === 1 ? "" : "s"} in ${category}`;

    }


    matches.forEach(
        ([id, topic]) => {

            results.innerHTML +=
                createTopicCard(id, topic);

        }
    );


    results.scrollIntoView({

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
   HTML ESCAPING
========================================================= */

function escapeHTML(value) {

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


/* =========================================================
   COMPUTER GUIDE STARTUP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const status =
            document.getElementById("searchStatus");

        const searchInput =
            document.getElementById("topicSearch");


        if (status) {

            status.textContent =
                `Explore ${Object.keys(topics).length} computer and technology topics.`;

        }


        /*
           Allow visitors to search immediately without
           needing to click a separate search button.
        */

        if (searchInput) {

            searchInput.setAttribute(
                "aria-label",
                "Search Computer Guide topics"
            );

        }


        /*
           HOME → LEARN SEARCH

           Example:

           learn.html?search=CPU

           The Learn page automatically fills the search box,
           searches the database, and opens an exact topic or
           keyword match when one exists.
        */

        const params =
            new URLSearchParams(
                window.location.search
            );

        const urlSearch =
            params.get("search");


        if (urlSearch && searchInput) {

            searchInput.value = urlSearch;

            searchTopics();


            const normalizedURLSearch =
                normalizeSearchText(urlSearch);


            const exactMatch =
                Object.entries(topics).find(
                    ([id, topic]) => {

                        const title =
                            normalizeSearchText(
                                topic.title
                            );

                        const topicId =
                            normalizeSearchText(id);

                        const keywords =
                            (topic.keywords || [])
                                .map(keyword =>
                                    normalizeSearchText(
                                        keyword
                                    )
                                );

                        return (
                            title === normalizedURLSearch ||
                            topicId === normalizedURLSearch ||
                            keywords.includes(
                                normalizedURLSearch
                            )
                        );

                    }
                );


            if (exactMatch) {

                openTopic(
                    exactMatch[0]
                );

            }

        }

    }
);
