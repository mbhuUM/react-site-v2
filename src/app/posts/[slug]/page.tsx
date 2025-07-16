import ReactMarkdown from "react-markdown";
import { getArticleBySlug, getArticles } from "../../utils/utils";
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export function generateStaticParams() {
  const articles = getArticles();
  
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  
  return (
    <article className="flex flex-col items-center justify-center p-6 w-full">
      <h1 className="text-2xl">{article.title}</h1>
      <p className="text-sm text-gray-500">{article.publishedAt}</p>
      <div className="items-center flex flex-col prose prose-sm sm:prose-base lg:prose-lg max-w-none w-full px-4 dark:prose-invert mb-5">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}