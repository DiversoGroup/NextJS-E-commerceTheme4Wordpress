import { gql } from '@apollo/client';
import MenuFragment from './fragments/menusFragment';

export const HeaderFooter = `
headerMenus: menuItems(where: {location: PRIMARY, parentId: "0"}) {
edges {
    node {
    ...MenuFragment
    childItems {
        edges {
        node {
            ...MenuFragment
        }
        }
    }
    }
}
}

footerMenus: menuItems(where: {location: FOOTER_MENU, parentId: "0"}) {
    edges {
        node {
        ...MenuFragment
        }
    }
}
`;

export const GET_MENUS = gql`
query GET_MENUS {
  ${HeaderFooter}
}
  ${MenuFragment}
`;
