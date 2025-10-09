export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-10">
      <img src="/Bangalore _ Mumbai - Photographer and Videographer (@iniciopixelstudios) • Instagram photos and videos 2.png" alt="cover" className="w-full rounded-xl border border-black/10" />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</h1>
      <div className="mt-1 opacity-70 text-sm">Oliver Bennett • 18 Jan 2022</div>
      <article className="prose prose-neutral max-w-none mt-6">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <img src="/Imigongo Rwanda 🇷🇼.png" alt="inline" />
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </article>
    </div>
  );
}


