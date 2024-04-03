import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface RandomButtonProps {
  className: string;
}

const RandomButton = ({ className }: RandomButtonProps) => {
  const isMoreTablet = useMediaQuery({
    query: `(min-width:768px)`,
  });

  return isMoreTablet ? (
    <svg
      className={className}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="44" height="44" rx="12" fill="white" />
      <path
        d="M29.0479 11.0614C28.7013 10.8702 28.3002 11.1466 28.2667 11.5998C28.242 11.93 28.2172 12.3426 28.1999 12.8234H27.6799C26.5302 12.8232 25.403 13.1618 24.4249 13.8014C23.4468 14.4409 22.6564 15.3561 22.1422 16.4443L20.9042 19.0643L19.6662 16.4443C19.1521 15.3563 18.3619 14.4413 17.384 13.8017C16.4061 13.1622 15.2793 12.8234 14.1297 12.8234H12.238C11.9097 12.8234 11.5948 12.9614 11.3626 13.2071C11.1304 13.4528 11 13.786 11 14.1334C11 14.4809 11.1304 14.8141 11.3626 15.0597C11.5948 15.3054 11.9097 15.4434 12.238 15.4434H14.1297C14.8192 15.4437 15.4949 15.647 16.0813 16.0306C16.6678 16.4142 17.1417 16.963 17.4501 17.6154L19.5201 21.9935L17.4526 26.3716C17.1439 27.0247 16.6694 27.5738 16.0822 27.9575C15.4951 28.3411 14.8186 28.5441 14.1285 28.5436H12.238C11.9097 28.5436 11.5948 28.6816 11.3626 28.9273C11.1304 29.173 11 29.5062 11 29.8536C11 30.2011 11.1304 30.5343 11.3626 30.78C11.5948 31.0256 11.9097 31.1637 12.238 31.1637H14.1297C15.2793 31.1636 16.4061 30.8248 17.384 30.1853C18.3619 29.5458 19.1521 28.6308 19.6662 27.5428L20.9042 24.9227L22.1422 27.5428C22.6563 28.6308 23.4466 29.5458 24.4244 30.1853C25.4023 30.8248 26.5291 31.1636 27.6787 31.1637H28.1999C28.2197 31.6824 28.2469 32.1226 28.2742 32.4632C28.3064 32.8876 28.6728 33.1221 29.0133 32.9348C29.4689 32.6833 30.1349 32.2903 30.9322 31.7427C31.5613 31.3118 32.171 30.8501 32.7595 30.3593C33.0666 30.1025 33.0802 29.6074 32.788 29.3611C32.1914 28.861 31.5725 28.3915 30.9335 27.9541C30.3226 27.5324 29.6934 27.1412 29.0479 26.7816C28.7013 26.5904 28.3002 26.8668 28.2667 27.3201C28.242 27.6502 28.2172 28.0628 28.1999 28.5436H27.6799C26.9901 28.5438 26.3138 28.3407 25.7269 27.9571C25.14 27.5735 24.6657 27.0245 24.3571 26.3716L22.2883 21.9935L24.3558 17.6154C24.6645 16.9624 25.139 16.4132 25.7262 16.0296C26.3133 15.6459 26.9899 15.443 27.6799 15.4434H28.2011C28.2209 15.9622 28.2482 16.4024 28.2754 16.743C28.3076 17.1674 28.6741 17.4019 29.0145 17.2146C29.4701 16.9631 30.1362 16.5701 30.9335 16.0225C31.5625 15.5915 32.1722 15.1299 32.7608 14.6391C33.0678 14.3823 33.0814 13.8871 32.7893 13.6409C32.1926 13.1409 31.5737 12.6714 30.9347 12.2339C30.3238 11.8122 29.6946 11.4209 29.0492 11.0614H29.0479Z"
        fill="#25B4B9"
      />
    </svg>
  ) : (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="36" height="36" rx="12" fill="white" />
      <path
        d="M23.7665 9.05026C23.4829 8.89377 23.1547 9.11993 23.1273 9.49078C23.1071 9.76088 23.0868 10.0985 23.0726 10.4919H22.6472C21.7065 10.4917 20.7843 10.7688 19.984 11.292C19.1838 11.8153 18.5371 12.5641 18.1164 13.4544L17.1034 15.5981L16.0905 13.4544C15.6699 12.5642 15.0233 11.8156 14.2233 11.2923C13.4232 10.7691 12.5012 10.4919 11.5607 10.4919H10.0129C9.74428 10.4919 9.48664 10.6048 9.29668 10.8058C9.10672 11.0068 9 11.2794 9 11.5637C9 11.848 9.10672 12.1206 9.29668 12.3216C9.48664 12.5226 9.74428 12.6355 10.0129 12.6355H11.5607C12.1248 12.6358 12.6777 12.8021 13.1575 13.116C13.6373 13.4298 14.025 13.8788 14.2774 14.4126L15.971 17.9947L14.2794 21.5768C14.0268 22.1111 13.6386 22.5604 13.1582 22.8743C12.6778 23.1882 12.1243 23.3542 11.5597 23.3539H10.0129C9.74428 23.3539 9.48664 23.4668 9.29668 23.6678C9.10672 23.8688 9 24.1414 9 24.4257C9 24.71 9.10672 24.9826 9.29668 25.1836C9.48664 25.3846 9.74428 25.4975 10.0129 25.4975H11.5607C12.5012 25.4975 13.4232 25.2203 14.2233 24.6971C15.0233 24.1738 15.6699 23.4252 16.0905 22.535L17.1034 20.3913L18.1164 22.535C18.537 23.4252 19.1836 24.1738 19.9836 24.6971C20.7837 25.2203 21.7056 25.4975 22.6462 25.4975H23.0726C23.0888 25.922 23.1111 26.2821 23.1334 26.5608C23.1598 26.9081 23.4596 27.0999 23.7381 26.9467C24.1109 26.7409 24.6559 26.4193 25.3082 25.9713C25.8228 25.6187 26.3217 25.241 26.8033 24.8394C27.0545 24.6294 27.0656 24.2242 26.8266 24.0227C26.3384 23.6136 25.832 23.2294 25.3092 22.8715C24.8094 22.5265 24.2946 22.2064 23.7665 21.9123C23.4829 21.7558 23.1547 21.9819 23.1273 22.3528C23.1071 22.6229 23.0868 22.9605 23.0726 23.3539H22.6472C22.0828 23.354 21.5295 23.1879 21.0493 22.874C20.5691 22.5601 20.181 22.1109 19.9285 21.5768L18.2359 17.9947L19.9275 14.4126C20.1801 13.8783 20.5683 13.429 21.0487 13.1151C21.5291 12.8012 22.0826 12.6352 22.6472 12.6355H23.0737C23.0899 13.06 23.1121 13.4201 23.1344 13.6988C23.1608 14.0461 23.4606 14.2379 23.7392 14.0847C24.1119 13.8789 24.6569 13.5573 25.3092 13.1093C25.8238 12.7567 26.3227 12.379 26.8043 11.9774C27.0555 11.7674 27.0666 11.3622 26.8276 11.1607C26.3394 10.7517 25.833 10.3675 25.3102 10.0095C24.8104 9.66453 24.2956 9.34441 23.7675 9.05026H23.7665Z"
        fill="#25B4B9"
      />
    </svg>
  );
};

export default RandomButton;