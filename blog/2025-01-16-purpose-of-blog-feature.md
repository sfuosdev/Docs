---
slug: welcome
title: Purpose of blog feature
authors: [tommy]
tags: [how-to-use, docusaurus]
---

<!-- truncate -->

The SFU Open Source Development Club will use the Docusaurus Blog feature to document the responsibilities and tips of project leads and club executives. The blogs can be based on personal experience or basic knowledge.

With permission from the club presidents, any SFU OS Dev Club executives, ex-executives, project leads (project managers), and project members can write blog posts. Blog posts can be .md or .mdx format.

If you are willing to write blog, please make your profiles in <code>authors.yml</code>:

```yml
slorber:
  name: Sébastien Lorber
  title: Docusaurus maintainer
  url: https://sebastienlorber.com
  image_url: https://github.com/slorber.png
  page:
    # customize the url of the author page at /blog/authors/<permalink>
    permalink: "/all-sebastien-lorber-articles"
  socials:
    x: sebastienlorber
    linkedin: sebastienlorber
    github: slorber
    newsletter: https://thisweekinreact.com
```

and attach this to your blog post at the top:

```yml
---
slug: welcome
title: Purpose of blog feature
authors: [tommy]
tags: [how-to-use, docusaurus]
---
```

If there are multiple authors for one blog post, please make both author profiles in <code>authors.yml</code> and add it like example below:

```yml
---
slug: first-blog-post
title: First Blog Post
authors: [slorber, yangshun]
tags: [hola, docusaurus]
---
```

You are welcome to create tags for your blog post such as this in <code>tags.yml</code>:

```yml
executives:
  label: Executives
  permalink: /executives
  description: Executives tag description
```
