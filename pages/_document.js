import Document, { Head, Main, NextScript } from 'next/document'

const BaseCSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

BaseCSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='generator' content='mdx-docs' />
          <link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap" />
          <script src="https://yastatic.net/jquery/3.3.1/jquery.min.js"></script>
          <script src="../public/assets/textAnimation.js"></script>
          <BaseCSS />
        </Head>
        <body className="try">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}