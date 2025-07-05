import React from "react";
import ReactMarkdown from "react-markdown";
import { getArticles } from "../../utils/utils";
const Posts = () => {
    const files = getArticles(); 
    return (
    <section>
        <h1 className=" mt-6 flex flex-wrap items-center justify-center font-semibold text-2xl font-[family-name:var(--font-geist-sans)]">
            Articles
        </h1>
        {files.map((file) => (
        <article key={file.name} className="mb-10 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{file.name}</h2>
          <ReactMarkdown>{file.content}</ReactMarkdown>
        </article>
      ))}
    </section>
    )
};


export default Posts;
