// This runs on the server and passes `files` to the component as props
import fs from 'fs';
import path from 'path';

export function getArticles() {
  const markdownFolder = path.join(process.cwd(), 'src/app/posts/markdowns');
  const filenames = fs.readdirSync(markdownFolder);

  const markdownFiles = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const filePath = path.join(markdownFolder, name);
      const content = fs.readFileSync(filePath, 'utf-8');
      return { name, content };
    });

  return markdownFiles;
}

// export function readFile(filename: string) {
//     return 
// }