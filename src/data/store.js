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

    ],

    imageCardGallery: [
        'h-2-port-img-1.jpg',
        'h-2-port-img-2.jpg',
        'h-2-port-img-3.jpg',
        'h-2-port-img-4.jpg',
        'h-2-port-img-5.jpg',
        'h-2-port-img-6.jpg'
    ],

    imageCardEvents: [
        'h-2-blog-img-1.jpg',
        'h-2-blog-img-2.jpg',
        'h-2-blog-img-3.jpg'
    ]
})