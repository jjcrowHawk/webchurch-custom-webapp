export enum LinkPath {
  HOME = "/",
  ABOUT_CHURCH = "/about/church",
  MINISTERIES = "/ministeries",
  SERMONS = "/sermons",
  EVENTS = "/events"
}

export interface LinkModel {
  name: string;
  displayName: string;
  path: LinkPath;
  isActive: boolean;
}

export const WEBPAGE_LINKS: Array<LinkModel> = [
  {
    name: "home",
    displayName: "",
    path: LinkPath.HOME,
    isActive: true
  },
  {
    name: "about-church",
    displayName: "IGLESIA",
    path: LinkPath.ABOUT_CHURCH,
    isActive: false
  },
  {
    name: "ministeries",
    displayName: "MINISTERIOS",
    path: LinkPath.MINISTERIES,
    isActive: false
  },
  {
    name: "sermons",
    displayName: "PREDICAS",
    path: LinkPath.SERMONS,
    isActive: false
  },
  {
    name: "events",
    displayName: "EVENTOS",
    path: LinkPath.EVENTS,
    isActive: false
  },
]

export const getHomeLink = (): LinkModel => {
  return WEBPAGE_LINKS.find((e) => e.path == LinkPath.HOME)!
}

export const getMenuLinks = (): Array<LinkModel> => {
  return WEBPAGE_LINKS.filter((e) => e.path != LinkPath.HOME)
}