import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "首页", icon: "home", link: "/" },
  // "/",
  // { text: "案例", icon: "discover", link: "/demo/" },
  {
    text: "笔记",
    icon: "creative",
    // prefix: "/",
    children: [
      {
        text: "408笔记【常规版】",
        icon: "note",
        // prefix: "408notes/",
        link: "/408notes/DS/第一章 绪论.md",
        // prefix: "/",
        // children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "408笔记【详细版】",
        icon: "note",
        // prefix: "408notes/",
        link: "/408notesPlus/Data-Structrue/0-summary.md",
        // prefix: "/",
        // children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "408重要例题及解析",
        icon: "note",
        // prefix: "408notes/",
        link: "/ex/Data-Structrue/0-summary-ex.md",
        // prefix: "/",
        // children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "408冲刺背诵手册",
        icon: "note",
        // prefix: "408notes/",
        link: "/408comeon/408comeon.md",
        // prefix: "/",
        // children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "汇编语言笔记",
        icon: "note",
        // prefix: "408notes/",
        link: "/ASM/assembler.md",
        // prefix: "/",
        // children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "C语言笔记",
        icon: "note",
        // prefix: "408notes/",
        link: "/cnotes/Cbase.md",
        // prefix: "/",
        // children: ["baz", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  { text: "下载资料", icon: "discover", link: "/download/" },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
