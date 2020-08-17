import { resolve } from 'path';
import { PROJECT_PATH } from '../../../config/constant'

export function getCssLoaderOption({
  hashOutput,
  sourceMap,
}: {
  hashOutput: boolean;
  sourceMap: boolean;
}) {
  const localIdentName = hashOutput ? '[hash:base64]' : '[path][name]__[local]';
  return {
    modules: {
      mode: 'local',
      context: resolve(PROJECT_PATH, 'src'),
      localIdentName,
    },
    localsConvention: 'camelCaseOnly',
    importLoaders: 0,
    sourceMap,
  };
}
