/* =====================================================
   COMPUTER GUIDE
   71-TOPIC SEARCH + KNOWLEDGE ENGINE
===================================================== */


/* =====================================================
   TOPIC DATABASE
===================================================== */

const topics = {

    /* =================================================
       COMPUTERS & HARDWARE
    ================================================= */

    cpu: {
        title: "CPU (Central Processing Unit)",
        category: "Computers",
        icon: "🧠",
        keywords: [
            "cpu",
            "processor",
            "central processing unit",
            "computer processor"
        ],
        quickAnswer:
            "The CPU is the main processor in a computer. It executes instructions and performs calculations that allow software to run.",

        howItWorks:
            "Programs give the computer instructions. The CPU fetches those instructions from memory, decodes what they mean, and executes them. Modern CPUs contain multiple processing cores so they can work on multiple tasks at the same time.",

        whyItMatters:
            "CPU performance affects how quickly many programs can perform calculations and process instructions. It is one of the most important components in a computer.",

        example:
            "When you open a program, the CPU processes the instructions needed to start and operate that program.",

        deepDive:
            "A CPU contains components such as control units, arithmetic logic units, registers, cache, and multiple cores. Modern processors can execute billions of operations per second.",

        keyPoints: [
            "CPU means Central Processing Unit.",
            "It executes program instructions.",
            "Modern CPUs often have multiple cores.",
            "CPU cache provides very fast temporary storage.",
            "CPU performance depends on architecture, cores, clock speed, and other factors."
        ],

        related: [
            "ram",
            "gpu",
            "motherboard",
            "operating-system"
        ]
    },


    ram: {
        title: "RAM (Random Access Memory)",
        category: "Computers",
        icon: "💾",
        keywords: [
            "ram",
            "memory",
            "random access memory",
            "computer memory"
        ],
        quickAnswer:
            "RAM is temporary high-speed memory used by a computer to store data and programs that are currently being used.",

        howItWorks:
            "When a program runs, the operating system loads the information it needs into RAM. The CPU can then access that information much faster than data stored on a long-term storage drive.",

        whyItMatters:
            "More RAM allows a computer to keep more active programs and data available at the same time.",

        example:
            "If you have a web browser, music player, and coding program open simultaneously, all of them can use RAM.",

        deepDive:
            "RAM is volatile memory, meaning its contents disappear when the computer loses power. Common modern RAM types include DDR4 and DDR5.",

        keyPoints: [
            "RAM is temporary memory.",
            "RAM is much faster than storage drives.",
            "RAM is used by running programs.",
            "RAM loses its contents when power is removed.",
            "More RAM can improve multitasking."
        ],

        related: [
            "cpu",
            "ssd",
            "virtual-memory"
        ]
    },


    gpu: {
        title: "GPU (Graphics Processing Unit)",
        category: "Computers",
        icon: "🎮",
        keywords: [
            "gpu",
            "graphics card",
            "graphics processing unit",
            "video card"
        ],
        quickAnswer:
            "A GPU is a processor designed to perform large numbers of calculations in parallel, especially for graphics and other highly parallel workloads.",

        howItWorks:
            "Instead of focusing primarily on a small number of complex tasks like a CPU, a GPU can perform many similar calculations simultaneously. This makes GPUs useful for graphics, simulations, machine learning, and other workloads.",

        whyItMatters:
            "GPUs are important for gaming, 3D graphics, video production, artificial intelligence, and scientific computing.",

        example:
            "When a video game renders thousands of objects on screen, the GPU performs many of the calculations needed to display those graphics.",

        deepDive:
            "A dedicated GPU normally has its own high-speed memory called VRAM. Integrated graphics instead share system resources with the CPU and main memory.",

        keyPoints: [
            "GPU means Graphics Processing Unit.",
            "GPUs are designed for parallel processing.",
            "Dedicated GPUs often have VRAM.",
            "GPUs are useful for graphics and AI workloads.",
            "Integrated graphics are built into or closely integrated with the CPU."
        ],

        related: [
            "cpu",
            "ram",
            "artificial-intelligence"
        ]
    },


    ssd: {
        title: "SSD (Solid-State Drive)",
        category: "Computers",
        icon: "💽",
        keywords: [
            "ssd",
            "solid state drive",
            "storage",
            "nvme"
        ],
        quickAnswer:
            "An SSD is a storage device that uses flash memory instead of spinning magnetic disks.",

        howItWorks:
            "SSDs store data electronically inside flash memory cells. Because they have no moving mechanical parts, they can access data very quickly.",

        whyItMatters:
            "SSDs can significantly improve boot times, application loading, file transfers, and overall system responsiveness.",

        example:
            "A computer with an SSD can often start the operating system much faster than an older computer using a mechanical hard drive.",

        deepDive:
            "Common SSD interfaces include SATA and NVMe. NVMe drives communicate through PCIe and can provide much higher throughput than SATA-based SSDs.",

        keyPoints: [
            "SSDs use flash memory.",
            "They have no spinning disks.",
            "NVMe SSDs use PCIe.",
            "SSDs are generally faster than HDDs.",
            "SSDs are used for long-term storage."
        ],

        related: [
            "hdd",
            "ram",
            "file-system"
        ]
    },


    hdd: {
        title: "HDD (Hard Disk Drive)",
        category: "Computers",
        icon: "🗄️",
        keywords: [
            "hdd",
            "hard drive",
            "hard disk drive",
            "magnetic storage"
        ],
        quickAnswer:
            "An HDD is a storage device that uses spinning magnetic disks to store data.",

        howItWorks:
            "An HDD contains spinning platters coated with magnetic material. Read/write heads move across the platters to access stored information.",

        whyItMatters:
            "HDDs remain useful for large amounts of relatively inexpensive storage.",

        example:
            "A desktop computer might use a smaller SSD for the operating system and a large HDD for storing photos, videos, and backups.",

        deepDive:
            "HDD performance depends on factors such as rotational speed, cache, and access time. Mechanical movement makes HDDs slower than most modern SSDs.",

        keyPoints: [
            "HDD means Hard Disk Drive.",
            "HDDs use magnetic platters.",
            "They contain moving mechanical parts.",
            "They are commonly used for large storage capacities.",
            "They are generally slower than SSDs."
        ],

        related: [
            "ssd",
            "file-system",
            "data-structures"
        ]
    },


    motherboard: {
        title: "Motherboard",
        category: "Computers",
        icon: "🧩",
        keywords: [
            "motherboard",
            "mainboard",
            "computer board"
        ],
        quickAnswer:
            "The motherboard is the main circuit board that connects many of the computer's components.",

        howItWorks:
            "The motherboard provides electrical connections and communication pathways between components such as the CPU, RAM, storage, expansion cards, and peripherals.",

        whyItMatters:
            "The motherboard determines which processors, memory, storage devices, and expansion hardware a computer can support.",

        example:
            "A desktop motherboard may contain CPU sockets, RAM slots, PCIe slots, storage connectors, USB ports, and power connectors.",

        deepDive:
            "Modern motherboards contain chipsets and firmware that help coordinate communication between different parts of the system.",

        keyPoints: [
            "The motherboard connects major computer components.",
            "It provides expansion slots and connectors.",
            "CPU compatibility depends on the motherboard socket.",
            "RAM compatibility depends on motherboard support.",
            "Motherboards contain firmware used during startup."
        ],

        related: [
            "cpu",
            "ram",
            "bios-uefi",
            "computer-ports"
        ]
    },


    psu: {
        title: "PSU (Power Supply Unit)",
        category: "Computers",
        icon: "⚡",
        keywords: [
            "psu",
            "power supply",
            "power supply unit",
            "computer power"
        ],
        quickAnswer:
            "The PSU converts electrical power from an outlet into the voltages required by computer components.",

        howItWorks:
            "The PSU takes AC electricity from the wall and converts it into regulated DC power that the computer's components can use.",

        whyItMatters:
            "Every major computer component depends on stable electrical power. A properly selected PSU helps provide reliable operation.",

        example:
            "A gaming desktop with a powerful GPU may require a higher-capacity PSU than a basic office computer.",

        deepDive:
            "PSUs are rated by output power and efficiency. Connectors provide power to the motherboard, CPU, storage devices, GPUs, and other hardware.",

        keyPoints: [
            "PSU means Power Supply Unit.",
            "It converts AC power to DC power.",
            "PSUs are rated in watts.",
            "Different components use different power connectors.",
            "A PSU should provide enough capacity for the system."
        ],

        related: [
            "motherboard",
            "gpu",
            "computer-cooling"
        ]
    },


    "computer-cooling": {
        title: "Computer Cooling",
        category: "Computers",
        icon: "❄️",
        keywords: [
            "cooling",
            "computer cooling",
            "cpu cooler",
            "fans",
            "temperature"
        ],
        quickAnswer:
            "Computer cooling removes heat generated by components so they can operate within safe temperature ranges.",

        howItWorks:
            "Heat is transferred away from components using heatsinks, fans, thermal interface materials, and sometimes liquid cooling systems.",

        whyItMatters:
            "Excessive heat can cause reduced performance, instability, or hardware damage.",

        example:
            "A CPU cooler transfers heat from the processor into a heatsink, where a fan helps move that heat away.",

        deepDive:
            "Cooling systems use conduction and convection to move heat. Thermal paste or another thermal interface material improves heat transfer between a chip and its cooler.",

        keyPoints: [
            "Computers produce heat.",
            "Heatsinks absorb and spread heat.",
            "Fans move air through the system.",
            "Thermal interface material improves heat transfer.",
            "Good airflow helps maintain stable temperatures."
        ],

        related: [
            "cpu",
            "gpu",
            "psu"
        ]
    },


    "bios-uefi": {
        title: "BIOS and UEFI",
        category: "Computers",
        icon: "⚙️",
        keywords: [
            "bios",
            "uefi",
            "firmware",
            "boot firmware"
        ],
        quickAnswer:
            "BIOS and UEFI are firmware systems that initialize hardware and help start the operating system.",

        howItWorks:
            "When a computer starts, firmware initializes important hardware and searches for a device containing bootable software. Modern systems commonly use UEFI.",

        whyItMatters:
            "Firmware is involved before the operating system loads and provides configuration and hardware initialization functions.",

        example:
            "The firmware setup screen can allow you to change boot order, enable hardware features, and configure system settings.",

        deepDive:
            "UEFI is the modern replacement for traditional BIOS firmware on most computers. UEFI supports features such as larger boot disks and Secure Boot.",

        keyPoints: [
            "Firmware runs before the operating system.",
            "UEFI is the modern firmware standard.",
            "Firmware initializes hardware.",
            "Boot order can be configured through firmware settings.",
            "Secure Boot can help verify trusted boot software."
        ],

        related: [
            "operating-system",
            "motherboard",
            "file-system"
        ]
    },


    "computer-ports": {
        title: "Computer Ports",
        category: "Computers",
        icon: "🔌",
        keywords: [
            "ports",
            "usb",
            "hdmi",
            "ethernet port",
            "displayport",
            "computer connectors"
        ],
        quickAnswer:
            "Computer ports are physical connectors used to connect computers to other devices and networks.",

        howItWorks:
            "Different ports use different electrical and communication standards. Examples include USB for peripherals and data, HDMI for digital video and audio, and Ethernet for wired networking.",

        whyItMatters:
            "Knowing the purpose of common ports makes it easier to connect hardware correctly.",

        example:
            "A USB port can connect a keyboard, mouse, storage device, or other compatible peripheral.",

        deepDive:
            "USB has evolved through multiple generations with different transfer speeds and connector types. Video ports such as HDMI and DisplayPort are designed for high-bandwidth displays.",

        keyPoints: [
            "Ports connect devices to computers.",
            "USB is commonly used for peripherals and data.",
            "HDMI carries digital audio and video.",
            "Ethernet is used for wired networking.",
            "Different versions of a standard can have different capabilities."
        ],

        related: [
            "ethernet",
            "computer-networking",
            "motherboard"
        ]
    },


    /* =================================================
       OPERATING SYSTEMS & SOFTWARE
    ================================================= */

    "operating-system": {
        title: "Operating System",
        category: "Operating Systems",
        icon: "🖥️",
        keywords: [
            "operating system",
            "os",
            "windows",
            "linux",
            "macos"
        ],
        quickAnswer:
            "An operating system manages computer hardware and provides services that applications use.",

        howItWorks:
            "The operating system manages resources such as CPU time, memory, storage, files, devices, users, and networking.",

        whyItMatters:
            "Without an operating system, most users would have to interact directly with hardware and low-level software.",

        example:
            "Windows, Linux, and macOS are operating systems that provide interfaces for running applications and managing files.",

        deepDive:
            "Operating systems contain components such as kernels, drivers, file systems, security systems, and user interfaces.",

        keyPoints: [
            "An operating system manages hardware and software resources.",
            "The kernel is a central part of an operating system.",
            "Operating systems manage processes and memory.",
            "They provide services to applications.",
            "Examples include Windows, Linux, and macOS."
        ],

        related: [
            "windows",
            "linux",
            "macos",
            "computer-processes",
            "os-kernel"
        ]
    },


    windows: {
        title: "Windows",
        category: "Operating Systems",
        icon: "🪟",
        keywords: [
            "windows",
            "microsoft windows",
            "windows operating system"
        ],
        quickAnswer:
            "Windows is a family of operating systems developed by Microsoft for personal computers, servers, and other devices.",

        howItWorks:
            "Windows provides a graphical user interface, system services, hardware support, file management, networking, security, and application support.",

        whyItMatters:
            "Windows is widely used on personal computers and supports a large ecosystem of software and hardware.",

        example:
            "A Windows PC can run web browsers, games, development tools, productivity applications, and security software.",

        deepDive:
            "Modern Windows systems use a layered architecture that includes the Windows kernel, system services, drivers, security features, and user-facing applications.",

        keyPoints: [
            "Windows is developed by Microsoft.",
            "It provides a graphical user interface.",
            "Windows supports many hardware devices.",
            "It includes built-in security features.",
            "It supports a large application ecosystem."
        ],

        related: [
            "operating-system",
            "applications",
            "device-drivers",
            "software-updates"
        ]
    },


    linux: {
        title: "Linux",
        category: "Operating Systems",
        icon: "🐧",
        keywords: [
            "linux",
            "linux operating system",
            "kernel",
            "ubuntu",
            "debian"
        ],
        quickAnswer:
            "Linux is an open-source operating system kernel used in many operating systems and devices.",

        howItWorks:
            "Linux provides the core kernel functions needed to manage hardware, processes, memory, files, networking, and security. Linux distributions combine the kernel with other software.",

        whyItMatters:
            "Linux is widely used in servers, cloud systems, cybersecurity, development environments, embedded devices, and many other systems.",

        example:
            "Ubuntu is a Linux distribution commonly used for desktop computers, servers, development, and learning.",

        deepDive:
            "Linux distributions package the Linux kernel with tools, libraries, package managers, desktop environments, and other software.",

        keyPoints: [
            "Linux is open source.",
            "Linux is technically a kernel.",
            "Distributions package Linux with additional software.",
            "Linux is heavily used on servers.",
            "Linux is widely used in cybersecurity and development."
        ],

        related: [
            "operating-system",
            "os-kernel",
            "file-system",
            "cybersecurity"
        ]
    },


    macos: {
        title: "macOS",
        category: "Operating Systems",
        icon: "🍎",
        keywords: [
            "macos",
            "mac os",
            "apple operating system"
        ],
        quickAnswer:
            "macOS is Apple's desktop operating system used on Mac computers.",

        howItWorks:
            "macOS manages hardware resources and provides a graphical interface, system services, file management, security, networking, and application support.",

        whyItMatters:
            "macOS provides the software environment used by Mac computers and supports development, creative work, productivity, and other tasks.",

        example:
            "A MacBook uses macOS to manage its hardware and run applications such as browsers, editors, and development tools.",

        deepDive:
            "macOS is built on technologies including the Darwin operating system foundation and the XNU kernel.",

        keyPoints: [
            "macOS is developed by Apple.",
            "It runs on Mac computers.",
            "It provides a graphical desktop environment.",
            "It includes built-in security systems.",
            "It supports software development and many professional applications."
        ],

        related: [
            "operating-system",
            "applications",
            "device-drivers"
        ]
    },


    applications: {
        title: "Applications",
        category: "Software",
        icon: "📱",
        keywords: [
            "applications",
            "apps",
            "software",
            "programs"
        ],
        quickAnswer:
            "Applications are software programs designed to perform tasks for users or other software systems.",

        howItWorks:
            "Applications use operating-system services and hardware resources to perform their jobs.",

        whyItMatters:
            "Applications are the software people interact with to accomplish tasks such as browsing, editing, gaming, communication, and programming.",

        example:
            "A web browser is an application that lets users access websites.",

        deepDive:
            "Applications can be desktop programs, mobile apps, web applications, command-line tools, or specialized software.",

        keyPoints: [
            "Applications are software programs.",
            "Apps depend on operating-system services.",
            "Applications can perform many different tasks.",
            "Browsers, editors, and games are examples.",
            "Applications can communicate with APIs and databases."
        ],

        related: [
            "operating-system",
            "programming",
            "apis"
        ]
    },


    "device-drivers": {
        title: "Device Drivers",
        category: "Software",
        icon: "🔧",
        keywords: [
            "drivers",
            "device drivers",
            "hardware drivers"
        ],
        quickAnswer:
            "Device drivers are software components that allow an operating system to communicate with hardware devices.",

        howItWorks:
            "A driver translates operating-system requests into commands that a particular hardware device can understand.",

        whyItMatters:
            "Without appropriate drivers, an operating system may not be able to use all features of a hardware device.",

        example:
            "A graphics driver allows the operating system and applications to communicate with a GPU.",

        deepDive:
            "Drivers can handle hardware such as graphics cards, network adapters, printers, storage controllers, and input devices.",

        keyPoints: [
            "Drivers connect software and hardware.",
            "Different hardware often requires different drivers.",
            "Graphics drivers are especially important for GPU functionality.",
            "Operating systems often include many built-in drivers.",
            "Driver updates can add features or fix compatibility issues."
        ],

        related: [
            "operating-system",
            "gpu",
            "software-updates"
        ]
    },


    "file-system": {
        title: "File System",
        category: "Operating Systems",
        icon: "📁",
        keywords: [
            "file system",
            "filesystem",
            "ntfs",
            "ext4",
            "apfs",
            "files"
        ],
        quickAnswer:
            "A file system organizes and manages how data is stored and retrieved on storage devices.",

        howItWorks:
            "The file system keeps track of files, directories, metadata, permissions, and where data is stored on a device.",

        whyItMatters:
            "File systems allow operating systems and applications to store, find, modify, and protect data.",

        example:
            "Windows commonly uses NTFS, while Linux systems commonly use file systems such as ext4.",

        deepDive:
            "Different file systems use different structures and features. These can include permissions, journaling, compression, encryption support, snapshots, and recovery mechanisms.",

        keyPoints: [
            "File systems organize stored data.",
            "They manage files and directories.",
            "They store metadata about files.",
            "Different operating systems support different file systems.",
            "File systems can provide security and reliability features."
        ],

        related: [
            "ssd",
            "hdd",
            "operating-system"
        ]
    },


    "computer-processes": {
        title: "Computer Processes",
        category: "Operating Systems",
        icon: "⚙️",
        keywords: [
            "process",
            "processes",
            "computer process",
            "program process"
        ],
        quickAnswer:
            "A process is a running instance of a program managed by the operating system.",

        howItWorks:
            "When a program starts, the operating system creates a process and gives it resources such as memory and CPU time.",

        whyItMatters:
            "Process management allows an operating system to run many programs at the same time while keeping their resources organized.",

        example:
            "When you open a browser, the operating system creates one or more processes for it.",

        deepDive:
            "Processes can contain threads, have memory spaces, use files and network connections, and interact with other processes through operating-system mechanisms.",

        keyPoints: [
            "A process is a running program.",
            "The operating system manages processes.",
            "Processes use memory and CPU time.",
            "A process can contain multiple threads.",
            "Operating systems isolate processes for security and stability."
        ],

        related: [
            "operating-system",
            "ram",
            "cpu",
            "os-kernel"
        ]
    },


    "virtual-memory": {
        title: "Virtual Memory",
        category: "Operating Systems",
        icon: "🧠",
        keywords: [
            "virtual memory",
            "memory management",
            "paging",
            "swap"
        ],
        quickAnswer:
            "Virtual memory is a memory-management technique that gives programs an abstraction of memory and can use storage to extend available memory.",

        howItWorks:
            "The operating system divides memory into pages and manages mappings between virtual addresses and physical memory. Less-active data may be moved to storage when needed.",

        whyItMatters:
            "Virtual memory allows programs to operate in isolated address spaces and helps systems manage memory efficiently.",

        example:
            "If RAM becomes heavily used, an operating system may move some inactive memory pages to a swap file or partition.",

        deepDive:
            "Virtual memory relies on hardware memory-management units and operating-system page tables. It provides isolation, address translation, and controlled access to memory.",

        keyPoints: [
            "Virtual memory provides an abstraction over physical memory.",
            "Programs use virtual addresses.",
            "The operating system manages memory pages.",
            "Storage can be used for inactive pages.",
            "Virtual memory improves isolation and memory management."
        ],

        related: [
            "ram",
            "operating-system",
            "computer-processes"
        ]
    },


    "software-updates": {
        title: "Software Updates",
        category: "Software",
        icon: "🔄",
        keywords: [
            "software updates",
            "updates",
            "patches",
            "security updates"
        ],
        quickAnswer:
            "Software updates modify existing software to fix bugs, improve functionality, or address security problems.",

        howItWorks:
            "Developers release updated versions or patches. Devices download and install those updates using update systems or package managers.",

        whyItMatters:
            "Keeping software updated can fix known security vulnerabilities and improve reliability.",

        example:
            "An operating system may release a security patch that fixes a vulnerability discovered by researchers.",

        deepDive:
            "Updates can range from small patches to major version upgrades. Organizations often test updates before deploying them broadly.",

        keyPoints: [
            "Updates can fix bugs.",
            "Security patches can address vulnerabilities.",
            "Updates can add features.",
            "Package managers can automate software updates.",
            "Organizations often test updates before deployment."
        ],

        related: [
            "operating-system",
            "cybersecurity",
            "applications"
        ]
    },


    /* =================================================
       INTERNET & NETWORKING
    ================================================= */

    internet: {
        title: "The Internet",
        category: "Internet & Networking",
        icon: "🌐",
        keywords: [
            "internet",
            "network",
            "world wide web",
            "online"
        ],
        quickAnswer:
            "The Internet is a global network of interconnected networks that communicate using standardized protocols.",

        howItWorks:
            "Devices communicate across networks using protocols such as IP and TCP. Routers forward packets between networks until they reach their destinations.",

        whyItMatters:
            "The Internet allows computers and people around the world to communicate and exchange information.",

        example:
            "When you visit a website, your device communicates with remote servers through multiple networks.",

        deepDive:
            "The Internet is decentralized and consists of networks operated by many organizations. Internet protocols allow these networks to interoperate.",

        keyPoints: [
            "The Internet is a network of networks.",
            "IP provides addressing and routing.",
            "Routers forward network traffic.",
            "Many organizations operate parts of the Internet.",
            "The Web is a service that operates over the Internet."
        ],

        related: [
            "ip-address",
            "dns",
            "router",
            "http-https",
            "server"
        ]
    },


    wifi: {
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
            "Wi-Fi is a family of wireless networking technologies that allows devices to communicate over radio waves.",

        howItWorks:
            "Wi-Fi devices communicate with wireless access points using radio signals and standardized protocols.",

        whyItMatters:
            "Wi-Fi provides convenient wireless network access for computers, phones, smart devices, and other equipment.",

        example:
            "A laptop can connect to a home router over Wi-Fi to access the Internet.",

        deepDive:
            "Wi-Fi standards have evolved over time, improving speed, efficiency, range, and reliability. Security protocols such as WPA2 and WPA3 help protect wireless networks.",

        keyPoints: [
            "Wi-Fi uses radio communication.",
            "Wireless access points provide network connectivity.",
            "Modern Wi-Fi standards provide high-speed networking.",
            "WPA2 and WPA3 are common Wi-Fi security standards.",
            "Wi-Fi and the Internet are not the same thing."
        ],

        related: [
            "router",
            "ethernet",
            "ip-address",
            "cybersecurity"
        ]
    },


    ethernet: {
        title: "Ethernet",
        category: "Internet & Networking",
        icon: "🔌",
        keywords: [
            "ethernet",
            "wired network",
            "network cable",
            "lan"
        ],
        quickAnswer:
            "Ethernet is a family of wired networking technologies commonly used in local area networks.",

        howItWorks:
            "Ethernet sends data across physical network connections using standardized protocols and frames.",

        whyItMatters:
            "Ethernet provides reliable high-speed connections for computers, servers, switches, routers, and other network equipment.",

        example:
            "A desktop computer can connect to a router with an Ethernet cable.",

        deepDive:
            "Modern Ethernet commonly uses twisted-pair copper cables or fiber optic connections. Different Ethernet standards support different speeds.",

        keyPoints: [
            "Ethernet is commonly wired.",
            "It is widely used in local networks.",
            "Ethernet can provide high bandwidth.",
            "Ethernet cables use standardized connectors and wiring.",
            "Ethernet can be used between computers, switches, and routers."
        ],

        related: [
            "wifi",
            "network-switch",
            "router",
            "computer-ports"
        ]
    },


    router: {
        title: "Router",
        category: "Internet & Networking",
        icon: "📡",
        keywords: [
            "router",
            "network router",
            "internet router",
            "routing"
        ],
        quickAnswer:
            "A router forwards network traffic between different networks.",

        howItWorks:
            "Routers examine packet destination information and use routing tables to determine where traffic should be forwarded.",

        whyItMatters:
            "Routers allow separate networks to communicate and provide important network-management functions.",

        example:
            "A home router connects devices on your local network to your Internet service provider.",

        deepDive:
            "Routers can perform routing, network address translation, firewalling, DHCP, wireless access, and other functions depending on the device.",

        keyPoints: [
            "Routers connect networks.",
            "They forward packets.",
            "Routing tables help determine packet destinations.",
            "Home routers often provide multiple networking services.",
            "Routers are different from switches."
        ],

        related: [
            "network-switch",
            "ip-address",
            "dhcp",
            "subnetting",
            "firewall"
        ]
    },


    "network-switch": {
        title: "Network Switch",
        category: "Internet & Networking",
        icon: "🔀",
        keywords: [
            "switch",
            "network switch",
            "ethernet switch",
            "lan switch"
        ],
        quickAnswer:
            "A network switch connects devices within a local network and forwards Ethernet frames to the appropriate destination.",

        howItWorks:
            "A switch learns which devices are connected to its ports by observing MAC addresses and uses that information to forward frames.",

        whyItMatters:
            "Switches allow many wired devices to communicate efficiently within a local network.",

        example:
            "An office may connect dozens of computers to a central Ethernet switch.",

        deepDive:
            "Managed switches can provide features such as VLANs, monitoring, redundancy, port security, and traffic controls.",

        keyPoints: [
            "Switches connect devices in local networks.",
            "Switches use MAC addresses.",
            "They forward Ethernet frames.",
            "Managed switches provide advanced configuration.",
            "Switches are commonly used in offices and data centers."
        ],

        related: [
            "ethernet",
            "router",
            "ip-address",
            "subnetting"
        ]
    },


    "ip-address": {
        title: "IP Address",
        category: "Internet & Networking",
        icon: "📍",
        keywords: [
            "ip",
            "ip address",
            "ipv4",
            "ipv6"
        ],
        quickAnswer:
            "An IP address identifies a network interface so devices can communicate across IP networks.",

        howItWorks:
            "When devices communicate using IP, packets contain source and destination IP addresses. Routers use destination addresses to forward traffic.",

        whyItMatters:
            "IP addressing allows devices and networks to communicate and route traffic across interconnected networks.",

        example:
            "A device on a home network might receive a private IPv4 address such as 192.168.1.20.",

        deepDive:
            "IPv4 uses 32-bit addresses while IPv6 uses 128-bit addresses. IPv6 provides a vastly larger address space.",

        keyPoints: [
            "IP addresses identify network interfaces.",
            "IPv4 uses 32-bit addresses.",
            "IPv6 uses 128-bit addresses.",
            "Private IP addresses are commonly used inside local networks.",
            "Routers use IP addresses for routing."
        ],

        related: [
            "router",
            "dhcp",
            "dns",
            "subnetting"
        ]
    },


    dns: {
        title: "DNS (Domain Name System)",
        category: "Internet & Networking",
        icon: "🔎",
        keywords: [
            "dns",
            "domain name system",
            "domain names",
            "dns server"
        ],
        quickAnswer:
            "DNS translates human-readable domain names into IP addresses and provides other types of network information.",

        howItWorks:
            "When you enter a domain name, a DNS resolver can query DNS servers to find the appropriate records, such as an IP address.",

        whyItMatters:
            "DNS makes the Internet easier to use by allowing people to use names instead of remembering numerical IP addresses.",

        example:
            "When a browser connects to a website domain, DNS can help determine which IP address hosts that site.",

        deepDive:
            "DNS uses different record types including A, AAAA, CNAME, MX, TXT, and NS records. DNS resolution can involve recursive resolvers and authoritative name servers.",

        keyPoints: [
            "DNS stands for Domain Name System.",
            "DNS translates domain names into network information.",
            "A records map names to IPv4 addresses.",
            "AAAA records map names to IPv6 addresses.",
            "DNS is a distributed system."
        ],

        related: [
            "ip-address",
            "http-https",
            "server",
            "cdn"
        ]
    },


    dhcp: {
        title: "DHCP",
        category: "Internet & Networking",
        icon: "📋",
        keywords: [
            "dhcp",
            "dynamic host configuration protocol",
            "ip assignment"
        ],
        quickAnswer:
            "DHCP automatically provides network configuration information such as IP addresses to devices.",

        howItWorks:
            "A DHCP client requests configuration information from a DHCP server. The server can provide an IP address, subnet information, gateway, and DNS server settings.",

        whyItMatters:
            "DHCP makes it easier to configure many devices on a network without manually assigning every address.",

        example:
            "When a phone joins a home Wi-Fi network, the router's DHCP service may assign it an IP address.",

        deepDive:
            "DHCP uses a lease system. Devices can renew their leases to continue using assigned addresses.",

        keyPoints: [
            "DHCP automatically provides network configuration.",
            "DHCP can assign IP addresses.",
            "DHCP can provide gateway and DNS information.",
            "Addresses are commonly leased for a period of time.",
            "Home routers often provide DHCP services."
        ],

        related: [
            "ip-address",
            "router",
            "subnetting"
        ]
    },


    "http-https": {
        title: "HTTP and HTTPS",
        category: "Internet & Networking",
        icon: "🔒",
        keywords: [
            "http",
            "https",
            "web protocol",
            "tls",
            "web security"
        ],
        quickAnswer:
            "HTTP is a protocol used to transfer web resources, while HTTPS uses HTTP with encryption and authentication provided by TLS.",

        howItWorks:
            "A browser sends HTTP requests to a server. With HTTPS, the connection uses TLS to help protect data in transit and authenticate the server.",

        whyItMatters:
            "HTTPS helps protect information from being read or modified while traveling between a browser and server.",

        example:
            "When you visit a website beginning with https://, the browser establishes a secure TLS connection before exchanging normal HTTP data.",

        deepDive:
            "HTTPS protects the confidentiality and integrity of application data in transit and uses digital certificates as part of server authentication.",

        keyPoints: [
            "HTTP is a web communication protocol.",
            "HTTPS uses HTTP over TLS.",
            "TLS provides encryption and authentication.",
            "HTTPS helps protect data in transit.",
            "Web browsers use HTTPS for secure web connections."
        ],

        related: [
            "web-browser",
            "server",
            "dns",
            "cybersecurity"
        ]
    },


    "web-browser": {
        title: "Web Browser",
        category: "Internet & Networking",
        icon: "🌍",
        keywords: [
            "browser",
            "web browser",
            "chrome",
            "firefox",
            "edge"
        ],
        quickAnswer:
            "A web browser is software that retrieves and displays web content.",

        howItWorks:
            "A browser resolves domain names, connects to servers, requests resources, interprets HTML, CSS, and JavaScript, and renders the resulting page.",

        whyItMatters:
            "Browsers are one of the main ways people access websites and web applications.",

        example:
            "When you open a website, the browser downloads the page's resources and renders them on your screen.",

        deepDive:
            "Modern browsers contain rendering engines, JavaScript engines, networking components, security sandboxes, storage systems, and developer tools.",

        keyPoints: [
            "Browsers retrieve web resources.",
            "Browsers interpret HTML, CSS, and JavaScript.",
            "Browsers communicate with web servers.",
            "Browsers provide security protections.",
            "Developer tools help inspect websites."
        ],

        related: [
            "http-https",
            "html",
            "css",
            "javascript"
        ]
    },


    server: {
        title: "Server",
        category: "Internet & Networking",
        icon: "🖥️",
        keywords: [
            "server",
            "web server",
            "computer server",
            "hosting"
        ],
        quickAnswer:
            "A server is a computer or software system that provides services or resources to other computers called clients.",

        howItWorks:
            "A server listens for requests and responds using a defined protocol. Servers can provide websites, files, databases, email, applications, and many other services.",

        whyItMatters:
            "Servers provide the infrastructure behind many websites, applications, cloud systems, and network services.",

        example:
            "A web server receives browser requests and sends back website files or generated responses.",

        deepDive:
            "Servers can run on physical hardware, virtual machines, containers, or cloud infrastructure. One physical system can host multiple services.",

        keyPoints: [
            "Servers provide services to clients.",
            "Servers can host websites.",
            "Servers can run databases and applications.",
            "Servers can be physical or virtual.",
            "Servers communicate using protocols."
        ],

        related: [
            "http-https",
            "web-development",
            "databases",
            "cloud-computing"
        ]
    },


    /* =================================================
       WEB DEVELOPMENT
    ================================================= */

    html: {
        title: "HTML",
        category: "Web Development",
        icon: "🌐",
        keywords: [
            "html",
            "hypertext markup language",
            "web pages",
            "markup"
        ],
        quickAnswer:
            "HTML is the markup language used to structure content on web pages.",

        howItWorks:
            "HTML uses elements and tags to describe things such as headings, paragraphs, links, images, forms, and sections. Browsers interpret the HTML and build a document structure.",

        whyItMatters:
            "HTML provides the basic structure of websites and works together with CSS and JavaScript to create modern web experiences.",

        example:
            "A heading can be represented with an h1 element, while a paragraph can be represented with a p element.",

        deepDive:
            "HTML defines semantic structure and meaning. Elements can contain attributes that provide additional information or behavior.",

        keyPoints: [
            "HTML stands for HyperText Markup Language.",
            "HTML structures web content.",
            "Browsers interpret HTML.",
            "HTML works with CSS and JavaScript.",
            "Semantic HTML improves structure and accessibility."
        ],

        related: [
            "css",
            "javascript",
            "web-development",
            "web-browser"
        ]
    },


    css: {
        title: "CSS",
        category: "Web Development",
        icon: "🎨",
        keywords: [
            "css",
            "cascading style sheets",
            "web design",
            "styling"
        ],
        quickAnswer:
            "CSS controls the visual presentation and layout of HTML content.",

        howItWorks:
            "CSS rules select HTML elements and apply properties such as colors, spacing, fonts, sizes, positioning, and responsive layouts.",

        whyItMatters:
            "CSS turns basic HTML structure into visually organized and responsive web pages.",

        example:
            "A CSS rule can change the font size, background, spacing, or layout of a website section.",

        deepDive:
            "CSS includes the cascade, specificity, inheritance, box model, flexbox, grid, animations, media queries, and many other layout and styling systems.",

        keyPoints: [
            "CSS stands for Cascading Style Sheets.",
            "CSS controls presentation.",
            "The box model is fundamental to layout.",
            "Flexbox and Grid are major layout systems.",
            "Media queries help create responsive websites."
        ],

        related: [
            "html",
            "javascript",
            "web-development"
        ]
    },


    javascript: {
        title: "JavaScript",
        category: "Web Development",
        icon: "⚡",
        keywords: [
            "javascript",
            "js",
            "web programming",
            "browser programming"
        ],
        quickAnswer:
            "JavaScript is a programming language widely used to add behavior and interactivity to websites and applications.",

        howItWorks:
            "Browsers contain JavaScript engines that execute JavaScript code. Scripts can respond to events, change web pages, communicate with servers, and perform calculations.",

        whyItMatters:
            "JavaScript is a major part of modern web development and is also used outside browsers for servers, tools, automation, and applications.",

        example:
            "A website can use JavaScript to make a search box update results without reloading the entire page.",

        deepDive:
            "JavaScript supports variables, functions, objects, classes, asynchronous programming, modules, APIs, and event-driven programming.",

        keyPoints: [
            "JavaScript is a programming language.",
            "Browsers can execute JavaScript.",
            "JavaScript can modify HTML and CSS through the DOM.",
            "JavaScript can communicate with servers.",
            "JavaScript can also run outside browsers."
        ],

        related: [
            "html",
            "css",
            "programming",
            "apis",
            "debugging"
        ]
    },


    "web-development": {
        title: "Web Development",
        category: "Web Development",
        icon: "💻",
        keywords: [
            "web development",
            "website development",
            "websites",
            "web apps"
        ],
        quickAnswer:
            "Web development is the process of creating websites and web applications.",

        howItWorks:
            "Web development commonly combines front-end technologies such as HTML, CSS, and JavaScript with back-end systems, databases, APIs, servers, and networking.",

        whyItMatters:
            "Web development powers websites, online tools, web applications, stores, educational platforms, and many other Internet services.",

        example:
            "A learning website might use HTML for structure, CSS for appearance, JavaScript for search functionality, and a server or database for additional services.",

        deepDive:
            "Modern web development can involve client-side rendering, server-side rendering, APIs, authentication, databases, deployment systems, testing, and security.",

        keyPoints: [
            "Web development creates websites and web applications.",
            "HTML provides structure.",
            "CSS controls presentation.",
            "JavaScript adds behavior.",
            "Back-end systems provide services and data."
        ],

        related: [
            "html",
            "css",
            "javascript",
            "front-end-development",
            "back-end-development",
            "full-stack-development"
        ]
    },


    "front-end-development": {
        title: "Front-End Development",
        category: "Web Development",
        icon: "🖼️",
        keywords: [
            "front end",
            "frontend",
            "front-end development",
            "client side"
        ],
        quickAnswer:
            "Front-end development focuses on the parts of a website or web application that users interact with directly.",

        howItWorks:
            "Front-end code runs primarily in the user's browser and commonly uses HTML, CSS, and JavaScript.",

        whyItMatters:
            "Front-end development determines how users interact with websites and how information is presented.",

        example:
            "A website's navigation menu, search interface, buttons, animations, and page layout are examples of front-end work.",

        deepDive:
            "Front-end developers may use frameworks, component systems, build tools, browser APIs, accessibility practices, and performance optimization techniques.",

        keyPoints: [
            "Front-end code runs mainly in the browser.",
            "HTML, CSS, and JavaScript are core technologies.",
            "Front-end development focuses on user interaction.",
            "Accessibility is an important part of front-end development.",
            "Performance affects the user experience."
        ],

        related: [
            "html",
            "css",
            "javascript",
            "web-development"
        ]
    },


    "back-end-development": {
        title: "Back-End Development",
        category: "Web Development",
        icon: "🛠️",
        keywords: [
            "back end",
            "backend",
            "back-end development",
            "server side"
        ],
        quickAnswer:
            "Back-end development focuses on server-side software, data processing, APIs, authentication, and other services behind a website or application.",

        howItWorks:
            "A client sends requests to a server. Back-end software processes those requests, communicates with databases or other services, and returns responses.",

        whyItMatters:
            "Back-end systems handle data and logic that should not be performed entirely in the user's browser.",

        example:
            "When a user logs into a website, a back-end service may verify the account credentials and retrieve account information from a database.",

        deepDive:
            "Back-end systems can be built using many programming languages and frameworks and often involve APIs, databases, authentication, caching, logging, and security controls.",

        keyPoints: [
            "Back-end software runs on servers.",
            "It handles application logic and data.",
            "APIs connect clients to back-end services.",
            "Databases are commonly used by back-end systems.",
            "Security is a major back-end concern."
        ],

        related: [
            "server",
            "apis",
            "databases",
            "full-stack-development",
            "cybersecurity"
        ]
    },


    "full-stack-development": {
        title: "Full-Stack Development",
        category: "Web Development",
        icon: "🔗",
        keywords: [
            "full stack",
            "full-stack",
            "full stack development",
            "web developer"
        ],
        quickAnswer:
            "Full-stack development involves working across both front-end and back-end parts of a web application.",

        howItWorks:
            "A full-stack system can include the browser interface, server-side application, APIs, databases, authentication, deployment, and infrastructure.",

        whyItMatters:
            "Understanding the complete stack helps developers see how user interfaces, application logic, data, and infrastructure work together.",

        example:
            "A full-stack developer might build a website interface, create the API behind it, connect a database, and deploy the application.",

        deepDive:
            "Full-stack development requires understanding multiple layers rather than mastering every technology in existence. Developers commonly specialize while maintaining broad knowledge across the stack.",

        keyPoints: [
            "Full-stack development covers front end and back end.",
            "It often includes databases and APIs.",
            "Deployment and infrastructure can also be part of the stack.",
            "Full-stack developers work across multiple layers.",
            "The exact technology stack can vary greatly."
        ],

        related: [
            "front-end-development",
            "back-end-development",
            "apis",
            "databases",
            "web-development"
        ]
    },


    /* =================================================
       PROGRAMMING & DATA
    ================================================= */

    programming: {
        title: "Programming",
        category: "Programming & Data",
        icon: "💻",
        keywords: [
            "programming",
            "coding",
            "software development",
            "code"
        ],
        quickAnswer:
            "Programming is the process of creating instructions that computers can execute.",

        howItWorks:
            "Programmers write code using programming languages. That code is translated or interpreted so computers can perform the requested operations.",

        whyItMatters:
            "Programming is used to create applications, websites, games, operating systems, automation tools, and many other technologies.",

        example:
            "A simple program might take a user's input, perform a calculation, and display the result.",

        deepDive:
            "Programming involves concepts such as variables, functions, control flow, data structures, algorithms, abstraction, testing, and debugging.",

        keyPoints: [
            "Programming creates computer instructions.",
            "Programming languages provide ways to express those instructions.",
            "Programs use logic and data.",
            "Testing and debugging are important development activities.",
            "Programming is used across many technology fields."
        ],

        related: [
            "programming-languages",
            "variables",
            "functions",
            "algorithms",
            "debugging"
        ]
    },


    "programming-languages": {
        title: "Programming Languages",
        category: "Programming & Data",
        icon: "🧑‍💻",
        keywords: [
            "programming languages",
            "python",
            "javascript",
            "java",
            "c++",
            "programming"
        ],
        quickAnswer:
            "Programming languages provide structured ways for humans to write instructions that computers can execute.",

        howItWorks:
            "A programming language defines syntax and rules for expressing operations. A compiler, interpreter, or runtime system then helps execute those instructions.",

        whyItMatters:
            "Different programming languages are designed with different strengths and are used for different kinds of software.",

        example:
            "Python is commonly used for automation, data science, and learning programming, while JavaScript is widely used for web development.",

        deepDive:
            "Programming languages can be categorized in many ways, including compiled or interpreted, high-level or low-level, procedural, object-oriented, functional, and systems-oriented.",

        keyPoints: [
            "Programming languages define rules for writing code.",
            "Different languages have different strengths.",
            "Some languages are compiled.",
            "Some languages use interpreters or runtimes.",
            "Learning programming concepts is often more important than memorizing syntax."
        ],

        related: [
            "programming",
            "compilers-interpreters",
            "javascript",
            "machine-code"
        ]
    },


    algorithms: {
        title: "Algorithms",
        category: "Programming & Data",
        icon: "🧮",
        keywords: [
            "algorithms",
            "algorithm",
            "problem solving",
            "computer algorithms"
        ],
        quickAnswer:
            "An algorithm is a defined sequence of steps for solving a problem or performing a task.",

        howItWorks:
            "An algorithm takes input, processes it using a sequence of operations, and produces an output or result.",

        whyItMatters:
            "Good algorithms can solve problems efficiently and are fundamental to computer science and software development.",

        example:
            "A search algorithm can examine a collection of data to find a specific value.",

        deepDive:
            "Algorithms are often evaluated using time and space complexity. Common algorithmic techniques include sorting, searching, recursion, dynamic programming, and graph algorithms.",

        keyPoints: [
            "Algorithms are step-by-step procedures.",
            "Algorithms can process data.",
            "Different algorithms can solve the same problem.",
            "Efficiency matters for large inputs.",
            "Algorithms are used throughout software."
        ],

        related: [
            "programming",
            "data-structures",
            "loops",
            "conditional-statements"
        ]
    },


    variables: {
        title: "Variables",
        category: "Programming & Data",
        icon: "📦",
        keywords: [
            "variables",
            "variable",
            "programming variables",
            "data storage"
        ],
        quickAnswer:
            "A variable is a named location or reference used by a program to store or represent data.",

        howItWorks:
            "Programs assign values to variables and later read or modify those values as the program executes.",

        whyItMatters:
            "Variables allow programs to work with changing information such as numbers, text, user input, and program state.",

        example:
            "A program could store a user's name in a variable and use that value later.",

        deepDive:
            "Different languages have different variable and type systems. Some require explicit type declarations while others infer types automatically.",

        keyPoints: [
            "Variables represent data used by programs.",
            "Variables can hold different kinds of values.",
            "Programs can change variable values.",
            "Variable rules differ between languages.",
            "Good variable names improve code readability."
        ],

        related: [
            "data-types",
            "programming",
            "functions"
        ]
    },


    functions: {
        title: "Functions",
        category: "Programming & Data",
        icon: "⚙️",
        keywords: [
            "functions",
            "function",
            "methods",
            "programming functions"
        ],
        quickAnswer:
            "A function is a reusable block of code designed to perform a specific task.",

        howItWorks:
            "A function can receive input through parameters, execute instructions, and optionally return a result.",

        whyItMatters:
            "Functions reduce repeated code and help programmers organize large programs into smaller pieces.",

        example:
            "A calculateTotal function could receive prices and return the final total.",

        deepDive:
            "Functions are central to abstraction and modular programming. Different languages support functions in different ways, including anonymous functions, closures, and methods.",

        keyPoints: [
            "Functions group reusable logic.",
            "Functions can accept parameters.",
            "Functions can return values.",
            "Functions improve code organization.",
            "Functions support abstraction."
        ],

        related: [
            "variables",
            "programming",
            "object-oriented-programming"
        ]
    },


    apis: {
        title: "APIs",
        category: "Programming & Data",
        icon: "🔗",
        keywords: [
            "api",
            "apis",
            "application programming interface",
            "web api"
        ],
        quickAnswer:
            "An API is a defined interface that allows software systems to communicate with each other.",

        howItWorks:
            "An API defines available operations, inputs, outputs, and rules that software can use to request or provide functionality.",

        whyItMatters:
            "APIs allow applications to reuse services and communicate without needing to know every internal implementation detail.",

        example:
            "A weather application can use a weather API to request current conditions from a remote service.",

        deepDive:
            "APIs can use many communication styles and protocols. Web APIs commonly use HTTP and formats such as JSON.",

        keyPoints: [
            "APIs connect software systems.",
            "APIs define rules for communication.",
            "Web APIs often use HTTP.",
            "JSON is commonly used for data exchange.",
            "APIs hide implementation details behind an interface."
        ],

        related: [
            "javascript",
            "back-end-development",
            "databases",
            "http-https"
        ]
    },


    databases: {
        title: "Databases",
        category: "Programming & Data",
        icon: "🗃️",
        keywords: [
            "database",
            "databases",
            "sql",
            "data storage",
            "database management"
        ],
        quickAnswer:
            "A database is a system used to store, organize, retrieve, and manage data.",

        howItWorks:
            "Applications send queries or commands to database systems. The database stores data using structures designed for efficient retrieval and management.",

        whyItMatters:
            "Databases allow applications to store information such as accounts, products, messages, records, and settings.",

        example:
            "An online store might use a database to store products, customers, orders, and inventory.",

        deepDive:
            "Relational databases organize data into tables and commonly use SQL. Other database models include document, key-value, graph, and wide-column systems.",

        keyPoints: [
            "Databases store structured or semi-structured data.",
            "Relational databases use tables.",
            "SQL is widely used with relational databases.",
            "Applications communicate with databases through queries.",
            "Database security and backups are important."
        ],

        related: [
            "apis",
            "back-end-development",
            "data-structures"
        ]
    },


    binary: {
        title: "Binary",
        category: "Programming & Data",
        icon: "01",
        keywords: [
            "binary",
            "binary numbers",
            "bits",
            "bytes",
            "base 2"
        ],
        quickAnswer:
            "Binary is a base-2 number system that uses only 0 and 1 and is fundamental to digital computing.",

        howItWorks:
            "Digital systems represent information using bits. A bit can have one of two states, commonly represented as 0 or 1.",

        whyItMatters:
            "Computers use digital electronics that naturally represent information using two-state signals, making binary fundamental to computing.",

        example:
            "Eight binary bits make one byte. A byte can represent 256 different combinations.",

        deepDive:
            "Binary representations are used for numbers, text, instructions, colors, files, network packets, and virtually every kind of digital information.",

        keyPoints: [
            "Binary uses two symbols: 0 and 1.",
            "A bit is a binary digit.",
            "Eight bits make a byte.",
            "Computers represent digital information using bits.",
            "Binary is a base-2 number system."
        ],

        related: [
            "machine-code",
            "cpu",
            "data-structures"
        ]
    },


    "data-structures": {
        title: "Data Structures",
        category: "Programming & Data",
        icon: "🗂️",
        keywords: [
            "data structures",
            "arrays",
            "lists",
            "stacks",
            "queues",
            "trees"
        ],
        quickAnswer:
            "Data structures are ways of organizing and storing data so programs can use it efficiently.",

        howItWorks:
            "Different data structures provide different ways to store, access, search, and modify information.",

        whyItMatters:
            "Choosing an appropriate data structure can make software easier to build and more efficient.",

        example:
            "An array can store an ordered collection of values, while a queue can represent items waiting to be processed.",

        deepDive:
            "Common data structures include arrays, linked lists, stacks, queues, hash tables, trees, graphs, and heaps.",

        keyPoints: [
            "Data structures organize information.",
            "Different structures have different strengths.",
            "Arrays provide indexed access.",
            "Hash tables can provide fast key-based lookup.",
            "Trees and graphs represent relationships."
        ],

        related: [
            "algorithms",
            "programming",
            "databases"
        ]
    },


    "version-control": {
        title: "Version Control",
        category: "Programming & Data",
        icon: "🕒",
        keywords: [
            "version control",
            "git",
            "github",
            "source control",
            "repositories"
        ],
        quickAnswer:
            "Version control systems track changes to files so developers can collaborate, review history, and restore earlier versions.",

        howItWorks:
            "Developers create commits or other recorded changes. Systems such as Git maintain a history that can be branched, merged, compared, and shared.",

        whyItMatters:
            "Version control helps developers manage projects safely and collaborate without losing previous work.",

        example:
            "A developer can use Git to save changes to a website and later return to an earlier version if a change causes a problem.",

        deepDive:
            "Git is a distributed version-control system. Platforms such as GitHub provide collaboration features around Git repositories.",

        keyPoints: [
            "Version control tracks changes.",
            "Git is a popular version-control system.",
            "Commits record project history.",
            "Branches allow separate lines of development.",
            "Version control helps teams collaborate."
        ],

        related: [
            "programming",
            "debugging",
            "web-development"
        ]
    },


    "object-oriented-programming": {
        title: "Object-Oriented Programming",
        category: "Programming & Data",
        icon: "🧱",
        keywords: [
            "oop",
            "object oriented programming",
            "classes",
            "objects",
            "inheritance"
        ],
        quickAnswer:
            "Object-oriented programming is a programming approach that organizes software around objects containing data and behavior.",

        howItWorks:
            "Programs define classes or other object structures that describe data and behavior. Objects are created from those structures and interact with each other.",

        whyItMatters:
            "OOP can help organize large software projects by grouping related state and behavior into reusable components.",

        example:
            "A game might define a Player class containing information such as health and methods such as move().",

        deepDive:
            "Common OOP concepts include encapsulation, inheritance, polymorphism, and abstraction. Different languages implement these concepts differently.",

        keyPoints: [
            "OOP organizes software around objects.",
            "Objects can contain data and behavior.",
            "Classes are commonly used as blueprints.",
            "Encapsulation hides internal implementation details.",
            "Inheritance and polymorphism are common OOP concepts."
        ],

        related: [
            "programming",
            "functions",
            "data-structures"
        ]
    },


    loops: {
        title: "Loops",
        category: "Programming & Data",
        icon: "🔁",
        keywords: [
            "loops",
            "loop",
            "for loop",
            "while loop",
            "iteration"
        ],
        quickAnswer:
            "Loops repeatedly execute a block of code while a condition remains satisfied or for a defined number of iterations.",

        howItWorks:
            "A loop evaluates a condition or sequence and repeatedly executes its body until the loop should stop.",

        whyItMatters:
            "Loops allow programs to process collections of data and repeat operations without writing the same code many times.",

        example:
            "A loop can examine every item in a list and perform an operation on each item.",

        deepDive:
            "Common loop types include for loops, while loops, and language-specific iteration constructs. Loops can contain conditions that control when they continue or stop.",

        keyPoints: [
            "Loops repeat code.",
            "Loops can iterate through collections.",
            "For and while loops are common.",
            "Loop conditions determine when execution continues.",
            "Infinite loops occur when a loop never reaches its stopping condition."
        ],

        related: [
            "conditional-statements",
            "algorithms",
            "programming"
        ]
    },


    "conditional-statements": {
        title: "Conditional Statements",
        category: "Programming & Data",
        icon: "🔀",
        keywords: [
            "conditionals",
            "if statements",
            "else",
            "conditional statements",
            "programming logic"
        ],
        quickAnswer:
            "Conditional statements allow programs to make decisions based on whether a condition is true or false.",

        howItWorks:
            "The program evaluates an expression and executes different code depending on the result.",

        whyItMatters:
            "Conditional logic allows programs to respond differently to different inputs and situations.",

        example:
            "A program could check whether a user's password is correct and display a different result depending on the answer.",

        deepDive:
            "Common conditional structures include if, else if, and else. Many languages also provide switch or match-style constructs.",

        keyPoints: [
            "Conditionals allow programs to make decisions.",
            "if statements are common.",
            "Conditions evaluate to true or false.",
            "else branches handle alternative cases.",
            "Conditional logic is fundamental to algorithms."
        ],

        related: [
            "loops",
            "algorithms",
            "programming"
        ]
    },


    "data-types": {
        title: "Data Types",
        category: "Programming & Data",
        icon: "🏷️",
        keywords: [
            "data types",
            "types",
            "string",
            "integer",
            "boolean",
            "programming data"
        ],
        quickAnswer:
            "Data types describe the kind of value a program is working with and how that value can be used.",

        howItWorks:
            "A programming language defines types and rules for operations that can be performed on values. Some languages require explicit type declarations while others infer them.",

        whyItMatters:
            "Data types help programs represent information correctly and can prevent invalid operations.",

        example:
            "A program might use an integer for a count, a string for a name, and a Boolean for a true-or-false setting.",

        deepDive:
            "Common types include integers, floating-point numbers, strings, Booleans, arrays, objects, and null-like values. Exact types differ between languages.",

        keyPoints: [
            "Data types describe kinds of values.",
            "Strings represent text.",
            "Integers represent whole numbers.",
            "Booleans represent true or false.",
            "Different languages have different type systems."
        ],

        related: [
            "variables",
            "programming-languages",
            "functions"
        ]
    },


    "debugging": {
        title: "Debugging",
        category: "Programming & Data",
        icon: "🐛",
        keywords: [
            "debugging",
            "bugs",
            "debugger",
            "programming errors",
            "troubleshooting code"
        ],
        quickAnswer:
            "Debugging is the process of finding, understanding, and fixing problems in software.",

        howItWorks:
            "Developers reproduce a problem, inspect program behavior, identify the cause, make a change, and test the result.",

        whyItMatters:
            "Software rarely works perfectly on the first attempt. Debugging is a fundamental programming skill.",

        example:
            "If a program produces the wrong result, a developer can use logging or a debugger to inspect variables and determine where the problem occurs.",

        deepDive:
            "Debugging techniques include breakpoints, stack traces, logging, test cases, tracing program state, code review, and reducing a problem to a smaller reproducible example.",

        keyPoints: [
            "Debugging finds and fixes software problems.",
            "Reproducing a bug helps identify its cause.",
            "Debuggers can pause program execution.",
            "Logs provide information about program behavior.",
            "Testing after a fix helps confirm the problem was resolved."
        ],

        related: [
            "programming",
            "functions",
            "version-control"
        ]
    },


    "compilers-interpreters": {
        title: "Compilers and Interpreters",
        category: "Programming & Data",
        icon: "⚙️",
        keywords: [
            "compiler",
            "interpreter",
            "compilation",
            "program execution",
            "source code"
        ],
        quickAnswer:
            "Compilers and interpreters are tools or systems that help turn programming-language code into executable behavior.",

        howItWorks:
            "A compiler generally translates source code into another form before execution, while an interpreter or runtime can execute code through interpretation or other runtime mechanisms. Modern systems often combine multiple techniques.",

        whyItMatters:
            "Understanding compilation and interpretation helps explain how human-readable source code becomes executable by computers.",

        example:
            "A C program can be compiled into machine-code instructions that a computer processor can execute.",

        deepDive:
            "Compilation can include parsing, semantic analysis, optimization, code generation, and linking. Interpreted languages may also use bytecode, just-in-time compilation, or virtual machines.",

        keyPoints: [
            "Compilers translate source code.",
            "Interpreters execute code through a runtime process.",
            "Modern languages can use hybrid approaches.",
            "Compilation can include optimization.",
            "Machine code is ultimately executed by processors."
        ],

        related: [
            "programming-languages",
            "machine-code",
            "cpu"
        ]
    },


    "machine-code": {
        title: "Machine Code",
        category: "Programming & Data",
        icon: "🔢",
        keywords: [
            "machine code",
            "machine language",
            "cpu instructions",
            "assembly",
            "low level code"
        ],
        quickAnswer:
            "Machine code is the low-level instruction format that a processor executes directly.",

        howItWorks:
            "A CPU fetches instructions from memory and decodes and executes them according to its instruction set architecture.",

        whyItMatters:
            "Machine code is the final low-level representation executed by a processor when running native programs.",

        example:
            "A compiler can translate a high-level programming language into machine instructions appropriate for a particular CPU architecture.",

        deepDive:
            "Machine code is architecture-specific. x86-64, ARM64, and other processor architectures use different instruction sets.",

        keyPoints: [
            "Machine code is executed by CPUs.",
            "It is architecture-specific.",
            "Compilers can generate machine code.",
            "Assembly language provides a more readable representation of many machine instructions.",
            "Different CPU architectures use different instruction sets."
        ],

        related: [
            "cpu",
            "binary",
            "compilers-interpreters",
            "programming-languages"
        ]
    },


    /* =================================================
       ARTIFICIAL INTELLIGENCE & MODERN TECHNOLOGY
    ================================================= */

    "artificial-intelligence": {
        title: "Artificial Intelligence",
        category: "Artificial Intelligence",
        icon: "🤖",
        keywords: [
            "ai",
            "artificial intelligence",
            "machine intelligence",
            "ai systems"
        ],
        quickAnswer:
            "Artificial intelligence is a broad field focused on building systems that perform tasks associated with human-like reasoning, perception, learning, or decision-making.",

        howItWorks:
            "AI systems can use rules, search, statistical models, machine learning, neural networks, and other techniques to process information and produce outputs.",

        whyItMatters:
            "AI is used in areas such as language processing, computer vision, recommendation systems, automation, science, and robotics.",

        example:
            "An AI system can analyze text and generate a response based on patterns learned from data.",

        deepDive:
            "AI includes many approaches. Machine learning is a major area where models learn patterns from data rather than relying entirely on manually written rules.",

        keyPoints: [
            "AI is a broad field.",
            "Machine learning is a major AI technique.",
            "AI can process many kinds of data.",
            "AI systems can be used for prediction and generation.",
            "AI performance depends on the system, data, and task."
        ],

        related: [
            "machine-learning",
            "gpu",
            "cloud-computing",
            "programming"
        ]
    },


    "machine-learning": {
        title: "Machine Learning",
        category: "Artificial Intelligence",
        icon: "🧠",
        keywords: [
            "machine learning",
            "ml",
            "models",
            "training",
            "ai"
        ],
        quickAnswer:
            "Machine learning is a field where algorithms learn patterns from data to make predictions or generate outputs.",

        howItWorks:
            "A model is trained using data. During training, the system adjusts internal parameters to reduce errors according to a chosen objective.",

        whyItMatters:
            "Machine learning can solve problems that are difficult to program using explicit rules alone.",

        example:
            "A machine-learning model can be trained to recognize patterns in images.",

        deepDive:
            "Major machine-learning approaches include supervised learning, unsupervised learning, and reinforcement learning. Neural networks are widely used for many modern applications.",

        keyPoints: [
            "Machine learning learns patterns from data.",
            "Training adjusts model parameters.",
            "Models can make predictions or generate outputs.",
            "Different learning approaches exist.",
            "Data quality affects model performance."
        ],

        related: [
            "artificial-intelligence",
            "gpu",
            "data-structures"
        ]
    },


    "cloud-computing": {
        title: "Cloud Computing",
        category: "Modern Technology",
        icon: "☁️",
        keywords: [
            "cloud",
            "cloud computing",
            "cloud services",
            "aws",
            "azure"
        ],
        quickAnswer:
            "Cloud computing provides computing resources and services over networks, commonly the Internet.",

        howItWorks:
            "Cloud providers operate large collections of servers, storage systems, and networking equipment. Customers access resources through web interfaces, APIs, or other tools.",

        whyItMatters:
            "Cloud computing allows organizations and individuals to use computing resources without owning all of the underlying hardware.",

        example:
            "A developer can deploy a web application to a cloud platform instead of maintaining a physical server at home.",

        deepDive:
            "Cloud services include virtual machines, containers, databases, object storage, serverless computing, networking, monitoring, and managed services.",

        keyPoints: [
            "Cloud computing provides remote computing resources.",
            "Cloud providers operate large infrastructure.",
            "Cloud services can scale resources.",
            "Virtualization is commonly used in cloud infrastructure.",
            "Cloud services can be managed through APIs."
        ],

        related: [
            "virtualization",
            "data-centers",
            "server",
            "apis"
        ]
    },


    virtualization: {
        title: "Virtualization",
        category: "Modern Technology",
        icon: "🖥️",
        keywords: [
            "virtualization",
            "virtual machine",
            "vm",
            "hypervisor"
        ],
        quickAnswer:
            "Virtualization allows physical computing resources to host simulated or abstracted computing environments.",

        howItWorks:
            "A hypervisor manages virtual machines and allocates hardware resources such as CPU, memory, storage, and networking to them.",

        whyItMatters:
            "Virtualization allows multiple isolated environments to run on the same physical hardware.",

        example:
            "A developer can run a Linux virtual machine inside a Windows computer for testing software.",

        deepDive:
            "Virtualization can be implemented using different types of hypervisors. Modern processors provide hardware virtualization features that improve performance and isolation.",

        keyPoints: [
            "Virtualization creates abstracted computing environments.",
            "Virtual machines can run separate operating systems.",
            "Hypervisors manage virtual machines.",
            "Virtualization is common in cloud computing.",
            "Multiple VMs can share physical hardware."
        ],

        related: [
            "cloud-computing",
            "operating-system",
            "data-centers"
        ]
    },


    "data-centers": {
        title: "Data Centers",
        category: "Modern Technology",
        icon: "🏢",
        keywords: [
            "data center",
            "datacenter",
            "servers",
            "cloud infrastructure"
        ],
        quickAnswer:
            "A data center is a facility containing computing, storage, networking, power, cooling, and other infrastructure.",

        howItWorks:
            "Data centers house servers and networking equipment and provide systems for power, cooling, monitoring, physical security, and connectivity.",

        whyItMatters:
            "Data centers provide the physical infrastructure behind websites, cloud services, applications, databases, and many Internet services.",

        example:
            "A cloud provider may operate large data centers containing thousands of servers.",

        deepDive:
            "Data centers are designed for reliability and efficiency and may use redundant power systems, network connections, cooling systems, and backup infrastructure.",

        keyPoints: [
            "Data centers contain computing infrastructure.",
            "Servers are a major component.",
            "Cooling is essential.",
            "Reliable power is essential.",
            "Redundancy improves availability."
        ],

        related: [
            "server",
            "cloud-computing",
            "virtualization",
            "computer-cooling"
        ]
    },


    iot: {
        title: "Internet of Things (IoT)",
        category: "Modern Technology",
        icon: "📡",
        keywords: [
            "iot",
            "internet of things",
            "smart devices",
            "connected devices"
        ],
        quickAnswer:
            "The Internet of Things refers to physical devices that contain computing and networking capabilities and can exchange data.",

        howItWorks:
            "IoT devices use sensors, processors, software, and network connections to collect and exchange information.",

        whyItMatters:
            "IoT enables connected devices used in homes, industry, transportation, healthcare, agriculture, and many other areas.",

        example:
            "A smart thermostat can measure temperature and communicate with a mobile application.",

        deepDive:
            "IoT systems often involve edge devices, gateways, cloud services, APIs, databases, and security systems.",

        keyPoints: [
            "IoT connects physical devices to networks.",
            "Sensors collect information.",
            "Devices can communicate with cloud services.",
            "IoT security is important.",
            "IoT is used in homes and industry."
        ],

        related: [
            "internet",
            "cloud-computing",
            "cybersecurity"
        ]
    },


    blockchain: {
        title: "Blockchain",
        category: "Modern Technology",
        icon: "⛓️",
        keywords: [
            "blockchain",
            "distributed ledger",
            "cryptocurrency",
            "blocks"
        ],
        quickAnswer:
            "A blockchain is a type of distributed ledger that records data in linked blocks using cryptographic techniques.",

        howItWorks:
            "Transactions or other records are grouped into blocks. Network participants use a consensus mechanism to agree on which blocks are added to the ledger.",

        whyItMatters:
            "Blockchain technology provides a way for multiple participants to maintain a shared record without relying on a single central database in some system designs.",

        example:
            "Cryptocurrency networks can use blockchains to record transactions.",

        deepDive:
            "Blockchain systems vary significantly. Important concepts include hashing, digital signatures, consensus mechanisms, distributed networks, and smart contracts.",

        keyPoints: [
            "Blockchains use linked records.",
            "Cryptographic hashes help connect blocks.",
            "Distributed networks maintain copies of the ledger.",
            "Consensus mechanisms determine accepted updates.",
            "Blockchain designs vary widely."
        ],

        related: [
            "cybersecurity",
            "binary",
            "databases"
        ]
    },


    "quantum-computing": {
        title: "Quantum Computing",
        category: "Modern Technology",
        icon: "⚛️",
        keywords: [
            "quantum computing",
            "quantum computer",
            "qubits",
            "quantum"
        ],
        quickAnswer:
            "Quantum computing uses quantum-mechanical phenomena to process information in ways that differ from classical computing.",

        howItWorks:
            "Quantum computers use quantum bits, or qubits. Quantum algorithms can manipulate quantum states using operations that have no direct classical equivalent.",

        whyItMatters:
            "Quantum computing could provide advantages for certain specialized problems, although practical quantum systems remain challenging to build and operate.",

        example:
            "Researchers are studying quantum algorithms for areas such as chemistry, optimization, and cryptography.",

        deepDive:
            "Quantum systems can experience decoherence and require careful control and error management. Quantum computing does not simply replace classical computers for every task.",

        keyPoints: [
            "Quantum computers use qubits.",
            "Qubits differ from classical bits.",
            "Quantum algorithms are specialized.",
            "Quantum systems are difficult to control.",
            "Quantum computing and classical computing have different strengths."
        ],

        related: [
            "binary",
            "artificial-intelligence",
            "cybersecurity"
        ]
    },


    "how-computers-work-together": {
        title: "How Computers Work Together",
        category: "Modern Technology",
        icon: "🔗",
        keywords: [
            "computers working together",
            "computer networks",
            "distributed systems",
            "network communication"
        ],
        quickAnswer:
            "Computers work together by communicating across networks using standardized protocols and shared services.",

        howItWorks:
            "Devices exchange data using network protocols. Servers provide services, clients request them, and routers and switches move traffic between systems.",

        whyItMatters:
            "Modern technology depends on many computers cooperating rather than one computer doing everything.",

        example:
            "When you use a website, your device may communicate with DNS servers, web servers, databases, content delivery systems, and other services.",

        deepDive:
            "Distributed systems divide work across multiple computers. Cloud applications may use many services and servers working together behind the scenes.",

        keyPoints: [
            "Computers communicate through networks.",
            "Protocols define how systems communicate.",
            "Servers provide services.",
            "Distributed systems divide work.",
            "Modern applications can depend on many computers."
        ],

        related: [
            "internet",
            "server",
            "apis",
            "cloud-computing",
            "data-centers"
        ]
    },


    /* =================================================
       CYBERSECURITY
    ================================================= */

    cybersecurity: {
        title: "Cybersecurity",
        category: "Cybersecurity",
        icon: "🔐",
        keywords: [
            "cybersecurity",
            "security",
            "information security",
            "computer security",
            "cyber"
        ],
        quickAnswer:
            "Cybersecurity is the practice of protecting computers, networks, applications, systems, and data from unauthorized access, disruption, or misuse.",

        howItWorks:
            "Cybersecurity uses multiple layers of protection including authentication, access controls, encryption, secure software development, monitoring, backups, network security, and user education.",

        whyItMatters:
            "Cybersecurity helps protect personal information, businesses, critical infrastructure, and digital services.",

        example:
            "Using strong authentication, keeping software updated, and backing up important files are basic security practices.",

        deepDive:
            "Cybersecurity includes defensive areas such as endpoint security, network security, application security, identity management, incident response, vulnerability management, and security monitoring.",

        keyPoints: [
            "Cybersecurity protects digital systems.",
            "Security is a layered process.",
            "Authentication verifies identity.",
            "Access control limits permissions.",
            "Updates and backups are important defensive measures."
        ],

        related: [
            "firewall",
            "vpn",
            "proxy-server",
            "software-updates",
            "linux"
        ]
    },


    subnetting: {
        title: "Subnetting",
        category: "Internet & Networking",
        icon: "🧮",
        keywords: [
            "subnetting",
            "subnet",
            "subnet mask",
            "cidr",
            "network address"
        ],
        quickAnswer:
            "Subnetting divides an IP network into smaller logical networks called subnets.",

        howItWorks:
            "A subnet mask or CIDR prefix determines which part of an IP address identifies the network and which part identifies hosts within that network.",

        whyItMatters:
            "Subnetting helps organize networks, control address usage, separate traffic, and design scalable network architectures.",

        example:
            "A company can divide one larger private network into separate subnets for employees, servers, and guest devices.",

        deepDive:
            "IPv4 subnetting uses a subnet mask or prefix length such as /24. IPv6 also uses prefix lengths to define network boundaries.",

        keyPoints: [
            "Subnetting divides networks.",
            "Subnet masks define network boundaries.",
            "CIDR notation uses prefix lengths.",
            "Subnetting helps organize IP addresses.",
            "Subnets can improve network segmentation."
        ],

        related: [
            "ip-address",
            "router",
            "dhcp",
            "network-switch"
        ]
    },


    vpn: {
        title: "VPN (Virtual Private Network)",
        category: "Cybersecurity",
        icon: "🛡️",
        keywords: [
            "vpn",
            "virtual private network",
            "encrypted tunnel",
            "vpn security"
        ],
        quickAnswer:
            "A VPN creates a protected network connection between a device and another network or VPN endpoint.",

        howItWorks:
            "VPN protocols establish an encrypted tunnel or otherwise protected connection through an untrusted network. Traffic is then routed through the VPN connection according to its configuration.",

        whyItMatters:
            "VPNs can help protect network traffic on untrusted networks and provide secure access to private networks.",

        example:
            "A company employee can use a VPN to securely access internal company resources while working remotely.",

        deepDive:
            "VPN technologies include protocols such as WireGuard, IPsec, and OpenVPN. Security depends on correct configuration, strong authentication, and trustworthy endpoints.",

        keyPoints: [
            "VPN stands for Virtual Private Network.",
            "VPNs can protect traffic through encrypted connections.",
            "VPNs can provide remote access to private networks.",
            "Different VPN protocols have different designs.",
            "A VPN does not make someone completely anonymous online."
        ],

        related: [
            "cybersecurity",
            "ip-address",
            "http-https",
            "firewall"
        ]
    },


    "proxy-server": {
        title: "Proxy Server",
        category: "Cybersecurity",
        icon: "🔀",
        keywords: [
            "proxy",
            "proxy server",
            "forward proxy",
            "web proxy"
        ],
        quickAnswer:
            "A proxy server acts as an intermediary between a client and another network service.",

        howItWorks:
            "Instead of connecting directly to a destination, a client sends a request to the proxy. The proxy can then make the request and return the response.",

        whyItMatters:
            "Proxies can provide filtering, caching, access control, traffic inspection, or routing through another network location.",

        example:
            "An organization may use a proxy to filter web traffic and enforce network access policies.",

        deepDive:
            "Forward proxies serve clients, while reverse proxies sit in front of servers. Reverse proxies can provide load balancing, caching, TLS termination, and application protection.",

        keyPoints: [
            "A proxy is an intermediary.",
            "Forward proxies typically serve clients.",
            "Reverse proxies typically sit in front of servers.",
            "Proxies can filter or inspect traffic.",
            "Proxies and VPNs are different technologies."
        ],

        related: [
            "vpn",
            "server",
            "http-https",
            "firewall"
        ]
    },


    firewall: {
        title: "Firewall",
        category: "Cybersecurity",
        icon: "🔥",
        keywords: [
            "firewall",
            "network firewall",
            "security firewall",
            "packet filtering"
        ],
        quickAnswer:
            "A firewall controls network traffic according to defined security rules.",

        howItWorks:
            "A firewall examines traffic and decides whether to allow, block, or otherwise handle it based on rules such as addresses, ports, protocols, applications, or connection state.",

        whyItMatters:
            "Firewalls help reduce unauthorized network access and can enforce security boundaries between networks or systems.",

        example:
            "A home router can block unsolicited inbound connections from the Internet while allowing established connections from devices inside the network.",

        deepDive:
            "Firewalls can be network-based or host-based. Advanced firewalls may use stateful inspection, application awareness, intrusion prevention, or other security technologies.",

        keyPoints: [
            "Firewalls control network traffic.",
            "Rules determine what traffic is allowed.",
            "Firewalls can exist on hosts or networks.",
            "Stateful firewalls track connection state.",
            "Firewalls are one layer of security."
        ],

        related: [
            "cybersecurity",
            "router",
            "vpn",
            "proxy-server"
        ]
    },


    cdn: {
        title: "CDN (Content Delivery Network)",
        category: "Internet & Networking",
        icon: "🌎",
        keywords: [
            "cdn",
            "content delivery network",
            "website performance",
            "edge server",
            "caching"
        ],
        quickAnswer:
            "A CDN is a distributed network of servers that delivers content from locations closer to users.",

        howItWorks:
            "A CDN stores or retrieves copies of content at edge locations. User requests can be directed to an appropriate edge server, reducing the distance data must travel.",

        whyItMatters:
            "CDNs can improve website performance, reduce load on origin servers, and help absorb large amounts of traffic.",

        example:
            "A website can use a CDN to deliver images, JavaScript, CSS, videos, and other static content from locations around the world.",

        deepDive:
            "CDNs use caching, routing, distributed infrastructure, and sometimes edge computing. Many CDNs also provide security features such as DDoS mitigation.",

        keyPoints: [
            "CDN stands for Content Delivery Network.",
            "CDNs use distributed edge servers.",
            "Caching can reduce latency.",
            "CDNs reduce load on origin servers.",
            "Many CDNs also provide security services."
        ],

        related: [
            "server",
            "dns",
            "http-https",
            "web-development",
            "cloud-computing"
        ]
    },


    "os-kernel": {
        title: "Operating-System Kernel",
        category: "Operating Systems",
        icon: "⚙️",
        keywords: [
            "kernel",
            "operating system kernel",
            "os kernel",
            "kernel mode",
            "system calls"
        ],
        quickAnswer:
            "The kernel is the central part of an operating system that manages hardware resources and provides core services to software.",

        howItWorks:
            "The kernel manages processes, memory, hardware devices, files, networking, and other low-level resources. Applications interact with many kernel services through system calls.",

        whyItMatters:
            "The kernel provides the controlled layer between applications and the computer's hardware.",

        example:
            "When an application needs to read a file from storage, it can request the operating system to perform the operation rather than directly controlling the storage hardware.",

        deepDive:
            "Kernel designs include monolithic, microkernel, hybrid, and other approaches. Modern operating systems use privilege levels to help isolate sensitive kernel operations from ordinary applications.",

        keyPoints: [
            "The kernel is central to an operating system.",
            "It manages hardware resources.",
            "It manages processes and memory.",
            "Applications use system calls to request many kernel services.",
            "Kernel code operates with higher privileges than normal applications."
        ],

        related: [
            "operating-system",
            "linux",
            "computer-processes",
            "virtual-memory"
        ]
    }

};


/* =====================================================
   LEARNING PATHS
===================================================== */

const learningPaths = {

    cpu: [
        "Learn how CPUs execute instructions.",
        "Understand CPU cores and threads.",
        "Learn about CPU cache.",
        "Study clock speed and CPU architecture.",
        "Compare different processor designs.",
        "Learn how the CPU works with RAM and storage."
    ],

    ram: [
        "Understand what RAM stores.",
        "Learn the difference between RAM and storage.",
        "Understand memory capacity.",
        "Learn about memory speed.",
        "Understand virtual memory.",
        "Study how RAM affects multitasking."
    ],

    gpu: [
        "Learn what a GPU does.",
        "Understand graphics processing.",
        "Learn about GPU cores.",
        "Understand VRAM.",
        "Compare integrated and dedicated graphics.",
        "Study how GPUs are used for AI."
    ],

    ssd: [
        "Understand how SSD storage works.",
        "Learn about flash memory.",
        "Compare SATA and NVMe.",
        "Understand storage performance.",
        "Learn about SSD endurance.",
        "Study how file systems use storage."
    ],

    hdd: [
        "Understand magnetic storage.",
        "Learn how HDD platters work.",
        "Understand read/write heads.",
        "Learn about drive performance.",
        "Compare HDDs and SSDs.",
        "Study common HDD uses."
    ],

    motherboard: [
        "Learn the purpose of a motherboard.",
        "Identify CPU sockets.",
        "Understand RAM slots.",
        "Learn about PCIe.",
        "Study motherboard connectors.",
        "Understand how components communicate."
    ],

    psu: [
        "Learn what a PSU does.",
        "Understand AC and DC power.",
        "Learn about PSU wattage.",
        "Understand power connectors.",
        "Learn about PSU efficiency.",
        "Study how to estimate system power requirements."
    ],

    "computer-cooling": [
        "Understand why computers produce heat.",
        "Learn about heatsinks.",
        "Understand thermal paste.",
        "Learn how fans move air.",
        "Compare air and liquid cooling.",
        "Study computer airflow."
    ],

    "bios-uefi": [
        "Understand computer firmware.",
        "Learn how startup works.",
        "Understand BIOS and UEFI.",
        "Learn about boot order.",
        "Study Secure Boot.",
        "Explore firmware configuration."
    ],

    "computer-ports": [
        "Identify common computer ports.",
        "Learn about USB.",
        "Learn about HDMI and DisplayPort.",
        "Understand Ethernet ports.",
        "Learn about USB-C.",
        "Study connector differences."
    ],

    "operating-system": [
        "Understand what an operating system does.",
        "Learn about the kernel.",
        "Study process management.",
        "Learn about memory management.",
        "Understand file systems.",
        "Study operating-system security."
    ],

    windows: [
        "Understand the Windows operating system.",
        "Learn Windows file management.",
        "Understand processes.",
        "Explore Windows settings.",
        "Learn Windows security features.",
        "Study Windows troubleshooting."
    ],

    linux: [
        "Understand the Linux kernel.",
        "Learn what Linux distributions are.",
        "Learn basic Linux commands.",
        "Understand Linux file systems.",
        "Study Linux permissions.",
        "Explore Linux in cybersecurity."
    ],

    macos: [
        "Understand macOS.",
        "Learn macOS file management.",
        "Explore system settings.",
        "Understand macOS security.",
        "Learn about applications.",
        "Study the macOS architecture."
    ],

    applications: [
        "Understand what applications are.",
        "Learn how apps use operating systems.",
        "Study application files.",
        "Learn about application permissions.",
        "Understand application updates.",
        "Study application security."
    ],

    "device-drivers": [
        "Understand what drivers do.",
        "Learn how drivers communicate with hardware.",
        "Study graphics drivers.",
        "Learn about network drivers.",
        "Understand driver updates.",
        "Study driver troubleshooting."
    ],

    "file-system": [
        "Understand what a file system does.",
        "Learn about files and directories.",
        "Study file metadata.",
        "Learn about permissions.",
        "Compare common file systems.",
        "Understand storage organization."
    ],

    "computer-processes": [
        "Understand what a process is.",
        "Learn how processes use memory.",
        "Study CPU scheduling.",
        "Understand process states.",
        "Learn about threads.",
        "Study process isolation."
    ],

    "virtual-memory": [
        "Understand virtual memory.",
        "Learn about virtual addresses.",
        "Study memory pages.",
        "Understand page tables.",
        "Learn about swap.",
        "Study memory isolation."
    ],

    "software-updates": [
        "Understand software patches.",
        "Learn why security updates matter.",
        "Study update systems.",
        "Understand version numbers.",
        "Learn about automatic updates.",
        "Study update management."
    ],

    internet: [
        "Understand what the Internet is.",
        "Learn about IP addresses.",
        "Understand routers.",
        "Study DNS.",
        "Learn about HTTP and HTTPS.",
        "Explore how websites communicate."
    ],

    wifi: [
        "Understand wireless networking.",
        "Learn about access points.",
        "Study Wi-Fi standards.",
        "Understand Wi-Fi security.",
        "Learn about wireless interference.",
        "Study home Wi-Fi networks."
    ],

    ethernet: [
        "Understand Ethernet.",
        "Learn about network cables.",
        "Study Ethernet speeds.",
        "Understand switches.",
        "Learn about LANs.",
        "Study wired network troubleshooting."
    ],

    router: [
        "Understand what routers do.",
        "Learn about routing.",
        "Study IP addresses.",
        "Understand NAT.",
        "Learn about DHCP.",
        "Study router security."
    ],

    "network-switch": [
        "Understand what a network switch does.",
        "Learn about MAC addresses.",
        "Study Ethernet frames.",
        "Understand managed switches.",
        "Learn about VLANs.",
        "Study network segmentation."
    ],

    "ip-address": [
        "Understand IP addresses.",
        "Learn IPv4.",
        "Learn IPv6.",
        "Understand private addresses.",
        "Study subnetting.",
        "Learn how routers use IP addresses."
    ],

    dns: [
        "Understand domain names.",
        "Learn how DNS resolution works.",
        "Study DNS records.",
        "Understand DNS caching.",
        "Learn about recursive resolvers.",
        "Study DNS security."
    ],

    dhcp: [
        "Understand DHCP.",
        "Learn how devices receive IP addresses.",
        "Study DHCP leases.",
        "Understand gateways.",
        "Learn about DNS configuration.",
        "Study DHCP troubleshooting."
    ],

    "http-https": [
        "Understand HTTP.",
        "Learn HTTP requests and responses.",
        "Understand HTTPS.",
        "Study TLS.",
        "Learn about digital certificates.",
        "Explore secure web communication."
    ],

    "web-browser": [
        "Understand how browsers work.",
        "Learn about HTML.",
        "Learn about CSS.",
        "Study JavaScript.",
        "Explore browser developer tools.",
        "Study browser security."
    ],

    server: [
        "Understand what a server is.",
        "Learn about web servers.",
        "Study server operating systems.",
        "Understand APIs.",
        "Learn about databases.",
        "Explore cloud servers."
    ],

    html: [
        "Understand HTML structure.",
        "Learn common HTML elements.",
        "Study semantic HTML.",
        "Learn links and images.",
        "Understand forms.",
        "Build a simple webpage."
    ],

    css: [
        "Understand CSS selectors.",
        "Learn the box model.",
        "Study colors and typography.",
        "Learn Flexbox.",
        "Learn CSS Grid.",
        "Build responsive layouts."
    ],

    javascript: [
        "Learn JavaScript syntax.",
        "Understand variables and data types.",
        "Study functions.",
        "Learn conditionals and loops.",
        "Understand DOM manipulation.",
        "Build an interactive webpage."
    ],

    "web-development": [
        "Understand how websites work.",
        "Learn HTML.",
        "Learn CSS.",
        "Learn JavaScript.",
        "Understand servers and APIs.",
        "Build and deploy a website."
    ],

    "front-end-development": [
        "Learn HTML structure.",
        "Study CSS layout.",
        "Learn JavaScript.",
        "Understand browser APIs.",
        "Study accessibility.",
        "Learn front-end performance."
    ],

    "back-end-development": [
        "Understand servers.",
        "Learn server-side programming.",
        "Study APIs.",
        "Learn databases.",
        "Understand authentication.",
        "Study back-end security."
    ],

    "full-stack-development": [
        "Understand front-end development.",
        "Learn back-end development.",
        "Study APIs.",
        "Learn databases.",
        "Understand deployment.",
        "Build a complete web application."
    ],

    programming: [
        "Understand programming fundamentals.",
        "Learn variables and data types.",
        "Study conditionals.",
        "Learn loops.",
        "Study functions.",
        "Build small programs."
    ],

    "programming-languages": [
        "Understand what programming languages are.",
        "Learn high-level vs low-level languages.",
        "Study compiled languages.",
        "Study interpreted languages.",
        "Compare programming languages.",
        "Choose a language for a project."
    ],

    algorithms: [
        "Understand algorithms.",
        "Learn searching.",
        "Learn sorting.",
        "Study algorithm efficiency.",
        "Understand recursion.",
        "Practice problem solving."
    ],

    variables: [
        "Understand variables.",
        "Learn common data types.",
        "Study variable scope.",
        "Learn assignment.",
        "Understand constants.",
        "Practice using variables."
    ],

    functions: [
        "Understand functions.",
        "Learn parameters.",
        "Learn return values.",
        "Study scope.",
        "Understand reusable code.",
        "Build programs using functions."
    ],

    apis: [
        "Understand what an API is.",
        "Learn HTTP APIs.",
        "Study requests and responses.",
        "Understand JSON.",
        "Learn API authentication.",
        "Build a simple API client."
    ],

    databases: [
        "Understand databases.",
        "Learn tables and records.",
        "Study SQL.",
        "Understand database relationships.",
        "Learn database queries.",
        "Study database security."
    ],

    binary: [
        "Understand binary numbers.",
        "Learn bits and bytes.",
        "Practice binary conversion.",
        "Understand hexadecimal.",
        "Learn how computers represent data.",
        "Study machine instructions."
    ],

    "data-structures": [
        "Understand data structures.",
        "Learn arrays.",
        "Study linked lists.",
        "Learn stacks and queues.",
        "Study hash tables.",
        "Explore trees and graphs."
    ],

    "version-control": [
        "Understand version control.",
        "Learn Git.",
        "Create commits.",
        "Learn branches.",
        "Understand merging.",
        "Use GitHub for collaboration."
    ],

    "object-oriented-programming": [
        "Understand objects.",
        "Learn classes.",
        "Study encapsulation.",
        "Learn inheritance.",
        "Understand polymorphism.",
        "Build an object-oriented program."
    ],

    loops: [
        "Understand repetition in programs.",
        "Learn for loops.",
        "Learn while loops.",
        "Understand loop conditions.",
        "Study nested loops.",
        "Practice iteration."
    ],

    "conditional-statements": [
        "Understand Boolean conditions.",
        "Learn if statements.",
        "Study else branches.",
        "Learn else-if logic.",
        "Understand nested conditions.",
        "Build decision-based programs."
    ],

    "data-types": [
        "Understand what data types are.",
        "Learn strings.",
        "Learn integers and floating-point numbers.",
        "Study Booleans.",
        "Understand arrays and objects.",
        "Compare type systems."
    ],

    debugging: [
        "Understand software bugs.",
        "Learn how to reproduce problems.",
        "Study logs.",
        "Learn debugger basics.",
        "Use breakpoints.",
        "Test and verify fixes."
    ],

    "compilers-interpreters": [
        "Understand source code.",
        "Learn what compilers do.",
        "Learn what interpreters do.",
        "Study compilation stages.",
        "Understand runtime systems.",
        "Learn how code reaches the CPU."
    ],

    "machine-code": [
        "Understand machine instructions.",
        "Learn about CPU instruction sets.",
        "Study binary representation.",
        "Understand assembly language.",
        "Learn how compilers generate machine code.",
        "Explore low-level programming."
    ],

    "artificial-intelligence": [
        "Understand artificial intelligence.",
        "Learn machine learning.",
        "Study neural networks.",
        "Explore AI applications.",
        "Learn about AI training.",
        "Study AI limitations."
    ],

    "machine-learning": [
        "Understand machine learning.",
        "Learn about training data.",
        "Study supervised learning.",
        "Study unsupervised learning.",
        "Learn about neural networks.",
        "Explore machine-learning applications."
    ],

    "cloud-computing": [
        "Understand cloud computing.",
        "Learn about cloud servers.",
        "Study virtual machines.",
        "Learn about cloud storage.",
        "Understand cloud networking.",
        "Explore cloud security."
    ],

    virtualization: [
        "Understand virtualization.",
        "Learn about virtual machines.",
        "Study hypervisors.",
        "Understand virtual networking.",
        "Learn about virtual storage.",
        "Explore cloud virtualization."
    ],

    "data-centers": [
        "Understand what data centers are.",
        "Learn about servers.",
        "Study networking.",
        "Understand power systems.",
        "Learn about cooling.",
        "Study data-center redundancy."
    ],

    iot: [
        "Understand IoT.",
        "Learn about sensors.",
        "Study connected devices.",
        "Understand IoT networking.",
        "Learn about IoT cloud services.",
        "Study IoT security."
    ],

    blockchain: [
        "Understand blockchain.",
        "Learn about blocks.",
        "Study cryptographic hashes.",
        "Understand distributed ledgers.",
        "Learn about consensus.",
        "Explore blockchain applications."
    ],

    "quantum-computing": [
        "Understand quantum computing.",
        "Learn about qubits.",
        "Study quantum states.",
        "Understand quantum gates.",
        "Explore quantum algorithms.",
        "Study quantum computing challenges."
    ],

    "how-computers-work-together": [
        "Understand computer networks.",
        "Learn client-server communication.",
        "Study protocols.",
        "Understand distributed systems.",
        "Learn about cloud infrastructure.",
        "Explore large-scale applications."
    ],

    cybersecurity: [
        "Understand cybersecurity.",
        "Learn authentication.",
        "Study access control.",
        "Learn network security.",
        "Understand encryption.",
        "Study defensive security."
    ],

    subnetting: [
        "Understand IP networks.",
        "Learn subnet masks.",
        "Study CIDR notation.",
        "Calculate network ranges.",
        "Understand network segmentation.",
        "Practice subnetting."
    ],

    vpn: [
        "Understand VPNs.",
        "Learn encrypted tunnels.",
        "Study VPN protocols.",
        "Understand remote access.",
        "Learn VPN limitations.",
        "Study VPN security."
    ],

    "proxy-server": [
        "Understand proxy servers.",
        "Learn forward proxies.",
        "Study reverse proxies.",
        "Understand traffic filtering.",
        "Learn about caching.",
        "Study proxy security."
    ],

    firewall: [
        "Understand firewalls.",
        "Learn traffic filtering.",
        "Study firewall rules.",
        "Understand stateful inspection.",
        "Learn host-based firewalls.",
        "Study firewall architecture."
    ],

    cdn: [
        "Understand CDNs.",
        "Learn about edge servers.",
        "Study caching.",
        "Understand DNS-based routing.",
        "Learn about CDN performance.",
        "Study CDN security."
    ],

    "os-kernel": [
        "Understand the operating-system kernel.",
        "Learn process management.",
        "Study memory management.",
        "Learn system calls.",
        "Understand kernel privileges.",
        "Explore kernel architecture."
    ]

};


/* =====================================================
   DEFAULT LEARNING PATHS
===================================================== */

function getLearningPath(topic) {

    if (learningPaths[topic]) {
        return learningPaths[topic];
    }

    const category = topics[topic]?.category;

    const defaultPaths = {

        "Computers": [
            "Understand the component.",
            "Learn how it works.",
            "Study its role in a computer.",
            "Learn how it connects to other components.",
            "Explore real-world examples.",
            "Review important concepts."
        ],

        "Operating Systems": [
            "Understand the operating-system concept.",
            "Learn its major components.",
            "Study how it manages resources.",
            "Explore real-world examples.",
            "Learn common problems.",
            "Review important concepts."
        ],

        "Software": [
            "Understand the software concept.",
            "Learn how it works.",
            "Study how software interacts with hardware.",
            "Explore real-world examples.",
            "Learn common problems.",
            "Review important concepts."
        ],

        "Internet & Networking": [
            "Understand the networking concept.",
            "Learn how devices communicate.",
            "Study important protocols.",
            "Explore real-world examples.",
            "Learn common networking problems.",
            "Review important concepts."
        ],

        "Programming": [
            "Understand the programming concept.",
            "Learn the basic syntax.",
            "Study how programs execute.",
            "Practice with examples.",
            "Build a small project.",
            "Review important concepts."
        ],

        "Programming & Data": [
            "Understand the programming concept.",
            "Learn the basic building blocks.",
            "Study practical examples.",
            "Practice using the concept.",
            "Build a small project.",
            "Review important concepts."
        ],

        "Web Development": [
            "Understand the web-development concept.",
            "Learn the technologies involved.",
            "Study how browsers and servers communicate.",
            "Practice building a small feature.",
            "Connect front-end and back-end concepts.",
            "Build a small web project."
        ],

        "Artificial Intelligence": [
            "Understand the AI concept.",
            "Learn the basic terminology.",
            "Study how AI systems work.",
            "Explore real-world applications.",
            "Learn about limitations.",
            "Review important concepts."
        ],

        "Modern Technology": [
            "Understand the technology.",
            "Learn its main components.",
            "Study how it works.",
            "Explore real-world applications.",
            "Learn its advantages and limitations.",
            "Review important concepts."
        ],

        "Cybersecurity": [
            "Understand the security concept.",
            "Learn how the technology works.",
            "Study common security risks.",
            "Learn defensive techniques.",
            "Explore real-world examples.",
            "Review important security concepts."
        ]
    };

    return (
        defaultPaths[category] ||
        [
            "Understand the topic.",
            "Learn the core concepts.",
            "Study how it works.",
            "Explore examples.",
            "Practice using what you learned.",
            "Review the important ideas."
        ]
    );
}


/* =====================================================
   DOM ELEMENTS
===================================================== */

const searchInput = document.getElementById("topicSearch");
const searchResults = document.getElementById("searchResults");
const searchStatus = document.getElementById("searchStatus");
const topicViewer = document.getElementById("topicViewer");


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   CREATE TOPIC CARD
===================================================== */

function createTopicCard(id, topic) {

    return `
        <article class="topic-card">

            <div class="topic-icon">
                ${topic.icon}
            </div>

            <div class="topic-card-content">

                <div class="topic-category">
                    ${topic.category}
                </div>

                <h3>
                    ${topic.title}
                </h3>

                <p>
                    ${topic.quickAnswer}
                </p>

                <button
                    class="topic-button"
                    onclick="openTopic('${id}')"
                >
                    Learn More →
                </button>

            </div>

        </article>
    `;
}


/* =====================================================
   SEARCH TOPICS
===================================================== */

function searchTopics() {

    const query = searchInput.value
        .trim()
        .toLowerCase();

    if (!query) {

        searchResults.innerHTML = `
            <div class="search-welcome">

                <h2>
                    Explore Computer Guide
                </h2>

                <p>
                    Search for a computer, programming,
                    Internet, AI, cybersecurity, or
                    technology topic to start learning.
                </p>

            </div>
        `;

        searchStatus.textContent =
            `Explore ${Object.keys(topics).length} computer and technology topics.`;

        topicViewer.style.display = "none";
        searchResults.style.display = "grid";

        return;
    }


    const matches = Object.entries(topics)
        .filter(([id, topic]) => {

            const searchableText = [

                topic.title,
                topic.category,
                ...(topic.keywords || []),
                topic.quickAnswer,
                topic.howItWorks,
                topic.whyItMatters,
                topic.example,
                topic.deepDive,
                ...(topic.keyPoints || [])

            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(query);

        });


    topicViewer.style.display = "none";
    searchResults.style.display = "grid";


    if (!matches.length) {

        searchStatus.textContent =
            `No topics found for "${escapeHTML(query)}".`;

        searchResults.innerHTML = `

            <div class="no-results">

                <h2>
                    No topics found
                </h2>

                <p>
                    Try searching for something like:
                </p>

                <div class="suggestions">

                    <button onclick="quickSearch('CPU')">
                        CPU
                    </button>

                    <button onclick="quickSearch('RAM')">
                        RAM
                    </button>

                    <button onclick="quickSearch('Wi-Fi')">
                        Wi-Fi
                    </button>

                    <button onclick="quickSearch('DNS')">
                        DNS
                    </button>

                    <button onclick="quickSearch('Linux')">
                        Linux
                    </button>

                    <button onclick="quickSearch('HTML')">
                        HTML
                    </button>

                    <button onclick="quickSearch('JavaScript')">
                        JavaScript
                    </button>

                    <button onclick="quickSearch('VPN')">
                        VPN
                    </button>

                </div>

            </div>
        `;

        return;
    }


    searchStatus.textContent =
        `${matches.length} topic(s) found for "${escapeHTML(query)}".`;


    searchResults.innerHTML = matches
        .map(([id, topic]) => createTopicCard(id, topic))
        .join("");


    searchResults.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =====================================================
   QUICK SEARCH
===================================================== */

function quickSearch(query) {

    searchInput.value = query;

    searchTopics();
}


/* =====================================================
   OPEN TOPIC
===================================================== */

function openTopic(id) {

    const topic = topics[id];

    if (!topic) {
        return;
    }


    searchResults.style.display = "none";
    searchStatus.style.display = "none";
    topicViewer.style.display = "block";


    const learningPath = getLearningPath(id);


    const relatedTopics = (topic.related || [])
        .filter(relatedId => topics[relatedId]);


    topicViewer.innerHTML = `

        <button
            class="back-button"
            onclick="backToResults()"
        >
            ← Back to Topics
        </button>


        <article class="topic-page">


            <header class="topic-header">

                <div class="topic-header-icon">
                    ${topic.icon}
                </div>

                <div>

                    <div class="topic-category">
                        ${topic.category}
                    </div>

                    <h1>
                        ${topic.title}
                    </h1>

                    <p>
                        ${topic.quickAnswer}
                    </p>

                </div>

            </header>


            <section class="lesson-section">

                <h2>
                    What Is It?
                </h2>

                <p>
                    ${topic.quickAnswer}
                </p>

            </section>


            <section class="lesson-section">

                <h2>
                    How It Works
                </h2>

                <p>
                    ${topic.howItWorks}
                </p>

            </section>


            <section class="lesson-section">

                <h2>
                    Why It Matters
                </h2>

                <p>
                    ${topic.whyItMatters}
                </p>

            </section>


            <section class="lesson-section">

                <h2>
                    Real-World Example
                </h2>

                <p>
                    ${topic.example}
                </p>

            </section>


            <section class="lesson-section">

                <h2>
                    Deeper Explanation
                </h2>

                <p>
                    ${topic.deepDive}
                </p>

            </section>


            <section class="lesson-section learning-path">

                <h2>
                    How to Get Started
                </h2>

                <ol>

                    ${learningPath
                        .map(step => `<li>${step}</li>`)
                        .join("")}

                </ol>

            </section>


            <section class="lesson-section">

                <h2>
                    Key Things to Remember
                </h2>

                <ul>

                    ${(topic.keyPoints || [])
                        .map(point => `<li>${point}</li>`)
                        .join("")}

                </ul>

            </section>


            ${
                relatedTopics.length
                    ? `
                    <section class="lesson-section related-topics">

                        <h2>
                            Related Topics
                        </h2>

                        <div class="related-topic-list">

                            ${relatedTopics
                                .map(relatedId => `
                                    <button
                                        onclick="openTopic('${relatedId}')"
                                    >
                                        ${topics[relatedId].icon}
                                        ${topics[relatedId].title}
                                    </button>
                                `)
                                .join("")}

                        </div>

                    </section>
                    `
                    : ""
            }


        </article>
    `;


    topicViewer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =====================================================
   BACK TO RESULTS
===================================================== */

function backToResults() {

    topicViewer.style.display = "none";

    searchResults.style.display = "grid";

    searchStatus.style.display = "block";

    if (searchInput.value.trim()) {

        searchTopics();

    } else {

        searchStatus.textContent =
            `Explore ${Object.keys(topics).length} computer and technology topics.`;
    }


    searchResults.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =====================================================
   SHOW CATEGORY
===================================================== */

function showCategory(category) {

    const matches = Object.entries(topics)
        .filter(([id, topic]) =>
            topic.category === category
        );


    searchInput.value = "";

    topicViewer.style.display = "none";

    searchResults.style.display = "grid";

    searchStatus.style.display = "block";


    searchStatus.textContent =
        `${matches.length} topic(s) in ${category}.`;


    searchResults.innerHTML = matches
        .map(([id, topic]) =>
            createTopicCard(id, topic)
        )
        .join("");


    searchResults.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =====================================================
   ENTER KEY SEARCH
===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                searchTopics();

            }

        }
    );
}


/* =====================================================
   INITIAL PAGE STATE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        if (searchStatus) {

            searchStatus.textContent =
                `Explore ${Object.keys(topics).length} computer and technology topics.`;

        }

    }
);
