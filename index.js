const axios = require('axios').default;
const apiList = require('./api.json')
const getApiList = require('./GETAPI.json')

// 目标手机号
const mobile = '15545457878'

const total = getApiList.length
const timestamp = new Date().getTime()

for (let d = 0; d < total; d++) {
  const stringItem = JSON.stringify(apiList[d]).replace('[phone]', mobile).replace('[timestamp]', timestamp)
  requestAjax(JSON.parse(stringItem))
  const stringItem2 = getApiList[d].replace('[phone]', mobile).replace('[timestamp]', timestamp)
  requestAjax({ method: 'GET', url: stringItem2 })
}

function requestAjax(decu) {
  const optionSetting = {
    method: decu.method,
    url: decu.url,
    data: decu.data,
    params: decu.data
  }
  if (decu.header) {
    optionSetting.headers = decu.header
  }
  axios(optionSetting).then(res => {
    console.log(decu.desc);
  }).catch()
}
