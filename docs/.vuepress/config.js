module.exports = {
    title: '测试文档', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: 'dawn测试项目', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/egg.png' }], 
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
        logo: '/egg.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '文档',
                ariaLabel: '文档',
                items: [
                    { text: '测试内容1', link: '/pages/folder1/test1.md' },
                    { text: '测试内容2', link: '/pages/folder2/test4.md' },
                ]
            },
            { text: '其他页面', link: '/pages/folder1/test3.md' },
            { text: 'Github', link: 'https://www.baidu.com' },
        ],
        sidebar: {
            '/pages/folder1/':[
                {
                    title: '主菜单1',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['test1.md', '子菜单1']
                    ]
                },
                {
                    title: '主菜单2',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],
        }
    }
}
