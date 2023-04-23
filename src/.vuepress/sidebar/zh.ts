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

  "/408comeon/": [
    "/",
    {
      text: "408冲刺背诵手册",
      icon: "note",
      // prefix: "408notes/",
      link: "/408comeon/",
      children: "structure",
    },

  ],

  "/ASM/": [
    "/",
    {
      text: "汇编语言笔记",
      icon: "note",
      // prefix: "408notes/",
      link: "/ASM/",
      children: "structure",
    },

  ],
  "/cnotes/": [
    "/",
    {
      text: "C语言笔记",
      icon: "note",
      // prefix: "408notes/",
      link: "/cnotes/",
      children: "structure",
    },

  ],
});
