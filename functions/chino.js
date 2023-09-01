export async function onRequestGet() {
    const max = 267;
    return new Response(await (await fetch(`https://raw.githubusercontent.com/AutumnVN/chino.webp/main/${Math.ceil(Math.random() * max)}.webp`)).blob(), {
        headers: {
            'content-type': 'image/webp',
            'cache-control': 'no-cache, max-age=0'
        }
    });
}
