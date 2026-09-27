/* =========================================================
   COMPUTER GUIDE
   50-TOPIC SEARCH + KNOWLEDGE ENGINE
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
        related: ["operating-system", "servers", "cloud-computing"]
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
            "Modern data centers use redundant power, network connections, cooling systems, monitoring, automation, and security measures.",
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
   SEARCH TOPICS
========================================================= */

function searchTopics() {

    const input =
        document.getElementById("topicSearch");

    const results =
        document.getElementById("searchResults");

    const status =
        document.getElementById("searchStatus");


    if (!input || !results) {

        return;

    }


    const query =
        input.value
            .trim()
            .toLowerCase();


    results.innerHTML = "";


    if (!query) {

        if (status) {

            status.textContent =
                "Type something to search the Computer Guide.";

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
                    topic.deepDive

                ]
                    .join(" ")
                    .toLowerCase();


                return searchableText.includes(query);

            }
        );


    if (status) {

        status.textContent =
            matches.length +
            " topic" +
            (matches.length === 1 ? "" : "s") +
            " found.";

    }


    if (matches.length === 0) {

        results.innerHTML = `

            <div class="lesson">

                <h2>🔎 No Topics Found</h2>

                <p>
                    We couldn't find a topic matching
                    "<strong>${escapeHTML(query)}</strong>".
                </p>

                <p>
                    Try searching for:
                    <strong>CPU</strong>,
                    <strong>RAM</strong>,
                    <strong>Wi-Fi</strong>,
                    <strong>DNS</strong>,
                    <strong>Linux</strong>,
                    or
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

    if (!viewer) {
        return;
    }


    /* =====================================================
       BUILD RELATED TOPICS
    ===================================================== */

    const relatedTopics =
        topic.related
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
       BUILD KEY POINTS
    ===================================================== */

    const keyPoints =
        topic.keyPoints
            .map(point => {

                return `
                    <li>
                        ${point}
                    </li>
                `;

            })
            .join("");


    /* =====================================================
       DISPLAY TOPIC
    ===================================================== */

    viewer.innerHTML = `

        <article class="topic-page">


            <!-- =================================================
                 TOPIC HEADER
            ================================================= -->

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


            <!-- =================================================
                 QUICK ANSWER
            ================================================= -->

            <section class="topic-section">

                <h3>
                    📖 What Is It?
                </h3>

                <p>
                    ${topic.quickAnswer}
                </p>

            </section>


            <!-- =================================================
                 HOW IT WORKS
            ================================================= -->

            <section class="topic-section">

                <h3>
                    ⚙️ How It Works
                </h3>

                <p>
                    ${topic.howItWorks}
                </p>

            </section>


            <!-- =================================================
                 WHY IT MATTERS
            ================================================= -->

            <section class="topic-section">

                <h3>
                    🎯 Why It Matters
                </h3>

                <p>
                    ${topic.whyItMatters}
                </p>

            </section>


            <!-- =================================================
                 REAL WORLD EXAMPLE
            ================================================= -->

            <section class="topic-section">

                <h3>
                    💡 Real-World Example
                </h3>

                <p>
                    ${topic.example}
                </p>

            </section>


            <!-- =================================================
                 DEEP DIVE
            ================================================= -->

            <section class="topic-section">

                <h3>
                    🔬 Deeper Explanation
                </h3>

                <p>
                    ${topic.deepDive}
                </p>

            </section>


            <!-- =================================================
                 KEY POINTS
            ================================================= -->

            <section class="topic-section">

                <h3>
                    🧠 Key Things to Remember
                </h3>

                <ul class="topic-key-points">

                    ${keyPoints}

                </ul>

            </section>


            <!-- =================================================
                 RELATED TOPICS
            ================================================= -->

            <section class="topic-section">

                <h3>
                    🔗 Related Topics
                </h3>

                <p>
                    Continue exploring related
                    computer and technology topics.
                </p>

                <div class="topics">

                    ${relatedTopics}

                </div>

            </section>


        </article>

    `;


    /* =====================================================
       SCROLL TO TOPIC
    ================================================= */

    viewer.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

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


    if (!results) {

        return;

    }


    /* Find topics belonging to this category */

    const matches =
        Object.entries(topics).filter(
            ([id, topic]) => {

                return topic.category
                    .toLowerCase()
                    .includes(category.toLowerCase());

            }
        );


    /* Clear old results */

    results.innerHTML = "";


    /* Clear old topic viewer */

    if (viewer) {

        viewer.innerHTML = "";

    }


    /* No results */

    if (matches.length === 0) {

        if (status) {

            status.textContent =
                "No topics found in this category.";

        }

        return;

    }


    /* Update category status */

    if (status) {

        status.textContent =
            matches.length +
            " topic" +
            (matches.length === 1 ? "" : "s") +
            " in " +
            category;

    }


    /* Display category topics */

    matches.forEach(
        ([id, topic]) => {

            results.innerHTML += `

                <div class="lesson search-result">

                    <h2>

                        ${topic.icon}

                        ${topic.title}

                    </h2>


                    <p>

                        <strong>
                            Category:
                        </strong>

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


    /* Scroll to results */

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
