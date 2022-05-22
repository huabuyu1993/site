/*
 * @Author: ypguo2 ypguo2@iflytek.com
 * @Date: 2022-05-18 11:19:04
 * @LastEditors: ypguo2 ypguo2@iflytek.com
 * @LastEditTime: 2022-05-18 11:26:52
 * @FilePath: \ui\site\.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs',
  mode: 'site',
  base: '/site/',
  publicPath: '/site/',
  // publicPath: process.env.NODE_ENV === 'production' ? '/foo/' : '/',
  // more config: https://d.umijs.org/config
});
