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
            "Computers generate heat.",
            "Cooling removes that heat.",
            "Heatsinks increase the surface area available for heat transfer.",
            "Fans move air through the system.",
            "Cooling affects sustained performance."
        ],
        related: ["cpu", "gpu", "psu"]
    },


    "bios-uefi": {
        title: "BIOS & UEFI",
        category: "Computers",
        icon: "⚙️",
        keywords: ["bios", "uefi", "firmware", "boot firmware"],
        quickAnswer:
            "BIOS and UEFI are firmware environments that initialize hardware and help start the operating system.",
        howItWorks:
            "When a computer starts, firmware performs hardware initialization and follows boot configuration to locate and start an operating system.",
        whyItMatters:
            "Firmware provides an important bridge between the computer's hardware and its operating system.",
        example:
            "When you turn on a computer, its firmware initializes hardware before the operating system begins loading.",
        deepDive:
            "UEFI is the modern successor to traditional BIOS firmware and supports features such as larger boot disks and more flexible firmware interfaces.",
        keyPoints: [
            "Firmware runs before the operating system.",
            "BIOS is an older firmware standard.",
            "UEFI is the modern replacement.",
            "Firmware initializes hardware.",
            "Firmware participates in the boot process."
        ],
        related: ["operating-system", "cpu", "file-system"]
    },


    "computer-ports": {
        title: "Computer Ports",
        category: "Computers",
        icon: "🔗",
        keywords: ["ports", "usb", "hdmi", "displayport", "ethernet", "computer ports"],
        quickAnswer:
            "Computer ports are physical interfaces used to connect computers to other devices, networks, displays, storage, and accessories.",
        howItWorks:
            "Different ports use different electrical and communication standards to exchange data, video, audio, or power.",
        whyItMatters:
            "Ports allow a computer to connect to the outside world.",
        example:
            "USB can connect keyboards and storage devices, while HDMI or DisplayPort can connect a computer to a display.",
        deepDive:
            "Common interfaces include USB, HDMI, DisplayPort, Ethernet, audio connectors, and various legacy standards.",
        keyPoints: [
            "Ports connect external devices.",
            "Different ports support different standards.",
            "USB can carry data and power.",
            "HDMI and DisplayPort commonly carry video.",
            "Ethernet provides wired networking."
        ],
        related: ["motherboard", "ethernet", "wifi"]
    },


    /* =====================================================
       OPERATING SYSTEMS & SOFTWARE
    ===================================================== */

    "operating-system": {
        title: "Operating System",
        category: "Operating Systems",
        icon: "🖥️",
        keywords: ["operating system", "os", "system software"],
        quickAnswer:
            "An operating system is core software that manages hardware and provides services that applications use.",
        howItWorks:
            "The operating system manages CPU time, memory, files, storage, devices, networking, and running programs.",
        whyItMatters:
            "The operating system provides the foundation on which most applications run.",
        example:
            "Windows manages your computer's hardware while allowing applications such as browsers and games to run.",
        deepDive:
            "Operating systems contain components such as kernels, drivers, process managers, file systems, and user interfaces.",
        keyPoints: [
            "Operating systems manage hardware.",
            "They manage running processes.",
            "They manage memory and files.",
            "They provide services for applications.",
            "Examples include Windows, Linux, macOS, Android, and iOS."
        ],
        related: ["cpu", "ram", "file-system"]
    },


    windows: {
        title: "Windows",
        category: "Operating Systems",
        icon: "🪟",
        keywords: ["windows", "microsoft windows", "windows os"],
        quickAnswer:
            "Windows is a family of operating systems developed by Microsoft for personal computers, servers, and other devices.",
        howItWorks:
            "Windows manages hardware resources, provides a graphical interface, runs applications, manages files, and provides system services.",
        whyItMatters:
            "Windows is widely used across personal computers, businesses, gaming systems, and other environments.",
        example:
            "A Windows PC can run web browsers, games, development tools, productivity applications, and many other programs.",
        deepDive:
            "Windows includes components such as the Windows kernel, device drivers, system services, security systems, and graphical desktop environment.",
        keyPoints: [
            "Windows is an operating system family.",
            "It manages hardware and software.",
            "Windows supports a large software ecosystem.",
            "It is widely used on PCs.",
            "Different Windows versions provide different features."
        ],
        related: ["operating-system", "linux", "macos"]
    },


    linux: {
        title: "Linux",
        category: "Operating Systems",
        icon: "🐧",
        keywords: ["linux", "linux operating system", "kernel", "distribution"],
        quickAnswer:
            "Linux is an open-source operating-system kernel used as the foundation of many operating systems called distributions.",
        howItWorks:
            "The Linux kernel manages hardware, memory, processes, networking, and other low-level functions. Distributions combine the kernel with additional software.",
        whyItMatters:
            "Linux is widely used in servers, cloud infrastructure, embedded systems, development environments, and personal computers.",
        example:
            "A web server may run a Linux distribution to host websites and applications.",
        deepDive:
            "Popular Linux distributions include Ubuntu, Fedora, Debian, and Arch Linux. Different distributions package software and configure systems in different ways.",
        keyPoints: [
            "Linux is open source.",
            "Linux technically refers to the kernel.",
            "Distributions combine Linux with other software.",
            "Linux is widely used on servers.",
            "Linux is popular with developers and system administrators."
        ],
        related: ["operating-system", "server", "cloud-computing"]
    },


    macos: {
        title: "macOS",
        category: "Operating Systems",
        icon: "🍎",
        keywords: ["macos", "mac os", "apple operating system"],
        quickAnswer:
            "macOS is Apple's desktop operating system for Mac computers.",
        howItWorks:
            "macOS manages hardware, applications, files, memory, networking, and system services while providing a graphical user interface.",
        whyItMatters:
            "macOS provides the software environment used by Mac computers and supports applications for productivity, development, media, and other tasks.",
        example:
            "A Mac user can use macOS to run a web browser, coding tools, creative software, and other applications.",
        deepDive:
            "macOS is built on technologies derived from Unix and includes Apple's system frameworks, security architecture, graphical environment, and hardware integration.",
        keyPoints: [
            "macOS is Apple's desktop operating system.",
            "It runs on Mac computers.",
            "It manages hardware and software.",
            "It provides a graphical interface.",
            "It supports many development and creative tools."
        ],
        related: ["operating-system", "linux", "windows"]
    },


    applications: {
        title: "Applications",
        category: "Software",
        icon: "📱",
        keywords: ["application", "apps", "software", "programs"],
        quickAnswer:
            "An application is software designed to help users perform particular tasks.",
        howItWorks:
            "Applications use operating-system services and hardware resources to perform their functions.",
        whyItMatters:
            "Applications are the programs people use to accomplish tasks such as browsing, editing documents, communicating, gaming, and programming.",
        example:
            "A web browser is an application that allows you to access websites.",
        deepDive:
            "Applications can range from simple utilities to complex distributed systems involving databases, servers, APIs, and cloud infrastructure.",
        keyPoints: [
            "Applications are software programs.",
            "They perform specific tasks.",
            "Applications use operating-system services.",
            "Apps can run locally or depend on remote services.",
            "Applications can be built using many programming languages."
        ],
        related: ["operating-system", "programming", "apis"]
    },


    "device-drivers": {
        title: "Device Drivers",
        category: "Software",
        icon: "🔧",
        keywords: ["drivers", "device drivers", "hardware drivers"],
        quickAnswer:
            "A device driver is software that allows an operating system to communicate with particular hardware.",
        howItWorks:
            "Drivers translate operating-system requests into operations that a specific hardware device understands.",
        whyItMatters:
            "Drivers allow hardware such as graphics cards, printers, network adapters, and other devices to work correctly with an operating system.",
        example:
            "A graphics driver allows an operating system and applications to communicate with a GPU.",
        deepDive:
            "Drivers can operate at different privilege levels and are closely tied to hardware interfaces and operating-system architecture.",
        keyPoints: [
            "Drivers connect software and hardware.",
            "Different hardware devices require different drivers.",
            "Graphics drivers are especially important for GPU performance.",
            "Drivers may receive updates.",
            "Incorrect drivers can cause hardware problems."
        ],
        related: ["operating-system", "gpu", "motherboard"]
    },


    "file-system": {
        title: "File Systems",
        category: "Software",
        icon: "📁",
        keywords: ["file system", "filesystem", "ntfs", "fat32", "ext4"],
        quickAnswer:
            "A file system organizes and manages how files and directories are stored on a storage device.",
        howItWorks:
            "The file system keeps track of file names, locations, metadata, permissions, and the storage space associated with files.",
        whyItMatters:
            "File systems allow operating systems and users to organize and retrieve stored information.",
        example:
            "When you save a document, the file system records information that allows the operating system to find the document later.",
        deepDive:
            "Different operating systems and storage environments support different file systems, such as NTFS, exFAT, FAT32, ext4, and APFS.",
        keyPoints: [
            "File systems organize stored data.",
            "They manage files and directories.",
            "Different file systems have different features.",
            "File systems store metadata.",
            "The operating system interacts with the file system."
        ],
        related: ["ssd", "hdd", "operating-system"]
    },


    "computer-processes": {
        title: "Computer Processes",
        category: "Software",
        icon: "⚙️",
        keywords: ["process", "processes", "task", "running program"],
        quickAnswer:
            "A process is a running instance of a program managed by an operating system.",
        howItWorks:
            "When a program runs, the operating system creates a process and provides it with resources such as memory and CPU time.",
        whyItMatters:
            "Process management allows a computer to run many programs and tasks at the same time.",
        example:
            "Your web browser can run as one or more processes while music, messaging, and other applications also run.",
        deepDive:
            "Operating systems schedule processes, manage their memory, handle permissions, and coordinate communication between processes.",
        keyPoints: [
            "A process is a running program.",
            "Processes use memory.",
            "The operating system schedules CPU time.",
            "Multiple processes can run at once.",
            "Processes can communicate with each other."
        ],
        related: ["cpu", "ram", "operating-system"]
    },


    "virtual-memory": {
        title: "Virtual Memory",
        category: "Computers",
        icon: "🧠",
        keywords: ["virtual memory", "page file", "swap", "memory"],
        quickAnswer:
            "Virtual memory is a memory-management technique that allows an operating system to use storage as an extension of physical memory.",
        howItWorks:
            "The operating system can move less-active memory pages between RAM and storage when necessary.",
        whyItMatters:
            "Virtual memory helps systems manage memory when applications require more memory than is currently available in physical RAM.",
        example:
            "If many applications are open, the operating system may move some less-used data from RAM to storage.",
        deepDive:
            "Virtual memory systems use concepts such as virtual addresses, pages, page tables, and memory protection.",
        keyPoints: [
            "Virtual memory is managed by the operating system.",
            "It can use storage as additional memory space.",
            "Storage is slower than RAM.",
            "Virtual memory helps isolate processes.",
            "Heavy use of virtual memory can reduce performance."
        ],
        related: ["ram", "ssd", "computer-processes"]
    },


    "software-updates": {
        title: "Software Updates",
        category: "Software",
        icon: "🔄",
        keywords: ["updates", "software updates", "patches", "patching"],
        quickAnswer:
            "Software updates modify existing software to add features, fix bugs, improve compatibility, or address security problems.",
        howItWorks:
            "Developers release updated software packages that replace or modify parts of an existing installation.",
        whyItMatters:
            "Updates can improve reliability, security, performance, and compatibility.",
        example:
            "An operating-system update might fix a security vulnerability or add support for new hardware.",
        deepDive:
            "Updates can range from small patches to major releases. Security patches are particularly important because they can address known vulnerabilities.",
        keyPoints: [
            "Updates can fix bugs.",
            "Updates can improve security.",
            "Updates can add features.",
            "Updates can improve compatibility.",
            "Keeping software current is an important maintenance practice."
        ],
        related: ["operating-system", "device-drivers", "cybersecurity"]
    },


    /* =====================================================
       INTERNET & NETWORKING
    ===================================================== */

    internet: {
        title: "The Internet",
        category: "Internet & Networking",
        icon: "🌐",
        keywords: ["internet", "online", "network of networks"],
        quickAnswer:
            "The Internet is a worldwide system of interconnected networks that communicate using standardized protocols.",
        howItWorks:
            "Devices communicate by sending packets through networks using protocols such as IP and TCP. Routers direct traffic between networks.",
        whyItMatters:
            "The Internet allows devices and services around the world to exchange information.",
        example:
            "When you visit a website, your device communicates across multiple networks to reach the site's server.",
        deepDive:
            "The Internet includes access networks, backbone networks, routers, data centers, undersea cables, wireless systems, and many other components.",
        keyPoints: [
            "The Internet is a network of networks.",
            "Data is commonly divided into packets.",
            "Routers move traffic between networks.",
            "Many protocols work together.",
            "The Web is a service that runs over the Internet."
        ],
        related: ["ip-address", "dns", "router"]
    },


    wifi: {
        title: "Wi-Fi",
        category: "Internet & Networking",
        icon: "📡",
        keywords: ["wifi", "wi-fi", "wireless", "wireless network"],
        quickAnswer:
            "Wi-Fi allows compatible devices to communicate wirelessly using radio signals.",
        howItWorks:
            "Devices communicate with wireless access points over radio frequencies. The access point can connect the local network to other networks.",
        whyItMatters:
            "Wi-Fi provides convenient wireless network access for computers, phones, televisions, and other devices.",
        example:
            "Your phone connects to your home wireless network through Wi-Fi.",
        deepDive:
            "Wi-Fi is based on IEEE 802.11 standards. Different generations operate with different capabilities and frequency bands.",
        keyPoints: [
            "Wi-Fi uses radio communication.",
            "Devices connect to wireless access points.",
            "Wi-Fi can connect devices to local networks.",
            "Wi-Fi can provide Internet access.",
            "Wireless networks should use appropriate security."
        ],
        related: ["router", "ip-address", "ethernet"]
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
        related: ["http-https", "dns", "internet"]
    },


    server: {
        title: "Server",
        category: "Internet & Networking",
        icon: "🖥️",
        keywords: ["server", "web server", "computer server", "server computer"],
        quickAnswer:
            "A server is a computer or software system that provides services or resources to other computers called clients.",
        howItWorks:
            "A server listens for requests and responds by providing information, processing tasks, or accessing resources.",
        whyItMatters:
            "Servers power many services people use every day, including websites, email, databases, file storage, and online applications.",
        example:
            "A web server can receive a browser request and return the files needed to display a webpage.",
        deepDive:
            "Servers can be physical or virtual and may run specialized software for web hosting, databases, authentication, storage, or other services.",
        keyPoints: [
            "Servers provide services.",
            "Clients request services from servers.",
            "Servers can be physical or virtual.",
            "One server can host many services.",
            "Modern applications often use multiple servers."
        ],
        related: ["web-browser", "data-centers", "cloud-computing"]
    },


    /* =====================================================
       PROGRAMMING & DATA
    ===================================================== */

    programming: {
        title: "Programming",
        category: "Programming",
        icon: "💻",
        keywords: ["programming", "coding", "code", "software development"],
        quickAnswer:
            "Programming is the process of creating instructions that computers can execute.",
        howItWorks:
            "Programmers write source code using programming languages. Compilers, interpreters, or runtime systems allow that code to execute.",
        whyItMatters:
            "Programming is used to create websites, applications, games, operating systems, automation, and many other technologies.",
        example:
            "A Python program can receive user input, process it, and display a result.",
        deepDive:
            "Programming involves logic, algorithms, data structures, debugging, testing, architecture, and software design.",
        keyPoints: [
            "Programming creates executable instructions.",
            "Different languages serve different purposes.",
            "Programs can be extremely small or extremely complex.",
            "Debugging is part of programming.",
            "Good code combines logic and organization."
        ],
        related: ["programming-languages", "algorithms", "variables"]
    },


    "programming-languages": {
        title: "Programming Languages",
        category: "Programming",
        icon: "🗣️",
        keywords: ["programming language", "python", "javascript", "java", "c", "c++"],
        quickAnswer:
            "Programming languages provide structured ways for humans to write instructions that computers can execute.",
        howItWorks:
            "Source code is processed by compilers, interpreters, or runtime systems that translate or execute instructions.",
        whyItMatters:
            "Different languages are designed with different strengths, ecosystems, performance characteristics, and use cases.",
        example:
            "JavaScript is widely used for web development, while Python is popular for automation, data science, and many other tasks.",
        deepDive:
            "Programming languages can differ in syntax, type systems, memory management, execution models, and programming paradigms.",
        keyPoints: [
            "Languages provide rules for writing code.",
            "Different languages have different strengths.",
            "Some languages are compiled.",
            "Some languages use interpreters or virtual machines.",
            "Choosing a language depends on the problem."
        ],
        related: ["programming", "variables", "functions"]
    },


    algorithms: {
        title: "Algorithms",
        category: "Programming",
        icon: "🧠",
        keywords: ["algorithm", "algorithms", "problem solving", "logic"],
        quickAnswer:
            "An algorithm is a defined sequence of steps used to solve a problem or accomplish a task.",
        howItWorks:
            "An algorithm takes inputs, follows logical steps, and produces an output or result.",
        whyItMatters:
            "Algorithms allow programmers to solve problems systematically and efficiently.",
        example:
            "A search algorithm can examine data and determine whether a particular value exists.",
        deepDive:
            "Computer scientists analyze algorithms using concepts such as time complexity, space complexity, correctness, and scalability.",
        keyPoints: [
            "Algorithms are step-by-step procedures.",
            "They can solve computational problems.",
            "Different algorithms can solve the same problem.",
            "Efficiency matters as data grows.",
            "Algorithms are used throughout software."
        ],
        related: ["programming", "data-structures", "functions"]
    },


    variables: {
        title: "Variables",
        category: "Programming",
        icon: "📦",
        keywords: ["variable", "variables", "data", "value"],
        quickAnswer:
            "A variable is a named way for a program to store or reference a value.",
        howItWorks:
            "A program assigns data to a variable and can later read or modify that data.",
        whyItMatters:
            "Variables allow programs to work with changing information.",
        example:
            "A program might store a user's name in a variable and use it later when displaying a message.",
        deepDive:
            "Different languages handle variables differently. Some use static typing while others allow more dynamic behavior.",
        keyPoints: [
            "Variables represent data.",
            "Variables can change during program execution.",
            "Different languages use different variable rules.",
            "Variables can store many types of values.",
            "Clear variable names improve readability."
        ],
        related: ["programming", "data-structures", "functions"]
    },


    functions: {
        title: "Functions",
        category: "Programming",
        icon: "⚙️",
        keywords: ["function", "functions", "method", "subroutine"],
        quickAnswer:
            "A function is a reusable block of code designed to perform a particular task.",
        howItWorks:
            "A program calls a function, optionally provides inputs, and can receive a result in return.",
        whyItMatters:
            "Functions help programmers organize code, reduce repetition, and make programs easier to maintain.",
        example:
            "A calculator program could have a function that adds two numbers.",
        deepDive:
            "Functions can accept parameters, return values, access local variables, and interact with other parts of a program.",
        keyPoints: [
            "Functions group reusable logic.",
            "Functions can accept inputs.",
            "Functions can return outputs.",
            "Functions reduce repeated code.",
            "Functions help organize large programs."
        ],
        related: ["variables", "programming", "algorithms"]
    },


    apis: {
        title: "APIs — Application Programming Interfaces",
        category: "Programming",
        icon: "🔗",
        keywords: ["api", "apis", "application programming interface", "software interface"],
        quickAnswer:
            "An API defines how software systems can communicate and request functionality or data from each other.",
        howItWorks:
            "A program sends a request using an API's defined rules and receives a response.",
        whyItMatters:
            "APIs allow different software systems to work together without requiring every system to know how the other is internally implemented.",
        example:
            "A weather application can use an API to request weather data from a remote service.",
        deepDive:
            "APIs can use different architectures and protocols. Web APIs commonly use HTTP and data formats such as JSON.",
        keyPoints: [
            "APIs provide communication rules.",
            "APIs can expose data or functionality.",
            "Web APIs commonly use HTTP.",
            "APIs allow software systems to integrate.",
            "APIs can require authentication and authorization."
        ],
        related: ["programming", "databases", "http-https"]
    },


    databases: {
        title: "Databases",
        category: "Programming & Data",
        icon: "🗄️",
        keywords: ["database", "databases", "sql", "data storage"],
        quickAnswer:
            "A database is a system used to organize, store, manage, and retrieve data.",
        howItWorks:
            "Applications send queries or commands to a database system, which stores and retrieves information according to its design.",
        whyItMatters:
            "Databases allow applications to manage large amounts of structured or unstructured information.",
        example:
            "An online store can use a database to store products, accounts, orders, and inventory.",
        deepDive:
            "Relational databases organize information into tables, while other database models use different structures. Database systems also provide indexing, transactions, permissions, and recovery features.",
        keyPoints: [
            "Databases store information.",
            "Applications can query databases.",
            "Relational databases use tables.",
            "Indexes can speed up searches.",
            "Databases can contain critical application data."
        ],
        related: ["apis", "data-structures", "server"]
    },


    binary: {
        title: "Binary",
        category: "Programming & Data",
        icon: "0️⃣",
        keywords: ["binary", "bits", "bytes", "0 and 1", "binary numbers"],
        quickAnswer:
            "Binary is a number system that uses only two digits: 0 and 1. Digital computers use binary representations extensively.",
        howItWorks:
            "Electronic systems can represent information using physical states that can be interpreted as binary values. Groups of bits can represent numbers, text, images, instructions, and other data.",
        whyItMatters:
            "Binary is fundamental to digital computing and helps explain how computers represent information.",
        example:
            "A byte contains eight bits and can represent 256 different possible combinations.",
        deepDive:
            "Binary values are used throughout computing, from machine instructions and memory to network packets and digital files.",
        keyPoints: [
            "Binary uses 0 and 1.",
            "A bit is one binary digit.",
            "Eight bits make one byte.",
            "Binary can represent many kinds of information.",
            "Computers use binary extensively."
        ],
        related: ["data-structures", "cpu", "ram"]
    },


    "data-structures": {
        title: "Data Structures",
        category: "Programming & Data",
        icon: "🗂️",
        keywords: ["data structures", "array", "list", "stack", "queue", "tree"],
        quickAnswer:
            "Data structures are organized ways of storing and managing data so programs can use it efficiently.",
        howItWorks:
            "A programmer chooses a structure based on the operations the program needs to perform, such as searching, inserting, deleting, or sorting data.",
        whyItMatters:
            "Choosing an appropriate data structure can significantly affect software performance and organization.",
        example:
            "An array can store a collection of values that a program needs to access by position.",
        deepDive:
            "Common structures include arrays, linked lists, stacks, queues, hash tables, trees, and graphs.",
        keyPoints: [
            "Data structures organize information.",
            "Different structures have different strengths.",
            "Choosing the right structure can improve performance.",
            "Data structures are fundamental to algorithms.",
            "Complex software often combines several structures."
        ],
        related: ["algorithms", "programming", "databases"]
    },


    "version-control": {
        title: "Version Control",
        category: "Programming",
        icon: "🔄",
        keywords: ["version control", "git", "github", "source control", "repository"],
        quickAnswer:
            "Version control records changes to files over time so developers can track, compare, and manage versions of a project.",
        howItWorks:
            "A version-control system records changes as commits or similar units. Developers can review history, create branches, and merge changes.",
        whyItMatters:
            "Version control helps developers collaborate and recover earlier versions of their work.",
        example:
            "A developer can use Git to save versions of a website's code and see what changed between versions.",
        deepDive:
            "Git is a distributed version-control system. Platforms such as GitHub provide hosting and collaboration features around Git repositories.",
        keyPoints: [
            "Version control tracks changes.",
            "Git is a popular version-control system.",
            "Repositories contain project history.",
            "Branches allow separate lines of development.",
            "Version control is important for collaboration."
        ],
        related: ["programming", "applications", "apis"]
    },


    /* =====================================================
       ARTIFICIAL INTELLIGENCE & MODERN TECHNOLOGY
    ===================================================== */

    "artificial-intelligence": {
        title: "Artificial Intelligence",
        category: "Artificial Intelligence",
        icon: "🤖",
        keywords: ["ai", "artificial intelligence", "intelligent systems"],
        quickAnswer:
            "Artificial intelligence is a field of computing focused on creating systems that can perform tasks involving capabilities such as pattern recognition, prediction, language processing, and decision-making.",
        howItWorks:
            "AI systems use algorithms, data, models, and computing resources to produce outputs such as predictions, classifications, generated content, or decisions.",
        whyItMatters:
            "AI is used across search, recommendation systems, automation, software development, science, business, and many other areas.",
        example:
            "An AI system can analyze text and generate a response based on patterns learned during training.",
        deepDive:
            "AI includes many approaches, including machine learning, neural networks, natural language processing, computer vision, and rule-based systems.",
        keyPoints: [
            "AI is a broad field.",
            "Machine learning is one major approach within AI.",
            "AI systems can make mistakes.",
            "Data and model design affect results.",
            "AI is used across many industries."
        ],
        related: ["machine-learning", "programming", "gpu"]
    },


    "machine-learning": {
        title: "Machine Learning",
        category: "Artificial Intelligence",
        icon: "🧠",
        keywords: ["machine learning", "ml", "model", "training"],
        quickAnswer:
            "Machine learning is a field in which computer systems learn patterns from data and use those patterns to make predictions or produce outputs.",
        howItWorks:
            "A model is trained using data. During training, an optimization process adjusts model parameters to reduce errors according to a chosen objective.",
        whyItMatters:
            "Machine learning can automate pattern recognition and prediction tasks that may be difficult to program with fixed rules.",
        example:
            "A machine-learning model can analyze examples of transactions to help identify unusual activity.",
        deepDive:
            "Machine learning includes supervised learning, unsupervised learning, reinforcement learning, and many different model architectures.",
        keyPoints: [
            "Machine learning uses data.",
            "Models learn patterns.",
            "Training is different from using a trained model.",
            "Model quality depends on many factors.",
            "Machine learning is a major part of modern AI."
        ],
        related: ["artificial-intelligence", "programming", "cloud-computing"]
    },


    "cloud-computing": {
        title: "Cloud Computing",
        category: "Modern Technology",
        icon: "☁️",
        keywords: ["cloud", "cloud computing", "cloud services", "aws", "azure"],
        quickAnswer:
            "Cloud computing provides computing resources such as servers, storage, databases, and software through network-accessible services.",
        howItWorks:
            "Cloud providers operate large collections of physical and virtual resources that customers can access remotely.",
        whyItMatters:
            "Cloud computing allows organizations to use computing resources without owning and operating every physical server themselves.",
        example:
            "A website can run on cloud infrastructure instead of a computer sitting in the website owner's home.",
        deepDive:
            "Cloud services include infrastructure, platforms, storage, databases, serverless computing, networking, and managed services.",
        keyPoints: [
            "Cloud computing uses remote infrastructure.",
            "Cloud resources can be scaled.",
            "Cloud providers operate physical data centers.",
            "Cloud services can reduce infrastructure management.",
            "Cloud computing still depends on physical hardware."
        ],
        related: ["server", "data-centers", "virtualization"]
    },


    virtualization: {
        title: "Virtualization",
        category: "Modern Technology",
        icon: "🖥️",
        keywords: ["virtualization", "virtual machine", "vm", "hypervisor"],
        quickAnswer:
            "Virtualization allows one physical computer to provide simulated computing environments called virtual machines.",
        howItWorks:
            "A hypervisor manages physical resources and provides virtual hardware to virtual machines.",
        whyItMatters:
            "Virtualization allows organizations to run multiple isolated computing environments on shared physical hardware.",
        example:
            "A developer can run a Linux virtual machine on a Windows computer without replacing the host operating system.",
        deepDive:
            "Virtualization can isolate workloads, improve resource utilization, simplify testing, and support cloud infrastructure.",
        keyPoints: [
            "Virtual machines simulate computer environments.",
            "Hypervisors manage virtual machines.",
            "Multiple VMs can share physical hardware.",
            "Virtualization is widely used in cloud computing.",
            "VMs can provide useful isolation."
        ],
        related: ["cloud-computing", "server", "operating-system"]
    },


    "data-centers": {
        title: "Data Centers",
        category: "Modern Technology",
        icon: "🏢",
        keywords: ["data center", "datacenter", "servers", "infrastructure"],
        quickAnswer:
            "A data center is a facility designed to house computing, networking, storage, power, and cooling infrastructure.",
        howItWorks:
            "Data centers contain racks of servers and networking equipment supported by power systems, cooling, physical security, and monitoring.",
        whyItMatters:
            "Data centers provide the physical infrastructure behind many websites, cloud services, applications, and online platforms.",
        example:
            "A cloud provider can operate large data centers containing thousands of servers.",
        deepDive:
            "Modern data centers use redundant power, network connections, cooling, monitoring, automation, and security measures.",
        keyPoints: [
            "Data centers contain physical infrastructure.",
            "Servers operate inside data centers.",
            "Cooling is essential.",
            "Reliable power is critical.",
            "Data centers can be extremely large."
        ],
        related: ["server", "cloud-computing", "virtualization"]
    },


    iot: {
        title: "Internet of Things — IoT",
        category: "Modern Technology",
        icon: "📡",
        keywords: ["iot", "internet of things", "smart devices", "connected devices"],
        quickAnswer:
            "The Internet of Things describes physical devices that contain computing, sensing, networking, or communication capabilities and can exchange data.",
        howItWorks:
            "Sensors and embedded computers collect information, process it locally or remotely, and communicate with other systems.",
        whyItMatters:
            "IoT connects physical objects to digital systems and enables monitoring, automation, and remote control.",
        example:
            "A smart thermostat can measure temperature and communicate with an application over a network.",
        deepDive:
            "IoT systems can include sensors, embedded processors, wireless communication, cloud platforms, databases, and user applications.",
        keyPoints: [
            "IoT connects physical devices.",
            "IoT devices can contain sensors.",
            "Devices can communicate over networks.",
            "IoT enables automation.",
            "Security is important for connected devices."
        ],
        related: ["wifi", "cloud-computing", "cybersecurity"]
    },


    blockchain: {
        title: "Blockchain",
        category: "Modern Technology",
        icon: "⛓️",
        keywords: ["blockchain", "distributed ledger", "cryptocurrency", "blocks"],
        quickAnswer:
            "A blockchain is a type of distributed ledger that records transactions or other data in linked blocks using cryptographic techniques.",
        howItWorks:
            "Transactions are grouped into blocks. Network participants use a consensus mechanism to agree on which blocks are added to the ledger.",
        whyItMatters:
            "Blockchains can provide shared records across distributed participants without relying on a single database administrator.",
        example:
            "Cryptocurrency networks can use blockchains to record transactions.",
        deepDive:
            "Different blockchains use different consensus mechanisms, data structures, governance models, and security assumptions.",
        keyPoints: [
            "Blockchains use linked records.",
            "Cryptography helps protect the data structure.",
            "Participants maintain copies or views of the ledger.",
            "Consensus determines accepted updates.",
            "Blockchain is a technology with many different designs."
        ],
        related: ["binary", "databases", "cybersecurity"]
    },


    "quantum-computing": {
        title: "Quantum Computing",
        category: "Modern Technology",
        icon: "⚛️",
        keywords: ["quantum computing", "quantum computer", "qubit", "quantum"],
        quickAnswer:
            "Quantum computing uses quantum-mechanical phenomena to process information using quantum bits called qubits.",
        howItWorks:
            "Qubits can exist in quantum states that have no direct classical equivalent. Quantum algorithms use operations on these states to solve particular types of problems.",
        whyItMatters:
            "Quantum computers could provide advantages for certain specialized problems, although they are fundamentally different from conventional computers.",
        example:
            "Researchers are investigating quantum computing for areas such as chemistry, optimization, and cryptography.",
        deepDive:
            "Quantum computing uses concepts including superposition, entanglement, measurement, and quantum gates. Building reliable large-scale quantum computers remains a major engineering challenge.",
        keyPoints: [
            "Quantum computers use qubits.",
            "Qubits behave differently from classical bits.",
            "Quantum computers are not simply faster versions of normal PCs.",
            "Only certain problems may benefit from quantum algorithms.",
            "Quantum computing is still an active research field."
        ],
        related: ["binary", "cpu", "artificial-intelligence"]
    },


    "how-computers-work-together": {
        title: "How Computers Work Together",
        category: "Modern Technology",
        icon: "🌐",
        keywords: [
            "how computers work together",
            "computer systems",
            "network systems",
            "distributed systems"
        ],
        quickAnswer:
            "Modern computing systems often combine many computers, networks, databases, applications, and services to accomplish a larger task.",
        howItWorks:
            "A user's device may communicate with servers, databases, APIs, cloud infrastructure, and other systems. Each part performs a specific role.",
        whyItMatters:
            "Understanding how systems connect helps explain how modern websites, games, applications, and online services actually work.",
        example:
            "When you use an online application, your device may communicate with a web server, authentication service, API, database, and storage system.",
        deepDive:
            "Large systems can use distributed computing, load balancing, caching, databases, queues, microservices, monitoring, and multiple data centers.",
        keyPoints: [
            "Modern applications often use many systems.",
            "Networks connect computers together.",
            "Servers provide services.",
            "Databases store information.",
            "Cloud infrastructure can provide scalable resources."
        ],
        related: ["server", "databases", "apis"]
    },


    /* =====================================================
       CYBERSECURITY
    ===================================================== */

    cybersecurity: {
        title: "Cybersecurity",
        category: "Cybersecurity",
        icon: "🔐",
        keywords: [
            "cybersecurity",
            "cyber security",
            "security",
            "computer security",
            "information security"
        ],
        quickAnswer:
            "Cybersecurity is the practice of protecting computers, networks, applications, and information from unauthorized access, misuse, damage, or disruption.",
        howItWorks:
            "Cybersecurity combines technologies, policies, processes, monitoring, authentication, access control, encryption, updates, backups, and other defensive measures.",
        whyItMatters:
            "Computers and networks contain valuable information and provide important services that need protection.",
        example:
            "Using multi-factor authentication and keeping software updated are common defensive practices.",
        deepDive:
            "Cybersecurity includes areas such as network security, application security, identity management, incident response, vulnerability management, and security operations.",
        keyPoints: [
            "Cybersecurity protects digital systems and information.",
            "Security involves people, processes, and technology.",
            "Authentication helps verify identity.",
            "Updates can address security vulnerabilities.",
            "Security is an ongoing process."
        ],
        related: ["software-updates", "apis", "operating-system"]
    }

};


/* =========================================================
   LEARNING PATHS
========================================================= */

const learningPaths = {

    cpu: [
        "Learn what a CPU is and what its main job is.",
        "Understand CPU cores and threads.",
        "Learn what clock speed means.",
        "Understand CPU cache and why it is useful.",
        "Learn how the CPU works with RAM and storage.",
        "Learn how CPUs are compared in real computers."
    ],

    ram: [
        "Learn what RAM is and why computers need it.",
        "Understand the difference between RAM and storage.",
        "Learn about memory capacity and gigabytes.",
        "Understand how RAM affects multitasking.",
        "Learn about different memory generations.",
        "Learn how to determine how much RAM a computer needs."
    ],

    gpu: [
        "Learn what a GPU does.",
        "Understand the difference between a GPU and CPU.",
        "Learn about graphics processing and parallel computing.",
        "Understand VRAM.",
        "Learn how GPUs are used for gaming and video.",
        "Explore how GPUs are used for AI and other workloads."
    ],

    ssd: [
        "Learn what computer storage is.",
        "Understand what an SSD is.",
        "Learn how flash memory stores information.",
        "Understand storage capacity and performance.",
        "Compare SSDs with HDDs.",
        "Learn how storage affects everyday computer performance."
    ],

    hdd: [
        "Learn what a hard disk drive is.",
        "Understand magnetic storage.",
        "Learn what platters and read/write heads do.",
        "Understand HDD capacity and performance.",
        "Compare HDDs with SSDs.",
        "Learn where HDD storage is still useful."
    ],

    motherboard: [
        "Learn what a motherboard does.",
        "Identify the CPU socket and RAM slots.",
        "Learn about expansion slots.",
        "Understand storage and peripheral connections.",
        "Learn how the motherboard connects components.",
        "Understand motherboard compatibility."
    ],

    psu: [
        "Learn what a power supply does.",
        "Understand why computers need regulated power.",
        "Learn about PSU wattage.",
        "Understand efficiency ratings.",
        "Learn how a PSU connects to components.",
        "Learn how power requirements are considered when building a computer."
    ],

    "computer-cooling": [
        "Learn why computers produce heat.",
        "Understand what a heatsink does.",
        "Learn how fans move heat.",
        "Understand thermal interfaces.",
        "Compare air cooling and liquid cooling.",
        "Learn how cooling affects sustained performance."
    ],

    "bios-uefi": [
        "Learn what computer firmware is.",
        "Understand what happens when a computer starts.",
        "Learn the difference between BIOS and UEFI.",
        "Understand the boot process.",
        "Learn what firmware settings control.",
        "Understand how firmware connects hardware and the operating system."
    ],

    "computer-ports": [
        "Learn why computers need ports.",
        "Identify common USB ports.",
        "Learn about HDMI and DisplayPort.",
        "Understand Ethernet connections.",
        "Learn how ports carry data, video, audio, or power.",
        "Practice identifying ports on real computers."
    ],

    "operating-system": [
        "Learn what an operating system does.",
        "Understand how an OS manages hardware.",
        "Learn about processes and memory.",
        "Understand files and storage management.",
        "Learn how applications interact with an OS.",
        "Explore different operating systems."
    ],

    windows: [
        "Learn what Windows is.",
        "Understand the Windows desktop and file system.",
        "Learn how Windows manages applications and processes.",
        "Explore Windows settings and system tools.",
        "Learn basic Windows troubleshooting.",
        "Explore advanced Windows administration."
    ],

    linux: [
        "Learn what Linux is.",
        "Understand Linux distributions.",
        "Learn basic terminal concepts.",
        "Understand files, directories, and permissions.",
        "Learn how software is installed on Linux.",
        "Practice using Linux in a safe test environment."
    ],

    macos: [
        "Learn what macOS is.",
        "Understand the macOS desktop and file system.",
        "Learn how applications work on macOS.",
        "Explore system settings and built-in tools.",
        "Learn basic troubleshooting.",
        "Explore the Unix foundations of macOS."
    ],

    applications: [
        "Learn what application software is.",
        "Understand how applications use an operating system.",
        "Learn the difference between local and web applications.",
        "Understand how applications use data.",
        "Learn how applications communicate with other services.",
        "Explore how applications are developed."
    ],

    "device-drivers": [
        "Learn what a device driver is.",
        "Understand why hardware needs drivers.",
        "Learn how drivers communicate with operating systems.",
        "Understand graphics and network drivers.",
        "Learn why driver updates matter.",
        "Learn basic driver troubleshooting."
    ],

    "file-system": [
        "Learn what a file system is.",
        "Understand files and directories.",
        "Learn about file metadata.",
        "Understand permissions and access.",
        "Compare common file systems.",
        "Learn how operating systems manage stored files."
    ],

    "computer-processes": [
        "Learn what a process is.",
        "Understand how programs become running processes.",
        "Learn how the OS allocates CPU time.",
        "Understand process memory.",
        "Learn how multiple processes run at once.",
        "Explore process-management tools."
    ],

    "virtual-memory": [
        "Learn the difference between RAM and storage.",
        "Understand what virtual memory is.",
        "Learn about memory pages.",
        "Understand swapping and paging.",
        "Learn why storage is slower than RAM.",
        "Understand how virtual memory helps operating systems."
    ],

    "software-updates": [
        "Learn why software receives updates.",
        "Understand bug fixes and feature updates.",
        "Learn what security patches are.",
        "Understand why compatibility matters.",
        "Learn how to safely keep software updated.",
        "Understand why updates are part of long-term system maintenance."
    ],

    internet: [
        "Learn what the Internet actually is.",
        "Understand networks and connected devices.",
        "Learn how data is divided into packets.",
        "Understand IP addresses and routing.",
        "Learn how DNS helps locate services.",
        "Explore how websites and online services communicate."
    ],

    wifi: [
        "Learn what Wi-Fi is.",
        "Understand wireless access points.",
        "Learn about radio communication.",
        "Understand Wi-Fi networks and security.",
        "Learn about different Wi-Fi generations.",
        "Learn basic wireless troubleshooting."
    ],

    ethernet: [
        "Learn what Ethernet is.",
        "Understand Ethernet cables and connections.",
        "Learn what network frames are.",
        "Understand Ethernet speeds.",
        "Learn how switches use Ethernet.",
        "Practice identifying wired network connections."
    ],

    router: [
        "Learn what a router does.",
        "Understand networks and IP addresses.",
        "Learn how routers forward packets.",
        "Understand home-network routing.",
        "Learn about NAT and routing tables.",
        "Explore advanced routing concepts."
    ],

    "network-switch": [
        "Learn what a network switch does.",
        "Understand Ethernet and LANs.",
        "Learn about MAC addresses.",
        "Understand how switches forward frames.",
        "Learn the difference between switches and routers.",
        "Explore managed-switch concepts."
    ],

    "ip-address": [
        "Learn what an IP address is.",
        "Understand IPv4.",
        "Learn about private and public addresses.",
        "Understand subnetting at a basic level.",
        "Learn about IPv6.",
        "Practice understanding IP addressing."
    ],

    dns: [
        "Learn what DNS is.",
        "Understand domain names.",
        "Learn how DNS resolution works.",
        "Understand DNS records.",
        "Learn about recursive and authoritative DNS servers.",
        "Practice understanding how a browser finds a website."
    ],

    dhcp: [
        "Learn what DHCP does.",
        "Understand automatic IP configuration.",
        "Learn about gateways and DNS settings.",
        "Understand the DHCP client-server process.",
        "Learn about leases.",
        "Practice understanding how devices join a network."
    ],

    "http-https": [
        "Learn what HTTP is.",
        "Understand requests and responses.",
        "Learn common HTTP concepts.",
        "Understand HTTPS.",
        "Learn how TLS protects web traffic.",
        "Explore how browsers communicate with web servers."
    ],

    "web-browser": [
        "Learn what a web browser does.",
        "Understand websites and web servers.",
        "Learn about HTML, CSS, and JavaScript.",
        "Understand DNS and HTTP.",
        "Learn how browsers render webpages.",
        "Explore browser security and developer tools."
    ],

    server: [
        "Learn what a server is.",
        "Understand the client-server model.",
        "Learn how servers receive requests.",
        "Explore web servers and databases.",
        "Understand physical and virtual servers.",
        "Learn how modern applications use multiple servers."
    ],

    programming: [
        "Learn what programming is.",
        "Learn variables and data types.",
        "Learn conditional logic.",
        "Learn loops.",
        "Learn functions.",
        "Build small programs and gradually work toward larger projects."
    ],

    "programming-languages": [
        "Learn what programming languages are.",
        "Understand syntax and semantics.",
        "Learn about compiled and interpreted languages.",
        "Explore several common programming languages.",
        "Choose a language based on a project.",
        "Build projects to develop practical programming skills."
    ],

    algorithms: [
        "Learn what an algorithm is.",
        "Practice breaking problems into steps.",
        "Learn searching and sorting concepts.",
        "Understand efficiency.",
        "Learn basic time and space complexity.",
        "Practice designing algorithms for programming problems."
    ],

    variables: [
        "Learn what variables are.",
        "Learn common data types.",
        "Practice assigning values.",
        "Practice changing values.",
        "Learn how variables work inside functions.",
        "Use variables in real programs."
    ],

    functions: [
        "Learn what a function is.",
        "Learn how to define a function.",
        "Learn parameters and arguments.",
        "Learn return values.",
        "Understand local and global scope.",
        "Build programs using multiple reusable functions."
    ],

    apis: [
        "Learn what an API is.",
        "Understand how software systems communicate.",
        "Learn about requests and responses.",
        "Understand HTTP-based APIs.",
        "Learn how JSON is commonly used.",
        "Build a small project that communicates with an API."
    ],

    databases: [
        "Learn what a database is.",
        "Understand tables and records.",
        "Learn basic database queries.",
        "Understand relationships between data.",
        "Learn about indexes and performance.",
        "Build an application that stores and retrieves data."
    ],

    binary: [
        "Learn what a bit is.",
        "Understand binary numbers.",
        "Learn how bits form bytes.",
        "Understand how computers represent numbers.",
        "Learn how text and other data can be represented digitally.",
        "Connect binary concepts to memory, files, and computer hardware."
    ],

    "data-structures": [
        "Learn why programs need data structures.",
        "Understand arrays and lists.",
        "Learn stacks and queues.",
        "Understand hash tables.",
        "Explore trees and graphs.",
        "Choose data structures based on the problem being solved."
    ],

    "version-control": [
        "Learn what version control is.",
        "Learn the basic Git workflow.",
        "Understand repositories and commits.",
        "Learn branches.",
        "Learn how merging works.",
        "Use version control to manage real programming projects."
    ],

    "artificial-intelligence": [
        "Learn what artificial intelligence means.",
        "Understand how data and algorithms are used.",
        "Learn the basics of machine learning.",
        "Explore neural networks and modern AI models.",
        "Learn about AI applications and limitations.",
        "Build small AI-related projects as your skills grow."
    ],

    "machine-learning": [
        "Learn what machine learning is.",
        "Learn basic programming and data concepts.",
        "Understand training data.",
        "Learn about models and predictions.",
        "Explore supervised and unsupervised learning.",
        "Build beginner machine-learning projects."
    ],

    "cloud-computing": [
        "Learn what cloud computing means.",
        "Understand servers and data centers.",
        "Learn about cloud storage and computing.",
        "Understand virtual machines.",
        "Learn basic cloud networking.",
        "Build and deploy a simple cloud-based project."
    ],

    virtualization: [
        "Learn what virtualization is.",
        "Understand virtual machines.",
        "Learn what a hypervisor does.",
        "Understand virtual hardware.",
        "Learn how virtualization supports cloud computing.",
        "Practice creating and managing a safe virtual machine."
    ],

    "data-centers": [
        "Learn what a data center is.",
        "Understand servers and racks.",
        "Learn about networking infrastructure.",
        "Understand power and cooling.",
        "Learn about redundancy and reliability.",
        "Explore how data centers support cloud services."
    ],

    iot: [
        "Learn what the Internet of Things means.",
        "Understand sensors and embedded computers.",
        "Learn how devices communicate.",
        "Understand cloud-connected devices.",
        "Learn about IoT security.",
        "Build or study a simple connected-device project."
    ],

    blockchain: [
        "Learn what a blockchain is.",
        "Understand blocks and transactions.",
        "Learn the role of cryptography.",
        "Understand distributed ledgers.",
        "Learn about consensus mechanisms.",
        "Study real-world blockchain architectures."
    ],

    "quantum-computing": [
        "Learn basic computer science concepts.",
        "Understand the difference between bits and qubits.",
        "Learn the basic idea of quantum states.",
        "Understand quantum gates.",
        "Learn why quantum algorithms are different.",
        "Explore current quantum-computing research and applications."
    ],

    "how-computers-work-together": [
        "Learn computer hardware fundamentals.",
        "Learn how operating systems manage computers.",
        "Learn networking fundamentals.",
        "Understand clients and servers.",
        "Learn about APIs and databases.",
        "Understand how these pieces combine into modern applications."
    ],

    cybersecurity: [
        "Learn computer fundamentals.",
        "Learn networking fundamentals.",
        "Understand operating systems.",
        "Learn basic programming and scripting.",
        "Study security concepts, authentication, and common threats.",
        "Practice defensive cybersecurity through safe labs and simulations."
    ]

};


/* =========================================================
   DEFAULT LEARNING PATHS
   Used if a new topic is added without a custom path.
========================================================= */

function getLearningPath(id, topic) {

    if (learningPaths[id]) {
        return learningPaths[id];
    }


    const categoryPaths = {

        "Computers": [
            "Learn the basic purpose of the computer component.",
            "Understand the main parts and terminology.",
            "Learn how the component works with other hardware.",
            "Understand how the component affects a computer.",
            "Learn how the component is used in real systems.",
            "Practice identifying and explaining the component."
        ],

        "Operating Systems": [
            "Learn the basic purpose of the operating-system feature.",
            "Understand the terminology used with it.",
            "Learn how the operating system manages it.",
            "Explore how users interact with it.",
            "Learn basic troubleshooting and management.",
            "Explore more advanced operating-system concepts."
        ],

        "Software": [
            "Learn what the software concept means.",
            "Understand how software interacts with the operating system.",
            "Learn the main terminology.",
            "Understand how it is used in real applications.",
            "Practice working with the concept.",
            "Explore more advanced software concepts."
        ],

        "Internet & Networking": [
            "Learn the basic networking concept.",
            "Understand the important terminology.",
            "Learn how devices communicate using it.",
            "Understand how it fits into a network.",
            "Practice identifying the concept in real networks.",
            "Explore more advanced networking concepts."
        ],

        "Programming": [
            "Learn the basic programming concept.",
            "Understand the terminology and syntax.",
            "Practice using the concept in small programs.",
            "Combine it with other programming concepts.",
            "Build a small project.",
            "Use the concept in larger software projects."
        ],

        "Programming & Data": [
            "Learn the basic concept.",
            "Understand how computers represent or organize data.",
            "Learn the important terminology.",
            "Practice using the concept.",
            "Understand how it affects software.",
            "Apply it to a programming project."
        ],

        "Artificial Intelligence": [
            "Learn the basic AI concept.",
            "Understand data and models.",
            "Learn the important terminology.",
            "Study how AI systems use the concept.",
            "Explore real-world applications.",
            "Build or experiment with a beginner AI project."
        ],

        "Modern Technology": [
            "Learn what the technology is.",
            "Understand the basic components involved.",
            "Learn how the technology works.",
            "Understand where it is used.",
            "Explore its advantages and limitations.",
            "Study more advanced real-world applications."
        ],

        "Cybersecurity": [
            "Learn the basic security concept.",
            "Understand the important terminology.",
            "Learn how the technology or technique works.",
            "Study defensive applications.",
            "Practice using the concept in a safe environment.",
            "Continue into more advanced cybersecurity topics."
        ]

    };


    return categoryPaths[topic.category] || [
        `Learn what ${topic.title} is.`,
        "Understand the important terminology.",
        "Learn how it works.",
        "Understand why it matters.",
        "Study real-world examples.",
        "Practice applying what you learned."
    ];

}


/* =========================================================
   CREATE TOPIC RESULT CARD
========================================================= */

function createTopicCard(id, topic) {

    return `

        <article class="topic-card">

            <div class="topic-card-icon">
                ${topic.icon}
            </div>

            <div class="topic-card-content">

                <p class="topic-card-category">
                    ${topic.category}
                </p>

                <h2>
                    ${topic.title}
                </h2>

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

        </article>

    `;

}


/* =========================================================
   SEARCH TOPICS
========================================================= */

function searchTopics() {

    const input =
        document.getElementById("topicSearch");

    const results =
        document.getElementById("searchResults");

    const status =
        document.getElementById("searchStatus");

    const viewer =
        document.getElementById("topicViewer");


    if (!input || !results) {
        return;
    }


    const query =
        input.value
            .trim()
            .toLowerCase();


    results.style.display = "";

    if (status) {
        status.style.display = "";
    }


    results.innerHTML = "";


    if (viewer) {

        viewer.innerHTML = `

            <div class="lesson">

                <h2>
                    Search Results
                </h2>

                <p>
                    Choose a topic below to learn more.
                </p>

            </div>

        `;

    }


    if (!query) {

        if (status) {

            status.textContent =
                `Explore ${Object.keys(topics).length} computer and technology topics.`;

        }

        if (viewer) {
            viewer.innerHTML = `
                <div class="lesson">

                    <h2>
                        Welcome to the Computer Guide
                    </h2>

                    <p>
                        Search above to find something you want
                        to understand, or choose a popular topic.
                    </p>

                    <p>
                        Every topic explains what something is,
                        how it works, why it matters, and how
                        you can begin learning it.
                    </p>

                </div>
            `;
        }

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
                    topic.whyItMatters,
                    topic.example,
                    topic.deepDive,
                    ...topic.keyPoints

                ]
                    .join(" ")
                    .toLowerCase();


                return searchableText.includes(query);

            }
        );


    if (status) {

        status.textContent =
            `${matches.length} topic${matches.length === 1 ? "" : "s"} found for "${input.value.trim()}".`;

    }


    if (matches.length === 0) {

        results.innerHTML = `

            <div class="lesson">

                <h2>
                    🔎 No Topics Found
                </h2>

                <p>
                    We couldn't find a topic matching
                    "<strong>${escapeHTML(input.value.trim())}</strong>".
                </p>

                <p>
                    Try:
                    <strong>CPU</strong>,
                    <strong>RAM</strong>,
                    <strong>Wi-Fi</strong>,
                    <strong>DNS</strong>,
                    <strong>Linux</strong>,
                    <strong>Python</strong>,
                    or
                    <strong>programming</strong>.
                </p>

            </div>

        `;

        return;
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


        if (status) {

            status.textContent =
                `Explore ${Object.keys(topics).length} computer and technology topics.`;

        }

    }
);
