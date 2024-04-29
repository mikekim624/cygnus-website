const menu_data = [
    {
        id: 1,
        mega_menu: false,
        has_dropdown: false,
        title: 'Home',
        link: '/home',
        active: 'active',
        sub_menus: [
            /*
      { link: "/", title: "Home Style 1" },
      { link: "/home-2", title: "Home Style 2" },
      { link: "/home-3", title: "Home Style 3" },*/
        ],
    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: false,
        title: 'About Us',
        link: '/about',
        active: '',
        sub_menus: [],
    },
    {
        id: 3,
        mega_menu: false,
        has_dropdown: true,
        title: 'Products',
        link: '',
        active: '',
        sub_menus: [
            {
                link: '/products/terminals',
                title: 'Terminal Solutions',
                has_dropdown: false,
            },
            {
                link: '/products/pos',
                title: 'POS Solutions',
                has_dropdown: true,
                sub_menus: [
                    {
                        link: '/products/pos/documentor',
                        title: 'Documentor POS',
                    },
                    { link: '/products/pos/supermenu', title: 'Supermenu POS' },
                    { link: '/products/pos/jmsc', title: 'JMSC POS' },
                    { link: '/products/pos/clover', title: 'Clover POS' },
                ],
            },
            { link: '/products/online-ordering', title: 'Online Ordering' },
            { link: '/products/mobile-app', title: 'Mobile App' },
            {
                link: 'https://finovacapital.com/cygnus-payments/',
                title: 'Finova Capital',
            },
        ],
    },
    {
        id: 4,
        mega_menu: false,
        has_dropdown: false,
        title: 'Partners',
        link: '/team-1',
        active: '',
    },
    {
        id: 5,
        mega_menu: false,
        has_dropdown: false,
        title: 'Contact Us',
        link: '/contact',
        active: '',
    },
    {
        id: 6,
        mega_menu: false,
        has_dropdown: false,
        title: 'Careers',
        link: 'https://apply.workable.com/cygnus-pay-careers/?lng=en',
        active: '',
    },
    {
        id: 7,
        mega_menu: false,
        has_dropdown: true,
        title: 'Self Services',
        link: '',
        active: '',
        sub_menus: [
            {
                link: '',
                title: 'Merchant Services',
                has_dropdown: true,
                sub_menus: [
                    {
                        link: 'https://pciapply.com/cygnuspayments',
                        title: 'PCI Compliance',
                    },
                ],
            },
            {
                link: '',
                title: 'Agent Services',
                has_dropdown: true,
                sub_menus: [
                    {
                        link: 'https://cygnus.iriscrm.com/v2/login?ref=/v2',
                        title: 'IRIS CRM',
                    },
                    {
                        link: 'https://forms.zohopublic.com/mikekim1/form/TerminalRequestForm/formperma/njHZPrUSICCUT9HiX3LugEWak7JCEQ1Rdd74mLSWRps',
                        title: 'Terminal Request Form',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: false,
        title: 'FRS',
        link: '/products/frs',
        active: '',
        sub_menus: [],
    },
]
export default menu_data
