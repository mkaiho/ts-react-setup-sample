import { merge } from 'webpack-merge'
import common from './webpack.common'

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${__dirname}/dist`,
    host: '0.0.0.0',
    port: 3000,
  },
})

export default config
