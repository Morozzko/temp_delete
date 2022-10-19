const fs = require('fs')

export const getFiles = (entry, extensions = [], excludeExtensions = []) => {
  let fileNames = []
  const dirs = fs.readdirSync(entry)

  dirs.forEach(dir => {
    const path = `${entry}/${dir}`

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [...fileNames, ...getFiles(path, extensions, excludeExtensions)]

      return
    }

    if (
      !excludeExtensions.some(exclude => dir.endsWith(exclude)) &&
      extensions.some(ext => dir.endsWith(ext)) &&
      !path.includes('stories')
    ) {
      fileNames.push(path)
    }
  })

  return fileNames
}

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import peerDeps from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'

const extensions = ['.js', '.ts', '.jsx', '.tsx']

export default {
  input: [
    './src/index.ts',
    ...getFiles('./src/components', extensions),

  ],
  output: {
    dir: 'dist',
    format: 'esm', // cjs
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  external: ['react', 'react-dom'],
  plugins: [
    postcss({
      config: {
        path: './postcss.config.js',
      },
      plugins: [],
      extract: true,
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top',
      },
    }),
    resolve(),
    peerDeps(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    babel({ babelHelpers: 'bundled' }),
    terser(),
  ],
}
