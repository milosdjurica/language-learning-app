// ! Without the defined matcher, this line applies next=auth
// ! to the entire project

export { default } from "next-auth/middleware";

// ! matcher for specific pages (can be regex)
// export const config = { matcher: ["/pageName", "/page2"] };
