import Document, { Html, Head, Main, NextScript } from "next/document";
export default class HtmlDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
