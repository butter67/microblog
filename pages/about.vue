<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <div class="hero">
        <img src="../static/IMG_6632.JPG" alt="" />
        <p class="hero-p">
          ここは家族の生活を綴った記録を残している場所です。
          <br />
          たくさん撮るけど埋もれてしまう写真たちの整理場所で、いつでも家族が見返せるように長い目で改良していけたらと思っています。
          <br />
          <br />
          このサイトの構築、管理執筆はすべてママです。<br />
          慶人が4歳になったタイミングで完成したので、それ以前の記事は色々思い出しながら書いている振り返り風になっています。
          <br />
          <br />
          それ以降はなるべく記憶がフレッシュなうちにあげています。
          <br />
          アルバムをめくるように見れるサイトがテーマです。
          <br />
          <br />
          Written by Mama.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.container {
  max-width: 1180px;
  margin: 0 auto;
}
.hero {
}
.hero img {
  width: 100%;
  height: 460px;
  object-fit: cover;
}

.hero p {
  line-height: 1.8;
  letter-spacing: 0.28em;
  font-size: 17px;
  max-width: 980px;
  margin: 0 auto;
  margin-top: 30px;
}
</style>
