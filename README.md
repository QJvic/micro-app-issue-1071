# 仓库说明
issue: https://github.com/micro-zoe/micro-app/issues/1071 的复现仓库

1.主应用main
`npm run dev`，端口5000。

2.子应用sub-react
`npm run live-server`，端口6001，启动的是编译后的sub-react/build的内容。


主应用中  `<micro-app name={"sub-react"} iframe url="http://localhost:6001"></micro-app>`

