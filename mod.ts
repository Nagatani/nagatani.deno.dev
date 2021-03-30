import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";

const page = (title: string, body: string): Response => new Response(`
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${title}</title>

  <style>
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, "メイリオ", Meiryo, Arial, sans-serif;
    font-feature-settings: "palt";
    font-size: 5vw;
    background: #fefefe;
    color: #002555;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  main>h1 {
    margin: 1rem 0;
    font-size: 2rem;
    text-align: center;
    display: inline-block;
    animation: shake 0.1s ease infinite;
  }
  p {
    margin-top: 2rem;
  }
  p.copyright {
    text-align: center;
    font-size: 0.5rem;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  @keyframes shake {
    0% { transform: translate(3px, 2px) rotate(0deg); }
    10% { transform: translate(-2px, -3px) rotate(-1deg); }
    20% { transform: translate(-4px, 0px) rotate(1deg); }
    30% { transform: translate(0px, 3px) rotate(0deg); }
    40% { transform: translate(2px, -2px) rotate(1deg); }
    50% { transform: translate(-2px, 3px) rotate(-1deg); }
    60% { transform: translate(-4px, 2px) rotate(0deg); }
    70% { transform: translate(3px, 2px) rotate(-1deg); }
    80% { transform: translate(-2px, -2px) rotate(1deg); }
    90% { transform: translate(2px, 4px) rotate(0deg); }
    100% { transform: translate(2px, -3px) rotate(-1deg); }
  }
  </style>
</head>
<body>
  <main>
  <h1>${body}</h1>
  <p class="copyright">&copy; 2021 <a href="//nagatani.me/">Nagatani</a></p>
  </main>
</body>
</html>
`, {"headers": {"content-type": "text/html; charset=utf-8"}});

serve({
  "/": () => page("nagatani.deno.dev", "ᕕ( ᐛ )ᕗ ᕦ( ᐕ )ᕡ"),
  404: () => page("nagatani.deno.dev", "404"),
});