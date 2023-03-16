/**
 * File: config.js
 * Created by busyhe on 2022/6/23 22:44.
 * Email: busyhe@qq.com
 * Description:
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/monorepo-template/',
    title: 'docs',
    appearance: true,
    lastUpdated: true,
    themeConfig: {
        nav: nav(),
        sidebar: {
            '/guide/': sidebarGuide()
        },
        editLink: {
            pattern: 'https://github.com/wfe-templates/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wfe-templates/vitepress' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present busyhe <busyhe@qq.com>'
        },
        algolia: {
            appId: 'X3IHGJTWF2',
            apiKey: '3293e377e1b797d5cabbb3d4fc6ba596',
            indexName: 'monorepo-template'
        }
    },
    head: [
        [
            'script',
            { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-RPSQ3TMDXQ' }
        ],
        [
            'script',
            {},
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-RPSQ3TMDXQ');"
        ]
    ]
})

function nav() {
    return [
        { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
        { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
        {
            text: 'Changelog',
            link: 'https://github.com/busyhe/monorepo-template/releases'
        }
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
                { text: 'Getting Started', link: '/guide/getting-started' }
            ]
        }
    ]
}
