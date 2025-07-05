// This runs on the server and passes `files` to the component as props
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getArticles() {
  const markdownFolder = path.join(process.cwd(), 'src/app/posts/markdowns');
  const filenames = fs.readdirSync(markdownFolder);

  const markdownFiles = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const filePath = path.join(markdownFolder, name);
      const rawContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(rawContent); // parses frontmatter
      return {
        slug: name.replace(/\.md$/, ''),
        title: data.title || name, // fallback to filename
        publishedAt: data.publishedAt || null,
        summary: data.summary || '',
        content,
      };
    });
  return markdownFiles;
}

export function getArticleBySlug(slug: string) {
  const markdownFolder = path.join(process.cwd(), 'posts/markdowns');
  const filePath = path.join(markdownFolder, `${slug}.md`);
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(rawContent);

  return {
    slug,
    title: data.title || slug,
    publishedAt: data.publishedAt || null,
    summary: data.summary || '',
    content,
  };
}
