const projects = [
    {
        id: 29,
        title: {
            en: "Yantai International Kindergarten",
            zh: "烟台国际幼儿园"
        },
        category: {
            en: "Education & Culture",
            zh: "文化教育"
        },
        location: {
            en: "Yantai, China",
            zh: "烟台, 中国"
        },
        year: "2024",
        image: "images/projects/project29/cover.jpg"
    },
    {
        id: 28,
        title: {
            en: "Rainbow Aircarft - Competition for Service Facility of Airport Runway Park",
            zh: "彩虹飞行器 - 南京机场跑道服务设施国际竞赛"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        }, {
            en: "Education & Culture",
            zh: "文化教育"
        }],
        location: {
            en: "Nanjing, China",
            zh: "南京, 中国"
        },
        year: "2024",
        image: "images/projects/project28/cover.jpg"
    },
    {
        id: 27,
        title: {
            en: "The ILLUMANATE Living Building Challenge Competition",
            zh: "ILLUMANATE可持续生活建筑挑战竞赛"
        },
        category: {
            en: "Education & Culture",
            zh: "文化教育"
        },
        location: {
            en: "Melbourne, Australia",
            zh: "墨尔本, 澳大利亚"
        },
        year: "2023",
        image: "images/projects/project27/cover.jpg"
    },
    {
        id: 26,
        title: {
            en: "Shede Experience Center",
            zh: "舍得酒文化体验中心"
        },
        category: {
            en: "Education & Culture",
            zh: "文化教育"
        },
        location: {
            en: "Sichuan, China",
            zh: "四川, 中国"
        },
        year: "2023-2024",
        image: "images/projects/project26/cover.jpg"
    },
    {
        id: 25,
        title: {
            en: "Shengshan Island Auditorium Competition",
            zh: "嵊山岛小剧场竞赛"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        }, {
            en: "Education & Culture",
            zh: "文化教育"
        }],
        location: {
            en: "Zhoushan, China",
            zh: "舟山, 中国"
        },
        year: "2023",
        image: "images/projects/project25/cover.jpg"
    },
    {
        id: 24,
        title: {
            en: "Yichang Grand Theater",
            zh: "宜昌大剧院"
        },
        category: [{
            en: "Education & Culture",
            zh: "文化教育"
        }],
        location: {
            en: "Yichang, China",
            zh: "宜昌, 中国"
        },
        year: "2022-2023",
        image: "images/projects/project24/cover.jpg"
    },
    {
        id: 23,
        title: {
            en: "Moganshan SevenBridges Competition",
            zh: "莫干山七桥竞赛"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        }],
        location: {
            en: "Moganshan, China",
            zh: "莫干山, 中国"
        },
        year: "2023",
        image: "images/projects/project23/cover.jpg"
    },
    {
        id: 22,
        title: {
            en: "The Architect TEAMZERO Award - City Chain",
            zh: "天作杯-城市链条"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        }],
        location: {
            en: "Maastricht, Netherlands",
            zh: "马斯特里赫特，荷兰"
        },
        year: "2022",
        image: "images/projects/project22/cover.jpg"
    },
    {
        id: 21,
        title: {
            en: "Graduation Project - Smart Paper Factory",
            zh: "毕业设计-智能造纸厂"
        },
        location: {
            en: "Maastricht, Netherlands",
            zh: "马斯特里赫特，荷兰"
        },
        category: [{
            en: "Education & Culture",
            zh: "文化教育"
        },{
            en: "Research",
            zh: "研究类设计"
        }],
        year: "2022",
        image: "images/projects/project21/cover.jpg"
    },
    {
        id: 20,
        title: {
            en: "Competition for Chengnan River Landscape Footbridge in Nanjing",
            zh: "绿织桥 - 城南河景观步行桥竞赛"
        },
        location: {
            en: "Nanjing, China",
            zh: "南京，中国"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        }],
        year: "2022",
        image: "images/projects/project20/cover.jpg"
    },
    {
        id: 19,
        title: {
            en: "Jiaxing Footbridge Crossing Huancheng River and Railway Competition",
            zh: "嘉兴跨线桥 - 环城河竞赛"
        },
        location: {
            en: "Jiaxing, China",
            zh: "嘉兴，中国"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        }],
        year: "2022",
        image: "images/projects/project19/cover.jpg"
    },
    {
        id: 18,
        title: {
            en: "Ring - International Bamboo Pavilion Competition",
            zh: "环 - 国际竹亭竞赛"
        },
        location: {
            en: "xxx, Vietnam",
            zh: "xxx，越南"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        }],
        year: "2022",
        image: "images/projects/project18/cover.jpg"
    },
    {
        id: 17,
        title: {
            en: "Xuan Pavilion - Viewing Pavilion Micro Building International Competition",
            zh: "玄亭 - 观景微建筑竞赛"
        },
        location: {
            en: "Nanjing, China",
            zh: "南京，中国"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        },{
            en: "Education & Culture",
            zh: "文化教育"
        }],
        year: "2022",
        image: "images/projects/project17/cover.jpg"
    },
    {
        id: 16,
        title: {
            en: "Schematic Design of the Nodes in Central Ecological Corridor of Wuhan",
            zh: "武汉中央生态走廊节点概念设计"
        },
        location: {
            en: "Wuhan, China",
            zh: "武汉，中国"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        },{
            en: "Education & Culture",
            zh: "文化教育"
        }],
        year: "2022",
        image: "images/projects/project16/cover.jpg"
    },
    {
        id: 15,
        title: {
            en: "Schematic Design of the Nodes in Central Ecological Corridor of Wuhan",
            zh: "武汉中央生态走廊节点概念设计"
        },
        location: {
            en: "Wuhan, China",
            zh: "武汉，中国"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        },{
            en: "Education & Culture",
            zh: "文化教育"
        }],
        year: "2022",
        image: "images/projects/project15/cover.jpg"
    },
    {
        id: 14,
        title: {
            en: "Schematic Design of the Nodes in Central Ecological Corridor of Wuhan",
            zh: "武汉中央生态走廊节点概念设计"
        },
        location: {
            en: "Wuhan, China",
            zh: "武汉，中国"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        },{
            en: "Education & Culture",
            zh: "文化教育"
        }],
        year: "2022",
        image: "images/projects/project14/cover.jpg"
    },
    {
        id: 13,
        title: {
            en: "The Last Nuclear Bomb Memorial",
            zh: "最后的一颗原子弹纪念碑"
        },
        location: {
            en: "Wuhan, China",
            zh: "武汉，中国"
        },
        category: [{
            en: "Pavilion & Bridge",
            zh: "建筑小品"
        }],
        year: "2022",
        image: "images/projects/project13/cover.jpg"
    },
    {
        id: 12,
        title: {
            en: "renovation",
            zh: "修道院改造"
        },
        location: {
            en: "Utrecht, Netherlands",
            zh: "乌特勒支，荷兰"
        },
        year: "2021",
        image: "images/projects/project12/cover.jpg"
    },
    {
        id: 11,
        title: {
            en: "Why Not Paper Architecture",
            zh: "为什么不是纸建筑"
        },
        location: {
            en: "Delft, Netherlands",
            zh: "代尔夫特，荷兰"
        },
        year: "2021",
        image: "images/projects/project11/cover.jpg"
    },
    {
        id: 10,
        title: {
            en: "Green Higirise",
            zh: "绿建高层竞赛"
        },
        location: {
            en: "Nanjing, China",
            zh: "南京，中国"
        },
        year: "2020",
        image: "images/projects/project10/cover.jpg"
    },
    {
        id: 9,
        title: {
            en: "digital",
            zh: "仿生"
        },
        location: {
            en: "Nanjing, China",
            zh: "南京，中国"
        },
        year: "2020",
        image: "images/projects/project9/cover.jpg"
    },
    {
        id: 8,
        title: {
            en: "Software Park",
            zh: "软件园"
        },
        location: {
            en: "Nanjing, China",
            zh: "南京，中国"
        },
        year: "2020",
        image: "images/projects/project8/cover.jpg"
    },
    {
        id: 7,
        title: {
            en: "Force Field",
            zh: "力学生形"
        },
        location: {
            en: "Nanjing, China",
            zh: "南京，中国"
        },
        year: "2023",
        image: "images/projects/project7/cover.jpg"
    },
    {
        id: 6,
        title: {
            en: "Folding",
            zh: "折纸"
        },
        location: {
            en: "Nanjing, China",
            zh: "南京，中国"
        },
        year: "2022",
        image: "images/projects/project6/cover.jpg"
    },
    {
        id: 5,
        title: {
            en: "Form Finding via Machine Learning",
            zh: "基于机器学习的形态生成"
        },
        location: {
            en: "Nanjing, China",
            zh: "南京，中国"
        },
        year: "2021",
        image: "images/projects/project5/cover.jpg"
    },
    {
        id: 4,
        title: "Project 4",
        location: "Beijing, China",
        year: "2020",
        image: "images/projects/project4/cover.jpg"
    },
    {
        id: 3,
        title: "Project 3",
        location: "Shanghai, China",
        year: "2019",
        image: "images/projects/project3/cover.jpg"
    },
    {
        id: 2,
        title: "Project 2",
        location: "Beijing, China",
        year: "2018",
        image: "images/projects/project2/cover.jpg"
    },
    {
        id: 1,
        title: "Project 1",
        location: "Shanghai, China",
        year: "2017",
        image: "images/projects/project1/cover.jpg"
    }
];

// 在文件开头添加语言偏好和分类的初始化
let currentLang = localStorage.getItem('preferredLanguage') || 'en';
let currentCategory = 'all'; // 添加回分类的初始化

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';
    const sortedProjects = [...projects]
        .sort((a, b) => b.id - a.id)
        .filter(project => {
            if (currentCategory === 'all') return true;
            if (!project.category) return false;
            
            const categoryMap = {
                'education': ['文化教育', 'Education & Culture'],
                'pavilion': ['建筑小品', 'Pavilion & Bridge'],
                'research': ['研究类设计', 'Research']
            };
            
            // 如果 category 是数组，检查是否包含当前选中的类别
            if (Array.isArray(project.category)) {
                return project.category.some(cat => 
                    cat[currentLang] === categoryMap[currentCategory][currentLang === 'zh' ? 0 : 1]
                );
            }
            
            // 如果 category 是单个对象，保持原有逻辑
            return project.category[currentLang] === categoryMap[currentCategory][currentLang === 'zh' ? 0 : 1];
        });

    sortedProjects.forEach(project => {
        // 获取标题和位置，同时处理新旧数据结构
        const title = typeof project.title === 'object' ? project.title[currentLang] : project.title;
        const location = typeof project.location === 'object' ? project.location[currentLang] : project.location;

        const projectCard = `
            <a href="projects/project${project.id}.html" class="project-card">
                <div class="image-wrapper">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
                         data-src="${project.image}" 
                         alt="${title}">
                </div>
                <div class="project-info">
                    <h3>${title}</h3>
                    <p>${location} | ${project.year}</p>
                </div>
            </a>
        `;
        projectsGrid.innerHTML += projectCard;
    });

    // 初始化懒加载
    initializeLazyLoading();
}

function initializeLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',  // 提前50px开始加载
        threshold: 0.1
    });

    // 观察所有图片
    document.querySelectorAll('.project-card img').forEach(img => {
        imageObserver.observe(img);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        renderProjects();
    }

    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    
    // 获取当前页面的路径
    const currentPath = window.location.pathname;
    const isProjectPage = currentPath.includes('/projects/');
    
    // 更新所有导航链接的href属性
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (isProjectPage) {
            // 如果是项目详情页，需要返回上一级
            if (link.textContent === 'Projects') {
                link.href = '../index.html';
            } else if (link.textContent === 'About') {
                link.href = '../about.html';
            }
        } else {
            // 如果是主页或关于页，使用普通路径
            if (link.textContent === 'Projects') {
                link.href = 'index.html';
            } else if (link.textContent === 'About') {
                link.href = 'about.html';
            }
        }
        
        // 修改匹配逻辑，处理项目详情页的情况
        const linkPath = link.href.split('/').pop();
        const currentPagePath = window.location.pathname.split('/').pop() || 'index.html';
        if (linkPath === currentPagePath) {
            link.classList.add('active');
        }
    });

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        navLinks.classList.toggle('active');
        header.classList.toggle('menu-open');
    });

    // 点击导航链接后关闭菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('active');
            navLinks.classList.remove('active');
            header.classList.remove('menu-open');
        });
    });

    // 点击页面其他地方关闭菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.menu-icon')) {
            menuIcon.classList.remove('active');
            navLinks.classList.remove('active');
            header.classList.remove('menu-open');
        }
    });

    // 修改折叠功能初始化
    function initializeCollapsible() {
        if (window.innerWidth <= 768) {
            // 选择 award 和 research 部分的年份元素
            const yearElements = document.querySelectorAll('.award-section li .year, .research-section li .year') || [];
            yearElements.forEach(yearElement => {
                yearElement.removeEventListener('click', handleYearClick);
                yearElement.addEventListener('click', handleYearClick);
            });
        }
    }

    function handleYearClick(e) {
        console.log('Year clicked');
        const listItem = e.currentTarget.closest('li');
        const detailGroup = listItem.querySelector('.detail-group');
        
        // 切换当前项
        if (!listItem.classList.contains('active')) {
            // 打开
            listItem.classList.add('active');
            detailGroup.style.display = 'block';
            detailGroup.style.opacity = '0';
            requestAnimationFrame(() => {
                detailGroup.style.opacity = '1';
            });
        } else {
            // 关闭
            listItem.classList.remove('active');
            detailGroup.style.opacity = '0';
            setTimeout(() => {
                detailGroup.style.display = 'none';
            }, 300);
        }
    }

    // 初始化折叠功能
    if (window.location.pathname.includes('about.html')) {
        console.log('Initializing about page features...');
        initializeCollapsible();
        initializeHoverImages();
        
        window.addEventListener('resize', () => {
            initializeCollapsible();
        });
    }

    // 添加悬浮图片功能
    function initializeHoverImages() {
        console.log('Initializing hover images...');
        
        const hoverContainer = document.createElement('div');
        hoverContainer.className = 'hover-image-container';
        document.body.appendChild(hoverContainer);

        const projectImageMap = {
            // 英文标题映射
            'Competition for Service Facility of Airport Runway Park of Nanjing Dajiaochang': 'images/projects/project28/cover.jpg',
            'The ILLUMANATE Living Building Challenge (LBC)Competition': 'images/projects/project27/cover.jpg',
            'Moganshan Seven Bridges Conceptual Design Competition': 'images/projects/project23/cover.jpg',
            'The Architect TEAMZERO Award': 'images/projects/project22/cover.jpg',
            'Competition for Chengnan River Landscape Footbridge in Nanjing': 'images/projects/project20/cover.jpg',
            'Viewing Pavilion Micro Building International Competition': 'images/projects/project17/cover.jpg',
            'Jiaxing Footbridge Crossing Huancheng River and Railway Competition': 'images/projects/project19/cover.jpg',
            'Schematic Design of the Nodes in Central Ecological Corridor of Wuhan': 'images/projects/project15/cover.jpg',
            'Green Architecture National Design Competition': 'images/projects/project10/cover.jpg',
            'DigitalFUTURES2020 Workshop': 'images/projects/project9/cover.jpg',

            // 中文标题映射
            '南京大校场机场跑道公园服务设施国际设计竞赛': 'images/projects/project28/cover.jpg',
            'ILLUMANATE可持续生活建筑挑战竞赛': 'images/projects/project27/cover.jpg',
            '莫干山七桥概念设计竞赛': 'images/projects/project23/cover.jpg',
            '天作杯-城市链条': 'images/projects/project22/cover.jpg',
            '南京城南河景观步行桥竞赛': 'images/projects/project20/cover.jpg',
            '观景微建筑竞赛': 'images/projects/project17/cover.jpg',
            '嘉兴大桥跨越杭甬河和铁路竞赛': 'images/projects/project19/cover.jpg',
            '武汉中心生态走廊节点设计竞赛': 'images/projects/project15/cover.jpg',
            '绿色建筑国家设计竞赛': 'images/projects/project10/cover.jpg',
            '数字未来2020工作坊': 'images/projects/project9/cover.jpg'
        };

        const projectElements = document.querySelectorAll('.competition, .project-name');
        console.log('Found project elements:', projectElements.length);

        projectElements.forEach(projectElement => {
            // 获取当前显示的语言版本的文本
            const activeSpan = projectElement.querySelector('span.active');
            if (!activeSpan) return;
            
            const projectTitle = activeSpan.textContent.trim();
            console.log('Found project title:', projectTitle);
            
            if (projectImageMap[projectTitle]) {
                console.log('Match found for:', projectTitle);
                projectElement.classList.add('has-hover-image');
                
                projectElement.addEventListener('mouseenter', (e) => {
                    console.log('Mouse entered:', projectTitle);
                    const currentActiveSpan = projectElement.querySelector('span.active');
                    const currentTitle = currentActiveSpan.textContent.trim();
                    hoverContainer.innerHTML = `<img src="${projectImageMap[currentTitle]}" alt="${currentTitle}">`;
                    hoverContainer.style.opacity = '1';
                });

                projectElement.addEventListener('mousemove', (e) => {
                    const x = e.clientX + 20;
                    const y = e.clientY + 20;
                    
                    const containerRect = hoverContainer.getBoundingClientRect();
                    const maxX = window.innerWidth - containerRect.width - 20;
                    const maxY = window.innerHeight - containerRect.height - 20;
                    
                    const finalX = Math.min(x, maxX);
                    const finalY = Math.min(y, maxY);
                    
                    hoverContainer.style.left = '0';
                    hoverContainer.style.top = '0';
                    hoverContainer.style.transform = `translate(${finalX}px, ${finalY}px)`;
                });

                projectElement.addEventListener('mouseleave', () => {
                    console.log('Mouse left:', projectTitle);
                    hoverContainer.style.opacity = '0';
                });
            }
        });
    }

    // 修改语言切换功能
    const languageSwitch = document.querySelector('.language-switch');
    const enText = languageSwitch.querySelector('.en');
    const zhText = languageSwitch.querySelector('.zh');
    
    // 初始化时应用保存的语言偏好
    if (currentLang === 'zh') {
        enText.classList.remove('active');
        zhText.classList.add('active');
        updateLanguage('zh');
    } else {
        enText.classList.add('active');
        zhText.classList.remove('active');
        updateLanguage('en');
    }
    
    enText.addEventListener('click', () => {
        if (currentLang !== 'en') {
            currentLang = 'en';
            localStorage.setItem('preferredLanguage', 'en'); // 保存语言偏好
            updateLanguage('en');
            enText.classList.add('active');
            zhText.classList.remove('active');
        }
    });

    zhText.addEventListener('click', () => {
        if (currentLang !== 'zh') {
            currentLang = 'zh';
            localStorage.setItem('preferredLanguage', 'zh'); // 保存语言偏好
            updateLanguage('zh');
            zhText.classList.add('active');
            enText.classList.remove('active');
        }
    });

    function updateLanguage(lang) {
        const translations = {
            en: {
                projects: 'Projects',
                about: 'About'
            },
            zh: {
                projects: '项目',
                about: '关于'
            }
        };

        // 更新导航链接文本
        document.querySelectorAll('.nav-links a').forEach(link => {
            const key = link.getAttribute('href').includes('index') ? 'projects' : 'about';
            link.textContent = translations[lang][key];
        });

        // 如果在项目页面，更新项目相关文本
        if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
            updateProjectsContent(lang);
        }

        // 更新筛选按钮文本
        document.querySelectorAll('.filter-btn span').forEach(span => {
            span.classList.remove('active');
        });
        document.querySelectorAll(`.filter-btn span.${lang}`).forEach(span => {
            span.classList.add('active');
        });

        // 处理项目详情页的语言切换
        if (window.location.pathname.includes('/projects/')) {
            document.querySelectorAll('.en, .zh').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.' + lang).forEach(el => {
                el.classList.add('active');
            });
        }

        // 处理关于页面的语言切换
        if (window.location.pathname.includes('about.html')) {
            document.querySelectorAll('.en, .zh').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.' + lang).forEach(el => {
                el.classList.add('active');
            });
        }
    }

    function updateProjectsContent(lang) {
        currentLang = lang;
        renderProjects(); // 重新渲染项目列表，现在会使用当前语言的标题和位置
    }

    // 添加筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProjects();
        });
    });

    // 初始化筛选按钮的语言显示
    document.querySelectorAll('.filter-btn span').forEach(span => {
        span.classList.remove('active');
    });
    document.querySelectorAll(`.filter-btn span.${currentLang}`).forEach(span => {
        span.classList.add('active');
    });

    // 处理移动端筛选器点击
    const mobileFilters = document.querySelectorAll('.project-filters.mobile-only .filter-btn');
    mobileFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            mobileFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProjects();
            
            // 可选：点击后关闭菜单
            if (window.innerWidth <= 768) {
                menuIcon.classList.remove('active');
                document.querySelector('.nav-links').classList.remove('active');
                document.querySelector('header').classList.remove('menu-open');
            }
        });
    });

    if (document.querySelector('.scroll-wrapper')) {
        const scrollWrapper = document.querySelector('.scroll-wrapper');
        const scrollProgress = document.querySelector('.scroll-progress');
        
        // 更新滚动进度
        const updateScrollProgress = () => {
            const scrollPercentage = (scrollWrapper.scrollLeft / (scrollWrapper.scrollWidth - scrollWrapper.clientWidth)) * 100;
            scrollProgress.style.transform = `translateX(${scrollPercentage}%)`;
        };

        // 滚动事件监听
        scrollWrapper.addEventListener('scroll', updateScrollProgress);

        // 添加鼠标拖动功能
        let isMouseDown = false;
        let startX;
        let scrollLeft;

        scrollWrapper.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            scrollWrapper.style.cursor = 'grabbing';
            startX = e.pageX - scrollWrapper.offsetLeft;
            scrollLeft = scrollWrapper.scrollLeft;
        });

        scrollWrapper.addEventListener('mouseleave', () => {
            isMouseDown = false;
            scrollWrapper.style.cursor = 'grab';
        });

        scrollWrapper.addEventListener('mouseup', () => {
            isMouseDown = false;
            scrollWrapper.style.cursor = 'grab';
        });

        scrollWrapper.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - scrollWrapper.offsetLeft;
            const walk = (x - startX) * 2; // 滚动速度

            // 使用 requestAnimationFrame 来平滑滚动
            requestAnimationFrame(() => {
                scrollWrapper.scrollLeft = scrollLeft - walk;

                // 确保 scrollLeft 不超出范围
                if (scrollWrapper.scrollLeft < 0) {
                    scrollWrapper.scrollLeft = 0;
                } else if (scrollWrapper.scrollLeft > scrollWrapper.scrollWidth - scrollWrapper.clientWidth) {
                    scrollWrapper.scrollLeft = scrollWrapper.scrollWidth - scrollWrapper.clientWidth;
                }
            });
        });

        // 设置默认鼠标样式
        scrollWrapper.style.cursor = 'grab';

        // 防止图片被拖动
        scrollWrapper.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });

        // 初始化进度条
        updateScrollProgress();
    }
}); 