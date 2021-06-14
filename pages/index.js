import Head from "next/head";

const Home = () => (
  <div className="widget center">
    <Head>
      <title>Karting Brčko</title>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <div className="blur"></div>

    <div className="text center">
      <h1 className="">Uskoro.</h1>
    </div>

    <style jsx>{`
      .blur {
        background: url("../static/hero.jpg") no-repeat center center fixed;
        background-size: cover;
        overflow: hidden;
        //filter: blur(13px);
        position: absolute;
        height: 300px;
        top: -50px;
        left: -50px;
        right: -50px;
        bottom: -50px;
      }

      .widget {
        height: 100px;
        width: 100%;
        overflow: hidden;
      }

      .center {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      .text {
        height: 200px;
        width: 340px;
      }

      .text h1 {
        text-align: center;
        text-shadow: 2px 2px 2px rgb(0 0 0 / 0.8);
        color: #ffffff;
        margin-top: 77px;
        font-weight: 700;
        font-size: 38px;
        text-shadow: 2px 2px #363636;
      }

      .text p {
        text-align: center;
        color: #ffffff;
        margin-top: 0px;
        font-weight: 400;
        font-size: 22px;
        text-shadow: 2px 2px #363636;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

        background: url("../static/hero.jpg") no-repeat center center fixed;
        background-size: cover;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
