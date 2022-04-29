// styles
import { createApp } from '@lib/utils/createApp'
import App from '@root/App'
import '@lib/utils/chart'
import 'nprogress/nprogress.css'

// using env variables, because use ESModule
console.log('환경변수', import.meta.env)

createApp(<App />)
