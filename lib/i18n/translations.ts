export const translations = {
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
        },
        hero: {
            title: "Nguyễn Thế Dũng",
            role: "AI Engineer & Full Stack Developer",
            subtitle: "Building intelligent systems and scalable web solutions",
            description: "Master's student in Information Technology specializing in Full Stack development. I build scalable, end-to-end web and mobile applications using modern technologies like TypeScript, React, and Node.js. With a strong background in Artificial Intelligence, I progressively integrate smart features (Computer Vision, Natural Language Processing, LLMs) into real-world products.",
            viewProjects: "View My Projects",
            contactMe: "Contact Me",
        },
        about: {
            sectionTitle: "ABOUT ME",
            role: "AI Engineer & Full Stack Developer",
            desc1: "Master's student in Information Technology and Full Stack Developer with a strong foundation in modern software architecture.",
            desc2: "I specialize in building scalable, end-to-end web and mobile applications leveraging TypeScript, React, Node.js/NestJS, and Python. With a background in Artificial Intelligence, I progressively integrate smart features (Computer Vision, Natural Language Processing, LLMs) into real-world products to ensure robust backend infrastructures and intuitive frontend experiences.",
            education: "EDUCATION",
            masterTitle: "Master of Information Technology, HUIT (2024 - Present)",
            masterCourses: "Relevant courses: Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision, Advanced Software Architecture.",
            masterResearch: "Research Focus: Implemented social network clustering algorithms for recommendation systems and developed CNN-based models for phrase recognition and complex text analysis.",
            bachelorTitle: "Bachelor of Information Technology, HUIT (2020 - 2024)",
            bachelorDesc: "GPA: 3.16/4.0 | Relevant courses: Data Structures & Algorithms, OOP, Database Systems, Web Development, Software Engineering.",
            activitiesTitle: "ACTIVITIES & INTERESTS",
            volunteeringTitle: "Volunteer (2023 - Present):",
            volunteeringDesc: "Charity meal preparation & distribution for the homeless. Gained a deeper understanding of social responsibility and teamwork.",
            gameTitle: "Game Programmer (Aug 2022 - Dec 2022):",
            gameDesc: "Participated in a Mini Game Jam, building a 2D puzzle game prototype using Unity.",
            interestsTitle: "Interests:",
            interestsDesc: "Actively self-learning about AI tools and full-stack system architectures. Enthusiastic about sci-fi movies, psychological thrillers, and music.",
            yearsExperience: "Years of Experience",
            projectsCompleted: "Projects Completed",
            masterDegree: "Master's",
            degreeCandidate: "Degree Candidate - CS",
        },
        experience: {
            sectionTitle: "PROFESSIONAL JOURNEY",
            title: "Work Experience",
            techStack: "TECH STACK",
            keyAchievements: "KEY ACHIEVEMENTS",
            timeline: {
                started: "Started Career",
                total: "Total Experience",
                current: "Current Track",
                seniorTrack: "Full Stack Engineer",
                startedDate: "February 2024",
                experienceYears: "2 Years"
            },
            jobs: [
                {
                    role: "AI Engineer & Full Stack Developer",
                    company: "SOF",
                    period: "May 2024 – Present",
                    duration: "2 Years",
                    description: "Lead technical initiatives for digital transformation and enterprise AI deployment.",
                    highlights: [
                        "Legacy to Mobile Migration: Spearheaded the transformation of legacy ERP systems into modern, offline-first mobile architectures.",
                        "AI Implementation: Engineered biometric authentication systems (FaceID) for attendance tracking, optimized for standard hardware.",
                        "Full Stack Ecosystems: Built comprehensive Full Stack solutions (POS, Inventory, CRM) for retail clients like Pet Shops.",
                        "Infrastructure: Deployed high-performance, containerized AI and web systems ensuring 99.9% uptime."
                    ]
                },
                {
                    role: "Mobile Developer Intern",
                    company: "DIEN TOAN GROUP",
                    period: "Feb 2024 – Apr 2024",
                    duration: "3 Months",
                    description: "Developed performant React Native applications and implemented secure API consumption strategies.",
                    highlights: [
                        "Cross-Platform Development: Developed performant React Native applications, translating design specifications into responsive UI/UX across Android and iOS platforms.",
                        "Backend Integration: Implemented secure REST API consumption strategies for real-time data synchronization.",
                        "Collaboration: Worked closely with senior developers to adopt industry best practices in state management, navigation, and debugging."
                    ]
                }
            ]
        },
        projects: {
            sectionTitle: "PORTFOLIO",
            title: "Featured Projects",
            techChallenges: "TECHNICAL CHALLENGES SOLVED",
            techHighlights: "KEY TECHNICAL HIGHLIGHTS",
            technologies: "TECHNOLOGIES",
            featuredWork: "Featured Work:",
            clickToExplore: "Click on any project to explore the technical challenges solved and key achievements",
            learnMore: "Learn More",
            code: "Code",
            items: [
                {
                    title: "E-commerce Fashion Platform",
                    role: "Full Stack Developer",
                    category: "Web Application",
                    description: "Developed a comprehensive e-commerce web system for the fashion sector, utilizing TypeScript as the core language to ensure stability and scalability.",
                    challenge: "Standardizing code structure and enforcing strict typing across a full-stack architecture.",
                    solution: [
                        "Participated in both frontend and backend development following a full-stack approach.",
                        "Built core business modules including product catalog, categories, shopping cart, order processing workflow, and user data management.",
                        "Executed the deployment process to production environments, managing builds, releases, and post-deployment monitoring."
                    ]
                },
                {
                    title: "SmartMath - AI Supported Learning Platform",
                    role: "Full Stack Developer",
                    category: "EdTech & Web Application",
                    description: "Built an intelligent educational technology platform focused on math problem-solving, utilizing a full-stack web architecture.",
                    challenge: "Handling complex server-side business logic and integrating specialized scripts.",
                    solution: [
                        "Designed and developed the user interface using SCSS and HTML, optimizing the learning experience.",
                        "Handled server-side business logic and integrated APIs to synchronize learning progress, assignment history, and user results.",
                        "Integrated JavaScript and Python scripts for specialized logic handling and standardized the development pipeline."
                    ]
                },
                {
                    title: "Enterprise ERP Mobile Transformation",
                    role: "Lead Engineer",
                    category: "Legacy Modernization & Mobile Dev",
                    description: "Led the strategic migration of a monolithic PHP ERP system into a modern mobile ecosystem, empowering 100+ remote staff with offline capabilities.",
                    challenge: "Ensuring seamless operation in low-connectivity environments and optimizing data access latency.",
                    solution: [
                        "API Gateway: Refactored legacy PHP views into secure, documented RESTful APIs.",
                        "Offline-First Architecture: Engineered a robust React Native app using Redux Persist.",
                        "Performance & Sync: Reduced data access latency by 40% for remote staff through optimized endpoints and implemented background data synchronization algorithms to resolve conflicts automatically."
                    ]
                },
                {
                    title: "Face Recognition Attendance System",
                    role: "AI Engineer",
                    category: "Computer Vision",
                    description: "Engineered a high-performance attendance system optimized for edge deployment to achieve sub-second latency on standard CPUs while preventing spoofing attacks.",
                    challenge: "Processing high-resolution video streams in real-time on non-GPU hardware and preventing presentation attacks.",
                    solution: [
                        "Multi-Process Architecture: Utilized Python Multiprocessing to decouple heavy AI inference tasks from video streaming threads, preventing bottlenecks.",
                        "Optimization & Security: Achieved <0.5s latency using InsightFace (ArcFace) combined with motion detection triggers. Implemented Liveness Detection algorithms.",
                        "Integration: Synced attendance logs in real-time with the legacy MySQL ERP system."
                    ]
                },
                {
                    title: "Pet Shop Management System (Enterprise SaaS)",
                    role: "Full Stack Engineer",
                    category: "Enterprise SaaS",
                    description: "Developed a comprehensive retail management ecosystem featuring Inventory, POS, and real-time analytics.",
                    challenge: "Building a scalable and consistent full-stack ecosystem.",
                    solution: [
                        "Architecture: Built a scalable, type-safe backend with NestJS following SOLID principles and Enterprise Design Patterns.",
                        "Frontend: Developed a responsive React dashboard with Material-UI, integrating real-time barcode scanning.",
                        "Data Layer & DevOps: Utilized MySQL with TypeORM for complex relationship management and reliable persistence. Fully containerized the stack with Docker."
                    ]
                }
            ]
        },
        skills: {
            sectionTitle: "MY SKILLS",
            title: "Technologies & Tools",
            categories: [
                { title: "Languages" },
                { title: "Frontend" },
                { title: "Backend" },
                { title: "Databases" },
                { title: "AI, ML/DL & LLMs" },
                { title: "DevOps & Cloud" }
            ]
        },
        contact: {
            sectionTitle: "GET IN TOUCH",
            title: "Let's Collaborate",
            description: "Open to discussing enterprise projects, AI integration opportunities, and technical collaborations. Let's work together on solutions that drive digital transformation.",
            emailMe: "Email Me",
            github: "GitHub",
            linkedin: "LinkedIn",
            phone: "Phone",
            email: "Email",
            location: "Location",
            locationDesc: "Truong Chinh, Tan Binh, HCMC"
        },
        footer: {
            allRightsReserved: "All rights reserved."
        }
    },
    vi: {
        nav: {
            about: "Giới thiệu",
            experience: "Kinh nghiệm",
            projects: "Dự án",
            skills: "Kỹ năng",
            contact: "Liên hệ",
        },
        hero: {
            title: "NGUYỄN THẾ DŨNG",
            role: "LẬP TRÌNH VIÊN FULL STACK",
            subtitle: "Xây dựng các hệ thống thông minh và nền tảng web mạnh mẽ",
            description: "Là học viên Cao học ngành Công nghệ Thông tin, tôi đã xây dựng nền tảng vững chắc về kiến trúc phần mềm hiện đại, chuyên sâu về phát triển Full Stack. Tôi đang tìm kiếm vị trí Lập trình viên Full Stack để phát huy thế mạnh về TypeScript, React, Node.js/NestJS và Python nhằm xây dựng các ứng dụng web và di động toàn diện, có khả năng mở rộng cao. Thêm vào đó, nền tảng về Trí tuệ Nhân tạo (AI) cho phép tôi từng bước tích hợp các tính năng thông minh (Thị giác máy tính, Xử lý ngôn ngữ tự nhiên, LLMs) vào các sản phẩm thực tế. Tôi mong muốn làm việc trong một môi trường đổi mới, nơi tôi có thể đóng góp xây dựng hệ thống backend mạnh mẽ và trải nghiệm frontend trực quan.",
            viewProjects: "Xem Dự Án",
            contactMe: "Liên Hệ",
        },
        about: {
            sectionTitle: "MỤC TIÊU NGHỀ NGHIỆP",
            role: "Lập trình viên Full Stack",
            desc1: "Là học viên Cao học ngành Công nghệ Thông tin, tôi đã xây dựng nền tảng vững chắc về kiến trúc phần mềm hiện đại, chuyên sâu về phát triển Full Stack.",
            desc2: "Tôi đang tìm kiếm vị trí Lập trình viên Full Stack để phát huy thế mạnh về TypeScript, React, Node.js/NestJS và Python nhằm xây dựng các ứng dụng web và di động toàn diện, có khả năng mở rộng cao. Thêm vào đó, nền tảng về Trí tuệ Nhân tạo (AI) cho phép tôi từng bước tích hợp các tính năng thông minh (Thị giác máy tính, Xử lý ngôn ngữ tự nhiên, LLMs) vào các sản phẩm thực tế.",
            education: "HỌC VẤN",
            masterTitle: "2024 – Hiện tại | THẠC SĨ CÔNG NGHỆ THÔNG TIN - Trường Đại học Công Thương TP.HCM",
            masterCourses: "Các môn học liên quan: Học máy (Machine Learning), Học sâu (Deep Learning), Xử lý ngôn ngữ tự nhiên (NLP), Thị giác máy tính (Computer Vision), Kiến trúc phần mềm nâng cao.",
            masterResearch: "Định hướng nghiên cứu: Cài đặt các thuật toán phân cụm mạng xã hội cho hệ thống gợi ý (Recommendation Systems) và phát triển các mô hình dựa trên mạng nơ-ron tích chập (CNN) để nhận dạng cụm từ và phân tích văn bản phức tạp.",
            bachelorTitle: "2020 – 2024 | CỬ NHÂN CÔNG NGHỆ THÔNG TIN - Trường Đại học Công Thương TP.HCM",
            bachelorDesc: "Điểm trung bình (GPA): 3.16/4.0 | Các môn học liên quan: Cấu trúc dữ liệu & Thuật toán, Lập trình hướng đối tượng (OOP), Cơ sở dữ liệu, Lập trình Web, Công nghệ phần mềm.",
            activitiesTitle: "HOẠT ĐỘNG & SỞ THÍCH",
            volunteeringTitle: "Tình nguyện viên (2023 - Hiện tại):",
            volunteeringDesc: "Tham gia chuẩn bị và phân phát suất ăn từ thiện cho người vô gia cư. Rèn luyện tinh thần làm việc nhóm và ý thức trách nhiệm với cộng đồng.",
            gameTitle: "Lập trình viên Game (Tháng 8/2022 - Tháng 12/2022):",
            gameDesc: "Tham gia cuộc thi Mini Game Jam, xây dựng nguyên mẫu (prototype) game giải đố 2D bằng công cụ Unity.",
            interestsTitle: "Sở thích:",
            interestsDesc: "Tích cực tự học và nghiên cứu các công cụ AI, các kiến trúc hệ thống full-stack. Đam mê các thể loại phim khoa học viễn tưởng, phim kinh dị tâm lý và khám phá âm nhạc mới.",
            yearsExperience: "Năm Kinh Nghiệm",
            projectsCompleted: "Dự Án Hoàn Thành",
            masterDegree: "Thạc Sĩ",
            degreeCandidate: "Học vấn - IT",
        },
        experience: {
            sectionTitle: "HÀNH TRÌNH SỰ NGHIỆP",
            title: "Kinh nghiệm Làm việc",
            techStack: "CÔNG NGHỆ CHÍNH",
            keyAchievements: "THÀNH TỰU NỔI BẬT",
            timeline: {
                started: "Bắt đầu Sự nghiệp",
                total: "Tổng Kinh Nghiệm",
                current: "Cấp độ Hiện tại",
                seniorTrack: "Kỹ sư Cấp cao (Track)",
                startedDate: "Tháng 2/2024",
                experienceYears: "2 Năm"
            },
            jobs: [
                {
                    role: "KỸ SƯ AI & LẬP TRÌNH VIÊN FULL STACK",
                    company: "Công ty TNHH SOF",
                    period: "Tháng 5/2024 – Hiện tại",
                    duration: "2 Năm",
                    description: "Dẫn dắt các sáng kiến kỹ thuật cho quá trình chuyển đổi số và triển khai AI cấp doanh nghiệp.",
                    highlights: [
                        "Chủ đạo quá trình chuyển đổi hệ thống ERP cũ sang kiến trúc di động hiện đại, ưu tiên hoạt động ngoại tuyến (offline-first).",
                        "Kỹ sư chính phát triển hệ thống xác thực sinh trắc học (FaceID) để điểm danh, tối ưu hóa chạy mượt mà trên các phần cứng tiêu chuẩn.",
                        "Xây dựng các giải pháp Full Stack toàn diện (POS, Quản lý kho, CRM) cho các khách hàng bán lẻ như chuỗi Pet Shop.",
                        "Triển khai các hệ thống AI và Web trên nền tảng container, đảm bảo hiệu năng cao và thời gian hoạt động (uptime) đạt 99.9%."
                    ]
                },
                {
                    role: "THỰC TẬP SINH LẬP TRÌNH DI ĐỘNG",
                    company: "ĐIỆN TOÁN GROUP",
                    period: "Tháng 2/2024 – Tháng 4/2024",
                    duration: "3 Tháng",
                    description: "Phát triển Đa nền tảng: Phát triển các ứng dụng React Native hiệu năng cao, chuyển đổi từ bản thiết kế sang giao diện UI/UX tương thích trên cả Android và iOS.",
                    highlights: [
                        "Phát triển Đa nền tảng: Phát triển các ứng dụng React Native hiệu năng cao, chuyển đổi từ bản thiết kế sang giao diện UI/UX tương thích.",
                        "Tích hợp Backend: Cài đặt các chiến lược kết nối REST API bảo mật để đồng bộ hóa dữ liệu theo thời gian thực.",
                        "Phối hợp làm việc: Làm việc chặt chẽ với các lập trình viên cấp cao để áp dụng các tiêu chuẩn tốt nhất trong ngành về quản lý state, điều hướng và gỡ lỗi (debugging)."
                    ]
                }
            ]
        },
        projects: {
            sectionTitle: "DỰ ÁN",
            title: "Dự Án Nổi Bật",
            techChallenges: "MÔ TẢ DỰ ÁN",
            techHighlights: "ĐÓNG GÓP",
            technologies: "CÔNG NGHỆ",
            featuredWork: "Tính năng Trọng điểm:",
            clickToExplore: "Di chuột và nhấp vào dự án để khám phá!",
            learnMore: "Xem Cụ thể",
            code: "Source Code",
            items: [
                {
                    title: "Nền tảng Thương mại điện tử Thời trang",
                    role: "Lập trình viên Full Stack | Dự án cá nhân",
                    category: "Web Application",
                    description: "Phát triển hệ thống web thương mại điện tử toàn diện cho lĩnh vực thời trang, sử dụng TypeScript làm ngôn ngữ cốt lõi để đảm bảo tính ổn định và khả năng mở rộng.",
                    challenge: "Phát triển hệ thống web thương mại điện tử toàn diện cho lĩnh vực thời trang, sử dụng TypeScript làm ngôn ngữ cốt lõi để đảm bảo tính ổn định và khả năng mở rộng.",
                    solution: [
                        "Tham gia phát triển cả frontend và backend theo định hướng full-stack, chuẩn hóa cấu trúc mã nguồn và kiểm soát chặt chẽ kiểu dữ liệu (strict typing).",
                        "Xây dựng các module nghiệp vụ cốt lõi bao gồm danh mục sản phẩm, thể loại, giỏ hàng, luồng xử lý đơn hàng và quản lý dữ liệu người dùng.",
                        "Thực hiện quy trình triển khai (deploy) lên môi trường production, quản lý các bản build, release và theo dõi hệ thống sau khi triển khai."
                    ]
                },
                {
                    title: "SmartMath - Nền tảng Học tập Hỗ trợ bởi AI",
                    role: "Lập trình viên Full Stack | Dự án cá nhân",
                    category: "EdTech & Web Application",
                    description: "Xây dựng nền tảng công nghệ giáo dục (EdTech) thông minh hỗ trợ giải toán, sử dụng kiến trúc web full-stack.",
                    challenge: "Xây dựng nền tảng công nghệ giáo dục (EdTech) thông minh hỗ trợ giải toán, sử dụng kiến trúc web full-stack.",
                    solution: [
                        "Thiết kế và phát triển giao diện người dùng bằng SCSS và HTML, tối ưu hóa trải nghiệm học tập cho từng dạng bài toán cụ thể.",
                        "Xử lý logic nghiệp vụ phía server và tích hợp API để đồng bộ tiến độ học tập, lịch sử làm bài và kết quả của người dùng.",
                        "Tích hợp các script JavaScript và Python để xử lý các logic chuyên biệt, chuẩn hóa quy trình phát triển từ lúc viết mã (coding) đến khi triển khai."
                    ]
                },
                {
                    title: "Chuyển đổi số Hệ thống ERP Doanh nghiệp",
                    role: "Kỹ sư trưởng (Lead Engineer) | SOF",
                    category: "Legacy Modernization & Mobile Dev",
                    description: "Dẫn dắt chiến lược chuyển đổi hệ thống ERP PHP nguyên khối (monolithic) sang một hệ sinh thái di động hiện đại, cung cấp khả năng làm việc ngoại tuyến (offline) cho hơn 100 nhân viên làm việc từ xa.",
                    challenge: "Dẫn dắt chiến lược chuyển đổi hệ thống ERP PHP nguyên khối (monolithic) sang một hệ sinh thái di động hiện đại, cung cấp khả năng làm việc ngoại tuyến (offline) cho hơn 100 nhân viên làm việc từ xa.",
                    solution: [
                        "API Gateway: Tái cấu trúc (refactor) các mã nguồn PHP cũ thành các RESTful API an toàn, có tài liệu (document) đầy đủ.",
                        "Kiến trúc Offline-First: Xây dựng ứng dụng React Native mạnh mẽ sử dụng Redux Persist, đảm bảo hệ thống hoạt động liền mạch trong môi trường kết nối mạng kém.",
                        "Hiệu năng & Đồng bộ: Giảm 40% độ trễ truy xuất dữ liệu cho nhân viên từ xa thông qua các endpoint được tối ưu hóa và cài đặt thuật toán đồng bộ dữ liệu ngầm để tự động giải quyết xung đột khi có mạng trở lại."
                    ]
                },
                {
                    title: "Hệ thống Điểm danh bằng Nhận diện Khuôn mặt",
                    role: "Kỹ sư AI | SOF",
                    category: "Computer Vision",
                    description: "Phát triển hệ thống điểm danh hiệu năng cao, tối ưu hóa để triển khai trên các thiết bị biên (edge deployment) đạt độ trễ dưới 1 giây trên các CPU thông thường, đồng thời ngăn chặn các hành vi gian lận (spoofing).",
                    challenge: "Phát triển hệ thống điểm danh hiệu năng cao, tối ưu hóa để triển khai trên các thiết bị biên (edge deployment) đạt độ trễ dưới 1 giây trên các CPU thông thường, đồng thời ngăn chặn các hành vi gian lận (spoofing).",
                    solution: [
                        "Kiến trúc Đa tiến trình (Multi-Process): Sử dụng Python Multiprocessing để tách các tác vụ suy luận AI nặng khỏi các luồng truyền phát video (video streaming), ngăn chặn hiện tượng thắt cổ chai hệ thống.",
                        "Tối ưu & Bảo mật: Đạt độ trễ <0.5s bằng cách sử dụng InsightFace (ArcFace) kết hợp với các bộ kích hoạt khi phát hiện chuyển động. Triển khai các thuật toán Phát hiện thực thể sống (Liveness Detection) để vô hiệu hóa các cuộc tấn công đánh lừa hệ thống.",
                        "Tích hợp: Đồng bộ hóa lịch sử điểm danh theo thời gian thực với hệ thống ERP MySQL hiện tại của công ty."
                    ]
                },
                {
                    title: "Hệ thống Quản lý Chuỗi Cửa hàng Thú cưng",
                    role: "Kỹ sư Full Stack | SOF",
                    category: "Enterprise SaaS",
                    description: "Phát triển một hệ sinh thái quản lý bán lẻ toàn diện với các tính năng Quản lý Kho, POS và phân tích dữ liệu theo thời gian thực.",
                    challenge: "Phát triển một hệ sinh thái quản lý bán lẻ toàn diện với các tính năng Quản lý Kho, POS và phân tích dữ liệu theo thời gian thực.",
                    solution: [
                        "Kiến trúc: Xây dựng backend có khả năng mở rộng, an toàn kiểu dữ liệu với NestJS, tuân thủ chặt chẽ các nguyên tắc cấu trúc SOLID và Enterprise Design Patterns.",
                        "Frontend: Phát triển trang quản trị (dashboard) React hiển thị tương thích đa màn hình (responsive) với Material-UI, tích hợp chức năng quét mã vạch trực tiếp.",
                        "Tầng Dữ liệu & DevOps: Sử dụng MySQL với TypeORM để quản lý các mối quan hệ dữ liệu phức tạp. Container hóa toàn bộ hệ thống bằng Docker để chuẩn hóa quy trình CI/CD và triển khai thực tế."
                    ]
                }
            ]
        },
        skills: {
            sectionTitle: "KỸ NĂNG CÔNG NGHỆ",
            title: "Công Cụ & Công Nghệ Cốt Lõi",
            categories: [
                { title: "Ngôn ngữ" },
                { title: "Frontend" },
                { title: "Backend" },
                { title: "Cơ sở dữ liệu" },
                { title: "AI, ML/DL & LLMs" },
                { title: "DevOps & Cloud" }
            ]
        },
        contact: {
            sectionTitle: "LIÊN HỆ",
            title: "Hợp Tác Cùng Nhau",
            description: "Tôi luôn sẵn sàng thảo luận về các dự án chuyển đổi cấp doanh nghiệp, cơ hội thiết thực liên quan đến triển khai tích hợp AI, và những mối hợp tác trên công cuộc kiến tạo kỹ thuật số.",
            emailMe: "Gửi Thư Email",
            github: "Khám Phá Source Code (GitHub)",
            linkedin: "Hồ Sơ LinkedIn",
            phone: "Điện thoại",
            email: "Email",
            location: "Khu vực",
            locationDesc: "Trường Chinh, Tân Bình, TP.HCM"
        },
        footer: {
            allRightsReserved: "Toàn bộ bản quyền thuộc về Nguyễn Thế Dũng."
        }
    }
};

export type Language = "en" | "vi";
