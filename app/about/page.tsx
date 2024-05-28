async function getData() {
  const url = `https://gist.githubusercontent.com/mlfcnt/bda9b7bba46a5c4c81193d5102544b0a/raw?timestamp=${new Date().getTime()}`;
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const text = await res.text();
  return text;
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}
