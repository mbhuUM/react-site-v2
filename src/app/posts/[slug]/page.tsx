import React from "react";
import ReactMarkdown from "react-markdown";
import { getArticleBySlug, getArticles } from "../../utils/utils";

export async function generateStaticParams() {
  const articles = getArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}


export default async function PostPage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  return (
    <article className="p-6 prose max-w-none">
      <h1>{article.title}</h1>
      <p className="text-sm text-gray-500">{article.publishedAt}</p>
      <ReactMarkdown>{article.content}</ReactMarkdown>
    </article>
  );
}
