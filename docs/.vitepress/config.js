module.exports = {
    base: "/blog",
    lang: "zh-CN",
    title: "小小胖的前端自救之路",
    description: "欢迎来到小小胖的前端自救之路的博客,在这里学习笔记，记录学习历程，分享学习总结！",
    themeConfig: {
        nav: [
            {text: "首页", link: "/"},
            {text: "javascript", link: "/javascript/index"},
            // {text: "Vue", link: "/Vue/index"},
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
                    text: "js基础",
                    children: [
                        {text: "事件循环", link: "/javascript/1"},
                        {text: "垃圾回收,闭包", link: "/javascript/1"},
                        {text: "原型链,继承", link: "/javascript/1"},
                        {text: "异步解决方案", link: "/javascript/1"},
                    ],
                },
                {text: "性能优化", link: "/javascript/性能优化"},
            ],
            // Vue: [
            //     {
            //         text: "Vue",
            //         children: [
            //             {text: "Vue", link: "/Vue/1"},
            //         ],
            //     },
            // ],
            React: [
                {
                    text: "核心概念",
                    children: [
                        {text: "React", link: "/React/1"},
                    ],
                },
                {
                    text: "高阶索引",
                    children: [
                        {text: "React", link: "/React/1"},
                    ],
                }, {
                    text: "Hook",
                    children: [
                        {text: "useState", link: "/React/useState"},
                        {text: "useEffect", link: "/React/useEffect"},
                        {text: "useLayoutEffect", link: "/React/useLayoutEffect"},
                        {text: "useContext", link: "/React/useContext"},
                        {text: "useReducer", link: "/React/useReducer"},
                        {text: "useRef", link: "/React/useRef"},
                        {text: "useCallback", link: "/React/useCallback"},
                        {text: "useMemo", link: "/React/useMemo"},
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
