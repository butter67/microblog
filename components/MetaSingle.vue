<template>
  <div>
    <!-- <span v-if="category" class="category">{{ category.name }}</span> -->
    <div class="meta">
      <!-- <span v-if="author" class="author">
        <img src="/images/icon_author.svg" alt />
        {{ author }}
      </span> -->
      <span class="timestamp">
        <!-- <img src="/images/icon_clock.svg" alt /> -->
        <time :datetime="$dayjs(createdAt).format('YYYY-MM-DD')">
          {{ $dayjs(createdAt).format('YYYY/MM/DD') }}
        </time>
      </span>
      <span v-if="category" class="category">{{ category.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    createdAt: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
      default: undefined,
    },
    category: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
};
</script>

<style scoped>
@media (min-width: 600px) {
  .meta {
    display: flex;
    align-items: center;
  }

  .category {
    /* display: inline-block;
    padding: 2px 8px;
    color: #a7b5a4;
    white-space: nowrap;
    font-size: 14px;
    margin: 0px 0 2px;
    transition: all 0.3s;
    letter-spacing: 0.3em; */
    position: relative;
    background: #a6bda0;
    display: inline-block;
    height: 30px;
    color: #fff;
    line-height: 30px;
    letter-spacing: 0.1em;
    margin: 5px 10px;
    padding: 0 5px;
    text-decoration: none;
    font-size: 12px;
  }
  .category::before {
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid #a6bda0;
    content: '';
    display: block;
    margin-left: -15px;
    position: absolute;
    left: 0;
  }
  .category:hover {
    /* opacity: 0.8; */
    color: #647560;
    transition: all 0.3s;
  }

  .timestamp {
    display: inline-flex;
    align-items: center;
    color: #252525;
    margin-right: 20px;
    white-space: nowrap;
    font-weight: 400;
    font-size: 13px;
    letter-spacing: 0.3em;

    img {
      margin-right: 6px;
      height: 16px;
    }
  }

  .author {
    display: inline-flex;
    align-items: center;
    color: #616269;
    white-space: nowrap;

    img {
      margin-right: 6px;
      height: 16px;
    }
  }
}
@media (max-width: 600px) {
  .meta {
    padding: 4px 0 30px;
    font-size: 14px;
  }

  .category {
    display: inline-block;
    padding: 2px 8px;
    border: 1px solid #331cbf;
    color: #331cbf;
    white-space: nowrap;
    border-radius: 3px;
    font-size: 14px;
    margin: 10px 0 4px;
  }

  .timestamp {
    display: inline-flex;
    align-items: center;
    color: #616269;
    margin-right: 20px;
    white-space: nowrap;

    img {
      margin-right: 6px;
      height: 14px;
    }
  }

  .author {
    display: inline-flex;
    align-items: center;
    color: #616269;
    white-space: nowrap;
    font-weight: 400;
    letter-spacing: 1em;
    /* img {
      margin-right: 6px;
      height: 14px;
    } */
  }
}
</style>
