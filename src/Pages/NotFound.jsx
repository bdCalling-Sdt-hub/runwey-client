import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="  h-screen ">
      <div className="p-[30px]">
        <div className="flex justify-center items-center mt-[240px]">
          <div className="flex flex-col mx-auto">
            <svg
              className="mx-auto"
              width="160"
              height="150"
              viewBox="0 0 160 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_261_13761)">
                <path
                  d="M6.51057 0.573781C6.22518 1.32737 5.74357 3.33694 5.81492 3.44459C6.0468 3.82139 6.42139 3.51636 6.59976 2.8166C6.70678 2.40392 6.86732 1.82976 6.9565 1.54268C7.06353 1.2556 7.13488 0.878805 7.13488 0.699379C7.13488 0.322585 6.63543 0.232872 6.51057 0.573781Z"
                  fill="#6611E0"
                />
                <path
                  d="M1.49831 2.06385C1.42696 2.22533 1.4448 2.4227 1.53398 2.49447C1.62317 2.56624 2.19396 3.05069 2.78259 3.55309C3.95985 4.53993 4.28092 4.68347 4.28092 4.16313C4.28092 3.98371 3.76364 3.40955 3.10366 2.85333C1.74803 1.72294 1.64101 1.66911 1.49831 2.06385Z"
                  fill="#6611E0"
                />
                <path
                  d="M1.51615 6.98013C0.410243 7.06984 0.0891724 7.14161 0.0891724 7.35693C0.0891724 7.57224 0.374568 7.62606 1.65885 7.60812C3.2642 7.59018 3.94202 7.33898 3.38906 6.99807C3.24636 6.90836 3.08583 6.83659 3.03232 6.85453C2.9788 6.87248 2.30099 6.9263 1.51615 6.98013Z"
                  fill="#6611E0"
                />
                <path
                  d="M65.641 18.8393L62.1627 21.5128L49.5518 21.5307H36.923V31.1659V40.819L30.1271 46.0224C26.3812 48.8752 23.2419 51.2795 23.1527 51.3334C23.01 51.4231 28.7536 109.108 29.1817 111.836L29.2887 112.518L32.874 112.446C34.8539 112.41 53.369 112.069 74.0245 111.71C94.6622 111.351 111.572 111.028 111.59 111.01C111.59 110.992 112.499 98.6659 113.605 83.6121C115.478 58.0798 115.835 53.4685 116.049 52.7329C116.103 52.5355 114.354 51.0822 109.984 47.709L103.831 42.9721V32.5295C103.813 26.7879 103.759 21.9793 103.706 21.8178C103.599 21.5666 102.225 21.5307 89.9175 21.5307H76.2542L72.7937 18.8393C70.8852 17.3501 69.2798 16.148 69.2263 16.148C69.1728 16.148 67.5496 17.3681 65.641 18.8393ZM72.1338 19.252L74.9877 21.441L72.0981 21.4949C70.5106 21.5128 67.9063 21.5128 66.3188 21.4949L63.4292 21.441L66.2831 19.252C67.835 18.0499 69.1549 17.063 69.2085 17.063C69.262 17.0451 70.5819 18.0319 72.1338 19.252ZM103.242 41.3932L103.188 60.7173L99.0858 63.6779C92.8428 68.1635 78.68 77.9063 78.4838 77.8346C78.3768 77.7987 77.1817 76.7042 75.8082 75.3944L73.311 72.9901L72.6332 73.6001C68.7982 76.9374 66.9431 78.5343 66.7647 78.642C66.4972 78.8035 66.2831 78.6599 50.0869 68.3968L37.4582 60.3944V41.2317V22.069H70.3679H103.278L103.242 41.3932ZM36.8695 51.6204C36.8339 51.6563 33.9264 51.6563 30.4125 51.6384L24.0446 51.5846L30.4303 46.7042L36.8339 41.8059L36.8874 46.6862C36.9052 49.3597 36.9052 51.5846 36.8695 51.6204ZM109.485 48.2114C112.499 50.5439 114.997 52.4817 115.032 52.4996C115.068 52.5355 112.517 52.5535 109.36 52.5714H103.634V48.8214C103.634 45.4482 103.724 43.959 103.938 43.959C103.973 43.959 106.47 45.8609 109.485 48.2114ZM28.3255 55.2449C30.4481 56.5905 32.3389 57.7568 32.5351 57.8286C33.2664 58.1157 36.9766 60.5738 37.0479 60.825C37.0836 60.9685 42.0245 64.1264 48.0357 67.8226C61.6455 76.2197 65.6588 78.7317 65.9621 79.0188C66.1583 79.2161 63.6611 81.5307 51.6031 92.2425C43.5763 99.3836 36.709 105.466 36.3344 105.771C35.9777 106.058 34.3723 107.458 32.767 108.857C31.1795 110.257 29.8595 111.351 29.8417 111.28C29.806 111.208 28.4682 98.1456 26.845 82.2664C25.2218 66.3693 23.8662 53.1635 23.8127 52.8764C23.7057 52.2664 23.3846 52.087 28.3255 55.2449ZM115.407 53.5941C115.407 53.63 114.479 66.1898 113.356 81.5128C112.232 96.8178 111.304 109.539 111.304 109.772C111.304 110.006 111.233 110.167 111.126 110.131C110.894 110.059 79.1973 78.7317 79.1973 78.5702C79.1973 78.337 93.1995 68.3788 104.152 60.8071C113.48 54.3477 115.407 53.1276 115.407 53.5941ZM76.2898 76.4709C77.8417 77.9781 86.243 86.2855 94.9654 94.9159L110.823 110.616L109.235 110.652C101.886 110.849 38.5284 111.782 35.068 111.746L30.6443 111.692L32.7491 109.826C33.9264 108.803 35.2285 107.583 35.6744 107.117C36.1204 106.65 44.1471 99.4554 53.5117 91.13C62.8762 82.8226 71.117 75.502 71.7948 74.874C72.4905 74.264 73.1326 73.7437 73.2575 73.7437C73.3824 73.7437 74.738 74.9817 76.2898 76.4709Z"
                  fill="#6611E0"
                />
                <path
                  d="M61.0033 34.7907C58.8807 37.0514 55.3667 38.0203 51.2642 37.5179C49.4091 37.2847 49.088 37.3565 48.9453 37.9844C48.767 38.6304 49.1594 38.8995 50.5685 39.0969C55.3846 39.7966 59.3088 38.7739 62.0022 36.0825C62.9654 35.1136 63.1795 34.5574 62.7514 34.1268C62.3589 33.7321 61.806 33.9294 61.0033 34.7907Z"
                  fill="#6611E0"
                />
                <path
                  d="M77.4136 34.2703C77.3066 34.4856 77.2709 34.7906 77.3244 34.988C77.5206 35.6339 79.6076 37.3385 81.0702 38.0382C83.1572 39.061 84.9766 39.366 87.8484 39.2224C90.7558 39.0789 91.1304 38.9892 91.3801 38.4509C91.5407 38.0921 91.505 37.9665 91.2196 37.6614C90.8807 37.3205 90.7737 37.3205 89.1683 37.5179C85.0301 38.0203 81.8194 37.177 79.4649 34.97C78.2876 33.8576 77.7346 33.6602 77.4136 34.2703Z"
                  fill="#6611E0"
                />
                <path
                  d="M55.0992 42.9374C51.8171 43.8704 49.534 47.4948 50.0869 50.9039C50.4793 53.2364 52.0312 55.2998 54.1716 56.3046C55.0992 56.7352 55.4024 56.7891 57.1683 56.7891C58.9877 56.7891 59.2017 56.7532 60.165 56.2687C61.5741 55.551 63.1616 53.8106 63.6789 52.447C64.7491 49.612 64.0713 46.6515 61.8773 44.5881C60.5752 43.368 59.2909 42.8477 57.4359 42.7759C56.544 42.74 55.5808 42.8118 55.0992 42.9374ZM59.826 43.6551C63.2508 45.234 64.7848 49.5044 63.1081 52.8058C62.5195 53.99 61.1103 55.3357 59.8796 55.9099C58.8985 56.3764 58.5774 56.4302 57.0791 56.4302C55.5986 56.4302 55.2419 56.3584 54.2965 55.9278C49.6231 53.7568 49.0524 47.2077 53.2798 44.2831C55.1705 42.9733 57.8104 42.7221 59.826 43.6551Z"
                  fill="#6611E0"
                />
                <path
                  d="M55.456 44.9641C54.9744 45.1076 54.243 45.5562 53.7257 46.0227C50.2653 49.1627 52.4236 54.9043 57.097 54.9043C60.7358 54.9043 63.1973 51.1902 61.7882 47.817C61.6455 47.4402 61.146 46.7584 60.7001 46.2739C59.3623 44.8385 57.4359 44.3541 55.456 44.9641ZM60.6466 46.8122C60.7358 47.0096 60.7715 47.2787 60.7179 47.4402C60.5753 47.817 59.9688 47.9785 59.6656 47.7273C59.398 47.494 59.3088 46.8122 59.5229 46.5969C59.7547 46.3457 60.4682 46.4892 60.6466 46.8122ZM59.3088 48.6244C59.3802 48.732 59.3266 48.9294 59.2196 49.0909C58.9521 49.4139 58.4705 49.0909 58.631 48.6962C58.738 48.4091 59.1483 48.3553 59.3088 48.6244Z"
                  fill="#6611E0"
                />
                <path
                  d="M82.1404 42.9374C80.107 43.6192 78.573 44.9649 77.699 46.8309C77.1817 47.9075 77.146 48.1407 77.146 49.8812C77.146 51.6037 77.1995 51.8549 77.6633 52.8417C78.3411 54.2233 79.6967 55.5869 81.0702 56.2687C82.0512 56.7532 82.301 56.7891 84.1025 56.7891C85.8684 56.7891 86.1716 56.7352 87.0992 56.3046C88.4013 55.6766 89.8639 54.2233 90.5418 52.8417C91.0234 51.8549 91.059 51.6037 91.059 49.7915C91.059 47.9793 91.0234 47.7281 90.5596 46.7771C89.8461 45.3417 88.5618 44.0678 87.0992 43.386C86.1003 42.9015 85.6365 42.7938 84.3701 42.758C83.4425 42.7221 82.5685 42.7938 82.1404 42.9374ZM86.136 43.4039C88.0446 43.996 89.3467 45.2161 90.292 47.2795C90.631 48.0151 90.7023 48.4816 90.7023 49.8812C90.7023 51.3525 90.631 51.7293 90.2207 52.6084C89.1683 54.8692 87.01 56.3405 84.5306 56.484C81.3556 56.6635 78.6978 54.8513 77.7703 51.8728C76.1293 46.5977 80.9097 41.7711 86.136 43.4039Z"
                  fill="#6611E0"
                />
                <path
                  d="M82.5329 44.9275C79.0725 46.2193 77.8952 50.3641 80.1962 53.0913C81.1594 54.2217 82.2118 54.76 83.6388 54.8677C85.369 54.9933 86.5106 54.5626 87.67 53.3964C89.2932 51.7815 89.6499 49.6105 88.6332 47.583C88.0624 46.4167 87.4381 45.7887 86.2609 45.1787C85.3333 44.6942 83.4783 44.5686 82.5329 44.9275ZM87.5452 46.6858C88.1159 47.26 87.5095 48.1033 86.7782 47.7624C86.0825 47.4394 86.2965 46.4705 87.0457 46.4705C87.2062 46.4705 87.4203 46.5602 87.5452 46.6858ZM86.2787 48.7313C86.4214 49.1081 86.0468 49.4849 85.7793 49.2157C85.5474 48.9825 85.6901 48.4442 85.9755 48.4442C86.0825 48.4442 86.2074 48.5698 86.2787 48.7313Z"
                  fill="#6611E0"
                />
                <path
                  d="M63.8038 62.5473C63.7503 62.619 63.8573 62.9779 64.0356 63.3547C64.5173 64.2698 64.4816 64.9516 63.9465 65.741C63.447 66.4767 63.4292 66.5664 63.6789 66.5664C63.7859 66.5664 64.1248 66.1717 64.4102 65.6872C64.874 64.9336 65.1416 64.7183 66.2296 64.2339C69.3333 62.8343 72.2943 62.619 75.1482 63.5879C77.253 64.3056 78.2162 64.8439 78.466 65.4719C78.7157 66.0461 79.3222 66.692 79.4827 66.5305C79.5362 66.4767 79.3757 66.1178 79.1081 65.759C78.573 64.9516 78.5373 64.198 79.0011 63.2829C79.1795 62.9241 79.2686 62.5832 79.1795 62.5293C79.0189 62.4217 78.3054 63.7135 78.3054 64.1442C78.3054 64.4851 78.3768 64.503 76.7536 63.8032C74.7915 62.9599 73.2575 62.619 71.4916 62.619C69.7436 62.619 67.7101 63.0855 66.0156 63.875C64.6956 64.503 64.7491 64.4851 64.7491 64.1442C64.7491 63.875 64.0892 62.4396 63.9643 62.4396C63.9465 62.4396 63.8751 62.4934 63.8038 62.5473Z"
                  fill="#6611E0"
                />
                <path
                  d="M148.138 134.211C148.067 134.337 148.085 134.498 148.174 134.588C148.37 134.786 159.411 138.518 159.786 138.518C159.911 138.518 160 138.392 159.964 138.213C159.929 137.961 154.72 136.095 148.549 134.122C148.388 134.068 148.21 134.104 148.138 134.211Z"
                  fill="#6611E0"
                />
                <path
                  d="M145.552 138.05C145.552 138.373 148.406 141.064 148.655 140.974C149.084 140.831 148.869 140.472 147.532 139.18C146.194 137.87 145.552 137.494 145.552 138.05Z"
                  fill="#6611E0"
                />
                <path
                  d="M142.163 140.203C142.163 140.76 144.285 149.695 144.464 149.874C144.606 150.018 144.713 150.018 144.838 149.892C144.963 149.767 144.66 148.134 143.911 144.886C143.001 140.957 142.734 140.042 142.466 139.988C142.288 139.952 142.163 140.042 142.163 140.203Z"
                  fill="#6611E0"
                />
                <path
                  d="M37.5474 41.1781C37.5474 51.7283 37.5641 56.0346 37.5808 50.7236C37.6143 45.4126 37.6143 36.7642 37.5808 31.525C37.5641 26.2678 37.5474 30.6099 37.5474 41.1781Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M103.171 29.8739C103.171 32.5294 103.204 33.6598 103.221 32.35C103.254 31.0581 103.254 28.8692 103.221 27.5055C103.204 26.1419 103.171 27.2005 103.171 29.8739Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M77.592 35.5809C77.592 35.6168 77.8595 35.868 78.1806 36.173L78.7514 36.6934L78.2341 36.1013C77.7347 35.563 77.592 35.4374 77.592 35.5809Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M52.9409 39.4204C53.262 39.4562 53.7436 39.4562 54.0111 39.4204C54.2787 39.3845 54.0111 39.3486 53.4225 39.3486C52.8339 39.3486 52.6198 39.3845 52.9409 39.4204Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M86.4749 39.4204C86.796 39.4562 87.2776 39.4562 87.5452 39.4204C87.8127 39.3845 87.5452 39.3486 86.9565 39.3486C86.3679 39.3486 86.1539 39.3845 86.4749 39.4204Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M56.7759 43.1879C56.9364 43.2238 57.2218 43.2238 57.4002 43.1879C57.5607 43.1341 57.4181 43.0982 57.0791 43.0982C56.7402 43.0982 56.5975 43.1341 56.7759 43.1879Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M83.7993 43.1879C84.0134 43.2238 84.3344 43.2238 84.5128 43.1879C84.6733 43.1341 84.495 43.0982 84.1025 43.1162C83.7101 43.1162 83.5674 43.152 83.7993 43.1879Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M103.813 48.4994V52.393H105.561C106.542 52.393 108.789 52.4468 110.555 52.5186C112.464 52.5724 113.802 52.5544 113.802 52.4647C113.784 52.375 113.213 51.8547 112.517 51.3164C111.804 50.7781 111.304 50.4552 111.376 50.5987C111.465 50.7422 111.269 50.5808 110.965 50.2398C110.644 49.8989 110.448 49.7374 110.502 49.881C110.573 50.0245 110.448 49.9528 110.216 49.7016C109.592 49.0197 108.896 48.4815 109.075 48.8044C109.146 48.948 108.95 48.7865 108.647 48.4456C108.326 48.1047 108.129 47.9432 108.183 48.0867C108.254 48.2303 108.129 48.1406 107.897 47.8894C107.327 47.2614 104.936 45.4133 105.133 45.7542C105.222 45.8977 105.026 45.7363 104.722 45.3953C104.401 45.0544 104.205 44.893 104.259 45.0365C104.33 45.18 104.241 45.1441 104.098 44.9647C103.831 44.6418 103.813 44.9288 103.813 48.4994Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M103.171 52.661C103.171 55.3165 103.204 56.4469 103.221 55.1371C103.254 53.8453 103.254 51.6563 103.221 50.2926C103.204 48.929 103.171 49.9876 103.171 52.661Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M104.062 60.9693C96.0714 66.4956 80.3211 77.62 79.233 78.4992C79.2152 78.5171 86.3501 85.6403 95.1081 94.3066L111.037 110.078L111.162 109.36C111.465 107.674 115.282 53.8102 115.122 53.6487C114.997 53.5231 111.376 55.9095 104.062 60.9693Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M51.9064 54.0614C51.9064 54.0973 52.1739 54.3485 52.495 54.6535L53.0658 55.1738L52.5485 54.5817C52.0491 54.0434 51.9064 53.9178 51.9064 54.0614Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M115.96 54.0972C115.978 54.1869 115.96 54.3125 115.942 54.3663C115.924 54.4202 114.961 67.1594 113.802 82.6797C112.642 98.2001 111.643 110.957 111.572 111.029C111.483 111.137 46.8049 112.285 39.2063 112.303L36.5663 112.321L36.6555 113.72C36.709 114.474 36.8339 115.748 36.9409 116.537C37.0301 117.327 37.1371 118.296 37.155 118.69L37.1906 119.408H42.7202C45.7704 119.39 51.942 119.336 56.4549 119.247C60.9677 119.175 66.6221 119.085 69.0301 119.049C71.4381 119.013 76.0937 118.924 79.3757 118.87C82.6578 118.816 87.8841 118.744 90.9699 118.69C94.0557 118.637 99.0858 118.565 102.118 118.511C105.168 118.457 110.198 118.385 113.338 118.332C116.459 118.296 119.064 118.206 119.135 118.134C119.188 118.08 119.26 117.488 119.295 116.842C119.331 116.179 119.402 115.12 119.438 114.474C119.492 113.828 119.563 112.734 119.617 112.052C119.759 110.257 119.866 108.661 119.991 107.207C120.045 106.507 120.116 105.431 120.169 104.785C120.205 104.139 120.294 103.045 120.348 102.363C120.401 101.663 120.473 100.586 120.526 99.9405C120.562 99.2946 120.651 98.2001 120.705 97.5183C120.758 96.8185 120.829 95.7419 120.883 95.096C120.919 94.4501 121.008 93.3556 121.061 92.6738C121.115 91.974 121.186 90.8974 121.24 90.2515C121.275 89.6056 121.365 88.5111 121.418 87.8293C121.472 87.1295 121.543 86.0529 121.596 85.407C121.632 84.7611 121.721 83.6666 121.775 82.9848C121.828 82.285 121.9 81.2084 121.953 80.5625C121.989 79.9166 122.078 78.8221 122.132 78.1403C122.185 77.4405 122.256 76.3639 122.31 75.718C122.346 75.0721 122.435 73.9776 122.488 73.2958C122.542 72.596 122.613 71.5194 122.667 70.8735C122.702 70.2276 122.774 69.1331 122.827 68.4513C122.881 67.7515 122.952 66.6929 122.97 66.1008C123.006 65.4907 123.059 64.9345 123.113 64.8448C123.166 64.7551 123.22 64.1989 123.237 63.6068C123.255 63.0147 123.291 61.9022 123.344 61.1486C123.398 60.0362 123.344 59.7132 123.113 59.5338C122.881 59.3364 122.845 59.3364 122.97 59.5697C123.059 59.7132 122.934 59.6415 122.702 59.3903C122.078 58.7084 121.382 58.1702 121.561 58.4931C121.632 58.6367 121.472 58.5111 121.186 58.2061C120.544 57.4883 117.423 55.084 117.619 55.4429C117.708 55.5864 117.512 55.4249 117.208 55.084C116.887 54.7431 116.691 54.5816 116.745 54.7252C116.816 54.8687 116.656 54.7431 116.406 54.4561C116.156 54.151 115.942 53.9895 115.96 54.0972Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M89.0792 54.9411L88.5619 55.5332L89.1505 55.0129C89.4538 54.7078 89.7213 54.4566 89.7213 54.4208C89.7213 54.2772 89.5786 54.4028 89.0792 54.9411Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M31.9643 58.2776C31.786 58.457 31.5006 58.6544 31.3222 58.7262C31.0011 58.8518 31.019 59.3721 31.4114 62.6197C31.5897 64.1089 31.6611 64.7728 31.8216 66.7465C31.8751 67.4821 31.9822 68.3793 32.0357 68.7202C32.107 69.0611 32.1784 69.6353 32.1962 69.9762C32.3211 71.5192 32.4994 73.4032 32.66 74.7309C32.8562 76.3278 32.9097 76.9738 33.0702 78.9475C33.1238 79.6831 33.2308 80.5802 33.2843 80.9211C33.3556 81.262 33.427 81.8362 33.4448 82.1771C33.5518 83.6843 33.7481 85.6041 33.8908 86.9319C33.9978 87.7214 34.1048 88.8697 34.1583 89.4797C34.194 90.0719 34.3188 91.2561 34.4259 92.0814C34.6221 93.6424 34.6756 94.1448 34.854 96.3518C34.9253 97.0874 35.0502 98.3434 35.1394 99.1329C35.2464 99.9223 35.3534 100.981 35.3891 101.465C35.6388 104.731 35.7993 105.861 36.0312 105.861C36.2274 105.861 66.0156 79.3781 66.0156 79.1986C66.0335 79.0551 61.4136 76.1663 47.5898 67.6436C41.7391 64.0372 36.9052 60.969 36.8696 60.8254C36.7982 60.5384 32.8384 57.9546 32.4816 57.9546C32.3746 57.9546 32.1427 58.0982 31.9643 58.2776Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M71.0457 63.1039C71.3133 63.1398 71.7057 63.1398 71.9376 63.1039C72.1517 63.0681 71.9376 63.0322 71.4382 63.0322C70.9566 63.0322 70.7603 63.0681 71.0457 63.1039Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M72.0981 74.7303C64.7313 81.1537 35.8707 107.009 35.942 107.117C35.9955 107.206 36.0847 107.87 36.1204 108.588C36.1739 109.306 36.2631 110.185 36.3344 110.526C36.388 110.867 36.4236 111.297 36.4058 111.477C36.3701 111.782 36.6198 111.8 41.4181 111.692C44.2007 111.62 60.8606 111.351 78.466 111.064C96.0535 110.777 110.484 110.526 110.502 110.49C110.537 110.454 103.456 103.403 94.7514 94.826C73.2932 73.6358 73.3824 73.7434 73.2932 73.7434C73.2575 73.7434 72.7224 74.192 72.0981 74.7303Z"
                  fill="#E0CFF9"
                />
                <path
                  d="M19.3534 1.31132C18.1583 1.724 17.5519 2.1008 16.8027 2.96204C15.8217 4.09242 15.4471 5.25869 15.5541 6.89147C15.6611 8.36276 16.0892 9.36754 17.0524 10.3006C18.1583 11.3771 19.1394 11.7539 20.8696 11.7539C22.2074 11.7539 22.4928 11.7001 23.3311 11.2156C27.2018 9.08046 26.9521 3.39266 22.9387 1.5984C21.8685 1.1319 20.2988 1.0063 19.3534 1.31132Z"
                  fill="#F7F3FD"
                />
                <path
                  d="M6.84951 5.20425C5.86847 5.59899 5.5474 7.15999 6.29656 7.84181C6.86735 8.36215 7.29544 8.4698 7.97326 8.23655C8.56189 8.03918 9.097 7.32148 9.097 6.72937C9.097 6.15521 8.56189 5.41956 8.00893 5.22219C7.34896 4.98894 7.34896 4.98894 6.84951 5.20425Z"
                  fill="#F7F3FD"
                />
                <path
                  d="M10.5775 15.3409C9.88186 15.6459 9.63214 16.0944 9.63214 17.0095C9.63214 18.9294 12.5039 19.2882 13.0034 17.4581C13.2531 16.543 12.8607 15.6818 12.058 15.3409C11.3088 15.0179 11.291 15.0179 10.5775 15.3409Z"
                  fill="#F7F3FD"
                />
                <path
                  d="M37.6366 41.2144V60.3771L46.4125 65.9393C60.7001 75.0003 65.8908 78.2479 66.301 78.4453C66.6578 78.6247 67.0324 78.3376 70.0112 75.7359L73.3111 72.8292L75.9331 75.3233L78.5374 77.8352L80.1606 76.7048C81.0524 76.0948 84.7626 73.529 88.3835 71.017C92.0223 68.523 96.8384 65.1498 99.0859 63.517L103.188 60.5744V41.3221V22.0697H70.4214H37.6366V41.2144ZM62.8228 34.0374C63.3222 34.5039 63.1974 35.0422 62.3768 35.9034C59.7013 38.7204 55.9554 39.8508 51.1037 39.3125C49.6589 39.151 49.2665 39.0434 49.0168 38.7383C48.6065 38.2359 48.6065 37.9489 49.0703 37.4823C49.32 37.2312 49.5697 37.1414 49.8194 37.2132C50.0335 37.285 51.2642 37.3747 52.5307 37.4285C56.3479 37.6079 58.6845 36.8544 60.8428 34.791C62.0201 33.6606 62.3055 33.5529 62.8228 34.0374ZM79.5184 34.8268C80.8562 36.0828 82.301 36.8544 84.1204 37.2312C85.4582 37.5182 88.1516 37.5541 89.7213 37.3209C90.8629 37.1594 91.505 37.4285 91.505 38.0924C91.4872 38.9895 90.9521 39.2048 88.0268 39.4022C83.8885 39.6713 80.0892 38.3436 77.8774 35.8675C77.1639 35.078 77.0212 34.2347 77.5563 33.9297C78.0914 33.6068 78.3233 33.7144 79.5184 34.8268ZM60.0223 43.206C62.252 44.2646 63.786 46.2742 64.2319 48.6965C64.767 51.6929 62.912 55.102 59.9867 56.4835C59.077 56.9142 58.738 56.968 57.0792 56.968C55.3133 56.968 55.1349 56.9321 54.0112 56.3579C52.5485 55.6223 51.1751 54.2228 50.5151 52.8053C50.087 51.8723 50.0335 51.5673 50.0335 49.791C50.0335 47.9967 50.0691 47.7276 50.5329 46.7945C51.4961 44.8209 53.4225 43.206 55.4025 42.7036C56.6868 42.3807 58.738 42.6139 60.0223 43.206ZM86.1717 42.8651C88.2587 43.529 89.864 45.0003 90.8272 47.1355C91.1483 47.8352 91.2375 48.3376 91.2375 49.791C91.2375 51.4417 91.184 51.6749 90.6845 52.7515C89.864 54.456 88.883 55.4967 87.2598 56.2862C85.9577 56.9321 85.8328 56.968 84.1204 56.968C82.4616 56.968 82.2118 56.9142 81.1238 56.3938C76.0045 53.9536 75.4337 46.9381 80.1071 43.7981C80.7135 43.3855 81.2486 43.0625 81.32 43.0625C81.3735 43.0445 81.8373 42.9369 82.3189 42.7934C83.5853 42.4524 84.8696 42.4704 86.1717 42.8651ZM64.6778 63.4453C64.8384 63.8759 65.0168 64.2347 65.0524 64.2347C65.0881 64.2347 65.4984 64.0374 65.9621 63.8041C68.1561 62.6917 71.0992 62.2072 73.4181 62.602C74.417 62.7814 76.272 63.4273 77.8774 64.163C77.9844 64.2168 78.2163 63.8938 78.3768 63.4453C78.5374 63.0146 78.8049 62.5481 78.9298 62.4405C79.34 62.0996 79.4471 62.6558 79.126 63.3197C78.6801 64.163 78.7514 65.1857 79.3044 65.8316C79.7146 66.334 79.7325 66.4058 79.4471 66.5134C79.233 66.5852 79.019 66.4776 78.7157 66.1008C78.5017 65.8137 78.3055 65.4728 78.3055 65.3651C78.3055 65.078 76.8428 64.3244 75.184 63.7503C74.2921 63.4273 73.4002 63.2838 72.0625 63.212C69.815 63.1044 68.3702 63.3914 66.301 64.3603C65.1594 64.8986 64.8562 65.1319 64.5173 65.7419C64.2676 66.2084 63.9644 66.4955 63.7146 66.5314C63.2152 66.6032 63.2152 66.5493 63.7681 65.7419C64.3033 64.9524 64.3389 64.1809 63.8752 63.3017C63.6611 62.8532 63.6076 62.584 63.7325 62.4584C64 62.1893 64.3211 62.5122 64.6778 63.4453Z"
                  fill="#F7F3FD"
                />
                <path
                  d="M54.903 43.5835C52.3523 44.5883 50.8718 46.5261 50.5507 49.2354C50.1583 52.5548 52.6912 55.7844 56.0981 56.3227C58.1851 56.6457 60.0401 56.0536 61.6098 54.5464C63.0368 53.2007 63.5719 51.873 63.5898 49.7916C63.5898 48.428 63.5184 48.0153 63.1082 47.172C62.5909 46.0237 61.5742 44.8215 60.6288 44.2115C59.0948 43.2426 56.5084 42.9555 54.903 43.5835ZM59.291 45.0189C63.1617 46.9208 63.34 52.3753 59.5764 54.4387C56.99 55.8562 53.7614 54.8335 52.4593 52.1959C51.9956 51.2629 51.9064 50.8682 51.9064 49.8096C51.9064 48.2844 52.281 47.3873 53.3334 46.239C54.0647 45.4316 54.903 44.9292 55.9197 44.66C56.7759 44.4268 58.4348 44.6062 59.291 45.0189Z"
                  fill="#F7F3FD"
                />
                <path
                  d="M59.5764 47.1007C59.5764 47.6569 60.0401 47.8722 60.3969 47.5133C60.7536 47.1545 60.5217 46.6521 60.0044 46.6521C59.6655 46.6521 59.5764 46.7418 59.5764 47.1007Z"
                  fill="#F7F3FD"
                />
                <path
                  d="M58.7202 48.8225C58.7559 48.9302 58.8629 49.002 58.9521 49.002C59.0413 49.002 59.1483 48.9302 59.184 48.8225C59.2196 48.7149 59.1126 48.6252 58.9521 48.6252C58.7915 48.6252 58.6845 48.7149 58.7202 48.8225Z"
                  fill="#F7F3FD"
                />
                <path
                  d="M82.0691 43.493C80.3924 44.0492 78.8228 45.4847 78.0736 47.1533C77.5028 48.4452 77.4493 50.7418 77.9487 52.0875C79.6076 56.5014 85.1372 57.8112 88.6332 54.6354C89.0078 54.2945 89.5786 53.505 89.9175 52.8949C90.5062 51.8184 90.524 51.6748 90.524 49.8806C90.524 48.2119 90.4705 47.871 90.0424 46.9739C89.4359 45.6641 88.1873 44.4081 86.903 43.816C85.6544 43.2418 83.3178 43.0983 82.0691 43.493ZM86.1895 44.9823C87.2955 45.4847 88.2408 46.3638 88.7938 47.4404C89.1862 48.2119 89.2754 48.5887 89.2754 49.7909C89.2754 50.993 89.1862 51.3698 88.7938 52.1414C87.456 54.6892 84.5128 55.7658 82.0513 54.6174C78.8941 53.1461 77.8952 49.4679 79.9108 46.6868C81.32 44.7311 83.9777 44.0134 86.1895 44.9823Z"
                  fill="#F7F3FD"
                />
                <path
                  d="M86.5819 46.9032C86.4035 47.3697 86.6533 47.7645 87.0814 47.6927C87.3846 47.6568 87.4916 47.5133 87.4916 47.1903C87.4916 46.8673 87.3846 46.7238 87.0814 46.6879C86.8495 46.652 86.6354 46.7417 86.5819 46.9032Z"
                  fill="#F7F3FD"
                />
                <path
                  d="M85.7971 48.8949C85.7971 49.0385 85.8863 49.1641 85.9755 49.1641C86.0825 49.1641 86.1539 49.0385 86.1539 48.8949C86.1539 48.7514 86.0825 48.6258 85.9755 48.6258C85.8863 48.6258 85.7971 48.7514 85.7971 48.8949Z"
                  fill="#F7F3FD"
                />
                <path
                  d="M136.544 112.213C132.673 113.164 130.087 117.021 130.729 120.879C131.336 124.468 134.172 127.105 137.703 127.338C142.234 127.661 145.909 124.216 145.909 119.695C145.909 117.452 145.142 115.694 143.501 114.133C141.592 112.32 139.023 111.603 136.544 112.213Z"
                  fill="#F7F3FD"
                />
                <path
                  d="M125.378 134.803C123.345 135.898 122.792 138.733 124.272 140.509C126.323 142.967 130.337 141.801 130.836 138.607C131.3 135.683 128.036 133.404 125.378 134.803Z"
                  fill="#F7F3FD"
                />
              </g>
              <defs>
                <clipPath id="clip0_261_13761">
                  <rect width="160" height="150" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-4xl text-center">404 Page Not Found</p>
            <button
              className="mt-5 text-xl font-bold text-primary"
              onClick={(e) => navigate("/")}
            >
              Go Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
