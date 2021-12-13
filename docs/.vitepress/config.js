module.exports = {
    base: "/herboys",
    lang: "zh-CN",
    title: "小小胖的前端自救之路",
    description: "欢迎来到小小胖的前端自救之路的博客,在这里学习笔记，记录学习历程，分享学习总结！",
    themeConfig: {
        nav: [
            {text: "首页", link: "/"},
            {text: "javascript", link: "/javascript/"},
            {text: "Vue", link: "/Vue/index"},
            {text: "React", link: "/React/index"},
            {text: "数据结构与算法", link: "/algorithm/index"},
            {
                text: "GitHub",
                link: "https://github.com/herboys",
                isExternal: true,
            },
        ],
        sidebar: {
            javascript: [
                {
                    text: "深入javascript",
                    children: [
                        {text: "JavaScript深入之执行上下文", link: "/javascript/1"},
                    ],
                },
            ],
            Vue: [
                {
                    text: "Vue",
                    children: [
                        {text: "Vue", link: "/Vue/1"},
                    ],
                },
            ],
            React: [
                {
                    text: "React",
                    children: [
                        {text: "React", link: "/React/1"},
                    ],
                },
            ],
            algorithm: [
                {
                    text: "算法学习",
                    children: [
                        {text: "开始学习算法", link: "/algorithm/1"},
                    ],
                },
            ],
        },
    },
};
