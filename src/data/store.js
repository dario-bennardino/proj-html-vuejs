import { reactive } from 'vue'

export const store = reactive({
    links: [
        { text: 'HOME', url: '#' },
        { text: 'PAGES', url: '#' },
        { text: 'PORTFOLIO', url: '#' },
        { text: 'BLOG', url: '#' },
        { text: 'SHOP', url: '#' },
        { text: 'ELEMENTS', url: '#' }

    ]
})