---
layout: custom
title: Blog
---

<section class="body-section blog">

  <h1>Blog</h1>

  {% for post in site.posts %}
    <article class="blog-post">
      <h2>{{ post.title }}</h2>
      <small>{{ post.date | date: "%b %d, %Y" }}</small>
      <div class="post-content">
        {{ post.content }}
      </div>
    </article>
  {% endfor %}

</section>