import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.mjs',
      format: 'es'
    },
    plugins: [nodeResolve(), commonjs()],
    external: ['axios']
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs'
    },
    plugins: [nodeResolve(), commonjs()],
    external: ['axios']
  }
];
