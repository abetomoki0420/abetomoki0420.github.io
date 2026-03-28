import lume from "lume/mod.ts";
import blog from "blog/mod.ts";

const site = lume({
  location: new URL("https://abetomoki0420.github.io/github-pages-blog/"),
});

site.use(blog());

export default site;
