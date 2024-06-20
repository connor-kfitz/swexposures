import { SortDirection } from "@/app/common/enums";

export const navItems: NavItem[] = [
    {
        name: 'South West Exposures',
        path: '/'
    },
    {
        name: 'About SWE',
        path: '/about'
    },
    {
        name: 'Shielding Products',
        path: '/shielding-products'
    },
    {
        name: 'How To Buy',
        path: '/how-to-buy'
    },
    {
        name: 'News',
        path: '/news'
    },
    {
        name: 'Quote & Information Request',
        path: '/contact'
    }
];

export const sortDirectionOptions: SortDirection[] = [
    SortDirection.Ascending,
    SortDirection.Descending
]