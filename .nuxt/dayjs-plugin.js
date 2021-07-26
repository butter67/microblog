import dayjs from 'dayjs'

import 'dayjs/locale/ja'

dayjs.locale('ja')

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
