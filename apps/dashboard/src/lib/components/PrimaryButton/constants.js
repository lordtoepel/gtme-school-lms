export const VARIANTS = {
  CONTAINED: 'CONTAINED',
  CONTAINED_DARK: 'CONTAINED_DARK',
  CONTAINED_LIGHT: 'CONTAINED_LIGHT',
  CONTAINED_INFO: 'CONTAINED_INFO',
  CONTAINED_WHITE: 'CONTAINED_WHITE',
  CONTAINED_DANGER: 'CONTAINED_DANGER',
  CONTAINED_SUCCESS: 'CONTAINED_SUCCESS',
  OUTLINED: 'OUTLINED',
  NONE: 'NONE',
  LINK: 'LINK',
  TEXT: 'TEXT',
  TEXT_DANGER: 'TEXT_DANGER'
};

export const VARIANTS_CLASS = {
  [VARIANTS.CONTAINED]: 'border-none bg-[#39ff14] hover:bg-[#2dd10f] text-black font-bold',
  [VARIANTS.CONTAINED_DARK]:
    'border-none bg-black hover:bg-neutral-600 text-white dark:bg-white dark:text-black font-bold',
  [VARIANTS.CONTAINED_LIGHT]:
    'border-none bg-[#39ff14] hover:bg-[#2dd10f] text-black font-bold',
  [VARIANTS.CONTAINED_WHITE]:
    'border-none bg-white hover:border-black-300 hover:bg-[#39ff14] dark:hover:bg-[#2dd10f] text-black',
  [VARIANTS.CONTAINED_INFO]: 'border-none bg-gray-400 hover:bg-gray-600 text-white',
  [VARIANTS.CONTAINED_SUCCESS]: 'bg-green-700 hover:bg-green-900 text-white',
  [VARIANTS.CONTAINED_DANGER]: 'bg-red-700 hover:bg-red-900 text-white',
  [VARIANTS.OUTLINED]:
    'border border-gray-600 hover:border-[#39ff14] hover:bg-transparent hover:text-[#39ff14] text-white',
  [VARIANTS.NONE]:
    'border-none hover:border-black-300 hover:bg-gray-200 dark:hover:bg-neutral-800 text-black',
  [VARIANTS.TEXT]: 'text-white hover:text-[#39ff14] hover:underline',
  [VARIANTS.LINK]: 'text-[#39ff14] hover:underline',
  [VARIANTS.TEXT_DANGER]:
    'text-red-500 hover:border border-t-0 border-l-0 border-r-0 border-red-300'
};
