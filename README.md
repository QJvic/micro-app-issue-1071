# 仓库说明
issue: https://github.com/micro-zoe/micro-app/issues/1071 的复现仓库

1.主应用main
`npm run dev`，端口5000。

2.子应用sub-react
`npm run live-server`，端口6001，启动的是编译后的sub-react/build的内容。


主应用中  `<micro-app name={"sub-react"} iframe url="http://localhost:6001"></micro-app>`

单独访问 http://localhost:6001 时，卡片底部有padding-bottom。

访问 http://localhost:5000 时，即在微前端环境下访问，卡片底部的padding-bottom因style顺序问题被覆盖了。

