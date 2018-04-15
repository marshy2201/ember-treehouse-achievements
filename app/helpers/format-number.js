import { helper } from '@ember/component/helper';

export function formatNumber([number]) {
  return number.toLocaleString();
}

export default helper(formatNumber);
