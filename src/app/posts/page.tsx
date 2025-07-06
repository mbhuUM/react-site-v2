import React from "react";
import ReactMarkdown from "react-markdown";
import { getArticles } from "../utils/utils";
import Link from "next/link";


const Posts = () => {
    const files = getArticles(); 
    return (
    <section>
        <h1 className=" mt-6 flex flex-wrap items-center justify-center font-semibold text-2xl font-[family-name:var(--font-geist-sans)]">
            Articles
        </h1>
        {files.map((file) => (
        <article key={file.slug} className="mb-10 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{file.title}</h2>
          <p className="text-sm mb-2">{file.publishedAt}</p>
          <p className="mb-4">{file.summary}</p>
          <Link
          href={"/posts/" + file.slug} 
          className="underline inline-flex items-center gap-2 text-inherit mr-4">
            Read more
          </Link>
        </article>
      ))}
    </section>
    )
};


export default Posts;
