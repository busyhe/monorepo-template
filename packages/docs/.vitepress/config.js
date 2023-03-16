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
            appId: '7D862EPLSM',
            apiKey: '3c565302f60dfe89e9e9a3c338c691c1',
            indexName: 'monorepo-template'
        }
    }
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
