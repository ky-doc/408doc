import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // "/": [
  //   "/",
  //   {
  //     icon: "discover",
  //     text: "案例",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文档",
  //     icon: "note",
  //     prefix: "guide/",
  //     children: "structure",
  //   },
  //   "slides",
  // ],
  "/408notes/": [
    "/",
    {
      text: "408笔记【常规版】",
      icon: "note",
      // prefix: "408notes/",
      link: "/408notes/",
      children: "structure",
    },
    
  ],

  "/408notesPlus/": [
    "/",
    {
      text: "408笔记【详细版】",
      icon: "note",
      // prefix: "408notes/",
      link: "/408notesPlus/",
      children: "structure",
    },

  ],

  "/ex/": [
    "/",
    {
      text: "408重要例题及解析",
      icon: "note",
      // prefix: "408notes/",
      link: "/ex/",
      children: "structure",
    },

  ],
});
