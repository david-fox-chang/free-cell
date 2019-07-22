<template>
  <div class="load-process">
    <article class="prelude">
      <p>
        <span>「你各位啊！還不快點跑起來！」</span>
        <span>毫不講理的咆哮在清晨中破響，</span>
        <span>天啊！紅心女王又發怒啦～</span>
        <span>可憐的白兔先生只好四處奔走，</span>
      </p>
      <p>
        <span>通知那些還在傻傻塗玫瑰的菜鳥們。</span>
        <span>不想被女王砍掉頭顱的話，</span>
        <span>快點幫忙撲克牌士兵們集合起來吧！</span>
      </p>
    </article>
    <img src="@img/img_loading-icon.svg" alt="prelude">
    <router-link :to="{ name: 'week-2:cards-playground' }">play</router-link>
  </div>
</template>
