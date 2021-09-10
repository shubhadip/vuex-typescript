import { Component } from "vue";
import { isDesktop, isSSR } from "@/shared/misc";
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from "vue-router";
// import Home from "../views/Home.vue";

/**
 * appends '/' if path does not have it. ignores if path is ''.
 * @param path
 */
const sanitizePath = (path: string): string => {
  let sanitizedPath = path;
  if (!sanitizedPath) {
    sanitizedPath = "";
  }
  if (sanitizedPath !== "" && !sanitizedPath.endsWith("/")) {
    sanitizedPath += "/";
  }
  return sanitizedPath;
};
/**
 * Returns component view of view name passed
 * @param view View's string vue file name
 * @param path Folder path from views folder
 */
export const lazyLoad = (
  view: string,
  path = "",
  hasMobileVersion = false,
  mobilePath = "mobile/"
): any => {
  return (): Component =>
    !isDesktop() && hasMobileVersion
      ? import(
          /* webpackChunkName: "view-mobile-[request]" */ `@/views/${sanitizePath(
            path
          )}${sanitizePath(mobilePath)}${view}Mobile.vue`
        )
      : import(
          /* webpackChunkName: "view-[request]" */ `@/views/${sanitizePath(
            path
          )}${view}.vue`
        );
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: lazyLoad("Home", "", true)
  }
];

const router = createRouter({
  history: isSSR ? createMemoryHistory() : createWebHistory(),
  routes
});

export default router;
