export interface IMenu {
    header: { text: string, link: string, tooltip?: string };
    items: Array<{
        text: string,
        icon: string,
        link: string,
        tooltip?: string
    }>;
}

export const Menus: IMenu[] = [{
    header: {
        text: '快捷导航',
        link: '/home'
    },
    items: [{
        text: '首页',
        icon: 'icon-home',
        link: '/home'
    }]
}];
