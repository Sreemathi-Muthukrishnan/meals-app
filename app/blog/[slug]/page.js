export default function BlogPostPage({params}) {
    return <main>
        <h1>BlogPost Page</h1>
        <p>{params.slug}</p>
    </main>
}