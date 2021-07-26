<template>
  <div>
    <!-- <span v-if="category" class="category">{{ category.name }}</span> -->
    <div class="meta">
      <span v-if="author" class="author">
        <img src="/images/icon_author.svg" alt />
        {{ author }}
      </span>
      <span v-if="category" class="category">{{ category.name }}</span>
      <span class="timestamp">
        <img src="/images/icon_clock.svg" alt />
        <time :datetime="$dayjs(createdAt).format('YYYY-MM-DD')">
          {{ $dayjs(createdAt).format('YYYY/MM/DD') }}
        </time>
      </span>
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
    padding: 10px 0 10px;
    display: flex;
    align-items: center;
  }

  .category {
    display: inline-block;
    padding: 2px 8px;
    color: #a7b5a4;
    white-space: nowrap;
    font-size: 14px;
    margin: 0px 0 2px;
    transition: all 0.3s;
  }
  .category:hover {
    /* opacity: 0.8; */
    color: #647560;
    transition: all 0.3s;
  }

  .timestamp {
    display: inline-flex;
    align-items: center;
    color: #616269;

    margin-right: 20px;
    white-space: nowrap;

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

    img {
      margin-right: 6px;
      height: 14px;
    }
  }
}
</style>
