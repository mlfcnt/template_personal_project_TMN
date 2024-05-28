import { marked } from "marked";

async function getData() {
  const res = await fetch(
    "https://gist.githubusercontent.com/mlfcnt/bda9b7bba46a5c4c81193d5102544b0a/raw"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const text = await res.text();
  return text;
}

export default async function Page() {
  const data = await getData();
  const html = marked(data);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html as string }} />
    </div>
  );
}