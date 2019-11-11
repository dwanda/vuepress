module.exports = {
    title: 'Wiki 1003', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: '金志相的 Wiki 1001 维基百科', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/egg.png' }], 
    ],
    themeConfig: {
        logo: '/egg.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/pages/test1.md' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['/pages/test2.md', 'Explicit link text']
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */ ]
            }
        ]
    }
}
