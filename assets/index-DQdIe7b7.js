var e=function(exports){function t(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}return exports.assertClassBrand=t,exports}({}),t;(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const n=`modulepreload`,r=function(e){return`/front_7th_chapter2-1/`+e},i={},a=function(e,t,a){let o=Promise.resolve();if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=e(t.map(e=>{if(e=r(e,a),e in i)return;i[e]=!0;let t=e.endsWith(`.css`),o=t?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let n=s.length-1;n>=0;n--){let r=s[n];if(r.href===e&&(!t||r.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${e}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=t?`stylesheet`:n,t||(u.as=`script`),u.crossOrigin=``,u.href=e,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),t)return new Promise((t,n)=>{u.addEventListener(`load`,t),u.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${e}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[]){if(e.status!==`rejected`)continue;s(e.reason)}return e().catch(s)})};function o({isDetailPage:e=!1,cart:t=[]}){return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          ${e?`
                <div class="flex items-center space-x-3">
                  <button
                    onclick="window.history.back()"
                    class="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
                </div>
              `:`
                <h1 class="text-xl font-bold text-gray-900">
                  <a href="/" data-link="">쇼핑몰</a>
                </h1>
              `}
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
              ${t.length>0?`
                    <span
                      class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                      >${t.length}</span
                    >
                  `:``}
            </button>
          </div>
        </div>
      </div>
    </header>
  `}function s(){return`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `}function c({children:e,isDetailPage:t=!1,cart:n=[]}){return`
    <div class="min-h-screen bg-gray-50">${o({isDetailPage:t,cart:n})} ${e} ${s()}</div>
  `}function l(e){let{productId:t,image:n,title:r,brand:i,lprice:a}=e;return`
    <div
      class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
      data-product-id="${t}"
    >
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img
          src="${n}"
          alt="${r}"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${r}</h3>
          <p class="text-xs text-gray-500 mb-2">${i}</p>
          <p class="text-lg font-bold text-gray-900">${a}원</p>
        </div>
        <!-- 장바구니 버튼 -->
        <button
          class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
            hover:bg-blue-700 transition-colors add-to-cart-btn"
          data-product-id="${t}"
          id="add-to-cart-btn"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  `}function u({productListResponse:e,categories:t}){let n=e.products,r=e.pagination,i=e.filters,a=i.category1,o=i.category2,s=e.limitOptions,c=e.sortOptions;return`
    <main class="max-w-md mx-auto px-4 py-4">
      <!-- 검색 및 필터 -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
        <!-- 검색창 -->
        <div class="mb-4">
          <div class="relative">
            <input
              type="text"
              id="search-input"
              placeholder="상품명을 검색해보세요..."
              value="${i.search}"
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- 필터 옵션 -->
        <div class="space-y-3">
          <!-- 카테고리 필터 -->
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">카테고리:</label>
              <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
            </div>
            <!-- 1depth 카테고리 -->
            <div class="flex flex-wrap gap-2">
              ${t.map(e=>`
                    <button
                      id="category-filter-btn"
                      data-category1="${e.categoryId}"
                      class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
              bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      ${e.categoryId}
                    </button>
                  `).join(`
`)}
            </div>
            <!-- 2depth 카테고리 -->
          </div>
          <!-- 기존 필터들 -->
          <div class="flex gap-2 items-center justify-between">
            <!-- 페이지당 상품 수 -->
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">개수:</label>
              <select
                id="limit-select"
                class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                ${s.map(e=>`
                <option value="${e}" ${e===r.limit?`selected`:``}>
                  ${e}개
                </option>
              `).join(`
`)}
              </select>
            </div>
            <!-- 정렬 -->
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">정렬:</label>
              <select
                id="sort-select"
                class="text-sm border border-gray-300 rounded px-2 py-1
                        focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                ${c.map(e=>`
                <option value="${e.value}" ${e.value===i.sort?`selected`:``}>
                  ${e.label}
                </option>
              `).join(`
`)}
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- 상품 목록 -->
      <div class="mb-6">
        <div>
          <!-- 상품 개수 정보 -->
          <div class="mb-4 text-sm text-gray-600">
            총 <span class="font-medium text-gray-900">${n.length}개</span>의 상품
          </div>
          <!-- 상품 그리드 -->
          <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            ${n.map(e=>l({productId:e.productId,image:e.image,title:e.title,brand:e.brand,lprice:e.lprice})).join(`
`)}
            <div id="sentinel" />
          </div>

          <div class="text-center py-4 text-sm text-gray-500">모든 상품을 확인했습니다</div>
        </div>
      </div>
    </main>
  `}const d=`
  <main class="max-w-md mx-auto px-4 py-4">
    <!-- 검색 및 필터 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색창 -->
      <div class="mb-4">
        <div class="relative">
          <input
            type="text"
            id="search-input"
            placeholder="상품명을 검색해보세요..."
            value=""
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
          </div>
          <!-- 1depth 카테고리 -->
          <div class="flex flex-wrap gap-2">
            <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
          </div>
          <!-- 2depth 카테고리 -->
        </div>
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          <!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select
              id="limit-select"
              class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="10">10개</option>
              <option value="20" selected="">20개</option>
              <option value="50">50개</option>
              <option value="100">100개</option>
            </select>
          </div>
          <!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select
              id="sort-select"
              class="text-sm border border-gray-300 rounded px-2 py-1
                         focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="price_asc" selected="">가격 낮은순</option>
              <option value="price_desc">가격 높은순</option>
              <option value="name_asc">이름순</option>
              <option value="name_desc">이름 역순</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- 상품 목록 -->
    <div class="mb-6">
      <div>
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          <!-- 로딩 스켈레톤 -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
            <div class="aspect-square bg-gray-200"></div>
            <div class="p-3">
              <div class="h-4 bg-gray-200 rounded mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
              <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
              <div class="h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
            <div class="aspect-square bg-gray-200"></div>
            <div class="p-3">
              <div class="h-4 bg-gray-200 rounded mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
              <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
              <div class="h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
            <div class="aspect-square bg-gray-200"></div>
            <div class="p-3">
              <div class="h-4 bg-gray-200 rounded mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
              <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
              <div class="h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
            <div class="aspect-square bg-gray-200"></div>
            <div class="p-3">
              <div class="h-4 bg-gray-200 rounded mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
              <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
              <div class="h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <div class="text-center py-4">
          <div class="inline-flex items-center">
            <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
          </div>
        </div>
      </div>
    </div>
  </main>
`;function f({loading:e,productListResponse:t,categories:n,cart:r=[]}){return c(e?{children:d}:{children:u({productListResponse:t,categories:n}),cart:r})}var p=class e{constructor(e){this.products=e.products.map(m.fromApi),this.filters=h.fromApi(e.filters),this.pagination=g.fromApi(e.pagination)}static fromApi(t){return new e(t)}get limitOptions(){return[10,20,50,100]}get sortOptions(){return[{value:`price_asc`,label:`가격 낮은순`},{value:`price_desc`,label:`가격 높은순`},{value:`name_asc`,label:`이름순`},{value:`name_desc`,label:`이름 역순`}]}},m=class e{constructor(e){this.productId=e.productId,this.image=e.image,this.title=e.title,this.brand=e.brand,this.lprice=e.lprice,this.category1=e.category1,this.category2=e.category2,this.category3=e.category3,this.category4=e.category4,this.hprice=e.hprice,this.maker=e.maker,this.mallName=e.mallName,this.productType=e.productType}static fromApi(t){return new e(t)}},h=class e{constructor(e){this.search=e.search,this.category1=e.category1,this.category2=e.category2,this.sort=e.sort}static fromApi(t){return new e(t)}},g=class e{constructor(e){this.page=e.page,this.limit=e.limit,this.total=e.total,this.totalPages=e.totalPages,this.hasNext=e.hasNext,this.hasPrev=e.hasPrev}static fromApi(t){return new e(t)}},_=class e{constructor(e){this.brand=e.brand,this.category1=e.category1,this.category2=e.category2,this.category3=e.category3,this.category4=e.category4,this.description=e.description,this.hprice=e.hprice,this.image=e.image,this.images=e.images,this.link=e.link,this.lprice=e.lprice,this.maker=e.maker,this.mallName=e.mallName,this.productId=e.productId,this.productType=e.productType,this.rating=e.rating,this.reviewCount=e.reviewCount,this.stock=e.stock,this.title=e.title}get categoryPath(){return[this.category1,this.category2,this.category3,this.category4].filter(Boolean)}static fromApi(t){return new e(t)}},v=t=class n{constructor(e,t=[]){this.categoryId=e,this.children=t,Object.freeze(this)}static fromApi(r){return Object.entries(r??{}).map(([r,i])=>e.assertClassBrand(t,n,y).call(n,r,i))}};function y(n,r){let i=Object.entries(r??{}).map(([n,r])=>e.assertClassBrand(t,t,y).call(t,n,r));return new t(n,i)}async function b(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`),l=await c.json();return p.fromApi(l)}async function x(e){let t=await fetch(`/api/products/${e}`),n=await t.json();return _.fromApi(n)}async function S(){let e=await fetch(`/api/categories`),t=await e.json();return v.fromApi(t)}function C({response:e}){let{image:t,title:n,description:r,lprice:i}=e,a=e.categoryPath;return`
    <main class="max-w-md mx-auto px-4 py-4">
      <!-- 브레드크럼 -->
      <nav class="mb-4">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          ${a.map((e,t)=>`
              <button class="breadcrumb-link" data-category1="${e}">${e}</button>
              ${t<a.length-1&&`
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              `}
            `)}
        </div>
      </nav>
      <!-- 상품 상세 정보 -->
      <div class="bg-white rounded-lg shadow-sm mb-6">
        <!-- 상품 이미지 -->
        <div class="p-4">
          <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img src="${t}" alt="${n}" class="w-full h-full object-cover product-detail-image" />
          </div>
          <!-- 상품 정보 -->
          <div>
            <p class="text-sm text-gray-600 mb-1"></p>
            <h1 class="text-xl font-bold text-gray-900 mb-3">${n}</h1>
            <!-- 평점 및 리뷰 -->
            <div class="flex items-center mb-3">
              <div class="flex items-center">
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
              <span class="ml-2 text-sm text-gray-600">4.0 (749개 리뷰)</span>
            </div>
            <!-- 가격 -->
            <div class="mb-4">
              <span class="text-2xl font-bold text-blue-600">${i}원</span>
            </div>
            <!-- 재고 -->
            <div class="text-sm text-gray-600 mb-4">재고 107개</div>
            <!-- 설명 -->
            <div class="text-sm text-gray-700 leading-relaxed mb-6">${r}</div>
          </div>
        </div>
        <!-- 수량 선택 및 액션 -->
        <div class="border-t border-gray-200 p-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-gray-900">수량</span>
            <div class="flex items-center">
              <button
                id="quantity-decrease"
                class="w-8 h-8 flex items-center justify-center border border-gray-300 
               rounded-l-md bg-gray-50 hover:bg-gray-100"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
              </button>
              <input
                type="number"
                id="quantity-input"
                value="1"
                min="1"
                max="107"
                class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
              focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                id="quantity-increase"
                class="w-8 h-8 flex items-center justify-center border border-gray-300 
               rounded-r-md bg-gray-50 hover:bg-gray-100"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- 액션 버튼 -->
          <button
            id="add-to-cart-btn"
            data-product-id="85067212996"
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
             hover:bg-blue-700 transition-colors font-medium"
          >
            장바구니 담기
          </button>
        </div>
      </div>
      <!-- 상품 목록으로 이동 -->
      <div class="mb-6">
        <button
          class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
        hover:bg-gray-200 transition-colors go-to-product-list"
        >
          상품 목록으로 돌아가기
        </button>
      </div>
      <!-- 관련 상품 -->
      <div class="bg-white rounded-lg shadow-sm">
        <div class="p-4 border-b border-gray-200">
          <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
          <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
        </div>
        <div class="p-4">
          <div class="grid grid-cols-2 gap-3 responsive-grid">
            <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="86940857379">
              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                <img
                  src="https://shopping-phinf.pstatic.net/main_8694085/86940857379.1.jpg"
                  alt="샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이
              </h3>
              <p class="text-sm font-bold text-blue-600">230원</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="82094468339">
              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                <img
                  src="https://shopping-phinf.pstatic.net/main_8209446/82094468339.4.jpg"
                  alt="실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제
              </h3>
              <p class="text-sm font-bold text-blue-600">280원</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  `}const w=`
  <main class="max-w-md mx-auto px-4 py-4">
    <div class="py-20 bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">상품 정보를 불러오는 중...</p>
      </div>
    </div>
  </main>
`;function T({loading:e,response:t,cart:n=[]}){return c(e?{children:w,isDetailPage:!0}:{children:C({response:t}),isDetailPage:!0,cart:n})}let E=!1,D={products:[],pagination:{page:1,limit:20,total:0,totalPages:0,hasNext:!0,hasPrev:!1},filters:{search:``,category1:``,category2:``,sort:`price_asc`}},O=null,k=[],A=[];const j=()=>a(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`}));async function M(){let e=window.location.pathname,t=document.querySelector(`#root`);if(e===`/`)t.innerHTML=`
      ${f({loading:!0,productListResponse:D,categories:A,cart:k})}
    `,A=await S(),console.log(`categories`,A),D=await b({limit:D.pagination.limit,search:D.filters.search,category1:D.filters.category1,category2:D.filters.category2,sort:D.filters.sort}),console.log(D),t.innerHTML=`
      ${f({loading:!1,productListResponse:D,categories:A,cart:k})}
    `;else if(e.startsWith(`/product/`)){let n=e.split(`/`)[2];t.innerHTML=`
      ${T({loading:!0,cart:k})}
    `;let r=await x(n);console.log(r),t.innerHTML=`
      ${T({loading:!1,response:r,cart:k})}
    `}t.addEventListener(`click`,async e=>{if(console.log(e),e.target.id===`limit-select`){let n=parseInt(e.target.value);if(n===D.pagination.limit)return;D.pagination.limit=n,D.pagination.page=1,D.pagination.hasNext=!0,D.pagination.hasPrev=!1,D.products=[],D.filters.search=``,t.innerHTML=`
        ${f({loading:!0,productListResponse:D,categories:A,cart:k})}
      `,D=await b({limit:D.pagination.limit,search:D.filters.search,category1:D.filters.category1,category2:D.filters.category2,sort:D.filters.sort}),console.log(`event`,D),t.innerHTML=`
        ${f({loading:!1,productListResponse:D,categories:A,cart:k})}
      `}else if(e.target.id===`sort-select`){let n=e.target.value;if(n===D.filters.sort)return;D.filters.sort=n,D.pagination.page=1,D.pagination.hasNext=!0,D.pagination.hasPrev=!1,D.products=[],t.innerHTML=`
        ${f({loading:!0,productListResponse:D,categories:A,cart:k})}
      `,D=await b({limit:D.pagination.limit,search:D.filters.search,category1:D.filters.category1,category2:D.filters.category2,sort:D.filters.sort}),console.log(`event`,D),t.innerHTML=`
        ${f({loading:!1,productListResponse:D,categories:A,cart:k})}
      `}else if(e.target.id===`category-filter-btn`){let n=e.target.dataset.category1,r=e.target.dataset.category2;if(n===D.filters.category1&&r===D.filters.category2)return;D.filters.category1=n,D.filters.category2=r,D.pagination.page=1,D.pagination.hasNext=!0,D.pagination.hasPrev=!1,D.products=[],t.innerHTML=`
        ${f({loading:!0,productListResponse:D,categories:A,cart:k})}
      `,D=await b({limit:D.pagination.limit,search:D.filters.search,category1:D.filters.category1,category2:D.filters.category2,sort:D.filters.sort}),t.innerHTML=`
        ${f({loading:!1,productListResponse:D,categories:A,cart:k})}
      `}else if(e.target.id===`add-to-cart-btn`){let t=e.target.dataset.productId;if(console.log(`add-to-cart-btn`,t),k.includes(t))return;k.push(t),console.log(`cart`,k)}}),t.addEventListener(`keydown`,async e=>{if(e.target.id===`search-input`&&e.key===`Enter`){let n=e.target.value;if(n===D.filters.search)return;D.filters.search=n,D.pagination.page=1,D.pagination.hasNext=!0,D.pagination.hasPrev=!1,D.products=[],t.innerHTML=`
        ${f({loading:!0,productListResponse:D,categories:A,cart:k})}
      `,D=await b({limit:D.pagination.limit,search:D.filters.search,category1:D.filters.category1,category2:D.filters.category2,sort:D.filters.sort}),t.innerHTML=`
        ${f({loading:!1,productListResponse:D,categories:A,cart:k})}
      `}}),O=document.querySelector(`#sentinel`);let n=new IntersectionObserver(async([e])=>{if(console.log(`entry`,e.isIntersecting,D.pagination.hasNext,E),!e.isIntersecting||!D.pagination.hasNext||E)return;E=!0,t.innerHTML=`
        ${f({loading:!0,productListResponse:D,categories:A,cart:k})}
      `;let n=await b({limit:D.pagination.limit,page:D.pagination.page+1,search:D.filters.search,category1:D.filters.category1,category2:D.filters.category2,sort:D.filters.sort});D.products.push(...n.products),D.pagination.page=n.pagination.page,D.pagination.total=n.pagination.total,D.pagination.totalPages=n.pagination.totalPages,D.pagination.hasNext=n.pagination.hasNext,D.pagination.hasPrev=n.pagination.hasPrev,console.log(`listResponse- IO`,n,D),t.innerHTML=`
        ${f({loading:!1,productListResponse:D,categories:A,cart:k})}
      `,E=!1},{root:null,rootMargin:`200px`,threshold:0});n.observe(O)}j().then(M);