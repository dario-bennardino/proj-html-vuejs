import { reactive } from 'vue'

export const store = reactive({
    links: [
        { text: 'HOME', url: '#' },
        { text: 'PAGES', url: '#' },
        { text: 'PORTFOLIO', url: '#' },
        { text: 'BLOG', url: '#' },
        { text: 'SHOP', url: '#' },
        { text: 'ELEMENTS', url: '#' }

    ],

    footerColumns: [

        { email: 'maree.qode@gmail.com' },
        { phone: '+44645 321 789' },
        { address: "Avenue d'Audergem 10 1040 Brussels, Belgium" },
        { social: 'Stay in touch with us' },
        { slogan: "Let's Get Creative" }
    ],

    socialIcons: [
        {
            name: 'Facebook',
            iconClass: 'fab fa-facebook-f'
        },

        {
            name: 'LinkedIn',
            iconClass: 'fab fa-linkedin-in'
        },

        {
            name: 'Pinterest',
            iconClass: 'fa-brands fa-pinterest'
        },

        {
            name: 'X',
            iconClass: 'fa-solid fa-x'
        }

    ]
})